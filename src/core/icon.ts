import type { CSSProperties } from "react";

export interface IconProps {
  className?: string;
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
}
