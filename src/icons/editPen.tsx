import React from "react";

import { IconProps } from "../core/icon";

export function IconEditPen({
  size = 24,
  style,
  onClick,
, className}: IconProps): React.ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      onClick={onClick}
      viewBox={"0 0 12 12"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7807 3.0314C12.0731 2.73895 12.0731 2.25152 11.7807 1.97407L10.0259 0.219341C9.74848 -0.0731136 9.26105 -0.0731136 8.9686 0.219341L7.58881 1.59163L10.4009 4.40369M0 9.18794V12H2.81206L9.606 5.19856L6.79394 2.3865L0 9.18794Z"
        fill="currentColor"
      />
    </svg>
  );
}
