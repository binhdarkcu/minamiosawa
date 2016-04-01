// JavaScript Document
var messagePage = (function() {
	function init(){
		
	}
	
	function goTo(idDiv){
		$('html,body').animate({
        	scrollTop: $("#"+idDiv).offset().top},
        700);	
	}
	return {
		init:init,
		goTo:goTo
	}
	
})();

