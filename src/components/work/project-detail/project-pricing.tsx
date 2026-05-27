import type { ProjectPricing } from "@/types/content";
import { hasItems } from "./utils";

type ProjectPricingProps = {
  pricing: ProjectPricing;
};

export function ProjectPricingSection({ pricing }: ProjectPricingProps) {
  return (
    <section className="space-y-6 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Project Investment Context
      </h2>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm max-w-2xl">
        <p className="text-sm uppercase tracking-wide text-neutral-400 mb-2">
          {pricing.model}
        </p>
        {pricing.startingAt && (
          <p className="text-2xl font-medium text-neutral-900 mb-4">
            From {pricing.startingAt}
          </p>
        )}
        {hasItems(pricing.included) && (
          <ul className="space-y-2 mb-4">
            {pricing.included.map((item) => (
              <li key={item} className="text-neutral-600 flex gap-2">
                <span className="text-neutral-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        )}
        {pricing.note && (
          <p className="text-sm text-neutral-500">{pricing.note}</p>
        )}
      </div>
    </section>
  );
}
