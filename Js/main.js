const productList = document.getElementById("product-list")

function formatPrice(price){
    return price.toFixed(2).replace(".",",");
}

function renderProducts(){
    productList.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML =  '
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="product-price"> R$ ${formatPrice(product.price)}</p>
        <button class="btn" onClick="addToCart(${product.id})">
            Adicionar ao carrinho
        </button>
        ';

        productList.appendChild(productCard);
               
        
    });
}

renderProducts();