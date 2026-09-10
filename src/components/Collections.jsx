import { useState } from "react";
import SectionHeading from "./SectionHeading";
import GalleryCard from "./GalleryCard";
import { collections } from "../data/gallery";

export default function Collections() {
  const [active, setActive] = useState(collections[0].key);
  const current = collections.find((c) => c.key === active);

  return (
    <section id="collections" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          kicker="Collections"
          title="Almirahs to ceilings — every piece built to order."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {collections.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-[0.15em] border transition-colors duration-300 ${
                active === c.key
                  ? "btn-mica border-gold text-ink"
                  : "border-cream/20 text-cream-dim hover:border-gold/60 hover:text-cream"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <p className="mt-6 text-cream-dim max-w-md">{current.tagline}</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((item, i) => (
            <GalleryCard key={item.title} {...item} tall={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
