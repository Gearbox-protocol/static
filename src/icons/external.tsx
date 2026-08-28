import type { IconProps } from "../core/icon";

export const IconExternal = ({
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
    viewBox="0 0 14 14"
  >
    <path
      d="M7 1H2C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13H12C12.5523 13 13 12.5523 13 12V7"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="transparent"
    />
    <path d="M13 1H9M13 1V5M13 1L6 8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
