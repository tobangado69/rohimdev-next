import type { ProjectProcessStep } from "@/types/content";
import { hasItems } from "./utils";

type ProjectProcessProps = {
  steps: ProjectProcessStep[];
};

export function ProjectProcess({ steps }: ProjectProcessProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Process
      </h2>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li
            key={`${step.phase}-${step.title}`}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-sm font-medium text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-wide text-neutral-400">
                {step.phase}
              </span>
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-2">{step.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            {hasItems(step.outputs) && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {step.outputs.map((output) => (
                  <li
                    key={output}
                    className="text-xs bg-neutral-100 border border-neutral-200 rounded-md px-2.5 py-1 text-neutral-600"
                  >
                    {output}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
