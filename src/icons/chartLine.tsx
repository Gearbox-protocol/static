import React from "react";

import type { IconProps } from "../core/icon";

export const IconChartLine = ({
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
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 12.28L20.74 4.95L22.47 5.95L17.24 15L10.73 11.25L5.96 19.5H22.5V21.5H2.5V3.5H4.5V18.04L10 8.5L16.5 12.28Z"
      fill="currentColor"
    />
  </svg>
);
