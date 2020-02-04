(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-93290101-2', 'auto');
ga('set', 'checkProtocolTask', function(){});

$(function() {
	var mine = {};
	var u, ut;
	var vars = ["isEnabled", "blockSponsored", "blockAds", "blockPUMK", "blockRG", "highlightAds", "blockFb"];
		vars.forEach(function(e) {
   		mine[e] = document.getElementById(e);
	});
		
	var handleCheckBox = function() {
		var m = {};
		vars.forEach(function(e) {
   			m[e] = $(mine[e]).is(':checked');
		});
		chrome.storage.sync.set(m);
	}
	
	
	var chAllow = function(gt){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {a:"getCh"}, function(chr){
				var activeTab = tabs[0].id;
				var ch = chr?chr.r:false;
				
				$("#problems").click(function(){
					$("body").addClass("open-send-bug");
					if (tabs[0].url.indexOf(".youtube.com")<0){
						$("#thankyou").text("Please navigate to the YouTube page where you seen ads first!");
						$("#thankyou").css("display","block");	
						return;
					}
					$('.send-bug input[type="checkbox"]').iCheck({checkboxClass: 'icheckbox_square-green', increaseArea:"-30%"});
	
					$("#send-bug").click(function(){
						$("#thankyou").text("Thank You!");
						$("#thankyou").css("display","block");
						var bug_info = {
							sf: $('#form-bugs').serialize(), 
							ft: $('#bug_msg').val(),
							fv: 158,
							su: btoa(tabs[0].url)+"&u="+ut+"&a="+(chr?1:0), 
							sh: chr?chr.s:"-"};	
						setTimeout(function(){$("#thankyou").css("display","none"); $("body").removeClass("open-send-bug");}, 1000);
						$.post(u+"y_bugs/", bug_info);
					});
					$("#cancel-bug").click(function(){
						$("body").removeClass("open-send-bug");
					});
			
				});
				if (!ch){
					chrome.runtime.sendMessage({"a": "iconGreen", "b": false});
					$("#chAllow").attr("disabled", true);
//					$("#channelname").addClass("divhidden");
					return;
				}
				chrome.storage.sync.get({"ytcW":{}}, function(items) {
					var ca = items.ytcW || {};
					if (!gt){
						if ($("#chAllow").prop("checked")){
							ca[ch["id"]] = ch["name"];
						}else{
							delete ca[ch["id"]];
						}
						chrome.storage.sync.set({"ytcW":ca});
					}else{
//						$("#channelname").text(ch["name"]);
						if (ca[ch["id"]]){
							$("#chAllow").prop("checked",true);
						}else{
							$("#chAllow").prop("checked",false);
						}
					}
				});
			});
		});
	}
	
	var timeSaved = function(d) {
		var r = []; // result
		var s = { // structure
		    year: 31536000,
		    month: 2592000,
		    week: 604800, // uncomment row to ignore
		    day: 86400, // feel free to add your own row
		    hour: 3600,
		    min: 60,
		    sec: 1
		};
		Object.keys(s).forEach(function(key) {
		    var rk = Math.floor(d / s[key]);
		    if (rk > 0) {
		        r.push('<span class="red">'+rk + "</span> " + key + (rk > 1 && s[key]>60 ? "s" : ""));
		
		    }
		    d -= rk * s[key];
		});
		return "~ "+r.slice(0, 3).join(" ");
	}
	
	var sendBug = function(bug){
		$.post(u+"y_bug/", bug);
	}
	
	var settingsFB = function(e){
		e.preventDefault();
		$("body").addClass("open-fb-list");
		var mh = $('.main-list').height();
		$('.fb-list').css('height', mh+'px');
		
		$("#backMainF").click(function(){
			$("body").removeClass("open-fb-list");
			chAllow(1);
		});
	}
		
	var addChannels = function(){
		var wct = "";
		var tl = document.getElementById("channelList");
		chrome.storage.sync.get({"ytcW":{}}, function(items) {
			var ev = items["ytcW"];
			var keys = Object.keys(ev);
			
			keys.sort(function(k0, k1) {
			  var a = ev[k0].toLowerCase();
			  var b = ev[k1].toLowerCase();
			  return a < b ? -1 : (a > b ? 1 : 0);
			});
			
			for (var i = 0; i < keys.length; i++) {
				wct += '<li data-c_id="'+keys[i]+'"><span class="chan_del"> </span><span class="chan_name">'+ev[keys[i]]+'</span></li>';
			};
			
			if (wct !== "") tl.innerHTML = wct;
			
			var mh = $('.main-list').height();
			$('.channel-list').css('height', mh+'px');
			$('#channelList').css('height', (mh-75)+'px');
			
			$("body").addClass("open-channel-list");	
			$("#backMain").click(function(){
				$("body").removeClass("open-channel-list");
				chAllow(1);
			});
			$(".chan_del").click(function(){
				var li = this.parentNode;
				var id = li.getAttribute("data-c_id");
				li.parentNode.removeChild(li);
				
				chrome.storage.sync.get({"ytcW":{}}, function(items) {
					var ca = items.ytcW || {};
					delete(ca[id]);
					chrome.storage.sync.set({"ytcW":ca});
				});
			});
		});
	}

	chrome.storage.sync.get({
	    isEnabled: true,
		YTads: 0,
		TTads: 0,
		u: "", 
		iDate: "",
		blockSponsored: true,
		blockAds: true,
		blockPUMK: true,
		blockRG: true,
		blockFb: false,
		highlightAds: false,		
	}, function(items) {
		$("button").blur();
		u = items['u'];
		ut = items['iDate'];
		var TTads = items['YTads']?timeSaved(items['TTads']):0;
		$('#YTAdBlocked').text(items['YTads']);
		if (TTads && TTads != ""){
			$('#TTAdBlocked').html(TTads);
		}
		var isOn = items.isEnabled?"On":"Off";
		ga('send', 'pageview', "/UI/"+isOn+"/"+items.YTads);
		vars.forEach(function(e) {
			$(mine[e]).prop('checked', items[e]).change();
			$(mine[e]).change(handleCheckBox);
		});
		chrome.storage.local.get("ytDs",function(r){
			sendBug({u:ut});
		});
		$('#chAllow').change(function(){chAllow(0)});
		$("#blockFbS").click(settingsFB);
		$("#chAllowS").click(addChannels);
		chAllow(1);
		handleCheckBox();
	});
});