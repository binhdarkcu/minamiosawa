
	// svg
	$(function(){
		$('path').each(function(i){
			var $this = $(this);
			var path = this;
			var len = path.getTotalLength();
			$this.css({
				'stroke-dashoffset':len,
				'stroke-dasharray':len
			});
		});
	});

	$(window).load(function() {
		$("body #mainSlider .inner").fadeIn("slow");
	});

	$(window).load(function() {
	    var w = $(window).width();
	    var x = 780;
	    if (w <= x) {
	        $('.slide_all').removeClass("slide_all");
	        $('.slide_wrap').removeClass("slide_wrap");
	        $('.slide_body').removeClass("slide_body");
	        $('.slide').removeClass("slide");
	        	$('#mainSlider div').slick({
					fade: false,
		            dots: false,
		            speed: 1500,
		            slidesToShow: 1,
		            slidesToScroll: 1,
		            arrows: true,
		            autoplay: true,
		            infinite: true,
		            pauseOnHover: false
		          });
	    } else {
	    	var slideNum = $('.slide').size();
			$('.slide_body').bxSlider({
				slideWidth: 920,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 0,
				startSlide: 3,
				onSliderLoad:function(currentIndex){
					$('.slide').removeClass('active');
					$('.slide_body > div:nth-child(3n-1)').addClass('active');
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					var new_i = newIndex%3 - 1;
					var nth = (new_i < 0) ? '3n-1' : '3n'+new_i;
					$('.slide').removeClass('active');
					$('.slide_body > div:nth-child('+nth+')').addClass('active');
				}
			});
	    }
	});


	$(window).load(function() {
		var photo = $("body .pickup .pickupList ul li .photo");
			photo.hover(function(){
				TweenMax.to($(this), 0.3, {borderColor: '#666', ease: Power2.easeOut});
			},function(){
				TweenMax.to($(this), 0.4, {borderColor: '#d4d1cd', ease: Power2.easeOut});

			});
	});
