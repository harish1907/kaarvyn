import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Splits text into words and reveals them with a staggered rise, triggered
// once the element scrolls into view. Used for headings across the site.
export default function SplitReveal({ text, as: Tag = "span", className = "", stagger = 0.045 }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wordEls = el.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordEls,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-top pb-[0.08em]">
            <span data-word className="inline-block">
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
