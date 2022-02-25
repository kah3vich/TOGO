"use strict";

var _loop = function _loop(i) {
  $(".ind-question__content-i:nth-child(".concat(i, ")")).on("click", function () {
    if ($(".ind-question__content-i:nth-child(".concat(i, ")")).hasClass("ind-question__content-i-a")) {
      $(".ind-question__content-i:nth-child(".concat(i, ")")).removeClass("ind-question__content-i-a");
      $(".ind-question__content-i:nth-child(".concat(i, ") img")).css("transform", "rotate(0deg)");
      $(".ind-question__content-i:nth-child(".concat(i, ") .ind-question__content-text")).addClass("question-hide");
    } else {
      $(".ind-question__content-i:nth-child(".concat(i, ")")).addClass("ind-question__content-i-a");
      $(".ind-question__content-i:nth-child(".concat(i, ") img")).css("transform", "rotate(45deg)");
      $(".ind-question__content-i:nth-child(".concat(i, ") .ind-question__content-text")).removeClass("question-hide");
    }
  });
};

for (var i = 1; i <= $(".ind-question__content-i").length; i++) {
  _loop(i);
}

var reviewsSlider = new Swiper(".reviewsSlider", {
  navigation: {
    nextEl: ".ind-reviews__content-s .swiper-controls .swiper-button-next",
    prevEl: ".ind-reviews__content-s .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".ind-reviews__content-s .swiper-controls .swiper-pagination"
  },
  keyboard: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});
var indexService = new Swiper(".indexService", {
  navigation: {
    nextEl: ".ind-service__content-l  .swiper-controls .swiper-button-next",
    prevEl: ".ind-service__content-l  .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".ind-service__content-l  .swiper-controls .swiper-pagination"
  },
  keyboard: true,
  breakpoints: {
    1400: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    750: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});
;