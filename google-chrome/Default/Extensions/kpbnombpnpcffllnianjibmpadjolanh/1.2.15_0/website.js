!function(e) {
    function r(r) {
        for (var t, u, a = r[0], f = r[1], l = r[2], s = 0, p = []; s < a.length; s++) u = a[s], 
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && p.push(o[u][0]), o[u] = 0;
        for (t in f) Object.prototype.hasOwnProperty.call(f, t) && (e[t] = f[t]);
        for (c && c(r); p.length; ) p.shift()();
        return i.push.apply(i, l || []), n();
    }
    function n() {
        for (var e, r = 0; r < i.length; r++) {
            for (var n = i[r], t = !0, a = 1; a < n.length; a++) {
                var f = n[a];
                0 !== o[f] && (t = !1);
            }
            t && (i.splice(r--, 1), e = u(u.s = n[0]));
        }
        return e;
    }
    var t = {}, o = {
        11: 0
    }, i = [];
    function u(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
    }
    u.m = e, u.c = t, u.d = function(e, r, n) {
        u.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        });
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, u.t = function(e, r) {
        if (1 & r && (e = u(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e) for (var t in e) u.d(n, t, function(r) {
            return e[r];
        }.bind(null, t));
        return n;
    }, u.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return u.d(r, "a", r), r;
    }, u.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }, u.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [], f = a.push.bind(a);
    a.push = r, a = a.slice();
    for (var l = 0; l < a.length; l++) r(a[l]);
    var c = f;
    i.push([ 884, 0 ]), n();
}({
    884: function(e, r, n) {
        "use strict";
        n.r(r);
        var t = n(12), o = n.n(t), i = n(32), u = n.n(i), a = void 0;
        window.addEventListener("message", function(e) {
            var r, n = e.data, t = n.from, i = u()(n, [ "from" ]);
            "website" === t && (a || ((r = chrome.runtime.connect()).onMessage.addListener(function(e) {
                var r = e.from, n = u()(e, [ "from" ]);
                "helperProxy" === r && window.postMessage(o()({
                    from: "helper"
                }, n), "https://bilibili-helper.github.io/");
            }), r.onDisconnect.addListener(function() {
                r = null;
            }), a = r), a.postMessage(o()({
                from: t
            }, i)));
        });
    }
});