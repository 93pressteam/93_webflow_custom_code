"use strict";

import { initRouter } from "./router.js";

window.Webflow ||= [];

window.Webflow ||= [];
window.Webflow.push(() => {
  if (process.env.NODE_ENV === "production") {
    // // Статичні імпорти всіх модулів для продакшену
    if (process.env.NODE_ENV === "production") {
      // console.log("Running in production mode");

      initRouter();
    }
  } else {
    console.log("Running in development mode");

    // Функція для видалення мовного префікса з URL
    function removeLanguagePrefix(pathname) {
      return pathname.replace(/^\/[a-z]{2}(\/|$)/, "/"); // Видаляє "/en" або "/ua" на початку
    }

    // Отримуємо шлях без мовного префікса
    const normalizedPath = removeLanguagePrefix(window.location.pathname);

    // Глобальний скрипт
    import("./pages/global.js").then((module) => module.initGlobalScript());

    // Маршрутизація
    if (normalizedPath === "/") {
      import("./pages/home.js").then((module) => module.initHomePage());
    } else if (normalizedPath === "/vacancies") {
      import("./pages/vacancies.js").then((module) =>
        module.initVacanciesPage()
      );
    } else if (normalizedPath === "/support") {
      import("./pages/support.js").then((module) => module.initSupportPage());
    }
  }
});
