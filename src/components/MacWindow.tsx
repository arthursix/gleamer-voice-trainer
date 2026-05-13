import { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Mac-style window chrome to frame product screenshots / mockups.
 * Animated entrance + subtle floating hover (Framer Motion).
 */
export function MacWindow({
  title,
  children,
  accent,
  className = "",
}: {
  title?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: "easeOut" } }}
      className={`mac-reflect relative rounded-2xl overflow-hidden border border-white/10 bg-white/95 text-neutral-900 shadow-[0_50px_140px_-40px_rgba(0,0,0,0.85),0_8px_24px_-12px_rgba(0,0,0,0.4)] ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div className="relative flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-b from-neutral-100 to-neutral-50 border-b border-neutral-200">
        {[
          "bg-[#ff5f57]",
          "bg-[#febc2e]",
          "bg-[#28c840]",
        ].map((c, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`h-3 w-3 rounded-full ${c} shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_0_0.5px_rgba(0,0,0,0.1)]`}
          />
        ))}
        {title && (
          <div className="ml-3 text-[11px] text-neutral-500 tracking-tight font-medium truncate">
            {title}
          </div>
        )}
        {accent && (
          <div className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            {accent}
          </div>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </motion.div>
  );
}
