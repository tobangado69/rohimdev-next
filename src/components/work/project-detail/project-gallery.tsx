import Image from "next/image";
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
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-[#1a1c18]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
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
