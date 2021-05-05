import React, { useEffect, useState } from "react";
import "./UserCard.scss";

type UserCardProps = {
  user: UserCard;
  currentCardIndex: number;
  index: number;
};

const UserCard: React.FC<UserCardProps> = (props) => {
  const user = props.user;
  const currentCardIndex = props.currentCardIndex;
  const index = props.index;

  let activeClassText: string = "";

  const generateActiveClassText = (text: string): string => {
    if (currentCardIndex == index) activeClassText = text += "--active --top";
    else if (currentCardIndex + 1 == index)
      activeClassText = text += "--active --next";
    return text;
  };

  return (
    <div
      key={user.id}
      className={["user-card", generateActiveClassText(activeClassText)].join(
        " "
      )}
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
