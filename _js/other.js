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
}! function (e, t) {
    function n(e) {
        var t = e.length,
            n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = kt[e] = {};
        return ct.each(e.match(ft) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ct.acceptData(e)) {
            var o, a, s = ct.expando,
                u = e.nodeType,
                l = u ? ct.cache : e,
                c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = tt.pop() || ct.guid++ : s), l[c] || (l[c] = u ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? l[c] = ct.extend(l[c], n) : l[c].data = ct.extend(l[c].data, n)), a = l[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ct.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ct.cache : e,
                u = o ? e[ct.expando] : ct.expando;
            if (a[u]) {
                if (t && (r = n ? a[u] : a[u].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ct.isEmptyObject(r)) return
                }(n || (delete a[u].data, s(a[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(St, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ct.parseJSON(r) : r
                } catch (o) {}
                ct.data(e, n, r)
            } else r = t
        }
        return r
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
            return Q.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ct.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Pt.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function (e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }

    function d(e) {
        var t = Ut.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, r, i, o = ct._data(e),
                a = ct._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ct.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ct.extend({}, a.data))
        }
    }

    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                i = ct._data(t);
                for (r in i.events) ct.removeEvent(t, r, i.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ct.nodeName(i, n) ? a.push(i) : ct.merge(a, x(i, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
    }

    function w(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;)
            if (t = kn[i] + n, t in e) return t;
        return r
    }

    function C(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }

    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ct._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = ct._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n : ct.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function k(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ct.css(e, n + Nn[o], !0, i)), r ? ("content" === n && (a -= ct.css(e, "padding" + Nn[o], !0, i)), "margin" !== n && (a -= ct.css(e, "border" + Nn[o] + "Width", !0, i))) : (a += ct.css(e, "padding" + Nn[o], !0, i), "padding" !== n && (a += ct.css(e, "border" + Nn[o] + "Width", !0, i)));
        return a
    }

    function S(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = pn(e),
            a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = fn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ct.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function A(e) {
        var t = Q,
            n = wn[e];
        return n || (n = j(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), cn.detach()), wn[e] = n), n
    }

    function j(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body),
            r = ct.css(n[0], "display");
        return n.remove(), r
    }

    function D(e, t, n, r) {
        var i;
        if (ct.isArray(t)) ct.each(t, function (t, i) {
            n || Sn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ct.type(t)) r(e, t);
        else
            for (i in t) D(e + "[" + i + "]", t[i], n, r)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ft) || [];
            if (ct.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function H(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0, ct.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {}, s = e === In;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function F(e, n) {
        var r, i, o = ct.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ct.extend(!0, e, r), e
    }

    function M(e, n, r) {
        for (var i, o, a, s, u = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function q(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function O() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ct.now()
    }

    function W(e, t, n) {
        for (var r, i = (or[t] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = ir.length,
            s = ct.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = Zn || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: ct.extend({}, t),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++)
            if (r = ir[o].call(l, e, c, l.opts)) return r;
        return ct.map(c, W, l), ct.isFunction(l.opts.start) && l.opts.start.call(e, l), ct.fx.timer(ct.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ct.camelCase(n), i = t[r], o = e[n], ct.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ct.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function P(e, t, n) {
        var r, i, o, a, s, u, l = this,
            c = {}, p = e.style,
            f = e.nodeType && C(e),
            d = ct._data(e, "fxshow");
        n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, l.always(function () {
            l.always(function () {
                s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || l.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tr.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || ct.style(e, r)
            }
        if (!ct.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = ct._data(e, "fxshow", {}), o && (d.hidden = !f), f ? ct(e).show() : l.done(function () {
                ct(e).hide()
            }), l.done(function () {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (r in c) a = W(f ? d[r] : 0, r, l), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }

    function I(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U, V, Y = typeof t,
        J = e.location,
        Q = e.document,
        G = Q.documentElement,
        K = e.jQuery,
        Z = e.$,
        et = {}, tt = [],
        nt = "1.10.2",
        rt = tt.concat,
        it = tt.push,
        ot = tt.slice,
        at = tt.indexOf,
        st = et.toString,
        ut = et.hasOwnProperty,
        lt = nt.trim,
        ct = function (e, t) {
            return new ct.fn.init(e, t, V)
        }, pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ft = /\S+/g,
        dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^[\],:{}\s]*$/,
        yt = /(?:^|:|,)(?:\s*\[)+/g,
        vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xt = /^-ms-/,
        wt = /-([\da-z])/gi,
        Tt = function (e, t) {
            return t.toUpperCase()
        }, Ct = function (e) {
            (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (Nt(), ct.ready())
        }, Nt = function () {
            Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", Ct, !1), e.removeEventListener("load", Ct, !1)) : (Q.detachEvent("onreadystatechange", Ct), e.detachEvent("onload", Ct))
        };
    ct.fn = ct.prototype = {
        jquery: nt,
        constructor: ct,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Q, !0)), mt.test(i[1]) && ct.isPlainObject(n))
                        for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = Q.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
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
        push: it,
        sort: [].sort,
        splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[i] = ct.extend(c, a, r)) : r !== t && (s[i] = r));
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
                if (!Q.body) return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (U.resolveWith(Q, [ct]), ct.fn.trigger && ct(Q).trigger("ready").off("ready"))
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
            } catch (r) {
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
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var r = mt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && ct.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(xt, "ms-").replace(wt, Tt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: lt && !lt.call("﻿ ") ? function (e) {
            return null == e ? "" : lt.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(dt, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (at) return at.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
            else
                for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return rt.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (r = ot.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(ot.call(arguments)))
            }, i.guid = e.guid = e.guid || ct.guid++, i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === ct.type(r)) {
                o = !0;
                for (u in r) ct.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ct.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ct(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), ct.ready.promise = function (t) {
        if (!U)
            if (U = ct.Deferred(), "complete" === Q.readyState) setTimeout(ct.ready);
            else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", Ct, !1), e.addEventListener("load", Ct, !1);
        else {
            Q.attachEvent("onreadystatechange", Ct), e.attachEvent("onload", Ct);
            var n = !1;
            try {
                n = null == e.frameElement && Q.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Nt(), ct.ready()
                }
            }()
        }
        return U.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), V = ct(Q),
    function (e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, l, c, p, h, m;
            if ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (M && !r) {
                if (i = bt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && $(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                    }
                if (C.qsa && (!q || !q.test(e))) {
                    if (p = c = W, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? p = c.replace(Tt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
                        h = dt.test(e) && t.parentNode || t, m = l.join(",")
                    }
                    if (m) try {
                        return et.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return w(e.replace(lt, "$1"), t, n, r)
        }

        function r() {
            function e(n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[W] = !0, e
        }

        function o(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
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
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function p() {}

        function f(e, t) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = k.preFilter; s;) {
                (!r || (i = pt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ft.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in k.filter)!(i = yt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length : s ? n.error(e) : I(e, u).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = P++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = R + " " + o;
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i)
                            if (l = t[W] || (t[W] = {}), (u = l[r]) && u[0] === c) {
                                if ((s = u[1]) === !0 || s === N) return s === !0
                            } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return !0
            }
        }

        function m(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function y(e, t, n, r, o, a) {
            return r && !r[W] && (r = y(r)), o && !o[W] && (o = y(o, a)), i(function (i, a, s, u) {
                var l, c, p, f = [],
                    d = [],
                    h = a.length,
                    m = i || x(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, f, e, s, u),
                    v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r)
                    for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(p = l[c]) && (v[d[c]] = !(y[d[c]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(p = v[c]) && l.push(y[c] = p);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(p = v[c]) && (l = o ? nt.call(i, p) : f[c]) > -1 && (i[l] = !(a[l] = p))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : et.apply(a, v)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                    return e === t
                }, a, !0), l = h(function (e) {
                    return nt.call(t, e) > -1
                }, a, !0), c = [
                    function (e, n, r) {
                        return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }
                ]; i > s; s++)
                if (n = k.relative[e[s].type]) c = [h(m(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[W]) {
                        for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                        return y(s > 1 && m(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function b(e, t) {
            var r = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function (i, s, u, l, c) {
                    var p, f, d, h = [],
                        m = 0,
                        y = "0",
                        v = i && [],
                        b = null != c,
                        x = j,
                        w = i || a && k.find.TAG("*", c && s.parentNode || s),
                        T = R += null == x ? 1 : Math.random() || .1;
                    for (b && (j = s !== H && s, N = r); null != (p = w[y]); y++) {
                        if (a && p) {
                            for (f = 0; d = e[f++];)
                                if (d(p, s, u)) {
                                    l.push(p);
                                    break
                                }
                            b && (R = T, N = ++r)
                        }
                        o && ((p = !d && p) && m--, i && v.push(p))
                    }
                    if (m += y, o && y !== m) {
                        for (f = 0; d = t[f++];) d(v, h, s, u);
                        if (i) {
                            if (m > 0)
                                for (; y--;) v[y] || h[y] || (h[y] = K.call(l));
                            h = g(h)
                        }
                        et.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && n.uniqueSort(l)
                    }
                    return b && (R = T, j = x), v
                };
            return o ? i(s) : s
        }

        function x(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r
        }

        function w(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && M && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(Ct, Nt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                    if ((u = k.find[s]) && (r = u(a.matches[0].replace(Ct, Nt), dt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return et.apply(n, r), n;
                        break
                    }
            }
            return A(e, l)(r, t, !M, n, dt.test(e)), n
        }
        var T, C, N, k, E, S, A, j, D, L, H, F, M, q, _, O, $, W = "sizzle" + -new Date,
            B = e.document,
            R = 0,
            P = 0,
            z = r(),
            I = r(),
            X = r(),
            U = !1,
            V = function (e, t) {
                return e === t ? (U = !0, 0) : 0
            }, Y = typeof t,
            J = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            Z = G.push,
            et = G.push,
            tt = G.slice,
            nt = G.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
            ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
            lt = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            pt = RegExp("^" + it + "*," + it + "*"),
            ft = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = RegExp(it + "*[+~]"),
            ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
            mt = RegExp(ut),
            gt = RegExp("^" + at + "$"),
            yt = {
                ID: RegExp("^#(" + ot + ")"),
                CLASS: RegExp("^\\.(" + ot + ")"),
                TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + st),
                PSEUDO: RegExp("^" + ut),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: RegExp("^(?:" + rt + ")$", "i"),
                needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, vt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /^(?:input|select|textarea|button)$/i,
            wt = /^h\d$/i,
            Tt = /'|\\/g,
            Ct = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            Nt = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            et.apply(G = tt.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
        } catch (kt) {
            et = {
                apply: G.length ? function (e, t) {
                    Z.apply(e, tt.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        S = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, C = n.support = {}, L = n.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : B,
                r = n.defaultView;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, F = n.documentElement, M = !S(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
                L()
            }), C.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), C.getById = o(function (e) {
                return F.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), C.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== Y && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(Ct, Nt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(Ct, Nt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = C.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.CLASS = C.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== Y && M ? n.getElementsByClassName(e) : t
            }, _ = [], q = [], (C.qsa = vt.test(n.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (C.matchesSelector = vt.test(O = F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function (e) {
                C.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), _.push("!=", ut)
            }), q = q.length && RegExp(q.join("|")), _ = _.length && RegExp(_.join("|")), $ = vt.test(F.contains) || F.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = F.compareDocumentPosition ? function (e, t) {
                if (e === t) return U = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || $(B, e) ? -1 : t === n || $(B, t) ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (e === t) return U = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
            }, n) : H
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== H && L(e), t = t.replace(ht, "='$1']"), !(!C.matchesSelector || !M || _ && _.test(t) || q && q.test(t))) try {
                var r = O.call(e, t);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return n(t, H, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), $(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== H && L(e);
            var r = k.attrHandle[n.toLowerCase()],
                i = r && Q.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !M) : t;
            return i === t ? C.attributes || !M ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, n.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (U = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort(V), U) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, E = n.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += E(t);
            return n
        }, k = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: yt,
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
                    return e[1] = e[1].replace(Ct, Nt), e[3] = (e[4] || e[5] || "").replace(Ct, Nt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = f(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Ct, Nt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, r) {
                    return function (i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, d, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                for (c = g[W] || (g[W] = {}), l = c[e] || [], d = l[0] === R && l[1], f = l[0] === R && l[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (f = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [R, d, f];
                                        break
                                    }
                            } else if (v && (l = (t[W] || (t[W] = {}))[e]) && l[0] === R) f = l[1];
                            else
                                for (;
                                    (p = ++d && p && p[m] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[W] || (p[W] = {}))[e] = [R, f]), p !== t)););
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[W] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) r = nt.call(e, i[a]), e[r] = !(n[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = A(e.replace(lt, "$1"));
                    return r[W] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ct, Nt).toLowerCase(),
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
                    return e === F
                },
                focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
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
                    return !k.pseudos.empty(e)
                },
                header: function (e) {
                    return wt.test(e.nodeName)
                },
                input: function (e) {
                    return xt.test(e.nodeName)
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
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[T] = u(T);
        for (T in {
            submit: !0,
            reset: !0
        }) k.pseudos[T] = l(T);
        p.prototype = k.filters = k.pseudos, k.setFilters = new p, A = n.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = v(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        }, C.sortStable = W.split("").sort(V).join("") === W, C.detectDuplicates = U, L(), C.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(rt, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var kt = {};
    ct.Callbacks = function (e) {
        e = "string" == typeof e ? kt[e] || r(e) : ct.extend({}, e);
        var n, i, o, a, s, u, l = [],
            c = !e.once && [],
            p = function (t) {
                for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
                    if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, l && (c ? c.length && p(c.shift()) : i ? l = [] : f.disable())
            }, f = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        ! function r(t) {
                            ct.each(t, function (t, n) {
                                var i = ct.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = l.length : i && (u = t, p(i))
                    }
                    return this
                },
                remove: function () {
                    return l && ct.each(arguments, function (e, t) {
                        for (var r;
                            (r = ct.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function (e) {
                    return e ? ct.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = c = i = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = t, i || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : p(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, ct.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ct.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ct.Deferred(function (n) {
                            ct.each(t, function (t, o) {
                                var a = o[0],
                                    s = ct.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ct.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ct.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = ot.call(arguments),
                a = o.length,
                s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ct.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ct.support = function (t) {
        var n, r, i, o, a, s, u, l, c, p = Q.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = Q.createElement("select"), s = o.appendChild(Q.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !! p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! i.value, t.optSelected = s.selected, t.enctype = !! Q.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete p.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = Q.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Q.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || p.attributes[u].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c, ct(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = Q.getElementsByTagName("body")[0];
            a && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === p.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(Q.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== Y && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        St = /([A-Z])/g;
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
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
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
            var r, i, o = null,
                s = 0,
                u = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(u), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), a(u, i, o[i]));
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
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ct._data(e, n), r && (!i || ct.isArray(r) ? i = ct._data(e, n, ct.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ct._queueHooks(e, t),
                a = function () {
                    ct.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
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
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
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
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = ct.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ct._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var At, jt, Dt = /[\t\r\n\f]/g,
        Lt = /\r/g,
        Ht = /^(?:input|select|textarea|button|object)$/i,
        Ft = /^(?:a|area)$/i,
        Mt = /^(?:checked|selected)$/i,
        qt = ct.support.getSetAttribute,
        _t = ct.support.input;
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
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ft) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ct.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ft) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ct.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function (n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, r = 0, i = ct(this), o = e.match(ft) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ct.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0
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
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ct(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ct.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ct.inArray(ct(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Y ? ct.prop(e, n, r) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), i = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? jt : At)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(ft);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? _t && qt || !Mt.test(n) ? e[r] = !1 : e[ct.camelCase("default-" + n)] = e[r] = !1 : ct.attr(e, n, ""), e.removeAttribute(qt ? n : r)
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
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), jt = {
        set: function (e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : _t && qt || !Mt.test(n) ? e.setAttribute(!qt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = _t && qt || !Mt.test(n) ? function (e, n, i) {
            var o = ct.expr.attrHandle[n],
                a = i ? t : (ct.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), _t && qt || (ct.attrHooks.value = {
        set: function (e, n, r) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : At && At.set(e, n, r)
        }
    }), qt || (At = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ct.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: At.set
    }, ct.attrHooks.contenteditable = {
        set: function (e, t, n) {
            At.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function (e, n) {
        ct.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
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
    var Ot = /^(?:input|select|textarea)$/i,
        $t = /^key/,
        Wt = /^(?:mouse|contextmenu)|click/,
        Bt = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, p, f, d, h, m, g, y = ct._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ct.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function (e) {
                    return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(p.elem, arguments)
                }, p.elem = e), n = (n || "").match(ft) || [""], u = n.length; u--;) a = Rt.exec(n[u]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (c = ct.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ct.event.special[h] || {}, f = ct.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, m, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ct.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, m, g = ct.hasData(e) && ct._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ft) || [""], l = t.length; l--;)
                    if (s = Rt.exec(t[l]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (p = ct.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        u && !f.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ct.removeEvent(e, d, g.handle), delete c[d])
                    } else
                        for (d in c) ct.event.remove(e, d + t[l], n, r, !0);
                ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, p, f, d = [i || Q],
                h = ut.call(n, "type") ? n.type : n,
                m = ut.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = p = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !Bt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), c = ct.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(i)) {
                    for (l = c.delegateType || h, Bt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), p = u;
                    p === (i.ownerDocument || Q) && d.push(p.defaultView || p.parentWindow || e)
                }
                for (f = 0;
                    (u = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? l : c.bindType || h, a = (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ct.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && ct.acceptData(i) && s && i[h] && !ct.isWindow(i)) {
                    p = i[s], p && (i[s] = null), ct.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {}
                    ct.event.triggered = t, p && (i[s] = p)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ct.event.fix(e);
            var n, r, i, o, a, s = [],
                u = ot.call(arguments),
                l = (ct._data(this, "events") || {})[e.type] || [],
                c = ct.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(l) >= 0 : ct.find(r, this, null, [l]).length), o[r] && o.push(i);
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
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Wt.test(i) ? this.mouseHooks : $t.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
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
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Q, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
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
        simulate: function (e, t, n, r) {
            var i = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = Q.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
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
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ct._data(r, "submitBubbles", !0))
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
            return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ot.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return ct.event.remove(this, "._change"), !Ot.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                ct.event.simulate(t, e.target, ct.event.fix(e), !0)
            };
        ct.event.special[t] = {
            setup: function () {
                0 === n++ && Q.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && Q.removeEventListener(e, r, !0)
            }
        }
    }), ct.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return ct().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ct.guid++)), this.each(function () {
                ct.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                ct.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? ct.event.trigger(e, n, r, !0) : t
        }
    });
    var Pt = /^.[^:#\[\.,]*$/,
        zt = /^(?:parents|prev(?:Until|All))/,
        It = ct.expr.match.needsContext,
        Xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (ct.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ct.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = ct(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (ct.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function (e) {
            return !!f(this, "string" == typeof e && It.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = It.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
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
                r = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(r))
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
            return p(e, "nextSibling")
        },
        prev: function (e) {
            return p(e, "previousSibling")
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
        ct.fn[e] = function (n, r) {
            var i = ct.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ct.filter(r, i)), this.length > 1 && (Xt[e] || (i = ct.unique(i)), zt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ct.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Yt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Jt = /^\s+/,
        Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Gt = /<([\w:]+)/,
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
        }, un = d(Q),
        ln = un.appendChild(Q.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
        text: function (e) {
            return ct.access(this, function (e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
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
            for (var n, r = e ? ct.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
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
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Jt.test(e) || sn[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Qt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = e);
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
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ct(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = rt.apply([], e);
            var r, i, o, a, s, u, l = 0,
                c = this.length,
                p = this,
                f = c - 1,
                d = e[0],
                h = ct.isFunction(d);
            if (h || !(1 >= c || "string" != typeof d || ct.support.checkClone) && nn.test(d)) return this.each(function (r) {
                var i = p.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (u = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
                for (a = ct.map(x(u, "script"), m), o = a.length; c > l; l++) i = u, l !== f && (i = ct.clone(i, !0, !0), o && ct.merge(a, x(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ct.map(a, g), l = 0; o > l; l++) i = a[l], rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(s, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                u = r = null
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
            for (var n, r = 0, i = [], o = ct(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ct(o[r])[t](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ct.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t)
                if (n)
                    for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
                else v(e, o);
            return r = x(o, "script"), r.length > 0 && y(r, !u && x(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, p = e.length, f = d(t), h = [], m = 0; p > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);
                    else if (Zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (Gt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Qt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ct.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ct.support.tbody)
                    for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ct.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else h.push(t.createTextNode(o));
            for (s && f.removeChild(s), ct.support.appendChecked || ct.grep(x(h, "input"), w), m = 0; o = h[m++];)
                if ((!r || -1 === ct.inArray(o, r)) && (a = ct.contains(o.ownerDocument, o), s = x(f.appendChild(o), "script"), a && y(s), n))
                    for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ct.expando, u = ct.cache, l = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++)
                if ((t || ct.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, tt.push(i))
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
    var cn, pn, fn, dn = /alpha\([^)]*\)/i,
        hn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        yn = /^margin/,
        vn = RegExp("^(" + pt + ")(.*)$", "i"),
        bn = RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
        xn = RegExp("^([+-])=(" + pt + ")", "i"),
        wn = {
            BODY: "block"
        }, Tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Cn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Nn = ["Top", "Right", "Bottom", "Left"],
        kn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function (e, n) {
            return ct.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ct.isArray(n)) {
                    for (o = pn(e), i = n.length; i > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ct.style(e, n, r) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return N(this, !0)
        },
        hide: function () {
            return N(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                C(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = fn(e, "opacity");
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
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ct.camelCase(n),
                    l = e.style;
                if (n = ct.cssProps[u] || (ct.cssProps[u] = T(l, u)), s = ct.cssHooks[n] || ct.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[u] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = ct.camelCase(n);
            return n = ct.cssProps[u] || (ct.cssProps[u] = T(e.style, u)), s = ct.cssHooks[n] || ct.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = fn(e, n, i)), "normal" === a && n in Cn && (a = Cn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (pn = function (t) {
        return e.getComputedStyle(t, null)
    }, fn = function (e, n, r) {
        var i, o, a, s = r || pn(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || ct.contains(e.ownerDocument, e) || (u = ct.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : Q.documentElement.currentStyle && (pn = function (e) {
        return e.currentStyle
    }, fn = function (e, n, r) {
        var i, o, a, s = r || pn(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !mn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ct.each(["height", "width"], function (e, n) {
        ct.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Tn, function () {
                    return S(e, n, i)
                }) : S(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && pn(e);
                return k(e, t, r ? E(e, n, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function (e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }), ct(function () {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ct.swap(e, {
                    display: "inline-block"
                }, fn, [e, "marginRight"]) : t
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) {
            ct.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = fn(e, n), bn.test(r) ? ct(e).position()[n] + "px" : r) : t
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
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ct.cssHooks[e + t].set = k)
    });
    var En = /%20/g,
        Sn = /\[\]$/,
        An = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
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
                return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }), ct.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = ct.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(En, "+")
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
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln, Hn, Fn = ct.now(),
        Mn = /\?/,
        qn = /#.*$/,
        _n = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wn = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pn = ct.fn.load,
        zn = {}, In = {}, Xn = "*/".concat("*");
    try {
        Hn = J.href
    } catch (Un) {
        Hn = Q.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Ln = Rn.exec(Hn.toLowerCase()) || [], ct.fn.load = function (e, n, r) {
        if ("string" != typeof e && Pn) return Pn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
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
            url: Hn,
            type: "GET",
            isLocal: $n.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
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
            return t ? F(F(e, ct.ajaxSettings), t) : F(ct.ajaxSettings, e)
        },
        ajaxPrefilter: L(zn),
        ajaxTransport: L(In),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, p, v, b, w, C = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = M(f, T, r)), b = q(f, b, T, o), o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ct.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ct.etag[a] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, v = b.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", o ? m.resolveWith(d, [p, C, T]) : m.rejectWith(d, [T, C, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? p : v]), g.fireWith(d, [T, C]), l && (h.trigger("ajaxComplete", [T, f]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, p, f = ct.ajaxSetup({}, n),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? ct(d) : ct.event,
                m = ct.Deferred(),
                g = ct.Callbacks("once memory"),
                y = f.statusCode || {}, v = {}, b = {}, x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!p)
                                for (p = {}; t = On.exec(s);) p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) y[t] = [y[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || Hn) + "").replace(qn, "").replace(Bn, Ln[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (i = Rn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), H(zn, f, n, T), 2 === x) return T;
            l = f.global, l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Wn.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Mn.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = _n.test(a) ? a.replace(_n, "$1_=" + Fn++) : a + (Mn.test(a) ? "&" : "?") + "_=" + Fn++)), f.ifModified && (ct.lastModified[a] && T.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && T.setRequestHeader("If-None-Match", ct.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(d, T, f) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](f[o]);
            if (c = H(In, f, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function (e, n) {
        ct[n] = function (e, r, i, o) {
            return ct.isFunction(r) && (o = o || i, i = r, r = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
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
            var n, r = Q.head || ct("head")[0] || Q.documentElement;
            return {
                send: function (t, i) {
                    n = Q.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
        Yn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vn.pop() || ct.expando + "_" + Fn++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ct.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), s && ct.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Jn, Qn, Gn = 0,
        Kn = e.ActiveXObject && function () {
            var e;
            for (e in Jn) Jn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && _() || O()
    } : _, Qn = ct.ajaxSettings.xhr(), ct.support.cors = !! Qn && "withCredentials" in Qn, Qn = ct.support.ajax = !! Qn, Qn && ct.ajaxTransport(function (n) {
        if (!n.crossDomain || ct.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = ct.noop, Kn && delete Jn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Gn, Kn && (Jn || (Jn = {}, ct(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
        nr = RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [P],
        or = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = nr.exec(t),
                        o = i && i[3] || (ct.cssNumber[e] ? "" : "px"),
                        a = (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, ct.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    ct.Animation = ct.extend(B, {
        tweener: function (e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ct.Tween = z, z.prototype = {
        constructor: z,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = z.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ct.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ct.isEmptyObject(e),
                o = ct.speed(t, n, r),
                a = function () {
                    var t = B(this, ct.extend({}, e), o);
                    (i || ct._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ct.timers,
                    a = ct._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ct.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ct._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ct.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
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
        ct.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ct.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ct.isFunction(r.old) && r.old.call(this), r.queue && ct.dequeue(this, r.queue)
        }, r
    }, ct.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = z.prototype.init, ct.fx.tick = function () {
        var e, n = ct.timers,
            r = 0;
        for (Zn = ct.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
        er || (er = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
        clearInterval(er), er = null
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
        var n, r, i = {
                top: 0,
                left: 0
            }, o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ct.offset = {
        setOffset: function (e, t, n) {
            var r = ct.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ct(e),
                s = a.offset(),
                u = ct.css(e, "top"),
                l = ct.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [u, l]) > -1,
                p = {}, f = {};
            c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : a.css(p)
        }
    }, ct.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(r, "marginTop", !0),
                    left: t.left - n.left - ct.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || G; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || G
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        ct.fn[e] = function (i) {
            return ct.access(this, function (e, i, o) {
                var a = X(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o : ct(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            ct.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function (n, r, i) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ct.fn.size = function () {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ct
    }))
}(window),
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
        var r = t || 1,
            i = e.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, n);
        return this.each(function () {
            var t = e(this),
                n = function () {
                    t.css("font-size", Math.max(Math.min(t.width() / (10 * r), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
                };
            n(), e(window).on("resize orientationchange", n)
        })
    }
}(jQuery),
function (e) {
    var t = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: ""
    }, n = e(window),
        r = e(document),
        i = [],
        o = n.height(),
        a = function () {
            for (var t = n.scrollTop(), a = r.height(), s = a - o, u = t > s ? s - t : 0, l = 0; l < i.length; l++) {
                var c = i[l],
                    p = c.stickyWrapper.offset().top,
                    f = p - c.topSpacing - u;
                if (f >= t) null !== c.currentTop && (c.stickyElement.css("position", "").css("top", ""), c.stickyElement.parent().removeClass(c.className), c.currentTop = null);
                else {
                    var d = a - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - t - u;
                    0 > d ? d += c.topSpacing : d = c.topSpacing, c.currentTop != d && (c.stickyElement.css("position", "fixed").css("top", d), "undefined" != typeof c.getWidthFrom && c.stickyElement.css("width", e(c.getWidthFrom).width()), c.stickyElement.parent().addClass(c.className), c.currentTop = d)
                }
            }
        }, s = function () {
            o = n.height()
        }, u = {
            init: function (n) {
                var r = e.extend(t, n);
                return this.each(function () {
                    var t = e(this),
                        n = t.attr("id"),
                        o = e("<div></div>").attr("id", n + "-sticky-wrapper").addClass(r.wrapperClassName);
                    t.wrapAll(o), r.center && t.parent().css({
                        width: t.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" == t.css("float") && t.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    });
                    var a = t.parent();
                    a.css("height", t.outerHeight()), i.push({
                        topSpacing: r.topSpacing,
                        bottomSpacing: r.bottomSpacing,
                        stickyElement: t,
                        currentTop: null,
                        stickyWrapper: a,
                        className: r.className,
                        getWidthFrom: r.getWidthFrom
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
    $("body").fadeIn(300);
    $("#headline").fitText(2.2, {
        minFontSize: "10px",
        maxFontSize: "42px"
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

