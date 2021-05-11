import React from "react";
import UserCard from "../user-card/UserCard";
import "./UserCardsList.scss";
import { useCurrentUserCardState } from "../../context/CurrentUserCardContext";
import ReloadUserCards from "../reload-user-cards/ReloadUserCards";

type UserCardsListProps = {
  userLists: UserCard[];
};

const UserCardsList: React.FC<UserCardsListProps> = (props) => {
  const currentUserCardState = useCurrentUserCardState();
  const { userLists } = props;

  if (userLists.length <= currentUserCardState.index) {
    return <ReloadUserCards />;
  }
  return (
    <div className="user-cards__list">
      {userLists.map((user, i) => (
        <UserCard
          user={user}
          index={i}
          currentCardIndex={currentUserCardState.index}
          key={`user-card__${user.id}`}
        />
      ))}
    </div>
  );
};

export default UserCardsList;
