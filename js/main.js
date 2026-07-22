/* Кровельщик Дона — interactions */

const PRODUCTS = {
  new: [
    { title: "Металлочерепица Monterrey 0.45", price: "610", unit: "₽ / м²", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Docke Premium", price: "780", unit: "₽ / м²", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточная система Aquasystem", price: "1 890", unit: "₽ / компл.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Velux GGL", price: "28 900", unit: "₽", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель Rockwool Лайт Баттс", price: "1 240", unit: "₽ / уп.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидроизоляция Delta Vent N", price: "4 800", unit: "₽ / рул.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг Grand Line", price: "340", unit: "₽ / шт.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Конёк полукруглый 2 м", price: "560", unit: "₽ / шт.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
  ],
  hits: [
    { title: "Металлочерепица Cascade 0.5", price: "690", unit: "₽ / м²", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Мягкая кровля Katepal Ambient", price: "920", unit: "₽ / м²", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил НС35", price: "510", unit: "₽ / м²", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосток Docke Premium", price: "2 150", unit: "₽ / компл.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Снегозадержатель трубчатый", price: "1 480", unit: "₽ / шт.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка карнизная 2 м", price: "420", unit: "₽ / шт.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Мембрана пароизоляционная", price: "3 200", unit: "₽ / рул.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит перфорированный", price: "310", unit: "₽ / шт.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
  ],
  tools: [
    { title: "Ножницы по металлу проходные", price: "4 900", unit: "₽", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
    { title: "Шуруповёрт аккумуляторный", price: "12 500", unit: "₽", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибочный станок кровельный", price: "38 000", unit: "₽", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80" },
    { title: "Клещи фальцевые", price: "3 200", unit: "₽", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" },
    { title: "Рулетка лазерная", price: "6 800", unit: "₽", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Страховочный пояс монтажный", price: "5 400", unit: "₽", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Набор бит для кровли", price: "1 150", unit: "₽", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
    { title: "Молоток кровельный", price: "2 300", unit: "₽", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80" },
  ],
};

const SOLD_ITEMS = [
  { title: "Профнастил С8 оцинкованный", price: "280", unit: "₽ / м²", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80" },
  { title: "Металлочерепица Monterrey 0.45", price: "490", unit: "₽ / м²", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
  { title: "Ондулин Smart", price: "680", unit: "₽ / лист", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
  { title: "Планка карнизная 2 м", price: "420", unit: "₽ / шт.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
  { title: "Саморезы кровельные 4.8×35", price: "890", unit: "₽ / уп.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
  { title: "Софит перфорированный", price: "310", unit: "₽ / шт.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
];

const WORKS = [
  {
    title: "Материалы и решения для кровли ТРЦ: соответствие пожарным требованиям",
    place: "Выполним на кровельных системах",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Капремонт кровли транспортных объектов: нормы, решения, материалы по СП 17.13330.2017",
    place: "Выполним на кровельных системах",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Кровельные работы для ресторанных комплексов — строго по СП/СНиП",
    place: "Выполним на кровельных системах",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Кровельные и дизайнерские решения для коттеджных посёлков — опыт 20 лет",
    place: "Выполним на кровельных системах",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const SERVICE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M4 20 L12 4 L20 20 Z"/>
    <path d="M9 14 H15"/>
  </svg>
`;

function productCardHTML(p) {
  return `
    <article class="product-card">
      <a href="#" class="product-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#" class="product-card__title">${p.title}</a>
      <div class="product-card__price">${p.price} <span>${p.unit}</span></div>
      <div class="product-card__meta">
        <span class="product-card__stock">В наличии</span>
      </div>
    </article>
  `;
}

function soldCardHTML(p) {
  return `
    <article class="product-card">
      <a href="#" class="product-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#" class="product-card__title">${p.title}</a>
      <div class="product-card__price">${p.price} <span>${p.unit}</span></div>
      <div class="product-card__meta">
        <span class="product-card__stock">В наличии</span>
        <span class="product-card__note">${p.note}</span>
      </div>
    </article>
  `;
}

function workCardHTML(w) {
  return `
    <article class="work-card">
      <div class="work-card__img"><img src="${w.img}" alt="" loading="lazy" /></div>
      <div class="work-card__body">
        <strong>${w.title}</strong>
        <span>${w.place}</span>
      </div>
    </article>
  `;
}

function renderProducts(tab = "new") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const list = PRODUCTS[tab] || PRODUCTS.new;
  grid.style.opacity = "0";
  grid.style.transform = "translateY(8px)";
  setTimeout(() => {
    grid.innerHTML = list.map(productCardHTML).join("");
    grid.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    grid.style.opacity = "1";
    grid.style.transform = "none";
  }, 140);
}

function renderSold() {
  const wrap = document.getElementById("soldWrapper");
  if (!wrap) return;
  wrap.innerHTML = SOLD_ITEMS.map((p) => `<div class="swiper-slide">${soldCardHTML(p)}</div>`).join("");
}

function renderWorks() {
  const track = document.getElementById("worksTrack");
  if (!track) return;
  const html = WORKS.map(workCardHTML).join("");
  track.innerHTML = html + html;
}

function replaceServiceIcons() {
  document.querySelectorAll(".service-card__icon").forEach((el) => {
    el.innerHTML = SERVICE_ICON;
  });
}

function initSmoothScroll() {
  if (typeof Lenis === "undefined") return null;
  return new Lenis({
    autoRaf: true,
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    anchors: true,
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.06}s`;
    io.observe(el);
  });
}

function initHero() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".hero-swiper", {
    loop: true,
    speed: 800,
    autoplay: { delay: 5500, disableOnInteraction: false },
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: { el: ".hero__pagination", clickable: true },
    navigation: {
      nextEl: ".hero__nav--next",
      prevEl: ".hero__nav--prev",
    },
  });
}

function initPartners() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".partners-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 14,
    speed: 550,
    navigation: {
      nextEl: ".partners-next",
      prevEl: ".partners-prev",
    },
    breakpoints: {
      560: { slidesPerView: 2.2 },
      860: { slidesPerView: 3 },
    },
  });
}

function initSoldSwiper() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".sold-swiper", {
    slidesPerView: 1.15,
    spaceBetween: 16,
    speed: 600,
    navigation: {
      nextEl: ".sold-next",
      prevEl: ".sold-prev",
    },
    breakpoints: {
      560: { slidesPerView: 2 },
      860: { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
    },
  });
}

function initTabs() {
  document.querySelectorAll(".products .tabs__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".products .tabs__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProducts(btn.dataset.tab);
    });
  });
}

function initServicesMore() {
  const btn = document.getElementById("servicesMore");
  const block = document.querySelector(".services-block");
  if (!btn || !block) return;
  btn.addEventListener("click", () => {
    const open = block.classList.toggle("is-expanded");
    btn.textContent = open ? "Свернуть" : "Показать ещё 5";
  });
}

function initModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const open = () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal='call']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  const form = document.getElementById("callForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    close();
    form.reset();
    alert("Спасибо! Мы перезвоним вам в ближайшее время.");
  });
}

function initCookie() {
  const box = document.getElementById("cookie");
  const btn = document.getElementById("cookieAccept");
  if (!box || !btn) return;
  if (localStorage.getItem("cookieOk") === "1") {
    box.remove();
    return;
  }
  btn.addEventListener("click", () => {
    localStorage.setItem("cookieOk", "1");
    box.classList.add("is-hidden");
    setTimeout(() => box.remove(), 320);
  });
}

function buildSearchIndex() {
  const items = [];

  document.querySelectorAll(".dir-tile").forEach((el) => {
    const title = el.querySelector("h3")?.textContent?.trim() || "";
    const text = el.querySelector("p")?.textContent?.trim() || "";
    items.push({ title, text, href: el.getAttribute("href") || "#catalog", type: "Направление" });
  });

  document.querySelectorAll(".service-card").forEach((el) => {
    const title = el.querySelector("strong")?.textContent?.trim() || "";
    const text = el.querySelector("span:last-child")?.textContent?.trim() || "";
    items.push({ title, text, href: "#services", type: "Услуга" });
  });

  document.querySelectorAll(".how-step").forEach((el) => {
    const title = el.querySelector("h3")?.textContent?.trim() || "";
    const text = el.querySelector("p")?.textContent?.trim() || "";
    items.push({ title, text, href: "#project", type: "Как мы работаем" });
  });

  document.querySelectorAll(".brand-card span").forEach((el) => {
    items.push({ title: el.textContent.trim(), text: "Партнёр", href: "#about", type: "Партнёр" });
  });

  Object.values(PRODUCTS)
    .flat()
    .forEach((p) => {
      items.push({ title: p.title, text: `${p.price} ${p.unit}`, href: "#promo", type: "Товар" });
    });

  SOLD_ITEMS.forEach((p) => {
    items.push({ title: p.title, text: p.note || "Продаваемые материалы", href: "#promo", type: "Материал" });
  });

  WORKS.forEach((w) => {
    items.push({ title: w.title, text: w.place, href: "#promo", type: "Работы" });
  });

  [
    { title: "Каталог", text: "Разделы и направления", href: "#catalog", type: "Раздел" },
    { title: "Оставить заявку", text: "Форма обратной связи", href: "#", type: "Действие", action: "modal" },
    { title: "Контакты", text: "Вавилова 73 Д, Ростов-на-Дону", href: "#contacts", type: "Раздел" },
    { title: "Вакансии", text: "Работа в компании", href: "#vacancies", type: "Раздел" },
  ].forEach((i) => items.push(i));

  return items;
}

function initSearch() {
  const form = document.getElementById("siteSearchForm");
  const input = document.getElementById("siteSearchInput");
  const drop = document.getElementById("searchDrop");
  const list = document.getElementById("searchResults");
  const empty = document.getElementById("searchEmpty");
  if (!form || !input || !drop || !list || !empty) return;

  const index = buildSearchIndex();
  let active = -1;

  const close = () => {
    drop.hidden = true;
    active = -1;
  };

  const openModal = () => {
    document.querySelector("[data-modal='call']")?.click();
  };

  const go = (item) => {
    close();
    input.blur();
    if (item.action === "modal") {
      openModal();
      return;
    }
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.href && item.href !== "#") {
      window.location.hash = item.href;
    }
  };

  const render = (query) => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      close();
      return;
    }

    const found = index
      .filter((item) => `${item.title} ${item.text} ${item.type}`.toLowerCase().includes(q))
      .slice(0, 10);

    drop.hidden = false;
    active = -1;

    if (!found.length) {
      list.innerHTML = "";
      empty.hidden = false;
      return;
    }

    empty.hidden = true;
    list.innerHTML = found
      .map(
        (item, i) => `
      <li>
        <button type="button" class="search-drop__item" data-index="${i}">
          <strong>${item.title}</strong>
          <span>${item.type}${item.text ? " · " + item.text : ""}</span>
        </button>
      </li>`
      )
      .join("");

    list.querySelectorAll(".search-drop__item").forEach((btn, i) => {
      btn.addEventListener("click", () => go(found[i]));
    });

    drop._found = found;
  };

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("focus", () => {
    if (input.value.trim().length >= 2) render(input.value);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const found = drop._found;
    if (found?.length) {
      go(found[Math.max(active, 0)]);
    } else {
      render(input.value);
    }
  });

  input.addEventListener("keydown", (e) => {
    const found = drop._found || [];
    if (drop.hidden || !found.length) return;
    const items = list.querySelectorAll(".search-drop__item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      active = (active + 1) % found.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      active = (active - 1 + found.length) % found.length;
    } else if (e.key === "Escape") {
      close();
      return;
    } else {
      return;
    }
    items.forEach((el, i) => el.classList.toggle("is-active", i === active));
    items[active]?.scrollIntoView({ block: "nearest" });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initReveal();
  initHero();
  renderProducts("new");
  initTabs();
  renderSold();
  initPartners();
  initSoldSwiper();
  renderWorks();
  replaceServiceIcons();
  initServicesMore();
  initModal();
  initCookie();
  initSearch();
});
