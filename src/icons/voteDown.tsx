import React from "react";

import { IconProps } from "../core/icon";

export const IconVoteDown = ({ style, onClick, size = 24 }: IconProps) => (
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
      d="M0.700002 10C0.700001 4.86375 4.86375 0.7 10 0.7C15.1362 0.699999 19.3 4.86375 19.3 10C19.3 15.1362 15.1362 19.3 10 19.3C4.86375 19.3 0.700002 15.1362 0.700002 10Z"
      strokeWidth="1.4"
      stroke="#FF5050"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 15L14 11L11 11L11 6L9 6L9 11L6 11L10 15Z"
      fill="white"
    />
  </svg>
);
