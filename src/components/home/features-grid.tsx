import Link from "next/link";
import { Route, Gauge, Layers, Award } from "lucide-react";

const FEATURE_ICONS = [
  {
    svg: (
      <div className="w-10 h-10 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-900 shadow-sm transition-transform hover:scale-105">
        <Route className="w-5 h-5" />
      </div>
    ),
    text: "Your learning path adapts based on progress and skill assessments.",
  },
  {
    svg: (
      <div className="w-10 h-10 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-900 shadow-sm transition-transform hover:scale-105">
        <Gauge className="w-5 h-5" />
      </div>
    ),
    text: "The system knows when to push or hold back — based on mastery zones.",
  },
  {
    svg: (
      <div className="w-10 h-10 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-900 shadow-sm transition-transform hover:scale-105">
        <Layers className="w-5 h-5" />
      </div>
    ),
    text: "No more switching platforms. Theory, practice, and labs unified.",
  },
  {
    svg: (
      <div className="w-10 h-10 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-900 shadow-sm transition-transform hover:scale-105">
        <Award className="w-5 h-5" />
      </div>
    ),
    text: "Portfolio, skills, and credentials tracked. Always know your value.",
  },
];

const CASE_STUDY_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5387a0b-52c6-40c2-b3be-ef86329b19cc_1600w.webp";

export function FeaturesGrid() {
  return (
    <div className="flex flex-col z-10 w-full mt-20 mr-auto mb-20 ml-auto relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-4 gap-x-4 gap-y-4">
        {FEATURE_ICONS.map(({ svg, text }) => (
          <div key={text} className="flex flex-col gap-4">
            <div>{svg}</div>
            <p className="leading-relaxed text-base text-neutral-900">{text}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="grid grid-cols-1 min-h-[500px] h-full relative gap-y-3 lg:min-h-[600px]">
          <div className="flex flex-col md:p-12 lg:p-16 bg-center bg-cover pt-8 pr-8 pb-8 pl-8 saturate-50 justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${CASE_STUDY_IMAGE})` }}
            />
            <div className="relative z-10">
              <p className="leading-relaxed text-base font-medium text-zinc-50 mb-2">
                Case study - Workly
              </p>
              <h2 className="leading-tight md:text-4xl lg:text-5xl text-2xl font-normal text-white tracking-tight mb-8">
                Redesigned product UX and brand positioning after poor early
                adoption. Result: clearer value proposition, higher retention,
                stronger sales demos.
              </h2>
              <Link
                href="/work"
                className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>View Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
