import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({ kicker, title, align = "left", className = "" }) {
  const ref = useScrollReveal({ y: 20, stagger: 0.15 });
  const ruleRef = useRef(null);

  useEffect(() => {
    const rule = ruleRef.current;
    if (!rule) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rule,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          delay: 0.3,
          scrollTrigger: { trigger: rule, start: "top 90%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-group
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl ${className}`}
    >
      {kicker && (
        <p data-reveal className="mb-3 text-xs sm:text-sm tracking-[0.35em] uppercase text-gold font-sans">
          {kicker}
        </p>
      )}
      <SplitReveal
        as="h2"
        text={title}
        className="font-serif-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream text-balance"
      />
      <div
        ref={ruleRef}
        data-reveal
        className={`rule-gold mt-6 w-16 h-px ${align === "center" ? "mx-auto origin-center" : "origin-left"}`}
      />
    </div>
  );
}
