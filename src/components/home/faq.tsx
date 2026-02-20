"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "How does the collaboration model work?",
    a: "We start by aligning on goals, scope, and technical requirements. Work is organized in weekly milestones, with clear deliverables and continuous feedback.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "It depends on scope and complexity. Small features usually take 1–3 days, while larger systems are delivered in structured milestones with predictable timelines.",
  },
  {
    q: "Do you handle both frontend and backend development?",
    a: "Yes. I handle end-to-end full-stack development — frontend, backend, APIs, databases, and deployment — with a focus on scalability and maintainability.",
  },
  {
    q: "How do we communicate and track progress?",
    a: "Slack for daily communication, GitHub for code collaboration, and regular async updates. Weekly sync calls are available when needed.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="animate-fade-up lg:pr-8 lg:pt-0 w-full mb-24 gap-x-20 gap-y-20">
      <div className="grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-[17px] text-neutral-500 leading-relaxed font-normal">
            Common questions about collaboration, workflow, and engagement
            model. Can&apos;t find what you&apos;re looking for? Feel free to{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              reach out directly
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="bg-stone-50 border border-stone-200 rounded-3xl p-2 flex flex-col gap-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200/60 rounded-2xl p-6 cursor-pointer group hover:border-neutral-300 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium text-neutral-900">
                    {item.q}
                  </h3>
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
                    className={`text-neutral-400 transition-transform duration-300 shrink-0 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-neutral-500 text-[15px] leading-relaxed">
                    {item.a}
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
