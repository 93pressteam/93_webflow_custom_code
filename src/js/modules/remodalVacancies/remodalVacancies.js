/**
 * Ініціалізація модального вікна для вибору вакансії
 */
export function initRemodalVacancies() {
  // Керує модальним вікном з інтерактивним вибором професії
  function showVacancyModal(slugCase) {
    const vacancyItems = $('[data-collection="vacancy"] > .collection-item');
    const inst = $("[data-remodal-id=vacancy]").remodal();

    const foundItem = vacancyItems.filter(function () {
      return $(this).data("vacancy-link") === slugCase;
    });

    if (foundItem.length) {
      vacancyItems.hide();
      foundItem.show();
      inst.open();
    } else {
      console.error("No vacancy item found for slug:", slugCase);
      event.preventDefault();
    }
  }

  // Додає обробники подій для кожного посилання на вакансію
  $('[data-collection="vacancy-list"] .collection-item > a').on(
    "click",
    function (event) {
      event.preventDefault();
      const href = $(this).attr("href");

      // Регулярний вираз для видалення локалі (/en/ або інших мов)
      const slugCase = href
        .replace(/^\/[a-z]{2}(\/|$)/, "/")
        .replace("/vacancies/", "");
      console.log("Slug Case:", slugCase);
      showVacancyModal(slugCase);
      return false;
    }
  );
}
