import { useEffect, useRef, useState } from "react";
import { Mic, Play, RotateCcw, Square } from "lucide-react";

const BEFORE = `Insérer IRM du genou droit. Champ suivant. Gonalgie interne persistante après un traumatisme en torsion. Point. Champ suivant. Épanchement articulaire modéré. Point nouvelle ligne. Pas de kyste poplité. Point nouvelle ligne. Rupture complète du ligament croisé antérieur. Point. Ligament croisé postérieur intègre. Point nouvelle ligne. Présence d'une fissure verticale de la corne postérieure du ménisque interne. Point. Cartilage virgule ligament collatéral médial et patte d'oie sans particularité. Point nouvelle ligne. Compartiments externes et fémoro-patellaire d'aspect normal pour les ménisques virgule les cartilages et les tendons. Point. Champ suivant. Rupture du LCA et lésion méniscale interne. Point.`;

const AFTER = `IRM du genou droit pour une gonalgie interne persistante après un trauma en torsion. Il y a un épanchement modéré et une rupture complète du LCA. Au niveau du ménisque interne, il y a une fissure verticale de la corne postérieure.`;

function useTyper(text: string, active: boolean, speed = 18) {
  const [out, setOut] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    if (!active) return;
    idx.current = 0;
    setOut("");
    const id = setInterval(() => {
      idx.current += 1;
      setOut(text.slice(0, idx.current));
      if (idx.current >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

export function DictationCompare() {
  const [stage, setStage] = useState<"idle" | "before" | "after" | "done">("idle");
  const beforeText = useTyper(BEFORE, stage === "before", 8);
  const afterText = useTyper(AFTER, stage === "after", 22);

  // Auto-progress
  useEffect(() => {
    if (stage === "before") {
      const t = setTimeout(() => setStage("after"), Math.min(BEFORE.length * 8 + 600, 9000));
      return () => clearTimeout(t);
    }
    if (stage === "after") {
      const t = setTimeout(() => setStage("done"), AFTER.length * 22 + 600);
      return () => clearTimeout(t);
    }
  }, [stage]);

  const playing = stage === "before" || stage === "after";

  const beforeWords = BEFORE.trim().split(/\s+/).length;
  const afterWords = AFTER.trim().split(/\s+/).length;

  return (
    <div className="rounded-3xl border border-border bg-glass p-6 md:p-8 shadow-soft">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary">Démo interactive</div>
          <h3 className="text-2xl font-semibold mt-1">Avant Voice / Avec Voice</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setStage("before")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
          >
            {playing ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {playing ? "Lecture…" : "Lancer la démo"}
          </button>
          <button
            onClick={() => setStage("idle")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm hover:bg-white/5"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Avant */}
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 min-h-[260px]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-widest text-destructive/90">
              Avant Voice
            </span>
            <span className={`text-xs ${stage === "before" ? "text-foreground" : "text-muted-foreground"}`}>
              {stage === "idle" ? `${beforeWords} mots` : `${beforeText.split(/\s+/).filter(Boolean).length} / ${beforeWords} mots`}
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            {stage === "idle" ? (
              <span className="text-muted-foreground">Cliquez sur « Lancer la démo » pour voir la dictée traditionnelle.</span>
            ) : (
              <>
                {beforeText}
                {stage === "before" && <span className="inline-block w-1.5 h-4 bg-primary align-middle ml-0.5 animate-pulse" />}
              </>
            )}
          </p>
        </div>

        {/* Après */}
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-5 min-h-[260px] relative overflow-hidden">
          {stage === "after" && <div className="absolute inset-0 shimmer" />}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-1">
                <Mic className="h-3 w-3" /> Avec Voice
              </span>
              <span className="text-xs text-muted-foreground">
                {stage === "idle" || stage === "before" ? `${afterWords} mots` : `${afterText.split(/\s+/).filter(Boolean).length} / ${afterWords} mots`}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {stage === "idle" || stage === "before" ? (
                <span className="text-muted-foreground">
                  Voice écoute votre raisonnement clinique et structure le compte rendu pour vous.
                </span>
              ) : (
                <>
                  {afterText}
                  {stage === "after" && <span className="inline-block w-1.5 h-4 bg-primary align-middle ml-0.5 animate-pulse" />}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {stage === "done" && (
        <div className="mt-6 rounded-2xl bg-gradient-primary/20 border border-primary/40 p-5 animate-float-up"
          style={{ background: "linear-gradient(135deg, oklch(0.62 0.24 265 / 0.18), oklch(0.78 0.18 220 / 0.08))" }}>
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <div className="text-3xl font-semibold text-gradient">
                {Math.round((1 - afterWords / beforeWords) * 100)}% de mots en moins
              </div>
              <div className="text-sm text-muted-foreground">
                {beforeWords} mots dictés → {afterWords} mots avec Voice. Pour le même compte rendu final.
              </div>
            </div>
            <div className="ml-auto text-5xl font-semibold tabular-nums">
              ×{(beforeWords / afterWords).toFixed(1)}
              <div className="text-xs text-muted-foreground font-normal">plus rapide</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
