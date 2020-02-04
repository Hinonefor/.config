(window.webpackJsonp = window.webpackJsonp || []).push([ [ 1 ], {
    265: function(e, n, t) {
        "use strict";
        var i, r, a, o, c, l, s, d, u, p, m = t(3), h = t.n(m), f = t(1), b = t.n(f), g = t(2), v = t.n(g), y = t(4), x = t.n(y), k = t(15), w = t(5), S = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "background",
                    kind: "other",
                    settings: {
                        on: !0,
                        hide: !0,
                        toggle: !1
                    }
                }));
                return e.addListener = function() {
                    chrome.runtime.onInstalled.addListener(function(e) {
                        var n = e.reason, t = e.previousVersion;
                        "install" === n ? Object(w.d)(chrome.extension.getURL("config.html?mod=install")) : "update" !== n || Object(w.i)(t) || Object(w.c)("bilibili-helper-update", {
                            type: "basic",
                            iconUrl: "../statics/imgs/cat.svg",
                            title: Object(w.a)("extensionNotificationTitle"),
                            message: Object(w.a)("extensionNotificationExtensionUpdate").replace("%v", w.n)
                        });
                    }), chrome.runtime.setUninstallURL;
                }, e;
            }
            return x()(n, e), n;
        }(k.a), C = t(10), O = t.n(C), L = t(11), D = t.n(L), M = t(20), A = t.n(M), I = t(18), E = t.n(I), j = t(199), q = t.n(j), P = {
            unread: "https://api.bilibili.com/x/feed/unread/count?type=0",
            feed: "https://api.bilibili.com/x/feed/pull?ps=1&type=0",
            dynamic_new: "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new",
            dynamic_num: "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_num",
            dynamic_history: "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history"
        }, T = t(28), U = t.n(T), z = t(0), N = t.n(z), F = t(21), R = t.n(F), H = t(12), B = t.n(H), V = t(7), W = t.n(V), J = t(6), K = t(246), Y = (t(355), 
        t(27)), G = W()([ "\n      margin: 9px 0 9px 10px;\n      max-height: 258px;\n      overflow: auto;\n      & .ReactVirtualized__List::-webkit-scrollbar {\n        display: none;\n      }\n    " ], [ "\n      margin: 9px 0 9px 10px;\n      max-height: 258px;\n      overflow: auto;\n      & .ReactVirtualized__List::-webkit-scrollbar {\n        display: none;\n      }\n    " ]), Z = W()([ "\n      & > * {\n        margin-bottom: 1px;\n      }\n      &:last-of-type > * {\n        margin-bottom: 0;\n      }\n    " ], [ "\n      & > * {\n        margin-bottom: 1px;\n      }\n      &:last-of-type > * {\n        margin-bottom: 0;\n      }\n    " ]), Q = W()([ "\n      position: relative;\n      border-radius: 3px;\n      cursor: pointer;\n      overflow: hidden;\n      &:hover {\n        .feed-img {\n          filter: grayscale(0) brightness(0.8);\n          transform: scale(1);\n        }\n      }\n    " ], [ "\n      position: relative;\n      border-radius: 3px;\n      cursor: pointer;\n      overflow: hidden;\n      &:hover {\n        .feed-img {\n          filter: grayscale(0) brightness(0.8);\n          transform: scale(1);\n        }\n      }\n    " ]), X = W()([ "\n      width: 200px;\n      height: 85px;\n      box-shadow: inset 0px 0px 50px -10px #333;\n      background-size: 100% auto;\n      background-position: center;\n      background-color: #eee;\n      filter: grayscale(0.5) brightness(0.3);\n      transform: scale(1.3);\n      transition: filter .3s, transform .3s;\n    " ], [ "\n      width: 200px;\n      height: 85px;\n      box-shadow: inset 0px 0px 50px -10px #333;\n      background-size: 100% auto;\n      background-position: center;\n      background-color: #eee;\n      filter: grayscale(0.5) brightness(0.3);\n      transform: scale(1.3);\n      transition: filter .3s, transform .3s;\n    " ]), $ = W()([ "\n      position: absolute;\n      bottom: 4px; \n      width: 230px;\n      margin: 0;\n      transform: scale(0.8) translateX(-20px);\n      font-size: 12px;\n      font-weight: normal;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      color: #fff;\n    " ], [ "\n      position: absolute;\n      bottom: 4px; \n      width: 230px;\n      margin: 0;\n      transform: scale(0.8) translateX(-20px);\n      font-size: 12px;\n      font-weight: normal;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      color: #fff;\n    " ]), ee = W()([ "\n      display: flex;\n      justify-content: space-between;\n      width: 230px;\n      position: absolute;\n      top: 5px;\n      left: 0px;\n      font-size: 12px;\n      transform: scale(0.8) translateX(-20px);\n      transition: all 0.3s;\n      color: #fff;\n      z-index: 1;\n      .is-new & :first-child {\n        display: flex;\n        flex-direction: row-reverse;\n        &::after {\n          content: 'new';\n          display: inline-block;\n          height: 13px;\n          transform: scale(0.8);\n          margin: 0 4px 0 -5px;\n          padding: 0px 4px 2px 4px;\n          text-transform: uppercase;\n          border-radius: 3px;\n          background-color: ", ";\n        }\n      }\n    " ], [ "\n      display: flex;\n      justify-content: space-between;\n      width: 230px;\n      position: absolute;\n      top: 5px;\n      left: 0px;\n      font-size: 12px;\n      transform: scale(0.8) translateX(-20px);\n      transition: all 0.3s;\n      color: #fff;\n      z-index: 1;\n      .is-new & :first-child {\n        display: flex;\n        flex-direction: row-reverse;\n        &::after {\n          content: 'new';\n          display: inline-block;\n          height: 13px;\n          transform: scale(0.8);\n          margin: 0 4px 0 -5px;\n          padding: 0px 4px 2px 4px;\n          text-transform: uppercase;\n          border-radius: 3px;\n          background-color: ", ";\n        }\n      }\n    " ]), ne = function() {
            var e = J.d.div.attrs({
                className: "feeds-container"
            })(G), n = J.d.div.attrs({
                className: function(e) {
                    return e.isNew ? "is-new" : "";
                }
            })(Z), t = J.d.div.attrs({
                className: "feed-box"
            })(Q), i = J.d.div.attrs({
                className: "feed-img"
            })(X), r = J.d.h4.attrs({
                className: "feed-title"
            })($), a = J.d.div.attrs({
                className: "feed-info"
            })(ee, Y.a.color("bilibili-pink"));
            return function(o) {
                function c(e) {
                    b()(this, c);
                    var o = v()(this, (c.__proto__ || h()(c)).call(this, e));
                    return o.handleOnClick = function(e) {
                        chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "dynamicCheck",
                            label: "dynamicCheck"
                        }), Object(w.d)(e);
                    }, o.createLinkByType = function(e, n) {
                        switch (e) {
                          case 8:
                            return "https://www.bilibili.com/video/av" + n.stat.aid;

                          case 16:
                            return "https://vc.bilibili.com/video/" + n.item.id;

                          case 64:
                            return "https://www.bilibili.com/read/cv" + n.id;

                          case 512:
                            return n.url;
                        }
                    }, o.renderType8 = function(e) {
                        var n = e.index, c = e.link, l = e.owner, s = e.title, d = e.pic, u = e.duration, p = e.desc;
                        return N.a.createElement(t, {
                            key: n,
                            onClick: function() {
                                return o.handleOnClick(c);
                            }
                        }, N.a.createElement(i, {
                            style: {
                                backgroundImage: "url(" + d + ")"
                            }
                        }), N.a.createElement(a, null, N.a.createElement("span", {
                            title: p.user_profile ? p.user_profile.info.uname : l.name
                        }, p.user_profile ? p.user_profile.info.uname : l.name), N.a.createElement("span", null, u)), N.a.createElement(r, {
                            title: s
                        }, s));
                    }, o.renderType16 = function(e) {
                        var n = e.index, c = e.link, l = e.item, s = e.user;
                        return N.a.createElement(t, {
                            key: n,
                            onClick: function() {
                                return o.handleOnClick(c);
                            }
                        }, N.a.createElement(i, {
                            style: {
                                backgroundImage: "url(" + l.cover.default + ")"
                            }
                        }), N.a.createElement(a, null, N.a.createElement("span", {
                            title: s.name
                        }, s.name), N.a.createElement("span", null, "小视频")), N.a.createElement(r, {
                            title: l.description
                        }, l.description));
                    }, o.renderType64 = function(e) {
                        var n = e.index, c = e.link, l = e.author, s = e.title, d = e.banner_url;
                        return N.a.createElement(t, {
                            key: n,
                            onClick: function() {
                                return o.handleOnClick(c);
                            }
                        }, N.a.createElement(i, {
                            style: {
                                backgroundImage: "url(" + d + ")"
                            }
                        }), N.a.createElement(a, null, N.a.createElement("span", {
                            title: l.name
                        }, l.name), N.a.createElement("span", null, "专栏")), N.a.createElement(r, {
                            title: s
                        }, s));
                    }, o.renderType512 = function(e) {
                        var n = e.index, c = e.link, l = e.new_desc, s = e.cover, d = e.apiSeasonInfo;
                        return N.a.createElement(t, {
                            key: n,
                            onClick: function() {
                                return o.handleOnClick(c);
                            }
                        }, N.a.createElement(i, {
                            style: {
                                backgroundImage: "url(" + s + ")"
                            }
                        }), N.a.createElement(a, null, N.a.createElement("span", {
                            title: d.title
                        }, d.title), N.a.createElement("span", null, "番剧")), N.a.createElement(r, {
                            title: l
                        }, l));
                    }, o.renderLine = function(e) {
                        var t = e.index, i = e.style, r = o.state.feedList[t], a = o["renderType" + r.desc.type], c = o.createLinkByType(r.desc.type, r.card);
                        return a ? N.a.createElement(n, {
                            style: i,
                            isNew: t < o.state.lastCounter
                        }, a(B()({
                            index: t,
                            link: c
                        }, r.card, {
                            desc: r.desc
                        }))) : null;
                    }, o.state = {
                        feedList: [],
                        lastCounter: 0
                    }, o;
                }
                return x()(c, o), D()(c, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.sendMessage({
                            command: "getDynamicList"
                        }, function(n) {
                            var t = n.feedList, i = n.lastCounter;
                            e.setState({
                                feedList: t,
                                lastCounter: i
                            }), chrome.runtime.sendMessage({
                                command: "updateLastDynamicId"
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this.state.feedList;
                        return n && n.length > 0 ? N.a.createElement(e, null, N.a.createElement(K.a, {
                            width: 200,
                            height: 255,
                            rowCount: this.state.feedList.length,
                            rowHeight: 86,
                            rowRenderer: this.renderLine
                        })) : null;
                    }
                } ]), c;
            }(N.a.Component);
        }, te = t(17), ie = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "dynamicCheck",
                    dependencies: [ "popupAnchor" ]
                }));
                return e.load = function(n, t) {
                    var i = U()(n, 1)[0];
                    return t.on ? new O.a(function(n) {
                        var r = ne(), a = A()(t.options, function(e) {
                            return "dynamicCheckBox" === e.key;
                        });
                        if (chrome.runtime.sendMessage({
                            command: "updateLastDynamicId"
                        }), chrome.browserAction.setBadgeText({
                            text: ""
                        }), a.on) {
                            var o = document.createElement("div");
                            o.setAttribute("class", "bilibili-helper-dynamic-check-container"), i.appendChild(o), 
                            R.a.render(N.a.createElement(r, {
                                ref: function(n) {
                                    return e.container = n;
                                }
                            }), o, function() {
                                return n(e.container);
                            });
                        } else n(null);
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), re = 50, ae = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "dynamicCheck",
                    kind: "popup",
                    permissions: [ "login", "notifications" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("dynamicCheck_name"),
                        type: "checkbox",
                        description: Object(w.a)("dynamicCheck_description"),
                        hasUI: !0,
                        options: [ {
                            title: Object(w.a)("dynamicCheck_options_notification"),
                            key: "notification",
                            on: !1
                        }, {
                            title: Object(w.a)("dynamicCheck_options_dynamicCheckBox"),
                            key: "dynamicCheckBox",
                            on: !0,
                            description: Object(w.a)("dynamicCheck_options_dynamicCheckBox_description", [ re ])
                        } ],
                        subPage: {
                            type: "checkbox",
                            title: Object(w.a)("dynamicCheck_subPage_title"),
                            description: Object(w.a)("dynamicCheck_subPage_description"),
                            options: [ {
                                key: "video",
                                title: Object(w.a)("dynamicCheck_subPage_options_video"),
                                on: !0,
                                value: 8
                            }, {
                                key: "smallVideo",
                                title: Object(w.a)("dynamicCheck_subPage_options_smallVideo"),
                                on: !1,
                                value: 16
                            }, {
                                key: "cv",
                                title: Object(w.a)("dynamicCheck_subPage_options_cv"),
                                on: !1,
                                value: 64
                            }, {
                                key: "bangumi",
                                title: Object(w.a)("dynamicCheck_subPage_options_bangumi"),
                                on: !1,
                                value: 512
                            } ]
                        }
                    }
                }));
                return e.launch = function() {
                    e.currentList = [], e.lastList = [], e.lastCounter = 0, e.lastCheckDynamicID = void 0, 
                    e.lastDynamicID = e.store, chrome.alarms.create("dynamicCheck", {
                        periodInMinutes: 1
                    }), e.initCurrentList(), e.hasLaunched = !0;
                }, e.pause = function() {
                    e.currentList = [], e.oldList = [], e.lastList = [], e.lastCounter = 0, e.lastCheckDynamicID = void 0, 
                    chrome.alarms.clear("dynamicCheck"), e.hasLaunched = !1;
                }, e.addListener = function() {
                    chrome.alarms.onAlarm.addListener(function(n) {
                        switch (n.name) {
                          case "dynamicCheck":
                            e.lastCheckDynamicID && e.checkNew();
                        }
                        return !0;
                    }), chrome.notifications.onButtonClicked.addListener(function(n, t) {
                        e.currentList[n] && 0 === t && (chrome.notifications.clear(n), chrome.tabs.create({
                            url: e.currentList[n]
                        }));
                    }), chrome.runtime.onMessage.addListener(function(n, t, i) {
                        return "getDynamicList" === n.command ? i({
                            feedList: e.currentList,
                            lastCounter: e.lastCounter
                        }) : "updateLastDynamicId" === n.command && e.lastList.length > 0 && (e.store = e.lastList[0].desc.dynamic_id_str, 
                        e.lastCheckDynamicID = e.store, e.oldList = e.lastList.concat(e.oldList).slice(0, re), 
                        e.lastList = [], e.lastCounter = 0), !0;
                    });
                }, e.permissionHandleLogin = function(n) {
                    n ? !e.hasLaunched && e.launch() : e.pause();
                }, e.checkNew = function() {
                    e.userId.then(function(n) {
                        if (0 === e.typeList.length) return new O.a.reject(!1);
                        var t = e.lastCheckDynamicID ? "&update_num_dy_id=" + e.lastCheckDynamicID : "";
                        return Object(w.e)(P.dynamic_num + "?uid=" + n + "&type_list=" + e.typeList.join(",") + t + "&requestFrom=bilibili-helper").then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            var n = e.code, t = e.data, i = t.new_num, r = t.update_num, a = e.message;
                            return 0 !== n ? O.a.reject(a) : i || r;
                        }).then(function(n) {
                            n && e.getFeed(e.typeList).then(function(t) {
                                var i = t.code, r = t.data, a = t.message;
                                if (0 !== i) return console.warn(a);
                                var o = q()(r.cards.slice(0, n).map(function(n) {
                                    try {
                                        if (e.currentList.find(function(t) {
                                            return e.isSameCard(t, n);
                                        })) return;
                                        return n.card = "string" == typeof n.card ? JSON.parse(n.card) : n.card, n.card.duration && (n.card.duration = Object(w.m)(n.card.duration)), 
                                        n;
                                    } catch (e) {
                                        console.warn(e);
                                    }
                                }));
                                o.length > 0 && (e.lastCheckDynamicID = o[0].desc.dynamic_id_str, e.lastList = o.concat(e.lastList), 
                                e.currentList = e.lastList.concat(e.oldList).slice(0, re), e.lastCounter += n, chrome.browserAction.setBadgeText({
                                    text: String(e.lastCounter)
                                }), e.sendNotification(o));
                            });
                        });
                    });
                }, e.isSameCard = function(e, n) {
                    return e.desc.dynamic_id_str === n.desc.dynamic_id_str;
                }, e.getFeed = function(n, t) {
                    return e.userId.then(function(i) {
                        var r = t ? P.dynamic_history + "?uid=" + i + "&type_list=" + e.typeList + "&offset_dynamic_id=" + t : P.dynamic_new + "?uid=" + i + "&type_list=" + n + "&requestFrom=bilibili-helper";
                        return Object(w.e)(r).then(function(e) {
                            return e.json();
                        });
                    });
                }, e.createLinkByType = function(e, n) {
                    switch (e) {
                      case 8:
                        return "https://www.bilibili.com/video/av" + n.stat.aid;

                      case 16:
                        return "https://vc.bilibili.com/video/" + n.item.id;

                      case 64:
                        return "https://www.bilibili.com/read/cv" + n.id;

                      case 512:
                        return n.url;
                    }
                }, e.sendNotification = function(n) {
                    var t = A()(e.settings.options, {
                        key: "notification"
                    }), i = n.slice(0, 3);
                    t && t.on && E()(i, function(n) {
                        var t = n.card, i = n.desc, r = t, a = r.pic || r.item && r.item.cover.default || r.banner_url || r.cover, o = r.owner && r.owner.name || r.user && r.user.name || r.author && r.author.name, c = r.title || r.item && r.item.description || r.new_desc || "", l = e.createLinkByType(i.type, r);
                        Object(w.c)("bilibili-helper-dynamic-check" + Math.random(), {
                            type: "basic",
                            iconUrl: a || Object(w.h)("/statics/imgs/cat.svg"),
                            title: Object(w.a)("extensionNotificationTitle"),
                            message: (o ? o + ": " : "") + c,
                            buttons: [ {
                                title: Object(w.a)("extensionNotificationWatch")
                            } ]
                        }, function(n) {
                            e.currentList[n] = l;
                        });
                    });
                }, e.hasLaunched = !1, e;
            }
            return x()(n, e), D()(n, [ {
                key: "initCurrentList",
                value: function() {
                    var e = this;
                    0 !== this.typeList.length && this.getFeed(this.typeList).then(function(n) {
                        var t = n.code, i = n.data, r = n.message;
                        if (0 === t) {
                            var a = i.cards.slice(0, re);
                            e.currentList = E()(a, function(e) {
                                try {
                                    return e.card = "string" == typeof e.card ? JSON.parse(e.card) : e.card, e.card.duration && (e.card.duration = Object(w.m)(e.card.duration)), 
                                    e;
                                } catch (e) {
                                    console.warn(e);
                                }
                            }), e.oldList = e.currentList.slice(0), e.currentList.length > 0 && (e.store ? (e.lastCheckDynamicID = e.store, 
                            e.checkNew()) : (e.lastCheckDynamicID = e.currentList[0].desc.dynamic_id_str, e.store = e.lastCheckDynamicID));
                        } else console.warn(r);
                    });
                }
            }, {
                key: "userId",
                get: function() {
                    return new O.a(function(e, n) {
                        chrome.cookies.get({
                            url: "http://www.bilibili.com/",
                            name: "DedeUserID"
                        }, function(t) {
                            t && t.expirationDate > new Date().getTime() / 1e3 ? e(t.value) : n();
                        });
                    });
                }
            }, {
                key: "typeList",
                get: function() {
                    var e = this.settings.subPage.options;
                    return q()(e.map(function(e) {
                        return e.on ? e.value : null;
                    }));
                }
            } ]), n;
        }(k.a), oe = t(13), ce = t.n(oe), le = W()([ "\n      position: absolute;\n      right: 55px;\n      top: 26px;\n      display: flex;\n      visibility: hidden;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 15px 10px 5px;\n      width: 422px;\n      min-height: 28px;\n      line-height: initial;\n      font-size: initial;\n      color: #505050;\n      background: #fff;\n      border: 1px solid #e5e9ef;\n      border-radius: 2px;\n      box-shadow: 0 2px 4px 0 rgba(0,0,0,.14);\n      z-index: 900;\n      cursor: auto;\n      & > * {\n        position: relative;\n        width: 100%;\n        text-align: initial;\n        margin-bottom: 10px;\n        &:last-of-type{\n          //margin-bottom: 0;\n        }\n      }\n      .player-mode-webfullscreen & {\n        z-index: 100;\n      }\n    " ], [ "\n      position: absolute;\n      right: 55px;\n      top: 26px;\n      display: flex;\n      visibility: hidden;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 15px 10px 5px;\n      width: 422px;\n      min-height: 28px;\n      line-height: initial;\n      font-size: initial;\n      color: #505050;\n      background: #fff;\n      border: 1px solid #e5e9ef;\n      border-radius: 2px;\n      box-shadow: 0 2px 4px 0 rgba(0,0,0,.14);\n      z-index: 900;\n      cursor: auto;\n      & > * {\n        position: relative;\n        width: 100%;\n        text-align: initial;\n        margin-bottom: 10px;\n        &:last-of-type{\n          //margin-bottom: 0;\n        }\n      }\n      .player-mode-webfullscreen & {\n        z-index: 100;\n      }\n    " ]), se = W()([ "\n      display: inline-block;\n      padding: 0 15px;\n      border-radius: 4px;\n      transition: all 0.3s;\n      width: ", "px;\n      .func-module & {\n        width: 90px;\n        border: 1px solid #e5e9ef;\n        &:hover {\n          border-color: rgb(0, 161, 214);\n        }\n      }\n      &:hover, &.show {\n        color: rgb(0, 161, 214);\n      }\n      .entry-old .bilibili-helper &, #entryOld .bilibili-helper & {\n        display: block;\n        position: relative;\n        margin-top: 8px;\n        padding: 8px 0;\n        line-height: 16px;\n        background-color: #fb7299;\n        font-size: 12px;\n        color: #fff;\n        border-radius: 2px;\n        cursor: pointer;\n        text-align: center;\n        -webkit-box-shadow: 0 2px 10px 0 rgba(251,114,153,.4);\n        box-shadow: 0 2px 10px 0 rgba(251,114,153,.4);\n        z-index: 2;\n        user-select: none;\n        &:hover {\n          background-color: #ff85ad;\n        }\n      }\n    " ], [ "\n      display: inline-block;\n      padding: 0 15px;\n      border-radius: 4px;\n      transition: all 0.3s;\n      width: ", "px;\n      .func-module & {\n        width: 90px;\n        border: 1px solid #e5e9ef;\n        &:hover {\n          border-color: rgb(0, 161, 214);\n        }\n      }\n      &:hover, &.show {\n        color: rgb(0, 161, 214);\n      }\n      .entry-old .bilibili-helper &, #entryOld .bilibili-helper & {\n        display: block;\n        position: relative;\n        margin-top: 8px;\n        padding: 8px 0;\n        line-height: 16px;\n        background-color: #fb7299;\n        font-size: 12px;\n        color: #fff;\n        border-radius: 2px;\n        cursor: pointer;\n        text-align: center;\n        -webkit-box-shadow: 0 2px 10px 0 rgba(251,114,153,.4);\n        box-shadow: 0 2px 10px 0 rgba(251,114,153,.4);\n        z-index: 2;\n        user-select: none;\n        &:hover {\n          background-color: #ff85ad;\n        }\n      }\n    " ]), de = function() {
            var e = J.d.div.attrs({
                className: "bilibili-helper-content"
            })(le), n = J.d.span(se, function(e) {
                return e.old ? "auto" : 48;
            });
            return function(t) {
                function i(e) {
                    b()(this, i);
                    var n = v()(this, (i.__proto__ || h()(i)).call(this, e));
                    return n.handleClick = function(e) {
                        e.preventDefault();
                        var t = document.querySelector(".bilibili-helper-content");
                        n.show ? (n.show = !1, t && t.setAttribute("style", "visibility: hidden;")) : (n.show = !0, 
                        t && t.setAttribute("style", "visibility: visible;"));
                    }, n.show = !1, n.isOldPage = !!document.querySelector("#__bofqi"), n;
                }
                return x()(i, t), D()(i, [ {
                    key: "render",
                    value: function() {
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement("link", {
                            href: "https://at.alicdn.com/t/font_894803_ilqifyzi68.css",
                            rel: "stylesheet",
                            type: "text/css"
                        }), N.a.createElement(n, {
                            onClick: this.handleClick,
                            title: "哔哩哔哩助手",
                            old: this.isOldPage
                        }, this.isOldPage ? "哔哩哔哩助手" : "助手"), N.a.createElement(e, null));
                    }
                } ]), i;
            }(N.a.Component);
        }, ue = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoAnchor"
                }));
                return e.load = function() {
                    return new O.a(function(n) {
                        var t = function(e, t) {
                            if (!document.querySelector(".bilibili-helper")) {
                                var i = document.createElement("span");
                                i.setAttribute("class", "bilibili-helper"), e.appendChild(i);
                                var r = de();
                                R.a.render(N.a.createElement(r, null), document.querySelector(".bilibili-helper"), function() {
                                    var i = document.querySelector(".bilibili-helper-content");
                                    "function" == typeof t && t(e), n(i);
                                });
                            }
                        };
                        document.querySelector(".video-data, .stardust-player, iframe.bnj-player-main") ? (document.querySelector("html").classList.add("new-page"), 
                        t(document.body)) : e.interval([ "#bangumi_detail .func-module", "#entryOld", ".entry-old", "#arc_toolbar_report", "#viewlater-app .video-toolbar-module" ]).then(function() {
                            var e = 0, n = setInterval(function() {
                                if (e > 10) return clearInterval(n), console.error("Title for view has not changed or unknow page!");
                                var i = document.querySelector(".fav-box .num"), r = document.querySelector("#bangumi_detail .func-module");
                                !!i && i.innerText ? (clearInterval(n), t(document.querySelector("#arc_toolbar_report, #bangumi_detail .func-module, #viewlater-app .video-toolbar-module"))) : r ? t(r) : ++e;
                            }, 1e3);
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), pe = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoAnchor",
                    kind: "video",
                    settings: {
                        on: !0,
                        hide: !0,
                        hasUI: !0
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), me = t(16), he = t.n(me), fe = {
            doSign: "https://api.live.bilibili.com/sign/doSign"
        }, be = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "doSign",
                    kind: "live",
                    permissions: [ "login" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("doSign_name"),
                        type: "checkbox",
                        options: [ {
                            key: "notification",
                            title: Object(w.a)("doSign_notification"),
                            on: !0,
                            description: Object(w.a)("doSign_notification_description")
                        } ]
                    }
                }));
                return e.launch = function() {
                    chrome.alarms.create("doSign", {
                        periodInMinutes: 1
                    });
                }, e.pause = function() {
                    chrome.alarms.clear("doSign");
                }, e.addListener = function() {
                    chrome.alarms.onAlarm.addListener(function(n) {
                        switch (n.name) {
                          case "doSign":
                            e.request();
                        }
                        return !0;
                    });
                }, e.permissionHandleLogin = function(n) {
                    e.request(n);
                }, e.request = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.permissionMap.login;
                    chrome.extension.inIncognitoContext || (e.store || {}).day !== e.getTodayDate() && e.settings.on && n && he.a.ajax({
                        method: "get",
                        url: fe.doSign + "?requestFrom=bilibili-helper",
                        success: function(n) {
                            if (e.store = {
                                day: e.getTodayDate()
                            }, 0 === n.code) {
                                var t = A()(e.settings.options, {
                                    key: "notification"
                                });
                                t && t.on && Object(w.c)("bilibili-helper-doSign", {
                                    type: "basic",
                                    iconUrl: Object(w.h)("/statics/imgs/cat.svg"),
                                    title: Object(w.a)("extensionNotificationTitle"),
                                    message: Object(w.a)("doSign_notification_successfully"),
                                    buttons: []
                                });
                            }
                        }
                    });
                }, e;
            }
            return x()(n, e), n;
        }(k.a), ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC91BMVEUAAACbmq3h4ePp6e2ChZ+trcOtrcOqqr+trcSsrMKlpru6usx2nb/s7O+yrLCtrcStrcOlpbu3uMmurcK3t8mvr8aursPp6u2ursSvsMWpqsDk5eiursTy8vStrcOtrcOursOup6zk5ejm5unu7vHp6eysrMOtrcOtrcPj4+dHqdPu7vHQz9c6pdKRlKytrcPh4+lxu9rp6e3X2N7KydOMj6rm5uk3IytRsdejpbvq6u04Iiw8p9SOkqvHydCXmq84IyybnrQ/KjO6vsc4JC54sc96vtxKrNRDLjezs8fH2uVvmbiFwtvc3OKQk6o8ptM6qdbT1Ny8vsh9f5k5JC3BwdBFMTs2JClPP0atrcMmMmiwr8U+X40ZKF/n5+qwsMcpNWk9XYvl5eiUmas7W4pwdJDU1NyyssaUlq4sOW2AhKM2TX6rrMKdobJ4fJZ0d5LPz9m0tMqmp76NkKk4UYKSl6l+gpvW1t28vsmkpbza2d/r6+6Rk6yTmKqQlakeLGK2ucSqqsGoqL+tsL6XmLDb2+HNzdjLzNTIydK/wcuipbaLjqd7f5lxdpEwRHcbKWCws8GprLufoLiXnK2NkaaAhJ1EYpBvco7Fx8+anrCQk6iKjaRlaIYXJl3R0trMztaio7qlqLiEiKCyssi5u8d2epRdY4wiL2Tj4ubCw9KztcJUbpbBw82Ii6I6V4Y5VIXe3uScnbU6WYg1SXo0P3BlVl3DxM6ZmrOUl7EvQXTW1NfGx9SUnbeFiaQ7RXRpW2JaYopoa4h8gaBWRU3g4OXd3eHZ2NrT0NS1tspscIxNVXxeTlXIydfPzdF8i6tLZ5JacplRWoVCTHh1aG+5vs8uPXHBvMFWbJNfZ49gZINIUHqpoqh1hqiUi5FnbZFbYIF5bHNRP0dCLzc5JS7O3OXI1OGCmLSnn6Rzfp6gmJ1/dHm6tblWW318cHVvYmkUIls0HicxHCSos8aeq8FugqV5fZ9YXYCEeH5+cnhINT6pts1pfaFiZ4ya5H3LAAAAWXRSTlMABQi8/k31EVRGJx8L+vrr4zkt3Rb52K9uXbmUP/7PnJP+aDLt36OKfXcd9OfX18ZG/vPuzFhUGfvs6NLFoHlzMvHr6sT++/v79t7e2MfGxMK/vbCTkIJjTVAEZlQAAAzlSURBVGjeYhgFo2AUjBjA6GCOKmBuTl3zQ5ysHZAFwq1dHKhqAYB1+odNIorjAA5cYpO2x4BVYvCGozIgWBFbJBUX47+oiboYLyQ/kxsogwPxBsw9Fo2w3MZkHCqJi+MxXJp0YeDfcL3J5BZCwr9KkEBgarv57t3BhAxNP9PLb/i+fH8v7363++iezW63O4h3DzvP3jouLj/kudxvOLfdGEUEdV0PUqGLyt/0BXSWZZ1zLNvo91maWjlPmmNuPnEzbLmkmEoWRe30Gb/Ncs3v93q9kUgktGlbbsNDzbzZsWZeWlabtbqG1eu6dmio17VyueJz2YiVrbuBG8Suz780f80doA0AtPzlgTlz+ZhB+xAIVFOdjHVsThuMx0asCkURLGGPY8myKRos1UJm6ybhZmrtJgIeg2Gpqw4q5Iy0jgLh0LphJyl85IE3AAQ8G//Lj/ho4AnIFgRBumV4GUZNXIBMeWU6mZx9Q2bSuKszz2Ox2KvXL74LwifgTRBwry1+Xe8uAouYF6SD/OM7WA9pZ6QABo1xaYwbYLjCYHqC+CfRaPTpn6QgZH7ADE0tfOrrwdzRUQ5LpXIFQSqmZblSyaYBRm0RETi2KlZ5MOEdtWuod9zrHe8nPktCMZUlxHQisb2og+tKnOO4uIFLSl/3wUgSeTTslk9O/2Kno1ar9XumNWp1JkPEp82V5qXMhz1TPL53aXXBBetX33MzB0mzsCwDapQJFZv9BEVRVWNU0gDEX2BIF5Pc3M/bdtsC/xgtu5+moTAOezGCXIkSjBIjXKn/0npodhYWZpUPGZMPAzYbhgSBlK8NCacbsEij40PIkhGBhRJdYCEwlhnZYsYVxAsSE1QuvPI9LVKQrYcnu1nXvW/P83vb06qmszPana2ttfChw/cJhh6A4Y9TXgDxOL0TPsY/0zACtRptE0aDpkd5Uy4ptxogwOlto4kEAlBDJxB4BsBBin6024N0rAblt/I2KAZHF/G6EBOrceWmhgxHCNkgKRsFuaxMPB4bMjAzBI7o73UL0d719fUnOl5mg4mOJYMFl2boJhQr6MjzdjMmKoqCBUqHjVHf+VuIABgQcGJzFa7Rdh+eRoUdIR/JyjzPSwrHcUoOXJlHsEvPE3mKdELGERh6CKUKO0KPyb52vsgBX9Zyub3ptX9M/8/eLuYAniJzRI0iMHSvYIPiMhtIVQk+XQKAWXBnC5Aj6qgLDN3WNjqTOWogEVlfwlWR9AYptY8aqoJCpo56SVZXyl0RhdeQjkgz/X8JFDJzhBZUCIGicGwMQ7ySUYeQ1VZm+ipQCY48/QRfdsQ2FCGNdWCo8poZRZAyspBY3gaQaF740wiIdhdchzIMR69IQsoXAhZMI0gQGFJUCjsyy5Frc1/JEwIWIqYR7I96wdADKMJ01EcE+XIDIRIzayBkWqihu1CE6aiZpKAB5i6GEIllcSqGlfwZizHSAYZuwG7MdISG1CMJGmARnyeV2k35Zi3TAhYuoDfACTqkoYprLIpgnXWNGQ5Sk8Sn8wbucPJXrnGkZnIpOXeORbemSI5l6JCGwBDLUSksdFV/WojzDruG378TTh4eb41Nvayvf991WO3QsVfb7XNagx9Z1WIYYjqKqllt8tx2qAINqmmHlfSH1y2+zuGxgcEV+j0c3vH7Fx2LoiQqnNA7Gw2hUIW2WbLnyDt6IoIiaPD1exiuky5g++DP8oSvwVLzvL5rIJ3eCgaDy+nj7SQ0gAFLvBtEG86NO3oNtqOWDJZFTnKHG0aGD/0OuOCdbwc/u9un+iGFzq7JYGtPW8/MzJtgz8ZKQpYhLss4zDd94WLzlxEreX0aCsKoRVxBQfDgclAUBBFxOehBEU8e9KB4qMWtj9S4JKmtWaxJTH9pzdIUkqYhm7amphhDCxUkouUnKhasiKIIKghePQge/Ad8Luit9iO8W2befJOZ+TIbIUcs7Ba3zx6/dI7oA+H76/OXLp2/9On9O9TzcQ1zsdgYJYyiKNIzuafoT+/duHGbgJ10GoYgFsBKuDx+ceP2vW9virYFRId5AQfug3NFQdBdDcFUUg/ktuvCfJfiQFVV/u23swT8SC9ChqbAimUwC9r1e49nH9VYRANGWL3z/vSr5wqTBIBCxpZJYkIwCEjOVNuy7oKmr5191C2n0/Oh4JqWo+L40Yfih7tFhOCNOP/sXY8WJAYjKYSwYRZIQW0zvufxAuZrXQJHTr2wMr8F17QcNZ68PfboS6VYJwAjOKWIjmXB5CgEoeqIBfhAFFtUnSB8Cqnjndqjq5/ZzC/BNSVHmXSZeHF2tly53/HjEw59At5fNHloH0fxcddzdZlJMNP1SX9M3W+cu3EK9olfgmt6jjp4nGRYliD6jJCl47YISHh5otbAWSGfk3qhiLmGCzr2LMref3yPKKdvrV0yrQPIUTp8mBfLFbZrE0a1pEsi4KF9pHM/VEZVOVFEzAsEHQBqXEzZsUxYmV+Ca3qO7kR0aJYblk/ZvUh3ROBp0D6FDgdRvufEGGgGOUYkOa1baRhRS755JvNTcE3N0Z1BtYeRBV/zMUwOmRg0cdu2u8VeNOglimBgTWwk9VSS79bZy2IraQ3TJ6dnCHJUjSSDJO/jftNkHF3gmpbW8TvoTGmk9AxTFUmPzvYcDjTrdbZwOYh7pTO3pmdoztxN2VYISJets01OlyTQ51VRCJV8qdpOMA666yrZkSPwoI8Q6EwBw3r5YXrhdLuQ9etWrZy3vSSrTbIwi6AeCHqjGO8D12CcRK5GNINRhN2Msvm2SgLKxtHyjOsJCr12mipbvOfw/s3XWvSzE1GOUQtUveK5mFIqdZAUCUyVkRxpEJViqs5ks20JcCRua2z5jCznc9UdW1f8l5q9W3apqqGHTr4ltarvGhRR4TGTyT2r4IjW5DgAXci5KGpfprODXMjDFNgW/D+WJUmW2tsPblr/HweHUI/kAABuoIdhnL7fwSt8wAn5E4aPI90O+dOFIrUHURKdiEYGAB3E7rDpDGzcDoS8ffOqye1uZw0FvMf/dGJiQbrS11BeJHU56nU83K5TTQA7qChLrWH2xJUqZgLYO/poZsaEcDE10AVnx8Spv+QINctWUNLzPJK8m6lUfJTXeSMcycUUStkwCA5wHMYoTLZKV11YBbB3VE4W4IXgA2Fixv49k5aFi7ZodTxVY+HksirPLw/Dm2LeNUoDA79roT6C/AyCMzGMuVJ9tsYR1Q5F1e5mGh7J/4LnNZvNfXsnxbB6VxFHEEJLQZFwslEOZtpXWs9o3bDQhlVE8Z9BkMDU1CsJndXdfpdI9Qsna138D7oEfHX5xDwvOFBAU1141yfFTKVo1W5Wswmmx90nN29aqcpsHanDmtD6JwSZMTkNQWp+OgP9/kKd0Kz+lp0T62H9ylxjZqaB9qnrqQza71oXo9AVRND5Ssxcnu32Wc0e2zjxUdFDg28iY6LGZu5eh6ZxzZr1a7Vies9E++s2LC0l1+C2oy0zTslRhHCQTdq5nsIEatIexkZ4Rw+CQAWxIyfCz4kghncyqn7muXBGLFy+8Dykd6+aJO6OvrzzF8PhryM/HMrDlxBwGyZJ0s/j91qMzkPARcw/0HSpVB1sWzVZ1f1D5tf5ozP7d1EbigMATqG1ageb2iuelONGt84djtI/4zWBIARMTRZjlkCXhGyFDEI7tEs4octBJGfhPKhHcZIOPYWKR5HO9we0Uzv0ffPDl8To97gPIjFKvu/l+5L3vnEKWzlaU7aZ8uNw10xT4UlGi2zBk3zizrtqvZ85itgRt2iJLSCSFKyMbXRIgmmMJoE/k/Y2Y8MizM5CH3B7JMF/822oBHSggGHEcRz6Tj//kg2SwGZm/LGaJU8cqZlPArDhXRyfEQbWLmgZG3M//tQFlDL/wLqAr132+2yUjOe6gGsO510eG0NMuRD92D3793kRnmY9pGTA/sHA8wbORdtQo1ZVHmPT5kHUBbt9Ti0Wi3PgbIC98P1r6tVcNglgZSyeBPmdAqkMQVZPE4Id4NTzoMKFAHEKMLUwgCrf1VNnerb6Hlqtfv89YV9ADSp9XQfA6+RiPy9A83JE1Jip2ktJYCBAnAN89cWRKMBxqgfXLk/WeP9aSJI+2VEAKKLQYRTlYKxLzAyayLjdpdRkpCsIwAYRWt4A+e1yNjuJjQ2SYk8u3zPClR3f6WBJgY1TkQC/pwEj4EMLk7Tu6EvCyN947o7esVNHtCyS0dNIUuoywC+E24IHarjD6XqyCfEZZLvpDYqQO3XL0DTLsszCE1CtVh+CSqgQ2VMJXBjhmRR507QgX2Ydz0ER8goRtKMHgXLgEeDAU6pUKt2jitQ+VXvZc136MrRCEa1wnolhy/jn3Ebn8tE/M4+0vhjoHNzHzhA0LcCx3qLKL2qNRg0UNy6E/3eDLJUudDbrAAAAAElFTkSuQmCC", ve = t(450), ye = t.n(ve), xe = {
            getCurrentTask: "https://api.live.bilibili.com/lottery/v1/SilverBox/getCurrentTask",
            getCaptcha: "https://api.live.bilibili.com/lottery/v1/SilverBox/getCaptcha",
            getAward: "https://api.live.bilibili.com/lottery/v1/SilverBox/getAward"
        }, ke = t(22), we = t.n(ke), _e = W()([ "\n      position: relative;\n      top: -4px;\n      width: 48px;\n      height: 48px;\n      background-position: center bottom;\n      background-image: url(", ");\n      background-size: cover;\n      overflow: hidden;\n      cursor: pointer;\n    " ], [ "\n      position: relative;\n      top: -4px;\n      width: 48px;\n      height: 48px;\n      background-position: center bottom;\n      background-image: url(", ");\n      background-size: cover;\n      overflow: hidden;\n      cursor: pointer;\n    " ]), Se = W()([ "\n      width: 100%;\n      height: 18px;\n      line-height: 18px;\n      margin: 25px 0 0;\n      border-radius: 4px;\n      box-sizing: border-box;\n      background-color: rgba(0, 0, 0, 0.7);\n      text-align: center;\n      font-size: 10px;\n      color: #fff;\n      user-select: none;\n      pointer-events: none;\n    " ], [ "\n      width: 100%;\n      height: 18px;\n      line-height: 18px;\n      margin: 25px 0 0;\n      border-radius: 4px;\n      box-sizing: border-box;\n      background-color: rgba(0, 0, 0, 0.7);\n      text-align: center;\n      font-size: 10px;\n      color: #fff;\n      user-select: none;\n      pointer-events: none;\n    " ]), Ce = W()([ "\n      width: 170px;\n      box-sizing: border-box;\n      padding: 16px;\n      position: absolute;\n      bottom: 48px;\n      left: 14px;\n      background-color: #fff;\n      border-radius: 4px;\n      box-shadow: 0 6px 12px 0 rgba(106,115,133,.22);\n      transform-origin: 0px 100% 0px;\n      display: none;\n      img, canvas {\n        display: none;\n      }\n    " ], [ "\n      width: 170px;\n      box-sizing: border-box;\n      padding: 16px;\n      position: absolute;\n      bottom: 48px;\n      left: 14px;\n      background-color: #fff;\n      border-radius: 4px;\n      box-shadow: 0 6px 12px 0 rgba(106,115,133,.22);\n      transform-origin: 0px 100% 0px;\n      display: none;\n      img, canvas {\n        display: none;\n      }\n    " ]), Oe = W()([ "\n      margin: 0;\n      font-size: 14px;\n      font-weight: 400;\n      color: #23ade5;\n    " ], [ "\n      margin: 0;\n      font-size: 14px;\n      font-weight: 400;\n      color: #23ade5;\n    " ]), Le = function() {
            var e = J.d.div.attrs({
                className: "bilibili-helper-treasure-box"
            })(_e, function(e) {
                return e.open ? ge : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC7lBMVEUAAACgoreZm7SVm7KXlqzv7/GTlKmVlKqVlKrr6+udn7ecprzs7O6Ulazu7vDp6evp6euVlKqVlavp6euur8Xv7/GVlatBrduUlKzp6evp6euVlaqvr8SwsMevr8aTlKqVla2WlqtAqtWUlKnl5udArdvh4eXp6evj4+etrsLp6ezo6eqursTp6erl5erp6es/q9itrcOYl6yYmK0/qNTk5OiYmK+WlaqtrcJCp9POztiTk6mtrcOtrcJKibPo6Ovp6enm5u/a2+JFh7WIiJ+9vc4/qdWZl62ussaursWwsMY9qdPd3eSsrMDp6evo6Oi8vc6Al7NgnsE+ptJ7fZSNjqetrcPPz9bo6Oo/qNStrcOUk6g1UHg+XoyursSsrMLr6+yQkquOkao/qtaVlKmwsMaTkqjm5uk4JC0zTnfAwdGxssiXlquLjqg7XIuRkKY/oMzs7O2oqb8+f63DxNM+e6jb3OI+d6Xv7u4/ptKTlq89apg/msfv7/HQ0No/pM89c6Hg4eWztMc9j7x/gJZIXYFeT1ykpbw+b508kr+Eh541ICnY19/Ky9Y+hbKYmK6OjqNHZpJbTFlPP0q5usuyssWgorozS3Tj4+abnLScmq6TjqE+nsqjpLo+ibaZmbBhc5dgZYIwR3E8KTJrX25EMTq9vMy3t8mKiqBZbY9TQ0/HyNW0tck/lsN2f5pueZY+Y5BjVmDMzdi3wM+bl6txfZ16cYFBWX48VHtJOEKhn7SJjac0RW4qOWVyhqd7hKJ3epFSZ4l+dodwZXUmNWHT09w/rNirtciBhp98g5yMhphVb5c9ZpSCe4xWaYxscIt1bHsrP2qmus57lrOFiqaAiKWQi55QaZJlaYdLpc1pfJ6HgJEtRG45l8VfnsKbqcBDcJ06SnEwQGk6MECjr8RDmMCOnbg/j7hefaKHk61MhKRPepk+bIhFUHU9TWY9SFw+PVGRqMKWpLxHlbejnKZXW27Jxsmro6l1cYFaZ3dhKL6PAAAAWHRSTlMABgwVbO1C+fEM/iL46t6RgmNMcevm49zY06p2OvfRrH5XUzYh6KGJzsKzZFExKvPzrJGLfTzuw5WTjIhsX1xaUhT039S6sZ+ZiIFtT0pJRuXh4Mm0knpF0wSPGwAACn9JREFUaN7sk8tPE1EUhwsIBiltsSK0LiDKSwiPBRjRhGdCTDD4Wji6wHunCxKSMS3DUKa0ttoFbVKakECiSTvpSmJI0UC6agI70MiusMCE0oUKuvQv8EzbmdvSdkHUjZlvN5nfvd8959yrUlBQUFBQUFBQ+H8pbyi7VqL6J8DeY3pt0/Xa2rqqojMuLS6rv3lLP9BRXnjz9n6dsUVTPTRlwxhfri9WnYWLdbWVNy7cNxiMuv72PJLyMV2rQVOqpiy+IKYBXHk7s4aiAa1Ic3OzTqfTA3ezlhddqT2PAduUT12qMbQ297cPZgU6jJpqNYUQhWaCsDnDiIZzKkKPplSmWqSlInN9fSXGNBZPFnxpQVRK0kD+D7aqYXORiWUIRU7i8Vgs9qCvoqQ4XYbOkfqPJKjHKkJVJf4Ri21+pEGxnIqBxEgMullEJUEvbDSOJOw8fwDUPBoZ6e3t7u4e7WtxUNk47vRdTTHa3fswHo8fHHz7GYpi2rYg7aVuKpIapLFI654yeH/R/USmq6urERgeQqcEs5eGa1I0NnbxPA9Z3smGaJqZn0hHUOlAWqCVjod8Npp+x0GaYAKcJ6+p04Id77ZJQsqaE2swigUkVdlani4ASYK3DN76EDaJu2ZKApvUaSwbbilCMLk/QwnjcrXqnvQAqTQTQQaHnrs4v+AO2wNmJ5+qYPswZskRTGcKpDKciX3MvJHLdWiTT0AeIJqx0cwiZ/XMiXg8LivH+v1+QWC/z+YIVqFFYuN5pzlgD3uPBT/LcdbdL9AjH5JCBrFH7Z2UJFin8dac2Qx5t+BPLrC6ROZ+5QjQAgcJlrO6POJ5dpMnsnKc2KPp7B7pHfKiSQZHXMla4WBOp9kMhxMRjnIF6wmXy2qFLVkWajx2e8N2sauJPTq6YpF7pAeBURZYlqL4PZtndt6veSoQAoEAHMEJ8EA6ym1h5hmSBUYYgUH2oVdRHPLnE+zkClbJkDOj/jXMTIGADKGjkyICuETCHwoiICCpzgbVPUQ+V6ACd2FB4WtKogII5ilCj6qNrEVLf0cwlRFrg2dGviYZIigwZJIt0KJPqRmQp9ZEBGi9wAwOj3IFG/kFLNyicURixiyBD+e7pqbtPILZnfwCbg9HVxCJaX/TXW4xLkRhHC/eSjzVG/skLkHEm4gXDxKEd0bMmGEym44pna2iGGZEd2VaSa/ZuoSk2g1taetaki6arsRqIm5NKuLBnc3uuvPmO6czc6bKL5sm257zfee7/WeOY75N6dUz7MU9Xfu+fjz2udvBS3Cw7dDfa/d9ugWT7CUpWoQGmdDPDe/f99eWj99LY/9w8PbItpF3dz7t6ly9C6SCU0gEM5bgNiV9Kj2JnNrWeaRSKTj5obsGj4+NvJmIls4f6myHs/BM85NVM1c55i61lSQsSc2+wgFTqIFNv4PRWO8vb9egVV8cGk9HS6Wv9vOMoDk7jRcQqVjgJc9y0OuzxQf7sVCDhB0BCTuayaT1C4YCE4T3L8bSvZVo6c2IIY5YtgegieJb7SVwOFaUc+FwuawA9bqTvboFSeRupNMDwOHiq17g58GNAsIKQB29Dj+kM9/7ALwcy3bkFscqW028s9CLxew5fIJPIDQtn+SeRApYquE8bcbAvl7yAW43fORyuTAcyH0UOx7f3Uc4fvzweY5L5RSTEH6vmNbDMyaUzHLNvmNAoVAA40iR30yAofQzkTbgeTiO6JxE9ife7QLJJgxcYrmkmIDfNUR+sQOxPE8RznCt4gPEfswAgHKhB2WKsSE2kP1JSCeAU4offpGnHEsWij3wko5zRFMmNOSo6NlC8MA/4yiE+/EhTD6fh6OdjsF3r25swUvJ4lHIEGXCiCuNN9dlImUhQx95bFua1Wp1OKpDFUJ+QugaBFW5Xa2OejocXGW509ZpcQCYDfYQUuywfc9rJc7Imyt6b+aHlwyBEtP12DNZZmS7Bw/0UIChTCAAg6n2EPpZqemxtrTUjWrdrTXSeiVrc+B/mLlwcshdDg2+tTuAMXaSABaSa9JsF008BLgW2XQPrApqyPe89k3daCP8LVH3qwLMfsTmYZhlZSsVcxbb7g9rxY4ym5s871XjrT6kYPsEMI4RWiTcJsc5SYKW2a9I03uIBybAnjUdoOeA8D/wPWDvFxLBVTZAAnDNdthZTOpMO7mnRTNDShiPcBc+RC6s1P2XSQASl7SsaGundN4R15AQZNbq1LcaT/8fGGltiI54DFrQQqRFpzs6me6iGZMUXEKKmCrNUDQP0ABkD0EBhn30a/9opE3zCZtkTFxmhUmd17mz2SyOPixLgdeP2tAULTfuXnv4sFarnbNRA641btIUo102CEhnrGz6VndfgtcLqjqIEPwpifKH8ODWEwy/oxKLBoNRg6DFhUrmuUgxWRUzKPi4gCIMthFmLuqKYB44ALOhej3OsXTcgKb4K+nYzismJ07AX5vtQb0BDrRsG3c8IFHlMFbzcjm0oiuC1e54fCivAQyMi007+iuZE7xZ1s03raozUf0+bxYEPmVWSoo8JpHvIU1KGtWqopMMPMCXdEgFhmaCd0XT8c0MOKYIKaLUtGuD2aSEqX9Kq5uWNoIwDuAxkRiUHvQggpREcuqxKWjBehOEntseumGlYWdJ2CmBHHPOCySHDQYMRsISo7CKVDw0NpKATT3YgCYeDAFz0VsP/Q6dmWcnqyw4Lf2RbCA7M/+d132t2es0uW4naJf5XWQ1mmj0DvnfnfzBaFWyDkSMUZW3j+bYuZu3YMcAVN4rZmXrqRvHp9YdrZf/QXLttR2JQCl+zDmtINnuwhbWGboSN6LbCNrfqNUy/MDfiHaQXGHFsIKVSCTJnwhOCSf3C81+cZqpwWBQrVYHm7JWz9fZHdQnr5kaRnwKTlHiqDoYdLvdlKnGI5Asy9oH5wTwU/tQBtl4qnp/V7prNps3CEm1DNQtF2u1YxgItB3NfERJUoK476YklZ0T5PucD5DT2MrLLcbQScB1jCrtk/k72KvQBagh5bZzipjDer6toa8l5nyQUlXVMHTdWHyzYg+QgzvoU1SGBAzDVOxkUkb16G7n9vKy3W7X6+zS6/WKNUnLpmNhqkV6IKkU9rvdrieMLWGVkgqp6k4Y3CC53NgrFosHliLTyFS0X2FAhwgS9HHX05YNiSE9aF2D9Lq83r/tdPr9/vZDZRldDXeoIQ0AE0FBwAweBZy3wP2nRCLLVSqVTTA5uZlsnoPWWUqRKDznFgRM+RQeMCxZ0vvcFfhuSZd2mGHzLAfVdL9LwD2HIcCeA7HYHQ8wll0iS/8VoE8LA/y6RKn/FPCbB+AZYUDI4AHDcOwJjgDxIgLzPKB7kn7sBHwbeRhgsgDFNyUMWLCGKGfmuIsLeqF+gi/ckeUsZQXMeoQBQQwBcVUBEqcS9AfEycdWiCuwDfg5Kt4IdsNOigOJpvCSS8jzDPNmMKHYJDHDLw4IFog45ZtlnhE+MGGBOHLBFokUZ/VW3S6BMX/BLFBxcz7otcyABWaaGafmqUAgEMqZBZMqTAg3mnfRGgq86uGZj7gf8ljefcbAmJsSzfE453X9Pe/70Npa6BURcKzTPwND06cN3Dx+AAAAAElFTkSuQmCC";
            }), n = J.d.div.attrs({
                className: "bilibili-helper-treasure-counter"
            })(Se), t = J.d.div.attrs({
                className: "bilibili-heloer-treasure-panel a-scale-in-ease"
            })(Ce), i = J.d.h2(Oe);
            return function(r) {
                function a(e) {
                    b()(this, a);
                    var n = v()(this, (a.__proto__ || h()(a)).call(this, e));
                    return n.handleOnClickTreasure = function() {
                        n.setState({
                            open: !n.state.open
                        });
                    }, n.handleOnLoadImg = function() {
                        var e = n.canvasDOM.getContext("2d");
                        e.clearRect(0, 0, 120, 40), e.drawImage(n.imgDOM, 0, 0);
                        for (var t = n.getGrayScaleMap(e), i = n.orderFilter2In3x3(t), r = 0; r < i.length; ++r) {
                            var a = i[r];
                            e.fillStyle = "rgb(" + a + ", " + a + ", " + a + ")", e.fillRect(r % 120, Math.round(r / 120), 1, 1);
                        }
                        try {
                            var o = n.adjustQuestion(window.OCRAD(e.getImageData(0, 0, 120, 40))), c = new Function("return " + o)();
                            n.getAward(c);
                        } catch (e) {
                            setTimeout(function() {
                                n.getCaptcha();
                            }, 1e3);
                        }
                    }, n.showPanel = function() {
                        var e = he()(n.panel);
                        "block" !== e.css("display") && (e.css({
                            display: "block"
                        }).addClass("v-enter-active", "v-enter-to"), setTimeout(function() {
                            e.removeClass("v-enter-active", "v-enter-to");
                        }, 300));
                    }, n.hidePanel = function() {
                        var e = he()(n.panel);
                        "none" !== e.css("display") && (e.addClass("a-scale-out-ease", "v-leave-to"), setTimeout(function() {
                            e.removeClass("a-scale-out-ease", "v-leave-to").css({
                                display: "none"
                            });
                        }, 300));
                    }, n.setCounter = function(e) {
                        if (n.state.counterComplete && e) {
                            n.setState({
                                counterComplete: !1
                            });
                            var t = Date.now() + 60 * e * 1e3, i = setInterval(function() {
                                var e = ye()((t - Date.now()) / 1e3);
                                e <= 0 && (clearInterval(i), n.setState({
                                    counterComplete: !0
                                }, function() {
                                    return n.getCaptcha();
                                }));
                                var r = String(e % 60).padStart(2, "0"), a = String(Math.floor(e / 60)).padStart(2, "0");
                                n.counter.text(a + ":" + r);
                            }, 1e3);
                        }
                    }, n.getCurrentTask = function() {
                        n.counter.text("刷新中"), chrome.runtime.sendMessage({
                            command: "getCurrentTask",
                            type: "treasure",
                            url: xe.getCurrentTask
                        }, function(e) {
                            switch (e.code) {
                              case 0:
                                n.retryTime && (n.retryTime = 0);
                                var t = e.data, i = t.max_times, r = t.times, a = t.minute, o = t.silver, c = t.time_end, l = t.time_start;
                                n.setState({
                                    max_times: i,
                                    times: r,
                                    minute: a,
                                    silver: o,
                                    time_end: c,
                                    time_start: l
                                }), n.setCounter(a);
                                break;

                              case -10017:
                                n.counter.text("已领完");
                                break;

                              default:
                                n.retryTime < n.maxRetryTime && (n.retryTime += 1, n.counter.text(e.msg), setTimeout(function() {
                                    return n.getCurrentTask();
                                }, 2e3));
                            }
                        });
                    }, n.getCaptcha = function() {
                        n.counter.text("验证中");
                        var e = new we.a(xe.getCaptcha);
                        e.set("query", {
                            ts: Date.now()
                        }), chrome.runtime.sendMessage({
                            command: "getCaptcha",
                            type: "treasure",
                            url: e.toString()
                        }, function(e) {
                            switch (e.code) {
                              case 0:
                                n.retryTime && (n.retryTime = 0), n.imgDOM.setAttribute("src", e.data.img);
                                break;

                              case -500:
                              default:
                                n.retryTime < n.maxRetryTime && (n.retryTime += 1, n.counter.text(e.msg), setTimeout(n.getCaptcha, 2e3));
                            }
                        });
                    }, n.getAward = function(e) {
                        n.counter.text("领取中");
                        var t = n.state, i = t.time_start, r = t.time_end, a = new we.a(xe.getAward);
                        a.set("query", {
                            time_start: i,
                            time_end: r,
                            captcha: e
                        }), chrome.runtime.sendMessage({
                            command: "getAward",
                            type: "treasure",
                            url: a.toString()
                        }, function(e) {
                            switch (e.code) {
                              case 0:
                                n.retryTime && (n.retryTime = 0), e.data.isEnd ? n.counter.text("已领完") : (n.sendNotification(), 
                                n.getCurrentTask(), n.counter.text("领取成功"));
                                break;

                              case -500:
                                n.retryTime && (n.retryTime = 0), n.getCurrentTask();
                                break;

                              case -902:
                              case -10017:
                              case -901:
                              default:
                                n.retryTime < n.maxRetryTime && (n.retryTime += 1, n.counter.text(e.msg), setTimeout(n.getCaptcha, 2e3));
                            }
                        });
                    }, n.sendNotification = function() {
                        var e = A()(n.settings.options, {
                            key: "notification"
                        });
                        if (e && e.on) {
                            var t = n.state, i = t.silver, r = t.time_start;
                            chrome.runtime.sendMessage({
                                command: "sendNotification",
                                type: "treasure",
                                time_start: r,
                                silver: i
                            });
                        }
                    }, n.getGrayScaleMap = function(e) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 235, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 120, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40, r = e.getImageData(0, 0, t, i).data, a = [], o = 0; o < i; o++) for (var c = 0; c < t; c++) {
                            var l = 4 * (o * t + c), s = r.slice(l, l + 4), d = s ? 77 * s[0] + 150 * s[1] + 29 * s[2] + 128 >> 8 : 0;
                            a.push(d > n ? d : 0);
                        }
                        return a;
                    }, n.orderFilter2In3x3 = function(e) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 120, i = function(n, i) {
                            return n + i * t >= 0 ? e[n + i * t] : 255;
                        }, r = [], a = e.length, o = n - 1, c = 0; c < a; ++c) {
                            var l = [ c % t, Math.floor(c / t) ], s = l[0], d = l[1], u = new Array(9);
                            u[0] = i(s - 1, d - 1), u[1] = i(s + 0, d - 1), u[2] = i(s + 1, d - 1), u[3] = i(s - 1, d + 0), 
                            u[4] = i(s + 0, d + 0), u[5] = i(s + 1, d + 0), u[6] = i(s - 1, d + 1), u[7] = i(s + 0, d + 1), 
                            u[8] = i(s + 1, d + 1), u.sort(function(e, n) {
                                return e - n;
                            }), r.push(u[o]);
                        }
                        return r;
                    }, n.adjustQuestion = function(e) {
                        var t = "", i = e.trim();
                        for (var r in i) {
                            var a = n.correctStr[i[r]];
                            t += void 0 !== a ? a : i[r];
                        }
                        return "4" === t[2] && (t[2] = "+"), t;
                    }, n.state = {
                        open: !1,
                        max_times: NaN,
                        times: NaN,
                        minute: NaN,
                        silver: NaN,
                        time_end: NaN,
                        time_start: NaN,
                        counterComplete: !0,
                        permissionMap: {}
                    }, n.retryTime = 0, n.maxRetryTime = 10, n.correctStr = {
                        i: 1,
                        I: 1,
                        "|": 1,
                        l: 1,
                        o: 0,
                        O: 0,
                        D: 0,
                        S: 6,
                        s: 6,
                        b: 6,
                        R: 8,
                        B: 8,
                        z: 2,
                        Z: 2,
                        ".": "-",
                        _: 4,
                        g: 9
                    }, he()(document).on("click", function(e) {
                        (he()(e.target).hasClass("treasure-box") || 0 === he()(e.target).parents(".treasure-box").length) && n.setState({
                            open: !1
                        });
                    }), n;
                }
                return x()(a, r), D()(a, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.sendMessage({
                            command: "getSetting",
                            feature: "treasure"
                        }, function(n) {
                            e.settings = n;
                        }), this.counter = he()(this.counterDOM), this.imgDOM.crossOrigin = "Anonymous", 
                        chrome.runtime.sendMessage({
                            command: "inIncognitoContext"
                        }, function(n) {
                            n || e.getCurrentTask();
                        }), chrome.runtime.sendMessage({
                            command: "getPermissionMap"
                        }, function(n) {
                            e.setState({
                                permissionMap: n
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var r = this, a = this.state, o = a.open, c = a.max_times, l = a.times, s = a.minute, d = a.counterComplete, u = a.permissionMap;
                        return o ? this.showPanel() : this.hidePanel(), N.a.createElement(N.a.Fragment, null, N.a.createElement(e, {
                            open: d,
                            onClick: l ? this.handleOnClickTreasure : null
                        }, N.a.createElement(n, {
                            ref: function(e) {
                                return r.counterDOM = e;
                            }
                        }, u.login ? "载入中" : "未登录")), N.a.createElement(t, {
                            ref: function(e) {
                                return r.panel = e;
                            }
                        }, N.a.createElement(i, null, "宝箱 - 第", l, "/", c, "轮 - 第", s / 3, "次"), N.a.createElement("img", {
                            ref: function(e) {
                                return r.imgDOM = e;
                            },
                            onLoad: this.handleOnLoadImg
                        }), N.a.createElement("canvas", {
                            ref: function(e) {
                                return r.canvasDOM = e;
                            }
                        })));
                    }
                } ]), a;
            }(N.a.Component);
        }, De = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "treasure"
                }));
                return e.load = function(n, t) {
                    return t.on ? new O.a(function(n) {
                        var t = Le();
                        e.interval(".treasure-box", 2e3).then(function(e) {
                            e && (e.setAttribute("id", "bilibili-helper-treasure"), R.a.render(N.a.createElement(t, null), e, n));
                        });
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Me = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "treasure",
                    kind: "live",
                    permissions: [ "login", "notifications" ],
                    settings: {
                        on: !0,
                        hasUI: !0,
                        title: Object(w.a)("treasure_name"),
                        description: Object(w.a)("treasure_description"),
                        type: "checkbox",
                        options: [ {
                            key: "notification",
                            title: Object(w.a)("treasure_notification"),
                            on: !0,
                            description: Object(w.a)("treasure_notification_description")
                        } ]
                    }
                }));
                return e.addListener = function() {
                    chrome.runtime.onMessage.addListener(function(n, t, i) {
                        if ("sendNotification" === n.command && "treasure" === n.type) {
                            var r = n.time_start, a = n.silver, o = A()(e.settings.options, {
                                key: "notification"
                            });
                            o && o.on && Object(w.c)("bilibili-helper-treasure" + r, {
                                type: "basic",
                                iconUrl: ge,
                                title: Object(w.a)("extensionNotificationTitle"),
                                message: "成功领取" + a + "瓜子"
                            });
                        } else "getCurrentTask" === n.command && "treasure" === n.type ? Object(w.e)(n.url, {
                            credentials: "include"
                        }).then(function(e) {
                            return e.json();
                        }).then(function(n) {
                            e.retryTime = 0, i(n);
                        }, function(n) {
                            e.retryTime < e.maxRetryTime ? (++e.retryTime, console.error(n), setTimeout(e.getCaptcha, 2e3)) : i(n);
                        }) : "getCaptcha" === n.command && "treasure" === n.type ? Object(w.e)(n.url, {
                            credentials: "include"
                        }).then(function(e) {
                            return e.json();
                        }).then(function(n) {
                            e.retryTime = 0, i(n);
                        }, function(n) {
                            e.retryTime < e.maxRetryTime ? (++e.retryTime, console.error(n.json()), setTimeout(e.getCaptcha, 2e3)) : i(n);
                        }) : "getAward" === n.command && "treasure" === n.type && Object(w.e)(n.url, {
                            credentials: "include"
                        }).then(function(e) {
                            return e.json();
                        }).then(function(n) {
                            e.retryTime = 0, i(n);
                        }, function(n) {
                            e.retryTime < e.maxRetryTime ? (++e.retryTime, console.error(n), setTimeout(e.getCaptcha, 2e3)) : i(n);
                        });
                        return !0;
                    });
                }, e.retryTime = 0, e.maxRetryTime = 10, e;
            }
            return x()(n, e), n;
        }(k.a), Ae = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "googleAnalytics",
                    kind: "other",
                    settings: {
                        on: !0,
                        title: Object(w.a)("googleAnalytics_name"),
                        description: Object(w.a)("googleAnalytics_description")
                    }
                }));
                return e.launch = function() {
                    e.insertGAScriptTag().then(function() {
                        var n = e.getSetting("debug").on;
                        e.send({
                            hitType: "event",
                            eventCategory: "initialization",
                            eventAction: "init",
                            eventLabel: (n ? "official" : "dev") + " " + w.n,
                            nonInteraction: !0
                        });
                    });
                }, e.send = function(e) {
                    var n = e.hitType, t = e.eventAction, i = e.eventCategory, r = e.eventLabel, a = e.nonInteraction;
                    window.ga && window.ga("send", {
                        hitType: n,
                        eventAction: t,
                        eventCategory: i,
                        eventLabel: r,
                        nonInteraction: a
                    });
                }, e.listener = function(n) {
                    if (e.settings.on && "setGAEvent" === n.command && n.action && n.category) {
                        var t = n.action, i = n.label, r = n.category, a = void 0 === r ? "" : r, o = n.nonInteraction, c = void 0 !== o && o;
                        e.insertGAScriptTag().then(function() {
                            e.send({
                                hitType: "event",
                                eventAction: t,
                                eventCategory: a,
                                eventLabel: i,
                                nonInteraction: c
                            });
                        });
                    }
                    return !0;
                }, e.addListener = function() {
                    chrome.runtime.onMessage.addListener(e.listener);
                }, e.insertGAScriptTag = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "UA-39765420-2";
                    return new O.a(function(t) {
                        0 === document.getElementsByClassName("ga-script").length ? e.getStorage("userId").then(function(n) {
                            var t = n.userId;
                            if (t) return t;
                            var i = String(Math.random()).slice(2);
                            return e.setStorage({
                                userId: i
                            }).then(function() {
                                return i;
                            });
                        }).then(function(e) {
                            window.GoogleAnalyticsObject = "ga", window.ga = window.ga || function() {
                                (window.ga.q = window.ga.q || []).push(arguments);
                            }, window.ga.l = 1 * new Date();
                            var i = document.createElement("script");
                            i.setAttribute("class", "ga-script"), i.setAttribute("async", 1), i.setAttribute("src", "https://www.google-analytics.com/analytics.js"), 
                            document.head.appendChild(i), window.ga("create", n, "auto"), window.ga("set", "checkProtocolTask"), 
                            window.ga("set", "dimension1", w.n), window.ga("set", "userId", e), t();
                        }) : t();
                    });
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Ie = t(29), Ee = t.n(Ie), je = t(170), qe = t.n(je), Pe = function(e) {
            function n() {
                var e = this;
                b()(this, n);
                var t, i = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "debug",
                    kind: "other",
                    settings: {
                        on: !1,
                        toggle: !0,
                        hide: !0,
                        title: "调试模式",
                        description: "测试版中该选项无法关闭。开启后会在控制台输出更多信息，并执行更多用于测试的代码"
                    }
                }));
                return i.launch = function() {
                    i.settings.on = !1, i.setSetting(i.settings);
                }, i.afterSetSetting = (t = qe()(Ee.a.mark(function n(t) {
                    var i = t.on;
                    return Ee.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            chrome.runtime.sendMessage({
                                command: "debugMode",
                                value: i
                            });

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, n, e);
                })), function(e) {
                    return t.apply(this, arguments);
                }), i;
            }
            return x()(n, e), n;
        }(k.a), Te = t(35), Ue = t.n(Te), ze = t(214), Ne = t(451), Fe = t(452), Re = t.n(Fe), He = t(174), Be = t.n(He), Ve = t(244), We = t.n(Ve), Je = t(453), Ke = t.n(Je), Ye = {
            list: "https://api.bilibili.com/x/v1/dm/list.so",
            historyList: "https://api.bilibili.com/x/v2/dm/history",
            card: "https://api.bilibili.com/x/web-interface/card"
        }, Ge = t(198), Ze = t(455), Qe = (t(853), W()([ "\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ], [ "\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ])), Xe = W()([ "\n      position: relative;\n      height: 200px;\n      margin-left: 4px;\n      padding: 1px;\n      border: 1px solid #eee;\n      border-radius: 4px 4px 0 0;\n      font-size: 12px;\n      overflow: hidden;\n      outline: none;\n      & .no-data {}\n    " ], [ "\n      position: relative;\n      height: 200px;\n      margin-left: 4px;\n      padding: 1px;\n      border: 1px solid #eee;\n      border-radius: 4px 4px 0 0;\n      font-size: 12px;\n      overflow: hidden;\n      outline: none;\n      & .no-data {}\n    " ]), $e = W()([ "\n      display: block;\n      width: 418px;\n      margin-left: 4px;\n      padding: 4px 6px;\n      box-sizing: border-box;\n      border: 1px solid #eee;\n      border-top: none;\n      border-radius: 0 0 4px 4px;\n      font-size: 12px;\n    " ], [ "\n      display: block;\n      width: 418px;\n      margin-left: 4px;\n      padding: 4px 6px;\n      box-sizing: border-box;\n      border: 1px solid #eee;\n      border-top: none;\n      border-radius: 0 0 4px 4px;\n      font-size: 12px;\n    " ]), en = W()([ "\n      display: flex;\n      margin-bottom: 1px;\n      padding: 0 8px 1px;\n      line-height: 20px;\n      border-radius: 2px;\n      background-color: ", ";\n      cursor: pointer;\n      &:hover {\n        color: #fff;\n        background-color: #00a1d6;\n        .target-words {\n          color: #fff;\n        }\n      }\n      & .time {\n        flex-grow: 0;\n        flex-shrink: 0;\n        width: 30px;\n        padding-right: 7px;\n      }\n      & .danmu {\n        flex-grow: 1;\n        margin: 0 7px 0 3px;\n        padding: 0 7px;\n        border-left: 1px solid #fff;\n        border-right: 1px solid #fff;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      & .author {\n        flex-shrink: 0;\n        width: 100px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      & .target-words {\n        font-weight: bold;\n        color: #00a1d6;\n      }\n    " ], [ "\n      display: flex;\n      margin-bottom: 1px;\n      padding: 0 8px 1px;\n      line-height: 20px;\n      border-radius: 2px;\n      background-color: ", ";\n      cursor: pointer;\n      &:hover {\n        color: #fff;\n        background-color: #00a1d6;\n        .target-words {\n          color: #fff;\n        }\n      }\n      & .time {\n        flex-grow: 0;\n        flex-shrink: 0;\n        width: 30px;\n        padding-right: 7px;\n      }\n      & .danmu {\n        flex-grow: 1;\n        margin: 0 7px 0 3px;\n        padding: 0 7px;\n        border-left: 1px solid #fff;\n        border-right: 1px solid #fff;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      & .author {\n        flex-shrink: 0;\n        width: 100px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      & .target-words {\n        font-weight: bold;\n        color: #00a1d6;\n      }\n    " ]), nn = W()([ "\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 23px;\n      right: 1px;\n      bottom: 1px;\n      left: 1px;\n      border-radius: 4px;\n      font-size: 12px;\n      font-weight: bold;\n      letter-spacing: 1px;\n      background-color: rgba(255, 255, 255, 0.8);\n      cursor: no-drop;\n      user-select: none;\n    " ], [ "\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 23px;\n      right: 1px;\n      bottom: 1px;\n      left: 1px;\n      border-radius: 4px;\n      font-size: 12px;\n      font-weight: bold;\n      letter-spacing: 1px;\n      background-color: rgba(255, 255, 255, 0.8);\n      cursor: no-drop;\n      user-select: none;\n    " ]), tn = W()([ "\n      float: right;\n      border-radius: 4px;\n      margin-left: 10px;\n      button {\n        padding: 0;\n        min-width: 35px;\n        font-size: 12px;\n        border: 1px solid ", ";\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n      }\n    " ], [ "\n      float: right;\n      border-radius: 4px;\n      margin-left: 10px;\n      button {\n        padding: 0;\n        min-width: 35px;\n        font-size: 12px;\n        border: 1px solid ", ";\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n      }\n    " ]), rn = function() {
            var e = Y.a.color, n = new Ze.a(), t = J.d.div.attrs({
                className: "bilibili-helper-danmu-title"
            })(Qe, e("google-grey-500")), i = Object(J.d)(K.a).attrs({
                className: "bilibili-helper-danmu-list"
            })(Xe), r = J.d.input.attrs({
                className: "bilibili-helper-danmu-input"
            })($e), a = J.d.div(en, function(e) {
                return e.hasQueried ? "#d6e8f5" : "white";
            }), o = J.d.div(nn), c = Object(J.d)(Ge.a)(tn, e("bilibili-pink"), function(n) {
                return n.on ? "#fff" : e("bilibili-pink");
            }, function(n) {
                return n.on ? e("bilibili-pink") : "#fff";
            });
            return function(e) {
                function l(e) {
                    b()(this, l);
                    var r = v()(this, (l.__proto__ || h()(l)).call(this, e));
                    r.propTypes = {
                        settings: ce.a.object
                    }, r.addListener = function() {
                        var e = r;
                        chrome.runtime.onMessage.addListener(function(e, n, t) {
                            return "loadHistoryDanmu" === e.command ? e.date ? (r.getDANMUList(e.cid, e.date), 
                            t(!0)) : console.error("Error history danmu date: " + e.date) : "loadCurrentDanmu" === e.command && (r.getDANMUList(e.cid), 
                            t(!0)), !0;
                        }), window.addEventListener("message", function(e) {
                            "pakku_ajax_request" === e.data.type && /x\/v2\/dm\/history/.test(e.data.arg) && chrome.runtime.sendMessage({
                                command: "pakkuGetHistoryDanmu",
                                url: e.data.arg
                            });
                        });
                        var n = void 0, t = void 0;
                        he()(document).on("mouseenter", "[helper-data-usercard-mid]", function() {
                            e.createCard(this, he()(this).attr("helper-data-usercard-mid"));
                        }), he()(document).on("mouseenter", "[helper-data-usercard-mid], #helper-card", function() {
                            e.removeCardSign = !1, t && (clearTimeout(t), t = null), t = setTimeout(function() {
                                document.querySelector("#helper-card") && (document.querySelector("#helper-card").style.display = "block");
                            }, 300), n && (clearTimeout(n), n = null), n = setTimeout(function() {
                                e.removeCardSign = !0;
                            }, 300);
                        }), he()(document).on("mouseleave", "[helper-data-usercard-mid], #helper-card, .bilibili-helper-danmu-wrapper", function() {
                            setTimeout(function() {
                                var n = document.querySelector("#helper-card");
                                e.removeCardSign && n && (n.style.display = "none");
                            }, 200);
                        });
                    }, r.getDANMUList = function(e, n) {
                        if (e && !r.state.loading) {
                            var t = Ye.list, i = Ye.historyList, a = setTimeout(function() {
                                r.setState({
                                    loading: !0,
                                    loadingText: "弹幕加载中~(๑•̀ㅂ•́)و"
                                });
                            }, 800), o = new we.a(n ? i : t);
                            o.set("query", {
                                oid: e,
                                type: 1,
                                date: n
                            }), chrome.runtime.sendMessage({
                                command: "fetchDanmu",
                                url: o.toString()
                            }, function(t) {
                                if (clearTimeout(a), t) {
                                    n && (r.danmuDate = n);
                                    var i = new DOMParser();
                                    r.danmuDocumentStr = t, r.danmuDocument = i.parseFromString(t, "application/xml");
                                    var o = r.danmuDocument2JSON(r.danmuDocument);
                                    o.list = r.sortJSONByTime(o.list), r.orderedJSON = B()({}, o), r.setState({
                                        danmuJSON: o,
                                        loaded: !0,
                                        loading: !1,
                                        currentCid: e
                                    });
                                } else r.setState({
                                    loadingText: "弹幕加载失败!请刷新页面！"
                                });
                            });
                        }
                    }, r.getUserInfoByUid = function(e) {
                        return new O.a(function(n) {
                            var t = new we.a(Ye.card);
                            t.set("query", {
                                mid: e,
                                photo: 1
                            }), e && chrome.runtime.sendMessage({
                                command: "fetchDanmu",
                                url: t.toString()
                            }, function(t) {
                                if (t) {
                                    var i = JSON.parse(t), a = i.code, o = i.data;
                                    if (0 === a) {
                                        r.isRobotUser(o) && n(!1);
                                        var c = o.card, l = o.space, s = o.follower, d = o.following;
                                        r.userMap[e] = B()({}, c, l, {
                                            follower: s,
                                            following: d
                                        }), n(e);
                                    } else console.error(t), r.setState({
                                        loadingText: "查询失败!"
                                    }, function() {
                                        setTimeout(function() {
                                            return r.setState({
                                                loading: !1
                                            });
                                        }, 3e3);
                                    }), n(!1);
                                } else console.error(t), r.setState({
                                    loadingText: "查询失败!"
                                }, function() {
                                    setTimeout(function() {
                                        return r.setState({
                                            loading: !1
                                        });
                                    }, 3e3);
                                }), n(!1);
                            });
                        });
                    }, r.isRobotUser = function() {
                        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).card.level_info.current_level;
                    }, r.sortJSONByTime = function(e) {
                        return Ke()(e, "time");
                    }, r.danmuDocument2JSON = function(e) {
                        var n = [];
                        return We()(e.getElementsByTagName("d"), function(e) {
                            var t = e.getAttribute("p").split(","), i = U()(t, 8), r = i[0], a = i[1], o = i[2], c = i[3], l = i[4], s = (i[5], 
                            i[6]), d = i[7], u = e.innerHTML;
                            /^\[(".+"?){14}\]$/g.test(u) && (u = JSON.parse(u)[4].trim()), n.push({
                                danmuMode: a,
                                fontSize: o,
                                color: c,
                                unixTime: l,
                                authorHash: s,
                                rowId: d,
                                danmu: u,
                                time: Object(w.l)(1e3 * r)
                            });
                        }), r.setState({
                            loaded: !0
                        }), {
                            cid: Number(e.getElementsByTagName("chatid")[0].innerHTML),
                            maxLimit: Number(e.getElementsByTagName("maxlimit")[0].innerHTML),
                            count: n.length,
                            list: n
                        };
                    }, r.getRowHeight = function(e) {
                        var n = e.index, t = r.state.danmuJSON.list[n], i = r.authorHashMap[t.authorHash];
                        return i && 20 * i.length || 20;
                    }, r.handleInputChange = function(e) {
                        var n = e.target.value, t = r.state.danmuJSON.cid;
                        if (e.target.value) {
                            var i = [];
                            We()(r.orderedJSON.list, function(e) {
                                if (e.danmu.indexOf(n) >= 0) {
                                    var t = e.danmu.replace(n, '<span class="target-words">' + n + "</span>");
                                    i.push(B()({}, e, {
                                        danmu: t
                                    }));
                                }
                            }), r.setState({
                                danmuJSON: {
                                    cid: t,
                                    count: i.length,
                                    list: i
                                }
                            });
                        } else {
                            var a = r.orderedJSON, o = a.count, c = a.list;
                            r.setState({
                                danmuJSON: {
                                    cid: t,
                                    count: o,
                                    list: c
                                }
                            });
                        }
                    }, r.handleDanmuLineClick = function(e) {
                        var t = /^b(\d+)$/.exec(e), i = [];
                        i = t && t[1] ? [ t[1] ] : n.crack(e), r.setState({
                            loading: !0,
                            loadingText: "努力查询中~(๑•̀ㅂ•́)و"
                        });
                        var a = [];
                        O.a.all(i.map(function(e) {
                            return r.getUserInfoByUid(e);
                        })).then(function(e) {
                            a = a.concat(q()(e));
                        }).then(function() {
                            a.length > 0 && (r.authorHashMap[e] = a), r.setState({
                                loading: !1
                            }, function() {
                                r.danmuListRef.recomputeRowHeights(), r.danmuListRef.forceUpdate();
                            });
                        });
                    }, r.handleAuthorClick = function(e, n) {
                        if (r.state.queryUserMode) r.setState({
                            queryUserMode: !1,
                            danmuJSON: r.queryUserModeTemplateMap
                        }, function() {
                            r.danmuListRef.scrollToRow(r.currentRowIndex);
                        }); else {
                            var t = [];
                            r.queryUserModeTemplateMap = B()({}, r.state.danmuJSON), Be()(n, function(e) {
                                var n = Re()(r.authorHashMap, function(n) {
                                    return !!~n.indexOf(e);
                                });
                                Be()(r.orderedJSON.list, function(e) {
                                    e.authorHash === n && t.push(B()({}, e));
                                });
                            }), r.setState({
                                queryUserMode: !0,
                                danmuJSON: {
                                    cid: r.orderedJSON.cid,
                                    count: t.length,
                                    list: t
                                }
                            }, function() {
                                r.currentRowIndex = e;
                            });
                        }
                    }, r.handleDownloadClick = function(e) {
                        chrome.runtime.sendMessage({
                            command: "ass" === e ? "downloadDanmuASS" : "downloadDanmuXML",
                            cid: r.state.currentCid,
                            danmuDocumentStr: r.danmuDocumentStr,
                            date: r.danmuDate,
                            filename: Object(w.f)(document),
                            origin: "ass" === e ? document.location.href : null
                        });
                    }, r.createCardDOM = function(e) {
                        if (!e) return console.error("no user data to create card");
                        var n = e.mid, t = e.face, i = e.s_img, r = e.name, a = e.sign, o = e.sex, c = e.level_info, l = e.following, s = void 0, d = void 0, u = void 0, p = void 0, m = void 0, h = void 0, f = void 0, b = void 0, g = void 0, v = void 0, y = void 0, x = void 0;
                        d = document.querySelector(".helper-card-header") || document.createElement("div"), 
                        u = document.querySelector(".helper-card-container") || document.createElement("div"), 
                        p = document.querySelector(".helper-card-face") || document.createElement("img"), 
                        m = document.querySelector(".helper-card-user") || document.createElement("p"), 
                        h = document.querySelector(".helper-card-name") || document.createElement("a"), 
                        f = document.querySelector(".helper-card-sign") || document.createElement("p"), 
                        b = document.querySelector(".helper-card-level") || document.createElement("a"), 
                        g = document.querySelector(".helper-card-sex") || document.createElement("i"), v = document.querySelector(".helper-card-feed") || document.createElement("div"), 
                        y = document.querySelector(".helper-card-like-btn") || document.createElement("a"), 
                        x = document.querySelector(".helper-card-like-btn") || document.createElement("a"), 
                        (s = document.querySelector("#helper-card")) || (s = document.createElement("div"), 
                        d.setAttribute("class", "helper-card-header bg"), u.setAttribute("class", "helper-card-container info"), 
                        p.setAttribute("class", "helper-card-face face"), m.setAttribute("class", "helper-card-user user"), 
                        h.setAttribute("class", "helper-card-name name"), f.setAttribute("class", "helper-card-sign sign"), 
                        v.setAttribute("class", "helper-card-btn btn-box"), s.setAttribute("id", "helper-card"), 
                        s.setAttribute("class", "user-card"), b.setAttribute("class", "helper-card-level level"), 
                        b.setAttribute("href", "//www.bilibili.com/html/help.html#k_2"), b.setAttribute("target", "_blank"), 
                        y.setAttribute("class", "like"), y.innerHTML = '<span class="hover-text">取消关注</span><span class="default-text">+关注</span>', 
                        x.setAttribute("class", "message"), x.setAttribute("target", "_blank"), x.innerText = "发消息", 
                        m.appendChild(h), m.appendChild(g), m.appendChild(b), u.appendChild(m), u.appendChild(f), 
                        v.appendChild(y), v.appendChild(x), s.appendChild(d), s.appendChild(p), s.appendChild(u), 
                        s.appendChild(v)), d.setAttribute("style", "background-image: url(" + i + ");"), 
                        p.setAttribute("src", t), "男" === o ? g.setAttribute("class", "sex man") : "女" === o && g.setAttribute("class", "sex woman");
                        var k = document.createElement("i");
                        return k.setAttribute("class", "level l" + c.current_level), b.innerHTML = "", b.appendChild(k), 
                        y.setAttribute("mid", n), y.setAttribute("uname", r), y.onclick = function() {
                            this.userMap[n].following = !l;
                        }, l && y.setAttribute("class", "like liked"), x.setAttribute("href", "//message.bilibili.com/#whisper/mid" + n), 
                        h.innerText = r, h.setAttribute("href", "https://space.bilibili.com/" + n), f.innerText = a, 
                        s;
                    }, r.createCard = function(e, n) {
                        var t = r.userMap[n], i = r.createCardDOM(t);
                        document.querySelector("#helper-card") || document.querySelector("body").appendChild(i), 
                        r.setTargetPosition(e, i);
                    }, r.setTargetPosition = function(e, n) {
                        var t = e.getBoundingClientRect(), i = t.height, a = t.top, o = t.left, c = n.getBoundingClientRect().height;
                        c && (r.lastHeight = c), n.style.top = a >= c ? a - r.lastHeight - 2 + "px" : a + i + 2 + "px", 
                        o + 377 <= window.innerWidth ? n.style.left = o + "px" : n.style.left = window.innerWidth - 377 + "px";
                    }, r.renderHeader = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.state.danmuJSON;
                        return N.a.createElement(t, null, N.a.createElement("span", null, "弹幕发送者查询", e.count ? N.a.createElement("span", {
                            className: "count"
                        }, e.count, " 条") : null), N.a.createElement(c, {
                            title: "下载 ASS 格式弹幕文件",
                            onClick: function() {
                                return r.handleDownloadClick("ass");
                            }
                        }, "ASS"), N.a.createElement(c, {
                            title: "下载 XML 格式弹幕文件",
                            onClick: function() {
                                return r.handleDownloadClick("xml");
                            }
                        }, "XML"));
                    }, r.renderLine = function(e) {
                        var n = e.index, t = e.style, i = r.state.danmuJSON.list[n], o = i.rowId, c = i.danmu, l = i.authorHash, s = i.time, d = r.authorHashMap[l], u = E()(d, function(e) {
                            return r.userMap[e] ? r.userMap[e].name : "";
                        });
                        return N.a.createElement(a, {
                            key: o,
                            title: "[" + s + "] " + c + " " + (u ? "by:" + u.join(",") : ""),
                            onClick: function() {
                                return d ? r.handleAuthorClick(n, d) : r.handleDanmuLineClick(l);
                            },
                            hasQueried: !Ue()(u),
                            style: t
                        }, N.a.createElement("span", {
                            className: "time"
                        }, s), N.a.createElement("span", {
                            className: "danmu",
                            dangerouslySetInnerHTML: {
                                __html: c
                            }
                        }), N.a.createElement("span", {
                            className: "author"
                        }, u.map(function(e, n) {
                            return N.a.createElement("div", {
                                key: e,
                                "helper-data-usercard-mid": d[n]
                            }, e);
                        })));
                    }, r.renderList = function() {
                        return N.a.createElement(i, {
                            ref: function(e) {
                                return r.danmuListRef = e;
                            },
                            width: 414,
                            height: 200,
                            rowCount: r.state.danmuJSON.list.length,
                            rowHeight: r.getRowHeight,
                            rowRenderer: r.renderLine,
                            noRowsRenderer: function() {
                                return N.a.createElement(a, null, "无数据");
                            },
                            scrollToAlignment: "center"
                        });
                    }, r.orderedJSON = {}, r.userMap = {}, r.userCardMap = {}, r.queryUserModeTemplateMap = {}, 
                    r.danmuDocumentStr = null;
                    var o = new Date();
                    return r.danmuDate = o.getMonth() + 1 + "-" + o.getDate(), r.addListener(), r.danmuListRef = null, 
                    r.currentRowIndex = 0, r.authorHashMap = {}, r.removeCardSign = null, r.lasetHeight = null, 
                    r.state = {
                        loaded: !1,
                        loading: !1,
                        loadingText: null,
                        danmuJSON: {
                            list: []
                        },
                        filterText: "",
                        queryUserMode: null,
                        currentCid: NaN
                    }, r;
                }
                return x()(l, e), D()(l, [ {
                    key: "componentDidMount",
                    value: function() {
                        chrome.runtime.sendMessage({
                            command: "danmuDOMInitialized"
                        }), he()(".player-sidebar-list-item-inner, .bnj-player-single-item-mask").click(function() {
                            setTimeout(function() {
                                chrome.runtime.sendMessage({
                                    command: "danmuDOMInitialized"
                                });
                            }, 500);
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        return N.a.createElement(N.a.Fragment, null, this.renderHeader(), this.renderList(), N.a.createElement(r, {
                            placeholder: "请输入需要查询的弹幕内容",
                            onChange: this.handleInputChange
                        }), this.state.loading && N.a.createElement(o, null, this.state.loadingText));
                    }
                } ]), l;
            }(N.a.Component);
        }, an = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "danmu",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(n, t) {
                    var i = U()(n, 1)[0];
                    return t.on ? new O.a(function(n) {
                        var r = rn(), a = document.createElement("div");
                        a.setAttribute("class", "bilibili-helper-danmu-wrapper"), a.setAttribute("style", "order: 3;"), 
                        i.appendChild(a), R.a.render(N.a.createElement(r, {
                            ref: function(n) {
                                return e.container = n;
                            },
                            settings: t
                        }), a, function() {
                            return n(e.container);
                        });
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), on = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "danmu",
                    kind: "video",
                    permissions: [ "downloads" ],
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("danmu_name"),
                        hasUI: !0,
                        description: Object(w.a)("danmu_description")
                    }
                }));
                return e.addListener = function() {
                    chrome.webRequest.onSendHeaders.addListener(function(n) {
                        var t = n.tabId, i = n.initiator, r = n.requestHeaders, a = !Ue()(A()(r, function(e) {
                            var n = e.name, t = e.value;
                            return "From" === n && "bilibili-helper" === t;
                        }));
                        if (!/^chrome-extension:\/\//.test(i) && !a) {
                            var o = new we.a(n.url, "", !0), c = o.pathname, l = o.query;
                            if (!l || !l.requestFrom) if ("/x/player.so" === c || "/player" === c) {
                                var s = e.messageStore.createData(t);
                                s.data.cid = l.id.slice(4), s.queue.push({
                                    command: "loadCurrentDanmu",
                                    cid: s.data.cid
                                }), e.messageStore.dealWith(t);
                            } else if ("/x/v1/dm/list.so" === c) {
                                var d = e.messageStore.createData(t);
                                d.data.cid = l.oid, d.queue.push({
                                    command: "loadCurrentDanmu",
                                    cid: d.data.cid
                                }), e.messageStore.dealWith(t);
                            } else if ("/x/v2/dm/history" === c && l.date) {
                                var u = e.messageStore.createData(t);
                                u.queue.push({
                                    command: "loadHistoryDanmu",
                                    cid: u.data.cid,
                                    date: l.date
                                }), e.messageStore.dealWith(t);
                            }
                        }
                    }, {
                        urls: [ "*://api.bilibili.com/x/v2/dm/history?type=*", "*://api.bilibili.com/x/v1/dm/list.so?oid=*", "*://api.bilibili.com/x/player.so?id=cid:*", "*://interface.bilibili.com/player?id=cid:*" ]
                    }, [ "requestHeaders" ]), chrome.runtime.onMessage.addListener(function(n, t, i) {
                        if ("fetchCardInfo" === n.command && n.url) Object(w.e)(n.url).then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            i(e);
                        }, function(e) {
                            console.error(e), i(e);
                        }); else if ("fetchDanmu" === n.command && n.url) Object(w.e)(n.url).then(function(e) {
                            return e.text();
                        }).then(function(e) {
                            i(e);
                        }, function(e) {
                            console.error(e), i(e);
                        }); else if ("downloadDanmuXML" === n.command && n.cid) {
                            var r = (window.URL ? URL : window.webkitURL).createObjectURL(new Blob([ n.danmuDocumentStr ], {
                                type: "application/xml"
                            })), a = n.filename + "." + n.cid + "." + n.date + ".xml";
                            chrome.downloads.download({
                                saveAs: !0,
                                url: r,
                                filename: a.replace(/\s/g, "").replace(/[|"*?:<>\s~/]/g, "_")
                            });
                        } else if ("downloadDanmuASS" === n.command && n.cid) {
                            var o = new DOMParser().parseFromString(n.danmuDocumentStr.replace(/(?:[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, ""), "text/xml"), c = "\ufeff" + Object(Ne.a)(o, {
                                title: n.filename,
                                ori: n.origin
                            }), l = (window.URL ? URL : window.webkitURL).createObjectURL(new Blob([ c ], {
                                type: "application/octet-stream"
                            })), s = n.filename + "." + n.cid + "." + n.date + ".ass";
                            chrome.downloads.download({
                                saveAs: !0,
                                url: l,
                                filename: s.replace(/\s/g, "").replace(/[|"*?:<>\s~/]/g, "_")
                            });
                        } else if ("pakkuGetHistoryDanmu" === n.command) {
                            var d = e.messageStore.createData(t.id), u = new we.a(n.url, "", !0);
                            d.queue.push({
                                command: "loadHistoryDanmu",
                                cid: d.data.cid,
                                date: u.query.date
                            }), e.messageStore.dealWith(t.id);
                        }
                        return !0;
                    });
                }, e.messageStore = new ze.a("danmuDOMInitialized"), e;
            }
            return x()(n, e), n;
        }(k.a), cn = W()([ "\n      display: flex;\n      flex-direction: row-reverse;\n      background-color: rgb(250,250,250);\n      max-height: 290px;\n    " ], [ "\n      display: flex;\n      flex-direction: row-reverse;\n      background-color: rgb(250,250,250);\n      max-height: 290px;\n    " ]), ln = W()([ "\n      body {\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\n      }\n    " ], [ "\n      body {\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\n      }\n    " ]), sn = function() {
            return {
                Main: J.d.div.attrs({
                    className: "bilibili-helper-popup-main"
                })(cn),
                GlobalStyle: Object(J.b)(ln)
            };
        }, dn = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "popup"
                }));
                return e.load = function() {
                    return new O.a(function(e) {
                        var n = sn(), t = n.Main, i = n.GlobalStyle;
                        R.a.render(N.a.createElement(t, null, N.a.createElement(i, null)), document.getElementById("root"), function() {
                            return e(document.querySelector(".bilibili-helper-popup-main"));
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), un = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "popupAnchor",
                    kind: "popup",
                    settings: {
                        on: !0,
                        hide: !0,
                        hasUI: !0
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), pn = t(14), mn = t(38), hn = t.n(mn), fn = t(33), bn = W()([ "\n      display: flex;\n      position: relative;\n      padding: 8px 10px;\n      flex-direction: column;\n      align-items: flex-end;\n      transition: all 0.3s;\n      &.extend {\n        margin-bottom: 0;\n      }\n      &::-webkit-scrollbar {\n        //display: none;\n        //visibility: hidden;\n      }\n    " ], [ "\n      display: flex;\n      position: relative;\n      padding: 8px 10px;\n      flex-direction: column;\n      align-items: flex-end;\n      transition: all 0.3s;\n      &.extend {\n        margin-bottom: 0;\n      }\n      &::-webkit-scrollbar {\n        //display: none;\n        //visibility: hidden;\n      }\n    " ]), gn = W()([ "\n      display: block;\n      width: ", ";\n      height: 36px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      transition: border 0.3s;\n      margin-bottom: 6px;\n      position: relative;\n      &:last-of-type {\n        margin-bottom: 0;\n      }\n      button {\n        font-size: 11px;\n        font-weight: normal;\n        color: ", ";\n        background-color: #fff;\n        transition: all 0.3s;\n        &[disabled] {\n          opacity: 0.3;\n        }\n      }\n      &:hover {\n        border-color: #009cd6;\n        button:not([disabled]) {\n          background-color: #00a9e8;\n          color: white;\n        }\n      }\n    " ], [ "\n      display: block;\n      width: ", ";\n      height: 36px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      transition: border 0.3s;\n      margin-bottom: 6px;\n      position: relative;\n      &:last-of-type {\n        margin-bottom: 0;\n      }\n      button {\n        font-size: 11px;\n        font-weight: normal;\n        color: ", ";\n        background-color: #fff;\n        transition: all 0.3s;\n        &[disabled] {\n          opacity: 0.3;\n        }\n      }\n      &:hover {\n        border-color: #009cd6;\n        button:not([disabled]) {\n          background-color: #00a9e8;\n          color: white;\n        }\n      }\n    " ]), vn = W()([ "\n      width: auto;\n      button {\n        display: block;\n        padding: 0;\n        min-width: 60px;\n        text-indent: 0;\n      }\n      .bilibili-helper-iconfont {\n        line-height: 22px;\n      }\n    " ], [ "\n      width: auto;\n      button {\n        display: block;\n        padding: 0;\n        min-width: 60px;\n        text-indent: 0;\n      }\n      .bilibili-helper-iconfont {\n        line-height: 22px;\n      }\n    " ]), yn = W()([ "\n      display: flex;\n    " ], [ "\n      display: flex;\n    " ]), xn = W()([ "\n      display: block;\n      width: ", ";\n      height: 36px;\n      margin-bottom: 6px;\n      position: relative;\n      border: 1px solid ", ";\n      box-sizing: border-box;\n      font-size: 11px;\n      font-weight: normal;\n      transition: all 0.3s ease 0s;\n      text-align: center;\n      outline: none;\n      color: ", ";\n      &:focus {\n        border-color: #009cd6;\n        color: #000;\n      }\n    " ], [ "\n      display: block;\n      width: ", ";\n      height: 36px;\n      margin-bottom: 6px;\n      position: relative;\n      border: 1px solid ", ";\n      box-sizing: border-box;\n      font-size: 11px;\n      font-weight: normal;\n      transition: all 0.3s ease 0s;\n      text-align: center;\n      outline: none;\n      color: ", ";\n      &:focus {\n        border-color: #009cd6;\n        color: #000;\n      }\n    " ]), kn = W()([ "\n      width: 40px;\n      height: 34px;\n      button {\n        min-width: unset;\n        text-indent: 0;\n      }\n    " ], [ "\n      width: 40px;\n      height: 34px;\n      button {\n        min-width: unset;\n        text-indent: 0;\n      }\n    " ]), wn = function() {
            var e = Y.a.color, n = J.d.div.attrs({
                className: "bilibili-helper-menu-view"
            })(bn), t = Object(J.d)(fn.a)(gn, function(e) {
                return e.shortMode ? "70px" : "110px";
            }, e("google-grey-100"), e("google-grey-700")), i = (Object(J.d)(t)(vn), J.d.div(yn)), r = J.d.input.attrs({
                className: "bilibili-helper-menu-linker-input"
            })(xn, function(e) {
                return e.shortMode ? "72px" : "70px";
            }, function(e) {
                return e.error ? "red !important" : "whitesmoke";
            }, e("google-grey-700")), a = Object(J.d)(t)(kn);
            return function(e) {
                function o(e) {
                    b()(this, o);
                    var n = v()(this, (o.__proto__ || h()(o)).call(this, e));
                    return n.handleOnClick = function(e, n) {
                        chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "menu",
                            label: "menu " + e
                        }), "favourite" === e ? chrome.cookies.get({
                            url: "http://www.bilibili.com/",
                            name: "DedeUserID"
                        }, function(e) {
                            e && e.expirationDate > new Date().getTime() / 1e3 && Object(w.d)("" + n + e.value + "/favlist");
                        }) : Object(w.d)(n);
                    }, n.link = function() {
                        var e = document.querySelector(".bilibili-helper-menu-linker-input").value;
                        if (e) {
                            var t = n.linkerRegExp.exec(String(e).toLowerCase().trim()), i = "", r = !0;
                            if (t && t[1]) switch (t[1]) {
                              case "av":
                                i = "https://www.bilibili.com/video/" + e;
                                break;

                              case "ss":
                                i = "https://www.bilibili.com/bangumi/play/" + e;
                                break;

                              case "s":
                                t[2] ? i = "https://bangumi.bilibili.com/anime/" + t[2] : r = !1;
                                break;

                              case "md":
                                i = "https://www.bilibili.com/bangumi/media/" + e;
                                break;

                              case "u":
                                t[2] ? i = "https://space.bilibili.com/" + t[2] : r = !1;
                                break;

                              case "cv":
                                i = "https://www.bilibili.com/read/" + e;
                                break;

                              case "au":
                                i = "https://www.bilibili.com/audio/" + e;
                                break;

                              case "ep":
                                i = "https://www.bilibili.com/bangumi/play/" + e;
                            } else t && !t[1] && t[2] ? i = "https://www.bilibili.com/video/av" + t[2] : r = !1;
                            r ? (n.setState({
                                linkerError: !1
                            }), n.lastSearch = e, n.setState({
                                lastSearch: e
                            }, function() {
                                hn.a.set("lastSearch", e), chrome.runtime.sendMessage({
                                    command: "setGAEvent",
                                    action: "click",
                                    category: "menu",
                                    label: "linker " + (t[1] || "av")
                                });
                            }), Object(w.d)(i)) : n.setState({
                                linkerError: !0
                            });
                        }
                    }, n.checkLinkerValue = function(e) {
                        var t = n.linkerRegExp.exec(String(e).toLowerCase().trim());
                        return !!(t && t[1] && t[2]) || !(!t || t[1] || !t[2]);
                    }, n.handleLinkerClick = function() {
                        n.link();
                    }, n.handleKeyUp = function(e) {
                        if ("Enter" === e.key) n.link(); else {
                            var t = String(e.target.value).toLowerCase().trim();
                            hn.a.set("lastSearch", t);
                            var i = n.checkLinkerValue(t);
                            n.setState({
                                linkerError: !i && "" !== t
                            });
                        }
                    }, n.handleFocusIn = function(e) {
                        e.target.select(), n.handleKeyUp(e);
                    }, n.state = {
                        debug: !1,
                        newWatchPageLink: "",
                        menuOptions: {},
                        linkerError: !1,
                        lastSearch: hn.a.get("lastSearch") || "",
                        permissionMap: {},
                        options: [],
                        version: null
                    }, n.linkerRegExp = new RegExp(/^(av|ss|s|md|u|cv|au|ep)?(\d+)$/), n;
                }
                return x()(o, e), D()(o, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.onMessage.addListener(function(n) {
                            if ("debugMode" === n.command && void 0 !== n.value) e.setState({
                                debug: n.value
                            }); else if ("permissionUpdate" === n.command) {
                                var t = B()({}, e.state.permissionMap);
                                t[n.permission] = {
                                    pass: n.value,
                                    msg: n.msg
                                }, e.setState({
                                    permissionMap: t
                                });
                            }
                            return !0;
                        }), chrome.runtime.sendMessage({
                            command: "getSetting",
                            feature: "debug"
                        }, function(n) {
                            e.setState({
                                debug: n.on
                            });
                        }), chrome.runtime.sendMessage({
                            command: "getSetting",
                            feature: "menu"
                        }, function(n) {
                            var t = A()(n.options, {
                                key: "oldWatchPage"
                            }).on ? "https://www.bilibili.com/account/dynamic" : "https://t.bilibili.com/", i = {};
                            Be()(n.subPage.options, function(e) {
                                i[e.key] = e.on;
                            }), e.setState({
                                newWatchPageLink: t,
                                menuOptions: i,
                                options: n.options
                            });
                        }), chrome.runtime.sendMessage({
                            command: "getPermissionMap"
                        }, function(n) {
                            e.setState({
                                permissionMap: n
                            });
                        }), chrome.runtime.sendMessage({
                            command: "getFeatureStore",
                            feature: "versionManager"
                        }, function(n) {
                            e.setState({
                                version: n.version
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this, o = this.state, c = o.newWatchPageLink, l = o.menuOptions, s = o.linkerError, d = o.lastSearch, u = o.permissionMap, p = o.options, m = l.video, h = l.live, f = l.dynamic, b = l.favourite, g = l.linker, v = p ? A()(p, function(e) {
                            return "shortMode" === e.key;
                        }) : {}, y = !!v && v.on;
                        return N.a.createElement(n, null, m && N.a.createElement(t, {
                            shortMode: y,
                            onClick: function() {
                                return e.handleOnClick("video", Object(w.g)("video"));
                            }
                        }, Object(w.a)("goBili")), h && N.a.createElement(t, {
                            shortMode: y,
                            onClick: function() {
                                return e.handleOnClick("live", Object(w.g)("live"));
                            }
                        }, Object(w.a)("goBiliLive")), u.login && u.login.pass ? N.a.createElement(N.a.Fragment, null, f && N.a.createElement(t, {
                            shortMode: y,
                            onClick: function() {
                                return e.handleOnClick("watch", c);
                            }
                        }, Object(w.a)("goDynamic")), b && N.a.createElement(t, {
                            shortMode: y,
                            onClick: function() {
                                return e.handleOnClick("favourite", Object(w.g)("favourite"));
                            }
                        }, Object(w.a)("goFavourite"))) : N.a.createElement(t, null, Object(w.a)("notLogin")), g && N.a.createElement(i, null, N.a.createElement(r, {
                            error: s,
                            onKeyUp: this.handleKeyUp,
                            onFocus: this.handleFocusIn,
                            onFocusOut: this.handleFocusIn,
                            placeholder: Object(w.a)("enterID"),
                            defaultValue: d,
                            shortMode: y
                        }), !y && N.a.createElement(a, {
                            onClick: this.handleLinkerClick
                        }, Object(w.a)("goVideo"))), N.a.createElement(t, {
                            shortMode: y,
                            onClick: function() {
                                return e.handleOnClick("config", Object(w.g)("config"));
                            }
                        }, Object(w.a)("goOption")));
                    }
                } ]), o;
            }(N.a.Component);
        }, _n = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "menu",
                    dependencies: [ "popupAnchor" ]
                }));
                return e.load = function(n, t) {
                    var i = U()(n, 1)[0];
                    return new O.a(function(n) {
                        var r = wn(), a = document.createElement("div");
                        a.setAttribute("class", "bilibili-helper-menu-container"), i.appendChild(a), R.a.render(N.a.createElement(r, {
                            settings: t,
                            ref: function(n) {
                                return e.container = n;
                            }
                        }), a, function() {
                            return n(e.container);
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Sn = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "menu",
                    kind: "popup",
                    permissions: [ "login" ],
                    dependencies: [ "popupAnchor" ],
                    settings: {
                        on: !0,
                        toggle: !1,
                        title: Object(pn.a)("menu_name"),
                        type: "checkbox",
                        hasUI: !0,
                        description: Object(pn.a)("menu_description"),
                        options: [ {
                            key: "shortMode",
                            title: Object(pn.a)("menu_options_shortMode"),
                            on: !1,
                            description: Object(pn.a)("menu_options_shortMode_description")
                        }, {
                            key: "oldWatchPage",
                            title: Object(pn.a)("menu_options_oldWatchPage"),
                            on: !1
                        } ],
                        subPage: {
                            title: Object(pn.a)("menu_subPage_title"),
                            type: "checkbox",
                            options: [ {
                                key: "video",
                                title: Object(pn.a)("menu_subPage_options_video"),
                                on: !0
                            }, {
                                key: "live",
                                title: Object(pn.a)("menu_subPage_options_live"),
                                on: !0
                            }, {
                                key: "dynamic",
                                title: Object(pn.a)("menu_subPage_options_dynamic"),
                                on: !0
                            }, {
                                key: "favourite",
                                title: Object(pn.a)("menu_subPage_options_favourite"),
                                on: !0
                            }, {
                                key: "linker",
                                title: Object(pn.a)("menu_subPage_options_linker"),
                                on: !0,
                                description: Object(pn.a)("menu_subPage_options_linker_description")
                            } ]
                        }
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), Cn = W()([ "\n      .chat-history-panel .chat-history-list .chat-item.danmaku-item, .chat-history-panel .chat-history-list .chat-item.danmaku-item * {\n        pointer-events: auto!important;\n      }\n    " ], [ "\n      .chat-history-panel .chat-history-list .chat-item.danmaku-item, .chat-history-panel .chat-history-list .chat-item.danmaku-item * {\n        pointer-events: auto!important;\n      }\n    " ]), On = W()([ "\n      position: absolute;\n      bottom: 30px;\n      left: 0;\n      padding: 16px;\n      width: 115px;\n      background-color: #fff;\n      border-radius: 7px;\n      box-shadow: 0 6px 12px 0 rgba(106,115,133,.22);\n      z-index: 100;\n      display: ", ";\n    " ], [ "\n      position: absolute;\n      bottom: 30px;\n      left: 0;\n      padding: 16px;\n      width: 115px;\n      background-color: #fff;\n      border-radius: 7px;\n      box-shadow: 0 6px 12px 0 rgba(106,115,133,.22);\n      z-index: 100;\n      display: ", ";\n    " ]), Ln = W()([ "\n      margin: 0 0 0 7px;\n      font-size: 20px;\n      vertical-align: middle;\n      color: #c8c8c8;\n      transition: color .4s cubic-bezier(.22,.58,.12,.98);\n      user-select: none;\n      &:hover {\n        color: #23ade5;\n      }\n    " ], [ "\n      margin: 0 0 0 7px;\n      font-size: 20px;\n      vertical-align: middle;\n      color: #c8c8c8;\n      transition: color .4s cubic-bezier(.22,.58,.12,.98);\n      user-select: none;\n      &:hover {\n        color: #23ade5;\n      }\n    " ]), Dn = W()([ "\n      margin: 0 0 20px;\n      font-weight: 400;\n      font-size: 18px;\n      color: #23ade5;\n    " ], [ "\n      margin: 0 0 20px;\n      font-weight: 400;\n      font-size: 18px;\n      color: #23ade5;\n    " ]), Mn = W()([ "\n      display: flex;\n      justify-content: space-between;\n      margin: 0 0 10px;\n      font-size: 12px;\n      color: #666;\n    " ], [ "\n      display: flex;\n      justify-content: space-between;\n      margin: 0 0 10px;\n      font-size: 12px;\n      color: #666;\n    " ]), An = W()([ "\n      margin-right: 34px;\n    " ], [ "\n      margin-right: 34px;\n    " ]), In = W()([ "\n      & .radio-knob {\n        top: 2px;\n        left: 2px;\n        width: 12px;\n        height: 12px;\n      }\n    " ], [ "\n      & .radio-knob {\n        top: 2px;\n        left: 2px;\n        width: 12px;\n        height: 12px;\n      }\n    " ]), En = function() {
            var e = Object(J.b)(Cn), n = J.d.div.attrs({
                className: "chat-helper-panel ctrl-panel bilibili-chat-filter-panel"
            })(On, function(e) {
                return e.show ? "block" : "none";
            }), t = Object(J.d)(fn.c)(Ln), i = J.d.h1(Dn), r = J.d.div.attrs({
                className: "filter-item"
            })(Mn), a = J.d.span.attrs({
                className: "filter-item-title"
            })(An), o = Object(J.d)(fn.b)(In);
            return function(c) {
                function l(e) {
                    b()(this, l);
                    var n = v()(this, (l.__proto__ || h()(l)).call(this, e));
                    return n.propTypes = {
                        settings: ce.a.object
                    }, n.handleOnClick = function() {
                        var e = document.querySelector(".bilibili-chat-filter-panel");
                        "none" !== e.style.display && e.style.display ? he()(e).fadeOut(200) : he()(e).fadeIn(200);
                    }, n.handleOnClickRadio = function(e, t) {
                        var i = A()(n.props.settings.subPage.options, function(n) {
                            return n.key === e;
                        }), r = B()({}, n.state.localOption);
                        i.on === t && void 0 !== r[e] ? delete r[e] : r[e] = t, chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "chatFilter",
                            label: "chatFilter " + e
                        }), n.store[n.roomId] = r, Ue()(n.store[n.roomId]) && delete n.store[n.roomId], 
                        n.setState({
                            localOption: r
                        }, function() {
                            return hn.a.set(n.storeName, n.store);
                        });
                    }, n.styleList = {
                        chat: ".chat-item:not(.hover).danmaku-item{display:none;}",
                        small: ".chat-item:not(.hover):not(.system-msg) > a, .chat-item .guard-icon{display:none !important;}",
                        gift: ".chat-item:not(.hover).gift-item,.bilibili-live-player-video-area > .bilibili-live-player-video-gift{display:none !important;}",
                        enterMsg: ".chat-item:not(.hover).welcome-msg,.chat-item.welcome-guard{display: none !important;}",
                        medal: ".chat-item:not(.hover) .fans-medal-item-ctnr{display:none !important;}",
                        achievement: ".chat-item:not(.hover) .title-label{display:none !important;}",
                        level: ".chat-item:not(.hover) .user-level-icon{display:none !important;}",
                        announcement: ".chat-item:not(.hover).system-msg{display:none !important;}",
                        2233: "#my-dear-haruna-vm{display:none !important;}"
                    }, n.roomId = location.pathname.slice(1), n.storeName = "bilibili-helper-chat-filter", 
                    n.store = hn.a.get(n.storeName), Ue()(n.store) && (n.store = hn.a.set(n.storeName, {})), 
                    n.state = {
                        localOption: n.store[n.roomId] || {}
                    }, n;
                }
                return x()(l, c), D()(l, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        he()(document).on("click", function(n) {
                            he()(n.target).parents("#bilibili-helper-chat-filter").length <= 0 && "none" !== he()(e.panel).css("display") && he()(e.panel).fadeOut(200);
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var c = this, l = this.props.settings.subPage.options, s = this.state.localOption;
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "//at.alicdn.com/t/font_894803_t8pireix5fq.css"
                        }), N.a.createElement(t, {
                            iconfont: "ban",
                            size: 22,
                            onClick: this.handleOnClick
                        }), N.a.createElement(n, {
                            ref: function(e) {
                                return c.panel = e;
                            }
                        }, N.a.createElement(i, null, Object(pn.a)("charFilter_UI_listName")), E()(l, function(n) {
                            var t = n.key, i = n.title, l = n.on, d = c.styleList[t], u = s[t], p = void 0 !== u ? u : l;
                            return N.a.createElement(r, {
                                key: t
                            }, N.a.createElement(a, null, i), N.a.createElement(o, {
                                on: p,
                                onClick: function() {
                                    return c.handleOnClickRadio(t, !p);
                                }
                            }), N.a.createElement(e, null), d && p ? N.a.createElement("style", null, d) : null);
                        })));
                    }
                } ]), l;
            }(N.a.Component);
        }, jn = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "chatFilter"
                }));
                return e.load = function(n, t) {
                    return t.on ? new O.a(function(n) {
                        var i = En();
                        e.interval(".aside-area .control-panel-icon-row", 2e3).then(function(e) {
                            if (e) {
                                var r = document.createElement("span");
                                r.setAttribute("class", "icon-item icon-font"), r.setAttribute("id", "bilibili-helper-chat-filter"), 
                                r.setAttribute("style", "position: relative;");
                                var a = document.querySelector(".control-panel-icon-row");
                                a.style.overflow = "unset", a.style.height = "24px", document.querySelector(".icon-left-part").appendChild(r), 
                                R.a.render(N.a.createElement(i, {
                                    settings: t
                                }), r, n);
                            }
                        });
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), qn = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "chatFilter",
                    kind: "live",
                    settings: {
                        on: !0,
                        title: Object(pn.a)("charFilter_name"),
                        hasUI: !0,
                        description: Object(pn.a)("charFilter_description"),
                        subPage: {
                            type: "checkbox",
                            title: Object(pn.a)("charFilter_subPage_title"),
                            description: Object(pn.a)("charFilter_subPage_description"),
                            options: [ {
                                key: "chat",
                                title: Object(pn.a)("charFilter_subPage_options_chat"),
                                on: !1
                            }, {
                                key: "small",
                                title: Object(pn.a)("charFilter_subPage_options_small"),
                                on: !0,
                                description: Object(pn.a)("charFilter_subPage_options_small_description")
                            }, {
                                key: "gift",
                                title: Object(pn.a)("charFilter_subPage_options_gift"),
                                on: !0
                            }, {
                                key: "enterMsg",
                                title: Object(pn.a)("charFilter_subPage_options_enterMsg"),
                                on: !0
                            }, {
                                key: "medal",
                                title: Object(pn.a)("charFilter_subPage_options_medal"),
                                on: !0
                            }, {
                                key: "achievement",
                                title: Object(pn.a)("charFilter_subPage_options_achievement"),
                                on: !0
                            }, {
                                key: "level",
                                title: Object(pn.a)("charFilter_subPage_options_level"),
                                on: !0
                            }, {
                                key: "2233",
                                title: Object(pn.a)("charFilter_subPage_options_2233"),
                                on: !0
                            }, {
                                key: "announcement",
                                title: Object(pn.a)("charFilter_subPage_options_announcement"),
                                on: !1,
                                description: Object(pn.a)("charFilter_subPage_options_announcement_description")
                            } ]
                        }
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), Pn = t(206), Tn = t.n(Pn), Un = t(456), zn = t.n(Un), Nn = t(294), Fn = t.n(Nn), Rn = (i = Object, 
        r = i.getPrototypeOf || function(e) {
            return e.__proto__;
        }, a = i.setPrototypeOf || function(e, n) {
            return e.__proto__ = n, e;
        }, o = "object" === ("undefined" == typeof Reflect ? "undefined" : Fn()(Reflect)) ? zn.a : function(e, n, t) {
            var i, r = [ null ];
            return r.push.apply(r, n), i = e.bind.apply(e, r), a(new i(), t.prototype);
        }, function(e) {
            var n = r(e);
            return a(e, a(function() {
                return o(n, arguments, r(this).constructor);
            }, n));
        })(function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).apply(this, arguments));
            }
            return x()(n, e), D()(n, [ {
                key: "getUint24",
                value: function(e, n) {
                    if (n) throw "littleEndian int24 not implemented";
                    return 16777215 & this.getUint32(e - 1);
                }
            }, {
                key: "setUint24",
                value: function(e, n, t) {
                    if (t) throw "littleEndian int24 not implemented";
                    if (n > 16777215) throw "setUint24: number out of range";
                    var i = n >> 16, r = 65535 & n;
                    this.setUint8(e, i), this.setUint16(e + 1, r);
                }
            }, {
                key: "indexOf",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.byteLength - e.length + 1;
                    if (e.charCodeAt) {
                        for (var i = n; i < t; i++) if (this.getUint8(i) == e.charCodeAt(0)) {
                            for (var r = 1, a = 0; a < e.length; a++) if (this.getUint8(i + a) != e.charCodeAt(a)) {
                                r = 0;
                                break;
                            }
                            if (r) return i;
                        }
                        return -1;
                    }
                    for (var o = n; o < t; o++) if (this.getUint8(o) == e[0]) {
                        for (var c = 1, l = 0; l < e.length; l++) if (this.getUint8(o + l) != e[l]) {
                            c = 0;
                            break;
                        }
                        if (c) return o;
                    }
                    return -1;
                }
            } ]), n;
        }(DataView)), Hn = function() {
            function e(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                b()(this, e), this.tagHeader = new Rn(n.buffer, n.byteOffset + t, 11), this.tagData = new Rn(n.buffer, n.byteOffset + t + 11, this.dataSize), 
                this.previousSize = new Rn(n.buffer, n.byteOffset + t + 11 + this.dataSize, 4);
            }
            return D()(e, [ {
                key: "stripKeyframesScriptData",
                value: function() {
                    if (18 != this.tagType) throw "can not strip non-scriptdata's keyframes";
                    var e;
                    -1 != (e = this.tagData.indexOf("hasKeyframes")) && this.tagData.setUint8(e + "hasKeyframes".length, 0);
                }
            }, {
                key: "getDuration",
                value: function() {
                    if (18 != this.tagType) throw "can not find non-scriptdata's duration";
                    var e = this.tagData.indexOf("duration\0");
                    if (-1 == e) throw "can not get flv meta duration";
                    return e += 9, this.tagData.getFloat64(e);
                }
            }, {
                key: "getDurationAndView",
                value: function() {
                    if (18 != this.tagType) throw "can not find non-scriptdata's duration";
                    var e = this.tagData.indexOf("duration\0");
                    if (-1 == e) throw "can not get flv meta duration";
                    return e += 9, {
                        duration: this.tagData.getFloat64(e),
                        durationDataView: new Rn(this.tagData.buffer, this.tagData.byteOffset + e, 8)
                    };
                }
            }, {
                key: "getCombinedTimestamp",
                value: function() {
                    return this.timestampExtension << 24 | this.timestamp;
                }
            }, {
                key: "setCombinedTimestamp",
                value: function(e) {
                    if (e < 0) throw "timestamp < 0";
                    this.tagHeader.setUint8(7, e >> 24), this.tagHeader.setUint24(4, 16777215 & e);
                }
            }, {
                key: "tagType",
                get: function() {
                    return this.tagHeader.getUint8(0);
                }
            }, {
                key: "dataSize",
                get: function() {
                    return this.tagHeader.getUint24(1);
                }
            }, {
                key: "timestamp",
                get: function() {
                    return this.tagHeader.getUint24(4);
                }
            }, {
                key: "timestampExtension",
                get: function() {
                    return this.tagHeader.getUint8(7);
                }
            }, {
                key: "streamID",
                get: function() {
                    return this.tagHeader.getUint24(8);
                }
            } ]), e;
        }(), Bn = function() {
            function e(n) {
                if (b()(this, e), 0 != n.indexOf("FLV", 0, 1)) throw "Invalid FLV header";
                this.header = new Rn(n.buffer, n.byteOffset, 9), this.firstPreviousTagSize = new Rn(n.buffer, n.byteOffset + 9, 4), 
                this.tags = [];
                for (var t = this.headerLength + 4; t < n.byteLength; ) {
                    var i = new Hn(n, t);
                    t += 11 + i.dataSize + 4, this.tags.push(i);
                }
                if (t != n.byteLength) throw "FLV unexpected end of file";
            }
            return D()(e, [ {
                key: "type",
                get: function() {
                    return "FLV";
                }
            }, {
                key: "version",
                get: function() {
                    return this.header.getUint8(3);
                }
            }, {
                key: "typeFlag",
                get: function() {
                    return this.header.getUint8(4);
                }
            }, {
                key: "headerLength",
                get: function() {
                    return this.header.getUint32(5);
                }
            } ], [ {
                key: "merge",
                value: function(e) {
                    if (e.length < 1) throw "Usage: FLV.merge([flvs])";
                    var n = [], t = [ 0, 0 ], i = [ 0, 0 ], r = 0, a = void 0;
                    n.push(e[0].header), n.push(e[0].firstPreviousTagSize);
                    var o = !0, c = !1, l = void 0;
                    try {
                        for (var s, d = Tn()(e); !(o = (s = d.next()).done); o = !0) {
                            var u = s.value, p = 1e3 * r;
                            t[0] = i[0], t[1] = i[1], p = Math.max(p, t[0], t[1]);
                            var m = 0, h = !0, f = !1, b = void 0;
                            try {
                                for (var g, v = Tn()(u.tags); !(h = (g = v.next()).done); h = !0) {
                                    var y = g.value;
                                    if (18 != y.tagType || m) 8 != y.tagType && 9 != y.tagType || (i[y.tagType - 8] = p + y.getCombinedTimestamp(), 
                                    y.setCombinedTimestamp(i[y.tagType - 8]), n.push(y.tagHeader), n.push(y.tagData), 
                                    n.push(y.previousSize)); else if (r += y.getDuration(), m = 1, u == e[0]) {
                                        var x = y.getDurationAndView();
                                        r = x.duration, a = x.durationDataView, y.stripKeyframesScriptData(), n.push(y.tagHeader), 
                                        n.push(y.tagData), n.push(y.previousSize);
                                    }
                                }
                            } catch (e) {
                                f = !0, b = e;
                            } finally {
                                try {
                                    !h && v.return && v.return();
                                } finally {
                                    if (f) throw b;
                                }
                            }
                        }
                    } catch (e) {
                        c = !0, l = e;
                    } finally {
                        try {
                            !o && d.return && d.return();
                        } finally {
                            if (c) throw l;
                        }
                    }
                    return a.setFloat64(0, r), new Blob(n);
                }
            }, {
                key: "mergeBlobs",
                value: function() {
                    var n = qe()(Ee.a.mark(function n(t) {
                        var i, r, a, o, c, l, s, d, u, p, m, h, f = this;
                        return Ee.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!(t.length < 1)) {
                                    n.next = 2;
                                    break;
                                }
                                throw "Usage: FLV.mergeBlobs([blobs])";

                              case 2:
                                i = [], r = [ 0, 0 ], a = [ 0, 0 ], o = 0, c = void 0, l = Ee.a.mark(function n(l) {
                                    var s, d, u, p, m, h, b, g, v, y, x;
                                    return Ee.a.wrap(function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                          case 0:
                                            return s = 1e3 * o, r[0] = a[0], r[1] = a[1], s = Math.max(s, r[0], r[1]), d = 0, 
                                            n.next = 7, new O.a(function(n, t) {
                                                var i = new FileReader();
                                                i.onload = function() {
                                                    return n(new e(new Rn(i.result)));
                                                }, i.readAsArrayBuffer(l), i.onerror = t;
                                            });

                                          case 7:
                                            for (u = n.sent, p = [], m = !0, h = !1, b = void 0, n.prev = 12, g = Tn()(u.tags); !(m = (v = g.next()).done); m = !0) 18 != (y = v.value).tagType || d ? 8 != y.tagType && 9 != y.tagType || (a[y.tagType - 8] = s + y.getCombinedTimestamp(), 
                                            y.setCombinedTimestamp(a[y.tagType - 8]), p.push(y.tagHeader, y.tagData, y.previousSize)) : (o += y.getDuration(), 
                                            d = 1, l == t[0] && (i.push(u.header, u.firstPreviousTagSize), x = y.getDurationAndView(), 
                                            o = x.duration, c = x.durationDataView, y.stripKeyframesScriptData(), i.push(y.tagHeader), 
                                            i.push(y.tagData), i.push(y.previousSize)));
                                            n.next = 20;
                                            break;

                                          case 16:
                                            n.prev = 16, n.t0 = n.catch(12), h = !0, b = n.t0;

                                          case 20:
                                            n.prev = 20, n.prev = 21, !m && g.return && g.return();

                                          case 23:
                                            if (n.prev = 23, !h) {
                                                n.next = 26;
                                                break;
                                            }
                                            throw b;

                                          case 26:
                                            return n.finish(23);

                                          case 27:
                                            return n.finish(20);

                                          case 28:
                                            i.push(new Blob(p));

                                          case 29:
                                          case "end":
                                            return n.stop();
                                        }
                                    }, n, f, [ [ 12, 16, 20, 28 ], [ 21, , 23, 27 ] ]);
                                }), s = !0, d = !1, u = void 0, n.prev = 11, p = Tn()(t);

                              case 13:
                                if (s = (m = p.next()).done) {
                                    n.next = 19;
                                    break;
                                }
                                return h = m.value, n.delegateYield(l(h), "t0", 16);

                              case 16:
                                s = !0, n.next = 13;
                                break;

                              case 19:
                                n.next = 25;
                                break;

                              case 21:
                                n.prev = 21, n.t1 = n.catch(11), d = !0, u = n.t1;

                              case 25:
                                n.prev = 25, n.prev = 26, !s && p.return && p.return();

                              case 28:
                                if (n.prev = 28, !d) {
                                    n.next = 31;
                                    break;
                                }
                                throw u;

                              case 31:
                                return n.finish(28);

                              case 32:
                                return n.finish(25);

                              case 33:
                                return c.setFloat64(0, o), n.abrupt("return", new Blob(i));

                              case 35:
                              case "end":
                                return n.stop();
                            }
                        }, n, this, [ [ 11, 21, 25, 33 ], [ 26, , 28, 32 ] ]);
                    }));
                    return function(e) {
                        return n.apply(this, arguments);
                    };
                }()
            } ]), e;
        }(), Vn = t(245), Wn = t.n(Vn), Jn = t(298), Kn = function e(n) {
            var t = this;
            b()(this, e), this.getDB = function(e) {
                return new O.a(function(n, i) {
                    t.dbRequest = window.indexedDB.open(t.dbName), t.dbRequest.onsuccess = function(e) {
                        return t.db = e.target.result, n(t.db);
                    }, t.dbRequest.onerror = function() {
                        i("数据库打开报错");
                    }, t.dbRequest.onupgradeneeded = function(n) {
                        var t = n.target.result;
                        t.objectStoreNames.contains(e) || (t.createObjectStore(112, {
                            keyPath: "order"
                        }), t.createObjectStore(80, {
                            keyPath: "order"
                        }), t.createObjectStore(64, {
                            keyPath: "order"
                        }), t.createObjectStore(32, {
                            keyPath: "order"
                        }), t.createObjectStore(16, {
                            keyPath: "order"
                        }));
                    };
                });
            }, this.get = function(e) {
                var n = e.order, i = e.quality;
                return t.getDB(i).then(function(e) {
                    var t = e.transaction(i, "readwrite").objectStore(i), r = [];
                    return new O.a(function(e, i) {
                        var a = t.get(n + "/0");
                        a.onerror = i, a.onsuccess = function a(o) {
                            if (!o.target.result) return i(null);
                            var c = o.target.result;
                            r.push(c.blob), r.length === c.chunkCount && e(r);
                            var l = t.get(n + "/" + r.length);
                            l.onerror = i, l.onsuccess = a;
                        };
                    });
                }).then(function(e) {
                    return new Blob(e);
                });
            }, this.add = function(e) {
                var n = e.order, i = e.quality, r = e.blob;
                if (!(r instanceof Blob)) throw "Something add to indexedDB is not the type of Blob!";
                for (var a = Math.ceil(r.size / t.maxItemSize), o = [], c = 0; c < a; ++c) o.push({
                    order: n + "/" + c,
                    chunkIndex: c,
                    chunkCount: a,
                    blob: r.slice(c * t.maxItemSize, (c + 1) * t.maxItemSize)
                });
                return t.getDB(i).then(function(e) {
                    var n = e.transaction(i, "readwrite").objectStore(i);
                    return new O.a(function e(t, i) {
                        0 === o.length && t();
                        var r = n.add(o.shift());
                        r.onsuccess = function() {
                            return 0 !== o.length && e(t, i);
                        }, r.onerror = i;
                    }).catch(function(e) {
                        return console.error(e);
                    });
                });
            }, this.push = function() {}, this.del = function() {}, this.clear = function(e) {
                return t.getDB(e).then(function(n) {
                    return new O.a(function(t, i) {
                        var r = n.transaction(e, "readwrite").objectStore(e);
                        r ? r.clear().onsuccess = function() {
                            t();
                        } : i();
                    });
                });
            }, this.maxItemSize = 104857600, this.dbName = n, this.db = null;
        }, Yn = function e(n, t, i) {
            var r = this, a = i.order, o = (i.SegmentBase, i.bandwidth, i.baseUrl), c = (i.codecid, 
            i.codecs), l = (i.frameRate, i.height), s = i.quality, d = i.mimeType, u = i.width;
            b()(this, e), this.readAsBuffer = function(e) {
                return new O.a(function(n) {
                    var t = new FileReader();
                    t.onload = function(e) {
                        n(e.target.result);
                    }, t.readAsArrayBuffer(e);
                });
            }, this.download = function() {
                return new O.a(function(e) {
                    r.db.get({
                        order: r.order,
                        quality: r.quality
                    }).then(function(n) {
                        r.downloaded = !0, r.progress.percentage = 100, r.progress.total = n.size, e(r.readAsBuffer(n));
                    }, function() {
                        Object(pn.e)(r.url.toString(), {
                            method: "get",
                            mode: "cors",
                            referrerPolicy: "no-referrer-when-downgrade",
                            headers: {
                                Range: "bytes=0-",
                                "Access-Control-Request-Headers": "range",
                                "Access-Control-Request-Method": "GET"
                            }
                        }).then(Object(Jn.a)({
                            onProgress: Wn()(function(e) {
                                r.progress = e, 100 === e.percentage && (r.downloaded = !0);
                            }, 700)
                        })).then(function(e) {
                            return e.blob();
                        }).then(function(n) {
                            r.db.add({
                                order: r.order,
                                quality: r.quality,
                                blob: n
                            }), e(r.readAsBuffer(n));
                        });
                    });
                });
            }, this.db = n, this.cid = t, this.quality = s, this.order = a, this.url = new we.a(o), 
            this.url.protocol = "https:", this.codecs = c, this.height = l, this.mimeType = d, 
            this.width = u, this.downloaded = !1, this.progress = {
                percentage: 0,
                total: 0,
                transferred: 0,
                speed: 0,
                remaining: 0
            };
        }, Gn = (c = function() {
            function e(n) {
                b()(this, e), l.call(this);
                var t = n.format, i = n.quality, r = n.cid;
                n.timelength;
                this.data = n, this.format = t, this.quality = i, this.cid = r, this.initIndexDataBase(), 
                this.initDashAudio(), this.initDashVideo(), this.timescale = 1e3;
            }
            return D()(e, [ {
                key: "installVideo",
                value: function() {}
            }, {
                key: "percentage",
                get: function() {
                    return this.video.progress.percentage;
                }
            } ]), e;
        }(), l = function() {
            var e = this;
            this.initIndexDataBase = function() {
                window.indexedDB || console.error("Your browser is not support feature: indexedDB"), 
                e.db = new Kn(e.cid);
            }, this.initDashAudio = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : parseInt(e.quality), t = A()(e.data.dash.audio, {
                    id: 30280
                });
                t.quality = n, t.order = "audio", e.audio = new Yn(e.db, e.cid, t);
            }, this.initDashVideo = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : +e.quality, t = A()(e.data.dash.video, {
                    id: n
                });
                t.quality = n, t.order = "video", e.video = new Yn(e.db, e.cid, t);
            }, this.download = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                return e.downloading ? O.a.reject() : (e.downloading = !0, new O.a(function(t, i) {
                    var r = e.video.download().catch(function(e) {
                        return i(e);
                    }), a = e.audio.download().catch(function(e) {
                        return i(e);
                    }), o = setInterval(function() {
                        100 === e.percentage && (clearInterval(o), e.downloading = !1, O.a.all([ r, a ]).then(function(n) {
                            t([ n, [ e.video.codecs, e.audio.codecs ] ]), e.video = null, e.audio = null;
                        })), n(e.percentage);
                    }, 700);
                }));
            };
        }, c), Zn = (s = function() {
            function e(n) {
                var t = n.durl, i = n.format, r = n.quality, a = n.cid;
                b()(this, e), d.call(this), this.durl = t, this.format = i, this.quality = r, this.cid = a, 
                this.initIndexDataBase(), this.initFragment();
            }
            return D()(e, [ {
                key: "downloaded",
                get: function() {
                    return q()(this.fragments.map(function(e) {
                        return e.downloaded;
                    })).length === this.fragments.length;
                }
            }, {
                key: "percentage",
                get: function() {
                    var e = 0, n = 0;
                    return this.fragments.forEach(function(t) {
                        e += t.size, n += t.progress.transferred || t.size * t.progress.percentage / 100 || 0;
                    }), Math.round(n / e * 100);
                }
            } ]), e;
        }(), d = function() {
            var e = this;
            this.initIndexDataBase = function() {
                window.indexedDB || console.error("Your browser is not support feature: indexedDB"), 
                e.db = new Kn(e.cid);
            }, this.initFragment = function() {
                e.fragments = e.durl.map(function(n) {
                    return new function e(n, t, i, r) {
                        var a = this, o = r.size, c = r.length, l = r.url, s = r.order;
                        b()(this, e), this.download = function() {
                            return new O.a(function(e) {
                                a.db.get({
                                    order: a.order,
                                    quality: a.quality
                                }).then(function(n) {
                                    a.downloaded = !0, a.progress.percentage = 100, a.progress.total = n.size, e(n);
                                }, function() {
                                    Object(pn.e)(a.url.toString(), {
                                        method: "get",
                                        mode: "cors"
                                    }).then(Object(Jn.a)({
                                        onProgress: Wn()(function(e) {
                                            a.progress = e, 100 === e.percentage && (a.downloaded = !0);
                                        }, 700)
                                    })).then(function(e) {
                                        return e.blob();
                                    }).then(function(n) {
                                        e(n);
                                    });
                                });
                            });
                        }, this.size = o, this.length = c, this.url = new we.a(l), this.url.protocol = "https:", 
                        this.order = s, this.quality = i, this.db = n, this.cid = t, this.downloaded = !1, 
                        this.progress = {
                            percentage: 0,
                            total: 0,
                            transferred: 0,
                            speed: 0,
                            remaining: 0
                        };
                    }(e.db, e.cid, e.quality, n);
                });
            }, this.download = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                return e.downloading ? O.a.reject() : (e.downloading = !0, new O.a(function(t, i) {
                    var r = O.a.all(e.fragments.map(function(e) {
                        return e.download();
                    })).catch(function(e) {
                        return i(e);
                    }), a = setInterval(function() {
                        100 === e.percentage && (clearInterval(a), e.downloading = !1, r.then(function(e) {
                            return t(e);
                        })), n(e.percentage);
                    }, 700);
                }));
            }, this.clear = function(n) {
                return e.db.clear(n);
            };
        }, s), Qn = "https://api.bilibili.com/pgc/player/web/playurl", Xn = "https://api.bilibili.com/x/player/playurl", $n = W()([ "\n      width: 100%;\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ], [ "\n      width: 100%;\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ]), et = W()([ "\n      font-size: 12px;\n      min-width: unset;\n      color: rgb(255, 255, 255);\n      background-color: rgb(251, 114, 153);\n      padding: 0px 4px;\n      border-width: 1px;\n      border-style: solid;\n      border-color: rgb(251, 114, 153);\n      border-image: initial;\n      border-radius: 4px;\n      width: max-content;\n      transform: translate(4px, 0px) scale(0.9);\n      transform-origin: left;\n    " ], [ "\n      font-size: 12px;\n      min-width: unset;\n      color: rgb(255, 255, 255);\n      background-color: rgb(251, 114, 153);\n      padding: 0px 4px;\n      border-width: 1px;\n      border-style: solid;\n      border-color: rgb(251, 114, 153);\n      border-image: initial;\n      border-radius: 4px;\n      width: max-content;\n      transform: translate(4px, 0px) scale(0.9);\n      transform-origin: left;\n    " ]), nt = W()([ "\n      display: flex;\n      flex-wrap: wrap;\n    " ], [ "\n      display: flex;\n      flex-wrap: wrap;\n    " ]), tt = W()([ "\n      position: relative;\n      display: inline-block;\n      margin: 4px;\n      padding: 3px;\n      border-radius: 3px;\n      font-size: 12px;\n      font-style: normal;\n      letter-spacing: 0.3px;\n      background-color: #eaf4ff;\n      transition: all 0.3s, visibility 0s;\n      cursor: pointer;\n      word-break: break-all;\n      overflow: hidden;\n      &:hover {\n        background-color: #d4eaff;\n      }\n      a {\n        padding: 0 8px;\n        border-right: 1px solid #fff;\n        color: #00a1d6;\n        &:hover {\n          color: #004c65;\n        }\n        &:last-of-type {\n          border: none;\n        }\n      }\n    " ], [ "\n      position: relative;\n      display: inline-block;\n      margin: 4px;\n      padding: 3px;\n      border-radius: 3px;\n      font-size: 12px;\n      font-style: normal;\n      letter-spacing: 0.3px;\n      background-color: #eaf4ff;\n      transition: all 0.3s, visibility 0s;\n      cursor: pointer;\n      word-break: break-all;\n      overflow: hidden;\n      &:hover {\n        background-color: #d4eaff;\n      }\n      a {\n        padding: 0 8px;\n        border-right: 1px solid #fff;\n        color: #00a1d6;\n        &:hover {\n          color: #004c65;\n        }\n        &:last-of-type {\n          border: none;\n        }\n      }\n    " ]), it = W()([ "\n      display: inline-block;\n      padding: 0 8px;\n      border-right: 1px solid #fff;\n      p {\n        color: ", ";\n        font-size: 12px;\n      }\n      cursor: pointer;\n    " ], [ "\n      display: inline-block;\n      padding: 0 8px;\n      border-right: 1px solid #fff;\n      p {\n        color: ", ";\n        font-size: 12px;\n      }\n      cursor: pointer;\n    " ]), rt = W()([ "\n      margin-bottom: 6px;\n      margin-left: 5px;\n      font-size: 10px;\n      color: ", ";\n    " ], [ "\n      margin-bottom: 6px;\n      margin-left: 5px;\n      font-size: 10px;\n      color: ", ";\n    " ]), at = W()([ "\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: ", ";\n      height: 2px;\n      background-color: ", ";\n      transition: all 0.7s;\n    " ], [ "\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: ", ";\n      height: 2px;\n      background-color: ", ";\n      transition: all 0.7s;\n    " ]), ot = {
            old: {},
            new: {}
        }, ct = function() {
            var e = Y.a.color, n = J.d.div.attrs({
                className: "bilibili-helper-video-download-title"
            })($n, e("google-grey-500")), t = J.d.p(et), i = J.d.div(nt), r = J.d.div(tt), a = J.d.span(it, e("google-grey-900")), o = (J.d.p(rt, e("bilibili-pink")), 
            J.d.div(at, function(e) {
                return e.percentage + "%";
            }, e("bilibili-blue")));
            return function(e) {
                function c(e) {
                    b()(this, c);
                    var n = v()(this, (c.__proto__ || h()(c)).call(this, e));
                    return n.getContainer = function(e, t, i, r) {
                        if (n.containers[t] || (n.containers[t] = {}), n.containers[t][i]) return n.containers[t][i];
                        var a = r[t][i];
                        switch (e) {
                          case "flv":
                            return n.containers[t][i] = new Zn(B()({}, a, {
                                cid: t
                            }));

                          case "mp4":
                            return n.containers[t][i] = new Gn(B()({}, a, {
                                cid: t
                            }));
                        }
                    }, n.addListener = function() {
                        var e = n;
                        chrome.runtime.onMessage.addListener(function(e, t, i) {
                            if ("initVideoDownload" === e.command && e.data) {
                                if ("local" === n.originVideoData.from) {
                                    var r = e.data, a = r.cid, o = r.aid;
                                    if (+a) {
                                        var c = n.originVideoData.quality, l = n.state.videoData, s = B()({}, n.originVideoData), d = l[o] || {};
                                        d[c] = s, l[+a] = d, n.currentAvid = +o, n.setState({
                                            currentCid: +a,
                                            videoData: l,
                                            currentQuality: c
                                        }, function() {
                                            n.changeQuality(c);
                                        });
                                    }
                                }
                                i();
                            } else if ("videoDownloadSendVideoRequest" === e.command) {
                                var u = e.data, p = e.url, m = e.method, h = e.type, f = u.cid, b = u.avid, g = u.qn, v = void 0 === g ? "" : g;
                                "new" === h && ((p = location.href.indexOf("bangumi") >= 0 ? new we.a(Qn) : new we.a(Xn)).set("query", {
                                    cid: f,
                                    avid: b,
                                    qn: v,
                                    otype: "json"
                                }), p = p.toString());
                                var y = n.state.videoData, x = +u.cid;
                                n.currentAvid = b;
                                var k = u.quality || u.qn;
                                n.setState({
                                    currentCid: x
                                }), y[+x] && y[x][k] && !y[x][k].dash || n.getFlvResponse(m, p), i(!0);
                            } else if ("videoDownloadCid" === e.command && e.cid) {
                                var w = n.state.videoData;
                                if (Ue()(w)) {
                                    var _ = n.originVideoData.quality, S = void 0 === _ ? 80 : _;
                                    if (n.currentAvid = e.avid, !Ue()(n.originVideoData) && n.originVideoData.durl) {
                                        var C = B()({}, n.originVideoData), O = w[e.cid] || {};
                                        O[S] = C, w[e.cid] = O, n.setState({
                                            currentCid: e.cid,
                                            videoData: w,
                                            currentQuality: S
                                        });
                                    } else {
                                        var L = null;
                                        (L = location.href.indexOf("bangumi") >= 0 ? new we.a(Qn) : new we.a(Xn)).set("query", {
                                            cid: e.cid,
                                            avid: e.avid,
                                            qn: S,
                                            otype: "json"
                                        }), n.setState({
                                            currentCid: e.cid
                                        }), n.getFlvResponse("get", L.toString());
                                    }
                                }
                                i(!0);
                            }
                            return !0;
                        }), he()(document).on("click", ".bui-select-list li, .bpui-selectmenu-list li", function(n) {
                            var t = n.currentTarget.getAttribute("data-value");
                            e.changeQuality(t);
                        }), window.addEventListener("message", function(e) {
                            if ("bilibili-helper-video-download-get-flv-url" === e.data.command && e.data.res) {
                                var t = e.data.res;
                                if (0 !== t.code) return void n.setState({
                                    errorStr: t.message
                                });
                                var i = n.state.videoData, r = +new we.a(t.url, !0).query.cid, a = void 0;
                                "new" === t.type && 0 === t.code ? a = t.data || t.result || t : "old" === t.type && (a = t.result || t.data || t), 
                                ot[t.type][t.url] = B()({}, a, {
                                    cid: r
                                });
                                var o = a, c = o.accept_quality, l = o.accept_description, s = o.durl, d = o.quality, u = {
                                    accept_quality: c,
                                    accept_description: l,
                                    durl: s,
                                    dash: o.dash,
                                    quality: d
                                };
                                i[r] ? (i[r][d] = B()({}, i[r][d], u), n.setState({
                                    videoData: i,
                                    currentCid: r,
                                    percentage: 0,
                                    currentQuality: d
                                })) : (i[r] = {}, i[r][d] = u, n.setState({
                                    videoData: i,
                                    currentCid: r,
                                    percentage: 0,
                                    currentQuality: d
                                }));
                            }
                        });
                    }, n.changeQuality = function(e) {
                        var t = n.state, i = t.currentCid, r = t.videoData, a = void 0;
                        (a = location.href.indexOf("bangumi") >= 0 ? new we.a(Qn) : new we.a(Xn)).set("query", {
                            cid: i,
                            avid: n.currentAvid,
                            qn: e,
                            otype: "json"
                        }), a = a.toString(), n.setState({
                            currentCid: i,
                            currentQuality: e
                        }), r[i] && r[i][e] && !r[i][e].dash || n.getFlvResponse("get", a);
                    }, n.getFlvResponse = function(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "old", r = n.state.videoData;
                        if (ot[i][t]) {
                            var a = ot[i][t], o = a.accept_quality, c = a.accept_description, l = a.durl, s = a.quality, d = a.dash, u = a.cid, p = {
                                accept_quality: o,
                                accept_description: c,
                                durl: l,
                                dash: d,
                                quality: s
                            };
                            r[+u] || (r[+u] = {}), r[+u][+s] = p, n.setState({
                                videoData: r,
                                currentCid: u,
                                percentage: 0,
                                currentQuality: s
                            });
                        } else {
                            var m = document.createElement("script");
                            m.innerHTML = "\n                fetch('" + t + "&requestFrom=bilibili-helper', {\n                    method: 'get',\n                    credentials: 'include',\n                })\n                .then(res => res.json())\n                .then(res => {\n                    window.postMessage({command:'bilibili-helper-video-download-get-flv-url', res: {...res, type: '" + i + "', url: '" + t + "'}}, '*');\n                }).catch(e => {\n                    console.log(e);\n                });\n                ", 
                            document.body.appendChild(m);
                        }
                    }, n.handleOnClickDownloadFLV = function(e, t) {
                        chrome.runtime.sendMessage({
                            command: "sendVideoFilename",
                            url: t,
                            sign: t.split("?")[0],
                            cid: n.state.currentCid,
                            filename: Object(w.f)(document)
                        });
                    }, n.handleOnClickDownloadMp4 = function(e) {
                        var t = n.state, i = t.currentCid, r = t.currentQuality;
                        n.setState({
                            downloading: !0
                        }), n.getContainer("mp4", i, r, e).download(function(e) {
                            n.setState({
                                percentage: e
                            });
                        }).then(function(e) {
                            n.setState({
                                downloading: !1
                            });
                        }).catch(function(e) {
                            return console.warn(e);
                        });
                    }, n.handleOnClickDownloadFLVAll = function(e) {
                        var t = n.state, i = t.currentCid, r = t.currentQuality, a = t.videoData;
                        n.setState({
                            downloading: !0
                        }), e.quality || (e.quality = parseInt(document.querySelector(".bilibili-player-video-btn-quality > div ul li.bui-select-item-active").getAttribute("data-value"))), 
                        n.getContainer("flv", i, r, a).download(function(e) {
                            n.setState({
                                percentage: e
                            });
                        }).then(function(e) {
                            Bn.mergeBlobs(e).then(function(e) {
                                n.setState({
                                    downloading: !1
                                });
                                var t = window.URL.createObjectURL(e, {
                                    type: "video/x-flv"
                                });
                                chrome.runtime.sendMessage({
                                    command: "downloadMergedVideo",
                                    url: t,
                                    cid: i,
                                    filename: Object(w.f)(document) + ".flv"
                                });
                            });
                        }).catch(function(e) {
                            return e;
                        });
                    }, n.renderFLV = function() {
                        var e = n.state, t = e.downloading, i = (e.settings, e.videoData), c = e.currentQuality, l = void 0 === c ? null : c, s = e.currentCid, d = e.percentage, u = i[s][l], p = u.durl, m = u.accept_description, h = u.accept_quality;
                        return N.a.createElement(r, {
                            key: l,
                            downloading: t,
                            disabled: t
                        }, E()(p, function(e, r) {
                            var o = p.length > 1 ? "" + (r + 1) : m[h.indexOf(+l)];
                            return N.a.createElement(N.a.Fragment, {
                                key: r
                            }, p.length > 1 && 0 === r ? N.a.createElement(a, {
                                key: "title-" + l + "-" + r
                            }, m[h.indexOf(+l)]) : null, N.a.createElement("a", {
                                key: r,
                                href: e.url,
                                referrerPolicy: "unsafe-url",
                                target: "__blank",
                                download: !0,
                                onClick: function(t) {
                                    n.handleOnClickDownloadFLV(t, e.url);
                                }
                            }, o), p.length > 1 && r === p.length - 1 && N.a.createElement("a", {
                                onClick: function() {
                                    return n.handleOnClickDownloadFLVAll(i[s][l]);
                                }
                            }, t ? "下载中 " + (d ? "(" + d + "%)" : "") : "合并下载"));
                        }), N.a.createElement(o, {
                            percentage: d
                        }));
                    }, n.inited = !1, n.originVideoData = {}, n.state = {
                        videoData: {},
                        currentCid: null,
                        originVideoData: {},
                        percentage: 0,
                        downloading: !1,
                        settings: null,
                        currentQuality: null,
                        errorStr: ""
                    }, n.currentAvid = null, n.containers = {}, n;
                }
                return x()(c, e), D()(c, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.inited = !0, this.addListener(), E()(document.scripts, function(n) {
                            if (/^window.__playinfo__=/.test(n.innerHTML)) {
                                var t = JSON.parse(n.innerHTML.slice(20));
                                e.originVideoData = t.data || t;
                            }
                        }), chrome.runtime.sendMessage({
                            command: "videoDownloadDOMInitialized"
                        }), chrome.runtime.sendMessage({
                            command: "getSetting",
                            feature: "videoDownload"
                        }, function(n) {
                            e.setState({
                                settings: n
                            });
                        }), he()(".player-sidebar-list-item-inner, .bnj-player-single-item-mask").click(function() {
                            setTimeout(function() {
                                chrome.runtime.sendMessage({
                                    command: "videoDownloadDOMInitialized"
                                });
                            }, 500);
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state, r = e.videoData, o = e.currentCid, c = e.currentQuality, l = e.errorStr, s = r[o] && r[o][c];
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement(n, null, "视频下载 - 切换清晰度"), N.a.createElement(t, null, "合并下载会先下载至内存最后弹出另存为窗口。当卡主时，请下载分段"), N.a.createElement(i, null, s && (s.durl || s.dash) && this.renderFLV(), r[o] ? null : N.a.createElement(a, null, !l && N.a.createElement("p", null, "请尝试切换视频清晰度 或 切换到旧播放页面"), l && N.a.createElement("p", null, l))));
                    }
                } ]), c;
            }(N.a.Component);
        }, lt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoDownload",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(n, t) {
                    var i = U()(n, 1)[0];
                    return t.on ? new O.a(function(n) {
                        var r = ct(), a = document.createElement("div");
                        a.setAttribute("class", "bilibili-helper-video-download-wrapper"), a.setAttribute("style", "order: 0;"), 
                        i.appendChild(a), R.a.render(N.a.createElement(r, {
                            ref: function(n) {
                                return e.container = n;
                            },
                            setting: t
                        }), a, function() {
                            return n(e.container);
                        });
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), st = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoDownload",
                    kind: "video",
                    permissions: [ "downloads" ],
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !0,
                        hasUI: !0,
                        title: Object(pn.a)("videoDownload_name"),
                        description: Object(pn.a)("videoDownload_description"),
                        type: "checkbox",
                        options: [ {
                            key: "showPiece",
                            title: Object(pn.a)("videoDownload_options_showFLVSegment"),
                            on: !0,
                            description: Object(pn.a)("videoDownload_options_showFLVSegment_description")
                        } ]
                    }
                }));
                return e.launch = function() {}, e.addListener = function() {
                    chrome.webRequest.onBeforeSendHeaders.addListener(function(n) {
                        var t = n.tabId, i = n.initiator, r = n.requestHeaders, a = !Ue()(A()(r, function(e) {
                            var n = e.name, t = e.value;
                            return "From" === n && "bilibili-helper" === t;
                        }));
                        if (!/^chrome-extension:\/\//.test(i) && !a) {
                            var o = new we.a(n.url, "", !0), c = o.pathname, l = o.query;
                            if (!l || !l.requestFrom) {
                                var s = e.messageStore.createData(t);
                                "/x/web-interface/view" === c ? (s.queue.push({
                                    command: "initVideoDownload",
                                    type: "init",
                                    data: l,
                                    url: o.origin + o.pathname
                                }), e.messageStore.dealWith(t)) : "/v2/playurl" === c || "/player/web_api/v2/playurl" === c ? (s.queue.push({
                                    command: "videoDownloadSendVideoRequest",
                                    type: "old",
                                    data: l,
                                    url: o.origin + o.pathname
                                }), e.messageStore.dealWith(t)) : "/x/player/playurl" === c || "/pgc/player/web/playurl" === c ? (s.queue.push({
                                    command: "videoDownloadSendVideoRequest",
                                    type: "new",
                                    data: l
                                }), e.messageStore.dealWith(t)) : "/player" !== c && "/x/player.so" !== c || (s.queue.push({
                                    command: "videoDownloadCid",
                                    cid: +l.id.slice(4),
                                    avid: l.aid
                                }), e.messageStore.dealWith(t));
                            }
                        }
                    }, {
                        urls: [ "*://interface.bilibili.com/v2/playurl?cid=*", "*://api.bilibili.com/pgc/player/web/playurl?avid=*", "*://api.bilibili.com/x/player/playurl*", "*://interface.bilibili.com/player?id=cid*", "*://api.bilibili.com/x/player.so?id=cid*", "*://api.bilibili.com/x/web-interface/view?*" ]
                    }, [ "requestHeaders" ]), chrome.runtime.onMessage.addListener(function(n) {
                        if ("sendVideoFilename" === n.command && n.cid) {
                            var t = new we.a(n.url, "", !0);
                            e.downloadFilenames[t.pathname] = {
                                filename: n.filename,
                                cid: n.cid
                            };
                        } else "downloadMergedVideo" === n.command && n.url && n.filename && chrome.downloads.download({
                            saveAs: !0,
                            url: n.url,
                            filename: n.filename
                        });
                        return !0;
                    }), chrome.webRequest.onHeadersReceived.addListener(function(n) {
                        var t = n.responseHeaders, i = n.initiator, r = n.url;
                        if (!/^chrome-extension:\/\//.test(i)) {
                            var a = new we.a(r, "", !0), o = r.query;
                            if (!o || !o.requestFrom) {
                                var c = e.downloadFilenames[a.pathname];
                                if (c) {
                                    var l = c.filename, s = c.cid, d = l.replace(/[|"*?:<>]/g, "_"), u = A()(t, function(e) {
                                        return "Content-Disposition" === e.name;
                                    }), p = ('attachment; filename="' + encodeURIComponent(d) + "." + s + ".flv\"; filename*=utf-8' '" + encodeURIComponent(d) + "." + s + ".flv").replace("/", "%2f");
                                    u ? u.value = p : t.push({
                                        name: "Content-Disposition",
                                        value: p
                                    });
                                }
                                return {
                                    responseHeaders: t
                                };
                            }
                        }
                    }, {
                        urls: [ "*://*.acgvideo.com/*", "*://*.bilivideo.com/*" ]
                    }, [ "responseHeaders", "blocking" ]);
                }, e.messageStore = new ze.a("videoDownloadDOMInitialized"), e.downloadFilenames = {}, 
                e;
            }
            return x()(n, e), n;
        }(k.a), dt = W()([ "\n      position: absolute;\n      right: 10px;\n      top: 14px;\n      border-radius: 4px;\n      button {\n        padding: 0 4px;\n        min-width: unset;\n        font-size: 12px;\n        border: 1px solid #fb7299;\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n        cursor: pointer;\n      }\n    " ], [ "\n      position: absolute;\n      right: 10px;\n      top: 14px;\n      border-radius: 4px;\n      button {\n        padding: 0 4px;\n        min-width: unset;\n        font-size: 12px;\n        border: 1px solid #fb7299;\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n        cursor: pointer;\n      }\n    " ]), ut = function() {
            var e = Object(J.d)(Ge.a).attrs({
                class: "bilibili-helper-pip-btn"
            })(dt, function(e) {
                return e.on ? "#fff" : "#fb7299";
            }, function(e) {
                return e.on ? "#fb7299" : "#fff";
            });
            return function(n) {
                function t(e) {
                    b()(this, t);
                    var n = v()(this, (t.__proto__ || h()(t)).call(this, e));
                    return n.addListener = function(e) {
                        if (e && e.addEventListener) {
                            var t = n;
                            e.removeEventListener("enterpictureinpicture", null), e.removeEventListener("leavepictureinpicture", null), 
                            e.addEventListener("ended", function() {
                                document.pictureInPictureElement && document.exitPictureInPicture(), t.isEnd = !0;
                            }), e.addEventListener("loadedmetadata", function() {
                                t.state.inPIP && t.handleOnClick(!0);
                            }), e.addEventListener("enterpictureinpicture", function() {
                                t.setState({
                                    inPIP: !0
                                });
                            }), e.addEventListener("leavepictureinpicture", function() {
                                var e = this;
                                t.setState({
                                    inPIP: !1
                                }, function() {
                                    t.isEnd || e.play();
                                });
                            });
                        }
                    }, n.handleOnClick = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        n.video || (n.video = document.querySelector("#bofqi .bilibili-player-video video"), 
                        n.addListener(n.video)), n.video && n.video.requestPictureInPicture && (!n.state.inPIP || e ? n.video.requestPictureInPicture().then(function() {
                            n.setState({
                                inPIP: !0
                            }, function() {
                                return n.video.play();
                            });
                        }) : n.state.inPIP && document.pictureInPictureElement && document.exitPictureInPicture().then(function() {
                            n.setState({
                                inPIP: !1
                            }, function() {
                                return n.video.play();
                            });
                        }).catch(function(e) {
                            console.error(e), n.setState({
                                inPIP: !1
                            });
                        }), chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "PIP",
                            label: "PIP"
                        }));
                    }, n.state = {
                        inPIP: !1
                    }, n.video = null, n.isEnd = !1, n;
                }
                return x()(t, n), D()(t, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.video = document.querySelector("#bofqi .bilibili-player-video video"), this.addListener(this.video);
                        var n = document.querySelector("#bofqi");
                        n && n.addEventListener("DOMNodeInserted", function(n) {
                            "video" === n.target.localName && e.video !== n.target && (e.video = n.target, e.addListener(e.video), 
                            e.isEnd = !1);
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this;
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement(e, {
                            title: Object(w.a)("pictureInPicture_UI_buttonTitle"),
                            onClick: function() {
                                return n.handleOnClick();
                            },
                            on: this.state.inPIP
                        }, Object(w.a)("pictureInPicture_name")));
                    }
                } ]), t;
            }(N.a.Component);
        }, pt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "pictureInPicture",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(e, n) {
                    var t = U()(e, 1)[0];
                    return new O.a(function(e) {
                        var i = ut(), r = document.createElement("div");
                        r.setAttribute("class", "bilibili-helper-pip-wrapper"), r.setAttribute("style", "position: static; margin: 0;"), 
                        t.appendChild(r), R.a.render(N.a.createElement(i, {
                            settings: n
                        }), r, e);
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), mt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "pictureInPicture",
                    kind: "video",
                    permissions: [ "pip" ],
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !0,
                        title: Object(pn.a)("pictureInPicture_name") + " (PIP)",
                        hasUI: !0
                    }
                }));
                return e.launch = function() {
                    document.pictureInPictureEnabled ? (e.settings.on = !0, e.setSetting(e.settings)) : e.pause();
                }, e.pause = function() {
                    e.settings.on = !1, e.setSetting(e.settings);
                }, e;
            }
            return x()(n, e), n;
        }(k.a), ht = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoWiden",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(n, t) {
                    return t.on ? new O.a(function(n) {
                        var i = t.subPage.value;
                        e.setWide(i);
                        var r = document.querySelector("#bofqi");
                        r && new MutationObserver(function(n) {
                            E()(n, function(n) {
                                n.oldValue && e.setWide(i);
                            });
                        }).observe(r, {
                            attributes: !0,
                            attributeOldValue: !0,
                            subtree: !0
                        }), n();
                    }) : O.a.resolve();
                }, e.setWide = function(e) {
                    switch (e) {
                      case "wide":
                        var n = document.querySelector(".bilibili-player-video-btn-widescreen:not(.closed)");
                        n && !n.getAttribute("bilibili-helper-data") && (n.setAttribute("bilibili-helper-data", !0), 
                        n.click());
                        break;

                      case "web":
                        var t = document.querySelector(".bilibili-player-video-web-fullscreen:not(.closed)");
                        t && !t.getAttribute("bilibili-helper-data") && (t.setAttribute("bilibili-helper-data", !0), 
                        t.click());
                    }
                }, e;
            }
            return x()(n, e), n;
        }(te.a), ft = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoWiden",
                    kind: "video",
                    settings: {
                        on: !0,
                        title: Object(pn.a)("videoWiden_name"),
                        hasUI: !0,
                        subPage: {
                            type: "radio",
                            title: Object(pn.a)("videoWiden_subPage_title"),
                            options: [ {
                                key: "default",
                                title: Object(pn.a)("videoWiden_subPage_options_default")
                            }, {
                                key: "wide",
                                title: Object(pn.a)("videoWiden_subPage_options_normalWiden")
                            }, {
                                key: "web",
                                title: Object(pn.a)("videoWiden_subPage_options_webFullscreen")
                            } ],
                            value: "default"
                        }
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), bt = W()([ "\n      width: 100%;\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ], [ "\n      width: 100%;\n      margin-bottom: 6px;\n      font-size: 12px;\n      font-weight: bold;\n      text-align: left;\n      .count {\n        margin-left: 10px;\n        color: ", ";\n      }\n    " ]), gt = W()([ "\n      display: flex;\n      flex-wrap: wrap;\n    " ], [ "\n      display: flex;\n      flex-wrap: wrap;\n    " ]), vt = W()([ "\n      display: inline-block;\n      margin: 4px;\n      padding: 3px;\n      border-radius: 3px;\n      font-size: 12px;\n      font-style: normal;\n      letter-spacing: 0.3px;\n      background-color: #eaf4ff;\n      cursor: pointer;\n      transition: all 0.3s;\n      &:hover {\n        background-color: #d4eaff;\n      }\n      a {\n        padding: 0 3px;\n        color: #00a1d6;\n        &:hover {\n          color: #004c65;\n        }\n        &:last-of-type {\n          border: none;\n        }\n      }\n    " ], [ "\n      display: inline-block;\n      margin: 4px;\n      padding: 3px;\n      border-radius: 3px;\n      font-size: 12px;\n      font-style: normal;\n      letter-spacing: 0.3px;\n      background-color: #eaf4ff;\n      cursor: pointer;\n      transition: all 0.3s;\n      &:hover {\n        background-color: #d4eaff;\n      }\n      a {\n        padding: 0 3px;\n        color: #00a1d6;\n        &:hover {\n          color: #004c65;\n        }\n        &:last-of-type {\n          border: none;\n        }\n      }\n    " ]), yt = W()([ "\n      display: inline-block;\n      padding: 0 8px;\n      border-right: 1px solid #fff;\n      &:last-of-type {\n        border-right: none;\n      }\n      p {\n          color: ", ";\n          font-size: 12px;\n      }\n    " ], [ "\n      display: inline-block;\n      padding: 0 8px;\n      border-right: 1px solid #fff;\n      &:last-of-type {\n        border-right: none;\n      }\n      p {\n          color: ", ";\n          font-size: 12px;\n      }\n    " ]), xt = function() {
            var e = Y.a.color, n = J.d.div.attrs({
                className: "bilibili-helper-danmu-title"
            })(bt, e("google-grey-500")), t = J.d.div(gt), i = J.d.div(vt), r = J.d.span(yt, e("google-grey-900"));
            return function(e) {
                function a(e) {
                    b()(this, a);
                    var n = v()(this, (a.__proto__ || h()(a)).call(this, e));
                    return n.handleDownloadSubtitle = function(e) {
                        chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "videoSubtitleDownload",
                            label: "videoSubtitleDownload"
                        }), chrome.runtime.sendMessage({
                            command: "downloadSubtitle",
                            subtitleObject: e,
                            filename: document.querySelector("#viewbox_report h1, .header-info h1").getAttribute("title")
                        });
                    }, n.state = {
                        subtitleData: [],
                        permissionMap: {}
                    }, n;
                }
                return x()(a, e), D()(a, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.sendMessage({
                            command: "videoSubtitleDownloadDOMInitialized"
                        }), chrome.runtime.onMessage.addListener(function(n, t, i) {
                            "loadSubtitle" === n.command && n.url && (he.a.ajax({
                                method: "get",
                                headers: {
                                    From: "bilibili-helper"
                                },
                                url: n.url,
                                success: function(n) {
                                    var t = /<subtitle>(.+)<\/subtitle>/.exec(n);
                                    if (t.length > 0) {
                                        var i = JSON.parse(t[1]).subtitles;
                                        e.setState({
                                            subtitleData: i
                                        });
                                    }
                                },
                                error: function(e) {
                                    console.error(e), e.status;
                                }
                            }), i(!0));
                        }), chrome.runtime.sendMessage({
                            command: "getPermissionMap"
                        }, function(n) {
                            e.setState({
                                permissionMap: n
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this, a = this.state, o = a.subtitleData, c = a.permissionMap;
                        return N.a.createElement(N.a.Fragment, null, !c.login || 0 !== o.length && N.a.createElement(n, null, "外挂字幕下载"), N.a.createElement(t, null, !c.login && N.a.createElement(r, null, N.a.createElement("p", null, "未登录")), c.login && 0 !== o.length && N.a.createElement(i, null, o.map(function(n) {
                            var t = n.id, i = n.lan_doc;
                            return N.a.createElement(r, {
                                key: t,
                                onClick: function() {
                                    return e.handleDownloadSubtitle(n);
                                }
                            }, N.a.createElement("a", null, i.replace("（", " (").replace("）", ")")));
                        }))));
                    }
                } ]), a;
            }(N.a.Component);
        }, kt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoSubtitleDownload",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(e, n) {
                    var t = U()(e, 1)[0];
                    return n.on ? new O.a(function(e) {
                        var n = xt(), i = document.createElement("div");
                        i.setAttribute("class", "bilibili-helper-subtitle-download-wrapper"), i.setAttribute("style", "order: 2;"), 
                        t.appendChild(i), R.a.render(N.a.createElement(n, null), i, e);
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), wt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoSubtitleDownload",
                    kind: "video",
                    permissions: [ "login", "downloads" ],
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !0,
                        hasUI: !0,
                        title: Object(pn.a)("videoSubtitleDownload_name")
                    }
                }));
                return e.addListener = function() {
                    chrome.webRequest.onSendHeaders.addListener(function(n) {
                        var t = n.tabId, i = n.initiator, r = n.requestHeaders, a = !Ue()(A()(r, function(e) {
                            var n = e.name, t = e.value;
                            return "From" === n && "bilibili-helper" === t;
                        }));
                        if (!/^chrome-extension:\/\//.test(i) && !a) {
                            var o = e.messageStore.createData(t), c = new we.a(n.url, "", !0), l = c.pathname, s = c.query;
                            if (!s || !s.requestFrom) if ("/x/player.so" === l) o.data.cid = s.id.slice(4), 
                            e.messageStore.createData(t).queue.push({
                                command: "loadSubtitle",
                                url: n.url
                            }), e.messageStore.dealWith(t);
                        }
                    }, {
                        urls: [ "*://api.bilibili.com/x/player.so?id=cid:*", "*://api.bilibili.com/x/player.so?id=cid%3A*" ]
                    }, [ "requestHeaders" ]), chrome.runtime.onMessage.addListener(function(n, t) {
                        if ("downloadSubtitle" === n.command && n.subtitleObject) {
                            var i = e.messageStore.createData(t.tab.id || t.id);
                            if (i) {
                                var r = n.subtitleObject, a = r.lan, o = r.subtitle_url, c = i.data.cid;
                                chrome.downloads.download({
                                    saveAs: !0,
                                    url: "http:" + o,
                                    filename: n.filename + "-" + c + "." + a + ".bbc"
                                });
                            }
                        }
                        return !0;
                    });
                }, e.launch = function() {
                    e.settings.on = !0, e.setSetting(e.settings);
                }, e.pause = function() {
                    e.settings.on = !1, e.setSetting(e.settings);
                }, e.messageStore = new ze.a("videoSubtitleDownloadDOMInitialized"), e;
            }
            return x()(n, e), n;
        }(k.a), _t = {
            version: "https://bilibili-helper.github.io/static/json/config.json"
        }, St = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "versionManager",
                    kind: "other",
                    permissions: [ "notifications" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("versionManager_name"),
                        description: Object(w.a)("versionManager_description"),
                        type: "checkbox",
                        options: [ {
                            key: "notification",
                            title: Object(w.a)("versionManager_options_notification"),
                            on: !1
                        } ]
                    }
                }));
                return e.launch = function() {
                    e.request();
                }, e.addListener = function() {
                    chrome.runtime.onMessage.addListener(function(n, t, i) {
                        return "checkVersion" === n.command && (e.request(!0), i(!0)), !0;
                    });
                }, e.setVersion = function() {
                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).lastVersion;
                    e.store ? (w.n && (e.version.version = n), e.version.day = new Date().getDate()) : e.version = {
                        version: w.n,
                        day: new Date().getDate()
                    }, e.store = e.version;
                }, e.getVersion = function() {
                    var n = e.store;
                    return void 0 === n ? e.version = {
                        version: null,
                        day: null
                    } : e.store = n, e.store = e.version, e.store;
                }, e.request = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = e.getVersion() || {}, i = t.day, r = t.version, a = r && Object(w.k)(r, w.n);
                    (i !== e.getTodayDate() || a < 0 || n) && he.a.ajax({
                        method: "get",
                        url: _t.version,
                        success: function(t) {
                            var i = Object(w.k)(t.lastVersion, w.n);
                            i <= 0 ? (t.lastVersion = w.n, e.setVersion(t), e.sendNotification(Object(w.a)("checkVersionNoNewVersion"), n)) : i > 0 && (e.setVersion(t), 
                            e.sendNotification(Object(w.a)("checkVersionNewVersion") + t.lastVersion, n));
                        },
                        error: function(t) {
                            e.sendNotification(Object(w.a)("checkVersionGetUpdateError"), n), console.error("Failed to check version", t);
                        }
                    });
                }, e.sendNotification = function(n, t) {
                    var i = A()(e.settings.options, function(e) {
                        return "notification" === e.key;
                    }).on || t, r = "bh-" + e.name + "-" + (1e3 * Math.random()).toFixed(0), a = Object(w.h)("/statics/imgs/cat.svg"), o = Object(w.a)("extensionNotificationTitle");
                    i && Object(w.c)(r, {
                        type: "basic",
                        iconUrl: a,
                        title: o,
                        message: n
                    });
                }, e.store || (e.version = {
                    version: w.n,
                    day: new Date().getDate()
                }), e.version = e.store, e;
            }
            return x()(n, e), n;
        }(k.a), Ct = {
            silver2coin: "https://api.live.bilibili.com/pay/v1/Exchange/silver2coin"
        }, Ot = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "silver2coin",
                    kind: "live",
                    permissions: [ "login", "notifications" ],
                    settings: {
                        on: !1,
                        title: Object(w.a)("silver2coin_name"),
                        type: "checkbox",
                        options: [ {
                            key: "notification",
                            title: Object(w.a)("silver2coin_options_notification"),
                            on: !0,
                            description: Object(w.a)("silver2coin_options_notification_description")
                        } ]
                    }
                }));
                return e.launch = function() {
                    chrome.alarms.create("silver2coin", {
                        periodInMinutes: 1
                    });
                }, e.pause = function() {
                    chrome.alarms.clear("silver2coin");
                }, e.addListener = function() {
                    chrome.alarms.onAlarm.addListener(function(n) {
                        switch (n.name) {
                          case "silver2coin":
                            e.request();
                        }
                    });
                }, e.permissionHandleLogin = function(n) {
                    e.request(n);
                }, e.request = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.permissionMap.login;
                    chrome.extension.inIncognitoContext || (e.store || {}).day !== e.getTodayDate() && e.settings.on && n && chrome.cookies.get({
                        url: "http://www.bilibili.com",
                        name: "bili_jct"
                    }, function(n) {
                        he.a.ajax({
                            method: "get",
                            url: Ct.silver2coin,
                            data: {
                                platform: "pc",
                                csrf_token: n.value,
                                requestFrom: "bilibili-helper"
                            },
                            success: function(n) {
                                if (e.store = {
                                    day: e.getTodayDate()
                                }, 0 === n.code) {
                                    var t = A()(e.settings.options, {
                                        key: "notification"
                                    });
                                    t && t.on && Object(w.c)("bilibili-helper-silver2coin", {
                                        type: "basic",
                                        iconUrl: Object(w.h)("/statics/imgs/cat.svg"),
                                        title: Object(w.a)("extensionNotificationTitle"),
                                        message: Object(w.a)("silver2coin_notification_successfully"),
                                        buttons: []
                                    });
                                }
                            }
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Lt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "quickSearch",
                    kind: "other",
                    settings: {
                        on: !0,
                        title: Object(w.a)("quickSearch_name")
                    }
                }));
                return e.launch = function() {
                    chrome.contextMenus.create({
                        id: "bilibili-searchBili",
                        title: Object(w.a)("searchBili"),
                        contexts: [ "selection" ],
                        onclick: function(e) {
                            chrome.runtime.sendMessage({
                                command: "setGAEvent",
                                action: "click",
                                category: "quickSearch",
                                label: "quickSearch"
                            }), Object(w.d)("https://search.bilibili.com/all?keyword=" + encodeURIComponent(e.selectionText));
                        }
                    });
                }, e.pause = function() {
                    chrome.contextMenus.remove("bilibili-searchBili", null);
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Dt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoHideDanmu",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(n, t) {
                    return t.on ? new O.a(function(n) {
                        e.hide();
                        var t = document.querySelector("#bofqi");
                        t && new MutationObserver(function(n) {
                            n.forEach(function(n) {
                                n.addedNodes.length > 0 && n.addedNodes.forEach(function(n) {
                                    "VIDEO" !== n.tagName && "INPUT" !== n.tagName || (e.btn1 = document.querySelector(".bilibili-player-video-control .bilibili-player-iconfont.bilibili-player-iconfont-danmaku"), 
                                    e.btn2 = document.querySelector(".bilibili-player-video-danmaku-switch input[type=checkbox]"), 
                                    setTimeout(e.hide, 1e3));
                                });
                            });
                        }).observe(t, {
                            subtree: !0,
                            childList: !0
                        }), n();
                    }) : O.a.resolve();
                }, e.hide = function() {
                    e.btn1 && !e.btn1.getAttribute("bibili-helper-data") ? (e.btn1.setAttribute("bibili-helper-data", !0), 
                    e.btn1.click()) : e.btn2 && e.btn2.checked && e.btn2.click();
                }, e.btn1 = null, e.btn2 = null, e;
            }
            return x()(n, e), n;
        }(te.a), Mt = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoHideDanmu",
                    kind: "video",
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !1,
                        title: Object(pn.a)("videoHideDanmu_name"),
                        hasUI: !0
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), At = t(205), It = t.n(At), Et = W()([ "\n      display: inline-block;\n      position: static;\n      height: 20px;\n      padding: 0 5px;\n      line-height: 20px;\n      vertical-align: middle;\n      background-color: white;\n      border-radius: 4px;\n      border: 1px solid ", ";\n      color: ", ";\n      cursor: pointer;\n      transition: all 0.3s;\n      &.on, &:hover {\n        background-color: ", ";\n        color: white;\n      }\n    " ], [ "\n      display: inline-block;\n      position: static;\n      height: 20px;\n      padding: 0 5px;\n      line-height: 20px;\n      vertical-align: middle;\n      background-color: white;\n      border-radius: 4px;\n      border: 1px solid ", ";\n      color: ", ";\n      cursor: pointer;\n      transition: all 0.3s;\n      &.on, &:hover {\n        background-color: ", ";\n        color: white;\n      }\n    " ]), jt = W()([ "\n      .player-full-win.hide-aside-area .aside-area {\n        display: block;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area {\n        background-color: transparent;\n        pointer-events: none;\n        z-index: 1001!important;\n        pointer-events: auto;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel {\n        position: fixed;\n        left: 0;\n        bottom: 80px;\n        display: inline-block;\n        width: auto;\n        height: calc(50% - 20px);\n        pointer-events: auto;\n        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 15%, transparent 75%);\n        background-color: unset;\n      }\n      .hide-aside-area .chat-history-panel:hover #chat-history-list {\n        outline: 1px solid ", ";\n      }\n      .hide-aside-area .chat-history-panel #chat-history-list::-webkit-scrollbar {\n        display: none;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel::-webkit-scrollbar,\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .rank-list-section,\n      .hide-aside-area #penury-gift-msg,\n      .hide-aside-area #chat-control-panel-vm .bottom-actions,\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item:before,\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item.guard-danmaku:after {\n        display: none;\n      }\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item {\n        margin: 0;\n        padding: 0 5px;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item,\n      .hide-aside-area .control-panel-icon-row {\n        pointer-events: none;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat {\n        display: flex!important;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat .icon-right-part {\n        float: right!important;\n        margin-left: auto;\n        order: 0;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat .icon-right-end-part {\n        float: right!important;\n        order: 1;\n      }\n      .hide-aside-area .control-panel-icon-row .icon-right-part {\n        float: right;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item {\n        margin-left: 6px;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item .user-name {\n        text-shadow: 0px 1px 1px #000;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item .danmaku-content {\n        color: #eee;\n        text-shadow: 0px 1px 1px #000;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item span,\n      .hide-aside-area #chat-popup-area-vm,\n      .hide-aside-area .chat-small-icon-box,\n      .hide-aside-area .control-panel-icon-row > *,\n      .hide-aside-area .danmaku-menu,\n      .hide-aside-area .z-chat-control-panel-dialog.dialog-ctnr {\n        pointer-events: auto;\n      }\n      .hide-aside-area .z-chat-control-panel-dialog.dialog-ctnr .yan-ctnr {\n        width: 300px;\n      }\n      .hide-aside-area #chat-control-panel-vm{\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        margin-bottom: 3px;\n        width: 100%;\n        height: auto;\n        background-color: unset;\n        pointer-events: none!important;\n        z-index: 1;\n      }\n      .hide-aside-area #chat-control-panel-vm .control-panel-ctnr {\n        height: auto;\n        padding: 0 3px;\n        pointer-events: none;\n      }\n      .hide-aside-area #chat-control-panel-vm .chat-input,\n      .hide-aside-area #chat-control-panel-vm textarea {\n        height: 36px;\n        background-color: #1b1b1b;\n        border-color: #2b2b2b;\n        color: #eee;\n        pointer-events: auto;\n      }\n      .hide-aside-area #chat-control-panel-vm .input-limit-hint {\n        bottom: 10px;\n        right: 12px;\n      }\n      .hide-aside-area:not(.fullscreen-fix) .bilibili-live-player-video video {\n        height: calc(100% - 40px);\n      }\n      .hide-aside-area:not(.fullscreen-fix) .bilibili-live-player-video-controller {\n        bottom: 38px;\n      }\n      .hide-aside-area .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container {\n        padding: 0 130px 0 80px;\n      }\n      .hide-aside-area .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container .bilibili-live-player-video-controller-right {\n        margin-right: 22px;\n      }\n      \n      .hide-aside-area .live-chat-mode-height-bar {\n        position: absolute;\n        top: 0;\n        width: calc(100% - 14px);\n        height: 8px;\n        z-index: 1;\n        cursor: ns-resize;\n      }\n      .hide-aside-area .live-chat-mode-move-bar {\n        display: block;\n        position: absolute;\n        top: -1px;\n        right: -1px;\n        width: 14px;\n        height: 14px;\n        z-index: 2;\n        color: transparent;\n        font-size: 14px;\n        cursor: move;\n      }\n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-height-bar,\n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-move-bar{\n        background-color: ", ";\n        user-select: none;\n      }\n      .hide-aside-area #aside-area-vm {\n        pointer-events: none;!important;\n      }\n      \n      .hide-aside-area #aside-area-vm > *{\n        pointer-events: initial;\n      }\n      \n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-height-bar::after {\n        content: '';\n        display: block;\n        width: 15px;\n        height: 1px;\n        background-color: #a8dbf0;\n        position: absolute;\n        top: 1px;\n        left: 50%;\n        transform: translate(-50%);\n        box-shadow: 0px 2px 0px #a8dbf0, 0px 4px 0px #a8dbf0;\n      }\n      .hide-aside-area .chat-item.danmaku-item {\n        font-size: 16px;\n        height: 28px;\n      }\n    " ], [ "\n      .player-full-win.hide-aside-area .aside-area {\n        display: block;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area {\n        background-color: transparent;\n        pointer-events: none;\n        z-index: 1001!important;\n        pointer-events: auto;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel {\n        position: fixed;\n        left: 0;\n        bottom: 80px;\n        display: inline-block;\n        width: auto;\n        height: calc(50% - 20px);\n        pointer-events: auto;\n        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 15%, transparent 75%);\n        background-color: unset;\n      }\n      .hide-aside-area .chat-history-panel:hover #chat-history-list {\n        outline: 1px solid ", ";\n      }\n      .hide-aside-area .chat-history-panel #chat-history-list::-webkit-scrollbar {\n        display: none;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel::-webkit-scrollbar,\n      .hide-aside-area .live-room-app .app-content .app-body .player-and-aside-area .aside-area .rank-list-section,\n      .hide-aside-area #penury-gift-msg,\n      .hide-aside-area #chat-control-panel-vm .bottom-actions,\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item:before,\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item.guard-danmaku:after {\n        display: none;\n      }\n      .hide-aside-area .chat-history-panel #chat-history-list .chat-item.danmaku-item {\n        margin: 0;\n        padding: 0 5px;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item,\n      .hide-aside-area .control-panel-icon-row {\n        pointer-events: none;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat {\n        display: flex!important;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat .icon-right-part {\n        float: right!important;\n        margin-left: auto;\n        order: 0;\n      }\n      .hide-aside-area .control-panel-icon-row.superChat .icon-right-end-part {\n        float: right!important;\n        order: 1;\n      }\n      .hide-aside-area .control-panel-icon-row .icon-right-part {\n        float: right;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item {\n        margin-left: 6px;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item .user-name {\n        text-shadow: 0px 1px 1px #000;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item .danmaku-content {\n        color: #eee;\n        text-shadow: 0px 1px 1px #000;\n      }\n      .hide-aside-area .live-room-app .app-content .app-body .chat-history-panel .chat-item span,\n      .hide-aside-area #chat-popup-area-vm,\n      .hide-aside-area .chat-small-icon-box,\n      .hide-aside-area .control-panel-icon-row > *,\n      .hide-aside-area .danmaku-menu,\n      .hide-aside-area .z-chat-control-panel-dialog.dialog-ctnr {\n        pointer-events: auto;\n      }\n      .hide-aside-area .z-chat-control-panel-dialog.dialog-ctnr .yan-ctnr {\n        width: 300px;\n      }\n      .hide-aside-area #chat-control-panel-vm{\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        margin-bottom: 3px;\n        width: 100%;\n        height: auto;\n        background-color: unset;\n        pointer-events: none!important;\n        z-index: 1;\n      }\n      .hide-aside-area #chat-control-panel-vm .control-panel-ctnr {\n        height: auto;\n        padding: 0 3px;\n        pointer-events: none;\n      }\n      .hide-aside-area #chat-control-panel-vm .chat-input,\n      .hide-aside-area #chat-control-panel-vm textarea {\n        height: 36px;\n        background-color: #1b1b1b;\n        border-color: #2b2b2b;\n        color: #eee;\n        pointer-events: auto;\n      }\n      .hide-aside-area #chat-control-panel-vm .input-limit-hint {\n        bottom: 10px;\n        right: 12px;\n      }\n      .hide-aside-area:not(.fullscreen-fix) .bilibili-live-player-video video {\n        height: calc(100% - 40px);\n      }\n      .hide-aside-area:not(.fullscreen-fix) .bilibili-live-player-video-controller {\n        bottom: 38px;\n      }\n      .hide-aside-area .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container {\n        padding: 0 130px 0 80px;\n      }\n      .hide-aside-area .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container .bilibili-live-player-video-controller-right {\n        margin-right: 22px;\n      }\n      \n      .hide-aside-area .live-chat-mode-height-bar {\n        position: absolute;\n        top: 0;\n        width: calc(100% - 14px);\n        height: 8px;\n        z-index: 1;\n        cursor: ns-resize;\n      }\n      .hide-aside-area .live-chat-mode-move-bar {\n        display: block;\n        position: absolute;\n        top: -1px;\n        right: -1px;\n        width: 14px;\n        height: 14px;\n        z-index: 2;\n        color: transparent;\n        font-size: 14px;\n        cursor: move;\n      }\n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-height-bar,\n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-move-bar{\n        background-color: ", ";\n        user-select: none;\n      }\n      .hide-aside-area #aside-area-vm {\n        pointer-events: none;!important;\n      }\n      \n      .hide-aside-area #aside-area-vm > *{\n        pointer-events: initial;\n      }\n      \n      .hide-aside-area .chat-history-panel:hover .live-chat-mode-height-bar::after {\n        content: '';\n        display: block;\n        width: 15px;\n        height: 1px;\n        background-color: #a8dbf0;\n        position: absolute;\n        top: 1px;\n        left: 50%;\n        transform: translate(-50%);\n        box-shadow: 0px 2px 0px #a8dbf0, 0px 4px 0px #a8dbf0;\n      }\n      .hide-aside-area .chat-item.danmaku-item {\n        font-size: 16px;\n        height: 28px;\n      }\n    " ]), qt = function() {
            var e, n, t = Y.a.color, i = J.d.span(Et, t("bilibili-blue"), t("bilibili-blue"), t("bilibili-blue")), r = Object(J.c)(jt, t("bilibili-blue"), t("bilibili-blue"));
            return e = function(e) {
                function t(e) {
                    b()(this, t);
                    var i = v()(this, (t.__proto__ || h()(t)).call(this, e));
                    n.call(i), i.roomId = location.pathname.substr(1);
                    var r = hn.a.get("bilibili-helper-live-chat-mode") || {};
                    return i.state = {
                        on: r[i.roomId] || !1,
                        currentState: 0
                    }, i.addListener(), i.heightMouseDown = !1, i.moveMouseDown = !1, i.originOffectLeft = 0, 
                    i.originOffectBottom = 0, i.originX = 0, i.originY = 0, i.originHeight = 0, i;
                }
                return x()(t, e), D()(t, [ {
                    key: "componentDidMount",
                    value: function() {
                        this.bodyDOM = document.querySelector("body"), this.initDraggableBar();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state, n = e.on, t = e.currentState;
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement(i, {
                            className: n ? "on" : "",
                            onClick: this.handleOnClick
                        }, n ? Object(pn.a)("liveChatMode_UI_buttonOFF") : Object(pn.a)("liveChatMode_UI_buttonON")), 0 !== t && n && N.a.createElement("style", null, r));
                    }
                } ]), t;
            }(N.a.Component), n = function() {
                var e = this;
                this.initDraggableBar = function() {
                    var n = e, t = hn.a.get("bilibili-helper-live-chat-mode") || {}, i = document.querySelector(".app-content"), r = document.querySelector(".bilibili-live-player-video-area"), a = document.querySelector(".chat-history-panel");
                    if (i && r && a) {
                        var o = document.createElement("div"), c = document.createElement("div");
                        o.setAttribute("class", "live-chat-mode-height-bar"), c.setAttribute("class", "live-chat-mode-move-bar"), 
                        It()(t[e.roomId]) && (n.originHeight = t[e.roomId].height, n.originOffectLeft = t[e.roomId].offsetLeft, 
                        n.originOffectBottom = t[e.roomId].offsetBottom), o.addEventListener("mousedown", function(e) {
                            e.stopPropagation(), 0 !== e.button && 1 !== e.buttons || (n.heightMouseDown = !0, 
                            n.originHeight = a.clientHeight, n.originY = e.clientY);
                        }), c.addEventListener("mousedown", function(e) {
                            e.stopPropagation(), 0 !== e.button && 1 !== e.buttons || (n.moveMouseDown = !0, 
                            n.originOffectLeft = a.offsetLeft, n.originOffectBottom = r.offsetHeight - a.offsetTop - a.offsetHeight, 
                            n.originX = e.clientX, n.originY = e.clientY);
                        }), i.addEventListener("mousemove", Wn()(function(e) {
                            if (n.state.on) if (n.heightMouseDown) {
                                var t = n.originY - e.clientY, i = n.originHeight + t;
                                i > 25 && i < r.clientHeight && i < r.offsetHeight && (a.style.height = i + "px");
                            } else if (n.moveMouseDown) {
                                var o = n.originX - e.clientX, c = n.originY - e.clientY, l = n.originOffectLeft - o, s = n.originOffectBottom + c;
                                l < 0 && (l = 0), s < 48 && (s = 48), a.style.left = l + "px", a.style.bottom = s + "px";
                            }
                        }, 25), !0), i.addEventListener("mouseup", function() {
                            (n.heightMouseDown || n.moveMouseDown) && n.state.on && (n.originHeight = a.clientHeight, 
                            n.originOffectLeft = a.offsetLeft, n.originOffectBottom = r.offsetHeight - a.offsetTop - a.offsetHeight, 
                            t[n.roomId] = {
                                height: n.originHeight,
                                offsetLeft: n.originOffectLeft,
                                offsetBottom: n.originOffectBottom
                            }, hn.a.set("bilibili-helper-live-chat-mode", t), n.heightMouseDown = !1, n.moveMouseDown = !1);
                        }, !0), a.appendChild(o), a.appendChild(c);
                    }
                }, this.addListener = function() {
                    e.bodyDOM || (e.bodyDOM = document.querySelector("body"));
                    var n = e.bodyDOM.classList, t = document.querySelector(".chat-history-panel"), i = document.querySelector(".bilibili-live-player-video-controller-hide-danmaku-btn button");
                    new MutationObserver(function() {
                        var r = e.state, a = r.on, o = r.currentState;
                        a && n.contains("player-full-win") && 1 !== o ? (n.contains("hide-aside-area") || document.querySelector(".aside-area-toggle-btn button").click(), 
                        "隐藏弹幕" === i.getAttribute("data-title") && i.click(), e.setState({
                            currentState: 1
                        }, function() {
                            t && e.originHeight && (t.style.height = e.originHeight + "px"), t && e.originOffectLeft && (t.style.left = e.originOffectLeft + "px"), 
                            t && e.originOffectBottom && (t.style.bottom = e.originOffectBottom + "px");
                        })) : !n.contains("fullscreen-fix") && n.contains("player-full-win") || e.setState({
                            currentState: 0
                        }, function() {
                            t && (t.style.height = ""), a && "显示弹幕" === i.getAttribute("data-title") && i.click();
                        });
                    }).observe(e.bodyDOM, {
                        attributes: !0,
                        attributeFilter: [ "class" ],
                        attributeOldValue: !0
                    });
                }, this.handleOnClick = function() {
                    var n = !e.state.on;
                    e.setState({
                        on: n
                    }, function() {
                        var t = hn.a.get("bilibili-helper-live-chat-mode") || {};
                        n ? t[e.roomId] = !0 : delete t[e.roomId], chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "liveChatMode",
                            label: "liveChatMode " + n
                        }), hn.a.set("bilibili-helper-live-chat-mode", t);
                    });
                };
            }, e;
        }, Pt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveChatMode"
                }));
                return e.load = function(n, t) {
                    return t.on ? new O.a(function(n) {
                        var i = qt();
                        e.interval(".room-info-down-row .attention-btn-ctnr", 2e3).then(function(e) {
                            var r = document.createElement("div");
                            r.setAttribute("class", "bilibili-helper-live-chat-mode-wrapper"), r.setAttribute("style", "display: inline-block; float: left; margin-right: 7px;"), 
                            e && e.appendChild(r), R.a.render(N.a.createElement(i, {
                                settings: t
                            }), r, n);
                        });
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Tt = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveChatMode",
                    kind: "live",
                    settings: {
                        on: !0,
                        title: Object(pn.a)("liveChatMode_name"),
                        description: Object(pn.a)("liveChatMode_description"),
                        hasUI: !0
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), Ut = W()([ "\n      position: absolute;\n      right: 66px;\n      top: 14px;\n      border-radius: 4px;\n      button {\n        padding: 0 4px;\n        min-width: unset;\n        font-size: 12px;\n        border: 1px solid #fb7299;\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n        cursor: pointer;\n      }\n    " ], [ "\n      position: absolute;\n      right: 66px;\n      top: 14px;\n      border-radius: 4px;\n      button {\n        padding: 0 4px;\n        min-width: unset;\n        font-size: 12px;\n        border: 1px solid #fb7299;\n        border-radius: 4px;\n        color: ", ";\n        background-color: ", ";\n        cursor: pointer;\n      }\n    " ]), zt = W()([ "\n      html {\n        --dark-0: #101010;\n        --dark-1: #141414;\n        --dark-2: #131313;\n        --dark-3: #1f1f1f;\n        --dark-4: #2b2b2b;\n          \n        --dark-font-0: #e8e8e8;\n        --dark-font-1: #99a2aa;\n        --dark-font-2: #879199;\n      }\n      \n      body {\n        background-color: #1c2022!important;\n      }\n      // 播放器mini窗口\n      #bofqi.mini-player:before {\n        box-shadow: #000000 0 0 8px;\n      }\n      \n      // 导航栏\n      #internationalHeader.international-header {\n        .mini-type {\n          background: var(--dark-0)!important;\n        }\n        .link {\n          color: var(--dark-font-1)!important;\n        }\n        \n        .nav-user-center { // 右侧用户内容导航\n          .item {\n            .name, .t a {\n              color: var(--dark-font-1)!important;\n            }\n          }\n        }\n        \n        // 搜索框\n        #nav_searchform {\n          background: var(--dark-3)!important;\n          border-color: var(--dark-3)!important;\n          input:focus {\n            color: #ffffff;\n          }\n        }\n        .nav-search-btn { // 搜索按钮\n          background: var(--dark-4);\n        }\n        \n        .bilibili-search-history {\n          background: var(--dark-0)!important;\n          border-color: var(--dark-1)!important;\n          \n          \n          \n          li {\n            &:hover {\n              background-color: var(--dark-2);\n            }\n            a {\n              color: var(--dark-font-1)!important;\n            }\n          }\n        }\n      }\n      \n      // 视频信息\n      #v_desc {\n        .info {\n          color: #879199;\n        }\n      }\n      // 创作团队\n      .members-info .members-info__header {\n        background-color: var(--dark-1);\n        .title {\n          color: #99a2aa;\n        }\n      }\n      // up信息\n      .up-info .btn .b-cd {\n        background: var(--dark-3)!important;\n      }\n      .bili-header-m .nav-menu .nav-mask {\n        background-color: var(--dark-1)!important;\n      }\n      .nav-wrapper .nav-con ul li a {\n        color: var(--dark-font-1)!important;\n      }\n      #viewbox_report .video-title .tit, .media-wrapper > h1,\n       .media-right > *:not(.media-tool-bar),\n      .media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {\n        color: var(--dark-font-0)!important;\n      }\n      #bilibiliPlayer {\n        box-shadow: 0 0 8px var(--dark-1)!important; \n      }\n      #paybar_module {\n        .vip a.btn-pay.active {\n          background-color: var(--dark-1)!important;\n          border: 1px solid var(--dark-3);\n        }\n      }\n      // tags\n      #v_tag {\n        border-color: var(--dark-1)!important;\n        ul li {\n          background-color: var(--dark-1)!important;\n          border-color: var(--dark-1)!important;\n          .tag-info-pane, a, .text {\n            background-color: var(--dark-1)!important;\n            color: var(--dark-font-1)!important;\n         }\n        }\n        .btn-add, .ipt {\n          background-color: var(--dark-2)!important;\n          border-color: var(--dark-1)!important;\n          color: var(--dark-font-1)!important;\n        }\n      }\n      \n      // 弹幕列表\n      .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],\n      .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-history,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-footer,\n      .player-auxiliary-area {\n        background: #191919!important;\n      }\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {\n        background-color: black !important;\n      }\n      .danmaku-info-row {\n        .danmaku-info-danmaku, span {\n          color: var(--dark-font-1)!important;\n        }\n        &.danmaku-info-row-block {\n          opacity: 0.3!important;\n        }\n      }\n      // 弹幕列表管理菜单\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {\n        background-color: var(--dark-3)!important;\n        & > * {\n          border-color:  var(--dark-1)!important;\n        }\n      }\n      \n      \n      .v-wrap .danmaku-wrap {\n        background-color: var(--dark-2)!important;\n      }\n      .bui-collapse-wrap {\n        .bui-collapse-header, .player-auxiliary-filter {\n          background-color: var(--dark-2)!important;\n        }\n      }\n      .bui-collapse .bui-collapse-header, .player-auxiliary-filter {\n        background: var(--dark-2);\n        span {\n          color: var(--dark-font-1);\n        }\n      }\n      \n      // 选集列表\n      #eplist_module, #multi_page, .ep-section-module {\n        background-color: var(--dark-2);\n        .list-wrapper.longlist {\n          padding-right: 6px;\n        }\n        .list-wrapper.simple li {\n          width: 64px;\n        }\n        .list-title, .head-con {\n          h4, h3 {\n            color: var(--dark-font-1);\n          }\n        }\n        .section-title {\n          color: var(--dark-font-1);\n        }\n        \n        .module-box  {\n          li {\n            &:not(.on):not(:hover) {\n              border-color: var(--dark-3);\n              background-color: #232323;\n              a {\n                color: var(--dark-font-1);\n              }\n            }\n            &:not(.on):hover {\n              background-color: #232323;\n            }\n          }\n        }\n        .list-wrapper, .cur-list .list-box, .section-ep-wrapper {\n          &.simple {\n            .ep-item:not(.cursor) {\n              color: var(--dark-font-1);\n              border-color: var(--dark-3);\n              background-color: #232323;\n            }\n          }\n          .ep-item, li {\n            width: auto;\n            margin-right: 5px;\n            color: var(--dark-font-1);\n            a {\n              color: var(--dark-font-1);\n            }\n            &.cursor, & {\n              background-color: #232323;\n            }\n            &.visited, &.watched {\n              color: #757575;\n            }\n            &:hover {\n              background-color: var(--dark-3);\n              color: var(--dark-font-1);\n            }\n          }\n        }\n      }\n      // 播放器工具栏\n      .bilibili-player-video-bottom-area {\n        :before {\n          background: var(--dark-2)!important;\n        }\n      }\n      .bilibili-player-video-sendbar {\n        background-color: transparent!important;\n        .bilibili-player-video-inputbar {\n          background-color: unset!important;\n          .bilibili-player-video-inputbar-wrap {\n            border-color: var(--dark-4)!important;\n            background-color: var(--dark-4);\n          }\n          .bilibili-player-video-danmaku-input {\n            color: var(--dark-font-1)!important;\n          }\n        }\n      }\n      \n      // 交互栏\n      #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {\n        border-color: var(--dark-1)!important;\n        .more-ops-list {\n          background-color: var(--dark-1)!important;\n          border-color: var(--dark-1)!important;\n          box-shadow: unset!important;\n          color: var(--dark-font-1)!important;\n          li:hover {\n            background-color: var(--dark-3)!important;\n          }\n        }\n        .media-desc i {\n          background-color: var(--dark-1);\n        }\n      }\n      .media-tool-bar {\n        .btn-rating {\n          background-color: var(--dark-1);\n          border-color: var(--dark-1);\n        }\n      }\n      \n      // 活动\n      #activity_vote .inside-wrp {\n        border-color: var(--dark-1);\n            background-color: var(--dark-1);\n        .left {\n          color: var(--dark-font-1);\n        }\n      }\n      \n      // 评价\n      #review_module {\n        border-color: var(--dark-1)!important;\n        .review-list .review-item .review-body {\n          background-color: var(--dark-1)!important;\n         .review-header .review-author, .review-title {\n            color: var(--dark-font-1)\n         }\n         .review-content {\n           color: var(--dark-font-1)!important;\n         }\n        }\n      }\n      \n      // 承包榜\n      #sponsor_module {\n        border-color: var(--dark-1)!important;\n        .sponsor-rank-header {\n          h3, .sponsor-rank-tab li {\n            color: var(--dark-font-1)!important;\n          }\n        }\n        .sponsor-rank-item {\n          .sp-right .sp-msg {\n            color: var(--dark-font-1)!important;\n            border-color: var(--dark-1)!important;\n            background-color: var(--dark-1)!important;\n          }\n        }\n      }\n      \n      // 评论区\n      #comment .b-head span{\n        color: var(--dark-font-1);\n      }\n      #comment_module, #comment {\n        border-color: var(--dark-1)!important;\n        .b-head span{\n          color: var(--dark-font-1);\n        }\n        .textarea-container textarea, .textarea-container:hover textarea {\n          background-color: var(--dark-1);\n          border: 1px solid var(--dark-1);\n          color: var(--dark-font-1);\n        }\n        .comment-emoji {\n          border: 1px solid var(--dark-1);\n          background-color: var(--dark-1);\n        }\n        .emoji-box {\n          //background: var(--dark-1);\n          border: 1px solid var(--dark-1);\n          .emoji-wrap {\n            \n          }\n        }\n        .paging-box {\n          .dian, .next, .prev, .tcd-number {\n            color: var(--dark-font-1);\n          }\n        }\n      }\n      \n      .comment-header {\n        border-color: var(--dark-1)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-1)!important;\n        }\n      }\n      .opera-list {\n        background-color: var(--dark-1)!important;\n        border-color: var(--dark-1)!important;\n        box-shadow: unset!important;\n        color: var(--dark-font-1)!important;\n        li:hover {\n          background-color: var(--dark-3)!important;\n        }\n      }\n      .bb-comment {\n        background-color: unset!important;\n        .header-page .result, .header-page a.tcd-number, .header-page span.dian {\n          color: var(--dark-font-1);\n        }\n        .comment-list {\n          .hot-line {\n            border-color: var(--dark-1);\n            span {\n              background: var(--dark-1);\n              color: var(--dark-font-1);\n              a:hover {\n                background: var(--dark-3);\n              }\n            }\n          }\n          .list-item .con {\n            border-color: var(--dark-1)!important;\n            .text {\n              color: var(--dark-font-1);\n            }\n            .info .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-box{\n              .reply-item .reply-con {\n                .user .text-con {\n                  color: var(--dark-font-1);\n                }\n                .info .reply:hover {\n                  background: var(--dark-1);\n                }\n              }\n              .view-more .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n        .paging-box-big {\n          a.tcd-number, a.next, a.prev {\n            color: var(--dark-font-1);\n            background-color: var(--dark-2);\n            border-color: var(--dark-3);\n            &:hover {\n              color: white;\n              background-color: #00a1d6;\n              border-color: var(--dark-3);\n            }\n          }\n          .dian, .dian:hover {\n            color: var(--dark-font-1);\n            background-color: #1c2022;\n            border-color: #1c2022;\n          }\n          .page-jump {\n            input {\n              border-color: var(--dark-3);\n              background-color: var(--dark-2);\n              color: white;\n            }\n          }\n        }\n      }\n      // 右侧视频推荐区\n      #recom_module {\n        .recom-list {\n          .video-title {\n            color: var(--dark-font-0);\n          }\n        }\n        .recom-title, .recom-item .info-wrapper a, .video-title {\n          color: var(--dark-font-0);\n          font-weight: 400;\n        }\n        .expand-more {\n          background-color: var(--dark-1);\n          color: var(--dark-font-1);\n        }\n      }\n      #reco_list {\n        .rec-title,\n        .rec-list .card-box .info .title {\n          color: var(--dark-font-1);\n        }\n        .rec-footer {\n          background-color: var(--dark-1);\n        }\n      }\n      // 番剧剧集信息\n      #seasonlist_module {\n        .series-title {\n          color: var(--dark-font-1);\n        }\n        .ss-list-wrapper .ss-item .ss-info .ss-title {\n          color: var(--dark-font-1);\n        }\n        .expand-more {\n          background-color: var(--dark-1);\n          color: var(--dark-font-1);\n        }\n      }\n      // up信息\n      #v_upinfo .u-info .name .username{\n        color: var(--dark-font-1);\n      }\n      // 直播推荐 \n      #live_recommand_report .pl__card {\n        border-color: var(--dark-1);\n        background-color: var(--dark-1);\n        .pl__info .pl__title {\n          color: var(--dark-font-1);\n        }\n      }\n    " ], [ "\n      html {\n        --dark-0: #101010;\n        --dark-1: #141414;\n        --dark-2: #131313;\n        --dark-3: #1f1f1f;\n        --dark-4: #2b2b2b;\n          \n        --dark-font-0: #e8e8e8;\n        --dark-font-1: #99a2aa;\n        --dark-font-2: #879199;\n      }\n      \n      body {\n        background-color: #1c2022!important;\n      }\n      // 播放器mini窗口\n      #bofqi.mini-player:before {\n        box-shadow: #000000 0 0 8px;\n      }\n      \n      // 导航栏\n      #internationalHeader.international-header {\n        .mini-type {\n          background: var(--dark-0)!important;\n        }\n        .link {\n          color: var(--dark-font-1)!important;\n        }\n        \n        .nav-user-center { // 右侧用户内容导航\n          .item {\n            .name, .t a {\n              color: var(--dark-font-1)!important;\n            }\n          }\n        }\n        \n        // 搜索框\n        #nav_searchform {\n          background: var(--dark-3)!important;\n          border-color: var(--dark-3)!important;\n          input:focus {\n            color: #ffffff;\n          }\n        }\n        .nav-search-btn { // 搜索按钮\n          background: var(--dark-4);\n        }\n        \n        .bilibili-search-history {\n          background: var(--dark-0)!important;\n          border-color: var(--dark-1)!important;\n          \n          \n          \n          li {\n            &:hover {\n              background-color: var(--dark-2);\n            }\n            a {\n              color: var(--dark-font-1)!important;\n            }\n          }\n        }\n      }\n      \n      // 视频信息\n      #v_desc {\n        .info {\n          color: #879199;\n        }\n      }\n      // 创作团队\n      .members-info .members-info__header {\n        background-color: var(--dark-1);\n        .title {\n          color: #99a2aa;\n        }\n      }\n      // up信息\n      .up-info .btn .b-cd {\n        background: var(--dark-3)!important;\n      }\n      .bili-header-m .nav-menu .nav-mask {\n        background-color: var(--dark-1)!important;\n      }\n      .nav-wrapper .nav-con ul li a {\n        color: var(--dark-font-1)!important;\n      }\n      #viewbox_report .video-title .tit, .media-wrapper > h1,\n       .media-right > *:not(.media-tool-bar),\n      .media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {\n        color: var(--dark-font-0)!important;\n      }\n      #bilibiliPlayer {\n        box-shadow: 0 0 8px var(--dark-1)!important; \n      }\n      #paybar_module {\n        .vip a.btn-pay.active {\n          background-color: var(--dark-1)!important;\n          border: 1px solid var(--dark-3);\n        }\n      }\n      // tags\n      #v_tag {\n        border-color: var(--dark-1)!important;\n        ul li {\n          background-color: var(--dark-1)!important;\n          border-color: var(--dark-1)!important;\n          .tag-info-pane, a, .text {\n            background-color: var(--dark-1)!important;\n            color: var(--dark-font-1)!important;\n         }\n        }\n        .btn-add, .ipt {\n          background-color: var(--dark-2)!important;\n          border-color: var(--dark-1)!important;\n          color: var(--dark-font-1)!important;\n        }\n      }\n      \n      // 弹幕列表\n      .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],\n      .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-history,\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-footer,\n      .player-auxiliary-area {\n        background: #191919!important;\n      }\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {\n        background-color: black !important;\n      }\n      .danmaku-info-row {\n        .danmaku-info-danmaku, span {\n          color: var(--dark-font-1)!important;\n        }\n        &.danmaku-info-row-block {\n          opacity: 0.3!important;\n        }\n      }\n      // 弹幕列表管理菜单\n      .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {\n        background-color: var(--dark-3)!important;\n        & > * {\n          border-color:  var(--dark-1)!important;\n        }\n      }\n      \n      \n      .v-wrap .danmaku-wrap {\n        background-color: var(--dark-2)!important;\n      }\n      .bui-collapse-wrap {\n        .bui-collapse-header, .player-auxiliary-filter {\n          background-color: var(--dark-2)!important;\n        }\n      }\n      .bui-collapse .bui-collapse-header, .player-auxiliary-filter {\n        background: var(--dark-2);\n        span {\n          color: var(--dark-font-1);\n        }\n      }\n      \n      // 选集列表\n      #eplist_module, #multi_page, .ep-section-module {\n        background-color: var(--dark-2);\n        .list-wrapper.longlist {\n          padding-right: 6px;\n        }\n        .list-wrapper.simple li {\n          width: 64px;\n        }\n        .list-title, .head-con {\n          h4, h3 {\n            color: var(--dark-font-1);\n          }\n        }\n        .section-title {\n          color: var(--dark-font-1);\n        }\n        \n        .module-box  {\n          li {\n            &:not(.on):not(:hover) {\n              border-color: var(--dark-3);\n              background-color: #232323;\n              a {\n                color: var(--dark-font-1);\n              }\n            }\n            &:not(.on):hover {\n              background-color: #232323;\n            }\n          }\n        }\n        .list-wrapper, .cur-list .list-box, .section-ep-wrapper {\n          &.simple {\n            .ep-item:not(.cursor) {\n              color: var(--dark-font-1);\n              border-color: var(--dark-3);\n              background-color: #232323;\n            }\n          }\n          .ep-item, li {\n            width: auto;\n            margin-right: 5px;\n            color: var(--dark-font-1);\n            a {\n              color: var(--dark-font-1);\n            }\n            &.cursor, & {\n              background-color: #232323;\n            }\n            &.visited, &.watched {\n              color: #757575;\n            }\n            &:hover {\n              background-color: var(--dark-3);\n              color: var(--dark-font-1);\n            }\n          }\n        }\n      }\n      // 播放器工具栏\n      .bilibili-player-video-bottom-area {\n        :before {\n          background: var(--dark-2)!important;\n        }\n      }\n      .bilibili-player-video-sendbar {\n        background-color: transparent!important;\n        .bilibili-player-video-inputbar {\n          background-color: unset!important;\n          .bilibili-player-video-inputbar-wrap {\n            border-color: var(--dark-4)!important;\n            background-color: var(--dark-4);\n          }\n          .bilibili-player-video-danmaku-input {\n            color: var(--dark-font-1)!important;\n          }\n        }\n      }\n      \n      // 交互栏\n      #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {\n        border-color: var(--dark-1)!important;\n        .more-ops-list {\n          background-color: var(--dark-1)!important;\n          border-color: var(--dark-1)!important;\n          box-shadow: unset!important;\n          color: var(--dark-font-1)!important;\n          li:hover {\n            background-color: var(--dark-3)!important;\n          }\n        }\n        .media-desc i {\n          background-color: var(--dark-1);\n        }\n      }\n      .media-tool-bar {\n        .btn-rating {\n          background-color: var(--dark-1);\n          border-color: var(--dark-1);\n        }\n      }\n      \n      // 活动\n      #activity_vote .inside-wrp {\n        border-color: var(--dark-1);\n            background-color: var(--dark-1);\n        .left {\n          color: var(--dark-font-1);\n        }\n      }\n      \n      // 评价\n      #review_module {\n        border-color: var(--dark-1)!important;\n        .review-list .review-item .review-body {\n          background-color: var(--dark-1)!important;\n         .review-header .review-author, .review-title {\n            color: var(--dark-font-1)\n         }\n         .review-content {\n           color: var(--dark-font-1)!important;\n         }\n        }\n      }\n      \n      // 承包榜\n      #sponsor_module {\n        border-color: var(--dark-1)!important;\n        .sponsor-rank-header {\n          h3, .sponsor-rank-tab li {\n            color: var(--dark-font-1)!important;\n          }\n        }\n        .sponsor-rank-item {\n          .sp-right .sp-msg {\n            color: var(--dark-font-1)!important;\n            border-color: var(--dark-1)!important;\n            background-color: var(--dark-1)!important;\n          }\n        }\n      }\n      \n      // 评论区\n      #comment .b-head span{\n        color: var(--dark-font-1);\n      }\n      #comment_module, #comment {\n        border-color: var(--dark-1)!important;\n        .b-head span{\n          color: var(--dark-font-1);\n        }\n        .textarea-container textarea, .textarea-container:hover textarea {\n          background-color: var(--dark-1);\n          border: 1px solid var(--dark-1);\n          color: var(--dark-font-1);\n        }\n        .comment-emoji {\n          border: 1px solid var(--dark-1);\n          background-color: var(--dark-1);\n        }\n        .emoji-box {\n          //background: var(--dark-1);\n          border: 1px solid var(--dark-1);\n          .emoji-wrap {\n            \n          }\n        }\n        .paging-box {\n          .dian, .next, .prev, .tcd-number {\n            color: var(--dark-font-1);\n          }\n        }\n      }\n      \n      .comment-header {\n        border-color: var(--dark-1)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-1)!important;\n        }\n      }\n      .opera-list {\n        background-color: var(--dark-1)!important;\n        border-color: var(--dark-1)!important;\n        box-shadow: unset!important;\n        color: var(--dark-font-1)!important;\n        li:hover {\n          background-color: var(--dark-3)!important;\n        }\n      }\n      .bb-comment {\n        background-color: unset!important;\n        .header-page .result, .header-page a.tcd-number, .header-page span.dian {\n          color: var(--dark-font-1);\n        }\n        .comment-list {\n          .hot-line {\n            border-color: var(--dark-1);\n            span {\n              background: var(--dark-1);\n              color: var(--dark-font-1);\n              a:hover {\n                background: var(--dark-3);\n              }\n            }\n          }\n          .list-item .con {\n            border-color: var(--dark-1)!important;\n            .text {\n              color: var(--dark-font-1);\n            }\n            .info .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-box{\n              .reply-item .reply-con {\n                .user .text-con {\n                  color: var(--dark-font-1);\n                }\n                .info .reply:hover {\n                  background: var(--dark-1);\n                }\n              }\n              .view-more .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n        .paging-box-big {\n          a.tcd-number, a.next, a.prev {\n            color: var(--dark-font-1);\n            background-color: var(--dark-2);\n            border-color: var(--dark-3);\n            &:hover {\n              color: white;\n              background-color: #00a1d6;\n              border-color: var(--dark-3);\n            }\n          }\n          .dian, .dian:hover {\n            color: var(--dark-font-1);\n            background-color: #1c2022;\n            border-color: #1c2022;\n          }\n          .page-jump {\n            input {\n              border-color: var(--dark-3);\n              background-color: var(--dark-2);\n              color: white;\n            }\n          }\n        }\n      }\n      // 右侧视频推荐区\n      #recom_module {\n        .recom-list {\n          .video-title {\n            color: var(--dark-font-0);\n          }\n        }\n        .recom-title, .recom-item .info-wrapper a, .video-title {\n          color: var(--dark-font-0);\n          font-weight: 400;\n        }\n        .expand-more {\n          background-color: var(--dark-1);\n          color: var(--dark-font-1);\n        }\n      }\n      #reco_list {\n        .rec-title,\n        .rec-list .card-box .info .title {\n          color: var(--dark-font-1);\n        }\n        .rec-footer {\n          background-color: var(--dark-1);\n        }\n      }\n      // 番剧剧集信息\n      #seasonlist_module {\n        .series-title {\n          color: var(--dark-font-1);\n        }\n        .ss-list-wrapper .ss-item .ss-info .ss-title {\n          color: var(--dark-font-1);\n        }\n        .expand-more {\n          background-color: var(--dark-1);\n          color: var(--dark-font-1);\n        }\n      }\n      // up信息\n      #v_upinfo .u-info .name .username{\n        color: var(--dark-font-1);\n      }\n      // 直播推荐 \n      #live_recommand_report .pl__card {\n        border-color: var(--dark-1);\n        background-color: var(--dark-1);\n        .pl__info .pl__title {\n          color: var(--dark-font-1);\n        }\n      }\n    " ]), Nt = function() {
            var e = Object(J.d)(Ge.a).attrs({
                class: "bilibili-helper-video-dark-mode-btn"
            })(Ut, function(e) {
                return e.on ? "#fff" : "#fb7299";
            }, function(e) {
                return e.on ? "#fb7299" : "#fff";
            }), n = Object(J.b)(zt);
            return function(t) {
                function i(e) {
                    b()(this, i);
                    var n = v()(this, (i.__proto__ || h()(i)).call(this, e));
                    return n.handleOnClick = function() {
                        var e = n.state.settings.on;
                        n.setState({
                            settings: B()({}, n.state.settings, {
                                on: !e
                            })
                        }), chrome.runtime.sendMessage({
                            command: "setSetting",
                            feature: "videoDarkMode",
                            settings: B()({}, n.state.settings, {
                                on: !e
                            })
                        }), chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "videoDarkMode",
                            label: "videoDarkMode"
                        });
                    }, n.state = {
                        settings: {}
                    }, n.isOldPageOrWatchLater = !!document.querySelector("#__bofqi,.view-later-module, #bangumi_detail"), 
                    n;
                }
                return x()(i, t), D()(i, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.sendMessage({
                            command: "getSetting",
                            feature: "videoDarkMode"
                        }, function(n) {
                            e.setState({
                                settings: n
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.settings.on;
                        return N.a.createElement(N.a.Fragment, null, N.a.createElement(e, {
                            onClick: this.handleOnClick,
                            on: t && !this.isOldPageOrWatchLater
                        }, "夜间模式"), t && !this.isOldPageOrWatchLater && N.a.createElement(n, null));
                    }
                } ]), i;
            }(N.a.Component);
        }, Ft = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoDarkMode",
                    dependencies: [ "videoAnchor" ]
                }));
                return e.load = function(e, n) {
                    var t = U()(e, 1)[0], i = n.on;
                    return new O.a(function(e) {
                        var n = Nt(), r = document.createElement("div");
                        r.setAttribute("class", "bilibili-helper-video-dark-mode"), r.setAttribute("style", "position: static; margin: 0;"), 
                        t.append(r), R.a.render(N.a.createElement(n, {
                            on: i
                        }), r, function() {
                            return e(r);
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Rt = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "videoDarkMode",
                    kind: "video",
                    dependencies: [ "videoAnchor" ],
                    settings: {
                        on: !1,
                        hasUI: !0,
                        title: Object(pn.a)("videoDarkMode_name")
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), Ht = t(32), Bt = t.n(Ht), Vt = function(e) {
            var n = "";
            return [].slice.call(new Uint8Array(e)).forEach(function(e) {
                return n += String.fromCharCode(e);
            }), window.btoa(n);
        }, Wt = {}, Jt = (u = qe()(Ee.a.mark(function e(n, t) {
            var i, r = t.url, a = t.options, o = t.sign, c = t.model, l = t.mine;
            return Ee.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = "", !Wt[o]) {
                        e.next = 5;
                        break;
                    }
                    i = Wt[o], e.next = 8;
                    break;

                  case 5:
                    return e.next = 7, Object(pn.e)(r, a).then(function(e) {
                        return e;
                    }).then(function(e) {
                        return e.arrayBuffer().then(function(e) {
                            return Wt[o] = "data:" + l + ";base64," + Vt(e);
                        });
                    });

                  case 7:
                    i = e.sent;

                  case 8:
                    n.postMessage({
                        command: "returnFetch",
                        data: i,
                        from: "helperProxy",
                        model: c,
                        sign: o
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        })), function(e, n) {
            return u.apply(this, arguments);
        }), Kt = function() {
            var e = qe()(Ee.a.mark(function e(n, t) {
                var i, r = t.url, a = t.options, o = t.sign, c = t.model;
                return Ee.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (c) {
                            e.next = 2;
                            break;
                        }
                        throw "fetch from Model " + c;

                      case 2:
                        return i = new we.a(r, !0), e.abrupt("return", Object(pn.e)(r, a).then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            n.postMessage({
                                command: "returnFetch",
                                data: B()({}, e, {
                                    receipt: i.query
                                }),
                                from: "helperProxy",
                                model: c,
                                sign: o
                            });
                        }));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, void 0);
            }));
            return function(n, t) {
                return e.apply(this, arguments);
            };
        }(), Yt = function() {
            var e = qe()(Ee.a.mark(function e(n, t) {
                var i, r, a, o, c = t.url, l = t.options, s = t.sign, d = t.model;
                return Ee.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (d) {
                            e.next = 2;
                            break;
                        }
                        throw "fetch from Model " + d;

                      case 2:
                        for (o in i = l.body, r = Bt()(l, [ "body" ]), a = new FormData(), i) a.append(o, i[o]);
                        return l.body = a, r.body = a, e.abrupt("return", Object(pn.e)(c, r).then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            n.postMessage({
                                command: "returnFetch",
                                data: B()({}, e, {
                                    receipt: i
                                }),
                                from: "helperProxy",
                                model: d,
                                sign: s
                            });
                        }));

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, void 0);
            }));
            return function(n, t) {
                return e.apply(this, arguments);
            };
        }(), Gt = function(e, n) {
            var t = n.model, i = n.sign;
            e.postMessage({
                command: "returnApp",
                data: {
                    code: 0,
                    data: {
                        connected: !0,
                        version: w.n
                    }
                },
                from: "helperProxy",
                model: t,
                sign: i
            });
        }, Zt = (p = qe()(Ee.a.mark(function e(n, t) {
            var i, r, a;
            return Ee.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = t.detail, r = t.model, a = t.sign, r) {
                        e.next = 3;
                        break;
                    }
                    throw "fetch from Model " + r;

                  case 3:
                    chrome.cookies.get(i, function(e) {
                        n.postMessage({
                            command: "returnCookie",
                            data: e.value,
                            from: "helperProxy",
                            model: r,
                            sign: a
                        });
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        })), function(e, n) {
            return p.apply(this, arguments);
        }), Qt = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "proxyForWebsite",
                    kind: "other",
                    settings: {
                        on: !0,
                        hide: !0,
                        toggle: !1
                    }
                }));
                return e.addListener = function() {
                    chrome.runtime.onConnect.addListener(function(e) {
                        e.onMessage.addListener(function(e, n) {
                            var t = e.command, i = e.data;
                            switch (t) {
                              case "connect":
                                Gt(n, i);
                                break;

                              case "fetch":
                                var r = i.type, a = Bt()(i, [ "type" ]);
                                "json" === r ? Kt(n, a) : "image" === r ? Jt(n, a) : "post" === r && Yt(n, a);
                                break;

                              case "cookie":
                                Zt(n, i);
                            }
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Xt = (t(859), function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "cvImages"
                }));
                return e.load = function(n, t) {
                    var i = e;
                    return t.on ? new O.a(function(e) {
                        he()(".page-container .img-box img").wrap('<div class="bilibili-ct-wrapper"></div>');
                        var t = document.createElement("button");
                        t.innerText = Object(pn.a)("cvImages_UI_downloadBtn"), he()(document).on("mouseenter", ".banner-img-holder", function(e) {
                            e.preventDefault(), i.currentSrc = he()(this)[0].style.backgroundImage.split('"')[1], 
                            he()(this).append(t), he()(t).on("click", function() {
                                i.currentSrc && chrome.runtime.sendMessage({
                                    command: "cvDownloadImage",
                                    src: i.currentSrc,
                                    filename: he()(".title-container h1")[0].innerText + "_封面"
                                });
                            });
                        }), he()(document).on("mouseenter", ".bilibili-ct-wrapper", function(e) {
                            e.preventDefault();
                            var n = he()(this).children("img");
                            i.currentSrc = "https:" + n.attr("src");
                            var r = /.(jpg|jpeg|gif|webp)/.exec(i.currentSrc);
                            he()(this).append(t), he()(this).css({
                                width: "auto",
                                height: n.height()
                            });
                            var a = he()(this).next("figcaption")[0].innerText;
                            he()(t).on("click", function() {
                                i.currentSrc && chrome.runtime.sendMessage({
                                    command: "cvDownloadImage",
                                    src: i.currentSrc,
                                    filename: a || null,
                                    extension: r ? r[1] : "jpg"
                                });
                            });
                        }), he()(document).on("mouseleave", ".bilibili-ct-wrapper, .banner-img-holder", function(e) {
                            e.preventDefault(), he()(this).children("button").remove();
                        }), e(n);
                    }) : O.a.resolve();
                }, e.currentSrc = null, e;
            }
            return x()(n, e), n;
        }(te.a)), $t = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "cvImages",
                    kind: "cv",
                    settings: {
                        on: !0,
                        hasUI: !0,
                        title: Object(pn.a)("cvImages_name")
                    }
                }));
                return e.getMineStr = function(e) {
                    switch (e) {
                      case "jpg":
                      case "jpeg":
                      case "webp":
                        return "image/jpeg";

                      case "gif":
                        return "image/gif";
                    }
                }, e.addListener = function() {
                    chrome.runtime.onMessage.addListener(function(n) {
                        if ("cvDownloadImage" === n.command) if (e.image.src = n.src, "gif" === n.extension) chrome.downloads.download({
                            saveAs: !0,
                            url: n.src,
                            filename: (n.filename || Date.now()) + ".gif"
                        }); else {
                            var t = e.getMineStr(n.extension);
                            e.getData(n.src, t).then(function(t) {
                                chrome.downloads.download({
                                    saveAs: !0,
                                    url: t,
                                    filename: (n.filename || Date.now()) + "." + e.getMineStr(n.extension)
                                });
                            });
                        }
                        return !0;
                    });
                }, e.getData = function(n, t) {
                    return new O.a(function(i) {
                        var r = e;
                        e.imageMap[n] ? i(e.imageMap[n]) : e.image.onload = function() {
                            r.canvas.width = this.width, r.canvas.height = this.height, r.canvas.getContext("2d").drawImage(this, 0, 0), 
                            r.imageMap[n] = r.canvas.toDataURL(t), i(r.imageMap[n]);
                        };
                    });
                }, e.imageMap = {}, e.canvas = document.createElement("canvas"), e.image = new Image(), 
                e;
            }
            return x()(n, e), n;
        }(k.a), ei = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "notAutoPlay"
                }));
                return e.load = function(e, n) {
                    return n.on ? new O.a(function(e) {
                        var n = document.querySelector("body"), t = document.createElement("script");
                        t.innerHTML = "\n                const bilibiliNotAutoPlayInterval = setInterval(() => {\n                    Array.from(document.querySelectorAll('.vc-video')).map((o) => {\n                        if (o.getBoundingClientRect().top === 0) return;\n                        o.getBoundingClientRect = () => ({top: 0});\n                    });\n                }, 1000);\n            ", 
                        n.appendChild(t), e();
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), ni = function(e) {
            function n() {
                return b()(this, n), v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "notAutoPlay",
                    kind: "tbilibili",
                    settings: {
                        on: !0,
                        hasUI: !0,
                        title: Object(pn.a)("notAutoPlay_name")
                    }
                }));
            }
            return x()(n, e), n;
        }(k.a), ti = t(297), ii = t.n(ti), ri = "https://api.live.bilibili.com/relation/v1/Feed/getList", ai = W()([ "\n      margin: 9px 0 9px 10px;\n      max-height: 258px;\n      overflow: auto;\n      & .ReactVirtualized__List{\n        outline: none;\n        ::-webkit-scrollbar {\n          display: none;\n        }\n      }\n    " ], [ "\n      margin: 9px 0 9px 10px;\n      max-height: 258px;\n      overflow: auto;\n      & .ReactVirtualized__List{\n        outline: none;\n        ::-webkit-scrollbar {\n          display: none;\n        }\n      }\n    " ]), oi = W()([ "\n      & > * {\n        margin-bottom: 1px;\n      }\n      &:last-of-type > * {\n        margin-bottom: 0;\n      }\n    " ], [ "\n      & > * {\n        margin-bottom: 1px;\n      }\n      &:last-of-type > * {\n        margin-bottom: 0;\n      }\n    " ]), ci = W()([ "\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      cursor: pointer;\n      &:hover {\n        .feed-img {\n          filter: grayscale(0) brightness(0.8);\n          transform: scale(1);\n        }\n      }\n    " ], [ "\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      cursor: pointer;\n      &:hover {\n        .feed-img {\n          filter: grayscale(0) brightness(0.8);\n          transform: scale(1);\n        }\n      }\n    " ]), li = W()([ "\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      top: 3px;\n      left: 3px;\n      border-radius: 50%;\n      border: 1px solid #e8e6e6;\n      box-sizing: border-box;\n      cursor: pointer;\n    " ], [ "\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      top: 3px;\n      left: 3px;\n      border-radius: 50%;\n      border: 1px solid #e8e6e6;\n      box-sizing: border-box;\n      cursor: pointer;\n    " ]), si = W()([ "\n      width: 100%;;\n      height: 85px;\n      border-radius: 3px;\n      background-size: 100% auto;\n      background-position: center;\n      background-color: #eee;\n      filter: grayscale(0.5) brightness(0.3);\n      transition: filter .3s, transform .3s;\n    " ], [ "\n      width: 100%;;\n      height: 85px;\n      border-radius: 3px;\n      background-size: 100% auto;\n      background-position: center;\n      background-color: #eee;\n      filter: grayscale(0.5) brightness(0.3);\n      transition: filter .3s, transform .3s;\n    " ]), di = W()([ "\n      position: absolute;\n      top: 3px;\n      left: 39px;\n      margin: 0;\n      padding: 0 4px 0 0;\n      border-radius: 3px;\n      font-size: 12px;\n      font-weight: normal;\n      transform: scale(0.8);\n      transform-origin: left;\n      //background-color: #ececec;\n      color: #eee;\n    " ], [ "\n      position: absolute;\n      top: 3px;\n      left: 39px;\n      margin: 0;\n      padding: 0 4px 0 0;\n      border-radius: 3px;\n      font-size: 12px;\n      font-weight: normal;\n      transform: scale(0.8);\n      transform-origin: left;\n      //background-color: #ececec;\n      color: #eee;\n    " ]), ui = W()([ "\n      max-width: 182px;\n      position: absolute;\n      left: 7px;\n      bottom: 5px;\n      margin: 0;\n      padding: 0 4px 0 0;\n      border-radius: 3px;\n      font-size: 12px;\n      font-weight: normal;\n      transform: scale(0.8);\n      transform-origin: left;\n      //background-color: #ececec;\n      color: #eee;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      pointer-events: none;\n    " ], [ "\n      max-width: 182px;\n      position: absolute;\n      left: 7px;\n      bottom: 5px;\n      margin: 0;\n      padding: 0 4px 0 0;\n      border-radius: 3px;\n      font-size: 12px;\n      font-weight: normal;\n      transform: scale(0.8);\n      transform-origin: left;\n      //background-color: #ececec;\n      color: #eee;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      pointer-events: none;\n    " ]), pi = W()([ "\n      margin: 0 5px 0 0;\n      padding: 0 2px;\n      font-size: 10px;\n      border-radius: 3px;\n      background-color: ", ";\n      color: #fff;\n    " ], [ "\n      margin: 0 5px 0 0;\n      padding: 0 2px;\n      font-size: 10px;\n      border-radius: 3px;\n      background-color: ", ";\n      color: #fff;\n    " ]), mi = function() {
            var e = J.d.div.attrs({
                className: "feeds-upper-container"
            })(ai), n = J.d.div.attrs({
                className: function(e) {
                    return e.isNew ? "is-new" : "";
                }
            })(oi), t = J.d.div(ci), i = J.d.img(li), r = J.d.div.attrs({
                className: "feed-img"
            })(si), a = J.d.h6(di), o = J.d.h6(ui), c = J.d.span(pi, Y.a.color("bilibili-pink"));
            return function(l) {
                function s(e) {
                    b()(this, s);
                    var l = v()(this, (s.__proto__ || h()(s)).call(this, e));
                    return l.renderLine = function(e) {
                        var s = e.index, d = e.style, u = l.state.feedList[s], p = u.cover_from_user, m = u.face, h = u.link, f = u.roomname, b = u.uname, g = u.uid, v = s < l.state.newCounter;
                        return N.a.createElement(n, {
                            key: g,
                            style: d,
                            isNew: v
                        }, N.a.createElement(t, null, N.a.createElement(r, {
                            style: {
                                backgroundImage: "url(" + p + ")"
                            },
                            onClick: function() {
                                return Object(w.d)(h);
                            }
                        }), N.a.createElement(i, {
                            src: m,
                            onClick: function() {
                                return Object(w.d)(h);
                            }
                        }), N.a.createElement(a, null, b), N.a.createElement(o, null, v ? N.a.createElement(c, null, "NEW") : null, f)));
                    }, l.state = {
                        feedList: [],
                        newCounter: 0
                    }, l;
                }
                return x()(s, l), D()(s, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.sendMessage({
                            command: "getLiveUpperDynamicList"
                        }, function(n) {
                            var t = n.feedList, i = n.newCounter;
                            e.setState({
                                feedList: t,
                                newCounter: i
                            }), chrome.runtime.sendMessage({
                                command: "updateLastLiveUpList"
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this.state.feedList;
                        return n && n.length > 0 ? N.a.createElement(e, null, N.a.createElement(K.a, {
                            width: 200,
                            height: 255,
                            rowCount: this.state.feedList.length,
                            rowHeight: 86,
                            rowRenderer: this.renderLine
                        })) : null;
                    }
                } ]), s;
            }(N.a.Component);
        }, hi = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveUpCheck",
                    dependencies: [ "popupAnchor" ]
                }));
                return e.load = function(n, t) {
                    var i = U()(n, 1)[0];
                    return t.on ? new O.a(function(n) {
                        var r = mi(), a = A()(t.options, function(e) {
                            return "dynamicCheckBox" === e.key;
                        });
                        if (chrome.browserAction.setBadgeText({
                            text: ""
                        }), a.on) {
                            var o = document.createElement("div");
                            o.setAttribute("class", "bilibili-helper-live-up-check-container"), i.appendChild(o), 
                            R.a.render(N.a.createElement(r, {
                                ref: function(n) {
                                    return e.container = n;
                                }
                            }), o, function() {
                                return n(e.container);
                            });
                        } else n(null);
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), fi = 1, bi = 100, gi = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveUpCheck",
                    kind: "popup",
                    permissions: [ "login", "notifications" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("liveUpCheck_name"),
                        type: "checkbox",
                        description: Object(w.a)("liveUpCheck_description", [ fi ]),
                        hasUI: !0,
                        options: [ {
                            title: Object(w.a)("liveUpCheck_options_notification"),
                            key: "notification",
                            on: !0
                        }, {
                            title: Object(w.a)("liveUpCheck_options_dynamicCheckBox"),
                            key: "dynamicCheckBox",
                            on: !0,
                            description: Object(w.a)("liveUpCheck_options_dynamicCheckBox_description", [ bi ])
                        } ]
                    }
                }));
                return e.launch = function() {
                    e.currentList = [], e.lastList = [], e.newCounter = 0, chrome.alarms.create("liveUpCheck", {
                        periodInMinutes: fi
                    }), e.initList(), e.hasLaunched = !0;
                }, e.pause = function() {
                    e.currentList = [], e.lastList = [], e.newCounter = 0, chrome.alarms.clear("liveUpCheck"), 
                    e.hasLaunched = !1;
                }, e.addListener = function() {
                    chrome.alarms.onAlarm.addListener(function(n) {
                        switch (n.name) {
                          case "liveUpCheck":
                            e.checkNew();
                        }
                        return !0;
                    }), chrome.notifications.onButtonClicked.addListener(function(n, t) {
                        e.notifyList[n] && 0 === t && (chrome.notifications.clear(n), chrome.tabs.create({
                            url: e.notifyList[n]
                        }), delete e.notifyList[n]);
                    }), chrome.runtime.onMessage.addListener(function(n, t, i) {
                        return "getLiveUpperDynamicList" === n.command ? i({
                            feedList: e.currentList,
                            newCounter: e.newCounter
                        }) : "updateLastLiveUpList" === n.command && (e.newCounter = 0), !0;
                    });
                }, e.permissionHandleLogin = function(n) {
                    n ? !e.hasLaunched && e.launch() : e.pause();
                }, e.createRoomLink = function(e) {
                    return "https://live.bilibili.com/" + e;
                }, e.sendNotification = function(n) {
                    var t = A()(e.settings.options, {
                        key: "notification"
                    });
                    t && t.on && E()(n, function(n) {
                        var t = n.room_id, i = n.uname, r = n.title, a = n.cover_from_user;
                        Object(w.c)("bilibili-helper-live-up-check" + Math.random(), {
                            type: "basic",
                            iconUrl: a || Object(w.h)("/statics/imgs/cat.svg"),
                            title: Object(w.a)("followingLiveUpdateMessage", [ i ]),
                            message: "" + r,
                            buttons: [ {
                                title: Object(w.a)("extensionNotificationWatch")
                            } ]
                        }, function(n) {
                            e.notifyList[n] = e.createRoomLink(t);
                        });
                    });
                }, e.hasLaunched = !1, e.notifyList = {}, e;
            }
            return x()(n, e), D()(n, [ {
                key: "initList",
                value: function() {
                    this.getList(this.currentList);
                }
            }, {
                key: "checkNew",
                value: function() {
                    var e = this;
                    this.getList(this.lastList).then(function() {
                        var n = e.getDifferent(e.currentList, e.lastList);
                        e.newCounter > 0 && (e.sendNotification(n.slice(0, e.newCounter)), e.currentList = n), 
                        e.lastList = [];
                    });
                }
            }, {
                key: "getDifferent",
                value: function(e, n) {
                    var t = [], i = [], r = 0;
                    return n.forEach(function(a, o) {
                        var c = a.uid, l = !1;
                        e.forEach(function(e) {
                            var n = e.uid;
                            c === n && (l = !0);
                        }), l ? i.push(n[o]) : (t.push(n[o]), r += 1);
                    }), this.newCounter = r, t.concat(i);
                }
            }, {
                key: "getList",
                value: function(e) {
                    var n = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return Object(w.e)(ri + "?page=" + t + "&page_size=10").then(function(e) {
                        return e.json();
                    }).then(function(i) {
                        var r = i.code, a = i.data, o = a.rooms, c = a.count, l = i.message;
                        if (0 === r) {
                            if (e.splice.apply(e, [ 0, 0 ].concat(ii()(o))), e.length < c) return n.getList(e, t + 1);
                        } else console.error(l);
                    });
                }
            } ]), n;
        }(k.a), vi = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "showDisabledVideo"
                }));
                return e.addListener = function() {
                    chrome.runtime.onMessage.addListener(function(n, t, i) {
                        return "showDisabledVideoURLRequest" === n.command && n.data && 0 === n.data.code && (e.dealWithVideoList(n.data.data.medias), 
                        i(!0)), !0;
                    });
                }, e.load = function(n, t) {
                    return t.on ? new O.a(function(t) {
                        e.interval(".fav-video-list").then(function() {
                            chrome.runtime.sendMessage({
                                command: "showDisabledVideoDOMInitialized"
                            });
                        }), t(n);
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), D()(n, [ {
                key: "dealWithVideoList",
                value: function(e) {
                    e.forEach(function(e) {
                        if (9 === e.attr || 1 === e.attr) {
                            var n = e.id, t = e.cover, i = void 0 === t ? "" : t, r = e.title, a = void 0 === r ? "" : r, o = e.intro, c = void 0 === o ? "" : o, l = e.pages, s = void 0 === l ? [] : l, d = document.querySelector('.small-item.disabled[data-aid="' + n + '"]');
                            d.classList.remove("disabled"), i || i.match("be27fd62c99036dce67efface486fb0a88ffed06") || (d.querySelector("img[alt=已失效视频]").src = i);
                            var u = d.querySelector("a[title=已失效视频]");
                            u && "已失效视频" === a && s.length > 0 && "" !== s[0].title ? u.textContent = s[0].title : u && c && (u.textContent = c), 
                            u && c && (u.title = c), d.querySelector(".disabled-cover").setAttribute("style", "display: block;");
                        }
                    });
                }
            } ]), n;
        }(te.a), yi = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "showDisabledVideo",
                    kind: "videoList",
                    settings: {
                        on: !0,
                        title: Object(pn.a)("showDisabledVideo_name"),
                        hasUI: !0
                    }
                }));
                return e.addListener = function() {
                    chrome.webRequest.onBeforeSendHeaders.addListener(function(n) {
                        var t = n.tabId, i = n.initiator, r = n.requestHeaders, a = !Ue()(A()(r, function(e) {
                            var n = e.name, t = e.value;
                            return "From" === n && "bilibili-helper" === t;
                        }));
                        if (!/^chrome-extension:\/\//.test(i) && !a) {
                            var o = new we.a(n.url, "", !0), c = o.query;
                            if (!c || !c.requestFrom) {
                                var l = e.messageStore.createData(t);
                                Object(pn.e)(o.href).then(function(e) {
                                    return e.json();
                                }).then(function(n) {
                                    l.queue.push({
                                        command: "showDisabledVideoURLRequest",
                                        data: n
                                    }), e.messageStore.dealWith(t);
                                });
                            }
                        }
                    }, {
                        urls: [ "*://api.bilibili.com/medialist/gateway/base/spaceDetail?*" ]
                    }, [ "requestHeaders" ]);
                }, e.messageStore = new ze.a("showDisabledVideoDOMInitialized"), e;
            }
            return x()(n, e), n;
        }(k.a), xi = t(185), ki = W()([ "\n      position: static;\n      right: 230px;\n      top: 1px;\n      width: max-content;\n      height: 22px;\n      line-height: 21px;\n      border-radius: 4px;\n      button {\n        display: inline-block;\n        padding: 0 5px;\n        vertical-align: middle;\n        font-weight: normal;\n        border-radius: 4px;\n        border: 1px solid ", ";\n        background-color: white;\n        color: ", ";\n        cursor: pointer;\n        transition: all 0.3s;\n        \n      }\n      &.on button, & button:hover {\n        background-color: ", ";\n        color: white;\n      }\n    " ], [ "\n      position: static;\n      right: 230px;\n      top: 1px;\n      width: max-content;\n      height: 22px;\n      line-height: 21px;\n      border-radius: 4px;\n      button {\n        display: inline-block;\n        padding: 0 5px;\n        vertical-align: middle;\n        font-weight: normal;\n        border-radius: 4px;\n        border: 1px solid ", ";\n        background-color: white;\n        color: ", ";\n        cursor: pointer;\n        transition: all 0.3s;\n        \n      }\n      &.on button, & button:hover {\n        background-color: ", ";\n        color: white;\n      }\n    " ]), wi = xi.a.color, _i = function() {
            var e = Object(J.d)(Ge.a).attrs({
                class: "bilibili-helper-pip-btn"
            })(ki, wi("bilibili-blue"), wi("bilibili-blue"), wi("bilibili-blue"));
            return function(n) {
                function t(e) {
                    b()(this, t);
                    var n = v()(this, (t.__proto__ || h()(t)).call(this, e));
                    return n.addListener = function(e) {
                        if (e && e.addEventListener) {
                            var t = n;
                            e.removeEventListener("enterpictureinpicture", null), e.removeEventListener("leavepictureinpicture", null), 
                            e.addEventListener("ended", function() {
                                document.exitPictureInPicture(), t.isEnd = !0;
                            }), e.addEventListener("loadedmetadata", function() {
                                t.state.inPIP && t.handleOnClick(!0);
                            }), e.addEventListener("enterpictureinpicture", function() {
                                t.setState({
                                    inPIP: !0
                                });
                            }), e.addEventListener("leavepictureinpicture", function() {
                                var e = this;
                                t.setState({
                                    inPIP: !1
                                }, function() {
                                    t.isEnd || e.play();
                                });
                            });
                        }
                    }, n.handleOnClick = function() {
                        n.video || (n.video = document.querySelector(".bilibili-live-player-video video"), 
                        n.addListener(n.video)), n.video && n.video.requestPictureInPicture && (n.state.inPIP ? n.state.inPIP && document.exitPictureInPicture().then(function() {
                            n.setState({
                                inPIP: !1
                            }, function() {
                                return n.video.play();
                            });
                        }).catch(function(e) {
                            console.error(e), n.setState({
                                inPIP: !1
                            });
                        }) : n.video.requestPictureInPicture().then(function() {
                            n.setState({
                                inPIP: !0
                            }, function() {
                                return n.video.play();
                            });
                        }), chrome.runtime.sendMessage({
                            command: "setGAEvent",
                            action: "click",
                            category: "Live PIP",
                            label: "Live PIP"
                        }));
                    }, n.state = {
                        inPIP: !1
                    }, n.video = null, n.isEnd = !1, n;
                }
                return x()(t, n), D()(t, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.video = document.querySelector(".bilibili-live-player-video video"), this.addListener(this.video), 
                        document.querySelector(".bilibili-live-player-video").addEventListener("DOMNodeInserted", function(n) {
                            "video" === n.target.localName && e.video !== n.target && (e.video = n.target, e.addListener(e.video), 
                            e.isEnd = !1);
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this;
                        return N.a.createElement(e, {
                            className: [ this.state.inPIP ? "on" : null ],
                            title: Object(w.a)("livePictureInPicture_UI_buttonTitle"),
                            onClick: function() {
                                return n.handleOnClick();
                            },
                            on: this.state.inPIP
                        }, Object(w.a)("livePictureInPicture_name"));
                    }
                } ]), t;
            }(N.a.Component);
        }, Si = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "livePictureInPicture"
                }));
                return e.load = function(n, t) {
                    return new O.a(function(n) {
                        if (!t.on) return n();
                        var i = _i();
                        e.interval(".room-info-down-row .attention-btn-ctnr", 2e3).then(function(e) {
                            var r = document.createElement("div");
                            r.setAttribute("class", "bilibili-helper-live-pip-wrapper"), r.setAttribute("style", "display: inline-block; float: left; margin-right: 7px;"), 
                            e && e.appendChild(r), R.a.render(N.a.createElement(i, {
                                settings: t
                            }), r, n);
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Ci = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "livePictureInPicture",
                    kind: "live",
                    permissions: [ "pip" ],
                    settings: {
                        on: !0,
                        title: Object(pn.a)("livePictureInPicture_name") + " (PIP)",
                        hasUI: !0
                    }
                }));
                return e.launch = function() {
                    document.pictureInPictureEnabled ? (e.settings.on = !0, e.setSetting(e.settings)) : e.pause();
                }, e.pause = function() {
                    e.settings.on = !1, e.setSetting(e.settings);
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Oi = {
            getStatus: "https://api.bilibili.com/x/vip/privilege/my",
            receive: "https://api.bilibili.com/x/vip/privilege/receive"
        }, Li = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "popup"
                }));
                return e.load = function(e, n) {
                    return n.on ? new O.a(function(e) {
                        chrome.runtime.sendMessage({
                            command: "checkVipPrivilegeStatus"
                        }, function(e) {
                            e && e.length && (window.onmessage = function(e) {
                                e.data && "receiveVIPPrivilegeSuccessfully" === e.data.command && chrome.runtime.sendMessage({
                                    command: "receiveVIPPrivilegeSuccessfully"
                                });
                            }, chrome.runtime.sendMessage({
                                command: "getCookie",
                                options: {
                                    url: "http://www.bilibili.com",
                                    name: "bili_jct"
                                }
                            }, function(n) {
                                var t = document.createElement("script");
                                t.setAttribute("type", "text/javascript");
                                var i = "const fetchObjects = [];";
                                e.forEach(function(e) {
                                    i += '\n                            fetchObjects.push(fetch("' + Oi.receive + "\", {\n                                method: 'post',\n                                body: 'type=" + e + "&csrf=" + n.value + "&requestFrom=bilibili-helper',\n                                credentials: 'include',\n                                mode: 'cors',\n                                headers: {'Content-Type': 'application/x-www-form-urlencoded'},\n                            })\n                            .then(res => {\n                                return Promise.resolve(res.code === 0);\n                            }).catch(console.error));\n                            ";
                                }), i += "\n                        Promise.all(fetchObjects).then((res) => {\n                            const resCounter = res.reduce((sum, result) => {\n                                if (result) sum += 1;\n                                return sum;\n                            }, 0);\n                            if (resCounter === " + e.length + ") {\n                                window.postMessage({command: 'receiveVIPPrivilegeSuccessfully'}, '*');\n                            }\n                        });\n                        ", 
                                t.innerHTML = i, document.body.appendChild(t), setTimeout(function() {
                                    t.remove();
                                }, 5e3);
                            }));
                        }), e();
                    }) : O.a.resolve();
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Di = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "autoTakeVipPrivilege",
                    kind: "vipPrivilege",
                    permissions: [ "login" ],
                    settings: {
                        on: !0,
                        title: Object(w.a)("autoTakeVipPrivilege_name"),
                        type: "checkbox",
                        hasUI: !0,
                        options: [ {
                            on: !0,
                            key: "notification",
                            title: Object(w.a)("autoTakeVipPrivilege_notification"),
                            description: Object(w.a)("autoTakeVipPrivilege_notification_description")
                        } ]
                    }
                }));
                return e.launch = function() {
                    e.addLaunchedListener();
                }, e.pause = function() {
                    e.removeLaunchedListener();
                }, e.messageListener = function(n, t, i) {
                    if ("checkVipPrivilegeStatus" === n.command) e.request().then(function(e) {
                        i(e);
                    }); else if ("receiveVIPPrivilegeSuccessfully" === n.command) {
                        var r = _.find(e.settings.options, {
                            key: "notification"
                        });
                        r && r.on && Object(w.c)("bilibili-helper-autoTakeVipPrivilege", {
                            type: "basic",
                            iconUrl: Object(w.h)("/statics/imgs/cat.svg"),
                            title: Object(w.a)("extensionNotificationTitle"),
                            message: Object(w.a)("autoTakeVipPrivilege_notification_successfully"),
                            buttons: []
                        });
                    }
                    return !0;
                }, e.addLaunchedListener = function() {
                    chrome.runtime.onMessage.addListener(e.messageListener);
                }, e.removeLaunchedListener = function() {
                    chrome.runtime.onMessage.removeListener(e.messageListener);
                }, e.checkout = function() {
                    return new O.a(function(n, t) {
                        e.store = {
                            day: e.getTodayDate()
                        }, Object(w.e)(Oi.getStatus, {
                            credentials: "include",
                            mode: "cors"
                        }).then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            0 === e.code && e.data && e.data.list ? n(e.data.list.map(function(e) {
                                return 1 !== e.state ? e.type : -1;
                            }).reduce(function(e, n) {
                                return -1 !== n && e.push(n), e;
                            }, [])) : t("获取会员福利状态数据失败");
                        });
                    });
                }, e.request = function() {
                    return chrome.extension.inIncognitoContext ? O.a.reject(e.name + ": 请退出隐私模式") : (e.store || {}).day !== e.getTodayDate() && e.settings.on ? e.checkout() : O.a.reject(e.name + ":今天已经检查过了");
                }, e;
            }
            return x()(n, e), n;
        }(k.a), Mi = t(457), Ai = t.n(Mi), Ii = t(458), Ei = t.n(Ii), ji = t(356), qi = t.n(ji), Pi = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveReplayDownload"
                }));
                return e.load = function(n, t) {
                    return new O.a(function(n) {
                        if (!t.on) return n();
                        e.interval("#sections-vm .room-feed .tabs", 1e3).then(function(n) {
                            new MutationObserver(function(n) {
                                n.forEach(function(n) {
                                    "直播回放" === n.target.textContent && e.interval(".live-record-list-cntr", 300).then(function(e) {
                                        qi()(e.querySelectorAll(".card")).forEach(function(e) {
                                            var n = e.querySelector("a").href;
                                            if (n) {
                                                var t = document.createElement("div");
                                                t.classList.add("record-download"), t.setAttribute("style", "display:flex;flex-wrap:wrap;margin-top:6px;");
                                                var i = n.match(/live.bilibili.com\/record\/(.+)/);
                                                if (i) {
                                                    var r = e.querySelector(".record-title").textContent, a = document.createElement("button");
                                                    a.innerText = "点击获取下载数据", a.setAttribute("style", "width:100%;height:30px;border-radius:4px;border-color:#eef1f5;color:#333;cursor:pointer;font-size:12px;"), 
                                                    a.addEventListener("click", function() {
                                                        chrome.runtime.sendMessage({
                                                            command: "setGAEvent",
                                                            action: "click",
                                                            category: "Live record download",
                                                            label: "Live record download"
                                                        }), a.innerText = "数据获取中", chrome.runtime.sendMessage({
                                                            command: "getLiveRecord",
                                                            rid: i[1],
                                                            title: r
                                                        }, function(e) {
                                                            e ? (a.remove(), e.list.forEach(function(e, n) {
                                                                var i = document.createElement("a");
                                                                i.setAttribute("style", "display:inline-block;min-width:20px;font-size:12px;padding:6px;border:1px solid #eee;border-radius:4px;color:#7a7a7b;flex-shrink:0;margin-right:" + (Ei()((n + 1) / 5) ? 0 : 9) + "px;margin-bottom:9px;text-align:center;"), 
                                                                i.setAttribute("download", ""), i.setAttribute("target", "__blank"), i.setAttribute("referrerPolicy", "unsafe-url"), 
                                                                i.href = e.url, i.innerText = "" + (n + 1), t.appendChild(i);
                                                            })) : a.innerText = "数据获取失败";
                                                        });
                                                    }), e.appendChild(t), t.appendChild(a);
                                                }
                                            }
                                        });
                                    });
                                });
                            }).observe(n, {
                                attributes: !0,
                                subtree: !0
                            });
                        });
                    });
                }, e;
            }
            return x()(n, e), n;
        }(te.a), Ti = {
            getLiveRecord: "https://api.live.bilibili.com/xlive/web-room/v1/record/getLiveRecordUrl"
        }, Ui = function(e) {
            function n() {
                b()(this, n);
                var e = v()(this, (n.__proto__ || h()(n)).call(this, {
                    name: "liveReplayDownload",
                    kind: "live",
                    permissions: [ "downloads" ],
                    settings: {
                        on: !0,
                        title: "直播回放视频下载",
                        hasUI: !0
                    }
                }));
                return e.listener = function(n, t, i) {
                    return "getLiveRecord" === n.command && n.rid && (e.cache.has(n.rid) ? i(e.cache.get(n.rid)) : fetch(Ti.getLiveRecord + "?rid=" + n.rid + "&platform=html5&requestFrom=bilibili-helper").then(function(e) {
                        return e.json();
                    }).then(function(t) {
                        0 === t.code ? (e.cache.set(n.rid, t.data), t.data.list.forEach(function(i, r) {
                            var a = new we.a(i.url, "", !0);
                            t.data.list.length > 1 ? e.downloadFilenames[a.pathname] = n.title + "_" + (r + 1) : e.downloadFilenames[a.pathname] = n.title;
                        }), i(t.data)) : i(!1);
                    })), !0;
                }, e.renameListener = function(n) {
                    var t = n.responseHeaders, i = n.initiator, r = n.url;
                    if (!/^chrome-extension:\/\//.test(i)) {
                        var a = new we.a(r, "", !0), o = r.query;
                        if (!o || !o.requestFrom) {
                            var c = e.downloadFilenames[a.pathname];
                            if (c) {
                                c = c.replace(/[|"*?:<>]/g, "_");
                                var l = A()(t, function(e) {
                                    return "Content-Disposition" === e.name;
                                }), s = ('attachment; filename="' + encodeURIComponent(c) + ".flv\"; filename*=utf-8' '" + encodeURIComponent(c) + ".flv").replace("/", "%2f");
                                l ? l.value = s : t.push({
                                    name: "Content-Disposition",
                                    value: s
                                });
                            }
                            return {
                                responseHeaders: t
                            };
                        }
                    }
                }, e.launch = function() {
                    chrome.runtime.onMessage.addListener(e.listener), chrome.webRequest.onHeadersReceived.addListener(e.renameListener, {
                        urls: [ "*://*.acgvideo.com/livechunks/*" ]
                    }, [ "responseHeaders", "blocking" ]);
                }, e.pause = function() {
                    chrome.runtime.onMessage.removeListener(e.listener), chrome.webRequest.onHeadersReceived.removeListener(e.renameListener);
                }, e.cache = new Ai.a(), e.downloadFilenames = {}, e;
            }
            return x()(n, e), n;
        }(k.a);
        t.d(n, "a", function() {
            return zi;
        }), t.d(n, "b", function() {
            return Ni;
        });
        var zi = {
            Background: S,
            Debug: Pe,
            PopupAnchor: un,
            Treasure: Me,
            Menu: Sn,
            GoogleAnalytics: Ae,
            VideoAnchor: pe,
            Danmu: on,
            DynamicCheck: ae,
            ChatFilter: qn,
            VideoDownload: st,
            DoSign: be,
            PictureInPicture: mt,
            VideoWiden: ft,
            VideoSubtitleDownload: wt,
            VersionManager: St,
            Silver2coin: Ot,
            QuickSearch: Lt,
            VideoHideDanmu: Mt,
            LiveChatMode: Tt,
            VideoDarkMode: Rt,
            ProxyForWebsite: Qt,
            CvImages: $t,
            NotAutoPlay: ni,
            LiveUpCheck: gi,
            ShowDisabledVideo: yi,
            LivePictureInPicture: Ci,
            AutoTakeVipPrivilege: Di,
            LiveReplayDownload: Ui
        }, Ni = {
            PopupAnchorUI: dn,
            TreasureUI: De,
            MenuUI: _n,
            VideoAnchorUI: ue,
            DanmuUI: an,
            DynamicCheckUI: ie,
            ChatFilterUI: jn,
            VideoDownloadUI: lt,
            PictureInPictureUI: pt,
            VideoWidenUI: ht,
            VideoSubtitleDownloadUI: kt,
            VideoHideDanmuUI: Dt,
            LiveChatModeUI: Pt,
            VideoDarkModeUI: Ft,
            CvImagesUI: Xt,
            NotAutoPlayUI: ei,
            LiveUpCheckUI: hi,
            ShowDisabledVideoUI: vi,
            LivePictureInPictureUI: Si,
            AutoTakeVipPrivilegeUI: Li,
            LiveReplayDownloadUI: Pi
        };
    },
    853: function(e, n, t) {},
    859: function(e, n, t) {}
} ]);