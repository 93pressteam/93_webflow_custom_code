export function initGlobalScript() {
    console.log("Global script scripts loaded");
    console.log("pord_test_v1");
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

    $(document).ready(function () {
        const $displayInfo = $('[data-mask]');
        const $dateFieldWrapper = $('.form-field-wrapper.target');
        const $dateInput = $('.form-input.mod--date.target');
        const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        let hasError = false; // Додаткова змінна для перевірки помилки

        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 18); // Задає мінімальну дату на 18 років назад
        const minDateString = minDate.toISOString().split('T')[0]; // Форматує в формат YYYY-MM-DD

        $dateInput.attr('max', minDateString);

        // Функція для обробки зміни дати
        function handleDateChange() {
            const selectedDate = new Date($(this).val());

            if (selectedDate > minDate) {
                hasError = true; // Встановлюємо помилку
                $displayInfo.text("Ви маєте бути старші 18 років."); // Показуємо повідомлення
                $displayInfo.removeClass('hide_placeholder').addClass('error-message'); // Показуємо текст та додаємо клас

                $(this).val(''); // Очищуємо поле, якщо обрана дата не відповідає обмеженню
            } else {
                hasError = false; // Скидаємо помилку
                updateMaskText(); // Оновлюємо текст маски
                //$dateInput.addClass('hide_placeholder'); 
            }

        }

        $dateInput.on('focusout', handleDateChange); // Викликаємо функцію при зміні дати

        // Функція для відкриття календаря
        function openDatePicker() {
            if (isiOS) {
                $displayInfo.addClass('hide_placeholder');
                $dateInput.removeClass('hide_placeholder').focus();
            } else {
                $dateInput.focus();
                try {
                    if ($dateInput[0].showPicker) {
                        $dateInput[0].showPicker();
                    }
                } catch (error) {
                    // Обробка помилок
                }
            }
        }

        // Показати поле введення дати або відкрити календар під час кліку на маску
        $displayInfo.on('click mousedown touchstart', function (event) {
            event.preventDefault();
            // Скидаємо повідомлення про помилку при спробі вибрати нову дату
            //  if (hasError) {
            //   $displayInfo.text('Дата народження*');
            // }
            openDatePicker();
        });

        // Оновлення тексту маски на основі значення поля дати
        function updateMaskText() {
            // Оновлюємо текст маски тільки якщо немає помилки
            if (!hasError) {
                $displayInfo.text($dateInput.val() || 'Дата народження*');
            }
        }

        // Оновлення тексту маски при зміні значення або втраті фокусу
        $dateInput.on('change focusout', updateMaskText);

        // Відновити текст маски при кліку поза полем дати, якщо поле порожнє
        $(document).on('click', function (event) {
            if (!$dateFieldWrapper.is(event.target) && !$dateInput.val()) {
                $displayInfo.text('Дата народження*');
            }
        });
    });


}
