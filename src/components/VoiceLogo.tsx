/** Voice logo bug — circular icon with animated waveform (Gleamer style). */
export function VoiceLogo({ size = 56 }: { size?: number }) {
  const bars = [0.3, 0.65, 1, 0.85, 0.45, 0.7, 0.3];
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(120,140,255,0.35)]"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
      <span className="flex items-end gap-[3px] h-1/2">
        {bars.map((h, i) => (
          <span
            key={i}
            className="wave-bar bg-white rounded-full"
            style={{
              width: 2,
              height: `${h * 100}%`,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </span>
    </span>
  );
}
