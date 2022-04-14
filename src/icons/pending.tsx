import React from "react";
import { IconProps } from "../core/icon";
import { Settings } from "react-feather";

export const IconPending = ({ size, style, onClick }: IconProps) => {
  return (
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
};
