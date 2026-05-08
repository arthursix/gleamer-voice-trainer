export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <header className="relative">
      <div className="absolute inset-0 -z-10 bg-hero opacity-60 blur-3xl" />
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
          {eyebrow}
        </div>
      )}
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
