export function initVacanciesPage() {
    console.log("Vacancies page scripts loaded");
    
 
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
    const slugCase = $(this).attr('href').replace('/vacancies/', '');
    console.log('Slug Case:', slugCase);
    showVacancyModal(slugCase);
    return false;
  });
  
  
  if (window.innerWidth <= 776){
      var swiper__company = new Swiper('[data-swiper=company]', {
          speed: 500,
          spaceBetween: 0,
          slidesPerView: 1,
          navigation: {
              nextEl: '[data-swiper=next-company]',
              prevEl: '[data-swiper=prev-company]',
          },
      });
           let swiper__values = new Swiper('[data-swiper=values]', {
          speed: 500,
          spaceBetween: 16,
          slidesPerView: 'auto',
          navigation: {
              nextEl: '[data-swiper=next-values]',
              prevEl: '[data-swiper=prev-values]',
          },
          pagination: {
              el: "[data-swiper=progress-values]",
              type: "progressbar",
          },
      });
  }
      let swiper__comadors = new Swiper('[data-swiper=comadors]', {
          speed: 500,
          spaceBetween: 16,
          slidesPerView: 'auto',
          navigation: {
              nextEl: '[data-swiper=next-comadors]',
              prevEl: '[data-swiper=prev-comadors]',
          },
          pagination: {
              el: "[data-swiper=progress-comadors]",
              type: "progressbar",
          },
      });
       
       
  $(document).ready(function() {
      const collectionList = $("#collection");
      const loadMoreBtn = $("#loadMoreBtn");
      const itemsPerPage = 8;
      let visibleItems = itemsPerPage;
  
      // Показує початково 8 елементів
      showItems();
  
      loadMoreBtn.on("click", function() {
          showMoreItems();
      });
  
      function showItems() {
          collectionList.find(".collection-item").hide().slice(0, visibleItems).show();
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
 
