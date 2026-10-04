import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import Dateline from "../components/Dateline";
import PullQuote from "../components/PullQuote";
import Ambassadors from "./Ambassadors";
import Contest from "./Contest";
import Timeline from "./Timeline";
import Achievement from "./Achievement";
import About from "./About";

const contents = [
  {
    no: "01",
    label: "Activities",
    to: "#activities",
    teaser: "Meet the ambassadors carrying IEEE Day from campus to campus.",
  },
  {
    no: "02",
    label: "Events",
    to: "#events",
    teaser: "TechFest, Women in STEM, IAS Mega, and RoboQuest — the full lineup.",
  },
  {
    no: "03",
    label: "Timeline",
    to: "#timeline",
    teaser: "Every milestone from the first briefing to the grand gala.",
  },
  {
    no: "04",
    label: "Contest",
    to: "#contest",
    teaser: "Photo, reel, and research tracks — global recognition on the line.",
  },
  {
    no: "05",
    label: "Achievement",
    to: "#achievement",
    teaser: "A first-place world win, and the honors that came with it.",
  },
  {
    no: "06",
    label: "About",
    to: "#about",
    teaser: "Who the branch is, where to find us, and every channel that matters.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Dateline />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <PullQuote attribution="IEEE NSU Student Branch">
            IEEE Day 2026 is not one event — it's a season. Every workshop,
            every contest entry, every ambassador conversation adds up to
            one university-wide celebration of what engineering can do.
          </PullQuote>
        </div>
      </section>

      <Timeline />
      <Ambassadors />
      <Contest />
      <Achievement />
      {/* <About /> */}
    </>
  );
}
