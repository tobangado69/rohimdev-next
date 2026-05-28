import { AdaptiveProjectImage } from "@/components/ui/adaptive-project-image";
import type { ProjectGalleryItem } from "@/types/content";

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Visual Journey
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <figure
            key={`${item.image}-${item.alt}`}
            className="flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <AdaptiveProjectImage
              src={item.image}
              alt={item.alt}
              variant="gallery"
              align="center"
            />
            {(item.caption || item.category) && (
              <figcaption className="px-4 py-3 text-sm text-neutral-600">
                {item.category && (
                  <span className="uppercase tracking-wide text-neutral-400 mr-2">
                    {item.category}
                  </span>
                )}
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
