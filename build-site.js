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
   ROUTE MAP & MULTI-LANGUAGE URL MAPPINGS (UZ / UZ-KR / RU)
   ========================================================================== */
const ROUTE_MAP = [
  { id: 'home', uz: '/', 'uz-kr': '/uz-kr/', ru: '/ru/' },
  { id: 'katalog', uz: '/katalog/', 'uz-kr': '/uz-kr/katalog/', ru: '/ru/katalog/' },
  { id: 'katalog-suniy', uz: '/katalog/suniy-gazon/', 'uz-kr': '/uz-kr/katalog/suniy-gazon/', ru: '/ru/katalog/iskusstvennyy-gazon/' },
  { id: 'katalog-rulonli', uz: '/katalog/rulonli-gazon/', 'uz-kr': '/uz-kr/katalog/rulonli-gazon/', ru: '/ru/katalog/rulonnyy-gazon/' },
  { id: 'service-gazon', uz: '/xizmatlar/gazon-ekish-va-yotqizish/', 'uz-kr': '/uz-kr/xizmatlar/gazon-ekish-va-yotqizish/', ru: '/ru/uslugi/ukladka-i-posev-gazona/' },
  { id: 'service-stadion', uz: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/', 'uz-kr': '/uz-kr/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/', ru: '/ru/uslugi/stroitelstvo-futbolnyh-poley-i-kortov/' },
  { id: 'service-rezina', uz: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/', 'uz-kr': '/uz-kr/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/', ru: '/ru/uslugi/rezinovye-pokrytiya-i-detskie-ploshchadki/' },
  { id: 'service-landshaft', uz: '/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/', 'uz-kr': '/uz-kr/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/', ru: '/ru/uslugi/landshaftnyy-dizayn-i-ozelenenie/' },
  { id: 'service-avtopoliv', uz: '/xizmatlar/avtomatik-sugorish-tizimi/', 'uz-kr': '/uz-kr/xizmatlar/avtomatik-sugorish-tizimi/', ru: '/ru/uslugi/avtomaticheskiy-poliv-hunter/' },
  { id: 'service-fitodekor', uz: '/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/', 'uz-kr': '/uz-kr/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/', ru: '/ru/uslugi/vertikalnoe-ozelenenie-fitodekor/' },
  { id: 'region-samarkand', uz: '/samarkand/', 'uz-kr': '/uz-kr/samarkand/', ru: '/ru/samarkand/' },
  { id: 'region-fergana', uz: '/fergana/', 'uz-kr': '/uz-kr/fergana/', ru: '/ru/fergana/' },
  { id: 'region-andijan', uz: '/andijan/', 'uz-kr': '/uz-kr/andijan/', ru: '/ru/andizhan/' },
  { id: 'region-bukhara', uz: '/bukhara/', 'uz-kr': '/uz-kr/bukhara/', ru: '/ru/buhara/' },
  { id: 'region-kashkadarya', uz: '/kashkadarya/', 'uz-kr': '/uz-kr/kashkadarya/', ru: '/ru/kashkadarya/' },
  { id: 'region-namangan', uz: '/namangan/', 'uz-kr': '/uz-kr/namangan/', ru: '/ru/namangan/' },
  { id: 'about', uz: '/biz-haqimizda/', 'uz-kr': '/uz-kr/biz-haqimizda/', ru: '/ru/o-nas/' },
  { id: 'blog', uz: '/blog/', 'uz-kr': '/uz-kr/blog/', ru: '/ru/blog/' },
  { id: 'contact', uz: '/boglanish/', 'uz-kr': '/uz-kr/boglanish/', ru: '/ru/kontakty/' }
];

function getRoute(pathOrUrl) {
  if (!pathOrUrl) return ROUTE_MAP[0];
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  const norm = p.endsWith('/') ? p : `${p}/`;
  return ROUTE_MAP.find((r) => r.uz === norm || r['uz-kr'] === norm || r.ru === norm) || {
    uz: norm.replace(/^\/(uz-kr|ru)(?=\/|$)/, '') || '/',
    'uz-kr': `/uz-kr${norm.replace(/^\/(uz-kr|ru)(?=\/|$)/, '') || '/'}`,
    ru: `/ru${norm.replace(/^\/(uz-kr|ru)(?=\/|$)/, '') || '/'}`
  };
}

/* ==========================================================================
   SHARED HTML COMPONENTS
   ========================================================================== */
function renderHead({ title, description, keywords, canonicalPath, schemaJson, lang = 'uz', basePath }) {
  const currentPath = canonicalPath || basePath || '/';
  const route = getRoute(basePath || currentPath);
  const canonicalUrl = `${BRAND.domain}${canonicalPath}`;
  const uzUrl = `${BRAND.domain}${route.uz}`;
  const uzKrUrl = `${BRAND.domain}${route['uz-kr']}`;
  const ruUrl = `${BRAND.domain}${route.ru}`;
  const ogLocale = lang === 'ru' ? 'ru_RU' : 'uz_UZ';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Hreflang SEO tags for Multi-Language URLs -->
  <link rel="alternate" hreflang="uz" href="${uzUrl}" />
  <link rel="alternate" hreflang="uz-Latn" href="${uzUrl}" />
  <link rel="alternate" hreflang="uz-Cyrl" href="${uzKrUrl}" />
  <link rel="alternate" hreflang="ru" href="${ruUrl}" />
  <link rel="alternate" hreflang="x-default" href="${uzUrl}" />

  <!-- Open Graph / Social SEO -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${ogLocale}" />
  <meta property="og:locale:alternate" content="uz_UZ" />
  <meta property="og:locale:alternate" content="ru_RU" />
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

  const route = getRoute(activePath);
  const uzHref = route.uz;
  const uzKrHref = route['uz-kr'];
  const ruHref = route.ru;

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
            <a href="${uzHref}" class="lang-option active" data-lang="uz-Latn" data-label="O'zbek (Lotin)">
              <span>O'zbek (Lotin)</span>
              <span class="lang-code">UZ</span>
            </a>
            <a href="${uzKrHref}" class="lang-option" data-lang="uz-Cyrl" data-label="Ўзбек (Кирилл)">
              <span>Ўзбек (Кирилл)</span>
              <span class="lang-code">ЎЗ</span>
            </a>
            <a href="${ruHref}" class="lang-option" data-lang="ru" data-label="Русский">
              <span>Русский</span>
              <span class="lang-code">RU</span>
            </a>
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
   UZBEK CYRILLIC (/uz-kr/) STATIC PAGE GENERATOR
   ========================================================================== */
function uzLatnToCyrl(text) {
  if (!text || !/[A-Za-z]/.test(text)) return text;
  const preserved = [];
  const preservePattern = /(\b(?:ECO LANDSHAFT|Eco Landshaft|Eco|ecolandshaft\.uz|EcoGrass|Premium Lush|Royal Velvet|FIFA Pro|FIFA|EPDM|SBR|LED|Wi-Fi|3D|Hunter|Rain Bird|DLF Trifolium|DLF|Real Touch|B2B|B2G|UV|Dtex|MP Rotator|PGP|Uzcard|Humo|Telegram|Tuya Smaragd|Green Elite|Hard)\b|https?:\/\/[^\s"<>]+|t\.me\/[^\s"<>]+|&[a-zA-Z0-9#]+;)/g;
  let s = text.replace(preservePattern, (m) => {
    preserved.push(m);
    return `\uE000${preserved.length - 1}\uE001`;
  });

  s = s.replace(/[‘’`]/g, "'");

  const wordFixes = [
    [/\bob'ekt/gi, (m) => (m[0] === 'O' ? (m[1] === 'B' ? 'ОБЪЕКТ' : 'Объект') : 'объект')],
    [/\bme'yor/gi, (m) => (m[0] === 'M' ? 'Меъёр' : 'меъёр')],
    [/\bsun'iy/gi, (m) => (m[0] === 'S' ? (m[1] === 'U' ? 'СУНЪИЙ' : 'Сунъий') : 'сунъий')],
    [/\bta'mir/gi, (m) => (m[0] === 'T' ? 'Таъмир' : 'таъмир')],
    [/\bma'lumot/gi, (m) => (m[0] === 'M' ? 'Маълумот' : 'маълумот')],
    [/tsiya/g, 'ция'],
    [/Tsiya/g, 'Ция'],
    [/TSIYA/g, 'ЦИЯ'],
    [/byudjet/gi, (m) => (m[0] === 'B' ? 'Бюджет' : 'бюджет')],
    [/interyer/gi, (m) => (m[0] === 'I' ? 'Интерьер' : 'интерьер')],
    [/myatlik/gi, (m) => (m[0] === 'M' ? 'Мятлик' : 'мятлик')],
    [/trenajyor/gi, (m) => (m[0] === 'T' ? 'Тренажёр' : 'тренажёр')],
    [/projektor/gi, (m) => (m[0] === 'P' ? 'Прожектор' : 'прожектор')]
  ];
  wordFixes.forEach(([rgx, rep]) => {
    s = s.replace(rgx, rep);
  });

  s = s
    .replace(/O'/g, 'Ў')
    .replace(/o'/g, 'ў')
    .replace(/G'/g, 'Ғ')
    .replace(/g'/g, 'ғ');

  s = s
    .replace(/SH/g, 'Ш')
    .replace(/Sh/g, 'Ш')
    .replace(/sh/g, 'ш')
    .replace(/CH/g, 'Ч')
    .replace(/Ch/g, 'Ч')
    .replace(/ch/g, 'ч')
    .replace(/YO/g, 'Ё')
    .replace(/Yo/g, 'Ё')
    .replace(/yo/g, 'ё')
    .replace(/YU/g, 'Ю')
    .replace(/Yu/g, 'Ю')
    .replace(/yu/g, 'ю')
    .replace(/YA/g, 'Я')
    .replace(/Ya/g, 'Я')
    .replace(/ya/g, 'я')
    .replace(/YE/g, 'Е')
    .replace(/Ye/g, 'Е')
    .replace(/ye/g, 'е')
    .replace(/TS/g, 'Ц')
    .replace(/Ts/g, 'Ц')
    .replace(/ts/g, 'ц')
    .replace(/'/g, 'ъ');

  s = s.replace(/(^|[^A-Za-zА-Яа-яЎўҚқҒғҲҳЁёЮюЯяШшЧчЦцЪъ])([Ee])/g, (m, p1, eChar) => {
    return p1 + (eChar === 'E' ? 'Э' : 'э');
  });

  const charMap = {
    A: 'А', a: 'а', B: 'Б', b: 'б', D: 'Д', d: 'д', E: 'Е', e: 'е',
    F: 'Ф', f: 'ф', G: 'Г', g: 'г', H: 'Ҳ', h: 'ҳ', I: 'И', i: 'и',
    J: 'Ж', j: 'ж', K: 'К', k: 'к', L: 'Л', l: 'л', M: 'М', m: 'м',
    N: 'Н', n: 'н', O: 'О', o: 'о', P: 'П', p: 'п', Q: 'Қ', q: 'қ',
    R: 'Р', r: 'р', S: 'С', s: 'с', T: 'Т', t: 'т', U: 'У', u: 'у',
    V: 'В', v: 'в', X: 'Х', x: 'х', Y: 'Й', y: 'й', Z: 'З', z: 'з'
  };

  s = s.replace(/[A-Za-z]/g, (ch) => charMap[ch] || ch);
  s = s.replace(/\uE000(\d+)\uE001/g, (_, idx) => preserved[Number(idx)]);
  return s;
}

function convertUzHtmlToUzKr(uzHtml, basePath) {
  let html = uzHtml;
  const uzKrPath = `/uz-kr${basePath === '/' ? '/' : basePath}`;
  const uzKrFullUrl = `${BRAND.domain}${uzKrPath}`;

  // 1. Update html lang, canonical, and og:url
  html = html.replace('<html lang="uz">', '<html lang="uz-Cyrl">');
  html = html.replace(
    `<link rel="canonical" href="${BRAND.domain}${basePath}" />`,
    `<link rel="canonical" href="${uzKrFullUrl}" />`
  );
  html = html.replace(
    `<meta property="og:url" content="${BRAND.domain}${basePath}" />`,
    `<meta property="og:url" content="${uzKrFullUrl}" />`
  );

  // 2. Update JSON-LD schema strings & URLs
  html = html.replace(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/, (m, jsonRaw) => {
    try {
      const parsed = JSON.parse(jsonRaw);
      const transformSchema = (obj) => {
        if (!obj || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(transformSchema);
        const out = {};
        for (const [k, v] of Object.entries(obj)) {
          if (typeof v === 'string') {
            if (['name', 'description', 'streetAddress', 'addressLocality', 'areaServed', 'text'].includes(k)) {
              out[k] = uzLatnToCyrl(v);
            } else if (k === 'url' && v.startsWith(BRAND.domain)) {
              const p = v.slice(BRAND.domain.length) || '/';
              out[k] = `${BRAND.domain}/uz-kr${p === '/' ? '/' : p}`;
            } else {
              out[k] = v;
            }
          } else {
            out[k] = transformSchema(v);
          }
        }
        return out;
      };
      return `<script type="application/ld+json">\n${JSON.stringify(transformSchema(parsed), null, 2)}\n  </script>`;
    } catch (e) {
      return m;
    }
  });

  // 3. Update Language Switcher active state & label
  html = html.replace(
    '<span class="lang-current-label">O\'zbek (Lotin)</span>',
    '<span class="lang-current-label">Ўзбек (Кирилл)</span>'
  );
  html = html.replace(
    'class="lang-option active" data-lang="uz-Latn"',
    'class="lang-option" data-lang="uz-Latn"'
  );
  html = html.replace(
    'class="lang-option" data-lang="uz-Cyrl"',
    'class="lang-option active" data-lang="uz-Cyrl"'
  );

  // 4. Protect .lang-menu, <script>, and <style> blocks
  const protectedBlocks = [];
  const protect = (match) => {
    protectedBlocks.push(match);
    return `\uE200${protectedBlocks.length - 1}\uE201`;
  };
  html = html.replace(/<div class="lang-menu"[\s\S]*?<\/div>/g, protect);
  html = html.replace(/<script[\s\S]*?<\/script>/g, protect);
  html = html.replace(/<style[\s\S]*?<\/style>/g, protect);

  // 5. Rewrite internal links href="/..." to href="/uz-kr/..."
  html = html.replace(/href="(\/[^"]*)"/g, (m, hrefVal) => {
    if (
      hrefVal.startsWith('/assets/') ||
      hrefVal.startsWith('/uz-kr/') ||
      hrefVal.startsWith('/ru/') ||
      hrefVal.startsWith('/en/') ||
      hrefVal.startsWith('/zh/')
    ) {
      return m;
    }
    if (hrefVal === '/') return 'href="/uz-kr/"';
    return `href="/uz-kr${hrefVal}"`;
  });

  // 6. Transliterate meta descriptions, og tags, and user-facing attributes
  html = html.replace(/<meta name="description" content="([^"]*)"/g, (_, val) => `<meta name="description" content="${uzLatnToCyrl(val)}"`);
  html = html.replace(/<meta property="og:title" content="([^"]*)"/g, (_, val) => `<meta property="og:title" content="${uzLatnToCyrl(val)}"`);
  html = html.replace(/<meta property="og:description" content="([^"]*)"/g, (_, val) => `<meta property="og:description" content="${uzLatnToCyrl(val)}"`);
  html = html.replace(/\b(alt|title|aria-label|data-title|data-sub|data-context|data-name)="([^"]*)"/g, (_, attr, val) => `${attr}="${uzLatnToCyrl(val)}"`);

  // 7. Transliterate all text nodes between > and <
  html = html.replace(/>([^<]+)</g, (_, textNode) => `>${uzLatnToCyrl(textNode)}<`);

  // 8. Restore protected blocks
  html = html.replace(/\uE200(\d+)\uE201/g, (_, idx) => protectedBlocks[Number(idx)]);

  return html;
}

/* ==========================================================================
   RUSSIAN (/ru/) SEO-OPTIMIZED DATA & PAGE BUILDERS
   ========================================================================== */
const BRAND_RU = {
  ...BRAND,
  address: 'г. Ташкент, ул. Самарканд Дарвоза, дом 2',
  mapIframe: BRAND.mapIframe.replace(
    "title=\"Eco Landshaft manzili: Toshkent shahar, Samarqand darvoza ko'chasi 2-uy\"",
    'title="Адрес Eco Landshaft: г. Ташкент, ул. Самарканд Дарвоза, дом 2"'
  )
};

const SERVICES_RU = [
  {
    slug: 'ukladka-i-posev-gazona',
    url: '/ru/uslugi/ukladka-i-posev-gazona/',
    baseUrl: '/xizmatlar/gazon-ekish-va-yotqizish/',
    svgIcon: ICONS.leaf,
    shortName: 'Укладка и посев газона',
    title: 'Укладка рулонного газона и посев семян',
    metaTitle: 'Укладка рулонного газона и посев газона в Ташкенте | Цена от 15 000 сум/м² — Eco Landshaft',
    metaDesc: 'Профессиональная укладка готового рулонного газона и посев семян в Ташкенте и Узбекистане. Подготовка земли, выравнивание, удобрение и гарантия 100% приживаемости.',
    keywords: 'укладка рулонного газона ташкент, посев газона цена, посадка газона ташкент, готовый газон в рулонах укладка, подготовка почвы под газон, газон под ключ ташкент',
    h1: 'Укладка рулонного газона и профессиональный посев газона под ключ',
    priceRange: '15 000 – 25 000 сум/м²',
    basePrice: 15000,
    clusterTag: 'Укладка газона',
    calcKey: 'gazon-ekish',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Подготовка и планировка грунта, посев датских семян DLF или укладка свежесрезанного рулонного газона за 1 день с гарантией.',
    usps: [
      'Выравнивание участка, внесение удобрений и прикатка катком',
      'Теневыносливые и жаростойкие сорта семян из Дании',
      '100% гарантия всхожести и бесплатный первый покос'
    ],
    comparisonTable: {
      title: 'Сравнение посевного газона и готового рулонного газона',
      headers: ['Критерии', 'Готовый рулонный газон', 'Посев семян газона'],
      rows: [
        ['Срок готовности', 'Изумрудный газон за 1 – 2 дня', 'Всходы через 14 – 25 дней'],
        ['Стоимость (работа + материал)', '24 000 – 45 000 сум/м²', '15 000 – 25 000 сум/м²'],
        ['Устойчивость к сорнякам', 'Высокая (плотный 2-летний дерн)', 'Средняя (требуется первичный уход)'],
        ['Ввод в эксплуатацию', 'Через 7 – 10 дней', 'Через 30 – 40 дней']
      ]
    },
    steps: [
      { num: '01', title: 'Бесплатный выезд агронома', desc: 'Бесплатный осмотр объекта, анализ почвы и замер уклонов участка.' },
      { num: '02', title: 'Очистка и культивация', desc: 'Удаление сорняков и камней, фрезерование почвы на глубину 15–20 см.' },
      { num: '03', title: 'Планировка и прикатка', desc: 'Идеальное выравнивание грунта и уплотнение специальным газонным катком.' },
      { num: '04', title: 'Укладка и 1-й покос', desc: 'Укладка рулонов или посев семян с контролем агронома до первого покоса.' }
    ],
    faqs: [
      { q: 'Сколько времени занимает укладка газона на 1 сотку (100 м²)?', a: 'На подготовленное основание мы укладываем 1–3 сотки готового рулонного газона за 1 рабочий день.' },
      { q: 'Даете ли вы гарантию, что газон приживется и не пожелтеет?', a: 'Да, по договору предоставляем 100% гарантию приживаемости и бесплатно проводим первый покос.' }
    ]
  },
  {
    slug: 'stroitelstvo-futbolnyh-poley-i-kortov',
    url: '/ru/uslugi/stroitelstvo-futbolnyh-poley-i-kortov/',
    baseUrl: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/',
    svgIcon: ICONS.stadium,
    shortName: 'Строительство полей и кортов',
    title: 'Строительство футбольных полей, стадионов и теннисных кортов',
    metaTitle: 'Строительство футбольных полей и мини-стадионов в Ташкенте и Узбекистане | Теннисные корты под ключ — Eco Landshaft',
    metaDesc: 'Строительство мини-футбольных полей, стадионов и теннисных кортов под ключ в Ташкенте и областях. Дренаж, основание, 3D ограждение, LED прожекторы и искусственный газон FIFA 40–50 мм.',
    keywords: 'строительство футбольных полей ташкент, мини футбольное поле под ключ цена, строительство стадионов узбекистан, строительство теннисных кортов, искусственный газон для футбола 50 мм',
    h1: 'Строительство мини-футбольных стадионов и теннисных кортов под ключ',
    priceRange: 'от 217 000 сум/м²',
    basePrice: 217000,
    clusterTag: 'Строительство стадионов',
    calcKey: 'stadion-qurish',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Дренажное основание, металлическое ограждение, LED освещение и укладка искусственной травы FIFA 40–50 мм или акрилового покрытия корта.',
    usps: [
      'Сдача объекта «под ключ» за 15–25 дней',
      'Сертифицированный спортивный газон FIFA 40–50 мм',
      'Договор B2B / B2G, перечисление, НДС и участие в тендерах'
    ],
    comparisonTable: {
      title: 'Стандартные комплектации мини-футбольных полей и спортивных площадок',
      headers: ['Тип и размер поля', 'Площадь', 'Комплектация «под ключ»', 'Ориентировочный бюджет'],
      rows: [
        ['Мини-футбол (20 × 40 м)', '800 м²', 'Дренаж, газон FIFA 50 мм, кварцевый песок + гранулы, ворота, сетка, 8 LED прожекторов', '115 – 165 млн сум'],
        ['Мини-футбол (22 × 42 м)', '924 м²', 'Усиленный дренаж, трава 50 мм, ограждение 6 м, 12 LED прожекторов, разметка', '145 – 210 млн сум'],
        ['Большой стадион (30 × 60 м)', '1 800 м²', 'Инженерный дренаж, газон FIFA Pro, мачты освещения и полное оснащение', '240 – 330 млн сум'],
        ['Теннисный корт (18 × 36 м)', '648 м²', 'Бетон/асфальт основание, акрил Hard или трава для корта, стойки и свет', '130 – 195 млн сум']
      ]
    },
    steps: [
      { num: '01', title: 'Геодезия и смета (КП)', desc: 'Замер участка, разработка проекта и официального коммерческого предложения.' },
      { num: '02', title: 'Дренаж и щебеночное основание', desc: 'Послойная укладка щебня и клинца с уплотнением тяжелым виброкатком.' },
      { num: '03', title: 'Ограждение и LED освещение', desc: 'Монтаж металлических опор, заградительной сетки и мощных LED прожекторов.' },
      { num: '04', title: 'Газон FIFA и засыпка гранулятом', desc: 'Склейка швов двухкомпонентным клеем, врезка белой разметки, засыпка песком и крошкой.' }
    ],
    faqs: [
      { q: 'За какой срок окупается коммерческое мини-футбольное поле?', a: 'Стандартное мини-футбольное поле 20×40 м окупается в среднем за 10–16 месяцев.' },
      { q: 'Выезжаете ли вы на строительство стадионов в области Узбекистана?', a: 'Да, мы доставляем все материалы со склада в Ташкенте и строим поля под ключ во всех областях за 15–25 дней.' }
    ]
  },
  {
    slug: 'rezinovye-pokrytiya-i-detskie-ploshchadki',
    url: '/ru/uslugi/rezinovye-pokrytiya-i-detskie-ploshchadki/',
    baseUrl: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/',
    svgIcon: ICONS.shield,
    shortName: 'Детские и резиновые площадки',
    title: 'Детские площадки и бесшовное резиновое покрытие EPDM/SBR',
    metaTitle: 'Бесшовное резиновое покрытие (EPDM/SBR) и строительство детских площадок в Ташкенте — Eco Landshaft',
    metaDesc: 'Травмобезопасное бесшовное резиновое покрытие из EPDM и SBR крошки, резиновая плитка и монтаж детских игровых комплексов в Ташкенте. Гарантия 12 месяцев.',
    keywords: 'бесшовное резиновое покрытие ташкент, резиновая крошка цена, покрытие для детских площадок epdm sbr, резиновая плитка ташкент, строительство детских площадок под ключ',
    h1: 'Строительство детских площадок и укладка бесшовного резинового покрытия (EPDM/SBR)',
    priceRange: '150 000 – 250 000 сум/м²',
    basePrice: 180000,
    clusterTag: 'Резиновое покрытие',
    calcKey: 'rezina-maydon',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Ударопоглощающее резиновое покрытие EPDM/SBR и игровые комплексы для детских садов, школ, дворов ЖК и воркаут зон.',
    usps: [
      'Амортизирующий травмобезопасный слой толщиной 10–40 мм',
      'Экологичное, не скользящее и устойчивое к УФ-лучам покрытие',
      'Официальная гарантия 12 месяцев по договору'
    ],
    comparisonTable: {
      title: 'Виды резиновых покрытий и стоимость за 1 м² по толщине',
      headers: ['Тип покрытия', 'Толщина', 'Назначение', 'Цена (работа + материал)'],
      rows: [
        ['Бесшовное покрытие SBR', '10 – 15 мм', 'Беговые дорожки, воркаут, спортзалы', '150 000 – 180 000 сум/м²'],
        ['Двухслойное SBR + EPDM', '15 – 20 мм', 'Детские сады, школы, игровые площадки ЖК', '185 000 – 220 000 сум/м²'],
        ['100% премиум каучук EPDM', '20 – 40 мм', 'Премиальные детские комплексы и парки', '220 000 – 260 000 сум/м²'],
        ['Готовая резиновая плитка (500×500)', '20 – 40 мм', 'Тренажерные и игровые зоны', '160 000 – 210 000 сум/м²']
      ]
    },
    steps: [
      { num: '01', title: 'Бесплатный замер и образцы', desc: 'Проверка основания и предоставление живого каталога цветов EPDM/SBR.' },
      { num: '02', title: 'Грунтование праймером', desc: 'Очистка бетона или асфальта от пыли и нанесение полиуретанового праймера.' },
      { num: '03', title: 'Бесшовная укладка', desc: 'Смешивание гранул с полиуретановым связующим в миксере и укладка вровень.' },
      { num: '04', title: 'Монтаж игрового комплекса', desc: 'Полная полимеризация за 24 часа и установка детского игрового оборудования.' }
    ],
    faqs: [
      { q: 'Не трескается ли бесшовное резиновое покрытие зимой и в жару?', a: 'Нет, покрытия EPDM и SBR выдерживают перепады температур от -40°C до +60°C и пропускают воду.' },
      { q: 'Устанавливаете ли вы детские горки, качели и воркаут турники?', a: 'Да, вместе с резиновым покрытием мы поставляем и монтируем детские игровые комплексы и воркаут оборудование.' }
    ]
  },
  {
    slug: 'landshaftnyy-dizayn-i-ozelenenie',
    url: '/ru/uslugi/landshaftnyy-dizayn-i-ozelenenie/',
    baseUrl: '/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/',
    svgIcon: ICONS.layers,
    shortName: 'Ландшафтный дизайн 3D',
    title: 'Ландшафтный дизайн и 3D озеленение участка',
    metaTitle: 'Ландшафтный дизайн в Ташкенте — 3D проектирование и озеленение участка | Eco Landshaft',
    metaDesc: 'Услуги ландшафтного дизайна и комплексного озеленения дворов, загородных домов и коммерческих объектов в Ташкенте. 3D-визуализация, посадка крупномеров и автополив.',
    keywords: 'ландшафтный дизайн ташкент, озеленение участка ташкент, благоустройство территории, 3d проект ландшафта, посадка декоративных деревьев и кустарников',
    h1: 'Ландшафтный дизайн и комплексное озеленение территории под ключ',
    priceRange: 'Индивидуально (от 1 сотки)',
    basePrice: 49000,
    clusterTag: '3D Ландшафт',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '3D-визуализация участка, посадка декоративных деревьев и хвойных, альпийские горки, рокарии и вечернее ландшафтное освещение.',
    usps: [
      'При заказе озеленения под ключ — 3D проект бесплатно',
      'Адаптированные к климату Узбекистана декоративные растения',
      'Годовая гарантия агронома на приживаемость растений'
    ],
    comparisonTable: {
      title: 'Стили ландшафтного дизайна и пакеты реализации',
      headers: ['Стиль', 'Ключевые особенности', 'Растения', 'Сроки'],
      rows: [
        ['Модерн и минимализм', 'Четкая геометрия дорожек, изумрудный газон и линейная подсветка', 'Туя Smaragd, лаванда, сосна бонсай', '7 – 14 дней'],
        ['Классический европейский сад', 'Симметричные аллеи, цветущие кустарники и уютные зоны отдыха', 'Розы, гортензия, магнолия, голубая ель', '10 – 20 дней'],
        ['Восточный / Японский сад', 'Природный камень, сухой ручей, бонсай и атмосфера уединения', 'Сакура, японский клен, мох, бонсай', '14 – 25 дней']
      ]
    },
    steps: [
      { num: '01', title: 'Выезд архитектора', desc: 'Изучение рельефа, инсоляции и почвы, составление технического задания.' },
      { num: '02', title: '3D-визуализация', desc: 'Разработка дневных и ночных 3D рендеров вашего будущего сада и точной сметы.' },
      { num: '03', title: 'Инженерные системы', desc: 'Прокладка дренажа, автоматического полива Hunter и кабелей освещения.' },
      { num: '04', title: 'Посадка деревьев и газона', desc: 'Высадка растений, укладка рулонного газона и декор мраморной галькой.' }
    ],
    faqs: [
      { q: 'Можно ли заказать отдельно 3D проект ландшафтного дизайна?', a: 'Да. При этом, если вы доверяете реализацию озеленения нашей команде, стоимость 3D проекта возвращается (бесплатно).' },
      { q: 'Даете ли вы гарантию на посаженные деревья и кустарники?', a: 'На объектах с установленной системой автополива предоставляется официальная гарантия 1 год на все растения.' }
    ]
  },
  {
    slug: 'avtomaticheskiy-poliv-hunter',
    url: '/ru/uslugi/avtomaticheskiy-poliv-hunter/',
    baseUrl: '/xizmatlar/avtomatik-sugorish-tizimi/',
    svgIcon: ICONS.droplet,
    shortName: 'Автополив Hunter',
    title: 'Системы автоматического полива (Hunter автополив)',
    metaTitle: 'Автополив в Ташкенте — установка системы автоматического полива Hunter (США) | Eco Landshaft',
    metaDesc: 'Проектирование и монтаж систем автоматического и капельного полива газона на оборудовании Hunter и Rain Bird (США) в Ташкенте. Гарантия 2 года.',
    keywords: 'автополив ташкент, установка автополива цена, автоматический полив газона hunter, капельный полив ташкент, монтаж системы полива',
    h1: 'Установка систем автоматического полива (автополив) Hunter (США)',
    priceRange: 'от 49 000 сум/м²',
    basePrice: 49000,
    clusterTag: 'Автополив Hunter',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Умные системы автополива Hunter и Rain Bird с управлением со смартфона (Wi-Fi). Экономия воды до 45%, монтаж за 1–2 дня.',
    usps: [
      'Оригинальное оборудование Hunter и Rain Bird (США)',
      'Официальная гарантия 2 года и сервисная консервация на зиму',
      'Аккуратный монтаж даже по уже уложенному готовому газону'
    ],
    comparisonTable: {
      title: 'Сравнение ручного полива из шланга и системы автополива Hunter',
      headers: ['Показатель', 'Автополив Hunter (Wi-Fi)', 'Ручной полив шлангом'],
      rows: [
        ['Затраты времени', 'Полностью автоматически в ночное время', 'Ежедневно уходит 1.5 – 3 часа'],
        ['Равномерность полива', '98% точность орошения каждого сектора', 'Неравномерный полив, лужи и сухие пятна'],
        ['Экономия воды', 'До 45% экономии благодаря датчику дождя', 'Перерасход воды'],
        ['Деревья и цветники', 'Отдельная линия прикорневого капельного полива', 'Риск размытия корней']
      ]
    },
    steps: [
      { num: '01', title: 'Замер давления воды', desc: 'Инженер замеряет дебит источника воды и чертит гидравлическую схему.' },
      { num: '02', title: 'Укладка труб и клапанов', desc: 'Монтаж труб ПНД на глубине 30–40 см и сборка электромагнитных клапанов Hunter.' },
      { num: '03', title: 'Установка дождевателей', desc: 'Монтаж выдвижных роторов PGP и форсунок MP Rotator вровень с газоном.' },
      { num: '04', title: 'Настройка автоматики', desc: 'Программирование контроллера Wi-Fi, секторов полива и датчика погоды.' }
    ],
    faqs: [
      { q: 'Можно ли установить автополив на участке, где уже растет газон?', a: 'Да, мы аккуратно подрезаем дерн, укладываем трубопровод в узкую траншею и возвращаем газон на место без следов.' },
      { q: 'Не лопнут ли трубы автополива зимой от мороза?', a: 'Осенью наша сервисная служба проводит продувку системы компрессором (зимнюю консервацию), что полностью исключает замерзание.' }
    ]
  },
  {
    slug: 'vertikalnoe-ozelenenie-fitodekor',
    url: '/ru/uslugi/vertikalnoe-ozelenenie-fitodekor/',
    baseUrl: '/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/',
    svgIcon: ICONS.grid,
    shortName: 'Фитодекор и зеленые стены',
    title: 'Вертикальное озеленение, фитостены и стабилизированный мох',
    metaTitle: 'Вертикальное озеленение, фитостены и стабилизированный мох в Ташкенте — Eco Landshaft',
    metaDesc: 'Вертикальное озеленение офисов, ресторанов, кафе и квартир в Ташкенте: натуральный стабилизированный мох (ягель), искусственные растения Real Touch и фитостены.',
    keywords: 'вертикальное озеленение ташкент, фитостена купить, стабилизированный мох ташкент, зеленая стена из растений, фитодекор для офиса и ресторана',
    h1: 'Вертикальное озеленение, фитостены и стабилизированный мох',
    priceRange: 'от 1 850 000 сум/м²',
    basePrice: 1850000,
    clusterTag: 'Фитодекор и мох',
    calcKey: 'suniy-gazon',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85',
    shortDesc: 'Натуральный скандинавский стабилизированный мох (ягель) и премиальные зеленые стены Real Touch без полива и ухода для интерьеров.',
    usps: [
      'Стабилизированный мох сохраняет свежесть до 10 лет без полива',
      'Премиальные ботанические копии растений класса Real Touch',
      'Бесплатный 3D-макет вашей стены за 24 часа'
    ],
    comparisonTable: {
      title: 'Сравнение видов вертикального озеленения интерьера',
      headers: ['Характеристика', 'Стабилизированный мох', 'Фитостена Real Touch', 'Живая фитостена'],
      rows: [
        ['Полив и уход', 'Не требуется (0% ухода)', 'Не требуется', 'Нужен автополив и фитолампы'],
        ['Срок службы', '8 – 10 лет', '10 – 15 лет', 'Долговечно при регулярном сервисе'],
        ['Стоимость за 1 м²', '2 400 000 – 3 560 000 сум', '1 850 000 – 2 900 000 сум', '3 200 000 – 4 500 000 сум']
      ]
    },
    steps: [
      { num: '01', title: 'Бесплатный 3D-макет', desc: 'По фото и размерам вашей стены готовим дизайн-проект за 24 часа.' },
      { num: '02', title: 'Подбор фактур и оттенков', desc: 'Согласование оттенков мха и композиции растений по живым образцам.' },
      { num: '03', title: 'Сборка в мастерской', desc: 'Изготовление модульных фитопанелей в нашей мастерской за 3–7 дней.' },
      { num: '04', title: 'Чистый монтаж за 1 день', desc: 'Быстрая установка готовой фитостены без пыли и строительного мусора.' }
    ],
    faqs: [
      { q: 'Нужно ли опрыскивать или поливать стабилизированный мох?', a: 'Нет, природный сок мха заменен экологичным глицериновым составом, поэтому он остается мягким и зеленым до 10 лет без воды.' },
      { q: 'Изготавливаете ли вы логотипы компаний из мха?', a: 'Да, мы создаем объемные корпоративные эко-логотипы из мха для зон ресепшн за 3–5 дней.' }
    ]
  }
];

const PRODUCTS_RU = [
  {
    id: 'suniy-20mm',
    category: 'suniy',
    catLabel: 'Искусственный газон • ландшафт',
    name: 'Искусственный газон EcoGrass 20 мм',
    pile: '20 мм',
    stock: 'В наличии',
    retail: 62000,
    wholesale: 48800,
    unit: 'м²',
    specs: ['Ворс: 20 мм', 'Рулон: 2×25 м', 'УФ-защита: 5 лет'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-30mm',
    category: 'suniy',
    catLabel: 'Искусственный газон • дом и кафе',
    name: 'Искусственный газон Premium Lush 30 мм',
    pile: '30 мм',
    stock: 'Хит продаж',
    retail: 98000,
    wholesale: 82000,
    unit: 'м²',
    specs: ['Ворс: 30 мм', '4-цветное волокно', 'С дренажем'],
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-40mm',
    category: 'suniy',
    catLabel: 'Искусственный газон • делюкс',
    name: 'Искусственный газон Royal Velvet 40 мм',
    pile: '40 мм',
    stock: 'Из первых рук',
    retail: 125000,
    wholesale: 104000,
    unit: 'м²',
    specs: ['Ворс: 40 мм', 'Dtex: 11 000', 'Густой подшерсток'],
    img: 'https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'suniy-50mm-fifa',
    category: 'suniy',
    catLabel: 'Спортивный газон • для стадионов',
    name: 'Спортивный газон FIFA Pro 50 мм',
    pile: '50 мм FIFA',
    stock: 'Для футбола',
    retail: 148000,
    wholesale: 122000,
    unit: 'м²',
    specs: ['Ворс: 50 мм', 'Dtex: 12 000+', 'Срок службы: 8 лет'],
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-universal',
    category: 'rulonli',
    catLabel: 'Натуральный рулонный газон',
    name: 'Натуральный рулонный газон «Universal sport»',
    pile: 'Натуральный 100%',
    stock: 'Свежая срезка',
    retail: 18000,
    wholesale: 12000,
    unit: 'м²',
    specs: ['Рулон: 0.8 м²', 'Плотный дерн', 'Солнце и полутень'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-deluxe',
    category: 'rulonli',
    catLabel: 'Натуральный рулонный газон',
    name: 'Натуральный рулонный газон «Kanada Green Elite»',
    pile: 'Премиум дерн',
    stock: 'Из питомника',
    retail: 26000,
    wholesale: 19500,
    unit: 'м²',
    specs: ['Мятлик + овсяница', 'Изумрудный цвет', 'Жаростойкий'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'urug-dlf',
    category: 'urug',
    catLabel: 'Семена газона • Дания',
    name: 'Семена газона DLF Trifolium (мешок 10 кг)',
    pile: '10 кг = 300 м²',
    stock: 'Оригинал Дания',
    retail: 950000,
    wholesale: 790000,
    unit: 'мешок',
    specs: ['1 кг / 30 м²', 'Всхожесть: 98%', 'Сертифицировано'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rezina-epdm-plitka',
    category: 'rezina',
    catLabel: 'Резиновое покрытие',
    name: 'Резиновая плитка и покрытие EPDM (20 мм)',
    pile: '20 мм EPDM',
    stock: 'Гарантия 12 мес',
    retail: 185000,
    wholesale: 150000,
    unit: 'м²',
    specs: ['10–40 мм', 'Амортизирующее', '12 цветов'],
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=700&q=80'
  }
];

const REGIONS_RU = [
  {
    slug: 'samarkand',
    url: '/ru/samarkand/',
    baseUrl: '/samarkand/',
    name: 'Самарканд',
    locative: 'В Самарканде',
    dative: 'в Самарканд',
    cities: 'г. Самарканд, Ургут, Каттакурган, Акдарья, Пастдаргом, Тайлак',
    deliveryTime: 'за 12 – 24 часа',
    desc: 'Оптовая поставка искусственного и рулонного газона по Самаркандской области, строительство мини-футбольных полей и детских площадок с покрытием EPDM под ключ.'
  },
  {
    slug: 'fergana',
    url: '/ru/fergana/',
    baseUrl: '/fergana/',
    name: 'Фергана',
    locative: 'В Фергане',
    dative: 'в Фергану',
    cities: 'г. Фергана, Коканд, Маргилан, Кува, Риштан, Алтыарык',
    deliveryTime: 'за 12 – 24 часа',
    desc: 'Поставка искусственной травы и спортивного газона FIFA по Ферганской долине оптом из первых рук и строительство спортивных площадок под ключ.'
  },
  {
    slug: 'andizhan',
    url: '/ru/andizhan/',
    baseUrl: '/andijan/',
    name: 'Андижан',
    locative: 'В Андижане',
    dative: 'в Андижан',
    cities: 'г. Андижан, Асака, Шахрихан, Ханабад, Кургантепа, Балыкчи',
    deliveryTime: 'за 14 – 24 часа',
    desc: 'Строительство мини-футбольных стадионов, теннисных кортов, укладка бесшовного резинового покрытия EPDM и доставка газона в Андижанскую область.'
  },
  {
    slug: 'buhara',
    url: '/ru/buhara/',
    baseUrl: '/bukhara/',
    name: 'Бухара',
    locative: 'В Бухаре',
    dative: 'в Бухару',
    cities: 'г. Бухара, Каган, Гиждуван, Каракуль, Вабкент, Ромитан',
    deliveryTime: 'за 16 – 24 часа',
    desc: 'Устойчивый к жаркому климату Бухары искусственный газон с УФ-защитой, системы автополива Hunter, строительство мини-стадионов и ландшафтный дизайн.'
  },
  {
    slug: 'kashkadarya',
    url: '/ru/kashkadarya/',
    baseUrl: '/kashkadarya/',
    name: 'Кашкадарья',
    locative: 'В Кашкадарье',
    dative: 'в Кашкадарью',
    cities: 'г. Карши, Шахрисабз, Гузар, Касан, Китаб, Мубарек, Яккабаг',
    deliveryTime: 'за 14 – 24 часа',
    desc: 'Строительство мини-футбольных полей под ключ в Кашкадарьинской области, оптовая доставка искусственного газона FIFA 50 мм и монтаж резиновых площадок.'
  },
  {
    slug: 'namangan',
    url: '/ru/namangan/',
    baseUrl: '/namangan/',
    name: 'Наманган',
    locative: 'В Намангане',
    dative: 'в Наманган',
    cities: 'г. Наманган, Чуст, Касансай, Туракурган, Пап, Учкурган',
    deliveryTime: 'за 12 – 24 часа',
    desc: 'Профессиональный ландшафтный дизайн, автополив Hunter, продажа рулонного и искусственного газона и строительство стадионов в Намангане.'
  }
];

const BLOG_POSTS_RU = [
  {
    slug: 'rulonli-gazon-yoki-urug-sepish',
    title: 'Что лучше выбрать: готовый рулонный газон или посев семян? Советы агронома',
    date: '15 октября, 2026',
    category: 'Уход за газоном',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Как правильно выбрать между рулонным и посевным газоном исходя из бюджета, сроков и особенностей почвы вашего участка.',
    link: '/ru/uslugi/ukladka-i-posev-gazona/'
  },
  {
    slug: 'mini-futbol-stadioni-qurish-biznes-rejasi',
    title: 'Строительство мини-футбольного поля (20×40 м): смета расходов и срок окупаемости',
    date: '10 октября, 2026',
    category: 'Строительство стадионов',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Подробный разбор этапов строительства стадиона под ключ в Ташкенте и областях: дренаж, трава FIFA 50 мм, сетка и LED освещение.',
    link: '/ru/uslugi/stroitelstvo-futbolnyh-poley-i-kortov/'
  },
  {
    slug: 'bolalar-maydonchasi-uchun-epdm-yoki-sbr-rezina',
    title: 'Резиновое покрытие EPDM и SBR для детских площадок: нормы толщины и безопасности',
    date: '04 октября, 2026',
    category: 'Резиновые покрытия',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Какую толщину бесшовного каучукового покрытия выбрать для детского сада, школы или двора жилого комплекса?',
    link: '/ru/uslugi/rezinovye-pokrytiya-i-detskie-ploshchadki/'
  }
];

function renderHeaderRu(basePath = '/ru/') {
  const route = getRoute(basePath);
  const isServiceActive = basePath.startsWith('/ru/uslugi') || basePath.startsWith('/xizmatlar');
  const isShopActive = basePath.startsWith('/ru/katalog') || basePath.startsWith('/katalog');
  const isAboutActive = basePath.startsWith('/ru/o-nas') || basePath.startsWith('/biz-haqimizda');
  const isBlogActive = basePath.startsWith('/ru/blog') || basePath.startsWith('/blog');
  const isContactActive = basePath.startsWith('/ru/kontakty') || basePath.startsWith('/boglanish');

  const uzHref = route.uz;
  const uzKrHref = route['uz-kr'];
  const ruHref = route.ru;

  return `
  <!-- COMPACT STICKY HEADER (Russian) -->
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="/ru/" class="brand-logo" aria-label="Eco Landshaft Главная страница">
        <span class="logo-badge">${ICONS.leaf}</span>
        <span><span class="eco-green">Eco</span> Landshaft</span>
      </a>

      <nav class="main-nav" id="mainNavMenu" aria-label="Главное меню">
        <div class="nav-item has-submenu">
          <a href="/ru/#servicesSection" class="nav-link js-submenu-trigger ${isServiceActive ? 'active' : ''}" aria-haspopup="true">
            <span>Услуги</span>
            <svg class="nav-chevron" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="submenu-dropdown" role="menu" aria-label="Список услуг">
            ${SERVICES_RU.map((s) => `
            <a href="${s.url}" class="submenu-card-link" role="menuitem">
              <span class="submenu-icon">${s.svgIcon}</span>
              <div>
                <div class="submenu-title">${s.shortName}</div>
                <div class="submenu-price">${s.priceRange}</div>
              </div>
            </a>`).join('')}
            <div class="submenu-footer">
              <span>Бесплатный замер и консультация: ${BRAND.phoneDisplay}</span>
              <a href="/ru/#smartCalculator">Онлайн-калькулятор →</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="/ru/katalog/" class="nav-link ${isShopActive ? 'active' : ''}">Магазин</a>
        </div>

        <div class="nav-item">
          <a href="/ru/o-nas/" class="nav-link ${isAboutActive ? 'active' : ''}">О компании</a>
        </div>

        <div class="nav-item">
          <a href="/ru/blog/" class="nav-link ${isBlogActive ? 'active' : ''}">Блог</a>
        </div>

        <div class="nav-item">
          <a href="/ru/kontakty/" class="nav-link ${isContactActive ? 'active' : ''}">Контакты</a>
        </div>
      </nav>

      <div class="header-actions">
        <div class="lang-switcher">
          <button type="button" class="lang-trigger" aria-label="Выбрать язык">
            <span class="lang-dot"></span>
            <span class="lang-current-label">Русский</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="lang-menu" role="menu">
            <a href="${uzHref}" class="lang-option" data-lang="uz-Latn" data-label="O'zbek (Lotin)">
              <span>O'zbek (Lotin)</span>
              <span class="lang-code">UZ</span>
            </a>
            <a href="${uzKrHref}" class="lang-option" data-lang="uz-Cyrl" data-label="Ўзбек (Кирилл)">
              <span>Ўзбек (Кирилл)</span>
              <span class="lang-code">ЎЗ</span>
            </a>
            <a href="${ruHref}" class="lang-option active" data-lang="ru" data-label="Русский">
              <span>Русский</span>
              <span class="lang-code">RU</span>
            </a>
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

        <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Открыть меню">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderServicesGridSectionRu() {
  return `
      <section class="section-block" id="servicesSection">
        <div class="section-header">
          <div class="section-header-left">
            <span class="section-eyebrow">НАШИ УСЛУГИ</span>
            <h2 class="section-title">
              Укладка газона, строительство стадионов и <span>озеленение</span>
            </h2>
            <p class="section-desc">
              Все работы выполняются по официальному договору, с точной сметой и гарантией качества.
            </p>
          </div>
          <button
            type="button"
            class="nav-pill-btn phone-cta js-open-modal"
            data-title="Получить бесплатную консультацию"
            data-sub="Оставьте свой номер телефона — наш специалист свяжется с вами в течение 15 минут."
          >
            <span>Бесплатная консультация</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </button>
        </div>

        <div class="services-bento-grid">
          ${SERVICES_RU.map((s) => `
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
                <span>Подробнее об услуге</span>
                <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
              </a>
              <button
                type="button"
                class="circle-btn-black js-open-modal"
                data-title="${s.shortName} — бесплатная смета"
                data-sub="Оставьте номер телефона — за 15 минут рассчитаем стоимость по услуге «${s.shortName.toLowerCase()}»."
                aria-label="Заказать ${s.shortName}"
              >
                ${ICONS.arrowUpRight}
              </button>
            </div>
          </article>`).join('\n')}
        </div>
      </section>`;
}

function renderSmartCalculatorRu(defaultService = 'suniy-gazon') {
  return `
  <section class="section-block" id="smartCalculator">
    <div class="calculator-bento-shell" data-default-service="${defaultService}">
      <div class="section-header" style="margin-bottom: 8px;">
        <div class="section-header-left">
          <span class="glass-pill-tag">ОНЛАЙН-КАЛЬКУЛЯТОР</span>
          <h2 class="section-title" style="color: #FFFFFF; margin-top: 8px;">
            Рассчитайте стоимость проекта за 30 секунд
          </h2>
          <p class="section-desc" style="color: rgba(255,255,255,0.78);">
            Выберите тип покрытия или услуги и укажите площадь вашего участка.
          </p>
        </div>
      </div>

      <div class="calc-grid">
        <div class="calc-controls-panel">
          <span class="calc-step-label">1. Выберите направление</span>
          <div class="calc-type-pills">
            <button type="button" class="calc-type-btn ${defaultService === 'suniy-gazon' ? 'active' : ''}" data-service="suniy-gazon">
              Искусственный газон<span>от 48 800 сум/м²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rulonli-gazon' ? 'active' : ''}" data-service="rulonli-gazon">
              Рулонный газон<span>9 000 – 30 000 сум/м²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'gazon-ekish' ? 'active' : ''}" data-service="gazon-ekish">
              Посев и укладка<span>15 000 – 25 000 сум/м²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'stadion-qurish' ? 'active' : ''}" data-service="stadion-qurish">
              Строительство поля<span>от 217 000 сум/м²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rezina-maydon' ? 'active' : ''}" data-service="rezina-maydon">
              Резиновое покрытие<span>150 000 – 250 000 сум/м²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'avtopoliv-landshaft' ? 'active' : ''}" data-service="avtopoliv-landshaft">
              Автополив Hunter<span>от 49 000 сум/м²</span>
            </button>
          </div>

          <div class="calc-slider-group">
            <div class="calc-slider-header">
              <span class="calc-step-label" style="margin-bottom:0;">2. Площадь участка (м² / сотки)</span>
              <span class="calc-area-display" id="calcAreaDisplay">150 м² (1.5 сотки)</span>
            </div>
            <input
              type="range"
              id="calcAreaRange"
              class="range-slider"
              min="20"
              max="2000"
              step="10"
              value="150"
              aria-label="Площадь участка в квадратных метрах"
            />
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:rgba(255,255,255,0.6); margin-top:6px;">
              <span>20 м²</span>
              <span>800 м² (стадион 20×40м)</span>
              <span>2 000 м²</span>
            </div>
          </div>

          <span class="calc-step-label">3. Дополнительные опции</span>
          <div class="calc-options-row">
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptPrep" />
              <span>Подготовка грунта (+15 000 сум/м²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptInstall" checked />
              <span>Монтаж и укладка (+20 000 сум/м²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptIrrig" />
              <span>Автополив Hunter (+45 000 сум/м²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptWholesale" />
              <span>Оптовая скидка (-15%)</span>
            </label>
          </div>
        </div>

        <div class="calc-result-panel">
          <div>
            <span class="outline-pill-tag">ПРЕДВАРИТЕЛЬНЫЙ РАСЧЕТ</span>
            <div class="calc-total-price" id="calcTotalSum">16 350 000 сум</div>
            <div class="calc-breakdown-list">
              <div class="calc-breakdown-item">
                <span>Направление:</span>
                <span id="calcOutService">Искусственный газон (ворс 20–50 мм)</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Площадь:</span>
                <span id="calcOutArea">150 м²</span>
              </div>
              <div class="calc-breakdown-item">
                <span id="calcOutMatLabel">Объем / рулоны:</span>
                <span id="calcOutRolls">3 комплекта</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Срок выполнения:</span>
                <span id="calcOutDays">2 – 4 дня</span>
              </div>
              <div class="calc-breakdown-item">
                <span>Выезд замерщика и смета:</span>
                <span style="color:var(--green-700);">Бесплатно</span>
              </div>
            </div>
          </div>

          <form class="phone-only-form js-phone-form" data-context="Расчет калькулятора (RU)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Ваш номер телефона"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить точную смету</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function renderPortfolioSectionRu() {
  return `
  <section class="section-block" id="portfolioSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">НАШИ РАБОТЫ</span>
        <h2 class="section-title">
          Примеры <span>реализованных объектов</span>
        </h2>
        <p class="section-desc">
          Потяните слайдер «До и после» и ознакомьтесь с нашими сданными проектами по Узбекистану.
        </p>
      </div>
      <div class="ecom-filter-tabs">
        <button type="button" class="ecom-tab-btn js-portfolio-tab active" data-pfilter="all">Все проекты</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="gazon">Газон и ландшафт</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="stadion">Стадионы</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="rezina">Резиновые площадки</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="video">Видео</button>
      </div>
    </div>

    <div class="portfolio-bento-grid">
      <div class="before-after-card js-portfolio-item" data-pcat="gazon">
        <div class="ba-layer ba-after">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80" alt="После: готовый изумрудный рулонный газон" loading="lazy" />
        </div>
        <div class="ba-layer ba-before">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" alt="До: неподготовленный участок" loading="lazy" />
        </div>
        <span class="ba-badge left">До</span>
        <span class="ba-badge right">После (рулонный газон)</span>
        <div class="ba-handle">
          <div class="ba-handle-circle">↔</div>
        </div>
        <input type="range" class="ba-range-input" min="5" max="95" value="50" aria-label="Слайдер сравнения до и после" />
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="stadion">
          <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80" alt="Мини-футбольное поле 20x40м" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Строительство стадиона</span>
              <span class="pile-badge">800 м²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Мини-футбольное поле (20×40м)</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Трава FIFA 50 мм, дренаж и LED прожекторы</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="rezina">
          <img src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=800&q=80" alt="Детская площадка и бесшовное покрытие EPDM" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Резиновая площадка</span>
              <span class="pile-badge">420 м²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Каучуковая площадка EPDM во дворе ЖК</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Бесшовное травмобезопасное покрытие</p>
            </div>
          </div>
        </article>
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="video">
          <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" alt="3D ландшафт и автополив Hunter" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Видеообзор</span>
              <span class="pile-badge">1 200 м²</span>
            </div>
            <button type="button" class="video-play-btn js-open-modal" data-title="Получить видео-портфолио" data-sub="Оставьте номер телефона — отправим вам видеообзоры наших объектов в Telegram." aria-label="Смотреть видео">
              ▶
            </button>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">3D ландшафт, рулонный газон и автополив</h3>
              <p style="font-size:0.76rem; opacity:0.82;">Процесс работ и готовый результат</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="gazon">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" alt="Стабилизированный мох и фитостена" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">Фитодекор</span>
              <span class="pile-badge">45 м²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">Фитостена и мох ягель в интерьере</h3>
              <p style="font-size:0.76rem; opacity:0.82;">До 10 лет без полива и ухода</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

function renderRegionsHubSectionRu() {
  return `
  <section class="section-block" id="regionsSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">ГЕОГРАФИЯ РАБОТ</span>
        <h2 class="section-title">
          Доставка и строительство в <span>Ташкенте и областях</span>
        </h2>
        <p class="section-desc">
          За 24 часа доставляем искусственный газон с центрального склада в любую область и строим спортивные площадки под ключ.
        </p>
      </div>
    </div>

    <div class="regions-grid">
      ${REGIONS_RU.map((r) => `
      <a href="${r.url}" class="region-card">
        <div>
          <span class="outline-pill-tag" style="margin-bottom:8px;">ЗА 24 ЧАСА</span>
          <h4>${r.name}</h4>
          <p style="margin-top:4px;">Газон оптом и стадионы под ключ</p>
        </div>
        <div class="region-arrow">
          <span>Подробнее</span>
          <span>→</span>
        </div>
      </a>`).join('')}
    </div>
  </section>`;
}

function renderContactAndMapSectionRu() {
  return `
  <section class="section-block" id="contactSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">КОНТАКТЫ</span>
        <h2 class="section-title">
          Бесплатная консультация и <span>наш адрес</span>
        </h2>
        <p class="section-desc">
          Оставьте только ваш номер телефона — специалист свяжется с вами в течение 15 минут.
        </p>
      </div>
    </div>

    <div class="contact-bento-grid">
      <div class="contact-info-card">
        <div>
          <span class="outline-pill-tag">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
          <h3 style="font-size:1.35rem; font-weight:800; margin:10px 0 6px;">
            Оставьте номер — перезвоним за 15 минут
          </h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
            Ответим на все вопросы, рассчитаем смету и бесплатно направим инженера-замерщика на ваш объект.
          </p>

          <form class="phone-only-form js-phone-form" data-context="Блок контактов (RU)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (97) 783-82-53"
              required
              aria-label="Ваш номер телефона"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить консультацию</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>

        <div class="contact-detail-list">
          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.phone}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Телефон (24/7):</div>
              <a href="tel:${BRAND.phoneRaw}" style="font-size:1rem; font-weight:700; color:var(--black-950);">${BRAND.phoneFormatted}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.send}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Telegram для связи:</div>
              <a href="${BRAND.telegramUrl}" target="_blank" rel="noopener" style="font-size:0.96rem; font-weight:700; color:var(--green-800);">${BRAND.telegramHandle}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.mapPin}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Адрес офиса и шоурума:</div>
              <div style="font-size:0.9rem; font-weight:600; color:var(--black-950);">${BRAND_RU.address}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-bento-card">
        ${BRAND_RU.mapIframe}
      </div>
    </div>
  </section>`;
}

function renderFooterRu() {
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/ru/" class="brand-logo" style="color:#FFFFFF; margin-bottom:12px;">
            <span class="logo-badge">${ICONS.leaf}</span>
            <span><span style="color:var(--green-300);">Eco</span> Landshaft</span>
          </a>
          <p style="font-size:0.82rem; color:rgba(255,255,255,0.68); margin-bottom:14px;">
            Укладка газона, оптовая и розничная продажа искусственного и рулонного газона, строительство футбольных полей и детских резиновых площадок по Узбекистану.
          </p>
          <div style="font-size:0.82rem; color:var(--green-300); font-weight:600;">
            ${BRAND_RU.address}<br/>
            <a href="tel:${BRAND.phoneRaw}">${BRAND.phoneFormatted}</a> • <a href="${BRAND.telegramUrl}" target="_blank" rel="noopener">${BRAND.telegramHandle}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Услуги</h4>
          <div class="footer-links">
            ${SERVICES_RU.map((s) => `<a href="${s.url}">${s.shortName}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="footer-col">
          <h4>Магазин и разделы</h4>
          <div class="footer-links">
            <a href="/ru/katalog/">Магазин (все товары)</a>
            <a href="/ru/katalog/iskusstvennyy-gazon/">Каталог искусственного газона</a>
            <a href="/ru/katalog/rulonnyy-gazon/">Натуральный рулонный газон</a>
            <a href="/ru/o-nas/">О компании</a>
            <a href="/ru/blog/">Блог</a>
            <a href="/ru/kontakty/">Контакты</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Регионы</h4>
          <div class="footer-links">
            ${REGIONS_RU.map((r) => `<a href="${r.url}">Газон и стадионы ${r.locative.toLowerCase()}</a>`).join('\n            ')}
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 <strong>${BRAND.name} (ecolandshaft.uz)</strong>. Все права защищены.</div>
        <div>Оплата: наличные, Uzcard/Humo, перечисление (с НДС) и рассрочка</div>
      </div>
    </div>
  </footer>

  <div class="modal-backdrop" id="quickLeadModal" role="dialog" aria-modal="true" aria-labelledby="modalLeadTitle">
    <div class="modal-glass-box">
      <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Закрыть">✕</button>
      <span class="outline-pill-tag">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
      <h3 id="modalLeadTitle" style="font-size:1.28rem; font-weight:800; margin:10px 0 6px;">
        Бесплатная консультация и смета
      </h3>
      <p id="modalLeadSub" style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:16px;">
        Оставьте ваш номер телефона — специалист свяжется с вами в течение 15 минут.
      </p>
      <form class="phone-only-form js-phone-form" data-context="Модальная заявка (RU)">
        <input
          type="tel"
          class="phone-input-pill"
          placeholder="+998 (__) ___-__-__"
          required
          aria-label="Ваш номер телефона"
        />
        <button type="submit" class="btn-pill-black-full">
          <span>Отправить заявку</span>
          <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
        </button>
      </form>
    </div>
  </div>

  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function renderProductCardsRu(list = PRODUCTS_RU) {
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
            ${p.retail.toLocaleString('ru-RU')} сум/${p.unit}
            <small class="js-price-note">Оптом: ${p.wholesale.toLocaleString('ru-RU')} сум/${p.unit}</small>
          </div>
          <button
            type="button"
            class="btn-buy-quick js-open-modal"
            data-title="Заказ: ${p.name}"
            data-sub="Оставьте номер телефона — рассчитаем нужный объем и организуем доставку."
          >
            <span>Заказать</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </article>`).join('\n');
}

function buildHomePageRu() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BRAND.domain}/ru/#localbusiness`,
        name: BRAND.name,
        url: `${BRAND.domain}/ru/`,
        telephone: BRAND.phoneFormatted,
        priceRange: '9000 UZS - 3560000 UZS',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Самарканд Дарвоза, дом 2',
          addressLocality: 'Ташкент',
          addressCountry: 'UZ'
        },
        sameAs: [BRAND.telegramUrl]
      }
    ]
  };

  return `${renderHead({
    title: 'Eco Landshaft — Укладка газона, купить искусственный и рулонный газон в Ташкенте, строительство стадионов и детских площадок | ecolandshaft.uz',
    description: 'Продажа искусственного и натурального рулонного газона оптом и в розницу (от 9 000 сум/м²) в Ташкенте и Узбекистане. Посев и укладка газона, строительство мини-футбольных полей и бесшовных резиновых покрытий EPDM/SBR под ключ.',
    keywords: 'искусственный газон ташкент, рулонный газон купить ташкент, укладка газона цена, посев газона, строительство футбольных полей ташкент, бесшовное резиновое покрытие epdm, ландшафтный дизайн ташкент, автополив hunter',
    canonicalPath: '/ru/',
    basePath: '/',
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu('/')}

  <main class="container">
    <section class="unified-hero-section" aria-label="Главный экран">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">🏆 ЦЕНТР ГАЗОНОВ И СПОРТИВНОГО СТРОИТЕЛЬСТВА ПО УЗБЕКИСТАНУ</span>
            <span class="glass-pill-tag">Официальная гарантия</span>
          </div>
          <h1>
            Профессиональная укладка газона, <span>ландшафтный дизайн и строительство спортивных площадок</span>
          </h1>
          <p class="unified-hero-lead">
            Доставка и монтаж искусственного и натурального газона по всему Узбекистану, зеленый фитодекор, бесшовные резиновые площадки и стадионы «под ключ».
          </p>

          <div class="hero-action-btns">
            <a href="#servicesSection" class="btn-primary-white">
              <span>Смотреть наши услуги</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/ru/katalog/" class="btn-secondary-glass">
              <span>Перейти в магазин газонов</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>

          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>10+ лет</strong>
              <span>Практического опыта</span>
            </div>
            <div class="hero-metric-item">
              <strong>250 000+ м²</strong>
              <span>Сданных объектов</span>
            </div>
            <div class="hero-metric-item">
              <strong>Из 1-х рук</strong>
              <span>Оптом и в розницу</span>
            </div>
            <div class="hero-metric-item">
              <strong>12 областей</strong>
              <span>Быстрая доставка</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
          <h2>Получите бесплатную консультацию и смету за 15 минут</h2>
          <p>
            Оставьте только ваш номер телефона — специалист свяжется с вами и подробно проконсультирует по ценам.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Главная страница Hero (RU)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="Ваш номер телефона"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить консультацию</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
          <div class="hero-glass-perks">
            <span>• Выезд замерщика на объект — бесплатно</span>
            <span>• Образцы газона и резины EPDM — бесплатно</span>
          </div>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionRu()}

    <section class="section-block" id="ecommerceSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ОНЛАЙН-МАГАЗИН</span>
          <h2 class="section-title">
            Искусственный и натуральный рулонный газон — <span>оптом и в розницу</span>
          </h2>
          <p class="section-desc">
            Искусственная трава 10–50 мм, свежесрезанный рулонный газон из питомника, датские семена DLF и резиновые покрытия.
          </p>
        </div>
        <div>
          <a href="/ru/katalog/" class="nav-pill-btn phone-cta">
            <span>Все товары</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </a>
        </div>
      </div>

      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs" role="tablist">
          <button type="button" class="ecom-tab-btn active" data-filter="all">Все</button>
          <button type="button" class="ecom-tab-btn" data-filter="suniy">Искусственный газон</button>
          <button type="button" class="ecom-tab-btn" data-filter="rulonli">Рулонный газон</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">Семена газона</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">Резиновая плитка</button>
        </div>

        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <div class="price-mode-toggle" aria-label="Выбор типа цены">
            <button type="button" class="price-mode-btn active" data-mode="retail">Розница</button>
            <button type="button" class="price-mode-btn" data-mode="wholesale">Оптом (из 1-х рук)</button>
          </div>
          <button
            type="button"
            class="nav-pill-btn js-open-modal"
            style="background:var(--green-50); color:var(--green-800);"
            data-title="Получить оптовый прайс-лист"
            data-sub="Введите номер телефона — отправим актуальный оптовый прайс-лист в Telegram."
          >
            <span>Оптовый прайс-лист</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsRu(PRODUCTS_RU)}
      </div>
    </section>

    ${renderSmartCalculatorRu('suniy-gazon')}

    ${renderPortfolioSectionRu()}

    ${renderRegionsHubSectionRu()}

    <section class="section-block" id="faqSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ЧАСТЫЕ ВОПРОСЫ</span>
          <h2 class="section-title">
            Ответы на <span>популярные вопросы</span> клиентов
          </h2>
        </div>
      </div>

      <div class="faq-grid">
        <details class="faq-item" open>
          <summary>
            <span>Сколько стоит 1 м² искусственного и натурального рулонного газона?</span>
            <span>+</span>
          </summary>
          <p>
            Стоимость натурального рулонного газона в зависимости от объема составляет <strong>9 000 – 30 000 сум/м²</strong>. Искусственный газон с высотой ворса от 10 до 50 мм стоит <strong>48 800 – 148 000 сум/м²</strong>.
          </p>
        </details>

        <details class="faq-item" open>
          <summary>
            <span>За какой срок вы строите мини-футбольное поле под ключ?</span>
            <span>+</span>
          </summary>
          <p>
            Стандартное мини-футбольное поле 20×40 м (800 м²) с дренажным основанием, ограждением, LED освещением и газоном FIFA 50 мм мы сдаем под ключ за <strong>15–25 дней</strong>.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>Какая гарантия предоставляется на резиновое покрытие детских площадок?</span>
            <span>+</span>
          </summary>
          <p>
            На все бесшовные покрытия из крошки SBR и каучука EPDM предоставляется <strong>официальная гарантия 12 месяцев</strong> по договору.
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>Есть ли доставка и монтаж в областях Узбекистана?</span>
            <span>+</span>
          </summary>
          <p>
            Да, мы доставляем газоны и материалы со склада в Ташкенте во все области за 24 часа, а наши строительные бригады выполняют монтаж на месте под ключ.
          </p>
        </details>
      </div>
    </section>

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildCatalogPageRu({ canonicalPath = '/ru/katalog/', basePath = '/katalog/', title, metaDesc, h1, subtitle, defaultFilter = 'all' }) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: `${BRAND.domain}${canonicalPath}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords: 'искусственный газон ташкент купить, искусственная трава цена оптом, рулонный газон ташкент цена, готовый натуральный газон, семена газона дания, резиновая плитка',
    canonicalPath,
    basePath,
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu(canonicalPath)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <a href="/ru/katalog/">Магазин</a>
      ${canonicalPath !== '/ru/katalog/' ? `<span>/</span><span style="color:var(--green-800);">${h1}</span>` : ''}
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">ОПТОВЫЙ И РОЗНИЧНЫЙ МАГАЗИН</span>
            <span class="glass-pill-tag">Официальная гарантия</span>
          </div>
          <h1>${h1}</h1>
          <p class="unified-hero-lead">${subtitle}</p>
          <div class="hero-action-btns">
            <a href="/ru/katalog/iskusstvennyy-gazon/" class="btn-primary-white">
              <span>Каталог искусственного газона</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
            <a href="/ru/katalog/rulonnyy-gazon/" class="btn-secondary-glass">
              <span>Натуральный рулонный газон</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">ОПТОВЫЙ ПРАЙС И ОБРАЗЦЫ</span>
          <h2>Получите бесплатные образцы газона и оптовый прайс-лист</h2>
          <p>
            Оставьте номер телефона — отправим актуальные цены на искусственный газон 10–50 мм и натуральный рулонный дерн.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Страница магазина — оптовый прайс (RU)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Ваш номер телефона" />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить прайс-лист</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs">
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'all' ? 'active' : ''}" data-filter="all">Все товары</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'suniy' ? 'active' : ''}" data-filter="suniy">Искусственный газон (10–50 мм)</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'rulonli' ? 'active' : ''}" data-filter="rulonli">Натуральный рулонный газон</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">Семена газона</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">Резина и плитка</button>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">Розница</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">Оптом (из 1-х рук)</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsRu(PRODUCTS_RU)}
      </div>
    </section>

    ${renderSmartCalculatorRu(defaultFilter === 'rulonli' ? 'rulonli-gazon' : 'suniy-gazon')}

    ${renderRegionsHubSectionRu()}

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildServicePageRu(service) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        provider: {
          '@type': 'LocalBusiness',
          name: BRAND.name,
          telephone: BRAND.phoneFormatted,
          address: BRAND_RU.address
        },
        description: service.metaDesc
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      }
    ]
  };

  const isRubberPage = service.slug === 'rezinovye-pokrytiya-i-detskie-ploshchadki' || service.slug === 'rezina-qoplama-va-bolalar-maydonchalari';

  const rubberConstructorHtml = isRubberPage
    ? `
      <section class="section-block">
        <div class="comparison-table-wrap">
          <span class="section-eyebrow">КОНСТРУКТОР ЦВЕТА И ТОЛЩИНЫ</span>
          <h2 class="section-title" style="margin-bottom:12px;">
            Выберите цвет покрытия EPDM/SBR <span>для детской площадки</span>
          </h2>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:center;">
            <div>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">
                Невыгорающие на солнце оттенки каучуковой крошки EPDM и SBR:
              </p>
              <div class="swatch-row">
                <button type="button" class="color-swatch active" style="background:#166534;" data-color="#166534" data-name="Изумрудный зеленый" aria-label="Изумрудный зеленый"></button>
                <button type="button" class="color-swatch" style="background:#B91C1C;" data-color="#B91C1C" data-name="Терракотовый красный" aria-label="Терракотовый красный"></button>
                <button type="button" class="color-swatch" style="background:#1D4ED8;" data-color="#1D4ED8" data-name="Синий океан" aria-label="Синий океан"></button>
                <button type="button" class="color-swatch" style="background:#D97706;" data-color="#D97706" data-name="Солнечный желтый" aria-label="Солнечный желтый"></button>
                <button type="button" class="color-swatch" style="background:#7C3AED;" data-color="#7C3AED" data-name="Фиолетовый" aria-label="Фиолетовый"></button>
                <button type="button" class="color-swatch" style="background:#374151;" data-color="#374151" data-name="Графитовый черный" aria-label="Графитовый черный"></button>
              </div>
              <div style="font-size:0.88rem; font-weight:700; margin-top:8px;">
                Выбранный цвет: <span id="rubberSelectedColorName" style="color:var(--green-800);">Изумрудный зеленый</span>
              </div>
            </div>
            <div
              id="rubberPreviewSurface"
              style="height:160px; border-radius:20px; background:#166534; color:#FFFFFF; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; transition: background 0.3s;"
            >
              <strong style="font-size:1.1rem;">Бесшовное покрытие EPDM / SBR</strong>
              <span style="font-size:0.8rem; opacity:0.88; margin-top:4px;">Толщина: 10 • 15 • 20 • 30 • 40 мм</span>
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
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu(service.url)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <a href="/ru/#servicesSection">Услуги</a>
      <span>/</span>
      <span style="color:var(--green-800);">${service.shortName}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner" style="background: linear-gradient(115deg, rgba(7, 31, 19, 0.92) 0%, rgba(14, 58, 36, 0.84) 100%), url('${service.img}') center/cover no-repeat;">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${service.clusterTag}</span>
            <span class="glass-pill-tag">Официальная гарантия</span>
          </div>
          <h1>${service.h1}</h1>
          <p class="unified-hero-lead">${service.shortDesc}</p>
          <ul class="usp-check-list" style="margin-bottom:24px;">
            ${service.usps.map((u) => `<li style="color:#FFFFFF;"><span class="check-dot" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">${ICONS.check}</span><span>${u}</span></li>`).join('')}
          </ul>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Рассчитать стоимость</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="tel:${BRAND.phoneRaw}" class="btn-secondary-glass">
              <span>${BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
          <h2>Бесплатный замер и смета: ${service.shortName.toLowerCase()}</h2>
          <p>
            Оставьте ваш номер телефона — свяжемся в течение 15 минут и подготовим точный расчет.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Страница услуги (RU): ${service.shortName}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Ваш номер телефона" />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить консультацию</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${rubberConstructorHtml}

    <section class="section-block">
      <div class="comparison-table-wrap">
        <span class="section-eyebrow">ЦЕНЫ И СРАВНЕНИЕ</span>
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
          <span class="section-eyebrow">ЭТАПЫ РАБОТ</span>
          <h2 class="section-title">Реализация проекта в <span>4 этапа</span></h2>
        </div>
      </div>
      <div class="products-grid">
        ${service.steps.map((st) => `
        <div class="bento-side-card">
          <div>
            <span class="section-eyebrow">ЭТАП ${st.num}</span>
            <h3 style="font-size:1.02rem; font-weight:700; margin:8px 0;">${st.title}</h3>
            <p style="font-size:0.82rem; color:var(--text-secondary);">${st.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </section>

    ${renderSmartCalculatorRu(service.calcKey)}

    ${renderPortfolioSectionRu()}

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ВОПРОСЫ И ОТВЕТЫ</span>
          <h2 class="section-title">Часто задаваемые <span>вопросы</span></h2>
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

    ${renderRegionsHubSectionRu()}

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildRegionPageRu(region) {
  const title = `${region.locative} купить искусственный и рулонный газон оптом, строительство футбольных полей и детских площадок — Eco Landshaft`;
  const metaDesc = `Доставка искусственного газона, рулонного дерна и семян по области ${region.name} (${region.cities}). Строительство мини-футбольных полей и бесшовных резиновых площадок EPDM ${region.locative.toLowerCase()} под ключ.`;
  const keywords = `искусственный газон ${region.name.toLowerCase()}, рулонный газон ${region.name.toLowerCase()}, строительство футбольных полей ${region.name.toLowerCase()}, резиновое покрытие ${region.name.toLowerCase()}`;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${region.locative} продажа газона, строительство стадионов и детских площадок`,
    areaServed: `${region.name}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords,
    canonicalPath: region.url,
    basePath: region.baseUrl,
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu(region.url)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <a href="/ru/#regionsSection">Регионы</a>
      <span>/</span>
      <span style="color:var(--green-800);">${region.name}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${region.name.toUpperCase()}</span>
            <span class="glass-pill-tag">Доставка: ${region.deliveryTime}</span>
          </div>
          <h1>
            ${region.locative} <span>укладка газона, строительство стадионов и резиновых площадок</span>
          </h1>
          <p class="unified-hero-lead">${region.desc}</p>
          <p style="font-size:0.84rem; color:var(--green-300); font-weight:500; margin-bottom:22px;">
            Города и районы обслуживания: ${region.cities}
          </p>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>Рассчитать стоимость</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/ru/katalog/" class="btn-secondary-glass">
              <span>Перейти в магазин</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">ДОСТАВКА И МОНТАЖ</span>
          <h2>Расчет доставки и строительства ${region.dative}</h2>
          <p>
            Оставьте ваш номер телефона — рассчитаем стоимость доставки и монтажа под ключ в вашем регионе (${region.name}).
          </p>
          <form class="phone-only-form js-phone-form" data-context="Региональная заявка (RU): ${region.name}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Ваш номер телефона" />
            <button type="submit" class="btn-pill-black-full">
              <span>Получить консультацию</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionRu()}

    ${renderSmartCalculatorRu('stadion-qurish')}

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildAboutPageRu() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'О компании — Eco Landshaft',
    url: `${BRAND.domain}/ru/o-nas/`
  };

  return `${renderHead({
    title: 'О компании Eco Landshaft | 10 лет опыта в озеленении и строительстве стадионов',
    description: 'Eco Landshaft (ecolandshaft.uz) — ведущая компания в Узбекистане по укладке газона, оптовой продаже искусственного и рулонного газона, строительству футбольных полей и детских площадок.',
    keywords: 'о компании eco landshaft, компания по озеленению ташкент, строительство стадионов узбекистан, питомник рулонного газона',
    canonicalPath: '/ru/o-nas/',
    basePath: '/biz-haqimizda/',
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu('/ru/o-nas/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <span style="color:var(--green-800);">О компании</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">О КОМПАНИИ ECO LANDSHAFT</span>
            <span class="glass-pill-tag">Официальная гарантия</span>
          </div>
          <h1>
            Создаем современные <span>зеленые зоны и спортивные объекты</span> по всему Узбекистану
          </h1>
          <p class="unified-hero-lead">
            Более 10 лет мы профессионально выполняем озеленение частных резиденций, жилых комплексов, школ и бизнес-центров, строим мини-футбольные поля и укладываем бесшовные резиновые покрытия.
          </p>
          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>35+ человек</strong>
              <span>Штат специалистов</span>
            </div>
            <div class="hero-metric-item">
              <strong>250+ объектов</strong>
              <span>Успешно сдано</span>
            </div>
            <div class="hero-metric-item">
              <strong>50 га</strong>
              <span>Питомник газона</span>
            </div>
            <div class="hero-metric-item">
              <strong>100%</strong>
              <span>Гарантия по договору</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">СОТРУДНИЧЕСТВО</span>
          <h2>Связаться со специалистом</h2>
          <p>
            Оставьте ваш номер телефона — мы перезвоним вам в течение 15 минут.
          </p>
          <form class="phone-only-form js-phone-form" data-context="Страница О компании (RU)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="Ваш номер телефона" />
            <button type="submit" class="btn-pill-black-full">
              <span>Связаться с нами</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderPortfolioSectionRu()}

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildBlogPageRu() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Полезный блог и статьи Eco Landshaft',
    url: `${BRAND.domain}/ru/blog/`
  };

  return `${renderHead({
    title: 'Блог: уход за газоном, строительство стадионов и секреты ландшафта | Eco Landshaft',
    description: 'Экспертные статьи от агрономов и инженеров Eco Landshaft: как выбрать рулонный газон, бизнес-план строительства мини-футбольного поля, нормы толщины резины EPDM.',
    keywords: 'уход за газоном, бизнес план мини футбольного поля, рулонный или посевной газон, толщина резинового покрытия epdm',
    canonicalPath: '/ru/blog/',
    basePath: '/blog/',
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu('/ru/blog/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <span style="color:var(--green-800);">Блог</span>
    </nav>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">ПОЛЕЗНЫЕ СТАТЬИ</span>
          <h1 class="section-title">
            Блог о газонах, ландшафте и <span>спортивном строительстве</span>
          </h1>
          <p class="section-desc">
            Практические руководства, расчеты окупаемости и рекомендации наших агрономов и инженеров.
          </p>
        </div>
      </div>

      <div class="services-bento-grid">
        ${BLOG_POSTS_RU.map((post) => `
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
              <span>Читать статью</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </article>`).join('\n')}
      </div>
    </section>

    ${renderSmartCalculatorRu('suniy-gazon')}

    ${renderContactAndMapSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

function buildContactPageRu() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Контакты — Eco Landshaft',
    url: `${BRAND.domain}/ru/kontakty/`
  };

  return `${renderHead({
    title: 'Контакты и адрес: г. Ташкент, ул. Самарканд Дарвоза, дом 2 | Eco Landshaft',
    description: 'Связаться с офисом Eco Landshaft в Ташкенте: +998-97-783-8253, Telegram t.me/+998977838253. Бесплатная консультация и вызов замерщика на объект.',
    keywords: 'контакты eco landshaft, самарканд дарвоза 2, телефон газоны ташкент, бесплатная консультация озеленение',
    canonicalPath: '/ru/kontakty/',
    basePath: '/boglanish/',
    lang: 'ru',
    schemaJson
  })}
<body>
  ${renderHeaderRu('/ru/kontakty/')}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="/ru/">Главная</a>
      <span>/</span>
      <span style="color:var(--green-800);">Контакты</span>
    </nav>

    ${renderContactAndMapSectionRu()}

    ${renderRegionsHubSectionRu()}
  </main>

  ${renderFooterRu()}`;
}

/* ==========================================================================
   WRITE ALL FILES TO DISK (UZ + UZ-KR + RU + MULTI-LANG SITEMAP)
   ========================================================================== */
function writePage(relPath, htmlContent) {
  const fullPath = path.join(ROOT_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, htmlContent, 'utf8');
  console.log(`Generated: ${relPath}`);
}

function buildAll() {
  // 0. Clean up obsolete Russian directories if they exist
  const obsoleteRuDirs = [
    'ru/biz-haqimizda',
    'ru/boglanish',
    'ru/xizmatlar',
    'ru/andijan',
    'ru/bukhara',
    'ru/katalog/suniy-gazon',
    'ru/katalog/rulonli-gazon'
  ];
  obsoleteRuDirs.forEach((relDir) => {
    const p = path.join(ROOT_DIR, relDir);
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`Cleaned up obsolete directory: ${relDir}`);
    }
  });

  // 1. Home page
  const homeUzHtml = buildHomePage();
  const homeRuHtml = buildHomePageRu();
  writePage('index.html', homeUzHtml);
  writePage('uz-kr/index.html', convertUzHtmlToUzKr(homeUzHtml, '/'));
  writePage('ru/index.html', homeRuHtml);

  // 2. Catalog main
  const catUzHtml = buildCatalogPage({
    subpath: '/katalog/',
    title: "Sun'iy va rulonli gazon do'koni — optom va chakana narxlar Toshkentda | Eco Landshaft",
    metaDesc: "Ulgurji (optom) va chakana narxda sun'iy gazon (10mm–50mm), tabiiy rulonli gazon, Daniya urug'lari va EPDM rezina qoplamalar do'koni.",
    h1: "Sun'iy va tabiiy (rulonli) gazon do'koni",
    subtitle: "10 mm dan 50 mm gacha landshaft va FIFA sport chimi, pitomnikdan yangi kesilgan rulonli gazon hamda DLF Daniya urug'lari.",
    defaultFilter: 'all'
  });
  const catRuHtml = buildCatalogPageRu({
    canonicalPath: '/ru/katalog/',
    basePath: '/katalog/',
    title: 'Магазин искусственного и рулонного газона в Ташкенте — цены оптом и в розницу | Eco Landshaft',
    metaDesc: 'Оптовая и розничная продажа искусственного газона (10–50 мм), натурального рулонного газона из питомника, датских семян DLF и резиновых покрытий EPDM.',
    h1: 'Магазин искусственного и натурального (рулонного) газона',
    subtitle: 'Ландшафтная и спортивная трава FIFA от 10 до 50 мм, свежесрезанный рулонный газон из питомника и оригинальные семена DLF (Дания).',
    defaultFilter: 'all'
  });
  writePage('katalog/index.html', catUzHtml);
  writePage('uz-kr/katalog/index.html', convertUzHtmlToUzKr(catUzHtml, '/katalog/'));
  writePage('ru/katalog/index.html', catRuHtml);

  // 3. Catalog: Sun'iy gazon / Искусственный газон
  const suniyUzHtml = buildCatalogPage({
    subpath: '/katalog/suniy-gazon/',
    title: "Sun'iy gazon Toshkentda — optom va chakana sotib olish (48 800 so'm/m² dan) | Eco Landshaft",
    metaDesc: "Hovli, kafe, ofis va futbol stadionlari uchun 10mm, 20mm, 30mm, 40mm va 50mm sun'iy gazon (sun'iy chim) optom va chakana narxda.",
    h1: "Sun'iy gazon katalogi (10 mm – 50 mm)",
    subtitle: "Landshaft, hovli, restoran va FIFA mini-futbol maydonlari uchun quyoshda o'chmaydigan sertifikatlangan sun'iy chimlar.",
    defaultFilter: 'suniy'
  });
  const suniyRuHtml = buildCatalogPageRu({
    canonicalPath: '/ru/katalog/iskusstvennyy-gazon/',
    basePath: '/katalog/suniy-gazon/',
    title: 'Искусственный газон в Ташкенте — купить оптом и в розницу (от 48 800 сум/м²) | Eco Landshaft',
    metaDesc: 'Купить искусственный газон (искусственную траву) 10 мм, 20 мм, 30 мм, 40 мм и 50 мм для дома, кафе, офиса и футбольных стадионов оптом из первых рук.',
    h1: 'Каталог искусственного газона (10 мм – 50 мм)',
    subtitle: 'Сертифицированная искусственная трава с УФ-защитой для ландшафта, террас, ресторанов и мини-футбольных полей стандарта FIFA.',
    defaultFilter: 'suniy'
  });
  writePage('katalog/suniy-gazon/index.html', suniyUzHtml);
  writePage('uz-kr/katalog/suniy-gazon/index.html', convertUzHtmlToUzKr(suniyUzHtml, '/katalog/suniy-gazon/'));
  writePage('ru/katalog/iskusstvennyy-gazon/index.html', suniyRuHtml);

  // 4. Catalog: Rulonli gazon / Натуральный рулонный газон
  const rulonliUzHtml = buildCatalogPage({
    subpath: '/katalog/rulonli-gazon/',
    title: 'Rulonli gazon narxlari Toshkentda — pitomnikdan tabiiy tayyor gazon | Eco Landshaft',
    metaDesc: "Toshkent pitomnigidan bugun kesilgan 100% tabiiy rulonli gazon (tayyor chim) sotish va yotqizish. 9 000 – 30 000 so'm/m².",
    h1: 'Tabiiy rulonli gazon — pitomnikdan tayyor chim',
    subtitle: 'Zich ildiz tizimiga ega 2 yillik tayyor rulonli gazon: hovlingiz 1 kunda zumraddek yashil gilamga aylanadi.',
    defaultFilter: 'rulonli'
  });
  const rulonliRuHtml = buildCatalogPageRu({
    canonicalPath: '/ru/katalog/rulonnyy-gazon/',
    basePath: '/katalog/rulonli-gazon/',
    title: 'Рулонный газон в Ташкенте — купить натуральный готовый газон из питомника | Eco Landshaft',
    metaDesc: 'Продажа и укладка свежесрезанного 100% натурального рулонного газона из собственного питомника в Ташкенте. Цена от 9 000 до 30 000 сум/м².',
    h1: 'Натуральный рулонный газон — готовый дерн из питомника',
    subtitle: 'Двухлетний плотный рулонный газон с мощной корневой системой: ваш участок превратится в изумрудный ковер всего за 1 день.',
    defaultFilter: 'rulonli'
  });
  writePage('katalog/rulonli-gazon/index.html', rulonliUzHtml);
  writePage('uz-kr/katalog/rulonli-gazon/index.html', convertUzHtmlToUzKr(rulonliUzHtml, '/katalog/rulonli-gazon/'));
  writePage('ru/katalog/rulonnyy-gazon/index.html', rulonliRuHtml);

  // 5. All 6 Service Pages
  SERVICES.forEach((service, idx) => {
    const serviceRu = SERVICES_RU[idx];
    const relFileUz = service.url.replace(/^\//, '') + 'index.html';
    const relFileRu = serviceRu.url.replace(/^\//, '') + 'index.html';
    const uzHtml = buildServicePage(service);
    const ruHtml = buildServicePageRu(serviceRu);

    writePage(relFileUz, uzHtml);
    writePage(`uz-kr/${relFileUz}`, convertUzHtmlToUzKr(uzHtml, service.url));
    writePage(relFileRu, ruHtml);
  });

  // 6. All 6 Regional Pages
  REGIONS.forEach((region, idx) => {
    const regionRu = REGIONS_RU[idx];
    const relFileUz = region.url.replace(/^\//, '') + 'index.html';
    const relFileRu = regionRu.url.replace(/^\//, '') + 'index.html';
    const uzHtml = buildRegionPage(region);
    const ruHtml = buildRegionPageRu(regionRu);

    writePage(relFileUz, uzHtml);
    writePage(`uz-kr/${relFileUz}`, convertUzHtmlToUzKr(uzHtml, region.url));
    writePage(relFileRu, ruHtml);
  });

  // 7. About page
  const aboutUzHtml = buildAboutPage();
  const aboutRuHtml = buildAboutPageRu();
  writePage('biz-haqimizda/index.html', aboutUzHtml);
  writePage('uz-kr/biz-haqimizda/index.html', convertUzHtmlToUzKr(aboutUzHtml, '/biz-haqimizda/'));
  writePage('ru/o-nas/index.html', aboutRuHtml);

  // 8. Blog page
  const blogUzHtml = buildBlogPage();
  const blogRuHtml = buildBlogPageRu();
  writePage('blog/index.html', blogUzHtml);
  writePage('uz-kr/blog/index.html', convertUzHtmlToUzKr(blogUzHtml, '/blog/'));
  writePage('ru/blog/index.html', blogRuHtml);

  // 9. Contact page
  const contactUzHtml = buildContactPage();
  const contactRuHtml = buildContactPageRu();
  writePage('boglanish/index.html', contactUzHtml);
  writePage('uz-kr/boglanish/index.html', convertUzHtmlToUzKr(contactUzHtml, '/boglanish/'));
  writePage('ru/kontakty/index.html', contactRuHtml);

  // 10. Multi-language Sitemap with xhtml:link hreflang annotations
  const sitemapEntries = [];
  ROUTE_MAP.forEach((route) => {
    const uzLoc = `${BRAND.domain}${route.uz}`;
    const uzKrLoc = `${BRAND.domain}${route['uz-kr']}`;
    const ruLoc = `${BRAND.domain}${route.ru}`;
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="uz" href="${uzLoc}"/>`,
      `    <xhtml:link rel="alternate" hreflang="uz-Latn" href="${uzLoc}"/>`,
      `    <xhtml:link rel="alternate" hreflang="uz-Cyrl" href="${uzKrLoc}"/>`,
      `    <xhtml:link rel="alternate" hreflang="ru" href="${ruLoc}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${uzLoc}"/>`
    ].join('\n');

    [
      { loc: uzLoc, prio: route.uz === '/' ? '1.0' : '0.9' },
      { loc: uzKrLoc, prio: route.uz === '/' ? '0.9' : '0.85' },
      { loc: ruLoc, prio: route.ru === '/ru/' ? '0.95' : '0.9' }
    ].forEach(({ loc, prio }) => {
      sitemapEntries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${prio}</priority>
${alternates}
  </url>`);
    });
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Generated: sitemap.xml (${ROUTE_MAP.length * 3} localized URLs with hreflang)`);
}

buildAll();
