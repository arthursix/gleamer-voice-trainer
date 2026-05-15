import { motion } from "framer-motion";
import { useMemo } from "react";

/** 40 vertical bars animating in a continuous wave with stagger. */
export function AudioWave({ bars = 40 }: { bars?: number }) {
  const heights = useMemo(
    () =>
      Array.from({ length: bars }, () => {
        const min = 4 + Math.random() * 6;
        const max = 24 + Math.random() * 24;
        const mid = (min + max) / 2;
        return [min, max, mid, max, min];
      }),
    [bars],
  );

  return (
    <div className="flex items-center justify-center gap-[3px] h-14 w-full">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="block w-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #4F6EF7 0%, #00D4FF 100%)",
            willChange: "transform, height",
          }}
          animate={{ height: h }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}
