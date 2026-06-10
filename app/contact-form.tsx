"use client";

import { useState } from "react";

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200" htmlFor="name">
          Name <span className="text-stone-400">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="min-h-12 w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-stone-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-h-12 w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-stone-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-500 focus:border-stone-500"
          placeholder="Tell us what you want to know or ask for launch updates."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-stone-950 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:bg-stone-300 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {submitState === "success" ? (
        <p className="text-sm text-emerald-300">
          Thanks — your message has been sent.
        </p>
      ) : null}

      {submitState === "error" ? (
        <p className="text-sm text-rose-300">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
