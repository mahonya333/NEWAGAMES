$(function () {

});

const sliderNav = document.querySelector('.header-swiper-nav .swiper-container');
const slider = document.querySelector('.header-swiper .swiper-container');
let mySwiper = new Swiper(slider, {
    slidesPerView: 1,/* Количество слайдов для одновременного показа*/
    /* loop: true, *//* Бессконечная прокрутка */
    loopedSlides: 12,
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
    loopedSlides: 12,
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
    const header = document.querySelector('.header');
    const buttons = document.querySelectorAll('.header-content-tab-btn');/* Заносм в массив кнопки переключатели */
    const cardsGame = document.querySelectorAll('.header .swiper-slide'); /* Заносм в массив карточки игр */

    function filter(category, items, button) {
        items.forEach((item) => {/* Проходим в цыкле по всем карточкам */
            const isItemFiltered = !item.classList.contains(category);/* Ищем в класс-листе карточки текущую категорию*/
            const isShowAll = category.toLowerCase() === 'all-games';
            if (isItemFiltered && !isShowAll) {/* Если карточка не соответствует категории то выполняем код*/

                header.removeAttribute('class');
                header.classList.add('header');
                header.classList.add(category);

                item.classList.add('hide');

                mySwiper. update();
                mySwiperNav. update();
                mySwiper.init();/* Инициализируем слайдер */
                mySwiperNav.init();/* Инициализируем навигационный слайдер */
            }
            else {    
                header.removeAttribute('class');
                header.classList.add('header');
                header.classList.add(category);

                item.classList.remove('hide');
                
                mySwiper. update();
                mySwiperNav. update();   
                mySwiper.init();/* Инициализируем слайдер */
                mySwiperNav.init();/* Инициализируем навигационный слайдер */
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;/* Берем значение атрибута data-filter у нажатой кнопки и заносим в константу */
            document.querySelectorAll('.header-content-tab-btn').forEach(btn => {
                btn.classList.remove('header-content-tab-btn--active')
            });/*Убираем со всех кнопок активное состояние*/
            button.classList.add('header-content-tab-btn--active');
            filter(currentCategory, cardsGame); /* Вызываем функцию фильтрации карточек*/
        })
    })
}
filterGames()


/* Конец swiper-slider на странице ГЛАВНАЯ */