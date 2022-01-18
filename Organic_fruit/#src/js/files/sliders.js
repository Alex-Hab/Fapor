//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		centeredSlides: true,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 1,
		preloadImages: false,
		autoHeight: true,
		simulateTouch: true,

		// перетаскивание на ПК
		simulateTouch: true,
		// Чувствительность свайба
		touchRatio: 1,
		// Угол срабатывания свайпа /перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,

		// Переключение при клике на слайд
		slideToClickedSlide: true,
		//Управление клавиатурой
		keyboard: {
			//Включить\выключить
			//только когда слайдер в пределах вьюпорта
			onlyInViewport: true,
		},
		autoplay: {
			//Пауза между прокруткой
			delay: 3000,
		},
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
if (document.querySelector('.slider-portfolio__body')) {
	new Swiper('.slider-portfolio__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		centeredSlides: true,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 3,
		//preloadImages: false,
		autoHeight: true,
		// Включение / Отключение 
		// перетаскивание на ПК
		simulateTouch: true,
		// Чувствительность свайба
		touchRatio: 1,
		// Угол срабатывания свайпа /перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,

		// Переключение при клике на слайд
		slideToClickedSlide: true,
		//Управление клавиатурой
		keyboard: {
			onlyInViewport: true,
		},
		//Стрелки
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}