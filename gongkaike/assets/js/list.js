//关注微博微信

$('.guanzhu').mouseover(function(){
	$(this).css('background','#fff');
	$(this).children('.women').stop(true).show();
}).mouseout(function(){
	$(this).css('background','#ebebeb');
	$('.women').hide();
})
//我的公开课
$('.work').mouseenter(function(){
	$(this).children('.worktext').show();
}).mouseleave(function(){
	$(this).children('.worktext').hide();
})
	//固定窗口
$(function(){
	$('.infixed-top').mouseover(function(){
	$('.infixed-ap').stop(true).fadeIn();
}).mouseout(function(){
	$('.infixed-ap').fadeOut();
})
})
$(function(){
	$('.infixed-ap').mouseover(function(){
	$('.infixed-ap').show();
}).mouseout(function(){
	$('.infixed-ap').hide();
})
})
//搜索下拉框
$('.topnav .topnav-msg').click(function(){
	$('.topnav .topnav-msg .input-menu').slideDown();
	$('.topnav .topnav-msg .sou').hide();
	console.log(11);
})
$('.topnav .topnav-msg .input-menu').mouseleave(function(){
	$('.topnav .topnav-msg .sou').show();
	$(this).slideUp();
	console.log(33);
})

//点击加载
$(function(){
	$('.dianji').click(function(){
		$(this).hide();
		$('.hot-hide').slideDown();		
	})	
})