$(() => {
	for (let i = 1; i <= $(".ind-question__content-i").length; i++) {
		$(`.ind-question__content-i:nth-child(${i})`).on("click", () => {
			if ($(".ind-question__content-i").hasClass("ind-question__content-i-a")) {
				$(`.ind-question__content-i:nth-child(${i})`).removeClass(
					"ind-question__content-i-a"
				);
				$(`.ind-question__content-i:nth-child(${i}) img`).css("transform", "rotate(0deg)");
				$(`.ind-question__content-i:nth-child(${i}) .ind-question__content-text`).addClass(
					"question-hide"
				);
			} else {
				$(`.ind-question__content-i:nth-child(${i})`).addClass("ind-question__content-i-a");
				$(`.ind-question__content-i:nth-child(${i}) img`).css("transform", "rotate(45deg)");
				$(
					`.ind-question__content-i:nth-child(${i}) .ind-question__content-text`
				).removeClass("question-hide");
			}
		});
	}
});
