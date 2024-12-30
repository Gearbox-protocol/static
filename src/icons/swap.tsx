import React from "react";

import type { IconProps } from "../core/icon";

export const IconSwap = ({
  style,
  onClick,
  size = 24,
  className,
}: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10V13H14V18H8V21L2 15.5L8 10ZM22 8.5L16 3V6H10V11H16V14L22 8.5Z"
      fill="currentColor"
    />
  </svg>
);
