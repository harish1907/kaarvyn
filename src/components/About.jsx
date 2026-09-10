import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import useTilt from "../hooks/useTilt";
import StatItem from "./StatItem";
import workshopImg from "../assets/about/workshop.jpg";

const STATS = [
  { value: "12+", label: "Years of craft" },
  { value: "600+", label: "Pieces delivered" },
  { value: "3", label: "Finishes: mica, marble-look & wood" },
];

export default function About() {
  const textRef = useScrollReveal({ y: 30 });
  const imgRef = useScrollReveal({ y: 0, duration: 1.4 });
  const tilt = useTilt({ max: 6 });

  return (
    <section id="craft" className="bg-ink-2 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div ref={imgRef} className="perspective">
          <motion.div
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={tilt.style}
            className="distort-wrap relative overflow-hidden rounded-sm border border-gold/10 glow-gold"
          >
            <img
              src={workshopImg}
              alt="Craftsman at Kaarvyn Woodcraft's carpentry workshop, hand-finishing custom furniture"
              className="distort-img w-full h-[420px] sm:h-[560px] object-cover"
            />
            <motion.div
              style={{
                ...tilt.glareStyle,
                backgroundImage:
                  "radial-gradient(circle, rgba(244,215,137,0.3), transparent 55%)",
                backgroundSize: "180% 180%",
              }}
              className="absolute inset-0 mix-blend-overlay pointer-events-none"
            />
          </motion.div>
        </div>

        <div ref={textRef}>
          <p className="mb-3 text-xs sm:text-sm tracking-[0.35em] uppercase text-gold">
            The Craft
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.1] text-cream text-balance">
            Every piece hand-built, every finish done properly.
          </h2>
          <p className="mt-6 text-cream-dim leading-relaxed max-w-lg">
            Kaarvyn Woodcraft is a family workshop, not a factory floor. Our
            mica and laminate finishes are our most affordable, most-ordered
            range — sturdy, budget-friendly and built to spec. For clients who
            want a heavier look, we also do marble-look PU finishes and solid
            wood. Whichever you pick, every piece — from almirahs and gates to
            ceilings and doors — is built to your exact measurements, not
            picked off a shelf.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {STATS.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
