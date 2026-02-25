"use client";

const TICKER_ITEMS = [
  "Full-Stack JavaScript Engineer",
  "Available for Projects",
  "React • Next.js • Node.js • TypeScript • Golang",
];

export function Ticker() {
  return (
    <div className="ticker-wrap border-b border-neutral-200 py-2 bg-white/60 relative z-20 overflow-hidden">
      <div className="ticker-track flex animate-marquee whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="mx-6 text-sm text-neutral-600 font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
