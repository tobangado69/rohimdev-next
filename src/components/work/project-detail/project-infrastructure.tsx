import type { ProjectInfrastructure } from "@/types/content";

type ProjectInfrastructureProps = {
  infrastructure: ProjectInfrastructure;
};

const INFRA_FIELDS: Array<{ key: keyof ProjectInfrastructure; label: string }> = [
  { key: "hosting", label: "Hosting" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "storage", label: "Storage" },
  { key: "cicd", label: "CI/CD" },
  { key: "monitoring", label: "Monitoring" },
];

export function ProjectInfrastructureSection({
  infrastructure,
}: ProjectInfrastructureProps) {
  const entries = INFRA_FIELDS.filter(({ key }) => infrastructure[key]);

  if (entries.length === 0) return null;

  return (
    <section className="space-y-6 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Infrastructure
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-2">
              {label}
            </h3>
            <p className="text-neutral-700">{infrastructure[key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
