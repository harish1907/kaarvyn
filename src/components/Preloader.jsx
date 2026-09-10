import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SESSION_KEY = "kaarvyn-intro-seen";

function alreadySeen() {
  try {
    return Boolean(window.sessionStorage.getItem(SESSION_KEY));
  } catch {
    return false;
  }
}

// A brief curtain-style intro, once per browser session — fades the
// wordmark in, draws a gold rule, then wipes up to reveal the hero.
export default function Preloader() {
  const [visible, setVisible] = useState(() => !alreadySeen());
  const rootRef = useRef(null);
  const wordRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
        try {
          window.sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // ignore
        }
      },
    });

    tl.fromTo(
      wordRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
        "-=0.15"
      )
      .to(wordRef.current, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" }, "+=0.35")
      .to(lineRef.current, { opacity: 0, duration: 0.3 }, "<")
      .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.05");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5"
      style={{
        backgroundColor: "#0b0705",
        "--color-cream": "#f6ecd8",
        "--color-gold": "#caa046",
      }}
    >
      <p ref={wordRef} className="font-serif-display text-2xl sm:text-3xl tracking-[0.3em] text-cream">
        KAARVYN <span className="text-gold">WOODCRAFT</span>
      </p>
      <div ref={lineRef} className="w-24 h-px bg-gold origin-center" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
