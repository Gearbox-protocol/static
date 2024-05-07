import React from "react";
import { Settings } from "react-feather";

import { IconProps } from "../core/icon";

export const IconPending = ({ size, style, onClick, className }: IconProps) => (
  <Settings
    className={className}
    size={size}
    onClick={onClick}
    style={{
      animationDuration: "3s",
      animationName: "spin",
      animationIterationCount: "infinite",
      animationDelay: "0",
      animationTimingFunction: "linear",
      ...style,
    }}
  />
);
