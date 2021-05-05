import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./index.scss";
import UserCardsList from "./components/user-cards-list/UserCardsList";
import ButtonGroup from "./components/button-group/ButtonGroup";
import MediaQuery from "react-responsive";
import { StateProvider } from "./store";
const App = () => {
  const [userLists, serUserLists] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:8888");
      serUserLists([...res.data]);
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <UserCardsList userLists={userLists} />
        <ButtonGroup />
      </div>
    </div>
  );
};

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("app")
);
