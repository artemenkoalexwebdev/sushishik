// корзина
function init() {
    //вычитываем файл goods.json
    $.getJSON("../db/new.json", productsOutNew);
    $.getJSON("../db/philadelphia.json", productsOutPhill);
    $.getJSON("../db/california.json", productsOutCalif);
    $.getJSON("../db/roll.json", productsOutRoll);
    $.getJSON("../db/maki.json", productsOutMaki);
    $.getJSON("../db/futumaki.json", productsOutFutumaki);
    $.getJSON("../db/hot-roll.json", productsOutHotroll);
    $.getJSON("../db/wok.json", productsOutWok);
    $.getJSON("../db/sets.json", productsOutSet);
    $.getJSON("../db/dop.json", productsOutDop);
}

function productsOutNew(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__new').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutPhill(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__philadelphia').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutCalif(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__california').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutRoll(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__roll').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutMaki(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__maki').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutFutumaki(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__futumaki').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutHotroll(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__hotroll').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutWok(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__wok').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutSet(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__sets').html(out);
    $('.product-item__button').on('click', addToCart);
}
function productsOutDop(data) {
    //вывод на страницу
    var out = '';
    for (var key in data) {
        // ------------------------
        out += '<div class="swiper-slide">';
        out += `<div class="product-item data-id="${data[key].id}">`;
        out += `<div class="product-item__img"><img src="${data[key].img}" alt=""></div>`;
        out += `<div class="product-item__title">${data[key].title}</div>`;
        out += `<div class="product-item__desc">${data[key].desc}</div>`;
        out += '<div class="product-item__currency">';
        out += '<div class="product-item__price-weight">';
        out += `<div class="product-item__price">${data[key].price} ₽</div>`;
        out += `<div class="pruduct-item__weight">${data[key].weight}</div>`;
        out += '</div>';
        out += `<a class="product-item__button"data-id="${data[key].id}" onclick="toastFunction()">+ в корзину</a>`;
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#products-container__dop').html(out);
    $('.product-item__button').on('click', addToCart);
}
var cart = {};
function loadCart() {
    // проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расшифровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}
function addToCart() {
    //добавляем товар в корзину
    var id = $(this).attr('data-id');
    cart[id] = 1;
    if (cart[id] == undefined) {
        // cart[id] = 1;
    } else {
        // cart[id]++;
    }
    showMiniCart();
    saveCart();
}
function showMiniCart() {
    $.getJSON('../db/all.json', function (data) {
        var products = data;
        var out = "";
        for (var id in cart) {
            out += `<div class="cart-item">`;
            out += '<div class="cart-item__top">';
            out += `<div class="cart-item__img"><img src="${products[id].img}" alt=""></div>`;
            out += '<div class="cart-item__desc">';
            out += `<div class="del-product del-product__minicart" data-id="${id}">X</div>`;
            out += `<div class="cart-item__title">${products[id].title}</div>`;
            out += `<div class="cart-item__weight">${products[id].weight}</div>`;

            out += `<div class="counter-block">`;
            out += `<div class="counter-wrapper">`;
            out += `<button class="minus-product" data-id="${id}">-</button>`;
            out += `<div class="counter-item">${cart[id]}</div>`;
            out += `<button class="plus-product" data-id="${id}">+</button>`;
            out += '</div>';
            out += `<div class="price__currency">${products[id].price} ₽</div>`;
            out += '</div>';
            out += '</div>';
            out += '</div>';
            out += '</div>';
        }
        $('.cart-wrapper').html(out);
        $('.del-product').on('click', delGoods);
        $('.minus-product').on('click', minusGoods);
        $('.plus-product').on('click', plusGoods);
        toggleCartStatus();
        calcCartPriceAndDelivery();
    });
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
}
function delGoods() {
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showMiniCart();
}
function plusGoods() {
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showMiniCart();
}
function minusGoods() {
    var id = $(this).attr('data-id');
    if (cart[id] == 1) {
        delete cart[id];
    } else {
        cart[id]--;
    }
    saveCart();
    showMiniCart();
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}
$(document).ready(function () {
    init();
    loadCart();
    toggleCartStatus();
});