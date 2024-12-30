import React from "react";

import type { IconProps } from "../core/icon";

export function IconChartsArrow({
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 1426">
        <g id="Group 1465">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8285 4.94293H10.276L12.1017 6.76866L8.30313 10.4828L5.0304 7.28284L0.200684 12.0052L1.13284 12.9586L5.0304 9.14763L8.30313 12.3476L13.0446 7.71152L14.8285 9.49542V4.94293Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
}
