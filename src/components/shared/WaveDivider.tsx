interface WaveDividerProps {
  /** Must match the background of the NEXT section so the cut has no seam */
  fill?: string;
  flip?: boolean;
  className?: string;
  variant?: "wave" | "tilt" | "curve" | "zigzag";
}

/**
 * Bottom-edge cut into the following section.
 * A 2px overlap hides the hairline browsers leave under scaled SVGs.
 */
export default function WaveDivider({
  fill = "var(--color-surface)",
  flip = false,
  variant = "wave",
  className = "",
}: WaveDividerProps) {
  const paths: Record<string, string> = {
    wave: "M0,32L48,45.3C96,59,192,85,288,80C384,75,480,37,576,37.3C672,37,768,75,864,80C960,85,1056,59,1152,48C1248,37,1344,43,1392,45.3L1440,48L1440,100L0,100Z",
    tilt: "M0,100L1440,40L1440,100L0,100Z",
    curve: "M0,80C360,120,1080,40,1440,80L1440,100L0,100Z",
    zigzag:
      "M0,60L120,80L240,60L360,80L480,60L600,80L720,60L840,80L960,60L1080,80L1200,60L1320,80L1440,60L1440,100L0,100Z",
  };

  return (
    <div
      className={`flex w-full leading-[0] -mb-[2px] ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-[calc(100%+2px)] max-w-none -ml-px"
        style={{ height: 62 }}
      >
        {/* Solid strip under the path so anti-aliasing cannot leave a gap */}
        <rect x="0" y="98" width="1440" height="4" fill={fill} />
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
