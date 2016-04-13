// JavaScript Document
var planPage = (function() {
	function init(){
		outRoom();
		closePopup();
		$(window).resize(function(){
			if($(window).width() <=600){
				//$('.selectRoom .map.mobile').removeAttr('style');
				$('.selectRoom .map.normal').removeAttr('style');
			}else{
				//$('.selectRoom .map.mobile').removeAttr('style');
				$('.selectRoom .map.normal').removeAttr('style');
			}
		});
	}
	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	        // Alternatively you could use:
	        // (new Image()).src = this;
	    });
	}

	
	function openRoom(idDiv){
		$('.popup').css('display', 'none');
		$('#' + idDiv).css('display', 'block');
		var top =$(window).scrollTop();
		$('#' + idDiv + '.popup').css('top', top-300);
		
	}
	function hoverRoom(idDiv){
		if($(window).width() > 600){
			$('.room .r, .selectRoom .map.normal').css('display', 'none');
		}else{
			//$('.room .r').css('display', 'none');
			//$('.selectRoom .map.mobile').css('opacity', '0');
		}
		$('#' + idDiv).css('display', 'block');
	}
	function outRoom(){
		$('.selectRoom a.choose').mouseout(function(){
			
			if($(window).width() > 600){
				$('.room .r').css('display', 'none');
				$('.selectRoom .map.normal').css('display', 'block');
			}else{
				$('.selectRoom .map.mobile').css('display', 'block');
				//$('.selectRoom .map.mobile').css('opacity', '1');
			}
			
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
		openRoom:openRoom,
		preload:preload
	}
	
})();
$(document).ready(function(){
	planPage.init();
	// Usage:
	planPage.preload([
	    'imgs/room/r2-1.png',
	    'imgs/room/r2-2.png',
	    'imgs/room/r5-10.png',
	    'imgs/room/r5-9.png',
	    'imgs/room/r5-8.png',
	    'imgs/room/r7-7.png',
	    'imgs/room/r7-6.png',
	    'imgs/room/r7-5.png',
	    'imgs/room/r7-4.png',
	    'imgs/room/r1-2.png',
	    
	    'imgs/room/r1-1.png',
	    'imgs/room/r5-2.png',

	    'imgs/room/r5-1.png',
	    'imgs/room/r4-6.png',
	    'imgs/room/r4-5.png'
	]);
});
