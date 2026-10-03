import { Sparkles } from "lucide-react";
import EditorialHeader from "../components/EditorialHeader";
import Reveal from "../components/Reveal";
import Demo from "../assets/Demo.png";
import IEEEDayPoster from "../assets/IEEE-Day.png";
import MainPoster from "../assets/IEEE DAY 26 Poster.png";
import Recruitment from "../assets/Recruitment.png";
import Celebration from "../assets/IEEE Day Celebration.png";
const events = [
  {
    id: "membership-drive",
    branch: "INSB",
    title: "Recruitment Drive Fall 26",
    date: "October 4, 5 (11:30 AM - 5:00 PM)",
    venue: "In front of Recreation Hall",
    audience: "NSU students",
    description:
      "A two-day drive to introduce IEEE NSU Student Branch and help students become members.",
    image: Recruitment,
    imageAlt: "Membership Drive poster",
    registrationLink: "",
  },
  {
    id: "ieee-day-celebration",
    branch: "INSB",
    title: "IEEE Day 2026 Celebration",
    date: "October 6 (6 PM - 8 PM)",
    venue: "TBA",
    audience: "INSB members",
    description:
      "The official IEEE Day 2026 celebration, kicking off the week's events.",
    image: Celebration,
    imageAlt: "IEEE Day Celebration poster",
    registrationLink: "",
  },
    {
    id: "smash-n-shuttle-3",
    branch: "Branch / PES",
    title: "Smash N Shuttle 3.0",
    date: "October 8,10,11 (9:30 AM - 3:30 PM)",
    venue: "NSU Indoor Sports",
    audience: "INSB members",
    description:
      "An intra-INSB badminton tournament bringing the branch community together for three days of friendly competition.",
    image: Demo,
    imageAlt: "Smash N Shuttle 3.0 intra INSB badminton tournament poster",
    registrationLink: "https://forms.gle/LeF59F5qY8hqxuWi8",
  },
  {
    id: "membership-perks",
    branch: "INSB",
    title: "Membership Perks 5.0",
    date: "October 8 (5 PM - 7 PM)",
    venue: "Syndicate Hall",
    audience: "IEEE NSU Student Branch members",
    description:
      "Learn about the benefits, resources and opportunities that come with an IEEE membership.",
    image: IEEEDayPoster,
    imageAlt: "Membership Perks poster",
    registrationLink: "",
  },
  {
    id: "pvsyst-energy-yield",
    branch: "Branch / PES",
    title: "An Overview of Energy Yield Calculation using PVsyst",
    date: "October 8 (4 PM - 6 PM)",
    venue: "TBA",
    audience: "IEEE NSU Student Branch members",
    description:
      "An introduction to estimating solar energy yield with the PVsyst simulation software.",
    image: IEEEDayPoster,
    imageAlt: "PVsyst energy yield calculation overview poster",
    registrationLink: "",
  },
  {
    id: "treasure-hunt",
    branch: "INSB",
    title: "Treasure Hunt",
    date: "October 9 (3:30 PM - 5:30 PM)",
    venue: "OAT601",
    audience: "Team Volunteers",
    description:
      "A team-based treasure hunt with clues and challenges across campus.",
    image: IEEEDayPoster,
    imageAlt: "Treasure Hunt poster",
    registrationLink: "",
  },
  {
    id: "who-checks-the-ai",
    branch: "INSB",
    title: "Who Checks the AI: Three Engineering Habits That Will Outlast Every AI Tool",
    date: "October 10 (4 PM - 6 PM)",
    venue: "TBA",
    audience: "INSB members",
    description:
      "A session on the engineering habits that stay valuable no matter which AI tools come and go.",
    image: IEEEDayPoster,
    imageAlt: "Who Checks the AI session poster",
    registrationLink: "",
  },
  {
    id: "tech-talk",
    branch: "INSB",
    title: "Tech Talk",
    date: "October 10 (6 PM - 8 PM)",
    venue: "TBA",
    audience: "Branch Officers and Team Volunteers",
    description: "A technical talk with all teams.",
    image: IEEEDayPoster,
    imageAlt: "Tech Talk poster",
    registrationLink: "",
  },
  {
    id: "gateway-to-japan",
    branch: "INSB",
    title: "Gateway to Japan: Insights on the MEXT Scholarship and Career Opportunities",
    date: "October 12 (4 PM - 6 PM)",
    venue: "TBA",
    audience: "NSU students",
    description:
      "Insights on the MEXT Scholarship and career opportunities in Japan.",
    image: IEEEDayPoster,
    imageAlt: "Gateway to Japan MEXT Scholarship session poster",
    registrationLink: "",
  },
    {
    id: "membership-renewal",
    branch: "INSB",
    title: "IEEE Membership Renewal",
    date: "October 12",
    venue: "Online",
    audience: "Existing IEEE members",
    description: "Renew your IEEE membership online during IEEE Day.",
    image: IEEEDayPoster,
    imageAlt: "IEEE Membership Renewal poster",
    registrationLink: "",
  },
  {
    id: "wie-outreach",
    branch: "Branch / WIE",
    title: "WIE Outreach",
    date: "October 13",
    venue: "School",
    audience: "WIE members",
    description:
      "An outreach program by IEEE Women in Engineering.",
    image: IEEEDayPoster,
    imageAlt: "WIE Outreach poster",
    registrationLink: "",
  },
  {
    id: "iot-workshop",
    branch: "INSB",
    title: "Workshop on Internet of Things (IoT)",
    date: "October 13 (6 PM - 8 PM)",
    venue: "TBA",
    audience: "IEEE NSU Student Branch members",
    description: "A hands-on workshop on Internet of Things fundamentals.",
    image: IEEEDayPoster,
    imageAlt: "Workshop on Internet of Things poster",
    registrationLink: "",
  },
  {
    id: "ras-ml-seminar",
    branch: "Branch / RAS",
    title: "RAS ML Seminar",
    date: "October 14 (4 PM - 5 PM)",
    venue: "SBE Conference Room",
    audience: "IEEE NSU Student Branch members",
    description:
      "A seminar on machine learning from the Robotics and Automation Society.",
    image: IEEEDayPoster,
    imageAlt: "RAS ML Seminar poster",
    registrationLink: "",
  },
  {
    id: "ieee-day-closing",
    branch: "INSB",
    title: "IEEE Day Closing",
    date: "October 15",
    venue: "TBA",
    audience: "IEEE NSU Student Branch members",
    description: "The closing ceremony of IEEE Day 2026 celebrations.",
    image: IEEEDayPoster,
    imageAlt: "IEEE Day Closing poster",
    registrationLink: "",
  },
  // {
  //   id: "fall-26-icebreaking",
  //   branch: "INSB",
  //   title: "Fall 26 IceBreaking",
  //   date: "October 15",
  //   venue: "TBA",
  //   audience: "INSB members",
  //   description:
  //     "A welcome event for the Fall 2026 semester to meet fellow members and the executive team.",
  //   image: Demo,
  //   imageAlt: "Fall 26 IceBreaking poster",
  //   registrationLink: "",
  // },
  {
    id: "technical-visit-ulkasemi",
    branch: "INSB",
    title: "Technical Visit (Ulkasemi)",
    date: "October 16 (TBA)",
    venue: "Ulkasemi",
    audience: "IEEE NSU Student Branch members",
    description:
      "A technical visit to Ulkasemi to see industry work up close.",
    image: IEEEDayPoster,
    imageAlt: "Technical Visit to Ulkasemi poster",
    registrationLink: "",
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
                  className="h-full max-h-[240px] w-full rounded-lg object-contain"
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

