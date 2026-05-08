import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";

/**
 * Interactive microphone simulation.
 * - Click to "record" → waveform animates, transcript types out word by word.
 * - Doesn't actually use the mic (training context). It's a faithful visual.
 */
export function MicSimulator({
  phrases = [
    "C'est une IRM du genou droit pour gonalgie interne persistante.",
    "Il y a un épanchement modéré et une rupture complète du LCA.",
    "Au niveau du ménisque interne, fissure verticale de la corne postérieure.",
    "Terminé, merci.",
  ],
}: {
  phrases?: string[];
}) {
  const [recording, setRecording] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);

  useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => {
      const phrase = phrases[phraseIdx.current];
      if (!phrase) {
        setRecording(false);
        return;
      }
      charIdx.current += 1;
      const text = phrase.slice(0, charIdx.current);
      setCurrent(text);
      if (charIdx.current >= phrase.length) {
        setLines((l) => [...l, phrase]);
        setCurrent("");
        phraseIdx.current += 1;
        charIdx.current = 0;
      }
    }, 35);
    return () => clearInterval(id);
  }, [recording, phrases]);

  const start = () => {
    setLines([]);
    setCurrent("");
    phraseIdx.current = 0;
    charIdx.current = 0;
    setRecording(true);
  };

  return (
    <div className="rounded-3xl border border-border bg-glass p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-8 items-center">
      {/* Mic button */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => (recording ? setRecording(false) : start())}
          className={`relative inline-flex h-28 w-28 items-center justify-center rounded-full transition-all ${
            recording
              ? "bg-destructive shadow-[0_0_60px_-5px_oklch(0.65_0.24_25_/_0.7)] animate-pulse-ring"
              : "bg-gradient-primary shadow-glow hover:scale-105"
          }`}
        >
          {recording ? (
            <Square className="h-10 w-10 text-primary-foreground fill-current" />
          ) : (
            <Mic className="h-12 w-12 text-primary-foreground" />
          )}
        </button>
        <div className="text-sm text-muted-foreground text-center">
          {recording ? "Enregistrement…" : "Cliquez pour démarrer"}
        </div>
        {/* Wave bars */}
        <div className="flex items-end gap-1 h-10">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className={`w-1 rounded-full bg-primary ${recording ? "wave-bar" : ""}`}
              style={{
                height: recording ? "100%" : "20%",
                animationDelay: `${i * 0.07}s`,
                opacity: recording ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Transcript */}
      <div className="rounded-2xl bg-background/40 border border-border p-5 min-h-[260px]">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Transcription en direct</div>
        {lines.length === 0 && !current ? (
          <p className="text-muted-foreground text-sm">
            Démarrez l'enregistrement et parlez naturellement, comme à un confrère. Voice écoute, comprend, et structure.
          </p>
        ) : (
          <div className="space-y-2 text-sm leading-relaxed">
            {lines.map((l, i) => (
              <div key={i} className="animate-float-up text-foreground">
                {l}
              </div>
            ))}
            {current && (
              <div className="text-muted-foreground">
                {current}
                <span className="inline-block w-1.5 h-4 bg-primary align-middle ml-0.5 animate-pulse" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
