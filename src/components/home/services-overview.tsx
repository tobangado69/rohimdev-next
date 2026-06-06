import { AppWindow, Monitor, Palette } from "lucide-react";

const SERVICES = [
  {
    icon: <AppWindow className="text-neutral-900 shrink-0 w-5 h-5" />,
    title: "Product Design",
    items: [
      "Web Apps",
      "Mobile Apps",
      "Design Systems",
      "Prototyping & Ideation",
    ],
  },
  {
    icon: <Monitor className="text-neutral-900 shrink-0 w-5 h-5" />,
    title: "Web Design",
    items: [
      "Landing Pages",
      "Multi-Page Websites",
      "Aura Development",
      "Animations",
    ],
  },
  {
    icon: <Palette className="text-neutral-900 shrink-0 w-5 h-5" />,
    title: "Brand Identity",
    items: ["Brand Guidelines", "Brand Assets", "Logos & Marks", "Pitch Decks"],
  },
];

export function ServicesOverview() {
  return (
    <section className="animate-fade-up lg:pb-0 lg:pt-0 w-full my-24 pt-20 pb-0">
      <div className="grid lg:grid-cols-12 lg:gap-4 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="lg:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">
            What I do
          </h2>
          <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
            Building scalable, secure, and maintainable full-stack systems.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {SERVICES.map(({ icon, title, items }) => (
              <div key={title} className="space-y-2">
                <div className="bg-white border border-neutral-200/60 p-4 rounded-2xl flex items-center gap-3">
                  {icon}
                  <span className="text-base font-medium text-neutral-900">
                    {title}
                  </span>
                </div>
                <div className="bg-white border border-neutral-200/60 p-6 rounded-2xl h-full">
                  <ul className="space-y-3 text-[15px] text-neutral-500">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
