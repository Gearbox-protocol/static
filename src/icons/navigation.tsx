import React from "react";
import { IconProps } from "../core/icon";

export const IconNavigation = ({ size, style, onClick }: IconProps) => (
  <svg
    style={style}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="#ffffff"
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>
);
