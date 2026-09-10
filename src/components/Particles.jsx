import { useEffect, useRef } from "react";

// Slow-drifting gold motes, like sawdust catching light — pure canvas, no deps.
export default function Particles({ count = 60, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.06 + 0.015,
      drift: (Math.random() - 0.5) * 0.02,
      alpha: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    const tick = (t) => {
      ctx.clearRect(0, 0, w, h);
      const parX = (mouseX - 0.5) * 14;
      const parY = (mouseY - 0.5) * 14;

      for (const p of particles) {
        p.y -= p.speed * 0.01;
        p.x += p.drift * 0.01;
        if (p.y < -0.02) p.y = 1.02;
        if (p.x < -0.02) p.x = 1.02;
        if (p.x > 1.02) p.x = -0.02;

        const flicker = 0.6 + Math.sin(t * 0.001 + p.phase) * 0.4;
        const px = p.x * w + parX;
        const py = p.y * h + parY;

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 215, 137, ${p.alpha * flicker})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [count]);

  return <canvas ref={canvasRef} className={className} />;
}
