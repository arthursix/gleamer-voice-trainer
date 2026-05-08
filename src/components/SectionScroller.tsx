import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "dictee", label: "Dictée naturelle" },
  { id: "modeles", label: "Modèles" },
  { id: "live", label: "Démo en direct" },
  { id: "setup", label: "Setup & matériel" },
  { id: "workflow", label: "Workflow" },
  { id: "avance", label: "Aller plus loin" },
  { id: "recap", label: "Récap" },
] as const;

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
