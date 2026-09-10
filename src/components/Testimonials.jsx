import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";

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

export default function Testimonials() {
  return (
    <section className="bg-ink-2 py-28 sm:py-36 testimonial-swiper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading kicker="Client Words" title="Furniture people keep for decades." align="center" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-16 pb-14"
        >
          {QUOTES.map((q) => (
            <SwiperSlide key={q.name}>
              <div className="h-full border border-gold/15 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_25px_50px_-25px_rgba(202,160,70,0.4)]">
                <p className="text-gold text-2xl font-serif-display leading-none">&ldquo;</p>
                <p className="mt-2 text-cream-dim leading-relaxed">{q.quote}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.12em] text-cream">{q.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-light mt-1">
                  {q.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
