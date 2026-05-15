import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { fadeUp, viewportOnce } from "@/lib/animations";

const verboseDictation = [
  "Champ suivant indication",
  "IRM du genou droit pour gonalgie interne persistante point",
  "Champ suivant technique",
  "Acquisitions sagittale T1 virgule sagittale DP Fat Sat virgule",
  "coronale T2 Fat Sat virgule axiale DP Fat Sat point",
  "Champ suivant résultats",
  "Épanchement intra-articulaire modéré point Nouvelle ligne",
  "Rupture complète du ligament croisé antérieur point",
  "Nouvelle ligne ménisque interne deux points fissure verticale",
  "de la corne postérieure point",
  "Champ suivant conclusion",
  "Rupture complète du LCA et fissure méniscale interne point",
];

const naturalDictation =
  "C'est une IRM du genou droit pour une gonalgie interne. Il y a un épanchement modéré et une rupture complète du LCA. Au niveau du ménisque interne, fissure verticale de la corne postérieure. Terminé, merci.";

export function BeforeAfter() {
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch group/wrap">
      {/* AVANT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 0.98 }}
        className="rounded-2xl p-7"
        style={{
          background: "#1A0F0F",
          border: "1px solid rgba(239,68,68,0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[#EF4444] text-base font-semibold">❌ Avant Voice</span>
          <span className="text-xs text-[#8B92A5]">Dictée classique</span>
        </div>
        <div
          className="space-y-1.5 font-mono text-[12.5px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {verboseDictation.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-white/5 text-xs text-[#8B92A5]">
          ~84 mots dictés
        </div>
      </motion.div>

      {/* FLECHE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex md:flex-col items-center justify-center gap-3 md:px-2"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 20px rgba(79,110,247,0.3)",
              "0 0 40px rgba(79,110,247,0.7)",
              "0 0 20px rgba(79,110,247,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-14 w-14 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #4F6EF7, #00D4FF)",
          }}
        >
          <ArrowRight className="h-6 w-6 text-white md:rotate-90" />
        </motion.div>
        <div className="pill-badge text-[11px]">
          <Sparkles className="h-3 w-3" /> IA
        </div>
      </motion.div>

      {/* APRES */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl p-7 flex flex-col"
        style={{
          background: "#0A1A0F",
          border: "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[#10B981] text-base font-semibold">✅ Avec Voice</span>
          <span className="text-xs text-[#8B92A5]">Langage naturel</span>
        </div>
        <p className="text-[15px] leading-relaxed text-white/90 flex-1">
          <Typewriter text={naturalDictation} speed={22} startDelay={400} />
        </p>
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="text-[#8B92A5]">~28 mots dictés</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 1.2 }}
            className="px-2.5 py-1 rounded-full text-[#10B981]"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            Même résultat final ✓
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
