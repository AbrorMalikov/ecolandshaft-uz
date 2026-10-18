const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;

const BRAND = {
  name: 'Eco Landshaft',
  domain: 'https://ecolandshaft.uz',
  phoneDisplay: '+998 97 783-82-53',
  phoneRaw: '+998977838253',
  phoneFormatted: '+998-97-783-8253',
  telegramUrl: 'https://t.me/+998977838253',
  telegramHandle: 't.me/+998977838253',
  address: "Toshkent shahar, Samarqand darvoza ko'chasi 2-uy",
  mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.57328958743554!2d69.23297512100818!3d41.31888247190496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b136e5cae9f%3A0xeb09ecd49445fbfe!2zU0VPIC0gRmlyc3R8IFByb2Zlc3Npb25hbCBTRU8geGl6bWF0aSArIEFJIFNFTyB8INGD0YHQu9GD0LPQuCBTRU8g0L_RgNC-0LTQstC40LbQtdC90LjRjw!5e0!3m2!1sen!2s!4v1792302206387!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Eco Landshaft manzili: Toshkent shahar, Samarqand darvoza ko'chasi 2-uy"></iframe>`
};

/* Minimalist SVG Icons */
const ICONS = {
  leaf: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  stadium: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="12" y1="5" x2="12" y2="19"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  layers: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  droplet: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  grid: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  arrowDown: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>`,
  arrowRight: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
  arrowUpRight: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>`,
  phone: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mapPin: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  send: `<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  check: `<svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`
};

/* ==========================================================================
   SERVICES DATA (CONCISE, SEO-STRONG, MINIMALIST)
   ========================================================================== */
const SERVICES = [
  {
    slug: 'gazon-ekish-va-yotqizish',
    url: '/xizmatlar/gazon-ekish-va-yotqizish/',
    svgIcon: ICONS.leaf,
    shortName: 'Gazon ekish va yotqizish',
    title: 'Gazon ekish va rulonli gazon yotqizish',
    metaTitle: "Gazon ekish va rulonli gazon yotqizish Toshkentda | Narxi 15 000 so'm/m² — Eco Landshaft",
    metaDesc: "Professional gazon ekish (urug' sepish) va tayyor rulonli gazon yotqizish xizmati. Yer tekislash, begona o'tlardan tozalash va birinchi o'rim kafolati bilan.",
    keywords: "gazon ekish xizmati toshkent, rulonli gazon yotqizish narxi, gazon sepish, urug sepish sotix narxi, yer tekislash, gazon parvarishi, укладка рулонного газона ташкент, посев газона цена",
    h1: 'Gazon ekish va rulonli gazon yotqizish xizmati',
    priceRange: "15 000 – 25 000 so'm/m²",
    basePrice: 15000,
    clusterTag: 'Gazon qilish',
    calcKey: 'gazon-ekish',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "Yer tayyorlash, tekislash, Daniya urug'ini sepish yoki yangi kesilgan tayyor rulonli gazonni 1 kunda yotqizish.",
    usps: [
      "Yer tekislash, o'g'itlash va katoklash",
      "Soya va quyoshga chidamli Daniya navlari",
      "100% ko'karib chiqish va birinchi o'rim kafolati"
    ],
    comparisonTable: {
      title: "Urug' sepish (ekma gazon) va tayyor rulonli gazon taqqosiruvi",
      headers: ["Mezonlar", "Rulonli tayyor gazon", "Gazon urug'ini sepish"],
      rows: [
        ["Tayyor bo'lish muddati", "1 – 2 kunda tayyor yashil maydon", "14 – 25 kunda unib chiqadi"],
        ["Xizmat va material narxi", "24 000 – 45 000 so'm/m²", "15 000 – 25 000 so'm/m²"],
        ["Begona o'tlarga chidamlilik", "Yuqori (2 yillik zich chim)", "O'rtacha (dastlabki parvarish talab etiladi)"],
        ["Foydalanishga topshirish", "7–10 kundan so'ng", "30–40 kundan so'ng"]
      ]
    },
    steps: [
      { num: '01', title: "Bepul agronom ko'rigi", desc: "Ob'ektga bepul kelib, tuproq tarkibi va maydon nishabligi o'lchanadi." },
      { num: '02', title: 'Tozalash va kultivatsiya', desc: "Begona o'tlar tozalanib, tuproq 15–20 sm chuqurlikda yumshatiladi." },
      { num: '03', title: 'Tekislash va katoklash', desc: "Maxsus gazon katogi yordamida maydon ideal tekislikka keltiriladi." },
      { num: '04', title: "Yotqizish va 1-o'rim", desc: "Rulon yotqiziladi yoki urug' sepilib, birinchi o'rimgacha nazorat qilinadi." }
    ],
    faqs: [
      { q: "1 sotix (100 m²) joyga gazon yotqizish qancha vaqt oladi?", a: "Tayyorlangan yerga 1–3 sotix rulonli gazonni 1 ish kunida to'liq yotqizib topshiramiz." },
      { q: "Gazon sarg'ayib qolmasligi uchun kafolat berasizmi?", a: "Ha, shartnoma asosida 100% tutib ketish kafolatini beramiz va birinchi o'rimni bepul bajaramiz." }
    ]
  },
  {
    slug: 'futbol-maydonlari-va-tennis-kortlari-qurish',
    url: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/',
    svgIcon: ICONS.stadium,
    shortName: 'Stadion va kort qurish',
    title: 'Futbol maydonlari, stadionlar va tennis kortlar qurish',
    metaTitle: 'Stadion va mini-futbol maydoni qurish Toshkent va viloyatlarda | Tennis kort — Eco Landshaft',
    metaDesc: "Kalit topshirish sharti bilan mini-futbol maydonchalari, stadionlar va tennis kortlarini qurish. Drenaj, asos, panjara setka, LED yoritish va FIFA sun'iy gazon yotqizish.",
    keywords: 'futbol maydoni qurish toshkent, mini futbol maydonchasi qurish narxi, stadion qurish, tennis korti qurish, suniy chim yotqizish, строительство футбольных полей ташкент, спортивные площадки под ключ',
    h1: 'Mini-futbol stadionlari va tennis kortlarini kalit topshirish sharti bilan qurish',
    priceRange: "217 000 so'm/m² dan",
    basePrice: 217000,
    clusterTag: 'Stadion qurish',
    calcKey: 'stadion-qurish',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "Drenaj asos, metall panjara to'siqlar, LED projektorlar hamda 40–50 mm FIFA sun'iy gazon yoki akril tennis qoplamasi.",
    usps: [
      "15–25 kunda «pod klyuch» topshirish",
      "FIFA sertifikatli 40–50 mm sport gazoni",
      "B2B / B2G shartnoma, perechisleniye va tender"
    ],
    comparisonTable: {
      title: "Standart mini-futbol va sport maydonchalari komplektatsiyasi",
      headers: ["Maydon turi va o'lchami", "Maydon", "Komplektatsiya", "Taxminiy byudjet"],
      rows: [
        ["Mini-futbol (20 × 40 m)", "800 m²", "Drenaj asos, 50mm FIFA gazon, qum + granula, darvoza, setka, 8 ta LED projektor", "115 – 165 mln so'm"],
        ["Mini-futbol (22 × 42 m)", "924 m²", "Kuchaytirilgan drenaj, 50mm chim, 6m to'r, 12 ta LED yoritish, razmetka", "145 – 210 mln so'm"],
        ["Katta stadion (30 × 60 m)", "1 800 m²", "Muhandislik drenaji, FIFA Pro chim, yoritish ustunlari va to'liq jihozlash", "240 – 330 mln so'm"],
        ["Tennis korti (18 × 36 m)", "648 m²", "Beton/asfalt asos, akril 'Hard' yoki kort chimi, setka va yoritish", "130 – 195 mln so'm"]
      ]
    },
    steps: [
      { num: '01', title: 'Geodeziya va smeta (KP)', desc: "Maydon o'lchanib, rasmiy tijoriy taklif va loyiha-smeta tuziladi." },
      { num: '02', title: "Drenaj va sheben asos", desc: "Qatlamli sheben va klinets yotqizilib, vibrokatok bilan zichlanadi." },
      { num: '03', title: 'Panjara va LED yoritish', desc: "Mustahkam ustunlar, himoya to'ri va LED projektorlar o'rnatiladi." },
      { num: '04', title: "FIFA gazon va granula", desc: "Chim yelimlanib, oq razmetka tushiriladi, kvarts qumi va kauchuk sepiladi." }
    ],
    faqs: [
      { q: "Mini-stadion qursam o'zini qancha vaqtda oqlaydi?", a: "20x40m mini-stadion o'rtacha 10–16 oyda xarajatlarni to'liq qoplaydi." },
      { q: "Viloyatlarga borib qurib berasizlarmi?", a: "Ha, butun O'zbekiston bo'ylab barcha materiallarni olib borib, 15–25 kunda qurib beramiz." }
    ]
  },
  {
    slug: 'rezina-qoplama-va-bolalar-maydonchalari',
    url: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/',
    svgIcon: ICONS.shield,
    shortName: 'Bolalar va rezina maydonlar',
    title: 'Bolalar maydonchalari va EPDM/SBR rezina qoplamalar',
    metaTitle: 'Bolalar maydonchasi qurish va rezina qoplama (EPDM/SBR) Toshkentda — Eco Landshaft',
    metaDesc: "Shikastlanishdan himoyalovchi choklarsiz (besshovniy) EPDM va SBR rezina qoplamalar, rezina plitkalar va bolalar o'yin komplekslarini qurish. 12 oy kafolat.",
    keywords: 'rezina qoplama toshkent, bolalar maydonchasi qurish, kauchuk qoplama narxi, choklarsiz rezina pol, epdm granula, rezina plitka, бесшовное резиновое покрытие ташкент, детские площадки',
    h1: "Bolalar o'yin maydonchalarini qurish va choklarsiz rezina (EPDM/SBR) qoplamalar",
    priceRange: "150 000 – 250 000 so'm/m²",
    basePrice: 180000,
    clusterTag: 'Rezina maydonlar',
    calcKey: 'rezina-maydon',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "Bog'cha, maktab, TJM hovlilari va vorkaut maydonlari uchun zarba yutuvchi EPDM/SBR rezina pol va o'yin komplekslari.",
    usps: [
      "10–40 mm zarba yutuvchi xavfsiz qatlam",
      "Ekologik toza, hidsiz va sirpanmaydigan qoplama",
      "12 oylik rasmiy shartnoma kafolati"
    ],
    comparisonTable: {
      title: "Rezina qoplama turlari va qalinlik bo'yicha narxlar",
      headers: ["Qoplama turi", "Qalinligi", "Qo'llanilishi", "Narxi (ish + material)"],
      rows: [
        ["SBR choklarsiz qoplama", "10 – 15 mm", "Yugurish yo'laklari, vorkaut, sport zallar", "150 000 – 180 000 so'm/m²"],
        ["SBR + EPDM ikki qatlamli", "15 – 20 mm", "Bog'chalar, maktablar, TJM o'yin maydonchalari", "185 000 – 220 000 so'm/m²"],
        ["100% premium EPDM kauchuk", "20 – 40 mm", "Premium bolalar komplekslari va bog'lar", "220 000 – 260 000 so'm/m²"],
        ["Tayyor rezina plitka (500×500)", "20 – 40 mm", "Trenajyor va o'yin hududlari", "160 000 – 210 000 so'm/m²"]
      ]
    },
    steps: [
      { num: '01', title: "Bepul o'lchov va namuna", desc: "Asos holati tekshirilib, EPDM/SBR ranglar katalogi taqdim etiladi." },
      { num: '02', title: 'Praymer bilan ishlov', desc: "Beton yoki asfalt changdan tozalanib, poliuretan praymer surtiladi." },
      { num: '03', title: 'Choklarsiz quyish', desc: "Granula va bog'lovchi mikserda qorishtirilib, tekis qilib yotqiziladi." },
      { num: '04', title: "O'yin kompleksi montaji", desc: "24 soatda qoplama qotadi va bolalar o'yin jihozlari o'rnatiladi." }
    ],
    faqs: [
      { q: "Choklarsiz rezina qoplama qishda va yozda yorilib ketmaydimi?", a: "Yo'q, EPDM va SBR qoplama -40°C dan +60°C gacha haroratga chidamli va suv o'tkazuvchan." },
      { q: "Bolalar o'yin jihozlarini (gorka, arg'imchoq) ham o'rnatasizlarmi?", a: "Ha, rezina qoplama bilan birga bolalar o'yin komplekslari va vorkaut jihozlarini ham o'rnatib beramiz." }
    ]
  },
  {
    slug: 'landshaft-dizayn-va-kokalamzorlashtirish',
    url: '/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/',
    svgIcon: ICONS.layers,
    shortName: 'Landshaft dizayn 3D',
    title: "Landshaft dizayn va 3D ko'kalamzorlashtirish",
    metaTitle: "Landshaft dizayn Toshkentda — 3D loyihalash va ko'kalamzorlashtirish | Eco Landshaft",
    metaDesc: "Hovli, dala hovli va korporativ ob'ektlar uchun landshaft dizayn va ko'kalamzorlashtirish xizmati. 3D vizualizatsiya, Yevropa o'simliklari va obodonlashtirish.",
    keywords: 'landshaft dizayn toshkent, kokalamzorlashtirish xizmati, hovli dizayni, landshaft loyihalash 3d vizualizatsiya, manzarali daraxtlar ekish, ландшафтный дизайн ташкент, озеленение участка',
    h1: "Landshaft dizayn va hududni kompleks ko'kalamzorlashtirish",
    priceRange: "Individual (1 sotixdan)",
    basePrice: 49000,
    clusterTag: '3D Landshaft',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "3D-vizualizatsiya, manzarali daraxtlar va butalar ekish, alp tepaliklari hamda tungi landshaft yoritish tizimlari.",
    usps: [
      "Amaliy ish buyurtmasida 3D loyiha — Bepul",
      "Iqlimga moslashgan manzarali o'simliklar",
      "Agronomning 1 yillik parvarish kafolati"
    ],
    comparisonTable: {
      title: "Landshaft dizayn uslublari va paketlar",
      headers: ["Uslub", "Asosiy xususiyatlari", "O'simliklar", "Muddat"],
      rows: [
        ["Modern & minimalizm", "Aniq geometrik chiziqlar, zumrad gazon va chiziqli yoritish", "Tuya Smaragd, lavanda, bonsay qarag'ay", "7 – 14 kun"],
        ["Klassik Yevropa bog'i", "Simmetrik yo'laklar, gullaydigan butalar va dam olish hududi", "Atirgullar, gortenziya, magnoliya, archa", "10 – 20 kun"],
        ["Sharqona / Yapon bog'i", "Tabiiy toshlar, quruq daryo va sokin muhit", "Sakura, yapon zarangi, mox, bonsay", "14 – 25 kun"]
      ]
    },
    steps: [
      { num: '01', title: 'Arxitektor tashrifi', desc: "Hudud relyefi va tuproq o'rganilib, texnik topshiriq tuziladi." },
      { num: '02', title: '3D-vizualizatsiya', desc: "Bog'ning kunduzgi va tungi 3D loyihasi hamda smetasi tayyorlanadi." },
      { num: '03', title: 'Muhandislik tizimlari', desc: "Drenaj, avtomatik sug'orish va landshaft chiroqlari o'rnatiladi." },
      { num: '04', title: 'Daraxt va gazon ekish', desc: "Manzarali o'simliklar ekilib, dekorativ toshlar bilan bezatiladi." }
    ],
    faqs: [
      { q: "3D landshaft loyihasini alohida buyurtma qilsa bo'ladimi?", a: "Ha. Agar ko'kalamzorlashtirish ishlarini ham bizga topshirsangiz, 3D loyiha bepul bo'ladi." },
      { q: "Ekilgan daraxtlar uchun kafolat bormi?", a: "Avtopoliv o'rnatilgan ob'ektlarda barcha o'simliklarga 1 yil rasmiy kafolat beriladi." }
    ]
  },
  {
    slug: 'avtomatik-sugorish-tizimi',
    url: '/xizmatlar/avtomatik-sugorish-tizimi/',
    svgIcon: ICONS.droplet,
    shortName: 'Hunter avtopoliv',
    title: "Avtomatik sug'orish tizimi (Hunter avtopoliv)",
    metaTitle: "Avtopoliv o'rnatish Toshkentda — Hunter (AQSH) avtomatik sug'orish tizimi | Eco Landshaft",
    metaDesc: "AQSHning Hunter va Rain Bird uskunalari asosida avtomatik sug'orish (avtopoliv) va tomchilatib sug'orish tizimlarini o'rnatish. 2 yil rasmiy kafolat.",
    keywords: 'avtopoliv toshkent, avtomatik sugorish tizimi ornatish, gazon sugorish, hunter avtopoliv narxi, tomchilatib sugorish, автополив ташкент, установка системы автополива hunter',
    h1: "Avtomatik sug'orish tizimi (avtopoliv) o'rnatish — Hunter (AQSH)",
    priceRange: "49 000 so'm/m² dan",
    basePrice: 49000,
    clusterTag: 'Hunter avtopoliv',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "Smartfondan boshqariladigan Hunter va Rain Bird avtopoliv tizimlari. Suvni 45% gacha tejaydi, 1–2 kunda montaj qilinadi.",
    usps: [
      "Original Hunter va Rain Bird (AQSH) uskunalari",
      "2 yil rasmiy kafolat va qishki konservatsiya",
      "Tayyor gazonni buzmasdan ehtiyotkor montaj"
    ],
    comparisonTable: {
      title: "Qo'lda sug'orish va Hunter avtopoliv tizimi farqi",
      headers: ["Ko'rsatkich", "Hunter avtopoliv (Wi-Fi)", "Shlang bilan qo'lda sug'orish"],
      rows: [
        ["Vaqt sarfi", "Avtomatik — tungi vaqtda o'zi sug'oradi", "Har kuni 1.5 – 3 soat vaqt ketadi"],
        ["Suv taqsimoti", "98% aniqlikda bir tekis namlanish", "Notekis namlanish va ko'lmaklar"],
        ["Suv tejamkorligi", "Yomg'ir datchigi bilan 45% gacha tejamkor", "Ortiqcha suv sarfi"],
        ["Daraxt va gulzorlar", "Alohida tomchilatib sug'orish liniyasi", "Ildiz yuvilish xavfi"]
      ]
    },
    steps: [
      { num: '01', title: "Bosimni o'lchash", desc: "Muhandis suv bosimini o'lchab, gidravlik sxema chizadi." },
      { num: '02', title: 'Quvur va klapan montaji', desc: "30–40 sm chuqurlikda ПНД quvurlar va Hunter klapanlari yotqiziladi." },
      { num: '03', title: 'Forsunkalar o\'rnatish', desc: "Yer ostidan chiqadigan MP Rotator va PGP forsunkalar joylashtiriladi." },
      { num: '04', title: 'Avtomatika sozlash', desc: "Kontroller va mavsumiy sug'orish jadvali ishga tushiriladi." }
    ],
    faqs: [
      { q: "Ekilgan gazon ustiga ham avtopoliv o'rnatsa bo'ladimi?", a: "Ha, chim qatlami ehtiyotkorlik bilan ko'tarilib, quvur yotqizilgach o'z joyiga qaytariladi." },
      { q: "Qishda quvurlar muzlab qolmaydimi?", a: "Kuzda kompressor yordamida tizimdagi suvni haydab chiqarish (qishki konservatsiya) xizmatini bajaramiz." }
    ]
  },
  {
    slug: 'vertikal-kokalamzorlashtirish-fitodekor',
    url: '/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/',
    svgIcon: ICONS.grid,
    shortName: 'Fitodekor va yashil devor',
    title: "Vertikal ko'kalamzorlashtirish, fitodevor va mox",
    metaTitle: "Vertikal ko'kalamzorlashtirish, fitodevor va stabilizatsiyalangan mox — Eco Landshaft",
    metaDesc: "Ofis, restoran, kafe va xonadonlar uchun vertikal ko'kalamzorlashtirish: tabiiy stabilizatsiyalangan mox (yagel), Real Touch sun'iy o'simliklar va fitodevorlar.",
    keywords: 'vertikal kokalamzorlashtirish, fitodevor, yashil devorlar, stabilizatsiyalangan mox, ofis va restoranlar uchun fitodekor, вертикальное озеленение ташкент, фитостены, стабилизированный мох',
    h1: "Vertikal ko'kalamzorlashtirish, fitodevor va stabilizatsiyalangan mox",
    priceRange: "1 850 000 so'm/m² dan",
    basePrice: 1850000,
    clusterTag: 'Fitodekor va mox',
    calcKey: 'suniy-gazon',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85',
    shortDesc: "Ofis, restoran va xonadon interyeri uchun parvarish talab qilmaydigan tabiiy Skandinaviya moxi (yagel) hamda Real Touch yashil devorlar.",
    usps: [
      "Stabilizatsiyalangan mox 10 yilgacha suv talab qilmaydi",
      "Premium 'Real Touch' botanik nusxadagi o'simliklar",
      "24 soatda interyeringiz uchun bepul 3D-maket"
    ],
    comparisonTable: {
      title: "Vertikal ko'kalamzorlashtirish turlari taqqosiruvi",
      headers: ["Xususiyat", "Stabilizatsiyalangan mox", "Real Touch fitodevor", "Tirik fitodevor"],
      rows: [
        ["Parvarish va sug'orish", "Talab qilinmaydi (0% parvarish)", "Talab qilinmaydi", "Avtopoliv va fitolampa kerak"],
        ["Xizmat muddati", "8 – 10 yil", "10 – 15 yil", "Doimiy parvarish bilan uzoq muddat"],
        ["1 m² uchun narx", "2 400 000 – 3 560 000 so'm", "1 850 000 – 2 900 000 so'm", "3 200 000 – 4 500 000 so'm"]
      ]
    },
    steps: [
      { num: '01', title: 'Bepul 3D-maket', desc: "Devor o'lchami va rasmiga asosan 24 soatda dizayn-maket tayyorlanadi." },
      { num: '02', title: 'Namunalarni tanlash', desc: "Mox rangi va o'simlik fakturalari jonli katalogdan tasdiqlanadi." },
      { num: '03', title: "Ustaxonada yig'ish", desc: "Panellar ustaxonamizda 3–7 kunda tayyorlanadi." },
      { num: '04', title: 'Toza montaj', desc: "Tayyor fitodevor 1 ish kunida chang va shovqinsiz o'rnatiladi." }
    ],
    faqs: [
      { q: "Stabilizatsiyalangan moxga suv sepish kerak emasmi?", a: "Yo'q, uning tabiiy sharbati ekologik glitserin bilan almashtirilgan bo'lib, 10 yil yumshoq holda saqlanadi." },
      { q: "Kompaniya logotipini moxdan yasab berasizlarmi?", a: "Ha, ofis resepshn hududi uchun brend logotipini 3–5 kunda tayyorlab beramiz." }
    ]
  }
];

/* ==========================================================================
   E-COMMERCE PRODUCTS DATA
   ========================================================================== */
const PRODUCTS = [
  {
    id: 'suniy-20mm',
    category: 'suniy',
    catLabel: "Sun'iy gazon • Landshaft",
    name: "Sun'iy gazon EcoGrass 20 mm",
    pile: '20 mm',
    stock: 'Omborda bor',
    retail: 62000,
    wholesale: 48800,
    unit: 'm²',
    specs: ['Vors: 20 mm', 'Rulon: 2×25 m', 'UV-himoya: 5 yil'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-30mm',
    category: 'suniy',
    catLabel: "Sun'iy gazon • hovli va kafe",
    name: "Sun'iy gazon Premium Lush 30 mm",
    pile: '30 mm',
    stock: 'Xit sotuv',
    retail: 98000,
    wholesale: 82000,
    unit: 'm²',
    specs: ['Vors: 30 mm', "4 rangli tola", 'Drenaj teshikli'],
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-40mm',
    category: 'suniy',
    catLabel: "Sun'iy gazon • Deluxe",
    name: "Sun'iy gazon Royal Velvet 40 mm",
    pile: '40 mm',
    stock: "1-qo'ldan",
    retail: 125000,
    wholesale: 104000,
    unit: 'm²',
    specs: ['Vors: 40 mm', 'Dtex: 11 000', 'Qalin tola'],
    img: 'https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-50mm-fifa',
    category: 'suniy',
    catLabel: "Sport gazon • stadion uchun",
    name: "Sport sun'iy gazon FIFA Pro 50 mm",
    pile: '50 mm FIFA',
    stock: 'Stadion uchun',
    retail: 148000,
    wholesale: 122000,
    unit: 'm²',
    specs: ['Vors: 50 mm', 'Dtex: 12 000+', '8 yil xizmat'],
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-universal',
    category: 'rulonli',
    catLabel: 'Tabiiy rulonli gazon',
    name: "Tabiiy rulonli gazon «Universal sport»",
    pile: 'Tabiiy 100%',
    stock: 'Yangi kesilgan',
    retail: 18000,
    wholesale: 12000,
    unit: 'm²',
    specs: ['Rulon: 0.8 m²', 'Zich ildiz', 'Quyosh va soyaga mos'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-deluxe',
    category: 'rulonli',
    catLabel: 'Tabiiy rulonli gazon',
    name: "Tabiiy rulonli gazon «Kanada Green Elite»",
    pile: 'Premium chim',
    stock: 'Pitomnikdan',
    retail: 26000,
    wholesale: 19500,
    unit: 'm²',
    specs: ['Myatlik + Ovsyanitsa', 'Zumrad rang', 'Issiqqa chidamli'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'urug-dlf',
    category: 'urug',
    catLabel: "Gazon urug'lari • Daniya",
    name: "Gazon urug'i DLF Trifolium (10 kg qop)",
    pile: '10 kg = 300 m²',
    stock: 'Original Daniya',
    retail: 950000,
    wholesale: 790000,
    unit: 'qop',
    specs: ['1 kg / 30 m²', 'Unib chiqish: 98%', 'Sertifikatlangan'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rezina-epdm-plitka',
    category: 'rezina',
    catLabel: 'Rezina qoplama',
    name: "Rezina plitka va EPDM qoplama (20 mm)",
    pile: '20 mm EPDM',
    stock: '12 oy kafolat',
    retail: 185000,
    wholesale: 150000,
    unit: 'm²',
    specs: ['10–40 mm', 'Zarba yutuvchi', '12 xil rang'],
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=700&q=80'
  }
];

/* ==========================================================================
   REGIONS DATA (PROGRAMMATIC SEO FOR VILOYATLAR)
   ========================================================================== */
const REGIONS = [
  {
    slug: 'samarkand',
    url: '/samarkand/',
    name: 'Samarqand',
    locative: 'Samarqandda',
    cities: "Samarqand shahri, Urgut, Kattaqo'rg'on, Oqdaryo, Pastdarg'om, Toyloq",
    deliveryTime: '12 – 24 soat ichida',
    desc: "Samarqand viloyati bo'ylab ulgurji narxda sun'iy va rulonli gazon yetkazib berish hamda mini-futbol stadionlari va bolalar rezina maydonchalarini qurish."
  },
  {
    slug: 'fergana',
    url: '/fergana/',
    name: "Farg'ona",
    locative: "Farg'onada",
    cities: "Farg'ona shahri, Qo'qon, Marg'ilon, Quva, Rishton, Oltiariq",
    deliveryTime: '12 – 24 soat ichida',
    desc: "Farg'ona vodiysi bo'ylab optom narxda sun'iy chim, FIFA stadion gazoni yetkazib berish va kalit topshirish sharti bilan sport maydonchalarini barpo etish."
  },
  {
    slug: 'andijan',
    url: '/andijan/',
    name: 'Andijon',
    locative: 'Andijonda',
    cities: "Andijon shahri, Asaka, Shahrixon, Xonobod, Qo'rg'ontepa, Baliqchi",
    deliveryTime: '14 – 24 soat ichida',
    desc: "Andijon viloyatida mini-futbol maydonlari, tennis kortlar, EPDM rezina qoplamalar qurish va Toshkent omboridan sun'iy gazon yetkazib berish."
  },
  {
    slug: 'bukhara',
    url: '/bukhara/',
    name: 'Buxoro',
    locative: 'Buxoroda',
    cities: "Buxoro shahri, Kogon, G'ijduvon, Qorako'l, Vobkent, Romitan",
    deliveryTime: '16 – 24 soat ichida',
    desc: "Buxoro iqlimiga chidamli UV-himoyalangan sun'iy gazonlar, Hunter avtomatik sug'orish tizimlari, mini-stadionlar va landshaft dizayn xizmatlari."
  },
  {
    slug: 'kashkadarya',
    url: '/kashkadarya/',
    name: 'Qashqadaryo',
    locative: 'Qashqadaryoda',
    cities: "Qarshi shahri, Shahrisabz, G'uzor, Koson, Kitob, Muborak, Yakkabog'",
    deliveryTime: '14 – 24 soat ichida',
    desc: "Qashqadaryo viloyatida mini-stadionlarni kalit topshirish sharti bilan qurish, 50mm FIFA sun'iy gazon yetkazib berish va rezina maydonlar yotqizish."
  },
  {
    slug: 'namangan',
    url: '/namangan/',
    name: 'Namangan',
    locative: 'Namanganda',
    cities: "Namangan shahri, Chust, Kosonsoy, To'raqo'rg'on, Pop, Uchqo'rg'on",
    deliveryTime: '12 – 24 soat ichida',
    desc: "Namanganda professional landshaft dizayn, Hunter avtopoliv, rulonli va sun'iy gazon savdosi hamda zamonaviy mini-futbol stadionlarini qurish."
  }
];

/* ==========================================================================
   BLOG POSTS DATA
   ========================================================================== */
const BLOG_POSTS = [
  {
    slug: 'rulonli-gazon-yoki-urug-sepish',
    title: "Rulonli tayyor gazon yaxshimi yoki urug' sepish? Agronom tavsiyalari",
    date: '15 Oktabr, 2026',
    category: 'Gazon parvarishi',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    excerpt: "Hovlingizda zumraddek yashil maysazor barpo etishda byudjet, muddat va tuproq sharoitiga qarab to'g'ri qaror qabul qilish sirlari.",
    link: '/xizmatlar/gazon-ekish-va-yotqizish/'
  },
  {
    slug: 'mini-futbol-stadioni-qurish-biznes-rejasi',
    title: "Mini-futbol stadioni (20×40m) qurish: xarajatlar va o'zini oqlash muddati",
    date: '10 Oktabr, 2026',
    category: 'Stadion qurish',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80',
    excerpt: "Toshkent va viloyatlarda kalit topshirish sharti bilan mini-stadion qurishda drenaj, 50mm FIFA chim va LED yoritishni to'g'ri tanlash.",
    link: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/'
  },
  {
    slug: 'bolalar-maydonchasi-uchun-epdm-yoki-sbr-rezina',
    title: "Bolalar maydonchasi uchun EPDM va SBR rezina qoplamalar: qalinlik me'yorlari",
    date: '04 Oktabr, 2026',
    category: 'Rezina qoplamalar',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=900&q=80',
    excerpt: "Bog'cha, maktab va TJM hovlilarida bolalar xavfsizligi uchun qanday qalinlikdagi kauchuk qoplama tanlash kerak?",
    link: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/'
  }
];

/* ==========================================================================
   SHARED HTML COMPONENTS
   ========================================================================== */
function renderHead({ title, description, keywords, canonicalPath, schemaJson }) {
  const canonicalUrl = `${BRAND.domain}${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Hreflang SEO tags for 5 Languages -->
  <link rel="alternate" hreflang="uz" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="uz-Cyrl" href="${canonicalUrl}?lang=uz-Cyrl" />
  <link rel="alternate" hreflang="ru" href="${BRAND.domain}/ru${canonicalPath}" />
  <link rel="alternate" hreflang="en" href="${BRAND.domain}/en${canonicalPath}" />
  <link rel="alternate" hreflang="zh" href="${BRAND.domain}/zh${canonicalPath}" />
  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />

  <!-- Open Graph / Social SEO -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="uz_UZ" />
  <meta property="og:site_name" content="${BRAND.name} — ecolandshaft.uz" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80" />

  <!-- Montserrat Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="/assets/css/styles.css" />

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>`;
}

function renderHeader(activePath = '/') {
  const isServiceActive = activePath.startsWith('/xizmatlar');
  const isShopActive = activePath.startsWith('/katalog');
  const isAboutActive = activePath.startsWith('/biz-haqimizda');
  const isBlogActive = activePath.startsWith('/blog');
  const isContactActive = activePath.startsWith('/boglanish');

  return `
  <!-- COMPACT STICKY HEADER (Without "Bosh sahifa", Clean Minimalist Submenu) -->
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="/" class="brand-logo" aria-label="Eco Landshaft Bosh sahifa">
        <span class="logo-badge">${ICONS.leaf}</span>
        <span><span class="eco-green">Eco</span> Landshaft</span>
      </a>

      <nav class="main-nav" id="mainNavMenu" aria-label="Asosiy menyu">
        <!-- Xizmatlar Submenu -->
        <div class="nav-item has-submenu">
          <a href="/#servicesSection" class="nav-link js-submenu-trigger ${isServiceActive ? 'active' : ''}" aria-haspopup="true">
            <span>Xizmatlar</span>
            <svg class="nav-chevron" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="submenu-dropdown" role="menu" aria-label="Xizmatlar ro'yxati">
            ${SERVICES.map((s) => `
            <a href="${s.url}" class="submenu-card-link" role="menuitem">
              <span class="submenu-icon">${s.svgIcon}</span>
              <div>
                <div class="submenu-title">${s.shortName}</div>
                <div class="submenu-price">${s.priceRange}</div>
              </div>
            </a>`).join('')}
            <div class="submenu-footer">
              <span>Bepul o'lchov va konsultatsiya: ${BRAND.phoneDisplay}</span>
              <a href="/#smartCalculator">Onlayn kalkulyator →</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="/katalog/" class="nav-link ${isShopActive ? 'active' : ''}">Do'kon</a>
        </div>

        <div class="nav-item">
          <a href="/biz-haqimizda/" class="nav-link ${isAboutActive ? 'active' : ''}">Biz haqimizda</a>
        </div>

        <div class="nav-item">
          <a href="/blog/" class="nav-link ${isBlogActive ? 'active' : ''}">Blog</a>
        </div>

        <div class="nav-item">
          <a href="/boglanish/" class="nav-link ${isContactActive ? 'active' : ''}">Bog'lanish</a>
        </div>
      </nav>

      <!-- Right Controls: 5-Language Switcher + Phone CTA -->
      <div class="header-actions">
        <div class="lang-switcher">
          <button type="button" class="lang-trigger" aria-label="Tilni tanlash">
            <span class="lang-dot"></span>
            <span class="lang-current-label">O'zbek (Lotin)</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="lang-menu" role="menu">
            <button type="button" class="lang-option active" data-lang="uz-Latn" data-label="O'zbek (Lotin)">
              <span>O'zbek (Lotin)</span>
              <span class="lang-code">UZ</span>
            </button>
            <button type="button" class="lang-option" data-lang="uz-Cyrl" data-label="Ўзбек (Кирилл)">
              <span>Ўзбек (Кирилл)</span>
              <span class="lang-code">ЎЗ</span>
            </button>
            <button type="button" class="lang-option" data-lang="ru" data-label="Русский">
              <span>Русский</span>
              <span class="lang-code">RU</span>
            </button>
            <button type="button" class="lang-option" data-lang="en" data-label="English">
              <span>English</span>
              <span class="lang-code">EN</span>
            </button>
            <button type="button" class="lang-option" data-lang="zh" data-label="中文">
              <span>中文 (Xitoy)</span>
              <span class="lang-code">ZH</span>
            </button>
          </div>
        </div>

        <a href="tel:${BRAND.phoneRaw}" class="header-phone-btn">
          ${ICONS.phone}
          <span>${BRAND.phoneDisplay}</span>
        </a>

        <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Menyuni ochish">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderServicesGridSection() {
  return `
      <!-- ====================================================================
           SECTION 1: XIZMAT KO'RSATISH QISMI (LARGE CLEAR IMAGES, MINIMALIST TEXT)
           ==================================================================== -->
      <section class="section-block" id="servicesSection">
        <div class="section-header">
          <div class="section-header-left">
            <span class="section-eyebrow">XIZMATLARIMIZ</span>
            <h2 class="section-title">
              Gazon ekish, stadion qurish va <span>ko'kalamzorlashtirish</span>
            </h2>
            <p class="section-desc">
              Rasmiy shartnoma, aniq smeta va kafolat asosida bajariladigan asosiy yo'nalishlarimiz.
            </p>
          </div>
          <button
            type="button"
            class="nav-pill-btn phone-cta js-open-modal"
            data-title="Bepul konsultatsiya olish"
            data-sub="Telefon raqamingizni qoldiring — mutaxassisimiz 15 daqiqada bog'lanadi."
          >
            <span>Bepul maslahat olish</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </button>
        </div>

        <div class="services-bento-grid">
          ${SERVICES.map((s) => `
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
                <span>Batafsil ko'rish</span>
                <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
              </a>
              <button
                type="button"
                class="circle-btn-black js-open-modal"
                data-title="${s.shortName} — Bepul smeta"
                data-sub="Telefon raqamingizni qoldiring — 15 daqiqada ${s.shortName.toLowerCase()} bo'yicha hisob-kitob beramiz."
                aria-label="${s.shortName} buyurtma qilish"
              >
                ${ICONS.arrowUpRight}
              </button>
            </div>
          </article>`).join('\n')}
        </div>
      </section>`;
}

function renderSmartCalculator(defaultService = 'suniy-gazon') {
  return `
  <!-- INTERACTIVE SMART CALCULATOR -->
  <section class="section-block" id="smartCalculator">
    <div class="calculator-bento-shell" data-default-service="${defaultService}">
      <div class="section-header" style="margin-bottom: 8px;">
        <div class="section-header-left">
          <span class="glass-pill-tag">ONLAYN KALKULYATOR</span>
          <h2 class="section-title" style="color: #FFFFFF; margin-top: 8px;">
            Loyiha qiymatini 30 soniyada hisoblang
          </h2>
          <p class="section-desc" style="color: rgba(255,255,255,0.78);">
            Xizmat yoki mahsulot turini va maydon o'lchamini belgilang.
          </p>
        </div>
      </div>

      <div class="calc-grid">
        <div class="calc-controls-panel">
          <span class="calc-step-label">1. Yo'nalishni tanlang</span>
          <div class="calc-type-pills">
            <button type="button" class="calc-type-btn ${defaultService === 'suniy-gazon' ? 'active' : ''}" data-service="suniy-gazon">
              Sun'iy gazon<span>48 800 so'm/m² dan</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rulonli-gazon' ? 'active' : ''}" data-service="rulonli-gazon">
              Rulonli gazon<span>9 000 – 30 000 so'm/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'gazon-ekish' ? 'active' : ''}" data-service="gazon-ekish">
              Gazon ekish<span>15 000 – 25 000 so'm/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'stadion-qurish' ? 'active' : ''}" data-service="stadion-qurish">
              Stadion qurish<span>217 000 so'm/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rezina-maydon' ? 'active' : ''}" data-service="rezina-maydon">
              Rezina maydon<span>150 000 – 250 000 so'm/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'avtopoliv-landshaft' ? 'active' : ''}" data-service="avtopoliv-landshaft">
              Hunter avtopoliv<span>49 000 so'm/m² dan</span>
            </button>
          </div>

          <div class="calc-slider-group">
            <div class="calc-slider-header">
              <span class="calc-step-label" style="margin-bottom:0;">2. Maydon o'lchami (m² / sotix)</span>
              <span class="calc-area-display" id="calcAreaDisplay">150 m² (1.5 sotix)</span>
            </div>
            <input
              type="range"
              id="calcAreaRange"
              class="range-slider"
              min="20"
              max="2000"
              step="10"
              value="150"
              aria-label="Maydon o'lchami kvadrat metrda"
            />
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:rgba(255,255,255,0.6); margin-top:6px;">
              <span>20 m²</span>
              <span>800 m² (20×40m stadion)</span>
              <span>2 000 m²</span>
            </div>
          </div>

          <span class="calc-step-label">3. Qo'shimcha opsiyalar</span>
          <div class="calc-options-row">
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptPrep" />
              <span>Yer tayyorlash (+15 000 so'm/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptInstall" checked />
              <span>Yotqizib berish (+20 000 so'm/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptIrrig" />
              <span>Hunter avtopoliv (+45 000 so'm/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptWholesale" />
              <span>Optom chegirma (-15%)</span>
            </label>
          </div>
        </div>

        <div class="calc-result-panel">
          <div>
            <span class="outline-pill-tag">TAXMINIY HISOB-KITOB</span>
            <div class="calc-total-price" id="calcTotalSum">16 350 000 so'm</div>
            <div class="calc-breakdown-list">
              <div class="calc-breakdown-item">
                <span>Yo'nalish:</span>
                <span id="calcOutService">Sun'iy gazon (vors 20–50 mm)</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Maydon:</span>
                <span id="calcOutArea">150 m²</span>
              </div>
              <div class="calc-breakdown-item">
                <span id="calcOutMatLabel">Hajm / Rulon:</span>
                <span id="calcOutRolls">3 birlik</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Ish muddati:</span>
                <span id="calcOutDays">2 – 4 kun</span>
              </div>
              <div class="calc-breakdown-item">
                <span>O'lchov va maslahat:</span>
                <span style="color:var(--green-700);">Bepul</span>
              </div>
            </div>
          </div>

          <form class="phone-only-form js-phone-form" data-context="Kalkulyator smetasi">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Telefon raqamingiz"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Aniq smeta olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function renderPortfolioSection() {
  return `
  <!-- PORTFOLIO SECTION -->
  <section class="section-block" id="portfolioSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">QILGAN ISHLARIMIZ</span>
        <h2 class="section-title">
          Topshirilgan <span>loyihalarimizdan</span> namunalar
        </h2>
        <p class="section-desc">
          «Oldin va keyin» slayderini surib ko'ring hamda yakunlangan ob'ektlarimiz bilan tanishing.
        </p>
      </div>
      <div class="ecom-filter-tabs">
        <button type="button" class="ecom-tab-btn js-portfolio-tab active" data-pfilter="all">Barchasi</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="gazon">Gazon va landshaft</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="stadion">Stadionlar</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="rezina">Rezina maydonlar</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="video">Video</button>
      </div>
    </div>

    <div class="portfolio-bento-grid">
      <div class="before-after-card js-portfolio-item" data-pcat="gazon">
        <div class="ba-layer ba-after">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80" alt="Keyin: Tayyor zumrad rulonli gazon" loading="lazy" />
        </div>
        <div class="ba-layer ba-before">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" alt="Oldin: Tayyorlanmagan yer maydoni" loading="lazy" />
        </div>
        <span class="ba-badge left">Oldin</span>
        <span class="ba-badge right">Keyin (rulonli gazon)</span>
        <div class="ba-handle">
          <div class="ba-handle-circle">↔</div>
        </div>
        <input type="range" class="ba-range-input" min="5" max="95" value="50" aria-label="Oldin va keyin solishtirish slayderi" />
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="stadion">
          <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80" alt="Mini-futbol stadioni 20x40m" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Stadion qurish</span>
              <span class="pile-badge">800 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Mini-futbol stadioni (20×40m)</h3>
              <p style="font-size:0.76rem; opacity:0.82;">FIFA 50mm chim, drenaj va LED yoritish</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="rezina">
          <img src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=800&q=80" alt="Bolalar maydonchasi va EPDM rezina qoplama" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Rezina maydon</span>
              <span class="pile-badge">420 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">TJM hovlisida EPDM kauchuk maydoncha</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Choklarsiz xavfsiz rezina pol</p>
            </div>
          </div>
        </article>
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="video">
          <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" alt="3D Landshaft va Hunter avtopoliv" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Video sharh</span>
              <span class="pile-badge">1 200 m²</span>
            </div>
            <button type="button" class="video-play-btn js-open-modal" data-title="Video-portfolio olish" data-sub="Telefon raqamingizni qoldiring — Telegram orqali ob'ektlarimizning video-obzorlarini yuboramiz." aria-label="Videoni ko'rish">
              ▶
            </button>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">3D landshaft, rulonli gazon va avtopoliv</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Jarayon va yakuniy natija</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="gazon">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" alt="Stabilizatsiyalangan mox va fitodevor" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Fitodekor</span>
              <span class="pile-badge">45 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Interyerda fitodevor va yagel moxi</h3>
              <p style="font-size:0.76rem; opacity:0.82;">10 yilgacha parvarish talab qilmaydi</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

function renderRegionsHubSection() {
  return `
  <!-- PROGRAMMATIC SEO: VILOYATLAR -->
  <section class="section-block" id="regionsSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">HUDUDIY QAMROV</span>
        <h2 class="section-title">
          Toshkent va <span>viloyatlarda</span> yetkazib berish hamda qurish
        </h2>
        <p class="section-desc">
          Markaziy omborimizdan barcha viloyatlarga 24 soatda sun'iy gazon yetkazib beramiz va sport maydonchalarini qurib topshiramiz.
        </p>
      </div>
    </div>

    <div class="regions-grid">
      ${REGIONS.map((r) => `
      <a href="${r.url}" class="region-card">
        <div>
          <span class="outline-pill-tag" style="margin-bottom:8px;">24 SOATDA</span>
          <h4>${r.name}</h4>
          <p style="margin-top:4px;">Gazon optom va stadion qurish</p>
        </div>
        <div class="region-arrow">
          <span>Batafsil</span>
          <span>→</span>
        </div>
      </a>`).join('')}
    </div>
  </section>`;
}

function renderContactAndMapSection() {
  return `
  <!-- FREE CONSULTATION + CONTACT INFO + GOOGLE MAP -->
  <section class="section-block" id="contactSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">BOG'LANISH</span>
        <h2 class="section-title">
          Bepul konsultatsiya va <span>manzilimiz</span>
        </h2>
        <p class="section-desc">
          Faqat telefon raqamingizni qoldiring — mutaxassisimiz 15 daqiqa ichida bog'lanadi.
        </p>
      </div>
    </div>

    <div class="contact-bento-grid">
      <div class="contact-info-card">
        <div>
          <span class="outline-pill-tag">BEPUL KONSULTATSIYA</span>
          <h3 style="font-size:1.35rem; font-weight:800; margin:10px 0 6px;">
            Raqamingizni qoldiring — 15 daqiqada bog'lanamiz
          </h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
            Mutaxassisimiz savollaringizga javob beradi va ob'ektingizga bepul o'lchovchi yuboradi.
          </p>

          <form class="phone-only-form js-phone-form" data-context="Asosiy aloqa bloki">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (97) 783-82-53"
              required
              aria-label="Telefon raqamingiz"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Bepul konsultatsiya olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>

        <div class="contact-detail-list">
          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.phone}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Telefon raqam (24/7):</div>
              <a href="tel:${BRAND.phoneRaw}" style="font-size:1rem; font-weight:700; color:var(--black-950);">${BRAND.phoneFormatted}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.send}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Telegram aloqa:</div>
              <a href="${BRAND.telegramUrl}" target="_blank" rel="noopener" style="font-size:0.96rem; font-weight:700; color:var(--green-800);">${BRAND.telegramHandle}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.mapPin}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Ofis manzili:</div>
              <div style="font-size:0.9rem; font-weight:600; color:var(--black-950);">${BRAND.address}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-bento-card">
        ${BRAND.mapIframe}
      </div>
    </div>
  </section>`;
}

function renderFooter() {
  return `
  <!-- FOOTER -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/" class="brand-logo" style="color:#FFFFFF; margin-bottom:12px;">
            <span class="logo-badge">${ICONS.leaf}</span>
            <span><span style="color:var(--green-300);">Eco</span> Landshaft</span>
          </a>
          <p style="font-size:0.82rem; color:rgba(255,255,255,0.68); margin-bottom:14px;">
            O'zbekistonda gazon ekish, sun'iy va tabiiy rulonli gazon sotish, mini-futbol stadionlari hamda bolalar rezina maydonchalarini qurish.
          </p>
          <div style="font-size:0.82rem; color:var(--green-300); font-weight:600;">
            ${BRAND.address}<br/>
            <a href="tel:${BRAND.phoneRaw}">${BRAND.phoneFormatted}</a> • <a href="${BRAND.telegramUrl}" target="_blank" rel="noopener">${BRAND.telegramHandle}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Xizmatlar</h4>
          <div class="footer-links">
            ${SERVICES.map((s) => `<a href="${s.url}">${s.shortName}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="footer-col">
          <h4>Do'kon va bo'limlar</h4>
          <div class="footer-links">
            <a href="/katalog/">Do'kon (barcha tovarlar)</a>
            <a href="/katalog/suniy-gazon/">Sun'iy gazon katalogi</a>
            <a href="/katalog/rulonli-gazon/">Tabiiy rulonli gazon</a>
            <a href="/biz-haqimizda/">Biz haqimizda</a>
            <a href="/blog/">Blog</a>
            <a href="/boglanish/">Bog'lanish</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Viloyatlar</h4>
          <div class="footer-links">
            ${REGIONS.map((r) => `<a href="${r.url}">${r.name}da gazon va stadion</a>`).join('\n            ')}
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 <strong>${BRAND.name} (ecolandshaft.uz)</strong>. Barcha huquqlar himoyalangan.</div>
        <div>To'lov: naqd, Uzcard/Humo, perechisleniye va muddatli to'lov</div>
      </div>
    </div>
  </footer>

  <!-- QUICK PHONE-ONLY MODAL -->
  <div class="modal-backdrop" id="quickLeadModal" role="dialog" aria-modal="true" aria-labelledby="modalLeadTitle">
    <div class="modal-glass-box">
      <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Yopish">✕</button>
      <span class="outline-pill-tag">BEPUL KONSULTATSIYA</span>
      <h3 id="modalLeadTitle" style="font-size:1.28rem; font-weight:800; margin:10px 0 6px;">
        Bepul konsultatsiya va smeta
      </h3>
      <p id="modalLeadSub" style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:16px;">
        Faqat telefon raqamingizni qoldiring — mutaxassisimiz 15 daqiqa ichida bog'lanadi.
      </p>
      <form class="phone-only-form js-phone-form" data-context="Modal buyurtma">
        <input
          type="tel"
          class="phone-input-pill"
          placeholder="+998 (__) ___-__-__"
          required
          aria-label="Telefon raqamingiz"
        />
        <button type="submit" class="btn-pill-black-full">
          <span>Yuborish</span>
          <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
        </button>
      </form>
    </div>
  </div>

  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function renderProductCards(list = PRODUCTS) {
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
            ${p.retail.toLocaleString('ru-RU')} so'm/${p.unit}
            <small class="js-price-note">Optom: ${p.wholesale.toLocaleString('ru-RU')} so'm/${p.unit}</small>
          </div>
          <button
            type="button"
            class="btn-buy-quick js-open-modal"
            data-title="Buyurtma: ${p.name}"
            data-sub="Telefon raqamingizni kiriting — kerakli kvadratura bo'yicha hisoblab yetkazib beramiz."
          >
            <span>Buyurtma</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </article>`).join('\n');
}

/* ==========================================================================
   PAGE 1: HOME PAGE (/index.html)
   ========================================================================== */
function buildHomePage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BRAND.domain}/#localbusiness`,
        name: BRAND.name,
        url: BRAND.domain,
        telephone: BRAND.phoneFormatted,
        priceRange: '9000 UZS - 3560000 UZS',
        address: {
          '@type': 'PostalAddress',
          streetAddress: "Samarqand darvoza ko'chasi 2-uy",
          addressLocality: 'Toshkent',
          addressCountry: 'UZ'
        },
        sameAs: [BRAND.telegramUrl]
      }
    ]
  };

  return `${renderHead({
    title: "Eco Landshaft — Gazon ekish, sun'iy va rulonli gazon sotish, stadion va bolalar maydonchasi qurish | ecolandshaft.uz",
    description: "Toshkent va O'zbekiston bo'ylab sun'iy va rulonli gazon sotish (9 000 so'm/m² dan), gazon ekish, mini-futbol stadionlari, bolalar maydonchasi va EPDM rezina qoplamalar qurish. Bepul konsultatsiya: +998-97-783-8253.",
    keywords: "gazon qilish, suniy gazon toshkent, rulonli gazon narxi, gazon ekish xizmati, stadion qurish, mini futbol maydonchasi qurish, bolalar maydonchasi qurish, rezina qoplama toshkent, landshaft dizayn, avtopoliv hunter",
    canonicalPath: '/',
    schemaJson
  })}
<body>
  ${renderHeader('/')}

  <main class="container">
    <!-- SINGLE UNIFIED MINIMALIST HERO SECTION -->
    <section class="unified-hero-section" aria-label="Asosiy ekran">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">🏆 O'ZBEKISTON BO'YLAB GAZON VA SPORT QURILISH MARKAZI</span>
            <span class="glass-pill-tag">Rasmiy kafolat</span>
          </div>
          <h1>
            Professional gazon yotqizish, <span>landshaft dizayn va sport maydonchalari</span> qurilishi
          </h1>
          <p class="unified-hero-lead">
            O'zbekiston bo'ylab sun'iy va tabiiy gazon yetkazib berish hamda o'rnatish, yashil dekoratsiyalar, rezina maydonlar qurish. "pod klyuch" holatda.
          </p>

          <div class="hero-action-btns">
            <a href="#servicesSection" class="btn-primary-white">
              <span>Xizmatlarimizni ko'rish</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/katalog/" class="btn-secondary-glass">
              <span>Gazon do'koniga o'tish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>

          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>10+ yil</strong>
              <span>Amaliy tajriba</span>
            </div>
            <div class="hero-metric-item">
              <strong>250 000+ m²</strong>
              <span>Topshirilgan maydon</span>
            </div>
            <div class="hero-metric-item">
              <strong>1-qo'ldan</strong>
              <span>Optom va chakana</span>
            </div>
            <div class="hero-metric-item">
              <strong>12 viloyat</strong>
              <span>Tezkor yetkazish</span>
            </div>
          </div>
        </div>

        <!-- Minimalist Liquid Glass Consultation Form Card -->
        <div class="hero-glass-card">
          <span class="outline-pill-tag">BEPUL KONSULTATSIYA</span>
          <h2>15 daqiqada bepul maslahat va smeta oling</h2>
          <p>
            Faqat telefon raqamingizni qoldiring — mutaxassisimiz bog'lanib, barcha narxlarni tushuntirib beradi.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Bosh sahifa Hero — Bepul konsultatsiya">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Telefon raqamingiz"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Bepul maslahat olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
          <div class="hero-glass-perks">
            <span>• Ob'ektga o'lchovchi chiqishi — Bepul</span>
            <span>• Gazon va EPDM rezina namunalari — Bepul</span>
          </div>
        </div>
      </div>
    </section>

    ${renderServicesGridSection()}

    <!-- ====================================================================
         SECTION 2: E-COMMERCE — GAZON VA QOPLAMALAR DO'KONI
         ==================================================================== -->
    <section class="section-block" id="ecommerceSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ONLAYN DO'KON</span>
          <h2 class="section-title">
            Sun'iy va tabiiy rulonli gazon — <span>optom va chakana</span>
          </h2>
          <p class="section-desc">
            10–50 mm sun'iy chimlar, pitomnikdan yangi kesilgan rulonli gazonlar, Daniya urug'lari va rezina qoplamalar.
          </p>
        </div>
        <div>
          <a href="/katalog/" class="nav-pill-btn phone-cta">
            <span>Barcha mahsulotlar</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </a>
        </div>
      </div>

      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs" role="tablist">
          <button type="button" class="ecom-tab-btn active" data-filter="all">Barchasi</button>
          <button type="button" class="ecom-tab-btn" data-filter="suniy">Sun'iy gazon</button>
          <button type="button" class="ecom-tab-btn" data-filter="rulonli">Rulonli gazon</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">Gazon urug'lari</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">Rezina plitka</button>
        </div>

        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <div class="price-mode-toggle" aria-label="Narx turini tanlash">
            <button type="button" class="price-mode-btn active" data-mode="retail">Chakana</button>
            <button type="button" class="price-mode-btn" data-mode="wholesale">Optom (1-qo'ldan)</button>
          </div>
          <button
            type="button"
            class="nav-pill-btn js-open-modal"
            style="background:var(--green-50); color:var(--green-800);"
            data-title="Optom prayc-listni olish"
            data-sub="Telefon raqamingizni kiriting — ulgurji prayc-listni Telegram orqali yuboramiz."
          >
            <span>Optom prayc-list</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCards(PRODUCTS)}
      </div>
    </section>

    ${renderSmartCalculator('suniy-gazon')}

    ${renderPortfolioSection()}

    ${renderRegionsHubSection()}

    <!-- SEO FAQ SECTION -->
    <section class="section-block" id="faqSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">KO'P BERILADIGAN SAVOLLAR</span>
          <h2 class="section-title">
            Mijozlarimiz so'raydigan <span>asosiy savollar</span>
          </h2>
        </div>
      </div>

      <div class="faq-grid">
        <details class="faq-item" open>
          <summary>
            <span>1 m² sun'iy va tabiiy rulonli gazon narxi qancha?</span>
            <span>+</span>
          </summary>
          <p>
            Tabiiy rulonli gazon narxi hajmiga qarab <strong>9 000 – 30 000 so'm/m²</strong>. Sun'iy gazon esa vors balandligiga (10–50 mm) qarab <strong>48 800 – 148 000 so'm/m²</strong>.
          </p>
        </details>

        <details class="faq-item" open>
          <summary>
            <span>Mini-futbol stadionini qancha muddatda qurib berasizlar?</span>
            <span>+</span>
          </summary>
          <p>
            Standart 20×40 m (800 m²) mini-futbol maydonini drenaj, panjara setka, LED yoritish va 50mm FIFA gazon bilan birga <strong>15–25 kunda</strong> kalit topshirish sharti bilan bitiramiz.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>Bolalar maydonchasi rezina qoplamasiga qancha kafolat beriladi?</span>
            <span>+</span>
          </summary>
          <p>
            Barcha choklarsiz SBR va EPDM kauchuk qoplamalarimizga shartnoma asosida <strong>12 oylik rasmiy kafolat</strong> beriladi.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>Viloyatlarga yetkazib berish va o'rnatish xizmati bormi?</span>
            <span>+</span>
          </summary>
          <p>
            Ha, Toshkent omborimizdan barcha viloyatlarga 24 soatda gazon yetkazib beramiz va brigadamiz joyiga borib qurib topshiradi.
          </p>
        </details>
      </div>
    </section>

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 2: E-COMMERCE CATALOG PAGES
   ========================================================================== */
function buildCatalogPage({ subpath = '/katalog/', title, metaDesc, h1, subtitle, defaultFilter = 'all' }) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: `${BRAND.domain}${subpath}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords: "suniy gazon toshkent, suniy chim narxi, rulonli gazon narxlari, tayyor gazon sotish, gazon optom 1-qoldan, искусственный газон ташкент, рулонный газон купить",
    canonicalPath: subpath,
    schemaJson
  })}
<body>
  ${renderHeader(subpath)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <a href="/katalog/">Do'kon</a>
      ${subpath !== '/katalog/' ? `<span>/</span><span style="color:var(--green-800);">${h1}</span>` : ''}
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">ULGURJI VA CHAKANA DO'KON</span>
            <span class="glass-pill-tag">Rasmiy kafolat</span>
          </div>
          <h1>${h1}</h1>
          <p class="unified-hero-lead">${subtitle}</p>
          <div class="hero-action-btns">
            <a href="/katalog/suniy-gazon/" class="btn-primary-white">
              <span>Sun'iy gazon katalogi</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
            <a href="/katalog/rulonli-gazon/" class="btn-secondary-glass">
              <span>Tabiiy rulonli gazon</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">OPTOM PRAYC VA NAMUNA</span>
          <h2>Bepul gazon namunalari va optom prayc-list oling</h2>
          <p>
            Faqat telefon raqamingizni qoldiring — 10mm dan 50mm gacha sun'iy gazon va tabiiy chim narxlarini yuboramiz.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Do'kon sahifasi — Optom prayc">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Telefon raqamingiz" />
            <button type="submit" class="btn-pill-black-full">
              <span>Prayc-list olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs">
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'all' ? 'active' : ''}" data-filter="all">Barcha tovarlar</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'suniy' ? 'active' : ''}" data-filter="suniy">Sun'iy gazon (10–50 mm)</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'rulonli' ? 'active' : ''}" data-filter="rulonli">Tabiiy rulonli gazon</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">Gazon urug'lari</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">Rezina va plitka</button>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">Chakana</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">Optom (1-qo'ldan)</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCards(PRODUCTS)}
      </div>
    </section>

    ${renderSmartCalculator(defaultFilter === 'rulonli' ? 'rulonli-gazon' : 'suniy-gazon')}

    ${renderRegionsHubSection()}

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 3: INDIVIDUAL SERVICE LANDING PAGES (6 PAGES)
   ========================================================================== */
function buildServicePage(service) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND.name,
      telephone: BRAND.phoneFormatted,
      address: BRAND.address
    },
    description: service.metaDesc
  };

  const isRubberPage = service.slug === 'rezina-qoplama-va-bolalar-maydonchalari';

  const rubberConstructorHtml = isRubberPage
    ? `
      <section class="section-block">
        <div class="comparison-table-wrap">
          <span class="section-eyebrow">RANG VA QALINLIK KONSTRUKTORI</span>
          <h2 class="section-title" style="margin-bottom:12px;">
            Bolalar maydonchasi uchun EPDM/SBR <span>rangini tanlang</span>
          </h2>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:center;">
            <div>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">
                Quyoshda o'chmaydigan EPDM va SBR kauchuk granulalari ranglari:
              </p>
              <div class="swatch-row">
                <button type="button" class="color-swatch active" style="background:#166534;" data-color="#166534" data-name="Zumrad yashil" aria-label="Zumrad yashil"></button>
                <button type="button" class="color-swatch" style="background:#B91C1C;" data-color="#B91C1C" data-name="Terrakota qizil" aria-label="Terrakota qizil"></button>
                <button type="button" class="color-swatch" style="background:#1D4ED8;" data-color="#1D4ED8" data-name="Moviy okean" aria-label="Moviy okean"></button>
                <button type="button" class="color-swatch" style="background:#D97706;" data-color="#D97706" data-name="Quyoshli sariq" aria-label="Quyoshli sariq"></button>
                <button type="button" class="color-swatch" style="background:#7C3AED;" data-color="#7C3AED" data-name="Binafsha" aria-label="Binafsha"></button>
                <button type="button" class="color-swatch" style="background:#374151;" data-color="#374151" data-name="Grafit qora" aria-label="Grafit qora"></button>
              </div>
              <div style="font-size:0.88rem; font-weight:700; margin-top:8px;">
                Tanlangan rang: <span id="rubberSelectedColorName" style="color:var(--green-800);">Zumrad yashil</span>
              </div>
            </div>
            <div
              id="rubberPreviewSurface"
              style="height:160px; border-radius:20px; background:#166534; color:#FFFFFF; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; transition: background 0.3s;"
            >
              <strong style="font-size:1.1rem;">Choklarsiz EPDM / SBR qoplama</strong>
              <span style="font-size:0.8rem; opacity:0.88; margin-top:4px;">Qalinlik: 10 • 15 • 20 • 30 • 40 mm</span>
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
    schemaJson
  })}
<body>
  ${renderHeader(service.url)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <a href="/#servicesSection">Xizmatlar</a>
      <span>/</span>
      <span style="color:var(--green-800);">${service.shortName}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner" style="background: linear-gradient(115deg, rgba(7, 31, 19, 0.92) 0%, rgba(14, 58, 36, 0.84) 100%), url('${service.img}') center/cover no-repeat;">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${service.clusterTag}</span>
            <span class="glass-pill-tag">Rasmiy kafolat</span>
          </div>
          <h1>${service.h1}</h1>
          <p class="unified-hero-lead">${service.shortDesc}</p>
          <ul class="usp-check-list" style="margin-bottom:24px;">
            ${service.usps.map((u) => `<li style="color:#FFFFFF;"><span class="check-dot" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">${ICONS.check}</span><span>${u}</span></li>`).join('')}
          </ul>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Narxni hisoblash</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="tel:${BRAND.phoneRaw}" class="btn-secondary-glass">
              <span>${BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">BEPUL KONSULTATSIYA</span>
          <h2>${service.shortName} bo'yicha bepul o'lchov va smeta</h2>
          <p>
            Faqat telefon raqamingizni qoldiring — 15 daqiqa ichida bog'lanib, aniq smeta beramiz.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Xizmat sahifasi: ${service.shortName}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Telefon raqamingiz" />
            <button type="submit" class="btn-pill-black-full">
              <span>Bepul maslahat olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${rubberConstructorHtml}

    <section class="section-block">
      <div class="comparison-table-wrap">
        <span class="section-eyebrow">NARXLAR VA TAQQOSLASH</span>
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
          <span class="section-eyebrow">ISH TARTIBI</span>
          <h2 class="section-title">Ishlar <span>4 bosqichda</span> bajariladi</h2>
        </div>
      </div>
      <div class="products-grid">
        ${service.steps.map((st) => `
        <div class="bento-side-card">
          <div>
            <span class="section-eyebrow">${st.num}-BOSQICH</span>
            <h3 style="font-size:1.02rem; font-weight:700; margin:8px 0;">${st.title}</h3>
            <p style="font-size:0.82rem; color:var(--text-secondary);">${st.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </section>

    ${renderSmartCalculator(service.calcKey)}

    ${renderPortfolioSection()}

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">SAVOL VA JAVOBLAR</span>
          <h2 class="section-title">Ko'p beriladigan <span>savollar</span></h2>
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

    ${renderRegionsHubSection()}

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 4: REGIONAL PROGRAMMATIC SEO PAGES
   ========================================================================== */
function buildRegionPage(region) {
  const title = `${region.locative} sun'iy va rulonli gazon optom, stadion va bolalar maydonchasi qurish — Eco Landshaft`;
  const metaDesc = `${region.name} viloyati (${region.cities}) bo'ylab sun'iy gazon, rulonli chim va gazon urug'larini yetkazib berish. ${region.locative} mini-futbol stadioni va EPDM rezina maydonchalar qurish.`;
  const keywords = `suniy gazon ${region.slug}, ${region.name.toLowerCase()} gazon narxi, ${region.name.toLowerCase()} stadion qurish, mini futbol maydoni ${region.name.toLowerCase()}, rezina qoplama ${region.name.toLowerCase()}`;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${region.locative} gazon sotish, stadion va bolalar maydonchasi qurish`,
    areaServed: `${region.name} viloyati`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords,
    canonicalPath: region.url,
    schemaJson
  })}
<body>
  ${renderHeader(region.url)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <a href="/#regionsSection">Hududlar</a>
      <span>/</span>
      <span style="color:var(--green-800);">${region.name} viloyati</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${region.name.toUpperCase()} VILOYATI</span>
            <span class="glass-pill-tag">Yetkazish: ${region.deliveryTime}</span>
          </div>
          <h1>
            ${region.locative} <span>gazon ekish, stadion va rezina maydonlar</span> qurish
          </h1>
          <p class="unified-hero-lead">${region.desc}</p>
          <p style="font-size:0.84rem; color:var(--green-300); font-weight:500; margin-bottom:22px;">
            Shahar va tumanlar: ${region.cities}
          </p>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Narxni hisoblash</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/katalog/" class="btn-secondary-glass">
              <span>Do'konni ko'rish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">${region.name.toUpperCase()} BO'YICHA</span>
          <h2>${region.name}ga yetkazib berish va qurish smetasi</h2>
          <p>
            Faqat telefon raqamingizni qoldiring — ${region.name} viloyatiga yetkazib berish va qurish narxini hisoblab beramiz.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Viloyat buyurtmasi: ${region.name}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Telefon raqamingiz" />
            <button type="submit" class="btn-pill-black-full">
              <span>Bepul maslahat olish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderServicesGridSection()}

    ${renderSmartCalculator('stadion-qurish')}

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 5: BIZ HAQIMIZDA (/biz-haqimizda/index.html)
   ========================================================================== */
function buildAboutPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Biz haqimizda — Eco Landshaft',
    url: `${BRAND.domain}/biz-haqimizda/`
  };

  return `${renderHead({
    title: "Biz haqimizda — Eco Landshaft kompaniyasi | 10 yillik tajriba",
    description: "Eco Landshaft (ecolandshaft.uz) — O'zbekistonda gazon ekish, sun'iy va rulonli gazon savdosi, stadion va bolalar rezina maydonchalarini qurish kompaniyasi.",
    keywords: 'eco landshaft haqida, gazon kompaniyasi toshkent, stadion quruvchi korxona, landshaft dizayn studiyasi',
    canonicalPath: '/biz-haqimizda/',
    schemaJson
  })}
<body>
  ${renderHeader('/biz-haqimizda/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <span style="color:var(--green-800);">Biz haqimizda</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">ECO LANDSHAFT HAQIDA</span>
            <span class="glass-pill-tag">Rasmiy kafolat</span>
          </div>
          <h1>
            Zamonaviy <span>yashil hududlar va sport maydonlari</span> bunyodkori
          </h1>
          <p class="unified-hero-lead">
            10 yildan ortiq vaqt davomida xonadonlar, TJMlar, maktablar va tadbirkorlar uchun gazon ekish, stadion qurish hamda rezina maydonlar yotqizish xizmatlarini ko'rsatib kelmoqdamiz.
          </p>
          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>35+ nafar</strong>
              <span>Mutaxassislar</span>
            </div>
            <div class="hero-metric-item">
              <strong>250+ ta</strong>
              <span>Yirik ob'ektlar</span>
            </div>
            <div class="hero-metric-item">
              <strong>50 ga</strong>
              <span>Gazon pitomnigi</span>
            </div>
            <div class="hero-metric-item">
              <strong>100%</strong>
              <span>Shartnoma kafolati</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">HAMKORLIK</span>
          <h2>Mutaxassis bilan bog'lanish</h2>
          <p>
            Telefon raqamingizni qoldiring — 15 daqiqa ichida siz bilan bog'lanamiz.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Biz haqimizda sahifasi">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Telefon raqamingiz" />
            <button type="submit" class="btn-pill-black-full">
              <span>Bog'lanish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderPortfolioSection()}

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 6: BLOG PAGE (/blog/index.html)
   ========================================================================== */
function buildBlogPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Eco Landshaft foydali blog va maqolalar',
    url: `${BRAND.domain}/blog/`
  };

  return `${renderHead({
    title: "Blog: gazon parvarishi, stadion qurish va landshaft sirlari | Eco Landshaft",
    description: "Agronom va muhandislarimizdan maqolalar: rulonli gazon tanlash, mini-futbol stadioni qurish, EPDM rezina qoplama va Hunter avtopoliv bo'yicha qo'llanmalar.",
    keywords: 'gazon parvarishi, stadion qurish biznes reja, rulonli gazon narxi, epdm rezina farqi, landshaft blog',
    canonicalPath: '/blog/',
    schemaJson
  })}
<body>
  ${renderHeader('/blog/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <span style="color:var(--green-800);">Blog</span>
    </nav>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">FOYDALI MAQOLALAR</span>
          <h1 class="section-title">
            Gazon, landshaft va sport qurilishi <span>blogi</span>
          </h1>
          <p class="section-desc">
            Agronom va muhandislarimiz tomonidan tayyorlangan amaliy tavsiyalar hamda hisob-kitoblar.
          </p>
        </div>
      </div>

      <div class="services-bento-grid">
        ${BLOG_POSTS.map((post) => `
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
              <span>Batafsil o'qish</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </article>`).join('\n')}
      </div>
    </section>

    ${renderSmartCalculator('suniy-gazon')}

    ${renderContactAndMapSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   PAGE 7: BOG'LANISH PAGE (/boglanish/index.html)
   ========================================================================== */
function buildContactPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: "Bog'lanish — Eco Landshaft",
    url: `${BRAND.domain}/boglanish/`
  };

  return `${renderHead({
    title: "Bog'lanish va manzil: Toshkent sh., Samarqand darvoza ko'chasi 2-uy | Eco Landshaft",
    description: "Eco Landshaft ofisi bilan bog'lanish: +998-97-783-8253, Telegram t.me/+998977838253. Bepul konsultatsiya va ob'ektga o'lchovchi chaqirish.",
    keywords: 'eco landshaft telefon, samarqand darvoza 2-uy, gazon toshkent manzil, bepul konsultatsiya gazon',
    canonicalPath: '/boglanish/',
    schemaJson
  })}
<body>
  ${renderHeader('/boglanish/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/">Bosh sahifa</a>
      <span>/</span>
      <span style="color:var(--green-800);">Bog'lanish</span>
    </nav>

    ${renderContactAndMapSection()}

    ${renderRegionsHubSection()}
  </main>

  ${renderFooter()}`;
}

/* ==========================================================================
   WRITE ALL FILES TO DISK
   ========================================================================== */
function writePage(relPath, htmlContent) {
  const fullPath = path.join(ROOT_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, htmlContent, 'utf8');
  console.log(`Generated: ${relPath}`);
}

function buildAll() {
  const allUrls = [];

  writePage('index.html', buildHomePage());
  allUrls.push('/');

  writePage(
    'katalog/index.html',
    buildCatalogPage({
      subpath: '/katalog/',
      title: "Sun'iy va rulonli gazon do'koni — optom va chakana narxlar Toshkentda | Eco Landshaft",
      metaDesc: "Ulgurji (optom) va chakana narxda sun'iy gazon (10mm–50mm), tabiiy rulonli gazon, Daniya urug'lari va EPDM rezina qoplamalar do'koni.",
      h1: "Sun'iy va tabiiy (rulonli) gazon do'koni",
      subtitle: "10 mm dan 50 mm gacha landshaft va FIFA sport chimi, pitomnikdan yangi kesilgan rulonli gazon hamda DLF Daniya urug'lari.",
      defaultFilter: 'all'
    })
  );
  allUrls.push('/katalog/');

  writePage(
    'katalog/suniy-gazon/index.html',
    buildCatalogPage({
      subpath: '/katalog/suniy-gazon/',
      title: "Sun'iy gazon Toshkentda — optom va chakana sotib olish (48 800 so'm/m² dan) | Eco Landshaft",
      metaDesc: "Hovli, kafe, ofis va futbol stadionlari uchun 10mm, 20mm, 30mm, 40mm va 50mm sun'iy gazon (sun'iy chim) optom va chakana narxda.",
      h1: "Sun'iy gazon katalogi (10 mm – 50 mm)",
      subtitle: "Landshaft, hovli, restoran va FIFA mini-futbol maydonlari uchun quyoshda o'chmaydigan sertifikatlangan sun'iy chimlar.",
      defaultFilter: 'suniy'
    })
  );
  allUrls.push('/katalog/suniy-gazon/');

  writePage(
    'katalog/rulonli-gazon/index.html',
    buildCatalogPage({
      subpath: '/katalog/rulonli-gazon/',
      title: "Rulonli gazon narxlari Toshkentda — pitomnikdan tabiiy tayyor gazon | Eco Landshaft",
      metaDesc: "Toshkent pitomnigidan bugun kesilgan 100% tabiiy rulonli gazon (tayyor chim) sotish va yotqizish. 9 000 – 30 000 so'm/m².",
      h1: "Tabiiy rulonli gazon — pitomnikdan tayyor chim",
      subtitle: "Zich ildiz tizimiga ega 2 yillik tayyor rulonli gazon: hovlingiz 1 kunda zumraddek yashil gilamga aylanadi.",
      defaultFilter: 'rulonli'
    })
  );
  allUrls.push('/katalog/rulonli-gazon/');

  SERVICES.forEach((service) => {
    const relFile = service.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildServicePage(service));
    allUrls.push(service.url);
  });

  REGIONS.forEach((region) => {
    const relFile = region.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildRegionPage(region));
    allUrls.push(region.url);
  });

  writePage('biz-haqimizda/index.html', buildAboutPage());
  allUrls.push('/biz-haqimizda/');

  writePage('blog/index.html', buildBlogPage());
  allUrls.push('/blog/');

  writePage('boglanish/index.html', buildContactPage());
  allUrls.push('/boglanish/');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${BRAND.domain}${u}</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.9'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('Generated: sitemap.xml');
}

buildAll();
