"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-[#262626] bg-[#141414] px-4 py-3 text-sm text-white placeholder:text-[#666666] outline-none transition duration-200 focus:border-[#C6F52B] focus:bg-[#181818] focus:ring-2 focus:ring-[#C6F52B]/20";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-lg space-y-4 text-left">
      {/* Honeypot */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Your name" required maxLength={100} />
        <input
          className={field}
          type="email"
          name="email"
          placeholder="Your email"
          required
          maxLength={150}
        />
      </div>
      <textarea
        className={`${field} resize-y min-h-[110px]`}
        name="message"
        rows={4}
        placeholder="How can I help you grow?"
        required
        maxLength={2000}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#C6F52B] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0D0D0D] transition-all duration-300 hover:bg-[#d5ff48] hover:shadow-[0_0_25px_rgba(198,245,43,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-center text-xs font-medium">
        {status === "success" && (
          <span className="text-[#C6F52B]">Thanks! Your message was sent. I will reply soon.</span>
        )}
        {status === "error" && <span className="text-red-400">{error}</span>}
      </p>
    </form>
  );
}
