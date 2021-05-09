import React, { useEffect, useState } from "react";
import "./ButtonGroup.scss";
import Button from "../button/Button";
import { BUTTON_TYPE_OPTIONS } from "../../constants/button";
type ButtonGroupProps = { isEmpty: boolean };
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <div className="button__group">
      {BUTTON_TYPE_OPTIONS.map((type: ButtonTypeOption, i: number) => {
        return (
          <Button
            buttonType={type}
            key={`button${i}`}
            isEmpty={props.isEmpty}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
