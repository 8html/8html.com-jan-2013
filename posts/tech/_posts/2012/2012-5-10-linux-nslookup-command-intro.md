---
layout: 8html-posts
title: nslookup的用法简介(Linux)
author: caiguanhao
category: tech
tags: Linux
description: 有时更新了DNS设置，想检查有没有生效，这个时候最好使用`nslookup`来检查。可以在终端里面先输入`nslookup`，按回车，再输入命令，也可以一行过输入。
---
有时更新了DNS设置，想检查有没有生效，这个时候最好使用`nslookup`来检查。可以在终端里面先输入`nslookup`，按回车，再输入命令，也可以一行过输入。

    $ nslookup
    > set type=NS
    > 8html.com

等同于

    nslookup -type=NS 8html.com

`type` 也可以写成 `ty` 、`q` 和 `querytype` ，默认类型是 `A` 。根据 `RFC-1035 3.2.2. TYPE values` ([http://www.ietf.org/rfc/rfc1035.txt](http://www.ietf.org/rfc/rfc1035.txt)) ，`type`（类型）有 `A, NS, MD, MF, CNAME, SOA, MB, MG, MR, NULL, WKS, PTR, HINFO, MINFO, MX, TXT` 。

`nslookup`还可以进行反向解析查询，如 `nslookup 127.0.0.1` 就会返回 `localhost` 。

参数 `debug` 和 `nodebug` 分别是开启和关闭 `debug` 模式。

参数 `d2` 和 `nod2` 分别是开启和关闭详细 `debug` 模式。

参数 `ignoretc` 和 `noignoretc` 分别是忽略和不忽略数据包截断错误。

参数 `defname` 和 `nodefname` 分别是开启和关闭自动添加域名功能，默认开启，用于方便查询同一域名下多个子域名。比如， `set domain=google.com` 后，再输入 `drive` 就等同查询 `drive.google.com` 。可以通过 `set all` 找到 `srchlist` 就是当前的 domain 。

    $ nslookup
    > set domain=google.com
    > drive

其他可参阅 [http://linux.die.net/man/1/nslookup](http://linux.die.net/man/1/nslookup) 。
