import { useState } from "react";
import { Check } from "lucide-react";

export function StepFlow({
  steps,
}: {
  steps: { title: string; body: React.ReactNode; tip?: string }[];
}) {
  const [done, setDone] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setDone((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <ol className="relative space-y-4">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" aria-hidden />
      {steps.map((s, i) => {
        const isDone = done.has(i);
        return (
          <li key={i} className="relative pl-14 animate-float-up" style={{ animationDelay: `${i * 70}ms` }}>
            <button
              onClick={() => toggle(i)}
              className={`absolute left-0 top-0 h-10 w-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                isDone
                  ? "bg-success text-background shadow-glow"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {isDone ? <Check className="h-5 w-5" /> : i + 1}
            </button>
            <div
              className={`rounded-2xl border bg-glass p-5 transition-colors ${
                isDone ? "border-success/40" : "border-border"
              }`}
            >
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.body}</div>
              {s.tip && (
                <div className="mt-3 text-xs rounded-lg bg-primary/10 text-primary px-3 py-2 border border-primary/20">
                  💡 {s.tip}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
