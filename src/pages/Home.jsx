import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import Dateline from "../components/Dateline";
import PullQuote from "../components/PullQuote";

const contents = [
  {
    no: "01",
    label: "Activities",
    to: "/activities",
    teaser: "Meet the ambassadors carrying IEEE Day from campus to campus.",
  },
  {
    no: "02",
    label: "Events",
    to: "/events",
    teaser: "TechFest, Women in STEM, IAS Mega, and RoboQuest — the full lineup.",
  },
  {
    no: "03",
    label: "Timeline",
    to: "/timeline",
    teaser: "Every milestone from the first briefing to the grand gala.",
  },
  {
    no: "04",
    label: "Contest",
    to: "/contest",
    teaser: "Photo, reel, and research tracks — global recognition on the line.",
  },
  {
    no: "05",
    label: "Achievement",
    to: "/achievement",
    teaser: "A first-place world win, and the honors that came with it.",
  },
  {
    no: "06",
    label: "About",
    to: "/about",
    teaser: "Who the branch is, where to find us, and every channel that matters.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Dateline />

      <section className="border-b border-ieee-950/10 px-8 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.25em] text-ieee-500">
            In This Issue
          </p>

          <div className="divide-y divide-ieee-950/10 border-t border-ieee-950/10">
            {contents.map((c) => (
              <Link
                key={c.no}
                to={c.to}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-5 px-4 py-6 -mx-4 rounded-2xl transition-all duration-300 hover:bg-white/55 hover:shadow-sm sm:grid-cols-[4rem_1fr_auto] sm:gap-10 sm:px-6 sm:py-8 sm:-mx-6"
              >
                <span className="font-display text-2xl text-ieee-500/35 sm:text-3xl">
                  {c.no}
                </span>
                <span>
                  <span className="block font-display text-2xl text-ieee-950 sm:text-3xl">
                    {c.label}
                  </span>
                  <span className="mt-1.5 block max-w-md text-sm leading-relaxed text-ieee-900/50">
                    {c.teaser}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ieee-900/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ieee-500"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <PullQuote attribution="The IEEE NSU Student Branch Editorial Note">
            IEEE Day 2026 is not one event — it's a season. Every workshop,
            every contest entry, every ambassador conversation adds up to
            one university-wide celebration of what engineering can do.
          </PullQuote>
        </div>
      </section>
    </>
  );
}
