// JavaScript Document
var planPage = (function() {
	function init(){
		outRoom();
		closePopup();
	}
	
	function openRoom(idDiv){
		$('.popup').css('display', 'none');
		$('#' + idDiv).css('display', 'block');
	}
	function hoverRoom(idDiv){
		$('.room .r, .selectRoom .map').css('display', 'none');
		$('#' + idDiv).css('display', 'block');
	}
	function outRoom(){
		$('.selectRoom a.choose').mouseout(function(){
			$('.room .r').css('display', 'none');
			$('.selectRoom .map').css('display', 'block');
		});
	}
	function closePopup(){
		$('.close').click(function(){
			$('.popup').css('display','none');
		});
	}
	return {
		init:init,
		hoverRoom:hoverRoom,
		openRoom:openRoom
	}
	
})();
$(document).ready(function(){
	planPage.init();
});
