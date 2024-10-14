// Модуль для обробки форм
export function handleFormSubmission(formId) {
    const form = document.getElementById(formId);
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
