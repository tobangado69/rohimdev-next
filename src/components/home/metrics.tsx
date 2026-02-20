const METRICS = [
  {
    value: "2+ years experience",
    description:
      "Building and maintaining production-grade web applications in real startup environments.",
  },
  {
    value: "10+ production projects",
    description:
      "Web apps, APIs, dashboards, and automation systems shipped to real users.",
  },
  {
    value: "End-to-end ownership",
    description:
      "From system design and development to deployment and maintenance.",
  },
  {
    value: "Long-term collaborations",
    description:
      "Because reliability, clean code, and communication build trust.",
  },
];

export function Metrics() {
  return (
    <section className="animate-fade-up w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map(({ value, description }) => (
          <div
            key={value}
            className="bg-white border border-neutral-200/60 rounded-2xl p-6"
          >
            <div className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">
              {value}
            </div>
            <p className="text-[15px] text-neutral-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
