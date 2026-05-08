import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, ArrowRight, Clock, Sparkles, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Maîtriser Gleamer Voice — Formation radiologues" },
      { name: "description", content: "Formation interactive de 20 minutes : la dictée naturelle Voice pour radiologues." },
    ],
  }),
});

const CHAPTERS = [
  { to: "/dictee", n: "01", title: "La dictée naturelle", desc: "3× plus court pour le même résultat. Démo avant/après." },
  { to: "/modeles", n: "02", title: "Voice s'adapte à vos modèles", desc: "Vos comptes rendus types, complétés au bon endroit." },
  { to: "/setup", n: "03", title: "Setup & matériel", desc: "Navigateur, microphone, raccourcis SpeechMike." },
  { to: "/workflow", n: "04", title: "Vos comptes rendus en 2 clics", desc: "Le geste quotidien : enregistrer, dicter, coller." },
  { to: "/avance", n: "05", title: "Aller plus loin", desc: "Insertions, mise en page, calculs et règles." },
] as const;

function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Formation interactive · Gleamer Voice
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gradient leading-[0.95]">
            Maîtriser <br />
            <span className="inline-flex items-center gap-4">
              <span className="relative inline-flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <Mic className="h-7 w-7 md:h-10 md:w-10 text-primary-foreground" />
              </span>
              Voice
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            La dictée 3× plus courte pour radiologues. Parlez naturellement, comme à un confrère :
            l'IA structure votre compte rendu pour vous.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/dictee"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Commencer la formation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/recap"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-7 py-3.5 font-medium hover:border-primary/50 transition"
            >
              Voir le récapitulatif
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { v: "×3", l: "plus rapide" },
              { v: "~20 min", l: "de formation", icon: Clock },
              { v: "100%", l: "focus médical", icon: Sparkles },
              { v: "0 ponctuation", l: "à dicter", icon: Zap },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-glass p-5">
                <div className="text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary/80">Programme</div>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">5 chapitres pour tout maîtriser</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Chaque chapitre comprend une démo interactive. Naviguez à votre rythme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHAPTERS.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative rounded-3xl border border-border bg-glass p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-glow animate-float-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="text-7xl font-semibold text-gradient opacity-30 group-hover:opacity-60 transition">
                {c.n}
              </div>
              <div className="mt-4 text-xl font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.desc}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                Explorer <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
