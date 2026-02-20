interface LegalSectionProps {
  title: string;
  content: string | string[];
  number?: string;
}

export function LegalSection({ title, content, number }: LegalSectionProps) {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-3">
        {number && (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-sm font-medium">
            {number}
          </span>
        )}
        {title}
      </h2>
      {Array.isArray(content) ? (
        <ul className="space-y-2 text-neutral-600">
          {content.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-600 leading-relaxed">{content}</p>
      )}
    </section>
  );
}
