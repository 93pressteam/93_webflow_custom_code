"use strict";

 // Імпортуємо модуль для обробки форми, який знадобиться на всіх сторінках
import { handleFormSubmission } from './modules/formHandler.js';
import './pages/home.js'; // Імпортуємо специфічний скрипт
// import './pages/vacancies.js'; // Імпортуємо специфічний скрипт
// import './pages/support.js'; // Імпортуємо специфічний скрипт

window.Webflow ||= [];


window.Webflow ||= [];
window.Webflow.push(() => {
    // Виводимо повідомлення про завантаження глобальних скриптів
    console.log("Global scripts loaded");

    // Використовуйте модуль для форми, якщо потрібна форма є на сторінці
    handleFormSubmission('contactForm');

    // Умовне підключення специфічних скриптів для кожної сторінки
    if (window.location.pathname === '') {
        import('./pages/home.js').then(module => module.initHomePage());
    } else if (window.location.pathname === '/vacancies') {
        import('./pages/vacancies.js').then(module => module.initVacanciesPage());
    } else if (window.location.pathname === '/support') {
        import('./pages/support.js').then(module => module.initSupportPage());
    }
    handleFormSubmission(42);
});