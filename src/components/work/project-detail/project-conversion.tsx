import Link from "next/link";
import { GlassButton } from "@/components/ui/glass-button";
import type { ProjectConversion } from "@/types/content";

type ProjectConversionProps = {
  conversion: ProjectConversion;
};

export function ProjectConversionSection({ conversion }: ProjectConversionProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-12 shadow-sm animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
        {conversion.heading}
      </h2>
      <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
        {conversion.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {conversion.ctas.map((cta) => {
          const useGlass =
            !cta.variant ||
            cta.variant === "primary" ||
            cta.variant === "red" ||
            cta.variant === "green";

          if (useGlass) {
            return (
              <GlassButton
                key={cta.href + cta.label}
                href={cta.href}
                external={cta.external}
                variant={
                  cta.variant === "red"
                    ? "red"
                    : cta.variant === "green"
                      ? "green"
                      : "default"
                }
              >
                {cta.label}
              </GlassButton>
            );
          }

          return (
            <Link
              key={cta.href + cta.label}
              href={cta.href}
              className="inline-flex items-center justify-center hover:bg-neutral-100 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full px-6 py-3.5 shadow-sm"
              {...(cta.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {cta.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
