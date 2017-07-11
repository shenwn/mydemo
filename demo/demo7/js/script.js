/*ui-search定义*/
$.fn.uiSearch = function(){
	var ui = $(this);
	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-list').show();
		return false;
	});
	$('.ui-search-list a',ui).on('click',function(){
		$('.ui-search-selected').text( $(this).text() );
		$('.ui-search-list').hide();
		return false;
	});
	$('body').on('click',function(){
		$('.ui-search-list').hide();
	})
};
/*ui-tab定义*/
/*  @param {string} header TAB组件的选项卡切换部分className
	@param {string} content TAB组件的选项卡内容部分className
*/
$.fn.uiTab = function(header,content){
	var ui = $(this),
		tabs = $(header,ui),
		cons = $(content,ui);
	tabs.on('click',function(){
		var index = $(this).index();
		tabs.removeClass('header-item-foucs').eq(index).addClass('header-item-foucs');
		cons.hide().eq(index).show();
		console.log(cons);
		return false;
	});
}



$(function(){
	/*ui-search*/
	$('.ui-search').uiSearch();
	/*ui-tab*/
	$('.ui-tab').uiTab('.ui-tab-header-item > a','.ui-tab-content > .ui-tab-content-item');

})