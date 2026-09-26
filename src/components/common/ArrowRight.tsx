interface ArrowRightProps {
  className?: string
}

export default function ArrowRight({
  className = '',
}: ArrowRightProps) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 4H13M10 1L13 4L10 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  )
}