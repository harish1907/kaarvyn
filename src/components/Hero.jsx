import { Fragment, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import Particles from "./Particles";
import useTilt from "../hooks/useTilt";
import heroImg from "../assets/hero/photo.jpg";
import { whatsappLink } from "../data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const lineRefs = useRef([]);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const tilt = useTilt({ max: 3, glare: false });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = lineRefs.current
        .filter(Boolean)
        .flatMap((line) => Array.from(line.querySelectorAll("span")));

      gsap.set(words, { yPercent: 120, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.035,
        delay: 0.4,
      });

      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.3 }
      );

      gsap.fromTo(
        bgRef.current,
        { scale: 1.15 },
        { scale: 1.02, duration: 2.2, ease: "power2.out" }
      );

      // scroll-scrubbed parallax: background drifts and scales up as the hero leaves view
      gsap.to(bgRef.current, {
        yPercent: 18,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const splitLine = (text, i) => {
    const words = text.split(" ");
    return (
      <span
        key={text}
        ref={(el) => (lineRefs.current[i] = el)}
        className="block overflow-hidden"
      >
        {words.map((word, wi) => (
          <Fragment key={wi}>
            <span className="inline-block">{word}</span>
            {wi < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    );
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink perspective"
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/30" />
      <Particles className="absolute inset-0 z-[5] opacity-80" count={70} />

      <motion.div
        style={tilt.style}
        className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 pb-20 sm:pb-28 max-w-7xl mx-auto"
      >
        <p className="hero-fade opacity-0 mb-5 text-xs sm:text-sm tracking-[0.4em] uppercase text-gold">
          Best Budget-Friendly Rates &middot; Pan-India
        </p>

        <h1 className="font-serif-display text-cream text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
          {splitLine("Furniture built", 0)}
          {" "}
          {splitLine("to be lived with.", 1)}
        </h1>

        <p className="hero-fade opacity-0 mt-8 max-w-md text-cream-dim text-base sm:text-lg font-light">
          Almirahs, beds, sofas, wardrobes, gates, ceilings and doors — in
          affordable mica finishes, marble-look PU, or solid wood —
          hand-built by Kaarvyn's own craftsmen and designed around your
          room, not a catalogue.
        </p>

        <div className="hero-fade opacity-0 mt-10 flex flex-wrap items-center gap-5">
          <MagneticButton
            as="a"
            href="#collections"
            className="btn-mica inline-block text-ink text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 font-medium glow-gold"
          >
            View Collections
          </MagneticButton>
          <MagneticButton
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-cream/30 text-cream text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4"
          >
            Chat on WhatsApp
          </MagneticButton>
        </div>
      </motion.div>

      <div className="hero-fade opacity-0 absolute bottom-8 right-6 sm:right-10 z-10 flex items-center gap-3 text-cream-dim text-xs tracking-[0.2em] uppercase">
        <span className="hidden sm:inline">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
