---
layout: 8html-posts
title: 批量生成Jekyll企业网站
author: caiguanhao
category: tech
tags: Jekyll
description: Jekyll 适合做静态 blog ，但也可以做产品不是特别多的企业网站。
---
Jekyll 适合做静态 blog ，但也可以做产品不是特别多的企业网站，特别是自从 1.0 发布以后更加方便，我这里的不多给个参考数据：最近的一个包含约 200 个产品的企业站生成全站的时间大概是 8 秒，如果太多更新起来会有点不方便。当然在修改网页的时候只保留少许产品，改完再放回去。需要注意的是，文章图片和其他大文件一定要另外放（如 CDN ），因为 Jekyll 每次生成，遇到这些文件都是复制，这样生成需要更多时间。

[近期做的一个项目](https://github.com/qnn/qnn-agent-sites)包含 80 多个网站，特点是有[四个模板](https://github.com/qnn/template)选择，各个网站除了名称、联系方式和部分图片外，其他内容如产品内容是一样的。利用 Jekyll 建站将更加方便，因为无需数据库，而且基本不用怎样配置服务器。

四个模板分别装进了不同的目录，除了这四个目录外其他的文件要求不能包含某一模板的特性，要求尽可能地一致。对于 JS、CSS 就好办，只要创建一个“空壳”文件全部用模板中设定好的 stylesheets 版式（ stylesheets.css ）即可：

    ---
    layout: stylesheets
    permalink: /css/layout_stylesheets.css
    ---

各网站不同的部分都写入了配置文件，因为配置文件是 YAML ，除了字符串和数组外，还可以直接放 HTML 入去。所以一开始要设置好 ``_config.yml`` 的格式。

源码用 git 管理，也存放到 GitHub 上面，方便其他不熟悉 git 命令的人直接在上面修改。原本想每个网站开一个仓库存放代码，后来简化到两个仓库即可完成：一个包含四个模板、源文件的仓库和另外一个存放每个网站的配置文件。因为批量生产的关系，自然联想到用 Shell 脚本编写自动程序。

用一个文件列出所有网站，然后生成配置文件，接着每个网站克隆模板（写到这里我才想到怎么不用同一个目录呢？回去再调），然后指定配置文件生成静态网站。也费了不少时间在处理 Shell 中同时执行多个 Jekyll 建站命令，以加快速度。另外我也写了一个自动程序，根据联系地址生成坐标。

下面是生成这个网站的基本流程

![QNN Agent Websites Flow Chart](https://raw.github.com/qnn/misc/master/images/flowchart-qnn-agent-websites.png)

因为网速的问题，放弃了在本地生成然后直接 push 上服务器的想法。在服务器上安装 Jekyll 直接生成。后期也可以做一个简单的网页程序，不熟悉命令的人可以上网页点按钮即可执行建站命令。

服务器安装了 mosh、ruby、jekyll、nginx、git。
