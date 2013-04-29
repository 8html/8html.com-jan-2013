---
layout: 8html-posts
title: Discuz!帖子赞好按钮开发简述
author: caiguanhao
category: tech
tags: PHP
description: 很多网站的评论区都有个“赞好”（Like）按钮，得到较多人赞好的帖子将优先显示，而国内的网站有用其他词语，如顶、亮了等等。
---
很多网站的评论区都有个“赞好”（Like）按钮，得到较多人赞好的帖子将优先显示，而国内的网站有用其他词语，如顶、亮了等等。貌似Discuz! X 2.5没有这个功能，网上也没有人开放源代码。最近我帮一个论坛开发了这个功能，在这里简单介绍开发思路，讲思路比直接放出代码更能锻炼开发能力。

因为我之前极少接触Discuz!，首先我大概翻阅了一下源代码，寻找有没有相似的功能。我注意到了论坛有一个辩论功能，用户在辩论帖子中可以投票，但只能投一次票，用Google Chrome的开发者工具监视XHR变化，然后很快就可以定位到 forum.php?mod=misc&action=debatevote … ，了解源代码最重要的还是源文件的全文搜索，搜索debatevote找到了 source/module/forum/forum_misc.php 这个文件，然后参照 ``elseif($_GET['action'] == 'debatevote')`` 一段进行仿写。

代码首先检查帖子状态、用户登录状态、帖子是不是回复贴和是否已经赞好过，接着可以更新数据库字段，最后返回成功信息和一段JS代码，更新网页上赞好按钮的状态和赞好的人数。

当然要为数据库表添加两个新的字段，一个是likes，整数，默认为0；另外一个是likedby，根据不同论坛可能TEXT不够用：

``ALTER TABLE `pre_forum_post` ADD `likes` MEDIUMINT UNSIGNED NOT NULL DEFAULT '0',
ADD `likedby` TEXT NOT NULL``

记住尽量模仿原有的辩论或者其他相似功能的做法，这样可以保持跟Discuz!原有代码的一致性。而修改模板文件 viewthread_node.htm 很简单，这里不多说了。接着主要说一下优先显示的问题。

一开始我习惯地修改了模板的viewthread.htm，打算想增加多一个loop循环，如（注``fetch_all_by_likes``是我在 source/class/table/table_forum_post.php自建的一个public function）：

{% highlight html %}
<!--{eval $posts_by_most_likes = C::t('forum_post')->fetch_all_by_likes(0, $_G['tid'], 5);}-->
<!--{loop $posts_by_most_likes $post}-->
<div id="post_$post[pid]">
<!--{subtemplate forum/viewthread_node}-->
</div>
<!--{/loop}-->
{% endhighlight %}

发现这种做法不行，输出的页面缺少很多信息。你用var_dump就会发现自己的数组有27或28项，而原有的有一百多项。经过排查，发现28个项目的数组经过 source/module/forum/forum_viewthread.php 这个网页处理后就会变成一百多项。于是就想到不如直接更改这个文件。

在输出给 viewthread.htm 处理前，我就把需要优先显示的项目插入到数组，然后只需在 viewthread.htm 作一些简单的判定显示就行了。通过我的调试，在 forum_viewthread.php 里面只需在 ``foreach($postarr as $post)`` 这个循环里面插入优先显示的项目（``foreach(C::t('forum_post')->fetch_all_by_likes(0, $_G['tid'], 5) as $post)``）就可以了。

还有其他很多细致的判定就不一一说了。

<img src="/uploads/2012/06/discuz_like_button.png" width="451" height="95" />
