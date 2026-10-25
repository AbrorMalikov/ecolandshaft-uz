/* ==========================================================================
   BUILD-SITE-EN.JS — ENGLISH LOCALIZATION FOR ECO LANDSHAFT (ecolandshaft.uz)
   Turnkey Lawn Installation, Artificial Turf, Stadiums & Landscape Design
   ========================================================================== */

const BRAND_EN = {
  name: 'Eco Landshaft',
  domain: 'https://ecolandshaft.uz',
  phoneFormatted: '+998 (97) 783-82-53',
  phoneDisplay: '+998 (97) 783-82-53',
  phoneRaw: '+998977838253',
  telegramUrl: 'https://t.me/+998977838253',
  telegramHandle: 't.me/+998977838253',
  address: 'Tashkent city, Samarkand Darvoza street, Building 2',
  mapIframe:
    '<iframe src="https://yandex.uz/map-widget/v1/?ll=69.231580%2C41.317540&z=16&pt=69.231580,41.317540,pm2rdm" width="100%" height="100%" frameborder="0" allowfullscreen="true" style="position:relative;border:0;border-radius:24px;" title="Eco Landshaft Office Tashkent"></iframe>'
};

const SERVICES_EN = [
  {
    slug: 'lawn-installation-and-seeding',
    url: '/en/services/lawn-installation-and-seeding/',
    baseUrl: '/xizmatlar/gazon-ekish-va-yotqizish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    shortName: 'Lawn Installation & Seeding',
    title: 'Lawn Installation, Turfing & Grass Seeding Services',
    metaTitle: 'Lawn Installation & Seeding in Tashkent — Turnkey Turf Laying | Eco Landshaft',
    metaDesc: 'Professional turf sod laying and lawn grass seeding in Tashkent and across Uzbekistan. Fresh nursery turf rolls, soil leveling, Danish DLF seeds, and 12-month agronomist warranty.',
    keywords: 'lawn installation tashkent, roll turf laying price, lawn seeding uzbekistan, natural turf rolls buy, turnkey lawn laying',
    h1: 'Professional Lawn Installation, Turf Laying and Seeding in Uzbekistan',
    priceRange: '15,000 – 35,000 UZS/m²',
    basePrice: 20000,
    clusterTag: 'Lawn Installation',
    calcKey: 'rulonli-gazon',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Instant emerald green transformation: 2-year mature nursery sod rolls or Danish DLF seeding with deep root preparation and laser leveling.',
    usps: [
      'Fresh cut sod delivered daily from our 50-hectare nursery',
      'Laser-guided soil leveling, fertilizer application, and soil enrichment',
      '12-month official contractual warranty with agronomist support'
    ],
    comparisonTable: {
      title: 'Roll Turf vs. Grass Seeding Comparison & Pricing',
      headers: ['Criteria', 'Natural Turf Rolls (Ready Sod)', 'Lawn Grass Seeding'],
      rows: [
        ['Result Timeline', 'Instant green carpet in 1 day', 'First shoots in 14–25 days'],
        ['Weed Resistance', '99% weed-free mature turf', 'Requires early weeding & care'],
        ['Root Strength', 'Dense 2-year established root network', 'Develops roots over 3–5 months'],
        ['Base Price', '18,000 – 35,000 UZS/m²', '15,000 – 25,000 UZS/m²']
      ]
    },
    steps: [
      { num: '01', title: 'Site Inspection & Soil Analysis', desc: 'Our agronomist visits your site for free measurements, soil testing, and elevation leveling.' },
      { num: '02', title: 'Soil Preparation & Drainage', desc: 'Weed clearing, rototilling, black soil enrichment, and roller compaction.' },
      { num: '03', title: 'Precision Turf Laying / Seeding', desc: 'Staggered brick-pattern sod laying or automated cross-pattern Danish seed drilling.' },
      { num: '04', title: 'Compaction & Deep Watering', desc: 'Heavy water-roller pressing to eliminate air pockets and activate root bonding.' }
    ],
    faqs: [
      { q: 'When can we start walking on the new turf lawn?', a: 'Light walking is permitted after 7–10 days. Full regular foot traffic is recommended after 14 days when roots fully knit with base soil.' },
      { q: 'Do you deliver and lay sod outside Tashkent?', a: 'Yes, we supply fresh sod rolls with refrigerated transport to Samarkand, Fergana, Bukhara, Andijan, and all regions within 24 hours.' }
    ]
  },
  {
    slug: 'football-pitch-and-sports-court-construction',
    url: '/en/services/football-pitch-and-sports-court-construction/',
    baseUrl: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>`,
    shortName: 'Football Pitch Construction',
    title: 'Mini-Football Pitch & Tennis Court Construction',
    metaTitle: 'Mini-Football Pitch Construction in Tashkent — FIFA Turf Turnkey | Eco Landshaft',
    metaDesc: 'Turnkey construction of 20x40m mini-football pitches, multi-sport grounds, and tennis courts in Uzbekistan. Drainage foundation, certified FIFA 50mm turf, fencing, and LED lighting.',
    keywords: 'mini football field construction tashkent, sports pitch turnkey price, fifa artificial grass uzbekistan, tennis court construction, sports ground contractor',
    h1: 'Turnkey Mini-Football Pitch and Sports Court Construction in Uzbekistan',
    priceRange: 'from 217,000 UZS/m²',
    basePrice: 217000,
    clusterTag: 'Turnkey Stadium',
    calcKey: 'stadion-qurish',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Commercial stadiums (20×40m, 800m²) with permeable gravel drainage, 50mm FIFA monofilament turf, heavy-duty safety fencing, and 200W LED floodlights in 15–25 days.',
    usps: [
      'FIFA Quality certified 50mm turf filled with quartz sand & SBR rubber',
      'Engineered drainage preventing rainwater accumulation',
      'Turnkey handover: steel frame, nylon netting, goals, and LED illumination'
    ],
    comparisonTable: {
      title: 'Standard Sports Pitch Specifications & Packages',
      headers: ['Component', 'Commercial Mini-Pitch (20×40m)', 'School / Community Court', 'Tennis & Volleyball Court'],
      rows: [
        ['Dimensions', '20 × 40 m (800 m²)', '18 × 36 m (648 m²)', '18 × 36 m (648 m²)'],
        ['Surfacing', 'FIFA 50mm Monofilament turf', 'FIFA 40–50mm turf', 'EPDM rubber or acrylic hardcourt'],
        ['Fence Height', '4 – 6 meters reinforced mesh', '4 meters safety netting', '3 – 4 meters chainlink + net'],
        ['Lighting', '8–12 × 200W LED floodlights', '6–8 × 150W LED', '8 × 200W anti-glare LED']
      ]
    },
    steps: [
      { num: '01', title: 'Excavation & Base Grading', desc: 'Grading 25–35 cm depth, slope drainage channels, and geotextile membrane placement.' },
      { num: '02', title: 'Stone & Asphalt Drainage Layer', desc: 'Dual-fraction crushed stone compaction, concrete curbing, and perimeter anchoring.' },
      { num: '03', title: 'Fence & LED Tower Assembly', desc: 'Welding 60×60mm steel poles, protective primer coating, and commercial netting.' },
      { num: '04', title: 'FIFA Turf Laying & Infill', desc: 'Specialist thermal seam gluing, white field marking, and quartz sand + rubber granule infill.' }
    ],
    faqs: [
      { q: 'What is the ROI payback timeline for a commercial mini-football field?', a: 'A standard 20×40m field operating 8–10 hours per day in Uzbekistan typically achieves full ROI payback within 10 to 16 months.' },
      { q: 'Do you construct stadiums in all provinces of Uzbekistan?', a: 'Yes, our mobile engineering crews bring all materials directly from our central warehouse and build fields turnkey across all 12 regions.' }
    ]
  },
  {
    slug: 'rubber-flooring-and-playground-construction',
    url: '/en/services/rubber-flooring-and-playground-construction/',
    baseUrl: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    shortName: 'Rubber Playgrounds & Flooring',
    title: 'Playground Construction & Seamless EPDM/SBR Rubber Flooring',
    metaTitle: 'Seamless EPDM Rubber Flooring for Playgrounds in Tashkent | Eco Landshaft',
    metaDesc: 'Shock-absorbing seamless rubber flooring (EPDM & SBR), interlocking rubber tiles, and turnkey children playground construction in Tashkent. Safety certified, 12-month warranty.',
    keywords: 'rubber flooring tashkent, playground rubber surface price, epdm granules uzbekistan, seamless rubber floor, playground equipment installation',
    h1: 'Seamless EPDM Rubber Flooring and Playground Construction in Uzbekistan',
    priceRange: '150,000 – 250,000 UZS/m²',
    basePrice: 180000,
    clusterTag: 'Rubber Flooring',
    calcKey: 'rezina-maydon',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Impact-absorbing seamless rubber flooring (10–40mm) and certified playground complexes for schools, kindergartens, parks, and residential yards.',
    usps: [
      'Certified fall-safe protection layer tested for critical fall heights',
      'Eco-friendly UV-stable color pigments with 12 vivid color combinations',
      'Porous, non-slip, puddle-free surface curing in 24 hours'
    ],
    comparisonTable: {
      title: 'Rubber Flooring Types, Thickness & Cost per m²',
      headers: ['Type of Coating', 'Thickness', 'Best Used For', 'Price (Materials + Labor)'],
      rows: [
        ['Single-Layer SBR Rubber', '10 – 15 mm', 'Running tracks, workout zones, fitness gyms', '150,000 – 180,000 UZS/m²'],
        ['Two-Layer SBR + EPDM Top', '15 – 20 mm', 'Kindergartens, schools, residential courtyards', '185,000 – 220,000 UZS/m²'],
        ['100% Virgin EPDM Rubber', '20 – 40 mm', 'Premium public parks, themed play areas', '220,000 – 260,000 UZS/m²'],
        ['Modular Rubber Pavers (500×500)', '20 – 40 mm', 'Outdoor gym areas, walkways, shooting ranges', '160,000 – 210,000 UZS/m²']
      ]
    },
    steps: [
      { num: '01', title: 'Free Measurement & Color Catalog', desc: 'Base surface inspection and physical swatches of 12 vibrant EPDM pigments.' },
      { num: '02', title: 'Polyurethane Primer Bonding', desc: 'High-adhesion polyurethane priming on clean concrete or asphalt base.' },
      { num: '03', title: 'Seamless Roller Application', desc: 'Mixer blending of EPDM granules and binder, hot-troweling to seamless uniformity.' },
      { num: '04', title: 'Play Equipment Installation', desc: 'Full polymer cure within 24 hours, followed by secure equipment anchoring.' }
    ],
    faqs: [
      { q: 'Does seamless rubber crack during summer heat or freezing winters?', a: 'No, our EPDM rubber compounds withstand extreme temperature swings from -40°C to +60°C and maintain elasticity without crumbling.' },
      { q: 'Can you install swing sets, slides, and workout equipment too?', a: 'Yes, we supply and install certified play towers, swings, seesaws, and calisthenics workout racks alongside the safety rubber floor.' }
    ]
  },
  {
    slug: 'landscape-design-and-3d-greening',
    url: '/en/services/landscape-design-and-3d-greening/',
    baseUrl: '/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    shortName: '3D Landscape Design',
    title: 'Landscape Design, 3D Modeling & Turnkey Greening',
    metaTitle: 'Landscape Design in Tashkent — 3D Visuals & Turnkey Landscaping | Eco Landshaft',
    metaDesc: 'Exclusive landscape design and turnkey greening for private villas, country houses, and commercial venues in Tashkent. 3D renderings, ornamental trees, rock gardens, and night illumination.',
    keywords: 'landscape design tashkent, yard landscaping uzbekistan, 3d garden project, decorative tree planting, turnkey exterior beautification',
    h1: 'Turnkey 3D Landscape Design and Professional Greening in Uzbekistan',
    priceRange: 'Custom quotation (from 100 m²)',
    basePrice: 49000,
    clusterTag: '3D Landscape',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Photorealistic 3D visualization, climate-acclimated ornamental conifers, alpine rockeries, modern stone walkways, and architectural night lighting.',
    usps: [
      'Turnkey landscaping contracts include full 3D visual design at 100% discount',
      'Mature trees and shrubs sourced directly from our botanical nurseries',
      'Full 1-year plant health and survival guarantee supervised by agronomists'
    ],
    comparisonTable: {
      title: 'Landscape Styles & Execution Packages',
      headers: ['Design Style', 'Key Highlights', 'Featured Flora', 'Turnaround'],
      rows: [
        ['Modern Minimalist', 'Clean paved geometry, emerald sod, integrated LED uplights', 'Thuja Smaragd, lavender, bonsai pine', '7 – 14 days'],
        ['Classic European Garden', 'Symmetrical borders, flowering shrubs, stone pergolas', 'Standard roses, hydrangeas, blue spruce', '10 – 20 days'],
        ['Oriental / Japanese Zen', 'Natural boulder formations, dry creek beds, serene water', 'Bonsai pines, Japanese maple, mosses', '14 – 25 days']
      ]
    },
    steps: [
      { num: '01', title: 'Architect Site Visit', desc: 'Topographical survey, soil profiling, sunlight exposure mapping, and owner interview.' },
      { num: '02', title: 'Photorealistic 3D Project', desc: 'Full daytime and nighttime 3D visual renders, plant selection index, and exact budget.' },
      { num: '03', title: 'Hardscape & Irrigation', desc: 'Excavation, automated Hunter irrigation piping, electrical cabling, and stone paths.' },
      { num: '04', title: 'Tree Planting & Turf Laying', desc: 'Planting specimen trees, flowerbeds, and rolling out pristine emerald lawn.' }
    ],
    faqs: [
      { q: 'Can we order a 3D landscape project without immediate construction?', a: 'Yes. Furthermore, when you choose our team to execute the physical landscaping work, the full cost of the 3D design is credited back as 100% free.' },
      { q: 'Do you provide a warranty on planted trees and shrubs?', a: 'Yes, on all sites equipped with our automatic irrigation systems, we provide a 1-year unconditional plant survival guarantee.' }
    ]
  },
  {
    slug: 'hunter-automatic-irrigation-systems',
    url: '/en/services/hunter-automatic-irrigation-systems/',
    baseUrl: '/xizmatlar/avtomatik-sugorish-tizimi/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    shortName: 'Hunter Automatic Irrigation',
    title: 'Hunter (USA) Automatic Irrigation & Sprinkler Systems',
    metaTitle: 'Hunter Automatic Irrigation Systems in Tashkent | Eco Landshaft',
    metaDesc: 'Design and installation of smart automatic lawn sprinkler systems using original Hunter and Rain Bird equipment in Tashkent. Wi-Fi smartphone control, 45% water savings, 2-year warranty.',
    keywords: 'automatic irrigation tashkent, hunter sprinkler system uzbekistan, lawn irrigation installation, drip irrigation price, smart lawn watering',
    h1: 'Hunter (USA) Smart Automatic Lawn Irrigation & Sprinkler Systems',
    priceRange: 'from 49,000 UZS/m²',
    basePrice: 49000,
    clusterTag: 'Hunter Irrigation',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Smart sprinkler systems by Hunter and Rain Bird with Wi-Fi smartphone automation. Saves up to 45% water with weather sensors, installed in 1–2 days.',
    usps: [
      '100% original Hunter & Rain Bird (USA) nozzles, rotors, and solenoid valves',
      '2-year official hardware warranty plus complimentary pre-winter blowdown',
      'Neat trenchless installation even through existing established lawns'
    ],
    comparisonTable: {
      title: 'Manual Hose Watering vs. Smart Hunter Irrigation',
      headers: ['Parameter', 'Hunter Smart System (Wi-Fi)', 'Manual Hose Watering'],
      rows: [
        ['Daily Time Required', '100% automated at scheduled night hours', 'Requires 1.5 – 3 hours daily manual labor'],
        ['Water Coverage Uniformity', '98% uniform coverage across all sectors', 'Uneven spots, puddles, dry patches'],
        ['Water Consumption', 'Saves up to 45% water via rain sensors', 'Significant water wastage and runoff'],
        ['Plant & Shrub Health', 'Dedicated root drip lines with precise liters', 'Root exposure from high hose pressure']
      ]
    },
    steps: [
      { num: '01', title: 'Water Pressure Diagnostics', desc: 'Our hydraulic engineer measures water flow rate, pressure, and draws zoning schematics.' },
      { num: '02', title: 'Trenching & Valve Assembly', desc: 'Laying HDPE pipelines at 35 cm depth and assembling Hunter solenoid valve boxes.' },
      { num: '03', title: 'Pop-Up Sprinkler Placement', desc: 'Setting flush-mounted PGP rotors and MP Rotators level with the grass surface.' },
      { num: '04', title: 'Smart Controller Programming', desc: 'Setting up Wi-Fi irrigation controllers, zone schedules, and smart weather sensors.' }
    ],
    faqs: [
      { q: 'Can automatic irrigation be installed on an existing finished lawn?', a: 'Yes, our specialized sod-slicing technique lifts existing turf neatly, lays the pipe, and returns the turf without noticeable scarring.' },
      { q: 'Will pipes crack during cold winter months?', a: 'Every autumn our service crew conducts compressor air blowdown (winterization), removing all standing water to prevent frost damage.' }
    ]
  },
  {
    slug: 'vertical-greenery-and-stabilized-moss',
    url: '/en/services/vertical-greenery-and-stabilized-moss/',
    baseUrl: '/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    shortName: 'Vertical Greenery & Moss',
    title: 'Vertical Greenery, Living Plant Walls & Stabilized Moss',
    metaTitle: 'Vertical Green Walls & Stabilized Moss in Tashkent | Eco Landshaft',
    metaDesc: 'Design and assembly of indoor living plant walls with automated watering and preserved Scandinavian reindeer moss panels in Tashkent. Zero maintenance, 10-year lifespan.',
    keywords: 'vertical greenery tashkent, living plant wall uzbekistan, stabilized moss panel, phytodecor office cafe, preserved moss wall art',
    h1: 'Vertical Greening, Living Plant Walls & Preserved Moss Panels in Uzbekistan',
    priceRange: 'from 1,800,000 UZS/m²',
    basePrice: 1800000,
    clusterTag: 'Phytodecor',
    calcKey: 'suniy-gazon',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Living bio-walls with autonomous hydroponic irrigation and natural preserved reindeer moss art for offices, restaurants, hotels, and luxury residences.',
    usps: [
      'Preserved Scandinavian moss lasts up to 10 years without watering or sunlight',
      'Autonomous hydroponic drip irrigation preventing soil insects and mess',
      'Bespoke laser-cut wooden frames, logos, and custom botanical patterns'
    ],
    comparisonTable: {
      title: 'Living Bio-Walls vs. Preserved Stabilized Moss Panels',
      headers: ['Feature', 'Preserved Stabilized Moss', 'Living Hydroponic Plant Wall'],
      rows: [
        ['Watering Needs', 'Zero watering required (anti-static)', 'Autonomous closed-cycle drip pump'],
        ['Sunlight Requirements', 'Needs no sunlight (ideal for corridors/basements)', 'Requires phytolamps or ambient light'],
        ['Lifespan', 'Up to 7 – 10 years with stable softness', 'Continuous perennial growth with pruning'],
        ['Installation Speed', 'Pre-assembled modular panels in 1 day', 'Custom module assembly in 2 – 4 days']
      ]
    },
    steps: [
      { num: '01', title: 'Wall Survey & Lighting Check', desc: 'Moisture assessment, wall load bearing check, and lighting lux measurement.' },
      { num: '02', title: 'Custom 3D Art Composition', desc: 'Sketching corporate logo integration, foliage textures, and color gradients.' },
      { num: '03', title: 'Clean Panel Installation', desc: 'Mounting waterproof backing boards and attaching selected stabilized moss or plants.' },
      { num: '04', title: 'Automation Handover', desc: 'Testing pump timers, supplemental LED grow bars, and providing care manuals.' }
    ],
    faqs: [
      { q: 'Does preserved moss require any watering or misting?', a: 'No, spraying water will damage preserved moss. It stays naturally soft as long as indoor ambient humidity is between 40% and 70%.' },
      { q: 'Can corporate logos and backlighting be embedded into the moss wall?', a: 'Yes, we craft glowing neon lettering, laser-cut acrylic or metallic brand logos nestled within vibrant emerald moss.' }
    ]
  }
];

const PRODUCTS_EN = [
  {
    id: 'gazon-10mm',
    category: 'suniy',
    catLabel: 'Artificial Grass • Landscape',
    name: 'Artificial Grass 10 mm (Green Garden Eco)',
    pile: '10 mm pile',
    stock: 'Direct factory stock',
    retail: 48800,
    wholesale: 39500,
    unit: 'm²',
    specs: ['Pile: 10 mm', 'Roll: 2m & 4m wide', 'UV-resistant'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'gazon-20mm-standart',
    category: 'suniy',
    catLabel: 'Artificial Grass • Multi-purpose',
    name: 'Artificial Grass 20 mm (Evergreen Comfort)',
    pile: '20 mm pile',
    stock: 'Direct factory stock',
    retail: 68000,
    wholesale: 54000,
    unit: 'm²',
    specs: ['Pile: 20 mm', 'Soft double backing', '16,800 stitches/m²'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'gazon-50mm-fifa',
    category: 'suniy',
    catLabel: 'Sports Artificial Turf • FIFA',
    name: 'Sports Turf 50 mm (FIFA Standard Football Pro)',
    pile: '50 mm FIFA',
    stock: 'Tested & certified',
    retail: 135000,
    wholesale: 112000,
    unit: 'm²',
    specs: ['50 mm Monofilament', 'Dtex: 12,000', '10-year durability'],
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-standart',
    category: 'rulonli',
    catLabel: 'Natural Turf Rolls',
    name: 'Fresh Natural Turf Roll (Kentucky Bluegrass)',
    pile: '2-year dense sod',
    stock: 'Freshly cut from nursery',
    retail: 18000,
    wholesale: 13000,
    unit: 'm²',
    specs: ['Roll: 0.8 m²', 'Dense root system', 'Sun & semi-shade'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-deluxe',
    category: 'rulonli',
    catLabel: 'Natural Turf Rolls',
    name: 'Premium Turf Roll «Canada Green Elite»',
    pile: 'Premium sod',
    stock: 'From nursery',
    retail: 26000,
    wholesale: 19500,
    unit: 'm²',
    specs: ['Bluegrass + Fescue', 'Emerald color', 'Heat-resistant'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'urug-dlf',
    category: 'urug',
    catLabel: 'Lawn Seeds • Denmark',
    name: 'DLF Trifolium Lawn Seed (10 kg bag)',
    pile: '10 kg = 300 m²',
    stock: 'Original Denmark',
    retail: 950000,
    wholesale: 790000,
    unit: 'bag',
    specs: ['1 kg / 30 m²', 'Germination: 98%', 'Certified original'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rezina-epdm-plitka',
    category: 'rezina',
    catLabel: 'Rubber Flooring',
    name: 'EPDM Rubber Tiles & Seamless Flooring (20 mm)',
    pile: '20 mm EPDM',
    stock: '12-month warranty',
    retail: 185000,
    wholesale: 150000,
    unit: 'm²',
    specs: ['10–40 mm thickness', 'Shock-absorbing', '12 vibrant colors'],
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=700&q=80'
  }
];

const REGIONS_EN = [
  {
    slug: 'samarkand',
    url: '/en/samarkand/',
    baseUrl: '/samarkand/',
    name: 'Samarkand',
    locative: 'In Samarkand',
    cities: 'Samarkand city, Urgut, Kattakurgan, Akdarya, Pastdargom, Taylak',
    deliveryTime: 'within 12 – 24 hours',
    desc: 'Wholesale supply of artificial and natural roll turf across Samarkand region, turnkey mini-football pitch and EPDM rubber playground construction.'
  },
  {
    slug: 'fergana',
    url: '/en/fergana/',
    baseUrl: '/fergana/',
    name: 'Fergana',
    locative: 'In Fergana',
    cities: 'Fergana city, Kokand, Margilan, Kuva, Rishtan, Oltiariq',
    deliveryTime: 'within 12 – 24 hours',
    desc: 'Wholesale artificial grass and FIFA sports turf supply across Fergana Valley directly from manufacturer, and turnkey sports court construction.'
  },
  {
    slug: 'andijan',
    url: '/en/andijan/',
    baseUrl: '/andijan/',
    name: 'Andijan',
    locative: 'In Andijan',
    cities: 'Andijan city, Asaka, Shahrikhan, Khanabad, Kurgantepa, Balikchi',
    deliveryTime: 'within 14 – 24 hours',
    desc: 'Turnkey mini-football stadium, tennis court, seamless EPDM rubber flooring installation, and lawn grass delivery in Andijan region.'
  },
  {
    slug: 'bukhara',
    url: '/en/bukhara/',
    baseUrl: '/bukhara/',
    name: 'Bukhara',
    locative: 'In Bukhara',
    cities: 'Bukhara city, Kagan, Gijduvan, Karakul, Vabkent, Romitan',
    deliveryTime: 'within 16 – 24 hours',
    desc: 'Heat-resistant UV-protected artificial grass for Bukhara climate, Hunter automatic irrigation systems, mini-stadiums and landscape design.'
  },
  {
    slug: 'kashkadarya',
    url: '/en/kashkadarya/',
    baseUrl: '/kashkadarya/',
    name: 'Kashkadarya',
    locative: 'In Kashkadarya',
    cities: 'Karshi city, Shahrisabz, Guzar, Kasan, Kitab, Mubarek, Yakkabag',
    deliveryTime: 'within 14 – 24 hours',
    desc: 'Turnkey mini-football pitch construction in Kashkadarya region, wholesale FIFA 50mm artificial turf delivery and rubber playground installation.'
  },
  {
    slug: 'namangan',
    url: '/en/namangan/',
    baseUrl: '/namangan/',
    name: 'Namangan',
    locative: 'In Namangan',
    cities: 'Namangan city, Chust, Kasansay, Turakurgan, Pap, Uchkurgan',
    deliveryTime: 'within 12 – 24 hours',
    desc: 'Professional landscape design, Hunter automatic irrigation, natural roll & artificial grass supply and sports court construction in Namangan.'
  }
];

const BLOG_POSTS_EN = [
  {
    slug: 'natural-turf-rolls-or-lawn-seeding',
    title: 'Which is better: ready roll turf or lawn grass seeding? Agronomist recommendations',
    date: 'October 15, 2026',
    category: 'Lawn Care',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    excerpt: 'How to choose between sod turf rolls and seed planting based on your budget, schedule, and soil characteristics in Uzbekistan.',
    link: '/en/services/lawn-installation-and-seeding/'
  },
  {
    slug: 'mini-football-pitch-construction-business-plan',
    title: 'Mini-football pitch construction (20×40m): cost breakdown and ROI payback period',
    date: 'October 10, 2026',
    category: 'Sports Construction',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80',
    excerpt: 'A comprehensive stage-by-stage guide to building a commercial mini-football field: drainage, FIFA 50mm turf, fencing, and LED lighting.',
    link: '/en/services/football-pitch-and-sports-court-construction/'
  },
  {
    slug: 'epdm-or-sbr-rubber-flooring-for-playgrounds',
    title: 'EPDM and SBR rubber surfaces for playgrounds: safety standards and optimal thickness',
    date: 'October 04, 2026',
    category: 'Rubber Surfaces',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Selecting the right thickness of seamless rubber crumb surfacing for kindergartens, schools, and residential playgrounds.',
    link: '/en/services/rubber-flooring-and-playground-construction/'
  }
];

/* ==========================================================================
   COMPONENT RENDERERS (ENGLISH)
   ========================================================================== */

function renderHeaderEn(basePath = '/en/', context) {
  const { ICONS, renderLangSwitcherMenu } = context;
  const isServiceActive = basePath.startsWith('/en/services');
  const isShopActive = basePath.startsWith('/en/catalog');
  const isAboutActive = basePath.startsWith('/en/about-us');
  const isBlogActive = basePath.startsWith('/en/blog');
  const isContactActive = basePath.startsWith('/en/contact');

  return `
  <!-- COMPACT STICKY HEADER (English) -->
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="/en/" class="brand-logo" aria-label="Eco Landshaft Home">
        <span class="logo-badge">${ICONS.leaf}</span>
        <span><span class="eco-green">Eco</span> Landshaft</span>
      </a>

      <nav class="main-nav" id="mainNavMenu" aria-label="Main menu">
        <div class="nav-item has-submenu">
          <a href="/en/#servicesSection" class="nav-link js-submenu-trigger ${isServiceActive ? 'active' : ''}" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chevron" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="submenu-dropdown" role="menu" aria-label="Services list">
            ${SERVICES_EN.map((s) => `
            <a href="${s.url}" class="submenu-card-link" role="menuitem">
              <span class="submenu-icon">${s.svgIcon}</span>
              <div>
                <div class="submenu-title">${s.shortName}</div>
                <div class="submenu-price">${s.priceRange}</div>
              </div>
            </a>`).join('')}
            <div class="submenu-footer">
              <span>Free measurement & quote: ${BRAND_EN.phoneDisplay}</span>
              <a href="/en/#smartCalculator">Online Calculator →</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="/en/catalog/" class="nav-link ${isShopActive ? 'active' : ''}">Shop</a>
        </div>

        <div class="nav-item">
          <a href="/en/about-us/" class="nav-link ${isAboutActive ? 'active' : ''}">About Us</a>
        </div>

        <div class="nav-item">
          <a href="/en/blog/" class="nav-link ${isBlogActive ? 'active' : ''}">Blog</a>
        </div>

        <div class="nav-item">
          <a href="/en/contact/" class="nav-link ${isContactActive ? 'active' : ''}">Contact</a>
        </div>
      </nav>

      <div class="header-actions">
${renderLangSwitcherMenu(basePath, 'en')}

        <a href="tel:${BRAND_EN.phoneRaw}" class="header-phone-btn">
          ${ICONS.phone}
          <span>${BRAND_EN.phoneDisplay}</span>
        </a>

        <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Open menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderServicesGridSectionEn(context) {
  const { ICONS } = context;
  return `
      <section class="section-block" id="servicesSection">
        <div class="section-header">
          <div class="section-header-left">
            <span class="section-eyebrow">OUR SERVICES</span>
            <h2 class="section-title">
              Lawn installation, stadium construction and <span>landscaping</span>
            </h2>
            <p class="section-desc">
              All projects executed under official contract with guaranteed completion timelines and fixed estimates.
            </p>
          </div>
          <button
            type="button"
            class="nav-pill-btn phone-cta js-open-modal"
            data-title="Get a Free Consultation"
            data-sub="Leave your phone number — our project manager will contact you within 15 minutes."
          >
            <span>Free Consultation</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </button>
        </div>

        <div class="services-bento-grid">
          ${SERVICES_EN.map((s) => `
          <article class="service-bento-card">
            <a href="${s.url}" class="service-card-visual" aria-label="${s.title}">
              <img src="${s.img}" alt="${s.title}" loading="lazy" />
              <span class="service-price-glass">${s.priceRange}</span>
              <span class="service-cluster-badge">${s.clusterTag}</span>
            </a>
            <div class="service-card-body">
              <h3><a href="${s.url}">${s.title}</a></h3>
              <p>${s.shortDesc}</p>
              <ul class="usp-check-list">
                ${s.usps.map((u) => `<li><span class="check-dot">${ICONS.check}</span><span>${u}</span></li>`).join('')}
              </ul>
            </div>
            <div class="service-card-footer">
              <a href="${s.url}" class="btn-service-link">
                <span>Explore service</span>
                <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
              </a>
              <button
                type="button"
                class="circle-btn-black js-open-modal"
                data-title="${s.shortName} — Free Estimate"
                data-sub="Leave your phone number — we will prepare an exact budget for ${s.shortName.toLowerCase()} within 15 minutes."
                aria-label="Order ${s.shortName}"
              >
                ${ICONS.arrowUpRight}
              </button>
            </div>
          </article>`).join('\n')}
        </div>
      </section>`;
}

function renderSmartCalculatorEn(defaultService = 'suniy-gazon', context) {
  const { ICONS } = context;
  return `
  <section class="section-block" id="smartCalculator">
    <div class="calculator-bento-shell" data-default-service="${defaultService}">
      <div class="section-header" style="margin-bottom: 8px;">
        <div class="section-header-left">
          <span class="glass-pill-tag">ONLINE CALCULATOR</span>
          <h2 class="section-title" style="color: #FFFFFF; margin-top: 8px;">
            Calculate your project budget in 30 seconds
          </h2>
          <p class="section-desc" style="color: rgba(255,255,255,0.78);">
            Select your desired service or turf type and specify your area size.
          </p>
        </div>
      </div>

      <div class="calc-grid">
        <div class="calc-controls-panel">
          <span class="calc-step-label">1. Select service category</span>
          <div class="calc-type-pills">
            <button type="button" class="calc-type-btn ${defaultService === 'suniy-gazon' ? 'active' : ''}" data-service="suniy-gazon">
              Artificial Grass<span>from 48,800 UZS/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rulonli-gazon' ? 'active' : ''}" data-service="rulonli-gazon">
              Natural Roll Turf<span>9,000 – 30,000 UZS/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'gazon-ekish' ? 'active' : ''}" data-service="gazon-ekish">
              Lawn Seeding<span>15,000 – 25,000 UZS/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'stadion-qurish' ? 'active' : ''}" data-service="stadion-qurish">
              Stadium Construction<span>from 217,000 UZS/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rezina-maydon' ? 'active' : ''}" data-service="rezina-maydon">
              Rubber Flooring<span>150,000 – 250,000 UZS/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'avtopoliv-landshaft' ? 'active' : ''}" data-service="avtopoliv-landshaft">
              Hunter Irrigation<span>from 49,000 UZS/m²</span>
            </button>
          </div>

          <div class="calc-slider-group">
            <div class="calc-slider-header">
              <span class="calc-step-label" style="margin-bottom:0;">2. Plot / Ground Area (m² / sq.ft)</span>
              <span class="calc-area-display" id="calcAreaDisplay">150 m² (1,615 sq.ft)</span>
            </div>
            <input
              type="range"
              id="calcAreaRange"
              class="range-slider"
              min="20"
              max="2000"
              step="10"
              value="150"
              aria-label="Area size in square meters"
            />
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:rgba(255,255,255,0.6); margin-top:6px;">
              <span>20 m²</span>
              <span>800 m² (standard 20×40m field)</span>
              <span>2,000 m²</span>
            </div>
          </div>

          <span class="calc-step-label">3. Optional add-ons</span>
          <div class="calc-options-row">
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptPrep" />
              <span>Ground leveling & preparation (+15,000 UZS/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptInstall" checked />
              <span>Turnkey laying & installation (+20,000 UZS/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptIrrig" />
              <span>Hunter automatic irrigation (+45,000 UZS/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptWholesale" />
              <span>Wholesale volume discount (-15%)</span>
            </label>
          </div>
        </div>

        <div class="calc-result-panel">
          <div>
            <span class="outline-pill-tag">PRELIMINARY ESTIMATE</span>
            <div class="calc-total-price" id="calcTotalSum">16,350,000 UZS</div>
            <div class="calc-breakdown-list">
              <div class="calc-breakdown-item">
                <span>Selected Service:</span>
                <span id="calcOutService">Artificial grass (pile 20–50 mm)</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Area Size:</span>
                <span id="calcOutArea">150 m²</span>
              </div>
              <div class="calc-breakdown-item">
                <span id="calcOutMatLabel">Rolls required (2×25m):</span>
                <span id="calcOutRolls">3 rolls</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Estimated Duration:</span>
                <span id="calcOutDays">2 – 4 days</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Engineer Site Visit & Measurement:</span>
                <span style="color:var(--green-700);">Free of charge</span>
              </div>
            </div>
          </div>

          <form class="phone-only-form js-phone-form" data-context="Calculator Estimate (EN)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Your phone number"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Precise Quotation</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function renderPortfolioSectionEn() {
  return `
  <section class="section-block" id="portfolioSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">OUR PORTFOLIO</span>
        <h2 class="section-title">
          Selected <span>completed projects</span>
        </h2>
        <p class="section-desc">
          Drag the interactive Before & After slider to see our real-world transformations across Uzbekistan.
        </p>
      </div>
      <div class="ecom-filter-tabs">
        <button type="button" class="ecom-tab-btn js-portfolio-tab active" data-pfilter="all">All Projects</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="gazon">Lawn & Landscape</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="stadion">Stadiums</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="rezina">Rubber Courts</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="video">Video</button>
      </div>
    </div>

    <div class="portfolio-bento-grid">
      <div class="before-after-card js-portfolio-item" data-pcat="gazon">
        <div class="ba-layer ba-after">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80" alt="After: emerald green roll turf" loading="lazy" />
        </div>
        <div class="ba-layer ba-before">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" alt="Before: unprepared plot" loading="lazy" />
        </div>
        <span class="ba-badge left">Before</span>
        <span class="ba-badge right">After (Natural Sod)</span>
        <div class="ba-handle">
          <div class="ba-handle-circle">↔</div>
        </div>
        <input type="range" class="ba-range-input" min="5" max="95" value="50" aria-label="Before and after comparison slider" />
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="stadion">
          <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80" alt="Mini-football pitch 20x40m" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Stadium Construction</span>
              <span class="pile-badge">800 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Mini-Football Pitch (20×40m)</h3>
              <p style="font-size:0.76rem; opacity:0.82;">FIFA 50mm turf, gravel base & LED lighting</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="rezina">
          <img src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=800&q=80" alt="Playground seamless EPDM flooring" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Rubber Playground</span>
              <span class="pile-badge">420 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">EPDM Rubber Play Area in Residential Complex</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Seamless shock-absorbing safety flooring</p>
            </div>
          </div>
        </article>
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="video">
          <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" alt="3D landscape and Hunter irrigation" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Video Tour</span>
              <span class="pile-badge">1,200 m²</span>
            </div>
            <button type="button" class="video-play-btn js-open-modal" data-title="Request Video Portfolio" data-sub="Leave your phone number — we will send full HD video walkthroughs of our projects via Telegram." aria-label="Watch video">
              ▶
            </button>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">3D Landscape, Sod Laying & Hunter Sprinklers</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Comprehensive project execution</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="gazon">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" alt="Stabilized reindeer moss wall" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Vertical Moss</span>
              <span class="pile-badge">45 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Interior Living Wall & Preserved Moss</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Up to 10 years without watering</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

function renderRegionsHubSectionEn() {
  return `
  <section class="section-block" id="regionsSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">REGIONAL COVERAGE</span>
        <h2 class="section-title">
          Delivery and construction in <span>Tashkent and all regions</span>
        </h2>
        <p class="section-desc">
          We dispatch turf and equipment from our central warehouse to any province within 24 hours and construct turnkey sports facilities.
        </p>
      </div>
    </div>

    <div class="regions-grid">
      ${REGIONS_EN.map((r) => `
      <a href="${r.url}" class="region-card">
        <div>
          <span class="outline-pill-tag" style="margin-bottom:8px;">WITHIN 24 HOURS</span>
          <h4>${r.name}</h4>
          <p style="margin-top:4px;">Wholesale turf & turnkey stadiums</p>
        </div>
        <div class="region-arrow">
          <span>Explore</span>
          <span>→</span>
        </div>
      </a>`).join('')}
    </div>
  </section>`;
}

function renderContactAndMapSectionEn(context) {
  const { ICONS } = context;
  return `
  <section class="section-block" id="contactSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">CONTACT US</span>
        <h2 class="section-title">
          Free consultation and <span>our office address</span>
        </h2>
        <p class="section-desc">
          Leave only your phone number — our senior specialist will contact you within 15 minutes.
        </p>
      </div>
    </div>

    <div class="contact-bento-grid">
      <div class="contact-info-card">
        <div>
          <span class="outline-pill-tag">FREE CONSULTATION</span>
          <h3 style="font-size:1.35rem; font-weight:800; margin:10px 0 6px;">
            Leave your number — we will call you back in 15 minutes
          </h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
            We answer all questions, calculate itemized estimates, and send a site surveyor for free measurements.
          </p>

          <form class="phone-only-form js-phone-form" data-context="Contact Block (EN)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (97) 783-82-53"
              required
              aria-label="Your phone number"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Consultation</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>

        <div class="contact-detail-list">
          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.phone}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Phone (24/7):</div>
              <a href="tel:${BRAND_EN.phoneRaw}" style="font-size:1rem; font-weight:700; color:var(--black-950);">${BRAND_EN.phoneFormatted}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.send}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Telegram Messenger:</div>
              <a href="${BRAND_EN.telegramUrl}" target="_blank" rel="noopener" style="font-size:0.96rem; font-weight:700; color:var(--green-800);">${BRAND_EN.telegramHandle}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.mapPin}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Office & Showroom Address:</div>
              <div style="font-size:0.9rem; font-weight:600; color:var(--black-950);">${BRAND_EN.address}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-bento-card">
        ${BRAND_EN.mapIframe}
      </div>
    </div>
  </section>`;
}

function renderFooterEn(context) {
  const { ICONS } = context;
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/en/" class="brand-logo" style="color:#FFFFFF; margin-bottom:12px;">
            <span class="logo-badge">${ICONS.leaf}</span>
            <span><span style="color:var(--green-300);">Eco</span> Landshaft</span>
          </a>
          <p style="font-size:0.82rem; color:rgba(255,255,255,0.68); margin-bottom:14px;">
            Professional turf sod laying, wholesale artificial grass, sports stadiums, and children playground safety flooring in Uzbekistan.
          </p>
          <div style="font-size:0.82rem; color:var(--green-300); font-weight:600;">
            ${BRAND_EN.address}<br/>
            <a href="tel:${BRAND_EN.phoneRaw}">${BRAND_EN.phoneFormatted}</a> • <a href="${BRAND_EN.telegramUrl}" target="_blank" rel="noopener">${BRAND_EN.telegramHandle}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <div class="footer-links">
            ${SERVICES_EN.map((s) => `<a href="${s.url}">${s.shortName}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="footer-col">
          <h4>Shop & Sections</h4>
          <div class="footer-links">
            <a href="/en/catalog/">Shop (All Products)</a>
            <a href="/en/catalog/artificial-grass/">Artificial Grass Catalog</a>
            <a href="/en/catalog/natural-turf-rolls/">Natural Turf Sod Rolls</a>
            <a href="/en/about-us/">About Us</a>
            <a href="/en/blog/">Blog</a>
            <a href="/en/contact/">Contact</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Regions</h4>
          <div class="footer-links">
            ${REGIONS_EN.map((r) => `<a href="${r.url}">Turf & Stadiums in ${r.name}</a>`).join('\n            ')}
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 <strong>${BRAND_EN.name} (ecolandshaft.uz)</strong>. All rights reserved.</div>
        <div>Payment methods: Cash, Uzcard/Humo, Bank Wire Transfer (VAT included), and Installments</div>
      </div>
    </div>
  </footer>

  <div class="modal-backdrop" id="quickLeadModal" role="dialog" aria-modal="true" aria-labelledby="modalLeadTitle">
    <div class="modal-glass-box">
      <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close">✕</button>
      <span class="outline-pill-tag">FREE CONSULTATION</span>
      <h3 id="modalLeadTitle" style="font-size:1.28rem; font-weight:800; margin:10px 0 6px;">
        Free Consultation & Project Estimate
      </h3>
      <p id="modalLeadSub" style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:16px;">
        Leave your phone number — our project manager will contact you within 15 minutes.
      </p>
      <form class="phone-only-form js-phone-form" data-context="Modal Inquiry (EN)">
        <input
          type="tel"
          class="phone-input-pill"
          placeholder="+998 (__) ___-__-__"
          required
          aria-label="Your phone number"
        />
        <button type="submit" class="btn-pill-black-full">
          <span>Submit Request</span>
          <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
        </button>
      </form>
    </div>
  </div>

  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function renderProductCardsEn(list = PRODUCTS_EN, context) {
  const { ICONS } = context;
  return list.map((p) => `
      <article class="product-card" data-category="${p.category}" data-retail="${p.retail}" data-wholesale="${p.wholesale}" data-unit="${p.unit}">
        <div>
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
            <div class="product-top-badges">
              <span class="pile-badge">${p.pile}</span>
              <span class="stock-badge">${p.stock}</span>
            </div>
          </div>
          <div class="product-meta">${p.catLabel}</div>
          <h3>${p.name}</h3>
          <div class="product-specs">
            ${p.specs.map((sp) => `<span class="spec-chip">${sp}</span>`).join('')}
          </div>
        </div>
        <div class="product-price-row">
          <div class="product-price-val js-product-price">
            ${p.retail.toLocaleString('en-US')} UZS/${p.unit}
            <small class="js-price-note">Wholesale: ${p.wholesale.toLocaleString('en-US')} UZS/${p.unit}</small>
          </div>
          <button
            type="button"
            class="btn-buy-quick js-open-modal"
            data-title="Order: ${p.name}"
            data-sub="Leave your phone number — we will calculate your required roll count and organize delivery."
          >
            <span>Order</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </article>`).join('\n');
}

/* ==========================================================================
   PAGE BUILDERS (ENGLISH)
   ========================================================================== */

function buildHomePageEn(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BRAND_EN.domain}/en/#localbusiness`,
        name: BRAND_EN.name,
        url: `${BRAND_EN.domain}/en/`,
        telephone: BRAND_EN.phoneFormatted,
        priceRange: '9000 UZS - 3560000 UZS',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Samarkand Darvoza street, Building 2',
          addressLocality: 'Tashkent',
          addressCountry: 'UZ'
        },
        sameAs: [BRAND_EN.telegramUrl]
      }
    ]
  };

  return `${renderHead({
    title: 'Eco Landshaft — Lawn Laying, Buy Artificial Grass & Sod in Tashkent, Stadiums & Playgrounds | ecolandshaft.uz',
    description: 'Wholesale and retail artificial grass (from 48,800 UZS/m²) and natural roll turf (from 9,000 UZS/m²) in Tashkent & Uzbekistan. Turnkey lawn installation, mini-football field construction, and seamless EPDM rubber surfaces.',
    keywords: 'artificial grass tashkent, buy sod rolls uzbekistan, lawn installation price, grass seeding, football pitch construction, seamless epdm rubber, landscape design tashkent, hunter automatic irrigation',
    canonicalPath: '/en/',
    basePath: '/',
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn('/en/', context)}

  <main class="container">
    <section class="unified-hero-section" aria-label="Hero section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">🏆 LAWN & SPORTS CONSTRUCTION HUB ACROSS UZBEKISTAN</span>
            <span class="glass-pill-tag">Official Warranty</span>
          </div>
          <h1>
            Professional lawn installation, <span>landscape design and sports ground construction</span>
          </h1>
          <p class="unified-hero-lead">
            Turnkey supply and installation of artificial and natural turf across Uzbekistan, green phytodecor, and seamless rubber playgrounds.
          </p>

          <div class="hero-action-btns">
            <a href="#servicesSection" class="btn-primary-white">
              <span>Explore our services</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/en/catalog/" class="btn-secondary-glass">
              <span>Browse turf shop</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>

          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>10+ years</strong>
              <span>Practical experience</span>
            </div>
            <div class="hero-metric-item">
              <strong>250,000+ m²</strong>
              <span>Completed plots</span>
            </div>
            <div class="hero-metric-item">
              <strong>Direct factory</strong>
              <span>Wholesale & retail</span>
            </div>
            <div class="hero-metric-item">
              <strong>12 regions</strong>
              <span>Fast 24h delivery</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">FREE CONSULTATION</span>
          <h2>Get a free consultation and project quote in 15 minutes</h2>
          <p>
            Leave your phone number — our engineer will call you back to discuss specifications and exact pricing.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Homepage Hero (EN)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Your phone number"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Free Consultation</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
          <div class="hero-glass-perks">
            <span>• Free on-site measurement & soil inspection</span>
            <span>• Free turf & EPDM rubber physical samples</span>
          </div>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionEn(context)}

    <section class="section-block" id="ecommerceSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ONLINE STORE</span>
          <h2 class="section-title">
            Turf, seeds and <span>rubber materials store</span>
          </h2>
          <p class="section-desc">
            Direct wholesale and retail pricing with doorstep delivery across Uzbekistan within 24 hours.
          </p>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">Retail</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">Wholesale (Direct)</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsEn(PRODUCTS_EN, context)}
      </div>
    </section>

    ${renderSmartCalculatorEn('suniy-gazon', context)}

    ${renderPortfolioSectionEn()}

    ${renderRegionsHubSectionEn()}

    <section class="section-block" id="faqSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">FREQUENT QUESTIONS</span>
          <h2 class="section-title">
            Answers to <span>frequently asked questions</span>
          </h2>
        </div>
      </div>

      <div class="faq-grid">
        <details class="faq-item" open>
          <summary>
            <span>How much does 1 m² of artificial turf and natural roll sod cost?</span>
            <span>+</span>
          </summary>
          <p>
            Fresh natural roll turf from our nursery ranges between <strong>9,000 and 30,000 UZS/m²</strong> depending on volume. Artificial grass with pile height from 10 to 50 mm ranges from <strong>48,800 to 148,000 UZS/m²</strong>.
          </p>
        </details>

        <details class="faq-item" open>
          <summary>
            <span>What is the turnaround time for a turnkey mini-football pitch?</span>
            <span>+</span>
          </summary>
          <p>
            A standard 20×40m (800 m²) mini-football pitch complete with drainage foundation, steel fencing, netting, LED floodlights, and FIFA 50mm turf is constructed in <strong>15 to 25 days</strong>.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>What warranty is provided for playground rubber flooring?</span>
            <span>+</span>
          </summary>
          <p>
            All seamless SBR and virgin EPDM rubber surfaces are backed by an <strong>official 12-month contractual warranty</strong>.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>Do you deliver materials and perform installation across all Uzbekistan provinces?</span>
            <span>+</span>
          </summary>
          <p>
            Yes, we deliver from our Tashkent warehouse to any province within 24 hours, and our specialized construction crews carry out turnkey installation on-site.
          </p>
        </details>
      </div>
    </section>

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildCatalogPageEn({ canonicalPath = '/en/catalog/', basePath = '/katalog/', title, metaDesc, h1, subtitle, defaultFilter = 'all' }, context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: `${BRAND_EN.domain}${canonicalPath}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords: 'buy artificial turf tashkent, artificial grass wholesale price, natural sod rolls price uzbekistan, denmark grass seeds, rubber tiles',
    canonicalPath,
    basePath,
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn(canonicalPath, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <a href="/en/catalog/">Shop</a>
      ${canonicalPath !== '/en/catalog/' ? `<span>/</span><span style="color:var(--green-800);">${h1}</span>` : ''}
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">WHOLESALE & RETAIL STORE</span>
            <span class="glass-pill-tag">Official Warranty</span>
          </div>
          <h1>${h1}</h1>
          <p class="unified-hero-lead">${subtitle}</p>
          <div class="hero-action-btns">
            <a href="/en/catalog/artificial-grass/" class="btn-primary-white">
              <span>Artificial grass catalog</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
            <a href="/en/catalog/natural-turf-rolls/" class="btn-secondary-glass">
              <span>Natural roll turf</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">WHOLESALE SAMPLES & PRICE LIST</span>
          <h2>Get free turf samples and wholesale price sheet</h2>
          <p>
            Leave your phone number — we will send current pricing for 10–50mm artificial grass and natural roll turf.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Shop Page Wholesale Inquiry (EN)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Your phone number" />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Wholesale Prices</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs">
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'all' ? 'active' : ''}" data-filter="all">All Products</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'suniy' ? 'active' : ''}" data-filter="suniy">Artificial Grass (10–50 mm)</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'rulonli' ? 'active' : ''}" data-filter="rulonli">Natural Roll Turf</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">Lawn Seeds</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">Rubber & Tiles</button>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">Retail</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">Wholesale (Direct)</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsEn(PRODUCTS_EN, context)}
      </div>
    </section>

    ${renderSmartCalculatorEn(defaultFilter === 'rulonli' ? 'rulonli-gazon' : 'suniy-gazon', context)}

    ${renderPortfolioSectionEn()}

    ${renderRegionsHubSectionEn()}

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildServicePageEn(service, context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND_EN.name,
      telephone: BRAND_EN.phoneFormatted
    },
    areaServed: 'Uzbekistan'
  };

  const rubberConstructorHtml =
    service.calcKey === 'rezina-maydon'
      ? `
      <section class="section-block" id="rubberInteractive">
        <div class="bento-box-glass">
          <span class="section-eyebrow">COLOR PALETTE</span>
          <h2 class="section-title" style="margin-bottom:8px;">Choose your playground EPDM color</h2>
          <p class="section-desc" style="margin-bottom:20px;">
            Select a color swatch below to preview your seamless playground surface.
          </p>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:center;">
            <div>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">
                UV-resistant EPDM and SBR rubber granules:
              </p>
              <div class="swatch-row">
                <button type="button" class="color-swatch active" style="background:#166534;" data-color="#166534" data-name="Emerald Green" aria-label="Emerald Green"></button>
                <button type="button" class="color-swatch" style="background:#B91C1C;" data-color="#B91C1C" data-name="Terracotta Red" aria-label="Terracotta Red"></button>
                <button type="button" class="color-swatch" style="background:#1D4ED8;" data-color="#1D4ED8" data-name="Ocean Blue" aria-label="Ocean Blue"></button>
                <button type="button" class="color-swatch" style="background:#D97706;" data-color="#D97706" data-name="Sunny Yellow" aria-label="Sunny Yellow"></button>
                <button type="button" class="color-swatch" style="background:#7C3AED;" data-color="#7C3AED" data-name="Purple Violet" aria-label="Purple Violet"></button>
                <button type="button" class="color-swatch" style="background:#374151;" data-color="#374151" data-name="Graphite Black" aria-label="Graphite Black"></button>
              </div>
              <div style="font-size:0.88rem; font-weight:700; margin-top:8px;">
                Selected Color: <span id="rubberSelectedColorName" style="color:var(--green-800);">Emerald Green</span>
              </div>
            </div>
            <div
              id="rubberPreviewSurface"
              style="height:160px; border-radius:20px; background:#166534; color:#FFFFFF; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; transition: background 0.3s;"
            >
              <strong style="font-size:1.1rem;">Seamless EPDM / SBR Surface</strong>
              <span style="font-size:0.8rem; opacity:0.88; margin-top:4px;">Thickness: 10 • 15 • 20 • 30 • 40 mm</span>
            </div>
          </div>
        </div>
      </section>`
      : '';

  return `${renderHead({
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    canonicalPath: service.url,
    basePath: service.baseUrl,
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn(service.url, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <a href="/en/#servicesSection">Services</a>
      <span>/</span>
      <span style="color:var(--green-800);">${service.shortName}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner" style="background: linear-gradient(115deg, rgba(7, 31, 19, 0.92) 0%, rgba(14, 58, 36, 0.84) 100%), url('${service.img}') center/cover no-repeat;">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${service.clusterTag}</span>
            <span class="glass-pill-tag">Official Warranty</span>
          </div>
          <h1>${service.h1}</h1>
          <p class="unified-hero-lead">${service.shortDesc}</p>
          <ul class="usp-check-list" style="margin-bottom:24px;">
            ${service.usps.map((u) => `<li style="color:#FFFFFF;"><span class="check-dot" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">${ICONS.check}</span><span>${u}</span></li>`).join('')}
          </ul>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Calculate budget</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="tel:${BRAND_EN.phoneRaw}" class="btn-secondary-glass">
              <span>${BRAND_EN.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">FREE ESTIMATE</span>
          <h2>Free measurement & estimate: ${service.shortName.toLowerCase()}</h2>
          <p>
            Leave your phone number — our engineer will call you back within 15 minutes to arrange an exact on-site estimate.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Service Page Inquiry (EN): ${service.shortName}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Your phone number" />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Free Estimate</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${rubberConstructorHtml}

    <section class="section-block">
      <div class="comparison-table-wrap">
        <span class="section-eyebrow">PRICING & COMPARISON</span>
        <h2 class="section-title" style="margin-bottom:16px;">
          ${service.comparisonTable.title}
        </h2>
        <table class="seo-table">
          <thead>
            <tr>
              ${service.comparisonTable.headers.map((h) => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${service.comparisonTable.rows.map((row) => `
            <tr>
              ${row.map((cell, i) => `<td style="${i === 0 ? 'font-weight:700;' : ''}">${cell}</td>`).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">WORK PROCESS</span>
          <h2 class="section-title">Project execution in <span>4 systematic steps</span></h2>
        </div>
      </div>
      <div class="products-grid">
        ${service.steps.map((st) => `
        <div class="bento-side-card">
          <div>
            <span class="section-eyebrow">PHASE ${st.num}</span>
            <h3 style="font-size:1.02rem; font-weight:700; margin:8px 0;">${st.title}</h3>
            <p style="font-size:0.82rem; color:var(--text-secondary);">${st.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </section>

    ${renderSmartCalculatorEn(service.calcKey, context)}

    ${renderPortfolioSectionEn()}

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">FREQUENT QUESTIONS</span>
          <h2 class="section-title">Frequently asked <span>questions</span></h2>
        </div>
      </div>
      <div class="faq-grid">
        ${service.faqs.map((f) => `
        <details class="faq-item" open>
          <summary><span>${f.q}</span><span>+</span></summary>
          <p>${f.a}</p>
        </details>`).join('')}
      </div>
    </section>

    ${renderRegionsHubSectionEn()}

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildRegionPageEn(region, context) {
  const { ICONS, renderHead } = context;
  const title = `Lawn Installation, Artificial & Roll Turf Wholesale in ${region.name}, Football Stadiums — Eco Landshaft`;
  const metaDesc = `Delivery of artificial grass, nursery roll turf, and Danish seeds across ${region.name} region (${region.cities}). Turnkey construction of mini-football fields and seamless EPDM rubber courts in ${region.name}.`;
  const keywords = `artificial grass ${region.name.toLowerCase()}, roll turf ${region.name.toLowerCase()}, football pitch construction ${region.name.toLowerCase()}, rubber flooring ${region.name.toLowerCase()}`;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Lawn laying, sports court construction in ${region.name}`,
    areaServed: `${region.name}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords,
    canonicalPath: region.url,
    basePath: region.baseUrl,
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn(region.url, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <a href="/en/#regionsSection">Regions</a>
      <span>/</span>
      <span style="color:var(--green-800);">${region.name}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${region.name.toUpperCase()} REGION</span>
            <span class="glass-pill-tag">Delivery: ${region.deliveryTime}</span>
          </div>
          <h1>
            Lawn laying, stadium construction and <span>rubber playgrounds in ${region.name}</span>
          </h1>
          <p class="unified-hero-lead">${region.desc}</p>
          <p style="font-size:0.84rem; color:var(--green-300); font-weight:500; margin-bottom:22px;">
            Covered cities and districts: ${region.cities}
          </p>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Calculate budget</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/en/catalog/" class="btn-secondary-glass">
              <span>Visit store</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">DELIVERY & INSTALLATION</span>
          <h2>Delivery and construction quote for ${region.name}</h2>
          <p>
            Leave your phone number — we will calculate delivery rates and turnkey installation costs for ${region.name}.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Regional Inquiry (EN): ${region.name}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Your phone number" />
            <button type="submit" class="btn-pill-black-full">
              <span>Get Regional Quote</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionEn(context)}

    ${renderSmartCalculatorEn('stadion-qurish', context)}

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildAboutPageEn(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Eco Landshaft',
    url: `${BRAND_EN.domain}/en/about-us/`
  };

  return `${renderHead({
    title: 'About Eco Landshaft | 10+ Years of Excellence in Landscaping & Sports Construction',
    description: 'Eco Landshaft (ecolandshaft.uz) is Uzbekistan’s premier landscape and sports construction company: turf sod production nursery, FIFA artificial grass, turnkey mini-football fields, and rubber safety flooring.',
    keywords: 'about eco landshaft, landscape company tashkent, sports ground contractor uzbekistan, turf sod nursery',
    canonicalPath: '/en/about-us/',
    basePath: '/biz-haqimizda/',
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn('/en/about-us/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <span style="color:var(--green-800);">About Us</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">ABOUT ECO LANDSHAFT</span>
            <span class="glass-pill-tag">Official Warranty</span>
          </div>
          <h1>
            Creating modern <span>green landscapes & world-class sports grounds</span> across Uzbekistan
          </h1>
          <p class="unified-hero-lead">
            For more than a decade, we have engineered living landscapes for prestigious private residences, schools, residential complexes, and commercial parks, alongside commercial mini-football fields and rubber surfaces.
          </p>
          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>35+ specialists</strong>
              <span>Full-time team</span>
            </div>
            <div class="hero-metric-item">
              <strong>250+ projects</strong>
              <span>Completed plots</span>
            </div>
            <div class="hero-metric-item">
              <strong>50 hectares</strong>
              <span>Turf nursery</span>
            </div>
            <div class="hero-metric-item">
              <strong>100%</strong>
              <span>Contractual guarantee</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">PARTNERSHIP</span>
          <h2>Connect with our management</h2>
          <p>
            Leave your phone number — our commercial director will call you back within 15 minutes.
          </p>
          <form class="phone-only-form js-phone-form" data-context="About Us Page Inquiry (EN)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Your phone number" />
            <button type="submit" class="btn-pill-black-full">
              <span>Contact Specialists</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderPortfolioSectionEn()}

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildBlogPageEn(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Eco Landshaft Blog & Expert Insights',
    url: `${BRAND_EN.domain}/en/blog/`
  };

  return `${renderHead({
    title: 'Blog: Lawn Maintenance, Stadium Construction & Landscape Insights | Eco Landshaft',
    description: 'Expert articles from agronomists and sports civil engineers at Eco Landshaft: roll sod selection, mini-football field business plans, and EPDM rubber safety standards.',
    keywords: 'lawn care guide, mini football pitch business plan, roll turf or seeding, epdm rubber thickness',
    canonicalPath: '/en/blog/',
    basePath: '/blog/',
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn('/en/blog/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <span style="color:var(--green-800);">Blog</span>
    </nav>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">EXPERT ARTICLES</span>
          <h1 class="section-title">
            Blog on turf lawns, landscaping and <span>sports construction</span>
          </h1>
          <p class="section-desc">
            Practical guides, business payback calculations, and technical recommendations from our agronomists.
          </p>
        </div>
      </div>

      <div class="services-bento-grid">
        ${BLOG_POSTS_EN.map((post) => `
        <article class="service-bento-card">
          <a href="${post.link}" class="service-card-visual">
            <img src="${post.img}" alt="${post.title}" loading="lazy" />
            <span class="service-price-glass">${post.date}</span>
            <span class="service-cluster-badge">${post.category}</span>
          </a>
          <div class="service-card-body">
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="service-card-footer">
            <a href="${post.link}" class="btn-service-link">
              <span>Read article</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </article>`).join('\n')}
      </div>
    </section>

    ${renderSmartCalculatorEn('suniy-gazon', context)}

    ${renderContactAndMapSectionEn(context)}
  </main>

  ${renderFooterEn(context)}`;
}

function buildContactPageEn(context) {
  const { renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Eco Landshaft',
    url: `${BRAND_EN.domain}/en/contact/`
  };

  return `${renderHead({
    title: 'Contact and Address: Tashkent, Samarkand Darvoza St. 2 | Eco Landshaft',
    description: 'Get in touch with Eco Landshaft headquarters in Tashkent: +998-97-783-8253, Telegram t.me/+998977838253. Free consultation and site engineer visit.',
    keywords: 'contact eco landshaft, samarkand darvoza 2, lawn company phone tashkent, landscaping consultation',
    canonicalPath: '/en/contact/',
    basePath: '/boglanish/',
    lang: 'en',
    schemaJson
  })}
<body>
  ${renderHeaderEn('/en/contact/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/en/">Home</a>
      <span>/</span>
      <span style="color:var(--green-800);">Contact</span>
    </nav>

    ${renderContactAndMapSectionEn(context)}

    ${renderRegionsHubSectionEn()}
  </main>

  ${renderFooterEn(context)}`;
}

/* ==========================================================================
   DISPATCHER TO WRITE ALL 19 ENGLISH PAGES
   ========================================================================== */

function buildAllEn(context) {
  const { writePage } = context;

  // 1. Home
  writePage('en/index.html', buildHomePageEn(context));

  // 2. Catalog Main
  writePage(
    'en/catalog/index.html',
    buildCatalogPageEn(
      {
        canonicalPath: '/en/catalog/',
        basePath: '/katalog/',
        title: 'Artificial Grass and Sod Rolls Store in Tashkent — Wholesale & Retail Prices | Eco Landshaft',
        metaDesc: 'Wholesale and retail store for artificial grass (10mm–50mm), natural roll turf from nursery, Danish DLF seeds, and EPDM rubber flooring in Tashkent.',
        h1: 'Artificial Grass and Natural (Roll Sod) Store',
        subtitle: 'Landscape & FIFA sports turf (10–50mm), freshly harvested turf rolls from nursery, and genuine DLF seeds (Denmark).',
        defaultFilter: 'all'
      },
      context
    )
  );

  // 3. Catalog Artificial Grass
  writePage(
    'en/catalog/artificial-grass/index.html',
    buildCatalogPageEn(
      {
        canonicalPath: '/en/catalog/artificial-grass/',
        basePath: '/katalog/suniy-gazon/',
        title: 'Buy Artificial Grass in Tashkent — Wholesale & Retail (from 48,800 UZS/m²) | Eco Landshaft',
        metaDesc: 'Buy artificial turf (fake grass) 10mm, 20mm, 30mm, 40mm, and 50mm for homes, cafes, offices, and football stadiums directly from manufacturer.',
        h1: 'Artificial Grass Catalog (10 mm – 50 mm)',
        subtitle: 'Certified UV-resistant artificial turf for landscaping, terraces, restaurants, and FIFA standard mini-football stadiums.',
        defaultFilter: 'suniy'
      },
      context
    )
  );

  // 4. Catalog Natural Turf Rolls
  writePage(
    'en/catalog/natural-turf-rolls/index.html',
    buildCatalogPageEn(
      {
        canonicalPath: '/en/catalog/natural-turf-rolls/',
        basePath: '/katalog/rulonli-gazon/',
        title: 'Natural Roll Sod in Tashkent — Buy Fresh Ready Turf from Nursery | Eco Landshaft',
        metaDesc: 'Supply and installation of freshly cut 100% natural roll turf directly from our nursery in Tashkent. Prices from 9,000 to 30,000 UZS/m².',
        h1: 'Natural Roll Turf — Ready Sod Fresh from Nursery',
        subtitle: 'Dense 2-year established root sod: transform your yard into an emerald green paradise in just 1 single day.',
        defaultFilter: 'rulonli'
      },
      context
    )
  );

  // 5. All 6 Service Pages
  SERVICES_EN.forEach((service) => {
    const relFile = service.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildServicePageEn(service, context));
  });

  // 6. All 6 Regional Pages
  REGIONS_EN.forEach((region) => {
    const relFile = region.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildRegionPageEn(region, context));
  });

  // 7. About Page
  writePage('en/about-us/index.html', buildAboutPageEn(context));

  // 8. Blog Page
  writePage('en/blog/index.html', buildBlogPageEn(context));

  // 9. Contact Page
  writePage('en/contact/index.html', buildContactPageEn(context));
}

module.exports = {
  BRAND_EN,
  SERVICES_EN,
  PRODUCTS_EN,
  REGIONS_EN,
  BLOG_POSTS_EN,
  buildAllEn
};
