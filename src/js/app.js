"use strict";

 // Імпортуємо модуль для обробки форми, який знадобиться на всіх сторінках
import { handleFormSubmission } from './modules/formHandler.js';
// import './pages/home.js'; // Імпортуємо специфічний скрипт
// import './pages/vacancies.js'; // Імпортуємо специфічний скрипт
// import './pages/support.js'; // Імпортуємо специфічний скрипт

window.Webflow ||= [];


window.Webflow ||= [];
window.Webflow.push(() => {
    // Виводимо повідомлення про завантаження глобальних скриптів


    // Використовуйте модуль для форми, якщо потрібна форма є на сторінці


    // Умовне підключення специфічних скриптів для кожної сторінки
    // if (window.location.pathname === '') {
    //     import('./pages/home.js').then(module => module.initHomePage());
    // } else if (window.location.pathname === '/vacancies') {
    //     import('./pages/vacancies.js').then(module => module.initVacanciesPage());
    // } else if (window.location.pathname === '/support') {
    //     import('./pages/support.js').then(module => module.initSupportPage());
    // }

    // const isProduction = window.location.hostname !== 'localhost';

 

    // loadModule('pages/global.js').then(module => module.initGlobalScript());

    // if (window.location.pathname === '') {
    //     loadModule('pages/home.js').then(module => module.initHomePage());
    // } else if (window.location.pathname === '/vacancies') {
    //     loadModule('pages/vacancies.js').then(module => module.initVacanciesPage());
    // } else if (window.location.pathname === '/support') {
    //     loadModule('pages/support.js').then(module => module.initSupportPage());
    // }

    // const loadModule = (modulePath) => {
    //     return import(modulePath);
    // };


    if (process.env.NODE_ENV === 'production') {
        console.log("Running in production mode");
        // Статичні імпорти всіх модулів для продакшену

        import('./pages/global.js').then(module => module.initGlobalScript());
        import('./pages/home.js').then(module => module.initHomePage());
        import('./pages/vacancies.js').then(module => module.initVacanciesPage());
        import('./pages/support.js').then(module => module.initSupportPage());
        
        
    } else {
        console.log("Running in development mode");
        // Логіка для розробки, наприклад:
 
        import('./pages/global.js').then(module => module.initGlobalScript());

        if (window.location.pathname === '/') {
            import('./pages/home.js').then(module => module.initHomePage());
        } else if (window.location.pathname === '/vacancies') {
            import('./pages/vacancies.js').then(module => module.initVacanciesPage());
        } else if (window.location.pathname === '/support') {
            import('./pages/support.js').then(module => module.initSupportPage());
        }
    }


});