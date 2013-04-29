---
layout: 8html-posts
title: Linux:Wine下如何安装IE6
author: caiguanhao
category: tech
tags: Linux
description: 在网页测试通常情况下，在Windows可以用IETester，在Linux上可以用Wine+IEs 4 Linux获得近乎原装的IE6。
---
大部分中国网民还停留在IE6（Internet Explorer 6）的层面上，作为一个中国网页设计师，自然不能放弃这个浏览器。通常情况下，在IE6下面网页测试没问题的话，在其他的流行浏览器上就不会有问题。Windows上有IETester代为测试，方便很多。而在Linux环境下，用Wine + IEs 4 Linux可以获得近乎原装的IE6。

下面以 Debian/Ubuntu 作为例子。首先，安装最新版Wine。

$ sudo add-apt-repository ppa:ubuntu-wine/ppa
$ sudo apt-get update
// 最好用 sudo apt-cache search wine 查找一下你能安装 wine 的什么版本，尽量装最新版
$ sudo apt-get install wine1.3

获取IEs 4 Linux:
$ wget http://www.stchman.com/tools/ies4linux-latest.tar.gz

解压：
$ tar -zxvf ies4linux-latest.tar.gz

完成后，进入ies4linux-开头的目录
$ cd ies4linux-*

运行 ies4linux 开始安装
$ ./ies4linux

然后会问你要不要装IE 5.5 和 5.0，接着就会让你选择语言，简体中文输入CN即可，接着配置Flash，然后开始下载所需文件，不久就安装好了。完成后，桌面有个新增加的图标，右击 Properties > Permissions > 选Allow execute file as program > 确定即可用。

<img src="/uploads/2012/05/ies4linux.png" width="300" height="205" />
