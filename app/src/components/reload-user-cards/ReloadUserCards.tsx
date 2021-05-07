import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { CurrentUserCardStore } from "../../store/CurrentUserCard";
import { getUsers } from "../../lib/fetch";
import { UserCardsStore } from "../../store/UserCards";

const ReloadUserCards: React.FC = () => {
  const { state, dispatch } = useContext(UserCardsStore);
  const [status, setStatus] = useState("reloading");

  useEffect(() => {
    getUsers()
      .then((res) => {
        if (res.data.length == 0) setStatus("empty");
        dispatch({ type: "APPEND_CARDS", incomingCards: res.data });
      })
      .catch((e) => {
        throw Error(e);
      });
  }, []);
  if (status == "reloading")
    return <div className="reload-user__container">取得中...</div>;
  else if (status == "empty")
    return <div className="reload-user__container">empty</div>;
};

export default ReloadUserCards;
