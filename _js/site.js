function retinize() {
    var e = $("#logo"),
        t = $("#menuopen"),
        n = $("#menuclose");
    isRetina && (e.addClass("retina"), e.removeClass("normal"), t.addClass("retina"), t.removeClass("normal"), n.addClass("retina"), n.removeClass("normal"))
}

function toggleMenu() {
    visible ? hideMenu() : showMenu()
}

function showMenu() {
    $("#menubg").fadeIn(300), $("#options").fadeIn(400), visible = !0
}

function hideMenu() {
    $("#menubg").fadeOut(400), $("#options").fadeOut(300), visible = !1
}

function setupLifeStream() {
    $("#lifestream ul").length > 0 && $("#lifestream ul").remove(), $("#lifestream").lifestream({
        classname: "lifestream",
        feedloaded: feedcallback,
        limit: 30,
        list: list
    })
}

function feedcallback() {
    count++, count === list.length && ($("#lifestream li").each(function () {
        var e = $(this),
            t = new Date(e.data("time"));
        0 != e.children(".liked").length && e.remove(), 0 == e.children("a").length && e.prepend('<a class="twitter" target="_blank" href="' + e.data("url") + '"><div class="icon white-twitter"></div></a>'), e.find("p").append(' <span class="timeago" title="' + t.toISO8601(t) + '">' + t + "</span>")
    }), $("#lifestream .timeago").timeago(), $("#lifestream ul").delay(400).fadeIn(800), trackLinks(), count = 0, setTimeout(showVideo, 4e3))
}

function showVideo() {
    BV = new $.BigVideo({
        forceAutoplay: isTouch
    }), BV.init(), isTouch ? BV.show("images/cover.png") : BV.show("/_videos/background_07052013.mp4", {
        ambient: !0
    }), $("#big-video-wrap").fadeIn(400)
}

function trackLinks() {
    /*
    var e = $("#lifestream ul li");
    e.each(function () {
        var e = $(this),
            t = $(this).find("a"),
            n = $(this).find("p.info");
        t.each(function () {
            var t = e.attr("class"),
                i = $(this);
            switch (t) {
            case "lifestream-facebook_page":
                analytics.trackLink(i, "Facebook Link", {
                    category: "Social Link",
                    label: n.text()
                });
                break;
            case "lifestream-vimeo":
                analytics.trackLink(i, "Vimeo Link", {
                    category: "Social Link",
                    label: n.text()
                });
                break;
            case "lifestream-twitter":
                analytics.trackLink(i, "Twitter Link", {
                    category: "Social Link",
                    label: n.text()
                })
            }
        })
    })
*/
}! function (e, t) {
    function n(e) {
        var t = e.length,
            n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e) {
        var t = Ct[e] = {};
        return ct.each(e.match(pt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function r(e, n, i, r) {
        if (ct.acceptData(e)) {
            var o, a, s = ct.expando,
                u = e.nodeType,
                l = u ? ct.cache : e,
                c = u ? e[s] : e[s] && s;
            if (c && l[c] && (r || l[c].data) || i !== t || "string" != typeof n) return c || (c = u ? e[s] = tt.pop() || ct.guid++ : s), l[c] || (l[c] = u ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof n || "function" == typeof n) && (r ? l[c] = ct.extend(l[c], n) : l[c].data = ct.extend(l[c].data, n)), a = l[c], r || (a.data || (a.data = {}), a = a.data), i !== t && (a[ct.camelCase(n)] = i), "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? ct.cache : e,
                u = o ? e[ct.expando] : ct.expando;
            if (a[u]) {
                if (t && (i = n ? a[u] : a[u].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in i ? t = [t] : (t = ct.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !s(i) : !ct.isEmptyObject(i)) return
                }(n || (delete a[u].data, s(a[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
            }
        }
    }

    function a(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? ct.parseJSON(i) : i
                } catch (o) {}
                ct.data(e, n, i)
            } else i = t
        }
        return i
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function p(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ct.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Rt.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function (e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }

    function h(e) {
        var t = Vt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function v(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, i, r, o = ct._data(e),
                a = ct._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) ct.event.add(t, n, s[n][i])
            }
            a.data && (a.data = ct.extend({}, a.data))
        }
    }

    function b(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                r = ct._data(t);
                for (i in r.events) ct.removeEvent(t, i, r.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, v(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function w(e, n) {
        var i, r, o = 0,
            a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], i = e.childNodes || e; null != (r = i[o]); o++)!n || ct.nodeName(r, n) ? a.push(r) : ct.merge(a, w(r, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
    }

    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Cn.length; r--;)
            if (t = Cn[r] + n, t in e) return t;
        return i
    }

    function j(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ct._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && j(i) && (o[a] = ct._data(i, "olddisplay", E(i.nodeName)))) : o[a] || (r = j(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function C(e, t, n) {
        var i = yn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function _(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ct.css(e, n + Tn[o], !0, r)), i ? ("content" === n && (a -= ct.css(e, "padding" + Tn[o], !0, r)), "margin" !== n && (a -= ct.css(e, "border" + Tn[o] + "Width", !0, r))) : (a += ct.css(e, "padding" + Tn[o], !0, r), "padding" !== n && (a += ct.css(e, "border" + Tn[o] + "Width", !0, r)));
        return a
    }

    function N(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = dn(e),
            a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = pn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r)) return r;
            i = a && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + _(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function E(e) {
        var t = G,
            n = xn[e];
        return n || (n = S(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), cn.detach()), xn[e] = n), n
    }

    function S(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body),
            i = ct.css(n[0], "display");
        return n.remove(), i
    }

    function $(e, t, n, i) {
        var r;
        if (ct.isArray(t)) ct.each(t, function (t, r) {
            n || Nn.test(e) ? i(e, r) : $(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== ct.type(t)) i(e, t);
        else
            for (r in t) $(e + "[" + r + "]", t[r], n, i)
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(pt) || [];
            if (ct.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function q(e, n, i, r) {
        function o(u) {
            var l;
            return a[u] = !0, ct.each(e[u] || [], function (e, u) {
                var c = u(n, i, r);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {}, s = e === zn;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function A(e, n) {
        var i, r, o = ct.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ct.extend(!0, e, i), e
    }

    function M(e, n, i) {
        for (var r, o, a, s, u = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in i) a = l[0];
        else {
            for (s in i) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                r || (r = s)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a), i[a]) : t
    }

    function L(e, t, n, i) {
        var r, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (r in l)
                    if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function O() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function H() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ct.now()
    }

    function P(e, t, n) {
        for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function I(e, t, n) {
        var i, r, o = 0,
            a = ri.length,
            s = ct.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (r) return !1;
                for (var t = Zn || H(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: ct.extend({}, t),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (B(c, l.opts.specialEasing); a > o; o++)
            if (i = ri[o].call(l, e, c, l.opts)) return i;
        return ct.map(c, P, l), ct.isFunction(l.opts.start) && l.opts.start.call(e, l), ct.fx.timer(ct.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = ct.camelCase(n), r = t[i], o = e[n], ct.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ct.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function R(e, t, n) {
        var i, r, o, a, s, u, l = this,
            c = {}, d = e.style,
            p = e.nodeType && j(e),
            h = ct._data(e, "fxshow");
        n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, l.always(function () {
            l.always(function () {
                s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || l.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], ti.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) continue;
                c[i] = h && h[i] || ct.style(e, i)
            }
        if (!ct.isEmptyObject(c)) {
            h ? "hidden" in h && (p = h.hidden) : h = ct._data(e, "fxshow", {}), o && (h.hidden = !p), p ? ct(e).show() : l.done(function () {
                ct(e).hide()
            }), l.done(function () {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (i in c) a = P(p ? h[i] : 0, i, l), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function W(e, t, n, i, r) {
        return new W.prototype.init(e, t, n, i, r)
    }

    function z(e, t) {
        var n, i = {
                height: e
            }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function U(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V, Q, X = typeof t,
        Y = e.location,
        G = e.document,
        J = G.documentElement,
        K = e.jQuery,
        Z = e.$,
        et = {}, tt = [],
        nt = "1.10.2",
        it = tt.concat,
        rt = tt.push,
        ot = tt.slice,
        at = tt.indexOf,
        st = et.toString,
        ut = et.hasOwnProperty,
        lt = nt.trim,
        ct = function (e, t) {
            return new ct.fn.init(e, t, Q)
        }, dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        pt = /\S+/g,
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        vt = /^[\],:{}\s]*$/,
        gt = /(?:^|:|,)(?:\s*\[)+/g,
        yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        wt = /^-ms-/,
        xt = /-([\da-z])/gi,
        kt = function (e, t) {
            return t.toUpperCase()
        }, jt = function (e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Tt(), ct.ready())
        }, Tt = function () {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", jt, !1), e.removeEventListener("load", jt, !1)) : (G.detachEvent("onreadystatechange", jt), e.detachEvent("onload", jt))
        };
    ct.fn = ct.prototype = {
        jquery: nt,
        constructor: ct,
        init: function (e, n, i) {
            var r, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), mt.test(r[1]) && ct.isPlainObject(n))
                        for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = G.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return ot.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ct.each(this, e, t)
        },
        ready: function (e) {
            return ct.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(ct.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: rt,
        sort: [].sort,
        splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
        var e, n, i, r, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (r in o) e = s[r], i = o[r], s !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[r] = ct.extend(c, a, i)) : i !== t && (s[r] = i));
        return s
    }, ct.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = K), ct
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ct.readyWait++ : ct.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                if (!G.body) return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (V.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === ct.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === ct.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
            try {
                if (e.constructor && !ut.call(e, "constructor") && !ut.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ct.support.ownLast)
                for (n in e) return ut.call(e, n);
            for (n in e);
            return n === t || ut.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var i = mt.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], i.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && vt.test(n.replace(yt, "@").replace(bt, "]").replace(gt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
        },
        noop: function () {},
        globalEval: function (t) {
            t && ct.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(wt, "ms-").replace(xt, kt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: lt && !lt.call("﻿ ") ? function (e) {
            return null == e ? "" : lt.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ht, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (at) return at.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var i = n.length,
                r = e.length,
                o = 0;
            if ("number" == typeof i)
                for (; i > o; o++) e[r++] = n[o];
            else
                for (; n[o] !== t;) e[r++] = n[o++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            var i, r = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) i = !! t(e[o], o), n !== i && r.push(e[o]);
            return r
        },
        map: function (e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && (u[u.length] = r);
            else
                for (o in e) r = t(e[o], o, i), null != r && (u[u.length] = r);
            return it.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (i = ot.call(arguments, 2), r = function () {
                return e.apply(n || this, i.concat(ot.call(arguments)))
            }, r.guid = e.guid = e.guid || ct.guid++, r) : t
        },
        access: function (e, n, i, r, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == i;
            if ("object" === ct.type(i)) {
                o = !0;
                for (u in i) ct.access(e, n, u, i[u], !0, a, s)
            } else if (r !== t && (o = !0, ct.isFunction(r) || (s = !0), c && (s ? (n.call(e, r), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ct(e), n)
            })), n))
                for (; l > u; u++) n(e[u], i, s ? r : r.call(e[u], u, n(e[u], i)));
            return o ? e : c ? n.call(e) : l ? n(e[0], i) : a
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        }
    }), ct.ready.promise = function (t) {
        if (!V)
            if (V = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
            else if (G.addEventListener) G.addEventListener("DOMContentLoaded", jt, !1), e.addEventListener("load", jt, !1);
        else {
            G.attachEvent("onreadystatechange", jt), e.attachEvent("onload", jt);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement
            } catch (i) {}
            n && n.doScroll && function r() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    Tt(), ct.ready()
                }
            }()
        }
        return V.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), Q = ct(G),
    function (e, t) {
        function n(e, t, n, i) {
            var r, o, a, s, u, l, c, d, f, m;
            if ((t ? t.ownerDocument || t : I) !== q && D(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (M && !i) {
                if (r = bt.exec(e))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && j.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                    }
                if (j.qsa && (!L || !L.test(e))) {
                    if (d = c = P, f = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = p(e), (c = t.getAttribute("id")) ? d = c.replace(kt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + h(l[u]);
                        f = ht.test(e) && t.parentNode || t, m = l.join(",")
                    }
                    if (m) try {
                        return et.apply(n, f.querySelectorAll(m)), n
                    } catch (v) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(lt, "$1"), t, n, i)
        }

        function i() {
            function e(n, i) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function d() {}

        function p(e, t) {
            var i, r, o, a, s, u, l, c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                (!i || (r = dt.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = pt.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (a in C.filter)!(r = gt[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? n.error(e) : z(e, u).slice(0)
        }

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = R++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = B + " " + o;
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            if (l = t[P] || (t[P] = {}), (u = l[i]) && u[0] === c) {
                                if ((s = u[1]) === !0 || s === T) return s === !0
                            } else if (u = l[i] = [c], u[1] = e(t, n, a) || T, u[1] === !0) return !0
            }
        }

        function m(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, t, n, i, r) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
            return a
        }

        function g(e, t, n, i, o, a) {
            return i && !i[P] && (i = g(i)), o && !o[P] && (o = g(o, a)), r(function (r, a, s, u) {
                var l, c, d, p = [],
                    h = [],
                    f = a.length,
                    m = r || w(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !r && t ? m : v(m, p, e, s, u),
                    y = n ? o || (r ? e : f || i) ? [] : a : g;
                if (n && n(g, y, s, u), i)
                    for (l = v(y, h), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (y[h[c]] = !(g[h[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(d = y[c]) && l.push(g[c] = d);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (l = o ? nt.call(r, d) : p[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else y = v(y === a ? y.splice(f, y.length) : y), o ? o(null, a, y, u) : et.apply(a, y)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = f(function (e) {
                    return e === t
                }, a, !0), l = f(function (e) {
                    return nt.call(t, e) > -1
                }, a, !0), c = [
                    function (e, n, i) {
                        return !o && (i || n !== S) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
                    }
                ]; r > s; s++)
                if (n = C.relative[e[s].type]) c = [f(m(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                        return g(s > 1 && m(c), s > 1 && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && h(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function b(e, t) {
            var i = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function (r, s, u, l, c) {
                    var d, p, h, f = [],
                        m = 0,
                        g = "0",
                        y = r && [],
                        b = null != c,
                        w = S,
                        x = r || a && C.find.TAG("*", c && s.parentNode || s),
                        k = B += null == w ? 1 : Math.random() || .1;
                    for (b && (S = s !== q && s, T = i); null != (d = x[g]); g++) {
                        if (a && d) {
                            for (p = 0; h = e[p++];)
                                if (h(d, s, u)) {
                                    l.push(d);
                                    break
                                }
                            b && (B = k, T = ++i)
                        }
                        o && ((d = !h && d) && m--, r && y.push(d))
                    }
                    if (m += g, o && g !== m) {
                        for (p = 0; h = t[p++];) h(y, f, s, u);
                        if (r) {
                            if (m > 0)
                                for (; g--;) y[g] || f[g] || (f[g] = K.call(l));
                            f = v(f)
                        }
                        et.apply(l, f), b && !r && f.length > 0 && m + t.length > 1 && n.uniqueSort(l)
                    }
                    return b && (B = k, S = w), y
                };
            return o ? r(s) : s
        }

        function w(e, t, i) {
            for (var r = 0, o = t.length; o > r; r++) n(e, t[r], i);
            return i
        }

        function x(e, t, n, i) {
            var r, o, a, s, u, l = p(e);
            if (!i && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && j.getById && 9 === t.nodeType && M && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(jt, Tt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (r = gt.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (i = u(a.matches[0].replace(jt, Tt), ht.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(r, 1), e = i.length && h(o), !e) return et.apply(n, i), n;
                        break
                    }
            }
            return E(e, l)(i, t, !M, n, ht.test(e)), n
        }
        var k, j, T, C, _, N, E, S, $, D, q, A, M, L, O, F, H, P = "sizzle" + -new Date,
            I = e.document,
            B = 0,
            R = 0,
            W = i(),
            z = i(),
            U = i(),
            V = !1,
            Q = function (e, t) {
                return e === t ? (V = !0, 0) : 0
            }, X = typeof t,
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            J = [],
            K = J.pop,
            Z = J.push,
            et = J.push,
            tt = J.slice,
            nt = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            st = "\\[" + rt + "*(" + ot + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + rt + "*\\]",
            ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
            lt = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            dt = RegExp("^" + rt + "*," + rt + "*"),
            pt = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ht = RegExp(rt + "*[+~]"),
            ft = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
            mt = RegExp(ut),
            vt = RegExp("^" + at + "$"),
            gt = {
                ID: RegExp("^#(" + ot + ")"),
                CLASS: RegExp("^\\.(" + ot + ")"),
                TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + st),
                PSEUDO: RegExp("^" + ut),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: RegExp("^(?:" + it + ")$", "i"),
                needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            }, yt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wt = /^(?:input|select|textarea|button)$/i,
            xt = /^h\d$/i,
            kt = /'|\\/g,
            jt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            Tt = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
            };
        try {
            et.apply(J = tt.call(I.childNodes), I.childNodes), J[I.childNodes.length].nodeType
        } catch (Ct) {
            et = {
                apply: J.length ? function (e, t) {
                    Z.apply(e, tt.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        N = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = n.support = {}, D = n.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : I,
                i = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, A = n.documentElement, M = !N(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                D()
            }), j.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), j.getElementsByTagName = o(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), j.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), j.getById = o(function (e) {
                return A.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
            }), j.getById ? (C.find.ID = function (e, t) {
                if (typeof t.getElementById !== X && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(jt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(jt, Tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = j.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== X ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = j.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== X && M ? n.getElementsByClassName(e) : t
            }, O = [], L = [], (j.qsa = yt.test(n.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + rt + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
            }), o(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (j.matchesSelector = yt.test(F = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function (e) {
                j.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", ut)
            }), L = L.length && RegExp(L.join("|")), O = O.length && RegExp(O.join("|")), H = yt.test(A.contains) || A.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Q = A.compareDocumentPosition ? function (e, t) {
                if (e === t) return V = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !j.sortDetached && t.compareDocumentPosition(e) === i ? e === n || H(I, e) ? -1 : t === n || H(I, t) ? 1 : $ ? nt.call($, e) - nt.call($, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var i, r = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (e === t) return V = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : $ ? nt.call($, e) - nt.call($, t) : 0;
                if (o === a) return s(e, t);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; u[r] === l[r];) r++;
                return r ? s(u[r], l[r]) : u[r] === I ? -1 : l[r] === I ? 1 : 0
            }, n) : q
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== q && D(e), t = t.replace(ft, "='$1']"), !(!j.matchesSelector || !M || O && O.test(t) || L && L.test(t))) try {
                var i = F.call(e, t);
                if (i || j.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return n(t, q, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && D(e), H(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== q && D(e);
            var i = C.attrHandle[n.toLowerCase()],
                r = i && G.call(C.attrHandle, n.toLowerCase()) ? i(e, n, !M) : t;
            return r === t ? j.attributes || !M ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
        }, n.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (V = !j.detectDuplicates, $ = !j.sortStable && e.slice(0), e.sort(Q), V) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        }, _ = n.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i]; i++) n += _(t);
            return n
        }, C = n.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(jt, Tt), e[3] = (e[4] || e[5] || "").replace(jt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, i = !e[5] && e[2];
                    return gt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && mt.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(jt, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, i) {
                    return function (r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, d, p, h, f, m = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? v.firstChild : v.lastChild], a && y) {
                                for (c = v[P] || (v[P] = {}), l = c[e] || [], h = l[0] === B && l[1], p = l[0] === B && l[2], d = h && v.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        c[e] = [B, h, p];
                                        break
                                    }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === B) p = l[1];
                            else
                                for (;
                                    (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[P] || (d[P] = {}))[e] = [B, p]), d !== t)););
                            return p -= r, p === i || 0 === p % i && p / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[P] ? o(t) : o.length > 1 ? (i = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                        for (var i, r = o(e, t), a = r.length; a--;) i = nt.call(e, r[a]), e[i] = !(n[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(lt, "$1"));
                    return i[P] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function (e) {
                    return vt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(jt, Tt).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === A
                },
                focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !C.pseudos.empty(e)
                },
                header: function (e) {
                    return xt.test(e.nodeName)
                },
                input: function (e) {
                    return wt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (k in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[k] = u(k);
        for (k in {
            submit: !0,
            reset: !0
        }) C.pseudos[k] = l(k);
        d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = n.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[P] ? i.push(o) : r.push(o);
                o = U(e, b(r, i))
            }
            return o
        }, j.sortStable = P.split("").sort(Q).join("") === P, j.detectDuplicates = V, D(), j.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, n, i) {
            return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), j.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, n, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(it, function (e, n, i) {
            var r;
            return i ? t : (r = e.getAttributeNode(n)) && r.specified ? r.value : e[n] === !0 ? n.toLowerCase() : null
        }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var Ct = {};
    ct.Callbacks = function (e) {
        e = "string" == typeof e ? Ct[e] || i(e) : ct.extend({}, e);
        var n, r, o, a, s, u, l = [],
            c = !e.once && [],
            d = function (t) {
                for (r = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
                    if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (c ? c.length && d(c.shift()) : r ? l = [] : p.disable())
            }, p = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        ! function i(t) {
                            ct.each(t, function (t, n) {
                                var r = ct.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), n ? a = l.length : r && (u = t, d(r))
                    }
                    return this
                },
                remove: function () {
                    return l && ct.each(arguments, function (e, t) {
                        for (var i;
                            (i = ct.inArray(t, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, s >= i && s--)
                    }), this
                },
                has: function (e) {
                    return e ? ct.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = c = r = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = t, r || p.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : d(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return p
    }, ct.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ct.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ct.Deferred(function (n) {
                            ct.each(t, function (t, o) {
                                var a = o[0],
                                    s = ct.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ct.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, ct.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = ot.call(arguments),
                a = o.length,
                s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ct.Deferred(),
                l = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? ot.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), i = Array(a); a > r; r++) o[r] && ct.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --s;
            return s || u.resolveWith(i, o), u.promise()
        }
    }), ct.support = function (t) {
        var n, i, r, o, a, s, u, l, c, d = G.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
        o = G.createElement("select"), s = o.appendChild(G.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !! i.style.cssFloat, t.checkOn = !! r.value, t.optSelected = s.selected, t.enctype = !! G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (p) {
            t.deleteExpando = !1
        }
        r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || d.attributes[u].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c, ct(function () {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = G.getElementsByTagName("body")[0];
            a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, i = d.appendChild(G.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = r = i = null)
        }), n = o = a = s = i = r = null, t
    }({});
    var _t = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Nt = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !! e && !s(e)
        },
        data: function (e, t, n) {
            return r(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ct.fn.extend({
        data: function (e, n) {
            var i, r, o = null,
                s = 0,
                u = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(u), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
                    for (i = u.attributes; i.length > s; s++) r = i[s].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), a(u, r, o[r]));
                    ct._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ct.data(this, e, n)
            }) : u ? a(u, e, ct.data(u, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                ct.removeData(this, e)
            })
        }
    }), ct.extend({
        queue: function (e, n, i) {
            var r;
            return e ? (n = (n || "fx") + "queue", r = ct._data(e, n), i && (!r || ct.isArray(i) ? r = ct._data(e, n, ct.makeArray(i)) : r.push(i)), r || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = ct._queueHooks(e, t),
                a = function () {
                    ct.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                empty: ct.Callbacks("once memory").add(function () {
                    ct._removeData(e, t + "queue"), ct._removeData(e, n)
                })
            })
        }
    }), ct.fn.extend({
        queue: function (e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ct.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var i, r = 1,
                o = ct.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --r || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = ct._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Et, St, $t = /[\t\r\n\f]/g,
        Dt = /\r/g,
        qt = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i,
        Mt = /^(?:checked|selected)$/i,
        Lt = ct.support.getSetAttribute,
        Ot = ct.support.input;
    ct.fn.extend({
        attr: function (e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ct.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ct.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, i, r, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : " ")) {
                        for (o = 0; r = t[o++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                        n.className = ct.trim(i)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        n.className = e ? ct.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function (n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, i = 0, r = ct(this), o = e.match(pt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === X || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($t, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = ct.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)) : void 0
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, u = 0 > r ? s : o ? r : 0; s > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ct(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = ct.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, i) {
            var r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === X ? ct.prop(e, n, i) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? St : Et)), i === t ? r && "get" in r && null !== (o = r.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(pt);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Ot && Lt || !Mt.test(n) ? e[i] = !1 : e[ct.camelCase("default-" + n)] = e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(Lt ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, i) {
            var r, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : qt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), St = {
        set: function (e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : Ot && Lt || !Mt.test(n) ? e.setAttribute(!Lt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var i = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = Ot && Lt || !Mt.test(n) ? function (e, n, r) {
            var o = ct.expr.attrHandle[n],
                a = r ? t : (ct.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, a
        } : function (e, n, i) {
            return i ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Ot && Lt || (ct.attrHooks.value = {
        set: function (e, n, i) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : Et && Et.set(e, n, i)
        }
    }), Lt || (Et = {
        set: function (e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, i) {
        var r;
        return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, ct.valHooks.button = {
        get: function (e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        },
        set: Et.set
    }, ct.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Et.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function (e, n) {
        ct.attrHooks[n] = {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(n, "auto"), i) : t
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
        ct.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
        ct.valHooks[this] = {
            set: function (e, n) {
                return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ft = /^(?:input|select|textarea)$/i,
        Ht = /^key/,
        Pt = /^(?:mouse|contextmenu)|click/,
        It = /^(?:focusinfocus|focusoutblur)$/,
        Bt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function (e, n, i, r, o) {
            var a, s, u, l, c, d, p, h, f, m, v, g = ct._data(e);
            if (g) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = ct.guid++), (s = g.events) || (s = g.events = {}), (d = g.handle) || (d = g.handle = function (e) {
                    return typeof ct === X || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), n = (n || "").match(pt) || [""], u = n.length; u--;) a = Bt.exec(n[u]) || [], f = v = a[1], m = (a[2] || "").split(".").sort(), f && (c = ct.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ct.event.special[f] || {}, p = ct.extend({
                    type: f,
                    origType: v,
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, c.setup && c.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), ct.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, u, l, c, d, p, h, f, m, v = ct.hasData(e) && ct._data(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(pt) || [""], l = t.length; l--;)
                    if (s = Bt.exec(t[l]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (d = ct.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = c[h] || [], s = s[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !p.length && (d.teardown && d.teardown.call(e, f, v.handle) !== !1 || ct.removeEvent(e, h, v.handle), delete c[h])
                    } else
                        for (h in c) ct.event.remove(e, h + t[l], n, i, !0);
                ct.isEmptyObject(c) && (delete v.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function (n, i, r, o) {
            var a, s, u, l, c, d, p, h = [r || G],
                f = ut.call(n, "type") ? n.type : n,
                m = ut.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = d = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !It.test(f + ct.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), s = 0 > f.indexOf(":") && "on" + f, n = n[ct.expando] ? n : new ct.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[f] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(r)) {
                    for (l = c.delegateType || f, It.test(l + f) || (u = u.parentNode); u; u = u.parentNode) h.push(u), d = u;
                    d === (r.ownerDocument || G) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (p = 0;
                    (u = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l : c.bindType || f, a = (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"), a && a.apply(u, i), a = s && u[s], a && ct.acceptData(u) && a.apply && a.apply(u, i) === !1 && n.preventDefault();
                if (n.type = f, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && ct.acceptData(r) && s && r[f] && !ct.isWindow(r)) {
                    d = r[s], d && (r[s] = null), ct.event.triggered = f;
                    try {
                        r[f]()
                    } catch (v) {}
                    ct.event.triggered = t, d && (r[s] = d)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ct.event.fix(e);
            var n, i, r, o, a, s = [],
                u = ot.call(arguments),
                l = (ct._data(this, "events") || {})[e.type] || [],
                c = ct.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var i, r, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) r = n[a], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ct(i, this).index(l) >= 0 : ct.find(i, this, null, [l]).length), o[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[ct.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Pt.test(r) ? this.mouseHooks : Ht.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var i, r, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function (e) {
                    return ct.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = G.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n))
    }, ct.Event = function (e, n) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    }, ct.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ct.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !ct.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ct._data(i, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function () {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return ct.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            i = function (e) {
                ct.event.simulate(t, e.target, ct.event.fix(e), !0)
            };
        ct.event.special[t] = {
            setup: function () {
                0 === n++ && G.addEventListener(e, i, !0)
            },
            teardown: function () {
                0 === --n && G.removeEventListener(e, i, !0)
            }
        }
    }), ct.fn.extend({
        on: function (e, n, i, r, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (a in e) this.on(a, n, i, e[a], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = l;
            else if (!r) return this;
            return 1 === o && (s = r, r = function (e) {
                return ct().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ct.guid++)), this.each(function () {
                ct.event.add(this, e, r, i, n)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = l), this.each(function () {
                ct.event.remove(this, e, i, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var i = this[0];
            return i ? ct.event.trigger(e, n, i, !0) : t
        }
    });
    var Rt = /^.[^:#\[\.,]*$/,
        Wt = /^(?:parents|prev(?:Until|All))/,
        zt = ct.expr.match.needsContext,
        Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (ct.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) ct.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = ct(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (ct.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(p(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(p(this, e || [], !1))
        },
        is: function (e) {
            return !!p(this, "string" == typeof e && zt.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                i = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ct.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ct.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ct.dir(e, "parentNode", n)
        },
        next: function (e) {
            return d(e, "nextSibling")
        },
        prev: function (e) {
            return d(e, "previousSibling")
        },
        nextAll: function (e) {
            return ct.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ct.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ct.sibling(e.firstChild)
        },
        contents: function (e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }
    }, function (e, t) {
        ct.fn[e] = function (n, i) {
            var r = ct.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (Ut[e] || (r = ct.unique(r)), Wt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    }), ct.extend({
        filter: function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ct.find.matchesSelector(i, e) ? [i] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ct(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Qt = / jQuery\d+="(?:null|\d+)"/g,
        Xt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        Yt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Jt = /<([\w:]+)/,
        Kt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, un = h(G),
        ln = un.appendChild(G.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
        text: function (e) {
            return ct.access(this, function (e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? ct.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ct.cleanData(w(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && g(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ct.clone(this, e, t)
            })
        },
        html: function (e) {
            return ct.access(this, function (e) {
                var n = this[0] || {}, i = 0,
                    r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Xt.test(e) || !ct.support.leadingWhitespace && Yt.test(e) || sn[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(w(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = ct.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var i = e[t++],
                    r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = it.apply([], e);
            var i, r, o, a, s, u, l = 0,
                c = this.length,
                d = this,
                p = c - 1,
                h = e[0],
                f = ct.isFunction(h);
            if (f || !(1 >= c || "string" != typeof h || ct.support.checkClone) && nn.test(h)) return this.each(function (i) {
                var r = d.eq(i);
                f && (e[0] = h.call(this, i, r.html())), r.domManip(e, t, n)
            });
            if (c && (u = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
                for (a = ct.map(w(u, "script"), m), o = a.length; c > l; l++) r = u, l !== p && (r = ct.clone(r, !0, !0), o && ct.merge(a, w(r, "script"))), t.call(this[l], r, l);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ct.map(a, v), l = 0; o > l; l++) r = a[l], rn.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(s, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
                u = i = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ct.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = ct(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ct(o[i])[t](n), rt.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ct.extend({
        clone: function (e, t, n) {
            var i, r, o, a, s, u = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                for (i = w(o), s = w(e), a = 0; null != (r = s[a]); ++a) i[a] && b(r, i[a]);
            if (t)
                if (n)
                    for (s = s || w(e), i = i || w(o), a = 0; null != (r = s[a]); a++) y(r, i[a]);
                else y(e, o);
            return i = w(o, "script"), i.length > 0 && g(i, !u && w(e, "script")), i = s = r = null, o
        },
        buildFragment: function (e, t, n, i) {
            for (var r, o, a, s, u, l, c, d = e.length, p = h(t), f = [], m = 0; d > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === ct.type(o)) ct.merge(f, o.nodeType ? [o] : o);
                    else if (Zt.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Jt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!ct.support.leadingWhitespace && Yt.test(o) && f.push(t.createTextNode(Yt.exec(o)[0])), !ct.support.tbody)
                    for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ct.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ct.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else f.push(t.createTextNode(o));
            for (s && p.removeChild(s), ct.support.appendChecked || ct.grep(w(f, "input"), x), m = 0; o = f[m++];)
                if ((!i || -1 === ct.inArray(o, i)) && (a = ct.contains(o.ownerDocument, o), s = w(p.appendChild(o), "script"), a && g(s), n))
                    for (r = 0; o = s[r++];) rn.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = ct.expando, u = ct.cache, l = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++)
                if ((t || ct.acceptData(n)) && (r = n[s], o = r && u[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
                    u[r] && (delete u[r], l ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, tt.push(r))
                }
        },
        _evalUrl: function (e) {
            return ct.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ct.fn.extend({
        wrapAll: function (e) {
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return ct.isFunction(e) ? this.each(function (t) {
                ct(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ct(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ct.isFunction(e);
            return this.each(function (n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, dn, pn, hn = /alpha\([^)]*\)/i,
        fn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        vn = /^(none|table(?!-c[ea]).+)/,
        gn = /^margin/,
        yn = RegExp("^(" + dt + ")(.*)$", "i"),
        bn = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
        wn = RegExp("^([+-])=(" + dt + ")", "i"),
        xn = {
            BODY: "block"
        }, kn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, jn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Tn = ["Top", "Right", "Bottom", "Left"],
        Cn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function (e, n) {
            return ct.access(this, function (e, n, i) {
                var r, o, a = {}, s = 0;
                if (ct.isArray(n)) {
                    for (o = dn(e), r = n.length; r > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                    return a
                }
                return i !== t ? ct.style(e, n, i) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                j(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ct.camelCase(n),
                    l = e.style;
                if (n = ct.cssProps[u] || (ct.cssProps[u] = k(l, u)), s = ct.cssHooks[n] || ct.cssHooks[u], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : l[n];
                if (a = typeof i, "string" === a && (o = wn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ct.cssNumber[u] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                    l[n] = i
                } catch (c) {}
            }
        },
        css: function (e, n, i, r) {
            var o, a, s, u = ct.camelCase(n);
            return n = ct.cssProps[u] || (ct.cssProps[u] = k(e.style, u)), s = ct.cssHooks[n] || ct.cssHooks[u], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = pn(e, n, r)), "normal" === a && n in jn && (a = jn[n]), "" === i || i ? (o = parseFloat(a), i === !0 || ct.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (dn = function (t) {
        return e.getComputedStyle(t, null)
    }, pn = function (e, n, i) {
        var r, o, a, s = i || dn(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || ct.contains(e.ownerDocument, e) || (u = ct.style(e, n)), bn.test(u) && gn.test(n) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = r, l.minWidth = o, l.maxWidth = a)), u
    }) : G.documentElement.currentStyle && (dn = function (e) {
        return e.currentStyle
    }, pn = function (e, n, i) {
        var r, o, a, s = i || dn(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !mn.test(n) && (r = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = r, a && (o.left = a)), "" === u ? "auto" : u
    }), ct.each(["height", "width"], function (e, n) {
        ct.cssHooks[n] = {
            get: function (e, i, r) {
                return i ? 0 === e.offsetWidth && vn.test(ct.css(e, "display")) ? ct.swap(e, kn, function () {
                    return N(e, n, r)
                }) : N(e, n, r) : t
            },
            set: function (e, t, i) {
                var r = i && dn(e);
                return C(e, t, i ? _(e, n, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function (e, t) {
            return fn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = hn.test(o) ? o.replace(hn, r) : o + " " + r)
        }
    }), ct(function () {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ct.swap(e, {
                    display: "inline-block"
                }, pn, [e, "marginRight"]) : t
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) {
            ct.cssHooks[n] = {
                get: function (e, i) {
                    return i ? (i = pn(e, n), bn.test(i) ? ct(e).position()[n] + "px" : i) : t
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function (e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ct.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Tn[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, gn.test(e) || (ct.cssHooks[e + t].set = C)
    });
    var _n = /%20/g,
        Nn = /\[\]$/,
        En = /\r?\n/g,
        Sn = /^(?:submit|button|image|reset|file)$/i,
        $n = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function () {
            return ct.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && $n.test(this.nodeName) && !Sn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), ct.param = function (e, n) {
        var i, r = [],
            o = function (e, t) {
                t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (i in e) $(i, e[i], n, o);
        return r.join("&").replace(_n, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ct.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn, qn, An = ct.now(),
        Mn = /\?/,
        Ln = /#.*$/,
        On = /([?&])_=[^&]*/,
        Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        In = /^\/\//,
        Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rn = ct.fn.load,
        Wn = {}, zn = {}, Un = "*/".concat("*");
    try {
        qn = Y.href
    } catch (Vn) {
        qn = G.createElement("a"), qn.href = "", qn = qn.href
    }
    Dn = Bn.exec(qn.toLowerCase()) || [], ct.fn.load = function (e, n, i) {
        if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
        var r, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e)
        }).complete(i && function (e, t) {
            s.each(i, o || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ct.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qn,
            type: "GET",
            isLocal: Hn.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? A(A(e, ct.ajaxSettings), t) : A(ct.ajaxSettings, e)
        },
        ajaxPrefilter: D(Wn),
        ajaxTransport: D(zn),
        ajax: function (e, n) {
            function i(e, n, i, r) {
                var o, d, y, b, x, j = n;
                2 !== w && (w = 2, u && clearTimeout(u), c = t, s = r || "", k.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = M(p, k, i)), b = L(p, b, k, o), o ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ct.lastModified[a] = x), x = k.getResponseHeader("etag"), x && (ct.etag[a] = x)), 204 === e || "HEAD" === p.type ? j = "nocontent" : 304 === e ? j = "notmodified" : (j = b.state, d = b.data, y = b.error, o = !y)) : (y = j, (e || !j) && (j = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || j) + "", o ? m.resolveWith(h, [d, j, k]) : m.rejectWith(h, [k, j, y]), k.statusCode(g), g = t, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [k, p, o ? d : y]), v.fireWith(h, [k, j]), l && (f.trigger("ajaxComplete", [k, p]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, a, s, u, l, c, d, p = ct.ajaxSetup({}, n),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? ct(h) : ct.event,
                m = ct.Deferred(),
                v = ct.Callbacks("once memory"),
                g = p.statusCode || {}, y = {}, b = {}, w = 0,
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = Fn.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) g[t] = [g[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (m.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || qn) + "").replace(Ln, "").replace(In, Dn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (r = Bn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Dn[1] && r[2] === Dn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Dn[3] || ("http:" === Dn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), q(Wn, p, n, k), 2 === w) return k;
            l = p.global, l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Mn.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = On.test(a) ? a.replace(On, "$1_=" + An++) : a + (Mn.test(a) ? "&" : "?") + "_=" + An++)), p.ifModified && (ct.lastModified[a] && k.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && k.setRequestHeader("If-None-Match", ct.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) k.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(h, k, p) === !1 || 2 === w)) return k.abort();
            x = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) k[o](p[o]);
            if (c = q(zn, p, n, k)) {
                k.readyState = 1, l && f.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, c.send(y, i)
                } catch (j) {
                    if (!(2 > w)) throw j;
                    i(-1, j)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function (e, n) {
        ct[n] = function (e, i, r, o) {
            return ct.isFunction(i) && (o = o || r, r = i, i = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }), ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ct.globalEval(e), e
            }
        }
    }), ct.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = G.head || ct("head")[0] || G.documentElement;
            return {
                send: function (t, r) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Qn = [],
        Xn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Qn.pop() || ct.expando + "_" + An++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, a, s, u = n.jsonp !== !1 && (Xn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Xn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ct.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, r.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Qn.push(o)), s && ct.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Yn, Gn, Jn = 0,
        Kn = e.ActiveXObject && function () {
            var e;
            for (e in Yn) Yn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && O() || F()
    } : O, Gn = ct.ajaxSettings.xhr(), ct.support.cors = !! Gn && "withCredentials" in Gn, Gn = ct.support.ajax = !! Gn, Gn && ct.ajaxTransport(function (n) {
        if (!n.crossDomain || ct.support.cors) {
            var i;
            return {
                send: function (r, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r) u.setRequestHeader(s, r[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), i = function (e, r) {
                        var s, l, c, d;
                        try {
                            if (i && (r || 4 === u.readyState))
                                if (i = t, a && (u.onreadystatechange = ct.noop, Kn && delete Yn[a]), r) 4 !== u.readyState && u.abort();
                                else {
                                    d = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (d.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (p) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (h) {
                            r || o(-1, h)
                        }
                        d && o(s, c, d, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(i) : (a = ++Jn, Kn && (Yn || (Yn = {}, ct(e).unload(Kn)), Yn[a] = i), u.onreadystatechange = i) : i()
                },
                abort: function () {
                    i && i(t, !0)
                }
            }
        }
    });
    var Zn, ei, ti = /^(?:toggle|show|hide)$/,
        ni = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        ri = [R],
        oi = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = ni.exec(t),
                        o = r && r[3] || (ct.cssNumber[e] ? "" : "px"),
                        a = (ct.cssNumber[e] || "px" !== o && +i) && ni.exec(ct.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, ct.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --u)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }
            ]
        };
    ct.Animation = ct.extend(I, {
        tweener: function (e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? ri.unshift(e) : ri.push(e)
        }
    }), ct.Tween = W, W.prototype = {
        constructor: W,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = W.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
        }
    }), ct.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(j).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = ct.isEmptyObject(e),
                o = ct.speed(t, n, i),
                a = function () {
                    var t = I(this, ct.extend({}, e), o);
                    (r || ct._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, i) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ct.timers,
                    a = ct._data(this);
                if (n) a[n] && a[n].stop && r(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && ii.test(n) && r(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                (t || !i) && ct.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ct._data(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = ct.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ct.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), ct.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
        }, i
    }, ct.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = W.prototype.init, ct.fx.tick = function () {
        var e, n = ct.timers,
            i = 0;
        for (Zn = ct.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
        ei || (ei = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
        clearInterval(ei), ei = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
        return ct.grep(ct.timers, function (t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, i, r = {
                top: 0,
                left: 0
            }, o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (r = o.getBoundingClientRect()), i = U(a), {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r) : void 0
    }, ct.offset = {
        setOffset: function (e, t, n) {
            var i = ct.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, a = ct(e),
                s = a.offset(),
                u = ct.css(e, "top"),
                l = ct.css(e, "left"),
                c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [u, l]) > -1,
                d = {}, p = {};
            c ? (p = a.position(), r = p.top, o = p.left) : (r = parseFloat(u) || 0, o = parseFloat(l) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, ct.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(i, "marginTop", !0),
                    left: t.left - n.left - ct.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || J; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || J
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var i = /Y/.test(n);
        ct.fn[e] = function (r) {
            return ct.access(this, function (e, r, o) {
                var a = U(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? ct(a).scrollLeft() : o, i ? o : ct(a).scrollTop()) : e[r] = o, t)
            }, e, r, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (i, r) {
            ct.fn[r] = function (r, o) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    s = i || (r === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function (n, i, r) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ct.css(n, i, s) : ct.style(n, i, r, s)
                }, n, a ? r : t, a, null)
            }
        })
    }), ct.fn.size = function () {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ct
    }))
}(window),
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function (e, t) {
    function n(t, n) {
        var r = t.nodeName.toLowerCase();
        if ("area" === r) {
            var o, a = t.parentNode,
                s = a.name;
            return t.href && s && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap=#" + s + "]")[0], !! o && i(o)) : !1
        }
        return (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" == r ? t.href || n : n) && i(t)
    }

    function i(t) {
        return !e(t).parents().andSelf().filter(function () {
            return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.22",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function (t, n) {
            return "number" == typeof t ? this.each(function () {
                var i = this;
                setTimeout(function () {
                    e(i).focus(), n && n.call(i)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length)
                for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    o = o.parent()
                }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, i) {
        function r(t, n, i, r) {
            return e.each(o, function () {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, i && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), r && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function (n) {
            return n === t ? s["inner" + i].call(this) : this.each(function () {
                e(this).css(a, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, r(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var i = e.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
        plugin: {
            add: function (t, n, i) {
                var r = e.ui[t].prototype;
                for (var o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
            },
            call: function (e, t, n) {
                var i = e.plugins[t];
                if (i && e.element[0].parentNode)
                    for (var r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
        },
        hasScroll: function (t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function (e, t, n) {
            return e > t && t + n > e
        },
        isOver: function (t, n, i, r, o, a) {
            return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, a)
        }
    }))
}(jQuery),
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var i, r = 0; null != (i = t[r]); r++) try {
                e(i).triggerHandler("remove")
            } catch (o) {}
            n(t)
        }
    } else {
        var i = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), i.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, i) {
        var r, o = t.split(".")[0];
        t = t.split(".")[1], r = o + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r] = function (n) {
            return !!e.data(n, t)
        }, e[o] = e[o] || {}, e[o][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var a = new n;
        a.options = e.extend(!0, {}, a.options), e[o][t].prototype = e.extend(!0, a, {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: r
        }, i), e.widget.bridge(t, e[o][t])
    }, e.widget.bridge = function (n, i) {
        e.fn[n] = function (r) {
            var o = "string" == typeof r,
                a = Array.prototype.slice.call(arguments, 1),
                s = this;
            return r = !o && a.length ? e.extend.apply(null, [!0, r].concat(a)) : r, o && "_" === r.charAt(0) ? s : (o ? this.each(function () {
                var i = e.data(this, n),
                    o = i && e.isFunction(i[r]) ? i[r].apply(i, a) : i;
                return o !== i && o !== t ? (s = o, !1) : void 0
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new i(r, this))
            }), s)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var i = this;
            this.element.bind("remove." + this.widgetName, function () {
                i.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, i) {
            var r = n;
            if (0 === arguments.length) return e.extend({}, this.options);
            if ("string" == typeof n) {
                if (i === t) return this.options[n];
                r = {}, r[n] = i
            }
            return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, i) {
            var r, o, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent, o)
                for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.call(this.element[0], n, i) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery),
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    r = 1 == n.which,
                    o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.slider.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function (e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var n = this,
                i = this.options,
                r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                a = i.values && i.values.length || 1,
                s = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && 2 !== i.values.length && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === i.range || "max" === i.range ? " ui-slider-range-" + i.range : "")));
            for (var u = r.length; a > u; u += 1) s.push(o);
            this.handles = r.add(e(s.join("")).appendTo(n.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).hover(function () {
                i.disabled || e(this).addClass("ui-state-hover")
            }, function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function (i) {
                var r, o, a, s, u = e(this).data("index.ui-slider-handle");
                if (!n.options.disabled) {
                    switch (i.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i.preventDefault(), !n._keySliding && (n._keySliding = !0, e(this).addClass("ui-state-active"), r = n._start(i, u), r === !1)) return
                    }
                    switch (s = n.options.step, o = a = n.options.values && n.options.values.length ? n.values(u) : n.value(), i.keyCode) {
                    case e.ui.keyCode.HOME:
                        a = n._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        a = n._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        a = n._trimAlignValue(o + (n._valueMax() - n._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        a = n._trimAlignValue(o - (n._valueMax() - n._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (o === n._valueMax()) return;
                        a = n._trimAlignValue(o + s);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (o === n._valueMin()) return;
                        a = n._trimAlignValue(o - s)
                    }
                    n._slide(i, u, a)
                }
            }).keyup(function (t) {
                var i = e(this).data("index.ui-slider-handle");
                n._keySliding && (n._keySliding = !1, n._stop(t, i), n._change(t, i), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n, i, r, o, a, s, u, l, c, d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, a = this, this.handles.each(function (t) {
                var n = Math.abs(i - a.values(t));
                r > n && (r = n, o = e(this), s = t)
            }), d.range === !0 && this.values(1) === d.min && (s += 1, o = e(this.handles[s])), u = this._start(t, s), u === !1 ? !1 : (this._mouseSliding = !0, a._handleIndex = s, o.addClass("ui-state-active").focus(), l = o.offset(), c = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - l.left - o.width() / 2,
                top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, n, i, r, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / t, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), o = this._valueMin() + i * r, this._trimAlignValue(o)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > i || 1 === t && i > n) && (n = i), n !== this.values(t) && (r = this.values(), r[t] = n, o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), i = this.values(t ? 0 : 1), o !== !1 && this.values(t, n, !0))) : n !== this.value() && (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), o !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (t, n) {
            var i, r, o;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (i = this.options.values, r = arguments[0], o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(r[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var i, r = 0;
            switch (e.isArray(this.options.values) && (r = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
            case "disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, n, i;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
            return n
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                i = e - n;
            return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, n, i, r, o, a = this.options.range,
                s = this.options,
                u = this,
                l = this._animateOff ? !1 : s.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function (i) {
                t = 100 * ((u.values(i) - u._valueMin()) / (u._valueMax() - u._valueMin())), c["horizontal" === u.orientation ? "left" : "bottom"] = t + "%", e(this).stop(1, 1)[l ? "animate" : "css"](c, s.animate), u.options.range === !0 && ("horizontal" === u.orientation ? (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: t + "%"
                }, s.animate), 1 === i && u.range[l ? "animate" : "css"]({
                    width: t - n + "%"
                }, {
                    queue: !1,
                    duration: s.animate
                })) : (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: t + "%"
                }, s.animate), 1 === i && u.range[l ? "animate" : "css"]({
                    height: t - n + "%"
                }, {
                    queue: !1,
                    duration: s.animate
                }))), n = t
            }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), t = o !== r ? 100 * ((i - r) / (o - r)) : 0, c["horizontal" === u.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, s.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: t + "%"
            }, s.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: s.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: t + "%"
            }, s.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: s.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.22"
    })
}(jQuery), /*! Video.js v4.2.1 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
function () {
    function m() {
        return function () {}
    }

    function p(e) {
        return function () {
            return this[e]
        }
    }

    function q(e) {
        return function () {
            return e
        }
    }

    function u(e, t, n) {
        if ("string" == typeof e) {
            if (0 === e.indexOf("#") && (e = e.slice(1)), u.wa[e]) return u.wa[e];
            e = u.v(e)
        }
        if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return e.player || new u.w(e, t, n)
    }

    function D(e) {
        e.t("vjs-lock-showing")
    }

    function E(e, t, n, i) {
        return n !== b ? (e.a.style[t] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n : "auto" === n ? "" : n + "px", i || e.j("resize"), e) : e.a ? (n = e.a.style[t], i = n.indexOf("px"), -1 !== i ? parseInt(n.slice(0, i), 10) : parseInt(e.a["offset" + u.$(t)], 10)) : 0
    }

    function F(e, t) {
        var n, i, r, o;
        return n = e.a, i = u.Xc(n), o = r = n.offsetWidth, n = e.handle, e.g.zd ? (o = i.top, i = t.changedTouches ? t.changedTouches[0].pageY : t.pageY, n && (n = n.v().offsetHeight, o += n / 2, r -= n), Math.max(0, Math.min(1, (o - i + r) / r))) : (r = i.left, i = t.changedTouches ? t.changedTouches[0].pageX : t.pageX, n && (n = n.v().offsetWidth, r += n / 2, o -= n), Math.max(0, Math.min(1, (i - r) / o)))
    }

    function ca(e, t) {
        e.Z(t), t.d("click", u.bind(e, function () {
            D(this)
        }))
    }

    function H(e) {
        e.oa = f, e.va.m("vjs-lock-showing"), e.a.setAttribute("aria-pressed", f), e.J && 0 < e.J.length && e.J[0].v().focus()
    }

    function G(e) {
        e.oa = l, D(e.va), e.a.setAttribute("aria-pressed", l)
    }

    function da(e) {
        var t = {
            sources: [],
            tracks: []
        };
        if (u.k.B(t, u.wb(e)), e.hasChildNodes()) {
            var n, i, r, o;
            for (e = e.childNodes, r = 0, o = e.length; o > r; r++) n = e[r], i = n.nodeName.toLowerCase(), "source" === i ? t.sources.push(u.wb(n)) : "track" === i && t.tracks.push(u.wb(n))
        }
        return t
    }

    function J(e, t, n) {
        e.h ? (e.aa = l, e.h.D(), e.Db && (e.Db = l, clearInterval(e.Qa)), e.Eb && K(e), e.h = l) : "Html5" !== t && e.F && (e.a.removeChild(e.F), e.F.player = j, e.F = j), e.ia = t, e.aa = l;
        var i = u.k.B({
            source: n,
            parentEl: e.a
        }, e.g[t.toLowerCase()]);
        n && (n.src == e.u.src && 0 < e.u.currentTime && (i.startTime = e.u.currentTime), e.u.src = n.src), e.h = new window.videojs[t](e, i), e.h.M(function () {
            if (this.b.Ta(), !this.l.progressEvents) {
                var e = this.b;
                e.Db = f, e.Qa = setInterval(u.bind(e, function () {
                    this.u.kb < this.buffered().end(0) ? this.j("progress") : 1 == this.Ia() && (clearInterval(this.Qa), this.j("progress"))
                }), 500), e.h.U("progress", function () {
                    this.l.progressEvents = f;
                    var e = this.b;
                    e.Db = l, clearInterval(e.Qa)
                })
            }
            this.l.timeupdateEvents || (e = this.b, e.Eb = f, e.d("play", e.yc), e.d("pause", e.ya), e.h.U("timeupdate", function () {
                this.l.timeupdateEvents = f, K(this.b)
            }))
        })
    }

    function K(e) {
        e.Eb = l, e.ya(), e.n("play", e.yc), e.n("pause", e.ya)
    }

    function M(e, t, n) {
        if (e.h && !e.h.aa) e.h.M(function () {
            this[t](n)
        });
        else try {
            e.h[t](n)
        } catch (i) {
            throw u.log(i), i
        }
    }

    function L(e, t) {
        if (e.h && e.h.aa) try {
            return e.h[t]()
        } catch (n) {
            throw e.h[t] === b ? u.log("Video.js: " + t + " method not defined for " + e.ia + " playback technology.", n) : "TypeError" == n.name ? (u.log("Video.js: " + t + " unavailable on " + e.ia + " playback technology element.", n), e.h.aa = l) : u.log(n), n
        }
    }

    function N(e) {
        e.Zc = l, u.n(document, "keydown", e.hc), document.documentElement.style.overflow = e.Uc, u.t(document.body, "vjs-full-window"), e.j("exitFullWindow")
    }

    function I(e, t) {
        return t !== b ? (t = !! t, t !== e.Ob && ((e.Ob = t) ? (e.ja = f, e.t("vjs-user-inactive"), e.m("vjs-user-active"), e.j("useractive")) : (e.ja = l, e.h.U("mousemove", function (e) {
            e.stopPropagation(), e.preventDefault()
        }), e.t("vjs-user-active"), e.m("vjs-user-inactive"), e.j("userinactive"))), e) : e.Ob
    }

    function ea() {
        var e = u.media.Ua[i];
        return function () {
            throw Error('The "' + e + "\" method is not available on the playback technology's API")
        }
    }

    function fa() {
        var e = S[U],
            t = e.charAt(0).toUpperCase() + e.slice(1);
        R["set" + t] = function (t) {
            return this.a.vjs_setProperty(e, t)
        }
    }

    function V(e) {
        R[e] = function () {
            return this.a.vjs_getProperty(e)
        }
    }

    function W(e) {
        return e.za = e.za || [], e.za
    }

    function X(e, t, n) {
        for (var i, r, o = e.za, a = 0, s = o.length; s > a; a++) i = o[a], i.id() === t ? (i.show(), r = i) : n && i.K() == n && 0 < i.mode() && i.disable();
        (t = r ? r.K() : n ? n : l) && e.j(t + "trackchange")
    }

    function Y(e) {
        0 === e.ha && e.load(), 0 === e.ga && (e.b.d("timeupdate", u.bind(e, e.update, e.Q)), e.b.d("ended", u.bind(e, e.reset, e.Q)), ("captions" === e.A || "subtitles" === e.A) && e.b.V.textTrackDisplay.Z(e))
    }

    function ga(e) {
        var t = e.split(":");
        e = 0;
        var n, i, r;
        return 3 == t.length ? (n = t[0], i = t[1], t = t[2]) : (n = 0, i = t[0], t = t[1]), t = t.split(/\s+/), t = t.splice(0, 1)[0], t = t.split(/\.|,/), r = parseFloat(t[1]), t = t[0], e += 3600 * parseFloat(n), e += 60 * parseFloat(i), e += parseFloat(t), r && (e += r / 1e3), e
    }

    function $(e, t) {
        var n = e.split("."),
            i = ha;
        !(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
        for (var r; n.length && (r = n.shift());) n.length || t === b ? i = i[r] ? i[r] : i[r] = {} : i[r] = t
    }
    var b = void 0,
        f = !0,
        j = null,
        l = !1,
        t;
    document.createElement("video"), document.createElement("audio"), document.createElement("track");
    var v = u;
    window.Qd = window.Rd = u, u.Rb = "4.2", u.Bc = "https:" == document.location.protocol ? "https://" : "http://", u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
    }, "GENERATED_CDN_VSN" !== u.Rb && (v.options.flash.swf = u.Bc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf"), u.wa = {}, u.ka = u.CoreObject = m(), u.ka.extend = function (e) {
        var t, n;
        e = e || {}, t = e.init || e.i || this.prototype.init || this.prototype.i || m(), n = function () {
            t.apply(this, arguments)
        }, n.prototype = u.k.create(this.prototype), n.prototype.constructor = n, n.extend = u.ka.extend, n.create = u.ka.create;
        for (var i in e) e.hasOwnProperty(i) && (n.prototype[i] = e[i]);
        return n
    }, u.ka.create = function () {
        var e = u.k.create(this.prototype);
        return this.apply(e, arguments), e
    }, u.d = function (e, t, n) {
        var i = u.getData(e);
        i.z || (i.z = {}), i.z[t] || (i.z[t] = []), n.s || (n.s = u.s++), i.z[t].push(n), i.W || (i.disabled = l, i.W = function (t) {
            if (!i.disabled) {
                t = u.gc(t);
                var n = i.z[t.type];
                if (n)
                    for (var n = n.slice(0), r = 0, o = n.length; o > r && !t.lc(); r++) n[r].call(e, t)
            }
        }), 1 == i.z[t].length && (document.addEventListener ? e.addEventListener(t, i.W, l) : document.attachEvent && e.attachEvent("on" + t, i.W))
    }, u.n = function (e, t, n) {
        if (u.kc(e)) {
            var i = u.getData(e);
            if (i.z)
                if (t) {
                    var r = i.z[t];
                    if (r) {
                        if (n) {
                            if (n.s)
                                for (i = 0; i < r.length; i++) r[i].s === n.s && r.splice(i--, 1)
                        } else i.z[t] = [];
                        u.dc(e, t)
                    }
                } else
                    for (r in i.z) t = r, i.z[t] = [], u.dc(e, t)
        }
    }, u.dc = function (e, t) {
        var n = u.getData(e);
        0 === n.z[t].length && (delete n.z[t], document.removeEventListener ? e.removeEventListener(t, n.W, l) : document.detachEvent && e.detachEvent("on" + t, n.W)), u.Ab(n.z) && (delete n.z, delete n.W, delete n.disabled), u.Ab(n) && u.qc(e)
    }, u.gc = function (e) {
        function t() {
            return f
        }

        function n() {
            return l
        }
        if (!e || !e.Bb) {
            var i = e || window.event;
            e = {};
            for (var r in i) "layerX" !== r && "layerY" !== r && (e[r] = i[r]);
            if (e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function () {
                i.preventDefault && i.preventDefault(), e.returnValue = l, e.zb = t
            }, e.zb = n, e.stopPropagation = function () {
                i.stopPropagation && i.stopPropagation(), e.cancelBubble = f, e.Bb = t
            }, e.Bb = n, e.stopImmediatePropagation = function () {
                i.stopImmediatePropagation && i.stopImmediatePropagation(), e.lc = t, e.stopPropagation()
            }, e.lc = n, e.clientX != j) {
                r = document.documentElement;
                var o = document.body;
                e.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode, e.button != j && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e
    }, u.j = function (e, t) {
        var n = u.kc(e) ? u.getData(e) : {}, i = e.parentNode || e.ownerDocument;
        return "string" == typeof t && (t = {
            type: t,
            target: e
        }), t = u.gc(t), n.W && n.W.call(e, t), i && !t.Bb() && t.bubbles !== l ? u.j(i, t) : i || t.zb() || (n = u.getData(t.target), !t.target[t.type]) || (n.disabled = f, "function" == typeof t.target[t.type] && t.target[t.type](), n.disabled = l), !t.zb()
    }, u.U = function (e, t, n) {
        function i() {
            u.n(e, t, i), n.apply(this, arguments)
        }
        i.s = n.s = n.s || u.s++, u.d(e, t, i)
    };
    var w = Object.prototype.hasOwnProperty;
    u.e = function (e, t) {
        var n, i;
        n = document.createElement(e || "div");
        for (i in t) w.call(t, i) && (-1 !== i.indexOf("aria-") || "role" == i ? n.setAttribute(i, t[i]) : n[i] = t[i]);
        return n
    }, u.$ = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, u.k = {}, u.k.create = Object.create || function (e) {
        function t() {}
        return t.prototype = e, new t
    }, u.k.ta = function (e, t, n) {
        for (var i in e) w.call(e, i) && t.call(n || this, i, e[i])
    }, u.k.B = function (e, t) {
        if (!t) return e;
        for (var n in t) w.call(t, n) && (e[n] = t[n]);
        return e
    }, u.k.fc = function (e, t) {
        var n, i, r;
        e = u.k.copy(e);
        for (n in t) w.call(t, n) && (i = e[n], r = t[n], e[n] = u.k.mc(i) && u.k.mc(r) ? u.k.fc(i, r) : t[n]);
        return e
    }, u.k.copy = function (e) {
        return u.k.B({}, e)
    }, u.k.mc = function (e) {
        return !!e && "object" == typeof e && "[object Object]" === e.toString() && e.constructor === Object
    }, u.bind = function (e, t, n) {
        function i() {
            return t.apply(e, arguments)
        }
        return t.s || (t.s = u.s++), i.s = n ? n + "_" + t.s : t.s, i
    }, u.qa = {}, u.s = 1, u.expando = "vdata" + (new Date).getTime(), u.getData = function (e) {
        var t = e[u.expando];
        return t || (t = e[u.expando] = u.s++, u.qa[t] = {}), u.qa[t]
    }, u.kc = function (e) {
        return e = e[u.expando], !(!e || u.Ab(u.qa[e]))
    }, u.qc = function (e) {
        var t = e[u.expando];
        if (t) {
            delete u.qa[t];
            try {
                delete e[u.expando]
            } catch (n) {
                e.removeAttribute ? e.removeAttribute(u.expando) : e[u.expando] = j
            }
        }
    }, u.Ab = function (e) {
        for (var t in e)
            if (e[t] !== j) return l;
        return f
    }, u.m = function (e, t) {
        -1 == (" " + e.className + " ").indexOf(" " + t + " ") && (e.className = "" === e.className ? t : e.className + " " + t)
    }, u.t = function (e, t) {
        var n, i;
        if (-1 != e.className.indexOf(t)) {
            for (n = e.className.split(" "), i = n.length - 1; i >= 0; i--) n[i] === t && n.splice(i, 1);
            e.className = n.join(" ")
        }
    }, u.ma = u.e("video"), u.G = navigator.userAgent, u.Hc = /iPhone/i.test(u.G), u.Gc = /iPad/i.test(u.G), u.Ic = /iPod/i.test(u.G), u.Fc = u.Hc || u.Gc || u.Ic;
    var aa = u,
        x, y = u.G.match(/OS (\d+)_/i);
    x = y && y[1] ? y[1] : b, aa.Cd = x, u.Dc = /Android/i.test(u.G);
    var ba = u,
        z, A = u.G.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        B, C;
    A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : j) : z = j, ba.Cc = z, u.Jc = u.Dc && /webkit/i.test(u.G) && 2.3 > u.Cc, u.Ec = /Firefox/i.test(u.G), u.Dd = /Chrome/i.test(u.G), u.Mc = "ontouchstart" in window, u.wb = function (e) {
        var t, n, i, r;
        if (t = {}, e && e.attributes && 0 < e.attributes.length) {
            n = e.attributes;
            for (var o = n.length - 1; o >= 0; o--) i = n[o].name, r = n[o].value, ("boolean" == typeof e[i] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",")) && (r = r !== j ? f : l), t[i] = r
        }
        return t
    }, u.Hd = function (e, t) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n
    }, u.yb = function (e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }, u.Nb = {}, u.v = function (e) {
        return 0 === e.indexOf("#") && (e = e.slice(1)), document.getElementById(e)
    }, u.Ka = function (e, t) {
        t = t || e;
        var n = Math.floor(e % 60),
            i = Math.floor(e / 60 % 60),
            r = Math.floor(e / 3600),
            o = Math.floor(t / 60 % 60),
            a = Math.floor(t / 3600);
        return (isNaN(e) || 1 / 0 === e) && (r = i = n = "-"), r = r > 0 || a > 0 ? r + ":" : "", r + (((r || o >= 10) && 10 > i ? "0" + i : i) + ":") + (10 > n ? "0" + n : n)
    }, u.Pc = function () {
        document.body.focus(), document.onselectstart = q(l)
    }, u.yd = function () {
        document.onselectstart = q(f)
    }, u.trim = function (e) {
        return (e + "").replace(/^\s+|\s+$/g, "")
    }, u.round = function (e, t) {
        return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    }, u.sb = function (e, t) {
        return {
            length: 1,
            start: function () {
                return e
            },
            end: function () {
                return t
            }
        }
    }, u.get = function (e, t, n) {
        var i, r;
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function () {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (n) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }), r = new XMLHttpRequest;
        try {
            r.open("GET", e)
        } catch (o) {
            n(o)
        }
        i = 0 === e.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === e.indexOf("http"), r.onreadystatechange = function () {
            4 === r.readyState && (200 === r.status || i && 0 === r.status ? t(r.responseText) : n && n())
        };
        try {
            r.send()
        } catch (a) {
            n && n(a)
        }
    }, u.qd = function (e) {
        try {
            var t = window.localStorage || l;
            t && (t.volume = e)
        } catch (n) {
            22 == n.code || 1014 == n.code ? u.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? u.log("LocalStorage not allowed (VideoJS)", n) : u.log("LocalStorage Error (VideoJS)", n)
        }
    }, u.ic = function (e) {
        return e.match(/^https?:\/\//) || (e = u.e("div", {
            innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href), e
    }, u.log = function () {
        u.log.history = u.log.history || [], u.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments))
    }, u.Xc = function (e) {
        var t, n;
        return e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), t ? (e = document.documentElement, n = document.body, {
            left: t.left + (window.pageXOffset || n.scrollLeft) - (e.clientLeft || n.clientLeft || 0),
            top: t.top + (window.pageYOffset || n.scrollTop) - (e.clientTop || n.clientTop || 0)
        }) : {
            left: 0,
            top: 0
        }
    }, u.c = u.ka.extend({
        i: function (e, t, n) {
            if (this.b = e, this.g = u.k.copy(this.g), t = this.options(t), this.Q = t.id || (t.el && t.el.id ? t.el.id : e.id() + "_component_" + u.s++), this.cd = t.name || j, this.a = t.el || this.e(), this.H = [], this.pb = {}, this.V = {}, (e = this.g) && e.children) {
                var i = this;
                u.k.ta(e.children, function (e, t) {
                    t !== l && !t.loadEvent && (i[e] = i.Z(e, t))
                })
            }
            this.M(n)
        }
    }), t = u.c.prototype, t.D = function () {
        if (this.j("dispose"), this.H)
            for (var e = this.H.length - 1; e >= 0; e--) this.H[e].D && this.H[e].D();
        this.V = this.pb = this.H = j, this.n(), this.a.parentNode && this.a.parentNode.removeChild(this.a), u.qc(this.a), this.a = j
    }, t.L = p("b"), t.options = function (e) {
        return e === b ? this.g : this.g = u.k.fc(this.g, e)
    }, t.e = function (e, t) {
        return u.e(e, t)
    }, t.v = p("a"), t.id = p("Q"), t.name = p("cd"), t.children = p("H"), t.Z = function (e, t) {
        var n, i;
        return "string" == typeof e ? (i = e, t = t || {}, n = t.componentClass || u.$(i), t.name = i, n = new window.videojs[n](this.b || this, t)) : n = e, this.H.push(n), "function" == typeof n.id && (this.pb[n.id()] = n), (i = i || n.name && n.name()) && (this.V[i] = n), "function" == typeof n.el && n.el() && (this.ra || this.a).appendChild(n.el()), n
    }, t.removeChild = function (e) {
        if ("string" == typeof e && (e = this.V[e]), e && this.H) {
            for (var t = l, n = this.H.length - 1; n >= 0; n--)
                if (this.H[n] === e) {
                    t = f, this.H.splice(n, 1);
                    break
                }
            t && (this.pb[e.id] = j, this.V[e.name] = j, (t = e.v()) && t.parentNode === (this.ra || this.a) && (this.ra || this.a).removeChild(e.v()))
        }
    }, t.T = q(""), t.d = function (e, t) {
        return u.d(this.a, e, u.bind(this, t)), this
    }, t.n = function (e, t) {
        return u.n(this.a, e, t), this
    }, t.U = function (e, t) {
        return u.U(this.a, e, u.bind(this, t)), this
    }, t.j = function (e, t) {
        return u.j(this.a, e, t), this
    }, t.M = function (e) {
        return e && (this.aa ? e.call(this) : (this.Ra === b && (this.Ra = []), this.Ra.push(e))), this
    }, t.Ta = function () {
        this.aa = f;
        var e = this.Ra;
        if (e && 0 < e.length) {
            for (var t = 0, n = e.length; n > t; t++) e[t].call(this);
            this.Ra = [], this.j("ready")
        }
    }, t.m = function (e) {
        return u.m(this.a, e), this
    }, t.t = function (e) {
        return u.t(this.a, e), this
    }, t.show = function () {
        return this.a.style.display = "block", this
    }, t.C = function () {
        return this.a.style.display = "none", this
    }, t.disable = function () {
        this.C(), this.show = m()
    }, t.width = function (e, t) {
        return E(this, "width", e, t)
    }, t.height = function (e, t) {
        return E(this, "height", e, t)
    }, t.Tc = function (e, t) {
        return this.width(e, f).height(t)
    }, u.q = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t);
            var n = l;
            this.d("touchstart", function (e) {
                e.preventDefault(), n = f
            }), this.d("touchmove", function () {
                n = l
            });
            var i = this;
            this.d("touchend", function (e) {
                n && i.p(e), e.preventDefault()
            }), this.d("click", this.p), this.d("focus", this.Na), this.d("blur", this.Ma)
        }
    }), t = u.q.prototype, t.e = function (e, t) {
        return t = u.k.B({
            className: this.T(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.pa || "Need Text") + "</span></div>",
            nd: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, t), u.c.prototype.e.call(this, e, t)
    }, t.T = function () {
        return "vjs-control " + u.c.prototype.T.call(this)
    }, t.p = m(), t.Na = function () {
        u.d(document, "keyup", u.bind(this, this.ba))
    }, t.ba = function (e) {
        (32 == e.which || 13 == e.which) && (e.preventDefault(), this.p())
    }, t.Ma = function () {
        u.n(document, "keyup", u.bind(this, this.ba))
    }, u.O = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), this.Oc = this.V[this.g.barName], this.handle = this.V[this.g.handleName], e.d(this.oc, u.bind(this, this.update)), this.d("mousedown", this.Oa), this.d("touchstart", this.Oa), this.d("focus", this.Na), this.d("blur", this.Ma), this.d("click", this.p), this.b.d("controlsvisible", u.bind(this, this.update)), e.M(u.bind(this, this.update)), this.P = {}
        }
    }), t = u.O.prototype, t.e = function (e, t) {
        return t = t || {}, t.className += " vjs-slider", t = u.k.B({
            nd: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, t), u.c.prototype.e.call(this, e, t)
    }, t.Oa = function (e) {
        e.preventDefault(), u.Pc(), this.P.move = u.bind(this, this.Gb), this.P.end = u.bind(this, this.Hb), u.d(document, "mousemove", this.P.move), u.d(document, "mouseup", this.P.end), u.d(document, "touchmove", this.P.move), u.d(document, "touchend", this.P.end), this.Gb(e)
    }, t.Hb = function () {
        u.yd(), u.n(document, "mousemove", this.P.move, l), u.n(document, "mouseup", this.P.end, l), u.n(document, "touchmove", this.P.move, l), u.n(document, "touchend", this.P.end, l), this.update()
    }, t.update = function () {
        if (this.a) {
            var e, t = this.xb(),
                n = this.handle,
                i = this.Oc;
            if (isNaN(t) && (t = 0), e = t, n) {
                e = this.a.offsetWidth;
                var r = n.v().offsetWidth;
                e = r ? r / e : 0, t *= 1 - e, e = t + e / 2, n.v().style.left = u.round(100 * t, 2) + "%"
            }
            i.v().style.width = u.round(100 * e, 2) + "%"
        }
    }, t.Na = function () {
        u.d(document, "keyup", u.bind(this, this.ba))
    }, t.ba = function (e) {
        37 == e.which ? (e.preventDefault(), this.uc()) : 39 == e.which && (e.preventDefault(), this.vc())
    }, t.Ma = function () {
        u.n(document, "keyup", u.bind(this, this.ba))
    }, t.p = function (e) {
        e.stopImmediatePropagation(), e.preventDefault()
    }, u.ea = u.c.extend(), u.ea.prototype.defaultValue = 0, u.ea.prototype.e = function (e, t) {
        return t = t || {}, t.className += " vjs-slider-handle", t = u.k.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, t), u.c.prototype.e.call(this, "div", t)
    }, u.la = u.c.extend(), u.la.prototype.e = function () {
        var e = this.options().Rc || "ul";
        return this.ra = u.e(e, {
            className: "vjs-menu-content"
        }), e = u.c.prototype.e.call(this, "div", {
            append: this.ra,
            className: "vjs-menu"
        }), e.appendChild(this.ra), u.d(e, "click", function (e) {
            e.preventDefault(), e.stopImmediatePropagation()
        }), e
    }, u.N = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t), this.selected(t.selected)
        }
    }), u.N.prototype.e = function (e, t) {
        return u.q.prototype.e.call(this, "li", u.k.B({
            className: "vjs-menu-item",
            innerHTML: this.g.label
        }, t))
    }, u.N.prototype.p = function () {
        this.selected(f)
    }, u.N.prototype.selected = function (e) {
        e ? (this.m("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
    }, u.R = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t), this.va = this.Ja(), this.Z(this.va), this.J && 0 === this.J.length && this.C(), this.d("keyup", this.ba), this.a.setAttribute("aria-haspopup", f), this.a.setAttribute("role", "button")
        }
    }), t = u.R.prototype, t.oa = l, t.Ja = function () {
        var e = new u.la(this.b);
        if (this.options().title && e.v().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.$(this.A),
            wd: -1
        })), this.J = this.createItems())
            for (var t = 0; t < this.J.length; t++) ca(e, this.J[t]);
        return e
    }, t.sa = m(), t.T = function () {
        return this.className + " vjs-menu-button " + u.q.prototype.T.call(this)
    }, t.Na = m(), t.Ma = m(), t.p = function () {
        this.U("mouseout", u.bind(this, function () {
            D(this.va), this.a.blur()
        })), this.oa ? G(this) : H(this)
    }, t.ba = function (e) {
        e.preventDefault(), 32 == e.which || 13 == e.which ? this.oa ? G(this) : H(this) : 27 == e.which && this.oa && G(this)
    }, u.w = u.c.extend({
        i: function (e, t, n) {
            this.F = e, t = u.k.B(da(e), t), this.u = {}, this.pc = t.poster, this.rb = t.controls, e.controls = l, u.c.call(this, this, t, n), this.controls() ? this.m("vjs-controls-enabled") : this.m("vjs-controls-disabled"), this.U("play", function (e) {
                u.j(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation())
            }), this.d("ended", this.ed), this.d("play", this.Jb), this.d("firstplay", this.fd), this.d("pause", this.Ib), this.d("progress", this.hd), this.d("durationchange", this.dd), this.d("error", this.Fb), this.d("fullscreenchange", this.gd), u.wa[this.Q] = this, t.plugins && u.k.ta(t.plugins, function (e, t) {
                this[e](t)
            }, this);
            var i, r, o, a;
            i = this.rc, e = function () {
                i(), clearInterval(r), r = setInterval(u.bind(this, i), 250)
            }, t = function () {
                i(), clearInterval(r)
            }, this.d("mousedown", e), this.d("mousemove", i), this.d("mouseup", t), this.d("keydown", i), this.d("keyup", i), this.d("touchstart", e), this.d("touchmove", i), this.d("touchend", t), this.d("touchcancel", t), o = setInterval(u.bind(this, function () {
                this.ja && (this.ja = l, I(this, f), clearTimeout(a), a = setTimeout(u.bind(this, function () {
                    this.ja || I(this, l)
                }), 2e3))
            }), 250), this.d("dispose", function () {
                clearInterval(o), clearTimeout(a)
            })
        }
    }), t = u.w.prototype, t.g = u.options, t.D = function () {
        this.j("dispose"), this.n("dispose"), u.wa[this.Q] = j, this.F && this.F.player && (this.F.player = j), this.a && this.a.player && (this.a.player = j), clearInterval(this.Qa), this.ya(), this.h && this.h.D(), u.c.prototype.D.call(this)
    }, t.e = function () {
        var e = this.a = u.c.prototype.e.call(this, "div"),
            t = this.F;
        if (t.removeAttribute("width"), t.removeAttribute("height"), t.hasChildNodes()) {
            var n, i, r, o, a;
            for (n = t.childNodes, i = n.length, a = []; i--;) r = n[i], o = r.nodeName.toLowerCase(), ("source" === o || "track" === o) && a.push(r);
            for (n = 0; n < a.length; n++) t.removeChild(a[n])
        }
        return t.id = t.id || "vjs_video_" + u.s++, e.id = t.id, e.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", t.player = e.player = this, this.m("vjs-paused"), this.width(this.g.width, f), this.height(this.g.height, f), t.parentNode && t.parentNode.insertBefore(e, t), u.yb(t, e), e
    }, t.yc = function () {
        this.ec && this.ya(), this.ec = setInterval(u.bind(this, function () {
            this.j("timeupdate")
        }), 250)
    }, t.ya = function () {
        clearInterval(this.ec)
    }, t.ed = function () {
        this.g.loop && (this.currentTime(0), this.play())
    }, t.Jb = function () {
        u.t(this.a, "vjs-paused"), u.m(this.a, "vjs-playing")
    }, t.fd = function () {
        this.g.starttime && this.currentTime(this.g.starttime), this.m("vjs-has-started")
    }, t.Ib = function () {
        u.t(this.a, "vjs-playing"), u.m(this.a, "vjs-paused")
    }, t.hd = function () {
        1 == this.Ia() && this.j("loadedalldata")
    }, t.dd = function () {
        this.duration(L(this, "duration"))
    }, t.Fb = function (e) {
        u.log("Video Error", e)
    }, t.gd = function () {
        this.I ? this.m("vjs-fullscreen") : this.t("vjs-fullscreen")
    }, t.play = function () {
        return M(this, "play"), this
    }, t.pause = function () {
        return M(this, "pause"), this
    }, t.paused = function () {
        return L(this, "paused") === l ? l : f
    }, t.currentTime = function (e) {
        return e !== b ? (this.u.nc = e, M(this, "setCurrentTime", e), this.Eb && this.j("timeupdate"), this) : this.u.currentTime = L(this, "currentTime") || 0
    }, t.duration = function (e) {
        return e !== b ? (this.u.duration = parseFloat(e), this) : this.u.duration
    }, t.buffered = function () {
        var e = L(this, "buffered"),
            t = e.length - 1,
            n = this.u.kb = this.u.kb || 0;
        return e && t >= 0 && e.end(t) !== n && (n = e.end(t), this.u.kb = n), u.sb(0, n)
    }, t.Ia = function () {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    }, t.volume = function (e) {
        return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.u.volume = e, M(this, "setVolume", e), u.qd(e), this) : (e = parseFloat(L(this, "volume")), isNaN(e) ? 1 : e)
    }, t.muted = function (e) {
        return e !== b ? (M(this, "setMuted", e), this) : L(this, "muted") || l
    }, t.Sa = function () {
        return L(this, "supportsFullScreen") || l
    }, t.xa = function () {
        var e = u.Nb.xa;
        return this.I = f, e ? (u.d(document, e.ub, u.bind(this, function () {
            this.I = document[e.I], this.I === l && u.n(document, e.ub, arguments.callee), this.j("fullscreenchange")
        })), this.a[e.sc]()) : this.h.Sa() ? M(this, "enterFullScreen") : (this.Zc = f, this.Uc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.hc)), document.documentElement.style.overflow = "hidden", u.m(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange")), this
    }, t.nb = function () {
        var e = u.Nb.xa;
        return this.I = l, e ? document[e.mb]() : this.h.Sa() ? M(this, "exitFullScreen") : (N(this), this.j("fullscreenchange")), this
    }, t.hc = function (e) {
        27 === e.keyCode && (this.I === f ? this.nb() : N(this))
    }, t.src = function (e) {
        if (e instanceof Array) {
            var t;
            e: {
                t = e;
                for (var n = 0, i = this.g.techOrder; n < i.length; n++) {
                    var r = u.$(i[n]),
                        o = window.videojs[r];
                    if (o.isSupported())
                        for (var a = 0, s = t; a < s.length; a++) {
                            var c = s[a];
                            if (o.canPlaySource(c)) {
                                t = {
                                    source: c,
                                    h: r
                                };
                                break e
                            }
                        }
                }
                t = l
            }
            t ? (e = t.source, t = t.h, t == this.ia ? this.src(e) : J(this, t, e)) : this.a.appendChild(u.e("p", {
                innerHTML: this.options().notSupportedMessage
            }))
        } else e instanceof Object ? window.videojs[this.ia].canPlaySource(e) ? this.src(e.src) : this.src([e]) : (this.u.src = e, this.aa ? (M(this, "src", e), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.M(function () {
            this.src(e)
        }));
        return this
    }, t.load = function () {
        return M(this, "load"), this
    }, t.currentSrc = function () {
        return L(this, "currentSrc") || this.u.src || ""
    }, t.Pa = function (e) {
        return e !== b ? (M(this, "setPreload", e), this.g.preload = e, this) : L(this, "preload")
    }, t.autoplay = function (e) {
        return e !== b ? (M(this, "setAutoplay", e), this.g.autoplay = e, this) : L(this, "autoplay")
    }, t.loop = function (e) {
        return e !== b ? (M(this, "setLoop", e), this.g.loop = e, this) : L(this, "loop")
    }, t.poster = function (e) {
        return e !== b && (this.pc = e), this.pc
    }, t.controls = function (e) {
        return e !== b ? (e = !! e, this.rb !== e && ((this.rb = e) ? (this.t("vjs-controls-disabled"), this.m("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.m("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.rb
    }, u.w.prototype.Qb, t = u.w.prototype, t.Pb = function (e) {
        return e !== b ? (e = !! e, this.Qb !== e && ((this.Qb = e) ? (this.m("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Qb
    }, t.error = function () {
        return L(this, "error")
    }, t.seeking = function () {
        return L(this, "seeking")
    }, t.ja = f, t.rc = function () {
        this.ja = f
    }, t.Ob = f;
    var O, P, Q;
    Q = document.createElement("div"), P = {}, Q.Ed !== b ? (P.sc = "requestFullscreen", P.mb = "exitFullscreen", P.ub = "fullscreenchange", P.I = "fullScreen") : (document.mozCancelFullScreen ? (O = "moz", P.I = O + "FullScreen") : (O = "webkit", P.I = O + "IsFullScreen"), Q[O + "RequestFullScreen"] && (P.sc = O + "RequestFullScreen", P.mb = O + "CancelFullScreen"), P.ub = O + "fullscreenchange"), document[P.mb] && (u.Nb.xa = P), u.Ea = u.c.extend(), u.Ea.prototype.g = {
        Jd: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    }, u.Ea.prototype.e = function () {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    }, u.Wb = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t), e.d("play", u.bind(this, this.Jb)), e.d("pause", u.bind(this, this.Ib))
        }
    }), t = u.Wb.prototype, t.pa = "Play", t.T = function () {
        return "vjs-play-control " + u.q.prototype.T.call(this)
    }, t.p = function () {
        this.b.paused() ? this.b.play() : this.b.pause()
    }, t.Jb = function () {
        u.t(this.a, "vjs-paused"), u.m(this.a, "vjs-playing"), this.a.children[0].children[0].innerHTML = "Pause"
    }, t.Ib = function () {
        u.t(this.a, "vjs-playing"), u.m(this.a, "vjs-paused"), this.a.children[0].children[0].innerHTML = "Play"
    }, u.Xa = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.Xa.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }), e.appendChild(u.e("div").appendChild(this.content)), e
    }, u.Xa.prototype.Ba = function () {
        var e = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ka(e, this.b.duration())
    }, u.Ya = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.Ya.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        }), e.appendChild(u.e("div").appendChild(this.content)), e
    }, u.Ya.prototype.Ba = function () {
        var e = this.b.duration();
        e && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ka(e))
    }, u.$b = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t)
        }
    }), u.$b.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, u.eb = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.eb.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        }), e.appendChild(u.e("div").appendChild(this.content)), e
    }, u.eb.prototype.Ba = function () {
        this.b.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ka(this.b.duration() - this.b.currentTime()))
    }, u.Fa = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t)
        }
    }), u.Fa.prototype.pa = "Fullscreen", u.Fa.prototype.T = function () {
        return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
    }, u.Fa.prototype.p = function () {
        this.b.I ? (this.b.nb(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.b.xa(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    }, u.cb = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t)
        }
    }), u.cb.prototype.g = {
        children: {
            seekBar: {}
        }
    }, u.cb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }, u.Xb = u.O.extend({
        i: function (e, t) {
            u.O.call(this, e, t), e.d("timeupdate", u.bind(this, this.Aa)), e.M(u.bind(this, this.Aa))
        }
    }), t = u.Xb.prototype, t.g = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    }, t.oc = "timeupdate", t.e = function () {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }, t.Aa = function () {
        var e = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2)), this.a.setAttribute("aria-valuetext", u.Ka(e, this.b.duration()))
    }, t.xb = function () {
        var e;
        return "Flash" === this.b.ia && this.b.seeking() ? (e = this.b.u, e = e.nc ? e.nc : this.b.currentTime()) : e = this.b.currentTime(), e / this.b.duration()
    }, t.Oa = function (e) {
        u.O.prototype.Oa.call(this, e), this.b.Lb = f, this.Ad = !this.b.paused(), this.b.pause()
    }, t.Gb = function (e) {
        e = F(this, e) * this.b.duration(), e == this.b.duration() && (e -= .1), this.b.currentTime(e)
    }, t.Hb = function (e) {
        u.O.prototype.Hb.call(this, e), this.b.Lb = l, this.Ad && this.b.play()
    }, t.vc = function () {
        this.b.currentTime(this.b.currentTime() + 5)
    }, t.uc = function () {
        this.b.currentTime(this.b.currentTime() - 5)
    }, u.$a = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.d("progress", u.bind(this, this.update))
        }
    }), u.$a.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    }, u.$a.prototype.update = function () {
        this.a.style && (this.a.style.width = u.round(100 * this.b.Ia(), 2) + "%")
    }, u.Vb = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t)
        }
    }), u.Vb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    }, u.fb = u.ea.extend(), u.fb.prototype.defaultValue = "00:00", u.fb.prototype.e = function () {
        return u.ea.prototype.e.call(this, "div", {
            className: "vjs-seek-handle"
        })
    }, u.hb = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.h && e.h.l && e.h.l.volumeControl === l && this.m("vjs-hidden"), e.d("loadstart", u.bind(this, function () {
                e.h.l && e.h.l.volumeControl === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }), u.hb.prototype.g = {
        children: {
            volumeBar: {}
        }
    }, u.hb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }, u.gb = u.O.extend({
        i: function (e, t) {
            u.O.call(this, e, t), e.d("volumechange", u.bind(this, this.Aa)), e.M(u.bind(this, this.Aa)), setTimeout(u.bind(this, this.update), 0)
        }
    }), t = u.gb.prototype, t.Aa = function () {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2)), this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2) + "%")
    }, t.g = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    }, t.oc = "volumechange", t.e = function () {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }, t.Gb = function (e) {
        this.b.volume(F(this, e))
    }, t.xb = function () {
        return this.b.muted() ? 0 : this.b.volume()
    }, t.vc = function () {
        this.b.volume(this.b.volume() + .1)
    }, t.uc = function () {
        this.b.volume(this.b.volume() - .1)
    }, u.ac = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t)
        }
    }), u.ac.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }, u.ib = u.ea.extend(), u.ib.prototype.defaultValue = "00:00", u.ib.prototype.e = function () {
        return u.ea.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }, u.da = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t), e.d("volumechange", u.bind(this, this.update)), e.h && e.h.l && e.h.l.volumeControl === l && this.m("vjs-hidden"), e.d("loadstart", u.bind(this, function () {
                e.h.l && e.h.l.volumeControl === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }), u.da.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, u.da.prototype.p = function () {
        this.b.muted(this.b.muted() ? l : f)
    }, u.da.prototype.update = function () {
        var e = this.b.volume(),
            t = 3;
        for (0 === e || this.b.muted() ? t = 0 : .33 > e ? t = 1 : .67 > e && (t = 2), this.b.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute"), e = 0; 4 > e; e++) u.t(this.a, "vjs-vol-" + e);
        u.m(this.a, "vjs-vol-" + t)
    }, u.na = u.R.extend({
        i: function (e, t) {
            u.R.call(this, e, t), e.d("volumechange", u.bind(this, this.update)), e.h && e.h.l && e.h.l.zc === l && this.m("vjs-hidden"), e.d("loadstart", u.bind(this, function () {
                e.h.l && e.h.l.zc === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            })), this.m("vjs-menu-button")
        }
    }), u.na.prototype.Ja = function () {
        var e = new u.la(this.b, {
            Rc: "div"
        }),
            t = new u.gb(this.b, u.k.B({
                zd: f
            }, this.g.Sd));
        return e.Z(t), e
    }, u.na.prototype.p = function () {
        u.da.prototype.p.call(this), u.R.prototype.p.call(this)
    }, u.na.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, u.na.prototype.update = u.da.prototype.update, u.bb = u.q.extend({
        i: function (e, t) {
            u.q.call(this, e, t), (!e.poster() || !e.controls()) && this.C(), e.d("play", u.bind(this, this.C))
        }
    }), u.bb.prototype.e = function () {
        var e = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        }),
            t = this.b.poster();
        return t && ("backgroundSize" in e.style ? e.style.backgroundImage = 'url("' + t + '")' : e.appendChild(u.e("img", {
            src: t
        }))), e
    }, u.bb.prototype.p = function () {
        this.L().controls() && this.b.play()
    }, u.Ub = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), e.d("canplay", u.bind(this, this.C)), e.d("canplaythrough", u.bind(this, this.C)), e.d("playing", u.bind(this, this.C)), e.d("seeked", u.bind(this, this.C)), e.d("seeking", u.bind(this, this.show)), e.d("seeked", u.bind(this, this.C)), e.d("error", u.bind(this, this.show)), e.d("waiting", u.bind(this, this.show))
        }
    }), u.Ub.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }, u.Va = u.q.extend(), u.Va.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: "<span></span>",
            "aria-label": "play video"
        })
    }, u.Va.prototype.p = function () {
        this.b.play()
    }, u.r = u.c.extend({
        i: function (e, t, n) {
            u.c.call(this, e, t, n);
            var i, r;
            r = this, i = this.L(), e = function () {
                if (i.controls() && !i.Pb()) {
                    var e, t;
                    r.d("mousedown", r.p), r.d("touchstart", function (e) {
                        e.preventDefault(), e.stopPropagation(), t = I(this.b)
                    }), e = function (e) {
                        e.stopPropagation(), t && this.b.rc()
                    }, r.d("touchmove", e), r.d("touchleave", e), r.d("touchcancel", e), r.d("touchend", e);
                    var n, o, a;
                    n = 0, r.d("touchstart", function () {
                        n = (new Date).getTime(), a = f
                    }), e = function () {
                        a = l
                    }, r.d("touchmove", e), r.d("touchleave", e), r.d("touchcancel", e), r.d("touchend", function () {
                        a === f && (o = (new Date).getTime() - n, 250 > o && this.j("tap"))
                    }), r.d("tap", r.jd)
                }
            }, t = u.bind(r, r.md), this.M(e), i.d("controlsenabled", e), i.d("controlsdisabled", t)
        }
    }), u.r.prototype.md = function () {
        this.n("tap"), this.n("touchstart"), this.n("touchmove"), this.n("touchleave"), this.n("touchcancel"), this.n("touchend"), this.n("click"), this.n("mousedown")
    }, u.r.prototype.p = function (e) {
        0 === e.button && this.L().controls() && (this.L().paused() ? this.L().play() : this.L().pause())
    }, u.r.prototype.jd = function () {
        I(this.L(), !I(this.L()))
    }, u.r.prototype.l = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
    }, u.media = {}, u.media.Ua = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
    for (var i = u.media.Ua.length - 1; i >= 0; i--) u.r.prototype[u.media.Ua[i]] = ea();
    u.o = u.r.extend({
        i: function (e, t, n) {
            if (this.l.volumeControl = u.o.Qc(), this.l.movingMediaElementInDOM = !u.Fc, this.l.fullscreenResize = f, u.r.call(this, e, t, n), (t = t.source) && this.a.currentSrc == t.src ? e.j("loadstart") : t && (this.a.src = t.src), u.Mc && e.options().nativeControlsForTouch !== l) {
                var i, r, o, a;
                i = this, r = this.L(), t = r.controls(), i.a.controls = !! t, o = function () {
                    i.a.controls = f
                }, a = function () {
                    i.a.controls = l
                }, r.d("controlsenabled", o), r.d("controlsdisabled", a), t = function () {
                    r.n("controlsenabled", o), r.n("controlsdisabled", a)
                }, i.d("dispose", t), r.d("usingcustomcontrols", t), r.Pb(f)
            }
            for (e.M(function () {
                this.F && this.g.autoplay && this.paused() && (delete this.F.poster, this.play())
            }), e = u.o.Za.length - 1; e >= 0; e--) u.d(this.a, u.o.Za[e], u.bind(this.b, this.Wc));
            this.Ta()
        }
    }), t = u.o.prototype, t.D = function () {
        u.r.prototype.D.call(this)
    }, t.e = function () {
        var e = this.b,
            t = e.F;
        t && this.l.movingMediaElementInDOM !== l || (t ? (t.player = j, e.F = j, e.v().removeChild(t), t = t.cloneNode(l)) : t = u.e("video", {
            id: e.id() + "_html5_api",
            className: "vjs-tech"
        }), t.player = e, u.yb(t, e.v()));
        for (var n = ["autoplay", "preload", "loop", "muted"], i = n.length - 1; i >= 0; i--) {
            var r = n[i];
            e.g[r] !== j && (t[r] = e.g[r])
        }
        return t
    }, t.Wc = function (e) {
        this.j(e), e.stopPropagation()
    }, t.play = function () {
        this.a.play()
    }, t.pause = function () {
        this.a.pause()
    }, t.paused = function () {
        return this.a.paused
    }, t.currentTime = function () {
        return this.a.currentTime
    }, t.pd = function (e) {
        try {
            this.a.currentTime = e
        } catch (t) {
            u.log(t, "Video is not ready. (Video.js)")
        }
    }, t.duration = function () {
        return this.a.duration || 0
    }, t.buffered = function () {
        return this.a.buffered
    }, t.volume = function () {
        return this.a.volume
    }, t.ud = function (e) {
        this.a.volume = e
    }, t.muted = function () {
        return this.a.muted
    }, t.sd = function (e) {
        this.a.muted = e
    }, t.width = function () {
        return this.a.offsetWidth
    }, t.height = function () {
        return this.a.offsetHeight
    }, t.Sa = function () {
        return "function" != typeof this.a.webkitEnterFullScreen || !/Android/.test(u.G) && /Chrome|Mac OS X 10.5/.test(u.G) ? l : f
    }, t.src = function (e) {
        this.a.src = e
    }, t.load = function () {
        this.a.load()
    }, t.currentSrc = function () {
        return this.a.currentSrc
    }, t.Pa = function () {
        return this.a.Pa
    }, t.td = function (e) {
        this.a.Pa = e
    }, t.autoplay = function () {
        return this.a.autoplay
    }, t.od = function (e) {
        this.a.autoplay = e
    }, t.controls = function () {
        return this.a.controls
    }, t.loop = function () {
        return this.a.loop
    }, t.rd = function (e) {
        this.a.loop = e
    }, t.error = function () {
        return this.a.error
    }, t.seeking = function () {
        return this.a.seeking
    }, u.o.isSupported = function () {
        return !!u.ma.canPlayType
    }, u.o.lb = function (e) {
        try {
            return !!u.ma.canPlayType(e.type)
        } catch (t) {
            return ""
        }
    }, u.o.Qc = function () {
        var e = u.ma.volume;
        return u.ma.volume = e / 2 + .1, e !== u.ma.volume
    }, u.o.Za = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), u.Jc && (document.createElement("video").constructor.prototype.canPlayType = function (e) {
        return e && -1 != e.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    }), u.f = u.r.extend({
        i: function (e, t, n) {
            u.r.call(this, e, t, n);
            var i = t.source;
            n = t.parentEl;
            var r = this.a = u.e("div", {
                id: e.id() + "_temp_flash"
            }),
                o = e.id() + "_flash_api";
            e = e.g;
            var a = u.k.B({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: e.autoplay,
                preload: e.Pa,
                loop: e.loop,
                muted: e.muted
            }, t.flashVars),
                s = u.k.B({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, t.params),
                l = u.k.B({
                    id: o,
                    name: o,
                    "class": "vjs-tech"
                }, t.attributes);
            if (i && (i.type && u.f.ad(i.type) ? (e = u.f.wc(i.src), a.rtmpConnection = encodeURIComponent(e.qb), a.rtmpStream = encodeURIComponent(e.Mb)) : a.src = encodeURIComponent(u.ic(i.src))), u.yb(r, n), t.startTime && this.M(function () {
                this.load(), this.play(), this.currentTime(t.startTime)
            }), t.iFrameMode !== f || u.Ec) u.f.Vc(t.swf, r, a, s, l);
            else {
                var c = u.e("iframe", {
                    id: o + "_iframe",
                    name: o + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", u.d(c, "load", u.bind(this, function () {
                    var e, n = c.contentWindow;
                    e = c.contentDocument ? c.contentDocument : c.contentWindow.document, e.write(u.f.jc(t.swf, a, s, l)), n.player = this.b, n.ready = u.bind(this.b, function (t) {
                        var n = this.h;
                        n.a = e.getElementById(t), u.f.ob(n)
                    }), n.events = u.bind(this.b, function (e, t) {
                        this && "flash" === this.ia && this.j(t)
                    }), n.errors = u.bind(this.b, function (e, t) {
                        u.log("Flash Error", t)
                    })
                })), r.parentNode.replaceChild(c, r)
            }
        }
    }), t = u.f.prototype, t.D = function () {
        u.r.prototype.D.call(this)
    }, t.play = function () {
        this.a.vjs_play()
    }, t.pause = function () {
        this.a.vjs_pause()
    }, t.src = function (e) {
        if (u.f.$c(e) ? (e = u.f.wc(e), this.Nd(e.qb), this.Od(e.Mb)) : (e = u.ic(e), this.a.vjs_src(e)), this.b.autoplay()) {
            var t = this;
            setTimeout(function () {
                t.play()
            }, 0)
        }
    }, t.currentSrc = function () {
        var e = this.a.vjs_getProperty("currentSrc");
        if (e == j) {
            var t = this.Ld(),
                n = this.Md();
            t && n && (e = u.f.vd(t, n))
        }
        return e
    }, t.load = function () {
        this.a.vjs_load()
    }, t.poster = function () {
        this.a.vjs_getProperty("poster")
    }, t.buffered = function () {
        return u.sb(0, this.a.vjs_getProperty("buffered"))
    }, t.Sa = q(l);
    var R = u.f.prototype,
        S = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        T = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
        U;
    for (U = 0; U < S.length; U++) V(S[U]), fa();
    for (U = 0; U < T.length; U++) V(T[U]);
    if (u.f.isSupported = function () {
        return 10 <= u.f.version()[0]
    }, u.f.lb = function (e) {
        return e.type in u.f.Yc || e.type in u.f.xc ? "maybe" : void 0
    }, u.f.Yc = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, u.f.xc = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    }, u.f.onReady = function (e) {
        e = u.v(e);
        var t = e.player || e.parentNode.player,
            n = t.h;
        e.player = t, n.a = e, u.f.ob(n)
    }, u.f.ob = function (e) {
        e.v().vjs_getProperty ? e.Ta() : setTimeout(function () {
            u.f.ob(e)
        }, 50)
    }, u.f.onEvent = function (e, t) {
        u.v(e).player.j(t)
    }, u.f.onError = function (e, t) {
        u.v(e).player.j("error"), u.log("Flash Error", t, e)
    }, u.f.version = function () {
        var e = "0,0,0";
        try {
            e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (t) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (n) {}
        }
        return e.split(",")
    }, u.f.Vc = function (e, t, n, i, r) {
        e = u.f.jc(e, n, i, r), e = u.e("div", {
            innerHTML: e
        }).childNodes[0], n = t.parentNode, t.parentNode.replaceChild(e, t);
        var o = n.childNodes[0];
        setTimeout(function () {
            o.style.display = "block"
        }, 1e3)
    }, u.f.jc = function (e, t, n, i) {
        var r = "",
            o = "",
            a = "";
        return t && u.k.ta(t, function (e, t) {
            r += e + "=" + t + "&amp;"
        }), n = u.k.B({
            movie: e,
            flashvars: r,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, n), u.k.ta(n, function (e, t) {
            o += '<param name="' + e + '" value="' + t + '" />'
        }), i = u.k.B({
            data: e,
            width: "100%",
            height: "100%"
        }, i), u.k.ta(i, function (e, t) {
            a += e + '="' + t + '" '
        }), '<object type="application/x-shockwave-flash"' + a + ">" + o + "</object>"
    }, u.f.vd = function (e, t) {
        return e + "&" + t
    }, u.f.wc = function (e) {
        var t = {
            qb: "",
            Mb: ""
        };
        if (!e) return t;
        var n, i = e.indexOf("&");
        return -1 !== i ? n = i + 1 : (i = n = e.lastIndexOf("/") + 1, 0 === i && (i = n = e.length)), t.qb = e.substring(0, i), t.Mb = e.substring(n, e.length), t
    }, u.f.ad = function (e) {
        return e in u.f.xc
    }, u.f.Lc = /^rtmp[set]?:\/\//i, u.f.$c = function (e) {
        return u.f.Lc.test(e)
    }, u.Kc = u.c.extend({
        i: function (e, t, n) {
            if (u.c.call(this, e, t, n), e.g.sources && 0 !== e.g.sources.length) e.src(e.g.sources);
            else
                for (t = 0, n = e.g.techOrder; t < n.length; t++) {
                    var i = u.$(n[t]),
                        r = window.videojs[i];
                    if (r && r.isSupported()) {
                        J(e, i);
                        break
                    }
                }
        }
    }), u.X = u.c.extend({
        i: function (e, t) {
            u.c.call(this, e, t), this.Q = t.id || "vjs_" + t.kind + "_" + t.language + "_" + u.s++, this.tc = t.src, this.Sc = t["default"] || t.dflt, this.xd = t.title, this.Id = t.srclang, this.bd = t.label, this.fa = [], this.bc = [], this.ga = this.ha = 0, this.b.d("fullscreenchange", u.bind(this, this.Nc))
        }
    }), t = u.X.prototype, t.K = p("A"), t.src = p("tc"), t.tb = p("Sc"), t.title = p("xd"), t.label = p("bd"), t.readyState = p("ha"), t.mode = p("ga"), t.Nc = function () {
        this.a.style.fontSize = this.b.I ? 140 * (screen.width / this.b.width()) + "%" : ""
    }, t.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    }, t.show = function () {
        Y(this), this.ga = 2, u.c.prototype.show.call(this)
    }, t.C = function () {
        Y(this), this.ga = 1, u.c.prototype.C.call(this)
    }, t.disable = function () {
        2 == this.ga && this.C(), this.b.n("timeupdate", u.bind(this, this.update, this.Q)), this.b.n("ended", u.bind(this, this.reset, this.Q)), this.reset(), this.b.V.textTrackDisplay.removeChild(this), this.ga = 0
    }, t.load = function () {
        0 === this.ha && (this.ha = 1, u.get(this.tc, u.bind(this, this.kd), u.bind(this, this.Fb)))
    }, t.Fb = function (e) {
        this.error = e, this.ha = 3, this.j("error")
    }, t.kd = function (e) {
        var t, n;
        e = e.split("\n");
        for (var i = "", r = 1, o = e.length; o > r; r++)
            if (i = u.trim(e[r])) {
                for (-1 == i.indexOf("-->") ? (t = i, i = u.trim(e[++r])) : t = this.fa.length, t = {
                    id: t,
                    index: this.fa.length
                }, n = i.split(" --> "), t.startTime = ga(n[0]), t.ua = ga(n[1]), n = []; e[++r] && (i = u.trim(e[r]));) n.push(i);
                t.text = n.join("<br/>"), this.fa.push(t)
            }
        this.ha = 2, this.j("loaded")
    }, t.update = function () {
        if (0 < this.fa.length) {
            var e = this.b.currentTime();
            if (this.Kb === b || e < this.Kb || this.La <= e) {
                var t, n, i, r, o = this.fa,
                    a = this.b.duration(),
                    s = 0,
                    u = l,
                    c = [];
                for (e >= this.La || this.La === b ? r = this.vb !== b ? this.vb : 0 : (u = f, r = this.Cb !== b ? this.Cb : o.length - 1);;) {
                    if (i = o[r], i.ua <= e) s = Math.max(s, i.ua), i.Ha && (i.Ha = l);
                    else if (e < i.startTime) {
                        if (a = Math.min(a, i.startTime), i.Ha && (i.Ha = l), !u) break
                    } else u ? (c.splice(0, 0, i), n === b && (n = r), t = r) : (c.push(i), t === b && (t = r), n = r), a = Math.min(a, i.ua), s = Math.max(s, i.startTime), i.Ha = f; if (u) {
                        if (0 === r) break;
                        r--
                    } else {
                        if (r === o.length - 1) break;
                        r++
                    }
                }
                for (this.bc = c, this.La = a, this.Kb = s, this.vb = t, this.Cb = n, e = this.bc, o = "", a = 0, s = e.length; s > a; a++) o += '<span class="vjs-tt-cue">' + e[a].text + "</span>";
                this.a.innerHTML = o, this.j("cuechange")
            }
        }
    }, t.reset = function () {
        this.La = 0, this.Kb = this.b.duration(), this.Cb = this.vb = 0
    }, u.Sb = u.X.extend(), u.Sb.prototype.A = "captions", u.Yb = u.X.extend(), u.Yb.prototype.A = "subtitles", u.Tb = u.X.extend(), u.Tb.prototype.A = "chapters", u.Zb = u.c.extend({
        i: function (e, t, n) {
            if (u.c.call(this, e, t, n), e.g.tracks && 0 < e.g.tracks.length) {
                t = this.b, e = e.g.tracks;
                var i;
                for (n = 0; n < e.length; n++) {
                    i = e[n];
                    var r = t,
                        o = i.kind,
                        a = i.label,
                        s = i.language,
                        l = i;
                    i = r.za = r.za || [], l = l || {}, l.kind = o, l.label = a, l.language = s, o = u.$(o || "subtitles"), r = new window.videojs[o + "Track"](r, l), i.push(r)
                }
            }
        }
    }), u.Zb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }, u.Y = u.N.extend({
        i: function (e, t) {
            var n = this.ca = t.track;
            t.label = n.label(), t.selected = n.tb(), u.N.call(this, e, t), this.b.d(n.K() + "trackchange", u.bind(this, this.update))
        }
    }), u.Y.prototype.p = function () {
        u.N.prototype.p.call(this), X(this.b, this.ca.Q, this.ca.K())
    }, u.Y.prototype.update = function () {
        this.selected(2 == this.ca.mode())
    }, u.ab = u.Y.extend({
        i: function (e, t) {
            t.track = {
                K: function () {
                    return t.kind
                },
                L: e,
                label: function () {
                    return t.kind + " off"
                },
                tb: q(l),
                mode: q(l)
            }, u.Y.call(this, e, t), this.selected(f)
        }
    }), u.ab.prototype.p = function () {
        u.Y.prototype.p.call(this), X(this.b, this.ca.Q, this.ca.K())
    }, u.ab.prototype.update = function () {
        for (var e, t = W(this.b), n = 0, i = t.length, r = f; i > n; n++) e = t[n], e.K() == this.ca.K() && 2 == e.mode() && (r = l);
        this.selected(r)
    }, u.S = u.R.extend({
        i: function (e, t) {
            u.R.call(this, e, t), 1 >= this.J.length && this.C()
        }
    }), u.S.prototype.sa = function () {
        var e, t = [];
        t.push(new u.ab(this.b, {
            kind: this.A
        }));
        for (var n = 0; n < W(this.b).length; n++) e = W(this.b)[n], e.K() === this.A && t.push(new u.Y(this.b, {
            track: e
        }));
        return t
    }, u.Ca = u.S.extend({
        i: function (e, t, n) {
            u.S.call(this, e, t, n), this.a.setAttribute("aria-label", "Captions Menu")
        }
    }), u.Ca.prototype.A = "captions", u.Ca.prototype.pa = "Captions", u.Ca.prototype.className = "vjs-captions-button", u.Ga = u.S.extend({
        i: function (e, t, n) {
            u.S.call(this, e, t, n), this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    }), u.Ga.prototype.A = "subtitles", u.Ga.prototype.pa = "Subtitles", u.Ga.prototype.className = "vjs-subtitles-button", u.Da = u.S.extend({
        i: function (e, t, n) {
            u.S.call(this, e, t, n), this.a.setAttribute("aria-label", "Chapters Menu")
        }
    }), t = u.Da.prototype, t.A = "chapters", t.pa = "Chapters", t.className = "vjs-chapters-button", t.sa = function () {
        for (var e, t = [], n = 0; n < W(this.b).length; n++) e = W(this.b)[n], e.K() === this.A && t.push(new u.Y(this.b, {
            track: e
        }));
        return t
    }, t.Ja = function () {
        for (var e, t, n = W(this.b), i = 0, r = n.length, o = this.J = []; r > i; i++)
            if (e = n[i], e.K() == this.A && e.tb()) {
                if (2 > e.readyState()) return this.Fd = e, e.d("loaded", u.bind(this, this.Ja)), void 0;
                t = e;
                break
            }
        if (n = this.va = new u.la(this.b), n.a.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.$(this.A),
            wd: -1
        })), t) {
            e = t.fa;
            for (var a, i = 0, r = e.length; r > i; i++) a = e[i], a = new u.Wa(this.b, {
                track: t,
                cue: a
            }), o.push(a), n.Z(a)
        }
        return 0 < this.J.length && this.show(), n
    }, u.Wa = u.N.extend({
        i: function (e, t) {
            var n = this.ca = t.track,
                i = this.cue = t.cue,
                r = e.currentTime();
            t.label = i.text, t.selected = i.startTime <= r && r < i.ua, u.N.call(this, e, t), n.d("cuechange", u.bind(this, this.update))
        }
    }), u.Wa.prototype.p = function () {
        u.N.prototype.p.call(this), this.b.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, u.Wa.prototype.update = function () {
        var e = this.cue,
            t = this.b.currentTime();
        this.selected(e.startTime <= t && t < e.ua)
    }, u.k.B(u.Ea.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), "undefined" != typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function (a, c) {
            function d(e, t) {
                var n, i, r = e[t];
                if (r && "object" == typeof r)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = d(r, n), i !== b ? r[n] = i : delete r[n]);
                return c.call(e, t, r)
            }
            var e;
            if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    u.cc = function () {
        var e, t, n = document.getElementsByTagName("video");
        if (n && 0 < n.length)
            for (var i = 0, r = n.length; r > i; i++) {
                if (!(t = n[i]) || !t.getAttribute) {
                    u.jb();
                    break
                }
                t.player === b && (e = t.getAttribute("data-setup"), e !== j && (e = u.JSON.parse(e || "{}"), v(t, e)))
            } else u.Ac || u.jb()
    }, u.jb = function () {
        setTimeout(u.cc, 1)
    }, "complete" === document.readyState ? u.Ac = f : u.U(window, "load", function () {
        u.Ac = f
    }), u.jb(), u.ld = function (e, t) {
        u.w.prototype[e] = t
    };
    var ha = this;
    ha.Bd = f, $("videojs", u), $("_V_", u), $("videojs.options", u.options), $("videojs.players", u.wa), $("videojs.cache", u.qa), $("videojs.Component", u.c), u.c.prototype.player = u.c.prototype.L, u.c.prototype.dispose = u.c.prototype.D, u.c.prototype.createEl = u.c.prototype.e, u.c.prototype.el = u.c.prototype.v, u.c.prototype.addChild = u.c.prototype.Z, u.c.prototype.children = u.c.prototype.children, u.c.prototype.on = u.c.prototype.d, u.c.prototype.off = u.c.prototype.n, u.c.prototype.one = u.c.prototype.U, u.c.prototype.trigger = u.c.prototype.j, u.c.prototype.triggerReady = u.c.prototype.Ta, u.c.prototype.show = u.c.prototype.show, u.c.prototype.hide = u.c.prototype.C, u.c.prototype.width = u.c.prototype.width, u.c.prototype.height = u.c.prototype.height, u.c.prototype.dimensions = u.c.prototype.Tc, u.c.prototype.ready = u.c.prototype.M, u.c.prototype.addClass = u.c.prototype.m, u.c.prototype.removeClass = u.c.prototype.t, $("videojs.Player", u.w), u.w.prototype.dispose = u.w.prototype.D, u.w.prototype.requestFullScreen = u.w.prototype.xa, u.w.prototype.cancelFullScreen = u.w.prototype.nb, u.w.prototype.bufferedPercent = u.w.prototype.Ia, u.w.prototype.usingNativeControls = u.w.prototype.Pb, $("videojs.MediaLoader", u.Kc), $("videojs.TextTrackDisplay", u.Zb), $("videojs.ControlBar", u.Ea), $("videojs.Button", u.q), $("videojs.PlayToggle", u.Wb), $("videojs.FullscreenToggle", u.Fa), $("videojs.BigPlayButton", u.Va), $("videojs.LoadingSpinner", u.Ub), $("videojs.CurrentTimeDisplay", u.Xa), $("videojs.DurationDisplay", u.Ya), $("videojs.TimeDivider", u.$b), $("videojs.RemainingTimeDisplay", u.eb), $("videojs.Slider", u.O), $("videojs.ProgressControl", u.cb), $("videojs.SeekBar", u.Xb), $("videojs.LoadProgressBar", u.$a), $("videojs.PlayProgressBar", u.Vb), $("videojs.SeekHandle", u.fb), $("videojs.VolumeControl", u.hb), $("videojs.VolumeBar", u.gb), $("videojs.VolumeLevel", u.ac), $("videojs.VolumeMenuButton", u.na), $("videojs.VolumeHandle", u.ib), $("videojs.MuteToggle", u.da), $("videojs.PosterImage", u.bb), $("videojs.Menu", u.la), $("videojs.MenuItem", u.N), $("videojs.MenuButton", u.R), u.R.prototype.createItems = u.R.prototype.sa, u.S.prototype.createItems = u.S.prototype.sa, u.Da.prototype.createItems = u.Da.prototype.sa, $("videojs.SubtitlesButton", u.Ga), $("videojs.CaptionsButton", u.Ca), $("videojs.ChaptersButton", u.Da), $("videojs.MediaTechController", u.r), u.r.prototype.features = u.r.prototype.l, u.r.prototype.l.volumeControl = u.r.prototype.l.zc, u.r.prototype.l.fullscreenResize = u.r.prototype.l.Gd, u.r.prototype.l.progressEvents = u.r.prototype.l.Kd, u.r.prototype.l.timeupdateEvents = u.r.prototype.l.Pd, $("videojs.Html5", u.o), u.o.Events = u.o.Za, u.o.isSupported = u.o.isSupported, u.o.canPlaySource = u.o.lb, u.o.prototype.setCurrentTime = u.o.prototype.pd, u.o.prototype.setVolume = u.o.prototype.ud, u.o.prototype.setMuted = u.o.prototype.sd, u.o.prototype.setPreload = u.o.prototype.td, u.o.prototype.setAutoplay = u.o.prototype.od, u.o.prototype.setLoop = u.o.prototype.rd, $("videojs.Flash", u.f), u.f.isSupported = u.f.isSupported, u.f.canPlaySource = u.f.lb, u.f.onReady = u.f.onReady, $("videojs.TextTrack", u.X), u.X.prototype.label = u.X.prototype.label, $("videojs.CaptionsTrack", u.Sb), $("videojs.SubtitlesTrack", u.Yb), $("videojs.ChaptersTrack", u.Tb), $("videojs.autoSetup", u.cc), $("videojs.plugin", u.ld), $("videojs.createTimeRange", u.sb)
}(),
function (e, t) {
    var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.fn.imagesLoaded = function (i) {
        function r() {
            var t = e(d),
                n = e(p);
            s && (p.length ? s.reject(l, t, n) : s.resolve(l)), e.isFunction(i) && i.call(a, l, t, n)
        }

        function o(t, i) {
            t.src === n || -1 !== e.inArray(t, c) || (c.push(t), i ? p.push(t) : d.push(t), e.data(t, "imagesLoaded", {
                isBroken: i,
                src: t.src
            }), u && s.notifyWith(e(t), [i, l, e(d), e(p)]), l.length === c.length && (setTimeout(r), l.unbind(".imagesLoaded")))
        }
        var a = this,
            s = e.isFunction(e.Deferred) ? e.Deferred() : 0,
            u = e.isFunction(s.notify),
            l = a.find("img").add(a.filter("img")),
            c = [],
            d = [],
            p = [];
        return l.length ? l.bind("load.imagesLoaded error.imagesLoaded", function (e) {
            o(e.target, "error" === e.type)
        }).each(function (i, r) {
            var a = r.src,
                s = e.data(r, "imagesLoaded");
            s && s.src === a ? o(r, s.isBroken) : r.complete && r.naturalWidth !== t ? o(r, 0 === r.naturalWidth || 0 === r.naturalHeight) : (r.readyState || r.complete) && (r.src = n, r.src = a)
        }) : r(), s ? s.promise(a) : a
    }
}(jQuery),
function (e) {
    e.BigVideo = function (t) {
        function n() {
            var t = e(window).width(),
                n = e(window).height(),
                i = t / n;
            v > i ? "video" === d ? (l.width(n * v).height(n), e(f).css("top", 0).css("left", -(n * v - t) / 2).css("height", n), e(f + "_html5_api").css("width", n * v), e(f + "_flash_api").css("width", n * v).css("height", n)) : e("#big-video-image").css({
                width: "auto",
                height: n,
                top: 0,
                left: -(n * v - t) / 2
            }) : "video" === d ? (l.width(t).height(t / v), e(f).css("top", -(t / v - n) / 2).css("left", 0).css("height", t / v), e(f + "_html5_api").css("width", "100%"), e(f + "_flash_api").css("width", t).css("height", t / v)) : e("#big-video-image").css({
                width: t,
                height: "auto",
                top: -(t / v - n) / 2,
                left: 0
            })
        }

        function i() {
            var t = '<div id="big-video-control-container">';
            t += '<div id="big-video-control">', t += '<a href="#" id="big-video-control-play"></a>', t += '<div id="big-video-control-middle">', t += '<div id="big-video-control-bar">', t += '<div id="big-video-control-bound-left"></div>', t += '<div id="big-video-control-progress"></div>', t += '<div id="big-video-control-track"></div>', t += '<div id="big-video-control-bound-right"></div>', t += "</div>", t += "</div>", t += '<div id="big-video-control-timer"></div>', t += "</div>", t += "</div>", C.container.append(t), e("#big-video-control-container").css("display", "none"), e("#big-video-control-track").slider({
                animate: !0,
                step: .01,
                slide: function (t, n) {
                    w = !0, e("#big-video-control-progress").css("width", n.value - .16 + "%"), l.currentTime(n.value / 100 * l.duration())
                },
                stop: function (e, t) {
                    w = !1, l.currentTime(t.value / 100 * l.duration())
                }
            }), e("#big-video-control-bar").click(function (t) {
                l.currentTime(t.offsetX / e(this).width() * l.duration())
            }), e("#big-video-control-play").click(function (e) {
                e.preventDefault(), r("toggle")
            }), l.on("timeupdate", function () {
                if (!w && l.currentTime() / l.duration()) {
                    var t = l.currentTime(),
                        n = Math.floor(t / 60),
                        i = Math.floor(t) - 60 * n;
                    10 > i && (i = "0" + i);
                    var r = 100 * (l.currentTime() / l.duration());
                    e("#big-video-control-track").slider("value", r), e("#big-video-control-progress").css("width", r - .16 + "%"), e("#big-video-control-timer").text(n + ":" + i + "/" + g)
                }
            })
        }

        function r(t) {
            var n = t || "toggle";
            "toggle" === n && (n = x ? "pause" : "play"), "pause" === n ? (l.pause(), e("#big-video-control-play").css("background-position", "-16px"), x = !1) : "play" === n && (l.play(), e("#big-video-control-play").css("background-position", "0"), x = !0)
        }

        function o() {
            l.play(), C.container.off("click", o)
        }

        function a() {
            c++, c === T.length && (c = 0), s(T[c])
        }

        function s(t) {
            e(f).css("display", "block"), d = "video", l.src(t), x = !0, j ? (e("#big-video-control-container").css("display", "none"), l.ready(function () {
                l.volume(0)
            }), doLoop = !0) : (e("#big-video-control-container").css("display", "block"), l.ready(function () {
                l.volume(y)
            }), doLoop = !1), e("#big-video-image").css("display", "none"), e(f).css("display", "block")
        }

        function u(t) {
            e("#big-video-image").remove(), l.pause(), e(f).css("display", "none"), e("#big-video-control-container").css("display", "none"), d = "image";
            var i = e('<img id="big-video-image" src=' + t + " />");
            m.append(i), e("#big-video-image").imagesLoaded(function () {
                v = e("#big-video-image").width() / e("#big-video-image").height(), n()
            })
        }
        var l, c, d, p = {
                useFlashForFirefox: !0,
                forceAutoplay: !1,
                controls: !0,
                doLoop: !1,
                container: e("body")
            }, h = this,
            f = "#big-video-vid",
            m = e('<div id="big-video-wrap"></div>'),
            v = (e(""), 16 / 9),
            g = 0,
            y = .8,
            b = !1,
            w = !1,
            x = !1,
            k = !1,
            j = !1,
            T = [],
            C = e.extend({}, p, t);
        h.init = function () {
            if (!b) {
                C.container.prepend(m);
                var t = C.forceAutoplay ? "autoplay" : "";
                l = e('<video id="' + f.substr(1) + '" class="video-js vjs-default-skin" preload="auto" data-setup="{}" ' + t + " webkit-playsinline></video>"), l.css("position", "absolute"), m.append(l);
                var r = ["html5", "flash"],
                    s = navigator.userAgent.toLowerCase(),
                    u = -1 != s.indexOf("firefox");
                C.useFlashForFirefox && u && (r = ["flash", "html5"]), l = videojs(f.substr(1), {
                    controls: !1,
                    autoplay: !0,
                    preload: "auto",
                    techOrder: r
                }), C.controls && i(), n(), b = !0, x = !1, C.forceAutoplay && e("body").on("click", o), e("#big-video-vid_flash_api").attr("scale", "noborder").attr("width", "100%").attr("height", "100%"), e(window).resize(function () {
                    n()
                }), l.on("loadedmetadata", function () {
                    v = document.getElementById("big-video-vid_flash_api") ? document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth") / document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight") : e("#big-video-vid_html5_api").prop("videoWidth") / e("#big-video-vid_html5_api").prop("videoHeight"), n();
                    var t = Math.round(l.duration()),
                        i = Math.floor(t / 60),
                        r = t - 60 * i;
                    10 > r && (r = "0" + r), g = i + ":" + r
                }), l.on("ended", function () {
                    C.doLoop && (l.currentTime(0), l.play()), k && a()
                })
            }
        }, h.show = function (e, t) {
            if (void 0 === t && (t = {}), j = t.ambient === !0, (j || t.doLoop) && (C.doLoop = !0), "string" == typeof e) {
                var n = e.substring(e.lastIndexOf(".") + 1);
                "jpg" === n || "gif" === n || "png" === n ? u(e) : (t.altSource && navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (e = t.altSource), s(e), k = !1)
            } else T = e, c = 0, s(T[c]), k = !0
        }, h.getPlayer = function () {
            return l
        }, h.triggerPlayer = function (e) {
            r(e)
        }
    }
}(jQuery),
function (e) {
    "use strict";
    e.fn.lifestream = function (t) {
        return this.each(function () {
            var n = e(this),
                i = jQuery.extend({
                    classname: "lifestream",
                    feedloaded: null,
                    limit: 10,
                    list: []
                }, t),
                r = {
                    count: i.list.length,
                    items: []
                }, o = jQuery.extend(!0, {}, i),
                a = function (t) {
                    e.merge(r.items, t), r.items.sort(function (e, t) {
                        return t.date - e.date
                    });
                    for (var o, a = r.items, s = a.length < i.limit ? a.length : i.limit, u = 0, l = e('<ul class="' + i.classname + '"/>'); s > u; u++) o = a[u], o.html && e('<li class="' + i.classname + "-" + o.config.service + '">').data("name", o.config.service).data("url", o.url || "#").data("time", o.date).append(o.html).appendTo(l);
                    n.html(l), e.isFunction(i.feedloaded) && i.feedloaded()
                }, s = function () {
                    var t = 0,
                        n = i.list.length;
                    for (delete o.list; n > t; t++) {
                        var r = i.list[t];
                        e.fn.lifestream.feeds[r.service] && e.isFunction(e.fn.lifestream.feeds[r.service]) && r.user && (r._settings = o, e.fn.lifestream.feeds[r.service](r, a))
                    }
                };
            jQuery.tmpl ? s() : jQuery.getScript("//ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js", s)
        })
    }, e.fn.lifestream.createYqlUrl = function (e) {
        return (("https:" === document.location.protocol ? "https" : "http") + "://query.yahooapis.com/v1/public/yql?q=__QUERY__" + "&env=" + "store://datatables.org/alltableswithkeys&format=json").replace("__QUERY__", encodeURIComponent(e))
    }, e.fn.lifestream.feeds = e.fn.lifestream.feeds || {}, Object.keys || (Object.keys = function (e) {
        if (e !== Object(e)) throw new TypeError("Object.keys called on non-object");
        var t, n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
    })
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.bitbucket = function (t, n) {
        var i = e.extend({}, {
            commit: '<a href="http://bitbucket.org/${owner}/${name}/changeset/${node}/">committed</a> at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
            pullrequest_fulfilled: 'fulfilled a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
            pullrequest_rejected: 'rejected a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
            pullrequest_created: 'created a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
            create: 'created a new project at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
            fork: 'forked <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>'
        }, t.template),
            r = ["commit", "pullrequest_fulfilled", "pullrequest_rejected", "pullrequest_created", "create", "fork"],
            o = function (t) {
                return -1 !== e.inArray(t.event, r) && t.repository ? "commit" === t.event ? e.tmpl(i.commit, {
                    owner: t.repository.owner,
                    name: t.repository.name,
                    node: t.node
                }) : e.tmpl(i[t.event], {
                    owner: t.repository.owner,
                    name: t.repository.name
                }) : void 0
            }, a = function (n) {
                var i = [];
                return n.query && n.query.count && n.query.count > 0 && e.each(n.query.results.json, function () {
                    i.push({
                        date: new Date(this.events.created_on.replace(/-/g, "/")),
                        config: t,
                        html: o(this.events)
                    })
                }), i
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select events.event,events.node, events.created_on,events.repository.name, events.repository.owner from json where url = "https://api.bitbucket.org/1.0/users/' + t.user + '/events/"'),
            dataType: "jsonp",
            success: function (e) {
                n(a(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.bitly = function (t, n) {
        var i = e.extend({}, {
            created: 'created URL <a href="${short_url}" title="${title}">${short_url}</a>'
        }, t.template);
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select data.short_url, data.created, data.title from json where url="http://bitly.com/u/' + t.user + '.json"'),
            dataType: "jsonp",
            success: function (r) {
                var o, a, s = [],
                    u = 0;
                if (r.query && r.query.count && r.query.results.json)
                    for (a = r.query.results.json, o = a.length; o > u; u++) {
                        var l = a[u].data;
                        s.push({
                            date: new Date(1e3 * l.created),
                            config: t,
                            html: e.tmpl(i.created, l)
                        })
                    }
                n(s)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.blogger = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${origLink}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s, u, l = [],
                    c = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.feed.entry)
                    for (r = n.query.results.feed.entry, o = r.length; o > c; c++) {
                        if (a = r[c], !a.origLink)
                            for (s = 0, u = a.link.length; u > s; s++) "alternate" === a.link[s].rel && (a.origLink = a.link[s].href);
                        a.origLink && (a.title.content && (a.title = a.title.content), l.push({
                            date: new Date(a.published),
                            config: t,
                            html: e.tmpl(i.posted, a)
                        }))
                    }
                return l
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://' + t.user + '.blogspot.com/feeds/posts/default"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.citeulike = function (t, n) {
        var i = e.extend({}, {
            saved: 'saved <a href="${href}">${title}</a> by ${authors}'
        }, t.template),
            r = function (n) {
                var r, o = [],
                    a = 0;
                if (n && n.length && n.length > 0)
                    for (r = n.length; r > a; a++) {
                        var s = n[a];
                        o.push({
                            date: new Date(s.date),
                            config: t,
                            url: "http://www.citeulike.org/user/" + t.user,
                            html: e.tmpl(i.saved, s)
                        })
                    }
                return o
            };
        return e.ajax({
            url: "http://www.citeulike.org/json/user/" + t.user,
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.dailymotion = function (t, n) {
        var i = e.extend({}, {
            uploaded: 'uploaded a video <a href="${link}">${title[0]}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.uploaded, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.dailymotion.com/rss/user/' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.delicious = function (t, n) {
        var i = e.extend({}, {
            bookmarked: 'bookmarked <a href="${u}">${d}</a>'
        }, t.template);
        return e.ajax({
            url: "http://feeds.delicious.com/v2/json/" + t.user,
            dataType: "jsonp",
            success: function (r) {
                var o, a = [],
                    s = 0;
                if (r && r.length && r.length > 0)
                    for (o = r.length; o > s; s++) {
                        var u = r[s];
                        a.push({
                            date: new Date(u.dt),
                            config: t,
                            html: e.tmpl(i.bookmarked, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.deviantart = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${link}">${title}</a>'
        }, t.template);
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select title,link,pubDate from rss where url="http://backend.deviantart.com/rss.xml?q=gallery%3A' + encodeURIComponent(t.user) + "&type=deviation" + '" | unique(field="title")'),
            dataType: "jsonp",
            success: function (r) {
                var o, a, s, u = [],
                    l = 0;
                if (r.query && r.query.count > 0)
                    for (o = r.query.results.item, s = o.length; s > l; l++) a = o[l], u.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.posted, a)
                    });
                n(u)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.disqus = function (t, n) {
        var i = e.extend({}, {
            post: 'commented on <a href="${url}">${thread.title}</a>',
            thread_like: 'liked <a href="${url}">${thread.title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n)
                    for (r = n.length; r > s; s++) o = n[s], "reply" !== o.type && a.push({
                        date: new Date(o.createdAt),
                        config: t,
                        html: e.tmpl(i[o.type], o.object)
                    });
                return a
            };
        return e.ajax({
            url: "https://disqus.com/api/3.0/users/listActivity.json",
            data: {
                user: t.user,
                api_key: t.key
            },
            dataType: "jsonp",
            success: function (e) {
                return 2 === e.code ? (n([]), console && console.error && console.error("Error loading Disqus stream.", e.response), void 0) : (n(r(e.response)), void 0)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.dribbble = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted a shot <a href="${url}">${title}</a>'
        }, t.template);
        return e.ajax({
            url: "http://api.dribbble.com/players/" + t.user + "/shots",
            dataType: "jsonp",
            success: function (r) {
                var o, a = [],
                    s = 0;
                if (r && r.total)
                    for (o = r.shots.length; o > s; s++) {
                        var u = r.shots[s];
                        a.push({
                            date: new Date(u.created_at),
                            config: t,
                            html: e.tmpl(i.posted, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.facebook_page = function (t, n) {
        var i = e.extend({}, {
            wall_post: 'post on wall <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > s; s++) {
                        var u = r[s];
                        e.trim(u.title) && a.push({
                            date: new Date(u.pubDate),
                            config: t,
                            html: e.tmpl(i.wall_post, u)
                        })
                    }
                return a
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="www.facebook.com/feeds/page.php?id=' + t.user + '&format=rss20"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    "use strict";
    e.fn.lifestream.feeds.fancy = function (t, n) {
        var i = e.extend({}, {
            fancied: 'fancy\'d <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o = [],
                    a = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.count; r > a; a++) {
                        var s = n.query.results.item[a];
                        o.push({
                            date: new Date(s.pubDate),
                            config: t,
                            html: e.tmpl(i.fancied, s)
                        })
                    }
                return o
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('SELECT * FROM xml WHERE url="http://www.fancy.com/rss/' + t.user + '" AND itemPath="/rss/channel/item"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.flickr = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted a photo <a href="${link}">${title}</a>'
        }, t.template);
        return e.ajax({
            url: "http://api.flickr.com/services/feeds/photos_public.gne?id=" + t.user + "&lang=en-us&format=json",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function (r) {
                var o, a = [],
                    s = 0;
                if (r && r.items && r.items.length > 0)
                    for (o = r.items.length; o > s; s++) {
                        var u = r.items[s];
                        a.push({
                            date: new Date(u.published),
                            config: t,
                            html: e.tmpl(i.posted, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.foomark = function (t, n) {
        var i = e.extend({}, {
            bookmarked: 'bookmarked <a href="${url}">${url}</a>'
        }, t.template);
        return e.ajax({
            url: "http://api.foomark.com/urls/list/",
            data: {
                format: "jsonp",
                username: t.user
            },
            dataType: "jsonp",
            success: function (r) {
                var o, a = [],
                    s = 0;
                if (r && r.length && r.length > 0)
                    for (o = r.length; o > s; s++) {
                        var u = r[s];
                        a.push({
                            date: new Date(u.created_at.replace(/-/g, "/")),
                            config: t,
                            html: e.tmpl(i.bookmarked, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.formspring = function (t, n) {
        var i = e.extend({}, {
            answered: 'answered a question <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.answered, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.formspring.me/profile/' + t.user + '.rss"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.forrst = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted a ${post_type} <a href="${post_url}">${title}</a>'
        }, t.template);
        return e.ajax({
            url: "http://forrst.com/api/v2/users/posts?username=" + t.user,
            dataType: "jsonp",
            success: function (r) {
                var o, a = [],
                    s = 0;
                if (r && r.resp.length && r.resp.length > 0)
                    for (o = r.resp.length; o > s; s++) {
                        var u = r.resp[s];
                        a.push({
                            date: new Date(u.created_at.replace(" ", "T")),
                            config: t,
                            html: e.tmpl(i.posted, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.foursquare = function (t, n) {
        var i = e.extend({}, {
            checkedin: 'checked in @ <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o = [],
                    a = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.count; r > a; a++) {
                        var s = n.query.results.item[a];
                        o.push({
                            date: new Date(s.pubDate),
                            config: t,
                            html: e.tmpl(i.checkedin, s)
                        })
                    }
                return o
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from rss where url="https://feeds.foursquare.com/history/' + t.user + '.rss"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.gimmebar = function (t, n) {
        var i = e.extend({}, {
            bookmarked: 'bookmarked <a href="${short_url}">${title}</a>'
        }, t.template);
        return e.ajax({
            url: "https://gimmebar.com/api/v0/public/assets/" + t.user + ".json?jsonp_callback=?",
            dataType: "json",
            success: function (r) {
                r = r.records;
                var o, a = [],
                    s = 0;
                if (r && r.length && r.length > 0)
                    for (o = r.length; o > s; s++) {
                        var u = r[s];
                        a.push({
                            date: new Date(1e3 * u.date),
                            config: t,
                            html: e.tmpl(i.bookmarked, u)
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.github = function (t, n) {
        var i = e.extend({}, {
            commitCommentEvent: 'commented on <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            createBranchEvent: 'created branch <a href="http://github.com/${status.repo.name}/tree/${status.payload.ref}">${status.payload.ref}</a> at <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            createRepositoryEvent: 'created repository <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            createTagEvent: 'created tag <a href="http://github.com/${status.repo.name}/tree/${status.payload.ref}">${status.payload.ref}</a> at <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            deleteBranchEvent: 'deleted branch ${status.payload.ref} at <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            deleteTagEvent: 'deleted tag ${status.payload.ref} at <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            followEvent: 'started following <a href="http://github.com/${status.payload.target.login}">${status.payload.target.login}</a>',
            forkEvent: 'forked <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            gistEvent: '${status.payload.action} gist <a href="http://gist.github.com/${status.payload.gist.id}">${status.payload.gist.id}</a>',
            issueCommentEvent: 'commented on issue <a href="http://github.com/${status.repo.name}/issues/${status.payload.issue.number}">${status.payload.issue.number}</a> on <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            issuesEvent: '${status.payload.action} issue <a href="http://github.com/${status.repo.name}/issues/${status.payload.issue.number}">${status.payload.issue.number}</a> on <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            pullRequestEvent: '${status.payload.action} pull request <a href="http://github.com/${status.repo.name}/pull/${status.payload.number}">${status.payload.number}</a> on <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            pushEvent: 'pushed to <a href="http://github.com/${status.repo.name}/tree/${status.payload.ref}">${status.payload.ref}</a> at <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>',
            watchEvent: 'started watching <a href="http://github.com/${status.repo.name}">${status.repo.name}</a>'
        }, t.template),
            r = function (t) {
                return "CommitCommentEvent" === t.type ? e.tmpl(i.commitCommentEvent, {
                    status: t
                }) : "CreateEvent" === t.type && "branch" === t.payload.ref_type ? e.tmpl(i.createBranchEvent, {
                    status: t
                }) : "CreateEvent" === t.type && "repository" === t.payload.ref_type ? e.tmpl(i.createRepositoryEvent, {
                    status: t
                }) : "CreateEvent" === t.type && "tag" === t.payload.ref_type ? e.tmpl(i.createTagEvent, {
                    status: t
                }) : "DeleteEvent" === t.type && "branch" === t.payload.ref_type ? e.tmpl(i.deleteBranchEvent, {
                    status: t
                }) : "DeleteEvent" === t.type && "tag" === t.payload.ref_type ? e.tmpl(i.deleteTagEvent, {
                    status: t
                }) : "FollowEvent" === t.type ? e.tmpl(i.followEvent, {
                    status: t
                }) : "ForkEvent" === t.type ? e.tmpl(i.forkEvent, {
                    status: t
                }) : "GistEvent" === t.type ? ("create" === t.payload.action ? t.payload.action = "created" : "update" === t.payload.action && (t.payload.action = "updated"), e.tmpl(i.gistEvent, {
                    status: t
                })) : "IssueCommentEvent" === t.type ? e.tmpl(i.issueCommentEvent, {
                    status: t
                }) : "IssuesEvent" === t.type ? e.tmpl(i.issuesEvent, {
                    status: t
                }) : "PullRequestEvent" === t.type ? e.tmpl(i.pullRequestEvent, {
                    status: t
                }) : "PushEvent" === t.type ? (t.payload.ref = t.payload.ref.split("/")[2], e.tmpl(i.pushEvent, {
                    status: t
                })) : "WatchEvent" === t.type ? e.tmpl(i.watchEvent, {
                    status: t
                }) : void 0
            }, o = function (e) {
                var n, i = [],
                    o = 0;
                if (e.query && e.query.count && e.query.count > 0)
                    for (n = e.query.count; n > o; o++) {
                        var a = e.query.results.json[o].json;
                        i.push({
                            date: new Date(a.created_at),
                            config: t,
                            html: r(a),
                            url: "https://github.com/" + t.user
                        })
                    }
                return i
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select json.type, json.actor, json.repo, json.payload, json.created_at from json where url="https://api.github.com/users/' + t.user + '/events/public?per_page=100"'),
            dataType: "jsonp",
            success: function (e) {
                n(o(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.googleplus = function (t, n) {
        var i = e.extend({}, {
            posted: '<a href="${actor.url}">${actor.displayName}</a> has posted a new entry <a href="${url}" title="${id}">${title}</a> <!--With--> ${object.replies.totalItems} replies, ${object.plusoners.totalItems} +1s, ${object.resharers.totalItems} Reshares'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n && n.items)
                    for (r = n.items.length; r > s; s++) o = n.items[s], a.push({
                        date: new Date(o.published),
                        config: t,
                        html: e.tmpl(i.posted, o)
                    });
                return a
            };
        return e.ajax({
            url: "https://www.googleapis.com/plus/v1/people/" + t.user + "/activities/public",
            data: {
                key: t.key
            },
            dataType: "jsonp",
            success: function (e) {
                return e.error ? (n([]), console && console.error && console.error("Error loading Google+ stream.", e.error), void 0) : (n(r(e)), void 0)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.hypem = function (t, n) {
        t.type && "history" === t.type && "loved" === t.type || (t.type = "loved");
        var i = e.extend({}, {
            loved: 'loved <a href="http://hypem.com/item/${mediaid}">${title}</a> by <a href="http://hypem.com/artist/${artist}">${artist}</a>',
            history: 'listened to <a href="http://hypem.com/item/${mediaid}">${title}</a> by <a href="http://hypem.com/artist/${artist}">${artist}</a>'
        }, t.template);
        return e.ajax({
            url: "http://hypem.com/playlist/" + t.type + "/" + t.user + "/json/1/data.js",
            dataType: "json",
            success: function (r) {
                var o = [],
                    a = 0,
                    s = -1;
                for (var u in r) r.hasOwnProperty(u) && s++;
                if (r && s > 0)
                    for (; s > a; a++) {
                        var l = r[a];
                        o.push({
                            date: new Date(1e3 * ("history" === t.type ? l.dateplayed : l.dateloved)),
                            config: t,
                            html: e.tmpl("history" === t.type ? i.history : i.loved, l)
                        })
                    }
                n(o)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.instapaper = function (t, n) {
        var i = e.extend({}, {
            loved: 'loved <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.loved, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.instapaper.com/starred/rss/' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.iusethis = function (t, n) {
        var i = e.extend({}, {
            global: '${action} <a href="${link}">${what}</a> on (${os})'
        }, t.template),
            r = function (n) {
                var r, o, a, s, u, l, c, d, p, h, f, m, v = [],
                    g = 0,
                    y = ["iPhone", "OS X", "Windows"];
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss)
                    for (l = n.query.results.rss.length, p = ["started using", "stopped using", "stopped loving", "Downloaded", "commented on", "updated entry for", "started loving", "registered"], u = p.length; l > g; g++)
                        for (m = y[g], r = n.query.results.rss[g].channel.item, o = 0, a = r.length; a > o; o++) {
                            for (c = r[o], d = c.title.replace(t.user + " ", ""), s = 0; u > s; s++)
                                if (d.indexOf(p[s]) > -1) {
                                    h = p[s];
                                    break
                                }
                            f = d.split(h), v.push({
                                date: new Date(c.pubDate),
                                config: t,
                                html: e.tmpl(i.global, {
                                    action: h.toLowerCase(),
                                    link: c.link,
                                    what: f[1],
                                    os: m
                                })
                            })
                        }
                return v
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://iphone.iusethis.com/user/feed.rss/' + t.user + '" or ' + 'url="http://osx.iusethis.com/user/feed.rss/' + t.user + '" or ' + 'url="http://win.iusethis.com/user/feed.rss/' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.lastfm = function (t, n) {
        var i = e.extend({}, {
            loved: 'loved <a href="${url}">${name}</a> by <a href="${artist.url}">${artist.name}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.lovedtracks && n.query.results.lovedtracks.track)
                    for (r = n.query.results.lovedtracks.track, o = r.length; o > s; s++) {
                        var u = r[s],
                            l = u.nowplaying ? new Date : u.date.uts;
                        a.push({
                            date: new Date(parseInt(1e3 * l, 10)),
                            config: t,
                            html: e.tmpl(i.loved, u)
                        })
                    }
                return a
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://ws.audioscrobbler.com/2.0/user/' + t.user + '/lovedtracks.xml"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.librarything = function (t, n) {
        var i = e.extend({}, {
            book: 'added <a href="http://www.librarything.com/work/book/${book.book_id}" title="${book.title} by ${book.author_fl}">${book.title} by ${book.author_fl}</a> to my library'
        }, t.template),
            r = function (n) {
                var r = [],
                    o = "";
                if (n.books)
                    for (o in n.books)
                        if (n.books.hasOwnProperty(o)) {
                            var a = n.books[o];
                            r.push({
                                date: new Date(1e3 * a.entry_stamp),
                                config: t,
                                html: e.tmpl(i.book, {
                                    book: a
                                }),
                                url: "http://www.librarything.com/profile/" + t.user
                            })
                        }
                return r
            };
        return e.ajax({
            url: "http://www.librarything.com/api_getdata.php?booksort=entry_REV&userid=" + t.user,
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    "use strict";
    e.fn.lifestream.feeds.linkedin = function (t, n) {
        var i = e.extend({}, {
            posted: '<a href="${link}">${title}</a>'
        }, t.template),
            r = "jlsLinkedinCallback" + t.user,
            o = function () {
                var e = 'SELECT * FROM feed WHERE url="' + t.url + '"';
                return t.user && (e += ' AND link LIKE "%' + t.user + '%"'), e
            }, a = function (n) {
                return {
                    date: new Date(n.pubDate),
                    config: t,
                    html: e.tmpl(i.posted, n)
                }
            };
        return window[r] = function (e) {
            var t = [],
                i = 0;
            if (e.query && e.query.count && e.query.count > 0)
                if (1 === e.query.count) t.push(a(e.query.results.item));
                else
                    for (i; i < e.query.count; i++) {
                        var r = e.query.results.item[i];
                        t.push(a(r))
                    }
                n(t)
        }, e.ajax({
            url: e.fn.lifestream.createYqlUrl(o()),
            cache: !0,
            data: {
                _maxage: 300
            },
            dataType: "jsonp",
            jsonpCallback: r
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.mendeley = function (t, n) {
        var i = e.extend({}, {
            flagged1: 'flagged <a href="http://www.mendeley.com${link}">${title}</a>',
            flagged2: 'flagged <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > s; s++) {
                        var u = r[s],
                            l = "/" === u.link.charAt(0) ? i.flagged1 : i.flagged2;
                        a.push({
                            date: new Date(u.pubDate),
                            config: t,
                            url: "http://mendeley.com/groups/" + t.user,
                            html: e.tmpl(l, u)
                        })
                    }
                return a
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.mendeley.com/groups/' + t.user + '/feed/rss/"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.miso = function (t, n) {
        var i = e.extend({}, {
            watched: 'checked in to <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > s; s++) {
                        var u = r[s];
                        a.push({
                            url: "http://www.gomiso.com/feeds/user/" + t.user + "/checkins.rss",
                            date: new Date(u.pubDate),
                            config: t,
                            html: e.tmpl(i.watched, u)
                        })
                    }
                return a
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.gomiso.com/feeds/user/' + t.user + '/checkins.rss"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.mlkshk = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.posted, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://mlkshk.com/user/' + t.user + '/rss"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.pinboard = function (t, n) {
        var i = e.extend({}, {
            bookmarked: 'bookmarked <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.RDF.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.date),
                        config: t,
                        html: e.tmpl(i.bookmarked, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://feeds.pinboard.in/rss/u:' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.posterous = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.posted, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://' + t.user + '.posterous.com/rss.xml"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.quora = function (t, n) {
        var i = e.extend({}, {
            posted: '<a href="${link}">${title}</a>'
        }, t.template),
            r = function (e) {
                for (var t = 0, n = e.link.length; n > t; t++) {
                    var i = e.link[t];
                    if ("string" == typeof i) return i
                }
                return ""
            }, o = function (n) {
                var o = [],
                    a = [],
                    s = 0,
                    u = 0,
                    l = "";
                if (n.query && n.query.count && n.query.count > 0)
                    for (a = n.query.results.rss.channel.item, u = a.length, l = r(n.query.results.rss.channel); u > s; s++) {
                        var c = a[s];
                        o.push({
                            url: l,
                            date: new Date(c.pubDate),
                            config: t,
                            html: e.tmpl(i.posted, c)
                        })
                    }
                return o
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.quora.com/' + t.user + '/rss"'),
            dataType: "jsonp",
            success: function (e) {
                n(o(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.reddit = function (t, n) {
        var i = e.extend({}, {
            commented: '<a href="http://www.reddit.com/r/${item.data.subreddit}/comments/${item.data.link_id.substring(3)}/u/${item.data.name.substring(3)}?context=3">commented (${score})</a> in <a href="http://www.reddit.com/r/${item.data.subreddit}">${item.data.subreddit}</a>',
            created: '<a href="http://www.reddit.com${item.data.permalink}">created new thread (${score})</a> in <a href="http://www.reddit.com/r/${item.data.subreddit}">${item.data.subreddit}</a>'
        }, t.template),
            r = function (t) {
                var n = t.data.ups - t.data.downs,
                    r = {
                        item: t,
                        score: n > 0 ? "+" + n : n
                    };
                return "t1" === t.kind ? e.tmpl(i.commented, r) : "t3" === t.kind ? e.tmpl(i.created, r) : void 0
            }, o = function (e) {
                return new Date(1e3 * e)
            };
        return e.ajax({
            url: "http://www.reddit.com/user/" + t.user + ".json",
            dataType: "jsonp",
            jsonp: "jsonp",
            success: function (e) {
                var i, a = [],
                    s = 0;
                if (e && e.data && e.data.children && e.data.children.length > 0)
                    for (i = e.data.children.length; i > s; s++) {
                        var u = e.data.children[s];
                        a.push({
                            date: o(u.data.created_utc),
                            config: t,
                            html: r(u),
                            url: "http://reddit.com/user/" + t.user
                        })
                    }
                n(a)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.rss = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${link}">${title}</a>'
        }, t.template),
            r = function (e) {
                for (var t = 0, n = e.link.length; n > t; t++) {
                    var i = e.link[t];
                    if ("string" == typeof i) return i
                }
                return ""
            }, o = function (n) {
                var o = [],
                    a = [],
                    s = 0,
                    u = 0,
                    l = "";
                if (n.query && n.query.count && n.query.count > 0)
                    for (a = n.query.results.rss.channel.item, u = a.length, l = r(n.query.results.rss.channel); u > s; s++) {
                        var c = a[s];
                        o.push({
                            url: l,
                            date: new Date(c.pubDate),
                            config: t,
                            html: e.tmpl(i.posted, c)
                        })
                    }
                return o
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(o(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.slideshare = function (t, n) {
        var i = e.extend({}, {
            uploaded: 'uploaded a presentation <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.uploaded, a)
                    });
                return s
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://www.slideshare.net/rss/user/' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.snipplr = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted a snippet <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.posted, a)
                    });
                return s
            };
        e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="http://snipplr.com/rss/users/' + t.user + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        })
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.stackoverflow = function (t, n) {
        var i = e.extend({}, {
            global: '<a href="${link}">${text}</a> - ${title}'
        }, t.template),
            r = function (e) {
                var n = "",
                    i = "",
                    r = "",
                    o = "http://stackoverflow.com/users/" + t.user,
                    a = "http://stackoverflow.com/questions/";
                return "badge" === e.timeline_type ? (n = "was " + e.action + " the '" + e.description + "' badge", i = e.detail, r = o + "?tab=reputation") : "comment" === e.timeline_type ? (n = "commented on", i = e.description, r = a + e.post_id) : ("revision" === e.timeline_type || "accepted" === e.timeline_type || "askoranswered" === e.timeline_type) && (n = "askoranswered" === e.timeline_type ? e.action : e.action + " " + e.post_type, i = e.detail || e.description || "", r = a + e.post_id), {
                    link: r,
                    title: i,
                    text: n
                }
            }, o = function (e) {
                return new Date(1e3 * e)
            };
        return e.ajax({
            url: "http://api.stackoverflow.com/1.1/users/" + t.user + "/timeline?jsonp",
            dataType: "jsonp",
            jsonp: "jsonp",
            success: function (a) {
                var s, u = [],
                    l = 0;
                if (a && a.total && a.total > 0 && a.user_timelines)
                    for (s = a.user_timelines.length; s > l; l++) {
                        var c = a.user_timelines[l];
                        u.push({
                            date: o(c.creation_date),
                            config: t,
                            html: e.tmpl(i.global, r(c))
                        })
                    }
                n(u)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.tumblr = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted a ${type} <a href="${url}">${title}</a>'
        }, t.template),
            r = t.limit || 20,
            o = function (t) {
                switch (t.type) {
                case "photo":
                    var n = t["photo-url"];
                    return e('<img width="75" height="75"/>').attr({
                        src: n[n.length - 1].content,
                        title: u(t),
                        alt: u(t)
                    }).wrap("<div/>").parent().html();
                case "video":
                    var i = t["video-player"],
                        r = i[i.length - 1].content;
                    return r.match(/<\s*script/) ? null : r;
                case "audio":
                    return t["audio-player"] + " " + e("<div/>").text(u(t)).html();
                default:
                    return null
                }
            }, a = function (t, n) {
                return e(t[n]).filter(":not(:empty):first").text()
            }, s = function (e) {
                var t;
                switch (e.type) {
                case "regular":
                    return e["regular-title"] || a(e, "regular-body");
                case "link":
                    return t = e["link-text"] || a(e, "link-description"), "" === t && (t = e["link-url"]), t;
                case "video":
                    return a(e, "video-caption");
                case "audio":
                    return a(e, "audio-caption");
                case "photo":
                    return a(e, "photo-caption");
                case "quote":
                    return '"' + e["quote-text"].replace(/<.+?>/g, " ").trim() + '"';
                case "conversation":
                    return t = e["conversation-title"], t || (t = e.conversation.line, "string" != typeof t && (t = t[0].label + " " + t[0].content + " ...")), t;
                case "answer":
                    return e.question;
                default:
                    return e.type
                }
            }, u = function (e) {
                var t = s(e) || "";
                return t.replace(/<.+?>/gi, " ")
            }, l = function (t, n) {
                return {
                    date: new Date(n.date),
                    config: t,
                    html: e.tmpl(i.posted, {
                        type: n.type.replace("regular", "blog entry"),
                        url: n.url,
                        image: o(n),
                        title: u(n)
                    })
                }
            }, c = function (n) {
                var i, r, o = [],
                    a = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    if (e.isArray(n.query.results.posts.post))
                        for (i = n.query.results.posts.post.length; i > a; a++) r = n.query.results.posts.post[a], o.push(l(t, r));
                    else e.isPlainObject(n.query.results.posts.post) && o.push(l(t, n.query.results.posts.post));
                return o
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from tumblr.posts where username="' + t.user + '"' + ' and num="' + r + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(c(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    "use strict";
    e.fn.lifestream.feeds.twitter = function (t, n) {
        var i = e.extend({}, {
            posted: "{{html tweet}}"
        }, t.template),
            r = "jlsTwitterCallback" + t.user.replace(/[^a-zA-Z0-9]+/g, ""),
            o = function (e) {
                var t = function (e) {
                    return e.replace(/[a-z]+:\/\/[a-z0-9\-_]+\.[a-z0-9\-_:~%&\?\/.=]+[^:\.,\)\s*$]/gi, function (e) {
                        return '<a href="' + e + '">' + (e.length > 25 ? e.substr(0, 24) + "..." : e) + "</a>"
                    })
                }, n = function (e) {
                        return e.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g, function (e, t, n) {
                            return t + '<a href="http://twitter.com/' + n + '">@' + n + "</a>"
                        })
                    }, i = function (e) {
                        return e.replace(/(^|[^\w'"]+)\#([a-zA-Z0-9ÅåÄäÖöØøÆæÉéÈèÜüÊêÛûÎî_]+)/g, function (e, t, n) {
                            return t + '<a href="http://search.twitter.com/search?q=%23' + n + '">#' + n + "</a>"
                        })
                    };
                return i(n(t(e)))
            }, a = function (n) {
                var r = [],
                    a = 0,
                    s = n.length;
                for (a; s > a; a++) {
                    var u = n[a];
                    r.push({
                        date: new Date(1e3 * u.created_at),
                        config: t,
                        html: e.tmpl(i.posted, {
                            tweet: o(u.text),
                            complete_url: "http://twitter.com/" + t.user + "/status/" + u.id_str
                        }),
                        url: "http://twitter.com/" + t.user
                    })
                }
                return r
            };
        return window[r] = function (e) {
            e.query && e.query.count > 0 && n(a(e.query.results.items))
        }, e.ajax({
            url: e.fn.lifestream.createYqlUrl('USE "http://arminrosu.github.io/twitter-open-data-table/table.xml" AS twitter; SELECT * FROM twitter WHERE screen_name = "' + t.user + '"'),
            cache: !0,
            data: {
                _maxage: 300
            },
            dataType: "jsonp",
            jsonpCallback: r
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.vimeo = function (t, n) {
        var i = e.extend({}, {
            liked: 'liked <a href="${url}" title="${description}">${title}</a>',
            posted: 'posted <a href="${url}" title="${description}">${title}</a>'
        }, t.template),
            r = function (n, r) {
                var o, a, s, u, l = [],
                    c = 0,
                    d = r || "liked";
                if (n)
                    for (o = n.length; o > c; c++) a = n[c], s = "posted" === d ? new Date(a.upload_date.replace(" ", "T")) : new Date(a.liked_on.replace(" ", "T")), u = a.description ? a.description.replace(/"/g, "'").replace(/<.+?>/gi, "") : "", l.push({
                        date: s,
                        config: t,
                        html: e.tmpl(i[d], {
                            url: a.url,
                            description: a.description ? a.description.replace(/"/g, "'").replace(/<.+?>/gi, "") : "",
                            title: a.title
                        })
                    });
                return l
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('SELECT * FROM xml WHERE url="http://vimeo.com/api/v2/' + t.user + '/likes.xml" OR ' + 'url="http://vimeo.com/api/v2/' + t.user + '/videos.xml"'),
            dataType: "jsonp",
            success: function (e) {
                var t = [];
                e.query.results.videos[0].video.length > 0 && (t = t.concat(r(e.query.results.videos[0].video))), e.query.results.videos[1].video.length > 0 && (t = t.concat(r(e.query.results.videos[1].video, "posted"))), n(t)
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.wikipedia = function (t, n) {
        var i = t.language || "en",
            r = e.extend({}, {
                contribution: 'contributed to <a href="${url}">${title}</a>'
            }, t.template);
        return e.ajax({
            url: "http://" + i + ".wikipedia.org/w/api.php?action=query&ucuser=" + t.user + "&list=usercontribs&ucdir=older&format=json",
            dataType: "jsonp",
            success: function (o) {
                var a, s = [],
                    u = 0;
                if (o && o.query.usercontribs)
                    for (a = o.query.usercontribs.length; a > u; u++) {
                        var l = o.query.usercontribs[u];
                        l.url = "http://" + i + ".wikipedia.org/wiki/" + l.title.replace(" ", "_"), s.push({
                            date: new Date(l.timestamp),
                            config: t,
                            html: e.tmpl(r.contribution, l)
                        })
                    }
                n(s)
            }
        }), {
            template: r
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.wordpress = function (t, n) {
        var i = e.extend({}, {
            posted: 'posted <a href="${link}">${title}</a>'
        }, t.template),
            r = function (n) {
                var r, o, a, s = [],
                    u = 0;
                if (n.query && n.query.count && n.query.count > 0 && n.query.results.rss.channel.item)
                    for (r = n.query.results.rss.channel.item, o = r.length; o > u; u++) a = r[u], s.push({
                        date: new Date(a.pubDate),
                        config: t,
                        html: e.tmpl(i.posted, a)
                    });
                return s
            }, o = "";
        return t.user && (o = 0 === t.user.indexOf("http://") ? t.user + "/feed" : "http://" + t.user + ".wordpress.com/feed", e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="' + o + '"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        })), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.youtube = function (t, n) {
        var i = e.extend({}, {
            uploaded: 'uploaded <a href="${video.player.default}" title="${video.description}">${video.title}</a>',
            favorited: 'favorited <a href="${video.player.default}" title="${video.description}">${video.title}</a>'
        }, t.template),
            r = function (n, r) {
                var o, a, s, u, l, c = [],
                    d = 0;
                if (n.data && n.data.items)
                    for (o = n.data.items.length; o > d; d++) {
                        switch (a = n.data.items[d], r) {
                        case "favorited":
                            s = a.video, u = a.created, l = a;
                            break;
                        case "uploaded":
                            s = a, u = s.uploaded, l = {
                                video: s
                            }
                        }
                        s.player && s.player["default"] && c.push({
                            date: new Date(u),
                            config: t,
                            html: e.tmpl(i[r], l)
                        })
                    }
                return c
            };
        return e.ajax({
            url: "http://gdata.youtube.com/feeds/api/users/" + t.user + "/favorites?v=2&alt=jsonc",
            dataType: "jsonp",
            success: function (e) {
                n(r(e, "favorited"))
            }
        }), e.ajax({
            url: "http://gdata.youtube.com/feeds/api/users/" + t.user + "/uploads?v=2&alt=jsonc",
            dataType: "jsonp",
            success: function (e) {
                n(r(e, "uploaded"))
            }
        }), {
            template: i
        }
    }
}(jQuery),
function (e) {
    e.fn.lifestream.feeds.zotero = function (t, n) {
        var i = e.extend({}, {
            flagged: 'flagged <a href="${id}">${title}</a> by ${creatorSummary}'
        }, t.template),
            r = function (n) {
                var r, o, a = [],
                    s = 0;
                if (n.query && n.query.count && n.query.count > 0)
                    for (r = n.query.results.feed.entry, o = r.length; o > s; s++) {
                        var u = r[s];
                        a.push({
                            date: new Date(u.updated),
                            config: t,
                            url: "http://zotero.com/users/" + t.user,
                            html: e.tmpl(i.flagged, u)
                        })
                    }
                return a
            };
        return e.ajax({
            url: e.fn.lifestream.createYqlUrl('select * from xml where url="https://api.zotero.org/users/' + t.user + '/items"'),
            dataType: "jsonp",
            success: function (e) {
                n(r(e))
            }
        }), {
            template: i
        }
    }
}(jQuery),
/*!
 * FitText.js 1.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */
function (e) {
    e.fn.fitText = function (t, n) {
        var i = t || 1,
            r = e.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, n);
        return this.each(function () {
            var t = e(this),
                n = function () {
                    t.css("font-size", Math.max(Math.min(t.width() / (10 * i), parseFloat(r.maxFontSize)), parseFloat(r.minFontSize)))
                };
            n(), e(window).on("resize orientationchange", n)
        })
    }
}(jQuery),
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.1.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function t() {
        var t = n(this);
        return isNaN(t.datetime) || e(this).text(i(t.datetime)), this
    }

    function n(t) {
        if (t = e(t), !t.data("timeago")) {
            t.data("timeago", {
                datetime: o.datetime(t)
            });
            var n = e.trim(t.text());
            !(n.length > 0) || o.isTime(t) && t.attr("title") || t.attr("title", n)
        }
        return t.data("timeago")
    }

    function i(e) {
        return o.inWords(r(e))
    }

    function r(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function (t) {
        return t instanceof Date ? i(t) : "string" == typeof t ? i(e.timeago.parse(t)) : "number" == typeof t ? i(new Date(t)) : i(e.timeago.datetime(t))
    };
    var o = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (t) {
            function n(n, r) {
                var o = e.isFunction(n) ? n(r, t) : n,
                    a = i.numbers && i.numbers[r] || r;
                return o.replace(/%d/i, a)
            }
            var i = this.settings.strings,
                r = i.prefixAgo,
                o = i.suffixAgo;
            this.settings.allowFuture && 0 > t && (r = i.prefixFromNow, o = i.suffixFromNow);
            var a = Math.abs(t) / 1e3,
                s = a / 60,
                u = s / 60,
                l = u / 24,
                c = l / 365,
                d = 45 > a && n(i.seconds, Math.round(a)) || 90 > a && n(i.minute, 1) || 45 > s && n(i.minutes, Math.round(s)) || 90 > s && n(i.hour, 1) || 24 > u && n(i.hours, Math.round(u)) || 42 > u && n(i.day, 1) || 30 > l && n(i.days, Math.round(l)) || 45 > l && n(i.month, 1) || 365 > l && n(i.months, Math.round(l / 30)) || 1.5 > c && n(i.year, 1) || n(i.years, Math.round(c)),
                p = i.wordSeparator || "";
            return void 0 === i.wordSeparator && (p = " "), e.trim([r, d, o].join(p))
        },
        parse: function (t) {
            var n = e.trim(t);
            return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)
        },
        datetime: function (t) {
            var n = o.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
            return o.parse(n)
        },
        isTime: function (t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    });
    var a = {
        init: function () {
            var n = e.proxy(t, this);
            n();
            var i = o.settings;
            i.refreshMillis > 0 && setInterval(n, i.refreshMillis)
        },
        update: function (n) {
            e(this).data("timeago", {
                datetime: o.parse(n)
            }), t.apply(this)
        }
    };
    e.fn.timeago = function (e, t) {
        var n = e ? a[e] : a.init;
        if (!n) throw new Error("Unknown function name '" + e + "' for timeago");
        return this.each(function () {
            n.call(this, t)
        }), this
    }, document.createElement("abbr"), document.createElement("time")
}),
function (e) {
    var t = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: ""
    }, n = e(window),
        i = e(document),
        r = [],
        o = n.height(),
        a = function () {
            for (var t = n.scrollTop(), a = i.height(), s = a - o, u = t > s ? s - t : 0, l = 0; l < r.length; l++) {
                var c = r[l],
                    d = c.stickyWrapper.offset().top,
                    p = d - c.topSpacing - u;
                if (p >= t) null !== c.currentTop && (c.stickyElement.css("position", "").css("top", ""), c.stickyElement.parent().removeClass(c.className), c.currentTop = null);
                else {
                    var h = a - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - t - u;
                    0 > h ? h += c.topSpacing : h = c.topSpacing, c.currentTop != h && (c.stickyElement.css("position", "fixed").css("top", h), "undefined" != typeof c.getWidthFrom && c.stickyElement.css("width", e(c.getWidthFrom).width()), c.stickyElement.parent().addClass(c.className), c.currentTop = h)
                }
            }
        }, s = function () {
            o = n.height()
        }, u = {
            init: function (n) {
                var i = e.extend(t, n);
                return this.each(function () {
                    var t = e(this),
                        n = t.attr("id"),
                        o = e("<div></div>").attr("id", n + "-sticky-wrapper").addClass(i.wrapperClassName);
                    t.wrapAll(o), i.center && t.parent().css({
                        width: t.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" == t.css("float") && t.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    });
                    var a = t.parent();
                    a.css("height", t.outerHeight()), r.push({
                        topSpacing: i.topSpacing,
                        bottomSpacing: i.bottomSpacing,
                        stickyElement: t,
                        currentTop: null,
                        stickyWrapper: a,
                        className: i.className,
                        getWidthFrom: i.getWidthFrom
                    })
                })
            },
            update: a
        };
    window.addEventListener ? (window.addEventListener("scroll", a, !1), window.addEventListener("resize", s, !1)) : window.attachEvent && (window.attachEvent("onscroll", a), window.attachEvent("onresize", s)), e.fn.sticky = function (t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.sticky"), void 0) : u.init.apply(this, arguments)
    }, e(function () {
        setTimeout(a, 0)
    })
}(jQuery), Modernizr.addTest("highresdisplay", function () {
    if (window.matchMedia) {
        var e = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return e.matches
    }
});
var visible = !1,
    isRetina = Modernizr.highresdisplay;
$(document).ready(function () {
    $("body").fadeIn(300), $("#headline").fitText(1, {
        minFontSize: "14px",
        maxFontSize: "152px"
    }), $("#header").sticky({
        topSpacing: 0
    }), $(".menulink").click(function (e) {
        e.preventDefault();
        var t = this.href;
        $("body").fadeOut(300, function () {
            window.location = t
        })
    }), $(".homelink").click(function (e) {
        e.preventDefault();
        var t = this.href;
        $("body").fadeOut(300, function () {
            window.location = t
        })
    }), retinize()
});
var landing, isTouch = Modernizr.touch,
    headerBGVisible = !1,
    BV, count = 0,
    list = [{
        service: "facebook_page",
        user: "48283858451",
        template: {
            wall_post: '<a href="${link}" target="_blank"><div class="icon white-facebook"></div></a><div class="content"><p class="info">${title}</p></div>'
        }
    }, {
        service: "vimeo",
        user: "fabrica",
        template: {
            posted: '<a href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info"><a href="${url}" title="${description}">${title}</a></p></div>',
            liked: '<a class="liked" href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info">liked <a href="${url}" title="${description}">${title}</a></p></div>'
        }
    }, {
        service: "twitter",
        user: "fabrica",
        template: {
            posted: '<div class="content"><p class="info">{{html tweet}}</p></div>'
        }
    }];
$(document).ready(function () {
    $("#headline").fitText(1, {
        minFontSize: "14px",
        maxFontSize: "152px"
    }), landing = $("#landing"), landing.click(function (e) {
        e.preventDefault(), BV.show("/_videos/background_07052013.mp4", {
            ambient: !0
        })
    }), setupLifeStream()
}), Date.prototype.toISO8601 = function (e) {
    var t = function (e, t) {
        for (var n = ""; n.length < t - 1 && e < Math.pow(10, t - n.length - 1);) n += "0";
        return n + e.toString()
    };
    e = e ? e : new Date;
    var n = e.getTimezoneOffset();
    return t(e.getFullYear(), 4) + "-" + t(e.getMonth() + 1, 2) + "-" + t(e.getDate(), 2) + "T" + t(e.getHours(), 2) + ":" + t(e.getMinutes(), 2) + ":" + t(e.getUTCSeconds(), 2) + (n > 0 ? "-" : "+") + t(Math.floor(Math.abs(n) / 60), 2) + ":" + t(Math.abs(n) % 60, 2)
}, window.onscroll = function () {
    document.body.scrollTop > 0 && 0 == headerBGVisible ? ($("#headerbg").fadeIn(300), headerBGVisible = !0) : 0 == document.body.scrollTop && 1 == headerBGVisible && ($("#headerbg").fadeOut(300), headerBGVisible = !1)
};