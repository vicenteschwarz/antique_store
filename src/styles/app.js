// app.js
import { categories, products } from "./data.js";

const $ = (sel) => document.querySelector(sel);

function money(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

function setYear() {
  const y = new Date().getFullYear();
  document.querySelectorAll("#year").forEach((el) => (el.textContent = y));
}

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category"); // e.g. "computers"
}

function productImageUrl(p) {
  return `assets/${p.category}/${p.image}`;
}

function renderCategories() {
  const grid = $("#categories");
  if (!grid) return;

  grid.innerHTML = categories
    .map((c) => {
      const count = products.filter((p) => p.category === c.slug).length;
      return `
        <a class="card category" href="products.html?category=${encodeURIComponent(
          c.slug
        )}" aria-label="Open ${c.label}">
          <div class="card__icon" aria-hidden="true">${c.icon}</div>
          <div class="card__body">
            <h3>${c.label}</h3>
            <p class="muted">${count} items</p>
          </div>
          <div class="card__chevron" aria-hidden="true">→</div>
        </a>
      `;
    })
    .join("");
}

function sortProducts(list, sortValue) {
  const arr = [...list];
  switch (sortValue) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "stock-desc":
      return arr.sort((a, b) => b.stock - a.stock);
    case "name-asc":
    default:
      return arr.sort((a, b) => a.name.localeCompare(b.name));
  }
}

function renderProducts() {
  const grid = $("#productsGrid");
  if (!grid) return;

  const categorySlug = getCategoryFromURL();
  const categoryObj = categories.find((c) => c.slug === categorySlug);

  const title = $("#categoryTitle");
  const subtitle = $("#pageSubtitle");
  const hint = $("#categoryHint");

  if (categoryObj) {
    if (title) title.textContent = categoryObj.label;
    if (subtitle) subtitle.textContent = categoryObj.label;
    if (hint) hint.textContent = `Showing products in: ${categoryObj.label}`;
  } else {
    if (title) title.textContent = "All products";
    if (subtitle) subtitle.textContent = "Products";
    if (hint) hint.textContent = "Tip: open this page from Home to filter by category.";
  }

  const searchInput = $("#search");
  const sortSelect = $("#sort");

  function draw() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const sortValue = sortSelect?.value || "name-asc";

    let filtered = products;

    if (categoryObj) filtered = filtered.filter((p) => p.category === categoryObj.slug);

    if (q) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
      );
    }

    filtered = sortProducts(filtered, sortValue);

    grid.innerHTML = filtered
      .map(
        (p) => `
          <article class="card product">
            <img
              class="product__img"
              src="${productImageUrl(p)}"
              alt="${p.name}"
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/placeholder.png';"
            />

            <div class="product__content">
              <div class="product__top">
                <h3 class="product__name">${p.name}</h3>
                <span class="badge ${p.stock > 0 ? "ok" : "out"}">
                  ${p.stock > 0 ? `In stock: ${p.stock}` : "Out of stock"}
                </span>
              </div>

              <p class="muted">${p.description || ""}</p>

              <div class="product__bottom">
                <strong class="price">${money(p.price)}</strong>
                <span class="muted small">
                  Category: ${
                    categories.find((c) => c.slug === p.category)?.label ?? p.category
                  }
                </span>
              </div>
            </div>
          </article>
        `
      )
      .join("");

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty">No products found.</div>`;
    }
  }

  searchInput?.addEventListener("input", draw);
  sortSelect?.addEventListener("change", draw);

  draw();
}

// Run
setYear();
renderCategories();
renderProducts();
