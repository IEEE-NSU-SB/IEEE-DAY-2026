import { useEffect, useRef, useState } from "react";

// Splits text into words and lights each one up from dim to full color
// as the paragraph scrolls through the middle of the viewport — the
// same progressive-reveal reading effect moneyincheck.org uses on its
// intro paragraphs.
export default function ScrollRevealText({ text, className = "" }) {
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
      // Reveal window: starts when the paragraph's top reaches 80% of
      // viewport height, finishes when its bottom reaches 45%.
      const start = vh * 0.8;
      const total = rect.height + vh * 0.35;
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
        const diff = target - progress;
        const opacity = diff <= 0 ? 1 : Math.max(0.28, 1 - diff * 5);
        return (
          <span key={i} style={{ opacity, transition: "opacity 0.15s linear" }}>
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}
