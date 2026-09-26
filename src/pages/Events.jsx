import { Calendar, Cpu, Settings, Trophy, Users } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

const events = [
  {
    badge: "Flagship Expo",
    icon: Cpu,
    title: "TechFest 2026",
    subtitle: "Project & Poster Showcase",
    date: "Oct 06, 2026",
    tag: "International Jury",
    desc: "Flagship showcasing hardware prototypes, software builds, and poster presentations judged by an international panel of engineers and industry leaders.",
    accent: "bg-ieee-500/8",
  },
  {
    badge: "IEEE WIE NSU AO",
    icon: Users,
    title: "Women in STEM",
    subtitle: "Leadership & Panels",
    date: "Oct 06, 2026",
    tag: "Networking Gala",
    desc: "Keynote panel and leadership workshop empowering female engineers in tech frontiers, followed by a networking gala open to all attendees.",
    accent: "bg-[#7a3b8f]/6",
  },
  {
    badge: "IEEE IAS NSU SBC",
    icon: Settings,
    title: "IAS MEGA 2.0",
    subtitle: "Skill Development Venture",
    date: "Oct 03–05, 2026",
    tag: "Certificates + Awards",
    desc: "Three-day multi-track event covering industrial automation, power systems, and hands-on technical mentorship with certificate distribution.",
    accent: "bg-gold-500/7",
  },
  {
    badge: "IEEE RAS NSU SBC",
    icon: Trophy,
    title: "RoboQuest 2026",
    subtitle: "Line Follower Arena",
    date: "Oct 05, 2026",
    tag: "Cash Prizes & Trophies",
    desc: "Autonomous robot race arena testing high-speed line-following algorithms. Open to all university teams with cash prizes and trophies for top finishers.",
    accent: "bg-ieee-400/7",
  },
];

export default function EventsPage() {
  return (
    <section className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <EditorialHeader
          icon={Calendar}
          label="On the Calendar"
          folio="Page 02 — Events"
          title="Our Events"
          subtitle="Four flagship tracks running across the week — expo, leadership, skills, and robotics."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal
                key={e.title}
                delay={i * 80}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ieee-950/10 bg-white/65 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg"
              >
                {/* card header */}
                <div className={`relative border-b border-ieee-950/10 p-6 ${e.accent}`}>
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-ieee-950/12 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ieee-800">
                      {e.badge}
                    </span>
                    <Icon
                      size={22}
                      className="text-ieee-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-6 font-display text-3xl text-ieee-950">
                    {e.title}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ieee-600">
                    {e.subtitle}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs font-medium text-ieee-900/50">
                    <span>{e.date}</span>
                    <span>{e.tag}</span>
                  </div>
                </div>

                {/* card body */}
                <div className="flex flex-1 items-end p-6">
                  <p className="text-sm leading-relaxed text-ieee-900/60">
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
