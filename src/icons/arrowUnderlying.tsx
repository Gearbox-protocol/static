import type { IconProps } from "../core/icon";

export const IconArrowUnderlying = ({
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
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0V3C1 5.20914 2.79086 7 5 7H8"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M8 10.7929V3.20711C8 2.76165 8.53857 2.53857 8.85355 2.85355L12.6464 6.64645C12.8417 6.84171 12.8417 7.15829 12.6464 7.35355L8.85355 11.1464C8.53857 11.4614 8 11.2383 8 10.7929Z"
      fill="currentColor"
    />
  </svg>
);
