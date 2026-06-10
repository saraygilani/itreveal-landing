import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ItReveal",
  description: "Pre-launch terms for the ItReveal website and future product.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10 sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
      >
        Back to home
      </Link>
      <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_12px_40px_rgba(40,33,20,0.06)]">
        <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
          Terms of Service
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
          Terms for using ItReveal.
        </h1>
        <div className="mt-8 space-y-8 text-sm leading-7 text-stone-650">
          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              1. Use of ItReveal
            </h2>
            <p className="mt-3">
              ItReveal is provided to help users explore relocation and
              lifestyle decisions. By using the website or app, you agree to use
              it lawfully and responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              2. No professional advice
            </h2>
            <p className="mt-3">
              ItReveal is informational and decision-support only. It does not
              provide legal, financial, immigration, tax, medical, or other
              professional advice, and it should not be treated as a substitute
              for qualified guidance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              3. User responsibility
            </h2>
            <p className="mt-3">
              You are responsible for evaluating your own circumstances and
              verifying important information independently before making
              decisions based on the website or app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              4. Product changes
            </h2>
            <p className="mt-3">
              ItReveal may update, change, pause, or remove features at any time
              as the product evolves.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              5. Accuracy and availability
            </h2>
            <p className="mt-3">
              ItReveal aims to be useful, but it does not guarantee that all
              content, recommendations, comparisons, or calculations will always
              be complete, accurate, or available without interruption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              6. Limitation of liability
            </h2>
            <p className="mt-3">
              To the extent allowed by applicable law, ItReveal is not liable
              for losses, damages, or decisions resulting from use of the
              website, app, or related information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">7. Contact</h2>
            <p className="mt-3">
              If you have questions, use the contact form on the homepage.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
