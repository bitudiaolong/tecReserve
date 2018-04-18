##common.js中集成一些常用的工具类
###1.1 cookie
***（1）setCookie('key','value',time);设置cookie，有效期time单位：天
***（2）getCookie('key');取值
***（3）clearCookie('key');清楚cookie
###1.2 地址取参
***（1）getQueryString(参数名)
###1.3 时间
***（1）myDate(format);参数format值：yyyy-mm-dd hh:mm:ss、yyyy-mm-dd、HH:mm:ss、timestamp(时间戳)
###1.4 跳页面
***（1）$$.toPage(url,type);参数type值为“open”，使用window.open()，否则使用location.href
###1.5 终端判断
***（1）$$.terminal(type);参数type值为weixin||weChat||wechat，ios||iOS||IOS，android||Android
###1.6 正则验证
***（1）$$.regTest(data，type);参数type值默认phone，验证手机号、否则验证身份证
