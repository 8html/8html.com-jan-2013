---
layout: 8html-posts
title: 织梦修改文章命名规则
author: caiguanhao
category: tech
tags: DedeCMS
description: 织梦的规则有时很让人苦恼，命名规则中的替代符往往包含了不止一个参数，如{pinyin}就包含了拼音和文章ID，设计的人永远不会去单独分开。
---
织梦的规则有时很让人苦恼，命名规则中的替代符往往包含了不止一个参数，如{pinyin}就包含了拼音和文章ID，设计的人永远不会去单独分开。如果想修改这个错误的地方，可以到 include/helpers/channelunit.helper.php 查找 {pinyin} 进行修改。
