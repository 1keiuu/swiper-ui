import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./index.scss";
import UserCardsList from "./components/user-cards-list/UserCardsList";
import ButtonGroup from "./components/button-group/ButtonGroup";
import MediaQuery from "react-responsive";
import { CurrentCardProvider } from "./store/CurrentCard";
import { UserStoreProvider } from "./store/User";
import { getUsers } from "./lib/fetch";
import { UserStore } from "./store/User";
const App = () => {
  const { state, dispatch } = useContext(UserStore);

  return (
    <div className="container">
      <div className="inner">
        <UserCardsList userLists={state.users} />
        <ButtonGroup />
      </div>
    </div>
  );
};

render(
  <CurrentCardProvider>
    <UserStoreProvider>
      <App />
    </UserStoreProvider>
  </CurrentCardProvider>,
  document.getElementById("app")
);
