const showButton = document.querySelector('.show-all__button');
const hiddenParts = document.querySelector('.brands-catalog__list--hidden');
const showLess = document.querySelector('.show-all__icon');

showButton.addEventListener('click', function() {
    hiddenParts.classList.toggle('brands-catalog__list--hidden');
    showLess.classList.toggle('show-all__icon');

    if(hiddenParts.classList.contains('brands-catalog__list--hidden')) {
        showButton.textContent = 'Показать всё';
    } else {
        showButton.textContent = 'Скрыть';
    }
});

const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {

            spaceBetween: 12,
            slidesPerView: 1,
            width: 240,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }

    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})
