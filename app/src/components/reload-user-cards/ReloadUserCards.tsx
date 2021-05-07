import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { CurrentUserCardStore } from "../../store/CurrentUserCard";
import { getUsers } from "../../lib/fetch";
import { UserCardsStore } from "../../store/UserCards";
import emptyImg from "../../../assets/empty.jpg";

const ReloadUserCards: React.FC = () => {
  const { state, dispatch } = useContext(UserCardsStore);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_STATUS", incomingPageStatus: "reloading" });

    getUsers(state.paginationIndex)
      .then((res) => {
        if (!res.data) {
          dispatch({ type: "RESET_CARDS" });
          dispatch({ type: "SET_PAGE_STATUS", incomingPageStatus: "empty" });
          return;
        }
        dispatch({ type: "APPEND_CARDS", incomingCards: res.data });
        dispatch({ type: "INCREMENT_PAGINATION_INDEX" });
      })
      .catch((e) => {
        throw Error(e);
      });
  }, []);
  if (state.pageStatus == "reloading")
    return (
      <div className="reload-user__container">
        <p>取得中...</p>
      </div>
    );
  else if (state.pageStatus == "empty")
    return (
      <div className="empty-user__container">
        <p>スワイプできるカードがありません。</p>
        <p>時間を置いてから再度お試しください。</p>
        <img src={emptyImg} />
      </div>
    );
};

export default ReloadUserCards;
