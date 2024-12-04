import React from "react";

import { IconProps } from "@gearbox-protocol/static/src/core/icon";

export const IconTwitter = ({
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M14.393 2.98909H16.7357L11.6176 8.83874L17.6386 16.7988H12.9242L9.2317 11.9711L5.00664 16.7988H2.66253L8.13684 10.5419L2.36084 2.98909H7.19494L10.5326 7.40182L14.393 2.98909ZM13.5708 15.3966H14.8689L6.48959 4.31765H5.09658L13.5708 15.3966Z"
    />
  </svg>
);
