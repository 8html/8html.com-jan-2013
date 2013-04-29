# 8HTML 工作室 新网站 (2013)

*Web Design by caiguanhao at 8HTML <caiguanhao@gmail.com>.*
*Copyright (C) 2013 caiguanhao, 8HTML.com, GDKY.net and others.*
*Powered by Jekyll, the blog-aware, static site generator in Ruby.*

## 文件

**网页静态文件**

 * /css - 样式
 * /images - 图像
 * /scripts - JavaScript脚本

**Jekyll模版**

 * /pages - 单页
 * /posts - 文章页
 * /_layouts - 模版
 * /_includes - 包含文件，通常是模版中的重复部分
 * /_plugins - 生成静态网站时使用的插件
 * /_site - 输出静态网站的目录
 * _config.yml - Jekyll配置文件

## 插件

**category_pagination.rb**

解除了Jekyll文章列表循环只能在index.html上执行的限制。文章从此按照目录结构存放，如分类 tech 的文章放在 /posts/tech/ 下。分类页也会自动生成分页。如果分类不存在，则显示所有文章。由于循环变成可能，所以可以输出 ATOM feed 和用于快速搜索文章的 JSON 文件。

**tagging.rb**

生成 tag 页和对应 feed 页。

**liquid_extend.rb**

用来扩展 Liquid 的 Filter 。

## 注意

1. 因为分类有中英文的转换，所以要到 /_includes/categories.html 中设置。
2. 不同页面的标题设置要到 /_includes/titles.html 。