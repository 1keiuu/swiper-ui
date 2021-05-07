import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { CurrentCardStore } from "../../store/CurrentCard";
import { getUsers } from "../../lib/fetch";
import { UserStore } from "../../store/User";

const ReloadUserCards: React.FC = () => {
  const { state, dispatch } = useContext(UserStore);
  const [status, setStatus] = useState("reloading");

  useEffect(() => {
    getUsers()
      .then((res) => {
        if (res.data.length == 0) setStatus("empty");
        console.log(res.data);
        dispatch({ type: "APPEND_USERS", incomingUsers: res.data });
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
