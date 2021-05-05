import React, { useContext, useState } from "react";
import "./Button.scss";
import { store } from "../../store";

type ButtonProps = {
  type: string;
};

const handleClick = (type: string, dispatch: ({ type: string }) => {}) => {
  dispatch({ type: "INCREMENT" });
};

const Button: React.FC<ButtonProps> = (props) => {
  const { state, dispatch } = useContext(store);
  switch (props.type) {
    case "like":
      return (
        <button
          className="button"
          onClick={() => {
            handleClick(props.type, dispatch);
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
            handleClick(props.type, dispatch);
          }}
        >
          <img src={`../../assets/close.png`} />
        </button>
      );
  }
};

export default Button;
