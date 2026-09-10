import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ThemeToggle from "./ThemeToggle";
import { site } from "../data/site";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#craft", label: "Craftsmanship" },
  { href: "#refer", label: "Refer & Earn" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-serif-display text-xl sm:text-2xl tracking-[0.15em] text-cream">
          KAARVYN <span className="text-gold">WOODCRAFT</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 font-sans text-sm tracking-[0.08em] uppercase text-cream-dim">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline hover:text-cream transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <MagneticButton
            as="a"
            {...{ href: "#contact" }}
            className="inline-block border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-ink transition-colors duration-300"
          >
            Book a Consultation
          </MagneticButton>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-cream"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-ink border-b border-gold/15"
          >
            <ul className="px-6 py-8 flex flex-col gap-6 font-serif-display text-2xl text-cream">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="text-gold text-base tracking-[0.15em] uppercase"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
