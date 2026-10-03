import { Globe, Info, Link2, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "../components/SocialIcons";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";

// const channels = [
//   { icon: FacebookIcon, label: "Facebook", value: "fb.com/ieeensusb" },
//   { icon: InstagramIcon, label: "Instagram", value: "@ieee_nsu_sb" },
//   { icon: XIcon, label: "X", value: "@ieee_nsu" },
//   { icon: Globe, label: "Branch Portal", value: "ieeensu.org" },
//   { icon: Mail, label: "Email Contact", value: "contact@ieeensu.org" },
//   { icon: Link2, label: "IEEE Day Official", value: "ieeeday.org" },
// ];

export default function About() {
  return (
    <>
      <section id="about" className="px-8 py-16 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <EditorialHeader
            icon={Info}
            label="About the Branch"
            title="IEEE North South Student Branch"
          />

          <div className="grid gap-10">
            <Reveal>
              <p className="font-serif italic text-lg leading-relaxed text-ieee-950 drop-cap">
                IEEE NSU Student Branch is the North South University chapter
                of the world's largest technical professional organization.
                Affiliated with IEEE Region 10 and the IEEE Bangladesh
                Section, the branch is dedicated to technical advancement,
                scientific discovery, and humanitarian engineering.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ieee-900/70">
                From flagship expos to robotics arenas, leadership panels to
                global contests, the branch runs a full calendar of
                activities built entirely by student volunteers — connecting
                the university's engineers to the wider IEEE community.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <section className=" px-8 py-8 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-xl font-bold font-serif uppercase tracking-[0.25em] text-ieee-500">
            Stay Connected
          </p>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} as="li" delay={i * 60}>
                  <a
                    href="#"
                    className="group block rounded-2xl border border-ieee-950/10 bg-white/65 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg"
                  >
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ieee-500 text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-sm font-bold text-ieee-950">
                      {c.label}
                    </p>
                    <p className="mt-1 truncate text-xs text-ieee-900/55">
                      {c.value}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section> */}
    </>
  );
}

