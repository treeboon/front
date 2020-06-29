$(function() {
	
	//Start All
		//FAQ
		$('.faq-title').on('click', function () {
			$(this).toggleClass('active');
			$(this).next().stop().slideToggle();
		});
	//End Header
	
	
});