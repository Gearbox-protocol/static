import React from "react";

import { IconProps } from "../core/icon";

export const IconCrossCircle = ({ style, onClick, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" />
    <path
      d="M8 8L12 12M16 16L12 12M12 12L16 8M12 12L8 16"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
