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
   2. 5-LANGUAGE SWITCHER (O'zbek Lotin, O'zbek Kirill, Rus, Ingliz, Xitoy)
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  const trigger = document.querySelector('.lang-trigger');
  const currentLabel = document.querySelector('.lang-current-label');
  const options = document.querySelectorAll('.lang-option');

  if (!switcher || !trigger) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    switcher.classList.remove('open');
  });

  options.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      const label = btn.dataset.label;

      options.forEach((o) => o.classList.remove('active'));
      btn.classList.add('active');
      if (currentLabel) currentLabel.textContent = label;
      switcher.classList.remove('open');

      if (lang === 'uz-Cyrl') {
        transliteratePageToCyrillic();
        showToast("Саҳифа Ўзбек (Кирилл) алифбосига ўтказилди");
      } else if (lang === 'uz-Latn') {
        restoreLatinText();
        showToast("Sahifa O'zbek (Lotin) tiliga o'tkazildi");
      } else {
        restoreLatinText();
        const messages = {
          ru: "Основной язык сайта: O'zbek tili. Русская версия скоро будет доступна (ecolandshaft.uz/ru/).",
          en: "Primary language: Uzbek. English localization is ready for connection (ecolandshaft.uz/en/).",
          zh: "当前主语言为乌兹别克语 (O'zbek)。中文界面接口已就绪 (ecolandshaft.uz/zh/)。"
        };
        showToast(messages[lang] || "Til tanlandi: " + label);
      }
    });
  });
}

const originalTextNodes = new Map();

function latinToCyrillicUzbek(text) {
  if (!text || !/[a-zA-Z]/.test(text)) return text;
  let res = text;
  const multiMap = [
    [/O‘|O'|O`/g, 'Ў'], [/o‘|o'|o`/g, 'ў'],
    [/G‘|G'|G`/g, 'Ғ'], [/g‘|g'|g`/g, 'ғ'],
    [/Sh|SH/g, 'Ш'], [/sh/g, 'ш'],
    [/Ch|CH/g, 'Ч'], [/ch/g, 'ч'],
    [/Yo|YO/g, 'Ё'], [/yo/g, 'ё'],
    [/Yu|YU/g, 'Ю'], [/yu/g, 'ю'],
    [/Ya|YA/g, 'Я'], [/ya/g, 'я'],
    [/Ye|YE/g, 'Е'], [/ye/g, 'е'],
    [/Ts|TS/g, 'Ц'], [/ts/g, 'ц'],
    [/’|'/g, 'ъ']
  ];
  multiMap.forEach(([regex, rep]) => {
    res = res.replace(regex, rep);
  });

  const charMap = {
    A: 'А', a: 'а', B: 'Б', b: 'б', D: 'Д', d: 'д', E: 'Э', e: 'е',
    F: 'Ф', f: 'ф', G: 'Г', g: 'г', H: 'Ҳ', h: 'ҳ', I: 'И', i: 'и',
    J: 'Ж', j: 'ж', K: 'К', k: 'к', L: 'Л', l: 'л', M: 'М', m: 'м',
    N: 'Н', n: 'н', O: 'О', o: 'о', P: 'П', p: 'п', Q: 'Қ', q: 'қ',
    R: 'Р', r: 'р', S: 'С', s: 'с', T: 'Т', t: 'т', U: 'У', u: 'у',
    V: 'В', v: 'в', X: 'Х', x: 'х', Y: 'Й', y: 'й', Z: 'З', z: 'з'
  };

  return res.replace(/[A-Za-z]/g, (ch) => charMap[ch] || ch);
}

function transliteratePageToCyrillic() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent) continue;
    const tag = parent.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || parent.closest('.lang-menu')) continue;
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }
    node.nodeValue = latinToCyrillicUzbek(originalTextNodes.get(node));
  }
}

function restoreLatinText() {
  originalTextNodes.forEach((val, node) => {
    if (node && node.parentNode) {
      node.nodeValue = val;
    }
  });
}

/* --------------------------------------------------------------------------
   3. SMART INTERACTIVE CONVERSION CALCULATOR
   -------------------------------------------------------------------------- */
function initSmartCalculator() {
  const calcRoot = document.getElementById('smartCalculator');
  if (!calcRoot) return;

  const serviceRates = {
    'suniy-gazon': {
      title: "Sun'iy gazon (vors 20–50 mm)",
      basePrice: 89000,
      unitLabel: "m²",
      rollSize: 50,
      daysPer100m2: 1,
      matLabel: "Rulonlar soni (2x25m)"
    },
    'rulonli-gazon': {
      title: "Tabiiy rulonli gazon + yotqizish",
      basePrice: 35000,
      unitLabel: "m²",
      rollSize: 0.8,
      daysPer100m2: 1.5,
      matLabel: "Tabiiy rulonlar soni"
    },
    'gazon-ekish': {
      title: "Gazon urug'ini sepish va yer tayyorlash",
      basePrice: 20000,
      unitLabel: "m²",
      rollSize: 25,
      daysPer100m2: 2,
      matLabel: "Daniya urug'i (qop / 10kg)"
    },
    'stadion-qurish': {
      title: "Mini-futbol stadion / tennis kort ('pod klyuch')",
      basePrice: 217000,
      unitLabel: "m²",
      rollSize: 100,
      daysPer100m2: 3.5,
      matLabel: "FIFA sertifikatli chim + drenaj"
    },
    'rezina-maydon': {
      title: "Bolalar maydonchasi va EPDM/SBR rezina qoplama",
      basePrice: 180000,
      unitLabel: "m²",
      rollSize: 25,
      daysPer100m2: 1.8,
      matLabel: "EPDM/SBR granula + PU kley"
    },
    'avtopoliv-landshaft': {
      title: "Landshaft dizayn + Hunter avtopoliv tizimi",
      basePrice: 49000,
      unitLabel: "m²",
      rollSize: 15,
      daysPer100m2: 2.2,
      matLabel: "Hunter USA forsunka va klapanlar"
    }
  };

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
      areaDisplay.textContent = `${area.toLocaleString('ru-RU')} m² (${sotix} sotix)`;
    }

    let rate = cfg.basePrice;
    if (optPrep && optPrep.checked) rate += 15000;
    if (optInstall && optInstall.checked) rate += 20000;
    if (optIrrig && optIrrig.checked) rate += 45000;
    if (optWholesale && optWholesale.checked) rate = Math.round(rate * 0.85);

    const total = area * rate;
    const rolls = Math.max(1, Math.ceil(area / cfg.rollSize));
    const days = Math.max(1, Math.ceil((area / 100) * cfg.daysPer100m2));

    if (outTotal) outTotal.textContent = `${total.toLocaleString('ru-RU')} so'm`;
    if (outServiceTitle) outServiceTitle.textContent = cfg.title;
    if (outArea) outArea.textContent = `${area.toLocaleString('ru-RU')} m²`;
    if (outMatLabel) outMatLabel.textContent = cfg.matLabel;
    if (outRolls) outRolls.textContent = `${rolls} birlik / to'plam`;
    if (outDays) outDays.textContent = `${days} – ${days + 2} kun`;
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
        const unit = card.dataset.unit || 'm²';
        const val = priceMode === 'wholesale' ? wholesale : retail;
        priceEl.innerHTML = `${val.toLocaleString('ru-RU')} so'm/${unit} <small class="js-price-note">${
          priceMode === 'wholesale' ? "Optom (1-qo'ldan)" : 'Chakana narx'
        }</small>`;
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
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const telInput = form.querySelector('input[type="tel"]');
      const rawDigits = telInput ? telInput.value.replace(/\D/g, '') : '';

      if (rawDigits.length < 12) {
        showToast("Iltimos, to'liq telefon raqamingizni kiriting: +998 (XX) XXX-XX-XX");
        if (telInput) telInput.focus();
        return;
      }

      const context = form.dataset.context || 'Bepul konsultatsiya';
      showToast(`Rahmat! ${telInput.value} raqami qabul qilindi (${context}). Mutaxassisimiz 15 daqiqa ichida bog'lanadi!`);
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

  document.querySelectorAll('.js-open-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!modal) return;
      const title = btn.dataset.title || "Bepul konsultatsiya va o'lchov";
      const sub = btn.dataset.sub || "Faqat telefon raqamingizni qoldiring — 15 daqiqada bog'lanib, aniq smeta beramiz.";
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
