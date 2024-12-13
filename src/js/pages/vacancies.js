import { initAllowedSwiper } from "../modules/swiperSlider/swiperManager";
import { initRemodalVacancies } from "../modules/remodalVacancies/remodalVacancies.js";

export function initVacanciesPage() {
  // Перевіряємо, чи це сторінка "Vacancies"
  const path = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
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
    let swiper__company = initAllowedSwiper("company");

    let swiper__values = initAllowedSwiper("values");
  }
  let swiper__comadors = initAllowedSwiper("comadors");

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
