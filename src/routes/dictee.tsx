import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { DictationCompare } from "@/components/DictationCompare";
import { MicSimulator } from "@/components/MicSimulator";

export const Route = createFileRoute("/dictee")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Dictée naturelle — Voice" },
      { name: "description", content: "Dictez 3× plus court avec Voice. Démonstration interactive." },
    ],
  }),
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Chapitre 01"
        title={<>La révolution de <br/>la dictée naturelle</>}
        description="Une dictée 3 fois plus courte pour un même résultat final. Parlez naturellement, à votre rythme, comme à un confrère : l'IA s'occupe de structurer votre compte rendu."
      />

      <div className="mt-14 space-y-12">
        <DictationCompare />

        <div className="rounded-3xl border border-border bg-glass p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2">Essayez vous-même</div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Cliquez sur le micro et regardez la transcription se structurer
              </h3>
              <p className="text-muted-foreground mt-4 text-sm">
                Voice n'a pas besoin que vous dictiez la ponctuation, les sauts de ligne ou la mise en page.
                Commencez toujours par <em className="text-foreground">le type d'examen</em>, puis dictez vos
                observations comme vous les pensez.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  '« C\'est une IRM du genou droit pour gonalgie… »',
                  '« Il y a un épanchement modéré… »',
                  '« Terminé, merci » pour clôturer',
                ].map((q) => (
                  <li key={q} className="rounded-lg border border-border bg-background/40 px-3 py-2 italic text-muted-foreground">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <MicSimulator />
          </div>
        </div>
      </div>

      <ChapterNav current="/dictee" />
    </div>
  );
}
