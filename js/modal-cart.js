const cartModal = document.getElementById('cart-modal');
const modalBtn = document.getElementById('btn-cart')
const toggleMenu = function () {
    cartModal.classList.toggle('open');
}
modalBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});
document.addEventListener('click', function (e) {
    const target = e.target;
    const its_cartModal = target == cartModal || cartModal.contains(target);
    const its_modalBtn = target == modalBtn;
    const cartModal_is_active = cartModal.classList.contains('open');

    if (!its_cartModal && !its_modalBtn && cartModal_is_active) {
        toggleMenu();
    }
});