import React from "react";

import { ReactComponent as CheckSVG } from "./badge-check.svg";
import { ReactComponent as DeleteSVG } from "./trash.svg";

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

export const TodoIcon = ({ type, color = "gray", onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};
