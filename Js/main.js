const productList = getElement("#product-list");

function renderProducts() {
    productList.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">R$ ${formatPrice(product.price)}</p>
            <button class="btn" onclick="addToCart(${product.id})">
                Adicionar ao carrinho
            </button>
        `;

        productList.appendChild(productCard);
    });
}

renderProducts();