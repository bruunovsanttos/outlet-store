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

    renderCart;
}

