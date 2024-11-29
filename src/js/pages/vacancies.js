import { initAllowedSwiper } from "../modules/swiperSlider/swiperManager";
import { initRemodalVacancies } from "../modules/remodalVacancies/remodalVacancies.js";

export function initVacanciesPage() {
  // Перевіряємо, чи це сторінка "Vacancies"
  const path = window.location.pathname;
  const pageIndicator = "/vacancies";
  if (path !== pageIndicator) {
    console.log("Це не сторінка Vacancies. Логіка не завантажується.");
    return;
  }

  console.log("Home page scripts loaded");

  // Ініціалізація модального вікна для вакансій
  initRemodalVacancies();

  // Swiper
  if (window.innerWidth <= 776) {
    // ініціалізація слайдера для COMPANY
    initAllowedSwiper("company");

    let swiper__values = new Swiper("[data-swiper=values]", {
      speed: 500,
      spaceBetween: 16,
      slidesPerView: "auto",
      navigation: {
        nextEl: "[data-swiper=next-values]",
        prevEl: "[data-swiper=prev-values]",
      },
      pagination: {
        el: "[data-swiper=progress-values]",
        type: "progressbar",
      },
    });
  }
  let swiper__comadors = new Swiper("[data-swiper=comadors]", {
    speed: 500,
    spaceBetween: 16,
    slidesPerView: "auto",
    navigation: {
      nextEl: "[data-swiper=next-comadors]",
      prevEl: "[data-swiper=prev-comadors]",
    },
    pagination: {
      el: "[data-swiper=progress-comadors]",
      type: "progressbar",
    },
  });

  $(document).ready(function () {
    const collectionList = $("#collection");
    const loadMoreBtn = $("#loadMoreBtn");
    const itemsPerPage = 8;
    let visibleItems = itemsPerPage;

    // Показує початково 8 елементів
    showItems();

    loadMoreBtn.on("click", function () {
      showMoreItems();
    });

    function showItems() {
      collectionList
        .find(".collection-item")
        .hide()
        .slice(0, visibleItems)
        .show();
      if (visibleItems >= collectionList.find(".collection-item").length) {
        loadMoreBtn.hide();
      }
    }

    function showMoreItems() {
      visibleItems = collectionList.find(".collection-item").length;
      collectionList.find(".collection-item").show();
      loadMoreBtn.hide();
    }
  });
}
