$(function() {
	
	//Start All
		//Start Regal
		let regal = $('.regal-lightslider').lightSlider({
			item:6,
			loop:true,
			slideMove:2,
			easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			speed:600,
			rtl: true,
			pager: false,
			controls: false,
			responsive : [
				{
					breakpoint:800,
					settings: {
						item:4,
						slideMove:1,
						slideMargin:6,
					  }
				},
				{
					breakpoint:480,
					settings: {
						item:2,
						slideMove:1
					  }
				}
			]
		});
		$('#prev-regal').on('click', function () {
			regal.goToPrevSlide();
		});
		$('#next-regal').on('click', function () {
			regal.goToNextSlide();
		});
	//End Header
	
	
});