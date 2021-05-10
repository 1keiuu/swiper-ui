import React, { useContext, useState } from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { useCurrentUserCardState } from "../../context/CurrentUserCardContext";
import ReloadUserCards from "../reload-user-cards/ReloadUserCards";
type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props, i) => {
  const currentUserCardState = useCurrentUserCardState();

  if (props.userLists.length <= currentUserCardState.index) {
    return <ReloadUserCards />;
  } else {
    return (
      <div className="user-cards__list">
        {props.userLists.map((user, i) => (
          <UserCard
            user={user}
            index={i}
            currentCardIndex={currentUserCardState.index}
            key={`user-card-${i}`}
          />
        ))}
      </div>
    );
  }
};

export default UserCardsList;
