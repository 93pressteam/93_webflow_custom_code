export const swiperConfigs = {
  company: {
    settings: {
      speed: 500,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: "[data-swiper=next-company]",
        prevEl: "[data-swiper=prev-company]",
      },
    },
    pages: ["/", "/vacancies"], // Сторінки, де дозволена ініціалізація
  },
  video: {
    settings: {
      speed: 500,
      spaceBetween: 16,
      slidesPerView: "auto",
      navigation: {
        nextEl: "[data-swiper=next-video]",
        prevEl: "[data-swiper=prev-video]",
      },
      pagination: {
        el: "[data-swiper=progress]",
        type: "progressbar",
      },
    },
    pages: ["/"], // Сторінки, де дозволена ініціалізація
  },
  values: {
    settings: {
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
    },
    pages: ["/vacancies"], // Сторінки, де дозволена ініціалізація
  },
  comadors: {
    settings: {
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
    },
    pages: ["/vacancies"], // Сторінки, де дозволена ініціалізація
  },
  line: {
    settings: {
      speed: 500,
      slidesPerView: 7,
      watchSlidesProgress: true,
      allowTouchMove: true,
    },
    pages: ["/"], // Сторінки, де дозволена ініціалізація
  }, 
};