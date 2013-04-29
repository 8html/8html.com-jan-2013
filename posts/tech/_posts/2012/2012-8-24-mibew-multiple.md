---
layout: 8html-posts
title: 多个Mibew客服
author: caiguanhao
category: tech
tags: PHP
description: 如果要将客户分门别类，选择不同类型的客服进行即时交流，单个Mibew做不到，于是可以复制多几个，然后使用同一个数据库。
---
如果要将客户分门别类，选择不同类型的客服进行即时交流，单个Mibew做不到，于是可以复制多几个，然后使用同一个数据库。

复制后修改 libs/config.php 修改路径（$webimroot）和数据库表的前缀（$mysqlprefix）。

接着上传 install 文件夹，然后创建表。因为Mibew安装的时候会对文件进行CHECKSUM检查，记住如果你修改过Mibew的文件而且想保留，需要把这个检查文件功能屏蔽，方法是到 install/index.php 找到：

{% highlight php %}
if (!check_files()) {
return;
}
{% endhighlight %}

删除或者转为备注：

{% highlight php %}
//if (!check_files()) {
//return;
//}
{% endhighlight %}
