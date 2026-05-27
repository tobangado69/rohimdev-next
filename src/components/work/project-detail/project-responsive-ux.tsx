import type { ProjectResponsiveUx } from "@/types/content";
import { hasItems } from "./utils";

type ProjectResponsiveUxProps = {
  responsiveUx: ProjectResponsiveUx;
};

export function ProjectResponsiveUxSection({ responsiveUx }: ProjectResponsiveUxProps) {
  return (
    <section className="space-y-6 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Responsive & UX System
      </h2>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm space-y-6 max-w-3xl">
        {hasItems(responsiveUx.breakpoints) && (
          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-2">
              Breakpoints
            </h3>
            <ul className="space-y-1">
              {responsiveUx.breakpoints.map((item) => (
                <li key={item} className="text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {hasItems(responsiveUx.interactionNotes) && (
          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-2">
              Interactions
            </h3>
            <ul className="space-y-1">
              {responsiveUx.interactionNotes.map((item) => (
                <li key={item} className="text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {hasItems(responsiveUx.accessibilityNotes) && (
          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-2">
              Accessibility
            </h3>
            <ul className="space-y-1">
              {responsiveUx.accessibilityNotes.map((item) => (
                <li key={item} className="text-neutral-600">
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
