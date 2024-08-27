import React from "react";

import { IconProps } from "../core/icon";

export const IconLayer = ({
  style,
  onClick,
  size = 18,
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
    <g clipPath="url(#clip0_88_421)">
      <path
        d="M12.626 17.248L19.996 11.508L21.626 12.778L12.626 19.778L3.62598 12.778L5.24598 11.518L12.626 17.248ZM12.626 14.708L3.62598 7.70801L12.626 0.708008L21.626 7.70801L12.626 14.708ZM12.626 3.23801L6.88598 7.70801L12.626 12.178L18.366 7.70801L12.626 3.23801ZM12.626 22.178L19.996 16.438L21.626 17.708L12.626 24.708L3.62598 17.708L5.24598 16.448L12.626 22.178Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_88_421">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.625977 0.708008)"
        />
      </clipPath>
    </defs>
  </svg>
);
