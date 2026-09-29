import { Sparkles } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";
import Demo from "../assets/Demo.png";

const events = [
  {
    id: "smash-n-shuttle-3",
    branch: "Branch / PES",
    title: "Smash N Shuttle 3.0",
    date: "October 12–16",
    venue: "NSU Indoor Sports",
    audience: "INSB members",
    description:
      "An intra-INSB badminton tournament bringing the branch community together for five days of friendly competition.",
    image: Demo,
    imageAlt: "Smash N Shuttle 3.0 intra INSB badminton tournament poster",
    registrationLink: "gvubh",
  },
];

export default function TimelinePage() {
  return (
    <section id="timeline" className="px-8 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <EditorialHeader
          icon={Sparkles}
          label="Timeline"
          title="Key Milestones"
        />

        <div className="space-y-6">
          {events.map((event, index) => (
            <Reveal
              key={event.id}
              delay={index * 80}
              className="overflow-hidden rounded-2xl border border-ieee-950/10 bg-white/70 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] text-align-top"
            >
              <div className="bg-ieee-950/5">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="h-full max-h-[420px] w-full rounded-lg object-contain"
                />
              </div>

              <div className="flex flex-col justify-center my-2 mx-5">
                <h2 className="mt-4 font-display text-3xl text-ieee-950 sm:text-4xl">
                  {event.title}
                </h2>

                <dl className="grid gap-x-6 gap-y-2 py-2 ">
                  <div>
                    <dd className="mt-1 text-sm font-semibold text-ieee-950">
                      {event.date} | {event.venue} | {event.audience}
                    </dd>
                  </div>
                </dl>

                <p className=" text-sm leading-relaxed text-ieee-900/65">
                  {event.description}
                </p>

                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex w-fit items-center rounded-full bg-ieee-950 px-5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-ieee-800"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

