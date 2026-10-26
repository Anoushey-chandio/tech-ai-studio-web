import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { Instagram, Github, Youtube, Phone, Mail, ArrowRight } from "lucide-react";
import { PHONE, EMAIL, SOCIALS } from "@/lib/contact-info";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const socials = [
  { href: SOCIALS.instagram, label: "Instagram", icon: Instagram },
  { href: SOCIALS.github, label: "GitHub", icon: Github },
  { href: SOCIALS.youtube, label: "YouTube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Wordmark className="text-2xl" />
         <p className="mt-4 max-w-xs text-white/70">
  Scroll-stopping reels, UGC-style ads and AI clips, plus modern
  websites and landing pages for your brand.
</p>
          <Link
            href="/#contact"
            className="btn-primary mt-6"
          >
            Get a free consultation <ArrowRight size={18} />
          </Link>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick links</h3>
          <ul className="mt-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-sun">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-white/70">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sun" />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-sun">{PHONE}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sun" />
              <a href={`mailto:${EMAIL}`} className="min-w-0 break-all hover:text-sun">{EMAIL}</a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg bg-white/10 p-2.5 hover:bg-sun hover:text-black"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} tech.ai.studio &middot; Anoushey Chandio. All rights reserved.
      </div>
    </footer>
  );
}
