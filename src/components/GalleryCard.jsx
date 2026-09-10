import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import useTilt from "../hooks/useTilt";

export default function GalleryCard({ img, title, note, category, tall = false }) {
  const ref = useScrollReveal({ y: 48, rotateX: 12 });
  const tilt = useTilt({ max: 8 });

  return (
    <div ref={ref} className="group perspective">
      <motion.div
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        className={`distort-wrap relative overflow-hidden rounded-sm border border-gold/10 ${
          tall ? "h-[460px] sm:h-[560px]" : "h-[340px] sm:h-[420px]"
        }`}
      >
        <img
          src={img}
          alt={`${title} — ${note}${category ? `, custom ${category.toLowerCase()} by Kaarvyn Woodcraft` : ""}`}
          loading="lazy"
          className="distort-img absolute inset-0 w-full h-full object-cover"
          style={{ transform: "translateZ(0)" }}
        />

        {/* mouse-follow glare, adds the glassy 3D sheen */}
        <motion.div
          style={{
            ...tilt.glareStyle,
            backgroundImage:
              "radial-gradient(circle, rgba(244,215,137,0.35), transparent 55%)",
            backgroundSize: "180% 180%",
          }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute left-0 right-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="font-serif-display text-lg text-cream">{title}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-gold mt-1">{note}</p>
        </div>
      </motion.div>
    </div>
  );
}
