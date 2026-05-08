import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { TemplateMagic } from "@/components/TemplateMagic";
import { Check, X, Upload, FileText } from "lucide-react";

export const Route = createFileRoute("/modeles")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Vos modèles dans Voice" },
      { name: "description", content: "Importez vos modèles de comptes rendus. Voice s'adapte à vous." },
    ],
  }),
});

const RULES = [
  { ok: true, t: "Nom sans équivoque", d: "Format \"Modalité + Anatomie\", ex : « IRM Genou »." },
  { ok: true, t: "Description tout normal", d: "Décrivez l'examen comme s'il n'y avait aucune anomalie." },
  { ok: true, t: "Sans latéralité", d: "Pas de \"droit/gauche\" — Voice l'adapte au cas par cas." },
  { ok: false, t: "Pas de phrases conditionnelles", d: "Évitez « si… alors… » dans les modèles." },
  { ok: false, t: "Pas de doublons", d: "Un seul modèle par couple modalité/anatomie." },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Chapitre 02"
        title="Voice s'adapte à vos modèles"
        description="Voice trouve votre compte rendu pour l'examen, complète vos observations au bon endroit, supprime les phrases négatives associées et — si vous ne la dictez pas — génère la conclusion."
      />

      <div className="mt-14 space-y-10">
        <TemplateMagic />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Import */}
          <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
            <Upload className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-2xl font-semibold">Importez vos propres modèles</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Gardez votre mise en page et vos habitudes. Voice s'adapte à vous, et pas l'inverse.
              Importez vos fichiers <code className="text-foreground">.docx</code>, <code className="text-foreground">.pdf</code>, <code className="text-foreground">.doc</code>.
            </p>
            <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-center">
              <FileText className="h-10 w-10 mx-auto text-primary/70" />
              <div className="mt-3 font-medium">Glissez-déposez vos modèles</div>
              <div className="text-xs text-muted-foreground mt-1">Pour des performances optimales : 30 à 100 modèles.</div>
            </div>
          </div>

          {/* Rules */}
          <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Qu'est-ce qu'un bon modèle ?</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Pour le reste, vous êtes libres : Voice place vos observations au bon endroit.
            </p>
            <ul className="mt-6 space-y-3">
              {RULES.map((r) => (
                <li key={r.t} className="flex gap-3 rounded-xl border border-border bg-background/40 p-3">
                  <span
                    className={`shrink-0 inline-flex h-7 w-7 rounded-full items-center justify-center ${
                      r.ok ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {r.ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                  <div>
                    <div className="font-medium text-sm">{r.t}</div>
                    <div className="text-xs text-muted-foreground">{r.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ChapterNav current="/modeles" />
    </div>
  );
}
