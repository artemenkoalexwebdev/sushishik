function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('.empty-cart');
    const orderForm = document.querySelector('#order-form');
    const cartDelivery = document.querySelector('.cart-delivery');
    //const mailBlock = document.querySelector('.email-field');

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none');
        cartDelivery.classList.remove('none');
        orderForm.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        cartDelivery.classList.add('none');
        orderForm.classList.add('none');
    }
}
