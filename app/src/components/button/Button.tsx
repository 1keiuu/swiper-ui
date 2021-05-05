import React, { useContext, useState } from "react";
import "./Button.scss";
import { CurrentCardStore } from "../../store/CurrentCard";

type ButtonProps = {
  status: string;
};

const handleClick = (status: string, dispatch: ({ type: string }) => {}) => {
  dispatch({ type: "INCREMENT_INDEX" });
  dispatch({ type: "CHANGE_STATUS", status: status });
};

const Button: React.FC<ButtonProps> = (props) => {
  const { state, dispatch } = useContext(CurrentCardStore);
  switch (props.status) {
    case "like":
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.status, dispatch);
          }}
        >
          <img src={`../../assets/heart.png`} />
        </button>
      );
    case "nope":
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.status, dispatch);
          }}
        >
          <img src={`../../assets/close.png`} />
        </button>
      );
  }
};

export default Button;
