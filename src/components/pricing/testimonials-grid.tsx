import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      '"Start Agency delivered our entire product redesign in just 4 weeks. The quality of work is comparable to large agencies charging 5x the price."',
    name: "Alex Rivera",
    role: "CEO, FinStack",
    avatar: "https://ui-avatars.com/api/?name=Alex+Rivera&background=random",
  },
  {
    quote:
      '"The branding package was exactly what we needed to launch. Clean, modern, and distinct. They really understood our market."',
    name: "Sarah Chen",
    role: "Founder, Aura",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random",
  },
  {
    quote:
      '"Communication was seamless. We felt like they were part of our core team during the website launch. Highly recommended."',
    name: "Mark Davis",
    role: "CTO, Nexus",
    avatar: "https://ui-avatars.com/api/?name=Mark+Davis&background=random",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 fill-current text-neutral-900"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export function TestimonialsGrid() {
  return (
    <section
      className="animate-fade-up w-full max-w-7xl mx-auto py-12"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-medium text-neutral-900">
          Trusted by founders
        </h2>
        <div className="h-px bg-neutral-200 flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-neutral-200 p-6 rounded-2xl flex flex-col gap-4"
          >
            <div className="flex gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <Image
                src={t.avatar}
                alt={t.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-neutral-900">{t.name}</p>
                <p className="text-xs text-neutral-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
