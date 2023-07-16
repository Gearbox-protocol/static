import React from "react";

import { IconProps } from "../core/icon";

export const IconVoteUp = ({ style, onClick, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3 10C19.3 15.1362 15.1362 19.3 10 19.3C4.86375 19.3 0.7 15.1362 0.7 10C0.7 4.86375 4.86375 0.7 10 0.7C15.1362 0.7 19.3 4.86375 19.3 10Z"
      stroke="#FF5050"
      strokeWidth="1.4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5L6 9H9V14H11V9H14L10 5Z"
      fill="white"
    />
  </svg>
);
