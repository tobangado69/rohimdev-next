import { TrendingUp, Users, Target, GitBranch } from "lucide-react";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Engineering-first mindset",
    description:
      "I focus on system design, scalability, performance, and real business impact — not just visual polish.",
  },
  {
    icon: Users,
    title: "Embedded collaboration",
    description:
      "Clear communication via Slack, GitHub, and async updates. I work as a true extension of your engineering team.",
  },
  {
    icon: Target,
    title: "Predictable delivery",
    description:
      "Well-defined scope, clear milestones, and transparent progress — so you always know what’s shipping and when.",
  },
  {
    icon: GitBranch,
    title: "Built for iteration",
    description:
      "Startups pivot. I design systems that adapt without painful rewrites or wasted effort.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="animate-fade-up w-full">
      <div className="grid lg:grid-cols-12 gap-8 relative">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="lg:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">
            Why startups choose rohimdev.com
          </h2>
          <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
            Early-stage startups need a design partner who understands product
            as deeply as it understands design. We help you build software that
            looks great and works even better.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 lg:gap-2 bg-stone-50 border border-stone-200 rounded-3xl p-2 gap-2">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl border border-neutral-200/60 flex flex-col gap-5 hover:border-neutral-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
