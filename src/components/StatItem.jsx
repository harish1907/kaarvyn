import useCountUp from "../hooks/useCountUp";

export default function StatItem({ value, label }) {
  const ref = useCountUp(value);

  return (
    <div>
      <p ref={ref} className="font-serif-display text-3xl sm:text-4xl text-gold">
        0
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cream-dim">{label}</p>
    </div>
  );
}
