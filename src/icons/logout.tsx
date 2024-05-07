import React from "react";

import { IconProps } from "../core/icon";

export function IconLogout({
  size = 24,
  style,
  onClick,
  className,
}: IconProps): React.ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      onClick={onClick}
      viewBox={"0 0 24 24"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );
}
