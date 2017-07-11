$(function(){
	//点击图片切换
	$('.list img').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var image = $(this).attr('src');
		$('.show img').attr('src',image);
	});

	//鼠标悬浮出现放大图片
	$('.show').hover(function(e){
		var img = $('.show img').clone().attr('src');
		$('.play img').attr('src',img);
		//监控鼠标当前位置
		$(document).on('mousemove',function(e){
			var x= e.pageX,
				y = e.pageY,
				width = $('.show').width(),
				height = $('.show').height(),
				l = $('.show').offset().left,
				t = $('.show').offset().top;
			if((x>=l) && (x-width<=l) &&(y>=t)&&(y-height<=t)){
				$('.rect').removeClass('hide');
				$('.play').removeClass('hide');
				//console.log(y-height,t);
			};
		});
	},function(){
		return false;
	});

	//鼠标移动时更新当前矩形框的位置以及图片放大区域
	$('.show').on('mousemove',function(e){
		var width = $(this).width(),
			height = $(this).height();
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		var w = 200;
		var h = 250;
		var L = Math.floor(x-w/2);
		var T = Math.floor(y-h/2);
		if(L<=0){
			L = 0;
		}else if(L >= width-w){
			L = width - w;
		}
		if(T<=0){
			T = 0;
		}else if(T >= height - h){
			T = height - h;
		}
		console.log(x,y,T,L);
		$('.rect').css({'top':T,'left':L});
		$('.play img').css({'top':(-2*T),'left':(-2*L),'width':'200%','height':'200%'});
	});

	//鼠标离开时矩形框和放大图片均隐藏
	$('.show').on('mouseout',function(){
		$('.rect').addClass('hide');
		$('.play').addClass('hide');
	});

	
})