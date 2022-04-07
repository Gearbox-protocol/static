import React from 'react';
export function IconLogout({ size, style, onClick }) {
    return (React.createElement("svg", { width: size || "24px", height: size || "24px", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", xmlns: "http://www.w3.org/2000/svg", style: style, onClick: onClick },
        React.createElement("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
        React.createElement("polyline", { points: "16 17 21 12 16 7" }),
        React.createElement("line", { x1: "21", y1: "12", x2: "9", y2: "12" })));
}
