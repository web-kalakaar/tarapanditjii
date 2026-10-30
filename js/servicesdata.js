/* =====================================================================
   servicesdata.js  —  Every pooja card, modal and form option is
   generated from this object. Add, remove or edit services here only.

   price:    "Price on enquiry" | "Starting from ₹2,100" | "Custom quotation"
   samagri:  by = "included" | "family" | "extra"
   image:    optional, e.g. "assets/images/havan.webp" (a motif shows if empty)
   category: must match an id in `categories`
   ===================================================================== */
window.SERVICES_DATA = {
  categories: [
    { id: "all", label: "All services" },
    { id: "home", label: "Home & family" },
    { id: "havan", label: "Havan" },
    { id: "life", label: "Life ceremonies" },
    { id: "occasion", label: "Occasions" },
  ],
  services: [
    {
      slug: "griha-pravesh",
      name: "Griha Pravesh Puja",
      nameHi: "गृह प्रवेश पूजा",
      category: "home",
      image: "assets/images/s1.webp",
      short:
        "A ceremony performed when entering a new home, with rituals tailored to the family's tradition.",
      description:
        "Griha Pravesh welcomes the family into a new home with Ganesh puja, kalash sthapana and havan, performed on an auspicious muhurat.",
      price: "Price on enquiry",
      duration: "2 to 3 hours",
      occasion: "Entering a newly built, purchased or renovated home.",
      prep: "Clean the house, keep the entrance and puja area ready, and fix the muhurat with Pandit Ji.",
      samagri: [
        {
          item: "Pandit Ji's dakshina and rituals of the agreed package",
          by: "included",
        },
        { item: "Kalash, coconut, mango leaves, flowers", by: "family" },
        { item: "Havan samagri and ghee", by: "extra" },
        { item: "Additional priests for larger ceremonies", by: "extra" },
      ],
    },
    {
      slug: "havan-yajna",
      name: "Havan / Yajna",
      nameHi: "हवन एवं यज्ञ",
      category: "havan",
      image: "assets/images/s2.webp",
      short:
        "Fire rituals conducted according to the purpose, occasion and ritual tradition.",
      description:
        "A havan with mantras and ahuti, planned according to the purpose: new beginnings, peace, health, or festival occasions.",
      price: "Price on enquiry",
      duration: "1.5 to 3 hours",
      occasion:
        "Festivals, new ventures, family milestones and shanti rituals.",
      prep: "Keep a safe, ventilated open space and tell Pandit Ji the purpose in advance.",
      samagri: [
        { item: "Pandit Ji's dakshina and mantra recitation", by: "included" },
        { item: "Havan kund, wood and samagri", by: "extra" },
        { item: "Ghee, flowers, fruits", by: "family" },
      ],
    },
    {
      slug: "satyanarayan-katha",
      name: "Satyanarayan Katha",
      nameHi: "सत्यनारायण कथा",
      category: "home",
      image: "assets/images/s3.webp",
      short:
        "Katha and associated puja arrangements for families and auspicious occasions.",
      description:
        "The traditional Satyanarayan Vrat Katha with puja, aarti and prasad, often performed on Purnima, anniversaries or after a milestone.",
      price: "Price on enquiry",
      duration: "2 to 2.5 hours",
      occasion:
        "Purnima, housewarming, birthdays, anniversaries and thanksgiving.",
      prep: "Prepare a clean puja chowki and prasad ingredients.",
      samagri: [
        { item: "Pandit Ji's dakshina and katha", by: "included" },
        { item: "Panchamrit, banana leaves, fruits, flowers", by: "family" },
        { item: "Complete samagri kit", by: "extra" },
      ],
    },
    {
      slug: "vivah-sanskar",
      name: "Vivah Sanskar",
      nameHi: "विवाह संस्कार",
      category: "life",
      image: "assets/images/s4.webp",
      short:
        "Wedding rituals and ceremony guidance, based on the family's requirements.",
      description:
        "Complete Vedic vivah rituals, from Ganesh puja and kanyadaan to saptapadi, with each step explained to both families.",
      price: "Custom quotation",
      duration: "Varies by tradition",
      occasion: "Weddings and engagement ceremonies.",
      prep: "Share the wedding date, muhurat, rituals required and number of guests early.",
      samagri: [
        { item: "Pandit Ji's dakshina and vivah rituals", by: "included" },
        { item: "Vivah samagri kit", by: "extra" },
        { item: "Mandap, havan kund, garlands", by: "family" },
      ],
    },
    {
      slug: "ganesh-puja",
      name: "Ganesh Puja",
      nameHi: "गणेश पूजा",
      category: "home",
      image: "assets/images/s2.webp",
      short: "Invoke Lord Ganesha before any new beginning or family event.",
      description:
        "A focused Ganesh puja with sankalp, shodashopachar and aarti for obstacle-free beginnings.",
      price: "Price on enquiry",
      duration: "1 to 1.5 hours",
      occasion: "Before ceremonies, new ventures and family milestones.",
      prep: "A clean puja space and a Ganesh idol or image.",
      samagri: [
        { item: "Pandit Ji's dakshina and puja", by: "included" },
        { item: "Modak, durva grass, red flowers", by: "family" },
      ],
    },
    {
      slug: "navgraha-shanti",
      name: "Navgraha Shanti",
      nameHi: "नवग्रह शान्ति",
      category: "havan",
      image: "assets/images/s1.webp",
      short: "Havan and puja for the nine planets, as advised for the family.",
      description:
        "Navgraha puja and havan performed with mantras for each graha, after discussing the family's requirements.",
      price: "Price on enquiry",
      duration: "2 to 3 hours",
      occasion: "Based on kundli guidance or family tradition.",
      prep: "Share birth details if a graha-specific ritual is desired.",
      samagri: [
        { item: "Pandit Ji's dakshina and mantra jaap", by: "included" },
        { item: "Navgraha samagri and havan items", by: "extra" },
      ],
    },
    {
      slug: "rudrabhishek",
      name: "Rudrabhishek",
      nameHi: "रुद्राभिषेक",
      category: "havan",
      image: "assets/images/s3.webp",
      short:
        "Abhishek of Lord Shiva with Vedic mantras and traditional offerings.",
      description:
        "Rudrabhishek with Rudri path and abhishek using milk, water, honey and other offerings, followed by aarti.",
      price: "Price on enquiry",
      duration: "1.5 to 2.5 hours",
      occasion: "Mondays, Shivratri, Shravan and personal sankalp.",
      prep: "A Shivling or Shiv puja setup, and a clean space.",
      samagri: [
        { item: "Pandit Ji's dakshina and Rudri path", by: "included" },
        { item: "Milk, curd, honey, bel patra", by: "family" },
        { item: "Complete abhishek kit", by: "extra" },
      ],
    },
    {
      slug: "namkaran-annaprashan",
      name: "Namkaran & Annaprashan",
      nameHi: "नामकरण एवं अन्नप्राशन",
      category: "life",
      image: "assets/images/s4.webp",
      short:
        "Child naming and first-food ceremonies performed with traditional vidhi.",
      description:
        "Samskaras for the little ones: Namkaran, Annaprashan and Mundan, with blessings and simple guidance for families.",
      price: "Price on enquiry",
      duration: "1 to 2 hours",
      occasion: "Newborn naming and the baby's first solid food.",
      prep: "Fix the muhurat and keep the puja items ready.",
      samagri: [
        { item: "Pandit Ji's dakshina and samskara rituals", by: "included" },
        { item: "Kheer, flowers, fruits", by: "family" },
      ],
    },
    {
      slug: "shop-vehicle-puja",
      name: "Shop, Office & Vehicle Puja",
      nameHi: "दुकान, कार्यालय एवं वाहन पूजा",
      category: "occasion",
      image: "assets/images/s1.webp",
      short: "Opening ceremonies for a new shop, office or vehicle.",
      description:
        "A short puja for a fresh start in business or a new vehicle, with Ganesh-Lakshmi puja and aarti.",
      price: "Price on enquiry",
      duration: "45 minutes to 1 hour",
      occasion: "New shop or office opening, Dhanteras, new vehicle purchase.",
      prep: "Clean the premises or vehicle and keep sweets for prasad.",
      samagri: [
        { item: "Pandit Ji's dakshina and puja", by: "included" },
        { item: "Coconut, lemon, flowers, sweets", by: "family" },
      ],
    },
  ],
};
