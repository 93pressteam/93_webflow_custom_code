import { initAllowedSwiper } from '../modules/swiperManager';

export function initHomePage() {

// Перевіряємо, чи це сторінка "Vacancies"
const path = window.location.pathname;
const pageIndicator = '/';
if (path !== pageIndicator) {
    console.log("Це не сторінка Vacancies. Логіка не завантажується.");
    return;
}

    console.log("Home page scripts loaded");
    
    // Додайте специфічну логіку для сторінки Home

    // керує модальним вікном з інтерактивним вибором професії
    function showVacancyModal(slugCase) {
        const vacancyItems = $('[data-collection="vacancy"] > .collection-item');
        const inst = $('[data-remodal-id=vacancy]').remodal();
      
        const foundItem = vacancyItems.filter(function() {
          return $(this).data('vacancy-link') === slugCase;
        });
      
        if (foundItem.length) {
          vacancyItems.hide();
          foundItem.show();
          inst.open();
        } else {
          console.error('No vacancy item found for slug:', slugCase);
          event.preventDefault();
        }
      }
      
    $('[data-collection="vacancy-list"] .collection-item > a').on('click', function(event) {
      event.preventDefault();
      const href = $(this).attr('href');
      
      // Регулярний вираз для видалення локалі (/en/ або інших мов)
      const slugCase = href.replace(/^\/[a-z]{2}(\/|$)/, '/').replace('/vacancies/', '');
    //   console.log('Slug Case:', slugCase);
      showVacancyModal(slugCase);
      return false;
      });


    // Swiper
    // console.time('Init Swiper company');
    // var swiper__company = initAllowedSwiper('company');
    // console.timeEnd('Init Swiper company')
    setTimeout(() => {
        console.time('Init Swiper company');
        console.log('home');
        initAllowedSwiper('company');
        console.timeEnd('Init Swiper company');
    }, 100); // Відкладення на 100 мс

    }
