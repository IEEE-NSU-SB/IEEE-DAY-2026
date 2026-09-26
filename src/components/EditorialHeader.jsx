import Reveal from "./Reveal";

const accents = {
  blue: "text-ieee-500",
  gold: "text-gold-500",
};

// The magazine "running head" that opens every feature: a ruled kicker
// bar (label + issue folio), then a large asymmetric headline/dek grid —
// not a centered pill-and-paragraph stack. This is the section-opener
// pattern reused across every page.
export default function EditorialHeader({
  icon: Icon,
  label,
  folio,
  title,
  subtitle,
  color = "blue",
  as: Heading = "h1",
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-ieee-950/15 py-3">
        <span
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${accents[color]}`}
        >
          {Icon && <Icon size={14} aria-hidden="true" />}
          {label}
        </span>
        {folio && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ieee-900/40">
            {folio}
          </span>
        )}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-end">
        <Heading className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.95] text-ieee-950">
          {title}
        </Heading>
        {subtitle && (
          <p className="max-w-md font-sans text-base leading-relaxed text-ieee-900/60 lg:pb-1">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
