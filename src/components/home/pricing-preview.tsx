import Link from "next/link";

export function PricingPreview() {
  return (
    <section className="animate-fade-up w-full pb-0 gap-x-20 gap-y-20 lg:pb-0 lg:pt-0">
      <div className="grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="lg:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">
            Engineering support for startups shipping real products.
          </h2>
          <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
            Full-stack development, system design, and long-term technical
            ownership. Built for speed, scalability, and production reliability.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-2 bg-stone-50 border border-stone-200 rounded-[32px] p-2">
            {/* Top Pricing Card */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                  Monthly Engineering Support
                </h3>
                <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full text-xs font-medium border border-neutral-200/50">
                  Most Chosen
                </span>
              </div>
              <p className="text-[15px] text-neutral-500 mb-8">
                Ideal for startups and teams needing continuous engineering
                support.
              </p>
              <div className="text-2xl font-semibold text-neutral-900 tracking-tight mb-4">
                Starting from $1,500/month
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-neutral-900 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-[15px]"
                >
                  Start Today
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-white text-neutral-900 border border-neutral-200 font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 text-[15px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-400 shrink-0"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>
                    Priority task handling & predictable delivery{" "}
                    <span
                      className="text-neutral-400 ml-1 cursor-help"
                      title="Info"
                    >
                      ⓘ
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-400 shrink-0"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span>
                    <span className="border-b border-neutral-300">
                      Full-stack development:
                    </span>
                    Frontend, backend, and system design
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-400 shrink-0"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>
                    Weekly milestones, clean code, and production-ready output
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-400 shrink-0"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Direct 1:1 communication via Slack & Telegram</span>
                </li>
              </ul>
            </div>

            {/* Bottom Grid */}
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="bg-white border border-neutral-200/60 rounded-3xl p-6">
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-neutral-900 mb-2">
                  Flexible engagement
                </h4>
                <p className="text-[14px] leading-relaxed text-neutral-500">
                  Scale, pause, or stop the collaboration anytime based on your
                  roadmap and priorities.
                </p>
              </div>
              <div className="bg-white border border-neutral-200/60 rounded-3xl p-6">
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-neutral-900 mb-2">
                  Trial collaboration
                </h4>
                <p className="text-[14px] leading-relaxed text-neutral-500">
                  Start with a short trial period to evaluate workflow,
                  communication, and code quality.
                </p>
              </div>
            </div>

            {/* Powered by Stripe */}
            <div className="flex justify-center py-2 items-center gap-1.5 opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[11px] font-medium text-neutral-500">
                Checkout powered by Stripe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
