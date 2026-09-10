import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fades + lifts (optionally with a 3D tilt-up) a block of children into view
// as it enters the viewport.
export default function useScrollReveal({
  y = 40,
  duration = 1,
  stagger = 0.12,
  rotateX = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.hasAttribute("data-reveal-group")
      ? el.querySelectorAll("[data-reveal]")
      : [el];

    const ctx = gsap.context(() => {
      if (rotateX) {
        gsap.set(el.parentElement || el, { perspective: 1200 });
      }
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y, rotateX, transformPerspective: 1200, transformOrigin: "50% 100%" },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, rotateX]);

  return ref;
}
