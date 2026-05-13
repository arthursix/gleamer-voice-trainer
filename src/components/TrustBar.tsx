import { motion } from "framer-motion";
import { Shield, Lock, BadgeCheck, Award } from "lucide-react";

/**
 * Medical Trust & Authority bar — credentials/compliance signals.
 * Applies the "Trust-focused landing" pattern from UI/UX Pro Max
 * (badge grid, security indicators, certification colors).
 */
const BADGES = [
  { I: Shield, label: "HDS", sub: "Hébergeur Données Santé" },
  { I: Lock, label: "RGPD", sub: "Conforme UE" },
  { I: BadgeCheck, label: "CE", sub: "Dispositif médical" },
  { I: Award, label: "ISO 27001", sub: "Sécurité info." },
];

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mr-1">
        Conformité
      </span>
      {BADGES.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1 + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{ y: -2, scale: 1.04 }}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1.5 text-[11px] tracking-tight"
          title={b.sub}
        >
          <b.I className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold">{b.label}</span>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <span className="hidden sm:inline text-muted-foreground">{b.sub}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
