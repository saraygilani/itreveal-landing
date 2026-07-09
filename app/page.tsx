import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/contact-form";

const howItWorks = [
  {
    eyebrow: "01",
    title: "Name your priorities",
    description:
      "Start with what actually shapes your daily life: pace, weather, mobility, affordability, social rhythm, work style, and the trade-offs you can accept.",
  },
  {
    eyebrow: "02",
    title: "Read the place clearly",
    description:
      "ItReveal turns city data and preference signals into a practical view of fit, strengths, friction points, and what might surprise you after arrival.",
  },
  {
    eyebrow: "03",
    title: "Compare with context",
    description:
      "Put options side by side so a move, trip, or lifestyle experiment becomes easier to reason through than a pile of tabs and generic rankings.",
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

const placeStories = [
  {
    src: "/places/fjord-pasture.jpg",
    alt: "A green pasture above a misty fjord.",
    title: "Quiet pace",
    description: "See whether a place supports the rhythm you want.",
  },
  {
    src: "/places/golden-gate-coast.jpg",
    alt: "The Golden Gate Bridge seen from a sunlit coastal overlook.",
    title: "Coastal access",
    description: "Balance nature, mobility, and the pull of a bigger city.",
  },
  {
    src: "/places/canal-city.jpg",
    alt: "A warmly lit canal city at blue hour.",
    title: "Urban texture",
    description: "Compare the energy, convenience, and density of city life.",
  },
  {
    src: "/places/stonehenge-sunset.jpg",
    alt: "Stonehenge at sunset over green grass.",
    title: "Cultural gravity",
    description: "Notice the history, identity, and texture behind a place.",
  },
  {
    src: "/places/sunrise-valley.jpg",
    alt: "Sunrise over a green mountain valley.",
    title: "Long-view fit",
    description: "Think past the first impression and into everyday trade-offs.",
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
    <main className="flex-1 overflow-hidden bg-[#f6f2eb] text-stone-950">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.04em] text-stone-950"
        >
          ItReveal
        </Link>
        <nav className="flex items-center gap-5 text-sm text-stone-600">
          <Link className="transition hover:text-stone-950" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-stone-950" href="/terms">
            Terms
          </Link>
        </nav>
      </header>

      <section className="relative h-[76svh] min-h-[540px] overflow-hidden text-white sm:min-h-[600px] lg:max-h-[760px]">
        <Image
          src="/places/mountain-lake.jpg"
          alt="A mountain lake with pine trees and snow-covered peaks at sunset."
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,18,18,0.78)_0%,rgba(12,18,18,0.48)_42%,rgba(12,18,18,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(246,242,235,1),rgba(246,242,235,0))]" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-6 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.16em] text-white uppercase backdrop-blur">
              Coming soon on mobile
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              ItReveal
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-100 sm:text-lg">
              Find your best city fit. Compare 100+ cities and understand how
              each place may fit your unique priorities before a move, trip, or
              lifestyle change.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex min-h-12 min-w-48 items-center justify-center whitespace-nowrap bg-white px-7 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
              >
                Get launch updates
              </a>
              <p className="max-w-md text-sm leading-6 text-stone-200">
                Built to reveal what a city might feel like for you, not just
                how it ranks on paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
            What ItReveal Does
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            A more personal way to evaluate a place.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-stone-700">
          <p>
            ItReveal is being built to help people evaluate places more
            deliberately. Instead of treating a city as a generic ranking or a
            list of facts, it focuses on personal fit: how a place aligns with
            your priorities, where trade-offs may matter, and how the same city
            can look different depending on the person using it.
          </p>
          <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
            <div className="border-t border-stone-300 pt-3">
              <span className="block text-2xl font-semibold text-stone-950">
                100+
              </span>
              cities to explore
            </div>
            <div className="border-t border-stone-300 pt-3">
              <span className="block text-2xl font-semibold text-stone-950">
                2-way
              </span>
              city comparisons
            </div>
            <div className="border-t border-stone-300 pt-3">
              <span className="block text-2xl font-semibold text-stone-950">
                You
              </span>
              as the baseline
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-6 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="relative min-h-[420px] overflow-hidden bg-stone-900 lg:min-h-[560px]">
          <Image
            src="/places/canal-city.jpg"
            alt="A canal city glowing at dusk."
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,15,18,0.72),rgba(11,15,18,0.08)_58%)]" />
          <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-8">
            <p className="text-xs font-medium tracking-[0.16em] text-stone-200 uppercase">
              Compare places
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Put the visible city and the lived city side by side.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {placeStories.slice(0, 2).map((story) => (
            <article
              key={story.title}
              className="grid min-h-[260px] overflow-hidden bg-white shadow-[0_14px_40px_rgba(40,33,20,0.08)] sm:min-h-[300px]"
            >
              <div className="relative min-h-44">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-stone-950">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {story.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#10201d] py-16 text-stone-50 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-sm font-medium tracking-[0.16em] text-emerald-100/70 uppercase">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Less guessing, more useful contrast.
            </h2>
          </div>
          <div className="grid gap-6">
            {howItWorks.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-[5rem_1fr]"
              >
                <p className="text-sm font-medium tracking-[0.16em] text-emerald-100/60">
                  {item.eyebrow}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-emerald-50/75">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-white sm:py-28">
        <Image
          src="/places/sunrise-valley.jpg"
          alt="A bright sunrise over layered green mountains."
          fill
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,17,0.74),rgba(20,24,17,0.18)_64%,rgba(20,24,17,0.48))]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-medium tracking-[0.16em] text-white/70 uppercase">
              What You See
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A place can look beautiful and still be the wrong fit. Or the
              opposite.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whatYouSee.map((item) => (
              <article
                key={item.title}
                className="bg-white/10 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.14)] ring-1 ring-white/20 backdrop-blur"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        {placeStories.slice(1, 5).map((story, index) => (
          <article
            key={story.title}
            className={
              index === 0
                ? "relative min-h-[360px] overflow-hidden bg-stone-900 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[620px]"
                : index === 3
                  ? "relative min-h-[300px] overflow-hidden bg-stone-900 md:col-span-2 lg:col-span-2"
                  : "relative min-h-[300px] overflow-hidden bg-stone-900"
            }
          >
            <Image
              src={story.src}
              alt={story.alt}
              fill
              sizes={
                index === 0 || index === 3
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : "(max-width: 1024px) 50vw, 25vw"
              }
              className={
                story.src === "/places/stonehenge-sunset.jpg"
                  ? "object-cover object-[center_58%]"
                  : "object-cover"
              }
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,14,14,0.68),rgba(9,14,14,0.04)_62%)]" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-semibold">{story.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-7 text-white/80">
                {story.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-stone-950 py-16 text-stone-50 sm:py-20"
      >
        <Image
          src="/places/moon-waterfront.jpg"
          alt="A moonlit waterfront with warm reflections on the water."
          fill
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,13,0.42),rgba(7,10,13,0.2)_54%,rgba(7,10,13,0.08))]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-12">
          <div className="bg-black/28 p-5 ring-1 ring-white/10 backdrop-blur-sm sm:p-6">
            <p className="text-sm font-medium tracking-[0.16em] text-stone-300 uppercase">
              Contact / Updates
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ask a question or request launch updates.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
              This form sends a private message directly to the founder so the
              site can stay simple without listing a public contact email yet.
            </p>
          </div>
          <div className="bg-black/45 p-5 ring-1 ring-white/15 backdrop-blur-sm sm:p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-stone-500 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-stone-300 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p>ItReveal © 2026</p>
            <p className="mt-2 max-w-2xl leading-6">
              ItReveal is a decision-support tool. It does not replace
              professional, legal, financial, immigration, or medical advice.
            </p>
          </div>
          <div className="flex gap-5">
            <Link className="transition hover:text-stone-950" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-stone-950" href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
