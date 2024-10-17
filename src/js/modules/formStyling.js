export function styleForm() {
    
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