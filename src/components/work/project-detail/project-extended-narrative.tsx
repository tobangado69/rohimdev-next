type ProjectExtendedNarrativeProps = {
  body: string;
};

export function ProjectExtendedNarrative({ body }: ProjectExtendedNarrativeProps) {
  const paragraphs = body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="space-y-4 animate-fade-up border-t border-neutral-200 pt-12">
      <h2 className="text-3xl font-medium tracking-tight text-neutral-900">
        Extended Narrative
      </h2>
      <div className="max-w-3xl space-y-4 text-lg text-neutral-600 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
