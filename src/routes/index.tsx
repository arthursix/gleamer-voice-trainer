import { createFileRoute } from "@tanstack/react-router";
import { Mic, ArrowRight, Sparkles, Zap, Clock, Layers, FileText, Wand2, Workflow, CheckCircle2, BookOpen, Layout, Calculator, ListChecks } from "lucide-react";
import { DictationCompare } from "@/components/DictationCompare";
import { MicSimulator } from "@/components/MicSimulator";
import { TemplateMagic } from "@/components/TemplateMagic";
import { SpeechmikeMap } from "@/components/SpeechmikeMap";
import { StepFlow } from "@/components/StepFlow";
import { ReportMockup } from "@/components/ReportMockup";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ScrollDots } from "@/components/SectionScroller";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Maîtriser Gleamer Voice — Formation radiologues" },
      {
        name: "description",
        content:
          "Formation interactive de 20 minutes : la dictée naturelle Voice pour radiologues.",
      },
    ],
  }),
});

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  align = "left",
}: {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 scroll-mt-20"
    >
      <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary/80 mb-4">
            {eyebrow}
          </div>
        )}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
          {title}
        </h2>
        {lead && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {lead}
          </p>
        )}
      </div>
      {children && <div className="mt-14">{children}</div>}
    </section>
  );
}

function Home() {
  return (
    <>
      <InteractiveBackground />
      <ScrollDots />

      {/* HERO */}
      <section
        id="intro"
        className="relative min-h-[92vh] flex items-center justify-center px-6 pt-20 pb-16 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Nouveau · Formation interactive
          </div>
          <div className="flex justify-center mb-8">
            <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-glass">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <Mic className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              <span className="text-2xl font-semibold tracking-tight">Voice</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
            Transformez votre voix
            <br />
            en compte rendu.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            La dictée 3× plus courte pour radiologues. Parlez naturellement, comme à un confrère —
            l'IA structure le compte rendu pour vous.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#dictee"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-[15px] font-medium hover:opacity-90 transition"
            >
              Commencer la formation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#recap"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-7 py-3.5 text-[15px] font-medium hover:border-primary/50 transition"
            >
              Voir le récap
            </a>
          </div>

          {/* Floating mockup */}
          <div className="relative mt-20 max-w-3xl mx-auto">
            <div className="absolute -inset-10 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <ReportMockup className="relative animate-float-up" highlight="findings" />
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { v: "×3", l: "plus rapide", I: Zap },
              { v: "~20 min", l: "de formation", I: Clock },
              { v: "100%", l: "focus médical", I: Sparkles },
              { v: "0", l: "ponctuation à dicter", I: Mic },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-glass p-5 text-left"
              >
                <s.I className="h-4 w-4 text-primary mb-3" />
                <div className="text-2xl md:text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Faites défiler ↓
        </div>
      </section>

      {/* CHAPITRE 1 — DICTÉE NATURELLE */}
      <Section
        id="dictee"
        eyebrow="Chapitre 01 — Dictée naturelle"
        title={<>Parlez comme à un confrère.</>}
        lead={
          <>
            Plus de « point », « virgule », « champ suivant ». Voice écoute votre
            raisonnement clinique et le transforme en compte rendu structuré.
          </>
        }
      >
        <DictationCompare />

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { I: Mic, t: "Langage naturel", d: "Aucune commande à mémoriser. Vous dictez, Voice comprend." },
            { I: Sparkles, t: "Contexte médical", d: "Entraîné sur des millions de comptes rendus de radiologie." },
            { I: Zap, t: "3× plus court", d: "Pour le même compte rendu final, validé." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-6">
              <c.I className="h-5 w-5 text-primary mb-4" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CHAPITRE 2 — MODÈLES */}
      <Section
        id="modeles"
        eyebrow="Chapitre 02 — Modèles intelligents"
        title={<>Voice s'adapte à vos modèles.</>}
        lead={
          <>
            Vos comptes rendus types sont conservés. Voice détecte le bon modèle,
            insère vos observations au bon endroit, et propose la conclusion.
          </>
        }
      >
        <TemplateMagic />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
              Pendant que vous parlez
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Le compte rendu se construit en direct.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Voice remplit l'indication, la technique, les résultats — pendant
              votre dictée, sans interruption. Vous gardez les yeux sur l'image.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Détection automatique du modèle adapté",
                "Insertion contextuelle dans la bonne section",
                "Conclusion suggérée à partir de vos findings",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <ReportMockup highlight="conclusion" className="relative" />
          </div>
        </div>
      </Section>

      {/* CHAPITRE 3 — DÉMO LIVE */}
      <Section
        id="live"
        eyebrow="Chapitre 03 — Démo en direct"
        title={<>Essayez le micro.</>}
        lead={
          <>
            Cliquez pour simuler une dictée. Voice transcrit, comprend, et
            structure ce que vous dites — exactement comme dans votre cabinet.
          </>
        }
      >
        <MicSimulator />
      </Section>

      {/* CHAPITRE 4 — SETUP */}
      <Section
        id="setup"
        eyebrow="Chapitre 04 — Setup & matériel"
        title={<>Tout fonctionne dès le navigateur.</>}
        lead={
          <>
            Voice s'utilise dans Chrome ou Edge. Avec un SpeechMike, vous gagnez
            les raccourcis matériels pour enregistrer les mains sur l'image.
          </>
        }
      >
        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {[
            { I: Layout, t: "Navigateur", d: "Chrome ou Edge à jour. Aucune installation." },
            { I: Mic, t: "Microphone", d: "Casque, micro USB, ou SpeechMike Philips." },
            { I: Layers, t: "Compatible PACS", d: "Copier-coller direct dans votre RIS / PACS." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-6">
              <c.I className="h-5 w-5 text-primary mb-4" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>
        <SpeechmikeMap />
      </Section>

      {/* CHAPITRE 5 — WORKFLOW */}
      <Section
        id="workflow"
        eyebrow="Chapitre 05 — Workflow"
        title={<>Vos comptes rendus en 2 clics.</>}
        lead={
          <>
            Le geste quotidien : enregistrer, dicter, coller. Voice s'intègre
            dans votre flux existant sans rien casser.
          </>
        }
      >
        <StepFlow />
      </Section>

      {/* CHAPITRE 6 — AVANCÉ */}
      <Section
        id="avance"
        eyebrow="Chapitre 06 — Aller plus loin"
        title={<>Commandes et réflexes avancés.</>}
        lead={
          <>
            Une fois le geste de base maîtrisé, ces fonctions accélèrent encore
            votre lecture sans alourdir votre dictée.
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              I: Wand2,
              t: "Insertions automatiques",
              d: "Dictez « insérer protocole standard » et le bloc s'ajoute.",
            },
            {
              I: Layout,
              t: "Mise en page IA",
              d: "Listes, paragraphes, sections : structurés intelligemment.",
            },
            {
              I: Calculator,
              t: "Mesures & calculs",
              d: "« Volume prostatique 4 par 3 par 5 » → calcul auto.",
            },
            {
              I: FileText,
              t: "Conclusions suggérées",
              d: "Voice propose une conclusion contextuelle à partir des findings.",
            },
            {
              I: Workflow,
              t: "Commandes vocales",
              d: "« Nouveau paragraphe », « supprime la dernière phrase »…",
            },
            {
              I: BookOpen,
              t: "Multi-spécialités",
              d: "Adapte le vocabulaire à l'examen : IRM, scanner, écho, mammo…",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-border bg-glass p-6 hover:border-primary/40 transition group"
            >
              <c.I className="h-5 w-5 text-primary mb-4 group-hover:scale-110 transition" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* RÉCAP */}
      <Section
        id="recap"
        eyebrow="Récapitulatif"
        title={<>8 réflexes à adopter.</>}
        lead={<>Vos repères pour les premières semaines avec Voice.</>}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Parlez naturellement, comme à un confrère.",
            "Ne dictez plus la ponctuation.",
            "Laissez Voice trouver le bon modèle.",
            "Gardez les yeux sur l'image, pas sur l'écran texte.",
            "Utilisez le SpeechMike pour les raccourcis.",
            "Relisez systématiquement avant validation.",
            "Affinez au fur et à mesure : « supprime », « remplace ».",
            "Laissez Voice proposer la conclusion.",
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border bg-glass p-5"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow">
                {i + 1}
              </span>
              <div className="text-sm md:text-base pt-1">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">
            <ListChecks className="h-3.5 w-3.5" />
            Fin de la formation
          </div>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Prêts à dicter avec Voice.
          </h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Bonne pratique à tous. Cette formation reste accessible en
            permanence pour vos collègues.
          </p>
          <a
            href="#intro"
            className="inline-flex items-center gap-2 mt-8 rounded-full border border-border bg-glass px-6 py-3 text-sm hover:border-primary/50 transition"
          >
            ↑ Retour au sommet
          </a>
        </div>
      </Section>
    </>
  );
}
