/* Кровельщик Дона — interactions */

const PRODUCTS = {
  new: [
    { title: "Металлочерепица Monterrey 0.45", price: "610", unit: "₽ / м²", badge: "new", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил С21 оцинкованный", price: "420", unit: "₽ / м²", badge: "new", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Docke Premium", price: "780", unit: "₽ / м²", badge: "new", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточная система Aquasystem", price: "1 890", unit: "₽ / компл.", badge: "new", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель Rockwool Лайт Баттс", price: "1 240", unit: "₽ / уп.", badge: "new", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Velux GGL", price: "28 900", unit: "₽", badge: "new", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг виниловый Grand Line", price: "340", unit: "₽ / шт.", badge: "new", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Конёк полукруглый 2 м", price: "560", unit: "₽ / шт.", badge: "new", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
  ],
  hits: [
    { title: "Металлочерепица Cascade 0.5", price: "690", unit: "₽ / м²", badge: "hit", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Мягкая кровля Katepal Ambient", price: "920", unit: "₽ / м²", badge: "hit", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил НС35 для кровли", price: "510", unit: "₽ / м²", badge: "hit", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидроизоляция Delta Vent N", price: "4 800", unit: "₽ / рул.", badge: "hit", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосток Docke Premium", price: "2 150", unit: "₽ / компл.", badge: "hit", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Саморезы кровельные 4.8×35", price: "890", unit: "₽ / уп.", badge: "hit", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка карнизная 2 м", price: "420", unit: "₽ / шт.", badge: "hit", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Ондулин Smart зелёный", price: "680", unit: "₽ / лист", badge: "hit", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
  ],
  sale: [
    { title: "Металлочерепица Classic (уценка)", price: "449", unit: "₽ / м²", badge: "sale", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил С8 остатки", price: "299", unit: "₽ / м²", badge: "sale", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица серия Standard", price: "560", unit: "₽ / м²", badge: "sale", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточный жёлоб 3 м", price: "790", unit: "₽ / шт.", badge: "sale", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель минеральный 50 мм", price: "980", unit: "₽ / уп.", badge: "sale", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит перфорированный", price: "310", unit: "₽ / шт.", badge: "sale", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Ендова верхняя 2 м", price: "480", unit: "₽ / шт.", badge: "sale", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Аэратор кровельный", price: "650", unit: "₽ / шт.", badge: "sale", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
  ],
  rec: [
    { title: "Комплект кровли под ключ", price: "от 1 890", unit: "₽ / м²", badge: "hit", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Металлочерепица Ruukki Purex", price: "1 150", unit: "₽ / м²", badge: "new", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Fakro FTP", price: "24 500", unit: "₽", badge: "hit", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосток металлический", price: "2 490", unit: "₽ / компл.", badge: "new", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидро-пароизоляция", price: "3 200", unit: "₽ / рул.", badge: "hit", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг панели премиум", price: "410", unit: "₽ / шт.", badge: "new", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
  ],
};

const BADGE_MAP = {
  new: { cls: "product-card__badge--new", text: "Новинка" },
  hit: { cls: "product-card__badge--hit", text: "Хит" },
  sale: { cls: "product-card__badge--sale", text: "Скидка" },
};

function productCardHTML(p) {
  const badge = BADGE_MAP[p.badge] || BADGE_MAP.new;
  return `
    <article class="product-card">
      <span class="product-card__badge ${badge.cls}">${badge.text}</span>
      <button type="button" class="product-card__fav" aria-label="В избранное">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.35-9.5-8.5C.5 9 2.5 5 6.5 5c2 0 3.5 1.2 4.5 2.5C12 6.2 13.5 5 15.5 5c4 0 6 4 4 7.5C19 16.65 12 21 12 21z"/></svg>
      </button>
      <a href="#" class="product-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#" class="product-card__title">${p.title}</a>
      <div class="product-card__price">${p.price} <span>${p.unit}</span></div>
      <div class="product-card__meta">
        <span class="product-card__stock">В наличии</span>
        <button type="button" class="product-card__cart" aria-label="В корзину">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/><path d="M6 6L5 3H2"/></svg>
        </button>
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
    bindFavButtons(grid);
  }, 160);
}

function renderRecommendations() {
  const wrap = document.getElementById("recWrapper");
  if (!wrap) return;
  wrap.innerHTML = PRODUCTS.rec
    .map((p) => `<div class="swiper-slide">${productCardHTML(p)}</div>`)
    .join("");
  bindFavButtons(wrap);
}

function bindFavButtons(root) {
  root.querySelectorAll(".product-card__fav").forEach((btn) => {
    btn.addEventListener("click", () => btn.classList.toggle("is-active"));
  });
}

/* Smooth scroll (Lenis) */
function initSmoothScroll() {
  if (typeof Lenis === "undefined") return null;
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    anchors: true,
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60 });
    });
  });

  return lenis;
}

/* Reveal on scroll */
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

/* Hero swiper */
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

/* Recommendations swiper */
function initRecSwiper() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".rec-swiper", {
    slidesPerView: 1.15,
    spaceBetween: 16,
    speed: 600,
    navigation: {
      nextEl: ".rec-nav__next",
      prevEl: ".rec-nav__prev",
    },
    breakpoints: {
      560: { slidesPerView: 2 },
      860: { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
    },
  });
}

/* Tabs */
function initTabs() {
  document.querySelectorAll(".products .tabs__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".products .tabs__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProducts(btn.dataset.tab);
    });
  });

  document.querySelectorAll(".tabs--news .tabs__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs--news .tabs__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

/* Modal */
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

  document.querySelectorAll("[data-modal='call']").forEach((btn) => {
    btn.addEventListener("click", open);
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

/* Cookie */
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

/* Catalog button pulse */
function initCatalogBtn() {
  const btn = document.getElementById("catalogBtn");
  btn?.addEventListener("click", () => {
    btn.classList.toggle("is-open");
    const catalog = document.getElementById("catalog");
    catalog?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* Sticky nav shadow intensify on scroll */
function initNavScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const onScroll = () => {
    nav.style.boxShadow =
      window.scrollY > 80
        ? "0 8px 28px rgba(11, 74, 143, 0.35)"
        : "0 4px 16px rgba(11, 74, 143, 0.25)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initReveal();
  initHero();
  renderProducts("new");
  renderRecommendations();
  initRecSwiper();
  initTabs();
  initModal();
  initCookie();
  initCatalogBtn();
  initNavScroll();
});
