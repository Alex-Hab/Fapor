//BildSlider
let sliders = document.querySelectorAll('._swiper');


if (document.querySelector('.slider-feedback__body')) {
	new Swiper('.slider-feedback__body', {
		direction: 'horizontal',
   	loop: true,
		//Стрелки
		navigation: {
			nextEl: '.slider-main .slider-arrow-prev',
			prevEl: '.slider-main .slider-arrow-prev',
		},
		// Dotts
		pagination: {
			el: '.slider-main__dotts',
			clickable: true,
		},
	});
}
