import type { ProjectNarrativeSection as NarrativeSection } from "@/types/content";
import { hasItems } from "./utils";

type ProjectNarrativeSectionProps = {
  section: NarrativeSection;
  className?: string;
};

export function ProjectNarrativeSection({
  section,
  className = "",
}: ProjectNarrativeSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        {section.heading}
      </h2>
      <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
        {section.summary}
      </p>
      {hasItems(section.bullets) && (
        <ul className="grid gap-3 md:grid-cols-2 max-w-4xl">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-neutral-700 bg-white border border-neutral-200 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-neutral-400 mt-0.5">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
