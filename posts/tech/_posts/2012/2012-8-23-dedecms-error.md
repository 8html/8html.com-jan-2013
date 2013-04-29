---
layout: 8html-posts
title: 织梦错误信息（一）
author: caiguanhao
category: tech
tags: DedeCMS
description: 如果织梦出现如下错误： [an error occurred while processing this] 通常表示是没有指定500错误文档。
---
如果织梦出现如下错误： [an error occurred while processing this] 通常表示是没有指定500错误文档。可以在 .htaccess 文件用ErrorDocument 500 /500.php设定。

如果出现类似

500 Server Error

A misconfiguration on the server caused a hiccup. Check the server logs, fix the problem, then try again.

的错误，则可能是因为文件权限问题，可以试试将文件的权限修改为 0755 。
