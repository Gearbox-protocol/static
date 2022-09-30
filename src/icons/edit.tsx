import React from "react";

import { IconProps } from "../core/icon";

export function IconEdit({
  size = 24,
  style,
  onClick,
}: IconProps): React.ReactElement {
  return (
    <svg
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
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
