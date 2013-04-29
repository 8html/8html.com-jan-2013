var _8HTML_=window._8HTML_||{};
_8HTML_.whoiscb = function(src) {
	if (src.type=='success') {
		if (src.message==null || src.message=='') {
			$('#whoisarea').val('无WHOIS信息。');
		} else {
			$('#whoisarea').val(src.message);
		}
	} else {
		$('#whoisarea').val('获取WHOIS信息错误。');
	}
};
_8HTML_.whois = function(domain) {
	oB.settings.inlineWidth=800;
	$('<div id="whoisdialog" class="hidden"><textarea id="whoisarea">载入中...</textarea></div>').appendTo('body');
	$('<a href="#whoisdialog" rel="lightbox[inline]" />').orangeBox().click();
	$(document).bind('oB_init', function(){
		$('#whoisdialog').remove();
		$('body').css("overflow", "hidden");
	});
	$(document).bind('oB_closed', function(){
		$('body').css("overflow", "auto");
	});
	$.getScript('http://whomsy.com/api/'+domain+'?callback=_8HTML_.whoiscb');
};
_8HTML_.chkdomain = function(s) {
	s=s.split('|');
	var x=$('#domainchkresults .dcresltstatus').filter(function(){
		return $(this).prev('.dcresltname').find('a').attr('href').substr(11)==s[1];
	});
	if (s[2]=='210') {
		x.html('可以注册').addClass('green');
	} else if(s[2]=='211'){
		x.html('已被其他人注册 <a href="javascript:_8HTML_.whois(\''+s[1]+'\');">WHOIS</a>').addClass('red');
	} else {
		x.html('错误的或者是保留的域名。').addClass('red');
	}
};
_8HTML_.chkdomain_init = function() {
	$('#chkdomain').click(function(){
		var va = $.trim($('#domain').val().toLowerCase()), alls={};
		if(!/^[a-zA-Z0-9\-]{1,}$/.test(va)) {
			alert('域名只能以英文字母、数字和中横线组成。');
		} else {
			$('.chkdomain label').each(function(a,b){if($('#'+$(b).attr('for')).prop('checked'))alls[$(b).attr('for')]=$(b).text().substr(1);});
			if ((Object.keys && Object.keys(alls).length>0) || $.map(alls, function(n, i){return i;}).length>0) {
				$('#domainchkresults').show().empty();
				$.each(alls, function(a,b){
					var valdis = va.length>30?va.substr(0,30)+'...':va;
					$('#domainchkresults').append('<div class="dcresult dc'+a+'">'+
					'<div class="dcresltname"><a href="http://www.'+va+'.'+b+'" target="_blank">'+valdis+'.'+b+'</a></div>'+
					'<div class="dcresltstatus">检查中……</div>'+
					'</div>');
					$.getScript('http://pandavip.www.net.cn/check/check_ac1.cgi?domain='+va+'.'+b+'&callback=_8HTML_.chkdomain');
				});
			} else {
				$('#domainchkresults').hide().empty();
			}
			$('#domain').focus();
		}
	});
	$('#domain').keypress(function(e) {
		if(e.which==13)$('#chkdomain').trigger('click');
	});
	$('#selall').toggle(function(){
		$('.chkdomain input[type=checkbox]').prop('checked', true);
		$(this).html('全不选');
	}, function(){
		$('.chkdomain input[type=checkbox]').prop('checked', false);
		$(this).html('全　选');
	});
};
_8HTML_.chkdomain_init();
