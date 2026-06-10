import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ItReveal",
  description: "Pre-launch privacy information for the ItReveal website.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
          A simple pre-launch privacy policy.
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-stone-650">
          <p>
            This page describes, at a high level, how ItReveal currently expects
            to handle information. It is meant to be honest and useful during
            the pre-launch stage, not a claim of legal completeness.
          </p>
          <p>
            If you submit the website contact form, ItReveal may collect the
            name you choose to share, your email address, and the message you
            send so the founder can respond or keep track of launch interest.
          </p>
          <p>
            When the app is available, ItReveal may collect account information,
            simulation inputs and outputs, and usage data needed to operate,
            improve, and secure the product.
          </p>
          <p>
            Authentication for the app may be handled through third-party
            providers. If that happens, those providers may process certain
            information according to their own terms and privacy policies.
          </p>
          <p>
            A public contact email is not listed yet. For now, website messages
            are sent privately through the form on the homepage.
          </p>
          <p>
            This policy may change as the product evolves toward launch. If you
            continue using the website or future app after changes are posted,
            that use may be treated as acceptance of the updated policy.
          </p>
        </div>
      </div>
    </main>
  );
}
