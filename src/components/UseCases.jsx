import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";
import { whatsappLink } from "../data/site";

const CASES = [
  {
    title: "Moving into a new home",
    text: "Furnish room by room without blowing the budget — start with a mica wardrobe and bed, add more as you go.",
    message: "Hi Kaarvyn Woodcraft, I'm moving into a new home and want a quote for furniture.",
  },
  {
    title: "Renovating on a budget",
    text: "Get the marble-look or solid-wood look you want without solid-wood pricing across the board.",
    message: "Hi Kaarvyn Woodcraft, I'm renovating and want to know my finish options and pricing.",
  },
  {
    title: "Replacing a damaged gate or door",
    text: "Wood & iron gates and carved unit doors, built to match your facade — old one measured, new one fitted.",
    message: "Hi Kaarvyn Woodcraft, I need to replace a gate/door and want a quote.",
  },
  {
    title: "Furnishing a rental or PG",
    text: "Affordable mica furniture that looks sharp without a long-term price tag.",
    message: "Hi Kaarvyn Woodcraft, I'm furnishing a rental and looking for budget-friendly options.",
  },
  {
    title: "A statement piece for a renovation",
    text: "Carved wood ceilings and classical doors for a hall or entrance that actually gets noticed.",
    message: "Hi Kaarvyn Woodcraft, I want a custom wood ceiling or carved door for my home.",
  },
  {
    title: "Matching a full room, not one piece",
    text: "Bed, wardrobe and side tables built and finished as one matched set, not separate purchases.",
    message: "Hi Kaarvyn Woodcraft, I want a matched bedroom set — bed, wardrobe and side tables.",
  },
];

export default function UseCases() {
  const ref = useScrollReveal({ y: 30, stagger: 0.1 });

  return (
    <section className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          kicker="Sound Familiar?"
          title="Whatever the reason, we've built for it before."
        />

        <div ref={ref} data-reveal-group className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <a
              key={c.title}
              data-reveal
              href={whatsappLink(c.message)}
              target="_blank"
              rel="noreferrer"
              className="group block border border-gold/15 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_25px_50px_-25px_rgba(202,160,70,0.4)]"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-serif-display text-xl text-cream leading-snug">{c.title}</p>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <p className="mt-3 text-sm text-cream-dim leading-relaxed">{c.text}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-gold">Ask on WhatsApp</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
