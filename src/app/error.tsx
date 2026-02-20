"use client";

import { useEffect } from "react";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return (error as Error).message;
  if (typeof error === "object" && error !== null) {
    if ("type" in error && typeof (error as Event).type === "string") {
      return "A client-side error occurred. Please refresh the page.";
    }
  }
  return "Something went wrong. Please try again.";
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  const message = getErrorMessage(error);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 p-8">
      <h2 className="text-xl font-medium text-neutral-900">Something went wrong</h2>
      <p className="text-neutral-500 text-center max-w-md">{message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
