import React from "react";

import { IconProps } from "../core/icon";

export const IconGraph = ({
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
    viewBox="0 0 100 100"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill="#ffffff"
      id="path71"
      d="M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.666C10,86.999,13.001,90,16.667,90h66.666  C86.999,90,90,86.999,90,83.333V16.667C90,13.001,86.999,10,83.333,10z M80,60H70l-5-10L50,76.667L36.667,43.333L30,60H20v-6.667  h5.488l11.179-30L51.016,61.26l14.329-25.472l8.776,17.545H80V60z"
    />
  </svg>
);
