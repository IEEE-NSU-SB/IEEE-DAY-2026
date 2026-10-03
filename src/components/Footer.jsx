import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

const issueLinks = [
  { label: "Home", to: "#home" },
  { label: "Timeline", to: "#timeline" },
  { label: "Ambassadors", to: "#ambassadors" },
  { label: "Contest", to: "#contest" },
  { label: "Achievement", to: "#achievement" },
  { label: "About", to: "#about" },
];

// const affiliations = [
//   { label: "IEEE Day Official Portal", href: "https://ieeeday.org" },
//   { label: "IEEE NSU SB Official Site", href: "#" },
//   { label: "IEEE Region 10", href: "#" },
//   { label: "IEEE Bangladesh Section", href: "#" },
//   { label: "North South University", href: "https://www.northsouth.edu/" },
// ];

const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/ieeensusb" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/ieeensusb" },
  { Icon: XIcon, label: "X (Twitter)", href: "https://twitter.com/ieeensusb" },
];

// const legal = ["Privacy", "Terms", "IEEE Code of Ethics"];

export default function Footer() {
  return (
    <footer className="border-t border-ieee-950/10 bg-white/40">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        {/* masthead */}
        <div className="border-b border-ieee-950/10 pb-10">
          <p className="mt-2 font-display text-3xl text-ieee-950 sm:text-4xl">
            IEEE NSU Student Branch.
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ieee-900/60">
            Affiliated with IEEE Region 10 and the IEEE Bangladesh Section
            — advancing technology for humanity, one project at a time.
          </p>
        </div>

        {/* columns */}
        <div className="grid gap-10 border-b border-ieee-950/10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ieee-900/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {issueLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.to}
                    className="text-sm text-ieee-900/70 transition-colors hover:text-ieee-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ieee-900/40">
              Affiliations
            </p>
            <ul className="mt-4 space-y-2.5">
              {affiliations.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-ieee-900/70 transition-colors hover:text-ieee-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ieee-900/40">
              Headquarters
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-2.5 text-sm text-ieee-900/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ieee-500" aria-hidden="true" />
                Plot-15, Block-B, Bashundhara, Dhaka – 1229, Bangladesh
              </li>
              <li>
                <a
                  href="tel:+880255668200"
                  className="flex items-center gap-2.5 text-sm text-ieee-900/70 transition-colors hover:text-ieee-950"
                >
                  <Phone size={16} className="shrink-0 text-ieee-500" aria-hidden="true" />
                  01858252224 | 01637920211
                </a>
              </li>
              <li>
                <a
                  href="mailto:sb-nsu@ieee.org"
                  className="flex items-center gap-2.5 text-sm text-ieee-900/70 transition-colors hover:text-ieee-950"
                >
                  <Mail size={16} className="shrink-0 text-ieee-500" aria-hidden="true" />
                  sb-nsu@ieee.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ieee-900/40">
              Follow the Branch
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ieee-900/60">
              Contest updates and symposium notices, posted on every channel
              below.
            </p>
            <div className="mt-4 flex gap-2">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ieee-950/15 text-ieee-900 transition-colors hover:border-ieee-950 hover:bg-ieee-950 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* colophon */}
        <div className="flex flex-col items-center justify-center gap-3 pt-8 text-xs text-ieee-900/50 sm:flex-row">
          <p>
            © 2026 IEEE NSU Student Branch (INSB). Celebrating IEEE Day ·
            Advancing Technology for Humanity.
          </p>
          {/* <div className="flex gap-5">
            {legal.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-ieee-950">
                {l}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
