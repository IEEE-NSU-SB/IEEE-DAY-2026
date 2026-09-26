// A polished hand-drawn timeline showing the full IEEE Day 2026 season.
// SVG viewBox starts at x=0 (left endpoint) and ends at x=620 (right),
// so tick positions map exactly to CSS left percentages via x/620*100%.

// day 0 = Sept 25, day 13 = Oct 08 → x = day/13 * 620
const MARKS = [
  { x: 0,   date: "SEPT 25",   label: "Season Opens",  kind: "end"  },
  { x: 239, date: "OCT 01",    label: "Entries Close", kind: "mid"  },
  { x: 382, date: "OCT 03–05", label: "IAS Mega Week", kind: "mid"  },
  { x: 525, date: "OCT 06",    label: "IEEE Day",       kind: "hero" },
  { x: 620, date: "OCT 08",    label: "Season Ends",   kind: "end"  },
];

export default function DateRange() {
  return (
    <div className="mx-auto mt-14 w-full max-w-2xl px-1">

      {/* ── SVG track ───────────────────────────────────────────────── */}
      <div className="relative h-14">
        <svg
          aria-hidden="true"
          viewBox="0 0 620 56"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          {/* gently wavy baseline */}
          <path
            d="M0 30 C55 24 130 36 215 30 S370 24 460 30 S555 34 610 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="text-ieee-950/30"
          />

          {/* arrowhead at right end */}
          <path
            d="M603 23 L612 30 L603 37"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ieee-950/30"
          />

          {/* endpoint dots */}
          <circle cx="0"   cy="30" r="3.5" className="fill-ieee-950/40" />
          <circle cx="620" cy="30" r="3.5" className="fill-ieee-950/40" />

          {/* mid ticks */}
          {MARKS.filter(m => m.kind === "mid").map(m => (
            <line
              key={m.date}
              x1={m.x} y1="21" x2={m.x} y2="39"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              className="text-ieee-950/35"
            />
          ))}

          {/* hero mark – gold circle + pin + dashed leader */}
          {MARKS.filter(m => m.kind === "hero").map(m => (
            <g key={m.date}>
              <circle
                cx={m.x} cy="30" r="9.5"
                fill="none"
                stroke="var(--color-gold-500)"
                strokeWidth="1.8"
                transform={`rotate(-6 ${m.x} 30)`}
              />
              <path
                d={`M${m.x} 9 L${m.x+3.5} 17 L${m.x} 15 L${m.x-3.5} 17 Z`}
                fill="var(--color-gold-500)"
              />
              <path
                d={`M${m.x} 41 Q${m.x-8} 56 ${m.x-20} 60`}
                fill="none"
                stroke="var(--color-gold-500)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2 4"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── Label row ──────────────────────────────────────────────── */}
      <div className="relative mt-1 h-[4.5rem]">
        {MARKS.filter(m => m.kind !== "hero").map(m => {
          const isStart = m.x === 0;
          const isEnd   = m.x === 620;
          const pct     = `${(m.x / 620) * 100}%`;
          return (
            <div
              key={m.date}
              className={`absolute top-0 flex flex-col ${
                isStart ? "left-0 items-start text-left" :
                isEnd   ? "right-0 items-end text-right" :
                          "-translate-x-1/2 items-center text-center"
              }`}
              style={isEnd ? { right: 0 } : { left: pct }}
            >
              <span className={`whitespace-nowrap font-display leading-none ${
                m.kind === "end"
                  ? "text-[1.3rem] text-ieee-950 sm:text-2xl"
                  : "text-[0.85rem] text-ieee-900/50 sm:text-[1rem]"
              }`}>
                {m.date}
              </span>
              <span className={`mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-widest ${
                m.kind === "end" ? "text-ieee-900/40" : "hidden text-ieee-900/30 sm:block"
              }`}>
                {m.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Main event callout ─────────────────────────────────────── */}
      <div className="mt-0 flex flex-col items-center gap-1 text-center">
        <span className="font-display text-[2.8rem] leading-none text-gold-600 sm:text-[3.5rem]">
          OCT 06
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-600/70">
          IEEE Day — The Main Event
        </span>
      </div>

      {/* ── Footer line ─────────────────────────────────────────────── */}
      <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-ieee-900/30">
        Fourteen Days · IEEE Day Season 2026
      </p>
    </div>
  );
}
