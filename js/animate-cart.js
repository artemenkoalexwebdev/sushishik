$('.product-item__button').on('click', function () { //При нажатии на кнопку..
    var buttonPos = $(this).offset(); //Определяем позицию кнопки..
    var basketPos = $('.header-cart').offset(); //Определяем позицию корзины
    var cardImg = $('.product-item .product-item__img img').attr('src');
    $('.product-item__img').append('<div class="add-effect" style="position:absolute;z-index:9999;">' +
        '<img src="' + cardImg + '" width="100px">' +
        '</div>'); // Создаём блок с эффектом
    $('.add-effect').css({ // Устанавливаем ему позицию кнопки
        'top': buttonPos.top,
        'left': buttonPos.left
    }).animate({ // А потом анимацию, с позицией корзины
        'top': basketPos.top,
        'left': basketPos.left
    }, 1000, 'linear', function () {
        $('.add-effect').remove(); // После окончания анимации - удаляем блок
    });
});