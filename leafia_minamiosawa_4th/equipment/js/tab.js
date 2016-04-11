$(document).ready(function(){
	
	$('ul.tabs li').click(function(e){
        e.preventDefault();
		var tab_id = $(this).attr('data-tab');
        
		$('ul.tabs li').removeClass('current');
		$("li[data-tab='"+tab_id+"']").addClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})