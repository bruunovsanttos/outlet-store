function formatPrice(price) {
    return price.toFixed(2).replace(".", ",");
}

function getElement(selector) {
    return document.querySelector(selector);
}