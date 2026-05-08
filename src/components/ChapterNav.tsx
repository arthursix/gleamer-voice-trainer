import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ORDER = ["/", "/dictee", "/modeles", "/setup", "/workflow", "/avance", "/recap"];
const LABELS: Record<string, string> = {
  "/": "Accueil",
  "/dictee": "Dictée naturelle",
  "/modeles": "Modèles",
  "/setup": "Setup & matériel",
  "/workflow": "Workflow",
  "/avance": "Aller plus loin",
  "/recap": "Récap",
};

export function ChapterNav({ current }: { current: string }) {
  const i = ORDER.indexOf(current);
  const prev = i > 0 ? ORDER[i - 1] : null;
  const next = i < ORDER.length - 1 ? ORDER[i + 1] : null;

  return (
    <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-between items-stretch border-t border-border pt-8">
      {prev ? (
        <Link
          to={prev}
          className="group flex-1 rounded-2xl border border-border bg-glass p-5 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowLeft className="h-3 w-3" /> Précédent
          </div>
          <div className="mt-1 font-medium">{LABELS[prev]}</div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          to={next}
          className="group flex-1 rounded-2xl border border-primary/40 bg-gradient-primary/10 p-5 hover:shadow-glow transition-all text-right"
          style={{ background: "linear-gradient(135deg, oklch(0.62 0.24 265 / 0.18), oklch(0.78 0.18 220 / 0.1))" }}
        >
          <div className="flex items-center gap-2 justify-end text-xs text-primary">
            Suivant <ArrowRight className="h-3 w-3" />
          </div>
          <div className="mt-1 font-medium">{LABELS[next]}</div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
