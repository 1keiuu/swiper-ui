import React, { useContext, useState } from "react";
import "./Button.scss";
import { useCurrentUserCardDispatchContext } from "../../context/CurrentUserCardContext";
import { BUTTON_TYPES, STATUS_BUTTON_TYPES } from "../../constants/BUTTON";
import likeImg from "../../../assets/heart.png";
import nopeImg from "../../../assets/close.png";
import profileImg from "../../../assets/user.png";

type ButtonProps = {
  buttonType: ButtonTypeOption;
  isEmpty: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const currentUserCardDispatcher = useCurrentUserCardDispatchContext();
  const handleClick = (buttonType: ButtonTypeOption) => {
    if (STATUS_BUTTON_TYPES.includes(buttonType)) {
      currentUserCardDispatcher.incrementIndex();
      // NOTE: STATUS_BUTTON_TYPESに含まれるbuttonTypeなので、CardStatusへtypeを変更
      currentUserCardDispatcher.changeStatus(buttonType as CardStatus);
      currentUserCardDispatcher.setIsFlipped(false);
    } else if (buttonType == BUTTON_TYPES.PROFILE.name) {
      currentUserCardDispatcher.toggleIsFlipped();
    }
  };
  switch (props.buttonType) {
    case BUTTON_TYPES.LIKE.name:
      return (
        <button
          className="button --like"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={likeImg} alt="button icon" />
        </button>
      );
    case BUTTON_TYPES.NOPE.name:
      return (
        <button
          className="button --nope"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={nopeImg} alt="button icon" />
        </button>
      );
    case BUTTON_TYPES.PROFILE.name:
      return (
        <button
          className="button --profile"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={profileImg} alt="button icon" />
        </button>
      );
  }
};

export default Button;
