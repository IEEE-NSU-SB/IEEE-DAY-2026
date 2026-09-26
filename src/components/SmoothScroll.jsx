import { useEffect } from "react";
import Lenis from "lenis";

// Wraps the whole page in Lenis's buttery, momentum-based smooth scroll —
// the same library moneyincheck.org uses. Skips entirely for users who
// asked for reduced motion.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    // Exposed so ScrollToTop and BackToTop can animate through Lenis
    // instead of the browser's instant jump.
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    let frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return children;
}
