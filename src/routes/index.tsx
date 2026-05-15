import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Chrome, Mic, Check } from "lucide-react";
import { AudioWave } from "@/components/AudioWave";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Typewriter } from "@/components/Typewriter";
import { BeforeAfter } from "@/components/BeforeAfter";
import { HowItWorks } from "@/components/HowItWorks";
import { BentoGrid } from "@/components/BentoGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { fadeUp, stagger, viewportOnce, wordVariant } from "@/lib/animations";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gleamer Voice — Dictée IA pour radiologues" },
      {
        name: "description",
        content:
          "L'IA qui comprend vos comptes rendus radiologiques. Dictez 3× moins, structurez automatiquement.",
      },
      { property: "og:title", content: "Gleamer Voice — Maîtrisez la dictée IA" },
      {
        property: "og:description",
        content:
          "Parlez naturellement, structurez automatiquement. Le guide pratique Gleamer Voice.",
      },
    ],
  }),
});

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto max-w-[1200px] px-6 ${className}`}>{children}</div>
);

function Hero() {
  const line1 = ["Maîtrisez", "Voice."];
  const line2 = ["Dictez", "3×", "moins."];

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
      <FloatingOrbs />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            <span className="pill-badge">
              <span className="text-[#4F6EF7]">✦</span>
              Guide Pratique — Gleamer Voice
            </span>
          </motion.div>

          {/* Headline word-by-word */}
          <h1
            className="mt-8 font-bold tracking-[-0.03em] leading-[0.95] text-white"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            <span className="block">
              {line1.map((w, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-3"
                >
                  {w === "Voice." ? (
                    <span className="text-gradient-hero">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2">
              {line2.map((w, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl text-[#8B92A5] max-w-2xl mx-auto leading-relaxed"
          >
            L'IA qui comprend vos comptes rendus radiologiques.
            <br className="hidden md:block" />
            Parlez naturellement, structurez automatiquement.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Commencer maintenant
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#how"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost"
            >
              Voir comment ça marche ↓
            </motion.a>
          </motion.div>

          {/* Waveform card */}
          <motion.div
            variants={fadeUp}
            className="mt-16 glass-card p-8 max-w-2xl mx-auto text-left"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#EF4444] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#8B92A5]">
                  Enregistrement live
                </span>
              </div>
              <span className="text-xs text-[#8B92A5]">00:14</span>
            </div>
            <AudioWave bars={40} />
            <div className="mt-6 pt-5 border-t border-white/5 text-[15px] leading-relaxed text-white/90 min-h-[60px]">
              <Typewriter
                text="IRM du genou droit pour une gonalgie interne..."
                startDelay={1200}
                speed={32}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function Metrics() {
  const stats = [
    { value: 3, suffix: "×", label: "moins de mots dictés" },
    { value: 14, suffix: " pages", label: "de guide en 30 secondes" },
    { value: 100, suffix: "%", label: "focus sur le médical" },
  ];
  return (
    <section
      className="relative py-20"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(17,17,24,0.4)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`text-center px-6 ${
                i > 0 ? "md:border-l border-white/8" : ""
              }`}
            >
              <div
                className="text-5xl md:text-6xl font-bold tracking-tight text-gradient-hero"
                style={{ letterSpacing: "-0.04em" }}
              >
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[#8B92A5] text-base">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="pill-badge mb-5 text-[#4F6EF7]"
          style={{
            background: "rgba(79,110,247,0.1)",
            borderColor: "rgba(79,110,247,0.25)",
          }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-bold tracking-[-0.03em] text-white leading-[1.05]"
        style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-[#8B92A5] leading-relaxed"
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="py-32">
      <Container>
        <SectionHeader
          eyebrow="✦ Comparaison"
          title={<>La révolution de la dictée naturelle</>}
          lead="Même compte rendu, 3 fois moins d'effort."
        />
        <BeforeAfter />
      </Container>
    </section>
  );
}

function HowSection() {
  return (
    <section id="how" className="py-32 relative">
      <Container>
        <SectionHeader
          eyebrow="✦ Workflow"
          title={<>Vos comptes rendus en 2 clics</>}
          lead="Quatre étapes simples, du premier mot dicté au collage dans votre RIS."
        />
        <HowItWorks />
      </Container>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-32">
      <Container>
        <SectionHeader
          eyebrow="✦ Fonctionnalités"
          title={<>Toute la puissance de Voice</>}
          lead="Dictée intelligente, modèles personnalisés, raccourcis SpeechMike, instructions IA."
        />
        <BentoGrid />
      </Container>
    </section>
  );
}

function Setup() {
  const items = [
    {
      icon: Chrome,
      title: "Navigateur",
      desc: "Chrome ou Edge à jour, recommandés.",
    },
    {
      icon: Mic,
      title: "Microphone",
      desc: "Sélectionnez SpeechMike, casque ou micro intégré.",
    },
    {
      icon: Check,
      title: "Autorisation",
      desc: "Autorisez Voice à utiliser votre microphone.",
    },
  ];
  return (
    <section id="setup" className="py-32">
      <Container>
        <SectionHeader
          eyebrow="✦ Setup"
          title={<>Prêt en 3 étapes</>}
          lead="Aucune installation. Voice tourne directement dans votre navigateur."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center"
            >
              <motion.div
                className="mx-auto h-16 w-16 rounded-2xl flex items-center justify-center mb-5 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,110,247,0.2), rgba(0,212,255,0.2))",
                  border: "1px solid rgba(79,110,247,0.3)",
                }}
                animate={
                  i === 1
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(79,110,247,0.4)",
                          "0 0 0 16px rgba(79,110,247,0)",
                        ],
                      }
                    : {}
                }
                transition={
                  i === 1
                    ? { duration: 2, repeat: Infinity, ease: "easeOut" }
                    : {}
                }
                whileHover={{ y: -4, scale: 1.05 }}
              >
                {i === 2 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      d="M5 12.5L10 17.5L19 7.5"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </svg>
                ) : (
                  <it.icon className="h-7 w-7 text-[#4F6EF7]" />
                )}
              </motion.div>
              <div className="text-xs text-[#8B92A5] mb-1">Étape {i + 1}</div>
              <h3 className="text-xl font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-[#8B92A5] text-sm leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Comparison />
      <HowSection />
      <Features />
      <Setup />
      <FinalCTA />
    </>
  );
}
