$(document).ready(function() {

	function itemWidth(){
		var contentWidth = $('.content').width();
		var itemWidth = contentWidth / 280;
		var itemWidthSet = contentWidth / (itemWidth ^ 0);
		$('.item').width(itemWidthSet);
		console.log(contentWidth);
	};

	itemWidth();

	$('.content').masonry({
		itemSelector: '.item'
	});


	


});