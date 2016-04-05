jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
		jQuery('.accordion-section a.close').removeClass('show');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if($(this).hasClass('active')) {
			close_accordion_section();
			$(this).parent().parent().removeClass('ac');
			$(this).parent().find('.close').removeClass('show');

		}else {
			
			close_accordion_section();
            $(this).parent().parent().addClass('ac');
            $(this).parent().find('.close').addClass('show');
			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 

		}

		e.preventDefault();
	});
	jQuery('.accordion-section a.close').click(function(e) {
		$(this).removeClass('show');
		close_accordion_section();
		return false;
	});

});