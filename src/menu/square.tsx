import React from "react";
import {IconProps} from "../core/icon";

export const IconSquare =  ({size, style}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-square"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  </svg>
);
