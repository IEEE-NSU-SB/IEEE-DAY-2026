import { Camera, Video, Zap } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

const THEME = "Leveraging Technology for a Better Tomorrow";

const contests = [
  {
    badge: "Photo Contest",
    icon: Camera,
    title: "IEEE Day 2026 Photo Contest",
    description: `Show how technology, innovation, community, and IEEE are helping create a better tomorrow under the theme "${THEME}".`,
    prize: "1st: US$500 per category · 2nd: US$250 per category · Judges' Choice: US$250",
    groupLabel: "Categories",
    items: [
      "Technovation – Showcase STEM, research, innovation, or technology in action.",
      "Social – Capture IEEE members coming together through social activities or gatherings.",
      "Raise Your Flag – Showcase the IEEE Section or country flag with creativity and pride.",
    ],
    votingPeriod: "23–31 October 2026",
  },
  {
    badge: "Video Contest",
    icon: Video,
    title: "IEEE Day 2026 Video Contest",
    description: `Create an original video that brings the IEEE Day theme to life: "${THEME}".`,
    prize:
      "Long Video: 1st US$850, 2nd US$450 · Short Video: 1st US$850, 2nd US$450 · Judges' Choice: US$250",
    groupLabel: "Formats",
    items: [
      "Long Video – 60 to 90 seconds.",
      "Short Video – 10 to 30 seconds.",
    ],
    votingPeriod: "23–31 October 2026",
  },
];

export default function ContestPage() {
  return (
    <section id="contest" className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <EditorialHeader
          icon={Zap}
          label="Global Challenges"
          title="Contests & Challenges"
          subtitle={`Official IEEE Day 2026 contests under the theme "${THEME}".`}
        />

        <div className="flex flex-col gap-4">
          {contests.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.title}
                delay={i * 90}
                className="gap-6 rounded-2xl border border-ieee-950/10 bg-white/65 px-6 py-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md sm:px-8"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ieee-950/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ieee-800">
                    <Icon size={12} aria-hidden="true" />
                    {c.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ieee-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ieee-900/70">
                    {c.description}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ieee-600">
                    {c.prize}
                  </p>

                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-ieee-800">
                    {c.groupLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {c.items.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-xs leading-relaxed text-ieee-900/55"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ieee-900/40"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-4 grid gap-3 border-t border-ieee-950/10 pt-4 text-xs sm:grid-cols-2">
                    <div>
                      <dt className="font-bold text-ieee-800">Entry period</dt>
                      <dd className="mt-0.5 text-ieee-900/70">{c.entryPeriod}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-ieee-800">Voting period</dt>
                      <dd className="mt-0.5 text-ieee-900/70">{c.votingPeriod}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}