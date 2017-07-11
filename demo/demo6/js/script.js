$(function(){
	var index = 0,
		timer = null;
	
	/*顶部*/
	/*登陆*/
	$('.top-left li').eq(0).click(function(){
		$('.top-six').show();
		$('#login').removeClass('hide');
		$('#register').addClass('hide');
	});
	$('.close').click(function(){
		$('.top-six').hide();
	});
	$('#login').children('label').click(function(){
		var i = $(this).index();
		if(i == 0){
			$('#login').removeClass('hide');
			$('#register').addClass('hide');
		}else{
			$('#login').addClass('hide');
			$('#register').removeClass('hide');
		};
	});

	/*注册*/
	$('.top-left li').eq(1).click(function(){
		$('.top-six').show();
		$('#login').addClass('hide');
		$('#register').removeClass('hide');
	});
	$('#register').children('label').click(function(){
		var i = $(this).index();
		if(i == 0){
			$('#login').removeClass('hide');
			$('#register').addClass('hide');
		}else{
			$('#login').addClass('hide');
			$('#register').removeClass('hide');
		};
	});
	/*其他登陆方式鼠标滑过颜色改变*/
	$('.login span.login-img a').hover(function(){
		$(this).css({'background':'#07bbbf'});
	},function(){
		$(this).css({'background':'#ccc'});
	});
	/*input框文本判断*/
	$('#account').blur(function () {
		var txt = $('#account').val(),
			len = txt.length;
		if(len == 11 && !isNaN(txt)){
			$('.ver-one').html('√').css({'background':'green'}).show();
		}else{
			$('.ver-one').html('×').css({'background':'red'}).show();
		};
	});
	$('#account-two').blur(function () {
		var txt = $('#account-two').val(),
			len = txt.length;
		if(len == 11 && !isNaN(txt)){
			$('.ver-one').html('√').css({'background':'green'}).show();
		}else{
			$('.ver-one').html('×').css({'background':'red'}).show();
		};
	});

	$('#number').blur(function(){
		var nmuLen = $('#number').val().length;
		if(nmuLen >= 6 && nmuLen <=16){
			$('.ver-two').html('√').css({'background':'green'}).show();
		}else{
			$('.ver-two').html('×').css({'background':'red'}).show();
		};
	});
	$('#number-two').blur(function(){
		var nmuLen = $('#number-two').val().length;
		if(nmuLen >= 6 && nmuLen <=16){
			$('.ver-two').html('√').css({'background':'green'}).show();
		}else{
			$('.ver-two').html('×').css({'background':'red'}).show();
		};
	});
	$('#number-re').blur(function(){
		var nmuRe = $('#number-re').val(),
			numTxt = $('#number-two').val();
		if(numTxt === nmuRe){
			$('.ver-three').html('√').css({'background':'green'}).show();
		}else{
			$('.ver-three').html('×').css({'background':'red'}).show();
		};
	});

	/*鼠标滑过顶部右侧列表*/
	$('.top-right li').hover(function(){
		$(this).css({'background':'#cdd0d4'});
		$(this).children('ul').show();
	},function(){
		$(this).css({'background':'#f3f5f7'});
		$(this).children('ul').hide();
	});
	/*顶部左侧下拉框*/
	$('.top-left li:last-child').hover(function(){
		$(this).css({'background':'#cdd0d4'});
		$('.mobile').show();
	},function(){
		$(this).css({'background':'#f3f5f7'});
		$('.mobile').hide();
	});
	/*logo区购物车下拉框*/
	$('.logo-nav').hover(function(){
		$('.logo-list').show();
	},function(){
		$('.logo-list').hide();
	});

	/*导航区商品分类*/
	//鼠标滑过一级菜单时
	$('.banner-left .menu-item').hover(function(){
		var i = $(this).index()-1;//获取当前盒子的索引
		$(this).css({
			'cursor':'pointer',
			'background':'#fff',});
		$(this).children().children().css({'color':'red',});
		$('.sub-menu').show();//二级菜单显示
		$('div.inner-box').eq(i).show().siblings().hide();//二级菜单对应索引盒子显示
	},function(){
		var i = $(this).index();
		$(this).css({'background':'red'});
		$(this).children().children().css({'color':'#fff',});
		$('.sub-menu').hide();
	});
	//鼠标滑过商品分类二级菜单时
	$('div.inner-box').hover(function(){
		var i = $(this).index();
		$('.sub-menu').show();
		$(this).show();
		$('.banner-left .menu-item').eq(i).css({
			'cursor':'pointer',
			'background':'#fff',
			});
		$('.banner-left .menu-item').eq(i).children().children().css({
			'color':'red',
		})
	},function(){
		var i = $(this).index();
		$(this).parent().hide();
		$('.banner-left .menu-item').eq(i).css({'background':'red',});
		$('.banner-left .menu-item').eq(i).children().children().css({
			'color':'#fff',
		});

	});
	//图片轮播区
	//图片自动播放
	function autoPlayImg(){
		timer = setInterval(function(){
			index++;
			index%=5;
			$('.img-box div').eq(index).show().siblings().hide();
			$('.dots span').eq(index).addClass('active').siblings().removeClass('active');
		},1000);
	};
	//清除定时器
	function clearPlay () {
		clearInterval(timer);
	};
	//当鼠标悬浮轮播图停止切换图片，离开时图片自动播放
	$('.banner-box').hover(function(){
		clearPlay();
	},function(){
		autoPlayImg();
	});
	//下一张按钮切换图片
	$('.next').click(function(){
		index++;
		if(index >= 5){
			index = 0;
		};
		$('.img-box div').eq(index).show().siblings().hide();
		$('.dots span').eq(index).addClass('active').siblings().removeClass('active');
	});
	//上一张按钮切换图片
	$('.prev').click(function(){
		index--;
		if(index < 0){
			index = 4;
		};
		$('.img-box div').eq(index).show().siblings().hide();
		$('.dots span').eq(index).addClass('active').siblings().removeClass('active');
	});
	//小圆点按钮切换图片
	$('.dots span').click(function(){
		index = $(this).index();
		$('.img-box div').eq(index).show().siblings().hide();
		$('.dots span').eq(index).addClass('active').siblings().removeClass('active');
	});
	//调用自动轮播图片函数
	autoPlayImg();
	//生活服务区鼠标滑过变小手状，字体颜色变为红色
	$('.banner-right p:gt(0),.banner-right a:gt(0),.banner-right span').hover(function(){
		$(this).css({'cursor':'pointer','color': 'red'});
	},function(){
		$(this).css({'color': '#000'});
	});
	
	/*右侧导航条*/
	$('.floor-nav-bar li').hover(function(){
		var i = $(this).index();
		$(this).css({'background':'#71777d'});
		$('.dia-box').children().eq(i).show();
	},function(){
		var i = $(this).index();
		$(this).css({'background':'#b7bbbf'});
		$('.dia-box').children().eq(i).hide();
	});

	/*楼层区*/
	//楼层区展示内容切换
	$('.floor-nav-tip span').click(function(){
		var L = $(this).offset().left,
			w = $('#tit-top').offset().left;
		$(this).parent().next('#tit-top').children('.sp1').css({'left':L-w});
	});


	/*为所有的价格设置颜色*/
	$('.floor-banner').find('dd:last-child').css({'color':'red'});

	/*滚动条移动时2F左侧楼层导航出现*/
	$(window).scroll(function(){
		var floor_02 = $('#floor_02').offset().top,
			floor_03 = $('#floor_03').offset().top,
			floor_04 = $('#floor_04').offset().top,
			floor_05 = $('#floor_05').offset().top,
			docTop = $(document).scrollTop(),
			a = docTop - floor_05;
		if(docTop >= floor_02){
			$('.left-nav').show();
		}else{
			$('.left-nav').hide();
		};
		if(docTop >= floor_02 && docTop < floor_03){
			$('.left-nav li').eq(1).css({'font-size':'16px'}).html('个护美妆'); /*2f*/
			$('.left-nav li').eq(2).css({'font-size':'16px'}).html('3F');
			$('.left-nav li').eq(3).css({'font-size':'16px'}).html('4F');
			$('.left-nav li').eq(4).css({'font-size':'16px'}).html('5F');
		};
		if(docTop >= floor_03 && docTop < floor_04){
			$('.left-nav li').eq(2).css({'font-size':'8px'}).html('手机通讯'); /*3f*/
			$('.left-nav li').eq(1).css({'font-size':'16px'}).html('2F');
			$('.left-nav li').eq(3).css({'font-size':'16px'}).html('4F');
			$('.left-nav li').eq(4).css({'font-size':'16px'}).html('5F');
		};
		if(docTop >= floor_04 && docTop < floor_05){
			$('.left-nav li').eq(3).css({'font-size':'8px'}).html('家用电器'); /*4f*/
			$('.left-nav li').eq(2).css({'font-size':'16px'}).html('3F');
			$('.left-nav li').eq(1).css({'font-size':'16px'}).html('2F');
			$('.left-nav li').eq(4).css({'font-size':'16px'}).html('5F');
		};
		if(a>=0){
			$('.left-nav li').eq(4).css({'font-size':'8px'}).html('电脑数码'); /*5f*/
			$('.left-nav li').eq(2).css({'font-size':'16px'}).html('3F');
			$('.left-nav li').eq(3).css({'font-size':'16px'}).html('4F');
			$('.left-nav li').eq(1).css({'font-size':'16px'}).html('2F');
		};
	});
	
	/*友情链接区*/
	$('.link').children().children('span').hover(function(){
		$(this).css({'cursor':'pointer','color':'red'});
	},function(){
		$(this).css({'color':'gray'});
	});

	/*页脚区*/
	$('.foot span').hover(function(){
		$(this).css({'cursor':'pointer','color':'#07111b'});
	},function(){
		$(this).css({'color':'gray'});
	});

	//
	$('.dia-box').css()

})