$(function() {
	
	//Start All
		//Select2
		$(document).ready(function() {
			$('.s2').select2({
				
			});
			$('.s2-clear').select2({
				minimumResultsForSearch: -1
			});
		});
		
		//Jump to Section
		$('a[href*="#"]').on('click', function(e) {
		  e.preventDefault()

		  $('html, body').animate(
			{
			  scrollTop: $($(this).attr('href')).offset().top,
			},
			1000
		  )
		})
	$('.remove-href').removeAttr('href');
	//End All
	
	
});

