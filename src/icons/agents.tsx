import type { ReactElement } from "react";

import type { IconProps } from "../core/icon";

export function IconAgents({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 14.5C10.5 14.87 10.4 15.2 10.22 15.5C9.88 14.91 9.24 14.5 8.5 14.5C7.76 14.5 7.12 14.91 6.78 15.5C6.61 15.2 6.5 14.87 6.5 14.5C6.5 13.4 7.4 12.5 8.5 12.5C9.6 12.5 10.5 13.4 10.5 14.5ZM23 14V17C23 17.55 22.55 18 22 18H21V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V18H2C1.45 18 1 17.55 1 17V14C1 13.45 1.45 13 2 13H3C3 9.13 6.13 6 10 6H11V4.73C10.4 4.39 10 3.74 10 3C10 1.9 10.9 1 12 1C13.1 1 14 1.9 14 3C14 3.74 13.6 4.39 13 4.73V6H14C17.87 6 21 9.13 21 13H22C22.55 13 23 13.45 23 14ZM21 15H19V13C19 10.24 16.76 8 14 8H10C7.24 8 5 10.24 5 13V15H3V16H5V19H19V16H21V15ZM15.5 12.5C14.4 12.5 13.5 13.4 13.5 14.5C13.5 14.87 13.61 15.2 13.78 15.5C14.12 14.91 14.76 14.5 15.5 14.5C16.24 14.5 16.88 14.91 17.22 15.5C17.4 15.2 17.5 14.87 17.5 14.5C17.5 13.4 16.61 12.5 15.5 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
