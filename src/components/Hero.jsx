import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "./DateRange";

const PARTNERS = [
  { name: "IEEE IAS",  abbr: "IAS",  color: "#00629B" },
  { name: "IEEE RAS",  abbr: "RAS",  color: "#0d4d78" },
  { name: "IEEE WIE",  abbr: "WIE",  color: "#7a3b8f" },
  { name: "NSU PES",   abbr: "PES",  color: "#2d7a2d" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-label="IEEE Day 2026 introduction"
      className="relative overflow-hidden pt-28 pb-24 text-center"
    >
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Headline + logo row — the whole group is inline so it self-centers */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-8 sm:gap-12">

            {/* Left: kicker + headline */}
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] text-ieee-800 transition-all duration-700 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                IEEE NSU Student Branch Presents
              </p>

              <h1 className="mt-3 font-display text-[clamp(3rem,11vw,8.5rem)] font-normal leading-[0.9] tracking-tight text-ieee-500">
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ transitionDelay: "80ms" }}
                  >
                    IEEE
                  </span>
                </span>{" "}
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    DAY
                  </span>
                </span>
                <br />
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ transitionDelay: "320ms" }}
                  >
                    2026
                  </span>
                </span>
              </h1>
            </div>

            {/* Right: logo placeholder — vertically centered to headline */}
            <div
              className={`shrink-0 self-center transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative flex h-[clamp(5rem,11vw,9rem)] w-[clamp(5rem,11vw,9rem)] items-center justify-center overflow-hidden rounded-[22%] border-2 border-ieee-500/25 bg-white/60 shadow-lg shadow-ieee-500/10 backdrop-blur-sm">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 80 80">
                  <defs>
                    <pattern id="logo-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M10 0L5 5L10 10L5 5L0 10L5 5L0 0L5 5Z" fill="none" stroke="#00629B" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="80" height="80" fill="url(#logo-grid)" />
                </svg>
                <div className="relative flex flex-col items-center gap-1.5">
                  <div className="h-[clamp(1.6rem,3.5vw,3rem)] w-[clamp(1.6rem,3.5vw,3rem)] rounded-full border-2 border-dashed border-ieee-500/35" />
                  <span className="text-[clamp(0.45rem,0.9vw,0.6rem)] font-bold uppercase tracking-widest text-ieee-500/45">
                    logo
                  </span>
                </div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-ieee-500/45" />
              </div>
            </div>

          </div>
        </div>

        <p
          className={`mx-auto mt-8 max-w-md font-display italic text-lg text-ieee-900/80 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          A celebration by IEEE NSU Student Branch
        </p>
        <p
          className={`mx-auto mt-2 max-w-md text-base text-ieee-900/60 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "480ms" }}
        >
          We have some big events and contests — stay with us.
        </p>

        <Link
          to="/events"
          className={`mt-8 inline-block rounded-full bg-ieee-950 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-ieee-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ieee-800 active:translate-y-0 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: mounted ? "540ms" : "0ms" }}
        >
          Our Events
        </Link>

        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <DateRange />
        </div>

        {/* Partner logo placeholders */}
        <div
          className={`mt-16 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "720ms" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ieee-900/40">
            In association with
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-2 group"
                title={p.name}
              >
                {/* logo placeholder box */}
                <div
                  className="relative flex h-16 w-24 items-center justify-center overflow-hidden rounded-xl border border-white/60 bg-white/50 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105 sm:h-20 sm:w-28"
                >
                  {/* coloured top bar — brand accent */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ backgroundColor: p.color }}
                  />
                  {/* abbr text as stand-in for the real logo */}
                  <span
                    className="select-none text-base font-bold tracking-wide sm:text-lg"
                    style={{ color: p.color }}
                  >
                    {p.abbr}
                  </span>
                  {/* subtle "add logo" hint */}
                  <span className="absolute bottom-1.5 text-[8px] font-semibold uppercase tracking-wider text-ieee-900/25">
                    logo
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ieee-900/45">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
