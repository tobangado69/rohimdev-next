import Link from "next/link";

const FEATURE_ICONS = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-neutral-400"
      >
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"
        />
      </svg>
    ),
    text: "Your learning path adapts based on progress and skill assessments.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-neutral-400"
      >
        <path
          fill="currentColor"
          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M12 7.75a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8.5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ),
    text: "The system knows when to push or hold back — based on mastery zones.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-neutral-400"
      >
        <path
          fill="currentColor"
          d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0"
        />
      </svg>
    ),
    text: "No more switching platforms. Theory, practice, and labs unified.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-neutral-400"
      >
        <path
          fill="currentColor"
          d="M19.83 8.7L12 2.1a.08.08 0 0 0-.07 0L4.17 8.7A1 1 0 0 0 4 9.6V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.6a1 1 0 0 0-.17-.9"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M12.75 18a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 1.5 0z"
        />
      </svg>
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
                <span>Read more</span>
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
