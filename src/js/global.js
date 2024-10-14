// Універсальні функції
console.log("Global scripts loaded");

// Імпортуємо модуль для обробки форми
import { handleFormSubmission } from './modules/formHandler.js';

// Використовуйте модуль для форми, якщо потрібна форма є на сторінці
handleFormSubmission('contactForm');

// Умовне підключення специфічних скриптів для кожної сторінки
if (window.location.pathname === '') {
    import('./home.js').then(module => module.initHomePage());
} else if (window.location.pathname === '/vacancies') {
    import('./vacancies.js').then(module => module.initVacanciesPage());
} else if (window.location.pathname === '/support') {
    import('./support.js').then(module => module.initSupportPage());
}
