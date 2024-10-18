export function styleForm() {
    $(document).ready(function () {
        const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        let hasError = false;
        
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 18);
        const minDateString = minDate.toISOString().split('T')[0];
    
        // Функція для ініціалізації поля дати
        function initDateField($fieldWrapper, $dateInput, $displayInfo) {
            // Встановлюємо мінімальну дату
            $dateInput.attr('max', minDateString);
    
            // Обробка зміни дати
            $dateInput.on('focusout', function () {
                handleDateChange($dateInput, $displayInfo);
            });
    
            // Оновлення маски
            $dateInput.on('change focusout', function () {
                updateMaskText($dateInput, $displayInfo);
            });
    
            // Відкриття date picker
            $displayInfo.on('click mousedown touchstart', function (event) {
                event.preventDefault();
                openDatePicker($dateInput, $displayInfo);
            });
    
            // Оновлення тексту маски при кліку поза полем
            $(document).on('click', function (event) {
                if (!$fieldWrapper.is(event.target) && !$dateInput.val()) {
                    $displayInfo.text('Дата народження*');
                }
            });
        }
    
        // Функція обробки зміни дати
        function handleDateChange($dateInput, $displayInfo) {
            const selectedDate = new Date($dateInput.val());
            if (selectedDate > minDate) {
                hasError = true;
                $displayInfo.text("Ви маєте бути старші 18 років.");
                $displayInfo.removeClass('hide_placeholder').addClass('error-message');
                $dateInput.val(''); // Очищення поля
            } else {
                hasError = false;
                updateMaskText($dateInput, $displayInfo);
            }
        }
    
        // Функція оновлення тексту маски
        function updateMaskText($dateInput, $displayInfo) {
            if (!hasError) {
                $displayInfo.text($dateInput.val() || 'Дата народження*');
            }
        }
    
        // Функція відкриття date picker
        function openDatePicker($dateInput, $displayInfo) {
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
    
        // Ініціалізація полів дати для обох випадків
        initDateField(
            $('[data-modal="false"] .form-field-wrapper.target'), 
            $('[data-modal="false"] .form-input.mod--date.target'), 
            $('[data-modal="false"] [data-mask]')
        );
        
        initDateField(
            $('[data-modal="true"] .form-field-wrapper.target'), 
            $('[data-modal="true"] .form-input.mod--date.target'), 
            $('[data-modal="true"] [data-mask]')
        );
    });
}