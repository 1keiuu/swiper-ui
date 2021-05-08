import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import "./index.scss";
import UserCardsList from "./components/user-cards-list/UserCardsList";
import ButtonGroup from "./components/button-group/ButtonGroup";
import { CurrentUserCardProvider } from "./context/CurrentUserCardContext";
import { UserCardsProvider } from "./context/UserCardsContext";
import { useUserCardsState } from "./context/UserCardsContext";
const App = () => {
  const userCardsState = useUserCardsState();
  return (
    <div className="container">
      <div className="inner">
        <UserCardsList userLists={userCardsState.userCards} />
        <ButtonGroup isEmpty={userCardsState.pageStatus == "empty"} />
      </div>
    </div>
  );
};

render(
  <CurrentUserCardProvider>
    <UserCardsProvider>
      <App />
    </UserCardsProvider>
  </CurrentUserCardProvider>,
  document.getElementById("app")
);
