---
layout: 8html-posts
title: CSS图片合并(Sprite)注意事项
author: caiguanhao
category: tech
tags: CSS
description: CSS图片合并是将多张零碎的图片互不重叠地合并成为一张大图片，然后在网页上通过CSS样式控制大图片的显示范围来显示各张小图片。因为只需要请求一次图片，所以页面加载速度获得极大提升。
---
CSS图片合并是将多张零碎的图片互不重叠地合并成为一张大图片，然后在网页上通过CSS样式控制大图片的显示范围来显示各张小图片。因为只需要请求一次图片，所以页面加载速度获得极大提升。通常应用于大量用户点击的或者是含有需要动态显示图片（如图片按钮）的网页。很多搜索引擎都用CSS图片合并技术加快了页面加载时间。

查找了一下，目前还没有十分方便地制作图片合并的工具，大部分还不能自定各小图片的大小。所以还是建议用最原始的方法，用Photoshop等作图软件编辑和排列好了。

下面是制作sprites的几点注意事项：

* 图片合并和CSS样式中的定位应该同时进行，除非你合并的图是很有规则的，否则效率会很低
* 相反的位置——在制作大型图片合并时，如果小图片显示的位置相对靠左，那么它在大图片的位置就靠右，反之亦然。这样就避免了在定位图像时出现的错误定位情况。
* 不要在background-position属性中使用right和bottom，因为当你扩大大图片的尺寸时又要重新设置CSS了。
* 如果可以的话，各张小图片之间留有一定空隙，除非在你显示小图片的时候，排除了因为 padding 属性而造成的显示其他图片的可能性。
* 无需担心大图片的大小，大图片多余的空白不会占据太大的文件大小。当然最好在完成所有合并时，用pngcrush、JPEGmini等工具无损压缩一下。

另外附上我自己常用的导航栏代码，因为链接用了display:block，所以可以指定大小；用了链接就可以用hover，而IE6只兼容链接的hover；设置text-indent隐藏文字；

{% highlight html %}
<div id="nav">
	<ul class="navlist">
		<li><a class="navlinks nl1" href="/">首页</a></li>
		<li><a class="navlinks nl2" href="/about/">公司简介</a></li>
		<li><a class="navlinks nl3" href="/jobs/">人才招聘</a></li>
		<li><a class="navlinks nl4" href="/contact/">联系我们</a></li>
	</ul>
</div>
{% endhighlight %}

{% highlight css %}
#nav {
margin-right:-30px;
float:right;
background: #ffffc6 url(nav.png) no-repeat;
width:759px;
height:79px;
}
.navlist li {
list-style:none;
float:left;
}
.navlinks {
text-indent:-3000px;
background: url(links.png) no-repeat; /* 合并的图片 */
height:60px;
width:80px;
display:block;
}
.nl1 {margin:0 0 0 167px; background-position:0 -60px;}
.nl1:hover, .nl1s {margin:0 0 0 167px; background-position:0 0;}
.nl2 {margin:0 0 0 29px; background-position:0 -180px;}
.nl2:hover, .nl2s {margin:0 0 0 29px; background-position:0 -120px;}
.nl3 {margin:0 0 0 47px; background-position:0 -300px;}
.nl3:hover, .nl3s {margin:0 0 0 47px; background-position:0 -240px;}
.nl4 {margin:0 0 0 45px; background-position:0 -420px;}
.nl4:hover, .nl4s {margin:0 0 0 45px; background-position:0 -360px;}
{% endhighlight %}

维基百科上的[CSS Sprite](http://en.wikipedia.org/wiki/Sprite_\(computer_graphics\)#Sprites_by_CSS)

[参考资料](http://blog.mozilla.org/webdev/2009/03/27/css-spriting-tips/)