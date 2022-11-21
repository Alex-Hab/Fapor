//feedback-slider
const swiper = new Swiper('.slider-feedback__body', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerGroup: 2,
	sliderPerView: 2,
	initialSlide: 0,
	enteredSlides: true,
	watchOverflow: true,
	preloadImages: false,
	//autoHeight: true,
	simulateTouch: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.button-feedback-next',
		prevEl: '.button-feedback-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});