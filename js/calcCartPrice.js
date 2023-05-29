function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.order-product__block');
	const priceElements = cartWrapper.querySelectorAll('.order-product__item-price');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('.cart-delivery');

	// Общая стоимость товаров
	let priceTotal = 0;
	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.closest('.order-product__item').querySelector('.counter-item');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;

	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}
	// Указываем стоимость доставки
	if (priceTotal >= 1000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = 'По тарифу такси';
	}
}