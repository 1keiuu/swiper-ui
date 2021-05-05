import React, { useEffect, useState } from "react";
import "./ButtonGroup.scss";
import Button from "../button/Button";

const ButtonGroup: React.FC = () => {
  const icons = [{ name: "close" }, { name: "heart" }];
  return (
    <div className="button__group">
      {icons.map((icon) => {
        return <Button iconName={icon.name} />;
      })}
    </div>
  );
};

export default ButtonGroup;
