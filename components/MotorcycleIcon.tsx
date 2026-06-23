import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number | string;
};

export default function MotorcycleIcon({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Rear wheel — outer tyre + inner hub ring */}
      <circle cx="5" cy="18" r="3.5" />
      <circle cx="5" cy="18" r="1.5" />

      {/* Front wheel — outer tyre + inner hub ring */}
      <circle cx="19" cy="18" r="3.5" />
      <circle cx="19" cy="18" r="1.5" />

      {/*
        Upper body + tail in one continuous path:
          (8, 15.5)  lower-rear junction (above rear wheel)
          (6, 13)    SWEPT TAIL TIP — extends backward and up from the body
          (9, 12)    rear subframe rising to seat
          (11.5,11.5) seat
          Q(14.5,10)(17.5,11.5)  TANK DOME — quadratic bezier, peaks ~y 10.75
          (18.5,13.5) front fairing / steering head
      */}
      <path d="M 8 15.5 L 6 13 L 9 12 L 11.5 11.5 Q 14.5 10 17.5 11.5 L 18.5 13.5" />

      {/* Belly pan — lower fairing sweeps under the frame */}
      <path d="M 8 15.5 C 11 19.5 15 19.5 18 17" />

      {/* Front fork — two legs from steering head down to front wheel level */}
      <path d="M 18.5 13.5 L 18 16 M 19.5 13.5 L 19.5 16" />

      {/* Handlebar — vertical stem + bar spread to the right (clip-on / sport style) */}
      <path d="M 18.5 13.5 L 18.5 11 L 21 10.5" />
    </svg>
  );
}
