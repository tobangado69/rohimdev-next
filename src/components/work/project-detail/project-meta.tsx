import type { ProjectContent } from "@/types/content";

type ProjectMetaProps = {
  project: ProjectContent;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const metadata = project.detail.metadata;

  const items = [
    { label: "Year", value: metadata?.year || project.date },
    { label: "Status", value: project.status },
    {
      label: "Platform",
      value: metadata?.platform || metadata?.client,
    },
    { label: "Role", value: metadata?.role },
    { label: "Timeline", value: metadata?.timeline },
    { label: "Collaboration", value: metadata?.collaboration },
    {
      label: "Tech",
      value: project.technologies.join(", "),
    },
  ].filter((item) => item.value);

  return (
    <section className="border-t border-neutral-200 pt-8 animate-fade-up">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
        {items.map((item) => (
          <div key={item.label}>
            <h3 className="text-sm text-neutral-400 mb-1">{item.label}</h3>
            <p className="text-[15px] font-medium text-neutral-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
