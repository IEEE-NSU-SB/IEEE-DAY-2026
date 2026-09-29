import { ArrowUpRight, Camera, FileText, Video, Zap } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

const contests = [
  {
    badge: "Photo Track",
    icon: Camera,
    title: "Global IEEE Day Photo Contest",
    prize: "$500, $250 & Plaques · IEEE Global Certificate",
    rules: [
      "Open to IEEE NSU student members and registered affiliates.",
      "Original photography submitted before October 01, 2026.",
      "Include official hashtags: #IEEEDay2026 and #IEEENSUSB.",
    ],
    cta: "Submit Photo Entry",
  },
  {
    badge: "Video & Reel Track",
    icon: Video,
    title: "60-Second Video / Reel Challenge",
    prize: "$400 + Global Feature on IEEE Social Channels",
    rules: [
      "Vertical 9:16 aspect ratio video strictly under 60 seconds.",
      "Highlights student collaboration, robotics, or STEM innovation.",
      "Direct submission via IEEE Day official contest portal.",
    ],
    cta: "Submit Reel Challenge",
  },
  {
    badge: "Research & Papers",
    icon: FileText,
    title: "Technical Paper & Ambassador Challenge",
    prize: "Travel Grants & IEEE Xplore Recognition",
    rules: [
      "Standard IEEE two-column formatted manuscripts (4 to 6 pages).",
      "Blind peer review by IEEE Fellows and senior industry practitioners.",
      "Includes ambassador advocacy and presentation defense on October 06.",
    ],
    cta: "View Track Guidelines",
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
          subtitle="Official global challenges from the IEEE Day committee — international cash grants, plaques, and recognition."
        />

        <div className="flex flex-col gap-4">
          {contests.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.title}
                delay={i * 90}
                className="gap-6 rounded-2xl border border-ieee-950/10 bg-white/65 px-6 py-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md sm:grid-cols-[1fr_auto] sm:items-center sm:px-8"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ieee-950/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ieee-800">
                    <Icon size={12} aria-hidden="true" />
                    {c.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ieee-950">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ieee-600">
                    {c.prize}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {c.rules.map((r) => (
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
                </div>

                {/* <button
                  type="button"
                  className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-ieee-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-ieee-800 active:scale-[0.98]"
                >
                  {c.cta}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button> */}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

