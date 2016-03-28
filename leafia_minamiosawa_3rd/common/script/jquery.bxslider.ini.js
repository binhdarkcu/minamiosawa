	$(function(){
  // assign the slider to a variable
  var obj = $('#slider2').bxSlider({
		auto: true,
		pause: 6000,
		speed: 2000,
		mode: 'fade',
		prevText: '<',
		nextText: '>',
		pager: true,
		//easing: 'easeOutBounce',
		pagerCustom: '.bx-pager',
		onSlideAfter: function () { obj.startAuto(); }
  });
});