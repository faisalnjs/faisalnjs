"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

// Get references to the elements you'll be working with
var input = document.getElementById("password");
var div = document.getElementById("HIDDENDIV");
var btn = document.getElementById("button");

// Set up event handlers in JavaScript
button.addEventListener("click", validate);

function validate() {
	if (input.value == 'PASSWORD') {
		// No need to add a "show" class. Just remove the "hidden" class.
		div.classList.remove('locked');

		// Or, add it:
		input.classList.add("locked");

		// No need to add a "show" class. Just remove the "hidden" class.
		div.classList.add('unlocked');

		// Or, add it:
		input.classList.remove("unlocked");

	} else {
		password.focus(); // <-- If you don't do this first, your select code won't work
		password.setSelectionRange(0, password.value.length);
		alert('Invalid Password!');
	}
}

input.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		// No reason to simulate a button click. Just call the code that needs to be run.
		validate();
	}
});
