import React, { useContext, useState } from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { CurrentUserCardStore } from "../../store/CurrentUserCard";
import ReloadUserCards from "../reload-user-cards/ReloadUserCards";
type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props, i) => {
  const { state } = useContext(CurrentUserCardStore);
  if (props.userLists.length <= state.index) {
    return <ReloadUserCards />;
  } else {
    return (
      <div className="user-cards__list">
        {props.userLists.map((user, i) => (
          <UserCard
            user={user}
            index={i}
            currentCardIndex={state.index}
            key={`user-card-${i}`}
          />
        ))}
      </div>
    );
  }
};

export default UserCardsList;
