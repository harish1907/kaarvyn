import { useMotionValue, useSpring, useTransform } from "framer-motion";

// Mouse-driven 3D tilt: rotateX/rotateY plus a glare position, all spring-smoothed.
export default function useTilt({ max = 10, glare = true } = {}) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return {
    onMouseMove,
    onMouseLeave,
    style: { rotateX, rotateY, transformStyle: "preserve-3d" },
    glareStyle: glare ? { backgroundPosition: glareX, backgroundPositionY: glareY } : undefined,
  };
}
