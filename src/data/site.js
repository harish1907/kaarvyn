// Central place to edit contact details, numbers and copy that repeat across the site.
export const site = {
  name: "Kaarvyn Woodcraft",
  tagline: "Bespoke furniture, handcrafted to order",
  whatsappNumber: "917053118068",
  phoneDisplay: "+91 70531 18068",
  email: "harish.developer19@gmail.com",
  location: "Delhi, India",
  serviceArea: "Pan-India",
  instagram: "https://instagram.com/kaarvynwoodcraft",
  referralCommission: "8–10%",
};

export const whatsappLink = (message = "Hi Kaarvyn Woodcraft, I'd like to enquire about a custom piece.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
