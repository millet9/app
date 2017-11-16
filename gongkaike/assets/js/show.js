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
	$(this).slideUp();
	$('.topnav .topnav-msg .input-menu').hide();
	console.log(33);
})
//topbar 顶部标题开始

$('.more').mouseover(function(){
	$('.more-box').show();
}).mouseout(function(){
	$('.more-box').hide();

})
$('.more-box').mouseover(function(){
	$(this).show();
}).mouseout(function(){
	$(this).hide();
})
$('.left-btn span').mouseenter(function(){
	$('.span-text').show();
}).mouseleave(function(){
	$('.span-text').hide();
})
$('.span-text').mouseover(function(){
	$(this).show();
}).mouseout(function(){
	$(this).hide();
})

//课程列表 内容框

	$(function(){
	$('.course .sos ul li').mouseenter(function(){
		$(this).children('.course-con').show().delay(800).siblings().children('.course-con').hide();
		$(this).children('.triangle').show().delay(800).siblings().children('.course-con').hide();
		console.log(11);
	}).mouseleave(function(){
		$(this).children('.course-con').hide().siblings().children('.course-con').hide();
		$(this).children('.triangle').hide().siblings().children('.course-con').hide();
		console.log(22)
	})
	
})


//课程列表左右移动
$(function(){
	$('.course-right').click(function(){
		$('.sos ul').css('left','-160px');
		$('.couse-left').show();
	})
	$('.course-left').click(function(){
		$('.sos ul').css('left','0');
		$('.couse-right').show();
		$(this).hide();
		   
	})
})





$('.dianji').click(function(){
	$('.clck').hide();
})


//xiangguantuijian
$(function(){
	var index = 0;
	$('.related-left').click(function(){
		index--;
		if (index < 0){
			return false;
		}
	$('.con ul').animate({left:-206*4*index},1000);
	$(this).prop('disabled',true).siblings('button').prop('disabled',false);
	console.log(99999);
	})
	$('.related-right').click(function(){
		index++;
		if (index >2){
			return false;
		}
	$('.con ul').animate({left:-206*4*index},1000);
	$(this).prop('disabled',true).siblings('button').prop('disabled',false);
	})
	console.log(12);
})