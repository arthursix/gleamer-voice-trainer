import { Reveal } from "./Reveal";

/** Soft animated divider between sections — gradient line + dot + glow halo. */
export function SectionTransition({
  variant = "blue",
}: {
  variant?: "blue" | "violet" | "teal" | "amber";
}) {
  const tone =
    variant === "violet"
      ? "oklch(0.62 0.24 295)"
      : variant === "teal"
        ? "oklch(0.78 0.16 200)"
        : variant === "amber"
          ? "oklch(0.78 0.18 60)"
          : "oklch(0.62 0.24 265)";

  return (
    <div className="relative mx-auto max-w-7xl px-6">
      <Reveal>
        <div className="relative flex items-center justify-center py-2">
          {/* glow halo */}
          <div
            className="absolute h-40 w-[80%] -z-10 blur-3xl opacity-40 rounded-full"
            style={{
              background: `radial-gradient(closest-side, ${tone}, transparent 70%)`,
            }}
          />
          {/* horizontal line */}
          <div className="relative w-full h-px overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${tone}55, transparent)`,
              }}
            />
            <div
              className="absolute inset-y-0 w-1/3 animate-[shimmer_3.5s_linear_infinite]"
              style={{
                background: `linear-gradient(90deg, transparent, ${tone}, transparent)`,
              }}
            />
          </div>
          {/* center dot */}
          <div
            className="absolute h-2 w-2 rounded-full"
            style={{
              background: tone,
              boxShadow: `0 0 24px 4px ${tone}66`,
            }}
          />
        </div>
      </Reveal>
    </div>
  );
}
