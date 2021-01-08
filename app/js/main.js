$(function () {

});

const slider = document.querySelector('.swiper-container');
/* Старт swiper-slider на странице ГЛАВНАЯ */
let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 55,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})
/* Конец swiper-slider на странице ГЛАВНАЯ */