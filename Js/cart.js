let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return;
    }

    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    renderCart();
}

function increaseQuantity(productId) {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    }

    saveCart();
    renderCart();
}

function decreaseQuantity(productId) {
    const productInCart = cart.find((item) => item.id === productId);

    if (!productInCart) {
        return;
    }

    if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
    } else {
        removeFromCart(productId);
        return;
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);

    saveCart();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
        cartTotal.textContent = "0,00";
        return;
    }

    let total = 0;

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>Subtotal: R$ ${formatPrice(itemTotal)}</p>
            </div>

            <div class="quantity-controls">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="removeFromCart(${item.id})">Remover</button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = formatPrice(total);
}

renderCart();