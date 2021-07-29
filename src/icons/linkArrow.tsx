import React from "react";
import { IconProps } from "../core/icon";

export const IconLinkArrow = ({ size, style, onClick }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    style={style}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-external-link"
  >
    <path d="M15 3H21V9" />
    <path d="M10 14L21 3" />
  </svg>
);
