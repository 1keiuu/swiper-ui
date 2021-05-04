import React, { useEffect, useState } from "react";
import UserCard from "../user-card/UserCard"
import "./UserCardsList.scss"

type UserCardsListProps = {
  userLists: UserCard[]
}

const UserCardsList:React.FC<UserCardsListProps> = (props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  return (
    <div className="user-cards__list">
      {props.userLists.map((user,i) => (
        <UserCard user={user} index={i} currentCardIndex={ currentCardIndex}/>
      ))}
    </div>
  );
};

export default UserCardsList;
