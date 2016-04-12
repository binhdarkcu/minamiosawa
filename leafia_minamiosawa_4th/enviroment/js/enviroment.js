// JavaScript Document
var enviroment = (function() {
    var setting = {
        font	:	13,
        w		:	600,
        h       :   990
    };
	function init(){
        hoverMap();
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
	
    function hoverMap(){
        $(".env_map1").mouseover(function(){$(".env_map1_pop").fadeIn();}).mouseout(function(){$(".env_map1_pop").fadeOut()});
        $(".env_map2").mouseover(function(){$(".env_map2_pop").fadeIn();}).mouseout(function(){$(".env_map2_pop").fadeOut()});
        $(".env_map3").mouseover(function(){$(".env_map3_pop").fadeIn();}).mouseout(function(){$(".env_map3_pop").fadeOut()});
        $(".env_map4").mouseover(function(){$(".env_map4_pop").fadeIn();}).mouseout(function(){$(".env_map4_pop").fadeOut()});
        $(".env_map5").mouseover(function(){$(".env_map5_pop").fadeIn();}).mouseout(function(){$(".env_map5_pop").fadeOut()});
        $(".env_map6").mouseover(function(){$(".env_map6_pop").fadeIn();}).mouseout(function(){$(".env_map6_pop").fadeOut()});
        $(".env_map7").mouseover(function(){$(".env_map7_pop").fadeIn();}).mouseout(function(){$(".env_map7_pop").fadeOut()});
        $(".env_map8").mouseover(function(){$(".env_map8_pop").fadeIn();}).mouseout(function(){$(".env_map8_pop").fadeOut()});
        $(".env_map9").mouseover(function(){$(".env_map9_pop").fadeIn();}).mouseout(function(){$(".env_map9_pop").fadeOut()});
        $(".env_map10").mouseover(function(){$(".env_map10_pop").fadeIn();}).mouseout(function(){$(".env_map10_pop").fadeOut()});
    }

	return {
		init:init
	}
	
})();		

$(document).ready( function() {
	enviroment.init();
   $('.envi5box .list').click(function(){
       var id = $(this).attr('data-id');
       $('.tab-show').removeClass('active');
       $('#'+id).addClass('active');
   });

});
