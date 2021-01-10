$(function () {

});

const sliderNav = document.querySelector('.header-swiper-nav .swiper-container');
const slider = document.querySelector('.header-swiper .swiper-container');
let mySwiper = new Swiper(slider, {
    slidesPerView: 1,/* Количество слайдов для одновременного показа*/
    /* loop: true, *//* Бессконечная прокрутка */
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-button-next',/* Кнопкиа навигации */
        prevEl: '.swiper-button-prev',/* Кнопка навигации */
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

})
/* Старт swiper-slider на странице ГЛАВНАЯ */
let mySwiperNav = new Swiper(sliderNav, {
    slidesPerView: 1,/* Количество слайдов для одновременного показа*/
    /* loop: true, *//* Бессконечная прокрутка */
    loopedSlides: 1,
    spaceBetween: 55,/* Отступы между слайдами */
    navigation: {
        nextEl: '.swiper-button-next',/* Кнопкиа навигации */
        prevEl: '.swiper-button-prev',/* Кнопка навигации */
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    slideToClickedSlide: true,/* Переходим к кдикнутому слайду */

    thumbs: {
        swiper: mySwiper
    }

})

function filterGames() {
    const buttons = document.querySelectorAll('.header-content-tab-btn');/* Заносм в массив кнопки переключатели */
    const cardsGame = document.querySelectorAll('.header .swiper-slide'); /* Заносм в массив карточки игр */

    function filter(category, items) {
        items.forEach((item) => {/* Проходим в цыкле по всем карточкам */
            const isItemFiltered = !item.classList.contains(category);/* Ищем в класс-листе карточки текущую категорию*/
            const isShowAll = category.toLowerCase() === 'all';
            if (isItemFiltered && !isShowAll) {/* Если нашли, то*/
                item.classList.add('hide');
                mySwiper. update();
                mySwiperNav. update();

                mySwiper.init();
                mySwiperNav.init();
            }
            else {    
                item.classList.remove('hide');
                mySwiper. update();
                mySwiperNav. update();

                mySwiper.init();
                mySwiperNav.init();
/*                 mySwiper.destroy();
                mySwiperNav.destroy(); */
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;/* Берем значение атрибута data-filter у нажатой кнопки и заносим в константу */
            filter(currentCategory, cardsGame); /* Вызываем функцию фильтрации карточек*/
        })
    })
}
filterGames()


/* Конец swiper-slider на странице ГЛАВНАЯ */