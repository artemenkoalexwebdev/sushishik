$(function () {
    $('.product-item__button').click(function () {
        $('img.product-item__img').clone().css({
            'position': 'absolute',
            'z-index': 100,
            'width': '30%',
            'left': $('img.product-item__img').offset()['left'],
            'top': $('img.product-item__img').offset()['top'],
        }).appendTo('.cont').animate({
            top: $('.header-cart').offset()['top'],
            left: $('.header-cart').offset()['left'],
            opacity: 0,
            width: 40
        }, 1000, function () {
            $(this).remove();
        })
    })
});