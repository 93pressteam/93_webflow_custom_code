(()=>{function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}var t=globalThis,i={},o={},n=t.parcelRequireaf5a;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequireaf5a=n);var a=n.register;a("4JWcf",function(t,i){e(t.exports,"initGlobalScript",()=>o);function o(){if(console.log("Global script scripts loaded"),console.log("42"),$('[data-collection="vacancy-list"] .collection-item > a').on("click",function(e){e.preventDefault();let t=$(this).attr("href").replace("/vacancies/","");return console.log("Slug Case:",t),function(e){let t=$('[data-collection="vacancy"] > .collection-item'),i=$("[data-remodal-id=vacancy]").remodal(),o=t.filter(function(){return $(this).data("vacancy-link")===e});o.length?(t.hide(),o.show(),i.open()):(console.error("No vacancy item found for slug:",e),event.preventDefault())}(t),!1}),new Swiper("[data-swiper=company]",{speed:500,spaceBetween:0,slidesPerView:1,navigation:{nextEl:"[data-swiper=next-company]",prevEl:"[data-swiper=prev-company]"}}),window.innerWidth>=776){var e=new Swiper("[data-swiper=line]",{speed:500,slidesPerView:7,watchSlidesProgress:!0,allowTouchMove:!0});let t=[];$("[data-swiper=road]").each((i,o)=>{let n={speed:500,direction:"vertical",slidesPerView:1,on:{slideChange:function(){var e=$(".swiper-slide-thumb-active"),t=$(".swiper-road-progress"),i=$(".icon-medium.mod--swiper-line");e.append(t),e.append(i)}}};0===i&&(n.navigation={nextEl:"[data-swiper=next-road]",prevEl:"[data-swiper=prev-road]"},n.thumbs={swiper:e},n.on.slideChange=function(){let e=this.activeIndex;t.slice(1).forEach(t=>{t.slideTo(e,500)})});let a=new Swiper(o,n);t.push(a)})}new Swiper("[data-swiper=video]",{speed:500,spaceBetween:16,slidesPerView:"auto",navigation:{nextEl:"[data-swiper=next-video]",prevEl:"[data-swiper=prev-video]"},pagination:{el:"[data-swiper=progress]",type:"progressbar"}}),$(document).ready(function(){let e=$("[data-mask]"),t=$(".form-field-wrapper.target"),i=$(".form-input.mod--date.target"),o=/iPhone|iPad|iPod/i.test(navigator.userAgent),n=!1,a=new Date;a.setFullYear(a.getFullYear()-18);let r=a.toISOString().split("T")[0];function s(){n||e.text(i.val()||"Дата народження*")}i.attr("max",r),i.on("focusout",function(){new Date($(this).val())>a?(n=!0,e.text("Ви маєте бути старші 18 років."),e.removeClass("hide_placeholder").addClass("error-message"),$(this).val("")):(n=!1,s())}),e.on("click mousedown touchstart",function(t){t.preventDefault(),function(){if(o)e.addClass("hide_placeholder"),i.removeClass("hide_placeholder").focus();else{i.focus();try{i[0].showPicker&&i[0].showPicker()}catch(e){}}}()}),i.on("change focusout",s),$(document).on("click",function(o){t.is(o.target)||i.val()||e.text("Дата народження*")})})}}),a("iFRUi",function(t,i){e(t.exports,"initHomePage",()=>o);function o(){console.log("Home page scripts loaded")}}),a("jMjr7",function(t,i){e(t.exports,"initVacanciesPage",()=>o);function o(){console.log("Vacancies page scripts loaded")}}),a("kKThM",function(t,i){e(t.exports,"initSupportPage",()=>o);function o(){console.log("Support page scripts loaded")}}),n("4JWcf"),n("iFRUi"),n("jMjr7"),n("kKThM"),window.Webflow||=[],window.Webflow||=[],window.Webflow.push(()=>{console.log("Running in production mode"),Promise.resolve(n("4JWcf")).then(e=>e.initGlobalScript()),Promise.resolve(n("iFRUi")).then(e=>e.initHomePage()),Promise.resolve(n("jMjr7")).then(e=>e.initVacanciesPage()),Promise.resolve(n("kKThM")).then(e=>e.initSupportPage())})})();