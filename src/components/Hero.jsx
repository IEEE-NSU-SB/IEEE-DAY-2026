import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import IEEEDAY from "../assets/IEEE-DAY.png";
import IAS from "../assets/IAS.png";
import RAS from "../assets/RAS.png";
import WIE from "../assets/WIE.png";
import PES from "../assets/PES.png";

const PARTNERS = [
  { name: "IEEE IAS", logo: IAS },
  { name: "IEEE RAS", logo: RAS },
  { name: "IEEE WIE", logo: WIE },
  { name: "NSU PES", logo: PES },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      aria-label="IEEE Day 2026 introduction"
      className="relative overflow-hidden pt-28 pb-24 text-center"
    >
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Headline + logo row — the whole group is inline so it self-centers */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-8 sm:gap-12">

            {/* Left: kicker + headline */}
            <div>

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
              <div className="relative flex h-55 w-55 items-center justify-center overflow-hidden">
                <div>
                  <img src={IEEEDAY} alt="IEEE DAY 2026 logo" className="h-full w-full object-contain p-2" />
                </div>
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

        <a
          href="#events"
          className={`mt-8 inline-block rounded-full bg-ieee-950 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-ieee-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ieee-800 active:translate-y-0 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: mounted ? "140ms" : "0ms" }}
        >
          Our Events
        </a>

        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <DateRange />
        </div>

        {/* Partner logos */}
        <div
          className={`mt-16 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "720ms" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ieee-900/40">
            In collaboration with
          </p>

          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-12">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 items-center justify-center sm:h-24"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
