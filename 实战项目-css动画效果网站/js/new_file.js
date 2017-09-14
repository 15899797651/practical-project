$(function(){
	
	/*-----------------------导航栏动画开始-----------------------*/
	$('.menu-toggle').on('click',function(){
		$('.menu-toggle').toggleClass('isclicked');
		$('.pace-done').toggleClass('menu-is-open');
	});
	
	/*-----------------------导航栏动画结束-----------------------*/
	
	
	/*-----------------------logo隐藏开始-----------------------*/
	$(window).on('scroll',function () {
		if ($(window).scrollTop()>150) {
			$('.logo').fadeOut(800);
		}else {
			$('.logo').fadeIn(800);
		}
	});
	/*-----------------------logo隐藏结束-----------------------*/
	
	
	
	/*-----------------------首页动画开始-----------------------*/
	$('body').hide();
	$('body').fadeIn(800);
	$(window).on('load', function() {
		if (!$("html").hasClass('no-cssanimations')) {
			setTimeout(function(){
				$('body .animate-intro').each(function(ctr) {
					var a =$(this)
					setTimeout( function () {
					a.addClass('fadeInUp');
					}, ctr * 100);
				});
			}, 1000);
		}
	});
	/*-----------------------首页动画结束-----------------------*/



	/*-----------------------主体动画开始-----------------------*/
	$(window).on('scroll resize',function () {
		$('.animate').each(function (i) {
			var UDLR = $(this).data('animate')
			var top = $(this).offset().top*0.9
			if (top < $(window).height()+$(window).scrollTop()) {
				switch (UDLR){
					case "fadeInUp":
						var U =$(this)
						if (!U.hasClass("fadeInUp")) {
							setTimeout(function () {
								U.addClass(UDLR);
							},i*100);
						}
					break;
					case "fadeInLeft":
						var L =$(this)
						if (!L.hasClass("fadeInLeft")) {
							setTimeout(function () {
								L.addClass(UDLR);
							},i*80);
						}
					break;
					case "fadeInRight":
						var R =$(this)
						if (!R.hasClass("fadeInRight")) {
							setTimeout(function () {
								R.addClass(UDLR);
							},i*80);
						}
					break;
				} 
			}
		});
	});
	/*-----------------------主体动画结束-----------------------*/
	
	
	
	/*-----------------------计数器开始-----------------------*/
	$(window).on('scroll resize',function () {
		if(!$(".stat-count").hasClass('stat-count-ed')){
			var top = $(".stat-count").offset().top*0.9
			if (top < $(window).height()+$(window).scrollTop()){
				$(".stat-count").addClass('stat-count-ed');
				$(".stat-count").each(function () {
				   var $this = $(this);
					$this.attr({ Counter: 0 }).animate({ Counter: $this.text() }, {
					   	duration: 4000,
					   	easing: 'swing',
					   	step: function (curValue) {
					      	$this.text(Math.ceil(curValue));
					    	}
				  	});
				});
			}
		}
	});
	/*-----------------------计数器结束-----------------------*/
	
	
	/*-----------------------幻灯片开始-----------------------*/
	$('#testimonials .flex-control-nav>li').on('click.trigger',function () {
		var i =$('#testimonials .flex-control-nav>li').index(this)
		$('#testimonials .flex-control-nav>li').removeClass('flex-active')
		$(this).toggleClass('flex-active')
		$('#testimonials .slide-li').css({'z-index':1,'opacity':0});
		$('#testimonials .slide-li').eq(i).css({'z-index':2,'opacity':1})
		switch (i){
			case 0:
				$('#testimonials .flexslider').css('height',289)
			break;
			case 1:
				$('#testimonials .flexslider').css('height',241)
			break;
			case 2:
				$('#testimonials .flexslider').css('height',193)
			break;
		}
	});
	setInterval(function () {
		if ($('#testimonials .flex-control-nav>li.flex-active').next().length==0) {
			$('#testimonials .flex-control-nav>li').eq(0).triggerHandler('click.trigger');
		}else{
			$('#testimonials .flex-control-nav>li.flex-active').next().triggerHandler('click.trigger');
		}
	},10000);
	
	/*-----------------------幻灯片结束-----------------------*/
	
	
	/*-----------------------返回顶部开始-----------------------*/	
	$(window).on('scroll',function () {
		if ($(window).scrollTop()>500) {
			$('#go-top').fadeIn(800);
		}else {
			$('#go-top').fadeOut(800);
		}
	});
	$('.smoothscroll').on('click',function () {
		var a = $(this).attr("data-href");
		$('html').animate({
			'scrollTop':$(a).offset().top
		},500);
	});
	/*-----------------------返回顶部结束-----------------------*/			
});	
	
