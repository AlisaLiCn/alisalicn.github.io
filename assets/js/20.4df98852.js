(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{328:function(e,t,s){"use strict";s.r(t);var a=s(4),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("一个微信小程序版的网易云音乐播放器练习demo")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AlisaLiCn/mp-music",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),s("OutboundLink")],1),e._v("地址")]),e._v(" "),s("h2",{attrs:{id:"主要功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[e._v("#")]),e._v(" 主要功能")]),e._v(" "),s("ul",[s("li",[e._v("推荐音乐")]),e._v(" "),s("li",[e._v("云音乐热歌榜")]),e._v(" "),s("li",[e._v("搜索")]),e._v(" "),s("li",[e._v("歌曲播放页面\n"),s("ul",[s("li",[e._v("歌词滚动")]),e._v(" "),s("li",[e._v("播放进度条")]),e._v(" "),s("li",[e._v("点击跳转进度")]),e._v(" "),s("li",[e._v("拖动跳转进度")])])])]),e._v(" "),s("h2",{attrs:{id:"搭建过程记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建过程记录"}},[e._v("#")]),e._v(" 搭建过程记录")]),e._v(" "),s("ul",[s("li",[e._v("还是用"),s("a",{attrs:{href:"http://mpvue.com/mpvue/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mpvue"),s("OutboundLink")],1),e._v("来初始化，vue的写法，比较顺手。"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nvue init mpvue/mpvue-quickstart mp-music\n\ncd mp-music\nnpm install\n\n")])])])]),e._v(" "),s("li",[e._v("HTTP请求，用的"),s("a",{attrs:{href:"https://wendux.github.io/dist/#/doc/flyio/readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("flyio"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[e._v("相关的API，使用的是大佬整理维护的Nodejs版本，戳"),s("a",{attrs:{href:"https://github.com/Binaryify/NeteaseCloudMusicApi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),s("OutboundLink")],1),e._v("可查看，自己简单部署了一下，Nginx配置如下："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n  server{\n    listen  80;\n    server_name example.com;\n\n    rewrite ^(.*) https://$host$1 permanent;\n  }\n\n  server {\n    listen 443 ssl;\n    server_name example.com;\n    ssl on;\n\n    ssl_certificate example.com.pem;\n    ssl_certificate_key example.com.key;\n\n    ssl_session_cache    shared:SSL:1m;\n    ssl_session_timeout  5m;\n\n    location / {\n      proxy_pass http://127.0.0.1:3000;\n    }\n\n    ssl_ciphers  HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers  on;\n  }\n\n")])])])]),e._v(" "),s("li",[e._v("安装stylus，添加loader："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nnpm install stylus stylus-loader  --save-dev\n\n// webpack.base.conf.js\n{\n  test: /\\.styl$/,\n  loader: ['url-loader', 'css-loader', 'stylus-loader'],\n}\n\n")])])])]),e._v(" "),s("li",[e._v("app.json中定义tabBar；")]),e._v(" "),s("li",[e._v("使用微信小程序的"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),s("OutboundLink")],1),e._v("，创建音频实例："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n  wx.createInnerAudioContext()\n\n")])])])]),e._v(" "),s("li",[e._v("歌词解析：用了个开源的lyric-parser，但解析网易云音乐歌词存在bug，可以参考issues中讨论的解决方式，最后又自行增加了一个destroy()方法在离开页面时销毁实例："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n   "lyric-parser": "git+https://github.com/AlisaLiCn/lyric-parser.git",\n\n')])])])]),e._v(" "),s("li",[e._v("进度跳转："),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n  // 音频跳转，单位秒，小数点需要保留在3位以内，不然好像不生效\n  innerAudioContext.seek(time)\n\n  // 歌词跳转，单位毫秒\n  lyric.seek(time * 1000)\n\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"构建命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建命令"}},[e._v("#")]),e._v(" 构建命令")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开发时构建")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n\n\n")])])]),s("h2",{attrs:{id:"预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[e._v("#")]),e._v(" 预览")]),e._v(" "),s("p",[e._v("构建完成后，使用微信开发者工具打开，也可使用手机扫码预览")]),e._v(" "),s("p",[e._v("截图预览：\n"),s("img",{attrs:{src:"play-list.jpg",alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:"play-search.jpg",alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:"play-detail.jpg",alt:""}})]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AlisaLiCn/mp-music",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),s("OutboundLink")],1),e._v("地址")])])}),[],!1,null,null,null);t.default=n.exports}}]);