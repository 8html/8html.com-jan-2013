---
layout: 8html-posts
title: Mibew添加表情功能
author: caiguanhao
category: tech
tags: PHP
description: Mibew Web Messenger是一个很好的开源网页客服系统，为了更迎合用户的需要，故增添一个小功能：添加表情。
---
Mibew Web Messenger是一个很好的开源网页客服系统，为了更迎合用户的需要，故增添一个小功能：添加表情。网上有很多Smiley图标，作为在中国的使用者，最熟悉不过的就是QQ默认表情，网上有这些GIF动态表情下载，你也可以在[这里](/uploads/2012/08/emotions.zip)下载，有105个表情。

表情功能原理很简单，首先当然要在聊天框中加入可以选择表情的按钮（这里不详细说，用jQuery很容易实现吧！），然后用诸如 [img=qq] 等自定代码代表各自表情，最后在 libs/chat.php 的prepare_html_message函数中增添正则表达式替换这些自定代码。如：

``$escaped_text = preg_replace('/\[img=(.+?)\]/', '<img alt="[img=$1]" title="[img=$1]" src="/webim/emotions/$1.gif" width="24" height="24" />', $escaped_text);``

其实要更改的就是 libs/chat.php 和当前使用外观的 templates/chat.tpl 和 chat.css 文件。

<img src="/uploads/2012/08/emotions.png" width="640" height="480" />
