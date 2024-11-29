import { initAllowedSwiper } from "../modules/swiperSlider/swiperManager";
import { initRemodalVacancies } from "../modules/remodalVacancies/remodalVacancies.js";

export function initHomePage() {
  // Перевіряємо, чи це сторінка "Home"
  const path = window.location.pathname;
  const pageIndicator = "/";
  if (path !== pageIndicator) {
    console.log("Це не сторінка Home. Логіка не завантажується.");
    return;
  }

  console.log("Home page scripts loaded");

  // Додайте специфічну логіку для сторінки Home

  // Ініціалізація модального вікна для вакансій
  initRemodalVacancies();

  // Swiper
  var swiper__company = initAllowedSwiper("company");
  var swiper__video = initAllowedSwiper("video");
}
