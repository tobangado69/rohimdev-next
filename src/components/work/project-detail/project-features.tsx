import type { ProjectFeature } from "@/types/content";

type ProjectFeaturesProps = {
  features: ProjectFeature[];
};

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Key Features
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            {feature.impact && (
              <p className="mt-3 text-sm text-neutral-500">{feature.impact}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
