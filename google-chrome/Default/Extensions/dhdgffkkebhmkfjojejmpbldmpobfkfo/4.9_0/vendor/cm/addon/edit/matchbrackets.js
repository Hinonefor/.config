(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function p(a,c,b){var l=a.getLineHandle(c.line),d=c.ch-1,g=b&&b.afterCursor;null==g&&(g=/(^| )cm-fat-cursor($| )/.test(a.getWrapperElement().className));l=!g&&0<=d&&r[l.text.charAt(d)]||r[l.text.charAt(++d)];if(!l)return null;g=">"==l.charAt(1)?1:-1;if(b&&b.strict&&0<g!=(d==c.ch))return null;var h=a.getTokenTypeAt(m(c.line,
d+1));a=t(a,m(c.line,d+(0<g?1:0)),g,h||null,b);return null==a?null:{from:m(c.line,d),to:a&&a.pos,match:a&&a.ch==l.charAt(0),forward:0<g}}function t(a,c,b,l,d){var g=d&&d.maxScanLineLength||1E4,h=d&&d.maxScanLines||1E3,f=[];d=d&&d.bracketRegex?d.bracketRegex:/[(){}[\]]/;for(var h=0<b?Math.min(c.line+h,a.lastLine()+1):Math.max(a.firstLine()-1,c.line-h),k=c.line;k!=h;k+=b){var e=a.getLine(k);if(e){var n=0<b?0:e.length-1,p=0<b?e.length:-1;if(!(e.length>g))for(k==c.line&&(n=c.ch-(0>b?1:0));n!=p;n+=b){var q=
e.charAt(n);if(d.test(q)&&(void 0===l||a.getTokenTypeAt(m(k,n+1))==l))if(">"==r[q].charAt(1)==0<b)f.push(q);else if(f.length)f.pop();else return{pos:m(k,n),ch:q}}}}return k-b==(0<b?a.lastLine():a.firstLine())?!1:null}function u(a,c,b){for(var e=a.state.matchBrackets.maxHighlightLineLength||1E3,d=[],g=a.listSelections(),h=0;h<g.length;h++){var f=g[h].empty()&&p(a,g[h].head,b);if(f&&a.getLine(f.from.line).length<=e){var k=f.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";d.push(a.markText(f.from,
m(f.from.line,f.from.ch+1),{className:k}));f.to&&a.getLine(f.to.line).length<=e&&d.push(a.markText(f.to,m(f.to.line,f.to.ch+1),{className:k}))}}if(d.length)if(w&&a.state.focused&&a.focus(),b=function(){a.operation(function(){for(var a=0;a<d.length;a++)d[a].clear()})},c)setTimeout(b,800);else return b}function v(a){a.operation(function(){a.state.matchBrackets.currentlyHighlighted&&(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null);a.state.matchBrackets.currentlyHighlighted=
u(a,!1,a.state.matchBrackets)})}var w=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),m=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"};e.defineOption("matchBrackets",!1,function(a,c,b){b&&b!=e.Init&&(a.off("cursorActivity",v),a.state.matchBrackets&&a.state.matchBrackets.currentlyHighlighted&&(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null));c&&(a.state.matchBrackets="object"==typeof c?c:{},a.on("cursorActivity",
v))});e.defineExtension("matchBrackets",function(){u(this,!0)});e.defineExtension("findMatchingBracket",function(a,c,b){if(b||"boolean"==typeof c)b?(b.strict=c,c=b):c=c?{strict:!0}:null;return p(this,a,c)});e.defineExtension("scanForBracket",function(a,c,b,e){return t(this,a,c,b,e)})});
