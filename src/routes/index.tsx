import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Layers,
  FileText,
  Wand2,
  Workflow,
  CheckCircle2,
  BookOpen,
  Layout,
  Calculator,
  ListChecks,
  Mic,
  Chrome,
  MessageSquare,
  Upload,
  Settings2,
} from "lucide-react";
import { DictationCompare } from "@/components/DictationCompare";
import { MicSimulator } from "@/components/MicSimulator";
import { TemplateMagic } from "@/components/TemplateMagic";
import { StepFlow } from "@/components/StepFlow";
import { ReportMockup } from "@/components/ReportMockup";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ScrollDots } from "@/components/SectionScroller";
import { VoiceLogo } from "@/components/VoiceLogo";
import { MacWindow } from "@/components/MacWindow";
import { Tilt3D } from "@/components/Tilt3D";
import { CursorGlow } from "@/components/CursorGlow";
import { Reveal } from "@/components/Reveal";

import reportImg from "@/assets/voice-report-genou.jpg";
import speechmikeImg from "@/assets/voice-speechmike.jpg";
import importImg from "@/assets/voice-models-import.jpg";
import promptGlobalImg from "@/assets/voice-prompt-global.jpg";
import promptModelImg from "@/assets/voice-prompt-model.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Maîtriser Gleamer Voice — Formation radiologues" },
      {
        name: "description",
        content:
          "Formation interactive : dicter 3 fois plus vite avec Gleamer Voice. Pour radiologues.",
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
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 scroll-mt-20"
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
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
}

function Home() {
  return (
    <>
      <InteractiveBackground />
      <CursorGlow />
      <ScrollDots />

      {/* HERO */}
      <section
        id="intro"
        className="relative min-h-[92vh] flex items-center justify-center px-6 pt-16 pb-20 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6">
            Nouveau
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <VoiceLogo size={64} />
            <span className="text-6xl md:text-7xl font-semibold tracking-[-0.04em]">
              Voice
            </span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 tracking-tight">
            Transformez votre voix en compte rendu.
          </p>

          {/* Floating big mockup like the gleamer hero */}
          <div className="relative max-w-3xl mx-auto" data-tilt>
            <div className="absolute -inset-12 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-glow-pulse" />
            <Tilt3D max={10} className="relative animate-float-soft">
              <MacWindow title="Gleamer Voice" accent="Live" className="relative">
                <ReportMockup highlight="findings" className="!shadow-none !rounded-none border-0" />
              </MacWindow>
            </Tilt3D>
          </div>

          <h1 className="mt-20 text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.045em] text-aurora leading-[0.95]">
            Maîtriser Voice
            <br />
            en 20 minutes.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Une formation interactive pour radiologues. Parlez naturellement,
            comme à un confrère — l'IA structure le compte rendu pour vous.
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
              Voir les 8 réflexes
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { v: "×3", l: "plus rapide", I: Zap },
              { v: "~20 min", l: "de formation", I: Clock },
              { v: "100%", l: "focus médical", I: Sparkles },
              { v: "0", l: "ponctuation à dicter", I: Mic },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-glass p-5 text-left hover:border-primary/50 transition-colors hover:-translate-y-1 duration-500">
                  <s.I className="h-4 w-4 text-primary mb-3" />
                  <div className="text-2xl md:text-3xl font-semibold text-gradient">
                    {s.v}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Faites défiler ↓
        </div>
      </section>

      {/* CHAPITRE 1 — DICTÉE NATURELLE */}
      <Section
        id="dictee"
        eyebrow="Chapitre 01 — Dictée naturelle"
        title={<>La dictée 3× plus courte.</>}
        lead={
          <>
            Plus de « point », « virgule », « champ suivant ». Voice écoute
            votre raisonnement clinique et le transforme en compte rendu
            structuré.
          </>
        }
      >
        <DictationCompare />

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { I: Mic, t: "Langage naturel", d: "Aucune commande à mémoriser. Vous dictez, Voice comprend." },
            { I: Sparkles, t: "Contexte médical", d: "Entraîné sur des millions de comptes rendus de radiologie." },
            { I: Zap, t: "3× plus court", d: "Pour le même compte rendu final, validé par vous." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-6">
              <c.I className="h-5 w-5 text-primary mb-4" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CHAPITRE 2 — MODÈLES INTELLIGENTS */}
      <Section
        id="modeles"
        eyebrow="Chapitre 02 — Modèles intelligents"
        title={<>Voice s'adapte à vos modèles.</>}
        lead={
          <>
            Voice trouve <em className="text-foreground not-italic">votre</em>{" "}
            compte rendu et y ajoute vos observations <strong className="text-foreground">au bon endroit</strong>.
            Les phrases négatives associées sont supprimées. Si vous ne dictez
            pas de conclusion, Voice la génère.
          </>
        }
      >
        <TemplateMagic />

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
              Pendant que vous parlez
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Le compte rendu se construit en direct.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Voice remplit l'indication, la technique, les résultats — sans
              interruption. Vous gardez les yeux sur l'image.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Détection automatique du modèle",
                "Insertion contextuelle dans la bonne section",
                "Suppression des phrases négatives redondantes",
                "Conclusion suggérée à partir des findings",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 relative" data-tilt>
            <div className="absolute -inset-8 bg-gradient-primary opacity-25 blur-3xl rounded-full" />
            <Tilt3D max={9}>
              <MacWindow title="Compte rendu — IRM Genou D" accent="Auto-rempli">
                <img
                  src={reportImg}
                  alt="Compte rendu IRM genou auto-complété par Voice avec passages négatifs supprimés"
                  className="block w-full"
                />
              </MacWindow>
            </Tilt3D>
          </div>
        </div>
      </Section>

      {/* CHAPITRE 3 — DICTÉE LIBRE */}
      <Section
        id="libre"
        eyebrow="Chapitre 03 — Dictée libre"
        title={<>Pas de modèle ? Pas de souci.</>}
        lead={
          <>
            Commencez par <em className="text-foreground not-italic">« Dictée sans modèle de compte rendu »</em>{" "}
            ou <em className="text-foreground not-italic">« Dictée libre »</em>.
            Voice n'utilise que ce que vous dictez, sans compte rendu type — et s'occupe de la mise en page.
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-glass p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
              Vous dites
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span className="text-foreground">« Dictée libre. </span>
              Échographie abdominale chez un patient de 58 ans pour douleurs de l'hypochondre droit.
              Foie de taille normale, contours réguliers, pas de lésion focale.
              Vésicule biliaire alithiasique, parois fines.
              Reins de taille normale sans dilatation.
              <span className="text-foreground"> Conclusion, échographie abdominale sans particularité. »</span>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <MacWindow title="Voice — Dictée libre" accent="Sans modèle" className="relative">
              <div className="p-6 text-[13px] leading-relaxed text-neutral-800">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">Indication</div>
                <p className="mb-3">Patient de 58 ans, douleurs de l'hypochondre droit.</p>
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">Résultats</div>
                <ul className="space-y-1 mb-3">
                  <li>• Foie de taille normale, contours réguliers, sans lésion focale.</li>
                  <li>• Vésicule biliaire alithiasique, parois fines.</li>
                  <li>• Reins de taille normale, sans dilatation.</li>
                </ul>
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">Conclusion</div>
                <p className="font-medium">Échographie abdominale sans particularité.</p>
              </div>
            </MacWindow>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Plus besoin de dicter la mise en page ou la ponctuation : <span className="text-foreground">parlez librement</span>, Voice s'occupe de rédiger.
        </p>
      </Section>

      {/* CHAPITRE 4 — DÉMO LIVE */}
      <Section
        id="live"
        eyebrow="Chapitre 04 — Démo en direct"
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

      {/* CHAPITRE 5 — SETUP */}
      <Section
        id="setup"
        eyebrow="Chapitre 05 — Vous préparer à utiliser Voice"
        title={<>Tout fonctionne dès le navigateur.</>}
        lead={
          <>
            Voice s'utilise dans Chrome ou Edge — Safari et Firefox sont déconseillés.
            Aucune installation. Avec un SpeechMike, vous gagnez les raccourcis matériels.
          </>
        }
      >
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {[
            { I: Chrome, t: "1. Navigateur", d: "Chrome ou Edge à jour. Safari et Firefox déconseillés." },
            { I: Mic, t: "2. Microphone", d: "Sélectionnez SpeechMike, casque ou micro de MacBook." },
            { I: Settings2, t: "3. Autorisation", d: "Autorisez Voice à utiliser votre micro. Sinon, rafraîchissez la page." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-6">
              <c.I className="h-5 w-5 text-primary mb-4" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
              Raccourcis SpeechMike
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Le micro pensé pour la dictée médicale.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Le SpeechMike Philips Premium offre tous les raccourcis dont vous avez besoin —
              les mains restent sur l'image.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["Bouton rouge", "Démarrer / arrêter l'enregistrement intelligent"],
                ["Avance rapide ▶▶", "Copier le compte rendu actuel (Ctrl+C)"],
                ["Retour ◀◀", "Créer un compte rendu vierge"],
                ["Play / Pause", "Dictée classique type Dragon"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary mt-0.5 shrink-0 w-32">
                    {k}
                  </span>
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative" data-tilt>
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <Tilt3D max={12}>
              <MacWindow title="SpeechMike Premium — raccourcis" className="relative">
                <img
                  src={speechmikeImg}
                  alt="Schéma SpeechMike Philips Premium avec rôle de chaque bouton pour Voice"
                  className="block w-full"
                />
              </MacWindow>
            </Tilt3D>
          </div>
        </div>
      </Section>

      {/* CHAPITRE 6 — WORKFLOW */}
      <Section
        id="workflow"
        eyebrow="Chapitre 06 — Workflow quotidien"
        title={<>Vos comptes rendus en 2 clics.</>}
        lead={
          <>
            Le geste quotidien : enregistrer, dicter, coller. Voice s'intègre
            dans votre flux existant sans rien casser.
          </>
        }
      >
        <StepFlow
          steps={[
            {
              title: "Démarrer l'enregistrement",
              body: "Bouton rouge du SpeechMike (ou clic sur l'icône micro).",
            },
            {
              title: "Commencer toujours par le type d'examen",
              body: <><em>« C'est une IRM de la prostate… »</em> Voice détecte votre modèle et y ajoute le pathologique.</>,
            },
            {
              title: "Dicter naturellement",
              body: "Comme à un confrère : indication, observations, conclusion. Sans ponctuation.",
            },
            {
              title: "Terminer l'enregistrement",
              body: <>Bouton rouge ou dites <em>« Terminé, merci »</em>.</>,
            },
            {
              title: "Coller dans votre RIS",
              body: "Ctrl+V (ou avance rapide ▶▶ du SpeechMike).",
              tip: "Vous voulez ajouter quelque chose ? Reprenez simplement votre dictée : « Il y a également un épanchement articulaire de faible abondance ».",
            },
          ]}
        />
      </Section>

      {/* CHAPITRE 7 — IMPORTER VOS MODÈLES */}
      <Section
        id="import"
        eyebrow="Chapitre 07 — Vos propres modèles"
        title={<>Importez vos modèles dans Voice.</>}
        lead={
          <>
            Gardez votre mise en page et vos habitudes : Voice s'adapte à vous,
            et pas l'inverse. Importez tous vos fichiers (.docx, .pdf, .doc…) —
            comptez de <strong className="text-foreground">30 à 100 modèles</strong> pour des performances optimales.
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <MacWindow title="Voice — Modèles" accent="Settings" className="relative">
              <img
                src={importImg}
                alt="Interface Voice : menu Modèles avec boutons Importer des modèles et Créer un Modèle"
                className="block w-full"
              />
            </MacWindow>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Qu'est-ce qu'un bon modèle pour Voice&nbsp;?
            </h3>
            <ol className="space-y-4">
              {[
                ["Un nom sans équivoque", "Modalité + Anatomie. Ex : « IRM Genou », « Scanner Thorax »."],
                ["Description d'un examen normal", "Voice y ajoute le pathologique au bon endroit."],
                ["Pas de mention de latéralité", "Voice gère « droit / gauche » à partir de votre dictée."],
                ["Vos formulations, vos sections", "Voice respecte votre structure et votre style."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-xl border border-border bg-glass p-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-semibold text-sm">{t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
              <Upload className="h-4 w-4" />
              Importez .docx, .pdf, .doc — par lots
            </div>
          </div>
        </div>
      </Section>

      {/* CHAPITRE 8 — PROMPTS */}
      <Section
        id="prompts"
        eyebrow="Chapitre 08 — Toute la puissance de Voice"
        title={<>Donnez des instructions, naturellement.</>}
        lead={
          <>
            Voice exécute vos préférences de mise en forme, vos insertions
            automatiques et vos calculs métier — directement par instructions
            en français.
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { I: Wand2, t: "Insertions automatiques", d: "Un mot suffit pour insérer une phrase type au bon endroit." },
            { I: Layout, t: "Mise en page", d: "Voice apprend vos préférences pour ne plus avoir à les reprendre." },
            { I: Calculator, t: "Calculs et règles", d: "Critères stricts, formules, automatismes — Voice exécute." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-6 hover:border-primary/40 transition group">
              <c.I className="h-5 w-5 text-primary mb-4 group-hover:scale-110 transition" />
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Global prompt */}
          <div className="rounded-3xl border border-border bg-glass p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">
              Paramètres → Ajouter un prompt global
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Instructions générales
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Appliquées à <strong className="text-foreground">chaque dictée</strong>, quel que soit l'examen.
            </p>
            <MacWindow title="Voice — Prompt global">
              <img
                src={promptGlobalImg}
                alt="Dialogue Voice : Ajouter un prompt global avec exemple « Mettre la conclusion en gras »"
                className="block w-full"
              />
            </MacWindow>
            <div className="mt-5 space-y-2 text-sm">
              <div className="rounded-lg border border-border bg-background/40 px-3 py-2 italic text-muted-foreground">
                « Mets toujours la conclusion en gras. »
              </div>
              <div className="rounded-lg border border-border bg-background/40 px-3 py-2 italic text-muted-foreground">
                « Si je dis "présence d'artéfacts de mouvement", rajoute en italique dans la partie protocole : "Artéfacts compensés par la réalisation de séquences adaptées." »
              </div>
            </div>
          </div>

          {/* Per-model prompt */}
          <div className="rounded-3xl border border-border bg-glass p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">
              Modèle → Instructions personnalisées
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Instructions spécifiques
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Appliquées <strong className="text-foreground">uniquement au modèle sélectionné</strong> (ici, IRM Cérébrale).
            </p>
            <MacWindow title="Voice — Modifier le Modèle">
              <img
                src={promptModelImg}
                alt="Modifier le modèle IRM Cérébrale Cognitif avec prompt spécifique au modèle"
                className="block w-full"
              />
            </MacWindow>
            <div className="mt-5 space-y-2 text-sm">
              <div className="rounded-lg border border-border bg-background/40 px-3 py-2 italic text-muted-foreground">
                « Si je dicte les dimensions d'un hématome, calcule et ajoute le volume. »
              </div>
              <div className="rounded-lg border border-border bg-background/40 px-3 py-2 italic text-muted-foreground">
                « Quand je dicte "Fazekas 1", ajoute : "Présence de quelques hypersignaux FLAIR de la substance blanche supratentorielle, en rapport avec des lésions de leucopathie vasculaire, Fazekas 1, compatibles avec l'âge." »
              </div>
            </div>
          </div>
        </div>

        {/* Avancé extras */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { I: FileText, t: "Conclusions suggérées", d: "Voice propose une conclusion contextuelle à partir des findings." },
            { I: Workflow, t: "Commandes vocales", d: "« Nouveau paragraphe », « supprime la dernière phrase »…" },
            { I: BookOpen, t: "Multi-spécialités", d: "Adapte le vocabulaire à l'examen : IRM, scanner, écho, mammo…" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-glass p-5">
              <c.I className="h-4 w-4 text-primary mb-3" />
              <div className="font-medium text-sm">{c.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CHAPITRE 9 — FEEDBACK */}
      <Section
        id="feedback"
        eyebrow="Chapitre 09 — Amélioration continue"
        title={<>Vos retours façonnent Voice.</>}
        lead={
          <>
            L'onglet <strong className="text-foreground">Feedback</strong> est votre canal direct vers l'équipe Gleamer.
            Vos retours nous aident à corriger les problèmes et à adapter Voice à vos besoins.
          </>
        }
      >
        <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-glass p-2">
          <MacWindow title="Voice — Faites-nous un retour">
            <div className="p-6">
              <div className="text-sm font-semibold text-neutral-900 mb-3">
                Faites-nous un retour
              </div>
              <textarea
                placeholder="Qu'est-ce qui pourrait être amélioré ?"
                className="w-full min-h-[120px] rounded-lg border border-neutral-200 p-3 text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-primary"
                defaultValue=""
              />
              <div className="mt-3 flex items-center justify-end gap-2">
                <button className="px-4 py-1.5 text-sm rounded-md text-neutral-600 hover:bg-neutral-100">
                  Fermer
                </button>
                <button className="px-4 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90 inline-flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Envoyer
                </button>
              </div>
            </div>
          </MacWindow>
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
            "Commencez toujours par le type d'examen.",
            "Laissez Voice trouver le bon modèle.",
            "Gardez les yeux sur l'image, pas sur l'écran texte.",
            "Utilisez le SpeechMike pour les raccourcis.",
            "Affinez avec « Il y a également… » si besoin.",
            "Envoyez-nous vos retours via Feedback.",
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

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
            <ListChecks className="h-3.5 w-3.5" />
            Fin de la formation
          </div>
          <div className="flex justify-center mb-6">
            <VoiceLogo size={48} />
          </div>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Gagnez du temps de dictée<br />tous les jours.
          </h3>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Dictez 3 fois moins de mots qu'avant pour un même résultat final.
            Focus à 100% sur le médical.
          </p>
          <a
            href="#intro"
            className="inline-flex items-center gap-2 mt-10 rounded-full border border-border bg-glass px-6 py-3 text-sm hover:border-primary/50 transition"
          >
            ↑ Retour au sommet
          </a>
        </div>
      </Section>
    </>
  );
}
