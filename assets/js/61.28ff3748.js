(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{495:function(t,s,e){"use strict";e.r(s);var a=e(22),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",{staticStyle:{color:"red"}},[t._v("狂神redis视频教程视频教程：https://www.bilibili.com/video/BV1S54y1R7SB ")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("Redis：REmote DIctionary Server（远程字典服务器）")]),t._v(" "),e("p",[t._v("是完全开源免费的，用C语言编写的，遵守BSD协议，是一个高性能的（Key/Value）分布式内存数据 库，基于内存运行，并支持持久化的NoSQL数据库，是当前最热门的NoSQL数据库之一，也被人们称为数据结构服务器")]),t._v(" "),e("p",[t._v("Redis与其他key-value缓存产品有以下三个特点")]),t._v(" "),e("ul",[e("li",[t._v("Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用。")]),t._v(" "),e("li",[t._v("Redis不仅仅支持简单的 key-value 类型的数据，同时还提供list、set、zset、hash等数据结构的存储。")]),t._v(" "),e("li",[t._v("Redis支持数据的备份，即master-slave模式的数据备份。")])]),t._v(" "),e("h2",{attrs:{id:"常用网站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用网站"}},[t._v("#")]),t._v(" 常用网站")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("官网")]),t._v(" "),e("p",[t._v("https://redis.io/")])]),t._v(" "),e("li",[e("p",[t._v("中文网")]),t._v(" "),e("p",[t._v("http://www.redis.cn")])])]),t._v(" "),e("h2",{attrs:{id:"安装redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装redis"}},[t._v("#")]),t._v(" 安装Redis")]),t._v(" "),e("p",[t._v("由于企业里面做Redis开发，99%都是Linux版的运用和安装，几乎不会涉及到Windows版，所以这里就以linux版为主，可以自己去测试玩玩，Windows安装及使用教程：https://www.cnblogs.com/xing-nb/p/12146449.html")]),t._v(" "),e("p",[t._v("linux直接去官网下载：https://redis.io/download")]),t._v(" "),e("p",[t._v("安装步骤（基于当时最新版6.2.1）：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("下载压缩包，放置Linux的目录下 /opt")])]),t._v(" "),e("li",[e("p",[t._v("在/opt 目录下解压，命令 ： "),e("code",[t._v("tar -zxvf redis-6.2.1.tar.gz")])])]),t._v(" "),e("li",[e("p",[t._v("解压完成后出现文件夹：redis-6.2.1")])]),t._v(" "),e("li",[e("p",[t._v("进入目录： "),e("code",[t._v("cd redis-6.2.1")])])]),t._v(" "),e("li",[e("p",[t._v("在 redis-6.2.1 目录下执行 "),e("code",[t._v("make")]),t._v(" 命令")]),t._v(" "),e("p",[t._v("运行make命令时故意出现的错误解析：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装gcc （gcc是linux下的一个编译程序，是c程序的编译工具）")]),t._v(" "),e("p",[t._v("能上网: yum install gcc-c++")]),t._v(" "),e("p",[t._v("版本测试: gcc-v")])]),t._v(" "),e("li",[e("p",[t._v("二次make")])]),t._v(" "),e("li",[e("p",[t._v("Jemalloc/jemalloc.h：没有那个文件或目录")]),t._v(" "),e("p",[t._v("运行 make distclean 之后再make")])]),t._v(" "),e("li",[e("p",[t._v("Redis Test（可以不用执行）")])])])]),t._v(" "),e("li",[e("p",[t._v("如果make完成后执行 "),e("code",[t._v("make install")])])]),t._v(" "),e("li",[e("p",[t._v("查看默认安装目录："),e("code",[t._v("cd /usr/local/bin")])]),t._v(" "),e("p",[t._v("/usr 这是一个非常重要的目录，类似于windows下的Program Files，存放用户的程序")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Redis.assets/image-20210406233231151.png",alt:"image-20210406233231151"}})])]),t._v(" "),e("li",[e("p",[t._v("redis默认不是后台启动，修改文件")]),t._v(" "),e("p",[t._v("一般我们在 /usr/local/bin 目录下，创建myconfig目录，存放我们的配置文件")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" myconfig   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建目录")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拷贝配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/redis-6.2.1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" redis.conf /usr/local/bin "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷一个备份，养成良好的习惯，我们就修改这个文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置保证可以后台应用")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" redis.conf\n/daemonize   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查找")]),t._v("\n:wq    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保存")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Redis.assets/image-20210406234601005.png",alt:"image-20210406234601005"}})]),t._v(" "),e("ul",[e("li",[t._v("A、redis.conf配置文件中daemonize守护线程，默认是NO。")]),t._v(" "),e("li",[t._v("B、daemonize是用来指定redis是否要用守护线程的方式启动。")])]),t._v(" "),e("p",[e("strong",[t._v("daemonize 设置yes或者no区别")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("daemonize:yes")]),t._v(" "),e("p",[t._v("redis采用的是单进程多线程的模式。当redis.conf中选项daemonize设置成yes时，代表开启守护进程模式。在该模式下，redis会在后台运行，并将进程pid号写入至redis.conf选项 pidfile设置的文件中，此时redis将一直运行，除非手动kill该进程。")])]),t._v(" "),e("li",[e("p",[t._v("daemonize:no")]),t._v(" "),e("p",[t._v("当daemonize选项设置成no时，当前界面将进入redis的命令行界面，exit强制退出或者关闭连接工具(putty,xshell等)都会导致redis进程退出。")])])])]),t._v(" "),e("li",[e("p",[t._v("启动测试一下！")])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("启动redis服务")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\nredis-server myconfig/redis.conf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("redis客户端连接")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("   redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("观察地址的变化，如果连接成功，是直接连上的，redis默认端口号 6379")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Redis.assets/image-20210407105934960.png",alt:"image"}})])]),t._v(" "),e("li",[e("p",[t._v("执行ping、get和set操作、退出")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v("\n   PONG\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" get hello\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" hello zhiyuan\n   OK\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" get hello\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhiyuan"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Redis.assets/image-20210407001739971.png",alt:"image-20210407001739971"}})])]),t._v(" "),e("li",[e("p",[t._v("关闭连接")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v("\n   not connected"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])]),t._v(" "),e("p",[t._v("可以使用指令"),e("code",[t._v("ps -ef|grep redis")]),t._v("显示系统当前redis 进程信息，查看开启和关闭连接的变化")]),t._v(" "),e("h2",{attrs:{id:"基础知识说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础知识说明"}},[t._v("#")]),t._v(" 基础知识说明")]),t._v(" "),e("h3",{attrs:{id:"redis压力测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis压力测试"}},[t._v("#")]),t._v(" redis压力测试")]),t._v(" "),e("p",[t._v("Redis-benchmark是官方自带的Redis性能测试工具，可以有效的测试Redis服务的性能。")]),t._v(" "),e("p",[t._v("redis 性能测试工具可选参数如下所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-h")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器主机名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-p")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器端口")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("6379")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-s")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器 socket")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-c")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定并发连接数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("50")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-n")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定请求数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-d")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("以字节的形式指定 SET/GET 值的数据大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-k")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1=keep alive 0=reconnect")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-r")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SET/GET/INCR 使用随机 key, SADD 使用随机值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-P")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通过管道传输  numreq 请求")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-q")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("强制退出 redis。仅显示 query/sec 值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("--csv")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("以 CSV 格式输出")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-l")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("生成循环，永久执行测试")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-t")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅运行以逗号分隔的测试命令列表。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("-I")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Idle 模式。仅打开 N 个 idle 连接并等待。")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试：100个并发连接，100000个请求，检测host为localhost 端口为6379的redis服务器性能")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("  /usr/local/bin\nredis-benchmark -h localhost -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("参考资料：https://www.runoob.com/redis/redis-benchmarks.html")]),t._v(" "),e("h3",{attrs:{id:"基本数据库常识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本数据库常识"}},[t._v("#")]),t._v(" 基本数据库常识")]),t._v(" "),e("p",[t._v("默认16个数据库，类似数组下标从零开始，初始默认使用零号库")]),t._v(" "),e("p",[t._v("查看 redis.conf ，里面有默认的配置")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the number of databases. The default database is DB 0, you can select")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a different one on a per-connection basis using SELECT <dbid> where")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dbid is a number between 0 and 'databases'-1")]),t._v("\ndatabases "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("Select命令切换数据库")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不同的库可以存不同的数据")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("Dbsize查看当前数据库的key的数量")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" DBSIZE\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" keys * "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看具体的key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"counter:__rand_int__"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mylist"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k1"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myset:__rand_int__"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key:__rand_int__"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("p",[t._v("Flushdb：清空当前库")]),t._v(" "),e("p",[t._v("Flushall：清空全部的库")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" FLUSHDB\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"关于redis的单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于redis的单线程"}},[t._v("#")]),t._v(" 关于redis的单线程")]),t._v(" "),e("p",[t._v("注：6.x版本有多线程，一般用不到，单线程足够应对")]),t._v(" "),e("p",[t._v("我们首先要明白，Redis很快！官方表示，因为Redis是基于内存的操作，CPU不是Redis的瓶颈，Redis 的瓶颈最有可能是机器内存的大小或者网络带宽。既然单线程容易实现，而且CPU不会成为瓶颈，那就 顺理成章地采用单线程的方案了！")]),t._v(" "),e("p",[t._v("Redis采用的是基于内存的采用的是单进程单线程模型的 KV 数据库，由C语言编写，官方提供的数据是可以达到100000+的QPS（每秒内查询次数）。这个数据不比采用单进程多线程的同样基于内存的 KV 数据库 Memcached 差！")]),t._v(" "),e("p",[e("strong",[t._v("Redis为什么这么快？")])]),t._v(" "),e("p",[t._v("redis 核心就是 如果我的数据全都在内存里，我单线程的去操作 就是效率最高的，为什么呢，因为 多线程的本质就是 CPU 模拟出来多个线程的情况，这种模拟出来的情况就有一个代价，就是上下文的切 换，对于一个内存的系统来说，它没有上下文的切换就是效率最高的。redis 用 单个CPU 绑定一块内存 的数据，然后针对这块内存的数据进行多次读写的时候，都是在一个CPU上完成的，所以它是单线程处 理这个事。在内存的情况下，这个方案就是最佳方案。")]),t._v(" "),e("p",[t._v("因为一次CPU上下文的切换大概在 1500ns 左右。从内存中读取 1MB 的连续数据，耗时大约为 250us， 假设1MB的数据由多个线程读取了1000次，那么就有1000次时间上下文的切换，那么就有1500ns * 1000 = 1500us ，我单线程的读完1MB数据才250us ,你光时间上下文的切换就用了1500us了，我还不算你每次读一点数据的时间。")])])}),[],!1,null,null,null);s.default=n.exports}}]);