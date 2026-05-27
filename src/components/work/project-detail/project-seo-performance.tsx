import type { ProjectSeoPerformance } from "@/types/content";
import { hasItems } from "./utils";

type ProjectSeoPerformanceProps = {
  seoPerformance: ProjectSeoPerformance;
};

export function ProjectSeoPerformanceSection({
  seoPerformance,
}: ProjectSeoPerformanceProps) {
  return (
    <section className="space-y-6 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        SEO & Performance
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {hasItems(seoPerformance.performanceTargets) && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
              Performance
            </h3>
            <ul className="space-y-2">
              {seoPerformance.performanceTargets.map((item) => (
                <li key={item} className="text-sm text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {hasItems(seoPerformance.seoNotes) && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
              SEO
            </h3>
            <ul className="space-y-2">
              {seoPerformance.seoNotes.map((item) => (
                <li key={item} className="text-sm text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {hasItems(seoPerformance.technicalChecks) && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
              Technical checks
            </h3>
            <ul className="space-y-2">
              {seoPerformance.technicalChecks.map((item) => (
                <li key={item} className="text-sm text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
