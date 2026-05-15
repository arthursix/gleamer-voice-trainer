import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mic, Brain, CheckCircle2, ClipboardPaste } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

const STEPS = [
  {
    icon: Mic,
    title: "Commencez l'enregistrement",
    desc: "Pédale du SpeechMike ou bouton rouge. Voice écoute dès le premier mot.",
  },
  {
    icon: Brain,
    title: "Dictez naturellement",
    desc: "Voice détecte votre modèle de compte rendu et le complète au bon endroit.",
  },
  {
    icon: CheckCircle2,
    title: "Terminez l'enregistrement",
    desc: "Dites « Terminé, merci » ou ré-appuyez sur le bouton rouge.",
  },
  {
    icon: ClipboardPaste,
    title: "Collez dans votre RIS",
    desc: "Ctrl+V dans votre logiciel — le compte rendu structuré est prêt.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      {/* SVG vertical line */}
      <svg
        className="absolute left-[31px] top-8 bottom-8 hidden md:block"
        width="2"
        height="100%"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          stroke="url(#stepGrad)"
          strokeWidth="2"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F6EF7" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="space-y-6">
        {STEPS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-6 items-start"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative shrink-0 h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
              style={{
                background: "linear-gradient(135deg, #4F6EF7, #00D4FF)",
                boxShadow: "0 8px 24px rgba(79,110,247,0.4)",
              }}
            >
              <s.icon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-[#16161F] border border-white/10 flex items-center justify-center text-[11px] font-semibold">
                {i + 1}
              </span>
            </motion.div>
            <div className="glass-card p-6 flex-1">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[#8B92A5] leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
