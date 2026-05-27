import type { ProjectMetric } from "@/types/content";

type ProjectMetricsProps = {
  metrics: ProjectMetric[];
};

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Outcomes
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={`${metric.label}-${metric.value}`}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <p className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">
              {metric.value}
            </p>
            <p className="text-sm font-medium text-neutral-700 mb-1">{metric.label}</p>
            {metric.description && (
              <p className="text-sm text-neutral-500">{metric.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
