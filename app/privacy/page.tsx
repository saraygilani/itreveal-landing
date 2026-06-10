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
          How ItReveal handles information.
        </h1>
        <div className="mt-8 space-y-8 text-sm leading-7 text-stone-650">
          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              1. Information we collect
            </h2>
            <p className="mt-3">
              ItReveal may collect information you provide directly, including
              your name, email address, and any message you send through the
              website contact form.
            </p>
            <p className="mt-3">
              When the app is available, ItReveal may also collect account
              details, simulation inputs and outputs, and usage information
              needed to operate and improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              2. How we use information
            </h2>
            <p className="mt-3">
              Information may be used to respond to messages, provide launch
              updates you request, operate the website and app, improve product
              performance, and help keep the service reliable and secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              3. Authentication and third-party services
            </h2>
            <p className="mt-3">
              Some parts of ItReveal may rely on third-party services, including
              authentication, hosting, analytics, or email delivery tools. If
              authentication is offered, those providers may process certain
              information according to their own terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              4. Contact form submissions
            </h2>
            <p className="mt-3">
              Messages sent through the contact form are used to respond to your
              inquiry or keep track of requested updates. Submissions may
              include your name, email address, message content, and the time
              the message was sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              5. Data security
            </h2>
            <p className="mt-3">
              ItReveal uses reasonable steps to protect information, but no
              system can guarantee absolute security. You should avoid sending
              sensitive information through the contact form unless necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              6. Changes to this policy
            </h2>
            <p className="mt-3">
              This policy may be updated from time to time as ItReveal evolves.
              Updated versions will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">7. Contact</h2>
            <p className="mt-3">
              If you have questions, use the contact form on the homepage and
              we&apos;ll get back to you as soon as possible.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
