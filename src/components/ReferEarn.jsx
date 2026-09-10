import { Share2, HandCoins, Wallet } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import MagneticButton from "./MagneticButton";
import { site, whatsappLink } from "../data/site";

const STEPS = [
  {
    icon: Share2,
    title: "Refer someone",
    text: "Introduce a friend, family member or contractor who's furnishing a home.",
  },
  {
    icon: HandCoins,
    title: "They commission a piece",
    text: "Once their order is confirmed and work begins, your referral is locked in.",
  },
  {
    icon: Wallet,
    title: "You get paid",
    text: `You earn ${site.referralCommission} of the project value, paid out on completion.`,
  },
];

export default function ReferEarn() {
  const ref = useScrollReveal({ y: 30, stagger: 0.15 });

  return (
    <section id="refer" className="relative bg-ink py-28 sm:py-36 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-emerald/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:items-end">
          <div>
            <p className="mb-3 text-xs sm:text-sm tracking-[0.35em] uppercase text-gold">
              Refer &amp; Earn
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream text-balance max-w-2xl">
              Know someone furnishing a home? Earn {site.referralCommission} on every project you send our way.
            </h2>
          </div>

          <MagneticButton
            as="a"
            href={whatsappLink("Hi Kaarvyn Woodcraft, I'd like to refer a project and know more about the referral commission.")}
            target="_blank"
            rel="noreferrer"
            className="btn-mica inline-block whitespace-nowrap text-ink text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 font-medium"
          >
            Start Referring
          </MagneticButton>
        </div>

        <div className="rule-gold mt-10 w-full" />

        <div ref={ref} data-reveal-group className="mt-16 grid sm:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.title} data-reveal className="relative pl-2">
              <p className="font-serif-display text-gold/40 text-6xl leading-none">
                0{i + 1}
              </p>
              <s.icon className="mt-4 text-gold" size={28} strokeWidth={1.5} />
              <p className="mt-5 font-serif-display text-2xl text-cream">{s.title}</p>
              <p className="mt-3 text-cream-dim leading-relaxed max-w-xs">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-xs sm:text-sm text-cream-dim/70 max-w-2xl">
          No cap on how many projects you refer. Commission is calculated on the
          final confirmed order value and paid once the piece is delivered — reach
          out on WhatsApp for the full referral terms.
        </p>
      </div>
    </section>
  );
}
