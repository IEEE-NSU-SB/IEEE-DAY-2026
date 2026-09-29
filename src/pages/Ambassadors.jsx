import { Users, Mail, IdCard } from "lucide-react";
import { FacebookIcon } from "../components/SocialIcons";
import InitialsAvatar from "../components/InitialsAvatar";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

const ambassadors = [
  {
    name: "Areebah Hasnat",
    role: "Outreach Lead",
    desc: "Our campus ambassador who works with passion and drives student outreach.",
    facebook: "https://www.facebook.com/ieeensusb",
    email: "mailto:ieee.nsu.sb@gmail.com",
    profile: "https://ieeensusb.org/member-profile/100068264/",
  },
  {
    name: "Md. Hafizur Rahman",
    role: "Operations Lead",
    desc: "Our campus ambassador who works with passion and coordinates flagship operations.",
    facebook: "https://www.facebook.com/ieeensusb",
    email: "mailto:ieee.nsu.sb@gmail.com",
    profile: "https://ieeensusb.org/member-profile/100637811/",
  },
  {
    name: "Shohorab Mehedi",
    role: "Volunteer Lead",
    desc: "Our campus ambassador who works with passion and leads volunteer execution hubs.",
    facebook: "https://www.facebook.com/ieeensusb",
    email: "mailto:ieee.nsu.sb@gmail.com",
    profile: "https://ieeensusb.org/member-profile/101243293/",
  },
];

export default function Activities() {
  return (
    <section id="ambassadors" className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <EditorialHeader
          icon={Users}
          label="The Contributors"
          title="Meet the Ambassadors"
          subtitle="The students carrying IEEE Day 2026 from campus to campus — outreach, operations, and every volunteer hour between."
        />

        <div className="grid gap-16 sm:grid-cols-3">
          {ambassadors.map((ambassador, index) => (
            <Reveal
              key={ambassador.name}
              delay={index * 100}
              className="group"
            >
              {/* Ambassador Number */}
              <p className="font-display text-5xl text-ieee-500/25">
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* Avatar */}
              <InitialsAvatar
                name={ambassador.name}
                className="-mt-8 h-32 w-32 rounded-full shadow-lg ring-4 ring-paper transition-transform duration-500 group-hover:scale-105"
              />

              {/* Name */}
              <p className="mt-5 font-display text-2xl text-ieee-950">
                {ambassador.name}
              </p>

              {/* Role */}
              <p className="text-xs font-bold uppercase tracking-widest text-ieee-500">
                {ambassador.role}
              </p>

              {/* Description */}
              <p className="mt-2 max-w-[26ch] font-serif italic text-sm leading-relaxed text-ieee-900/60">
                {ambassador.desc}
              </p>

              {/* Contact / Profile Icons */}
              <div className="mt-5 flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href={ambassador.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${ambassador.name} — Facebook`}
                  title="Facebook"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-ieee-950 text-white
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-110
                    hover:bg-ieee-700
                    hover:shadow-md
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ieee-500
                    focus-visible:ring-offset-2
                  "
                >
                  <FacebookIcon />
                </a>

                {/* Email */}
                <a
                  href={ambassador.email}
                  aria-label={`Email ${ambassador.name}`}
                  title="Email"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-ieee-950 text-white
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-110
                    hover:bg-ieee-700
                    hover:shadow-md
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ieee-500
                    focus-visible:ring-offset-2
                  "
                >
                  <Mail size={15} strokeWidth={2} />
                </a>

                {/* IEEE NSU SB Member Profile */}
                <a
                  href={ambassador.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${ambassador.name}'s IEEE NSU Student Branch profile`}
                  title="IEEE NSU SB Profile"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-ieee-500/20
                    bg-ieee-500
                    text-white
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-110
                    hover:bg-ieee-700
                    hover:shadow-md
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ieee-500
                    focus-visible:ring-offset-2
                  "
                >
                  <IdCard size={16} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}