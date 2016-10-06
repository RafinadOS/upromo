$(document).ready(function() {
	$('.menu-show__click').click(function(){
		$('body').toggleClass('show-sidebar')
	})
	
	$('.wrapper').click(function(){
		$('body').attr('class', '')
	})

	$('.validate').click(function() {
		var valButton	= $(this).attr('for'),
			valInput	= $('#'+valButton);

		if(($(valInput).val()) == '') {
			$(valInput).addClass('error')
			setTimeout(function(){
				$(valInput).removeClass('error')
			}, 400)()
		}
	});
});