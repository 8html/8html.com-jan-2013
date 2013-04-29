---
layout: 8html-posts
title: 织梦导入MySQL 4.1出错解决办法
author: caiguanhao
category: tech
tags: DedeCMS
description: 当织梦5.7的数据库导入MySQL 4.1时通常会出现两大错误，一是VARCHAR的大小问题，二是创建索引的问题。
---
当织梦5.7的数据库导入MySQL 4.1时通常会出现两大错误，一是VARCHAR的大小问题，二是创建索引的问题。

一、第一个错误是关于VARCHAR大小的错误，根据MySQL官网，MySQL 5.0.3之前的版本VARCHAR的长度是0到255，而5.0.3及之后的版本VARCHAR的长度可以是0到65,535。

{% highlight sql %}
CREATE TABLE IF NOT EXISTS `8html_advancedsearch` (
`mid` INT( 11 ) NOT NULL ,
`maintable` VARCHAR( 256 ) NOT NULL DEFAULT ,
`mainfields` TEXT,
`addontable` VARCHAR( 256 ) DEFAULT NULL ,
`addonfields` TEXT,
`forms` TEXT,
`template` VARCHAR( 256 ) NOT NULL DEFAULT ,
UNIQUE KEY `mid` ( `mid` )
) ENGINE = MYISAM DEFAULT CHARSET = utf8;
{% endhighlight %}

MySQL said:

``#1074 – Column length too big for column ‘maintable’ (max = 255); use BLOB or TEXT instead``

解决办法：为了方便在文本编辑器中全文替换 VARCHAR(256) 为 VARCHAR(255) 。

二、根据MySQL官网CREATE INDEX的语法，USING BTREE属于index_type，在5.0中可以放在字段名前或者后，而4.1只能放在前面。

{% highlight sql %}
CREATE TABLE IF NOT EXISTS `8html_purview` (
`mid` MEDIUMINT( 8 ) DEFAULT ’0′,
`typeid` SMALLINT( 5 ) DEFAULT ’0′,
`rank` SMALLINT( 6 ) DEFAULT NULL ,
`pkey` VARCHAR( 30 ) CHARACTER SET latin1 NOT NULL ,
`pvalue` TEXT NOT NULL ,
KEY `pkey` ( `pkey` ) USING BTREE
) ENGINE = MYISAM DEFAULT CHARSET = utf8;
{% endhighlight %}

MySQL said:

``#1064 – You have an error in your SQL syntax; check the manual that corresponds to your
MySQL server version for the right syntax to use near ‘USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8′ at line 7``

解决办法：将 ``KEY `pkey` ( `pkey` ) USING BTREE`` 改成 ``KEY `pkey` USING BTREE ( `pkey` )``。
