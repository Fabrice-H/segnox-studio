import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ variant = "light", size = "md", showText = true }: LogoProps) {
  const isDark = variant === "dark";

  const dimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 36, height: 36 },
    lg: { width: 48, height: 48 },
  };

  const fontSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const { width, height } = dimensions[size];

  return (
    <div className="flex items-center gap-2.5">
      {/* SX Monogram */}
      <SXMonogram
        width={width}
        height={height}
        variant={variant}
      />

      {showText && (
        <span
          className={`font-heading font-extrabold ${fontSize[size]} tracking-[0.05em] ${
            isDark ? "text-[#F3ECE0]" : "text-text-primary"
          }`}
        >
          SEGNOX
          <span
            className={`font-semibold ${isDark ? "text-gold-lighter" : "text-gold"}`}
          >
            {" "}
            STUDIO
          </span>
        </span>
      )}
    </div>
  );
}

function SXMonogram({
  width,
  height,
  variant = "light"
}: {
  width: number;
  height: number;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const primaryColor = isDark ? "#F3ECE0" : "#1B1813";
  const accentColor = "#C99A3B";

  return (
    <svg
      width={width}
      height={height}
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

export function LogoIcon({
  size = 32,
  variant = "light"
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  return <SXMonogram width={size} height={size} variant={variant} />;
}
