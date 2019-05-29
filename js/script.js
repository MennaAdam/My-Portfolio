$(function() {

	// Trigger Nice Scroll

	$('html, body').niceScroll({
		cursorcolor: '#888',
		cursorborder: 'none',
		cursorwidth: '10'
	});
	// Adjust Header Height

	$('.header').height($(window).height());

	// Typewriter Effect

	var theText = $('.text').data('text'),
		theTextLength = theText.length,

		i = 0,

		theTyper = setInterval(function() {
			$('.text').each(function() {
				$(this).html($(this).html() + theText[i]);
			});
			i += 1;
			if (i >= theTextLength) {
				clearInterval(theTyper);
			}

		}, 100);


	// Smooth Scroll
	$('.navbar-light .navbar-nav .nav-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#" + $(this).data("scroll")).offset().top
		}, 500);
	});

	// Navbar

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200) {
			$('.change').addClass('nav-bg');
			$('.navbar-nav .nav-link').css('color', "#000");
			$('.navbar-brand').css('color', '#000');

			// Scroll to top button
			$('#scroll-top').fadeIn(1000);
		} else {
			$('.change').removeClass('nav-bg');
			$('.navbar-nav .nav-link').css('color', "#fff");
			$('.navbar-brand').css('color', '#fff');
			// Scroll to top button
			$('#scroll-top').fadeOut(1000);
		}

	});

	// Scroll To Top Button
	$('#scroll-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500)
	});


});