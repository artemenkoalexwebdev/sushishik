var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
        delay: 17000,
    },
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    pagination: {
        el: ".slider-pagination",
        clickable: true,
        type: 'fraction'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            autoplay: {
                delay: 17000,
            },

        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },

    }
});