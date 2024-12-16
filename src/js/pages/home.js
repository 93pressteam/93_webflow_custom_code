import { initAllowedSwiper } from "../modules/swiperSlider/swiperManager";
import { initRemodalVacancies } from "../modules/remodalVacancies/remodalVacancies.js";

export function initHomePage() {
  // Перевіряємо, чи це сторінка "Home"
  const path = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const pageIndicator = "/";
  if (path !== pageIndicator) {
    console.log("Це не сторінка Home. Логіка не завантажується.");
    return;
  }

  console.log("Home page scripts loaded");

  // Додайте специфічну логіку для сторінки Home

  // Ініціалізація модального вікна для вакансій
  initRemodalVacancies();

  initAllowedSwiper("company");

  // VIDEO SWIPER LOGIC
  // Знаходимо CMS List
  const cmsList = document.querySelector('[fs-cmsfilter-element="list"]');
  if (!cmsList) {
    // console.error("CMS List не знайдено");
    return;
  }

  let swiperVideo = null;
  let isUpdating = false;

  // Функція перезапуску Swiper
  function restartVideoSwiper() {
    if (isUpdating) return;

    isUpdating = true;
    // console.log("Перезапуск Swiper...");

    if (swiperVideo) {
      swiperVideo.destroy(true, true); // Знищення старого Swiper
      // console.log("Старий Swiper знищено");
    }

    swiperVideo = initAllowedSwiper("video"); // Ініціалізація нового Swiper
    // console.log("Новий Swiper ініціалізовано");
    isUpdating = false;
  }

  // Спостерігач за змінами у CMS List
  const observer = new MutationObserver((mutations) => {
    // Фільтруємо зміни, що стосуються лише дочірніх елементів
    const cmsChanges = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some(
        (node) => node.nodeType === 1 && node.matches(".swiper-slide")
      )
    );

    if (cmsChanges) {
      restartVideoSwiper();
    }
  });

  // Налаштовуємо спостерігач
  observer.observe(cmsList, { childList: true, subtree: true });

  if (window.innerWidth >= 776) {
    // Ініціалізація Swiper для timeline бойового шляху
    var swiper__line = initAllowedSwiper("line");

    const swiperArr = [];
    $("[data-swiper=road]").each((index, el) => {
      const swiperOptions = {
        speed: 500,
        direction: "vertical",
        slidesPerView: 1,
        lazy: {
          loadPrevNext: true, // Завантажує сусідні слайди
        },
        on: {
          slideChange: function () {
            var activeSlide = $(".swiper-slide-thumb-active");
            var roadBorder = $(".swiper-road-progress");
            var roadPin = $(".icon-medium.mod--swiper-line");
            activeSlide.append(roadBorder);
            activeSlide.append(roadPin);
          },
        },
      };

      // Додаємо navigation та thumbs тільки для першого елемента в масиві
      if (index === 0) {
        swiperOptions.navigation = {
          nextEl: "[data-swiper=next-road]",
          prevEl: "[data-swiper=prev-road]",
        };
        swiperOptions.thumbs = {
          swiper: swiper__line,
        };

        // Додаємо обробник події slideChange для першого swiper
        swiperOptions.on.slideChange = function () {
          let indexActiveSlide = this.activeIndex;
          swiperArr.slice(1).forEach((swiper) => {
            swiper.slideTo(indexActiveSlide, 500);
          });
        };
      }

      const swiper = new Swiper(el, swiperOptions);
      swiperArr.push(swiper);
    });
  }
}
