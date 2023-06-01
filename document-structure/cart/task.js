
let productCards = document.querySelectorAll('.product');


let cart = document.querySelector('.cart__products');


function handleQuantityButtonClick(event) {
    let target = event.target;
    let quantityValue = target.parentNode.querySelector('.product__quantity-value');
    let currentQuantity = parseInt(quantityValue.textContent);

    if (target.classList.contains('product__quantity-control_dec')) {
       
        if (currentQuantity > 1) {
            quantityValue.textContent = currentQuantity - 1;
        }
    } else if (target.classList.contains('product__quantity-control_inc')) {
       
        quantityValue.textContent = currentQuantity + 1;
    }
}


function handleAddToCartButtonClick(event) {
    let target = event.target;
    let productCard = target.closest('.product');
    let productId = productCard.dataset.id;
    let quantityValue = productCard.querySelector('.product__quantity-value');
    let quantity = parseInt(quantityValue.textContent);


    let existingCartItem = cart.querySelector('.cart__product[data-id="' + productId + '"]');
    if (existingCartItem) {
     
        let cartItemQuantity = existingCartItem.querySelector('.cart__product-count');
        let currentCartItemQuantity = parseInt(cartItemQuantity.textContent);
        cartItemQuantity.textContent = currentCartItemQuantity + quantity;
    } else {
     
        let newCartItem = document.createElement('div');
        newCartItem.classList.add('cart__product');
        newCartItem.dataset.id = productId;

        let productImage = productCard.querySelector('.product__image');
        let productCount = document.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.textContent = quantity;

        newCartItem.appendChild(productImage.cloneNode(true));
        newCartItem.appendChild(productCount);
        cart.appendChild(newCartItem);
    }
}


productCards.forEach(function (productCard) {
    let quantityControls = productCard.querySelector('.product__quantity-controls');
    quantityControls.addEventListener('click', handleQuantityButtonClick);

    let addToCartButton = productCard.querySelector('.product__add');
    addToCartButton.addEventListener('click', handleAddToCartButtonClick);
});