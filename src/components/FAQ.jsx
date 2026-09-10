import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Keep this content in sync with the FAQPage JSON-LD in index.html — Google
// expects structured data to match what's actually visible on the page.
const FAQS = [
  {
    q: "Do you deliver across India, or only Delhi NCR?",
    a: "Both — in-person site visits to measure your space are available across Delhi NCR, and we design, build and ship custom orders pan-India.",
  },
  {
    q: "What's the difference between mica and solid wood finishes?",
    a: "Mica (laminate) finish is a decorative sheet over a plywood or MDF core — it's our most affordable, most-ordered range. Solid wood costs more but has a heavier, more premium look. We also offer a marble-look PU finish as a middle option.",
  },
  {
    q: "How long does a custom almirah or wardrobe take to build?",
    a: "Most single pieces (an almirah, bed or wardrobe) take 2-4 weeks from confirmed design to delivery, depending on size and finish. Larger jobs like fitted wardrobes, gates or ceiling work can take longer — we'll give you a firm timeline with your quote.",
  },
  {
    q: "Do you also make custom gates, wood ceilings and doors, not just furniture?",
    a: "Yes — alongside almirahs, beds, sofas and wardrobes, we build custom main-door and estate gates, decorative wood ceilings, and hand-carved unit doors.",
  },
  {
    q: "Is the site visit and quote free?",
    a: "Yes, site visits and quotes are free with no obligation. Share your room dimensions or ideas over WhatsApp and we'll get back with a design and price.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold/15 py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left"
      >
        <span className="font-serif-display text-xl sm:text-2xl text-cream">{q}</span>
        <Plus
          size={20}
          strokeWidth={1.5}
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-cream-dim leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-ink-2 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading kicker="Questions" title="Good to know before you enquire." />
        <div className="mt-12 max-w-3xl">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
