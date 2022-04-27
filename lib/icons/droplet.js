import React from "react";
export function IconDroplet({ size = 24, style, onClick, }) {
    return (React.createElement("svg", { width: size, height: size, style: style, onClick: onClick, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" })));
}
