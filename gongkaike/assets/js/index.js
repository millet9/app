
	//¹Ì¶¨´°¿Ú
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
//¿Í»§¶ËÉ¨Âë

$(function(){
	$('.nav-titlelt').mouseenter(function(){
	$('.titleltimg').slideDown();
}).mouseleave(function(){
	$('.titleltimg').slideUp();
})
})
//atitle ±êÌâ

$(function(){
	$('.atitle ul li').mouseenter(function(){
		$(this).children('.textbox').show().delay(800).siblings().children('.textbox').hide();
	}).mouseleave(function(){
		$(this).children('.textbox').hide().siblings().children('.textbox').hide();
	})
	
})
//ÎÒµÄ¹«¿ª¿Î
$('.work').mouseenter(function(){
	$(this).children('.worktext').show();
}).mouseleave(function(){
	$(this).children('.worktext').hide();
})

//¹Ø×¢ÎÒÃÇ

$('.guanzhu').mouseenter(function(){
	$(this).children('.women').stop(true).show();
}).mouseleave(function(){
	$('.women').hide();
})
$('.guanzhu .women .w-weixin').mouseenter(function(){
	$('.guanzhu').children('.weixinma').fadeIn();
}).mouseleave(function(){
	$('.guanzhu').children('.weixinma').fadeOut(100);
})
//denglu   zhuce
$(function(){
	var uBool = false;
    var pBool = false;
    $('#youxiang').focus(function(){
    	$(this).siblings('span').hide();
    })
	$('#youxiang').blur(function(){
		var value = this.value.trim();
        var reg = /^[0-9a-zA-Z_\.]{1,}@[a-zA-Z0-9]+\.[a-z]{2,5}(\.cn)?$/;
        var result = reg.test(value);
        if (result) {
            uBool = true;
        	$('.loginp').children('p').show();
            $('.biaozhi').show();
            $('.cuowu').hide();
           	$('#uMsg').hide();
        } else {
        	$('.loginp').children('p').hide();
        	$('.biaozhi').hide();
        	$('.cuowu').show();
           	$('#uMsg').show();
            uBool = false;
        }
	})
	$('#Dpassword').focus(function(){
    	$(this).siblings('span').hide();
    })
	$('#Dpassword').blur(function(){
		var value = this.value.trim();
        var reg = /^[a-zA-Z0-9]{6,16}$/;
        if (reg.test(value)) {
            uBool = true;
        } else {

            uBool = false;
        }
	})
})
$(function(){
	var uBool = false;
    var pBool = false;
    $('#zcEmall').focus(function(){
    	$(this).siblings('span').hide();
    })
	$('#zcEmall').blur(function(){
		var value = this.value.trim();
        var reg = /^[0-9a-zA-Z_\.]{1,}@[a-zA-Z0-9]+\.[a-z]{2,5}(\.cn)?$/;
        var result = reg.test(value);
         if (result) {
            $('.zcuowu').hide();
           	$('#zMsg').hide();
            uBool = true;
        } else {
        	$('#cMsg').hide();
        	$('.zcuowu').show();
           	$('#zMsg').show();
            uBool = false;
        }
	})
	$('#Zpassword').focus(function(){
    	$(this).siblings('span').hide();
    })
	$('#Zpassword').blur(function(){
		pBool.password = false;
        var username = $(this).val();
          if (username.length < 6 || username.length > 16){
          	$('#zMsg').hide();
            $('.zcuowu').show();
        	$('#cMsg').show();
            pBool = false;
        } else{
        	$('.zcuowu').hide();
        	$('#cMsg').hide();
			pBool = true;
        }        	
	})      
})
$('.ce').click(function(){
	$('.lgpgd').fadeOut(100);
	$('.lgpgz').fadeIn(300);
	return false;
})
$('.god').click(function(){
	$('.lgpgz').fadeOut(100);
	$('.lgpgd').fadeIn(300);
	return false;
})
//zhuce denglu  show||hide
$('.subnav .subnav-right input').focus(function(){
	$('.subnav .subnav-right .input-menu').stop(true).slideDown(200);
	$('.subnav .subnav-right .subnav-msg').hide();
})
$('.subnav-right input').blur(function(){
	$('.subnav .subnav-right .input-menu').slideUp(200);
	$('.subnav .subnav-right .subnav-msg').show();
})
$('.login').click(function(){
	$('.lgbg').show();
	$('.lgpg').show();
	return false;
})
$('.lgpgtimg').click(function(){
	$('.lgbg').hide();
	$('.lgpg').hide();
})
//ÂÖ²¥Í¼

$(function(){
	var index = 0;
	var timer = 0;
	var len = $('.lunbig li').length;
	var cloneFirst = $('.lunbig li:first').clone();
	$('.lunbig').append(cloneFirst);
	function run(){
		timer = setInterval(function(){
			$('.lunsmall li:eq('+index%len+')').removeClass('active');
			index++;
			if (index > len) {
				index = 1;
				$('.lunbig').css('left',0);
			}
			$('.lunsmall li:eq('+index%len+')').addClass('active');
			$('.lunbig').animate({left:-1380*index},1400);
		},5000)
	}
	run();
	$('.lun').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		run();
	})
	$('.lunsmall li').mouseenter(function(){
		$('.lunsmall li:eq('+index+')').removeClass('active');
		index = $(this).index();
		$('.lunsmall li:eq('+index+')').addClass('active');
		$('.lunbig').animate({left:-1380*index},1400);
	})
})	

//ÈÈÃÅÅÅÐÐ×îÐÂ¿Î³ÌÇÐ»»

$(function(){
	$('.tab .tabtitle .tebnew').mouseenter(function(){
		$('.tab .tabzui').hide();
		$('.tab .reul').fadeIn();
	}).mouseleave(function(){
		$('.tab .tabtitle .tebremen').mouseenter(function(){		
		$('.tab .tabzui').fadeIn();
		$('.tab .reul').hide();
	})
	})
})
//appdown show || hide

$('.offapp').click(function(){
	$('.appdown').hide();
})

