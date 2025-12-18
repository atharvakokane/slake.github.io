// Menu data sourced from Toast listing (Slake 610 N Main Street).
// Categories + items/prices/notes mirror the Toast page.
const MENU = [
  {
    category: "Slake Smashed Classics",
    items: [
      {
        name: "Smash Burger",
        price: 8.99,
        desc: "Smash Patty · Cheese · Shredded Lettuce · Pickles · Slake Sauce",
        stock: "In stock",
        toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street"
      },
      {
        name: "Smashed Fries",
        price: 8.99,
        desc: "Fries · Smash Patty · Cheese · Grilled Onions · Slake Sauce",
        stock: "In stock",
        toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street"
      },
      {
        name: "Slake Fries",
        price: 5.99,
        desc: "Fries · Cheese · Grilled Onions · Slake Sauce",
        stock: "In stock",
        toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street"
      },
      {
        name: "Steak & Cheese on the bun",
        price: 8.99,
        desc: "A classic, simple, and satisfying steak & cheese.",
        stock: "In stock",
        toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street"
      }
    ]
  },
  {
    category: "Chicken Sando",
    items: [
      {
        name: "Classic Slake Chicken Sando",
        price: 8.99,
        desc: "Fried Chicken · Shredded Lettuce · Pickles · Slake Sauce",
        stock: "In stock",
        toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street"
      }
    ]
  },
  {
    category: "Loaded Rice Platters",
    items: [
      { name: "Gyro Rice Platter", price: 12.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken Rice Platter", price: 12.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Falafel Rice Platter", price: 11.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Gyro Combo Rice Platter", price: 12.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Gyro/Falafel Combo Rice Platter", price: 12.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Falafel Combo Rice Platter", price: 12.99, desc: "Loaded rice platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" }
    ]
  },
  {
    category: "Loaded Fries",
    items: [
      { name: "Gyro Loaded Fries", price: 12.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken Loaded Fries", price: 12.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Falafel Loaded Fries", price: 11.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Gyro Loaded Fries", price: 12.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Gyro/Falafel Loaded Fries", price: 12.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Falafel Loaded Fries", price: 12.99, desc: "Loaded fries platter with your choice of proteins, toppings, and house-made sauces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" }
    ]
  },
  {
    category: "Loaded Salad",
    items: [
      { name: "Gyro Loaded Salad", price: 12.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken Loaded Salad", price: 12.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Falafel Loaded Salad", price: 11.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Gyro Combo Loaded Salad", price: 12.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Gyro/Falafel Combo Loaded Salad", price: 12.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Chicken/Falafel Combo Loaded Salad", price: 12.99, desc: "Loaded salad platter with your choice of proteins, toppings, and house-made sauces.", stock: "Out of stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" }
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Seasoned Fries", price: 3.50, desc: "Fries.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Falafel (5pcs)", price: 3.99, desc: "Crispy falafel, 5 pieces.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Coca-Cola", price: 1.50, desc: "Coca-Cola Original Taste — the crisp, refreshing taste you know and love.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Diet Coke", price: 1.50, desc: "Take a Diet Coke break with this refreshing, no-calorie soft drink.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Sprite", price: 1.50, desc: "Classic, cool, crisp lemon-lime flavored taste that's caffeine free.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" },
      { name: "Spring Water", price: 1.50, desc: "Bottled water.", stock: "In stock", toastUrl: "https://www.toasttab.com/local/order/slake-610-n-main-street" }
    ]
  }
];

const HOURS = [
  ["Sunday", "2:00 pm - 12:00 am"],
  ["Monday", "Closed"],
  ["Tuesday", "11:30 am - 12:00 am"],
  ["Wednesday", "2:00 pm - 12:00 am"],
  ["Thursday", "11:30 am - 12:00 am"],
  ["Friday", "2:30 pm - 3:00 am"],
  ["Saturday", "2:00 pm - 3:00 am"]
];

const state = {
  q: "",
  category: "All",
  selectedCount: 0,
  modalItem: null
};

const el = {
  grid: document.getElementById("menuGrid"),
  chips: document.getElementById("chips"),
  search: document.getElementById("searchInput"),
  searchClear: document.getElementById("searchClear"),
  reset: document.getElementById("resetBtn"),
  empty: document.getElementById("emptyState"),
  emptyReset: document.getElementById("emptyReset"),
  cartCount: document.getElementById("cartCount"),

  // modal
  modal: document.getElementById("modal"),
  modalCategory: document.getElementById("modalCategory"),
  modalTitle: document.getElementById("modalTitle"),
  modalDesc: document.getElementById("modalDesc"),
  modalPrice: document.getElementById("modalPrice"),
  modalStock: document.getElementById("modalStock"),
  addBtn: document.getElementById("addBtn"),
  toastBtn: document.getElementById("toastBtn"),

  openStatus: document.getElementById("openStatus"),
  hoursList: document.getElementById("hoursList"),

  navToggle: document.getElementById("navToggle"),
  mobileNav: document.getElementById("mobileNav"),
};

function money(n){
  return `$${n.toFixed(2)}`;
}

function flattenMenu(){
  const out = [];
  for (const section of MENU){
    for (const item of section.items){
      out.push({ ...item, category: section.category });
    }
  }
  return out;
}

const ALL_ITEMS = flattenMenu();
const CATEGORIES = ["All", ...MENU.map(s => s.category)];

function renderChips(){
  el.chips.innerHTML = "";
  for (const c of CATEGORIES){
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = c;
    b.setAttribute("aria-pressed", String(state.category === c));
    b.addEventListener("click", () => {
      state.category = c;
      render();
      // micro interaction: a tiny nudge on selection
      b.animate([{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }], { duration: 220, easing: "cubic-bezier(.2,.8,.2,1)" });
    });
    el.chips.appendChild(b);
  }
}

function matches(item){
  const q = state.q.trim().toLowerCase();
  const inCat = state.category === "All" || item.category === state.category;

  if (!inCat) return false;
  if (!q) return true;

  return (
    item.name.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  );
}

function render(){
  // update chips pressed state
  [...el.chips.children].forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.textContent === state.category));
  });

  const filtered = ALL_ITEMS.filter(matches);

  el.grid.innerHTML = "";
  if (filtered.length === 0){
    el.empty.hidden = false;
    return;
  }
  el.empty.hidden = true;

  for (const item of filtered){
    const card = document.createElement("article");
    card.className = "item reveal";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.name}, ${money(item.price)}. Open details.`);

    const oos = item.stock.toLowerCase().includes("out");
    const stockClass = oos ? "stock stock--oos" : "stock";

    card.innerHTML = `
      <div class="item__top">
        <span class="badge">${item.category}</span>
        <span class="price">${money(item.price)}</span>
      </div>
      <h3 class="item__name">${item.name}</h3>
      <p class="item__desc">${item.desc || ""}</p>
      <div class="item__bottom">
        <span class="${stockClass}">${oos ? "Out of stock" : "Available"}</span>
        <button class="add" type="button" ${oos ? "disabled" : ""} aria-label="Add ${item.name}">
          ${oos ? "Unavailable" : "Add +"}
        </button>
      </div>
    `;

    const addBtn = card.querySelector(".add");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (oos) return;
      bumpSelected(addBtn);
    });

    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openModal(item);
      }
    });

    el.grid.appendChild(card);
  }

  // re-run reveal on newly rendered nodes
  startRevealObserver(true);
}

function bumpSelected(sourceEl){
  state.selectedCount += 1;
  el.cartCount.textContent = String(state.selectedCount);

  // animated "pulse" on cart and button
  sourceEl.animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-2px) scale(1.02)" }, { transform: "translateY(0)" }],
    { duration: 220, easing: "cubic-bezier(.2,.8,.2,1)" }
  );

  const cart = document.getElementById("cart");
  cart.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }],
    { duration: 240, easing: "cubic-bezier(.2,.8,.2,1)" }
  );
}

function openModal(item){
  state.modalItem = item;

  el.modalCategory.textContent = item.category;
  el.modalTitle.textContent = item.name;
  el.modalDesc.textContent = item.desc || "";
  el.modalPrice.textContent = money(item.price);

  const oos = item.stock.toLowerCase().includes("out");
  el.modalStock.textContent = oos ? "Out of stock" : "Available";
  el.modalStock.className = oos ? "stock stock--oos" : "stock";

  el.addBtn.disabled = oos;
  el.addBtn.textContent = oos ? "Unavailable" : "Add to selected";
  el.toastBtn.href = item.toastUrl || "https://www.toasttab.com/local/order/slake-610-n-main-street";

  el.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  el.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.modalItem = null;
}

function wireModal(){
  el.modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && el.modal.getAttribute("aria-hidden") === "false"){
      closeModal();
    }
  });

  el.addBtn.addEventListener("click", () => {
    if (!state.modalItem) return;
    const oos = state.modalItem.stock.toLowerCase().includes("out");
    if (oos) return;
    bumpSelected(el.addBtn);
    closeModal();
  });
}

function wireSearch(){
  el.search.addEventListener("input", () => {
    state.q = el.search.value;
    el.searchClear.hidden = state.q.length === 0;
    render();
  });

  el.searchClear.addEventListener("click", () => {
    el.search.value = "";
    state.q = "";
    el.searchClear.hidden = true;
    render();
    el.search.focus();
  });
}

function resetAll(){
  state.q = "";
  state.category = "All";
  el.search.value = "";
  el.searchClear.hidden = true;
  render();
}

function wireReset(){
  el.reset.addEventListener("click", resetAll);
  el.emptyReset.addEventListener("click", resetAll);
}

/* Scroll reveal animation */
let revealObserver;
function startRevealObserver(forceReconnect = false){
  if (revealObserver && !forceReconnect) return;

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries){
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach(n => revealObserver.observe(n));
}

/* Hours UI + open-ish indicator (simple heuristic) */
function renderHours(){
  el.hoursList.innerHTML = "";
  for (const [day, hours] of HOURS){
    const li = document.createElement("li");
    li.innerHTML = `<span style="font-weight:900">${day}</span><span class="muted">${hours}</span>`;
    el.hoursList.appendChild(li);
  }

  // Very simple "status" (not timezone-perfect, but friendly)
  const now = new Date();
  const dayIndex = now.getDay(); // 0 Sun ... 6 Sat
  const todays = HOURS[dayIndex];
  el.openStatus.textContent = todays ? `Today: ${todays[1]}` : "Open hours vary";
}

/* Mobile nav toggle */
function wireMobileNav(){
  el.navToggle.addEventListener("click", () => {
    const expanded = el.navToggle.getAttribute("aria-expanded") === "true";
    el.navToggle.setAttribute("aria-expanded", String(!expanded));
    el.mobileNav.hidden = expanded;
  });

  el.mobileNav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    el.mobileNav.hidden = true;
    el.navToggle.setAttribute("aria-expanded", "false");
  });
}

(function init(){
  renderChips();
  renderHours();
  wireSearch();
  wireReset();
  wireModal();
  wireMobileNav();
  render();
  startRevealObserver();
})();
