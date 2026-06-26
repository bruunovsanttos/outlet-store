const STORE_PHONE = "5511949651772";

function showCheckoutMessage(message) {
    const checkoutMessage = getElement("#checkout-message");
    checkoutMessage.textContent = message;
}

function validateOrder() {
    const customerName = getElement("#customer-name").value.trim();
    const customerAddress = getElement("#customer-address").value.trim();
    const paymentMethod = getElement("#payment-method").value;

    if (cart.length === 0) {
        showCheckoutMessage("Adicione pelo menos um produto ao carrinho.");
        return false;
    }

    if (!customerName) {
        showCheckoutMessage("Informe seu nome.");
        return false;
    }

    if (!customerAddress) {
        showCheckoutMessage("Informe o endereço de entrega.");
        return false;
    }

    if (!paymentMethod) {
        showCheckoutMessage("Escolha uma forma de pagamento.");
        return false;
    }

    showCheckoutMessage("");
    return true;
}

function buildOrderMessage() {
    const customerName = getElement("#customer-name").value.trim();
    const customerAddress = getElement("#customer-address").value.trim();
    const paymentMethod = getElement("#payment-method").value;

    let total = 0;

    const itemsMessage = cart.map((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        return `${item.quantity}x ${item.name} - R$ ${formatPrice(itemTotal)}`;
    }).join("\n");

    return `
Olá! Gostaria de fazer um pedido.

Cliente: ${customerName}
Endereço: ${customerAddress}
Pagamento: ${paymentMethod}

Itens:
${itemsMessage}

Total: R$ ${formatPrice(total)}
`;
}

function sendOrderToWhatsApp() {
    if (!validateOrder()) {
        return;
    }

    const message = buildOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_PHONE}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}