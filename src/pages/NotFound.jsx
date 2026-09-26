import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-ieee-500">
        Page Not Found
      </p>
      <h1 className="mt-4 font-display text-[clamp(3rem,10vw,6rem)] leading-none text-ieee-950">
        404
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-ieee-900/60">
        This page has left the building. Let's get you back to the story.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-ieee-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-ieee-800"
      >
        Back to Home
      </Link>
    </section>
  );
}
