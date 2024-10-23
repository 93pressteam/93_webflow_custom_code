// Модуль для обробки форм
export function formHandler() {

    //form script
    // Отримуємо всі форми
    const forms = document.querySelectorAll('.form-recruit'); // Замінив на клас, щоб можна було вибирати кілька форм
    const btn_submits = document.querySelectorAll('.btn-submit-recruit');

    // Базовий URL для запитів
    const baseUrl = 'https://serverless.info-93ombr.workers.dev';

    // Функція для форматування дати
    function formatDate(dateString) {
        const parts = dateString.split('-');
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
    }

    // Функція для отримання даних з сервера
    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(response);
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    // Функція для заповнення спеціальностей в кожній формі
    async function populateSpecialties() {
        try {
            const requestUrl = `${baseUrl}/vacancies`;
            const responseData = await fetchData(requestUrl);

            // Оновлюємо спеціальності для кожної форми
            forms.forEach((form) => {
                const specialtySelector = form.querySelector('select[postion="true"]');
                specialtySelector.innerHTML = '<option value="">Спеціальність*</option>';
                responseData.objects.forEach((item) => {
                    const option = document.createElement('option');
                    option.value = item.vacancyId;
                    option.textContent = item.position;
                    specialtySelector.appendChild(option);
                });
            });
        } catch (error) {
            console.error('Error populating specialties:', error);
        }
    }

    // Функція для обробки відправки форми
    async function submitForm(event) {
        event.preventDefault();
        let errorMessages = [];

        // Отримуємо поточну форму
        const form = event.target;

        const vacancy = form.querySelector('select[postion="true"]').selectedOptions[0];

        const formData = {
            fullName: form.querySelector('input[fullname="form"]').value.trim(),
            position: vacancy.text,
            experience: form
                .querySelector('select[experience="form"]')
                .value.trim(),
            db: formatDate(form.querySelector('input[type="date"]').value),
            phone: form.querySelector('input[phone="form"]').value.trim(),
            descr: form.querySelector('textarea[desc="form"]').value.trim(),
            vacancyId: vacancy.value,
        };

        // Валідація форми
        if (!formData.fullName) {
            errorMessages.push("Будь ласка, введіть ім'я.");
        } else if (formData.fullName.split(' ').length < 2) {
            errorMessages.push(
                "Будь ласка, введіть повне ім'я (наприклад: Іванов Іван)."
            );
        }

        if (!formData.position) {
            errorMessages.push('Будь ласка, виберіть спеціальність.');
        }

        const errorMessage =
            'Виникла помилка при відправці форми. Будь ласка, спробуйте ще раз';

        try {
            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                return false;
            }

            const log = `${JSON.stringify(formData)}`;
            console.log(log);
            const response = await fetch(`${baseUrl}/addCandidate`, {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.error(response);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTimeout(function () {
                window.location.href = "success-page";
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(errorMessage);
        }
    }

    // Викликаємо функцію заповнення спеціальностей
    populateSpecialties();

    // Додаємо обробник подій для кожної форми
    forms.forEach((form) => {
        
        form.addEventListener('submit', submitForm);
    });

}
