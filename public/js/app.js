"use strict";

var wow = new WOW({
  mobile: false
});
wow.init();

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
$(function () {
  // $("body").css("overflow", "hidden");
  gsap.to(".preloading__state", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
  });
  gsap.to(".preloading__start", 2, {
    delay: 1.5,
    top: "-100%",
    ease: Expo.easeInOut
  });
  setTimeout(function () {
    $(".preloading").css("display", "none"); // $("body").css("overflow", "visible");
  }, 3500);

  if (window.innerWidth <= 800) {
    $(".animated").removeClass("animated");
  }
}); // overflow: hidden;
// 	overflow: visible;

$("body").on("click", ".reg-controls-password", function () {
  if ($("#reg__password").attr("type") == "password") {
    $("#reg__password").attr("type", "text");
  } else {
    $("#reg__password").attr("type", "password");
  }

  return false;
});
$("body").on("click", ".reg-controls-passwords", function () {
  if ($("#reg__passwords").attr("type") == "password") {
    $("#reg__passwords").attr("type", "text");
  } else {
    $("#reg__passwords").attr("type", "password");
  }

  return false;
});
$("#reg__name").on("keyup", function () {
  checkedInputReg();
});
$("#reg__email").on("keyup", function () {
  checkedInputReg();
});
$("#reg__phone").on("keyup", function () {
  checkedInputReg();
});
$("#reg__password").on("keyup", function () {
  checkedInputReg();
});
$("#reg__passwords").on("keyup", function () {
  checkedInputReg();
});
$(".reg__form-btn").on("click", function () {
  checkedInputReg();
});
$(".reg__form-checkbox__label").on("click", function () {
  checkedInputReg();
});

var checkedInputReg = function checkedInputReg() {
  if ($("#reg__name").val() == "") {
    $(".reg__form-name").css("border", "1px solid red");
    $(".reg__form-btn").attr("disabled", "disabled");
  } else {
    $(".reg__form-name").css("border", "1px solid #4F6BFD");
    $(".reg__form-btn").removeAttr("disabled");
  }

  if ($("#reg__email").val() == "") {
    $(".reg__form-email").css("border", "1px solid red");
    $(".reg__form-btn").attr("disabled", "disabled");
  } else {
    $(".reg__form-email").css("border", "1px solid #4F6BFD");
    $(".reg__form-btn").removeAttr("disabled");
  }

  if ($("#reg__phone").val() == "") {
    $(".reg__form-phone").css("border", "1px solid red");
    $(".reg__form-btn").attr("disabled", "disabled");
  } else {
    $(".reg__form-phone").css("border", "1px solid #4F6BFD");
    $(".reg__form-btn").removeAttr("disabled");
  }

  if ($("#reg__password").val() == "") {
    $(".reg__form-password").css("border", "1px solid red");
    $(".reg__form-btn").attr("disabled", "disabled");
  } else {
    $(".reg__form-password").css("border", "1px solid #4F6BFD");
    $(".reg__form-btn").removeAttr("disabled");
  }

  if ($("#reg__passwords").val() == "") {
    $(".reg__form-passwords").css("border", "1px solid red");
    $(".reg__form-btn").attr("disabled", "disabled");
  } else {
    $(".reg__form-passwords").css("border", "1px solid #4F6BFD");
    $(".reg__form-btn").removeAttr("disabled");
  }
};

$("body").on("click", ".signin-controls-password", function () {
  if ($("#signin__password").attr("type") == "password") {
    $("#signin__password").attr("type", "text");
  } else {
    $("#signin__password").attr("type", "password");
  }

  return false;
});
$("#signin__email").on("keyup", function () {
  checkedInputSignin();
});
$("#signin__phone").on("keyup", function () {
  checkedInputSignin();
});
$("#signin__password").on("keyup", function () {
  checkedInputSignin();
});
$(".signin__form-btn").on("click", function () {
  checkedInputSignin();
});

var checkedInputSignin = function checkedInputSignin() {
  if ($("#signin__email").val() == "") {
    $(".signin__form-email").css("border", "1px solid red");
    $(".signin__form-btn").attr("disabled", "disabled");
  } else {
    $(".signin__form-email").css("border", "1px solid #4F6BFD");
    $(".signin__form-btn").removeAttr("disabled");
  }

  if ($("#signin__phone").val() == "") {
    $(".signin__form-phone").css("border", "1px solid red");
    $(".signin__form-btn").attr("disabled", "disabled");
  } else {
    $(".signin__form-phone").css("border", "1px solid #4F6BFD");
    $(".signin__form-btn").removeAttr("disabled");
  }

  if ($("#signin__password").val() == "") {
    $(".signin__form-password").css("border", "1px solid red");
    $(".signin__form-btn").attr("disabled", "disabled");
  } else {
    $(".signin__form-password").css("border", "1px solid #4F6BFD");
    $(".signin__form-btn").removeAttr("disabled");
  }
};

$("#reset__email").on("keyup", function () {
  if ($("#reset__email").val() == "") {
    $(".reset__form-email").css("border", "1px solid red");
    $(".reset__form-btn").attr("disabled", "disabled");
  } else {
    $(".reset__form-email").css("border", "1px solid #4F6BFD");
    $(".reset__form-btn").removeAttr("disabled");
  }
});
;