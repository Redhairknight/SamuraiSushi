$(document).ready(function() {
    $('body').addClass('js');

	// Set default volume to 20%
	$('audio').prop('volume', 0.2);

	// Podcast Player Controls
	$('#podcast .player-controls a').click(function(event) {
		$(this).parent().toggleClass('playing');
		event.preventDefault();
	});

	$('#podcast .player-controls a:first-child').click(function() {
		$('audio')[0].play();
	});

	$('#podcast .player-controls a:last-child').click(function() {
		$('audio')[0].pause();
	});

	// Login
	$('.log-in a').click(function(event) {
		userName = prompt('Umm, you seems to be a new user, no matter human or cyborg you are, how could I call you?')
		if (userName==userName) {
			alert('Nice to meet you' + ' ' + userName + '!');
		}
		event.preventDefault();	
	});

	// form
	$('fieldset button').click(function(event) {
		alert('We have received your booking, thank you!')
	});
	
	// Zoom for menu food
	$('.maki-zushi .cta-button a, #m-popup .close-button a').click(function(event) {
		$('body').toggleClass('show-m-popup');
		event.preventDefault();
	});

	$('.nigiri-zushi .cta-button a, #n-popup .close-button a').click(function(event) {
		$('body').toggleClass('show-n-popup');
		event.preventDefault();
	});

	$('.tempura .cta-button a, #t-popup .close-button a').click(function(event) {
		$('body').toggleClass('show-t-popup');
		event.preventDefault();
	});

	$('.location a, #map-popup .close-button a').click(function(event) {
		$('body').toggleClass('show-map-popup');
		event.preventDefault();
	});

	// Slide pics for main page, using cycle2 plugin from http://jquery.malsup.com/cycle2/
	$('.order-now').cycle({
		fx: 'fade',
		pager: '.order-now div',
		fit: 1,
		width: '100%',
		slideResize: true,
		containerResize: false
	});
});