var wow = new WOW({
	mobile: false, 
});
wow.init();

for (let i = 1; i <= $(".ind-question__content-i").length; i++) {
	$(`.ind-question__content-i:nth-child(${i})`).on("click", () => {
		if ($(`.ind-question__content-i:nth-child(${i})`).hasClass("ind-question__content-i-a")) {
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

var reviewsSlider = new Swiper(".reviewsSlider", {
	navigation: {
		nextEl: ".ind-reviews__content-s .swiper-controls .swiper-button-next",
		prevEl: ".ind-reviews__content-s .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".ind-reviews__content-s .swiper-controls .swiper-pagination",
	},
	keyboard: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});




var indexService = new Swiper(".indexService", {
	navigation: {
		nextEl: ".ind-service__content-l  .swiper-controls .swiper-button-next",
		prevEl: ".ind-service__content-l  .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".ind-service__content-l  .swiper-controls .swiper-pagination",
	},
	keyboard: true,
	breakpoints: {
        1400: {
            slidesPerView: 4,
        },
		1100: {
            slidesPerView: 3,
        },
		750: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

$(() => {
	$('body').css('overflow', 'hidden')
	gsap.to('.preloading__state', 2, {
		delay: 1,
		top: '-100%',
		ease: Expo.easeInOut,
	})
	gsap.to('.preloading__start', 2, {
		delay: 1.5,
		top: '-100%',
		ease: Expo.easeInOut,
	})
	setTimeout(() => {
		$('.preloading').css('display', 'none')
		$('body').css('overflow', 'visible')
	}, 3500)



	if (window.innerWidth <= 800) {
		$('.animated').removeClass('animated')
	}

})



// overflow: hidden;
// 	overflow: visible;
