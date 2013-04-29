/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));
var _8HTML_=window._8HTML_||{};
_8HTML_.livesearch=function() {
	var load_lock=0;
	$('#suggest').val('').placeholder().bind('keyup', function(){
	if (load_lock==0) {
	$('#suggeststatus').text('载入中...');
	$.getJSON((relative||'/')+'posts/posts.json?'+Math.random()).done(function(jsondata){
		$('#suggeststatus').text('');
		$('#suggest').unbind('keyup').bind('keyup', function(){
		if ($('#suggest').val()=='') {
			$('#suggests').empty().addClass('hidden');
			$('.lscontent').removeClass('hidden');
			$('#suggeststatus').text('');
		} else {
			$('.lscontent').addClass('hidden');
			$('#suggests').empty().removeClass('hidden').append('<div class="newslist"><ul></ul></div>');
			var key=$.trim($('<div />').html($('#suggest').val()).text()), keyU=key.toUpperCase(),c=0;
			$.each(jsondata.slice(1), function(a,b){
				if (b[0].toUpperCase().indexOf(keyU)>=0 || b[1].toUpperCase().indexOf(keyU)>=0) {
				$('#suggests ul').append('<li><div class="nll"><a href="'+(relative||'/')+'posts/'+b[2]+(relative&&b[2].substr(-1)=='/'?'index.html':'')+'" class="title">'+b[0]+'</a></div><div class="clear"><small>'+b[1]+'</small></div></li>');
				c++;
				}
			});
			if (c==0) {
				$('#suggests ul').append('<li><div class="nll">无相关结果</div><div class="nlr"></div><div class="clear"><small>在标题和描述中找不到“'+key+'”，请使用其他关键词。</small></div></li>');
			}
			if (_8HTML_ && _8HTML_.fixfooter) _8HTML_.fixfooter();
			$('#suggeststatus').text('找到'+c+'项。');
		}
		}).trigger('keyup');
	}).fail(function(){$('#suggeststatus').text('载入失败。');});
	load_lock=1;
	}
	});
};
$(_8HTML_.livesearch);
