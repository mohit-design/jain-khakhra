$(window).on("load", function() {
	$(".grid").isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	}); 
	$(".gallery-listing > li").click(function() {
		$(".gallery-listing > li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$(".grid").isotope({
			filter: selector
		});
		return false;
	});
});