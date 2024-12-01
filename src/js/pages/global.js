import { styleForm } from "../modules/formHandler/formStyling";
import { formHandler } from "../modules/formHandler/formHandler";

export function initGlobalScript() {
  console.log("Global script scripts loaded");

  // Додати візуальні ефекти до форми
  styleForm();
  // імплементувати логіку для handle multiple forms on page
  formHandler();

  // Додайте специфічну логіку для всього сайту

  // if (window.innerWidth >= 776) {

  // // Ініціалізація Swiper для timeline бойового шляху
  // var swiper__line = initAllowedSwiper("line");

  //   const swiperArr = [];
  //   $("[data-swiper=road]").each((index, el) => {
  //     const swiperOptions = {
  //       speed: 500,
  //       direction: "vertical",
  //       slidesPerView: 1,
  //       on: {
  //         slideChange: function () {
  //           var activeSlide = $(".swiper-slide-thumb-active");
  //           var roadBorder = $(".swiper-road-progress");
  //           var roadPin = $(".icon-medium.mod--swiper-line");
  //           activeSlide.append(roadBorder);
  //           activeSlide.append(roadPin);
  //         },
  //       },
  //     };

  //     // Додаємо navigation та thumbs тільки для першого елемента в масиві
  //     if (index === 0) {
  //       swiperOptions.navigation = {
  //         nextEl: "[data-swiper=next-road]",
  //         prevEl: "[data-swiper=prev-road]",
  //       };
  //       swiperOptions.thumbs = {
  //         swiper: swiper__line,
  //       };

  //       // Додаємо обробник події slideChange для першого swiper
  //       swiperOptions.on.slideChange = function () {
  //         let indexActiveSlide = this.activeIndex;
  //         swiperArr.slice(1).forEach((swiper) => {
  //           swiper.slideTo(indexActiveSlide, 500);
  //         });
  //       };
  //     }

  //     const swiper = new Swiper(el, swiperOptions);
  //     swiperArr.push(swiper);
  //   });
  // }
}
