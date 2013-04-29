---
layout: 8html-posts
title: 自定义PHP的500错误页
author: caiguanhao
category: tech
tags: Apache PHP
description: 在Apache和PHP环境下，每当PHP页面产生500错误，很多人以为在.htaccess设置 ErrorDocument 500 /500.shtml 就可以显示其自定义页面，当然这不能，因为出错的是PHP而非Apache，.htaccess文件设置的只是Apache的错误页，如404等。
---
在Apache和PHP环境下，每当PHP页面产生500错误，很多人以为在.htaccess设置 ErrorDocument 500 /500.shtml 就可以显示其自定义页面，当然这不能，因为出错的是PHP而非Apache，.htaccess文件设置的只是Apache的错误页，如404等。所以这种情况下只会触发浏览器的错误页，一是页面会变空白，一是显示500错误信息。

<img src="/uploads/2012/05/500_error.png" width="633" height="462" />

既然无法通过.htaccess设置，那么就上去php.net上面找答案。找到 [register_shutdown_function](http://php.net/manual/en/function.register-shutdown-function.php) 这个函数。

{% highlight php %}
<?php
error_reporting(E_ERROR); //报告严重错误
ini_set('display_errors', 0); //但不显示默认的错误信息
function shutdown() {
	$error = error_get_last();
	if ($error['type']==E_ERROR) { //当出现严重错误就say sorry
		die("Sorry. The server encounters an error. We'll fix it soon.");
	}
}
register_shutdown_function('shutdown');
{% endhighlight %}

这样的设置下，一旦PHP网页出现严重错误（Fatal Error）就会显示自定义的错误信息。

参考：[Apache’s ErrorDocument directive does not redirect](http://stackoverflow.com/questions/5765319/apaches-errordocument-directive-does-not-redirect/5839076)
