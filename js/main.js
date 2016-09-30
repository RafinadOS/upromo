$(document).ready(function() {
	$('.menu-show__click').click(function(){
		$('body').toggleClass('show-sidebar');
	})
	
	$('.wrapper').click(function(){
		$('body').attr('class', '');
	});

	


});