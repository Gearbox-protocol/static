import React from "react";

import { IconProps } from "../core/icon";

export const IconFarm = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0995 1.81006L12.2695 4.64006C11.4995 5.42006 11.4995 6.69006 12.2695 7.47006L13.6795 8.88006L9.12953 13.4301L6.30953 10.6001L4.88953 12.0001C-0.0604742 17.0001 3.49953 20.5001 3.49953 20.5001C3.49953 20.5001 6.99953 24.0001 11.9995 19.0901L13.4095 17.6801L10.6095 14.8801L15.1495 10.3401L16.5395 11.7301C17.3195 12.5001 18.5895 12.5001 19.3695 11.7301L22.1995 8.90006L15.0995 1.81006ZM17.9295 10.2801L16.5495 8.90006L15.1095 7.46006L13.7095 6.06006L15.1195 4.65006L19.3495 8.88006L17.9295 10.2801Z"
      fill="currentColor"
    />
  </svg>
);
