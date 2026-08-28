import type { IconProps } from "../core/icon";

export const IconInfo = ({
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
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="7" fill="currentColor" />
    <rect x="6" y="3" width="2" height="2" fill="white" />
    <path d="M6 7H8V11H6V7Z" fill="white" />
  </svg>
);
