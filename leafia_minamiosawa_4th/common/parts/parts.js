$(function(){

	var directorySet = {};
	
	directorySet.mapping = [
		// テンプレートページ確認用
		// {dir : "_template", btnName : "_template"}
	];
	
	directorySet.myURL = location.href;
	directorySet.nowDir = null;
	for(var i = 0; i < directorySet.mapping.length; i++){
		if(location.href.indexOf(directorySet.mapping[i].dir) > -1){
			directorySet.nowDir = directorySet.mapping[i].btnName;
		}
	}
	if(directorySet.nowDir == null){
		directorySet.nowDir = "top";
	}

	var footerURL = get_homedir()+"common/parts/footer.html"
	$("#FOOTER").load(footerURL+" #FooterInner",function(){
		setFooter();
	});

	
	// フッター読み込み
	function setFooter(){
		$("img.ahover, .ahoverArea img").easyOver();
		
		$("img","#gFooter").each(function(){
			var src = $(this).attr("src");
			$(this).attr("src",get_homedir()+src);
		});
		

		// option
		// accordion
		$(window).load(function() {
		    var w = $(window).width();
		    var x = 780;
		    if (w <= x) {
		      $(document).ready(function(){
				    $('#LeafiaArea h3').click(function(){
				        $(this).next('.row').stop(true, true).slideToggle(200, "linear");
				        $(this).toggleClass("active");
				    });
				});  
		    }
		});

		$(window).load(function() {
		  $('body #gFooter #LeafiaArea .list ul li').on('click',function(e){
		    e.preventDefault();
		    var _target = $(this).attr('target'),
		        _href = $(this).attr('data-url');
		    var isTarget = (_target !== undefined);
		    if(isTarget) {
		      window.open(_href,_target);
		    }else{
		      window.location.href = _href;
		    }
		  });
		});

		// end option
		
	} // end setFooter
	
});
