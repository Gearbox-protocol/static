import React from "react";
import { Settings } from "react-feather";
export const IconPending = ({ size, style, onClick }) => {
    return (React.createElement(Settings, { size: size, onClick: onClick, style: Object.assign({ marginTop: "2px", animationDuration: "3s", animationName: "spin", animationIterationCount: "infinite", animationDelay: "0", animationTimingFunction: "linear" }, style) }));
};
