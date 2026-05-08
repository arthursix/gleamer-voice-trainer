import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { useState } from "react";
import { Sparkles, Wand2, Calculator, Globe, Target } from "lucide-react";

export const Route = createFileRoute("/avance")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Aller plus loin avec Voice" },
      { name: "description", content: "Insertions, mise en page, calculs : exploitez toute la puissance de Voice." },
    ],
  }),
});

const TABS = [
  {
    id: "insert",
    icon: Wand2,
    title: "Insertions automatiques",
    desc: "Ne dictez qu'un mot pour qu'une phrase type soit insérée à l'endroit voulu.",
    prompt: 'Si je dis "fazekas 1", insère : « Présence de quelques hypersignaux FLAIR de la substance blanche supratentorielle, en rapport avec des lésions de leucopathie vasculaire, Fazekas 1, compatibles avec l\'âge. »',
    trigger: "« Fazekas 1 »",
    output: "Présence de quelques hypersignaux FLAIR de la substance blanche supratentorielle, en rapport avec des lésions de leucopathie vasculaire, Fazekas 1, compatibles avec l'âge.",
  },
  {
    id: "layout",
    icon: Sparkles,
    title: "Mise en page",
    desc: "Apprenez à Voice toutes vos préférences de mise en forme — une fois pour toutes.",
    prompt: "Mets toujours la conclusion en gras et en majuscules.",
    trigger: "Dictez la conclusion normalement",
    output: "**CONCLUSION : RUPTURE DU LCA ET LÉSION MÉNISCALE INTERNE.**",
  },
  {
    id: "calc",
    icon: Calculator,
    title: "Calculs & règles",
    desc: "Automatisez les règles métier et les calculs avec des critères stricts.",
    prompt: "Si je dicte les dimensions d'un hématome, calcule et ajoute le volume (formule ellipsoïde : L × l × h × 0.52).",
    trigger: "« Hématome de 4 × 3 × 2 cm »",
    output: "Hématome de 4 × 3 × 2 cm — volume estimé : 12,5 cm³.",
  },
];

const SCOPE = [
  { id: "global", icon: Globe, label: "Prompt global", desc: "S'applique à chaque dictée, quel que soit l'examen." },
  { id: "specific", icon: Target, label: "Prompt par modèle", desc: "S'applique uniquement à un modèle (ex : IRM Cérébrale)." },
];

function Page() {
  const [active, setActive] = useState(TABS[0].id);
  const [scope, setScope] = useState(SCOPE[0].id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Chapitre 05"
        title="Utilisez toute la puissance de Voice"
        description="Donnez à Voice des instructions naturelles. Il les applique pour vous, à chaque dictée."
      />

      <div className="mt-14 space-y-8">
        {/* Scope toggle */}
        <div className="rounded-3xl border border-border bg-glass p-6">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Portée des instructions</div>
          <div className="grid md:grid-cols-2 gap-3">
            {SCOPE.map((s) => {
              const Icon = s.icon;
              const isActive = scope === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setScope(s.id)}
                  className={`text-left rounded-2xl border p-4 transition-all ${
                    isActive ? "border-primary bg-primary/10 shadow-glow" : "border-border bg-background/40 hover:border-primary/40"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="mt-2 font-medium">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    isActive
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border border-border text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.title}
                </button>
              );
            })}
          </div>

          <div key={tab.id} className="grid lg:grid-cols-2 gap-6 animate-float-up">
            {/* Prompt config */}
            <div>
              <div className="text-xs uppercase tracking-widest text-primary/80 mb-2">
                {scope === "global" ? "Ajouter un prompt global" : "Prompt pour ce modèle"}
              </div>
              <div className="rounded-2xl border border-primary/30 bg-background/40 p-4 font-mono text-sm leading-relaxed">
                <span className="text-primary">{">"}</span> {tab.prompt}
              </div>
              <p className="text-sm text-muted-foreground mt-4">{tab.desc}</p>
            </div>

            {/* Demo */}
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <div className="text-xs text-muted-foreground mb-3">Vous dictez</div>
              <div className="rounded-lg bg-muted/40 px-3 py-2 text-sm italic">{tab.trigger}</div>
              <div className="my-3 text-center text-primary text-xl">↓</div>
              <div className="text-xs text-muted-foreground mb-2">Voice écrit</div>
              <div className="rounded-lg bg-primary/10 border border-primary/30 px-3 py-3 text-sm">{tab.output}</div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="rounded-3xl border border-accent/40 bg-accent/5 p-6 md:p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent">Boucle d'amélioration</div>
              <h3 className="text-2xl font-semibold mt-1">Faites-nous des retours</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                L'onglet <strong className="text-foreground">Feedback</strong> dans Voice nous aide à corriger
                les problèmes et à adapter l'IA à vos besoins. Plus vous nous parlez, plus Voice s'améliore.
              </p>
            </div>
            <button className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 whitespace-nowrap">
              Envoyer un feedback
            </button>
          </div>
        </div>
      </div>

      <ChapterNav current="/avance" />
    </div>
  );
}
