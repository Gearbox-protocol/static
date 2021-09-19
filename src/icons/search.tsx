import React from "react";
import { IconProps } from "../core/icon";

export const IconSearch = ({ size, style }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    style={style}
    viewBox="0 0 20 20"
    fill="#ffffff"
  >
    <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
  </svg>
);
