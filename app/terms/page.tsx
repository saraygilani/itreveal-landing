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
          Basic pre-launch terms.
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-stone-650">
          <p>
            ItReveal is being built as an informational and decision-support
            tool. Its content and outputs are intended to help people think
            through relocation and lifestyle choices, not to act as a final or
            authoritative source.
          </p>
          <p>
            ItReveal does not provide legal, financial, immigration, medical,
            tax, or other professional advice. Important decisions should be
            verified independently and, when appropriate, reviewed with a
            qualified professional.
          </p>
          <p>
            The product is currently pre-launch and evolving. Features,
            availability, calculations, recommendations, and website content may
            change at any time without notice.
          </p>
          <p>
            By using this website or any future version of the product, you
            agree to use it responsibly and understand that ItReveal cannot
            guarantee completeness, accuracy, or suitability for every personal
            situation.
          </p>
          <p>
            These terms are intentionally simple at this stage and may be
            updated as the product matures.
          </p>
        </div>
      </div>
    </main>
  );
}
