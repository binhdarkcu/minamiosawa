/**
 * @name 4droomplan.js
 * @fileOverview
 * @version 1.0
 * @description
 * <p>(c) FOURDIGIT Inc. Licensed <a href="http://ja.wikipedia.org/wiki/GNU_General_Public_License">GNU General Public License</a>.</p>
 */
    $(function(){
			/* .madoriBTN over処理 */
				$(".madoriBtn.on").hover(
					function (){
						if ($(this).is('.OPEN')){
							return false;
						}else{
							// $(this).children('.btn').css({borderColor:'#333'});
							// $(this).children('.btn').css({backgroundColor:'#e8f3fd'});
						}
					},
					function (){
						if ($(this).is('.OPEN')){
							return false;
						}else{
							// $(this).children('.btn').css({borderColor:'#333'});
							// $(this).children('.btn').css({backgroundColor:'#fff'});
						}
				});
			/* .madoriBTN.off 処理 */
				$(".madoriBtn.off .spec").append("<p class='offTxt'>COMMING<br />SOON</p>");
				 
			/* .madoriArea */
			$(".parentArea").height($(".btn").outerHeight());
				$(".madoriBtn.on").click(
					function (){
					if ($(this).is('.OPEN')){
						var $btnH = $(".btn").outerHeight();
						
						$(this).children('.madoriArea').stop().fadeOut(600);
						$(this).parents(".parentArea").stop().animate({height:$btnH},600);
						$(this).removeClass("OPEN");
					}
					else if ($('.madoriBtn.on').is('.OPEN')){
						var $btnH = $(".btn").outerHeight();
						
						$('.madoriBtn.on').children('.madoriArea').fadeOut(600);
						$('.madoriBtn.on').parents(".parentArea").stop().animate({height:$btnH},600);
						$('.madoriBtn.on').removeClass("OPEN");
						// $('.madoriBtn.on').children('.btn').css({borderColor:'#816954'});		
						
						
						var $objH =$(this).children('.madoriArea').outerHeight(true) + $(".btn").outerHeight(true);						
						
						$(this).children('.madoriArea').fadeIn(600);
						$(this).parents(".parentArea").stop().animate({height: $objH},300);
						$(this).addClass("OPEN");
						// $(this).children('.btn').css({borderColor:'#99826d'});
					}
					else{
						var $objH = $(this).children('.madoriArea').outerHeight(true) + $(".btn").outerHeight(true);
						
						$(this).children('.madoriArea').fadeIn(600);
						$(this).parents(".parentArea").stop().animate({height: $objH },300);
						$(this).addClass("OPEN");
						
						/* scroll */
						$(".parentArea").click(function () {
								var i = $(".parentArea").index(this)
								setTimeout(function (){
								var p = $(".parentArea").eq(i).offset().top;
											$('html,body').stop().animate({ scrollTop: p }, 300),
											function stopScroll () {
												return false;	
											};
								},600);
								return false;	
						});
					}
					}
				);
				
				/* resize */
				var timer = false;
				$('.btn').exResize({
					contentsWatch : false,
					callback : function() {
						if (timer !== false) {
								clearTimeout(timer);
						}
						if($.browser.msie && $.browser.version < 9){
								return false;
						}else{
								timer = setTimeout(function() {
								var $btnH = $(".btn").outerHeight();
								
								$('.madoriBtn.on').children('.madoriArea').fadeOut(600);
								$('.madoriBtn.on').parents(".parentArea").stop().animate({height:$btnH},600);
								$('.madoriBtn.on').removeClass("OPEN");
								// $('.madoriBtn.on').children('.btn').css({borderColor:'#816954'});
						}, 200);
						}
					}
				});
		});