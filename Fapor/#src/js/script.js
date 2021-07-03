//=====================Подключение SWIPER========================
@@include("swiper-bundle.min.js");

let sliders = document.querySelectorAll('.swiper-wrapper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
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
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

if (document.querySelector('.slider-header')) {
	let mainslider = new Swiper('.swiper-slider-header-wrapper', {
		// Optional parameters
		//direction: 'horizontal',
		loop: true,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: true,
			disableOnInteraction: false
		},

		// If we need pagination
		pagination: {
			el: '.slider-header__pagination',
			clickable: true,
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
if (document.querySelector('.feedback')) {
	let mainslider = new Swiper('.slider-feedback__wrapper', {
		// Optional parameters
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: true,
			disableOnInteraction: false
		},
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.slider-feedback__next',
			prevEl: '.slider-feedback__prev',
		},
	});
}
if (document.querySelector('.brands-slider')) {
	let brandsSlider = new Swiper('.brands-slider__wrapper', {
		slidesPerView: 5,
		spaceBetween: 0,
		speed: 800,
		loop: true,
		autoplay: {
			delay: 1000,
			stopOnLastSlide: true,
			disableOnInteraction: false
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
		}
	});
}


//========================Бургер=================================
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


//@@include("alert.js");
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

