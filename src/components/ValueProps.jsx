import { Hammer, MapPinned, Users, Wallet } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const PROPS = [
  {
    icon: Wallet,
    title: "Best Budget-Friendly Rates",
    text: "Honest, budget-first pricing — our mica range is built to be the most affordable custom option, without cutting corners.",
  },
  {
    icon: MapPinned,
    title: "Pan-India, Delhi NCR Based",
    text: "In-person site visits across Delhi NCR, with custom pieces designed, built and shipped anywhere in India.",
  },
  {
    icon: Hammer,
    title: "Handcrafted, Not Mass-Produced",
    text: "Every almirah, gate, door and ceiling is hand-built by Kaarvyn's own craftsmen to your exact measurements.",
  },
  {
    icon: Users,
    title: "Refer & Earn",
    text: "Know someone furnishing a home? Refer them and earn 8–10% commission on the project.",
  },
];

export default function ValueProps() {
  const ref = useScrollReveal({ y: 24, stagger: 0.1 });

  return (
    <section className="bg-ink-2 border-b border-gold/10 py-16 sm:py-20">
      <div
        ref={ref}
        data-reveal-group
        className="mx-auto max-w-7xl px-6 sm:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {PROPS.map((p) => (
          <div key={p.title} data-reveal>
            <p.icon size={26} strokeWidth={1.5} className="text-gold" />
            <p className="mt-4 font-serif-display text-xl text-cream">{p.title}</p>
            <p className="mt-2 text-sm text-cream-dim leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
