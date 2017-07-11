$(function(){
   	var index=0,
   		len=$('.img-box div').length,
   		timer = null;
   		console.log(len);
   	//点击下一张按钮切换
   	$('.next').click(function(){
   		index++;
   		if(index>=len) index=0;
   		$('.img-box div').eq(index).show().siblings().hide();
   		$('.dots span').eq(index).addClass('active').siblings().removeClass();
   		console.log(index);
   	});
   	
   	//点击上一张按钮切换
   	$('.prev').click(function(){
   		index--;
   		if(index<0) index=4;
   		$('.img-box div').eq(index).show().siblings().hide();
   		$('.dots span').eq(index).addClass('active').siblings().removeClass();
   	});
   	
   	//点击小圆点切换
   	$('.dots span').click(function(){
   		index = $(this).index();
   		//console.log(index);
   		$('.img-box div').eq(index).show().siblings().hide();
   		$('.dots span').eq(index).addClass('active').siblings().removeClass();
   	})
   	
   	//自动切换图片
   	function autoPalyImg(){
	   	timer = setInterval(function(){
	   		index++;
	   		index%=5;
	   		$('.img-box div').eq(index).show().siblings().hide();
	   		$('.dots span').eq(index).addClass('active').siblings().removeClass();
	   	},2000);
   }
   
   //清除定时器,停止自动播放
   function stopAutoPlay(){
		if(timer){
	       clearInterval(timer);
		}
	}
	
	//鼠标停留停止自动轮播，鼠标离开继续自动轮播
	$('.banner-box').hover(function(){
		stopAutoPlay();
	},function(){
		autoPalyImg();
	});

	//调用自动轮播图片函数
	autoPalyImg();
})