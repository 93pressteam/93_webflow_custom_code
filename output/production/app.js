(()=>{function e(e,o,t,i){Object.defineProperty(e,o,{get:t,set:i,enumerable:!0,configurable:!0})}var o=globalThis,t={},i={},n=o.parcelRequireaf5a;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){i[e]=o},o.parcelRequireaf5a=n);var a=n.register;a("4JWcf",function(o,t){e(o.exports,"initGlobalScript",()=>i);function i(){if(console.log("Global script scripts loaded"),console.log("prod_test_v1"),$('[data-collection="vacancy-list"] .collection-item > a').on("click",function(e){e.preventDefault();let o=$(this).attr("href").replace("/vacancies/","");return console.log("Slug Case:",o),function(e){let o=$('[data-collection="vacancy"] > .collection-item'),t=$("[data-remodal-id=vacancy]").remodal(),i=o.filter(function(){return $(this).data("vacancy-link")===e});i.length?(o.hide(),i.show(),t.open()):(console.error("No vacancy item found for slug:",e),event.preventDefault())}(o),!1}),new Swiper("[data-swiper=company]",{speed:500,spaceBetween:0,slidesPerView:1,navigation:{nextEl:"[data-swiper=next-company]",prevEl:"[data-swiper=prev-company]"}}),window.innerWidth>=776){var e=new Swiper("[data-swiper=line]",{speed:500,slidesPerView:7,watchSlidesProgress:!0,allowTouchMove:!0});let o=[];$("[data-swiper=road]").each((t,i)=>{let n={speed:500,direction:"vertical",slidesPerView:1,on:{slideChange:function(){var e=$(".swiper-slide-thumb-active"),o=$(".swiper-road-progress"),t=$(".icon-medium.mod--swiper-line");e.append(o),e.append(t)}}};0===t&&(n.navigation={nextEl:"[data-swiper=next-road]",prevEl:"[data-swiper=prev-road]"},n.thumbs={swiper:e},n.on.slideChange=function(){let e=this.activeIndex;o.slice(1).forEach(o=>{o.slideTo(e,500)})});let a=new Swiper(i,n);o.push(a)})}new Swiper("[data-swiper=video]",{speed:500,spaceBetween:16,slidesPerView:"auto",navigation:{nextEl:"[data-swiper=next-video]",prevEl:"[data-swiper=prev-video]"},pagination:{el:"[data-swiper=progress]",type:"progressbar"}}),$(document).ready(function(){let e=$("[data-mask]"),o=$(".form-field-wrapper.target"),t=$(".form-input.mod--date.target"),i=/iPhone|iPad|iPod/i.test(navigator.userAgent),n=!1,a=new Date;a.setFullYear(a.getFullYear()-18);let r=a.toISOString().split("T")[0];function s(){n||e.text(t.val()||"Дата народження*")}t.attr("max",r),t.on("focusout",function(){new Date($(this).val())>a?(n=!0,e.text("Ви маєте бути старші 18 років."),e.removeClass("hide_placeholder").addClass("error-message"),$(this).val("")):(n=!1,s())}),e.on("click mousedown touchstart",function(o){o.preventDefault(),function(){if(i)e.addClass("hide_placeholder"),t.removeClass("hide_placeholder").focus();else{t.focus();try{t[0].showPicker&&t[0].showPicker()}catch(e){}}}()}),t.on("change focusout",s),$(document).on("click",function(i){o.is(i.target)||t.val()||e.text("Дата народження*")})})}}),a("iFRUi",function(o,t){e(o.exports,"initHomePage",()=>i);function i(){console.log("Home page scripts loaded"),console.log("prod_test_v1"),console.log("lalala")}}),a("jMjr7",function(o,t){e(o.exports,"initVacanciesPage",()=>i);function i(){console.log("Vacancies page scripts loaded"),console.log("prod_test_v1")}}),a("kKThM",function(o,t){e(o.exports,"initSupportPage",()=>i);function i(){console.log("Support page scripts loaded"),console.log("prod_test_v1")}}),n("4JWcf"),n("iFRUi"),n("jMjr7"),n("kKThM"),console.log("test_42"),window.Webflow||=[],window.Webflow||=[],window.Webflow.push(()=>{console.log("Running in production mode"),Promise.resolve(n("4JWcf")).then(e=>e.initGlobalScript()),Promise.resolve(n("iFRUi")).then(e=>e.initHomePage()),Promise.resolve(n("jMjr7")).then(e=>e.initVacanciesPage()),Promise.resolve(n("kKThM")).then(e=>e.initSupportPage())})})();