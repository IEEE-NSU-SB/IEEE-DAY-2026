import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ExternalLink, Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Activities", to: "/activities" },
  { label: "Events", to: "/events" },
  { label: "Contest", to: "/contest" },
  { label: "Timeline", to: "/timeline" },
  { label: "Achievement", to: "/achievement" },
  { label: "About", to: "/about" },
];

// Apple's "Liquid Glass": barely-there tint, heavy blur + saturation so
// the page's own color reads vividly through it, a bright rim to catch
// the light at the edge, and a soft diagonal sheen across the top like
// light actually striking a curved glass surface.
const RIM =
  "bg-gradient-to-b from-white/45 via-white/12 to-white/[0.02] shadow-[0_20px_50px_-16px_rgba(5,15,26,0.25)]";
const GLASS =
  "bg-white/[0.03] backdrop-blur-xl backdrop-saturate-[2.2] shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_-8px_20px_-12px_rgba(5,15,26,0.06)_inset]";
const SHEEN =
  "bg-[linear-gradient(115deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.04)_30%,rgba(255,255,255,0)_50%)]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (open && mobileNavRef.current) {
      setMenuHeight(mobileNavRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-ieee-950" : "text-ieee-900/55 hover:text-ieee-950"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-2xl px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
      isActive ? "bg-ieee-500 text-white" : "text-ieee-900"
    }`;

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div
          className={`rounded-full p-px transition-shadow duration-300 ${RIM}`}
        >
          <div
            className={`relative overflow-hidden rounded-full transition-colors duration-300 ${GLASS} ${
              scrolled ? "bg-white/[0.06]" : ""
            }`}
          >
            <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${SHEEN}`} />
            <div className="relative flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
              <Link to="/" className="flex shrink-0 items-center gap-2.5">
                <div className="flex h-9 w-9 rotate-45 items-center justify-center rounded-lg bg-ieee-500 shadow-inner">
                  <span className="-rotate-45 text-[10px] font-black text-white">
                    IEEE
                  </span>
                </div>
                <div className="hidden text-left leading-tight sm:block">
                  <p className="text-sm font-bold text-ieee-950">
                    IEEE NSU SB
                  </p>
                  <p className="text-[10px] font-semibold uppercase leading-tight tracking-wider text-ieee-700/80">
                    Student Branch Presents
                  </p>
                </div>
              </Link>

              <nav
                aria-label="Primary"
                className="hidden items-center gap-6 lg:flex"
              >
                {links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === "/"}
                    className={linkClass}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <a
                href="https://ieeeday.org"
                target="_blank"
                rel="noreferrer"
                className="hidden shrink-0 items-center gap-1.5 rounded-full bg-ieee-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-ieee-800 lg:inline-flex"
              >
                ieeeday.org
                <ExternalLink size={14} />
              </a>

              <button
                className="text-ieee-950 lg:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className="relative block h-[22px] w-[22px]">
                  <Menu
                    size={22}
                    className={`absolute inset-0 transition-all duration-200 ${
                      open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    size={22}
                    className={`absolute inset-0 transition-all duration-200 ${
                      open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ height: menuHeight }}
          className="overflow-hidden transition-[height] duration-300 ease-out motion-reduce:transition-none lg:hidden"
        >
          <nav
            ref={mobileNavRef}
            aria-label="Primary mobile"
            className={`relative mt-2 overflow-hidden rounded-[28px] p-px ${RIM}`}
          >
            <div className={`relative overflow-hidden rounded-[27px] px-4 ${GLASS}`}>
              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${SHEEN}`} />
              <div className="relative flex flex-col gap-1 py-4">
                {links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={mobileLinkClass}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a
                  href="https://ieeeday.org"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-ieee-950/15 px-4 py-2 text-sm font-semibold text-ieee-800"
                >
                  ieeeday.org
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
