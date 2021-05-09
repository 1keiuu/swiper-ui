import React, { useContext, useEffect, useState } from "react";
import "./ReloadUserCards.scss";
import {
  useUserCardsState,
  useUserCardsDispatch,
} from "../../../src/context/UserCardsContext";
import emptyImg from "../../../assets/empty.jpg";
import { PAGE_STATUS } from "../../../src/constants/PAGE";

const ReloadUserCards: React.FC = () => {
  const userCardsState = useUserCardsState();
  const UserCardsDispatcher = useUserCardsDispatch();

  useEffect(() => {
    UserCardsDispatcher.setPageStatus("reloading");
    const users = [
      {
        Id: 0,
        Name: "Roberson Russell",
        ImgURL: "https://placekitten.com/g/758/594",
        Age: 24,
        Profile:
          "Excepteur ullamco Lorem deserunt velit nostrud consectetur ad consectetur et mollit nulla. Culpa elit aliqua sint commodo cupidatat deserunt mollit cillum nisi ad laboris eu. Mollit tempor amet ex cupidatat laborum sunt voluptate ullamco.\r\n",
      },
      {
        Id: 1,
        Name: "Irene Chandler",
        ImgURL: "https://placekitten.com/g/677/592",
        Age: 28,
        Profile:
          "Et aliquip minim elit tempor exercitation qui pariatur nisi cillum ex nulla elit reprehenderit anim. Labore dolore occaecat ipsum sint eiusmod. Officia ut laborum consequat enim adipisicing dolore sunt qui amet elit consequat. Eiusmod commodo adipisicing est dolore aliqua in officia anim cupidatat sunt laboris.\r\n",
      },
      {
        Id: 2,
        Name: "Goodman Wilkinson",
        ImgURL: "https://placekitten.com/g/456/564",
        Age: 39,
        Profile:
          "Aliquip nulla in magna tempor sint nostrud anim velit ipsum aliqua veniam consequat ipsum excepteur. Ut commodo ad Lorem sunt. Aliquip cillum aute in in tempor consectetur officia quis adipisicing nisi. Quis irure aliqua nisi duis officia laboris cupidatat enim ipsum culpa deserunt veniam consequat. Quis laborum reprehenderit tempor deserunt consectetur ex aliquip anim in dolore sit nulla incididunt.\r\n",
      },
    ];
    const getUsers = () => {
      return new Promise((resolve, reject) => {
        resolve({ res: { data: users } });
      });
    };
    getUsers()
      .then((res: { data: UserCard[] }) => {
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
  if (userCardsState.pageStatus == PAGE_STATUS.RELOADING.name)
    return (
      <div className="reload-user__container">
        <p>取得中...</p>
      </div>
    );
  else if (userCardsState.pageStatus == PAGE_STATUS.EMPTY.name)
    return (
      <div className="empty-user__container">
        <p>スワイプできるカードがありません。</p>
        <p>時間を置いてから再度お試しください。</p>
        <img src={emptyImg} />
      </div>
    );
};

export default ReloadUserCards;
