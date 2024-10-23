import { styleForm } from '../modules/formStyling';
import { formHandler } from '../modules/formHandler';

export function initGlobalScript() {
    console.log("Global script scripts loaded");

    // Додати візуальні ефекти до форми
    styleForm();
    // імплементувати логіку для handle multiple forms on page 
    formHandler();
    
    // Додайте специфічну логіку для всього сайту 

    function showVacancyModal(slugCase) {
        const vacancyItems = $('[data-collection="vacancy"] > .collection-item');
        const inst = $('[data-remodal-id=vacancy]').remodal();

        const foundItem = vacancyItems.filter(function () {
            return $(this).data('vacancy-link') === slugCase;
        });

        if (foundItem.length) {
            vacancyItems.hide();
            foundItem.show();
            inst.open();
        } else {
            console.error('No vacancy item found for slug:', slugCase);
            event.preventDefault();
        }
    }

    $('[data-collection="vacancy-list"] .collection-item > a').on('click', function (event) {
        event.preventDefault();
        const slugCase = $(this).attr('href').replace('/vacancies/', '');
        console.log('Slug Case:', slugCase);
        showVacancyModal(slugCase);
        return false;
    });

    // Swiper
    var swiper__company = new Swiper('[data-swiper=company]', {
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '[data-swiper=next-company]',
            prevEl: '[data-swiper=prev-company]',
        },
    });

    if (window.innerWidth >= 776) {
        var swiper__line = new Swiper('[data-swiper=line]', {
            speed: 500,
            slidesPerView: 7,
            watchSlidesProgress: true,
            allowTouchMove: true,
        });

        const swiperArr = [];
        $('[data-swiper=road]').each((index, el) => {
            const swiperOptions = {
                speed: 500,
                direction: 'vertical',
                slidesPerView: 1,
                on: {
                    slideChange: function () {
                        var activeSlide = $('.swiper-slide-thumb-active');
                        var roadBorder = $('.swiper-road-progress');
                        var roadPin = $('.icon-medium.mod--swiper-line');
                        activeSlide.append(roadBorder);
                        activeSlide.append(roadPin);
                    },
                },
            };

            // Додаємо navigation та thumbs тільки для першого елемента в масиві
            if (index === 0) {
                swiperOptions.navigation = {
                    nextEl: '[data-swiper=next-road]',
                    prevEl: '[data-swiper=prev-road]',
                };
                swiperOptions.thumbs = {
                    swiper: swiper__line,
                };

                // Додаємо обробник події slideChange для першого swiper
                swiperOptions.on.slideChange = function () {
                    let indexActiveSlide = this.activeIndex;
                    swiperArr.slice(1).forEach(swiper => {
                        swiper.slideTo(indexActiveSlide, 500);
                    });
                };
            }

            const swiper = new Swiper(el, swiperOptions);
            swiperArr.push(swiper);
        });
    }

    let swiper__video = new Swiper('[data-swiper=video]', {
        speed: 500,
        spaceBetween: 16,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '[data-swiper=next-video]',
            prevEl: '[data-swiper=prev-video]',
        },
        pagination: {
            el: "[data-swiper=progress]",
            type: "progressbar",
        },
    });

}
