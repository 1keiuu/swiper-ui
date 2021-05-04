import React, { useEffect, useState } from "react";
import UserCard from "../user-card/UserCard"
import "./UserCardsList.scss"
const UserCardsList = (props) => {
  return (
    <div className="user-cards__list">
      {props.currentUser.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserCardsList;
