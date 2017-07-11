$(function(){
	$('.speedList li').hover(function(){
		$('.speedList').show();
		$(this).css('background','#ccc').siblings().css('background','#fff');
	},function(){
		$('.speedList').hide();
	});
	$('.speed').hover(function(){
		$('.speedList').show();
	},function(){
		$('.speedList').hide();
	});
	$('.speedList li').on('click',function(){
		$('.selected').html($(this).html());
	});

	var video = $('#myvideo');
	//显示控制器
	var showControl = function(shouldShow){
		if(shouldShow){
			$(".control").show();
		}else{
			$(".control").hide();
		}
	};
	//设置时间格式
	var timeFormat = function(seconds){
		var minite = Math.floor(seconds/60);
		if(minite < 10){
			minite = "0" + minite;
		}
		var second = Math.floor(seconds%60);
		if(second < 10){
			second = "0" + second;
		}
		return time = minite + ":" +second;
	}

	//播放和暂停
	var playAndPause = function () {
		if(video[0].paused || video[0].ended){
			video[0].play();
			$('#playBtn').children().eq(0).show().siblings().hide();
			$('.shade').children().eq(0).show().siblings().hide();
		}else{
			video[0].pause();
			$('#playBtn').children().eq(1).show().siblings().hide();
			$('.shade').children().eq(1).show().siblings().hide();
		}
	};


	//更新当前进度
	var updateProgress = function(x){
		var total = $('.top');
		var precent = 100 * (x-total.offset().left)/total.width();
		if(precent>100){
			precent = 100;
		};
		if(precent < 0){
			precent = 0;
		};
		
		$('.progressMark').css('width',precent+'%');
		$('.progressDot').css('left',precent+'%');

		video[0].currentTime = precent *video[0].duration/100;

	}
	var enableProgressDrag = function(){
		var progressDrag = false;
		$('.progress').on('mousedown',function(e){
			progressDrag = true;
			updateProgress(e.pageX);

			$(document).on('mouseup',function(e){
				if(progressDrag){
					progressDrag = false;
					updateProgress(e.pageX);
				}
			});

			$(document).on('mousemove',function(e){
				if(progressDrag){
					updateProgress(e.pageX);
				}
				//禁止文本被选中
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			});
		});
		
		
	};


	//声音条更新
	var updateSound = function(x){
		var total = $('.volumnBar');
		var precent = 100 * (x-total.offset().left)/total.width();
		if(precent>100){
			precent = 100;
		};
		if(precent < 0){
			precent = 0;
			$('#volumeBtn1').hide();
			$('#volumeBtn2').show();
		};
		if(precent>0){
			$('#volumeBtn1').show();
			$('#volumeBtn2').hide();
		}
		
		$('.sound').css('width',precent+'%');
		$('.volumnDot').css('left',precent+'%');
		video[0].volume = precent /100;
	}
	var soundProgressDrag = function(){
		var soundDrag = false;
		$('.volumnBar').on('mousedown',function(e){
			soundDrag = true;
			updateSound(e.pageX);
		});
		$(document).on('mouseup',function(e){
			if(soundDrag){
				soundDrag = false;
				updateSound(e.pageX);
			}
		});
		$(document).on('mousemove',function(e){
			if(soundDrag){
				updateSound(e.pageX);
			}
			//禁止文本被选中
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		});
	};

	//设置播放速率；
	var speedPlay = function(speed){
		video[0].playbackRate = speed;
	}


	video.on("loadedmetadata",function () {
		showControl(false);//默认不显示控制器

		$('.vContainer').hover(function(){
			showControl(true);
			$('.shade').show();
			setInterval(function(){
				$('.shade').children().fadeOut('slow');
			},1000);
		},function(){
			showControl(false);
			$('.shade').hide();
		});


		//视频总时长
		var time = timeFormat(video[0].duration);
		$('.duration').html(time);

		//点击播放和暂停按钮
		$('#playBtn').on('click',playAndPause);
		$('.shade').on('click',playAndPause);

		//点击进度条实现进度跳转
		enableProgressDrag();

		soundProgressDrag();
		

		video.on('timeupdate',function(){
			var currentTime = video[0].currentTime;
			var duration = video[0].duration;
			var precent = 100 * currentTime / duration;
			//更新进度条
			$('.progressMark').css("width",precent+"%");
/*			console.log($('.progressDot').position().left);*/
			$('.progressDot').css("left",precent+"%");
			
			//更新当前播放时间
			$('.currentTime').html(timeFormat(currentTime));
		});

		//播放时间提示
		$('.top').on('mousemove',function(e){
			$('.timeTip').show();
			var left = $('.top').offset().left;
			var totalWidth = $('.top').width();

			var precent = 100 * (e.clientX-left)/totalWidth;

			var duration = video[0].duration;
			var showTime = duration * precent/100;
			$('.timeTip').css("left",precent+"%");
			$('.timeTip').html(timeFormat(showTime));
		});
		$('.top').on('mouseout',function(){
			$('.timeTip').hide();
		});

		
		//播放速率设置
		$('.speedList li').eq(0).on('click',function(){
			speedPlay(1);
		});
		$('.speedList li').eq(1).on('click',function(){
			speedPlay(2);
		});
		$('.speedList li').eq(2).on('click',function(){
			speedPlay(3);
		});
		$('.speedList li').eq(3).on('click',function(){
			speedPlay(4);
		});

		//实现静音效果
		$('#volumeBtn1').on('click',function(){
			$('#volumeBtn1').hide();
			$('#volumeBtn2').show();
			video[0].volume = 0;
		});
		$('#volumeBtn2').on('click',function(){
			$('#volumeBtn2').hide();
			$('#volumeBtn1').show();
			var precent = $('.volumnDot').position().left/100;
			video[0].volume = precent;
		});

		//进入全屏
		function requestFullScreen(element) {
		    if (element.requestFullscreen) {
		        element.requestFullscreen();
		    } else if (element.mozRequestFullScreen) {
		        element.mozRequestFullScreen();
		    } else if (element.webkitRequestFullScreen) {
		        element.webkitRequestFullScreen();
		    }
		}
		//退出全屏
		function exitFullscreen() {
		    var de = document;
		    if (de.exitFullscreen) {
		        de.exitFullscreen();
		    } else if (de.mozCancelFullScreen) {
		        de.mozCancelFullScreen();
		    } else if (de.webkitCancelFullScreen) {
		        de.webkitCancelFullScreen();
		    }
		}



		//全屏效果
		$('.allScreen #screenBtn1').on('click',function(){
			requestFullScreen($('.vContainer')[0]);
			$(this).hide().siblings().show();
			$('.vContainer').width('100%');
			$('.vContainer').height('100%');
			$('.video').width('100%');
			$('.video').height('100%');
		});
		$('.allScreen #screenBtn2').on('click',function(){
			exitFullscreen();
			$(this).hide().siblings().show();
			$('.vContainer').width('680px');
			$('.vContainer').height('400px');
			$('.video').width('100%');
			$('.video').height('100%');
			$('.vContainer').css('cursor','none');
		});
	});

	
	//实现光标隐藏
	var hideCursor = function(){
		var flag = true
		$(document).on('mousemove',function(){
			flag = false;
			$('.vContainer').css('cursor','pointer');
			$('.control').show();
		});
		console.log('a');
		$('.vContainer').css('cursor','none');
		$('.control').hide();
	}
	setInterval(function(){
		hideCursor();
	},3000);
	



})