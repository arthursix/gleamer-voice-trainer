import { motion } from "framer-motion";
import {
  AudioLines,
  Mic,
  Gamepad2,
  FileUp,
  Brain,
  Star,
} from "lucide-react";
import { viewportOnce } from "@/lib/animations";

const cardBase =
  "glass-card p-7 relative overflow-hidden group";

export function BentoGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {/* Card 1 — large */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6 }}
        className={`${cardBase} md:col-span-2 md:row-span-2 min-h-[320px]`}
      >
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,110,247,0.35), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <AudioLines className="h-8 w-8 text-[#4F6EF7] mb-5" />
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Dictée Intelligente
        </h3>
        <p className="mt-3 text-[#8B92A5] leading-relaxed max-w-md">
          Voice détecte votre modèle de compte rendu, insère vos observations
          au bon endroit et supprime les phrases négatives associées
          automatiquement.
        </p>
        {/* Animated waveform */}
        <div className="mt-8 flex items-center gap-1 h-16 relative z-10">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.span
              key={i}
              className="w-1 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #4F6EF7, #00D4FF)",
              }}
              animate={{
                height: [
                  `${10 + Math.random() * 15}px`,
                  `${20 + Math.random() * 35}px`,
                  `${10 + Math.random() * 15}px`,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.06,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cardBase}
      >
        <Mic className="h-7 w-7 text-[#00D4FF] mb-4" />
        <h3 className="text-lg font-bold text-white">Dictée Libre</h3>
        <p className="mt-2 text-sm text-[#8B92A5] leading-relaxed">
          Sans modèle ? Commencez par cette phrase :
        </p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-4 px-3 py-2 rounded-lg font-mono text-xs text-[#4F6EF7]"
          style={{
            background: "rgba(79,110,247,0.08)",
            border: "1px solid rgba(79,110,247,0.2)",
          }}
        >
          « Dictée libre... »
        </motion.div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cardBase}
      >
        <Gamepad2 className="h-7 w-7 text-[#4F6EF7] mb-4" />
        <h3 className="text-lg font-bold text-white">SpeechMike</h3>
        <ul className="mt-3 space-y-1.5 text-sm text-[#8B92A5]">
          <li>• Bouton rouge : enregistrer</li>
          <li>• Pédale haut : naviguer</li>
          <li>• EOL : nouvelle ligne</li>
          <li>• INS : insérer</li>
        </ul>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6 }}
        className={cardBase}
      >
        <FileUp className="h-7 w-7 text-[#00D4FF] mb-4" />
        <h3 className="text-lg font-bold text-white">Import de Modèles</h3>
        <p className="mt-2 text-sm text-[#8B92A5]">
          Vos modèles existants, importés en un clic.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[".docx", ".pdf", ".doc"].map((ext, i) => (
            <motion.span
              key={ext}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                background: "rgba(79,110,247,0.12)",
                color: "#4F6EF7",
                border: "1px solid rgba(79,110,247,0.25)",
              }}
            >
              {ext}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cardBase}
      >
        <Brain className="h-7 w-7 text-[#4F6EF7] mb-4" />
        <h3 className="text-lg font-bold text-white">Instructions IA</h3>
        <p className="mt-2 text-sm text-[#8B92A5]">Prompt global :</p>
        <pre
          className="mt-3 px-3 py-2 rounded-lg font-mono text-[11px] text-white/80 leading-relaxed overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
{`> Toujours conclure par
  une recommandation
  de prise en charge.`}
        </pre>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cardBase}
      >
        <Star className="h-7 w-7 text-[#00D4FF] mb-4" />
        <h3 className="text-lg font-bold text-white">Feedback Continu</h3>
        <p className="mt-2 text-sm text-[#8B92A5]">
          Notez chaque compte rendu, Voice apprend.
        </p>
        <div className="mt-4 flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.3 + i * 0.12, type: "spring" }}
            >
              <Star
                className="h-5 w-5"
                fill="#FBBF24"
                stroke="#FBBF24"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
