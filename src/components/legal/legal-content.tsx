import { privacy, terms } from "../../../data";
import { LegalSection } from "./legal-section";
import { TableOfContents } from "./table-of-contents";

interface LegalContentProps {
  type: "privacy" | "terms";
}

export function LegalContent({ type }: LegalContentProps) {
  const data = type === "privacy" ? privacy : terms;

  const tocItems = data.sections.map((section) => ({
    id: section.title.toLowerCase().replace(/\s+/g, "-"),
    title: section.title,
    number: "number" in section ? section.number : undefined,
  }));

  return (
    <div className="grid lg:grid-cols-[1fr_200px] gap-12">
      <article className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-neutral-900 tracking-tight">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="text-lg text-neutral-500">{data.subtitle}</p>
          )}
        </header>

        {data.introduction && (
          <p className="text-neutral-600 leading-relaxed text-lg">
            {Array.isArray(data.introduction)
              ? data.introduction.join(" ")
              : data.introduction}
          </p>
        )}

        <div className="space-y-12 border-t border-neutral-200 pt-12">
          {data.sections.map((section, index) => (
            <LegalSection
              key={index}
              title={section.title}
              content={section.content}
              number={"number" in section ? section.number : undefined}
            />
          ))}
        </div>

        {data.agreementStatement && (
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
            <p className="text-neutral-600">{data.agreementStatement}</p>
            {data.contactEmail && (
              <p className="mt-4 text-neutral-900">
                Contact:{" "}
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="underline hover:text-neutral-600"
                >
                  {data.contactEmail}
                </a>
              </p>
            )}
          </div>
        )}
      </article>

      <aside>
        <TableOfContents items={tocItems} />
      </aside>
    </div>
  );
}
