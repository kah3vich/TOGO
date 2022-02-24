"use strict";

$(function () {
  var _loop = function _loop(i) {
    $(".ind-question__content-i:nth-child(".concat(i, ")")).on("click", function () {
      if ($(".ind-question__content-i").hasClass("ind-question__content-i-a")) {
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
});
;