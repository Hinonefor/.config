(function () {
var ytcW = false, u=0;
var debounceTimeout, dbYTads = 0, dbTTAds = 0;
var observer = new MutationObserver(function(mutations) {
	var i = mutations.length-1;
	if (mutations[i].target.className.indexOf("ad-interrupting")>=0){
		if (!alwCh())  { checkv(); }
		return;
	};
});

function alwCh(){
	if (!ytcW){
		return false;
	}else{
		var r = !document.querySelector("body.allowAdsOnThisBody");
		if (!r){
			return true;
		}else{
			addChId();
			return !!document.querySelector("body.allowAdsOnThisBody");
		}
	}	
}

function countAdL(event) {
    if (event.source != window) return;
    if (event.data.t && (event.data.t == "cntv") && event.data.v>0) {
	    var vv = event.data.v + 0; if (vv>9) vv=4;
        countAd(vv, 21);
    }
}

function countAd(x, y) {
    clearTimeout(debounceTimeout);
	dbYTads = dbYTads + x; dbTTAds = dbTTAds + y;
    debounceTimeout = setTimeout(function(){countYTAd(dbYTads, dbTTAds)}, 2000);
}

function countYTAd(x, y){
	chrome.storage.sync.get({"YTads": 0, "TTads": 0}, function(items) {
		chrome.storage.sync.set({YTads: items['YTads']+x, TTads: items['TTads']+y});
		 dbYTads = 0; dbTTAds = 0;
	});
}

function getStorage() {
	chrome.storage.sync.get({"isEnabled": true, "YTads": 0, "ytcW": {}, "u": ""}, function(items) {
		if (items['isEnabled']) {
			if (items.u.split('')[12]!='l'&&items.YTads>199)chrome.storage.sync.set({"isEnabled": !1});
			ytcW = (items['ytcW'] && Object.keys(items['ytcW']).length>0)?items['ytcW']:false;
			u=items["u"].length; checkUC(); blockYT(); addChId();
		}
	});
}

function checkv(){
	var v = document.querySelector("#player .ad-interrupting video");
	if (v && v.src!=""){
		v.src = "";
		countAd(1, 30);
	}
}

function startObs(px){
	if (px){
		observer.disconnect();
		observer.observe(px, {attributes: true, attributeFilter: ["class"]});	
	}
}

function playerL(){
	var p = document.getElementById("player");
	if (p){
		p.removeEventListener("DOMSubtreeModified", playerL);
		startObs(document.querySelector("#player .html5-video-player"));
	}
}

function getMeta(x, tip){
	var element = document.querySelector(x);
	if (!tip){
		return element && element.textContent;
	}
	return element && element.getAttribute(tip);	
}

function countTextAds(){
		countAd(document.querySelectorAll("body:not(.allowAdsOnThisBody) .ad-container, body:not(.allowAdsOnThisBody) #google_companion_ad_div, body:not(.allowAdsOnThisBody) .iv-promo, body:not(.allowAdsOnThisBody) .iv-promo-video, body:not(.allowAdsOnThisBody) .contains-mute-button, body:not(.allowAdsOnThisBody) .video-annotations, body:not(.allowAdsOnThisBody) .ad-div, body:not(.allowAdsOnThisBody) #masthead-ad, body:not(.allowAdsOnThisBody) #video-masthead, body:not(.allowAdsOnThisBody) .video-masthead-v2, body:not(.allowAdsOnThisBody) ytd-compact-promoted-video-renderer, body:not(.allowAdsOnThisBody) #promotion-shelf, body:not(.allowAdsOnThisBody) .ytp-ad-progress-list, body:not(.allowAdsOnThisBody) .ad-created .annotation, body:not(.allowAdsOnThisBody) .ytp-cards-teaser, body:not(.allowAdsOnThisBody) #player-ads").length, 1);//(c)adsblock.org
}

function addChId(){
	if (!ytcW){
		countTextAds();
		return;
	}
	var cN = "allowAdsOnThisBody";
	var body = document.querySelector("body") || document.body;
	var id = getChId();
	if (!id || !ytcW[id]){
		if (window.self === window.top)	chrome.runtime.sendMessage({"a": "iconGreen", "b": false});
		if (id){
			countTextAds();
		}
		if (body.classList.contains(cN)){
			body.classList.remove(cN);
		}
		return;
	}
	if (!body.classList.contains(cN)){
		observer.disconnect();
		body.classList.add(cN);
	}
	chrome.runtime.sendMessage({"a": "iconGreen", "b": true, "c": "3"});
}

function getChId(){
	var id = getMeta('meta[itemprop="channelId"]', "content");
	if (id){
		return id;
	}
	id = getMeta("ytd-watch:not([hidden]) #owner-container a", "href");
	if (id)return id.split("/").pop();
	if (window.location.pathname && window.location.pathname.startsWith("/channel/UC")){
		return window.location.pathname.substr(9);
	}
}

function getCh(){
	var id = getChId();
	if (id){
		var name = getMeta('.yt-user-info a.g-hovercard[data-ytid="'+id+'"]', false) ||
		getMeta('.branded-page-header-title-link', "title") || getMeta('ytd-watch:not([hidden]) #owner-container a') || getMeta('#channel-title') || false;
		if (name === false) return false;
		return {"id":id, "name": name};
	}
	return false;
}

function checkUC(){
	var target = document.getElementsByTagName("title")[0];
	if (!target) return;
	var obs = new MutationObserver(function(mutations) {
	    addChId();
	    blockYT();
	});
	obs.observe(target, { subtree: true, characterData: true, childList: true });
}

function blockYT() {
	var p = document.getElementById("player");
	var px = document.querySelector("#player .html5-video-player");
	px?startObs(px):(p && p.addEventListener("DOMSubtreeModified", playerL));	
};

return {
    initialize: function () {  
	  	chrome.storage.onChanged.addListener(function(changes, namespace) {
		  	if (changes.isEnabled || changes.ytcW){
				getStorage();
			}
		});
		chrome.runtime.onMessage.addListener(
			function(request, sender, sendResponse) {
				if (window.self !== window.top) return;
				if( request.a === "getCh" ) {
					sendResponse({a:true, r:getCh(), s:document.documentElement.innerHTML});
				}else if( request.a === "blockAds" ) {
					sendResponse(alwCh());
				}			
			}
		);
		window.addEventListener("message", countAdL, false);
		window.addEventListener("spfdone", 	function(){
			addChId();
		});
		getStorage();
	}
}

})().initialize()
