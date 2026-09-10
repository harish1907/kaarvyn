import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel({ quotes }) {
  return (
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
      {quotes.map((q) => (
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
  );
}
