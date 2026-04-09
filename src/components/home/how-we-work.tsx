import {
  FileText,
  MessageSquare,
  Monitor,
  BookOpen,
  Zap,
  RefreshCw,
  Mail,
} from "lucide-react";

const STEPS = [
  {
    step: "STEP 1",
    title: "Kickoff & alignment",
    description: "Goals, constraints, timelines. No guessing.",
  },
  {
    step: "STEP 2",
    title: "Design & iteration",
    description:
      "Fast cycles, constant feedback, real collaboration.",
  },
  {
    step: "STEP 3",
    title: "Delivery & handoff",
    description: "Clean files, clear logic, dev-ready output.",
  },
];

function Step1Visual() {
  return (
    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden">
      <div className="absolute inset-0 p-4 sm:p-6">
        <div className="bg-white/90 border border-neutral-200 rounded-xl p-4 w-full shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="h-2 w-24 bg-neutral-900 rounded" />
          </div>
          <div className="h-2 w-full bg-neutral-100 rounded mb-2" />
          <div className="h-2 w-4/5 bg-neutral-100 rounded mb-2" />
          <div className="h-2 w-3/4 bg-neutral-100 rounded mb-3" />
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-emerald-100 rounded-lg flex items-center justify-center">
              <div className="h-1 w-8 bg-emerald-600 rounded" />
            </div>
            <div className="h-6 w-20 bg-neutral-100 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2Visual() {
  return (
    <div className="relative h-48 sm:h-56 rounded-2xl border border-neutral-200 overflow-hidden bg-linear-to-br from-neutral-50 to-neutral-100 p-4">
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-3 h-3 text-blue-600 shrink-0" />
            <div className="h-1.5 w-12 bg-blue-600 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-neutral-200 rounded" />
            <div className="h-1 w-4/5 bg-neutral-200 rounded" />
            <div className="h-1 w-3/4 bg-neutral-200 rounded" />
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="w-3 h-3 text-emerald-600 shrink-0" />
            <div className="h-1.5 w-10 bg-emerald-600 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-neutral-200 rounded" />
            <div className="h-1 w-5/6 bg-neutral-200 rounded" />
            <div className="h-1 w-2/3 bg-neutral-200 rounded" />
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-3 h-3 text-purple-600 shrink-0" />
            <div className="h-1.5 w-14 bg-purple-600 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-neutral-200 rounded" />
            <div className="h-1 w-4/5 bg-neutral-200 rounded" />
            <div className="h-1 w-3/5 bg-neutral-200 rounded" />
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-3 h-3 text-orange-600 shrink-0" />
            <div className="h-1.5 w-8 bg-orange-600 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-neutral-200 rounded" />
            <div className="h-1 w-3/4 bg-neutral-200 rounded" />
            <div className="h-1 w-4/5 bg-neutral-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3Visual() {
  return (
    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-4">
      <div className="w-full h-full rounded-xl overflow-hidden bg-white border border-neutral-200 p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="h-2 w-16 bg-neutral-900 rounded" />
          </div>
          <div className="w-4 h-4 bg-green-400 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
            <MessageSquare className="w-3 h-3 mx-auto text-blue-600 mb-1" />
            <div className="h-1 w-8 bg-blue-600 rounded mx-auto" />
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded p-2 text-center">
            <Mail className="w-3 h-3 mx-auto text-emerald-600 mb-1" />
            <div className="h-1 w-6 bg-emerald-600 rounded mx-auto" />
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">
            <Monitor className="w-3 h-3 mx-auto text-purple-600 mb-1" />
            <div className="h-1 w-10 bg-purple-600 rounded mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
            <MessageSquare className="w-3 h-3 mx-auto text-blue-600 mb-1" />
            <div className="h-1 w-8 bg-blue-600 rounded mx-auto" />
          </div>
          <div className="text-center bg-emerald-50 border border-emerald-200 rounded p-2">
            <Mail className="w-3 h-3 mx-auto text-emerald-600 mb-1" />
            <div className="h-1 w-6 bg-emerald-600 rounded mx-auto" />
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">
            <Monitor className="w-3 h-3 mx-auto text-purple-600 mb-1" />
            <div className="h-1 w-10 bg-purple-600 rounded mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

const STEP_VISUALS = [Step1Visual, Step2Visual, Step3Visual];

export function HowWeWork() {
  return (
    <section
      className="animate-scaleIn animation-delay-300 sm:pl-2 sm:pr-2 sm:pt-2 sm:pb-2 bg-stone-50 w-full max-w-none z-10 border border-stone-200 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl"
    >
      <div className="flex animate-fade-up sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 pt-6 pr-1 pb-6 pl-1 gap-x-6 gap-y-6 items-center">
        <h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl text-zinc-950 tracking-tighter">
          How we works
        </h2>
        <span
          aria-hidden
          role="separator"
          aria-orientation="vertical"
          className="w-px bg-neutral-200 h-10 shrink-0"
        />
        <p className="sm:text-base text-sm text-zinc-950 tracking-tight mt-1">
          Three simple steps to automate your content
        </p>
      </div>

      <div className="grid grid-cols-1 z-10 mt-6 relative items-stretch gap-x-2 lg:grid-cols-12 sm:gap-2 sm:mt-8">
        {STEPS.map(({ step, title, description }, i) => {
          const Visual = STEP_VISUALS[i];
          return (
            <div
              key={step}
              className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border border-neutral-200 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative"
            >
              <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">
                {step}
              </span>
              <Visual />
              <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-6">
                {title}
              </h3>
              <p className="sm:text-base text-sm text-neutral-600 tracking-tight max-w-[52ch] mt-2">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
