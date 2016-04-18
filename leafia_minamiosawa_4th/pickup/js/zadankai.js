// JavaScript Document
var zadankai = (function() {
   
	function init(){
        openTab();
    }

    function closeTab(){
        $('.tabContents .tabBox').removeClass('active');
    }

    function openTab(){
        $('#tabWrap .env_list a').on('click', function(){

            closeTab();
            var href = $(this).attr('href');
            $('.tabContents '+ href).addClass('active');
        });
    }

	return {
		init:init
	}
	
})();		

$(document).ready( function() {
	zadankai.init();
   
});
