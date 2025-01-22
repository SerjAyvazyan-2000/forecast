



let reviewsSwiper = new Swiper(".review-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    loop:true,

    navigation: {
        nextEl: '.reviews-slider-prev',
        prevEl: '.reviews-slider-next',
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

document.querySelector(".review-swiper").addEventListener("click", (event) => {
    let swiperWrapper = document.querySelector(".review-swiper .swiper-wrapper");
    let activeSlide = document.querySelector(".review-swiper .swiper-slide-active");

    let wrapperRect = swiperWrapper.getBoundingClientRect();
    let clickX = event.clientX;
    let middleX = wrapperRect.left + wrapperRect.width / 2;

    if (clickX > middleX) {
        reviewsSwiper.slideNext();
    } else {
        reviewsSwiper.slidePrev();
    }
});

let aboutSwiper = new Swiper(".about-swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
    },






});

