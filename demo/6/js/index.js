$(function(){
	$('dl dt').hover(function(){
		$(this).children('p').show();
	},function(){
		$(this).children('p').show().hide();
	});
 	
 	/*右侧导航条鼠标滑过效果*/
	$('.navbar-right a.dropdown-toggle').hover(function(){
		$(this).dropdown('toggle');
	},function(){
		$(this).css('background','#5D4B33').children('span').css('color','#fff');
		return;
	});


})