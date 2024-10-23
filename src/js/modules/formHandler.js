// Модуль для обробки форм
export function handleFormSubmission(formId) {
    // const form = document.getElementById(formId);

    //form script

const form = document.getElementById('email-form');
const btn_submit = document.getElementById('btn-submit');

//set from action as "#" to prevent page refresh
form.action = '#';

function formatDate(dateString) {
    const parts = dateString.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        console.error(response);
        throw new Error('Network response was not ok');
    }
    return response.json();
}
const baseUrl = 'https://serverless.info-93ombr.workers.dev';

async function populateSpecialties() {
    try {
        const requestUrl = `${baseUrl}/vacancies`;
        const responseData = await fetchData(requestUrl);

        const specialtySelector = document.querySelector(
            'select[postion="true"]'
        );
        specialtySelector.innerHTML =
            '<option value="">Спеціальність*</option>';
        responseData.objects.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.vacancyId;
            option.textContent = item.position;
            specialtySelector.appendChild(option);
        });
    } catch (error) {
        console.error('Error populating specialties:', error);
    }
}

async function submitForm(event) {
    event.preventDefault();
    let errorMessages = [];

    const vacancy = document.querySelector(
            'select[postion="true"]'
        ).selectedOptions[0];

    const formData = {
        fullName: document.querySelector('input[fullname="form"]').value.trim(),
        position: vacancy.text,
        experience: document
            .querySelector('select[experience="form"]')
            .value.trim(),
        db: formatDate(document.querySelector('input[type="date"]').value),
        phone: document.querySelector('input[phone="form"]').value.trim(),
        descr: document.querySelector('textarea[desc="form"]').value.trim(),
        vacancyId: vacancy.value,
    };

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
        'Виникла помилка при відправці форми. Будь ласка, спробуйте раз';
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
        setTimeout(function() {
            window.location.href = "success-page";
        }, 1000);
    } catch (error) {
        console.error('Error submitting form:', error);
        alert(errorMessage);
    }
}

populateSpecialties();
form.addEventListener('submit', submitForm);
  


    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            // Додайте логіку обробки даних форми

            console.log('Form submitted:', formData);
        });
    } else {
        console.warn(`Form with ID ${formId} not found`);
    }
}
