import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { CurrentCardStore } from "../../store/CurrentCard";
import fetch from "../../lib/fetch";
import { UserStore } from "../../store/User";

const ReloadUserCards: React.FC = () => {
  const { state, dispatch } = useContext(UserStore);
  const [status, setStatus] = useState("reloading");

  useEffect(() => {
    fetch((res) => {
      if (res.length == 0) setStatus("empty");
      dispatch({ type: "APPEND_USERS", incomingUsers: res });
    });
  }, []);
  if (status == "reloading") return <div>取得中...</div>;
  else if (status == "empty") return <div>empty</div>;
};

export default ReloadUserCards;
