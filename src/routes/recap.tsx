import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { Mic, Sparkles, Zap, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/recap")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Récapitulatif — Formation Voice" },
      { name: "description", content: "Les points clés à retenir de la formation Voice." },
    ],
  }),
});

const KEY_POINTS = [
  "Parlez naturellement, comme à un confrère — pas de ponctuation à dicter.",
  'Commencez TOUJOURS par le type d\'examen : « C\'est une IRM… ».',
  "Importez 30 à 100 modèles, nommés \"Modalité + Anatomie\".",
  "Modèles écrits comme si tout était normal, sans latéralité.",
  "Utilisez Chrome ou Edge. Autorisez le microphone.",
  'Terminez par « Terminé, merci » ou bouton rouge, puis Ctrl+V.',
  "Configurez des prompts globaux ou par modèle pour automatiser.",
  "Envoyez du feedback pour faire évoluer Voice.",
];

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Récapitulatif"
        title={<>Gagnez du temps de dictée, <br/>tous les jours</>}
        description="Dictez 3 fois moins de mots qu'avant pour le même résultat final. Focus à 100% sur le médical."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {[
          { icon: Mic, v: "×3", l: "plus rapide" },
          { icon: Zap, v: "0", l: "ponctuation à dicter" },
          { icon: Sparkles, v: "100%", l: "focus médical" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.l} className="rounded-3xl border border-primary/30 bg-glass p-6 text-center">
              <Icon className="h-8 w-8 text-primary mx-auto" />
              <div className="text-5xl font-semibold text-gradient mt-3">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-glass p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" /> 8 réflexes à retenir
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {KEY_POINTS.map((p, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-border bg-background/40 p-4 animate-float-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 inline-flex h-6 w-6 rounded-full bg-success/20 text-success items-center justify-center">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-3xl bg-gradient-primary p-px shadow-glow">
        <div className="rounded-[calc(var(--radius)+10px)] bg-background/90 p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gradient">Prêt·e à dicter avec Voice ?</h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Re-parcourez les chapitres à votre rythme. Gardez ce site ouvert pendant vos premières dictées.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/dictee" className="rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
              Revoir la démo
            </Link>
            <Link to="/" className="rounded-full border border-border px-6 py-3 font-medium hover:bg-white/5">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      <ChapterNav current="/recap" />
    </div>
  );
}
