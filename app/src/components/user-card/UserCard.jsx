import React, { useEffect, useState } from "react";
import "./UserCard.scss"
const UserCard = (props) => {
    const user = props.user
    const isActive = props.isActive
    return (
        <div key={user.id} className={["user-card", isActive ? '--active':''].join(' ')}>
          <img
            src={user.imageURL}
            width={260}
            height={260}
            className="user-card__img"
          />
          <div className="user-card__info">
            <p>{user.name},</p>
            <p>{user.age}</p>
          </div>
        </div>
  );
};

export default UserCard;
