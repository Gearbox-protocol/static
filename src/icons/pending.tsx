import React from "react";
import { Settings } from "react-feather";

import { IconProps } from "../core/icon";

export const IconPending = ({ size, style, onClick }: IconProps) => (
  <Settings
    size={size}
    onClick={onClick}
    style={{
      marginTop: "2px",
      animationDuration: "3s",
      animationName: "spin",
      animationIterationCount: "infinite",
      animationDelay: "0",
      animationTimingFunction: "linear",
      ...style,
    }}
  />
);
