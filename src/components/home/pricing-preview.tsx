import Link from "next/link";
import {
  ArrowRight,
  Video,
  CalendarCheck,
  Layers,
  Award,
  MessageSquare,
  Pause,
  Calendar,
  ShieldCheck,
} from "lucide-react";

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
                Starting from $1,000/month
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-neutral-900 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-[15px]"
                >
                  Start Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-white text-neutral-900 border border-neutral-200 font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 text-[15px]"
                >
                  <Video className="w-4 h-4" />
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <CalendarCheck className="text-neutral-400 shrink-0 w-5 h-5" />
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
                  <Layers className="text-neutral-400 shrink-0 w-5 h-5" />
                  <span>
                    <span className="border-b border-neutral-300">
                      Full-stack development:
                    </span>{" "}
                    Frontend, backend, and system design
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <Award className="text-neutral-400 shrink-0 w-5 h-5" />
                  <span>
                    Weekly milestones, clean code, and production-ready output
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                  <MessageSquare className="text-neutral-400 shrink-0 w-5 h-5" />
                  <span>Direct 1:1 communication via Slack & Telegram</span>
                </li>
              </ul>
            </div>

            {/* Bottom Grid */}
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="bg-white border border-neutral-200/60 rounded-3xl p-6">
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-900">
                  <Pause className="w-4 h-4" />
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
                  <Calendar className="w-4 h-4" />
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
              <ShieldCheck className="text-neutral-500 w-3.5 h-3.5" />
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
