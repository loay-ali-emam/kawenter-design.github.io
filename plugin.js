window.onload = () => {
	
	const $ = jQuery;
	
	//Window Element.
	$('.bw-window .layout,.bw-close-window').click((e) => {
		
		let $window = $(e.currentTarget).parent();
		
		if($(e.currentTarget).hasClass('bw-close-window'))
			$window = $window.parent();
		
		$window.removeClass('active');
	});

	//Open Window
	$('.bw-open-window[bw-window]').click((ele) => {

		const windowId = ele.currentTarget.attributes['bw-window'].value;
		const window = document.getElementById(windowId);

		$(window).addClass('active')
	});
	
	//List Of Visas.
	setTimeout(() => {
		
		$("#list-of-visas .loading").hide();
		
		//Show Sample Data.
		$("#list-of-visas #visas-results").show();
		
	},1500);
	
	$("#loading").fadeOut();
};