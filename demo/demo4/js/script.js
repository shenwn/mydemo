function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

var inder=0,
	timer=null,
	img=byId("banner-img").getElementsByTagName("div"),
	index=0,
	len=img.length,
	one=byId("one"),
	two=byId("two"),
	three=byId("three"),
	four=byId("four"),
	pices=byId("tit").getElementsByTagName("span");

//鼠标停留时清除轮播效果
function clearPlay(){
		if(timer){
			clearInterval(timer);
		}
	}

//图片轮播效果
function playImg(){
   timer = setInterval(function(){
       index++;
       if(index >= len){
          index = 0;
       }
       changeImg();
   },1000)
}
//切换图片效果
function changeImg(){
   for(var i=0;i<len;i++){
       img[i].className = "img";
       pices[i].className = "";
       //测试console.log(len);
   }
   img[index].className ="img active";
   //测试console.log(img[index]);
   pices[index].className = "name";
}
//封装最终函数
function finaly(){
	var banner=byId("banner"),
		tit=byId("tit"),
		i=0;
	banner.onmouseout=function(){
		playImg();
	}
	banner.onmouseover=function(){
		clearPlay();
	}
	banner.onmouseout();
}
//调用函数
finaly();

//点击选项卡时跳转到对应图片
for(var i=0;i<len;i++){
  pices[i].index=i;
  pices[i].onclick=function(){
    index=this.index;
    console.log(index);
    changeImg();
  }
}