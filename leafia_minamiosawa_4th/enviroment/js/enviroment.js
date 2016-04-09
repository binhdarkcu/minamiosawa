// JavaScript Document
var enviroment = (function() {
    var setting = {
        font	:	13,
        w		:	600,
        h       :   990
    };
	function init(){
        
        if($(window).width() <= 600){
            respone();
        }else{
            $('.enviromentPage').removeAttr('style');
        }
        $(window).resize(function(){
            if($(window).width() <= 600){
                respone();
            }else{
                $('.enviromentPage').removeAttr('style');
            }
        });
    }
   
    function respone(){
        setting.font = ($(window).width() * 13) / setting.w;
        $('.enviromentPage').css('font-size', setting.font + 'px');

    }
	

	return {
		init:init
	}
	
})();		

$(document).ready( function() {
	enviroment.init();
});

