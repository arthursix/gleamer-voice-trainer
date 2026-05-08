import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { StepFlow } from "@/components/StepFlow";

export const Route = createFileRoute("/workflow")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Vos comptes rendus en 2 clics — Voice" },
      { name: "description", content: "Le workflow Voice : enregistrer, dicter, coller. Trois gestes." },
    ],
  }),
});

const STEPS = [
  {
    title: "Démarrez l'enregistrement",
    body: <>Appuyez sur le <strong>bouton rouge</strong> du SpeechMike (ou de l'interface Voice).</>,
  },
  {
    title: "Dictez en commençant TOUJOURS par le type d'examen",
    body: (
      <>
        Exemple : <em>« C'est une IRM de la prostate… »</em>. Voice détecte automatiquement votre modèle
        et y ajoute le pathologique au bon endroit.
      </>
    ),
    tip: 'Précédez l\'examen par "C\'est une…" pour aider Voice à identifier la modalité.',
  },
  {
    title: "Terminez l'enregistrement",
    body: (
      <>
        Re-cliquez sur le bouton rouge ou dites simplement <em>« Terminé, merci »</em>.
      </>
    ),
  },
  {
    title: "Collez votre compte rendu dans votre RIS",
    body: (
      <>
        <kbd className="px-2 py-0.5 rounded bg-background border border-border text-xs">Ctrl</kbd> +{" "}
        <kbd className="px-2 py-0.5 rounded bg-background border border-border text-xs">V</kbd> dans
        votre logiciel métier.
      </>
    ),
  },
  {
    title: "Modifier ou compléter ?",
    body: (
      <>
        Reprenez la dictée à tout moment : <em>« Il y a également un épanchement articulaire de faible
        abondance »</em>. Voice intègre l'ajout au bon endroit.
      </>
    ),
    tip: "Pas besoin de tout redicter : ajoutez seulement ce qui change.",
  },
];

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Chapitre 04"
        title="Vos comptes rendus en 2 clics"
        description="Le geste quotidien, mémorisé en 5 étapes. Cliquez sur les pastilles pour cocher votre progression."
      />

      <div className="mt-14">
        <StepFlow steps={STEPS} />
      </div>

      <ChapterNav current="/workflow" />
    </div>
  );
}
