---
layout: 8html-posts
title: 用eSpeak粤语阅读中文网页
author: caiguanhao
category: tech
tags: Linux
description: eSpeak是一个小型的开源语音合成软件，用eSpeak阅读网页，可以为有视觉障碍的人提供一个无障碍的浏览网页环境。eSpeak可以将语音内容输出成为WAV文件，再利用其他软件即可压缩成为可以在网页上播放的格式，如mp3和ogg。
---
eSpeak是一个小型的开源语音合成软件，用eSpeak阅读网页，可以为有视觉障碍的人提供一个无障碍的浏览网页环境。eSpeak可以将语音内容输出成为WAV文件，再利用其他软件即可压缩成为可以在网页上播放的格式，如mp3和ogg。

默认的eSpeak是不能用粤语读中文，要另外下载粤语字典规则文件。首先可以到官网的附加资料页（http://espeak.sourceforge.net/data/）下载粤语文字和读音字典文件（zhy_list.zip）。然后下载eSpeak的源代码，把dictsource文件夹解压出来（可以解压到~/dictsource），把刚才下载的zhy_list.zip里面的zhy_list也解压到dictsource文件夹。在终端cd到dictsource文件夹，然后运行 sudo espeak --compile=zh-yue 就完成添加粤语的功能。

下面是用粤语读8HTML的首页，wget获取网页源代码，用-O -输出到stdout，第一段sed去除源代码的script标记，第二段sed去除其他所有HTML标记，第三段删除所有空白，第四段将Windows换行转为Linux换行，第五段将多行转为单行，最后一段是用eSpeak读出所有文字内容，-v是语音选择，粤语是zh-yue，普通话是zh（不过我感觉eSpeak的普通话发音很差），-s是语音速度，范围是80～390，-x就顺便输出音标。

{% highlight bash %}
$ wget -qO - http://www.8html.com/ | sed '/<script/,/<\/script>/d' | 
sed 's/<[^>]*>//g' | sed 's/^[ \t]*//;s/[ \t]*$//' | sed 's/.$//' | 
sed '/./,/^$/!d' | espeak -v zh-yue -s 120 -x
{% endhighlight %}

<img src="/uploads/2012/05/read_8html.png" width="585" height="389" />

用 -w 8html.wav 输出WAV文件，但是会生产多个文件，用 sox 8html* 8html_one.wav 合并，最后用soundconverter转为mp3或其他格式：

[下载8html.mp3](/uploads/2012/05/8html.mp3)

顺带提一下，有很多机器上的eSpeak运行时也会出现 bt_audio_service_open: connect() failed: Connection refused (111) 的错误信息，网上的解决办法是把 bluez-alsa 这个软件删除（sudo apt-get remove bluez-alsa）。