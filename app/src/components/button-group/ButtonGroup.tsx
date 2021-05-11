import React from "react";
import "./ButtonGroup.scss";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { BUTTON_TYPE_OPTIONS } from "../../constants/BUTTON";

type ButtonGroupProps = { isEmpty: boolean };
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => (
  <div className="button__group">
    {BUTTON_TYPE_OPTIONS.map((type: ButtonTypeOption) => (
      <Button
        buttonType={type}
        key={`button-${type}`}
        isEmpty={props.isEmpty}
      />
    ))}
  </div>
);

ButtonGroup.propTypes = {
  isEmpty: PropTypes.bool,
};
ButtonGroup.defaultProps = {
  isEmpty: false,
};

export default ButtonGroup;
