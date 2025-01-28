import React from "react";

import type { IconProps } from "../core/icon";

export const SuccessCircle = ({
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
    <circle cx="12" cy="12" r="12" fill="#92FFB0" />
    <path
      d="M7 13L9.64645 15.6464C9.84171 15.8417 10.1583 15.8417 10.3536 15.6464L17 9"
      stroke="#171D2D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
