import React, { useContext, useEffect, useState } from "react";
import "./UserCard.scss";
import {
  useCurrentUserCardStateContext,
  useCurrentUserCardDispatchContext,
} from "../../context/CurrentUserCardContext";

type UserCardProps = {
  user: UserCard;
  currentCardIndex: number;
  index: number;
};

const UserCard: React.FC<UserCardProps> = (props) => {
  const user = props.user;
  const currentCardIndex = props.currentCardIndex;
  const index = props.index;

  const currentUserCardState = useCurrentUserCardStateContext();
  const currentUserCardDispatcher = useCurrentUserCardDispatchContext();

  let activeClassText: string = "";

  // NOTE: スワイプ判定用
  let moveX;
  let startX;
  // NOTE: 最低スワイプ量
  const dist = 70;

  const userCardClass = (text: string): string[] => {
    // NOTE: カードの状態(current / next / prev /like / nope)の判定をしてclassを適用する
    const isCurrent = currentCardIndex == index;
    const isPrev = currentCardIndex - 1 == index;

    text += "user-card ";
    if (isCurrent) activeClassText = text += "--current ";
    else if (currentCardIndex + 1 == index) activeClassText = text += "--next ";
    else if (isPrev) {
      activeClassText = text += "--prev ";
      if (currentUserCardState.status == "like")
        activeClassText = text += "--like ";
      if (currentUserCardState.status == "nope")
        activeClassText = text += "--nope ";
    }
    return text.split(" ");
  };

  const userCardInnerClass = () => {
    // NOTE: flipしている状態かどうか
    if (currentUserCardState.isFlipped) return "--flipped";
    else return "";
  };

  return (
    <div
      key={user.id}
      className={userCardClass(activeClassText).join(" ")}
      onClick={() => {
        currentUserCardDispatcher.toggleIsFlipped();
      }}
      onTouchStart={(e) => {
        startX = e.touches[0].pageX;
      }}
      onTouchMove={(e) => {
        moveX = e.changedTouches[0].pageX;
      }}
      onTouchEnd={(e) => {
        const isLeftSwipe = startX > moveX && startX > moveX + dist;
        const isRightSwipe = startX < moveX && startX + dist < moveX;

        if (isLeftSwipe) {
          // FIXME: like/nope後の状態管理系処理を共通化したい
          currentUserCardDispatcher.incrementIndex();
          currentUserCardDispatcher.changeStatus("nope");
          currentUserCardDispatcher.setIsFlipped(false);
        } else if (isRightSwipe) {
          currentUserCardDispatcher.incrementIndex();
          currentUserCardDispatcher.changeStatus("like");
          currentUserCardDispatcher.setIsFlipped(false);
        }
        moveX;
        startX;
      }}
    >
      <div className={["user-card__inner", userCardInnerClass()].join(" ")}>
        <div className="user-card__item user-card__front">
          <div className="user-card__status --like">
            <p>LIKE</p>
          </div>
          <div className="user-card__status --nope">
            <p>NOPE</p>
          </div>
          <img
            src={user.imgURL}
            width={330}
            height={330}
            className="user-card__img"
          />
          <div className="user-card__info">
            <p className="name-text">{user.name},</p>
            <p className="age-text">{user.age}</p>
          </div>
        </div>
        <div className="user-card__item user-card__back">
          <p>{user.profile}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
