import React, { useContext, useState } from "react";
import "./UserCard.scss";
import { currentCardStore } from "../../store/currentCard";

type UserCardProps = {
  user: UserCard;
  currentCardIndex: number;
  index: number;
};

const UserCard: React.FC<UserCardProps> = (props) => {
  const user = props.user;
  const currentCardIndex = props.currentCardIndex;
  const index = props.index;
  const { state, dispatch } = useContext(currentCardStore);

  let activeClassText: string = "";

  const generateActiveClassText = (text: string): string[] => {
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

  return (
    <div
      key={user.id}
      className={generateActiveClassText(activeClassText).join(" ")}
    >
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
  );
};

export default UserCard;
