!function(e) {
    function n(n) {
        for (var a, r, s = n[0], l = n[1], c = n[2], p = 0, d = []; p < s.length; p++) r = s[p], 
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]), i[r] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (u && u(n); d.length; ) d.shift()();
        return o.push.apply(o, c || []), t();
    }
    function t() {
        for (var e, n = 0; n < o.length; n++) {
            for (var t = o[n], a = !0, s = 1; s < t.length; s++) {
                var l = t[s];
                0 !== i[l] && (a = !1);
            }
            a && (o.splice(n--, 1), e = r(r.s = t[0]));
        }
        return e;
    }
    var a = {}, i = {
        3: 0
    }, o = [];
    function r(n) {
        if (a[n]) return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
    }
    r.m = e, r.c = a, r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(e, n) {
        if (1 & n && (e = r(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var a in e) r.d(t, a, function(n) {
            return e[n];
        }.bind(null, a));
        return t;
    }, r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(n, "a", n), n;
    }, r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, r.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [], l = s.push.bind(s);
    s.push = n, s = s.slice();
    for (var c = 0; c < s.length; c++) n(s[c]);
    var u = l;
    o.push([ 879, 0 ]), t();
}({
    204: function(e, n, t) {
        var a = {
            "./af": 40,
            "./af.js": 40,
            "./ar": 41,
            "./ar-dz": 42,
            "./ar-dz.js": 42,
            "./ar-kw": 43,
            "./ar-kw.js": 43,
            "./ar-ly": 44,
            "./ar-ly.js": 44,
            "./ar-ma": 45,
            "./ar-ma.js": 45,
            "./ar-sa": 46,
            "./ar-sa.js": 46,
            "./ar-tn": 47,
            "./ar-tn.js": 47,
            "./ar.js": 41,
            "./az": 48,
            "./az.js": 48,
            "./be": 49,
            "./be.js": 49,
            "./bg": 50,
            "./bg.js": 50,
            "./bm": 51,
            "./bm.js": 51,
            "./bn": 52,
            "./bn.js": 52,
            "./bo": 53,
            "./bo.js": 53,
            "./br": 54,
            "./br.js": 54,
            "./bs": 55,
            "./bs.js": 55,
            "./ca": 56,
            "./ca.js": 56,
            "./cs": 57,
            "./cs.js": 57,
            "./cv": 58,
            "./cv.js": 58,
            "./cy": 59,
            "./cy.js": 59,
            "./da": 60,
            "./da.js": 60,
            "./de": 61,
            "./de-at": 62,
            "./de-at.js": 62,
            "./de-ch": 63,
            "./de-ch.js": 63,
            "./de.js": 61,
            "./dv": 64,
            "./dv.js": 64,
            "./el": 65,
            "./el.js": 65,
            "./en-SG": 66,
            "./en-SG.js": 66,
            "./en-au": 67,
            "./en-au.js": 67,
            "./en-ca": 68,
            "./en-ca.js": 68,
            "./en-gb": 69,
            "./en-gb.js": 69,
            "./en-ie": 70,
            "./en-ie.js": 70,
            "./en-il": 71,
            "./en-il.js": 71,
            "./en-nz": 72,
            "./en-nz.js": 72,
            "./eo": 73,
            "./eo.js": 73,
            "./es": 74,
            "./es-do": 75,
            "./es-do.js": 75,
            "./es-us": 76,
            "./es-us.js": 76,
            "./es.js": 74,
            "./et": 77,
            "./et.js": 77,
            "./eu": 78,
            "./eu.js": 78,
            "./fa": 79,
            "./fa.js": 79,
            "./fi": 80,
            "./fi.js": 80,
            "./fo": 81,
            "./fo.js": 81,
            "./fr": 82,
            "./fr-ca": 83,
            "./fr-ca.js": 83,
            "./fr-ch": 84,
            "./fr-ch.js": 84,
            "./fr.js": 82,
            "./fy": 85,
            "./fy.js": 85,
            "./ga": 86,
            "./ga.js": 86,
            "./gd": 87,
            "./gd.js": 87,
            "./gl": 88,
            "./gl.js": 88,
            "./gom-latn": 89,
            "./gom-latn.js": 89,
            "./gu": 90,
            "./gu.js": 90,
            "./he": 91,
            "./he.js": 91,
            "./hi": 92,
            "./hi.js": 92,
            "./hr": 93,
            "./hr.js": 93,
            "./hu": 94,
            "./hu.js": 94,
            "./hy-am": 95,
            "./hy-am.js": 95,
            "./id": 96,
            "./id.js": 96,
            "./is": 97,
            "./is.js": 97,
            "./it": 98,
            "./it-ch": 99,
            "./it-ch.js": 99,
            "./it.js": 98,
            "./ja": 100,
            "./ja.js": 100,
            "./jv": 101,
            "./jv.js": 101,
            "./ka": 102,
            "./ka.js": 102,
            "./kk": 103,
            "./kk.js": 103,
            "./km": 104,
            "./km.js": 104,
            "./kn": 105,
            "./kn.js": 105,
            "./ko": 106,
            "./ko.js": 106,
            "./ku": 107,
            "./ku.js": 107,
            "./ky": 108,
            "./ky.js": 108,
            "./lb": 109,
            "./lb.js": 109,
            "./lo": 110,
            "./lo.js": 110,
            "./lt": 111,
            "./lt.js": 111,
            "./lv": 112,
            "./lv.js": 112,
            "./me": 113,
            "./me.js": 113,
            "./mi": 114,
            "./mi.js": 114,
            "./mk": 115,
            "./mk.js": 115,
            "./ml": 116,
            "./ml.js": 116,
            "./mn": 117,
            "./mn.js": 117,
            "./mr": 118,
            "./mr.js": 118,
            "./ms": 119,
            "./ms-my": 120,
            "./ms-my.js": 120,
            "./ms.js": 119,
            "./mt": 121,
            "./mt.js": 121,
            "./my": 122,
            "./my.js": 122,
            "./nb": 123,
            "./nb.js": 123,
            "./ne": 124,
            "./ne.js": 124,
            "./nl": 125,
            "./nl-be": 126,
            "./nl-be.js": 126,
            "./nl.js": 125,
            "./nn": 127,
            "./nn.js": 127,
            "./pa-in": 128,
            "./pa-in.js": 128,
            "./pl": 129,
            "./pl.js": 129,
            "./pt": 130,
            "./pt-br": 131,
            "./pt-br.js": 131,
            "./pt.js": 130,
            "./ro": 132,
            "./ro.js": 132,
            "./ru": 133,
            "./ru.js": 133,
            "./sd": 134,
            "./sd.js": 134,
            "./se": 135,
            "./se.js": 135,
            "./si": 136,
            "./si.js": 136,
            "./sk": 137,
            "./sk.js": 137,
            "./sl": 138,
            "./sl.js": 138,
            "./sq": 139,
            "./sq.js": 139,
            "./sr": 140,
            "./sr-cyrl": 141,
            "./sr-cyrl.js": 141,
            "./sr.js": 140,
            "./ss": 142,
            "./ss.js": 142,
            "./sv": 143,
            "./sv.js": 143,
            "./sw": 144,
            "./sw.js": 144,
            "./ta": 145,
            "./ta.js": 145,
            "./te": 146,
            "./te.js": 146,
            "./tet": 147,
            "./tet.js": 147,
            "./tg": 148,
            "./tg.js": 148,
            "./th": 149,
            "./th.js": 149,
            "./tl-ph": 150,
            "./tl-ph.js": 150,
            "./tlh": 151,
            "./tlh.js": 151,
            "./tr": 152,
            "./tr.js": 152,
            "./tzl": 153,
            "./tzl.js": 153,
            "./tzm": 154,
            "./tzm-latn": 155,
            "./tzm-latn.js": 155,
            "./tzm.js": 154,
            "./ug-cn": 156,
            "./ug-cn.js": 156,
            "./uk": 157,
            "./uk.js": 157,
            "./ur": 158,
            "./ur.js": 158,
            "./uz": 159,
            "./uz-latn": 160,
            "./uz-latn.js": 160,
            "./uz.js": 159,
            "./vi": 161,
            "./vi.js": 161,
            "./x-pseudo": 162,
            "./x-pseudo.js": 162,
            "./yo": 163,
            "./yo.js": 163,
            "./zh-cn": 164,
            "./zh-cn.js": 164,
            "./zh-hk": 165,
            "./zh-hk.js": 165,
            "./zh-tw": 166,
            "./zh-tw.js": 166
        };
        function i(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(a, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
            }
            return a[e];
        }
        i.keys = function() {
            return Object.keys(a);
        }, i.resolve = o, e.exports = i, i.id = 204;
    },
    460: function(e) {
        e.exports = JSON.parse('{"功能删除须知":["从0.8.16.13版本开始不再提供<i>区域限制解锁</i>和<i>自动抽奖</i>功能，并从1.2.0版本开始重新添加<i>区域限制解锁</i>功能","从0.8.16.20版本开始不再提供<i>播放器切换</i>功能","从1.0.0版本开始不再提供<i>礼物包裹增强</i>和主站播放器的<i>自动定位</i>功能"],"第三方引用声明":["本项目中使用的 ASS 格式弹幕转换脚本修改自 tiansh 以 <a href\\"http://www.mozilla.org/MPL/2.0/\\" target=\\"_blank\\">Mozilla Public License 2.0</a> 发布的开源项目 <a href=\\"https://github.com/tiansh/us-danmaku\\" target=\\"_blank\\">us-danmaku</a>","本项目中使用的本地 CRC32 反查脚本修改自 xmcp 以 <a href=\\"https://github.com/xmcp/pakku.js/blob/master/LICENSE.txt\\" target=\\"_blank\\">GPL 许可协议</a> 发布的开源项目 <a href=\\"https://github.com/xmcp/pakku.js\\" target=\\"_blank\\">pakku.js</a> 中的 CRC32 Cracker","本项目中使用的本地 FLV 合并功能 来自自 qli5 以 <a href=\\"https://github.com/liqi0816/bilitwin/blob/2.0-nightly/LICENSE\\" target=\\"_blank\\">MPL 许可协议</a> 发布的开源项目 <a href=\\"https://github.com/liqi0816/bilitwin\\" target=\\"_blank\\">bilitwin</a>"]}');
    },
    879: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(12), i = t.n(a), o = t(28), r = t.n(o), s = t(233), l = t.n(s), c = t(3), u = t.n(c), p = t(1), d = t.n(p), g = t(11), f = t.n(g), m = t(2), b = t.n(m), h = t(4), j = t.n(h), k = t(7), v = t.n(k), y = (t(263), 
        t(35)), x = t.n(y), E = t(18), P = t.n(E), S = t(296), w = t.n(S), O = t(244), z = t.n(O), _ = t(0), L = t.n(_), C = t(21), M = t.n(C), N = t(6), T = t(5), V = t(33), B = t(264), H = t(169), F = t(27), G = t(460), I = (t(880), 
        v()([ "\n  body{\n    margin: 0;\n    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\n    //font-size: 75%;\n  }\n" ], [ "\n  body{\n    margin: 0;\n    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\n    //font-size: 75%;\n  }\n" ])), R = v()([ "\n  //position: absolute;\n  //top: ", "px;\n  //right: 0;\n  //bottom: 0;\n  //left: 0;\n  //overflow: auto;\n  background-color: #f2f3f5;\n" ], [ "\n  //position: absolute;\n  //top: ", "px;\n  //right: 0;\n  //bottom: 0;\n  //left: 0;\n  //overflow: auto;\n  background-color: #f2f3f5;\n" ]), q = v()([ "\n  position: absolute;\n  left: calc(50% + 380px);\n  bottom: 22px;\n  z-index: 0;\n  figcaption {\n    text-align: center;\n    font-size: 12px;\n  }\n" ], [ "\n  position: absolute;\n  left: calc(50% + 380px);\n  bottom: 22px;\n  z-index: 0;\n  figcaption {\n    text-align: center;\n    font-size: 12px;\n  }\n" ]), A = v()([ "\n  width: 100px;\n" ], [ "\n  width: 100px;\n" ]), D = v()([ "\n  position: relative;\n  flex-shrink: 0;\n  padding: 50px 0;\n  background-color: ", ";\n  color: #fff;\n  overflow: hidden;\n  & > * {\n    display: block;\n    margin: 0 auto;\n    padding: 0 10px;\n    max-width: 800px;\n  }\n" ], [ "\n  position: relative;\n  flex-shrink: 0;\n  padding: 50px 0;\n  background-color: ", ";\n  color: #fff;\n  overflow: hidden;\n  & > * {\n    display: block;\n    margin: 0 auto;\n    padding: 0 10px;\n    max-width: 800px;\n  }\n" ]), W = v()([ "\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px 10px;\n  box-sizing: border-box;\n  color: #8c8c8c;\n  & a {\n    font-size: 12px;\n    color: #8c8c8c;\n  }\n  & > a {\n    margin-right: 16px;\n  }\n  span {\n    float: right;\n  }\n" ], [ "\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px 10px;\n  box-sizing: border-box;\n  color: #8c8c8c;\n  & a {\n    font-size: 12px;\n    color: #8c8c8c;\n  }\n  & > a {\n    margin-right: 16px;\n  }\n  span {\n    float: right;\n  }\n" ]), U = v()([ "\n  width: 100%;\n  line-height: 30px;\n  max-width: 800px;\n  margin: 16px auto 0;\n  padding: 0px 10px;\n  font-size: 12px;\n  text-align: left;\n  color: ", ";\n  a {\n    color: #00aeeb;\n  }\n" ], [ "\n  width: 100%;\n  line-height: 30px;\n  max-width: 800px;\n  margin: 16px auto 0;\n  padding: 0px 10px;\n  font-size: 12px;\n  text-align: left;\n  color: ", ";\n  a {\n    color: #00aeeb;\n  }\n" ]), J = v()([ "\n  margin-left: 4px;\n  padding: 0 2px;\n  border-radius: 2px;\n  font-size: 12px;\n  background-color: ", ";\n  color: #fff;\n" ], [ "\n  margin-left: 4px;\n  padding: 0 2px;\n  border-radius: 2px;\n  font-size: 12px;\n  background-color: ", ";\n  color: #fff;\n" ]), Y = v()([ "\n  padding: 0 6px;\n  color: ", ";\n  &:first-of-type {\n    padding-left: 0;\n  }\n" ], [ "\n  padding: 0 6px;\n  color: ", ";\n  &:first-of-type {\n    padding-left: 0;\n  }\n" ]), Z = F.a.color, K = Object(N.b)(I), Q = Object(N.d)(H.a).attrs({
            className: "config-body"
        })(R, F.a.headerHeight), X = N.d.figure(q), $ = N.d.img(A), ee = N.d.div(D, Z("bilibili-pink")), ne = N.d.div(W), te = N.d.p(U, Z("bilibili-pink")), ae = (N.d.span.attrs({
            title: function(e) {
                return e.title;
            }
        })(J, Z("bilibili-blue")), N.d.span(Y, Z("bilibili-pink"))), ie = function(e) {
            function n(e) {
                d()(this, n);
                var t = b()(this, (n.__proto__ || u()(n)).call(this, e));
                return t.handleSetSetting = function(e) {
                    var n = e.kind, a = void 0 === n ? "" : n, i = e.featureName, o = e.settingName, r = e.subPage, s = void 0 !== r && r, c = e.on, u = t.state[a];
                    if (u.map[i]) {
                        var p = u.map[i];
                        if (o || c) if (o && p.type && !s) if ("checkbox" === p.type && void 0 !== c) {
                            var d = w()(p.options, {
                                key: o
                            });
                            p.options[d].on = c;
                        } else {
                            if ("radio" !== p.type) return void console.error("Undefined type: " + p.type + " (⊙ˍ⊙)!");
                            p.value = o;
                        } else {
                            if (!(o && p.subPage && s)) return void console.error("Error Setting Object Σ(oﾟдﾟoﾉ)!");
                            if ("checkbox" === p.subPage.type) {
                                var g = w()(p.subPage.options, {
                                    key: o
                                });
                                p.subPage.options[g].on = c;
                            } else {
                                if ("radio" !== p.subPage.type) return void console.error("Undefined type: " + p.subPage.type + " (⊙ˍ⊙)!");
                                p.subPage.value = o;
                            }
                        } else p.on = !p.on;
                        chrome.runtime.sendMessage({
                            command: "setSetting",
                            feature: i,
                            settings: p
                        }, function(e) {
                            e && (chrome.runtime.sendMessage({
                                command: "setGAEvent",
                                action: "click",
                                category: "config",
                                label: i + " " + (void 0 !== o ? o + " " + p.on : p.on)
                            }), u.map[i] = p, t.setState(l()({}, a, u)));
                        });
                    } else console.error("Not find kind[" + a + "]'s setting (*ﾟДﾟ*)!");
                }, t.createSubListComponent = function(e) {
                    var n = e.kind, a = void 0 === n ? "" : n, i = e.featureName, o = void 0 === i ? "" : i, r = e.settings, s = void 0 === r ? {} : r, l = e.subPage, c = void 0 !== l && l, u = null, p = s.options, d = s.type, g = s.value;
                    if (p && d) switch (s.type) {
                      case "checkbox":
                        u = L.a.createElement(H.c, {
                            data: p,
                            onClick: function(e, n) {
                                return t.handleSetSetting({
                                    kind: a,
                                    featureName: o,
                                    settingName: e,
                                    on: n,
                                    subPage: c
                                });
                            }
                        });
                        break;

                      case "radio":
                        u = L.a.createElement(H.f, {
                            value: g,
                            data: p,
                            onClick: function(e) {
                                return t.handleSetSetting({
                                    kind: a,
                                    featureName: o,
                                    settingName: e,
                                    subPage: c
                                });
                            }
                        });
                    }
                    return u;
                }, t.handleSetSubPage = function(e) {
                    var n = e.parent, a = void 0 === n ? null : n, i = e.settings, o = void 0 === i ? null : i, r = e.subPageList, s = void 0 !== r && r, l = e.subPageTitle, c = void 0 === l ? null : l, u = e.pageType, p = t.state, d = p.subPageOn, g = p.parent, f = {
                        subPageOn: !d,
                        subPageTitle: o ? o.title : c,
                        subPageParent: g !== a && a && a.ListWrapper ? a.ListWrapper.querySelector(".list-body") : null,
                        subPageSettings: o,
                        subPageList: s,
                        pageType: u
                    };
                    t.setState(f);
                }, t.createSubPage = function(e) {
                    var n = t.state, a = n.subPageSettings, i = n.subPageList;
                    switch (e) {
                      case "feed":
                        return P()(i, function(e, n) {
                            var t = r()(e, 4), a = t[0], i = t[1], o = t[2], s = t[3];
                            return L.a.createElement(H.e, {
                                key: n,
                                operation: "￥" + (+o).toFixed(2),
                                twoLine: !0,
                                first: i,
                                second: a + " - " + (s || "没有留言")
                            });
                        });

                      case "update":
                        return P()(i, function(e, n) {
                            return L.a.createElement(H.h, {
                                key: n,
                                title: n,
                                data: e
                            });
                        });

                      default:
                        var o = a.kind, s = a.name, l = a.on, c = a.toggle, u = a.subPage, p = t.createSubListComponent({
                            kind: o,
                            featureName: s,
                            settings: u,
                            subPage: !0
                        }), d = void 0 !== u.description;
                        return L.a.createElement(H.e, {
                            toggle: c,
                            onClick: function() {
                                return t.handleSetSetting({
                                    kind: o,
                                    featureName: s
                                });
                            },
                            operation: L.a.createElement(V.b, {
                                on: l
                            }),
                            twoLine: d,
                            first: d ? u.title : "",
                            second: d ? u.description : "",
                            subList: {
                                hide: void 0 !== l && !l,
                                children: p
                            }
                        }, d ? null : u.title);
                    }
                }, t.handleOpenWebsite = function() {
                    Object(T.d)("https://bilibili-helper.github.io/");
                }, t.handleCheckVersion = function() {
                    t.state.checkingVersion || (t.setState({
                        checkingVersion: !0
                    }), chrome.runtime.sendMessage({
                        command: "checkVersion"
                    }, function() {
                        setTimeout(function() {
                            return t.setState({
                                checkingVersion: !1
                            });
                        }, 500);
                    }));
                }, t.renderSettingDOM = function() {
                    var e = t.state.permissionMap;
                    return P()(t.settings, function(n, a) {
                        var i = t.state[a];
                        return x()(i.map) ? null : L.a.createElement(H.d, {
                            key: a,
                            title: i.title,
                            ref: function(e) {
                                return t[a + "Ref"] = e;
                            }
                        }, P()(i.map, function(n, i) {
                            var o = n.on, r = n.description, s = n.title, l = n.subPage, c = n.toggle, u = n.permissions, p = t.createSubListComponent({
                                kind: a,
                                featureName: i,
                                settings: n
                            }), d = !(void 0 !== c && !l) || c, g = l ? function() {
                                return t.handleSetSubPage({
                                    parent: t[a + "Ref"],
                                    settings: n
                                });
                            } : function() {
                                return t.handleSetSetting({
                                    kind: a,
                                    featureName: i
                                });
                            }, f = l ? L.a.createElement(V.a, {
                                icon: "arrowRight"
                            }) : L.a.createElement(V.b, {
                                disable: !d,
                                on: o
                            }), m = [], b = !1, h = P()(u, function(n) {
                                var t = n.split("?");
                                if (t.length > 0) {
                                    var a = t[0], i = B.a[a].description || e[a] && B.a[a][e[a].type].description;
                                    return (a in e && !1 === e[a].pass || void 0 === e[a]) && m.push(L.a.createElement(ae, null, i)), 
                                    null;
                                }
                            }), j = void 0 !== r || m.length > 0, k = "";
                            return j && (m.length > 0 ? (b = !0, k = m) : k = r), L.a.createElement(H.e, {
                                key: i,
                                toggle: d && !b,
                                onClick: void 0 !== o && d && !b ? g : null,
                                operation: void 0 !== o ? f : null,
                                subList: p ? {
                                    hide: void 0 !== o && !o,
                                    children: p
                                } : null,
                                twoLine: j,
                                first: j ? L.a.createElement(L.a.Fragment, null, s, h) : "",
                                second: k
                            }, j ? null : s, h);
                        }));
                    });
                }, t.renderAboutList = function() {
                    var e = t.state.checkingVersion;
                    return L.a.createElement(H.d, {
                        title: Object(T.a)("config_type_about"),
                        ref: function(e) {
                            return t.aboutRef = e;
                        }
                    }, L.a.createElement(H.e, {
                        icon: L.a.createElement(V.c, {
                            iconfont: "cat2",
                            image: !0
                        }),
                        twoLine: !0,
                        first: chrome.i18n.getMessage("extensionName"),
                        second: Object(T.a)("config_version") + " " + T.n + "（" + Object(T.a)("extensionVersionTypeOfficialVersion") + "）",
                        separator: !0,
                        operation: L.a.createElement(V.a, {
                            loading: e,
                            normal: !0,
                            onClick: t.handleCheckVersion
                        }, Object(T.a)("config_checking"))
                    }), P()(G, function(e, n) {
                        return L.a.createElement(H.h, {
                            key: n,
                            title: n,
                            data: e
                        });
                    }), L.a.createElement(H.e, {
                        onClick: t.handleOpenWebsite,
                        operation: L.a.createElement(V.a, {
                            icon: "arrowRight"
                        })
                    }, "前往官网查看更新日志 和 投喂记录"));
                }, t.settings = {
                    video: {
                        title: Object(T.a)("config_type_main"),
                        map: {}
                    },
                    live: {
                        title: Object(T.a)("config_type_live"),
                        map: {}
                    },
                    popup: {
                        title: Object(T.a)("config_type_menu"),
                        map: {}
                    },
                    other: {
                        title: Object(T.a)("config_type_other"),
                        map: {}
                    }
                }, t.defaultBroadcast = "", t.state = i()({
                    modalTitle: null,
                    modalBody: null,
                    modalButtons: null,
                    modalOn: !1,
                    subPageTitle: null,
                    subPageParent: null,
                    subPageOn: !1,
                    subPageSettings: null,
                    subPageList: !1
                }, t.settings, {
                    broadcast: t.defaultBroadcast,
                    permissionMap: {},
                    checkingVersion: !1
                }), t;
            }
            return j()(n, e), f()(n, [ {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    chrome.runtime.sendMessage({
                        command: "getSettings",
                        checkHide: !0
                    }, function(n) {
                        z()(n, function(n) {
                            var t = n.kind, a = n.name;
                            e.settings[t] ? e.settings[t].map[a] = n : e.settings.other.map[a] = n;
                        }), e.setState(e.settings);
                    }), chrome.runtime.sendMessage({
                        command: "inIncognitoContext"
                    }, function(n) {
                        n ? e.setState({
                            broadcast: "您正在使用隐身模式，该模式下部分功能将无法正常启用"
                        }) : e.setState({
                            broadcast: e.defaultBroadcast
                        });
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
                    var e = this, n = this.state, t = n.modalOn, a = n.modalTitle, i = n.modalBody, o = n.modalButtons, r = n.subPageOn, s = n.subPageTitle, l = n.subPageParent, c = n.pageType, u = n.broadcast;
                    return L.a.createElement(L.a.Fragment, null, L.a.createElement(K, null), L.a.createElement(Q, null, L.a.createElement(ee, null, L.a.createElement("h1", null, "BILIBILI HELPER"), L.a.createElement("sub", null, "version " + T.n + "（" + Object(T.a)("extensionVersionTypeOfficialVersion") + "）")), L.a.createElement(te, null, L.a.createElement("div", null, Object(T.a)("config_commonNotify")), L.a.createElement("p", null, Object(T.a)("config_websiteNotify"), L.a.createElement("a", {
                        href: "https://bilibili-helper.github.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://bilibili-helper.github.io/")), u && L.a.createElement(L.a.Fragment, null, u, L.a.createElement("br", null))), L.a.createElement(H.g, {
                        on: r,
                        title: s,
                        parent: l,
                        onClose: function() {
                            return e.handleSetSubPage(l);
                        }
                    }, L.a.createElement(H.d, null, r && this.createSubPage(c))), this.renderSettingDOM(), this.renderAboutList(), L.a.createElement(ne, null, L.a.createElement("a", {
                        href: "https://github.com/zacyu/bilibili-helper"
                    }, "Github"), L.a.createElement("a", {
                        href: "https://bilibili-helper.github.io/"
                    }, "Website"), L.a.createElement("a", {
                        href: "https://chrome.google.com/webstore/detail/kpbnombpnpcffllnianjibmpadjolanh"
                    }, "Chrome WebStore"), L.a.createElement("span", null, "Copyright (c) 2018 ", L.a.createElement("a", {
                        href: "mailto:me@zacyu.com"
                    }, "Zac Yu"), ", Google LLC, ", L.a.createElement("a", {
                        href: "mailto:jjj201200@gmail.com"
                    }, "Drowsy Flesh")), L.a.createElement(X, null, L.a.createElement($, {
                        src: "./statics/imgs/alipay-df.png",
                        alt: "alipay"
                    }), L.a.createElement("figcaption", null, Object(T.a)("config_thank"))))), L.a.createElement(V.d, {
                        on: t,
                        title: a,
                        body: i,
                        buttons: o
                    }));
                }
            } ]), n;
        }(L.a.Component);
        M.a.render(L.a.createElement(ie, null), document.getElementById("root"), T.b);
    }
});