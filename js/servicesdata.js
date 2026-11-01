/* =====================================================================

   servicesdata.js — Every pooja card, modal and form option is
   generated from this object. Add, remove or edit services here only.

   price:    "Price on enquiry" | "Starting from ₹2,100" | "Custom quotation"
   samagri:  by = "included" | "family" | "extra"
   image:    optional, e.g. "assets/images/havan.webp" (a motif shows if empty)
   category: must match an id in `categories`

   ===================================================================== */

window.SERVICES_DATA = {

  categories: [
    { id: "all", label: "All services" },
    { id: "sanskar", label: "Sanskar" },
    { id: "katha", label: "Katha & Path" },
    { id: "puja", label: "Puja" },
    { id: "occasion", label: "Occasions" },
  ],

  services: [

    /* ================================================================
       1. 16 SANSKAR
       ================================================================ */
    {
      slug: "16-sanskar",
      name: "16 Sanskar",
      nameHi: "सोलह संस्कार",
      category: "sanskar",
      image: "assets/images/s1.webp",

      short:
        "Authentic Vedic samskaras—including Namkaran, Annaprashan, Mundan, and Janeu—performed with shuddha mantras.",

      description:
        "The 16 Sanskars are sacred Vedic milestones marking a person's spiritual and social journey from conception and childhood to adulthood. Whether it is Pumsavana, Namkaran (naming), Annaprashan (first solid food), Chudakaran (Mundan), Vidyarambh, Upanayana (Janeu), or Vivah, Pandit Ji conducts the complete vidhi including Swasti Vachan, Sankalp, Ganesh-Ambika Puja, and Havan as per your family's kul-parampara and auspicious muhurat.",

      price: "Starting from ₹2,100",

      duration: "1.5 to 3 hours (varies by Sanskar)",

      occasion:
        "Newborn welcoming (Namkaran), 6th-month feeding (Annaprashan), Mundan, Janeu, and pre-marriage rituals.",

      prep:
        "Clean the puja space, bathe the child/yajman before the muhurat, and keep a wooden chowki, gangajal, and fresh clothes ready.",

      samagri: [
        {
          item: "Pandit Ji's dakshina, muhurat consultation, and complete Vedic Sanskar vidhi",
          by: "included",
        },
        {
          item: "Kalash (copper/brass), coconut, mango leaves, fresh flowers, fruits, panchamrit, and utensils",
          by: "family",
        },
        {
          item: "Complete Havan samagri, desi ghee, samidha (mango wood), roli, moli, janeu, and Sanskar-specific items",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       3. SATYANARAYAN KATHA
       ================================================================ */
    {
      slug: "satyanarayan-katha",
      name: "Satyanarayan Katha",
      nameHi: "सत्यनारायण कथा",
      category: "katha",
      image: "assets/images/s3.webp",

      short:
        "Complete 5-Adhyay Shri Satyanarayan Vrat Katha with Navagraha Puja, Sankalp, Aarti, and Panjiri/Sheera prasad.",

      description:
        "Derived from the Reva Khand of the Skanda Purana, Shri Satyanarayan Katha is performed to invite peace, prosperity, and the blessings of Lord Vishnu into the household. The ceremony begins with Gauri-Ganesh, Varun Kalash, and Navagraha Sthapana, followed by the recitation of all five chapters (Adhyays) of the Vrat Katha, Vishnu Sahasranama archana, and Jagdish Ji ki Aarti.",

      price: "Starting from ₹2,100",

      duration: "2 to 2.5 hours",

      occasion:
        "Purnima, Ekadashi, Griha Pravesh (housewarming), birthdays, marriage anniversaries, and milestone achievements.",

      prep:
        "Set up a clean wooden chowki covered with a yellow/red cloth, erect 4 banana stems at the corners (mandap), and prepare wheat flour Panjiri or Suji Sheera along with Panchamrit.",

      samagri: [
        {
          item: "Pandit Ji's dakshina, Shaligram/Laxmi-Narayan archana, and 5-Adhyay Katha recitation",
          by: "included",
        },
        {
          item: "Atta Panjiri/Suji Prasad, Panchamrit (milk, curd, ghee, honey, tulsi), 4 banana leaves, 5 fruits, and tulsi dal",
          by: "family",
        },
        {
          item: "Complete Puja Kit (Roli, akshat, moli, janeu, supari, paan leaves, kapoor, dhoop, abir-gulal, and yellow cloth)",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       4. RAMAYAN / RAM KATHA
       ================================================================ */
    {
      slug: "ramayan-ram-katha",
      name: "Ramayan / Ram Katha",
      nameHi: "रामायण / राम कथा",
      category: "katha",
      image: "assets/images/s4.webp",

      short:
        "24-hour Akhand Ramcharitmanas Path or multi-day Shri Ram Katha with Vyas-peeth puja, Havan, and Purnahuti.",

      description:
        "Shri Ramcharitmanas Path and Ram Katha bring divine positive energy and harmony to the home and community. Families can opt for a 24-hour continuous Akhand Ramayan Path conducted by a team of experienced Brahmins, or a 3-to-9 day musical Ram Katha narration explaining the life, maryada, and teachings of Prabhu Shri Ram, concluding with a grand Havan and Aarti.",

      price: "Starting from ₹11,000",

      duration: "24 Hours (Akhand Path) / 3 to 9 Days (Katha)",

      occasion:
        "Griha Pravesh, Ram Navami, wedding festivities, annual family sankalp, and community religious gatherings.",

      prep:
        "Prepare a raised Vyas-peeth/chowki for the Ramayan Granth, arrange an Akhand Jyoti (continuous ghee lamp), and ensure clean seating for readers and devotees.",

      samagri: [
        {
          item: "Pandit Ji team's dakshina, Kalash Sthapana, continuous Path/Katha recitation, and Purnahuti Havan",
          by: "included",
        },
        {
          item: "Ramcharitmanas Granth, Ram Darbar photo/idol, Akhand Diya with pure desi ghee, fresh garlands, and Mahaprasad/Bhandara",
          by: "family",
        },
        {
          item: "Complete Havan samagri, Navagraha samidha, dholak/harmonium accompanists (if musical), and puja dravyas",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       5. SUNDAR KAND
       ================================================================ */
    {
      slug: "sundar-kand",
      name: "Sundar Kand",
      nameHi: "सुंदर कांड",
      category: "katha",
      image: "assets/images/s1.webp",

      short:
        "Melodious Sundar Kand recitation with Hanuman Puja, Chola offering, Hanuman Chalisa, and Sankatmochan Aarti.",

      description:
        "The fifth sopan of Tulsidas Ji's Ramcharitmanas, Sundar Kand celebrates the strength, wisdom, and unwavering devotion of Shri Hanuman Ji. Performing this path removes obstacles, planetary afflictions (Shani/Mangal dosha), and negativity. Pandit Ji performs the Ganesh-Ambika and Ram Darbar puja, followed by rhythmic Doha-Chaupai recitation, Hanuman Ashtak, Chalisa, and Aarti.",

      price: "Starting from ₹2,500",

      duration: "2.5 to 3 hours",

      occasion:
        "Tuesdays and Saturdays, Hanuman Jayanti, overcoming obstacles, starting a new venture, and family birthdays.",

      prep:
        "Place a chowki with a red cloth holding a picture of Shri Ram Darbar and Hanuman Ji, and keep Boondi, Besan Ladoo, or Gujiya ready for bhog.",

      samagri: [
        {
          item: "Pandit Ji's dakshina, Ram Darbar & Hanuman Puja, complete Sundar Kand recitation, and Aarti",
          by: "included",
        },
        {
          item: "Boondi/Besan Ladoo prasad, tulsi leaves, red hibiscus/marigold flowers, seasonal fruits, and desi ghee diya",
          by: "family",
        },
        {
          item: "Hanuman Chola kit (Orange sindoor, chameli oil, chandi warq, janeu, red langot/dhoti) and musical accompaniment",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       6. BHAGWAT KATHA
       ================================================================ */
    {
      slug: "bhagwat-katha",
      name: "Bhagwat Katha",
      nameHi: "भागवत कथा",
      category: "katha",
      image: "assets/images/s2.webp",

      short:
        "7-day Shrimad Bhagwat Mahapuran Saptah Gyan Yagya with Kalash Yatra, daily Jhanki, Mool Path, and Havan.",

      description:
        "Shrimad Bhagwat Katha Saptah is the ultimate spiritual yagya for family welfare and Pitru Moksha (ancestral peace). Conducted over 7 days, the programme includes the inaugural Kalash Yatra, daily Sanskrit Mool Parayan of the 18,000 shlokas across 12 Skandhas, soulful narration of Krishna Janmotsav, Govardhan Puja, and Rukmini Vivah with devotional bhajans, concluding on the 8th day with Sahasra-ahuti Havan.",

      price: "Starting from ₹21,000",

      duration: "7 Days (3 to 4 hours daily) + 8th Day Havan",

      occasion:
        "Pitru Paksha, ancestral memorial (Shraddha/Varshiki), family milestone celebrations, and community Gyan Yagyas.",

      prep:
        "Arrange a spacious pandal or hall with a decorated Vyas-peeth, sound system, seating for listeners, and daily prasad distribution arrangements.",

      samagri: [
        {
          item: "Katha Vyas Ji's dakshina, daily Vyas-peeth & Granth puja, 7-day Katha narration, and Mool Path vidhi",
          by: "included",
        },
        {
          item: "Shrimad Bhagwat Granth, Laddu Gopal idol, Kalash Yatra pots (if planned), daily Makhan-Mishri/Panjeeri bhog, and venue setup",
          by: "family",
        },
        {
          item: "Musical troupe (organ, tabla, pad players), 7-day Puja & Havan samagri, stage floral decor, and Brahmin Varan",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       7. GANESH KATHA
       ================================================================ */
    {
      slug: "ganesh-katha",
      name: "Ganesh Katha",
      nameHi: "गणेश कथा",
      category: "katha",
      image: "assets/images/s3.webp",

      short:
        "Shodashopachara Ganapati Puja, Sankashti/Vinayak Katha, Ganapati Atharvashirsha Path, and Modak Bhog.",

      description:
        "Lord Ganesha is revered as Vighnaharta—the remover of obstacles and the lord of wisdom and auspicious beginnings. This ceremony features the traditional 16-step (Shodashopachara) worship of Lord Ganapati, offering of 21 Durva grass blades and Sindoor, recitation of the Ganapati Atharvashirsha and Ganesh Puran Katha, followed by Sankalp and Aarti.",

      price: "Starting from ₹1,500",

      duration: "1.5 to 2 hours",

      occasion:
        "Ganesh Chaturthi, Sankashti Chaturthi, business/shop opening, exam success, and before major family events.",

      prep:
        "Set up a clean chowki with a red cloth and a clay or metal Ganesh Ji idol, and arrange 21 knots of fresh green Durva grass and Modak/Motichoor ladoos.",

      samagri: [
        {
          item: "Pandit Ji's dakshina, Shodashopachara Ganesh Puja, Atharvashirsha recitation, and Katha",
          by: "included",
        },
        {
          item: "Ganesh idol/photo, 21 Durva grass bundles, Modak or Boondi Ladoo, red flowers, coconut, and panchamrit",
          by: "family",
        },
        {
          item: "Complete Ganesh Puja Kit (Sindoor, रक्त चंदन/red chandan, janeu, supari, paan, akshat, kapoor, and dhoop)",
          by: "extra",
        },
      ],
    },


    /* ================================================================
       8. BHUMI POOJAN
       ================================================================ */
    {
      slug: "bhumi-poojan",
      name: "Bhumi Poojan",
      nameHi: "भूमि पूजन",
      category: "occasion",
      image: "assets/images/s4.webp",

      short:
        "Complete Vastu Shिलान्यास (foundation laying) with Dharti Mata, Sheshnaag, Kalash, and Digpal Puja plus Havan.",

      description:
        "Bhumi Poojan (Shilanyas / Griharambha) is performed in the auspicious Ishanya (North-East) corner before excavating or building on a plot. To seek forgiveness from Mother Earth and align the structure with Vastu Purusha, Pandit Ji conducts Ganesh-Ambika Puja, Bhoomi Devi and Kurma-Sheshnaag worship, Navagraha & Vastu Mandala sthapana, followed by placing the Neev Kalash and first 5 bricks (Nanda, Bhadra, Jaya, Rikta, Purna) with Havan.",

      price: "Starting from ₹3,100",

      duration: "2 to 3 hours",

      occasion:
        "Before starting excavation or construction of a new residential house, commercial shop, factory, or temple.",

      prep:
        "Clear and level the North-East (Ishanya) corner of the plot, dig a 1.5-foot foundation pit (khat) as guided by Pandit Ji, and keep 5 new bricks and clean water ready.",

      samagri: [
        {
          item: "Pandit Ji's dakshina, Vastu direction check, Shilanyas vidhi, and Vastu Havan",
          by: "included",
        },
        {
          item: "5 new bricks (ईंट), digging tool (phawda/kudal), coconut, seasonal fruits, sweets, flowers, and dakshina for mason/mistral",
          by: "family",
        },
        {
          item: "Shilanyas Kit: Chandi ke Naag-Nagin pair, copper Neev Kalash, Pancharatna, Panchadhatu, Saptamrittika, Saptadhanya, and Havan samagri",
          by: "extra",
        },
      ],
    },

  ],

};
