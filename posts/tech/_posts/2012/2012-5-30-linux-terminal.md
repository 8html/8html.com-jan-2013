---
layout: 8html-posts
title: 玩转Linux终端
author: caiguanhao
category: tech
tags: Linux
description: 终端是Linux中重要的一部分，熟练运用终端各种命令，可以省去使用各种各样的图形软件，提高电脑操作效率。
---
终端是Linux中重要的一部分，熟练运用终端各种命令，可以省去使用各种各样的图形软件，提高电脑操作效率。经过一番资料收集和根据我自己的一些经验，写了一些关于终端的基本内容，而其他特定的命令就不多说了。

### 终端操作

- Ctrl + L 清屏，类似的就是clear命令，重置终端可以用reset
- Ctrl + C 终止当前命令
- Ctrl + Z 暂停运行当前程序，可用fg命令恢复
- Ctrl + D 退出当前Shell，等同输入exit或quit
- Ctrl + R 查找命令历史，输入查找关键字后，再按 Ctrl + R 显示下一个结果
- Shift+PageUp/PageDown 向上/下滚屏
- Ctrl + Shift + = （即Ctrl + +） 放大终端
- Ctrl + – 缩小终端
- 输入 ``!!`` 再次执行上一个命令，同按 方向上 + Enter
- 输入 ``!:0`` 再次执行上次命令的第一部分（按空格区分，引号内空格除外），而 ``!:1-3`` 执行上次命令的第1至第3部分，如此类推。如 ``echo "Hello World" && echo "hello world"`` 之后 ``!:3-4`` 则只会运行 ``echo "hello world"`` 。
- 输入 ``!!:s/hello/hi/`` 将执行上一次命令，但命令中的hello都替换hi。等效于输入 ``^hello^hi`` 。

详尽历史功能，输入man history查看。

序列可以大括号表示，如 ``{a..z}{0..111}`` 等，示例： ``cp ss{.png,2.png}`` 等同于 ``cp ss.png ss2.png``

输入文件名时如果有空格，最好用引号括住文件名，或者是空格前面加上斜杠 \ 。

### 其他不太常用的操作：

- Ctrl + A 当前行的开端，同Home
- Ctrl + E 当前行的末端，同End
- Alt + F 向右移到后一个单词的末端
- Alt + B 向左移到前一个单词的开端
- Ctrl + U 清除所有位于光标左面的文字，复制到终端自己的剪贴板
- Ctrl + K 清除所有位于光标右面的文字，复制到终端自己的剪贴板
- Ctrl + Y 粘贴终端剪贴板的内容
- Ctrl + W 删除最近光标左面的单词
- Ctrl + H 删除光标左面一个字符，同BackSpace
- Ctrl + T 光标左面两个字符位置互换
- Esc + T 光标左面两个单词位置互换
- Esc + . 重复以前命令的最后一个参数

### 附加操作

- 命令 | less ：如果命令得出的结果太长，加上 | less 就可以用上下方向等按键浏览。
- 命令 | grep ：只显示匹配的内容，如 ``ps -e | grep gedit`` 就只显示 gedit 的进程。
- bc 进入bash计算器，也可以这样： ``echo 1/3 | bc -l`` 进行计算。

### 其他：

- ``sudo shutdown now`` 立即关机
- ``sudo shutdown -r now`` 立即重启
- ``gnome-session-save --force-logout`` 注销

就说这么多，下次有机会再继续。
