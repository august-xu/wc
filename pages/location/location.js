//location.js
//获取应用实例
var app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
   
  },
  onLoad: function () {
    var that = this;
    var article = `

<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">


        <script nonce="962845775" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>
        
<script nonce="962845775" type="text/javascript">
    var biz = "MzA3NTE5MzQzMA=="||"";
    var sn = "e4681ee766499e2e1413f207320b6fd0" || ""|| "";
    var mid = "2655000950" || ""|| "";
    var idx = "1" || "" || "";
    window.__allowLoadResFromMp = true; 
    
    </script>
<script nonce="962845775" type="text/javascript">
var page_begintime=+new Date,is_rumor="",norumor="";
1*is_rumor&&!(1*norumor)&&biz&&mid&&(document.referrer&&-1!=document.referrer.indexOf("mp.weixin.qq.com/mp/rumor")||(location.href="http://mp.weixin.qq.com/mp/rumor?action=info&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"#wechat_redirect")),
document.domain="qq.com";
</script>
<script nonce="962845775" type="text/javascript">
var MutationObserver=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,isDangerSrc=function(t){
if(t){
var e=t.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(e&&!/qq\.com(\:8080)?$/.test(e[1])&&!/weishi\.com$/.test(e[1]))return!0;
}
return!1;
},ishttp=0==location.href.indexOf("http://");
-1==location.href.indexOf("safe=0")&&ishttp&&"function"==typeof MutationObserver&&"mp.weixin.qq.com"==location.host&&(window.__observer_data={
count:0,
exec_time:0,
list:[]
},window.__observer=new MutationObserver(function(t){
window.__observer_data.count++;
var e=new Date,r=[];
t.forEach(function(t){
for(var e=t.addedNodes,o=0;o<e.length;o++){
var n=e[o];
if("SCRIPT"===n.tagName){
var i=n.src;
isDangerSrc(i)&&(window.__observer_data.list.push(i),r.push(n)),!i&&window.__nonce_str&&n.getAttribute("nonce")!=window.__nonce_str&&(window.__observer_data.list.push("inlinescript_without_nonce"),
r.push(n));
}
}
});
for(var o=0;o<r.length;o++){
var n=r[o];
n.parentNode&&n.parentNode.removeChild(n);
}
window.__observer_data.exec_time+=new Date-e;
}),window.__observer.observe(document,{
subtree:!0,
childList:!0
})),function(){
if(-1==location.href.indexOf("safe=0")&&Math.random()<.01&&ishttp&&HTMLScriptElement.prototype.__lookupSetter__&&"undefined"!=typeof Object.defineProperty){
window.__danger_src={
xmlhttprequest:[],
script_src:[],
script_setAttribute:[]
};
var t="$"+Math.random();
HTMLScriptElement.prototype.__old_method_script_src=HTMLScriptElement.prototype.__lookupSetter__("src"),
HTMLScriptElement.prototype.__defineSetter__("src",function(t){
t&&isDangerSrc(t)&&window.__danger_src.script_src.push(t),this.__old_method_script_src(t);
});
var e="element_setAttribute"+t;
Object.defineProperty(Element.prototype,e,{
value:Element.prototype.setAttribute,
enumerable:!1
}),Element.prototype.setAttribute=function(t,r){
"SCRIPT"==this.tagName&&"src"==t&&isDangerSrc(r)&&window.__danger_src.script_setAttribute.push(r),
this[e](t,r);
};
}
}();
</script>

        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="962845775" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd'; 
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
        window.appmsg_token = "";
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

<script nonce="962845775" type="text/javascript">
        window.__moon_report_uin = "0";
            window.no_moon_ls = 0;
    </script>
        <title>叙利亚，别哭！活下去！</title>
        
<style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}body{-webkit-touch-callout:none;font-family:-apple-system-font,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-color:#f3f3f3;line-height:inherit}body.rich_media_empty_extra{background-color:#fff}body.rich_media_empty_extra .rich_media_area_primary:before{display:none}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:16px}*{margin:0;padding:0}a{color:#607fa6;text-decoration:none}.rich_media_inner{font-size:16px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.rich_media_area_primary{position:relative;padding:20px 15px 15px;background-color:#fff}.rich_media_area_primary.voice{padding-top:66px}.rich_media_area_primary:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);top:auto;bottom:-2px}.rich_media_area_primary .original_img_wrp{display:inline-block;font-size:0}.rich_media_area_primary .original_img_wrp .tips_global{display:block;margin-top:.5em;font-size:14px;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.rich_media_area_extra{padding:0 15px 0}.rich_media_title{margin-bottom:10px;line-height:1.4;font-weight:400;font-size:24px}.icon_original_tag_primary{display:inline-block;padding:1px .65em;margin-top:-0.2em;vertical-align:middle;line-height:1.4;font-size:12px;border-top-left-radius:.85em 50%;-moz-border-radius-topleft:.85em 50%;-webkit-border-top-left-radius:.85em 50%;border-top-right-radius:.85em 50%;-moz-border-radius-topright:.85em 50%;-webkit-border-top-right-radius:.85em 50%;border-bottom-left-radius:.85em 50%;-moz-border-radius-bottomleft:.85em 50%;-webkit-border-bottom-left-radius:.85em 50%;border-bottom-right-radius:.85em 50%;-moz-border-radius-bottomright:.85em 50%;-webkit-border-bottom-right-radius:.85em 50%;border:1px solid #9e9e9e;color:#8c8c8c}.icon_original_tag_primary.title_tag{background-color:#e94442;border-color:#d04b4e;color:#fff;margin-bottom:.5em;padding:2px .65em;border-top-left-radius:.95em 50%;-moz-border-radius-topleft:.95em 50%;-webkit-border-top-left-radius:.95em 50%;border-top-right-radius:.95em 50%;-moz-border-radius-topright:.95em 50%;-webkit-border-top-right-radius:.95em 50%;border-bottom-left-radius:.95em 50%;-moz-border-radius-bottomleft:.95em 50%;-webkit-border-bottom-left-radius:.95em 50%;border-bottom-right-radius:.95em 50%;-moz-border-radius-bottomright:.95em 50%;-webkit-border-bottom-right-radius:.95em 50%}.rich_media_meta_list{margin-bottom:18px;line-height:20px;font-size:0}.rich_media_meta_list em{font-style:normal}.rich_media_meta{display:inline-block;vertical-align:middle;margin-right:8px;margin-bottom:10px;font-size:16px}.meta_original_tag{display:inline-block;vertical-align:middle;padding:1px .5em;border:1px solid #9e9e9e;color:#8c8c8c;border-top-left-radius:20% 50%;-moz-border-radius-topleft:20% 50%;-webkit-border-top-left-radius:20% 50%;border-top-right-radius:20% 50%;-moz-border-radius-topright:20% 50%;-webkit-border-top-right-radius:20% 50%;border-bottom-left-radius:20% 50%;-moz-border-radius-bottomleft:20% 50%;-webkit-border-bottom-left-radius:20% 50%;border-bottom-right-radius:20% 50%;-moz-border-radius-bottomright:20% 50%;-webkit-border-bottom-right-radius:20% 50%;font-size:15px;line-height:1.1}.meta_enterprise_tag img{width:30px;height:30px!important;display:block;position:relative;margin-top:-3px;border:0}.rich_media_meta_text{color:#8c8c8c}span.rich_media_meta_nickname{display:none}.rich_media_thumb_wrp{margin-bottom:6px}.rich_media_thumb_wrp .original_img_wrp{display:block}.rich_media_thumb{display:block;width:100%}.rich_media_content{overflow:hidden;color:#3e3e3e}.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important}.rich_media_content p{clear:both;min-height:1em}.rich_media_content em{font-style:italic}.rich_media_content fieldset{min-width:0}.rich_media_content .list-paddingleft-2{padding-left:2.2em}.rich_media_content .list-paddingleft-2 .list-paddingleft-2{padding-left:30px}.rich_media_content blockquote{margin:0;padding-left:10px;border-left:3px solid #dbdbdb}img{height:auto!important}@media screen and (device-aspect-ratio:2/3),screen and (device-aspect-ratio:40/71){.meta_original_tag{padding-top:0}}@media(min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.mm_appmsg .rich_media_inner,.mm_appmsg .rich_media_meta,.mm_appmsg .discuss_list,.mm_appmsg .rich_media_extra,.mm_appmsg .title_tips .tips{font-size:17px}.mm_appmsg .meta_original_tag{font-size:15px}}@media(min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.mm_appmsg .rich_media_title{font-size:25px}}@media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) and (orientation:portrait){.rich_media_area_extra{padding-bottom:34px}}@media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) and (orientation:landscape){.rich_media_area_primary{padding:20px 59px 15px 59px}.rich_media_area_extra{padding:0 59px 21px 59px}}@media screen and (min-width:1024px){.rich_media{width:740px;margin-left:auto;margin-right:auto}.rich_media_inner{padding:20px}body{background-color:#fff}}@media screen and (min-width:1025px){body{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif}.rich_media{position:relative}.rich_media_inner{background-color:#fff;padding-bottom:100px}}.radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.cell{padding:.8em 0;display:block;position:relative}.cell_hd,.cell_bd,.cell_ft{display:table-cell;vertical-align:middle;word-wrap:break-word;word-break:break-all;white-space:nowrap}.cell_primary{width:2000px;white-space:normal}.flex_cell{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_cell_primary{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;box-flex:1;flex:1}.original_tool_area{display:block;padding:.75em 1em 0;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#3e3e3e;border:1px solid #eaeaea;margin:20px 0}.original_tool_area .tips_global{position:relative;padding-bottom:.5em;font-size:15px}.original_tool_area .tips_global:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dbdbdb;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.original_tool_area .radius_avatar{width:27px;height:27px;padding:0;margin-right:.5em}.original_tool_area .radius_avatar img{height:100%!important}.original_tool_area .flex_cell_bd{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.original_tool_area .flex_cell_ft{font-size:14px;color:#8c8c8c;padding-left:1em;white-space:nowrap}.original_tool_area .icon_access:after{content:" ";display:inline-block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#cbcad0;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px}.weui_loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;-webkit-background-size:100%;background-size:100%}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.gif_img_wrp{display:inline-block;font-size:0;position:relative;font-weight:400;font-style:normal;text-indent:0;text-shadow:none 1px 1px rgba(0,0,0,0.5)}.gif_img_wrp img{vertical-align:top}.gif_img_tips{background:rgba(0,0,0,0.6)!important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');border-top-left-radius:1.2em 50%;-moz-border-radius-topleft:1.2em 50%;-webkit-border-top-left-radius:1.2em 50%;border-top-right-radius:1.2em 50%;-moz-border-radius-topright:1.2em 50%;-webkit-border-top-right-radius:1.2em 50%;border-bottom-left-radius:1.2em 50%;-moz-border-radius-bottomleft:1.2em 50%;-webkit-border-bottom-left-radius:1.2em 50%;border-bottom-right-radius:1.2em 50%;-moz-border-radius-bottomright:1.2em 50%;-webkit-border-bottom-right-radius:1.2em 50%;line-height:2.3;font-size:11px;color:#fff;text-align:center;position:absolute;bottom:10px;left:10px;min-width:65px}.gif_img_tips.loading{min-width:75px}.gif_img_tips i{vertical-align:middle;margin:-0.2em .73em 0 -2px}.gif_img_play_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-right-width:0;border-left-color:#fff;border-left-style:solid;border-width:5px 0 5px 8px}.gif_img_loading{width:14px;height:14px}i.gif_img_loading{margin-left:-4px}.gif_bg_tips_wrp{position:relative;height:0;line-height:0;margin:0;padding:0}.gif_bg_tips_wrp .gif_img_tips_group{position:absolute;top:0;left:0;z-index:9999}.gif_bg_tips_wrp .gif_img_tips_group .gif_img_tips{top:0;left:0;bottom:auto}.rich_media_global_msg{position:fixed;top:0;left:0;right:0;padding:1em 35px 1em 15px;z-index:2;background-color:#c6e0f8;color:#8c8c8c;font-size:13px}.rich_media_global_msg .icon_closed{position:absolute;right:15px;top:50%;margin-top:-5px;line-height:300px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);background:transparent url(//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_appmsg_msg_closed_sprite.2x2eb52b.png) no-repeat 0 0;width:11px;height:11px;vertical-align:middle;display:inline-block;-webkit-background-size:100% auto;background-size:100% auto}.rich_media_global_msg .icon_closed:active{background-position:0 -17px}.rich_media_global_msg.voice{color:#1aad19;background-color:#e8f6e8;padding-left:43.3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rich_media_global_msg.voice .ic_voice{position:absolute;top:50%;margin-top:-10px;left:15px;display:inline-block;width:13.3px;height:18.3px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA3CAYAAAB+fggjAAAAAXNSR0IArs4c6QAACb9JREFUaAW9WX9wVMUd3917d5cf/Agp1OTuQgIlQqUoI1JI1Noojg2I+VU7hVrtDDpadRypgzKjU52x09KOdsS20ypSO/WPWttcAqhTOlSoU4FIoRUn0wEZIMndBUkwGEhyv97bfvaS97L77t3lHYUuc+z3935397vf/e4LJZfQnuPPsW0d25ZQzr9mELKSUnIVzHxB/Dh+lBOKf4OEk0FOyQAl/CyltIt5tL29d/V2FzIkLUQ4FA7dwon+KCF0Fee8rBBdS5aSs/D+PUrYbyKtkb9b9BzAlA7CERrqDN1DOH8C8HU57FwSGat6kBGypbcluhMwFj+75XWwemf1vHQqtZ0T3pCtelkp73uJ79s9bT39dqs5HQyFK79jcPIKFErtSgLHjPvQHQB0EFt2hDE2QHU6RMvpkODrw3o50Uk5p3w2N/SlUKhHTNZjskHBz2pi6ylbH22J/k3mOToYCAceIYT/AgYVPhxJQTkMQ792Ez/yQCY8d0fgRl0nj8J2G5z1mvSJ3qCMrYOTb5l0xQFBDIUDjxmcbzUFJnu621/kf/DUmlM9k7RLh4LtwRChxquck0bFCqWjxENuijXF/iXoioNVnZU36wZ5D7PTTCWsWhyp4uFYa+x1k3Y5ezj6oNgtdTVpL0Lo+mhr9BwO0Xib+/bcWYZB35Sdg/sXsOSNV8o5MXK0LfoKYXQDxpJOMZ8L1g8E33JQT6aeQRoJCOJEMxjxfCvSEtlnEq5Uj5h7Ayv2I8U+5w9du/va0oyD896ZV004RQKebIzQ53EQ/jJJubJQhUa2YBXPmqNgy8vPjZ67N+NgMh6/HwSfyURgniwqLvmJif8/+sNrY6O4XV5WxjKMuvHDQOl9uCksHmX0xydWn0hYBJfAgncXzBhNjjZSnX8Fq3ENdmWWUMUhS2Ebv5HrtjDNg/+B5IY4wos0cVukUskqUwj9xfKS2W9GSEwi5QdxFS5BMn54dGzkHkhOy0x18j9COY1O5VxmhGJylIxMjgUTC7WUkfrqJAkQpfuP3nFUElO4WUgwHHza0HU1wG1SGOi0jeSI+kf92hgZlXg0yajBV0gUwri4vqZud/O7PbhxkGiNvM5NWHKV3NN8LGQbuVdDsYIVzOzHOI+ygzYhR/RAxwdbELcPZDEp+Q+2YQcS2L+Zwc4gdSUQS7Oz5BwIKUqWyq5ApEdDsVmhBKaHnHDQVUg1uwKLkkm+USEScsbjId/ra+7fbaMThMHVdpoTjuyxXloqcUg+Eqe4WBb26/5hGXeCkynyfdA9Fo/SQeZlN/StjUQtmgQUFxVnKhyJlAUGOgP13OC3ygxGWZhhSYtkYqIicUHGnWCUluoFz8mzkRzOCf14Wfyikx2ThvQ0B6XZdvhi1QaoAfZHmiMf40xMJmih4BvxWQnbNCD3i/cunoYab4FMQwr5o4zb4Uh9ZMxOM3Fsf91YfPQfOAeLTJrouYc8K3rEII0ikBcKRLTEhUQNuo8E7NSGh4dnyDOFzIioOpxkZdqyXYGSAV2rMYjhIUamkL2ZcANvG+MWWS4DU/parDm2R8AiBj/Bz3IQe14DPKeDRho1hNyonFplhgp/mmaNhpH6s0VVToNFxR7TPcVFJVZdgMG4cNBq0LvRQhyA2vLaMyDrFouTL169KzBlGkEofdnScQYMXBI/raiuXC1fs4wz2iXLI+U0y7gd3tewL41IVhLvmM6X2eWycM7nZ9EEAXWgWDWPpjWg7tx8+IbD4llhNTadTn8XcWgVBphprbhbLQkngJK/ymTdoE/IuDPME5jYSYx1HLn3EH6/B77Rq/m+FG2L3d7X1Pe+kx5kCBJp4G0clDWmAJTD0db+NhO398GO4G3cMDJBbPIY9bShfgyb+OXqMwGPV9rrskFsc6t4fck0GRZPQ5GnZBpO4x/wvrAmKfP+FzjjYF9zn5i58s0ET8MX8hnGc+BxOGnFi8innBg7UUBsFaV6Pt1CeBMrKD73qG8CbPnKUHvg/lzG+tr6DlGWufJkEWQp/tjgyMBJPF+fWrhj4XSZeSlwJgaFIhyioY7gHvS3moYyK6TRO6JN0b0mzd6HOgIbEBK/gp7fzsOBGMLUX2Z+bWvvnb1T3sd2fYFbDgoET8/56UTqKEBrizDIeY1463tae1BGObeq9qrlBtXb4aRcmVvCmOjneFq+UFZW9lJ3Q3fee9lSmgAUBwUNd+N9CPjfTfDHO0pO+z1FK081nfpUoUuIuKPPD322Gav5OMjWBCURRBGN4GH0QCGvxSwHhcFguPLnGEip97AKXd5y39dPN5yOy4PaYXGrjKToRsTMIzg4M+38cZz+LNYWe8qZp1Izh0QlEVLfctMmzNb6gCP4GGxFcij5W7usHT++NjaI4uHpadr0KkbpZvAH7DKw9iRi98lsejbFcQWF2LJ/LvOe6Yl14m5eLavhU8gqkQdlWj5YnOSL+sXNWNFNmKT1NQsLkGAez3zcIHmfj44rKAYUd2Jxcek6HCP1cHD+Ig5DzonZnT3WdOyCWFGukRUIwkGTL069kdYz319MmlOf00EhjKpiWKPku7IiDF9X3RHMecvIsjIsPqdh1ewO3SXLOMF5HRQKvS39h5GNOmVlnZP1Mu4W9pZ5/4TDZh0ybHkt3iKOqcm0OaWDQpB52DZTQfQo+Vtl3C08kQGO2OStYtlGz6CuHJxZO3MPYnHYMsDJVSKpW3ghAOXKsxaPoup86q4c7F7cncSyHZANGen0Shl3C+PSPy/L4qmZ97525aAwiMLgQ8Uwp8tl3C2MASff00KJMRW3GXLtIFbwY1kXp/kaGXcL42AoDqHit6p5JxuuHfQwj1IvIhFO9QhyGk/QpskM/C3Gyo0y3YRdOzgnNOcTHJS0qYgVrBIfLE28gF75ToN3bySfrmsHM68tTo7JxuKJ+PUyPhWcqbQ5XarI+TRlZxQeENcOjitS5dMc5/oqu8F8+ODI4FrEoPVpBTfL8akK2YIc9DCiFAkoyTbUdNSU5XPK5Im/MQPeZOKZnpNdCu6AFOTgrJLZO2FDrogrUjyxPbQ/VOxgWyG9Fn71h6hoJkMC8exlvl8qQg6I66rE1A22Vz6PEuwZExe92CrQtmmU72U+fzQ9K/15XV1dsuudrhlc50t0XX8Izq1TdAh5I9rWf69Mc4ILdlCU9kNDn32ICvZS0wySAY2W+shSUdw6OSXTCtpioSgePZrPeydWTUncstF8MPRw1dFvunFO2CnYQaGEk3cSn8iWYyVeBGoImqtG6RHxQsQfEJVskE+34C22GxOfb8fiY40owtaAJ0qnciTxcvSlE7VfBPX3IQ8lb/U2R3dgBRGu7tt/AYJkZEGv/oaXAAAAAElFTkSuQmCC) no-repeat center;background-size:contain}.rich_media_global_msg.voice .icon_more{position:absolute;right:15px;top:50%;margin-top:-6.5px;width:8px;height:13px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAAAAXNSR0IArs4c6QAAA49JREFUSA2tVk1IVFEUPveOmhQk1ibfvLFZSJtACqJIIpCIoB+imcFV2Z9ZUVnRomgRGFn2i6mFf5XVotCZMYmgIMhlq6BFENFiwjfPAosgFzXOvNu5o3fmeue98Y16F3PP+c453/fu/xCQmvZSWwwJaC0G6P8WND9IoTmbVFRycpqAdgBWkwRo94V960RsPn1aoPpN9RI6CR0WsDWcjAErtUiqTR/S18+HnNcSTv5zYrwDSatVMgLkH6aciwfj79WYW5+OT4xfsyPnBIgvwt872qBW45ZQzaMlJXCfMPJbDQgfRUoIhduVUW2TwArpaWyX+bnYU9JAAH44FaJIccqCW76Ib7NTjhOOvFPN/8q/IvE3cR+npFJgao9rkiSUXjD2GCNqzMnPbNPYjth3mqINlJAvTsk4kiJmWa3eQe8WpxwVzwjwgFFn/CorL29EkY9qovC5CFDrKq7JVoHl6zNTJCf53/lLk78SN/FcbJRx2cZCixC4ZATGXsu4as8YgQjGamN/q5atOotn4K3A1J4BUMbgsh7Wt6sx2bcV4AkjtSPJxkDjRQL0hVwg21zEglSzN+rdKeOybTtFcgK39ajWZDFWr+IZHxfGQ8mV0YA5nMGmDVcCPNcb8R5gYJ1UCWQfp6PFCI4NyZhrAV6EIiHGrPOAB0ImkW2c0la8u8ICc0wUCWrvC1dsw+3TnN6uanDaJ4zeiIfiA9wtWIAX8XspxeA6iuBlaN88hNzCNXk+JwFOuXJYW5tMQmc+EcqgzXGb2n9XFk1NstX5yKczl89JAF+6vRaBM1m5XAu//qkRGrtb8BThTtqH2/V0LmUWwbvsiREw8X0vcJHxxNbjNm3KUuVaMjmPFuWm2CPesHc/kp+yj06hFMhj/PIOOcfVFLk6xZT0G3vMTpmc27MusityZk/OBfKOwA05MPLIDJn3OJldcxTQotpBYOyEXVEWIw/NoInvuHOznSJfVDs0GzneNw9mI+eyOSPQI9phfCqPO38TFhHaFw/Eu/LliNiMESB5w6zkzD05F8mMYJr8mFC263Fa+vAadvXloj4toEcrjlgMjgrQrseHpBcfkm67WD6M6MN6lTWZeoZjyYxGLcB57MGnsEfF3fjU2G189QBpcUqmBLrnSs4504s8GjLxrwm5qYrg3dKFf6x6VbwQ3yOS/wz8+bS0ruwfELaBY2nyoNkn4gvW65GKRn4WForwP+dONHDaOHeZAAAAAElFTkSuQmCC) no-repeat center;background-size:contain}.preview_appmsg .rich_media_title{margin-top:1.9em}@media screen and (min-width:1024px){.rich_media_global_msg{position:relative;margin:0 20px}.preview_appmsg .rich_media_title{margin-top:0}}.pages_reset{color:#3e3e3e;line-height:1.6;font-size:16px;font-weight:400;font-style:normal;text-indent:0;letter-spacing:normal;text-align:left;text-decoration:none;white-space:normal}.weapp_element,.weapp_display_element,.mp-miniprogram{display:block;margin:1em 0}.share_audio_context{margin:16px 0}.weapp_text_link{font-size:17px}.weapp_text_link:before{content:'';display:inline-block;line-height:1;background-size:12px 12px;background-repeat:no-repeat;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==');vertical-align:middle;font-size:11px;color:#888;border-radius:10px;background-color:#f4f4f4;margin-right:6px;margin-top:-4px;background-position:center;height:20px;width:20px}.weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:-webkit-box;display:-webkit-flex;display:flex}.weui-dialog__ft:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}</style>
<style>
        </style>
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_pc3d171e.css">
<![endif]-->

    </head>
    <body id="activity-detail" class="zh_CN mm_appmsg">
        
<script nonce="962845775" type="text/javascript">
    var write_sceen_time = (+new Date());
</script>

<div id="js_article" class="rich_media">
    <div class="rich_media_inner">
                        
        
        <div id="page-content" class="rich_media_area_primary">
            
                        <div id="img-content">
                
                <h2 class="rich_media_title" id="activity-name">
                    叙利亚，别哭！活下去！                                    </h2>
                <div id="meta_content" class="rich_media_meta_list">
                                                            <em id="post-date" class="rich_media_meta rich_media_meta_text">2018-04-18</em>

                                        <a class="rich_media_meta rich_media_meta_link rich_media_meta_nickname" href="##" id="post-user">共青团中央</a>
                    <span class="rich_media_meta rich_media_meta_text rich_media_meta_nickname">共青团中央</span>


                    <div id="js_profile_qrcode" class="profile_container" style="display:none;">
                        <div class="profile_inner">
                            <strong class="profile_nickname">共青团中央</strong>
                            <img class="profile_avatar" id="js_profile_qrcode_img" src="" alt="">

                            <p class="profile_meta">
                            <label class="profile_meta_label">微信号</label>
                            <span class="profile_meta_value">gqtzy2014</span>
                            </p>

                            <p class="profile_meta">
                            <label class="profile_meta_label">功能介绍</label>
                            <span class="profile_meta_value">共青团工作、活动信息和青年关注的热点信息</span>
                            </p>
                            
                        </div>
                        <span class="profile_arrow_wrp" id="js_profile_arrow_wrp">
                            <i class="profile_arrow arrow_out"></i>
                            <i class="profile_arrow arrow_in"></i>
                        </span>
                    </div>
                </div>
                                
                
                
                
                                                
                                                                
                
                <div class="rich_media_content " id="js_content">
                    

                    

                    
                    
                    <section class="mpa-template" data-mpa-template-id="1073887" data-mpa-color="null" data-mpa-category="fav" data-mpa-powered-by="yiban.io"><section class="" style="margin: 1px;padding: 10px;font-size: 16px;color: rgb(62, 62, 62);line-height: 7.6px;border-radius: 10px;height: auto;box-shadow: rgb(221, 221, 221) 2px 2px 8px 0px;display: -webkit-flex;"><p class="" style="clear: both;min-height: 1em;flex: 0 0 2cm;height: 78px;width: 75px;"><img class="" data-copyright="0" data-cropselx1="0" data-cropselx2="75" data-cropsely1="0" data-cropsely2="75" data-ratio="1" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/7hxJRjsnhfn5L6sObqdf1VTVSeSHIrrgHSJn6xJdTpljyY39FGvKPQhyWzlW0uy7XX97GjlyQBGQpibhSKZB8HQ/640?" data-type="png" data-w="690" style="border-radius: 100%;visibility: visible !important;width: 75px !important;height: auto !important;" width="75px"  /></p><p class="" style="clear: both;min-height: 1em;"><br class="" data-filtered="filtered"  /></p><section class="" style="padding-right: 10px;padding-left: 10px;flex: 1 1 auto;height: 55px;"><section class="" style="line-height: 35px;white-space: nowrap;"><span style="font-size: 18px;color: rgb(86, 86, 86);"><strong mpa-from-tpl="t">共青团中央</strong></span></section><p class="" style="clear: both;min-height: 1em;font-size: 13px;line-height: 20px;color: rgb(127, 127, 127);"><span style="font-size: 12px;color: rgb(86, 86, 86);">有态度 有温度 全网青年都在关注</span></p></section><section class="" style="font-size: 15px;flex: 0 0 1.5cm;color: rgb(71, 181, 74);letter-spacing: 0px;text-align: center;line-height: 6;"><section class="" style="margin-top: 22px;max-width: 100px;"><p style="letter-spacing: 0px;height: 0px;text-align: justify;line-height: normal;"><img class="__bg_gif" data-ratio="0.628099173553719" data-src="https://mmbiz.qpic.cn/mmbiz_gif/HRoDDYeYibjAFkDQUqliaaib6OmibTT3dS02k2flNxLUQkJ4IUTguIiadpqatcibkibdCyIVwiafS0Eib65EP0X4yVCZib8w/640?" data-w="121" style="visibility: visible !important;width: auto !important;height: auto !important;" width="auto"  /><span style="color: rgb(86, 86, 86);">&nbsp;</span><img class="" data-copyright="0" data-cropselx1="1" data-cropselx2="57" data-cropsely1="0" data-cropsely2="80" data-ratio="1.2693156732891833" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/7hxJRjsnhfn5L6sObqdf1VTVSeSHIrrgpWMbeDO8MJSqkkE3Iw2eTfZBc8AouHc3NP1UYh3xiavcfIfgMvVEY6A/640?" data-type="jpeg" data-w="906" style="opacity: 0;transform: translateY(-35px);visibility: visible !important;width: 63px !important;height: auto !important;" width="56px"  /></p></section></section></section></section><p style="text-align: justify;margin-top: 5px;line-height: normal;"><span style="font-size: 14px;color: rgb(136, 136, 136);">来源：微信公众号“新华网”（ID：newsxinhua），作者：徐倩 李小雨&nbsp;徐海知</span></p><p style="text-align: justify;margin-top: 5px;line-height: normal;"><span style="font-size: 14px;color: rgb(136, 136, 136);">音乐制作：作词：天府事变&nbsp; 作曲：天府事变&nbsp; 演唱：天府事变-pissy</span></p><p style="text-align: justify;margin-top: 5px;line-height: normal;"><span style="font-size: 14px;color: rgb(136, 136, 136);">视频制作：青微工作室（剪辑：GK-Loma&nbsp; 字幕：祚挂东南枝） 、小央视频等</span></p><p style="text-align: justify;margin-top: 5px;line-height: normal;"><span style="font-size: 14px;color: rgb(136, 136, 136);"><br  /></span></p><p style="text-align: center;"><iframe class="video_iframe" data-vidtype="2" allowfullscreen="" frameborder="0" data-ratio="1.7666666666666666" data-w="848" data-src="https://v.qq.com/iframe/preview.html?vid=t0631uw9272&amp;width=500&amp;height=375&amp;auto=0"></iframe><br  /></p><p style="text-align: center;"><span style="font-size: 14px;color: rgb(136, 136, 136);">视频由青微工作室原创</span></p><p style="text-align: center;"><br  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.6675324675324675" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAst06ibYEYSx60gfnMm3kak3Bn2ouMy7vRUo1Nsx3cBpbMxGwDhog0cA/640" data-type="png" data-w="770" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">阿拉伯人中</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">流传着这样一个谚语<br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>“人间若有天堂，</strong></span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>大马士革必在其中</strong></span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>天堂若在天空，</strong></span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>大马士革必与之齐名”</strong></span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.6666666666666666" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vA0VVwOyxMib7FMWelAbfOYKFS4toAIgeVia1ickyicZ6gA5oWJnFsGqrykA/640" data-type="png" data-w="777" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">人间的天堂，上天的恩赐</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">如今战争的“风暴眼”</span></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">叙利亚，一念天堂，一念地狱</span></strong></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">燎原的战火燃遍</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">这个曾经安宁平静的文明古国</span></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">在这里，左手浮华，右手血泪</span></strong></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.666256157635468" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vADBfe9ribkxSMv69nuicIrkqsNnM9PNnQsKMSE76nLm568Ts8lUtyIl3g/640" data-type="png" data-w="812" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">七年前</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">叙利亚爆发大规模反政府示威</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">叙政府军和反对派武装爆发军事冲突</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">引发大规模内战</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">“伊斯兰国”势力崛起</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">进入叙利亚，攻城拔寨</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">美国、俄罗斯介入叙利亚战场</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">打响“反恐战争”</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">土耳其、以色列等各方势力纷纷介入</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>叙利亚冲突升级，战争一场又一场</strong></span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.6674157303370787" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAmvAVlAshicJ0SqezG8eiauuxhV0ueftMdtEibWQprhp3qCd3edVB6icx5g/640" data-type="png" data-w="890" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">4月13日</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">美英法又突然对叙利亚进行了精准打击</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">七年旷日持久的连绵战火</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">让叙利亚</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">城市满目疮痍 古迹摧毁殆尽</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">万千生灵涂炭 百姓流离失所</span></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">叙利亚人眼前是山河破碎</span></strong></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.5731382978723404" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vACSmdSZog1sxNQayp5lFhws08MX5PFbMV7EMRia80eSxMPkElykM6H7g/640" data-type="png" data-w="752" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.7503355704697987" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAAttmRRDQQs3UF8S6wicnnB6o3icryzaqlEvf5QAia8HTmlK3FCrWU4Jjg/640" data-type="png" data-w="745" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">在叙利亚古城阿勒颇</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">4000年的文明与繁华</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">被从天而降的炮火</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">摧毁成一片废墟</span></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">数十万人被迫踏上逃亡之路</span></strong></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.8145161290322581" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vASCULo9Cicq07ZVOeOOaAMicrBXD12T4UGu6pgG0kflpUyibJtOgk6YjGg/640" data-type="png" data-w="620" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.775609756097561" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAxRbKpuLcYOibyKTGsYic8s9zdQryEfGc6UZf64oXg7KhtXSM05oVvAAQ/640" data-type="png" data-w="615" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">曾经车水马龙、</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">井然有序的街道</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">如今千疮百孔、破败不堪</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.7351598173515982" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAbxZiazDz1u7ibA42lnhgRWaNcMA9PTMRha9aV1RuRiaqabe7b06Kz5EnQ/640" data-type="png" data-w="657" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.7696969696969697" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vA6fhG1YPoYPLkOUKmrUsfSfB9SNoyXMMl81MPeoP9ZnPTTdM0wPKRbQ/640" data-type="png" data-w="660" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">曾经商品琳琅满目、</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">市场熙熙攘攘</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">如今空无一人、一地瓦砾</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.64075382803298" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAVb73M06pobMejx1kG5w6Zu6evbicyIhRQROD9LKocySHnuf7pwH1M9g/640" data-type="png" data-w="849" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">校园里荒芜破败</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">墙壁上遍布弹孔</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">孩子们泪流不止&nbsp;</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">饥饿、恐惧、无助</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">&nbsp;</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">持续7年的冲突</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">造成至少35万人死亡150万人致残</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">近1100万人流离失所</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">千万叙利亚难民携老扶幼</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">走上生死未卜的逃亡之路</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">战争带来一幕幕人伦惨剧</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.6656151419558359" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAuK9hwxW903uSvMicAicrqav6q5IOTpJiac2zWCS8PEtibPdVNclOPBVj5A/640" data-type="png" data-w="634" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">在这里</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">没有人谈什么自由</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">他们只是想活着</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.6842857142857143" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAW6ic84hCib81K2U0lZxWSo9iaDrmOzgJr3qOOMgjK4tBTramqicYXCWenQ/640" data-type="png" data-w="700" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;">“宝贝，不要哭，爸爸会保护你”</p><p style="text-align: center;line-height: 1.75em;">这位难民爸爸正在从小艇上岸</p><p style="text-align: center;line-height: 1.75em;">在大浪中 他拼尽全力</p><p style="text-align: center;line-height: 1.75em;">守护惊恐万分的孩子</p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.8053244592346089" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAU9UfSXKJmPbsz9w1TOcDMFygKk3Qia12LvSiapdgicyHO6rCw6smiagmHw/640" data-type="png" data-w="601" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">3岁叙利亚幼童小艾兰没能到达欧洲</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">而在土耳其南部海滩上长睡不醒</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">这一幕，刺痛了全世界公众的心</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="1.5025125628140703" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAn5AaVIyk36TjJniba5ZrJq7hU0IiaEdWWrlYzGcoAWNKCBj0FT41GJ7Q/640" data-type="png" data-w="398" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">满面愁容的父亲，</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">抱着熟睡的女儿</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">在街头兜售圆珠笔</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">梦想何其简单</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">只是为了和家人一起活下去</span></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;"><img class="" data-copyright="0" data-ratio="0.5695364238410596" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/O9F3NTo58ypqyAdn9pSmUic1ibOH6oic5vAF6Opm9Oib7s2gYNGL9ByKulnudOsoBOcmb5J0yGfSy5HXDoRsDWlRwg/640" data-type="png" data-w="604" style="box-sizing: border-box !important;word-wrap: break-word !important;width: auto !important;visibility: visible !important;"  /></p><p><br style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">千千万万的叙利亚难民</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">愿望何其卑微</span></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">活下去，活下去</span></strong></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">总有一天，能重返家园</span></p><p><br  /></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">漫漫逃亡路</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">有人葬身烟波浩淼的海上</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">有人倒在长途跋涉的路上</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(0, 122, 170);"><strong>还有人，尚未离开，已然离去</strong></span></p><p style="text-align: center;"><span style="font-size: 18px;"><br  /></span></p><p style="text-align: center;line-height: normal;"><span style="font-size: 18px;"><iframe class="video_iframe" data-vidtype="2" allowfullscreen="" frameborder="0" data-ratio="1.7666666666666666" data-w="848" data-src="https://v.qq.com/iframe/preview.html?vid=e0631p8tu4f&amp;width=500&amp;height=375&amp;auto=0"></iframe></span><span style="font-size: 14px;color: rgb(136, 136, 136);">视频来源：小央视频，央视网</span></p><p style="text-align: center;"><span style="font-size: 18px;"><br  /></span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">风云又起，百姓何辜</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">可怕的战争从未走远</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">更可怕的是以文明之名发动的战争</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">这不是一个和平的时代</span></p><p style="text-align: center;line-height: 1.75em;"><span style="color: rgb(86, 86, 86);">感恩我们生活在一个和平的国家</span></p><p><br  /></p><p style="text-align: center;line-height: 1.75em;"><strong><span style="color: rgb(0, 122, 170);">愿世界和平！</span></strong></p><section data-author="Wxeditor"><article class="" data-author="Wxeditor"><section><section label="Copyright © 2016 playhudong All Rights Reserved." donone="shifuMouseDownPayStyle(&#39;shifu_tem2_002&#39;)"><section><section class="" data-mpa-template-id="1105285" data-mpa-color="null" data-mpa-category="fav"><section class="" data-id="32290" data-color="rgb(30, 155, 232)" data-custom="rgb(30, 155, 232)" style="line-height: 25.6px;"><section><section><section><section><section class="" powered-by="xiumi.us"><section class=""><section class="" style="text-align: right;"><section powered-by="xiumi.us" style="line-height: 25.6px;"><section><section><section class="" data-mpa-template-id="681033" data-mpa-color="null" data-mpa-category="fav"><section><section class="" powered-by="xiumi.us"><section class="" style="margin-top: 10px;margin-bottom: 10px;text-align: center;"><section class="" style="width: 637.778px;height: 3em;"><section class="" style="margin-top: 1.55em;width: 637.778px;border-top: 1px solid rgb(95, 123, 107);float: left;"></section><section class="" style="margin-top: -1.6em;display: inline-block;width: 3em;height: 3em;vertical-align: top;border-radius: 100%;background-image: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/7hxJRjsnhfnc7O1M16f4QicjoGejicfsOFiaCialFmlYAzawDWbWnk4ThrpCL9rMREeuSSia0vMxc9BHacGSHFlU91A/640?wx_fmt=png&quot;);background-color: rgb(254, 255, 255);background-size: cover;background-position: 50% 50%;background-repeat: no-repeat;"><section class="" style="width: 47.9861px;height: 47.9861px;overflow: hidden;"><br  /></section></section></section></section></section></section></section><section class=""><section class="" powered-by="xiumi.us"><p style="text-align: center;line-height: 1.75em;"><strong mpa-from-tpl="t" style="text-indent: 0em;letter-spacing: 0.5px;line-height: 1.5em;background-color: rgb(254, 255, 255);"><span style="color: rgb(204, 0, 0);">欢迎转发点赞</span></strong><br  /></p></section></section></section></section></section></section></section></section></section></section></section></section></section><section class="" data-id="32290" data-color="rgb(30, 155, 232)" data-custom="rgb(30, 155, 232)" style="line-height: 25.6px;"><section class="" powered-by="xiumi.us"><section class="" data-mpa-template-id="681033" data-mpa-color="null" data-mpa-category="fav" style="line-height: 25.6px;"><p style="margin-right: 8px;margin-left: 8px;text-align: center;line-height: 1.75em;"><strong mpa-from-tpl="t" style="line-height: 1.75em;letter-spacing: 0.5px;"><span style="color: rgb(204, 0, 0);">转载请联系授权</span></strong></p></section><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us"><section><section powered-by="xiumi.us"><section><section><section powered-by="xiumi.us"><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section class="" powered-by="xiumi.us"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us"><section><section powered-by="xiumi.us"><section><section><section powered-by="xiumi.us"><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section style="margin-right: 0em;margin-left: 0em;text-align: center;line-height: 25.6px;font-size: 15px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;padding-right: 10px;padding-left: 10px;text-align: justify;line-height: 2;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 1.8;font-size: 14px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;text-align: center;line-height: 28.44px;letter-spacing: 0.5px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section style="margin-right: 0em;margin-left: 0em;text-align: justify;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;text-align: center;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><h1 style="line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section style="margin: 10px 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;line-height: 28.44px;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;"><section style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us" style="margin-right: 0em;margin-left: 0em;"><section><p class="" style="margin: 5px 8px;font-size: 15px;line-height: 1.75em;"><span style="color: rgb(96, 92, 92);line-height: 25.6px;">▼点击查看更多文章</span></p><p class="" style="margin: 5px 8px;font-size: 15px;line-height: 1.75em;"><a href="http://mp.weixin.qq.com/s?__biz=MzA3NTE5MzQzMA==&amp;mid=2655000832&amp;idx=3&amp;sn=c3b801bbb7944e3b9641c0358dc6f971&amp;chksm=84c0f439b3b77d2fe068acae92a5d08088e3935fcecc78c4522d36a3476a99ad7a707cf3843c&amp;scene=21#wechat_redirect" target="_blank">比马桶还脏！</a><br  /></p><p class="" style="margin: 5px 8px;font-size: 15px;line-height: 1.75em;text-align: left;"><span style="color: rgb(96, 92, 92);line-height: 25.6px;text-align: justify;font-size: 14px;">校 审 | 任晓蓉</span></p><p class="" style="margin: 5px 8px;font-size: 15px;line-height: 1.75em;text-align: left;"><span class="" style="color: rgb(96, 92, 92);line-height: 25.6px;text-align: justify;font-size: 14px;">编 辑 | 唐&nbsp; &nbsp; 月（团浙江省委）</span></p><p class="" style="margin-right: 8px;margin-left: 8px;line-height: 1.75em;"><strong class="" mpa-from-tpl="t"><span class="" style="color: rgb(86, 86, 86);font-size: 14px;">目前5000000+人已关注加入我们</span></strong></p><p class="" style="margin-right: 8px;margin-left: 8px;line-height: 1.75em;"><img class="__bg_gif" data-copyright="0" data-ratio="0.33421052631578946" data-src="https://mmbiz.qpic.cn/mmbiz_gif/7hxJRjsnhfnDtTRxHaB2fsUSxsfKQGOyNw3icy3UWLBEclnCW9BHYwyZuZMMFb52QqxZ1FyuWTRzc37AdNaBpfg/640?" data-type="gif" data-w="760" style="visibility: visible !important;width: auto !important;" width="auto"  /></p><section class="" style="margin-right: 0em;margin-left: 0em;line-height: 25.6px;"><section powered-by="xiumi.us"><section><section powered-by="xiumi.us"><section><section><section powered-by="xiumi.us"><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section class="" powered-by="xiumi.us"><section style="margin-right: 0em;margin-left: 0em;"><section powered-by="xiumi.us"><section><section powered-by="xiumi.us"><section><section><section powered-by="xiumi.us"><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><p class="" style="line-height: 1.75em;"><strong mpa-from-tpl="t" class=""><img class="" data-ratio="0.2609375" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/7hxJRjsnhfldrORZNgwhfjQc3zLY1mdiaCDUbdAsSKrrZCLhA9TJkXrsgcdoLvq3mUGxf7iczLkWFbPwIk3YFt4Q/640?" data-type="png" data-w="640" style="visibility: visible !important;width: auto !important;" width="auto"  /></strong></p><p style="line-height: 1.75em;"><img class="__bg_gif" data-copyright="0" data-ratio="0.9609375" data-src="https://mmbiz.qpic.cn/mmbiz_gif/7hxJRjsnhfnaCtGErk5Jib76Waibb5qeoh9W0LgIYskWIVCJia3w1eb4Lt72CnAQRj4XYUVOvjud2ibk5I7OWfibuQw/640?" data-type="gif" data-w="640" style="visibility: visible !important;width: 383.5px !important;" width="auto"  /></p></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></h1></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></article></section>
                </div>
                <script nonce="962845775" type="text/javascript">
                    var first_sceen__time = (+new Date());

                    if ("" == 1 && document.getElementById('js_content')) {
                        document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });
                    }

                    
                    (function(){
                        if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                            var link = document.createElement('link');
                            var head = document.getElementsByTagName('head')[0];
                            link.rel = 'stylesheet';
                            link.type = 'text/css';
                            link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx3d171e.css";
                            head.appendChild(link);
                        }
                    })();
                </script>
                
                
                                
                <div class="ct_mpda_wrp" id="js_sponsor_ad_area" style="display:none;"></div>

                
                                <div class="reward_area tc" id="js_preview_reward" style="display:none;">
                    <p id="js_preview_reward_wording" class="tips_global reward_tips" style="display:none;"></p>
                    <p>
                        <a class="reward_access" id='js_preview_reward_link' href="##"><span class="icon-reward"></span>赞赏</a>

                    </p>
                </div>
                <div class="reward_qrcode_area reward_area tc" id="js_preview_reward_qrcode" style="display:none;">
                    <p class="tips_global">长按二维码向我转账</p>
                    <p id="js_preview_reward_ios_wording" class="reward_tips" style="display:none;"></p>
                    <span class="reward_qrcode_img_wrp"><img class="reward_qrcode_img" src="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_reward_qrcode.2x3534dd.png"></span>
                    <p class="tips_global">受苹果公司新规定影响，微信 iOS 版的赞赏功能被关闭，可通过二维码转账支持公众号。</p>
                </div>
                            </div>
                        
                        <div class="rich_media_tool" id="js_toobar3">
                
                                
                                            <div id="js_read_area3" class="media_tool_meta tips_global meta_primary" style="display:none;">阅读 <span id="readNum3"></span></div>

                <span style="display:none;" class="media_tool_meta meta_primary tips_global meta_praise" id="like3">
                    <i class="icon_praise_gray"></i><span class="praise_num" id="likeNum3"></span>
                </span>

                <a id="js_report_article3" style="display:none;" class="media_tool_meta tips_global meta_extra" href="##">投诉</a>

            </div>


                    </div>

        <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none"></div>

        
        <div class="rich_media_area_extra">

            
                        <div class="mpda_bottom_container" id="js_bottom_ad_area"></div>
                        
            <div id="js_iframetest" style="display:none;"></div>
                        
            <div class="rich_media_extra rich_media_extra_discuss" id="js_friend_cmt_area" style="display:none">
              
              
              
            </div>

                        <div class="rich_media_extra rich_media_extra_discuss" id="js_cmt_area" style="display:none">
            </div>
                    </div>

        
        <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display:none;">
            <div class="qr_code_pc_inner">
                <div class="qr_code_pc">
                    <img id="js_pc_qr_code_img" class="qr_code_pc_img">
                    <p>微信扫一扫<br>关注该公众号</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="js_minipro_dialog" style="display:none;">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
        <div class="weui-dialog__bd">即将打开"<span id="js_minipro_dialog_name"></span>"小程序</div>
        <div class="weui-dialog__ft">
            <a id="js_minipro_dialog_cancel" href="javascript:void(0);" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
            <a id="js_minipro_dialog_ok" href="javascript:void(0);" class="weui-dialog__btn weui-dialog__btn_primary">打开</a>
        </div>
    </div>
</div>

        
        <script nonce="962845775">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console34c264.js",
        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe34c264.js",
        res_list: []
    };
</script>

<script nonce="962845775" type="text/javascript">
(function() {
	var totalCount = 0,
			finishCount = 0;

	function _loadVConsolePlugin() {
		window.vConsole = new window.VConsole();
		while (window.vConsolePlugins.length > 0) {
			var p = window.vConsolePlugins.shift();
			window.vConsole.addPlugin(p);
		}
	}
	
	function _addVConsole(uri, cb) {
		totalCount++;
		var url = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/' + uri;
		var node = document.createElement('SCRIPT');
		node.type = 'text/javascript';
		node.src = url;
		node.setAttribute('nonce', '962845775');
		if (cb) {
			node.onload = cb;
		}
		document.getElementsByTagName('head')[0].appendChild(node);
	}
	if (
		(document.cookie && document.cookie.indexOf('vconsole_open=1') > -1)
		|| location.href.indexOf('vconsole=1') > -1
	) {
		window.vConsolePlugins = [];
		_addVConsole('3.0.0/vconsole.min.js', function() {
			
			_addVConsole('plugin/vconsole-mpopt/1.0.1/vconsole-mpopt.js', _loadVConsolePlugin);
		});
	}
})();
</script>
        
<script nonce="962845775" type="text/javascript">

if (!window.console) window.console = { log: function() {} };

if (typeof getComputedStyle == 'undefined') {
    if (document.body.currentStyle) {
        window.getComputedStyle = function(el) {
            return el.currentStyle;
        }
    } else {
        window.getComputedStyle = {};
    }
}
(function(){
    window.__zoom = 1;
    
    (function(){
        var validArr = ","+([0.875, 1, 1.125, 1.25, 1.375]).join(",")+",";
        var match = window.location.href.match(/winzoom=(\d+(?:\.\d+)?)/);
        if (match && match[1]) {
            var winzoom = parseFloat(match[1]);
            if (validArr.indexOf(","+winzoom+",")>=0) {
                window.__zoom = winzoom;
            }
        }
    })();

    var isIE = false;
    if (typeof version != 'undefined' && version >= 6 && version <= 9) {
        isIE = true;
    }
    var getMaxWith=function(){
        var container = document.getElementById('img-content');
        var max_width = container.offsetWidth;
        var container_padding = 0;
        var container_style = getComputedStyle(container);
        container_padding = parseFloat(container_style.paddingLeft) + parseFloat(container_style.paddingRight);
        max_width -= container_padding;
        var ua = navigator.userAgent.toLowerCase();
        var re = new RegExp("msie ([0-9]+[\.0-9]*)");
        var version;
        if (re.exec(ua) != null) {
            version = parseInt(RegExp.$1);
        }
        var isIE = false;
        if (typeof version != 'undefined' && version >= 6 && version <= 9) {
            isIE = true;
        }
        if (!max_width) {
            max_width = window.innerWidth - 30;      
        }
        return max_width;
    };
    var getParentWidth = function(dom){
        var parent_width = 0;
        var parent = dom.parentNode;
        var outerWidth = 0;
        while (true) {
            if(!parent||parent.nodeType!=1) break;
            var parent_style = getComputedStyle(parent);
            if (!parent_style) break;
            parent_width = parent.clientWidth - parseFloat(parent_style.paddingLeft) - parseFloat(parent_style.paddingRight) - outerWidth;
            if (parent_width > 0) break;
            outerWidth += parseFloat(parent_style.paddingLeft) + parseFloat(parent_style.paddingRight) + parseFloat(parent_style.marginLeft) + parseFloat(parent_style.marginRight) + parseFloat(parent_style.borderLeftWidth) + parseFloat(parent_style.borderRightWidth);
            parent = parent.parentNode;
        }
        return parent_width;
    }
    var getOuterW=function(dom){
        var style=getComputedStyle(dom),
            w=0;
        if(!!style){
            w = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        }
        return w;
    };
    var getOuterH =function(dom){
        var style=getComputedStyle(dom),
            h=0;
        if(!!style){
            h = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        }
        return h;
    };
    var insertAfter = function(dom,afterDom){
        var _p = afterDom.parentNode;
        if(!_p){
            return;
        }
        if(_p.lastChild === afterDom){
            _p.appendChild(dom);
        }else{
            _p.insertBefore(dom,afterDom.nextSibling);
        }
    };
    var getQuery = function(name,url){
        
        var u  = arguments[1] || window.location.search,
            reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?")+1).match(reg);
        return r!=null?r[2]:"";
    };
    (function(){
        var images = document.getElementsByTagName('img');
        var length = images.length;
        var max_width = getMaxWith();
        for (var i = 0; i < length; ++i) {
            var src_ = images[i].getAttribute('data-src');
            var realSrc = images[i].getAttribute('src');
            if (!src_ || realSrc) continue;
            var width_ = 1 * images[i].getAttribute('data-w') || max_width;
            var ratio_ = 1 * images[i].getAttribute('data-ratio');
            var height = 100;
            if (ratio_ && ratio_ > 0) {
                var img_style = getComputedStyle(images[i]);
                var init_width = images[i].style.width;
                
                if (init_width) {
                    images[i].setAttribute('_width', init_width);
                    if (init_width != 'auto') width_ = parseFloat(img_style.width);
                }
                var parent_width = getParentWidth(images[i])||max_width;
                var width = width_ > parent_width ? parent_width : width_; 
                var img_padding_border = getOuterW(images[i])||0;
                var img_padding_border_top_bottom = getOuterH(images[i])||0;
                height = (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
                images[i].style.cssText += ";width: " + width + "px !important;";
                if (isIE) {
                    var url = images[i].getAttribute('data-src');
                    images[i].src = url;
                } else {
                    if(width > 40 && height > 40){
                        images[i].className += ' img_loading';
                    }
                    images[i].src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==";
                }
            } else {
                images[i].style.cssText += ";visibility: hidden !important;";
            }
            images[i].style.cssText += ";height: " + height + "px !important;";
        }
    })();
    window.__videoDefaultRatio=16/9;
    window.__getVideoWh = function(dom){
        var max_width = getMaxWith(),
            width = max_width,
            ratio_ = dom.getAttribute('data-ratio')*1||(4/3),
            arr = [4/3, 16/9],
            ret = arr[0],
            abs = Math.abs(ret - ratio_);
        for(var j=1,jl=arr.length;j<jl;j++){
            var _abs = Math.abs(arr[j] - ratio_);
            if(_abs<abs){
                abs = _abs;
                ret = arr[j];
            }
        }
        ratio_ = ret;
        var parent_width = getParentWidth(dom)||max_width,
            width = width > parent_width ? parent_width : width,
            outerW = getOuterW(dom)||0,
            outerH = getOuterH(dom)||0,
            videoW = width - outerW,
            videoH = videoW/ratio_,
            height = videoH + outerH;
        return {w:width,h:height,vh:videoH,vw:videoW,ratio:ratio_};
    };

    (function(){
        var iframe = document.getElementsByTagName('iframe');
        for (var i=0,il=iframe.length;i<il;i++) {
            var a = iframe[i];
            var src_ = a.getAttribute('src')||a.getAttribute('data-src')||"";
            if(!/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(src_)){
                continue;
            }
            var vid = getQuery("vid",src_);
            if(!vid){
                continue;
            }
            vid=vid.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");
            a.removeAttribute('src');
            a.style.display = "none";
            var obj = window.__getVideoWh(a),
                mydiv = document.createElement('img');
            mydiv.className = "img_loading";
            mydiv.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==";
            mydiv.setAttribute("data-vid",vid);
            mydiv.style.cssText = "width: " + obj.w + "px !important;";
            insertAfter(mydiv,a);
            a.style.cssText += ";width: " + obj.w + "px !important;";
            a.setAttribute("width",obj.w);
            if(window.__zoom!=1){
                a.style.display = "block";
                mydiv.style.display = "none";
                a.setAttribute("_ratio",obj.ratio);
                a.setAttribute("_vid",vid);
            }else{
                mydiv.style.cssText += "height: " + obj.h + "px !important;";
                a.style.cssText += "height: " + obj.h + "px !important;";
                a.setAttribute("height",obj.h);
            }
            a.setAttribute("data-vh",obj.vh);
            a.setAttribute("data-vw",obj.vw);
            a.setAttribute("data-src",location.protocol+"//v.qq.com/iframe/player.html?vid="+ vid + "&width="+obj.vw+"&height="+obj.vh+"&auto=0");
        }
    })();

    (function(){
        if(window.__zoom!=1){
            document.getElementById('page-content').style.zoom = window.__zoom;
            var a = document.getElementById('activity-name');
            var b = document.getElementById('meta_content');
            if(!!a){
                a.style.zoom = 1/window.__zoom;
            }
            if(!!b){
                b.style.zoom = 1/window.__zoom;
            }
            var images = document.getElementsByTagName('img');
            for (var i = 0,il=images.length;i<il;i++) {
                images[i].style.zoom = 1/window.__zoom;
            }
            var iframe = document.getElementsByTagName('iframe');
            for (var i = 0,il=iframe.length;i<il;i++) {
                var a = iframe[i];
                a.style.zoom = 1/window.__zoom;
                var src_ = a.getAttribute('data-src')||"";
                if(!/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(src_)){
                    continue;
                }
                var ratio = a.getAttribute("_ratio");
                var vid = a.getAttribute("_vid");
                a.removeAttribute("_ratio");
                a.removeAttribute("_vid");
                var vw = a.offsetWidth - (getOuterW(a)||0);
                var vh = vw/ratio;
                var h = vh + (getOuterH(a)||0)
                a.style.cssText += "height: " + h + "px !important;"
                a.setAttribute("height",h);
                a.setAttribute("data-src",location.protocol+"//v.qq.com/iframe/player.html?vid="+ vid + "&width="+vw+"&height="+vh+"&auto=0");
                a.style.display = "none";
                var parent = a.parentNode;
                if(!parent){
                    continue;
                }
                for(var j=0,jl=parent.children.length;j<jl;j++){
                    var child = parent.children[j];
                    if(child.className.indexOf("img_loading")>=0 && child.getAttribute("data-vid")==vid){
                        child.style.cssText += "height: " + h + "px !important;";
                        child.style.display = "";
                    }
                }
            }
        }
    })();
})();
</script>
<script nonce="962845775" type="text/javascript">

    var not_in_mm_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm3d171e.css";
    var windowwx_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx3d171e.css";
    var article_improve_combo_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo3d1dbe.css";
    var tid = "";
    var aid = "";
    var clientversion = "";
    var appuin = "MzA3NTE5MzQzMA=="||"";

    var source = "27";
    var ascene = "";
    var subscene = "";
    var abtest_cookie = "";

    var scene = 75;

    var itemidx = "";
    var appmsg_token   = "";

    var _copyright_stat = "2";
    var _ori_article_type = "";

    var nickname = "共青团中央";
    var appmsg_type = "9";
    var ct = "1524005529";
    var publish_time = "2018-04-18" || "";
    var user_name = "gh_9cda6ee40e37";
    var user_name_new = "";
    var fakeid   = "";
    var version   = "";
    var is_limit_user   = "0";
    var round_head_img = "http://mmsns.qpic.cn/mmsns/7hxJRjsnhfkGUGjOJdjcpNVznfqa0Pp3cjPdGy6iar6Auo6lMXpL1ew/0";
    var ori_head_img_url = "http://wx.qlogo.cn/mmhead/Q3auHgzwzM4BiaGC3afSukDaGrL8NARWUK3KM22nL4M89vXKicr9X39Q/132";
    var msg_title = "叙利亚，别哭！活下去！";
    var msg_desc = "活下去，活下去";
    var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz_jpg/7hxJRjsnhfnictMSq2BASeyT4uNmApC1RUaDIIbAqziax9vSm5e0Z2C4l1q3wKUfHKe5vcXGu3eMygib3udVQ4dGQ/0?wx_fmt=jpeg";
    var msg_link = "http://mp.weixin.qq.com/s?__biz=MzA3NTE5MzQzMA==\x26amp;mid=2655000950\x26amp;idx=1\x26amp;sn=e4681ee766499e2e1413f207320b6fd0\x26amp;chksm=84c0f44fb3b77d590b2c9f0f9f36872ca45aa09e0f3acb721d8449ceb3f0830f53e5650ab776#rd";
    var user_uin = "0"*1;
    var msg_source_url = '';
    var img_format = 'jpeg';
    var srcid = '';
    var req_id = '1817LVjSm6EsFbnt3SvrzXKq';
    var networkType;
    var appmsgid = '' || '2655000950'|| "";
    var comment_id = "241814351403696129" || "241814351403696129" * 1;
    var comment_enabled = "" * 1;
    var is_need_reward = "0" * 1;
    var is_https_res = ("" * 1) && (location.protocol == "https:");
    var msg_daily_idx = "1" || "";
    var profileReportInfo = "" || "";

    var devicetype = "";
    var source_encode_biz = "MzA4MjQxNjQzMA==";
    var source_username = "gh_68b976f584b5";
    
    var reprint_ticket = "5Z9RE01CHJTaSyDZkL9ZuKMz%2BwLRSofHos7ScszZtVSdfkuAmq2iEFFXwZifU9UJ";
    var source_mid = "2768370330";
    var source_idx = "1";
    var source_biz = "3082416430";
    var author_id = "";

    var show_comment = "";
    var __appmsgCgiData = {
        wxa_product : ""*1,
        show_msg_voice: "0"*1,
        can_use_page : "0"*1,
        is_wxg_stuff_uin : "0"*1,
        card_pos : "0",
        copyright_stat : "2",
        source_biz : "3082416430",
        hd_head_img : "http://wx.qlogo.cn/mmhead/Q3auHgzwzM4BiaGC3afSukDaGrL8NARWUK3KM22nL4M89vXKicr9X39Q/0"||(window.location.protocol+"//"+window.location.host + "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_rumor_link.2x264e76.jpg")
    };
    var _empty_v = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/pages/voice/empty26f1f1.mp3";

    var copyright_stat = "2" * 1;

    var pay_fee = "" * 1;
    var pay_timestamp = "";
    var need_pay = "" * 1;

    var need_report_cost = "0" * 1;
    var use_tx_video_player = "0" * 1;
    var appmsg_fe_filter = "contenteditable";

    var friend_read_source = "" || "";
    var friend_read_version = "" || "";
    var friend_read_class_id = "" || "";

    var is_only_read = "1" * 1;
    var read_num = "" * 1;
    var like_num = "" * 1;
    var liked = "" == 'true' ? true : false;
    var is_temp_url = "" ? 1 : 0;
    var send_time = "";
    var icon_emotion_switch = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x2f1273.png";
    var icon_emotion_switch_active = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x2f1273.png";
    var icon_loading_white = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif";
    var icon_audio_unread = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/audio/icon_audio_unread26f1f1.png";
    var icon_qqmusic_default = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_default.2x26f1f1.png";
    var icon_qqmusic_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_source393e3a.png";
    var icon_kugou_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/kugou/icon_kugou_source393e3a.png";

    var topic_default_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/topic/pic_book_thumb.2x2e4987.png';
    var comment_edit_icon = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_edit25ded2.png';
    var comment_loading_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif';
    var voice_in_appmsg = {
        "1":"1"
            };
    var reprint_style = '0'*1;
    var wxa_img_alert = "" != 'false';

    
    
    
    

    
    var weapp_sn_arr_json = "" || "";

    
    var ban_scene = "0" * 1;

    var svr_time = "1524044561" * 1;
    
    var is_transfer_msg = ""*1||0;

    var malicious_title_reason_id = "0" * 1; 

    
    var modify_time = "";


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


        window.wxtoken = "777";
        
    
    
    
    
    window.is_login = '0' * 1; 

    window.__moon_initcallback = function(){
        if(!!window.__initCatch){
            window.__initCatch({
                idkey : 27611+2,
                startKey : 0,
                limit : 128,
                badjsId: 43,
                reportOpt : {
                    uin : uin,
                    biz : biz,
                    mid : mid,
                    idx : idx,
                    sn  : sn
                },
                extInfo : {
                    network_rate : 0.01,    
                    badjs_rate: 0.1 
                }
            });
        }
    }
    </script>

<script nonce="962845775" type="text/javascript">
(function(){
    window.__logClientLog = function(msg){
        try{
            var method;
            if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                method = 'writeLog';
            }else if(/(Android)/i.test(navigator.userAgent)){
                method = 'log';
            }
            if(!!method)
                doLog(method, msg);
        }catch(e){
            console.error(e)
            throw e
        }
    }
    function doLog(method, msg){
        if(!!method && !!top.window.WeixinJSBridge && !!top.window.WeixinJSBridge.invoke){
            top.window.WeixinJSBridge.invoke(method, {
                "level" : 'info',
                "msg" : "[WechatFe][appmsg]" + msg
            });
        }else{
            
            setTimeout(function(){
                if( top.window.document.addEventListener ){
                    top.window.document.addEventListener('WeixinJSBridgeReady', function(){
                        doLog(method,msg)
                    }, false);
                }else if (top.window.document.attachEvent){
                    top.window.document.attachEvent('WeixinJSBridgeReady', function(){
                        doLog(method, msg)
                    });
                    top.window.document.attachEvent('onWeixinJSBridgeReady', function(){
                        doLog(method, msg)
                    });
                }
            }, 0)
        }
    }
    window.__moonErrRep = function(src){
        window.__logClientLog(' moon load err ' + src);
    }
    window.__moonSucRep = function(src){
        window.__logClientLog(' moon load suc ' + src);
    }
    window.setTimeout(function(){
        window.__logClientLog(' index.html end, __moonhasinit : ' + window.__moonhasinit);
    }, 500);
})();
</script>

        <script nonce="962845775">window.__moon_host = 'res.wx.qq.com';window.__moon_mainjs = 'appmsg/index.js';window.moon_map = {"new_video/player.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/player.html3d1ddf.js","biz_wap/zepto/touch.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/touch34c264.js","biz_wap/zepto/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/event34c264.js","biz_wap/zepto/zepto.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/zepto34c264.js","page/pages/video.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/pages/video.css3d1dbe.js","a/appdialog_confirm.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/appdialog_confirm.html34f0d8.js","widget/wx_profile_dialog_primary.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/widget/wx_profile_dialog_primary.css34f0d8.js","appmsg/emotion/caret.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/caret278965.js","new_video/player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/player3baab7.js","a/appdialog_confirm.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/appdialog_confirm34c32a.js","biz_wap/jsapi/cardticket.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/cardticket34c264.js","appmsg/friend_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/friend_comment_tpl.html3d0130.js","appmsg/comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment_tpl.html3d0130.js","biz_wap/utils/fakehash.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/fakehash38c7af.js","biz_common/utils/emoji_panel_data.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/emoji_panel_data3518c6.js","biz_common/utils/emoji_data.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/emoji_data3518c6.js","appmsg/emotion/textarea.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/textarea3d171e.js","appmsg/emotion/nav.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/nav278965.js","appmsg/emotion/common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/common3518c6.js","appmsg/emotion/slide.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/slide2a9cd9.js","appmsg/emotion/dom.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/dom31ff31.js","biz_common/utils/wxgspeedsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk3518c6.js","pages/loadscript.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/loadscript39aac6.js","pages/music_report_conf.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_report_conf3c6d6e.js","pages/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/report3baab7.js","pages/player_adaptor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/player_adaptor39d6ee.js","pages/music_player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_player3c6d6e.js","a/video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/video3d1e2e.js","a/sponsor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor3d1e2e.js","a/app_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/app_card393ef4.js","a/ios.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/ios393966.js","a/android.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/android393966.js","a/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/profile31ff31.js","a/cpc_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/cpc_a_tpl.html3d0805.js","a/sponsor_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor_a_tpl.html3d1ddf.js","a/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_tpl.html3d1ddf.js","a/mpshop.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/mpshop311179.js","a/wxopen_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/wxopen_card3d1e2e.js","a/card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/card311179.js","biz_wap/utils/position.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/position34c264.js","a/a_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_report393966.js","appmsg/comment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment3d171e.js","appmsg/my_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/my_comment_tpl.html3d136f.js","appmsg/cmt_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cmt_tpl.html3d0130.js","sougou/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/a_tpl.html2c6e7c.js","appmsg/emotion/emotion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/emotion353f34.js","biz_wap/utils/wapsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/wapsdk34c264.js","biz_common/utils/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report3518c6.js","appmsg/open_url_with_webview.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/open_url_with_webview3145f0.js","appmsg/articleReport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/articleReport3d171e.js","biz_common/utils/http.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/http3518c6.js","biz_common/utils/cookie.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/cookie3518c6.js","appmsg/topic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/topic_tpl.html31ff31.js","pages/weapp_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/weapp_tpl.html36906d.js","biz_common/utils/monitor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/monitor3518c6.js","appmsg/weapp_common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/weapp_common3af55a.js","pages/voice_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_tpl.html38518d.js","pages/kugoumusic_ctrl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/kugoumusic_ctrl3d171e.js","pages/qqmusic_ctrl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_ctrl3d171e.js","pages/voice_component.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_component3d171e.js","pages/qqmusic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_tpl.html393e3a.js","new_video/ctl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/ctl2d441f.js","a/testdata.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/testdata3bb523.js","appmsg/reward_entry.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/reward_entry3cd0d9.js","appmsg/like.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/like3d171e.js","pages/version4video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/version4video3a9bef.js","a/a.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a3d1e2e.js","rt/appmsg/getappmsgext.rt.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/rt/appmsg/getappmsgext.rt2c21f6.js","biz_wap/utils/storage.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/storage34c264.js","biz_common/tmpl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/tmpl3518c6.js","appmsg/share_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share_tpl.html36906d.js","appmsg/appmsgext.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsgext3d171e.js","appmsg/img_copyright_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img_copyright_tpl.html2a2c13.js","pages/video_ctrl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/video_ctrl36ebcf.js","appmsg/comment_utils.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment_utils3d171e.js","biz_common/ui/imgonepx.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/ui/imgonepx3518c6.js","biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes3518c6.js","biz_wap/utils/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/log34c264.js","sougou/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/index36913b.js","biz_wap/safe/mutation_observer_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/mutation_observer_report34c264.js","appmsg/fereport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/fereport3ce4dc.js","appmsg/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report3404b3.js","appmsg/report_and_source.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report_and_source3d171e.js","appmsg/page_pos.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/page_pos3a95b8.js","appmsg/cdn_speed_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_speed_report3097b2.js","appmsg/wxtopic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wxtopic31a3be.js","appmsg/new_index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/new_index36906d.js","appmsg/weapp.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/weapp3af55a.js","appmsg/weproduct.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/weproduct3cc2d7.js","appmsg/voicemsg.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voicemsg3b1748.js","appmsg/autoread.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/autoread3af14e.js","appmsg/voice.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voice38518d.js","appmsg/qqmusic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qqmusic3d171e.js","appmsg/iframe.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/iframe3d352d.js","appmsg/product.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/product393966.js","appmsg/review_image.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/review_image3af55a.js","appmsg/outer_link.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/outer_link275627.js","appmsg/copyright_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/copyright_report2ec4b2.js","appmsg/async.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/async3d171e.js","biz_wap/ui/lazyload_img.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/lazyload_img3af55a.js","biz_common/log/jserr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/log/jserr3518c6.js","appmsg/share.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share3c0ef8.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib38b7bb.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse36ebcf.js","page/appmsg/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm.css3d171e.js","page/appmsg/page_mp_article_improve_combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo.css3d1dbe.js","page/appmsg_new/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg_new/not_in_mm.css3d171e.js","page/appmsg_new/combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg_new/combo.css3d1dbe.js","biz_common/moment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/moment3518c6.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core3b0568.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event3a25e9.js","appmsg/test.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/test354009.js","biz_wap/utils/mmversion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/mmversion34c264.js","appmsg/max_age.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/max_age2fdd28.js","biz_common/dom/attr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/attr3518c6.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax38c31a.js","appmsg/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/log300330.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class3518c6.js","biz_wap/utils/device.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/device34c264.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html3518c6.js","appmsg/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/index3d171e.js"};</script><script nonce="962845775" type="text/javascript" id="moon_inline" > window.__mooninline=1; window.setTimeout(function() {  function __moonf__(){
if(!window.__moonhasinit){
window.__moonhasinit=!0,window.__moonclientlog=[],window.__wxgspeeds&&(window.__wxgspeeds.moonloadedtime=+new Date),
"object"!=typeof JSON&&(window.JSON={
stringify:function(){
return"";
},
parse:function(){
return{};
}
});
var e=function(){
function e(e){
try{
var o;
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?o="writeLog":/(Android)/i.test(navigator.userAgent)&&(o="log"),
o&&t(o,e);
}catch(n){
throw console.error(n),n;
}
}
function t(e,o){
var n,r,i={};
n=top!=window?top.window:window;
try{
r=n.WeixinJSBridge,i=n.document;
}catch(a){}
e&&r&&r.invoke?r.invoke(e,{
level:"info",
msg:"[WechatFe][moon]"+o
}):setTimeout(function(){
i.addEventListener?i.addEventListener("WeixinJSBridgeReady",function(){
t(e,o);
},!1):i.attachEvent&&(i.attachEvent("WeixinJSBridgeReady",function(){
t(e,o);
}),i.attachEvent("onWeixinJSBridgeReady",function(){
t(e,o);
}));
},0);
}
var n;
localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method&&(n=!0),
e(" moon init, moon_inline:"+window.__mooninline+", moonls:"+n),function(){
var e={},o={},t={};
e.COMBO_UNLOAD=0,e.COMBO_LOADING=1,e.COMBO_LOADED=2;
var n=function(e,t,n){
if(!o[e]){
o[e]=n;
for(var r=3;r--;)try{
moon.setItem(moon.prefix+e,n.toString()),moon.setItem(moon.prefix+e+"_ver",moon_map[e]);
break;
}catch(i){
moon.clear();
}
}
},r=window.alert;
window.__alertList=[],window.alert=function(e){
r(e),window.__alertList.push(e);
};
var i=function(e){
if(!e||!o[e])return null;
var n=o[e];
if("function"==typeof n&&!t[e]){
var a={},s={
exports:a
},c=n(i,a,s,r);
n=o[e]=c||s.exports,t[e]=!0;
}
if(".css"===e.substr(-4)){
var d=document.getElementById(e);
if(!d){
d=document.createElement("style"),d.id=e;
var _=/url\s*\(\s*\/(\"(?:[^\\\"\r\n\f]|\\[\s\S])*\"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|[^)}]+)\s*\)/g,m=window.testenv_reshost||window.__moon_host||"res.wx.qq.com";
n=n.replace(_,"url(//"+m+"/$1)"),d.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(d);
}
}
return n;
};
e.combo_status=e.COMBO_UNLOAD,e.run=function(){
var o=e.run.info,t=o&&o[0],n=o&&o[1];
if(t&&e.combo_status==e.COMBO_LOADED){
var r=i(t);
n&&n(r);
}
},e.use=function(o,t){
window.__wxgspeeds&&(window.__wxgspeeds.seajs_use_time=+new Date),e.run.info=[o,t],
e.run();
},window.define=n,window.seajs=e;
}(),function(){
if(window.__nonce_str){
var e=document.createElement;
document.createElement=function(o){
var t=e.apply(this,arguments);
return"object"==typeof o&&(o=o.toString()),"string"==typeof o&&"script"==o.toLowerCase()&&t.setAttribute("nonce",window.__nonce_str),
t;
};
}
window.addEventListener&&window.__DEBUGINFO&&Math.random()<.01&&window.addEventListener("load",function(){
var e=document.createElement("script");
e.src=__DEBUGINFO.safe_js,e.type="text/javascript",e.async=!0;
var o=document.head||document.getElementsByTagName("head")[0];
o.appendChild(e);
});
}(),function(){
function t(e){
return"[object Array]"===Object.prototype.toString.call(e);
}
function n(e){
return"[object Object]"===Object.prototype.toString.call(e);
}
function r(e){
var t=e.stack+" "+e.toString()||"";
try{
if(window.testenv_reshost){
var n="http(s)?://"+window.testenv_reshost,r=new RegExp(n,"g");
t=t.replace(r,"");
}else t=t.replace(/http(s)?:\/\/res\.wx\.qq\.com/g,"");
for(var r=/\/([^.]+)\/js\/(\S+?)\.js(\,|:)?/g;r.test(t);)t=t.replace(r,function(e,o,t,n){
return t+n;
});
}catch(e){
t=e.stack?e.stack:"";
}
var i=[];
for(o in u)u.hasOwnProperty(o)&&i.push(o+":"+u[o]);
return i.push("STK:"+t.replace(/\n/g,"")),i.join("|");
}
function i(e){
if(!e){
var o=window.onerror;
window.onerror=function(){},f=setTimeout(function(){
window.onerror=o,f=null;
},50);
}
}
function a(e,o,t){
if(!/^mp\.weixin\.qq\.com$/.test(location.hostname)){
var n=[];
t=t.replace(location.href,(location.origin||"")+(location.pathname||"")).replace("#wechat_redirect","").replace("#rd","").split("&");
for(var r=0,i=t.length;i>r;r++){
var a=t[r].split("=");
a[0]&&a[1]&&n.push(a[0]+"="+encodeURIComponent(a[1]));
}
var s=new window.Image;
return void(s.src=(o+n.join("&")).substr(0,1024));
}
var c;
if(window.ActiveXObject)try{
c=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
c=new ActiveXObject("Microsoft.XMLHTTP");
}catch(_){
c=!1;
}
}else window.XMLHttpRequest&&(c=new XMLHttpRequest);
c&&(c.open(e,o,!0),c.setRequestHeader("cache-control","no-cache"),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.send(t));
}
function s(e){
return function(o,t){
if("string"==typeof o)try{
o=new Function(o);
}catch(n){
throw n;
}
var r=[].slice.call(arguments,2),a=o;
return o=function(){
try{
return a.apply(this,r.length&&r||arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),_&&window.__moon_report&&(window.__moon_report([{
offset:O,
log:"timeout_error;host:"+location.host,
e:e
}]),i(f)),e;
}
},e(o,t);
};
}
function c(e){
return function(o,t,n){
if("undefined"==typeof n)var n=!1;
var r=this,a=t||function(){};
return t=function(){
try{
return a.apply(r,arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),_&&window.__moon_report&&(window.__moon_report([{
offset:y,
log:"listener_error;type:"+o+";host:"+location.host,
e:e
}]),i(f)),e;
}
},a.moon_lid=b,D[b]=t,b++,e.call(r,o,t,n);
};
}
function d(e){
return function(o,t,n){
if("undefined"==typeof n)var n=!1;
var r=this;
return t=D[t.moon_lid],e.call(r,o,t,n);
};
}
var _,m,l,w,u,p,f,h=/MicroMessenger/i.test(navigator.userAgent),g=window.define,v=0,y=2,x=4,O=9,j=10;
if(window.__initCatch=function(e){
_=e.idkey,m=e.startKey||0,l=e.limit,w=e.badjsId,u=e.reportOpt||"",p=e.extInfo||{},
p.rate=p.rate||.5;
},window.__moon_report=function(e,o){
var i=!1,s="";
try{
s=top.location.href;
}catch(c){
i=!0;
}
var d=.5;
if(p&&p.rate&&(d=p.rate),o&&"number"==typeof o&&(d=o),!(!/mp\.weixin\.qq\.com/.test(location.href)&&!/payapp\.weixin\.qq\.com/.test(location.href)||Math.random()>d)&&h&&(top==window||i||/mp\.weixin\.qq\.com/.test(s))&&(n(e)&&(e=[e]),
t(e)&&""!=_)){
var u="",f=[],g=[],v=[],y=[];
"number"!=typeof l&&(l=1/0);
for(var O=0;O<e.length;O++){
var j=e[O]||{};
if(!(j.offset>l||"number"!=typeof j.offset||j.offset==x&&p&&p.network_rate&&Math.random()>=p.network_rate)){
var D=1/0==l?m:m+j.offset;
f[O]="[moon]"+_+"_"+D+";"+j.log+";"+r(j.e||{})||"",g[O]=D,v[O]=1;
}
}
for(var b=0;b<g.length;b++)y[b]=_+"_"+g[b]+"_"+v[b],u=u+"&log"+b+"="+f[b];
if(y.length>0){
a("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?","idkey="+y.join(";")+"&r="+Math.random()+"&lc="+f.length+u);
var d=1;
if(p&&p.badjs_rate&&(d=p.badjs_rate),w&&Math.random()<d){
u=u.replace(/uin\:(.)*\|biz\:(.)*\|mid\:(.)*\|idx\:(.)*\|sn\:(.)*\|/,"");
var E=new Image,S="https://badjs.weixinbridge.com/badjs?id="+w+"&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent(u);
E.src=S.slice(0,1024);
}
}
}
},window.setTimeout=s(window.setTimeout),window.setInterval=s(window.setInterval),
Math.random()<.01&&window.Document&&window.HTMLElement){
var D={},b=0;
Document.prototype.addEventListener=c(Document.prototype.addEventListener),Document.prototype.removeEventListener=d(Document.prototype.removeEventListener),
HTMLElement.prototype.addEventListener=c(HTMLElement.prototype.addEventListener),
HTMLElement.prototype.removeEventListener=d(HTMLElement.prototype.removeEventListener);
}
var E=window.navigator.userAgent;
if((/ip(hone|ad|od)/i.test(E)||/android/i.test(E))&&!/windows phone/i.test(E)&&window.localStorage&&window.localStorage.setItem){
var S=window.localStorage.setItem,I=0;
window.localStorage.setItem=function(e,o){
if(!(I>=10))try{
S.call(window.localStorage,e,o);
}catch(t){
t.stack&&console&&console.error&&console.error("[TryCatch]"+t.stack),window.__moon_report([{
offset:j,
log:"localstorage_error;"+t.toString(),
e:t
}]),I++,I>=3&&window.moon&&window.moon.clear&&moon.clear();
}
};
}
window.seajs&&g&&(window.define=function(){
for(var o,t=[],n=arguments&&arguments[0],a=0,s=arguments.length;s>a;a++){
var c=o=arguments[a];
"function"==typeof o&&(o=function(){
try{
return c.apply(this,arguments);
}catch(o){
throw"string"==typeof n&&console.error("[TryCatch][DefineeErr]id:"+n),o.stack&&console&&console.error&&console.error("[TryCatch]"+o.stack),
_&&window.__moon_report&&(window.__moon_report([{
offset:v,
log:"define_error;id:"+n+";",
e:o
}]),i(f)),e(" [define_error]"+JSON.stringify(r(o))),o;
}
},o.toString=function(e){
return function(){
return e.toString();
};
}(arguments[a])),t.push(o);
}
return g.apply(this,t);
});
}(),function(o){
function t(e,o,t){
return window.__DEBUGINFO?(window.__DEBUGINFO.res_list||(window.__DEBUGINFO.res_list=[]),
window.__DEBUGINFO.res_list[e]?(window.__DEBUGINFO.res_list[e][o]=t,!0):!1):!1;
}
function n(e){
var o=new TextEncoder("utf-8").encode(e),t=crypto.subtle||crypto.webkitSubtle;
return t.digest("SHA-256",o).then(function(e){
return r(e);
});
}
function r(e){
for(var o=[],t=new DataView(e),n=0;n<t.byteLength;n+=4){
var r=t.getUint32(n),i=r.toString(16),a="00000000",s=(a+i).slice(-a.length);
o.push(s);
}
return o.join("");
}
function i(e,o,t){
if("object"==typeof e){
var n=Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,function(e,o){
return o;
});
if(t=t||e,"Array"==n){
for(var r=0,i=e.length;i>r;++r)if(o.call(t,e[r],r,e)===!1)return;
}else{
if("Object"!==n&&a!=e)throw"unsupport type";
if(a==e){
for(var r=e.length-1;r>=0;r--){
var s=a.key(r),c=a.getItem(s);
if(o.call(t,c,s,e)===!1)return;
}
return;
}
for(var r in e)if(e.hasOwnProperty(r)&&o.call(t,e[r],r,e)===!1)return;
}
}
}
var a=o.localStorage,s=document.head||document.getElementsByTagName("head")[0],c=1,d=11,_=12,m=13,l=window.__allowLoadResFromMp?1:2,w=window.__allowLoadResFromMp?1:0,u=l+w,p=window.testenv_reshost||window.__moon_host||"res.wx.qq.com",f=new RegExp("^(http(s)?:)?//"+p);
window.__loadAllResFromMp&&(p="mp.weixin.qq.com",l=0,u=l+w);
var h={
prefix:"__MOON__",
loaded:[],
unload:[],
clearSample:!1,
hit_num:0,
mod_num:0,
version:1003,
cacheData:{
js_mod_num:0,
js_hit_num:0,
js_not_hit_num:0,
js_expired_num:0,
css_mod_num:0,
css_hit_num:0,
css_not_hit_num:0,
css_expired_num:0
},
init:function(){
h.loaded=[],h.unload=[];
var e,t,r;
if(window.__moon_report_uin)try{
window.__moon_report_uin%1e3==120&&(h.clearSample=!0);
}catch(s){}
if(window.no_moon_ls&&(h.clearSample=!0),a){
var c="_moon_ver_key_",d=a.getItem(c);
d!=h.version&&(h.clear(),a.setItem(c,h.version));
}
if((-1!=location.search.indexOf("no_moon1=1")||-1!=location.search.indexOf("no_lshttps=1"))&&h.clear(),
a){
var _=1*a.getItem(h.prefix+"clean_time"),m=+new Date;
if(m-_>=1296e6){
h.clear();
try{
!!a&&a.setItem(h.prefix+"clean_time",+new Date);
}catch(s){}
}
}
i(moon_map,function(i,s){
if(t=h.prefix+s,r=!!i&&i.replace(f,""),e=!!a&&a.getItem(t),version=!!a&&(a.getItem(t+"_ver")||"").replace(f,""),
h.mod_num++,r&&-1!=r.indexOf(".css")?h.cacheData.css_mod_num++:r&&-1!=r.indexOf(".js")&&h.cacheData.js_mod_num++,
h.clearSample||!e||r!=version)h.unload.push(r.replace(f,"")),r&&-1!=r.indexOf(".css")?e?r!=version&&h.cacheData.css_expired_num++:h.cacheData.css_not_hit_num++:r&&-1!=r.indexOf(".js")&&(e?r!=version&&h.cacheData.js_expired_num++:h.cacheData.js_not_hit_num++);else{
if("https:"==location.protocol&&window.moon_hash_map&&window.moon_hash_map[s]&&window.crypto)try{
n(e).then(function(e){
window.moon_hash_map[s]!=e&&console.log(s);
});
}catch(c){}
try{
var d="//# sourceURL="+s+"\n//@ sourceURL="+s;
o.eval.call(o,'define("'+s+'",[],'+e+")"+d),h.hit_num++,r&&-1!=r.indexOf(".css")?h.cacheData.css_hit_num++:r&&-1!=r.indexOf(".js")&&h.cacheData.js_hit_num++;
}catch(c){
h.unload.push(r.replace(f,""));
}
}
}),h.load(h.genUrl());
},
genUrl:function(){
var e=h.unload;
if(!e||e.length<=0)return[];
var o,t,n="",r=[],i={},a=-1!=location.search.indexOf("no_moon2=1"),s="//"+p;
-1!=location.href.indexOf("moon_debug2=1")&&(s="//mp.weixin.qq.com");
for(var c=0,d=e.length;d>c;++c){
/^\/(.*?)\//.test(e[c]);
var _=/^\/(.*?)\//.exec(e[c]);
_.length<2||!_[1]||(t=_[1],n=i[t],n?(o=n+","+e[c],o.length>1e3||a?(r.push(n+"?v="+h.version),
n=location.protocol+s+e[c],i[t]=n):(n=o,i[t]=n)):(n=location.protocol+s+e[c],i[t]=n));
}
for(var m in i)i.hasOwnProperty(m)&&r.push(i[m]);
return r;
},
load:function(e){
if(window.__wxgspeeds&&(window.__wxgspeeds.mod_num=h.mod_num,window.__wxgspeeds.hit_num=h.hit_num),
!e||e.length<=0)return seajs.combo_status=seajs.COMBO_LOADED,seajs.run(),console.debug&&console.debug("[moon] load js complete, all in cache, cost time : 0ms, total count : "+h.mod_num+", hit num: "+h.hit_num),
void window.__moonclientlog.push("[moon] load js complete, all in cache, cost time : 0ms, total count : "+h.mod_num+", hit num: "+h.hit_num);
seajs.combo_status=seajs.COMBO_LOADING;
var o=0,t=+new Date;
window.__wxgspeeds&&(window.__wxgspeeds.combo_times=[],window.__wxgspeeds.combo_times.push(t)),
i(e,function(n){
h.request(n,u,function(){
if(window.__wxgspeeds&&window.__wxgspeeds.combo_times.push(+new Date),o++,o==e.length){
var n=+new Date-t;
window.__wxgspeeds&&(window.__wxgspeeds.mod_downloadtime=n),seajs.combo_status=seajs.COMBO_LOADED,
seajs.run(),console.debug&&console.debug("[moon] load js complete, url num : "+e.length+", total mod count : "+h.mod_num+", hit num: "+h.hit_num+", use time : "+n+"ms"),
window.__moonclientlog.push("[moon] load js complete, url num : "+e.length+", total mod count : "+h.mod_num+", hit num: "+h.hit_num+", use time : "+n+"ms");
}
});
});
},
request:function(o,n,r){
if(o){
n=n||0,o.indexOf("mp.weixin.qq.com")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_32_1&r="+Math.random(),
window.__moon_report([{
offset:_,
log:"load_script_from_mp: "+o
}],1));
var i=-1;
window.__DEBUGINFO&&(__DEBUGINFO.res_list||(__DEBUGINFO.res_list=[]),__DEBUGINFO.res_list.push({
type:"js",
status:"pendding",
start:+new Date,
end:0,
url:o
}),i=__DEBUGINFO.res_list.length-1),-1!=location.search.indexOf("no_lshttps=1")&&(o=o.replace("http://","https://"));
var a=document.createElement("script");
a.src=o,a.type="text/javascript",a.async=!0,a.down_time=+new Date,a.onerror=function(s){
t(i,"status","error"),t(i,"end",+new Date);
var _=new Error(s);
if(n>=0)if(w>n){
var l=o.replace("res.wx.qq.com","mp.weixin.qq.com");
h.request(l,n,r);
}else h.request(o,n,r);else window.__moon_report&&window.__moon_report([{
offset:c,
log:"load_script_error: "+o,
e:_
}],1);
if(n==w-1&&window.__moon_report([{
offset:d,
log:"load_script_error: "+o,
e:_
}],1),-1==n){
var u="ua: "+window.navigator.userAgent+", time="+(+new Date-a.down_time)+", load_script_error -1 : "+o;
window.__moon_report([{
offset:m,
log:u
}],1);
}
window.__moonclientlog.push("moon load js error : "+o+", error -> "+_.toString()),
e("moon_request_error url:"+o);
},"undefined"!=typeof moon_crossorigin&&moon_crossorigin&&a.setAttribute("crossorigin",!0),
a.onload=a.onreadystatechange=function(){
t(i,"status","loaded"),t(i,"end",+new Date),!a||a.readyState&&!/loaded|complete/.test(a.readyState)||(t(i,"status","200"),
a.onload=a.onreadystatechange=null,"function"==typeof r&&r());
},n--,s.appendChild(a),e("moon_request url:"+o+" retry:"+n);
}
},
setItem:function(e,o){
!!a&&a.setItem(e,o);
},
clear:function(){
a&&(i(a,function(e,o){
~o.indexOf(h.prefix)&&a.removeItem(o);
}),console.debug&&console.debug("[moon] clear"));
},
idkeyReport:function(e,o,t){
t=t||1;
var n=e+"_"+o+"_"+t;
(new Image).src="/mp/jsmonitor?idkey="+n+"&r="+Math.random();
}
};
seajs&&seajs.use&&"string"==typeof window.__moon_mainjs&&seajs.use(window.__moon_mainjs),
window.moon=h;
}(window),function(){
try{
Math.random()<1;
}catch(e){}
}(),window.moon.init();
};
e(),!!window.__moon_initcallback&&window.__moon_initcallback(),window.__wxgspeeds&&(window.__wxgspeeds.moonendtime=+new Date);
}
}
__moonf__(); }, 25);</script><script nonce="962845775" type="text/javascript">
    var real_show_page_time = +new Date();
    if (!!window.addEventListener){
        window.addEventListener("load", function(){
            window.onload_endtime = +new Date();
        });
    }
    
</script>

    </body>
    <script nonce="962845775" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>

<!--tailTrap<body></body><head></head><html></html>-->


    `;


    WxParse.wxParse('article', 'html', article, that, 5);

   
  },
})
