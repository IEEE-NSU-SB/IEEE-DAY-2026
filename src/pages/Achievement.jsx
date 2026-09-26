import {
  Flag,
  Globe2,
  HeartHandshake,
  Star,
  Trophy,
  CircleDot,
} from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";
import ScrollRevealText from "../components/ScrollRevealText";

const smallAchievements = [
  {
    icon: CircleDot,
    tag: "Region 10",
    title: "IEEE Regional Exemplary Student Branch Award",
    desc: "Conferred for technical vitality, continuous student engagement, and benchmark activity standards across the Asia-Pacific region.",
  },
  {
    icon: Trophy,
    tag: "Global MGA",
    title: "IEEE MGA Outstanding Student Branch Award",
    desc: "Global recognition from Member and Geographic Activities board for outstanding membership retention and impactful programs.",
  },
  {
    icon: Globe2,
    tag: "Top Winner",
    title: "IEEE Region 10 Student Branch Website Contest",
    desc: "Commendation for excellence in digital innovation, portal design, informative content architecture, and student technical outreach.",
  },
  {
    icon: HeartHandshake,
    tag: "Affinity Group",
    title: "IEEE WIE Affinity Group of the Year Award",
    desc: "Honored for leading women in technology initiatives, STEM empowerment workshops, mentorship pipelines, and national summits.",
  },
  {
    icon: Flag,
    tag: "Humanitarian",
    title: "IEEE Darrel Chong Student Activity Award",
    desc: "Recognizing outstanding student-led community engineering projects, social responsibility actions, and humanitarian initiatives.",
  },
  {
    icon: Star,
    tag: "Section Honor",
    title: "IEEE Bangladesh Section Best Student Branch",
    desc: "Blind peer review by IEEE Fellows and senior industry leadership, administrative vigor, and flagship regional symposiums.",
  },
];

export default function AchievementPage() {
  return (
    <section className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <EditorialHeader
          icon={Trophy}
          label="Hall of Fame · Global Honors"
          folio="Page 05 — Achievement"
          title="Branch Achievements"
          subtitle="Historic recognitions for North South University's Student Branch, on national, regional, and worldwide stages."
          color="gold"
        />

        <Reveal className="grid gap-6 rounded-2xl border border-ieee-950/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              <Trophy size={12} aria-hidden="true" />
              1st Place Worldwide · Official Winner
            </span>
            <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-ieee-950 sm:text-3xl">
              IEEE Global Photo Contest: 1st Place Worldwide & Region 10
              Winner
            </h3>
            <ScrollRevealText
              className="mt-4 text-sm leading-relaxed text-ieee-900/70"
              text="IEEE NSU Student Branch was honored as the 1st Place Winner Worldwide among thousands of participating university branches across all IEEE regions. This monumental accolade celebrates the unyielding dedication, student synergy, humanitarian technology initiatives, and engineering storytelling at North South University."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-ieee-950/10 bg-white/65 px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ieee-900/50">
                  Region 10 Rank
                </p>
                <p className="mt-1 text-sm font-bold text-ieee-950">
                  #1 in Asia-Pacific
                </p>
              </div>
              <div className="rounded-xl border border-ieee-950/10 bg-white/65 px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ieee-900/50">
                  Global Recognition
                </p>
                <p className="mt-1 text-sm font-bold text-ieee-950">
                  $750 Activity Grant
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-ieee-500"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
            <Trophy
              size={96}
              className="text-white/90 transition-transform duration-500 group-hover:scale-110 motion-safe:animate-[soft-pulse_3.5s_ease-in-out_infinite]"
              strokeWidth={1.25}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {smallAchievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                key={a.title}
                delay={i * 70}
                className="rounded-2xl border border-ieee-950/10 bg-white/65 p-5 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ieee-100 text-ieee-600">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-ieee-950/10 bg-white/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ieee-900/45">
                    {a.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm font-bold text-ieee-950">
                  {a.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-ieee-900/55">
                  {a.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

