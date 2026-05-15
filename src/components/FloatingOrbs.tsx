import { motion } from "framer-motion";

/** 3 blurred floating orbs animated with sinusoidal motion. */
export function FloatingOrbs() {
  const orbs = [
    { x: "10%", y: "20%", size: 380, color: "rgba(79,110,247,0.25)", dur: 9 },
    { x: "75%", y: "15%", size: 320, color: "rgba(0,212,255,0.18)", dur: 11 },
    { x: "50%", y: "70%", size: 460, color: "rgba(120,86,230,0.18)", dur: 13 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: o.x,
            top: o.y,
            width: o.size,
            height: o.size,
            background: o.color,
            filter: "blur(80px)",
            opacity: 0.6,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
