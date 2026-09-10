import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/15 py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-serif-display text-xl tracking-[0.15em] text-cream">
            KAARVYN <span className="text-gold">WOODCRAFT</span>
          </p>
          <p className="mt-3 text-sm text-cream-dim max-w-xs">
            Bespoke almirahs, beds, sofas, wardrobes, gates, ceilings and doors in mica, marble-look or wood finishes. Based in {site.location}, orders taken {site.serviceArea}.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-cream-dim">
          <a href="#collections" className="link-underline w-fit hover:text-cream">Collections</a>
          <a href="#craft" className="link-underline w-fit hover:text-cream">Craftsmanship</a>
          <a href="#refer" className="link-underline w-fit hover:text-cream">Refer &amp; Earn</a>
          <a href="#contact" className="link-underline w-fit hover:text-cream">Contact</a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-cream-dim">
          <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="link-underline w-fit hover:text-cream">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="link-underline w-fit hover:text-cream">
            {site.email}
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline w-fit hover:text-cream">
            Instagram
          </a>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-cream-dim/50 tracking-[0.1em]">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
