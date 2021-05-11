import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import { getUsers } from "../../lib/fetch";
import {
  useUserCardsState,
  useUserCardsDispatch,
} from "../../context/UserCardsContext";
import emptyImg from "../../../assets/empty.jpg";
import { PAGE_STATUS } from "../../constants/PAGE";

const ReloadUserCards: React.FC = () => {
  const userCardsState = useUserCardsState();
  const UserCardsDispatcher = useUserCardsDispatch();

  useEffect(() => {
    UserCardsDispatcher.setPageStatus("reloading");

    getUsers(userCardsState.paginationIndex)
      .then((res) => {
        if (!res.data) {
          UserCardsDispatcher.resetCards();
          UserCardsDispatcher.setPageStatus("empty");
          return;
        }
        UserCardsDispatcher.appendCards(res.data);
        UserCardsDispatcher.incrementPaginationIndex();
      })
      .catch((e) => {
        throw Error(e);
      });
  }, []);
  if (userCardsState.pageStatus == PAGE_STATUS.RELOADING.name) {
    return (
      <div className="reload-user__container">
        <p>取得中...</p>
      </div>
    );
  }
  if (userCardsState.pageStatus == PAGE_STATUS.EMPTY.name) {
    return (
      <div className="empty-user__container">
        <p>スワイプできるカードがありません。</p>
        <p>時間を置いてから再度お試しください。</p>
        <img src={emptyImg} alt="empty image" />
      </div>
    );
  }
};

export default ReloadUserCards;
