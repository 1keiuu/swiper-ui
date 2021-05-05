import React, { useContext, useState } from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { CurrentCardStore } from "../../store/CurrentCard";
import ReloadUserCards from "../reload-user-cards/ReloadUserCards";
type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props) => {
  const { state } = useContext(CurrentCardStore);
  if (props.userLists.length <= state.index) {
    return <ReloadUserCards />;
  } else {
    return (
      <div className="user-cards__list">
        {props.userLists.map((user, i) => (
          <UserCard user={user} index={i} currentCardIndex={state.index} />
        ))}
      </div>
    );
  }
};

export default UserCardsList;
