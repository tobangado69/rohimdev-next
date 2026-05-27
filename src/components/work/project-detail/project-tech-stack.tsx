import type { ProjectTechStackGroup } from "@/types/content";

type ProjectTechStackProps = {
  groups: ProjectTechStackGroup[];
  technologies: string[];
};

export function ProjectTechStack({ groups, technologies }: ProjectTechStackProps) {
  return (
    <section className="space-y-8 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Tech Stack
      </h2>
      {groups.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-md text-sm text-neutral-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-md text-sm text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
