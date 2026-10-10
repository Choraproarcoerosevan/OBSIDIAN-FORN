/*
  EDITE OS PRODUTOS NESTA LISTA.
  Preços de exemplo baseados no catálogo enviado pelo usuário.
  Troque DISCORD_INVITE pelo convite real do seu servidor.
*/
const DISCORD_INVITE = "https://discord.com/";

const PRODUCTS = [
  {
    id: 1,
    name: "Membros Online | Gift",
    price: 0.85,
    category: "Membros",
    description: "Pacote com 50 membros online. Confirme disponibilidade e condições com o vendedor antes de comprar.",
    image: "",
    symbol: "🟢",
    buyUrl: ""
  }
];

const money = value => Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const filtersBox = document.getElementById("filters");
const emptyState = document.getElementById("emptyState");
const count = document.getElementById("productCount");
const dialog = document.getElementById("productDialog");
const dialogContent = document.getElementById("dialogContent");
let activeCategory = "Todos";

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}
function productVisual(product) {
  return product.image
    ? `<img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy" onerror="this.remove()">`
    : `<span class="product-placeholder" aria-hidden="true">${safeText(product.symbol || "◆")}</span>`;
}
function renderFilters() {
  const categories = ["Todos", ...new Set(PRODUCTS.map(p => p.category).filter(Boolean))];
  filtersBox.innerHTML = categories.map(category =>
    `<button class="filter-btn ${category === activeCategory ? "active" : ""}" data-category="${safeText(category)}">${safeText(category)}</button>`
  ).join("");
  filtersBox.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}
function renderProducts() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
    const matchesTerm = `${p.name} ${p.description} ${p.category}`.toLocaleLowerCase("pt-BR").includes(term);
    return matchesCategory && matchesTerm;
  });
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "produto" : "produtos"}`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">${productVisual(product)}<span class="category-tag">${safeText(product.category || "Produto")}</span></div>
      <div class="product-info">
        <h3>${safeText(product.name)}</h3>
        <p>${safeText(product.description)}</p>
        <div class="product-bottom">
          <div class="price">${money(product.price)}<small>PREÇO DO PRODUTO</small></div>
          <button class="details-btn" data-product-id="${Number(product.id)}">Ver detalhes ↗</button>
        </div>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-product-id]").forEach(button => {
    button.addEventListener("click", () => openProduct(Number(button.dataset.productId)));
  });
}
function openProduct(id) {
  const product = PRODUCTS.find(p => Number(p.id) === id);
  if (!product) return;
  const purchaseUrl = product.buyUrl || DISCORD_INVITE;
  dialogContent.innerHTML = `
    <p class="eyebrow">${safeText(product.category || "PRODUTO")}</p>
    <h2>${safeText(product.name)}</h2>
    <div class="dialog-visual">${productVisual(product)}</div>
    <p class="dialog-desc">${safeText(product.description)}</p>
    <div class="dialog-price">${money(product.price)}</div>
    <p class="dialog-desc">Para confirmar disponibilidade, formas de pagamento e entrega, fale com o vendedor pelo link de compra.</p>
    <div class="dialog-actions">
      <a class="button primary" href="${safeText(purchaseUrl)}" target="_blank" rel="noopener">Comprar / Consultar ↗</a>
      <button class="button secondary" id="closeDialogBtn">Continuar vendo</button>
    </div>`;
  dialog.showModal();
  document.getElementById("closeDialogBtn").addEventListener("click", () => dialog.close());
}
search.addEventListener("input", renderProducts);
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
["discordTop", "discordHero", "discordBottom"].forEach(id => document.getElementById(id).href = DISCORD_INVITE);
renderFilters();
renderProducts();
