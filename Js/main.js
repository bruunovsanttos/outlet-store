const productList = getElement("#product-list");

function renderProducts() {
    productList.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-badge">${product.badge}</span>
            </div>

            <div class="product-content">
            <div class="product-rating">★★★★★ ${product.rating}</div>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

            <div class="product-footer">
                <strong class="product-price">R$ ${formatPrice(product.price)}</strong>

                <button class="btn product-btn" onclick="addToCart(${product.id})">
                Adicionar
                </button>
            </div>
            </div>
`;

        productList.appendChild(productCard);
    });
}

renderProducts();

const sendOrderButton = getElement("#send-order");

sendOrderButton.addEventListener("click", sendOrderToWhatsApp);

function applyCompanyConfig() {
    getElement("#company-name").textContent = company.name;
    getElement("#company-slogan").textContent = company.slogan;

    document.documentElement.style.setProperty("--primary-color", company.primaryColor);
    document.documentElement.style.setProperty("--secondary-color", company.secondaryColor);
}

applyCompanyConfig();