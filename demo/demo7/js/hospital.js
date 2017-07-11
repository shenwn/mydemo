$(function(){
	/*转化为年-月-日格式*/
	function transTime (time){
		var today = new Date(time),
			year = today.getFullYear(),
			month = today.getMonth() + 1,
			day = today.getDate(),
			date = year+"-"+month+"-"+day;
		return date;
	};
	/*显示星期*/
	function weekName(time){
		var today = new Date(time),
			i = today.getDay();
		switch(i){
			case 0 :j='日'; break;
			case 1 :j='一'; break;
			case 2 :j='二'; break;
			case 3 :j='三'; break;
			case 4 :j='四'; break;
			case 5 :j='五'; break;
			case 6 :j='六'; break;
		};
		var name = '星期' + j;
		return name;	
	};

	var times = 1; //点击次数

	//模拟数据
	function appendTable(){
		var today = new Date();
		for( var i = 0,j = 7;i<7*j;i++){
			var time = new Date( (+today)+i*24*3600*1000 );
			var day = transTime(time);
			var week = weekName(time);
			var firstLine = "<td>"+day+"<br/>"+week+"</td>";
			var secondLine = "<td></td>";
			var thirdLine = "<td>约满</td>";
			$('.table tr').eq(0).children('.tr_right').before(firstLine);
			$('.table tr').eq(1).children('.right').before(secondLine);
			$('.table tr').eq(2).children('.right').before(thirdLine);
			$('.table tr').eq(3).children('.right').before(secondLine);
		}

		for(var a =0;a<=4;a++){
			var td = $('.table tr').eq(a).children();
			for(var b=0;b<td.length;b++){
				var index = td.eq(b).index();
				if(index<8){
					td.eq(b).show();
				}else{
					td.eq(b).hide();
				}
			}
		}
		$('.left,.right,.brif,.tr_right,.tr_left').show();
			
	}
	appendTable();
	
	//点击右向右图标
	$('.tr_right').click(function(){
		times++;
		if(times>7){
			times = 7;
		}
		var td = $('.table tr').eq(0).children();
		for(var i = 0;i<td.length;i++){
			var j = td.eq(i).index();
			if(j>(times-1)*7 && j<times*7+1){
				td.eq(j).show();
			}else{
				td.eq(j).hide();
			}
		}
		$('.left,.right,.brif,.tr_right,.tr_left').show();
	});

	//点击向左图标
	$('.tr_left').click(function(){
		times--;
		if(times <=1){
			times = 1;
		}
		var td = $('.table tr').eq(0).children();
		for(var i = 0;i<td.length;i++){
			var j = td.eq(i).index();
			if(j>(times-1)*7 && j<times*7+1){
				td.eq(j).show();
			}else{
				td.eq(j).hide();
			}
		}
		$('.left,.right,.brif,.tr_right,.tr_left').show();
	});

})