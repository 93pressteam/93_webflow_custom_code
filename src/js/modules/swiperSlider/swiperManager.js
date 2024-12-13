import { swiperConfigs } from "./swiperConfigs";

/**
 * Ініціалізація Swiper за його ім'ям
 * @param {string} swiperName - Ім'я слайдера (ключ з swiperConfigs).
 * @returns {Swiper|null} - Повертає екземпляр Swiper або null, якщо елемент не знайдено або конфігурація відсутня.
 */
export function initAllowedSwiper(swiperName) {
  const pathname = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const config = swiperConfigs[swiperName];

  if (!config) {
    console.error(`Конфігурація для Swiper '${swiperName}' не знайдена.`);
    return null;
  }

  // Перевіряємо, чи дозволена ініціалізація на цій сторінці
  if (!config.pages.includes(pathname)) {
    console.log(
      `Swiper '${swiperName}' не дозволено для сторінки '${pathname}'.`
    );
    return null;
  }

  // Шукаємо елемент і ініціалізуємо Swiper
  const swiperElement = document.querySelector(`[data-swiper=${swiperName}]`);
  if (!swiperElement) {
    console.log(`Елемент для Swiper '${swiperName}' не знайдено.`);
    return null;
  }

  return new Swiper(swiperElement, config.settings);
}
