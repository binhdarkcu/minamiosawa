$(document).ready(function(){

$('#five_content_images').cycle({
		fx : 'scrollHorz', /* fade, scrollLeft, scrollUp,scrollHorz など */
		speed : 800, /* エフェクトのスピード */
		timeout : 8000, /* スライドの間隔 */
		easing : 'swing', /* easing */
		pause : 1, /* ホバー時の一時停止 */
		prev : '.prev-button', /* 前へボタンのid */
		next : '.next-button', /* 次へボタンのid */
		pager:  '#five_nav',
		pagerAnchorBuilder: function(idx, slide) {
			// return sel string for existing anchor
			return '#five_nav li:eq(' + (idx) + ') a';
	  }
  });
  
   $('.btns img').hover(function(){
		 $(this).stop().animate({'opacity' : '0.7'}, 400);
 }, function(){$(this).stop().animate({'opacity' : '1'}, 250);});
   
            $('#five_nav a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 400);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 250);});

});