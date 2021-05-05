import React, { useContext, useState } from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { store } from "../../store";

type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props) => {
  const { state } = useContext(store);
  return (
    <div className="user-cards__list">
      {props.userLists.map((user, i) => (
        <UserCard
          user={user}
          index={i}
          currentCardIndex={state.currentCardIndex}
        />
      ))}
    </div>
  );
};

export default UserCardsList;
