import React from "react";
import "./UserCard.scss";
import {
  useCurrentUserCardState,
  useCurrentUserCardDispatch,
} from "../../context/CurrentUserCardContext";

type UserCardProps = {
  user: UserCard;
  currentCardIndex: number;
  index: number;
};

const UserCard: React.FC<UserCardProps> = (props) => {
  const { user } = props;
  const { currentCardIndex } = props;
  const { index } = props;

  const currentUserCardState = useCurrentUserCardState();
  const currentUserCardDispatcher = useCurrentUserCardDispatch();

  let activeClassText = "";

  // NOTE: スワイプ判定用
  let moveX: number;
  let startX: number;
  // NOTE: 最低スワイプ量
  const dist = 70;

  const userCardClass = (text: string): string[] => {
    // NOTE: カードの状態(current / next / prev /like / nope)の判定をしてclassを適用する
    const isCurrent = currentCardIndex === index;
    const isPrev = currentCardIndex - 1 === index;

    let classText = text;

    classText += "user-card";
    if (isCurrent) activeClassText = `${classText} --current`;
    else if (currentCardIndex + 1 === index) {
      activeClassText = `${classText} --next`;
    } else if (isPrev) {
      activeClassText = `${classText} --prev`;
      if (currentUserCardState.status === "like") {
        activeClassText = `${classText} --like`;
      }
      if (currentUserCardState.status === "nope") {
        activeClassText = `${classText} --nope`;
      }
    }
    return classText.split(" ");
  };

  const userCardInnerClass = () => {
    // NOTE: flipしている状態かどうか
    if (currentUserCardState.isFlipped) return "--flipped";
    return "";
  };

  return (
    <div
      role="button"
      tabIndex={0}
      key={user.id}
      className={userCardClass(activeClassText).join(" ")}
      onClick={() => {
        currentUserCardDispatcher.toggleIsFlipped();
      }}
      onKeyDown={() => {
        currentUserCardDispatcher.toggleIsFlipped();
      }}
      onTouchStart={(e) => {
        startX = e.touches[0].pageX;
      }}
      onTouchMove={(e) => {
        moveX = e.changedTouches[0].pageX;
      }}
      onTouchEnd={() => {
        const isLeftSwipe = startX > moveX && startX > moveX + dist;
        const isRightSwipe = startX < moveX && startX + dist < moveX;

        if (isLeftSwipe) {
          // HACK: like/nope後の状態管理系処理を共通化したい
          currentUserCardDispatcher.incrementIndex();
          currentUserCardDispatcher.changeStatus("nope");
          currentUserCardDispatcher.setIsFlipped(false);
        } else if (isRightSwipe) {
          currentUserCardDispatcher.incrementIndex();
          currentUserCardDispatcher.changeStatus("like");
          currentUserCardDispatcher.setIsFlipped(false);
        }
      }}
    >
      <div className={["user-card__inner", userCardInnerClass()].join(" ")}>
        <div className="user-card__item user-card__front">
          <div className="user-card__status-budge --like">
            <p>LIKE</p>
          </div>
          <div className="user-card__status-budge --nope">
            <p>NOPE</p>
          </div>
          <img
            src={user.imgURL}
            width={330}
            height={330}
            alt="user"
            className="user-card__img"
          />
          <div className="user-card__info">
            <p className="name-text">
              {user.name}
              <span>,</span>
            </p>
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
