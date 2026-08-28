import type { ReactElement } from "react";

import type { IconProps } from "../core/icon";

export function IconCopy({
  size = 24,
  style,
  onClick,
  className,
}: IconProps): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="1"
        width="10"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M3 5H2C1.44772 5 1 5.44772 1 6V14C1 14.5523 1.44772 15 2 15H10C10.5523 15 11 14.5523 11 14V13"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
