import Link from "next/link";

export function AbstractTeamVisual() {
  return (
    <div className="relative" aria-label="Your project slot—one could be yours">
      <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 items-end opacity-50 select-none pointer-events-none">
        <div className="flex flex-col items-center gap-2 transform translate-y-8">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-20 rounded-full bg-neutral-200" />
        </div>
        <div className="flex flex-col items-center gap-2 transform -translate-y-4">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-24 rounded-full bg-neutral-200" />
        </div>
        <div className="flex flex-col items-center gap-2 transform translate-y-2">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-16 rounded-full bg-neutral-200" />
        </div>
        <Link
          href="#form"
          className="flex flex-col items-center gap-2 transform -translate-y-2 group cursor-pointer pointer-events-auto transition-transform hover:-translate-y-4 duration-300"
          aria-label="Add your project"
        >
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-neutral-300 group-hover:border-neutral-400 group-hover:bg-neutral-100/50 transition-colors" />
          <div className="w-10 h-20 rounded-full border-2 border-dashed border-neutral-300 group-hover:border-neutral-400 group-hover:bg-neutral-100/50 transition-colors" />
        </Link>
        <div className="flex flex-col items-center gap-2 transform translate-y-6">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-24 rounded-full bg-neutral-200" />
        </div>
        <div className="hidden sm:flex flex-col items-center gap-2 transform -translate-y-6">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-16 rounded-full bg-neutral-200" />
        </div>
        <div className="hidden sm:flex flex-col items-center gap-2 transform translate-y-4">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-24 rounded-full bg-neutral-200" />
        </div>
        <div className="hidden sm:flex flex-col items-center gap-2 transform -translate-y-2">
          <div className="w-10 h-10 rounded-full bg-neutral-200" />
          <div className="w-10 h-20 rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
