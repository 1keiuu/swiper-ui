import React, { useEffect, useState } from "react";
import UserCard from "../user-card/UserCard"
import "./UserCardsList.scss"
const UserCardsList = (props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  return (
    <div className="user-cards__list">
      {props.currentUser.map((user,i) => (
        <UserCard user={user} isActive={ i == currentCardIndex}/>
      ))}
    </div>
  );
};

export default UserCardsList;
