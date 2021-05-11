import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import { useCurrentUserCardDispatch } from "../../context/CurrentUserCardContext";
import { BUTTON_TYPES, STATUS_BUTTON_TYPES } from "../../constants/BUTTON";
import likeImg from "../../../assets/heart.png";
import nopeImg from "../../../assets/close.png";
import profileImg from "../../../assets/user.png";

type ButtonProps = {
  buttonType: ButtonTypeOption;
  isEmpty: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const currentUserCardDispatcher = useCurrentUserCardDispatch();
  const handleClick = (buttonType: ButtonTypeOption) => {
    if (STATUS_BUTTON_TYPES.includes(buttonType)) {
      currentUserCardDispatcher.incrementIndex();
      // NOTE: STATUS_BUTTON_TYPESに含まれるbuttonTypeなので、CardStatusへtypeを変更
      currentUserCardDispatcher.changeStatus(buttonType as CardStatus);
      currentUserCardDispatcher.setIsFlipped(false);
    } else if (buttonType === BUTTON_TYPES.PROFILE.name) {
      currentUserCardDispatcher.toggleIsFlipped();
    }
  };
  switch (props.buttonType) {
    case BUTTON_TYPES.LIKE.name:
      return (
        <button
          type="button"
          className="button --like"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={likeImg as string} alt="button icon" />
        </button>
      );
    case BUTTON_TYPES.NOPE.name:
      return (
        <button
          type="button"
          className="button --nope"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={nopeImg as string} alt="button icon" />
        </button>
      );
    case BUTTON_TYPES.PROFILE.name:
      return (
        <button
          type="button"
          className="button --profile"
          onClick={() => {
            handleClick(props.buttonType);
          }}
          disabled={props.isEmpty}
        >
          <img src={profileImg as string} alt="button icon" />
        </button>
      );
    default:
      return <></>;
  }
};

// HACK: UNION型をprop-typesで使う方法。ユーザー定義型(この場合はButtonTypeOption)でvalidationはできない？
// 参考https://stackoverflow.com/questions/62562974/how-to-use-typescript-union-type-in-react-proptypes
Button.propTypes = {
  buttonType: PropTypes.oneOf(["nope", "profile", "like", ""] as const),
  isEmpty: PropTypes.bool,
};

Button.defaultProps = {
  buttonType: "",
  isEmpty: false,
};

export default Button;
