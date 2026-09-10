import { lazy, Suspense } from "react";
import SectionHeading from "./SectionHeading";

const TestimonialsCarousel = lazy(() => import("./TestimonialsCarousel"));

const QUOTES = [
  {
    quote:
      "The wardrobe fits our room down to the last inch — you can tell it wasn't picked off a shelf.",
    name: "Aarti Deshmukh",
    location: "Pune",
  },
  {
    quote:
      "We went with the mica-finish wardrobe to stay on budget — honestly, you can't tell. Looks just as sharp as wood.",
    name: "Priya Nair",
    location: "Dombivli",
  },
  {
    quote:
      "Six months on, the almirah doors still close like day one. Real joinery, not glue and screws.",
    name: "Rohan Mehta",
    location: "Thane",
  },
  {
    quote:
      "They rebuilt our entire bedroom set — bed, side tables, almirah — as one matched collection.",
    name: "Sana & Imran Sheikh",
    location: "New Delhi",
  },
  {
    quote:
      "Our old iron gate had rusted through. The new teakwood one they built has held up two monsoons already.",
    name: "Vikram Rao",
    location: "Kalyan",
  },
  {
    quote:
      "The carved wood ceiling in our hall is the first thing every guest asks about. Genuinely looks royal.",
    name: "Meenal Joshi",
    location: "Nashik",
  },
];

// Static fallback shown while the Swiper chunk loads (or if it fails to) —
// keeps the quote text present immediately rather than behind a spinner.
function StaticFallback() {
  return (
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {QUOTES.slice(0, 3).map((q) => (
        <div key={q.name} className="border border-gold/15 p-8">
          <p className="text-gold text-2xl font-serif-display leading-none">&ldquo;</p>
          <p className="mt-2 text-cream-dim leading-relaxed">{q.quote}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.12em] text-cream">{q.name}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-emerald-light mt-1">
            {q.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink-2 py-28 sm:py-36 testimonial-swiper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading kicker="Client Words" title="Furniture people keep for decades." align="center" />

        <Suspense fallback={<StaticFallback />}>
          <TestimonialsCarousel quotes={QUOTES} />
        </Suspense>
      </div>
    </section>
  );
}
