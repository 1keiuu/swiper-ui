import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./index.scss";
import UserCardsList from "./components/user-cards-list/UserCardsList";
import ButtonGroup from "./components/button-group/ButtonGroup";
import MediaQuery from "react-responsive";
import { CurrentUserCardProvider } from "./store/CurrentUserCard";
import { UserCardsStoreProvider } from "./store/UserCards";
import { getUsers } from "./lib/fetch";
import { UserCardsStore } from "./store/UserCards";
const App = () => {
  const { state, dispatch } = useContext(UserCardsStore);

  return (
    <div className="container">
      <div className="inner">
        <UserCardsList userLists={state.userCards} />
        <ButtonGroup />
      </div>
    </div>
  );
};

render(
  <CurrentUserCardProvider>
    <UserCardsStoreProvider>
      <App />
    </UserCardsStoreProvider>
  </CurrentUserCardProvider>,
  document.getElementById("app")
);
