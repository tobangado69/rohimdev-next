import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/constants";

export function FounderSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pb-12">
      <div
        className="flex flex-col justify-center space-y-10 lg:sticky lg:top-32 animate-fade-up"
        style={{ animationDelay: "0.6s" }}
      >
        <h2 className="lg:text-[44px] leading-[1.1] text-4xl font-medium text-neutral-900 tracking-tight">
          Hey, I&apos;m {PROFILE.name.split(" ")[0]}
        </h2>

        <div className="space-y-6 text-lg text-neutral-500 font-normal leading-relaxed">
          <p>{PROFILE.bio}</p>
          <p>
            If you have a project in mind—whether it&apos;s a new product, API,
            or full-stack application—let&apos;s talk. Tell me what you&apos;re
            building.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="#form"
            className="hover:bg-neutral-800 transition-all duration-300 flex gap-3 text-base font-medium text-white bg-neutral-900 rounded-full px-8 py-4 items-center justify-center"
          >
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
              className="w-5 h-5"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            Book a Call
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:bg-neutral-50 transition-all duration-300 flex text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full px-8 py-4 shadow-sm items-center justify-center gap-3"
          >
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
              className="w-5 h-5"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            Email me
          </a>
        </div>
      </div>

      <div
        className="lg:h-[800px] overflow-hidden group bg-neutral-900 w-full h-[600px] rounded-[32px] relative animate-fade-up"
        style={{ animationDelay: "0.65s" }}
      >
        <Image
          src={PROFILE.avatar}
          alt={`${PROFILE.name} portrait`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0" />
        <div className="lg:p-12 flex p-8 absolute right-0 bottom-0 left-0 items-end justify-between">
          <div className="space-y-1">
            <h3 className="text-3xl font-medium text-white tracking-tight">
              {PROFILE.name}
            </h3>
            <p className="text-base text-neutral-400 tracking-wide">
              {PROFILE.role}
            </p>
            <div className="flex gap-4 pt-4 text-neutral-400">
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
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
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
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
                  className="w-5 h-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.22 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href={PROFILE.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Upwork"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-white opacity-80 w-32 md:w-48">
            <svg
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M10 50 C 30 40, 50 60, 40 70 S 20 50, 60 40 S 100 60, 90 50 S 120 30, 140 50 S 180 40, 190 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
