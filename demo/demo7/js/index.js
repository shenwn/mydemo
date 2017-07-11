$(function(){
	$('.search span').click(function(){
		$('.search_list').show();	
		$('.search_list li').click(function(){
			$('.search span').text($(this).text());
			$('.search_list').hide();
		});
		
	});
	

	$('.tab a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('.content').children().eq(index).show().siblings().hide();
	})
})