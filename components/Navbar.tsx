"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Close the menu when the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close with Escape key, and when the screen becomes wide
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onMedia = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onMedia);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onMedia);
    };
  }, []);

  // Stop the page from scrolling behind the open menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = "absolute left-0 h-0.5 w-6 rounded bg-black transition-all duration-300";

  return (
    <>
      {/* Dark backdrop behind the mobile menu */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-soft bg-glass">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-lg font-semibold tracking-tight sm:text-xl">
            Anoushey-Chandio
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`font-medium underline-offset-8 hover:underline hover:decoration-sky hover:decoration-4 ${
                      active ? "text-sky-ink underline decoration-sky decoration-4" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger button */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-6">
              <span className={`${bar} ${open ? "top-[9px] rotate-45" : "top-0"}`} />
              <span className={`${bar} top-[9px] ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`${bar} ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
            </span>
          </button>
        </nav>

        {/* Mobile menu: slides open smoothly */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="border-t border-sky-soft bg-white px-5 pb-5 pt-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href} className="border-b border-sky-soft last:border-0">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3.5 text-lg font-semibold ${
                        active ? "text-sky-ink" : ""
                      }`}
                    >
                      {l.label}
                      <ChevronRight size={18} className="text-sky" />
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Get a free consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
