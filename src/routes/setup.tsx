import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { SpeechmikeMap } from "@/components/SpeechmikeMap";
import { Chrome, Globe, Mic, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/setup")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Setup Voice — Navigateur, micro, raccourcis" },
      { name: "description", content: "Préparez votre poste : navigateur, microphone, SpeechMike." },
    ],
  }),
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Chapitre 03"
        title="Vous préparer à utiliser Voice"
        description="Trois étapes rapides pour démarrer dans les meilleures conditions."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {/* Step 1 */}
        <div className="rounded-3xl border border-border bg-glass p-6">
          <div className="text-5xl font-semibold text-gradient opacity-50">01</div>
          <h3 className="text-xl font-semibold mt-2">Navigateur</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Voice fonctionne sur les navigateurs modernes basés sur Chromium.
          </p>
          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-3 rounded-xl bg-success/10 border border-success/30 px-3 py-2 text-sm">
              <Chrome className="h-4 w-4 text-success" /> Chrome <span className="ml-auto text-success">Recommandé</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-success/10 border border-success/30 px-3 py-2 text-sm">
              <Globe className="h-4 w-4 text-success" /> Edge <span className="ml-auto text-success">Recommandé</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-destructive" /> Safari / Firefox <span className="ml-auto text-destructive">Déconseillés</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-3xl border border-border bg-glass p-6">
          <div className="text-5xl font-semibold text-gradient opacity-50">02</div>
          <h3 className="text-xl font-semibold mt-2">Matériel</h3>
          <p className="text-sm text-muted-foreground mt-2">Sélectionnez votre microphone dans la liste Voice.</p>
          <div className="mt-5 rounded-xl border border-border bg-background/40 p-3 text-sm">
            <div className="text-xs text-muted-foreground">Micros disponibles (3)</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2 rounded-lg bg-primary/15 border border-primary/40 px-3 py-2">
                <Mic className="h-3.5 w-3.5 text-primary" /> SpeechMike
                <span className="ml-auto text-xs text-primary">✓ sélectionné</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground">
                <Mic className="h-3.5 w-3.5" /> Microphone MacBook Pro
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground">
                <Mic className="h-3.5 w-3.5" /> Casque Bluetooth
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-3xl border border-primary/40 bg-primary/5 p-6 relative overflow-hidden">
          <div className="absolute inset-0 shimmer pointer-events-none" />
          <div className="relative">
            <div className="text-5xl font-semibold text-gradient opacity-50">03</div>
            <h3 className="text-xl font-semibold mt-2">Et surtout…</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Autorisez Voice à utiliser votre microphone.
            </p>
            <div className="mt-5 rounded-xl border border-border bg-background/60 p-3 text-sm">
              <div className="font-medium">🎙️ Autoriser le microphone ?</div>
              <div className="text-xs text-muted-foreground mt-1">voice.gleamer.ai veut accéder à votre micro.</div>
              <div className="mt-3 flex gap-2">
                <button className="text-xs rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Autoriser</button>
                <button className="text-xs rounded-md border border-border px-3 py-1.5 text-muted-foreground">Bloquer</button>
              </div>
            </div>
            <div className="mt-4 text-xs text-primary">
              💡 Si la demande n'apparaît pas, rafraîchissez la page.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SpeechmikeMap />
      </div>

      <ChapterNav current="/setup" />
    </div>
  );
}
