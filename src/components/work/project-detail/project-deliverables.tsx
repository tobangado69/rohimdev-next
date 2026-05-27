import type { ProjectDeliverable } from "@/types/content";

type ProjectDeliverablesProps = {
  deliverables: ProjectDeliverable[];
};

export function ProjectDeliverables({ deliverables }: ProjectDeliverablesProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Deliverables
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {deliverables.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-neutral-900 underline hover:text-neutral-600"
              >
                View deliverable
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
