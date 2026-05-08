import { Mic, Sparkles } from "lucide-react";

/** Visual mockup of what a Voice-generated report looks like. */
export function ReportMockup({
  highlight,
  className = "",
}: {
  highlight?: "indication" | "findings" | "conclusion";
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white/95 text-neutral-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 text-[11px] text-neutral-500 tracking-tight">
          Gleamer Voice — IRM Genou D
        </div>
        <div className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-primary" />
          </span>
          <Mic className="h-3 w-3" /> Live
        </div>
      </div>

      <div className="p-5 text-[13px] leading-relaxed">
        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Indication
        </div>
        <p className={highlight === "indication" ? "bg-primary/15 rounded px-1.5 py-0.5 -mx-1.5 my-1 transition" : "my-1"}>
          Gonalgie interne persistante après un traumatisme en torsion.
        </p>

        <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Technique
        </div>
        <p className="my-1 text-neutral-700">3 plans DP FatSat, sagittale T1.</p>

        <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Résultats
        </div>
        <ul className={`my-1 space-y-1 ${highlight === "findings" ? "bg-primary/15 rounded px-1.5 py-1 -mx-1.5" : ""}`}>
          <li>Épanchement articulaire modéré.</li>
          <li>Rupture complète du ligament croisé antérieur.</li>
          <li>Fissure verticale de la corne postérieure du ménisque interne.</li>
          <li className="text-neutral-500">Compartiment externe sans particularité.</li>
        </ul>

        <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Conclusion
        </div>
        <p
          className={`my-1 font-medium ${
            highlight === "conclusion" ? "bg-primary/15 rounded px-1.5 py-0.5 -mx-1.5 inline-flex items-center gap-1" : ""
          }`}
        >
          {highlight === "conclusion" && <Sparkles className="h-3 w-3 text-primary" />}
          Rupture du LCA et lésion méniscale interne.
        </p>
      </div>
    </div>
  );
}
