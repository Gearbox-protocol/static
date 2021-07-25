import React from "react";
import {IconProps} from "../core/icon";

export const IconCheck =  ({size, style}: IconProps) => (
  <svg
    width={size || 24}
    height={size || 24}
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check-square"
    style={style}
  >
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
