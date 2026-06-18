let cart = [];

function addToCart(productId){
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return;
    }

    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if(cart.length === 0) {
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
        <p>${item.quantity}x ${item.name} - R$ ${formatPrice(itemTotal)}</p>        
        `;

        cartItems.appendChild(cartItem);

    });

    cartTotal.textContent = formatPrice(total);

}
