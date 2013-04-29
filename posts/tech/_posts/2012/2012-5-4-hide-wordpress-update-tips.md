---
layout: 8html-posts
title: 如何关闭WordPress更新提示
author: caiguanhao
category: tech
tags: WordPress
description: 如果你有自定过WordPress，更改过WordPress的代码，那么我建议你如非必要也不要进行更新，即使要去更新也请记下之前改过代码的地方，更新完后再补回代码。更新将覆盖之前所有更改，目前WordPress在更新文件前还没有检测是否改动过的步骤。
---
如果你有自定过WordPress，更改过WordPress的代码，那么我建议你如非必要也不要进行更新，即使要去更新也请记下之前改过代码的地方，更新完后再补回代码。更新将覆盖之前所有更改，目前WordPress在更新文件前还没有检测是否改动过的步骤。

<img src="/uploads/2012/05/wordpress-update-on.png" />

为避免一不小心（或者是被其他管理员）按了更新的话，最好就是关闭了更新提示。其实WordPress Plugins上面就有专门关闭WordPress核心、插件和主题更新提示的插件，都是由John Blackbourn编写的，下载回来看其源代码就知道是几行简单的代码。

如果不想安装太多插件的话，大可以把这些代码全部放到主题的functions.php里面。下面分别是关闭核心、插件和主题更新提示的代码：

{% highlight php %}
<?php
// Disable WordPress Core Updates
// 2.3 to 2.7:
add_action( 'init', create_function( '$a', "remove_action( 'init', 'wp_version_check' );" ), 2 );
add_filter( 'pre_option_update_core', create_function( '$a', "return null;" ) );
// 2.8 to 3.0:
remove_action( 'wp_version_check', 'wp_version_check' );
remove_action( 'admin_init', '_maybe_update_core' );
add_filter( 'pre_transient_update_core', create_function( '$a', "return null;" ) );
// 3.0:
add_filter( 'pre_site_transient_update_core', create_function( '$a', "return null;" ) );

// Disable WordPress Plugin Updates
// 2.3 to 2.7:
add_action( 'admin_menu', create_function( '$a', "remove_action( 'load-plugins.php', 'wp_update_plugins' );") );
// Why use the admin_menu hook? It's the only one available between the above hook being added and being applied
add_action( 'admin_init', create_function( '$a', "remove_action( 'admin_init', 'wp_update_plugins' );"), 2 );
add_action( 'init', create_function( '$a', "remove_action( 'init', 'wp_update_plugins' );"), 2 );
add_filter( 'pre_option_update_plugins', create_function( '$a', "return null;" ) );
// 2.8 to 3.0:
remove_action( 'load-plugins.php', 'wp_update_plugins' );
remove_action( 'load-update.php', 'wp_update_plugins' );
remove_action( 'admin_init', '_maybe_update_plugins' );
remove_action( 'wp_update_plugins', 'wp_update_plugins' );
add_filter( 'pre_transient_update_plugins', create_function( '$a', "return null;" ) );
// 3.0:
remove_action( 'load-update-core.php', 'wp_update_plugins' );
add_filter( 'pre_site_transient_update_plugins', create_function( '$a', "return null;" ) );

// Disable WordPress Theme Updates
// 2.8 to 3.0:
remove_action( 'load-themes.php', 'wp_update_themes' );
remove_action( 'load-update.php', 'wp_update_themes' );
remove_action( 'admin_init', '_maybe_update_themes' );
remove_action( 'wp_update_themes', 'wp_update_themes' );
add_filter( 'pre_transient_update_themes', create_function( '$a', "return null;" ) );
// 3.0:
remove_action( 'load-update-core.php', 'wp_update_themes' );
add_filter( 'pre_site_transient_update_themes', create_function( '$a', "return null;" ) );
{% endhighlight %}

<img src="/uploads/2012/05/wordpress-update-off.png" />
