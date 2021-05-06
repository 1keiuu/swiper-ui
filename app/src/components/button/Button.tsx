import React, { useContext, useState } from "react";
import "./Button.scss";
import { CurrentCardStore } from "../../store/CurrentCard";
import { BUTTON_TYPES, STATUS_BUTTON_TYPES } from "../../constants/button";
type ButtonProps = {
  buttonType: string;
};

const handleClick = (
  buttonType: string,
  dispatch: ({ type: string }) => {},
  currentFlipState?: boolean
) => {
  if (STATUS_BUTTON_TYPES.includes(buttonType)) {
    dispatch({ type: "INCREMENT_INDEX" });
    dispatch({ type: "CHANGE_STATUS", status: buttonType });
    dispatch({ type: "SET_IS_FLIPPED", isFlipped: true });
  } else if (buttonType == BUTTON_TYPES.PROFILE.name) {
    dispatch({ type: "TOGGLE_IS_FLIPPED" });
  }
};

const Button: React.FC<ButtonProps> = (props) => {
  const { state, dispatch } = useContext(CurrentCardStore);
  switch (props.buttonType) {
    case BUTTON_TYPES.LIKE.name:
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.buttonType, dispatch);
          }}
        >
          <img src={`../../assets/heart.png`} />
        </button>
      );
    case BUTTON_TYPES.NOPE.name:
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.buttonType, dispatch);
          }}
        >
          <img src={`../../assets/close.png`} />
        </button>
      );
    case BUTTON_TYPES.PROFILE.name:
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.buttonType, dispatch, state.isFlipped);
          }}
        >
          <img src={`../../assets/user.png`} />
        </button>
      );
  }
};

export default Button;
