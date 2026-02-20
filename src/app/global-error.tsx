"use client";

import { useEffect } from "react";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error !== null) {
    if ("type" in error && typeof (error as Event).type === "string") {
      return "A critical error occurred. Please refresh the page.";
    }
  }
  return "Something went wrong. Please try again.";
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  const message = getErrorMessage(error);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 bg-neutral-100 text-neutral-900 font-sans">
        <h1 className="text-2xl font-medium">Something went wrong</h1>
        <p className="text-neutral-500 text-center max-w-md">{message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
