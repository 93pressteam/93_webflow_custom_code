import { swiperConfigs } from '../modules/swiperConfigs';

/**
 * Ініціалізація Swiper
 * @param {string} selector - CSS-селектор для Swiper-контейнера.
 * @param {object} options - Об'єкт конфігурації для Swiper.
 * @returns {Swiper|null} - Повертає екземпляр Swiper або null, якщо елемент не знайдено.
 */
export function initSwiper(selector, type) {
    const swiperElement = document.querySelector(selector);
    const config = swiperConfigs[type];
    
    if (!swiperElement) {
        console.log(`Swiper '${selector}' не знайдено.`);
        return null;
    }

    if (!config) {
        console.error(`Конфігурація для Swiper типу '${type}' не знайдена.`);
        return null;
    }
    
    // Використовуємо глобальну змінну Swiper
    return new Swiper(swiperElement, config);
}