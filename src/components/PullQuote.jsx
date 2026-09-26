import Reveal from "./Reveal";

// A magazine pull-quote: an oversized decorative mark, a big italic
// serif line, and a short attribution rule — used to break up long
// stretches of copy the way Esquire or Harper's Bazaar set one.
export default function PullQuote({ children, attribution, className = "" }) {
  return (
    <Reveal className={`relative py-8 ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 -top-6 select-none font-display text-[6rem] leading-none text-ieee-500/15 sm:text-[8rem]"
      >
        "
      </span>
      <p className="relative font-display text-[clamp(1.5rem,3vw,2.25rem)] italic leading-[1.15] text-ieee-950">
        {children}
      </p>
      {attribution && (
        <p className="relative mt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ieee-900/50">
          <span className="h-px w-8 bg-ieee-500" />
          {attribution}
        </p>
      )}
    </Reveal>
  );
}
