import React from "react";

import { IconProps } from "../core/icon";

export const IconLinkArrow = ({
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
    xmlns="http://www.w3.org/2000/svg"
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
