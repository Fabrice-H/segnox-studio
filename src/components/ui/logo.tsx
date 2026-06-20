import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", size = "md" }: LogoProps) {
  const isDark = variant === "dark";

  const dimensions = {
    sm: { width: 140, height: 40 },
    md: { width: 180, height: 50 },
    lg: { width: 220, height: 60 },
  };

  const { width, height } = dimensions[size];

  return (
    <Image
      src="/logov2.png"
      alt="SEGNOX Studio"
      width={width}
      height={height}
      className={isDark ? "brightness-0 invert" : ""}
      priority
    />
  );
}

export function LogoIcon({
  size = 32,
  variant = "light"
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const primaryColor = isDark ? "#F3ECE0" : "#1B1813";
  const accentColor = "#C99A3B";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* S shape - curved top part */}
      <path
        d="M12 28 C12 14, 24 8, 42 8 L58 8 C72 8, 78 14, 78 24 C78 34, 68 40, 52 40 L28 40"
        stroke={primaryColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* X - left diagonal (bottom-left to top-right area) */}
      <path
        d="M24 40 L78 95"
        stroke={primaryColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* X - right diagonal dark part (from top-right going down) */}
      <path
        d="M78 40 L50 72"
        stroke={primaryColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* X - Gold accent (top part of right diagonal) */}
      <path
        d="M62 54 L78 40"
        stroke={accentColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
