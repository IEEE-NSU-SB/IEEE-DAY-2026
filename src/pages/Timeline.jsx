import { Sparkles } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

const milestones = [
  {
    date: "SEPT 25, 2026",
    title: "Ambassador Briefing & Media Rollout",
    desc: "Official reveal of IEEE Day ambassadors, launch of social campaigns, video teaser broadcast, and promotional booth deployment across NSU campus grounds.",
  },
  {
    date: "OCT 01, 2026",
    title: "Contest Registrations & Submission Closes",
    desc: "Final intake portal closes for the Global IEEE Photo Contest, 60-Second Reel Challenge, and Technical Paper presentations ahead of international judging.",
  },
  {
    date: "OCT 03-05, 2026",
    title: "IAS Mega Week & Pre-Events",
    desc: "Multi-track specialized technical workshops, hands-on industrial automation challenges, WIE mentorship panels, and RoboQuest line maze preliminaries.",
  },
  {
    date: "OCT 06 • IEEE DAY",
    title: "IEEE Day 2026 Grand Festivities, Workshops & Award Gala",
    desc: "Grand university-wide celebrations at North South University: keynote addresses by IEEE Bangladesh Section luminaries, project expo, robot arenas, celebratory cake cutting ceremony, and gala awards presentation.",
    badge: "Main University Gala",
    highlight: true,
  },
  {
    date: "OCT 08, 2026",
    title: "Global Results & Accolades Announcement",
    desc: "IEEE Global Headquarters announces worldwide contest winners, certificate distributions, and international photo challenge recognitions.",
  },
];

export default function TimelinePage() {
  return (
    <section className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <EditorialHeader
          icon={Sparkles}
          label="Official Roadmap"
          folio="Page 03 — Timeline"
          title="Key Milestones"
          subtitle="From the first ambassador briefing to the grand university gala and the global winner broadcast."
        />

        <div className="flex flex-col gap-4">
          {milestones.map((m, i) => (
            <Reveal
              key={m.date}
              delay={i * 60}
              className="grid grid-cols-1 gap-2 rounded-2xl border border-ieee-950/10 bg-white/65 px-6 py-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md sm:grid-cols-[140px_1fr] sm:gap-8 sm:px-8 sm:py-7"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-ieee-900/60">
                {m.date}
              </p>
              <div>
                {m.badge && (
                  <span className="mb-2 inline-block rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {m.badge}
                  </span>
                )}
                <p className="font-display text-xl text-ieee-950">
                  {m.title}
                </p>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ieee-900/60">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

