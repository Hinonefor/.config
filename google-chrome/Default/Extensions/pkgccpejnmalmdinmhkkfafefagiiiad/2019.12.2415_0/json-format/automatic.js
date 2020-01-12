import{}from"../static/vendor/json-bigint/index.js";import Formatter from"./format-lib.js";import JsonSort from"./jsonabc.js";import{MSG_TYPE,JsonEnDecode}from"../static/js/common.js";export default(()=>{"use strict";let e="",t=0,n=null,s=null,a=null,o=null,l=!1,r=['<div class="x-toolbar" style="display:none">    <a href="http://www.baidufe.com/fehelper/feedback.html" target="_blank" class="x-a-title">        <img src="'+chrome.runtime.getURL("static/img/fe-16.png")+'" alt="fehelper"/> FeHelper</a>        <span class="x-b-title"></span>        <span class="x-split">|</span>\n        <input type="checkbox" id="json_endecode"><label for="json_endecode">自动解码</label>        <span class="x-sort">            <span class="x-split">|</span>            <span class="x-stitle">排序：</span>            <label for="sort_null">默认</label><input type="radio" name="jsonsort" id="sort_null" value="0" checked>            <label for="sort_asc">升序</label><input type="radio" name="jsonsort" id="sort_asc" value="1">            <label for="sort_desc">降序</label><input type="radio" name="jsonsort" id="sort_desc" value="-1">        </span>    <span class="x-split">|</span>\n    <button class="xjf-btn" id="jsonGetCorrectCnt">乱码修正</button>    <span id="optionBar"></span>    <span class="fe-feedback">        <a href="https://github.com/zxlie/FeHelper" target="_blank" tabindex="-1" class="x-github" title="访问Github">            <svg height="16" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>            </svg>Github</a>        <a href="https://www.baidufe.com/fehelper/feedback.html" target="_blank" tabindex="-1" class="x-fb" title="提交意见反馈">            <svg version="1.1" width="14" height="14" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">                <path d="M384,0H42.667C19.093,0,0.213,19.093,0.213,42.667L0,426.667l85.333-85.333H384c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M234.667,256H192v-42.667h42.667V256z M234.667,170.667H192V85.333h42.667V170.667z"/>            </svg>反馈</a>        <a class="x-settings" tabindex="-1" title="FeHelper配置项">            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14">                <path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>            </svg>设置</a>    </span></div>','<div id="formattingMsg"><span class="x-loading"></span>格式化中...</div>','<div class="mod-json mod-contentscript"><div class="rst-item">','<div id="jfCallbackName_start" class="callback-name"></div>','<div id="jfContent"></div>','<pre id="jfContent_pre"></pre>','<div id="jfCallbackName_end" class="callback-name"></div>',"</div></div>"].join(""),i=function(e){let t=0;if("object"==typeof e){let n=Object.keys(e);t+=n.length,n.forEach(n=>{e[n]&&"object"==typeof e[n]&&(t+=i(e[n]))})}return t},c=function(t){let s=e;if(0!==(t=t||0)){let n=JsonSort.sortObj(JSON.parse(e),parseInt(t),!0);s=JSON.stringify(n)}l?(async()=>{let e=await JsonEnDecode.urlDecodeByFetch(s);s=JsonEnDecode.uniDecode(e),Formatter.format(s),$(".x-toolbar").fadeIn(500)})():(Formatter.format(s),$(".x-toolbar").fadeIn(500)),null!=n&&(a&&o?($("#jfCallbackName_start").html('<pre style="padding:0">'+a+"</pre>"+n+"("),$("#jfCallbackName_end").html(')<br><pre style="padding:0">'+o+"</pre>")):($("#jfCallbackName_start").html(n+"("),$("#jfCallbackName_end").html(")")))},d=function(){$("[name=jsonsort]").click(function(e){let n=parseInt(this.value);n!==t&&(c(n),t=n),localStorage.setItem("json_sort_type_key",n)}),$("#json_endecode").click(function(e){l=this.checked,localStorage.setItem("json_auto_decode",l),c(t)}),$(".fe-feedback .x-settings").click(function(e){chrome.runtime.sendMessage({type:MSG_TYPE.OPEN_OPTION_PAGE})}),$("#jsonGetCorrectCnt").click(function(n){fetch(location.href).then(e=>e.text()).then(n=>{e=n,c(t)})})};return{format:function(p){let f=function(){let e=($("body>pre:eq(0)")[0]||{textContent:""}).textContent.trim();if(e||(e=(document.body.textContent||"").trim()),!e)return!1;let t=document.body.childNodes,n="";for(let s=0,a=t.length;s<a;s++)if(t[s].nodeType===Node.TEXT_NODE)n+=t[s].textContent;else{if(t[s].nodeType!==Node.ELEMENT_NODE)return!1;{let n=t[s].tagName.toLowerCase(),a=(t[s].textContent||"").trim();if("pre"===n&&a===e);else if(0!==t[s].offsetWidth&&0!==t[s].offsetHeight&&a||-1!==["script","link"].indexOf(n))return!1}}return(n||"").trim()||e}();if(f){try{let e=/^([\w\.]+)\(\s*([\s\S]*)\s*\)$/gm,t=/^(try\s*\{\s*)?/g,l=/([;\s]*\}\s*catch\s*\(\s*\S+\s*\)\s*\{([\s\S])*\})?[;\s]*$/g,r=f.replace(t,function(){return a=a||arguments[1],""}).replace(l,function(){return o=o||arguments[1],""}).trim(),i=e.exec(r);if(null!=i&&(a&&o||!a&&!o))n=i[1],f=i[2];else if(!(e=/^([\{\[])/).test(f))return;s=JSON.parse(f)}catch(e){try{s=new Function("return "+f)()}catch(e){try{if("string"==typeof(s=new Function("return '"+f+"'")()))try{s=JSON.parse(s)}catch(e){s=new Function("return "+s)()}}catch(e){return}}}if(null!=s&&"object"==typeof s){try{f=JSON.stringify(s)}catch(e){return}if(p&&p.MAX_JSON_KEYS_NUMBER){let e=i(s);if(e>p.MAX_JSON_KEYS_NUMBER){let t='当前JSON共 <b style="color:red">'+e+"</b> 个Key，大于预设值"+p.MAX_JSON_KEYS_NUMBER+"，已取消自动格式化；可到FeHelper设置页调整此配置！";return toast(t)}}let n=chrome.extension.getURL("json-format/without-ui.css");$('<link href="'+n+'" rel="stylesheet" type="text/css" />').appendTo("head"),$("body").html(r),e=f,t=parseInt(localStorage.getItem("json_sort_type_key")||0),c(t),$("[name=jsonsort][value="+t+"]").attr("checked",1),l=null===(l=localStorage.getItem("json_auto_decode"))?p&&p.AUTO_TEXT_DECODE:"true"===l,$("#json_endecode").prop("checked",l),d()}}}}})();