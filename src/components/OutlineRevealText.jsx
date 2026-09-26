import { useEffect, useRef, useState } from "react";

// Same scroll-linked idea as ScrollRevealText, but for big display type:
// each word starts as an outline (transparent fill, stroked edge) and
// solidifies to a filled, colored word as you scroll past it.
export default function OutlineRevealText({ text, className = "" }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const total = rect.height + vh * 0.3;
      const passed = start - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / total)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const target = i / Math.max(1, words.length - 1);
        const filled = target <= progress;
        return (
          <span
            key={i}
            className="transition-colors duration-300"
            style={
              filled
                ? { color: "var(--color-ieee-950)", WebkitTextStroke: "0px" }
                : {
                    color: "transparent",
                    WebkitTextStroke: "1.5px var(--color-ieee-950)",
                  }
            }
          >
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}
