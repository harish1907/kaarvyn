import almirah1 from "../assets/gallery/almirah/1.jpg";
import almirah2 from "../assets/gallery/almirah/2.jpg";
import almirah3 from "../assets/gallery/almirah/3.jpg";
import bed1 from "../assets/gallery/bed/1.jpg";
import bed2 from "../assets/gallery/bed/2.jpg";
import bed3 from "../assets/gallery/bed/3.jpg";
import sofa1 from "../assets/gallery/sofa/1.jpg";
import sofa2 from "../assets/gallery/sofa/2.jpg";
import sofa3 from "../assets/gallery/sofa/3.jpg";
import wardrobe1 from "../assets/gallery/wardrobe/1.jpg";
import wardrobe2 from "../assets/gallery/wardrobe/2.jpg";
import wardrobe3 from "../assets/gallery/wardrobe/3.jpg";
import gate1 from "../assets/gallery/gate/1.jpg";
import gate2 from "../assets/gallery/gate/2.jpg";
import gate3 from "../assets/gallery/gate/3.jpg";
import ceiling1 from "../assets/gallery/ceiling/1.jpg";
import ceiling2 from "../assets/gallery/ceiling/2.jpg";
import ceiling3 from "../assets/gallery/ceiling/3.jpg";
import door1 from "../assets/gallery/door/1.jpg";
import door2 from "../assets/gallery/door/2.jpg";
import door3 from "../assets/gallery/door/3.jpg";

// These are stock reference photos standing in for real project photography —
// swap the `img` values for your own shots (same filenames under
// src/assets/gallery/<category>/) and every card below updates automatically.
export const collections = [
  {
    key: "almirah",
    title: "Almirahs",
    tagline: "Mica, marble-look or wood finishes, fitted to the room",
    items: [
      { img: almirah1, title: "Mirror-Front Almirah", note: "Spacious bedroom installation" },
      { img: almirah2, title: "Carved Wood Almirah", note: "Statement living-room piece" },
      { img: almirah3, title: "Modular Almirah Unit", note: "Fitted shelving & drawers" },
    ],
  },
  {
    key: "bed",
    title: "Beds",
    tagline: "Hand-joined frames in mica or solid wood, built to last",
    items: [
      { img: bed1, title: "Whitewashed Platform Bed", note: "King-size, sleigh frame" },
      { img: bed2, title: "Panel-Wall Bed Set", note: "Wood-finish wall panelling" },
      { img: bed3, title: "Upholstered Panel Bed", note: "Custom headboard finish" },
    ],
  },
  {
    key: "sofa",
    title: "Sofas",
    tagline: "Frame-first construction, upholstered by hand",
    items: [
      { img: sofa1, title: "Tan Leather Sofa", note: "3-seater, metal legs" },
      { img: sofa2, title: "L-Shape Sectional", note: "Custom fabric, corner unit" },
      { img: sofa3, title: "Velvet Fabric Sofa", note: "Loft-style living room" },
    ],
  },
  {
    key: "wardrobe",
    title: "Wardrobes",
    tagline: "Mica, marble-look or wood finishes, designed around your space",
    items: [
      { img: wardrobe1, title: "Walk-In Wardrobe", note: "Floor-to-ceiling shelving" },
      { img: wardrobe2, title: "Sliding-Door Wardrobe", note: "Backlit modular shelving" },
      { img: wardrobe3, title: "Walk-In Wardrobe & Vanity", note: "His & hers storage" },
    ],
  },
  {
    key: "gate",
    title: "Custom Gates",
    tagline: "Main-door and estate gates, built to match your facade",
    items: [
      { img: gate1, title: "Wood & Iron Gate", note: "Diagonal panel design" },
      { img: gate2, title: "Designer Iron Gate", note: "Ornamental estate entrance" },
      { img: gate3, title: "Classic Entrance Gate", note: "Wrought iron, stone pillars" },
    ],
  },
  {
    key: "ceiling",
    title: "Wood Ceilings",
    tagline: "Royal, decorative false ceilings — carved and crafted to order",
    items: [
      { img: ceiling1, title: "Beamed Wood Ceiling", note: "Exposed beam design" },
      { img: ceiling2, title: "Fretwork Panel Ceiling", note: "Carved geometric lattice" },
      { img: ceiling3, title: "Slatted Wood Ceiling", note: "Modern beam & skylight design" },
    ],
  },
  {
    key: "door",
    title: "Wood Doors",
    tagline: "Handcrafted unit doors with creative, carved designs",
    items: [
      { img: door1, title: "Geometric Panel Door", note: "Hand-carved lattice design" },
      { img: door2, title: "Arched Plank Door", note: "Ring handle, stone surround" },
      { img: door3, title: "Classical Carved Door", note: "Ornamental double-door entrance" },
    ],
  },
];
