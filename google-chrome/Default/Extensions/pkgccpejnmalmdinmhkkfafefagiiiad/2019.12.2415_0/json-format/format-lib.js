let JsonFormatEntrance=function(){"use strict";let e,t,n,o,l,a,i=0,s="",r=function(e){let t=(new Date).format("yyyyMMddHHmmss"),n=new Blob([e],{type:"application/octet-stream"}),o=$('<button class="xjf-btn xjf-btn-right">下载JSON</button>').appendTo("#optionBar");"undefined"!=typeof chrome&&chrome.permissions?o.click(function(e){chrome.permissions.request({permissions:["downloads"]},e=>{e?chrome.downloads.download({url:URL.createObjectURL(n),saveAs:!0,conflictAction:"overwrite",filename:"FeHelper-"+t+".json"}):toast("必须接受授权，才能正常下载！")})}):o.click(function(e){let o=$("#aLinkDownload");o[0]||((o=$('<a id="aLinkDownload" target="_blank" title="保存到本地">下载JSON数据</a>').appendTo("body")).attr("download","FeHelper-"+t+".json"),o.attr("href",URL.createObjectURL(n))),o[0].click()})},c=function(e){let t=e.text().replace(/":\s/gm,'":').replace(/,$/,"").trim();/^{/.test(t)&&/\}$/.test(t)||/^\[/.test(t)&&/\]$/.test(t)||(t="{"+t+"}");try{t=JSON.stringify(JSON.parse(t),null,4)}catch(e){}return t},d=function(t){(o=$("#boxOpt")).length||(o=$('<div id="boxOpt"><a class="opt-download" target="_blank">下载</a>|<a class="opt-copy">复制</a>|<a class="opt-del">删除</a></div>').appendTo(e)),o.find("a.opt-download").unbind("click").bind("click",function(e){let n=c(t),o=(new Date).format("yyyyMMddHHmmss"),l=new Blob([n],{type:"application/octet-stream"});"undefined"!=typeof chrome&&chrome.permissions?chrome.permissions.request({permissions:["downloads"]},e=>{e?chrome.downloads.download({url:URL.createObjectURL(l),saveAs:!0,conflictAction:"overwrite",filename:"FeHelper-"+o+".json"}):toast("必须接受授权，才能正常下载！")}):$(this).attr("download","FeHelper-"+o+".json").attr("href",URL.createObjectURL(l))}),o.find("a.opt-copy").unbind("click").bind("click",function(e){!function(e){let t=document.createElement("textarea");t.style.position="fixed",t.style.opacity=0,t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),toast("Json片段复制成功，随处粘贴可用！")}(c(t))}),o.find("a.opt-del").unbind("click").bind("click",function(e){if(t.parent().is("#formattedJson"))return toast("如果连最外层的Json也删掉的话，就没啥意义了哦！"),!1;toast("节点已删除成功！"),t.remove(),o.css("top",-1e3).hide(),l&&l.hide()}),o.css({left:t.offset().left+t.width()-90,top:t.offset().top}).show()};function p(e){let t;$.each(e,function(e){if((t=$(this)).children(".blockInner").length&&(t.addClass("collapsed"),!t.attr("id"))){t.attr("id","kvov"+ ++i);let e=t.children(".blockInner").eq(0).children().length,o=e+(1===e?" item":" items");n[0].insertAdjacentHTML("beforeend","\n#kvov"+i+'.collapsed:after{color: #aaa; content:" // '+o+'"}')}})}let f=function(){let n=$("#optionBar");n.length?n.html(""):n=$('<span id="optionBar" />').appendTo(e.parent()),$('<span class="x-split">|</span>').appendTo(n);let a=$('<button class="xjf-btn xjf-btn-left">元数据</button>').appendTo(n),i=$('<button class="xjf-btn xjf-btn-mid">折叠所有</button>').appendTo(n),s=!1;a.bind("click",function(n){s?(s=!1,t.hide(),e.show(),a.text("元数据")):(s=!0,t.show(),e.hide(),a.text("格式化")),o&&o.hide(),l&&l.hide()}),i.bind("click",function(e){s&&a.trigger("click"),"折叠所有"===i.text()?(i.text("展开所有"),p($(".objProp,.arrElem"))):(i.text("折叠所有"),$(".objProp,.arrElem").removeClass("collapsed")),o&&o.hide(),l&&l.hide()})},u=function(){$("#jfContent span.e").bind("click",function(e){e.preventDefault();let t=$(this).parent();t.toggleClass("collapsed"),t.hasClass("collapsed")&&p(t)}),$("#jfContent .kvov").bind("click",function(e){if($(this).hasClass("x-outline"))return o&&o.hide(),l&&l.hide(),$(this).removeClass("x-outline"),e.stopPropagation(),!0;$(".x-outline").removeClass("x-outline");let t=$(this).removeClass("x-hover").addClass("x-outline");d(t),function(e){let t=[];do{if(e.hasClass("arrElem")?e.hasClass("rootKvov")||t.unshift("["+e.prevAll(".kvov").length+"]"):t.unshift(e.find(">.k").text()),e.parent().hasClass("rootKvov")||e.parent().parent().hasClass("rootKvov"))break;e=e.parent().parent()}while(e.length&&!e.hasClass("rootKvov"));let n=t.join("#@#").replace(/#@#\[/g,"[").replace(/#@#/g,".");l||(l=$("<div/>").css({position:"fixed",bottom:0,left:0,background:"rgb(0, 0, 0,0.6)",color:"#ff0",fontSize:"12px",fontWeight:"bold",padding:"2px 10px 2px 2px",zIndex:10}).appendTo("body")),l.html("当前路径："+n).show()}(t),$(e.target).is(".kvov .e")?$(e.target).parent().trigger("click"):e.stopPropagation(),"function"==typeof window._OnJsonItemClickByFH&&window._OnJsonItemClickByFH(c(t))}).bind("mouseover",function(e){return $(this).addClass("x-hover"),!1}).bind("mouseout",function(e){$(this).removeClass("x-hover")})};return{format:function(o){s=JSON.stringify(JSON.parse(o),null,4),function(){(e=$("#jfContent"))[0]||(e=$('<div id="jfContent" />').appendTo("body")),(t=$("#jfContent_pre"))[0]||(t=$('<pre id="jfContent_pre" />').appendTo("body")),(n=$("#jfStyleEl"))[0]||(n=$('<style id="jfStyleEl" />').appendTo("head")),(a=$("#formattingMsg"))[0]||(a=$('<div id="formattingMsg"><span class="x-loading"></span>格式化中...</div>').appendTo("body"));try{e.html("").show(),t.html("").hide(),l&&l.hide(),a.hide()}catch(e){}}(),t.html(s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),JsonFormatDealer.postMessage({type:"SENDING TEXT",text:o,length:o.length})},postMessage:function(n){switch(n[0]){case"NOT JSON":t.show(),e.html('<span class="x-json-tips">JSON不合法，请检查：</span>');break;case"FORMATTING":a.show();break;case"FORMATTED":a.hide(),e.html(n[1]),f(),u(),r(s);break;default:throw new Error("Message not understood: "+n[0])}}}}(),JsonFormatDealer=function(){"use strict";let e=1,t=2,n=3,o=4,l=5,a=6;function i(e){let t={singleQuote:!1,doubleQuote:!1,regex:!1,blockComment:!1,lineComment:!1,condComp:!1};for(let n=0,o=(e=("__"+e+"__").split("")).length;n<o;n++)if(t.regex)"/"===e[n]&&"\\"!==e[n-1]&&(t.regex=!1);else if(t.singleQuote)"'"===e[n]&&"\\"!==e[n-1]&&(t.singleQuote=!1);else if(t.doubleQuote)'"'===e[n]&&"\\"!==e[n-1]&&(t.doubleQuote=!1);else if(t.blockComment)"*"===e[n]&&"/"===e[n+1]&&(e[n+1]="",t.blockComment=!1),e[n]="";else if(t.lineComment)"\n"!==e[n+1]&&"\r"!==e[n+1]||(t.lineComment=!1),e[n]="";else if(t.condComp)"@"===e[n-2]&&"*"===e[n-1]&&"/"===e[n]&&(t.condComp=!1);else if(t.doubleQuote='"'===e[n],t.singleQuote="'"===e[n],"/"===e[n]){if("*"===e[n+1]&&"@"===e[n+2]){t.condComp=!0;continue}if("*"===e[n+1]){e[n]="",t.blockComment=!0;continue}if("/"===e[n+1]){e[n]="",t.lineComment=!0;continue}t.regex=!0}return e.join("").slice(2,-2)}let s=document.createElement("div"),r=document.createElement("span");function c(e,t){let n=r.cloneNode(!1);return n.className=t,n.innerText=e,n}function d(e){let t=r.cloneNode(!1);return t.className=e,t}let p={t_kvov:function(e){let t=s.cloneNode(!1);return t.className=e,t}("kvov"),t_key:d("k"),t_string:d("s"),t_number:d("n"),t_exp:d("e"),t_null:c("null","nl"),t_true:c("true","bl"),t_false:c("false","bl"),t_oBrace:c("{","b"),t_cBrace:c("}","b"),t_oBracket:c("[","b"),t_cBracket:c("]","b"),t_ellipsis:d("ell"),t_blockInner:d("blockInner"),t_colonAndSpace:document.createTextNode(": "),t_commaText:document.createTextNode(","),t_dblqText:document.createTextNode('"')};function f(i,s){let c=function i(s,c){let d,f,u,m,h,b,g,N,C=p;if(d="string"==typeof s?e:"number"==typeof s?t:!1===s||!0===s?l:null===s?a:s instanceof Array?o:n,f=C.t_kvov.cloneNode(!1),d===n||d===o)if("function"==typeof JSON.BigNumber&&s instanceof JSON.BigNumber)s=JSON.stringify(s),d=t;else{for(m in u=!1,s)if(s.hasOwnProperty(m)){u=!0;break}u&&f.appendChild(C.t_exp.cloneNode(!0))}switch(!1!==c?(f.classList.add("objProp"),(h=C.t_key.cloneNode(!1)).textContent=JSON.stringify(c).slice(1,-1),f.appendChild(C.t_dblqText.cloneNode(!1)),f.appendChild(h),f.appendChild(C.t_dblqText.cloneNode(!1)),f.appendChild(C.t_colonAndSpace.cloneNode(!1))):f.classList.add("arrElem"),d){case e:let p=r.cloneNode(!1),m=JSON.stringify(s);if(m=m.substring(1,m.length-1),"h"===s[0]&&"http"===s.substring(0,4)){let e=document.createElement("A");e.href=s,e.innerText=m,p.appendChild(e)}else p.innerText=m;(b=C.t_string.cloneNode(!1)).appendChild(C.t_dblqText.cloneNode(!1)),b.appendChild(p),b.appendChild(C.t_dblqText.cloneNode(!1)),f.appendChild(b);break;case t:(b=C.t_number.cloneNode(!1)).innerText=s,f.appendChild(b);break;case n:if(f.appendChild(C.t_oBrace.cloneNode(!0)),u){f.appendChild(C.t_ellipsis.cloneNode(!1)),g=C.t_blockInner.cloneNode(!1);let e,t,n=0;for(e in s)s.hasOwnProperty(e)&&(n++,N=i(s[e],e),t=C.t_commaText.cloneNode(),N.appendChild(t),g.appendChild(N));N.removeChild(t),f.appendChild(g)}f.appendChild(C.t_cBrace.cloneNode(!0));break;case o:if(f.appendChild(C.t_oBracket.cloneNode(!0)),u){f.appendChild(C.t_ellipsis.cloneNode(!1)),g=C.t_blockInner.cloneNode(!1);for(let e=0,t=s.length,n=t-1;e<t;e++)N=i(s[e],!1),e<n&&N.appendChild(C.t_commaText.cloneNode()),g.appendChild(N);f.appendChild(g)}f.appendChild(C.t_cBracket.cloneNode(!0));break;case l:s?f.appendChild(C.t_true.cloneNode(!0)):f.appendChild(C.t_false.cloneNode(!0));break;case a:f.appendChild(C.t_null.cloneNode(!0))}return f}(i,!1);c.classList.add("rootKvov");let d=document.createElement("DIV");d.id="formattedJson",d.appendChild(c);let f=d.outerHTML;return null!==s&&(f='<div id="jsonpOpener">'+s+" ( </div>"+f+'<div id="jsonpCloser">)</div>'),f}return{postMessage:function(e){let t=null;if("SENDING TEXT"===e.type){let n,o=e.text;try{n=JSON.parse(o)}catch(e){let l;if(!(l=(o=o.trim()).indexOf("(")))return void JsonFormatEntrance.postMessage(["NOT JSON","no opening parenthesis"]);let a,s=i(o.substring(0,l)).trim();if(!s.match(/^[a-zA-Z_$][\.\[\]'"0-9a-zA-Z_$]*$/))return void JsonFormatEntrance.postMessage(["NOT JSON","first bit not a valid function name"]);if(!(a=o.lastIndexOf(")")))return void JsonFormatEntrance.postMessage(["NOT JSON","no closing paren"]);let r=i(o.substring(a+1)).trim();if(""!==r&&";"!==r)return void JsonFormatEntrance.postMessage(["NOT JSON","last closing paren followed by invalid characters"]);o=o.substring(l+1,a);try{n=JSON.parse(o)}catch(e){return void JsonFormatEntrance.postMessage(["NOT JSON","looks like a function call, but the parameter is not valid JSON"])}t=s}if("object"!=typeof n&&"array"!=typeof n)return void JsonFormatEntrance.postMessage(["NOT JSON","technically JSON but not an object or array"]);JsonFormatEntrance.postMessage(["FORMATTING"]);try{localStorage.getItem("just test : Blocked script execution in xxx?"),setTimeout(function(){let e=f(n,t);JsonFormatEntrance.postMessage(["FORMATTED",e])},0)}catch(e){let o=f(n,t);JsonFormatEntrance.postMessage(["FORMATTED",o])}}}}}();export default{format:JsonFormatEntrance.format};