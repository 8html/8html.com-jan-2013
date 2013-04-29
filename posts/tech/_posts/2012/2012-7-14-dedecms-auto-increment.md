---
layout: 8html-posts
title: 织梦数据库内容表清空与重置
author: caiguanhao
category: tech
tags: DedeCMS
description: 如果要为新的织梦系统基于旧的数据库配置新的数据库，不是全新安装的话，就要清空新的数据库内容，而且最好为有自动编号（AUTO INCREMENT）的字段重置为1。
---
如果要为新的织梦系统基于旧的数据库配置新的数据库，不是全新安装的话，就要清空新的数据库内容，而且最好为有自动编号（AUTO INCREMENT）的字段重置为1。其中可以清空的表有：addonarticle、arccache、archives、arcmulti、arctiny、arctype、uploads、vote等。相关的含有自动编号字段的表有：arctiny、arctype、uploads。

下面是对应的SQL语句，需加上前缀：

### 清空表

{% highlight sql %}
TRUNCATE TABLE `_addonarticle`;
TRUNCATE TABLE `_arccache`;
TRUNCATE TABLE `_archives`;
TRUNCATE TABLE `_arcmulti`;
TRUNCATE TABLE `_arctiny`;
TRUNCATE TABLE `_arctype`;
TRUNCATE TABLE `_flink`;
TRUNCATE TABLE `_uploads`;
TRUNCATE TABLE `_vote`;
{% endhighlight %}

### 重置

{% highlight sql %}
ALTER TABLE `_arctiny` AUTO_INCREMENT=1;
ALTER TABLE `_arctype` AUTO_INCREMENT=1;
ALTER TABLE `_flink` AUTO_INCREMENT=1;
ALTER TABLE `_uploads` AUTO_INCREMENT=1;
{% endhighlight %}
