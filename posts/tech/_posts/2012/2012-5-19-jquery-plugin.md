---
layout: 8html-posts
title: 制作jQuery插件需要注意的地方
author: caiguanhao
category: tech
tags: jQuery
description: 前几天阅读了一篇叫《别人不用你的jQuery插件的14个原因》（14 Reasons Why Nobody Used Your jQuery Plugin）的文章，下面我将简单地罗列一下这14个原因是什么，反过来看，我们要怎样做才可以做好一个受欢迎的jQuery插件。
---
前几天阅读了一篇叫《别人不用你的jQuery插件的14个原因》（*14 Reasons Why Nobody Used Your jQuery Plugin*）的文章，下面我将简单地罗列一下这14个原因是什么，反过来看，我们要怎样做才可以做好一个受欢迎的jQuery插件。

原因一：你不是在做一个jQuery插件。没有按照传统格式来写的插件很容易出错，至少“$”不一定是jQuery的代号，如果不按传统格式那样传递 `jQuery ( function($){}(jQuery) )`，而在插件中乱用“$”就会出错。

{% highlight javascript %}
// 来自 http://docs.jquery.com/Plugins/Authoring
(function ($) {
	$.fn.tooltip = function (options) {
		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'location': 'top',
			'background-color': 'blue'
		}, options);
		return this.each(function () {
			// Tooltip plugin code here
		});
	};
})(jQuery);
{% endhighlight %}

原因二：没有代码注释或文档。其他开发者或用户不会花长时间来了解代码流程。

原因三：插件不灵活，不能定制。

原因四：选项太多。

原因五：外内联CSS混用。最好别用内联CSS，除非在不太需要外联CSS的时候。

原因六：没有示例（或DEMO）。

原因七：代码与jQuery的兼容性问题。有些功能是后来开发的，最好列明需要什么版本的jQuery。

原因八：没有更改历史。把代码放在版本控制网站，如GitHub。

原因九：多余或者作用空间小。没人会要求你再造一个滑动效果的插件。

原因十：没有提供最小体积版本。放在网页上的JS代码都想最轻、最快。

原因十一：代码太简化以致可读性降低。写代码时不必处处用匿名函数，处处用a、b、c作为参数，又是自己都搞糊涂了。那些工作交给专门压缩JS代码的网站做就行了。

原因十二：其实是可以不用jQuery的。如果只须执行简单的DOM对象控制，用原始的JS代码就行了，不过就是要检查各个浏览器的兼容性。

原因十三：制作没有流程。使用诸如[grunt](https://github.com/cowboy/grunt)的自建模板程序，就可以轻松生成许可证和文档的基本格式。

原因十四：没有测试。如果嫌人手测试麻烦或者不全面，考虑使用QUnit、Jasmine、Mocha等工具。