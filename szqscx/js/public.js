//AOS插件效果全局配置,内容可为空,但必须有AOS.init({});
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

// 点击导航栏切换界面
$(document).ready(function() {
	$("#nav-list ul li").click(function(){
        $("#nav-list .list").eq($(this).index()).show().siblings(".list").hide();
        $("#nav-list ul li").eq($(this).index()).addClass("on").siblings("li").removeClass("on");
    });
});

// 回到顶部
$("#to-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 1000);
	return false;
});

//从页面获取data-bgurl,添加background背景图
// 问题:当php遍历时出问题,无法遍历每个背景图,jq用each()也有问题
$(document).ready(function(){
  $('#bg').css('background', 'url(' + $("#bg").attr("data-bgurl") + ') no-repeat center');
});

//分页后取当前页的前两个与后两个,其他省略
$(document).ready(function(){
	$('.list_page .current').prevAll().eq(0).css('display', 'inline-block');
	$('.list_page .current').prevAll().eq(1).css('display', 'inline-block');
	$('.list_page .current').nextAll().eq(0).css('display', 'inline-block');
	$('.list_page .current').nextAll().eq(1).css('display', 'inline-block');
});

//jq滚动监听
$(window).scroll(function() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log("滚动距离" + scrollTop);
  if(scrollTop>0){
	  $("header").addClass("on");
  }
  if(scrollTop<=0){
	  $("header").removeClass("on");
  }
})

// 使用js添加animated动效
$(document).ready(function() {
	  $("#faq .main-body .section-1 .container ul li h2").mouseover(function(){
		  $(this).addClass('animated pulse');
	  });
	  $("#faq .main-body .section-1 .container ul li h2").mouseout(function(){
		  $(this).removeClass('animated pulse');
	  });
	  
	  $("#about-us .main-body .section h1").mouseover(function(){
		  $(this).addClass('animated rubberBand');
	  });
	  $("#about-us .main-body .section h1").mouseout(function(){
		  $(this).removeClass('animated rubberBand');
	  });
});

// 图片懒加载与背景懒加载-
$(function() {
    $("img").lazyload();
    $(".bg").lazyload();
});