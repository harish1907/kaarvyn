import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A small mix-blend cursor dot that grows over links/buttons — skipped entirely
// on touch devices, where it would just get in the way.
export default function CursorDot() {
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const hoverable = e.target.closest("a, button, [role='button']");
      scale.set(hoverable ? 2.4 : 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY, scale: springScale }}
      className="fixed top-0 left-0 z-[90] w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-gold pointer-events-none mix-blend-difference"
    />
  );
}
