import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Every SPA needs this: without it, navigating to a new page keeps
// whatever scroll position you were at on the last one, which reads as
// broken. Jumps instantly — a smooth animated scroll from wherever you
// were on the old page would look worse, not better.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
