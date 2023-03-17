import React from "react";

import { IconProps } from "../core/icon";

export const IconTiles = ({ style, onClick, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8889 4V9.33333H20V4M12.8889 20H20V11.1111H12.8889M4 20H11.1111V14.6667H4M4 12.8889H11.1111V4H4V12.8889Z"
      fill="white"
    />
  </svg>
);
