import React, { useEffect, useState } from "react";
import "./ButtonGroup.scss";
import Button from "../button/Button";

const ButtonGroup: React.FC = () => {
  const icons = [{ status: "nope" }, { status: "like" }];
  return (
    <div className="button__group">
      {icons.map((icon) => {
        return <Button status={icon.status} />;
      })}
    </div>
  );
};

export default ButtonGroup;
