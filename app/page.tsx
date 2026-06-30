import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/app/contact-form";

const howItWorks = [
  {
    title: "Analyze one city",
    description:
      "Explore how a single place lines up with your routines, preferences, and priorities, whether you are moving, traveling, or simply curious.",
  },
  {
    title: "Compare two cities",
    description:
      "Put two options side by side so you can spot meaningful differences instead of relying on guesswork or scattered research.",
  },
  {
    title: "Get personalized recommendations",
    description:
      "Use your priorities to surface places that may suit your situation better, from a major move to a short trip to a what-if lifestyle comparison.",
  },
];

const whatYouSee = [
  {
    title: "Fit score",
    description:
      "A simple signal showing how closely a place matches the priorities you care about most.",
  },
  {
    title: "Strengths",
    description:
      "Highlights where a city appears to support your goals, preferences, or day-to-day needs well.",
  },
  {
    title: "Trade-offs",
    description:
      "Clearer downside areas so decisions are grounded in reality, not just the upside.",
  },
  {
    title: "City comparison",
    description:
      "A direct view of where one city may be stronger, weaker, or simply different from another.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "ItReveal",
  },
  description:
    "Find your best city fit with ItReveal. See how well a place matches your unique priorities before you move, travel, or compare options.",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-12">
      <header className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.04em] text-stone-900"
        >
          ItReveal
        </Link>
        <nav className="flex items-center gap-5 text-sm text-stone-600">
          <Link className="transition hover:text-stone-900" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-stone-900" href="/terms">
            Terms
          </Link>
        </nav>
      </header>

      <section className="grid gap-10 rounded-[2rem] border border-stone-200/70 bg-white/85 px-6 py-10 shadow-[0_20px_60px_rgba(40,33,20,0.08)] sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,24rem)] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium tracking-[0.16em] text-stone-600 uppercase">
            Coming soon on mobile.
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            ItReveal
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650 sm:text-lg">
            Find your best city fit. ItReveal helps you compare 100+ cities and
            understand how each place may fit your unique priorities before a
            move, trip, or lifestyle change.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 min-w-48 items-center justify-center whitespace-nowrap rounded-full bg-stone-950 px-7 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Get launch updates
            </a>
            <p className="max-w-md text-sm leading-6 text-stone-500">
              Built to reveal what a city might actually feel like for you, not
              just how it ranks on paper.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-600">
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2">
              100+ cities
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2">
              Personalized simulation
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2">
              Relocation, travel, and lifestyle planning
            </span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm font-medium text-stone-500">
            What ItReveal aims to do
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <h2 className="text-base font-semibold text-stone-900">
                Simulate cities
              </h2>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Turn your preferences into a more concrete simulation of how a
                place may fit your specific situation.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-stone-900">
                Compare options
              </h2>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                See differences between cities without manually stitching
                together advice, rankings, reviews, and forum posts.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-stone-900">
                Make it personal
              </h2>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Explore what the same city might look like through different
                priorities, goals, and trade-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-1 py-18 lg:grid-cols-3">
        <div className="lg:pr-8">
          <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
            What ItReveal Does
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
            A more personal way to evaluate a place.
          </h2>
        </div>
        <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-6 lg:col-span-2">
          <p className="text-base leading-8 text-stone-650">
            ItReveal is being built to help people evaluate places more
            deliberately. Instead of treating a city as a generic ranking or a
            list of facts, it focuses on personal fit: how a place aligns with
            your priorities, where trade-offs may matter, and how the same city
            can look different depending on the person using it.
          </p>
        </div>
      </section>

      <section className="py-6">
        <div className="mb-8">
          <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
            How It Works
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {howItWorks.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-6"
            >
              <h2 className="text-xl font-semibold text-stone-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-18">
        <div className="mb-8">
          <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
            What You See
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whatYouSee.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-stone-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,244,239,0.88))] p-6"
            >
              <h2 className="text-xl font-semibold text-stone-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="grid gap-8 rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-8 text-stone-50 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      >
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-stone-300 uppercase">
            Contact / Updates
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Ask a question or request launch updates.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
            This form sends a private message directly to the founder so the
            site can stay simple without listing a public contact email yet.
          </p>
        </div>
        <ContactForm />
      </section>

      <footer className="mt-14 border-t border-stone-200 px-1 py-8 text-sm text-stone-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p>ItReveal © 2026</p>
            <p className="mt-2 max-w-2xl leading-6">
              ItReveal is a decision-support tool. It does not replace
              professional, legal, financial, immigration, or medical advice.
            </p>
          </div>
          <div className="flex gap-5">
            <Link className="transition hover:text-stone-900" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-stone-900" href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
