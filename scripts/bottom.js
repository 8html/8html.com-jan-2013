var _8HTML_=window._8HTML_||{};
/*fix footer*/
_8HTML_.getDocHeight=function(){var a=document;return Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))};
_8HTML_.fixfooter=function(){$("#wrapper").height()<_8HTML_.getDocHeight()&&$("#footer").css("margin-top",parseInt($("#footer").css("margin-top"))+_8HTML_.getDocHeight()-$("#wrapper").height())}
$(_8HTML_.fixfooter);
/*menu*/
$('.menu_item:not(.menu_fixed)').hover(function(){
	if ($(this).prev('.menu_sep').hasClass('menu_sep_active_right')) {
		$(this).prev('.menu_sep').removeClass('menu_sep_active_right').addClass('menu_sep_plain_right');
		$(this).next('.menu_sep').addClass('menu_sep_active_right');
	} else if ($(this).next('.menu_sep').hasClass('menu_sep_active_left')) {
		$(this).prev('.menu_start').addClass('menu_se_active_left');
		$(this).next('.menu_sep').removeClass('menu_sep_active_left').addClass('menu_sep_plain_left');
	} else {
		$(this).prev('.menu_start').addClass('menu_se_active_left');
		$(this).prev('.menu_sep').addClass('menu_sep_active_left');
		$(this).next('.menu_sep').addClass('menu_sep_active_right');
		$(this).next('.menu_end').addClass('menu_se_active_right');
	}
}, function(){
	if ($(this).prev('.menu_sep').hasClass('menu_sep_plain_right')) {
		$(this).prev('.menu_sep').removeClass('menu_sep_plain_right').addClass('menu_sep_active_right');
		$(this).next('.menu_sep').removeClass('menu_sep_active_right');
	} else if ($(this).next('.menu_sep').hasClass('menu_sep_plain_left')) {
		$(this).prev('.menu_start').removeClass('menu_se_active_left');
		$(this).next('.menu_sep').removeClass('menu_sep_plain_left').addClass('menu_sep_active_left');
	} else {
		$(this).prev('.menu_start').removeClass('menu_se_active_left');
		$(this).prev('.menu_sep').removeClass('menu_sep_active_left');
		$(this).next('.menu_sep').removeClass('menu_sep_active_right');
		$(this).next('.menu_end').removeClass('menu_se_active_right');
	}
});
/*ie6 hover fix*/
if ($.browser.msie && $.browser.version.substr(0,1)<7) {
	$('.menu_item').hover(
	function(){$(this).find('span').css('margin-top', 17);},
	function(){$(this).find('span').css('margin-top', 13);}
	);
}
$(window).load(function(){
	/*panel animation*/
	if ($('.panel').length>0 && !Modernizr.csstransforms3d) {
		var del=200, dur=300;
		$('#text1').delay(del).animate({top: '+=37px'});
		$('#text2').delay(del).animate({left: '+=137px'});
		$('#pic1').delay(del).animate({top: '-=144px'});
		$('#text3').delay(del).animate({top: '+=37px'});
		$('#text4').delay(del).animate({top: '-=60px'});
		$('#pic2').delay(del).animate({left: '+=240px'});
		$('#text5').delay(del).animate({top: '+=37px'});
		$('#text6').delay(del).animate({left: '+=155px'});
		$('#pic3').delay(del).animate({top: '-=142px'});
		$('#text7').delay(del).animate({top: '+=60px'});
		$('#text8').delay(del).animate({left: '-=95px'});
		$('#pic4').delay(del).animate({left: '+=160px'});
	}
});
$(function(){
	if (relative) {
		$('a').attr('href', function(a,b){return to_relative(b, true);});
		$('img').attr('src', function(a,b){return to_relative(b, false);});
	}
	if($('#domain').length==1)$('#domain').focus();
})
