import Image from "next/image";
import type { ProjectTestimonial as Testimonial } from "@/types/content";

type ProjectTestimonialProps = {
  testimonial: Testimonial;
};

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  return (
    <section className="animate-fade-up">
      <blockquote className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm max-w-3xl">
        <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <footer className="flex items-center gap-4">
          {testimonial.avatar && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-neutral-200">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <cite className="not-italic font-medium text-neutral-900">
              {testimonial.name}
            </cite>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-neutral-500">
                {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </footer>
      </blockquote>
    </section>
  );
}
