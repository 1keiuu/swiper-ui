import React, { useContext, useState } from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { currentCardStore } from "../../store/currentCard";

type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props) => {
  const { state } = useContext(currentCardStore);
  return (
    <div className="user-cards__list">
      {props.userLists.map((user, i) => (
        <UserCard user={user} index={i} currentCardIndex={state.index} />
      ))}
    </div>
  );
};

export default UserCardsList;
