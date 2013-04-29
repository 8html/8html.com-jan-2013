---
layout: 8html-posts
title: 用正则表达式获取数组
author: caiguanhao
category: tech
tags: RegEx
description: 当遇到大量数据要处理的时候，可以运用JavaScript的正则表达式在Chrome的Console里面快速完成专业正则表达式的软件实现的效果。
---
当遇到大量数据要处理的时候，而且你又熟悉JavaScript的正则表达式用法的话，可以在Chrome的Console里面快速完成任务，而无需专门下一个正则表达式的软件来用。网上也有很多正则表达式的在线工具，但是自由度不足，有时得出的结果还要自己另外动手处理。而自己动手做一个网页也未免太麻烦，最好还是在浏览器的Console里面完成。下面将以群发QQ邮件作为例子。

<img class="alignright" src="/uploads/2012/06/contact-list.png" width="200" height="365" />

在一个QQ群中，我想群发邮件，又因为我不想发给其中一两个人，我不能用群邮件，只能逐一发送。逐一右击获取QQ号是可以，但是太慢了。最好几步就可以完成输入几十个人的邮件地址。

1. 首先进入改QQ群的主页，进入通讯录，然后得出一个含QQ号码的列表，然后复制你要的人的信息。

2. 粘贴到Chrome的地址栏，然后再全选剪切，将原本多行的数据转成单行。

3. 然后按F12选Console，输入如下示例：

<img src="/uploads/2012/06/chrome-console-result.png" width="506" height="166" />

其中 a 是复制的内容，初始化 i 为 0，c 为空，用正则表达式获取数字串（ID），加上@qq.com再累加。最后一个c告诉Console输出c的内容。

复制 c 的内容粘贴到邮件的收件人一栏即可。其实浏览器的Console很好用，只是一直没习惯用上。
