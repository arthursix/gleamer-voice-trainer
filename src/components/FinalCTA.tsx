import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { viewportOnce } from "@/lib/animations";

function Particles() {
  const [parts, setParts] = useState<
    { x: number; y: number; size: number; dur: number; delay: number }[]
  >([]);
  useEffect(() => {
    setParts(
      Array.from({ length: 14 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        dur: 6 + Math.random() * 6,
        delay: Math.random() * 4,
      })),
    );
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(255,255,255,0.5)",
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] mx-6 rounded-[32px]"
        style={{
          background:
            "linear-gradient(135deg, #1a1f5c 0%, #0a1240 50%, #2a1450 100%)",
          boxShadow: "0 0 80px rgba(79,110,247,0.3)",
        }}
      />
      <div className="relative max-w-4xl mx-auto rounded-[32px] py-20 px-8 text-center overflow-hidden border border-white/10">
        <Particles />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-white relative z-10"
        >
          Gagnez du temps de dictée
          <br />
          <span className="text-gradient-hero">tous les jours.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-[#8B92A5] relative z-10"
        >
          Focus à 100% sur le médical.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 relative z-10"
        >
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary btn-shimmer text-base px-8 py-4"
          >
            Commencer maintenant
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
