---
layout: 8html-posts
title: Windows下导入数据库引号问题
author: caiguanhao
category: tech
tags: Server
description: Windows下MySQL执行mysql.exe导入SQL数据库时经常会出现引号错误问题： Unknown Command '\"'。这是因为编码不同引起的。解决办法是添加 default-character-set 参数指定编码。
---
Windows下MySQL执行mysql.exe导入SQL数据库时经常会出现引号错误问题： Unknown Command '\"'。这是因为编码不同引起的。解决办法是添加 default-character-set 参数指定编码。

如克隆x2数据库：

``mysqldump.exe -u root -proot x2 | mysql -u root -proot x3``

会出现 Unknown Command '\"' 的错误：

<img src="/uploads/2012/07/unknown_command.png" width="681" height="390" />

添加 ``--default-character-set`` 参数即可，值是SQL的编码，默认都是UTF-8，注意UTF-8在命令中没有一横。

``mysqldump.exe -u root -proot x2 | mysql -u root -proot x3 --default-character-set=utf8``
