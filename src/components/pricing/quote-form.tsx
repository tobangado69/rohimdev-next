"use client";

import { useState } from "react";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Web Design & Development");
  const [budget, setBudget] = useState(10000);
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const message = `Project Type: ${projectType}\nBudget: $${budget.toLocaleString()}\n\nProject Details:\n${details}`;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg("Quote form is not configured.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          botcheck: "",
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!data.success) {
        throw new Error(data.message || "Failed to send request");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setProjectType("Web Design & Development");
      setBudget(10000);
      setDetails("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-lg shadow-neutral-100/50">
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-2">
            Thank you!
          </h2>
          <p className="text-neutral-500">
            We&apos;ll send you a custom quote within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-lg shadow-neutral-100/50">
      <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
        <h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-2">
          Have a custom project?
        </h2>
        <p className="text-neutral-500 mb-8">
          Tell us about your needs and we&apos;ll send you a custom quote within 24
          hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Project Type
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all appearance-none"
          >
            <option>Web Design & Development</option>
            <option>Product Design (UX/UI)</option>
            <option>Branding Identity</option>
            <option>Design System</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Project Budget
          </label>
          <div className="relative pt-6 pb-2">
            <input
              type="range"
              min={1000}
              max={50000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
            <div className="flex justify-between text-xs text-neutral-400 mt-2">
              <span>$1k</span>
              <span>$10k</span>
              <span>$25k</span>
              <span>$50k+</span>
            </div>
            <p className="text-sm text-neutral-600 mt-1">${budget.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Project Details
          </label>
          <textarea
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all"
            placeholder="Tell us about your goals, timeline, and requirements..."
          />
        </div>

        {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-neutral-900 text-white font-medium py-4 rounded-xl hover:bg-neutral-800 transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Submit Request"}
        </button>
      </form>
      <div className="bg-neutral-50 border-t border-neutral-200 p-6 flex justify-center items-center gap-2 text-sm text-neutral-500">
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
          className="w-4 h-4 shrink-0"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span>Your data is secure. We usually reply in under 2 hours.</span>
      </div>
    </div>
  );
}
