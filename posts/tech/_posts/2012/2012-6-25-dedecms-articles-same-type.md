---
layout: 8html-posts
title: 织梦文章页显示同类同栏目其他文章
author: caiguanhao
category: tech
tags: DedeCMS
description: 织梦模板可以用PHP代码在文章页显示同类或者是同栏目的文章列表，本文是在织梦模板文章页显示同类同栏目所有文章解决方案和步骤。
---
织梦模板的语法很糟糕，很难搞，无奈的是在中国的使用者还是很多。在文章页显示同类或者是同栏目的文章列表，如果用PHP代码就很容易。下面是我结合网友的一些解决办法总结出来的，在文章页显示同类同栏目所有文章。

首先获取当前文章的ID用作判定，当ID相同时，该文章在列表中就不用链接，而是粗体显示。因为是在不同函数使用，所以首先在主线上 global $thisid; ，然后赋值，再在后面的函数中再用 global 引用。最多人使用的还是使用 ``{dede:field name=’typeid’ runphp=’yes’} … {/dede:field}`` 结构，最后用 ``@me = $result`` 输出结果。

{% highlight html %}
{dede:php}
global $thisid;
$thisid = $refObj->Fields['id'];
{/dede:php}
{dede:field name='typeid' runphp='yes'}
global $dsql;
global $thisid;
$sql="SELECT id,typeid FROM `dede_archives` where typeid=".@me;
$dsql->SetQuery($sql);
$dsql->Execute();
$result='';
while($row = $dsql->GetArray()) {
if($result!='')$result.=' | ';
$article=GetOneArchive($row['id']);
if ($thisid==$row['id']) {
$result.='<b>'.$article['title'].'</b>';
} else {
$result.='<a href="'.$article['arcurl'].'" title="'.$article['title'].'">'.$article['title'].'</a>';
}
}
@me=$result;
{/dede:field}
{% endhighlight %}

### 多重循环

在这里也说说，有时也会用到的多重循环语句。我尝试了多次，在织梦中使用双重while语句是不行的，如果遇上两个SQL循环，最好还是一个先循环，将数据转为数组，然后一个用for循环，一个用while循环。另外，for的参数不要用到$i，自己定义一个复杂一点的参数，不然输出就会跟别的代码搞乱了。