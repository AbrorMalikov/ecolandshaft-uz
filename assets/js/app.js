/* ==========================================================================
   ECO LANDSHAFT (ecolandshaft.uz) — Interactive Client Engine
   - Standard Header Menu + Xizmatlar Submenu + Mobile Navigation
   - 5-Language Switcher (UZ Latin, UZ Cyrillic, RU, EN, ZH)
   - Multi-Service & E-Commerce Smart Calculator
   - E-Commerce Filter & Optom/Chakana Price Toggle
   - Before/After Interactive Comparison Slider
   - Phone-Only Consultation Lead Forms (+998 mask)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderNavigation();
  initLanguageSwitcher();
  initSmartCalculator();
  initEcommerceCatalog();
  initBeforeAfterSliders();
  initPortfolioFilter();
  initPhoneOnlyForms();
  initQuickModal();
  initRubberConstructor();
});

/* --------------------------------------------------------------------------
   1. HEADER NAVIGATION, SUBMENU & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initHeaderNavigation() {
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNavMenu');
  const submenuParents = document.querySelectorAll('.has-submenu');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('mobile-open');
    });
  }

  submenuParents.forEach((item) => {
    const trigger = item.querySelector('.js-submenu-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 920) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (mainNav && !mainNav.contains(e.target) && e.target !== mobileBtn) {
      mainNav.classList.remove('mobile-open');
    }
  });
}

/* --------------------------------------------------------------------------
   2. 5-LANGUAGE SWITCHER (Dedicated URLs for UZ, UZ-KR, RU + EN/ZH preview)
   -------------------------------------------------------------------------- */
function getPageLang() {
  const htmlLang = (document.documentElement.getAttribute('lang') || 'uz').toLowerCase();
  if (htmlLang === 'ru') return 'ru';
  if (htmlLang === 'uz-cyrl') return 'uz-Cyrl';
  if (htmlLang === 'en') return 'en';
  if (htmlLang === 'zh') return 'zh';
  return 'uz';
}

function initLanguageSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  const trigger = document.querySelector('.lang-trigger');
  const options = document.querySelectorAll('.lang-option');

  if (!switcher || !trigger) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    switcher.classList.remove('open');
  });

  options.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      // If it's a real <a href="..."> link (UZ, UZ-KR, RU), allow normal navigation
      if (opt.tagName === 'A' && opt.getAttribute('href')) {
        switcher.classList.remove('open');
        return;
      }
      e.stopPropagation();
      const lang = opt.dataset.lang;
      const label = opt.dataset.label;
      switcher.classList.remove('open');

      const messages = {
        en: 'English localization is coming soon (ecolandshaft.uz/en/). Available languages: UZ, ЎЗ (/uz-kr/), RU (/ru/).',
        zh: '中文版本即将上线 (ecolandshaft.uz/zh/)。当前可用语言：UZ, ЎЗ (/uz-kr/), RU (/ru/)。'
      };
      showToast(messages[lang] || 'Language: ' + label);
    });
  });
}

/* --------------------------------------------------------------------------
   3. SMART INTERACTIVE CONVERSION CALCULATOR (UZ / UZ-KR / RU)
   -------------------------------------------------------------------------- */
function initSmartCalculator() {
  const calcRoot = document.getElementById('smartCalculator');
  if (!calcRoot) return;

  const pageLang = getPageLang();

  const serviceRatesByLang = {
    uz: {
      'suniy-gazon': {
        title: "Sun'iy gazon (vors 20–50 mm)",
        basePrice: 89000,
        rollSize: 50,
        daysPer100m2: 1,
        matLabel: 'Rulonlar soni (2x25m)'
      },
      'rulonli-gazon': {
        title: 'Tabiiy rulonli gazon + yotqizish',
        basePrice: 35000,
        rollSize: 0.8,
        daysPer100m2: 1.5,
        matLabel: 'Tabiiy rulonlar soni'
      },
      'gazon-ekish': {
        title: "Gazon urug'ini sepish va yer tayyorlash",
        basePrice: 20000,
        rollSize: 25,
        daysPer100m2: 2,
        matLabel: "Daniya urug'i (qop / 10kg)"
      },
      'stadion-qurish': {
        title: "Mini-futbol stadion / tennis kort ('pod klyuch')",
        basePrice: 217000,
        rollSize: 100,
        daysPer100m2: 3.5,
        matLabel: 'FIFA sertifikatli chim + drenaj'
      },
      'rezina-maydon': {
        title: 'Bolalar maydonchasi va EPDM/SBR rezina qoplama',
        basePrice: 180000,
        rollSize: 25,
        daysPer100m2: 1.8,
        matLabel: 'EPDM/SBR granula + PU kley'
      },
      'avtopoliv-landshaft': {
        title: 'Landshaft dizayn + Hunter avtopoliv tizimi',
        basePrice: 49000,
        rollSize: 15,
        daysPer100m2: 2.2,
        matLabel: 'Hunter USA forsunka va klapanlar'
      }
    },
    'uz-Cyrl': {
      'suniy-gazon': {
        title: 'Сунъий газон (ворс 20–50 мм)',
        basePrice: 89000,
        rollSize: 50,
        daysPer100m2: 1,
        matLabel: 'Рулонлар сони (2x25м)'
      },
      'rulonli-gazon': {
        title: 'Табиий рулонли газон + ётқизиш',
        basePrice: 35000,
        rollSize: 0.8,
        daysPer100m2: 1.5,
        matLabel: 'Табиий рулонлар сони'
      },
      'gazon-ekish': {
        title: 'Газон уруғини сепиш ва ер тайёрлаш',
        basePrice: 20000,
        rollSize: 25,
        daysPer100m2: 2,
        matLabel: 'Дания уруғи (қоп / 10кг)'
      },
      'stadion-qurish': {
        title: 'Мини-футбол стадион / теннис корт («под ключ»)',
        basePrice: 217000,
        rollSize: 100,
        daysPer100m2: 3.5,
        matLabel: 'FIFA сертификатли чим + дренаж'
      },
      'rezina-maydon': {
        title: 'Болалар майдончаси ва EPDM/SBR резина қоплама',
        basePrice: 180000,
        rollSize: 25,
        daysPer100m2: 1.8,
        matLabel: 'EPDM/SBR гранула + ПУ клей'
      },
      'avtopoliv-landshaft': {
        title: 'Ландшафт дизайн + Hunter автополив тизими',
        basePrice: 49000,
        rollSize: 15,
        daysPer100m2: 2.2,
        matLabel: 'Hunter USA форсунка ва клапанлар'
      }
    },
    ru: {
      'suniy-gazon': {
        title: 'Искусственный газон (ворс 20–50 мм)',
        basePrice: 89000,
        rollSize: 50,
        daysPer100m2: 1,
        matLabel: 'Количество рулонов (2×25м)'
      },
      'rulonli-gazon': {
        title: 'Натуральный рулонный газон + укладка',
        basePrice: 35000,
        rollSize: 0.8,
        daysPer100m2: 1.5,
        matLabel: 'Количество натуральных рулонов'
      },
      'gazon-ekish': {
        title: 'Посев семян газона и подготовка грунта',
        basePrice: 20000,
        rollSize: 25,
        daysPer100m2: 2,
        matLabel: 'Датские семена DLF (мешок 10 кг)'
      },
      'stadion-qurish': {
        title: 'Мини-футбольное поле / теннисный корт («под ключ»)',
        basePrice: 217000,
        rollSize: 100,
        daysPer100m2: 3.5,
        matLabel: 'Сертифицированный газон FIFA + дренаж'
      },
      'rezina-maydon': {
        title: 'Детская площадка и покрытие EPDM/SBR',
        basePrice: 180000,
        rollSize: 25,
        daysPer100m2: 1.8,
        matLabel: 'Крошка EPDM/SBR + ПУ связующее'
      },
      'avtopoliv-landshaft': {
        title: 'Ландшафтный дизайн + автополив Hunter',
        basePrice: 49000,
        rollSize: 15,
        daysPer100m2: 2.2,
        matLabel: 'Форсунки и клапаны Hunter (США)'
      }
    },
    en: {
      'suniy-gazon': {
        title: 'Artificial grass (pile 20–50 mm)',
        basePrice: 89000,
        rollSize: 50,
        daysPer100m2: 1,
        matLabel: 'Rolls required (2×25m)'
      },
      'rulonli-gazon': {
        title: 'Natural turf rolls + installation',
        basePrice: 35000,
        rollSize: 0.8,
        daysPer100m2: 1.5,
        matLabel: 'Number of turf sod rolls'
      },
      'gazon-ekish': {
        title: 'Lawn seeding & soil preparation',
        basePrice: 20000,
        rollSize: 25,
        daysPer100m2: 2,
        matLabel: 'Danish seed bags (10 kg)'
      },
      'stadion-qurish': {
        title: 'Mini-football pitch / court (turnkey)',
        basePrice: 217000,
        rollSize: 100,
        daysPer100m2: 3.5,
        matLabel: 'FIFA turf + drainage base'
      },
      'rezina-maydon': {
        title: 'EPDM/SBR rubber playground surfacing',
        basePrice: 180000,
        rollSize: 25,
        daysPer100m2: 1.8,
        matLabel: 'EPDM/SBR granules + PU resin'
      },
      'avtopoliv-landshaft': {
        title: 'Landscape design + Hunter irrigation',
        basePrice: 49000,
        rollSize: 15,
        daysPer100m2: 2.2,
        matLabel: 'Hunter USA nozzles & valves'
      }
    },
    zh: {
      'suniy-gazon': {
        title: '人造草坪（草高 20–50 毫米）',
        basePrice: 89000,
        rollSize: 50,
        daysPer100m2: 1,
        matLabel: '标准草卷数量 (2×25米)'
      },
      'rulonli-gazon': {
        title: '天然草卷 + 专业铺设施工',
        basePrice: 35000,
        rollSize: 0.8,
        daysPer100m2: 1.5,
        matLabel: '天然草卷块数 (0.8m²/块)'
      },
      'gazon-ekish': {
        title: '草籽播种与土壤改良平整',
        basePrice: 20000,
        rollSize: 25,
        daysPer100m2: 2,
        matLabel: '丹麦进口草籽包数 (10kg/袋)'
      },
      'stadion-qurish': {
        title: '五人制足球场/网球场一站式建设',
        basePrice: 217000,
        rollSize: 100,
        daysPer100m2: 3.5,
        matLabel: 'FIFA草坪与透水碎石基层'
      },
      'rezina-maydon': {
        title: '儿童乐园EPDM/SBR无缝橡胶地坪',
        basePrice: 180000,
        rollSize: 25,
        daysPer100m2: 1.8,
        matLabel: 'EPDM环保颗粒及高品质胶水'
      },
      'avtopoliv-landshaft': {
        title: '园林景观设计 + Hunter智能喷灌',
        basePrice: 49000,
        rollSize: 15,
        daysPer100m2: 2.2,
        matLabel: '美国Hunter喷嘴及电磁阀组'
      }
    }
  };

  const serviceRates = serviceRatesByLang[pageLang] || serviceRatesByLang.uz;

  const shellEl = calcRoot.querySelector('.calculator-bento-shell');
  let currentService = (shellEl && shellEl.dataset.defaultService) || 'suniy-gazon';
  const typeBtns = calcRoot.querySelectorAll('.calc-type-btn');
  const rangeInput = document.getElementById('calcAreaRange');
  const areaDisplay = document.getElementById('calcAreaDisplay');
  const optPrep = document.getElementById('calcOptPrep');
  const optInstall = document.getElementById('calcOptInstall');
  const optIrrig = document.getElementById('calcOptIrrig');
  const optWholesale = document.getElementById('calcOptWholesale');

  const outTotal = document.getElementById('calcTotalSum');
  const outServiceTitle = document.getElementById('calcOutService');
  const outArea = document.getElementById('calcOutArea');
  const outRolls = document.getElementById('calcOutRolls');
  const outDays = document.getElementById('calcOutDays');
  const outMatLabel = document.getElementById('calcOutMatLabel');

  function updateCalculation() {
    const cfg = serviceRates[currentService] || serviceRates['suniy-gazon'];
    const area = parseInt(rangeInput ? rangeInput.value : 150, 10) || 150;

    if (areaDisplay) {
      const sotix = (area / 100).toFixed(1);
      if (pageLang === 'ru') {
        areaDisplay.textContent = `${area.toLocaleString('ru-RU')} м² (${sotix} сотки)`;
      } else if (pageLang === 'uz-Cyrl') {
        areaDisplay.textContent = `${area.toLocaleString('ru-RU')} м² (${sotix} сотих)`;
      } else if (pageLang === 'en') {
        areaDisplay.textContent = `${area.toLocaleString('en-US')} m² (${(area * 10.7639).toFixed(0)} sq.ft)`;
      } else if (pageLang === 'zh') {
        areaDisplay.textContent = `${area.toLocaleString('zh-CN')} 平方米 (${(area * 0.0015).toFixed(2)} 亩)`;
      } else {
        areaDisplay.textContent = `${area.toLocaleString('ru-RU')} m² (${sotix} sotix)`;
      }
    }

    let rate = cfg.basePrice;
    if (optPrep && optPrep.checked) rate += 15000;
    if (optInstall && optInstall.checked) rate += 20000;
    if (optIrrig && optIrrig.checked) rate += 45000;
    if (optWholesale && optWholesale.checked) rate = Math.round(rate * 0.85);

    const total = area * rate;
    const rolls = Math.max(1, Math.ceil(area / cfg.rollSize));
    const days = Math.max(1, Math.ceil((area / 100) * cfg.daysPer100m2));

    if (pageLang === 'ru') {
      if (outTotal) outTotal.textContent = `${total.toLocaleString('ru-RU')} сум`;
      if (outArea) outArea.textContent = `${area.toLocaleString('ru-RU')} м²`;
      if (outRolls) outRolls.textContent = `${rolls} ед. / компл.`;
      if (outDays) outDays.textContent = `${days} – ${days + 2} дн.`;
    } else if (pageLang === 'uz-Cyrl') {
      if (outTotal) outTotal.textContent = `${total.toLocaleString('ru-RU')} сўм`;
      if (outArea) outArea.textContent = `${area.toLocaleString('ru-RU')} м²`;
      if (outRolls) outRolls.textContent = `${rolls} бирлик / тўплам`;
      if (outDays) outDays.textContent = `${days} – ${days + 2} кун`;
    } else if (pageLang === 'en') {
      if (outTotal) outTotal.textContent = `${total.toLocaleString('en-US')} UZS`;
      if (outArea) outArea.textContent = `${area.toLocaleString('en-US')} m²`;
      if (outRolls) outRolls.textContent = `${rolls} units / sets`;
      if (outDays) outDays.textContent = `${days} – ${days + 2} days`;
    } else if (pageLang === 'zh') {
      if (outTotal) outTotal.textContent = `${total.toLocaleString('zh-CN')} 索姆`;
      if (outArea) outArea.textContent = `${area.toLocaleString('zh-CN')} 平方米`;
      if (outRolls) outRolls.textContent = `${rolls} 套/件`;
      if (outDays) outDays.textContent = `${days} – ${days + 2} 天`;
    } else {
      if (outTotal) outTotal.textContent = `${total.toLocaleString('ru-RU')} so'm`;
      if (outArea) outArea.textContent = `${area.toLocaleString('ru-RU')} m²`;
      if (outRolls) outRolls.textContent = `${rolls} birlik / to'plam`;
      if (outDays) outDays.textContent = `${days} – ${days + 2} kun`;
    }

    if (outServiceTitle) outServiceTitle.textContent = cfg.title;
    if (outMatLabel) outMatLabel.textContent = cfg.matLabel;
  }

  typeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      typeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentService = btn.dataset.service;
      updateCalculation();
    });
  });

  if (rangeInput) rangeInput.addEventListener('input', updateCalculation);
  [optPrep, optInstall, optIrrig, optWholesale].forEach((chk) => {
    if (chk) chk.addEventListener('change', updateCalculation);
  });

  updateCalculation();
}

/* --------------------------------------------------------------------------
   4. E-COMMERCE CATALOG FILTER & OPTOM/CHAKANA PRICE TOGGLE
   -------------------------------------------------------------------------- */
function initEcommerceCatalog() {
  const filterBtns = document.querySelectorAll('.ecom-tab-btn[data-filter]');
  const priceModeBtns = document.querySelectorAll('.price-mode-btn');
  const productCards = document.querySelectorAll('.product-card');
  const pageLang = getPageLang();

  let activeCategory = 'all';
  let priceMode = 'retail';

  function refreshProducts() {
    productCards.forEach((card) => {
      const cat = card.dataset.category;
      const show = activeCategory === 'all' || cat === activeCategory;
      card.style.display = show ? 'flex' : 'none';

      const priceEl = card.querySelector('.js-product-price');
      if (priceEl) {
        const retail = parseInt(card.dataset.retail, 10);
        const wholesale = parseInt(card.dataset.wholesale, 10);
        const unit = card.dataset.unit || (pageLang === 'uz' ? 'm²' : 'м²');
        const val = priceMode === 'wholesale' ? wholesale : retail;
        if (pageLang === 'ru') {
          priceEl.innerHTML = `${val.toLocaleString('ru-RU')} сум/${unit} <small class="js-price-note">${
            priceMode === 'wholesale' ? 'Оптом (из 1-х рук)' : 'Розничная цена'
          }</small>`;
        } else if (pageLang === 'uz-Cyrl') {
          priceEl.innerHTML = `${val.toLocaleString('ru-RU')} сўм/${unit} <small class="js-price-note">${
            priceMode === 'wholesale' ? 'Оптом (1-қўлдан)' : 'Чакана нарх'
          }</small>`;
        } else if (pageLang === 'en') {
          priceEl.innerHTML = `${val.toLocaleString('en-US')} UZS/${unit} <small class="js-price-note">${
            priceMode === 'wholesale' ? 'Wholesale (direct)' : 'Retail price'
          }</small>`;
        } else if (pageLang === 'zh') {
          priceEl.innerHTML = `${val.toLocaleString('zh-CN')} 索姆/${unit} <small class="js-price-note">${
            priceMode === 'wholesale' ? '厂家一手批发价' : '零售参考价'
          }</small>`;
        } else {
          priceEl.innerHTML = `${val.toLocaleString('ru-RU')} so'm/${unit} <small class="js-price-note">${
            priceMode === 'wholesale' ? "Optom (1-qo'ldan)" : 'Chakana narx'
          }</small>`;
        }
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      refreshProducts();
    });
  });

  priceModeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      priceModeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      priceMode = btn.dataset.mode;
      refreshProducts();
    });
  });
}

/* --------------------------------------------------------------------------
   5. BEFORE / AFTER INTERACTIVE SLIDER
   -------------------------------------------------------------------------- */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.before-after-card');
  sliders.forEach((card) => {
    const range = card.querySelector('.ba-range-input');
    const beforeLayer = card.querySelector('.ba-before');
    const handle = card.querySelector('.ba-handle');

    if (!range || !beforeLayer || !handle) return;

    range.addEventListener('input', () => {
      const val = range.value;
      beforeLayer.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      handle.style.left = `${val}%`;
    });
  });
}

/* --------------------------------------------------------------------------
   6. PORTFOLIO CATEGORY FILTER
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.js-portfolio-tab');
  const items = document.querySelectorAll('.js-portfolio-item');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.pfilter;

      items.forEach((item) => {
        if (filter === 'all' || item.dataset.pcat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. PHONE-ONLY LEAD FORMS (+998 MASK & INSTANT CONSULTATION)
   -------------------------------------------------------------------------- */
function initPhoneOnlyForms() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach((input) => {
    input.addEventListener('focus', () => {
      if (!input.value.trim()) {
        input.value = '+998 ';
      }
    });

    input.addEventListener('input', (e) => {
      let digits = e.target.value.replace(/\D/g, '');
      if (!digits.startsWith('998')) {
        digits = '998' + digits;
      }
      digits = digits.slice(0, 12);

      let formatted = '+998';
      if (digits.length > 3) formatted += ' (' + digits.slice(3, 5);
      if (digits.length >= 5) formatted += ') ' + digits.slice(5, 8);
      if (digits.length >= 8) formatted += '-' + digits.slice(8, 10);
      if (digits.length >= 10) formatted += '-' + digits.slice(10, 12);

      e.target.value = formatted;
    });
  });

  const forms = document.querySelectorAll('.js-phone-form');
  const pageLang = getPageLang();
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const telInput = form.querySelector('input[type="tel"]');
      const rawDigits = telInput ? telInput.value.replace(/\D/g, '') : '';

      if (rawDigits.length < 12) {
        if (pageLang === 'ru') {
          showToast('Пожалуйста, введите полный номер телефона: +998 (XX) XXX-XX-XX');
        } else if (pageLang === 'uz-Cyrl') {
          showToast('Илтимос, тўлиқ телефон рақамингизни киритинг: +998 (XX) XXX-XX-XX');
        } else if (pageLang === 'en') {
          showToast('Please enter a complete phone number: +998 (XX) XXX-XX-XX');
        } else if (pageLang === 'zh') {
          showToast('请输入完整的电话号码：+998 (XX) XXX-XX-XX');
        } else {
          showToast("Iltimos, to'liq telefon raqamingizni kiriting: +998 (XX) XXX-XX-XX");
        }
        if (telInput) telInput.focus();
        return;
      }

      const context = form.dataset.context || 'Bepul konsultatsiya';
      if (pageLang === 'ru') {
        showToast(`Спасибо! Номер ${telInput.value} принят (${context}). Наш специалист свяжется с вами в течение 15 минут!`);
      } else if (pageLang === 'uz-Cyrl') {
        showToast(`Раҳмат! ${telInput.value} рақами қабул қилинди (${context}). Мутахассисимиз 15 дақиқа ичида боғланади!`);
      } else if (pageLang === 'en') {
        showToast(`Thank you! Phone ${telInput.value} registered (${context}). Our specialist will contact you within 15 minutes!`);
      } else if (pageLang === 'zh') {
        showToast(`感谢您的提交！电话号码 ${telInput.value} 已登记 (${context})。专员将在15分钟内致电联系！`);
      } else {
        showToast(`Rahmat! ${telInput.value} raqami qabul qilindi (${context}). Mutaxassisimiz 15 daqiqa ichida bog'lanadi!`);
      }
      telInput.value = '';

      const modal = document.getElementById('quickLeadModal');
      if (modal) modal.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------------------------
   8. QUICK CONSULTATION / 1-CLICK ORDER MODAL
   -------------------------------------------------------------------------- */
function initQuickModal() {
  const modal = document.getElementById('quickLeadModal');
  const modalTitle = document.getElementById('modalLeadTitle');
  const modalSub = document.getElementById('modalLeadSub');
  const modalForm = modal ? modal.querySelector('form') : null;
  const closeBtn = document.getElementById('modalCloseBtn');
  const pageLang = getPageLang();

  document.querySelectorAll('.js-open-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!modal) return;
      const defaultTitle =
        pageLang === 'ru'
          ? 'Бесплатная консультация и замер'
          : pageLang === 'uz-Cyrl'
          ? 'Бепул консультация ва ўлчов'
          : pageLang === 'en'
          ? 'Free Consultation & Measurement'
          : pageLang === 'zh'
          ? '免费咨询与现场测量'
          : "Bepul konsultatsiya va o'lchov";
      const defaultSub =
        pageLang === 'ru'
          ? 'Оставьте ваш номер телефона — свяжемся за 15 минут и рассчитаем точную смету.'
          : pageLang === 'uz-Cyrl'
          ? 'Фақат телефон рақамингизни қолдиринг — 15 дақиқада боғланиб, аниқ смета берамиз.'
          : pageLang === 'en'
          ? 'Leave your phone number — our specialist will call back in 15 minutes.'
          : pageLang === 'zh'
          ? '留下您的联系电话，我们的工程师将在15分钟内与您联系。'
          : "Faqat telefon raqamingizni qoldiring — 15 daqiqada bog'lanib, aniq smeta beramiz.";
      const title = btn.dataset.title || defaultTitle;
      const sub = btn.dataset.sub || defaultSub;
      if (modalTitle) modalTitle.textContent = title;
      if (modalSub) modalSub.textContent = sub;
      if (modalForm) modalForm.dataset.context = title;
      modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   9. RUBBER PLAYGROUND COLOR & THICKNESS CONSTRUCTOR
   -------------------------------------------------------------------------- */
function initRubberConstructor() {
  const swatches = document.querySelectorAll('.color-swatch');
  const previewBox = document.getElementById('rubberPreviewSurface');
  const colorLabel = document.getElementById('rubberSelectedColorName');

  swatches.forEach((sw) => {
    sw.addEventListener('click', () => {
      swatches.forEach((s) => s.classList.remove('active'));
      sw.classList.add('active');
      const color = sw.dataset.color;
      const name = sw.dataset.name;
      if (previewBox) previewBox.style.backgroundColor = color;
      if (colorLabel) colorLabel.textContent = name;
    });
  });
}

/* --------------------------------------------------------------------------
   TOAST HELPER
   -------------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4600);
}
