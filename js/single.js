$(function() {
	
	//Start All
		//Start Sidebar
	 	let single = $(".single-regal-lightslider").lightSlider({
			item:2,
			loop:true,
			pager: false,
			controls: false,
			rtl:true,
			responsive : [
				{
					breakpoint:800,
					settings: {
						item:2,
						slideMove:1,
						slideMargin:6,
					  }
				},
				{
					breakpoint:480,
					settings: {
						item:1,
						slideMove:1
					  }
				}
			],
			currentPagerPosition: 'middle',
			onSliderLoad: function(el) {
				el.lightGallery({
					selector: '.single-regal-lightslider .lslide'
				});
			}   
		});
		$('#single-prev').on('click', function () {
			single.goToPrevSlide();
		});
		$('#single-next').on('click', function () {
			single.goToNextSlide();
		});
	
		$( window ).on('load resize',function() {
			let media = $(window).width() < 991;
			if(media)
			{
				$('.related-treeboon').insertBefore('.today-treeboon');
			} else{
				$('.related-treeboon').insertAfter('.single-page');
			}
		}).resize();
	//End Header
	
	
});