import React from "react";

import { IconProps } from "../core/icon";

export function IconLighting({
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
      viewBox="0 0 17 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0L0 11H6.5L3 21L17 11H10.5L14 0Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
