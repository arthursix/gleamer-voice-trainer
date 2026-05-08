import { useState } from "react";
import { FileText, Sparkles, ArrowRight } from "lucide-react";

const TEMPLATE_BLOCKS = [
  { id: "title", label: "TITRE", text: "IRM DU GENOU" },
  { id: "indic", label: "INDICATION", text: "Indication clinique standard." },
  { id: "tech", label: "TECHNIQUE", text: "3 plans DP FatSat, sagittale T1." },
  { id: "compart-int", label: "RÉSULTATS — Compartiment interne", text: "Pas de fissure méniscale. Cartilage normal." },
  { id: "compart-ext", label: "RÉSULTATS — Compartiment externe", text: "Pas de fissure méniscale. Cartilage normal." },
  { id: "lig", label: "LIGAMENTS", text: "Ligament croisé antérieur intègre. Ligament croisé postérieur intègre." },
  { id: "epanch", label: "ÉPANCHEMENT", text: "Absence d'épanchement articulaire ou de kyste poplité." },
  { id: "ccl", label: "CONCLUSION", text: "" },
];

type Diff =
  | { id: string; type: "replace"; before: string; after: string }
  | { id: string; type: "add"; before: string; after: string };

const DIFFS: Record<string, Diff> = {
  indic: {
    id: "indic",
    type: "replace",
    before: "Indication clinique standard.",
    after: "Gonalgie interne persistante après un traumatisme en torsion.",
  },
  "compart-int": {
    id: "compart-int",
    type: "replace",
    before: "Pas de fissure méniscale. Cartilage normal.",
    after: "Fissure verticale de la corne postérieure du ménisque interne. Cartilage normal.",
  },
  lig: {
    id: "lig",
    type: "replace",
    before: "Ligament croisé antérieur intègre. Ligament croisé postérieur intègre.",
    after: "Rupture complète du ligament croisé antérieur. Ligament croisé postérieur intègre.",
  },
  epanch: {
    id: "epanch",
    type: "replace",
    before: "Absence d'épanchement articulaire ou de kyste poplité.",
    after: "Épanchement articulaire modéré. Absence de kyste poplité.",
  },
  ccl: {
    id: "ccl",
    type: "add",
    before: "",
    after: "Rupture du LCA et lésion méniscale interne.",
  },
};

export function TemplateMagic() {
  const [filled, setFilled] = useState(false);

  return (
    <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary">Modèle intelligent</div>
          <h3 className="text-2xl font-semibold mt-1">Voice complète votre compte rendu type</h3>
        </div>
        <button
          onClick={() => setFilled((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
        >
          <Sparkles className="h-4 w-4" />
          {filled ? "Réinitialiser" : "Voir Voice à l'œuvre"}
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        {/* Modèle vide */}
        <div className="rounded-2xl bg-background/40 border border-border p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <FileText className="h-3.5 w-3.5" /> Votre modèle "IRM Genou"
          </div>
          {TEMPLATE_BLOCKS.map((b) => (
            <div key={b.id} className="mb-3">
              <div className="text-[10px] uppercase tracking-wider text-primary/70">{b.label}</div>
              <div className="text-sm text-muted-foreground">{b.text || <span className="italic">(vide)</span>}</div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <ArrowRight className={`h-8 w-8 transition-colors ${filled ? "text-primary" : "text-muted-foreground"}`} />
        </div>

        {/* Compte rendu rempli */}
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-5 relative overflow-hidden">
          {filled && <div className="absolute inset-0 shimmer pointer-events-none" />}
          <div className="relative">
            <div className="flex items-center gap-2 text-xs text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Compte rendu généré
            </div>
            {TEMPLATE_BLOCKS.map((b) => {
              const diff = DIFFS[b.id];
              const text = filled && diff ? diff.after : b.text;
              const highlight = filled && diff;
              return (
                <div key={b.id} className="mb-3">
                  <div className="text-[10px] uppercase tracking-wider text-primary/70">{b.label}</div>
                  <div
                    className={`text-sm transition-all ${
                      highlight
                        ? "text-foreground bg-primary/15 rounded px-2 py-1 -mx-2 animate-float-up"
                        : "text-foreground/80"
                    }`}
                  >
                    {text || <span className="italic text-muted-foreground">(vide)</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        {[
          { t: "Trouve votre modèle", d: "Voice détecte le bon compte rendu pour l'examen dicté." },
          { t: "Place au bon endroit", d: "Vos observations s'insèrent à la section adéquate." },
          { t: "Génère la conclusion", d: "Si vous ne la dictez pas, Voice la propose." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-background/40 p-4">
            <div className="font-medium">{c.t}</div>
            <div className="text-muted-foreground text-xs mt-1">{c.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
