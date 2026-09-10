const ITEMS = [
  "Custom Almirahs",
  "Handcrafted Beds",
  "Bespoke Sofas",
  "Mica-Finish Wardrobes",
  "Custom Gates",
  "Royal Wood Ceilings",
  "Carved Wood Doors",
  "Marble-Look Finishes",
  "Made to Measure",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-gold/15 bg-ink-2 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-serif-display italic text-2xl sm:text-3xl text-cream-dim px-8"
          >
            {item}
            <span className="text-gold not-italic ml-8">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
