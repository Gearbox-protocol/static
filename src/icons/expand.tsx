import React from "react";

import { IconProps } from "../core/icon";

export const IconExpand = ({ style, onClick, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    style={style}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 306 306"
  >
    <g fill="#ffffff" transform="rotate(180,153,153)" id="g836">
      <g fill="#ffffff" id="expand-less">
        <polygon
          fill="#ffffff"
          id="polygon833"
          points="0,211.65 35.7,247.35 153,130.05 270.3,247.35 306,211.65 153,58.65 "
        />
      </g>
    </g>
  </svg>
);
