//1190px,960px
function setWrap(){
	if ($(window).width() > 1190) {
	//1190
	$('body').attr('class','w1190');
}else{
	//960px
	$('body').attr('class','w960');
	}
}
setWrap();
$(window).on('resize',setWrap);
$(function(){
	$('#top ul.nav li').hover(function(){
		$(this).toggleClass('hover').children('#tcdiv,#khdiv,#hzdiv').finish().slideToggle(200);
	});
	$('#logowarp div#city').hover(function(){
		$(this).toggleClass('hover');
	});
	$('#menu #ulmenu .limenu').hover(function(){
		$(this).toggleClass('hover');
	});
	//幻灯效果开始
	var isrun = true;
	var slidenum = $('#slidewrap #slide>li').length;//获取页码数量
	var ulhtml = '<ul id="num">';
	for(var i =0; i < slidenum; i++){  //使用for循环完成需要的html代码字符串
		ulhtml += '<li></li>';
	}
	ulhtml += '</ul>'; 
	$('#slidewrap ul#slide').after(ulhtml);//使用after方法将html代码字符串添加到兄弟元素#slide的后面
	
	function showslide(num){
		$('#slidewrap ul#slide>li') //选择需要操作的对象
		.finish() //结束之前动画效果
		.filter(':visible') // 使用使用元素过滤选择器filter()方法，选择当前可见的对象
		.fadeOut(400) //使用fadeout方法的淡出效果，使其不可见
		.css({'z-index':0})//修改当前可见对象的css属性
		.end() // 使用end方法得到上一个结果集
		.eq(num) //使用eq()方法选择对象集合中的第num位对象
		.fadeIn(400) //使用fadein方法的淡入效果，使其可见
		.css({'z-index':1}); //更改对象的css属性
		
		$('#slidewrap ul#num>li') //选择需要操作的对象
		.filter('.current') // 使用使用元素过滤选择器filter()方法，选择class属性为current的对象
		.removeClass('current') //使用removeClass()方法，将该对象的class="current"属性移除
		.end() //使用end方法得到上一个结果集
		.eq(num) //使用eq()方法选择对象集合中的第num位对象
		.addClass('current'); //使用addClass()方法，为该对象添加class="current"属性
	}
	showslide(0);
	$('#slidewrap ul#num>li').on('mouseenter.trigger',function(){ //使用mouseenter.trigger命名空间防止与hover干扰
		var num = $('#slidewrap ul#num>li').index(this) //使用index方法得出this在对象数组中的序号
		showslide(num); //执行对应需要的函数
	});
	$('#slidewrap #slide>li,#slidewrap #num>li').hover(function () { //使用hover控制isrun的值，轮播只有在true的时候才执行
		isrun = false;
	},function () {
		isrun = true;
	});
	setInterval(function(){
		if (isrun) {
			if ($('#slidewrap ul#num>li.current').next().length==0) { //判断对象是否有下一个兄弟元素
				$('#slidewrap ul#num>li').eq(0).triggerHandler('mouseenter.trigger'); //如果没有则执行第一个
			}else{
				$('#slidewrap ul#num>li.current').next().triggerHandler('mouseenter.trigger');//有则切换到下一个函数并执行
			}
		}		
	},1000);
	//幻灯效果结束
	
	//块状导航栏左侧效果开始
	$('#leftnav #nav #navul li').on('click',function(){
		var i = $('#leftnav #nav #navul li').index(this)
		$('#leftnav #nav #navul li').removeClass('click');
		$(this).addClass('click');
		$('#nav_right>div.nav_content').removeClass('click');
		$('#nav_right>div.nav_content').eq(i).addClass('click');
	});
	//块状导航栏左侧效果结束
	
	//机票导航开始
	$('#airplane_tab>a').on('click',function(){
		var i = $('#airplane_tab>a').index(this)
		$('#airplane_tab>a').removeClass('click_jp');
		$(this).addClass('click_jp');
		$('#airplane_body>div').removeClass('click_jp');
		$('#airplane_body>div').eq(i).addClass('click_jp');
	});
	//国内机票开始
	$('#airplane_inland .trip_top>ul>li>label').on('click',function(){
		$('#airplane_inland .trip_top>ul>li>label').children('s').removeClass('check');
		$(this).children('s').addClass('check');
	});
	//国内机票结束
	//机票导航结束
	
	//精选特惠开始
	$('#dadproject>.dadtitle>ul>li').on('mouseenter',function () {
		var i = $('#dadproject>.dadtitle>ul>li').index(this)
		$('#dadproject>.dadtitle>ul>li').removeClass('at');
		$(this).addClass('at');
		$('#dadinfo>div').removeClass('at');
		$('#dadinfo>div').eq(i).addClass('at');
	});
	//精选特惠结束
	//住酒店开始
	$('#hotelBox>.hoteltitle>ul>li').on('mouseenter',function () {
		var i = $('#hotelBox>.hoteltitle>ul>li').index(this)
		$('#hotelBox>.hoteltitle>ul>li').removeClass('at');
		$(this).addClass('at');
		$('#hotel_left>div.city_hotel').removeClass('at');
		$('#hotel_left>div.city_hotel').eq(i).addClass('at');
	});
	//住酒店结束
				
});