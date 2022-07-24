function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	sliderBuild(sliders);
	sliders_bild_callback();
}
function sliderBuild(sliders) {
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

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


// SLIDERS========================================================================================================================================================
let desktopWallpaperSlider = new Swiper('.desktop-wallpaper-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 25,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
		checkInView: true,
		loadPrevNextAmount: 5,
		elementClass: 'lazy',
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.desktop-wallpaper-slider__item_next',
		prevEl: '.desktop-wallpaper-slider__item_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1332: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let phoneWallpaperSlider = new Swiper('.phone-wallpaper-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 6,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
		checkInView: true,
		loadPrevNextAmount: 5,
		elementClass: 'lazy',
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.phone-wallpaper-slider__item_next',
		prevEl: '.phone-wallpaper-slider__item_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
			autoHeight: true,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1332: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});




let scenarioSlider = new Swiper('.scenario-services-inside-page__slider', {

	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
		checkInView: true,
		loadPrevNextAmount: 2,
		elementClass: 'lazy',
	},
	watchOverflow: true,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	simulateTouch: false,
	autoHeight: true,
	// Arrows
	navigation: {
		nextEl: '.scenario-services-inside-page__navigation_next',
		prevEl: '.scenario-services-inside-page__navigation_prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

scenarioSlider.on('slideChangeTransitionStart', function (e) {
	const chart = document.querySelector('.scenario-services-inside-page__chart');
	if (chart) {
		if (chart.closest('.swiper-slide-active')) {
			chart.classList.add('animation');
		} else {
			chart.classList.remove('animation');
		}
	}
});

if (scenarioSlider.slides.length > 1) {

	let graphicPageSlider = document.querySelector('.scenario-services-inside-page__slider');
	if (graphicPageSlider) {
		let mySliderAllSlides = document.querySelectorAll('.scenario-services-inside-page__total');
		if (mySliderAllSlides.length > 0) {
			mySliderAllSlides.forEach(mySliderAllSlide => {
				let sliderLength = scenarioSlider.slides.length;
				if (sliderLength < 10) {
					mySliderAllSlide.innerHTML = '0' + scenarioSlider.slides.length;
				} else {
					mySliderAllSlide.innerHTML = scenarioSlider.slides.length;
				}
			});
		}

		scenarioSlider.on('slideChange', function () {
			let mySliderCurrentSlides = document.querySelectorAll('.scenario-services-inside-page__current');
			if (mySliderCurrentSlides.length > 0) {
				let currentSlide = ++scenarioSlider.realIndex;
				mySliderCurrentSlides.forEach(mySliderCurrentSlide => {
					if (currentSlide < 10) {
						mySliderCurrentSlide.innerHTML = '0' + currentSlide;
					} else {
						mySliderCurrentSlide.innerHTML = currentSlide;
					}

				});
			}
		});
	}
} else {
	const scenarioSliderFractions = document.querySelectorAll('.scenario-services-inside-page__fraction');
	scenarioSliderFractions.forEach(scenarioSliderFraction => {
		scenarioSliderFraction.classList.add('_hidden');
	});
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
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

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 1000, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			setTimeout(() => {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			}, 10);
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

	function spollerCLick(e) {
		const spoller = e.target.classList.contains('_spoller') ? e.target : e.target.closest('._spoller');
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			console.log(spoller.nextElementSibling);
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				_slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
// ShowMore Beta ========================
let moreBlocks = document.querySelectorAll('._more-block');
if (moreBlocks.length > 0) {
	let wrapper = document.querySelector('.wrapper');
	for (let index = 0; index < moreBlocks.length; index++) {
		const moreBlock = moreBlocks[index];
		let items = moreBlock.querySelectorAll('._more-item');
		if (items.length > 0) {
			let itemsMore = moreBlock.querySelector('._more-link');
			let itemsContent = moreBlock.querySelector('._more-content');
			let itemsView = itemsContent.getAttribute('data-view');
			if (getComputedStyle(itemsContent).getPropertyValue("transition-duration") === '0s') {
				itemsContent.style.cssText = "transition-duration: 1ms";
			}
			itemsMore.addEventListener("click", function (e) {
				if (itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
				itemsMore.classList.toggle('_active');
				e.preventDefault();
			});

			let isScrollStart;
			function setSize(type) {
				let resultHeight;
				let itemsContentHeight = 0;
				let itemsContentStartHeight = 0;

				for (let index = 0; index < items.length; index++) {
					if (index < itemsView) {
						itemsContentHeight += items[index].offsetHeight;
					}
					itemsContentStartHeight += items[index].offsetHeight;
				}
				resultHeight = (type === 'start') ? itemsContentStartHeight : itemsContentHeight;
				isScrollStart = window.innerWidth - wrapper.offsetWidth;
				itemsContent.style.height = `${resultHeight}px`;
			}

			itemsContent.addEventListener("transitionend", updateSize, false);

			function updateSize() {
				let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
				if (isScrollStart === 0 && isScrollEnd > 0 || isScrollStart > 0 && isScrollEnd === 0) {
					if (itemsMore.classList.contains('_active')) {
						setSize('start');
					} else {
						setSize();
					}
				}
			}
			window.addEventListener("resize", function (e) {
				if (!itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
			});
			setSize();
		}
	}
}
//==RATING======================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}
// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating_sending')) {
			rating.classList.add('rating_sending');

			// Отправика данных (value) на сервер
			let response = await fetch('rating.json', {
				method: 'GET',

				//body: JSON.stringify({
				//	userRating: value
				//}),
				//headers: {
				//	'content-type': 'application/json'
				//}

			});
			if (response.ok) {
				const result = await response.json();

				// Получаем новый рейтинг
				const newRating = result.newRating;

				// Вывод нового среднего результата
				ratingValue.innerHTML = newRating;

				// Обновление активных звезд
				setRatingActiveWidth();

				rating.classList.remove('rating_sending');
			} else {
				alert("Ошибка");

				rating.classList.remove('rating_sending');
			}
		}
	}
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
'use strict'




//========================================================================================================================================================


let menuLinks = document.querySelectorAll('.menu__link_subitems');

let helpGO = true;
if (menuLinks.length > 0) {
	menuLinks.forEach(element => {
		let menuLink = element;
		menuLink.addEventListener("click", function (e) {
			if (helpGO) {
				helpGO = false;
				menuLink.parentElement.classList.toggle('_active');
				menuLink.classList.toggle('_active');
				_slideToggle(menuLink.nextElementSibling, 500);
				setTimeout(() => {
					helpGO = true;
				}, 500);
			}
		});
	});
}


let elem = document.querySelector('.grid');
if (elem) {
	imagesLoaded(elem, function () {
		let iso = new Isotope(elem, {
			layoutMode: 'packery',
			itemSelector: '.grid__item',
			packery: {
				columnWidth: '.grid__sizer',
			},
			percentPosition: true,
		});
	});
}

let feedbackFormBtns = document.querySelectorAll('.menu__btn, .fullscreen__btn, .main-work__btn');
if (feedbackFormBtns.length > 0) {
	let feedbackForm = document.querySelector('.feedback-form');
	if (feedbackForm) {
		feedbackFormBtns.forEach(feedbackFormBtn => {
			feedbackFormBtn.addEventListener("click", function (e) {
				setTimeout(() => {
					body_lock_add(100);
					feedbackForm.classList.add('_active');
				}, 100);
				e.preventDefault();
			});
		});
	}
	let formClose = document.querySelector('.feedback-form__close');
	if (formClose) {
		formClose.addEventListener("click", function (e) {
			setTimeout(() => {
				if (!document.querySelector('.work').classList.contains('_active')) {
					body_lock_remove(100);
				}
				feedbackForm.classList.remove('_active');
			}, 100);
		});
	}
}

//========================================================================================================================================================

let tabsNavigation = document.querySelector('.tabs-behind__nav');
if (tabsNavigation) {
	let tabsTtems = document.querySelectorAll('.tabs-behind__item');
	let tabsBlock = document.querySelectorAll('.tabs-behind__block');
	if (tabsTtems.length > 0) {
		tabsTtems.forEach((element, index) => {
			const tabsTtem = tabsTtems[index];
			if (tabsTtem.classList.contains('_grid') && tabsTtem.classList.contains('_active')) {
				initIsotopeOnTabs();
				window.addEventListener('scroll', scroll_scroll);
			}
			tabsTtem.addEventListener("click", function (e) {
				if (!(e.target.classList.contains('_active'))) {
					setTimeout(() => {
						if (!(e.target.classList.contains('_grid')) && e.target.classList.contains('_active')) {
							delete (initIsotopeOnTabs());
						} else if (e.target.classList.contains('_grid') && e.target.classList.contains('_active')) {
							initIsotopeOnTabs();
						}
					}, 10);
				}
			});
		});
	}
}

let lazySrcs = document.querySelectorAll('[data-src]');
if (lazySrcs.length) {
	lazySrcs.forEach((element, index) => {
		let lazyItem = element;
		let lazyItemSrc = lazyItem.getAttribute('src');
		let sourse = lazyItem.previousElementSibling;
		if (sourse?.srcset) {
			let sourseSrcset = sourse.srcset;
			sourse.setAttribute('data-srcset', sourseSrcset);
			sourse.setAttribute('srcset', lazyItemSrc);
		}
	});
}

let lazyImages = document.querySelectorAll('[data-src],[data-srcset]');
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		lazyLoad(img);
	});
}



function lazyAttr(image) {
	if (image.dataset.src) {
		image.src = image.dataset.src;
		image.removeAttribute('data-src');
	} else if (image.dataset.srcset) {
		image.srcset = image.dataset.srcset;
		image.removeAttribute('data-srcset');
	}
}

function lazyLoad(item) {
	// устанавливаем настройки
	const options = {
		// без отступов
		rootMargin: '5px',
		// процент пересечения - половина изображения
		threshold: 0.2,
	}
	let callback = function (entries, observer) {
		entries.forEach(entry => {
			let image = entry.target;
			if (entry.isIntersecting) {
				item.classList.add('_image-load');
				lazyAttr(image);
				observer.unobserve(item);
			}
		});
	};
	let observer = new IntersectionObserver(callback, options)
	observer.observe(item);
}

function initIsotopeOnTabs() {
	let isotopeBody = document.querySelector('.massonry-behind');
	imagesLoaded(isotopeBody, function () {
		let isoNum2 = new Isotope(isotopeBody, {
			itemSelector: '.massonry-behind__item',
			masonry: {
				columnWidth: '.massonry-behind__sizer',
			},
			percentPosition: true,
		});
	});
}

//========================================================================================================================================================

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const matrixBody = document.querySelector('.scenario-services-inside-page__words');

let elements = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
let arrElem = [...elements];

function getLine(block) {
	if (block) {
		const parentHeight = block.parentElement.offsetHeight + 30;
		const parentWidth = block.parentElement.offsetWidth + 20;
		const stringLength = (parentWidth / 21) * (parentHeight / 18);
		let string = '';
		for (let i = string.length; i < stringLength; i++) {
			string += arrElem[getRandomInt(0, arrElem.length)];
		}
		block.innerHTML = string;
	}
}
setTimeout(function updateString() {
	getLine(matrixBody);
	setTimeout(updateString, 250);
}, 250);

//========================================================================================================================================================

let chartCallback = function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const chartSLide = entry.target.closest('.scenario-services-inside-page__slide');
			if (chartSLide.closest('.swiper-slide-active')) {
				entry.target.classList.add('animation');
			}
		} else {
			entry.target.classList.remove('animation');
		}
	});
};

let chartObserver = new IntersectionObserver(chartCallback, {
	threshold: 0.2,
})

const chart = document.querySelector('.scenario-services-inside-page__chart');
if (chart) {
	chartObserver.observe(chart);
}



let animation = false,
	animationstring = 'animation',
	keyframeprefix = '',
	domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
	pfx = '',
	elm = document.createElement('div');

if (elm.style.animationName !== undefined) { animation = true; }
if (animation === false) {
	for (let i = 0; i < domPrefixes.length; i++) {
		if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
			pfx = domPrefixes[i];
			animationstring = pfx + 'Animation';
			keyframeprefix = '-' + pfx.toLowerCase() + '-';
			animation = true;
			break;
		}
	}
}


const workBlocks = {
	kaminskiySite: `
	<div class="work__header header-work">
		<div class="header-work__body">
			<h2 class="header-work__title _title">KAMINSKYI </h2>
			<div class="header-work__subtitle _subtitle">Создание Веб-сайта</div>
		</div>
	</div>
	<div class="work__main main-work">
		<div class="main-work__blocks">
			<div class="main-work__block">
				<div class="main-work__content">
					<div class="main-work__text _label">
					
						Было здорово снова работать с пластическим хирургом Эдгаром Каминским, создавая новый сайт и выпуская рекламу для его анонса. Основной задачей было создать необычный и оригинальный сайт, которого еще не существует в отрасли. Мы использовали современные подходы в дизайне и 3D-графике, чтобы создать уникальный контент и пользовательский опыт.
						</div>
					<div class="main-work__text _label">
						Весь процесс проходил в несколько этапов, и клиент мог принимать участие и следить за каждым вариантом дизайна. Таким образом, мы совместили ожидания клиента и готовый результат.
					</div>
					<div class="main-work__text _label">
						Мы подключили систему аналитики, чтобы клиент мог отслеживать данные о клиентах и формировать правильные маркетинговые решения. Например: показатель вовлеченности составляет 65%, что говорит о том, что люди остаются на сайте дольше обычного и взаимодействуют с контентом. Что говорит о его результативности и эффективности.
					</div>
					<a href="" class="main-work__link"><span>Перейти на сайт</span> <picture><source  srcset='img/1x1.png' data-srcset="img/icons/go.svg" type="image/webp"><img  src='img/1x1.png' data-src="dist/img/icons/go.svg" alt=""></picture></a>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/598347216?h=920480d295" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
				<div class="main-work__grid grid-main-work">
					<div class="grid-main-work__cell">
						<div class="grid-main-work__image _ibg">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/grid/01.webp" type="image/webp"><img  src='img/1x1.png' data-src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/grid/01.jpg" alt=""></picture>
						</div>
					</div>
					<div class="grid-main-work__cell">
						<div class="grid-main-work__image _ibg">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/grid/02.webp" type="image/webp"><img  src='img/1x1.png' data-src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/grid/02.jpg" alt=""></picture>
						</div>
					</div>
					<div class="grid-main-work__cell">
						<div class="grid-main-work__image _ibg">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/grid/03.webp" type="image/webp"><img  src='img/1x1.png' data-src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/grid/03.jpg" alt=""></picture>
						</div>
					</div>
					<div class="grid-main-work__cell">
						<div class="grid-main-work__image _ibg">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/grid/04.webp" type="image/webp"><img  src='img/1x1.png' data-src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/grid/04.jpg" alt=""></picture>
						</div>
					</div>
					<div class="grid-main-work__cell">
						<div class="grid-main-work__image _ibg">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/grid/05.webp" type="image/webp"><img  src='img/1x1.png' data-src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/grid/05.jpg" alt=""></picture>
						</div>
					</div>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/598350181?h=e1fcfd3120" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">Мобильная адаптация</h2>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/598353096?h=314f3c338c" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">рекламА для анонса</h2>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/606584894?h=66870ed416" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">За кадром</h2>
				<div class="main-work__massonry">
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/massonry/01.webp" type="image/webp"><img  src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/massonry/01.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/massonry/02.webp" type="image/webp"><img  src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/massonry/02.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/KAMINSKYI/massonry/03.webp" type="image/webp"><img  src='img/1x1.png' data-src="dist/img/works/KAMINSKYI/massonry/03.jpg" alt=""></picture>
						</div>
					</div>
				</div>
			</div>
			<a href="index.html" class="main-work__btn btn"><span class="_text">Узнать стоимость</span><span class="_bg"></span></a>
		</div>
	</div>`,
	kaminskiyBrand: `
	<div class="work__header header-work">
		<div class="header-work__body">
			<h2 class="header-work__title _title">KAMINSKYI FILM </h2>
			<div class="header-work__subtitle _subtitle">Бренд-фильм и элементы бренда</div>
		</div>
	</div>
	<div class="work__main main-work">
		<div class="main-work__blocks">
			<div class="main-work__block">
				<div class="main-work__content">
					<div class="main-work__title _title">Форма стремится к идеальной фигуре.</div>
					<div class="main-work__text _label">
					Создание рекламного ролика в социальных сетях для крупнейшего бренда одежды в России — IronByMironova. Бренд предлагает высококачественную и стильную спортивную одежду для девушек. После публикации проект вызвал большой ажиотаж, связанный с необычной презентацией коллекции.

					</div>
					<div class="main-work__text _label">


						Но давайте начнем с самого начала. Мы придумали абстрактные сцены, чтобы создать ассоциацию с роскошным и чувствительным брендом и уйти от классических представлений о хирургии. Такой подход помогает повысить уровень доверия потребителя. Поэтому мы создали темную атмосферу и сложные формы, полные особенностей. Фиолетовый цвет создает особые ощущения, которые Вы можете почувствовать интуитивно.
					</div>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/397209841" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/468323287" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<div class="main-work__block">
				<div class="main-work__massonry">
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/01.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/01.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/02.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/02.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/03.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/03.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/04.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/04.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/05.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/05.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/06.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/06.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/07.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/07.png" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/08.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/08.png" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/09.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/09.png" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/kaminskyiFilm/10.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/kaminskyiFilm/10.png" alt=""></picture>
						</div>
					</div>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">За кадром</h2>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/468326985" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<a href="index.html" class="main-work__btn btn"><span class="_text">Узнать стоимость</span><span class="_bg"></span></a>
		</div>
	</div>`,
	msi: `
	<div class="work__header header-work">
		<div class="header-work__body">
			<h2 class="header-work__title _title">MSI: OPTIX MAG </h2>
			<div class="header-work__subtitle _subtitle">Рекламная кампания в социальных сетях</div>
		</div>
	</div>
	<div class="work__main main-work">
		<div class="main-work__blocks">
			<div class="main-work__block">
				<div class="main-work__content">
					<div class="main-work__title _title">Стремление к совершенству</div>
					<div class="main-work__text _label">
					Задачей проекта была визуализация ключевого сообщения: <br>
						<span>"3 миллиона проданных мониторов <br class='mobile-br'> в течение 3 лет".</span> <br>
						Результатом кампании стала серия гладких и современных видеороликов в темно-красном <br> премиальном тоне. Они передают уникальные элементы дизайна и детали продукта, создавая у зрителя ощущение того, что MSI продолжает стремиться к совершенству.
					</div>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/531798997" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
				<div class="main-work__massonry">
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/01.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/01.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/02.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/02.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/03.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/03.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/04.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/04.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/05.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/05.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/06.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/06.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell main-work__cell_full">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/MSI/07.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/MSI/07.jpg" alt=""></picture>
						</div>
					</div>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">За кадром</h2>
				<div class="main-work__video _video">
				<iframe src="https://player.vimeo.com/video/531810836" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content" ></iframe>
				</div>
			</div>
			<a href="index.html" class="main-work__btn btn"><span class="_text">Узнать стоимость</span><span class="_bg"></span></a>
		</div>
	</div>`,
	ironByMironova: `
	<div class="work__header header-work">
		<div class="header-work__body">
			<h2 class="header-work__title _title">IronByMironova </h2>
			<div class="header-work__subtitle _subtitle">Рекламная кампания в социальных сетях</div>
		</div>
	</div>
	<div class="work__main main-work">
		<div class="main-work__blocks">
			<div class="main-work__block">
				<div class="main-work__content">
					<div class="main-work__text _label">
						Создания рекламного ролика в социальных сетях для крупнейшего бренда одежды в России - IronByMironova. Который предлагает высококачественную и стильную спортивную одежду для девушек. После публикации проект вызвал большой ажиотаж, связанный с необычной презентацией коллекции.
					</div>
				</div>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/310750766?color=ff9933&amp;amp;title=0&amp;amp;byline=0&amp;amp;portrait=0" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<div class="main-work__block">
				<div class="main-work__massonry">
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/01.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/01.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/02.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/02.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/03.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/03.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/04.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/04.jpg" alt=""></picture>
						</div>
					</div>
				</div>
			</div>
			<div class="main-work__block">
				<div class="main-work__content">
					<div class="main-work__text _label">
					3D-визуализация новой коллекции <span>"Лучшая жена"</span>. <br>
						Основной задачей было показать продукт в непривычном свете, чтобы выделить его на фоне конкурентов. В процессе создания были задействованы такие программы, как Marvelous Designer для воссоздания реальной одежды в 3D-среде и Houdini для создания реалистичных женских движений.
					</div>
					<div class="main-work__text _label">

						Весь проект занял 2 недели. В результате клиент получил ролик, адаптированный для разных платформ, и 5-ти секундную рекламу. Потому что никто не смотрит длинную рекламу до конца, даже Вы.
					</div>
				</div>
				<div class="main-work__massonry">
					<div class="main-work__cell ">
						<div class="main-work__video main-work__video_absolute _video">
							<iframe src="https://player.vimeo.com/video/501418382" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
						</div>
					</div>
					<div class="main-work__cell ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/05.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/05.jpg" alt=""></picture>
						</div>
					</div>
					<div class="main-work__cell main-work__cell_full ">
						<div class="main-work__image">
							<picture><source  srcset='img/1x1.png' data-srcset="img/works/IronByMironova/06.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/IronByMironova/06.jpg" alt=""></picture>
						</div>
					</div>
				</div>
			</div>
			<div class="main-work__block">
				<h2 class="main-work__title _title _title_upper">За кадром</h2>
				<div class="main-work__video _video">
					<iframe src="https://player.vimeo.com/video/501424831" title="Проект со встроенным содержимым" frameborder="0" allowfullscreen="allowfullscreen" class="embed-content"></iframe>
				</div>
			</div>
			<a href="index.html" class="main-work__btn btn"><span class="_text">Узнать стоимость</span><span class="_bg"></span></a>
		</div>
	</div>`,
	gostyApp: `
	
	<div class="work__header header-work">
	<div class="header-work__body">
		<h2 class="header-work__title _title">Gosty App </h2>
		<div class="header-work__subtitle _subtitle">
			Брендинг для мобильно приложения по аренде недвижимости</div>
	</div>
</div>
<div class="work__main main-work">
	<div class="main-work__blocks">
	<div class="main-work__block">
		<div class="main-work__content">
			<div class="main-work__text _label">
			
				Мы создали брендинг для инновационного мобильного приложения, не имеющего аналогов. Приложение GOSTY позволяет бронировать жилье и заселяться в него бесконтактно. Не нужно встречаться с владельцами квартир для передачи ключей. В каждой квартире стоит Smart-замок, который открывается с помощью Bluetooth прямо в приложении.
					</div>
			<div class="main-work__text _label">
				В ходе работы с клиентом была проведена бренд-сессия, были определены цели и задачи бренда. Посылы, которые заложены в проект — инновационность, безопасность, конфиденциальность.
			</div>
		</div>
		<div class="main-work__image main-work__image_full">
			<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/01.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/01.jpg" alt=""></picture>
		</div>
	</div>
	<div class="main-work__block">
		<div class="main-work__content">
			<div class="main-work__text _label">
			Логотип имеет два варианта — текстовый, содержащий полное название компании, и сокращенный, для иконки приложения. Сокращенная версия логотипа является вертикально перевернутым началом слова <span>GO</span>STY.

			</div>
			<div class="main-work__text _label">
			GO — “Зайди”, “Посети”, “Вперед”. А при помощи точки сверху мы воплотили образ робота, который символизирует инновационность и диджитализацию процессов в приложении.
			</div>
		</div>
		<div class="main-work__logos ">
			<div class="main-work__logo _ibg">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/03_1.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/03_1.jpg" alt=""></picture>
			</div>
			<div class="main-work__logo _ibg">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/02.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/02.png" alt=""></picture>
			</div>
			<div class="main-work__logo _ibg">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/03.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/03.jpg" alt=""></picture>
			</div>
		</div>
	</div>
	<div class="main-work__block">
		<div class="main-work__content">
			<h3 class="main-work__title _title">Цветовая схема</h3>
		</div>
		<div class="main-work__slider ">
			<div class="main-work__swiper _swiper">
				<div class="main-work__slide">
					<div class="main-work__sliderImage  _ibg">
						<picture><source srcset="img/works/GostyApp/slider/01.webp" type="image/webp"><img src="dist/img/works/GostyApp/slider/01.png" alt=""></picture>
					</div>
				</div>
				<div class="main-work__slide">
					<div class="main-work__sliderImage  _ibg">
						<picture><source srcset="img/works/GostyApp/slider/02.webp" type="image/webp"><img src="dist/img/works/GostyApp/slider/02.png" alt=""></picture>
					</div>
				</div>
				<div class="main-work__slide">
					<div class="main-work__sliderImage  _ibg">
						<picture><source srcset="img/works/GostyApp/slider/03.webp" type="image/webp"><img src="dist/img/works/GostyApp/slider/03.png" alt=""></picture>
					</div>
				</div>
			</div>
			<div class="main-work__pagination"></div>
		</div>
	</div>
	<div class="main-work__block main-work__block_pattern">
		<div class="main-work__content">
			<h3 class="main-work__title _title">Бренд элементы</h3>
		</div>
		<div class="main-work__image ">
			<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/04.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/04.png" alt=""></picture>
		</div>
		<div class="main-work__image main-work__image_animTop">
			<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/05.webp" type="image/webp"><img src='img/1x1.png' data-src="dist/img/works/GostyApp/05.png" alt=""></picture>
		</div>
		<div class="main-work__image main-work__image_decor">
			<div class="main-work__item">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/travel/01.webp" type="image/webp"><img src="dist/img/1x1.png" data-src="dist/img/works/GostyApp/travel/01.png" alt=""></picture>
			</div>
			<div class="main-work__item">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/travel/02.webp" type="image/webp"><img src="dist/img/1x1.png" data-src="dist/img/works/GostyApp/travel/02.png" alt=""></picture>
			</div>
			<div class="main-work__item">
				<picture><source srcset='img/1x1.png' data-srcset="img/works/GostyApp/travel/03.webp" type="image/webp"><img src="dist/img/1x1.png" data-src="dist/img/works/GostyApp/travel/03.png" alt=""></picture>
			</div>

		</div>
	</div>
	</div>
</div>`,
}

const workBox = document.querySelector('.work');
const gridItems = document.querySelectorAll('.grid__item');
if (gridItems.length > 0) {
	if (workBox) {
		const workBody = workBox.querySelector('.work__body');
		if (workBody) {
			gridItems.forEach(gridItem => {
				gridItem.addEventListener("click", function (e) {
					const dataWork = gridItem.getAttribute('data-work');
					for (const workBlock in workBlocks) {
						if (Object.hasOwnProperty.call(workBlocks, workBlock)) {
							if (workBlock === dataWork) {
								body_lock(500);
								workBox.classList.add('_active');
								const element = workBlocks[workBlock];
								workBody.innerHTML = element;
								setTimeout(() => {
									if (workBody.querySelectorAll('[data-srcset], [data-src]').length) {
										workBody.querySelectorAll('[data-srcset], [data-src]').forEach(img => {
											lazyLoad(img);
											let sliders = document.querySelectorAll('._swiper');
											if (sliders) {
												sliderBuild(sliders);
												const workSwiper = document.querySelector('.main-work__swiper');
												if (workSwiper) {
													let workSlider = new Swiper(workSwiper, {
														observer: true,
														observeParents: true,
														slidesPerView: 3,
														spaceBetween: 10,
														speed: 800,
														initialSlide: 1,
														pagination: {
															el: '.main-work__pagination',
															dinamicBullets: true,
														},
														breakpoints: {
															320: {
																slidesPerView: 2,
																centeredSlides: true,

															},
															767.98: {
																slidesPerView: 3,
																centeredSlides: false,
																initialSlide: 1,
															},
														},
														watchOverflow: true,
														// Arrows
														on: {
															lazyImageReady: function () {
																ibg();
															},
														}
													});
												}
											}
										});
									}
									workBody.querySelectorAll('a').forEach(elem => {
										elem.addEventListener("mouseenter", function (e) {
											cursor.classList.add("active");
											follower.classList.add("active");
										});
										elem.addEventListener("mouseleave", function (e) {
											cursor.classList.remove("active");
											follower.classList.remove("active");
										});
									});
								}, 0);
								document.querySelectorAll('iframe').forEach(elem => {
									elem.addEventListener("mouseenter", function (e) {
										cursor.classList.add("_hidden");
										follower.classList.add("_hidden");
									});
									elem.addEventListener("mouseleave", function (e) {
										cursor.classList.remove("_hidden");
										follower.classList.remove("_hidden");
									});
								});
							}
						}
					}
					let feedbackFormBtns = document.querySelectorAll('.menu__btn, .fullscreen__btn, .main-work__btn');
					if (feedbackFormBtns.length > 0) {
						let feedbackForm = document.querySelector('.feedback-form');
						if (feedbackForm) {
							feedbackFormBtns.forEach(feedbackFormBtn => {
								feedbackFormBtn.addEventListener("click", function (e) {
									setTimeout(() => {
										body_lock_add(100);
										feedbackForm.classList.add('_active');
									}, 100);
									e.preventDefault();
								});
							});
						}
						let formClose = document.querySelector('.feedback-form__close');
						if (formClose) {
							formClose.addEventListener("click", function (e) {
								setTimeout(() => {
									if (!document.querySelector('.work').classList.contains('_active')) {
										body_lock_remove(100);
									}
									feedbackForm.classList.remove('_active');
								}, 100);
							});
						}
					}
				});
			});
		}
		workBox.addEventListener("click", function (e) {
			if (workBox.classList.contains('_active')) {
				if (e.target.closest('.work__close') || e.target.closest('.to-works')) {
					body_lock(500);
					workBox.classList.remove('_active');
					setTimeout(() => {
						workBody.innerHTML = '';
					}, 500);
				}
			}
		});
	}
}





// ================= PARALAX МЫШЬЮ =================
/*
ПОДКЛЮЧИТЬ ФУНКЦИЮ offset(el)

Предмету, который будет двигаться за мышью указать класс _prlx-m.

// =========
Если нужны дополнительные натсройки - указать 

Атрибут											Значение по умолчанию
-------------------------------------------------------------------------------------------------------------------
data-prlx-сx="коэффициент_х"					100							значение больше - меньше процент сдвига
data-prlx-сy="коэффициент_y"					100							значение больше - меньше процент сдвига
data-prlx-dx="направление_относительно_Х"		true						true - по оси, false - против оси
data-prlx-dy="направление_относительно_y"		true						true - по оси, false - против оси
data-prlx-a="скорость_анимации"					50							больше значение - больше скорость

// =========
Если нужно считывать движение мыши в блоке-родителе - тому родителю указать класс __prlx-m-wr

Если в параллаксе картинка - расстянуть ее на >100%. 
Например:
	width: 130%;
	height: 130%;
	top: -15%;
	left: -15%;
*/


let paralaxMouse = document.querySelectorAll('._prlx-m');
if (paralaxMouse.length > 0) {
	paralaxMouse.forEach(el => {
		let paralaxMouseWrapper = el.closest('._prlx-m-wr');

		let paramСoefficientX = 100;
		let paramСoefficientY = 100;
		let paramDirectionX = "true";
		let paramDirectionY = "true";
		let paramAnimation = 50;

		// Коэф. Х
		if (el.dataset.prlxCx) {
			paramСoefficientX = el.dataset.prlxCx;
		}
		// Коэф. У 
		if (el.dataset.prlxCy) {
			paramСoefficientY = el.dataset.prlxCy;
		}
		// Напр. Х
		if (el.dataset.prlxDx) {
			paramDirectionX = el.dataset.prlxDx;
		}
		// Напр. У
		if (el.dataset.prlxDy) {
			paramDirectionY = el.dataset.prlxDy;
		}
		// Скорость анимации
		if (el.dataset.prlxA) {
			paramAnimation = el.dataset.prlxA;
		}

		let directionX = paramDirectionX == "true" ? '1' : '-1';
		let directionY = paramDirectionY == "true" ? '1' : '-1';


		// Объявление переменных
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		setMouseParallaxStyle();

		// Проверяю на наличие родителя, в котором будет считываться положение мыши
		if (paralaxMouseWrapper) {
			mouseMoveParalax(paralaxMouseWrapper);
		} else {
			mouseMoveParalax();
		}

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;
			positionX = positionX + (distX * paramAnimation / 1000);
			positionY = positionY + (distY * paramAnimation / 1000);
			el.style.cssText = `transform: translate(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%);`;
			requestAnimationFrame(setMouseParallaxStyle);
		}

		function mouseMoveParalax(wrapper = window) {
			wrapper.addEventListener("mousemove", function (e) {
				if (offset(el).top >= window.pageYOffset || (offset(el).top + el.offsetHeight) >= window.pageYOffset) {
					// Получение ширины и высоты блока
					const parallaxWidth = window.innerWidth;
					const parallaxHeight = window.innerHeight;
					// Ноль по середине
					const coordX = e.pageX - parallaxWidth / 2;
					const coordY = e.pageY - parallaxHeight / 2;
					// Получаем проценты
					coordXprocent = coordX / parallaxWidth * 100;
					coordYprocent = coordY / parallaxHeight * 100;
				}
			});
		}

	});
}


//========================================================================================================================================================
function form_to_json(form_data) {
	const uniqueKeys = [...new Set(form_data.keys())]

	const obj = {}
	uniqueKeys.forEach((value, key) => {
		obj[value] = (form_data.getAll(value).length > 1) ? form_data.getAll(value) : form_data.get(value)
	})
	return obj
}

document.addEventListener("DOMContentLoaded", function (event) {

	const feedbackForms = document.getElementsByClassName('js-feedback-form');
	if (feedbackForms.length) {
		for (const form of feedbackForms) {
			form.addEventListener("submit", async function (e) {
				e.preventDefault();
				const formJson = form_to_json(new FormData(form));
				if (!formJson.name.length || !(formJson.tel.length || formJson.email.length)) {
					return;
				}
				const queryString = `https://echostudio.xyz/feedback.php?
				name=${formJson.name ? formJson.name : ''}
				&company=${formJson.company ? formJson.company : ''}
				&email=${formJson.email ? formJson.email : ''}
				&phone=${formJson.tel ? formJson.tel : ''}
				&about=${formJson.about ? formJson.about : ''}
				&countEmploy=${formJson.countEmploy ? formJson.countEmploy : ''}
				&interest=${formJson.choose ? formJson.choose.trim('`') : ''}
				`;
				try {
					await fetch(queryString, { 'mode': 'cors', 'Content-Type': 'application/json' });
				} catch (e) {
					alert(e)
				}
			});
		}
	}
});
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');
		const test = form.getAttribute('data-test');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (test) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+38(999) 999 9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			/*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				// scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);
function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}
function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}
function scrParallax(block, scrProcent, blockHeight) {
	let prlxItems = block.querySelectorAll('._prlx-item');
	if (prlxItems.length > 0) {
		for (let index = 0; index < prlxItems.length; index++) {
			const prlxItem = prlxItems[index];
			let prlxItemAttr = (prlxItem.dataset.prlx) ? prlxItem.dataset.prlx : 3;
			const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
		}
	}
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);

	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

	if (swiperScrolls.length > 0) {
		for (let index = 0; index < swiperScrolls.length; index++) {
			const swiperScroll = swiperScrolls[index];
			swiperScroll.addEventListener("mouseenter", function (e) {
				window.removeEventListener('wheel', full_scroll);
			});
			swiperScroll.addEventListener("mouseleave", function (e) {
				window.addEventListener('wheel', full_scroll);
			});
		}
	}
}
function getPrevBlockPos(current_block_prev) {
	let viewport_height = window.innerHeight;
	let current_block_prev_height = current_block_prev.offsetHeight;
	let block_pos = offset(current_block_prev).top;

	if (current_block_prev_height >= viewport_height) {
		block_pos = block_pos + (current_block_prev_height - viewport_height);
	}
	return block_pos;
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_prev) {
						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
					}
				} else {
					enableScroll();
					if (currentScroll <= current_block_pos) {
						if (current_block_prev) {
							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
						}
					}
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						full_scroll_to_sector(block_pos);
					}
				} else {
					enableScroll();
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						if (currentScroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 70) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}
