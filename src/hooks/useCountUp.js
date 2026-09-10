import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Counts a number up from 0 once its element scrolls into view. Pass the
// target value's numeric part; any suffix (+, %, etc.) is preserved as-is.
export default function useCountUp(value, { duration = 1.6 } = {}) {
  const ref = useRef(null);
  const match = String(value).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: target,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = counter.n.toFixed(decimals) + suffix;
        },
      });
    });
    return () => ctx.revert();
  }, [target, suffix, decimals, duration]);

  return ref;
}
