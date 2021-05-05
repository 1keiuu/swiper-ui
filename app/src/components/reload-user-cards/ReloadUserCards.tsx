import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { CurrentCardStore } from "../../store/CurrentCard";
import fetch from "../../lib/fetch";
import { UserStore } from "../../store/User";

const ReloadUserCards: React.FC = () => {
  const { userState, dispatch } = useContext(UserStore);
  // const { state } = useContext(CurrentCardStore);

  useEffect(() => {
    fetch((res) => {
      dispatch({ type: "APPEND_USERS", incomingUsers: res });
    });
  }, []);
  return <div>empty</div>;
};

export default ReloadUserCards;
