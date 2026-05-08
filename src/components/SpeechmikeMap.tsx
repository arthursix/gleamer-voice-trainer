import { useState } from "react";

type Btn = {
  id: string;
  x: number; // percent
  y: number;
  label: string;
  desc: string;
};

const BUTTONS: Btn[] = [
  { id: "rec", x: 50, y: 18, label: "Rouge — Enregistrer", desc: "Démarre / arrête la dictée Voice." },
  { id: "ins", x: 50, y: 32, label: "Insertion (INS)", desc: "Active une insertion automatique configurée." },
  { id: "fwd", x: 72, y: 50, label: "Avance rapide", desc: "Saute au prochain champ du compte rendu." },
  { id: "back", x: 28, y: 50, label: "Retour rapide", desc: "Revient au champ précédent." },
  { id: "f1", x: 35, y: 75, label: "F1 — Personnalisable", desc: "Bouton de fonction libre." },
  { id: "f2", x: 65, y: 75, label: "F2 — Personnalisable", desc: "Bouton de fonction libre." },
];

export function SpeechmikeMap() {
  const [active, setActive] = useState<string | null>("rec");
  const cur = BUTTONS.find((b) => b.id === active);

  return (
    <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        {/* Mike illustration (CSS art) */}
        <div className="relative aspect-[3/5] max-h-[520px] mx-auto w-full max-w-[260px] rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-soft border border-white/10 overflow-hidden">
          {/* Speaker grille top */}
          <div className="absolute inset-x-0 top-0 h-[8%] bg-zinc-950/80 flex items-center justify-center gap-1">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-zinc-600" />
            ))}
          </div>
          {/* Buttons */}
          {BUTTONS.map((b) => {
            const isActive = active === b.id;
            const isRec = b.id === "rec";
            return (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
                aria-label={b.label}
              >
                <span
                  className={`block h-10 w-10 rounded-full transition-all ${
                    isRec
                      ? "bg-red-500 shadow-[0_0_30px_-5px_rgb(239_68_68_/_0.8)]"
                      : "bg-zinc-800 border border-white/10"
                  } ${isActive ? "ring-4 ring-primary/60 scale-110" : "group-hover:scale-105"}`}
                />
              </button>
            );
          })}
          {/* Bottom logo plate */}
          <div className="absolute inset-x-0 bottom-0 h-[10%] flex items-center justify-center text-[10px] uppercase tracking-widest text-zinc-500">
            SpeechMike
          </div>
        </div>

        {/* Description panel */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-widest text-primary">Raccourcis SpeechMike</div>
          <h3 className="text-2xl font-semibold">Cliquez sur un bouton</h3>
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-5 min-h-[140px]">
            <div className="font-medium">{cur?.label}</div>
            <p className="text-sm text-muted-foreground mt-2">{cur?.desc}</p>
          </div>
          <ul className="space-y-1.5 text-sm">
            {BUTTONS.map((b) => (
              <li key={b.id}>
                <button
                  onClick={() => setActive(b.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors ${
                    active === b.id ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  {b.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
