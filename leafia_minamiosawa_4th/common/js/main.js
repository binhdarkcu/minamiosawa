/**
 * @name main.js
 * @fileOverview
 * @version 1.0
 * @description
 * <p>(c) FOURDIGIT Inc. Licensed <a href="http://ja.wikipedia.org/wiki/GNU_General_Public_License">GNU General Public License</a>.</p>
 */
//他ライブラリと共存する場合、下の一行削除($無効化)
//jQuery.noConflict();
(function($){
	var config = function () {
	//easyOverのターゲット設定
		$("img.ahover, .ahoverArea img").easyOver();
	//Flash
		//$("object, embed").enableFlash();
	//ポップアップリンクに置換
		$(".commonPop").easyPop();
	//他ドメインリンク時にpageTracker有効化
		//$("a,area").blankLogToGoogle();
	//アンカーリンクをスムージング
		$("a[href^=#]").smoothScroll();
	//対象の要素をスクロールに追従するようにする
		//$("#fixBox").fixPosition("stopperID","normal");
	}
	//onload
	$(function() {
		config();
		switch (jQuery("body").attr("id")) {
			case "pageID":
				//eachPageFunction
			break;
			case "pageID":
				//eachPageFunction
			break;
		}
	});
})(jQuery);

// userAgent
var d = window.document;
var ua = navigator.userAgent;
if((ua.indexOf('iPhone') > -1) || (ua.indexOf('iPod') > -1) || (ua.indexOf('Mobile') > -1) && (ua.indexOf('Android') > -1)){
	d.write('<meta name="viewport" content="width=device-width,initial-scale=1.0" />');
}else if(ua.indexOf('iPad') > -1 || (ua.indexOf('Mobile') <= -1) && (ua.indexOf('Android') > -1)){
	d.write('<meta name="viewport" content="width=1024px">');
}else {
}


// ブレイクポイント
var $breakP = 764;
// ウィンドウサイズ
var $winW = window.innerWidth ? window.innerWidth: $(window).width();
// ブレイクポイントフラグ
var	$breakFlag = ($breakP > $winW)?'sp':'pc';
$(window).resize(function(){
	setTimeout(function(){
		if(($breakFlag == 'pc') && ($breakP > $winW)){
			$breakFlag = 'sp';
		}else if(($breakFlag == 'sp') && ($breakP < $winW)){
			$breakFlag = 'pc';
		}
	},1000);
});

// IE8回避変数
var _ua = (function(){
 return {
	ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
	ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
	ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined"
 }
})();


/* smart phone navi */
	$(function() {
	var pull 		= $('#spPull');
	var hdrReq 		= $('#spReq');
	var hdrInfo 	= $('#spInfo');
		menu 		= $('body #gNav');
		menuReq 		= $('body #hNavReq');
		menuInfo 		= $('body #hNavInfo');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.fadeToggle(200);
	});
	$(hdrReq).on('click', function(e) {
		e.preventDefault();
		menuReq.fadeToggle(200);
	});
	$(hdrInfo).on('click', function(e) {
		e.preventDefault();
		menuInfo.fadeToggle(200);
	});

	$(window).resize(function(){
				var w = $(window).width();
				if(w > 320 && menu.is(':hidden')) {
					menu.removeAttr('style');
				}
	});

	});
	$(function(){
	  	$('#spPull').on('click',function(){
	 		$(this).toggleClass('on')
	   	});
	   	$('#spReq').on('click',function(){
	 		$(this).toggleClass('on')
	   	});
	   	$('#spInfo').on('click',function(){
	 		$(this).toggleClass('on')
	   	});
	});

	$(function(){
		// spPull
		$('#spPull').click(function(){
		  if ( $('#spReq').hasClass('on')) {
		    $('#hNavReq').fadeOut();
		    $('#spReq').removeClass('on');
		    $('#spInfo').removeClass('on');
		} else
		    if ( $('#spInfo').hasClass('on') )
		    $('#hNavInfo').fadeOut();
		    $('#spInfo').removeClass('on');
		    $('#spReq').removeClass('on');

		});

		// spReq
		$('#spReq').click(function(){
		  if ( $('#spPull').hasClass('on')) {
		    $('#gNav').fadeOut();
		    $('#spPull').removeClass('on');
		    $('#spInfo').removeClass('on');
		  } else
		    if ( $('#spInfo').hasClass('on') )
		    $('#hNavInfo').fadeOut();
		    $('#spPull').removeClass('on');
		    $('#spInfo').removeClass('on');

		});

		// spInfo
		$('#spInfo').click(function(){
		  if ( $('#spPull').hasClass('on')) {
		    $('#gNav').fadeOut();
		    $('#spPull').removeClass('on');
		    $('#spReq').removeClass('on');
		  } else
		    if ( $('#spReq').hasClass('on') )
		    $('#hNavReq').fadeOut();
			$('#spPull').removeClass('on');
		    $('#spReq').removeClass('on');

		});

	});

	$(function(){
		$(window).resize(function(){
	    $('#hNavReq').css({
	            display: 'none'
	        });
		$('#spReq').removeClass('on');
	});
	});


// body #CVArea ul li .btn
	$(function(){
		var btAnimeReq = $('body #CVArea ul li.btReq .btn a');
		var btAnimeReqSpan = $('body #CVArea ul li.btReq .btn a span');
			btAnimeReq.hover(function(){
				TweenMax.to(btAnimeReqSpan, 0.1, {right:40, opacity:1, ease: Power2.easeOut});
			},function(){
				TweenMax.to(btAnimeReqSpan, 0.4, {right:0, opacity:0, ease: Power2.easeOut});

			});
	});
	$(function(){
		var btAnimeRes = $('body #CVArea ul li.btRes .btn a');
		var btAnimeResSpan = $('body #CVArea ul li.btRes .btn a span');
			btAnimeRes.hover(function(){
				TweenMax.to(btAnimeResSpan, 0.1, {right:40, opacity:1, ease: Power2.easeOut});
			},function(){
				TweenMax.to(btAnimeResSpan, 0.4, {right:0, opacity:0, ease: Power2.easeOut});

			});
	});



// カラムリストレイアウト　高さ統一　body .clmList ul li
	$(function(){
		$('body .clmList.clm3 ul li').flatHeightAll();
	});
	$(window).on('load resize', function(){
		$('body .clmList.clm3 ul li').flatHeightAll();
	});

	$(function(){
		$('body .clmList.clm2 ul li').flatHeightAll();
	});
	$(window).on('load resize', function(){
		$('body .clmList.clm2 ul li').flatHeightAll();
	});


 // CVArea
	$(function(){
		$('body #CVArea ul li').flatHeightAll();
	});
	$(window).on('load resize', function(){
		$('body #CVArea ul li').flatHeightAll();
	});


// accordion
		$(window).load(function() {
		    var w = $(window).width();
		    var x = 780;
		    if (w <= x) {
		      $(document).ready(function(){
		      	setTimeout(function(){
				     $('#LeafiaArea h3').click(function(){
				        $(this).next('.row').stop(true, true).slideToggle(200, "linear");
				        $(this).toggleClass("active");
				    });
				}, 1000);
				});  
		    }
		});

// parts file Path
function get_homedir() {

  var sThis_filename    = 'parts.js';
  var sPath_to_the_home = '../../';

  var i, s, le;
  var sUrl = null;


  le = document.getElementsByTagName('script');
  for (i=1; i<le.length; i++) {
    s = le[i].getAttribute('src');
    if (s.length < sThis_filename.length) {continue;}
    if (s.substr(s.length-sThis_filename.length) !== sThis_filename) {continue;}
    s = s.substr(0,s.length-sThis_filename.length);
    if ((s.length>0) && s.match(/[^\/]$/)) {continue;}
    sUrl = s + sPath_to_the_home;
    sUrl = (sUrl.match(/\/$/)) ? sUrl : sUrl+'/';
    break;
  }
  if (i >= le.length) {
    return null;
  }


  if (sUrl.match(/^http/i)||sUrl.match(/^https/i)) {
    sUrl = "";
  } else if (sUrl.match(/^\//)   ) {

    if (! location.href.match(/^(https?:\/\/[a-z0-9.-]+)/i)) {return null;}
    sUrl = RegExp.$1 + sUrl;
  } else                           {
    sUrl = location.href.replace(/\/[^\/]*$/, '/') + sUrl;
  }


  while (sUrl.match(/\/\.\//)) {
    sUrl = sUrl.replace(/\/\.\//g, '/');
  }


  sUrl.match(/^(https?:\/\/[A-Za-z0-9.-]+)(\/.*)$/);
  s    = RegExp.$1;
  sUrl = RegExp.$2;
  while (sUrl.match(/\/\.\.\//)) {
    while (sUrl.match(/^\/\.\.\//)) {
      sUrl = sUrl.replace(/^\/\.\.\//, '/');
    }
    sUrl = sUrl.replace(/^\/\.\.$/, '/');
    while (sUrl.match(/\/[^\/]+\/\.\.\//)) {
      sUrl = sUrl.replace(/\/[^\/]+\/\.\.\//, '/');
    }
  }
  sUrl = s + sUrl;


  return sUrl;
}




jQuery(function(){
	
	// include
	var mainJSsrc;
	var mainJSpass;
	mainJSsrc = $("#mainJS").attr("src");
	mainJSpass = mainJSsrc.substring( 0, mainJSsrc.indexOf("common") );
	// alert(mainJSpass);
	
	// #gNav file Path
	var gnavhtml = 'common/parts/gnav.html';
	// #gNav include
		$.ajax({
			type: 'get',
			url: mainJSpass + gnavhtml,
			dataType: 'html',
			success: function(data) {
				data = data.replace(/\{\$root\}/g, mainJSpass);
				$("div#gNav div.wrap").append(data);
				console.log(data)
			}
		});
	
	// #fNav file Path
	var fnavhtml = 'common/parts/fnav.html';
	// #fNav include
		$.ajax({
			type: 'get',
			url: mainJSpass + fnavhtml,
			dataType: 'html',
			success: function(data) {
				data = data.replace(/\{\$root\}/g, mainJSpass);
				$("div#gFooter div#fNav div.wrap").append(data);
				console.log(data)
			}
		});
	
	// #FOOTER file Path
	var footerhtml = 'common/parts/footer.html';
	// #FOOTER include
		$.ajax({
			type: 'get',
			url: mainJSpass + footerhtml,
			dataType: 'html',
			success: function(data) {
				data = data.replace(/\{\$root\}/g, mainJSpass);
				$("div#FOOTER").append(data);
				console.log(data)
			}
		});
		
	$('body #pageID01 #gFooter #fNav ul li#fnav01 a').click(function(){
	alert("fault");
		return false;
	});
	
});



