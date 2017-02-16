$(document).ready(function($) {
	

	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 0,
	    responsiveClass: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:true
	        },
	        1000:{
	            items:5,
	            loop:false,
	            nav:true
	        }
	    }
	});

	$('.tcon-menu--xbutterfly').click(function() {
		$(this).toggleClass('tcon-transform');
		$('body').toggleClass('show-menu');
	});


});