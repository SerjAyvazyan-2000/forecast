


let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 20,
    slidesPerView: 2,

    navigation: {
        nextEl: '.reviews-slider-prev',
        prevEl: '.reviews-slider-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2},
        1139: {slidesPerView: 1},
        1200: {slidesPerView: 2},

    },



});



let advantagesSwiper = new Swiper(".advantages-swiper", {
    spaceBetween: 20,
    slidesPerView: 2,

    navigation: {
        nextEl: '.reviews-slider-prev',
        prevEl: '.reviews-slider-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2},
        1139: {slidesPerView: 1},
        1200: {slidesPerView: 2},

    },



});



