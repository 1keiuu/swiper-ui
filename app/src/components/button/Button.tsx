import React, { useEffect, useState } from "react";
import "./Button.scss";

type ButtonProps = {
  iconName: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="button">
      <img src={`../../assets/${props.iconName}.png`} />
    </button>
  );
};

export default Button;
