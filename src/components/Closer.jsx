import OutlineRevealText from "./OutlineRevealText";

export default function Closer() {
  return (
    <section className="border-b border-ieee-950/10 px-6 py-32 text-center">
      <div className="mx-auto max-w-4xl">
        <OutlineRevealText
          text="Engineering, community, and ambition share one truth: everything changes when you show up and build."
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.1]"
        />
      </div>
    </section>
  );
}
