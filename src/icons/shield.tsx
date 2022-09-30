import React from "react";
import { IconProps } from "../core/icon";

export const IconShield = ({ style, onClick, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 16L3 12L4.41 10.59L7 13.17L13.59 6.58L15 8L7 16ZM9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0Z"
      fill="#58637F"
    />
  </svg>
);
