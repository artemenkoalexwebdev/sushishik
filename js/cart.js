var cart = {};
function loadCart() {
    // проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расшифровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.order-product__block').html('');
    }
}
function showCart() {
    if (!isEmpty(cart)) {
        $('.order-product__block').html('<p>Корзина пока пуста!</p>');
        $('.order-product__block').css({
            'display': 'flex',
            'padding-left': '42%',
            'align-items': 'center',
            'width': '100%',
            'height': '40px',
            'background-color': '#fa697f',
            'color': '#fff',
            'font-size': '20px',
            'font-family': '"Nunito", sans-serif',
            'border-radius': '10px',
        });
        $('.email-field').addClass('none');
        $('.cart-total').addClass('none');

    }
    else {
        $.getJSON('../db/all.json', function (data) {
            var products = data;
            var out = '';
            for (var id in cart) {
                out += '<div class="order-product__item">';
                out += '<div class="order-product__item-info">';
                out += `<img src="${products[id].img}" alt="">`;
                out += '<div class="order-product__item-text">';
                out += `<h3 class="order-product__item-title">${products[id].title}</h3>`
                out += '<div class="order-product__item-currency">';
                out += `<div class="order-product__item-price">${products[id].price} ₽</div>`;
                out += `<div class="order-product__item-weight">${products[id].weight}</div>`;
                out += '</div>';
                out += '</div>';
                out += '</div>';
                out += `<div class="order-product__item-desc">${products[id].desc}</div>`;
                out += '<div class="order-price__block">';
                out += `<div class="del-product del-product__cart" data-id="${id}">X</div>`;
                // out += `<div class="order-price__block-price">`.cart[id] * products[id].price.`</div>`;
                out += '<div class="order-price__block-price">';
                out += cart[id] * products[id].price;
                out += ' ₽</div>';
                out += '<div class="counter-wrapper__cart">';
                out += `<button class="minus-product" data-id="${id}">-</button>`;
                out += `<div class="counter-item">${cart[id]}</div>`;
                out += `<button class="plus-product" data-id="${id}">+</button>`;
                out += '</div>';
                out += '</div>';
                out += '</div>';
                out += '</div>';
            }
            $('.order-product__block').html(out);
            $('.del-product').on('click', delGoods);
            $('.minus-product').on('click', minusGoods);
            $('.plus-product').on('click', plusGoods);
            calcCartPriceAndDelivery();
        });
    }
}
function delGoods() {
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function plusGoods() {
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}
function minusGoods() {
    var id = $(this).attr('data-id');
    if (cart[id] == 1) {
        delete cart[id];
    } else {
        cart[id]--;
    }
    saveCart();
    showCart();
}
function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}
function sendEmail() {
    var ename = $('#ename').val();
    var eadress = $('#eadress').val();
    var ephone = $('#ephone').val();
    var ecounter = $('#ecounter').val();
    var etext = $('#etext').val();
    var deliver = $('.deliver').prop("checked");
    var deliverself = $('.deliver-self').prop("checked");

    if (ename != '' && ephone != '' && ecounter != '') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "ename": ename,
                    "eadress": eadress,
                    "ephone": ephone,
                    "ecounter": ecounter,
                    "etext": etext,
                    "deliver": deliver,
                    "deliverself": deliverself,
                    "cart": cart
                },
                function (data) {
                    if (data == 1) {

                    } else {
                        var toast = document.getElementById("toast-accept");
                        toast.className = "toast-accept--visible";
                        setTimeout(function () { toast.className = toast.className.replace("toast-accept--visible", ""); }, 3000);
                        $('#ename').val('');
                        $('#eadress').val('');
                        $('#ephone').val('');
                        $('#ecounter').val('');
                        $('#etext').val('');
                        localStorage.removeItem('cart');
                    }
                }
            );
        } else {
            alert('Корзина пуста!');
        }

    } else {
        alert('Заполните поля');
    }
}
$(document).ready(function () {
    loadCart();
    $('.send-email').on('click', sendEmail); //отправить письмо с заказом
});