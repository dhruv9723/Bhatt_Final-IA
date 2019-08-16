// Header animation on scroll
function runOnScroll() {
	var oHeader = document.getElementById("header");

    if (document.documentElement.scrollTop >= 50) {
		oHeader.classList.add('scrolled');
	} else {
		if (oHeader.classList.contains('scrolled')) {
		   oHeader.classList.remove('scrolled');
		}
	}
}
window.addEventListener("scroll", runOnScroll);

	
// Image Slider
var oSlider = document.getElementById('slider-wrapper');

if (oSlider) {
    var slides = oSlider.querySelectorAll('.image-slider .slide');
}

function slideHide(num) {
    slides[num].setAttribute('data-state', '');
    slides[num].style.opacity=0;
}

function slideShow(num) {
    slides[num].setAttribute('data-state', 'active');
    slides[num].style.opacity=1;
}

function switchNextSlide() {
    var nextSlide = 0;

    for (var i = 0; i < slides.length; i++) {
        if ((slides[i].getAttribute('data-state') === 'active') && (i !== (slides.length-1))) {
            nextSlide = i + 1;
        }
        slideHide(i);
    }
    slideShow(nextSlide);
}

function switchPrevSlide() {
    var nextSlide = slides.length-1;

    for (var i = 0; i < slides.length; i++) {
        if ((slides[i].getAttribute('data-state') === 'active') && (i !== 0)) {
            nextSlide = i - 1;
        }

        slideHide(i);
    }
    slideShow(nextSlide);
}

if (oSlider) {
    var oNextBtn = oSlider.querySelectorAll('.arrow-right');
    var oPrevBtn = oSlider.querySelectorAll('.arrow-left');

    oNextBtn[0].addEventListener("click", switchNextSlide);
    oPrevBtn[0].addEventListener("click", switchPrevSlide);
    slideShow(0);
}

// Mobile menu
function toggleMenu() {
	var oMenuNav = document.getElementById('nav-menu');

	if (oMenuNav.getAttribute('data-state') === 'open') {
		oMenuNav.style.display="none";
		oMenuNav.setAttribute('data-state', 'standby');
	} else {
		oMenuNav.style.display="flex";
		oMenuNav.setAttribute('data-state', 'open');
	}
}


var oMenuOpener = document.getElementById('menu-opener');

oMenuOpener.addEventListener("click", toggleMenu);