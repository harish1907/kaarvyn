import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { site, whatsappLink } from "../data/site";

const EMPTY_FORM = { name: "", phone: "", email: "", details: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    const message = [
      `Hi Kaarvyn Woodcraft, I'd like to enquire about a custom piece.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.details ? `What I'm looking to build: ${form.details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="bg-ink-2 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            kicker="Get in Touch"
            title="Tell us what you're building — we'll take it from there."
          />
          <p className="mt-8 text-cream-dim max-w-md leading-relaxed">
            Share your room dimensions, references or a rough idea and we'll get
            back with a design and a quote. In-person site visits across Delhi
            NCR — custom orders designed, built and shipped pan-India.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-4 text-cream hover:text-gold transition-colors">
              <Phone size={18} className="text-gold" strokeWidth={1.5} />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-cream hover:text-gold transition-colors">
              <Mail size={18} className="text-gold" strokeWidth={1.5} />
              {site.email}
            </a>
            <p className="flex items-center gap-4 text-cream-dim">
              <MapPin size={18} className="text-gold" strokeWidth={1.5} />
              {site.location}
            </p>
          </div>

          <MagneticButton
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-mica mt-12 inline-block text-ink text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 font-medium"
          >
            Chat on WhatsApp
          </MagneticButton>
        </div>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="cf-name" className="block text-xs uppercase tracking-[0.12em] text-cream-dim mb-2">
              Name
            </label>
            <input
              id="cf-name"
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream-dim/40 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="block text-xs uppercase tracking-[0.12em] text-cream-dim mb-2">
              Phone
            </label>
            <input
              id="cf-phone"
              type="tel"
              required
              value={form.phone}
              onChange={update("phone")}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream-dim/40 transition-colors"
              placeholder="Your phone"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-email" className="block text-xs uppercase tracking-[0.12em] text-cream-dim mb-2">
              Email <span className="text-cream-dim/50 normal-case">(optional)</span>
            </label>
            <input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={update("email")}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream-dim/40 transition-colors"
              placeholder="Your email"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-details" className="block text-xs uppercase tracking-[0.12em] text-cream-dim mb-2">
              What are you looking to build?
            </label>
            <textarea
              id="cf-details"
              rows={4}
              value={form.details}
              onChange={update("details")}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream placeholder:text-cream-dim/40 transition-colors resize-none"
              placeholder="E.g. a 3-door wardrobe for a 10x12 bedroom"
            />
          </div>
          <div className="sm:col-span-2 flex items-center gap-5">
            <MagneticButton
              type="submit"
              className="inline-block border border-gold/50 text-gold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              Send via WhatsApp
            </MagneticButton>
            {sent && (
              <span className="flex items-center gap-2 text-sm text-cream-dim">
                <CheckCircle2 size={18} className="text-emerald-light" />
                Opened WhatsApp — send the message to reach us.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
