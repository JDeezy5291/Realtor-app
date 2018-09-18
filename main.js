// SHOWCASE-ANIMATIONS
window.sr = ScrollReveal();
	sr.reveal('.navbar', {
		duration: 2000,
		origin: 'bottom'
	});
	sr.reveal('.showcase-left', {
		duration: 2000,
		origin: 'top',
		distance: '400px'
	});
	sr.reveal('.showcase-right', {
		duration: 2000,
		origin: 'right',
		distance: '300px'
	});
	sr.reveal('div .input-group', {
		duration: 2000,
		delay: 2000,
		origin: 'bottom'
	});

// TESTIMONIAL-ANIMATIONS
	sr.reveal('#testimonial div', {
		duration: 2000,
		origin: 'bottom'
	});

// INFO-ANIMATIONS
	sr.reveal('.info-left', {
		duration: 2000,
		origin: 'left',
		distance: '400px',
		viewFactor: 0.2
	});
	sr.reveal('.info-right', {
		duration: 2000,
		delay: 500,
		origin: 'right',
		distance: '400px',
		viewFactor: 0.2
	});

	sr.reveal('.showcaseBtn1', {
		duration: 2000,
		origin: 'left',
		distance: '500px',
		viewFactor: 0.2
	});
	sr.reveal('.showcaseBtn2', {
		duration: 2000,
		origin: 'bottom',
		distance: '500px',
		viewFactor: 0.2
	});
	sr.reveal('.showcaseBtn3', {
		duration: 2000,
		origin: 'right',
		distance: '500px',
		viewFactor: 0.2
	});
	sr.reveal('.house-left-delay', {
		duration: 2000,
		delay: 500,
		origin: 'left',
		distance: '500px'
	});
	sr.reveal('.house-left', {
		duration: 2000,
		origin: 'left',
		distance: '500px'
	});
	sr.reveal('.house-right', {
		duration: 2000,
		origin: 'right',
		distance: '500px'
	});
	sr.reveal('.house-right-delay', {
		duration: 2000,
		delay: 500,
		origin: 'right',
		distance: '500px'
	});

var $root = $('html, body');

// SMOOTH SCROLLING
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200);
    return false;
});

// MODAL CAROUSEL
$(".left").click(function() {
	$(".carouselSlide").carousel("prev");
});
$(".right").click(function() {
	$(".carouselSlide").carousel("next");
});