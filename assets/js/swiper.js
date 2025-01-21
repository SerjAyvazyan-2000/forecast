



let reviewsSwiper = new Swiper(".review-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    loop:true,

    navigation: {
        nextEl: '.reviews-slider-next',
        prevEl: '.reviews-slider-prev',
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },



});

let aboutSwiper = new Swiper(".about-swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
    },






});

