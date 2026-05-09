import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "intro", label: "Intro", tone: "intro" },
  { id: "dictee", label: "Dictée naturelle", tone: "blue" },
  { id: "modeles", label: "Modèles", tone: "violet" },
  { id: "libre", label: "Dictée libre", tone: "teal" },
  { id: "live", label: "Démo live", tone: "primary" },
  { id: "setup", label: "Setup", tone: "amber" },
  { id: "workflow", label: "Workflow", tone: "blue" },
  { id: "import", label: "Vos modèles", tone: "violet" },
  { id: "prompts", label: "Prompts", tone: "primary" },
  { id: "feedback", label: "Feedback", tone: "teal" },
  { id: "recap", label: "Récap", tone: "intro" },
] as const;

export type Tone = (typeof SECTIONS)[number]["tone"];

export function useActiveSection() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export function useActiveTone(): Tone {
  const active = useActiveSection();
  const found = SECTIONS.find((s) => s.id === active);
  return (found?.tone ?? "intro") as Tone;
}

export function ScrollDots() {
  const active = useActiveSection();
  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          className="group relative flex items-center justify-end gap-3"
        >
          <span className="opacity-0 group-hover:opacity-100 transition text-xs text-muted-foreground bg-glass px-2 py-1 rounded-full border border-border whitespace-nowrap">
            {s.label}
          </span>
          <span
            className={`block h-2 w-2 rounded-full transition-all ${
              active === s.id ? "bg-primary scale-150 shadow-glow" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
