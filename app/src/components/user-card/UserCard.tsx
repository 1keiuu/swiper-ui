import React, { useContext, useEffect, useState } from "react";
import "./UserCard.scss";
import { CurrentCardStore } from "../../store/CurrentCard";

type UserCardProps = {
  user: UserCard;
  currentCardIndex: number;
  index: number;
};

const UserCard: React.FC<UserCardProps> = (props) => {
  const user = props.user;
  const currentCardIndex = props.currentCardIndex;
  const index = props.index;
  const { state, dispatch } = useContext(CurrentCardStore);

  let activeClassText: string = "";

  const userCardClass = (text: string): string[] => {
    const isCurrent = currentCardIndex == index;
    const isPrev = currentCardIndex - 1 == index;

    text += "user-card ";
    if (isCurrent) activeClassText = text += "--current ";
    else if (currentCardIndex + 1 == index) activeClassText = text += "--next ";
    else if (isPrev) {
      activeClassText = text += "--prev ";
      if (state.status == "like") activeClassText = text += "--like ";
      if (state.status == "nope") activeClassText = text += "--nope ";
    }
    return text.split(" ");
  };

  const userCardInnerClass = () => {
    if (state.isFlipped) return "--flipped";
    else return "";
  };

  return (
    <div
      key={user.id}
      className={userCardClass(activeClassText).join(" ")}
      onClick={() => {
        dispatch({ type: "TOGGLE_IS_FLIPPED" });
      }}
    >
      <div className={["user-card__inner", userCardInnerClass()].join(" ")}>
        <div className="user-card__item user-card__front">
          <img
            src={user.imageURL}
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
