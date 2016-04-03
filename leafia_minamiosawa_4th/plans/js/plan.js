// JavaScript Document
var planPage = (function() {
	function init(){
		outRoom();
	}
	
	function openRoom(idDiv){
		
	}
	function hoverRoom(idDiv){
		$('.room .r').css('display', 'none');
		$('#' + idDiv).css('display', 'block');
	}
	function outRoom(){
		$('.selectRoom a.choose').mouseout(function(){
			$('.room .r').css('display', 'none');
		});
	}
	return {
		init:init,
		hoverRoom:hoverRoom
	}
	
})();
$(document).ready(function(){
	planPage.init();
});
