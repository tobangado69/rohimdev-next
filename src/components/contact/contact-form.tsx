"use client";

import { useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type ContactFormProps = {
  content: {
    successTitle: string;
    successDescription: string;
    messagePlaceholder: string;
  };
};

export function ContactForm({ content }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg("Contact form is not configured.");
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
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
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 min-h-[300px]">
        <p className="text-lg font-medium text-neutral-900">{content.successTitle}</p>
        <p className="text-neutral-500 text-center">{content.successDescription}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-neutral-200 rounded-2xl p-8 space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-900 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-900 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-900 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 focus:outline-none transition-colors resize-none"
          placeholder={content.messagePlaceholder}
        />
      </div>
      {errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
