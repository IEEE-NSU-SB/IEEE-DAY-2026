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
import ieeeDayImage from "../assets/ieee-day.jpg";

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
    <section id="achievement" className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <EditorialHeader
          icon={Trophy}
          label="Hall of Fame · Global Honors"
          title="IEEE DAY Achievements"
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
              IEEE DAY 2025 Photo Contest Winner - Raise Your Flag Category
            </h3>
            <ScrollRevealText
              className="mt-4 text-sm leading-relaxed text-ieee-900/70"
              text="Capturing pride, spirit and unity- IEEE NSU SB shines bright!

              IEEE NSU SB has won the IEEE Day Photo Contest 2025 in the “Raise Your Flag” category.

              This achievement reflects our team’s dedication, spirit and commitment to representing our community with pride. Moments like these remind us of the power of unity, passion, and purpose. A big thank you to everyone who supported us and cheered us on; your encouragement made this possible."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {/* <div className="rounded-xl border border-ieee-950/10 bg-white/65 px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ieee-900/50">
                  Winning Prize
                </p>
                <p className="mt-1 text-sm font-bold text-ieee-950">
                  $500 Grant
                </p>
              </div> */}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
            <img
              src={ieeeDayImage}
              alt="Achievement"
              className="w-full sm:h-60 h-fit object-cover"
            />
          </div>
        </Reveal>

        {/* <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div> */}
      </div>
    </section>
  );
}

