"use strict";

import { initRouter } from './router.js';

window.Webflow ||= [];


window.Webflow ||= [];
window.Webflow.push(() => {

    if (process.env.NODE_ENV === 'production') {

        // // Статичні імпорти всіх модулів для продакшену
        if (process.env.NODE_ENV === 'production') {
            // console.log("Running in production mode");

            initRouter();
        }

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