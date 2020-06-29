$(function() {
	
	//Start All
		//Start Header
		//Click Profile
		$( ".menu-bar" ).on('click', function() {
			$(".treeboon-nav").addClass('active');
			$(".overlay").fadeIn();
			$("body").addClass('overflow-hidden');
		});

		//Click body except one
		$(document).on('click', function (event) {
		  if (!$(event.target).closest('.menu-bar').length && $('.treeboon-nav').hasClass("active")){
			  $(".treeboon-nav").removeClass('active');
			  $(".overlay").fadeOut();
			  $("body").removeClass('overflow-hidden');
		  }
		});
	
		$(window).on("resize load", function () {
			if($(window).width() < 991)
			{
			   $('.treeboon-nav').insertAfter('.header')
			} else
			{
				$('.treeboon-nav').insertAfter('.menu-bar')
			}
		}).resize();
	//End Header
	
	
});