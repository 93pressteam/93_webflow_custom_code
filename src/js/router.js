import './pages/global.js'; 
import './pages/home.js'; 
import './pages/vacancies.js'; 
import './pages/support.js'; 

export function initRouter() {
    import('./pages/global.js').then(module => module.initGlobalScript());
    import('./pages/home.js').then(module => module.initHomePage());
    import('./pages/vacancies.js').then(module => module.initVacanciesPage());
    import('./pages/support.js').then(module => module.initSupportPage());
}