import React, { useEffect, useState } from "react";
import "./ButtonGroup.scss";
import Button from "../button/Button";
import { BUTTON_TYPE_OPTIONS } from "../../constants/button";
const ButtonGroup: React.FC = () => {
  return (
    <div className="button__group">
      {BUTTON_TYPE_OPTIONS.map((type, i) => {
        return <Button buttonType={type} key={`button${i}`} />;
      })}
    </div>
  );
};

export default ButtonGroup;
