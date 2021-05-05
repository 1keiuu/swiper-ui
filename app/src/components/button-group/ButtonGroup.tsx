import React, { useEffect, useState } from "react";
import "./ButtonGroup.scss";
import Button from "../button/Button";

const ButtonGroup: React.FC = () => {
  const icons = [{ type: "nope" }, { type: "like" }];
  return (
    <div className="button__group">
      {icons.map((icon) => {
        return <Button type={icon.type} />;
      })}
    </div>
  );
};

export default ButtonGroup;
