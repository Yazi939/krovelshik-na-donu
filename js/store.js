/* Кровельщик Дона — auth, cart, favorites via localStorage */

const KD_KEYS = {
  users: "kd_users",
  session: "kd_session",
  cart: "kd_cart",
  favs: "kd_favs",
  compare: "kd_compare",
};

function kdRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function kdWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function kdProductId(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-|-$/g, "");
}

function kdParsePrice(value) {
  if (typeof value === "number") return value;
  const n = String(value || "").replace(/[^\d]/g, "");
  return n ? Number(n) : 0;
}

function kdFormatMoney(n) {
  return `${Number(n || 0).toLocaleString("ru-RU")} ₽`;
}

/* ===== AUTH ===== */
function kdGetUsers() {
  return kdRead(KD_KEYS.users, []);
}

function kdGetSessionEmail() {
  return localStorage.getItem(KD_KEYS.session) || "";
}

function kdGetCurrentUser() {
  const email = kdGetSessionEmail();
  if (!email) return null;
  return kdGetUsers().find((u) => u.email === email) || null;
}

function kdRegister({ name, email, phone, password }) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanName = String(name || "").trim();
  const cleanPhone = String(phone || "").trim();
  const cleanPass = String(password || "");

  if (!cleanName || !cleanEmail || !cleanPass) {
    return { ok: false, error: "Заполните имя, email и пароль" };
  }
  if (cleanPass.length < 4) {
    return { ok: false, error: "Пароль должен быть не короче 4 символов" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return { ok: false, error: "Некорректный email" };
  }

  const users = kdGetUsers();
  if (users.some((u) => u.email === cleanEmail)) {
    return { ok: false, error: "Такой email уже зарегистрирован" };
  }

  users.push({
    id: Date.now().toString(36),
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    password: cleanPass,
    createdAt: new Date().toISOString(),
  });
  kdWrite(KD_KEYS.users, users);
  localStorage.setItem(KD_KEYS.session, cleanEmail);
  return { ok: true, user: kdGetCurrentUser() };
}

function kdLogin(email, password) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const user = kdGetUsers().find((u) => u.email === cleanEmail);
  if (!user || user.password !== String(password || "")) {
    return { ok: false, error: "Неверный email или пароль" };
  }
  localStorage.setItem(KD_KEYS.session, cleanEmail);
  return { ok: true, user };
}

function kdLogout() {
  localStorage.removeItem(KD_KEYS.session);
}

/* ===== CART ===== */
function kdGetCart() {
  return kdRead(KD_KEYS.cart, []);
}

function kdSaveCart(cart) {
  kdWrite(KD_KEYS.cart, cart);
  document.dispatchEvent(new CustomEvent("kd:cart"));
}

function kdAddToCart(item) {
  const id = item.id || kdProductId(item.title);
  const cart = kdGetCart();
  const existing = cart.find((x) => x.id === id);
  if (existing) {
    existing.qty += item.qty || 1;
  } else {
    cart.push({
      id,
      title: item.title,
      price: kdParsePrice(item.price),
      priceLabel: item.priceLabel || String(item.price),
      unit: item.unit || "",
      img: item.img || "",
      qty: item.qty || 1,
    });
  }
  kdSaveCart(cart);
  return cart;
}

function kdRemoveFromCart(id) {
  kdSaveCart(kdGetCart().filter((x) => x.id !== id));
}

function kdSetCartQty(id, qty) {
  const cart = kdGetCart();
  const item = cart.find((x) => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, Number(qty) || 1);
  kdSaveCart(cart);
}

function kdClearCart() {
  kdSaveCart([]);
}

function kdCartCount() {
  return kdGetCart().reduce((sum, x) => sum + (x.qty || 0), 0);
}

function kdCartTotal() {
  return kdGetCart().reduce((sum, x) => sum + x.price * x.qty, 0);
}

/* ===== FAVS / COMPARE ===== */
function kdGetFavs() {
  return kdRead(KD_KEYS.favs, []);
}

function kdToggleFav(id) {
  const favs = kdGetFavs();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1);
  else favs.push(id);
  kdWrite(KD_KEYS.favs, favs);
  document.dispatchEvent(new CustomEvent("kd:favs"));
  return favs.includes(id);
}

function kdIsFav(id) {
  return kdGetFavs().includes(id);
}

function kdGetCompare() {
  return kdRead(KD_KEYS.compare, []);
}

function kdToggleCompare(id) {
  const list = kdGetCompare();
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1);
  else {
    if (list.length >= 4) return { ok: false, error: "Можно сравнить не больше 4 товаров" };
    list.push(id);
  }
  kdWrite(KD_KEYS.compare, list);
  return { ok: true, active: list.includes(id), list };
}

/* ===== UI ===== */
function kdToast(message) {
  let box = document.getElementById("kdToast");
  if (!box) {
    box = document.createElement("div");
    box.id = "kdToast";
    box.className = "kd-toast";
    document.body.appendChild(box);
  }
  box.textContent = message;
  box.classList.add("is-show");
  clearTimeout(box._t);
  box._t = setTimeout(() => box.classList.remove("is-show"), 2200);
}

function kdUpdateAuthUI() {
  const link = document.getElementById("authBtn");
  const user = kdGetCurrentUser();
  if (!link) return;
  if (user) {
    link.innerHTML = `<span>${user.name}</span><button type="button" class="topbar__logout" id="logoutBtn">Выйти</button>`;
    link.classList.add("is-auth");
    document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      kdLogout();
      kdUpdateAuthUI();
      kdToast("Вы вышли из аккаунта");
    });
  } else {
    link.classList.remove("is-auth");
    link.innerHTML = "Вход / Регистрация";
  }
}

function kdUpdateCartUI() {
  const count = kdCartCount();
  const total = kdCartTotal();
  const strong = document.querySelector(".cart-link__text strong");
  const badge = document.getElementById("cartBadge");
  if (strong) {
    strong.textContent = count ? kdFormatMoney(total) : "пока пуста";
  }
  if (badge) {
    badge.textContent = String(count);
    badge.hidden = count === 0;
  }
  kdRenderCartDrawer();
}

function kdRenderCartDrawer() {
  const list = document.getElementById("cartList");
  const empty = document.getElementById("cartEmpty");
  const totalEl = document.getElementById("cartTotal");
  const checkout = document.getElementById("cartCheckout");
  if (!list) return;

  const cart = kdGetCart();
  if (!cart.length) {
    list.innerHTML = "";
    if (empty) empty.hidden = false;
    if (totalEl) totalEl.textContent = "0 ₽";
    if (checkout) checkout.disabled = true;
    return;
  }

  if (empty) empty.hidden = true;
  if (checkout) checkout.disabled = false;
  if (totalEl) totalEl.textContent = kdFormatMoney(kdCartTotal());

  list.innerHTML = cart
    .map(
      (item) => `
    <article class="cart-item" data-id="${item.id}">
      <div class="cart-item__img">${item.img ? `<img src="${item.img}" alt="" />` : ""}</div>
      <div class="cart-item__body">
        <strong>${item.title}</strong>
        <span class="cart-item__price">${kdFormatMoney(item.price)}${item.unit ? ` <small>${item.unit}</small>` : ""}</span>
        <div class="cart-item__row">
          <div class="cart-item__qty">
            <button type="button" data-cart-qty="-1" aria-label="Минус">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-qty="1" aria-label="Плюс">+</button>
          </div>
          <button type="button" class="cart-item__remove" data-cart-remove aria-label="Удалить">Удалить</button>
        </div>
      </div>
    </article>`
    )
    .join("");
}

function kdOpenCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  drawer.hidden = false;
  document.body.style.overflow = "hidden";
  kdRenderCartDrawer();
}

function kdCloseCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  drawer.hidden = true;
  document.body.style.overflow = "";
}

function kdOpenAuth(tab = "login") {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  kdSwitchAuthTab(tab);
}

function kdCloseAuth() {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function kdSwitchAuthTab(tab) {
  document.querySelectorAll("[data-auth-tab]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.authTab === tab);
  });
  document.getElementById("authLoginForm").hidden = tab !== "login";
  document.getElementById("authRegisterForm").hidden = tab !== "register";
  const err = document.getElementById("authError");
  if (err) err.textContent = "";
}

function kdBindProductCard(card, product) {
  const id = product.id || kdProductId(product.title);
  const buy = card.querySelector(".product-card__buy, [data-add-cart]");
  const fav = card.querySelector(".product-card__fav");
  const compare = card.querySelector(".product-card__compare");

  if (fav) {
    fav.classList.toggle("is-active", kdIsFav(id));
    fav.addEventListener("click", (e) => {
      e.preventDefault();
      const on = kdToggleFav(id);
      fav.classList.toggle("is-active", on);
      kdToast(on ? "Добавлено в избранное" : "Убрано из избранного");
    });
  }

  if (buy) {
    buy.addEventListener("click", (e) => {
      e.preventDefault();
      kdAddToCart({
        id,
        title: product.title,
        price: product.price,
        unit: product.unit,
        img: product.img,
      });
      kdUpdateCartUI();
      kdToast("Товар добавлен в корзину");
    });
  }

  if (compare) {
    compare.classList.toggle("is-active", kdGetCompare().includes(id));
    compare.addEventListener("click", (e) => {
      e.preventDefault();
      const res = kdToggleCompare(id);
      if (!res.ok) {
        kdToast(res.error);
        return;
      }
      compare.classList.toggle("is-active", res.active);
      kdToast(res.active ? "Добавлено к сравнению" : "Убрано из сравнения");
    });
  }
}

function initStoreUI() {
  kdUpdateAuthUI();
  kdUpdateCartUI();

  document.getElementById("authBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (kdGetCurrentUser()) return;
    kdOpenAuth("login");
  });

  document.getElementById("cartBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    kdOpenCart();
  });

  document.querySelectorAll("[data-auth-tab]").forEach((btn) => {
    btn.addEventListener("click", () => kdSwitchAuthTab(btn.dataset.authTab));
  });

  document.getElementById("authModal")?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", kdCloseAuth);
  });

  document.getElementById("cartDrawer")?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", kdCloseCart);
  });

  document.getElementById("authLoginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const res = kdLogin(fd.get("email"), fd.get("password"));
    const err = document.getElementById("authError");
    if (!res.ok) {
      if (err) err.textContent = res.error;
      return;
    }
    kdCloseAuth();
    kdUpdateAuthUI();
    kdToast(`Здравствуйте, ${res.user.name}!`);
    e.target.reset();
  });

  document.getElementById("authRegisterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const res = kdRegister({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      password: fd.get("password"),
    });
    const err = document.getElementById("authError");
    if (!res.ok) {
      if (err) err.textContent = res.error;
      return;
    }
    kdCloseAuth();
    kdUpdateAuthUI();
    kdToast("Регистрация успешна");
    e.target.reset();
  });

  document.getElementById("cartList")?.addEventListener("click", (e) => {
    const item = e.target.closest(".cart-item");
    if (!item) return;
    const id = item.dataset.id;
    if (e.target.closest("[data-cart-remove]")) {
      kdRemoveFromCart(id);
      kdUpdateCartUI();
      return;
    }
    const qtyBtn = e.target.closest("[data-cart-qty]");
    if (qtyBtn) {
      const delta = Number(qtyBtn.dataset.cartQty);
      const row = kdGetCart().find((x) => x.id === id);
      if (!row) return;
      kdSetCartQty(id, row.qty + delta);
      kdUpdateCartUI();
    }
  });

  document.getElementById("cartClear")?.addEventListener("click", () => {
    kdClearCart();
    kdUpdateCartUI();
    kdToast("Корзина очищена");
  });

  document.getElementById("cartCheckout")?.addEventListener("click", () => {
    const user = kdGetCurrentUser();
    if (!user) {
      kdCloseCart();
      kdOpenAuth("login");
      kdToast("Войдите, чтобы оформить заказ");
      return;
    }
    if (!kdGetCart().length) return;
    const order = {
      id: Date.now().toString(36),
      user: user.email,
      items: kdGetCart(),
      total: kdCartTotal(),
      createdAt: new Date().toISOString(),
    };
    const orders = kdRead("kd_orders", []);
    orders.push(order);
    kdWrite("kd_orders", orders);
    kdClearCart();
    kdUpdateCartUI();
    kdCloseCart();
    kdToast("Заказ оформлен — мы свяжемся с вами");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    kdCloseCart();
    kdCloseAuth();
  });

  document.addEventListener("kd:cart", kdUpdateCartUI);
}
