/* Theme Name: Marg - Bootsrap Landing Page Template
   Author: ScriptEden
   Version: 1.0.0
   Created: June 2019
*/

(function($) {
	'use strict';

	// Scroll script
	$('.smooth-scroll').click(function() {
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top - 50
			},
			1000
		);
		return false;
	});


	// Sticky Navbar
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('.sticky').addClass('nav-sticky');
		} else {
			$('.sticky').removeClass('nav-sticky');
		}

		// Back to top
		if ($(this).scrollTop() > 80) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	var scroll = $(window).scrollTop();

	if (scroll > 50) {
		$('.sticky').addClass('nav-sticky');
	}

	/*==== video popup ====*/
	$(document).ready(function() {
		// Gets the video src from the data-src on each button

		var $videoSrc;
		$('.video-btn').click(function() {
			$videoSrc = $(this).data('src');
		});

		//console.log($videoSrc);

		// when the modal is opened autoplay it
		$('#call-video').on('shown.bs.modal', function() {
			// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
			$('#video').attr('src', $videoSrc + '?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1');
		});

		// stop playing the youtube video when I close the modal
		$('#call-video').on('hide.bs.modal', function() {
			// a poor man's stop video
			$('#video').attr('src', $videoSrc);
		});
	});

})(jQuery);
