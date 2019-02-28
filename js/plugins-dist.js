if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length, i = dt.type(t);
        return "function" !== i && !dt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function n(t, e, i) {
        if (dt.isFunction(e)) return dt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
        });
        if (e.nodeType) return dt.grep(t, function(t) {
            return t === e !== i;
        });
        if ("string" == typeof e) {
            if (xt.test(e)) return dt.filter(e, t, i);
            e = dt.filter(e, t);
        }
        return dt.grep(t, function(t) {
            return dt.inArray(t, e) > -1 !== i;
        });
    }
    function s(t, e) {
        do {
            t = t[e];
        } while (t && 1 !== t.nodeType);
        return t;
    }
    function o(t) {
        var e = {};
        return dt.each(t.match(St) || [], function(t, i) {
            e[i] = !0;
        }), e;
    }
    function r() {
        nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (nt.detachEvent("onreadystatechange", a), 
        t.detachEvent("onload", a));
    }
    function a() {
        (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (r(), 
        dt.ready());
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Pt, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Nt.test(i) ? dt.parseJSON(i) : i);
                } catch (t) {}
                dt.data(t, e, i);
            } else i = void 0;
        }
        return i;
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function c(t, e, i, n) {
        if (It(t)) {
            var s, o, r = dt.expando, a = t.nodeType, l = a ? dt.cache : t, h = a ? t[r] : t[r] && r;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[r] = it.pop() || dt.guid++ : r), 
            l[h] || (l[h] = a ? {} : {
                toJSON: dt.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[h] = dt.extend(l[h], e) : l[h].data = dt.extend(l[h].data, e)), 
            o = l[h], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[dt.camelCase(e)] = i), 
            "string" == typeof e ? null == (s = o[e]) && (s = o[dt.camelCase(e)]) : s = o, s;
        }
    }
    function u(t, e, i) {
        if (It(t)) {
            var n, s, o = t.nodeType, r = o ? dt.cache : t, a = o ? t[dt.expando] : dt.expando;
            if (r[a]) {
                if (e && (n = i ? r[a] : r[a].data)) {
                    dt.isArray(e) ? e = e.concat(dt.map(e, dt.camelCase)) : e in n ? e = [ e ] : (e = dt.camelCase(e), 
                    e = e in n ? [ e ] : e.split(" ")), s = e.length;
                    for (;s--; ) delete n[e[s]];
                    if (i ? !h(n) : !dt.isEmptyObject(n)) return;
                }
                (i || (delete r[a].data, h(r[a]))) && (o ? dt.cleanData([ t ], !0) : ut.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0);
            }
        }
    }
    function d(t, e, i, n) {
        var s, o = 1, r = 20, a = n ? function() {
            return n.cur();
        } : function() {
            return dt.css(t, e, "");
        }, l = a(), h = i && i[3] || (dt.cssNumber[e] ? "" : "px"), c = (dt.cssNumber[e] || "px" !== h && +l) && $t.exec(dt.css(t, e));
        if (c && c[3] !== h) {
            h = h || c[3], i = i || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, dt.style(t, e, c + h);
            } while (o !== (o = a() / l) && 1 !== o && --r);
        }
        return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, 
        n.start = c, n.end = s)), s;
    }
    function p(t) {
        var e = Rt.split("|"), i = t.createDocumentFragment();
        if (i.createElement) for (;e.length; ) i.createElement(e.pop());
        return i;
    }
    function f(t, e) {
        var i, n, s = 0, o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || dt.nodeName(n, e) ? o.push(n) : dt.merge(o, f(n, e));
        return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([ t ], o) : o;
    }
    function g(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) dt._data(i, "globalEval", !e || dt._data(e[n], "globalEval"));
    }
    function m(t) {
        Wt.test(t.type) && (t.defaultChecked = t.checked);
    }
    function v(t, e, i, n, s) {
        for (var o, r, a, l, h, c, u, d = t.length, v = p(e), y = [], b = 0; d > b; b++) if ((r = t[b]) || 0 === r) if ("object" === dt.type(r)) dt.merge(y, r.nodeType ? [ r ] : r); else if (Bt.test(r)) {
            for (l = l || v.appendChild(e.createElement("div")), h = (jt.exec(r) || [ "", "" ])[1].toLowerCase(), 
            u = qt[h] || qt._default, l.innerHTML = u[1] + dt.htmlPrefilter(r) + u[2], o = u[0]; o--; ) l = l.lastChild;
            if (!ut.leadingWhitespace && Ft.test(r) && y.push(e.createTextNode(Ft.exec(r)[0])), 
            !ut.tbody) for (r = "table" !== h || Yt.test(r) ? "<table>" !== u[1] || Yt.test(r) ? 0 : l : l.firstChild, 
            o = r && r.childNodes.length; o--; ) dt.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
            for (dt.merge(y, l.childNodes), l.textContent = ""; l.firstChild; ) l.removeChild(l.firstChild);
            l = v.lastChild;
        } else y.push(e.createTextNode(r));
        for (l && v.removeChild(l), ut.appendChecked || dt.grep(f(y, "input"), m), b = 0; r = y[b++]; ) if (n && dt.inArray(r, n) > -1) s && s.push(r); else if (a = dt.contains(r.ownerDocument, r), 
        l = f(v.appendChild(r), "script"), a && g(l), i) for (o = 0; r = l[o++]; ) Lt.test(r.type || "") && i.push(r);
        return l = null, v;
    }
    function y() {
        return !0;
    }
    function b() {
        return !1;
    }
    function _() {
        try {
            return nt.activeElement;
        } catch (t) {}
    }
    function w(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) w(t, a, i, n, e[a], o);
            return t;
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, 
        n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = b; else if (!s) return t;
        return 1 === o && (r = s, s = function(t) {
            return dt().off(t), r.apply(this, arguments);
        }, s.guid = r.guid || (r.guid = dt.guid++)), t.each(function() {
            dt.event.add(this, e, s, n, i);
        });
    }
    function x(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function C(t) {
        return t.type = (null !== dt.find.attr(t, "type")) + "/" + t.type, t;
    }
    function k(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function D(t, e) {
        if (1 === e.nodeType && dt.hasData(t)) {
            var i, n, s, o = dt._data(t), r = dt._data(e, o), a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a) for (n = 0, s = a[i].length; s > n; n++) dt.event.add(e, i, a[i][n]);
            }
            r.data && (r.data = dt.extend({}, r.data));
        }
    }
    function T(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ut.noCloneEvent && e[dt.expando]) {
                s = dt._data(e);
                for (n in s.events) dt.removeEvent(e, n, s.handle);
                e.removeAttribute(dt.expando);
            }
            "script" === i && e.text !== t.text ? (C(e).text = t.text, k(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), 
            ut.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, 
            e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
        }
    }
    function S(t, e, i, n) {
        e = ot.apply([], e);
        var s, o, r, a, l, h, c = 0, u = t.length, d = u - 1, p = e[0], g = dt.isFunction(p);
        if (g || u > 1 && "string" == typeof p && !ut.checkClone && ee.test(p)) return t.each(function(s) {
            var o = t.eq(s);
            g && (e[0] = p.call(this, s, o.html())), S(o, e, i, n);
        });
        if (u && (h = v(e, t[0].ownerDocument, !1, t, n), s = h.firstChild, 1 === h.childNodes.length && (h = s), 
        s || n)) {
            for (r = (a = dt.map(f(h, "script"), C)).length; u > c; c++) o = h, c !== d && (o = dt.clone(o, !0, !0), 
            r && dt.merge(a, f(o, "script"))), i.call(t[c], o, c);
            if (r) for (l = a[a.length - 1].ownerDocument, dt.map(a, k), c = 0; r > c; c++) o = a[c], 
            Lt.test(o.type || "") && !dt._data(o, "globalEval") && dt.contains(l, o) && (o.src ? dt._evalUrl && dt._evalUrl(o.src) : dt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ne, "")));
            h = s = null;
        }
        return t;
    }
    function E(t, e, i) {
        for (var n, s = e ? dt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || dt.cleanData(f(n)), 
        n.parentNode && (i && dt.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n));
        return t;
    }
    function A(t, e) {
        var i = dt(e.createElement(t)).appendTo(e.body), n = dt.css(i[0], "display");
        return i.detach(), n;
    }
    function I(t) {
        var e = nt, i = re[t];
        return i || ("none" !== (i = A(t, e)) && i || (oe = (oe || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), 
        (e = (oe[0].contentWindow || oe[0].contentDocument).document).write(), e.close(), 
        i = A(t, e), oe.detach()), re[t] = i), i;
    }
    function N(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    function P(t) {
        if (t in we) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = _e.length; i--; ) if ((t = _e[i] + e) in we) return t;
    }
    function M(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) (n = t[r]).style && (o[r] = dt._data(n, "olddisplay"), 
        i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ot(n) && (o[r] = dt._data(n, "olddisplay", I(n.nodeName)))) : (s = Ot(n), 
        (i && "none" !== i || !s) && dt._data(n, "olddisplay", s ? i : dt.css(n, "display"))));
        for (r = 0; a > r; r++) (n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t;
    }
    function $(t, e, i) {
        var n = ve.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function H(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += dt.css(t, i + Ht[o], !0, s)), 
        n ? ("content" === i && (r -= dt.css(t, "padding" + Ht[o], !0, s)), "margin" !== i && (r -= dt.css(t, "border" + Ht[o] + "Width", !0, s))) : (r += dt.css(t, "padding" + Ht[o], !0, s), 
        "padding" !== i && (r += dt.css(t, "border" + Ht[o] + "Width", !0, s)));
        return r;
    }
    function O(e, i, n) {
        var s = !0, o = "width" === i ? e.offsetWidth : e.offsetHeight, r = ue(e), a = ut.boxSizing && "border-box" === dt.css(e, "boxSizing", !1, r);
        if (nt.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[i])), 
        0 >= o || null == o) {
            if ((0 > (o = de(e, i, r)) || null == o) && (o = e.style[i]), le.test(o)) return o;
            s = a && (ut.boxSizingReliable() || o === e.style[i]), o = parseFloat(o) || 0;
        }
        return o + H(e, i, n || (a ? "border" : "content"), s, r) + "px";
    }
    function z(t, e, i, n, s) {
        return new z.prototype.init(t, e, i, n, s);
    }
    function W() {
        return t.setTimeout(function() {
            xe = void 0;
        }), xe = dt.now();
    }
    function j(t, e) {
        var i, n = {
            height: t
        }, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Ht[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n;
    }
    function L(t, e, i) {
        for (var n, s = (q.tweeners[e] || []).concat(q.tweeners["*"]), o = 0, r = s.length; r > o; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function F(t, e, i) {
        var n, s, o, r, a, l, h, c = this, u = {}, d = t.style, p = t.nodeType && Ot(t), f = dt._data(t, "fxshow");
        i.queue || (null == (a = dt._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || l();
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, dt.queue(t, "fx").length || a.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
        h = dt.css(t, "display"), "inline" === ("none" === h ? dt._data(t, "olddisplay") || I(t.nodeName) : h) && "none" === dt.css(t, "float") && (ut.inlineBlockNeedsLayout && "inline" !== I(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), 
        i.overflow && (d.overflow = "hidden", ut.shrinkWrapBlocks() || c.always(function() {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2];
        }));
        for (n in e) if (s = e[n], ke.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                if ("show" !== s || !f || void 0 === f[n]) continue;
                p = !0;
            }
            u[n] = f && f[n] || dt.style(t, n);
        } else h = void 0;
        if (dt.isEmptyObject(u)) "inline" === ("none" === h ? I(t.nodeName) : h) && (d.display = h); else {
            f ? "hidden" in f && (p = f.hidden) : f = dt._data(t, "fxshow", {}), o && (f.hidden = !p), 
            p ? dt(t).show() : c.done(function() {
                dt(t).hide();
            }), c.done(function() {
                var e;
                dt._removeData(t, "fxshow");
                for (e in u) dt.style(t, e, u[e]);
            });
            for (n in u) r = L(p ? f[n] : 0, n, c), n in f || (f[n] = r.start, p && (r.end = r.start, 
            r.start = "width" === n || "height" === n ? 1 : 0));
        }
    }
    function R(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = dt.camelCase(i), s = e[n], o = t[i], dt.isArray(o) && (s = o[1], 
        o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = dt.cssHooks[n]) && "expand" in r) {
            o = r.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s);
        } else e[n] = s;
    }
    function q(t, e, i) {
        var n, s, o = 0, r = q.prefilters.length, a = dt.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = xe || W(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; r > o; o++) h.tweens[o].run(n);
            return a.notifyWith(t, [ h, n, i ]), 1 > n && r ? i : (a.resolveWith(t, [ h ]), 
            !1);
        }, h = a.promise({
            elem: t,
            props: dt.extend({}, e),
            opts: dt.extend(!0, {
                specialEasing: {},
                easing: dt.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: xe || W(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = dt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n), n;
            },
            stop: function(e) {
                var i = 0, n = e ? h.tweens.length : 0;
                if (s) return this;
                for (s = !0; n > i; i++) h.tweens[i].run(1);
                return e ? (a.notifyWith(t, [ h, 1, 0 ]), a.resolveWith(t, [ h, e ])) : a.rejectWith(t, [ h, e ]), 
                this;
            }
        }), c = h.props;
        for (R(c, h.opts.specialEasing); r > o; o++) if (n = q.prefilters[o].call(h, t, c, h.opts)) return dt.isFunction(n.stop) && (dt._queueHooks(h.elem, h.opts.queue).stop = dt.proxy(n.stop, n)), 
        n;
        return dt.map(c, L, h), dt.isFunction(h.opts.start) && h.opts.start.call(t, h), 
        dt.fx.timer(dt.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always);
    }
    function B(t) {
        return dt.attr(t, "class") || "";
    }
    function Y(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(St) || [];
            if (dt.isFunction(i)) for (;n = o[s++]; ) "+" === n.charAt(0) ? (n = n.slice(1) || "*", 
            (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function U(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, dt.each(t[a] || [], function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), 
                s(h), !1);
            }), l;
        }
        var o = {}, r = t === Qe;
        return s(e.dataTypes[0]) || !o["*"] && s("*");
    }
    function X(t, e) {
        var i, n, s = dt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && dt.extend(!0, t, i), t;
    }
    function Q(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (r in a) if (a[r] && a[r].test(s)) {
            l.unshift(r);
            break;
        }
        if (l[0] in i) o = l[0]; else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break;
                }
                n || (n = r);
            }
            o = o || n;
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
    }
    function V(t, e, i, n) {
        var s, o, r, a, l, h = {}, c = t.dataTypes.slice();
        if (c[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = c.shift(); o; ) if (t.responseFields[o] && (i[t.responseFields[o]] = e), 
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(r = h[l + " " + o] || h["* " + o])) for (s in h) if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], c.unshift(a[1]));
                break;
            }
            if (!0 !== r) if (r && t.throws) e = r(e); else try {
                e = r(e);
            } catch (t) {
                return {
                    state: "parsererror",
                    error: r ? t : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function K(t) {
        return t.style && t.style.display || dt.css(t, "display");
    }
    function G(t) {
        for (;t && 1 === t.nodeType; ) {
            if ("none" === K(t) || "hidden" === t.type) return !0;
            t = t.parentNode;
        }
        return !1;
    }
    function Z(t, e, i, n) {
        var s;
        if (dt.isArray(e)) dt.each(e, function(e, s) {
            i || Je.test(t) ? n(t, s) : Z(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n);
        }); else if (i || "object" !== dt.type(e)) n(t, e); else for (s in e) Z(t + "[" + s + "]", e[s], i, n);
    }
    function J() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function et(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var it = [], nt = t.document, st = it.slice, ot = it.concat, rt = it.push, at = it.indexOf, lt = {}, ht = lt.toString, ct = lt.hasOwnProperty, ut = {}, dt = function(t, e) {
        return new dt.fn.init(t, e);
    }, pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ft = /^-ms-/, gt = /-([\da-z])/gi, mt = function(t, e) {
        return e.toUpperCase();
    };
    dt.fn = dt.prototype = {
        jquery: "1.12.1",
        constructor: dt,
        selector: "",
        length: 0,
        toArray: function() {
            return st.call(this);
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : st.call(this);
        },
        pushStack: function(t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t) {
            return dt.each(this, t);
        },
        map: function(t) {
            return this.pushStack(dt.map(this, function(e, i) {
                return t.call(e, i, e);
            }));
        },
        slice: function() {
            return this.pushStack(st.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [ this[i] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: rt,
        sort: it.sort,
        splice: it.splice
    }, dt.extend = dt.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || dt.isFunction(r) || (r = {}), 
        a === l && (r = this, a--); l > a; a++) if (null != (s = arguments[a])) for (n in s) t = r[n], 
        i = s[n], r !== i && (h && i && (dt.isPlainObject(i) || (e = dt.isArray(i))) ? (e ? (e = !1, 
        o = t && dt.isArray(t) ? t : []) : o = t && dt.isPlainObject(t) ? t : {}, r[n] = dt.extend(h, o, i)) : void 0 !== i && (r[n] = i));
        return r;
    }, dt.extend({
        expando: "jQuery" + ("1.12.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === dt.type(t);
        },
        isArray: Array.isArray || function(t) {
            return "array" === dt.type(t);
        },
        isWindow: function(t) {
            return null != t && t == t.window;
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !dt.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            if (!ut.ownFirst) for (e in t) return ct.call(t, e);
            for (e in t) ;
            return void 0 === e || ct.call(t, e);
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ht.call(t)] || "object" : typeof t;
        },
        globalEval: function(e) {
            e && dt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e);
            })(e);
        },
        camelCase: function(t) {
            return t.replace(ft, "ms-").replace(gt, mt);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var n, s = 0;
            if (i(t)) for (n = t.length; n > s && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "");
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [ t ] : t) : rt.call(n, t)), 
            n;
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (at) return at.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i;
            }
            return -1;
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n; ) t[s++] = e[n++];
            if (i !== i) for (;void 0 !== e[n]; ) t[s++] = e[n++];
            return t.length = s, t;
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, r = !i; o > s; s++) !e(t[s], s) !== r && n.push(t[s]);
            return n;
        },
        map: function(t, e, n) {
            var s, o, r = 0, a = [];
            if (i(t)) for (s = t.length; s > r; r++) null != (o = e(t[r], r, n)) && a.push(o); else for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return ot.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), dt.isFunction(t) ? (i = st.call(arguments, 2), 
            n = function() {
                return t.apply(e || this, i.concat(st.call(arguments)));
            }, n.guid = t.guid = t.guid || dt.guid++, n) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: ut
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = it[Symbol.iterator]), 
    dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase();
    });
    var vt = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, h, u, d, p, f = e && e.ownerDocument, g = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
            if (!n && ((e ? e.ownerDocument || e : W) !== I && A(e), e = e || I, P)) {
                if (11 !== g && (u = gt.exec(t))) if (s = u[1]) {
                    if (9 === g) {
                        if (!(r = e.getElementById(s))) return i;
                        if (r.id === s) return i.push(r), i;
                    } else if (f && (r = f.getElementById(s)) && O(e, r) && r.id === s) return i.push(r), 
                    i;
                } else {
                    if (u[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), 
                    i;
                }
                if (b.qsa && !q[t + " "] && (!M || !M.test(t))) {
                    if (1 !== g) f = e, p = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = z), 
                        o = (d = C(t)).length, h = ct.test(a) ? "#" + a : "[id='" + a + "']"; o--; ) d[o] = h + " " + c(d[o]);
                        p = d.join(","), f = mt.test(t) && l(e.parentNode) || e;
                    }
                    if (p) try {
                        return K.apply(i, f.querySelectorAll(p)), i;
                    } catch (t) {} finally {
                        a === z && e.removeAttribute("id");
                    }
                }
            }
            return D(t.replace(ot, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n;
            }
            var e = [];
            return t;
        }
        function n(t) {
            return t[z] = !0, t;
        }
        function s(t) {
            var e = I.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--; ) _.attrHandle[i[n]] = e;
        }
        function r(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i) for (;i = i.nextSibling; ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--; ) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
                });
            });
        }
        function l(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function h() {}
        function c(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n;
        }
        function u(t, e, i) {
            var n = e.dir, s = i && "parentNode" === n, o = L++;
            return e.first ? function(e, i, o) {
                for (;e = e[n]; ) if (1 === e.nodeType || s) return t(e, i, o);
            } : function(e, i, r) {
                var a, l, h, c = [ j, o ];
                if (r) {
                    for (;e = e[n]; ) if ((1 === e.nodeType || s) && t(e, i, r)) return !0;
                } else for (;e = e[n]; ) if (1 === e.nodeType || s) {
                    if (h = e[z] || (e[z] = {}), l = h[e.uniqueID] || (h[e.uniqueID] = {}), (a = l[n]) && a[0] === j && a[1] === o) return c[2] = a[2];
                    if (l[n] = c, c[2] = t(e, i, r)) return !0;
                }
            };
        }
        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                return !0;
            } : t[0];
        }
        function p(t, i, n) {
            for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
            return n;
        }
        function f(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++) (o = t[a]) && (!i || i(o, n, s)) && (r.push(o), 
            h && e.push(a));
            return r;
        }
        function g(t, e, i, s, o, r) {
            return s && !s[z] && (s = g(s)), o && !o[z] && (o = g(o, r)), n(function(n, r, a, l) {
                var h, c, u, d = [], g = [], m = r.length, v = n || p(e || "*", a.nodeType ? [ a ] : a, []), y = !t || !n && e ? v : f(v, d, t, a, l), b = i ? o || (n ? t : m || s) ? [] : r : y;
                if (i && i(y, b, a, l), s) for (h = f(b, g), s(h, [], a, l), c = h.length; c--; ) (u = h[c]) && (b[g[c]] = !(y[g[c]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], c = b.length; c--; ) (u = b[c]) && h.push(y[c] = u);
                            o(null, b = [], h, l);
                        }
                        for (c = b.length; c--; ) (u = b[c]) && (h = o ? Z(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u));
                    }
                } else b = f(b === r ? b.splice(m, b.length) : b), o ? o(null, r, b, l) : K.apply(r, b);
            });
        }
        function m(t) {
            for (var e, i, n, s = t.length, o = _.relative[t[0].type], r = o || _.relative[" "], a = o ? 1 : 0, l = u(function(t) {
                return t === e;
            }, r, !0), h = u(function(t) {
                return Z(e, t) > -1;
            }, r, !0), p = [ function(t, i, n) {
                var s = !o && (n || i !== T) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                return e = null, s;
            } ]; s > a; a++) if (i = _.relative[t[a].type]) p = [ u(d(p), i) ]; else {
                if ((i = _.filter[t[a].type].apply(null, t[a].matches))[z]) {
                    for (n = ++a; s > n && !_.relative[t[n].type]; n++) ;
                    return g(a > 1 && d(p), a > 1 && c(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(ot, "$1"), i, n > a && m(t.slice(a, n)), s > n && m(t = t.slice(n)), s > n && c(t));
                }
                p.push(i);
            }
            return d(p);
        }
        function v(t, i) {
            var s = i.length > 0, o = t.length > 0, r = function(n, r, a, l, h) {
                var c, u, d, p = 0, g = "0", m = n && [], v = [], y = T, b = n || o && _.find.TAG("*", h), w = j += null == y ? 1 : Math.random() || .1, x = b.length;
                for (h && (T = r === I || r || h); g !== x && null != (c = b[g]); g++) {
                    if (o && c) {
                        for (u = 0, r || c.ownerDocument === I || (A(c), a = !P); d = t[u++]; ) if (d(c, r || I, a)) {
                            l.push(c);
                            break;
                        }
                        h && (j = w);
                    }
                    s && ((c = !d && c) && p--, n && m.push(c));
                }
                if (p += g, s && g !== p) {
                    for (u = 0; d = i[u++]; ) d(m, v, r, a);
                    if (n) {
                        if (p > 0) for (;g--; ) m[g] || v[g] || (v[g] = Q.call(l));
                        v = f(v);
                    }
                    K.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                }
                return h && (j = w, T = y), m;
            };
            return s ? n(r) : r;
        }
        var y, b, _, w, x, C, k, D, T, S, E, A, I, N, P, M, $, H, O, z = "sizzle" + 1 * new Date(), W = t.document, j = 0, L = 0, F = i(), R = i(), q = i(), B = function(t, e) {
            return t === e && (E = !0), 0;
        }, Y = 1 << 31, U = {}.hasOwnProperty, X = [], Q = X.pop, V = X.push, K = X.push, G = X.slice, Z = function(t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), rt = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ht = new RegExp(nt), ct = new RegExp("^" + et + "$"), ut = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + nt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = /'|\\/g, yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), bt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        }, _t = function() {
            A();
        };
        try {
            K.apply(X = G.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType;
        } catch (t) {
            K = {
                apply: X.length ? function(t, e) {
                    V.apply(t, G.call(e));
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; ) ;
                    t.length = i - 1;
                }
            };
        }
        b = e.support = {}, x = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, A = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : W;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, N = I.documentElement, 
            P = !x(I), (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), 
            b.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), b.getElementsByTagName = s(function(t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length;
            }), b.getElementsByClassName = ft.test(I.getElementsByClassName), b.getById = s(function(t) {
                return N.appendChild(t).id = z, !I.getElementsByName || !I.getElementsByName(z).length;
            }), b.getById ? (_.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && P) {
                    var i = e.getElementById(t);
                    return i ? [ i ] : [];
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                };
            }), _.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;i = o[s++]; ) 1 === i.nodeType && n.push(i);
                    return n;
                }
                return o;
            }, _.find.CLASS = b.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && P ? e.getElementsByClassName(t) : void 0;
            }, $ = [], M = [], (b.qsa = ft.test(I.querySelectorAll)) && (s(function(t) {
                N.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + J + ")"), 
                t.querySelectorAll("[id~=" + z + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), 
                t.querySelectorAll("a#" + z + "+*").length || M.push(".#.+[+~]");
            }), s(function(t) {
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), 
                t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                M.push(",.*:");
            })), (b.matchesSelector = ft.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                b.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), $.push("!=", nt);
            }), M = M.length && new RegExp(M.join("|")), $ = $.length && new RegExp($.join("|")), 
            e = ft.test(N.compareDocumentPosition), O = e || ft.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, B = e ? function(t, e) {
                if (t === e) return E = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === I || t.ownerDocument === W && O(W, t) ? -1 : e === I || e.ownerDocument === W && O(W, e) ? 1 : S ? Z(S, t) - Z(S, e) : 0 : 4 & i ? -1 : 1);
            } : function(t, e) {
                if (t === e) return E = !0, 0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, a = [ t ], l = [ e ];
                if (!s || !o) return t === I ? -1 : e === I ? 1 : s ? -1 : o ? 1 : S ? Z(S, t) - Z(S, e) : 0;
                if (s === o) return r(t, e);
                for (i = t; i = i.parentNode; ) a.unshift(i);
                for (i = e; i = i.parentNode; ) l.unshift(i);
                for (;a[n] === l[n]; ) n++;
                return n ? r(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0;
            }, I) : I;
        }, e.matches = function(t, i) {
            return e(t, null, null, i);
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== I && A(t), i = i.replace(lt, "='$1']"), b.matchesSelector && P && !q[i + " "] && (!$ || !$.test(i)) && (!M || !M.test(i))) try {
                var n = H.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
            } catch (t) {}
            return e(i, I, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && A(t), O(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && A(t);
            var i = _.attrHandle[e.toLowerCase()], n = i && U.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
            return void 0 !== n ? n : b.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (E = !b.detectDuplicates, S = !b.sortStable && t.slice(0), t.sort(B), E) {
                for (;e = t[s++]; ) e === t[s] && (n = i.push(s));
                for (;n--; ) t.splice(i[n], 1);
            }
            return S = null, t;
        }, w = e.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (;e = t[n++]; ) i += w(e);
            return i;
        }, (_ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ut,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                    t;
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = i.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = F[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && F(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var h, c, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (d = e; d = d[g]; ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling";
                                }
                                return !0;
                            }
                            if (f = [ r ? m.firstChild : m.lastChild ], r && y) {
                                for (b = (p = (h = (c = (u = (d = m)[z] || (d[z] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === j && h[1]) && h[2], 
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop(); ) if (1 === d.nodeType && ++b && d === e) {
                                    c[t] = [ j, p, b ];
                                    break;
                                }
                            } else if (y && (d = e, u = d[z] || (d[z] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), 
                            h = c[t] || [], p = h[0] === j && h[1], b = p), !1 === b) for (;(d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[z] || (d[z] = {}), 
                            c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[t] = [ j, b ]), d !== e)); ) ;
                            return (b -= s) === n || b % n == 0 && b / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, i) {
                    var s, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[z] ? o(i) : o.length > 1 ? (s = [ t, t, "", i ], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), r = s.length; r--; ) n = Z(t, s[r]), t[n] = !(e[n] = s[r]);
                    }) : function(t) {
                        return o(t, 0, s);
                    }) : o;
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [], i = [], s = k(t.replace(ot, "$1"));
                    return s[z] ? n(function(t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--; ) (o = r[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop();
                    };
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0;
                    };
                }),
                contains: n(function(t) {
                    return t = t.replace(yt, bt), function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
                    };
                }),
                lang: n(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(), 
                    function(e) {
                        var i;
                        do {
                            if (i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === N;
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: function(t) {
                    return !1 === t.disabled;
                },
                disabled: function(t) {
                    return !0 === t.disabled;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !_.pseudos.empty(t);
                },
                header: function(t) {
                    return pt.test(t.nodeName);
                },
                input: function(t) {
                    return dt.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: a(function() {
                    return [ 0 ];
                }),
                last: a(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: a(function(t, e, i) {
                    return [ 0 > i ? i + e : i ];
                }),
                even: a(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t;
                }),
                odd: a(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t;
                }),
                lt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                    return t;
                }),
                gt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
                    return t;
                })
            }
        }).pseudos.nth = _.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[y] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(y);
        for (y in {
            submit: !0,
            reset: !0
        }) _.pseudos[y] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }(y);
        return h.prototype = _.filters = _.pseudos, _.setFilters = new h(), C = e.tokenize = function(t, i) {
            var n, s, o, r, a, l, h, c = R[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = _.preFilter; a; ) {
                (!n || (s = rt.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), 
                n = !1, (s = at.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), a = a.slice(n.length));
                for (r in _.filter) !(s = ut[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), 
                o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return i ? a.length : a ? e.error(t) : R(t, l).slice(0);
        }, k = e.compile = function(t, e) {
            var i, n = [], s = [], o = q[t + " "];
            if (!o) {
                for (e || (e = C(t)), i = e.length; i--; ) o = m(e[i]), o[z] ? n.push(o) : s.push(o);
                (o = q(t, v(s, n))).selector = t;
            }
            return o;
        }, D = e.select = function(t, e, i, n) {
            var s, o, r, a, h, u = "function" == typeof t && t, d = !n && C(t = u.selector || t);
            if (i = i || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === e.nodeType && P && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(r.matches[0].replace(yt, bt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length);
                }
                for (s = ut.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !_.relative[a = r.type]); ) if ((h = _.find[a]) && (n = h(r.matches[0].replace(yt, bt), mt.test(o[0].type) && l(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && c(o))) return K.apply(i, n), i;
                    break;
                }
            }
            return (u || k(t, d))(n, e, !P, i, !e || mt.test(t) && l(e.parentNode) || e), i;
        }, b.sortStable = z.split("").sort(B).join("") === z, b.detectDuplicates = !!E, 
        A(), b.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"));
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), b.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
        }), s(function(t) {
            return null == t.getAttribute("disabled");
        }) || o(J, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }), e;
    }(t);
    dt.find = vt, dt.expr = vt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = vt.uniqueSort, 
    dt.text = vt.getText, dt.isXMLDoc = vt.isXML, dt.contains = vt.contains;
    var yt = function(t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (s && dt(t).is(i)) break;
            n.push(t);
        }
        return n;
    }, bt = function(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i;
    }, _t = dt.expr.match.needsContext, wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, xt = /^.[^:#\[\.,]*$/;
    dt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? dt.find.matchesSelector(n, t) ? [ n ] : [] : dt.find.matches(t, dt.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, dt.fn.extend({
        find: function(t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                for (e = 0; s > e; e++) if (dt.contains(n[e], this)) return !0;
            }));
            for (e = 0; s > e; e++) dt.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? dt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, 
            i;
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0));
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && _t.test(t) ? dt(t) : t || [], !1).length;
        }
    });
    var Ct, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (dt.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || Ct, "string" == typeof t) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : kt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), 
                wt.test(n[1]) && dt.isPlainObject(e)) for (n in e) dt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            if ((s = nt.getElementById(n[2])) && s.parentNode) {
                if (s.id !== n[2]) return Ct.find(t);
                this.length = 1, this[0] = s;
            }
            return this.context = nt, this.selector = t, this;
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(dt) : (void 0 !== t.selector && (this.selector = t.selector, 
        this.context = t.context), dt.makeArray(t, this));
    }).prototype = dt.fn, Ct = dt(nt);
    var Dt = /^(?:parents|prev(?:Until|All))/, Tt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    dt.fn.extend({
        has: function(t) {
            var e, i = dt(t, this), n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++) if (dt.contains(this, i[e])) return !0;
            });
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = _t.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && dt.find.matchesSelector(i, t))) {
                o.push(i);
                break;
            }
            return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), dt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return yt(t, "parentNode");
        },
        parentsUntil: function(t, e, i) {
            return yt(t, "parentNode", i);
        },
        next: function(t) {
            return s(t, "nextSibling");
        },
        prev: function(t) {
            return s(t, "previousSibling");
        },
        nextAll: function(t) {
            return yt(t, "nextSibling");
        },
        prevAll: function(t) {
            return yt(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return yt(t, "nextSibling", i);
        },
        prevUntil: function(t, e, i) {
            return yt(t, "previousSibling", i);
        },
        siblings: function(t) {
            return bt((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return bt(t.firstChild);
        },
        contents: function(t) {
            return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : dt.merge([], t.childNodes);
        }
    }, function(t, e) {
        dt.fn[t] = function(i, n) {
            var s = dt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = dt.filter(n, s)), 
            this.length > 1 && (Tt[t] || (s = dt.uniqueSort(s)), Dt.test(t) && (s = s.reverse())), 
            this.pushStack(s);
        };
    });
    var St = /\S+/g;
    dt.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : dt.extend({}, t);
        var e, i, n, s, r = [], a = [], l = -1, h = function() {
            for (s = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < r.length; ) !1 === r[l].apply(i[0], i[1]) && t.stopOnFalse && (l = r.length, 
            i = !1);
            t.memory || (i = !1), e = !1, s && (r = i ? [] : "");
        }, c = {
            add: function() {
                return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                    dt.each(i, function(i, n) {
                        dt.isFunction(n) ? t.unique && c.has(n) || r.push(n) : n && n.length && "string" !== dt.type(n) && e(n);
                    });
                }(arguments), i && !e && h()), this;
            },
            remove: function() {
                return dt.each(arguments, function(t, e) {
                    for (var i; (i = dt.inArray(e, r, i)) > -1; ) r.splice(i, 1), l >= i && l--;
                }), this;
            },
            has: function(t) {
                return t ? dt.inArray(t, r) > -1 : r.length > 0;
            },
            empty: function() {
                return r && (r = []), this;
            },
            disable: function() {
                return s = a = [], r = i = "", this;
            },
            disabled: function() {
                return !r;
            },
            lock: function() {
                return s = !0, i || c.disable(), this;
            },
            locked: function() {
                return !!s;
            },
            fireWith: function(t, i) {
                return s || (i = i || [], i = [ t, i.slice ? i.slice() : i ], a.push(i), e || h()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return c;
    }, dt.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", dt.Callbacks("once memory"), "resolved" ], [ "reject", "fail", dt.Callbacks("once memory"), "rejected" ], [ "notify", "progress", dt.Callbacks("memory") ] ], i = "pending", n = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return dt.Deferred(function(i) {
                        dt.each(e, function(e, o) {
                            var r = dt.isFunction(t[e]) && t[e];
                            s[o[1]](function() {
                                var t = r && r.apply(this, arguments);
                                t && dt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? dt.extend(t, n) : n;
                }
            }, s = {};
            return n.pipe = n.then, dt.each(e, function(t, o) {
                var r = o[2], a = o[3];
                n[o[1]] = r.add, a && r.add(function() {
                    i = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this;
                }, s[o[0] + "With"] = r.fireWith;
            }), n.promise(s), t && t.call(s, s), s;
        },
        when: function(t) {
            var e, i, n, s = 0, o = st.call(arguments), r = o.length, a = 1 !== r || t && dt.isFunction(t.promise) ? r : 0, l = 1 === a ? t : dt.Deferred(), h = function(t, i, n) {
                return function(s) {
                    i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
                };
            };
            if (r > 1) for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && dt.isFunction(o[s].promise) ? o[s].promise().progress(h(s, i, e)).done(h(s, n, o)).fail(l.reject) : --a;
            return a || l.resolveWith(n, o), l.promise();
        }
    });
    var Et;
    dt.fn.ready = function(t) {
        return dt.ready.promise().done(t), this;
    }, dt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? dt.readyWait++ : dt.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, !0 !== t && --dt.readyWait > 0 || (Et.resolveWith(nt, [ dt ]), 
            dt.fn.triggerHandler && (dt(nt).triggerHandler("ready"), dt(nt).off("ready"))));
        }
    }), dt.ready.promise = function(e) {
        if (!Et) if (Et = dt.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(dt.ready); else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", a), 
        t.addEventListener("load", a); else {
            nt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && nt.documentElement;
            } catch (t) {}
            i && i.doScroll && function e() {
                if (!dt.isReady) {
                    try {
                        i.doScroll("left");
                    } catch (i) {
                        return t.setTimeout(e, 50);
                    }
                    r(), dt.ready();
                }
            }();
        }
        return Et.promise(e);
    }, dt.ready.promise();
    var At;
    for (At in dt(ut)) break;
    ut.ownFirst = "0" === At, ut.inlineBlockNeedsLayout = !1, dt(function() {
        var t, e, i, n;
        (i = nt.getElementsByTagName("body")[0]) && i.style && (e = nt.createElement("div"), 
        n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        i.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        ut.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n));
    }), function() {
        var t = nt.createElement("div");
        ut.deleteExpando = !0;
        try {
            delete t.test;
        } catch (t) {
            ut.deleteExpando = !1;
        }
        t = null;
    }();
    var It = function(t) {
        var e = dt.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e);
    }, Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt = /([A-Z])/g;
    dt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando]) && !h(t);
        },
        data: function(t, e, i) {
            return c(t, e, i);
        },
        removeData: function(t, e) {
            return u(t, e);
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0);
        },
        _removeData: function(t, e) {
            return u(t, e, !0);
        }
    }), dt.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0], r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = dt.data(o), 1 === o.nodeType && !dt._data(o, "parsedAttrs"))) {
                    for (i = r.length; i--; ) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = dt.camelCase(n.slice(5)), 
                    l(o, n, s[n]));
                    dt._data(o, "parsedAttrs", !0);
                }
                return s;
            }
            return "object" == typeof t ? this.each(function() {
                dt.data(this, t);
            }) : arguments.length > 1 ? this.each(function() {
                dt.data(this, t, e);
            }) : o ? l(o, t, dt.data(o, t)) : void 0;
        },
        removeData: function(t) {
            return this.each(function() {
                dt.removeData(this, t);
            });
        }
    }), dt.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = dt._data(t, e), i && (!n || dt.isArray(i) ? n = dt._data(t, e, dt.makeArray(i)) : n.push(i)), 
            n || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = dt.queue(t, e), n = i.length, s = i.shift(), o = dt._queueHooks(t, e), r = function() {
                dt.dequeue(t, e);
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), 
            delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return dt._data(t, i) || dt._data(t, i, {
                empty: dt.Callbacks("once memory").add(function() {
                    dt._removeData(t, e + "queue"), dt._removeData(t, i);
                })
            });
        }
    }), dt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && dt.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                dt.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var i, n = 1, s = dt.Deferred(), o = this, r = this.length, a = function() {
                --n || s.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--; ) (i = dt._data(o[r], t + "queueHooks")) && i.empty && (n++, 
            i.empty.add(a));
            return a(), s.promise(e);
        }
    }), function() {
        var t;
        ut.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = nt.getElementsByTagName("body")[0], i && i.style ? (e = nt.createElement("div"), 
            n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            i.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), 
            i.removeChild(n), t) : void 0;
        };
    }();
    var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, $t = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"), Ht = [ "Top", "Right", "Bottom", "Left" ], Ot = function(t, e) {
        return t = e || t, "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t);
    }, zt = function(t, e, i, n, s, o, r) {
        var a = 0, l = t.length, h = null == i;
        if ("object" === dt.type(i)) {
            s = !0;
            for (a in i) zt(t, e, a, i[a], !0, o, r);
        } else if (void 0 !== n && (s = !0, dt.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), 
        e = null) : (h = e, e = function(t, e, i) {
            return h.call(dt(t), i);
        })), e)) for (;l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : h ? e.call(t) : l ? e(t[0], i) : o;
    }, Wt = /^(?:checkbox|radio)$/i, jt = /<([\w:-]+)/, Lt = /^$|\/(?:java|ecma)script/i, Ft = /^\s+/, Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var t = nt.createElement("div"), e = nt.createDocumentFragment(), i = nt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        ut.leadingWhitespace = 3 === t.firstChild.nodeType, ut.tbody = !t.getElementsByTagName("tbody").length, 
        ut.htmlSerialize = !!t.getElementsByTagName("link").length, ut.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, 
        i.type = "checkbox", i.checked = !0, e.appendChild(i), ut.appendChecked = i.checked, 
        t.innerHTML = "<textarea>x</textarea>", ut.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, 
        e.appendChild(t), (i = nt.createElement("input")).setAttribute("type", "radio"), 
        i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), 
        ut.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.noCloneEvent = !!t.addEventListener, 
        t[dt.expando] = 1, ut.attributes = !t.getAttribute(dt.expando);
    }();
    var qt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: ut.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    };
    qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, 
    qt.th = qt.td;
    var Bt = /<|&#?\w+;/, Yt = /<tbody/i;
    !function() {
        var e, i, n = nt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e, (ut[e] = i in t) || (n.setAttribute(i, "t"), ut[e] = !1 === n.attributes[i].expando);
        n = null;
    }();
    var Ut = /^(?:input|select|textarea)$/i, Xt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Vt = /^(?:focusinfocus|focusoutblur)$/, Kt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, g, m = dt._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = dt.guid++), 
                (r = m.events) || (r = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                    return void 0 === dt || t && dt.event.triggered === t.type ? void 0 : dt.event.dispatch.apply(c.elem, arguments);
                }, c.elem = t), a = (e = (e || "").match(St) || [ "" ]).length; a--; ) o = Kt.exec(e[a]) || [], 
                p = g = o[1], f = (o[2] || "").split(".").sort(), p && (h = dt.event.special[p] || {}, 
                p = (s ? h.delegateType : h.bindType) || p, h = dt.event.special[p] || {}, u = dt.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && dt.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), 
                h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), 
                dt.event.global[p] = !0);
                t = null;
            }
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, g, m = dt.hasData(t) && dt._data(t);
            if (m && (c = m.events)) {
                for (h = (e = (e || "").match(St) || [ "" ]).length; h--; ) if (a = Kt.exec(e[h]) || [], 
                p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = dt.event.special[p] || {}, d = c[p = (n ? u.delegateType : u.bindType) || p] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; ) r = d[o], 
                    !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), 
                    r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                    l && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || dt.removeEvent(t, p, m.handle), 
                    delete c[p]);
                } else for (p in c) dt.event.remove(t, p + e[h], i, n, !0);
                dt.isEmptyObject(c) && (delete m.handle, dt._removeData(t, "events"));
            }
        },
        trigger: function(e, i, n, s) {
            var o, r, a, l, h, c, u, d = [ n || nt ], p = ct.call(e, "type") ? e.type : e, f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Vt.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), 
            p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[dt.expando] ? e : new dt.Event(p, "object" == typeof e && e), 
            e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), i = null == i ? [ e ] : dt.makeArray(i, [ e ]), 
            h = dt.event.special[p] || {}, s || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!s && !h.noBubble && !dt.isWindow(n)) {
                    for (l = h.delegateType || p, Vt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                    c = a;
                    c === (n.ownerDocument || nt) && d.push(c.defaultView || c.parentWindow || t);
                }
                for (u = 0; (a = d[u++]) && !e.isPropagationStopped(); ) e.type = u > 1 ? l : h.bindType || p, 
                (o = (dt._data(a, "events") || {})[e.type] && dt._data(a, "handle")) && o.apply(a, i), 
                (o = r && a[r]) && o.apply && It(a) && (e.result = o.apply(a, i), !1 === e.result && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || !1 === h._default.apply(d.pop(), i)) && It(n) && r && n[p] && !dt.isWindow(n)) {
                    (c = n[r]) && (n[r] = null), dt.event.triggered = p;
                    try {
                        n[p]();
                    } catch (t) {}
                    dt.event.triggered = void 0, c && (n[r] = c);
                }
                return e.result;
            }
        },
        dispatch: function(t) {
            t = dt.event.fix(t);
            var e, i, n, s, o, r = [], a = st.call(arguments), l = (dt._data(this, "events") || {})[t.type] || [], h = dt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (r = dt.event.handlers.call(this, t, l), e = 0; (s = r[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = s.elem, 
                i = 0; (o = s.handlers[i++]) && !t.isImmediatePropagationStopped(); ) (!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, 
                t.data = o.data, void 0 !== (n = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), 
                t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (n = [], i = 0; a > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? dt(s, this).index(l) > -1 : dt.find(s, this, null, [ l ]).length), 
                n[s] && n.push(o);
                n.length && r.push({
                    elem: l,
                    handlers: n
                });
            }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r;
        },
        fix: function(t) {
            if (t[dt.expando]) return t;
            var e, i, n, s = t.type, o = t, r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Qt.test(s) ? this.mouseHooks : Xt.test(s) ? this.keyHooks : {}), 
            n = r.props ? this.props.concat(r.props) : this.props, t = new dt.Event(o), e = n.length; e--; ) i = n[e], 
            t[i] = o[i];
            return t.target || (t.target = o.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
            t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), 
                t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button, r = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, 
                s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), 
                t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), 
                !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
                t;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== _() && this.focus) try {
                        return this.focus(), !1;
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return dt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(t) {
                    return dt.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        },
        simulate: function(t, e, i) {
            var n = dt.extend(new dt.Event(), i, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault();
        }
    }, dt.removeEvent = nt.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (void 0 === t[n] && (t[n] = null), t.detachEvent(n, i));
    }, dt.Event = function(t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? y : b) : this.type = t, 
        e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void (this[dt.expando] = !0)) : new dt.Event(t, e);
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), 
            t.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        dt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return (!s || s !== n && !dt.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), 
                t.type = e), i;
            }
        };
    }), ut.submit || (dt.event.special.submit = {
        setup: function() {
            return !dt.nodeName(this, "form") && void dt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target, i = dt.nodeName(e, "input") || dt.nodeName(e, "button") ? dt.prop(e, "form") : void 0;
                i && !dt._data(i, "submit") && (dt.event.add(i, "submit._submit", function(t) {
                    t._submitBubble = !0;
                }), dt._data(i, "submit", !0));
            });
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t));
        },
        teardown: function() {
            return !dt.nodeName(this, "form") && void dt.event.remove(this, "._submit");
        }
    }), ut.change || (dt.event.special.change = {
        setup: function() {
            return Ut.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (dt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0);
            }), dt.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), dt.event.simulate("change", this, t);
            })), !1) : void dt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ut.test(e.nodeName) && !dt._data(e, "change") && (dt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t);
                }), dt._data(e, "change", !0));
            });
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return dt.event.remove(this, "._change"), !Ut.test(this.nodeName);
        }
    }), ut.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            dt.event.simulate(e, t.target, dt.event.fix(t));
        };
        dt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this, s = dt._data(n, e);
                s || n.addEventListener(t, i, !0), dt._data(n, e, (s || 0) + 1);
            },
            teardown: function() {
                var n = this.ownerDocument || this, s = dt._data(n, e) - 1;
                s ? dt._data(n, e, s) : (n.removeEventListener(t, i, !0), dt._removeData(n, e));
            }
        };
    }), dt.fn.extend({
        on: function(t, e, i, n) {
            return w(this, t, e, i, n);
        },
        one: function(t, e, i, n) {
            return w(this, t, e, i, n, 1);
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, dt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), 
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this;
            }
            return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = b), 
            this.each(function() {
                dt.event.remove(this, t, i, e);
            });
        },
        trigger: function(t, e) {
            return this.each(function() {
                dt.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? dt.event.trigger(t, e, i, !0) : void 0;
        }
    });
    var Gt = / jQuery\d+="(?:null|\d+)"/g, Zt = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"), Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, te = /<script|<style|<link/i, ee = /checked\s*(?:[^=]|=\s*.checked.)/i, ie = /^true\/(.*)/, ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, se = p(nt).appendChild(nt.createElement("div"));
    dt.extend({
        htmlPrefilter: function(t) {
            return t.replace(Jt, "<$1></$2>");
        },
        clone: function(t, e, i) {
            var n, s, o, r, a, l = dt.contains(t.ownerDocument, t);
            if (ut.html5Clone || dt.isXMLDoc(t) || !Zt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (se.innerHTML = t.outerHTML, 
            se.removeChild(o = se.firstChild)), !(ut.noCloneEvent && ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t))) for (n = f(o), 
            a = f(t), r = 0; null != (s = a[r]); ++r) n[r] && T(s, n[r]);
            if (e) if (i) for (a = a || f(t), n = n || f(o), r = 0; null != (s = a[r]); r++) D(s, n[r]); else D(t, o);
            return (n = f(o, "script")).length > 0 && g(n, !l && f(t, "script")), n = a = s = null, 
            o;
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, r = 0, a = dt.expando, l = dt.cache, h = ut.attributes, c = dt.event.special; null != (i = t[r]); r++) if ((e || It(i)) && (s = i[a], 
            o = s && l[s])) {
                if (o.events) for (n in o.events) c[n] ? dt.event.remove(i, n) : dt.removeEvent(i, n, o.handle);
                l[s] && (delete l[s], h || void 0 === i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), 
                it.push(s));
            }
        }
    }), dt.fn.extend({
        domManip: S,
        detach: function(t) {
            return E(this, t, !0);
        },
        remove: function(t) {
            return E(this, t);
        },
        text: function(t) {
            return zt(this, function(t) {
                return void 0 === t ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t));
            }, null, t, arguments.length);
        },
        append: function() {
            return S(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, t).appendChild(t);
            });
        },
        prepend: function() {
            return S(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && dt.cleanData(f(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                t.options && dt.nodeName(t, "select") && (t.options.length = 0);
            }
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return dt.clone(this, t, e);
            });
        },
        html: function(t) {
            return zt(this, function(t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Gt, "") : void 0;
                if ("string" == typeof t && !te.test(t) && (ut.htmlSerialize || !Zt.test(t)) && (ut.leadingWhitespace || !Ft.test(t)) && !qt[(jt.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (;n > i; i++) 1 === (e = this[i] || {}).nodeType && (dt.cleanData(f(e, !1)), 
                        e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return S(this, arguments, function(e) {
                var i = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(f(this)), i && i.replaceChild(e, this));
            }, t);
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        dt.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = dt(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), 
            dt(o[n])[e](i), rt.apply(s, i.get());
            return this.pushStack(s);
        };
    });
    var oe, re = {
        HTML: "block",
        BODY: "block"
    }, ae = /^margin/, le = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"), he = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s;
    }, ce = nt.documentElement;
    !function() {
        function e() {
            var e, c, u = nt.documentElement;
            u.appendChild(l), h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
            i = s = a = !1, n = r = !0, t.getComputedStyle && (c = t.getComputedStyle(h), i = "1%" !== (c || {}).top, 
            a = "2px" === (c || {}).marginLeft, s = "4px" === (c || {
                width: "4px"
            }).width, h.style.marginRight = "50%", n = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = h.appendChild(nt.createElement("div")), e.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            e.style.marginRight = e.style.width = "0", h.style.width = "1px", r = !parseFloat((t.getComputedStyle(e) || {}).marginRight), 
            h.removeChild(e)), h.style.display = "none", (o = 0 === h.getClientRects().length) && (h.style.display = "", 
            h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = h.getElementsByTagName("td"), 
            e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", 
            e[1].style.display = "none", o = 0 === e[0].offsetHeight)), u.removeChild(l);
        }
        var i, n, s, o, r, a, l = nt.createElement("div"), h = nt.createElement("div");
        h.style && (h.style.cssText = "float:left;opacity:.5", ut.opacity = "0.5" === h.style.opacity, 
        ut.cssFloat = !!h.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
        ut.clearCloneStyle = "content-box" === h.style.backgroundClip, l = nt.createElement("div"), 
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        h.innerHTML = "", l.appendChild(h), ut.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing, 
        dt.extend(ut, {
            reliableHiddenOffsets: function() {
                return null == i && e(), o;
            },
            boxSizingReliable: function() {
                return null == i && e(), s;
            },
            pixelMarginRight: function() {
                return null == i && e(), n;
            },
            pixelPosition: function() {
                return null == i && e(), i;
            },
            reliableMarginRight: function() {
                return null == i && e(), r;
            },
            reliableMarginLeft: function() {
                return null == i && e(), a;
            }
        }));
    }();
    var ue, de, pe = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ue = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e);
    }, de = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ue(t), "" !== (r = i ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== r || dt.contains(t.ownerDocument, t) || (r = dt.style(t, e)), 
        i && !ut.pixelMarginRight() && le.test(r) && ae.test(e) && (n = a.width, s = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, 
        a.minWidth = s, a.maxWidth = o), void 0 === r ? r : r + "";
    }) : ce.currentStyle && (ue = function(t) {
        return t.currentStyle;
    }, de = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ue(t), null == (r = i ? i[e] : void 0) && a && a[e] && (r = a[e]), 
        le.test(r) && !pe.test(e) && (n = a.left, s = t.runtimeStyle, (o = s && s.left) && (s.left = t.currentStyle.left), 
        a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), 
        void 0 === r ? r : r + "" || "auto";
    });
    var fe = /alpha\([^)]*\)/i, ge = /opacity\s*=\s*([^)]*)/i, me = /^(none|table(?!-c[ea]).+)/, ve = new RegExp("^(" + Mt + ")(.*)$", "i"), ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, be = {
        letterSpacing: "0",
        fontWeight: "400"
    }, _e = [ "Webkit", "O", "Moz", "ms" ], we = nt.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = de(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            float: ut.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = dt.camelCase(e), l = t.style;
                if (e = dt.cssProps[a] || (dt.cssProps[a] = P(a) || a), r = dt.cssHooks[e] || dt.cssHooks[a], 
                void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e];
                if ("string" === (o = typeof i) && (s = $t.exec(i)) && s[1] && (i = d(t, e, s), 
                o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (dt.cssNumber[a] ? "" : "px")), 
                ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                    l[e] = i;
                } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = P(a) || a), (r = dt.cssHooks[e] || dt.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)), 
            void 0 === o && (o = de(t, e, n)), "normal" === o && e in be && (o = be[e]), "" === i || i ? (s = parseFloat(o), 
            !0 === i || isFinite(s) ? s || 0 : o) : o;
        }
    }), dt.each([ "height", "width" ], function(t, e) {
        dt.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? me.test(dt.css(t, "display")) && 0 === t.offsetWidth ? he(t, ye, function() {
                    return O(t, e, n);
                }) : O(t, e, n) : void 0;
            },
            set: function(t, i, n) {
                var s = n && ue(t);
                return $(t, i, n ? H(t, e, n, ut.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, s), s) : 0);
            }
        };
    }), ut.opacity || (dt.cssHooks.opacity = {
        get: function(t, e) {
            return ge.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
        },
        set: function(t, e) {
            var i = t.style, n = t.currentStyle, s = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === dt.trim(o.replace(fe, "")) && i.removeAttribute && (i.removeAttribute("filter"), 
            "" === e || n && !n.filter) || (i.filter = fe.test(o) ? o.replace(fe, s) : o + " " + s);
        }
    }), dt.cssHooks.marginRight = N(ut.reliableMarginRight, function(t, e) {
        return e ? he(t, {
            display: "inline-block"
        }, de, [ t, "marginRight" ]) : void 0;
    }), dt.cssHooks.marginLeft = N(ut.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(de(t, "marginLeft")) || (dt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        }) : 0)) + "px" : void 0;
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        dt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [ i ]; 4 > n; n++) s[t + Ht[n] + e] = o[n] || o[n - 2] || o[0];
                return s;
            }
        }, ae.test(t) || (dt.cssHooks[t + e].set = $);
    }), dt.fn.extend({
        css: function(t, e) {
            return zt(this, function(t, e, i) {
                var n, s, o = {}, r = 0;
                if (dt.isArray(e)) {
                    for (n = ue(t), s = e.length; s > r; r++) o[e[r]] = dt.css(t, e[r], !1, n);
                    return o;
                }
                return void 0 !== i ? dt.style(t, e, i) : dt.css(t, e);
            }, t, e, arguments.length > 1);
        },
        show: function() {
            return M(this, !0);
        },
        hide: function() {
            return M(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ot(this) ? dt(this).show() : dt(this).hide();
            });
        }
    }), dt.Tween = z, z.prototype = {
        constructor: z,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || dt.easing._default, this.options = e, 
            this.start = this.now = this.cur(), this.end = n, this.unit = o || (dt.cssNumber[i] ? "" : "px");
        },
        cur: function() {
            var t = z.propHooks[this.prop];
            return t && t.get ? t.get(this) : z.propHooks._default.get(this);
        },
        run: function(t) {
            var e, i = z.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            i && i.set ? i.set(this) : z.propHooks._default.set(this), this;
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0);
            },
            set: function(t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, dt.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, dt.fx = z.prototype.init, dt.fx.step = {};
    var xe, Ce, ke = /^(?:toggle|show|hide)$/, De = /queueHooks$/;
    dt.Animation = dt.extend(q, {
        tweeners: {
            "*": [ function(t, e) {
                var i = this.createTween(t, e);
                return d(i.elem, t, $t.exec(e), i), i;
            } ]
        },
        tweener: function(t, e) {
            dt.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(St);
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], q.tweeners[i] = q.tweeners[i] || [], 
            q.tweeners[i].unshift(e);
        },
        prefilters: [ F ],
        prefilter: function(t, e) {
            e ? q.prefilters.unshift(t) : q.prefilters.push(t);
        }
    }), dt.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? dt.extend({}, t) : {
            complete: i || !i && e || dt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !dt.isFunction(e) && e
        };
        return n.duration = dt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in dt.fx.speeds ? dt.fx.speeds[n.duration] : dt.fx.speeds._default, 
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            dt.isFunction(n.old) && n.old.call(this), n.queue && dt.dequeue(this, n.queue);
        }, n;
    }, dt.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n);
        },
        animate: function(t, e, i, n) {
            var s = dt.isEmptyObject(t), o = dt.speed(e, i, n), r = function() {
                var e = q(this, dt.extend({}, t), o);
                (s || dt._data(this, "finish")) && e.stop(!0);
            };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i);
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, s = null != t && t + "queueHooks", o = dt.timers, r = dt._data(this);
                if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && De.test(s) && n(r[s]);
                for (s = o.length; s--; ) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), 
                e = !1, o.splice(s, 1));
                (e || !i) && dt.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, i = dt._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = dt.timers, r = n ? n.length : 0;
                for (i.finish = !0, dt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), 
                e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
            });
        }
    }), dt.each([ "toggle", "show", "hide" ], function(t, e) {
        var i = dt.fn[e];
        dt.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(j(e, !0), t, n, s);
        };
    }), dt.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        dt.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
        };
    }), dt.timers = [], dt.fx.tick = function() {
        var t, e = dt.timers, i = 0;
        for (xe = dt.now(); i < e.length; i++) (t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || dt.fx.stop(), xe = void 0;
    }, dt.fx.timer = function(t) {
        dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop();
    }, dt.fx.interval = 13, dt.fx.start = function() {
        Ce || (Ce = t.setInterval(dt.fx.tick, dt.fx.interval));
    }, dt.fx.stop = function() {
        t.clearInterval(Ce), Ce = null;
    }, dt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, dt.fn.delay = function(e, i) {
        return e = dt.fx ? dt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(s);
            };
        });
    }, function() {
        var t, e = nt.createElement("input"), i = nt.createElement("div"), n = nt.createElement("select"), s = n.appendChild(nt.createElement("option"));
        (i = nt.createElement("div")).setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), 
        (t = i.getElementsByTagName("a")[0]).style.cssText = "top:1px", ut.getSetAttribute = "t" !== i.className, 
        ut.style = /top/.test(t.getAttribute("style")), ut.hrefNormalized = "/a" === t.getAttribute("href"), 
        ut.checkOn = !!e.value, ut.optSelected = s.selected, ut.enctype = !!nt.createElement("form").enctype, 
        n.disabled = !0, ut.optDisabled = !s.disabled, (e = nt.createElement("input")).setAttribute("value", ""), 
        ut.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), 
        ut.radioValue = "t" === e.value;
    }();
    var Te = /\r/g;
    dt.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = dt.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, dt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : dt.isArray(s) && (s = dt.map(s, function(t) {
                    return null == t ? "" : t + "";
                })), (e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s));
            })) : s ? (e = dt.valHooks[s.type] || dt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, 
            "string" == typeof i ? i.replace(Te, "") : null == i ? "" : i)) : void 0;
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : dt.trim(dt.text(t));
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++) if (((i = n[l]).selected || l === s) && (ut.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !dt.nodeName(i.parentNode, "optgroup"))) {
                        if (e = dt(i).val(), o) return e;
                        r.push(e);
                    }
                    return r;
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = dt.makeArray(e), r = s.length; r--; ) if (n = s[r], 
                    dt.inArray(dt.valHooks.option.get(n), o) >= 0) try {
                        n.selected = i = !0;
                    } catch (t) {
                        n.scrollHeight;
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s;
                }
            }
        }
    }), dt.each([ "radio", "checkbox" ], function() {
        dt.valHooks[this] = {
            set: function(t, e) {
                return dt.isArray(e) ? t.checked = dt.inArray(dt(t).val(), e) > -1 : void 0;
            }
        }, ut.checkOn || (dt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var Se, Ee, Ae = dt.expr.attrHandle, Ie = /^(?:checked|selected)$/i, Ne = ut.getSetAttribute, Pe = ut.input;
    dt.fn.extend({
        attr: function(t, e) {
            return zt(this, dt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                dt.removeAttr(this, t);
            });
        }
    }), dt.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? dt.prop(t, e, i) : (1 === o && dt.isXMLDoc(t) || (e = e.toLowerCase(), 
            s = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? Ee : Se)), void 0 !== i ? null === i ? void dt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), 
            i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = dt.find.attr(t, e), 
            null == n ? void 0 : n));
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ut.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, s = 0, o = e && e.match(St);
            if (o && 1 === t.nodeType) for (;i = o[s++]; ) n = dt.propFix[i] || i, dt.expr.match.bool.test(i) ? Pe && Ne || !Ie.test(i) ? t[n] = !1 : t[dt.camelCase("default-" + i)] = t[n] = !1 : dt.attr(t, i, ""), 
            t.removeAttribute(Ne ? i : n);
        }
    }), Ee = {
        set: function(t, e, i) {
            return !1 === e ? dt.removeAttr(t, i) : Pe && Ne || !Ie.test(i) ? t.setAttribute(!Ne && dt.propFix[i] || i, i) : t[dt.camelCase("default-" + i)] = t[i] = !0, 
            i;
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Ae[e] || dt.find.attr;
        Pe && Ne || !Ie.test(e) ? Ae[e] = function(t, e, n) {
            var s, o;
            return n || (o = Ae[e], Ae[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, 
            Ae[e] = o), s;
        } : Ae[e] = function(t, e, i) {
            return i ? void 0 : t[dt.camelCase("default-" + e)] ? e.toLowerCase() : null;
        };
    }), Pe && Ne || (dt.attrHooks.value = {
        set: function(t, e, i) {
            return dt.nodeName(t, "input") ? void (t.defaultValue = e) : Se && Se.set(t, e, i);
        }
    }), Ne || (Se = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", 
            "value" === i || e === t.getAttribute(i) ? e : void 0;
        }
    }, Ae.id = Ae.name = Ae.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
    }, dt.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0;
        },
        set: Se.set
    }, dt.attrHooks.contenteditable = {
        set: function(t, e, i) {
            Se.set(t, "" !== e && e, i);
        }
    }, dt.each([ "width", "height" ], function(t, e) {
        dt.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
            }
        };
    })), ut.style || (dt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0;
        },
        set: function(t, e) {
            return t.style.cssText = e + "";
        }
    });
    var Me = /^(?:input|select|textarea|button|object)$/i, $e = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function(t, e) {
            return zt(this, dt.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return t = dt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t];
                } catch (t) {}
            });
        }
    }), dt.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, 
            s = dt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Me.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ut.hrefNormalized || dt.each([ "href", "src" ], function(t, e) {
        dt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4);
            }
        };
    }), ut.optSelected || (dt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        }
    }), dt.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        dt.propFix[this.toLowerCase()] = this;
    }), ut.enctype || (dt.propFix.enctype = "encoding");
    var He = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).addClass(t.call(this, e, B(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(St) || []; i = this[l++]; ) if (s = B(i), 
            n = 1 === i.nodeType && (" " + s + " ").replace(He, " ")) {
                for (r = 0; o = e[r++]; ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s !== (a = dt.trim(n)) && dt.attr(i, "class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).removeClass(t.call(this, e, B(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(St) || []; i = this[l++]; ) if (s = B(i), 
            n = 1 === i.nodeType && (" " + s + " ").replace(He, " ")) {
                for (r = 0; o = e[r++]; ) for (;n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                s !== (a = dt.trim(n)) && dt.attr(i, "class", a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(i) {
                dt(this).toggleClass(t.call(this, i, B(this), e), e);
            }) : this.each(function() {
                var e, n, s, o;
                if ("string" === i) for (n = 0, s = dt(this), o = t.match(St) || []; e = o[n++]; ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else (void 0 === t || "boolean" === i) && ((e = B(this)) && dt._data(this, "__className__", e), 
                dt.attr(this, "class", e || !1 === t ? "" : dt._data(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++]; ) if (1 === i.nodeType && (" " + B(i) + " ").replace(He, " ").indexOf(e) > -1) return !0;
            return !1;
        }
    }), dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        dt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
    }), dt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    });
    var Oe = t.location, ze = dt.now(), We = /\?/, je = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    dt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null, s = dt.trim(e + "");
        return s && !dt.trim(s.replace(je, function(t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "");
        })) ? Function("return " + s)() : dt.error("Invalid JSON: " + e);
    }, dt.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new t.DOMParser(), i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), 
            i.async = "false", i.loadXML(e));
        } catch (t) {
            i = void 0;
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), 
        i;
    };
    var Le = /#.*$/, Fe = /([?&])_=[^&]*/, Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Be = /^(?:GET|HEAD)$/, Ye = /^\/\//, Ue = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Xe = {}, Qe = {}, Ve = "*/".concat("*"), Ke = Oe.href, Ge = Ue.exec(Ke.toLowerCase()) || [];
    dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ke,
            type: "GET",
            isLocal: qe.test(Ge[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ve,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": dt.parseJSON,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? X(X(t, dt.ajaxSettings), e) : X(dt.ajaxSettings, t);
        },
        ajaxPrefilter: Y(Xe),
        ajaxTransport: Y(Qe),
        ajax: function(e, i) {
            function n(e, i, n, s) {
                var o, u, y, b, w, C = i;
                2 !== _ && (_ = 2, l && t.clearTimeout(l), c = void 0, a = s || "", x.readyState = e > 0 ? 4 : 0, 
                o = e >= 200 && 300 > e || 304 === e, n && (b = Q(d, x, n)), b = V(d, b, x, o), 
                o ? (d.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (dt.lastModified[r] = w), 
                (w = x.getResponseHeader("etag")) && (dt.etag[r] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                u = b.data, y = b.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), 
                x.status = e, x.statusText = (i || C) + "", o ? g.resolveWith(p, [ u, C, x ]) : g.rejectWith(p, [ x, C, y ]), 
                x.statusCode(v), v = void 0, h && f.trigger(o ? "ajaxSuccess" : "ajaxError", [ x, d, o ? u : y ]), 
                m.fireWith(p, [ x, C ]), h && (f.trigger("ajaxComplete", [ x, d ]), --dt.active || dt.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, r, a, l, h, c, u, d = dt.ajaxSetup({}, i), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? dt(p) : dt.event, g = dt.Deferred(), m = dt.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, _ = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === _) {
                        if (!u) for (u = {}; e = Re.exec(a); ) u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? a : null;
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return _ || (t = b[i] = b[i] || t, y[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return _ || (d.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > _) for (e in t) v[e] = [ v[e], t[e] ]; else x.always(t[x.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e), n(0, e), this;
                }
            };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ke) + "").replace(Le, "").replace(Ye, Ge[1] + "//"), 
            d.type = i.method || i.type || d.method || d.type, d.dataTypes = dt.trim(d.dataType || "*").toLowerCase().match(St) || [ "" ], 
            null == d.crossDomain && (s = Ue.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === Ge[1] && s[2] === Ge[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Ge[3] || ("http:" === Ge[1] ? "80" : "443")))), 
            d.data && d.processData && "string" != typeof d.data && (d.data = dt.param(d.data, d.traditional)), 
            U(Xe, d, i, x), 2 === _) return x;
            (h = dt.event && d.global) && 0 == dt.active++ && dt.event.trigger("ajaxStart"), 
            d.type = d.type.toUpperCase(), d.hasContent = !Be.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (We.test(r) ? "&" : "?") + d.data, 
            delete d.data), !1 === d.cache && (d.url = Fe.test(r) ? r.replace(Fe, "$1_=" + ze++) : r + (We.test(r) ? "&" : "?") + "_=" + ze++)), 
            d.ifModified && (dt.lastModified[r] && x.setRequestHeader("If-Modified-Since", dt.lastModified[r]), 
            dt.etag[r] && x.setRequestHeader("If-None-Match", dt.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), 
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || 2 === _)) return x.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) x[o](d[o]);
            if (c = U(Qe, d, i, x)) {
                if (x.readyState = 1, h && f.trigger("ajaxSend", [ x, d ]), 2 === _) return x;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    x.abort("timeout");
                }, d.timeout));
                try {
                    _ = 1, c.send(y, n);
                } catch (t) {
                    if (!(2 > _)) throw t;
                    n(-1, t);
                }
            } else n(-1, "No Transport");
            return x;
        },
        getJSON: function(t, e, i) {
            return dt.get(t, e, i, "json");
        },
        getScript: function(t, e) {
            return dt.get(t, void 0, e, "script");
        }
    }), dt.each([ "get", "post" ], function(t, e) {
        dt[e] = function(t, i, n, s) {
            return dt.isFunction(i) && (s = s || n, n = i, i = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, dt.isPlainObject(t) && t));
        };
    }), dt._evalUrl = function(t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, dt.fn.extend({
        wrapAll: function(t) {
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = dt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                    return t;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(t) {
            return dt.isFunction(t) ? this.each(function(e) {
                dt(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = dt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = dt.isFunction(t);
            return this.each(function(i) {
                dt(this).wrapAll(e ? t.call(this, i) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes);
            }).end();
        }
    }), dt.expr.filters.hidden = function(t) {
        return ut.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : G(t);
    }, dt.expr.filters.visible = function(t) {
        return !dt.expr.filters.hidden(t);
    };
    var Ze = /%20/g, Je = /\[\]$/, ti = /\r?\n/g, ei = /^(?:submit|button|image|reset|file)$/i, ii = /^(?:input|select|textarea|keygen)/i;
    dt.param = function(t, e) {
        var i, n = [], s = function(t, e) {
            e = dt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (void 0 === e && (e = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
            s(this.name, this.value);
        }); else for (i in t) Z(i, t[i], e, s);
        return n.join("&").replace(Ze, "+");
    }, dt.fn.extend({
        serialize: function() {
            return dt.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && ii.test(this.nodeName) && !ei.test(t) && (this.checked || !Wt.test(t));
            }).map(function(t, e) {
                var i = dt(this).val();
                return null == i ? null : dt.isArray(i) ? dt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ti, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: i.replace(ti, "\r\n")
                };
            }).get();
        }
    }), dt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : nt.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || tt();
    } : J;
    var ni = 0, si = {}, oi = dt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in si) si[t](void 0, !0);
    }), ut.cors = !!oi && "withCredentials" in oi, (oi = ut.ajax = !!oi) && dt.ajaxTransport(function(e) {
        if (!e.crossDomain || ut.cors) {
            var i;
            return {
                send: function(n, s) {
                    var o, r = e.xhr(), a = ++ni;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), i = function(t, n) {
                        var o, l, h;
                        if (i && (n || 4 === r.readyState)) if (delete si[a], i = void 0, r.onreadystatechange = dt.noop, 
                        n) 4 !== r.readyState && r.abort(); else {
                            h = {}, o = r.status, "string" == typeof r.responseText && (h.text = r.responseText);
                            try {
                                l = r.statusText;
                            } catch (t) {
                                l = "";
                            }
                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404;
                        }
                        h && s(o, l, h, r.getAllResponseHeaders());
                    }, e.async ? 4 === r.readyState ? t.setTimeout(i) : r.onreadystatechange = si[a] = i : i();
                },
                abort: function() {
                    i && i(void 0, !0);
                }
            };
        }
    }), dt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1);
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return dt.globalEval(t), t;
            }
        }
    }), dt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
    }), dt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = nt.head || dt("head")[0] || nt.documentElement;
            return {
                send: function(n, s) {
                    (e = nt.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), 
                    e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, 
                        e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"));
                    }, i.insertBefore(e, i.firstChild);
                },
                abort: function() {
                    e && e.onload(void 0, !0);
                }
            };
        }
    });
    var ri = [], ai = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ri.pop() || dt.expando + "_" + ze++;
            return this[t] = !0, t;
        }
    }), dt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, r, a = !1 !== e.jsonp && (ai.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ai.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(ai, "$1" + s) : !1 !== e.jsonp && (e.url += (We.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), 
        e.converters["script json"] = function() {
            return r || dt.error(s + " was not called"), r[0];
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            r = arguments;
        }, n.always(function() {
            void 0 === o ? dt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, 
            ri.push(s)), r && dt.isFunction(o) && o(r[0]), r = o = void 0;
        }), "script") : void 0;
    }), ut.createHTMLDocument = function() {
        if (!nt.implementation.createHTMLDocument) return !1;
        var t = nt.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length;
    }(), dt.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || (ut.createHTMLDocument ? nt.implementation.createHTMLDocument("") : nt);
        var n = wt.exec(t), s = !i && [];
        return n ? [ e.createElement(n[1]) ] : (n = v([ t ], e, s), s && s.length && dt(s).remove(), 
        dt.merge([], n.childNodes));
    };
    var li = dt.fn.load;
    dt.fn.load = function(t, e, i) {
        if ("string" != typeof t && li) return li.apply(this, arguments);
        var n, s, o, r = this, a = t.indexOf(" ");
        return a > -1 && (n = dt.trim(t.slice(a, t.length)), t = t.slice(0, a)), dt.isFunction(e) ? (i = e, 
        e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && dt.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(n ? dt("<div>").append(dt.parseHTML(t)).find(n) : t);
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(r, o || [ t.responseText, e, t ]);
            });
        }), this;
    }, dt.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        dt.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), dt.expr.filters.animated = function(t) {
        return dt.grep(dt.timers, function(e) {
            return t === e.elem;
        }).length;
    }, dt.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, h = dt.css(t, "position"), c = dt(t), u = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), o = dt.css(t, "top"), 
            l = dt.css(t, "left"), ("absolute" === h || "fixed" === h) && dt.inArray("auto", [ o, l ]) > -1 ? (n = c.position(), 
            r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, i, dt.extend({}, a))), 
            null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), 
            "using" in e ? e.using.call(t, u) : c.css(u);
        }
    }, dt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                dt.offset.setOffset(this, t, e);
            });
            var e, i, n = {
                top: 0,
                left: 0
            }, s = this[0], o = s && s.ownerDocument;
            return o ? (e = o.documentElement, dt.contains(e, s) ? (void 0 !== s.getBoundingClientRect && (n = s.getBoundingClientRect()), 
            i = et(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                }, n = this[0];
                return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i.top += dt.css(t[0], "borderTopWidth", !0), 
                i.left += dt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - dt.css(n, "marginTop", !0),
                    left: e.left - i.left - dt.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position"); ) t = t.offsetParent;
                return t || ce;
            });
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        dt.fn[t] = function(n) {
            return zt(this, function(t, n, s) {
                var o = et(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void (o ? o.scrollTo(i ? dt(o).scrollLeft() : s, i ? s : dt(o).scrollTop()) : t[n] = s);
            }, t, n, arguments.length, null);
        };
    }), dt.each([ "top", "left" ], function(t, e) {
        dt.cssHooks[e] = N(ut.pixelPosition, function(t, i) {
            return i ? (i = de(t, e), le.test(i) ? dt(t).position()[e] + "px" : i) : void 0;
        });
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        dt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            dt.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n), r = i || (!0 === n || !0 === s ? "margin" : "border");
                return zt(this, function(e, i, n) {
                    var s;
                    return dt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, 
                    Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? dt.css(e, i, r) : dt.style(e, i, n, r);
                }, e, o ? n : void 0, o, null);
            };
        });
    }), dt.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        }
    }), dt.fn.size = function() {
        return this.length;
    }, dt.fn.andSelf = dt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return dt;
    });
    var hi = t.jQuery, ci = t.$;
    return dt.noConflict = function(e) {
        return t.$ === dt && (t.$ = ci), e && t.jQuery === dt && (t.jQuery = hi), dt;
    }, e || (t.jQuery = t.$ = dt), dt;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {
            end: e[i]
        };
        return !1;
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1, n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0;
        });
        var s = function() {
            i || t(n).trigger(t.support.transition.end);
        };
        return setTimeout(s, e), this;
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        });
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this), s = i.data("bs.alert");
            s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i);
        });
    }
    var i = '[data-dismiss="alert"]', n = function(e) {
        t(e).on("click", i, this.close);
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove();
        }
        var s = t(this), o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === o ? [] : o);
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), 
        e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i());
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this;
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close);
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.button"), o = "object" == typeof e && e;
            s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e);
        });
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1;
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled", n = this.$element, s = n.is("input") ? "val" : "html", o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
            n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, 
            n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, 
            n.removeClass(i).removeAttr(i).prop(i, !1));
        }, this), 0);
    }, i.prototype.toggle = function() {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), 
            this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), 
            this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), 
            t && i.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this;
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), 
        n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.carousel"), o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e), r = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle();
        });
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = i, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            t.preventDefault();
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), 
        this;
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n);
    }, i.prototype.to = function(t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t);
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    }, i.prototype.slide = function(e, n) {
        var s = this.$element.find(".item.active"), o = n || this.getItemForDirection(e, s), r = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var h = o[0], c = t.Event("slide.bs.carousel", {
            relatedTarget: h,
            direction: a
        });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active");
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), 
            o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function() {
                o.removeClass([ e, a ].join(" ")).addClass("active"), s.removeClass([ "active", a ].join(" ")), 
                l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d);
                }, 0);
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), 
            this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this;
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this;
    };
    var s = function(i) {
        var n, s = t(this), o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = t.extend({}, o.data(), s.data()), a = s.attr("data-slide-to");
            a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), i.preventDefault();
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), 
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data());
        });
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n);
    }
    function i(e) {
        return this.each(function() {
            var i = t(this), s = i.data("bs.collapse"), o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), 
            "string" == typeof e && s[e]();
        });
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height";
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse")) && e.transitioning)) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase([ "scroll", r ].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l]);
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this);
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var s = t(n);
            this.addAriaAndCollapsedClass(e(s), s);
        }, this)).end();
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this;
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var s = t(this);
        s.attr("data-target") || n.preventDefault();
        var o = e(s), r = o.data("bs.collapse") ? "toggle" : s.data();
        i.call(o, r);
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent();
    }
    function i(i) {
        i && 3 === i.which || (t(s).remove(), t(o).each(function() {
            var n = t(this), s = e(n), o = {
                relatedTarget: this
            };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), 
            i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))));
        }));
    }
    function n(e) {
        return this.each(function() {
            var i = t(this), n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i);
        });
    }
    var s = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle);
    };
    r.VERSION = "3.3.7", r.prototype.toggle = function(n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = e(s), r = o.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
            }
            return !1;
        }
    }, r.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var s = e(n), r = s.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"), 
                n.trigger("click");
                var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), 
                    a.eq(l).trigger("focus");
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this;
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation();
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown);
}(jQuery), function(t) {
    "use strict";
    function e(e, n) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.modal"), r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new i(this, r)), "string" == typeof e ? o[e](n) : r.show && o.show(n);
        });
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, 
    i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t);
    }, i.prototype.show = function(e) {
        var n = this, s = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), 
            n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o);
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o);
        }));
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
        }, this));
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
        });
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, i.prototype.backdrop = function(e) {
        var n = this, s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e();
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r();
        } else e && e();
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        });
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this;
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this), s = n.attr("href"), o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")), r = o.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(s) && s
        }, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus");
            });
        }), e.call(o, r, this);
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.tooltip"), o = "object" == typeof e && e;
            !s && /destroy|hide/.test(e) || (s || n.data("bs.tooltip", s = new i(this, o)), 
            "string" == typeof e && s[e]());
        });
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), 
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), o = s.length; o--; ) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), 
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS;
    }, i.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e;
    }, i.prototype.getDelegateOptions = function() {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n);
        }), e;
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), 
        i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), 
        i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show();
        }, i.options.delay.show)) : i.show());
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), 
        !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide();
        }, i.options.delay.hide)) : i.hide();
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var s = this, o = this.tip(), r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(a);
            h && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), u = o[0].offsetWidth, d = o[0].offsetHeight;
            if (h) {
                var p = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > f.bottom ? "top" : "top" == a && c.top - d < f.top ? "bottom" : "right" == a && c.right + u > f.width ? "left" : "left" == a && c.left - u < f.left ? "right" : a, 
                o.removeClass(p).addClass(a);
            }
            var g = this.getCalculatedOffset(a, c, u, d);
            this.applyPlacement(g, a);
            var m = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s);
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m();
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(), s = n[0].offsetWidth, o = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10), a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                });
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth, h = n[0].offsetHeight;
        "top" == i && h != o && (e.top = e.top + o - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(i), d = u ? 2 * c.left - s + l : 2 * c.top - o + h, p = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], u);
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), 
            e && e();
        }
        var s = this, o = t(this.$tip), r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), 
        t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), 
        this.hoverState = null, this;
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
    }, i.prototype.hasContent = function() {
        return this.getTitle();
    }, i.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0], n = "BODY" == i.tagName, s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var o = window.SVGElement && i instanceof window.SVGElement, r = n ? {
            top: 0,
            left: 0
        } : o ? null : e.offset(), a = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }, l = n ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, s, a, l, r);
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        };
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll, l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l);
        } else {
            var h = e.left - o, c = e.left + o + i;
            h < r.left ? s.left = r.left - h : c > r.right && (s.left = r.left + r.width - c);
        }
        return s;
    }, i.prototype.getTitle = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
    }, i.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, i.prototype.enable = function() {
        this.enabled = !0;
    }, i.prototype.disable = function() {
        this.enabled = !1;
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, 
        i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), 
            t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
        });
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this;
    };
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.popover"), o = "object" == typeof e && e;
            !s && /destroy|hide/.test(e) || (s || n.data("bs.popover", s = new i(this, o)), 
            "string" == typeof e && s[e]());
        });
    }
    var i = function(t, e) {
        this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, 
    i.prototype.getDefaults = function() {
        return i.DEFAULTS;
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), 
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, i.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this;
    };
}(jQuery), function(t) {
    "use strict";
    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), 
        this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function i(i) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.scrollspy"), o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]();
        });
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, e.prototype.refresh = function() {
        var e = this, i = "offset", n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var e = t(this), s = e.data("target") || e.attr("href"), o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [ [ o[i]().top + n, s ] ] || null;
        }).sort(function(t, e) {
            return t[0] - e[0];
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1]);
        });
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, o = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--; ) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t]);
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
        n.trigger("activate.bs.scrollspy");
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this;
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data());
        });
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]();
        });
    }
    var i = function(e) {
        this.element = t(e);
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"), o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }), r = t.Event("show.bs.tab", {
                relatedTarget: s[0]
            });
            if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    });
                });
            }
        }
    }, i.prototype.activate = function(e, n, s) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, 
            e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            s && s();
        }
        var r = n.find("> .active"), a = s && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), 
        r.removeClass("in");
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this;
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show");
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s);
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), s = n.data("bs.affix"), o = "object" == typeof e && e;
            s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]();
        });
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop(), o = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return s < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + r <= t - n) && "bottom";
        var a = null == this.affixed, l = a ? s : o.top, h = a ? r : e;
        return null != i && s <= i ? "top" : null != n && l + h >= t - n && "bottom";
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t;
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1);
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), n = this.options.offset, s = n.top, o = n.bottom, r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), 
            "function" == typeof o && (o = n.bottom(this.$element));
            var a = this.getState(r, e, s, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == a && this.$element.offset({
                top: r - e - o
            });
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this;
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this), n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
            null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n);
        });
    });
}(jQuery), function() {
    function t() {
        T.keyboardSupport && d("keydown", s);
    }
    function e() {
        if (!I && document.body) {
            I = !0;
            var e = document.body, i = document.documentElement, n = window.innerHeight, s = e.scrollHeight;
            if (N = document.compatMode.indexOf("CSS") >= 0 ? i : e, w = e, t(), top != self) E = !0; else if (s > n && (e.offsetHeight <= n || i.offsetHeight <= n)) {
                var o = !1, r = function() {
                    o || i.scrollHeight == document.height || (o = !0, setTimeout(function() {
                        i.style.height = document.height + "px", o = !1;
                    }, 500));
                };
                i.style.oldHeight = i.style.height, i.style.height = "auto", setTimeout(r, 10);
                var a = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if ((x = new R(r)).observe(e, a), N.offsetHeight <= n) {
                    var l = document.createElement("div");
                    l.style.clear = "both", e.appendChild(l);
                }
            }
            T.fixedBackground || S || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll");
        }
    }
    function i(t, e, i, n) {
        if (n || (n = 1e3), f(e, i), 1 != T.accelerationMax) {
            var s = Date.now() - z;
            if (s < T.accelerationDelta) {
                var o = (1 + 50 / s) / 2;
                o > 1 && (o = Math.min(o, T.accelerationMax), e *= o, i *= o);
            }
            z = Date.now();
        }
        if (H.push({
            x: e,
            y: i,
            lastX: e < 0 ? .99 : -.99,
            lastY: i < 0 ? .99 : -.99,
            start: Date.now()
        }), !O) {
            var r = t === document.body, a = function(s) {
                for (var o = Date.now(), l = 0, h = 0, c = 0; c < H.length; c++) {
                    var u = H[c], d = o - u.start, p = d >= T.animationTime, f = p ? 1 : d / T.animationTime;
                    T.pulseAlgorithm && (f = _(f));
                    var g = u.x * f - u.lastX >> 0, m = u.y * f - u.lastY >> 0;
                    l += g, h += m, u.lastX += g, u.lastY += m, p && (H.splice(c, 1), c--);
                }
                r ? window.scrollBy(l, h) : (l && (t.scrollLeft += l), h && (t.scrollTop += h)), 
                e || i || (H = []), H.length ? F(a, t, n / T.frameRate + 1) : O = !1;
            };
            F(a, t, 0), O = !0;
        }
    }
    function n(t) {
        I || e();
        var n = t.target, s = l(n);
        if (!s || t.defaultPrevented || t.ctrlKey) return !0;
        if (p(w, "embed") || p(n, "embed") && /\.pdf/i.test(n.src) || p(w, "object")) return !0;
        var o = -t.wheelDeltaX || t.deltaX || 0, a = -t.wheelDeltaY || t.deltaY || 0;
        return M && (t.wheelDeltaX && m(t.wheelDeltaX, 120) && (o = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), 
        t.wheelDeltaY && m(t.wheelDeltaY, 120) && (a = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), 
        o || a || (a = -t.wheelDelta || 0), 1 === t.deltaMode && (o *= 40, a *= 40), !(T.touchpadSupport || !g(a)) || (Math.abs(o) > 1.2 && (o *= T.stepSize / 120), 
        Math.abs(a) > 1.2 && (a *= T.stepSize / 120), i(s, o, a), t.preventDefault(), void r());
    }
    function s(t) {
        var e = t.target, n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== $.spacebar, s = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (/^(textarea|select|embed|object)$/i.test(e.nodeName) || p(e, "input") && !s.test(e.type) || p(w, "video") || y(t) || e.isContentEditable || t.defaultPrevented || n) return !0;
        if (p(e, "button") && t.keyCode === $.spacebar) return !0;
        var o = 0, a = 0, h = l(w), c = h.clientHeight;
        switch (h == document.body && (c = window.innerHeight), t.keyCode) {
          case $.up:
            a = -T.arrowScroll;
            break;

          case $.down:
            a = T.arrowScroll;
            break;

          case $.spacebar:
            a = -(t.shiftKey ? 1 : -1) * c * .9;
            break;

          case $.pageup:
            a = .9 * -c;
            break;

          case $.pagedown:
            a = .9 * c;
            break;

          case $.home:
            a = -h.scrollTop;
            break;

          case $.end:
            var u = h.scrollHeight - h.scrollTop - c;
            a = u > 0 ? u + 10 : 0;
            break;

          case $.left:
            o = -T.arrowScroll;
            break;

          case $.right:
            o = T.arrowScroll;
            break;

          default:
            return !0;
        }
        i(h, o, a), t.preventDefault(), r();
    }
    function o(t) {
        w = t.target;
    }
    function r() {
        clearTimeout(C), C = setInterval(function() {
            j = {};
        }, 1e3);
    }
    function a(t, e) {
        for (var i = t.length; i--; ) j[W(t[i])] = e;
        return e;
    }
    function l(t) {
        var e = [], i = document.body, n = N.scrollHeight;
        do {
            var s = j[W(t)];
            if (s) return a(e, s);
            if (e.push(t), n === t.scrollHeight) {
                var o = c(N) && c(i) || u(N);
                if (E && h(N) || !E && o) return a(e, q());
            } else if (h(t) && u(t)) return a(e, t);
        } while (t = t.parentElement);
    }
    function h(t) {
        return t.clientHeight + 10 < t.scrollHeight;
    }
    function c(t) {
        return "hidden" !== getComputedStyle(t, "").getPropertyValue("overflow-y");
    }
    function u(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "scroll" === e || "auto" === e;
    }
    function d(t, e, i) {
        window.addEventListener(t, e, i || !1);
    }
    function p(t, e) {
        return (t.nodeName || "").toLowerCase() === e.toLowerCase();
    }
    function f(t, e) {
        t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, A.x === t && A.y === e || (A.x = t, A.y = e, 
        H = [], z = 0);
    }
    function g(t) {
        if (t) return P.length || (P = [ t, t, t ]), t = Math.abs(t), P.push(t), P.shift(), 
        clearTimeout(k), k = setTimeout(function() {
            window.localStorage && (localStorage.SS_deltaBuffer = P.join(","));
        }, 1e3), !v(120) && !v(100);
    }
    function m(t, e) {
        return Math.floor(t / e) == t / e;
    }
    function v(t) {
        return m(P[0], t) && m(P[1], t) && m(P[2], t);
    }
    function y(t) {
        var e = t.target, i = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
            if (i = e.classList && e.classList.contains("html5-video-controls")) break;
        } while (e = e.parentNode);
        return i;
    }
    function b(t) {
        var e, i, n;
        return t *= T.pulseScale, t < 1 ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), 
        t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * T.pulseNormalize;
    }
    function _(t) {
        return t >= 1 ? 1 : t <= 0 ? 0 : (1 == T.pulseNormalize && (T.pulseNormalize /= b(1)), 
        b(t));
    }
    if (-1 != navigator.appVersion.indexOf("Win")) {
        var w, x, C, k, D = {
            frameRate: 150,
            animationTime: 500,
            stepSize: 150,
            pulseAlgorithm: !0,
            pulseScale: 6,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0,
            excluded: ""
        }, T = D, S = !1, E = !1, A = {
            x: 0,
            y: 0
        }, I = !1, N = document.documentElement, P = [], M = /^Mac/.test(navigator.platform), $ = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        }, T = D, H = [], O = !1, z = Date.now(), W = function() {
            var t = 0;
            return function(e) {
                return e.uniqueID || (e.uniqueID = t++);
            };
        }(), j = {};
        window.localStorage && localStorage.SS_deltaBuffer && (P = localStorage.SS_deltaBuffer.split(","));
        var L, F = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t, e, i) {
                window.setTimeout(t, i || 1e3 / 60);
            };
        }(), R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, q = function() {
            var t;
            return function() {
                if (!t) {
                    var e = document.createElement("div");
                    e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                    var i = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 1), t = document.body.scrollTop != i ? document.body : document.documentElement, 
                    window.scrollBy(0, -1), document.body.removeChild(e);
                }
                return t;
            };
        }();
        "onwheel" in document.createElement("div") ? L = "wheel" : "onmousewheel" in document.createElement("div") && (L = "mousewheel"), 
        L && (d(L, n), d("mousedown", o), d("load", e));
    }
}(), function(t, e, i, n) {
    "use strict";
    function s(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var s in n) null === n[s] && delete n[s];
        t.extend(this, r, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, 
        this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, 
        this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, 
        this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, 
        this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), 
        this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), 
        this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), 
        this.initialise();
    }
    var o = "parallax", r = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    s.prototype.transformSupport = function(t) {
        for (var s = i.createElement("div"), o = !1, r = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; c < u; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", 
        h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), s.style[h] !== n) {
            o = !0;
            break;
        }
        switch (t) {
          case "2D":
            a = o;
            break;

          case "3D":
            if (o) {
                var d = i.body || i.createElement("body"), p = i.documentElement, f = p.style.overflow;
                i.body || (p.style.overflow = "hidden", p.appendChild(d), d.style.overflow = "hidden", 
                d.style.background = ""), d.appendChild(s), s.style[h] = "translate3d(1px,1px,1px)", 
                a = (r = e.getComputedStyle(s).getPropertyValue(l)) !== n && r.length > 0 && "none" !== r, 
                p.style.overflow = f, d.removeChild(s);
            }
        }
        return a;
    }, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, 
    s.prototype.wrx = null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), 
    s.prototype.vendors = [ null, [ "-webkit-", "webkit" ], [ "-moz-", "Moz" ], [ "-o-", "O" ], [ "-ms-", "ms" ] ], 
    s.prototype.motionSupport = !!e.DeviceMotionEvent, s.prototype.orientationSupport = !!e.DeviceOrientationEvent, 
    s.prototype.orientationStatus = 0, s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), 
    s.prototype.transform3DSupport = s.prototype.transformSupport("3D"), s.prototype.propertyCache = {}, 
    s.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), 
        this.enable(), this.queueCalibration(this.calibrationDelay);
    }, s.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
            this.depths.push(t(i).data("depth") || 0);
        }, this));
    }, s.prototype.updateDimensions = function() {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, 
        this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), 
        this.wry = Math.max(this.wcy, this.wh - this.wcy);
    }, s.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, 
        this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, 
        this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), 
        this.ery = Math.max(this.ecy, this.eh - this.ecy);
    }, s.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t);
    }, s.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, 
        e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, 
        this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), 
        e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame));
    }, s.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), 
        e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf));
    }, s.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e;
    }, s.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e;
    }, s.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e;
    }, s.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e;
    }, s.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e;
    }, s.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e;
    }, s.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i);
    }, s.prototype.css = function(e, i, s) {
        var o = this.propertyCache[i];
        if (!o) for (var r = 0, a = this.vendors.length; r < a; r++) if (o = null !== this.vendors[r] ? t.camelCase(this.vendors[r][1] + "-" + i) : i, 
        e.style[o] !== n) {
            this.propertyCache[i] = o;
            break;
        }
        e.style[o] = s;
    }, s.prototype.accelerate = function(t) {
        for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), 
            this.css(n, "backface-visibility", "hidden");
        }
    }, s.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, 
        t.style.top = i);
    }, s.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, 
        this.enable());
    }, s.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0;
    }, s.prototype.onWindowResize = function(t) {
        this.updateDimensions();
    }, s.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), 
        this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, 
        this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), 
        this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), 
        isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), 
        this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; i < n; i++) {
            var s = this.depths[i], o = this.$layers[i], r = this.vx * s * (this.invertX ? -1 : 1), a = this.vy * s * (this.invertY ? -1 : 1);
            this.setPosition(o, r, a);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
    }, s.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / 30, n = (t.gamma || 0) / 30, s = e.innerHeight > e.innerWidth;
            this.portrait !== s && (this.portrait = s, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, 
            this.cx = i, this.cy = n), this.ix = i, this.iy = n;
        }
    }, s.prototype.onMouseMove = function(t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), 
        e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), 
        this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, 
        this.iy = (i - this.wcy) / this.wry);
    };
    var a = {
        enable: s.prototype.enable,
        disable: s.prototype.disable,
        updateLayers: s.prototype.updateLayers,
        calibrate: s.prototype.calibrate,
        friction: s.prototype.friction,
        invert: s.prototype.invert,
        scalar: s.prototype.scalar,
        limit: s.prototype.limit,
        origin: s.prototype.origin
    };
    t.fn[o] = function(e) {
        var i = arguments;
        return this.each(function() {
            var n = t(this), r = n.data(o);
            r || (r = new s(this, e), n.data(o, r)), a[e] && r[e].apply(r, Array.prototype.slice.call(i, 1));
        });
    };
}(window.jQuery || window.Zepto, window, document), function() {
    for (var t = 0, e = [ "ms", "moz", "webkit", "o" ], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], 
    window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
        var n = new Date().getTime(), s = Math.max(0, 16 - (n - t)), o = window.setTimeout(function() {
            e(n + s);
        }, s);
        return t = n + s, o;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t);
    });
}(), function() {
    var t, e, i, n, s, o = function(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    }, r = [].indexOf || function(t) {
        for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
        return -1;
    };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in e) n = e[i], null == t[i] && (t[i] = n);
            return t;
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);
        }, t.prototype.createEvent = function(t, e, i, n) {
            var s;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (s = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (s = document.createEventObject(), 
            s.eventType = t) : s.eventName = t, s;
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0;
        }, t.prototype.addEvent = function(t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i;
        }, t.prototype.removeEvent = function(t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e];
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
        }, t;
    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function t() {
            this.keys = [], this.values = [];
        }
        return t.prototype.get = function(t) {
            var e, i, n, s;
            for (e = i = 0, n = (s = this.keys).length; n > i; e = ++i) if (s[e] === t) return this.values[e];
        }, t.prototype.set = function(t, e) {
            var i, n, s, o;
            for (i = n = 0, s = (o = this.keys).length; s > n; i = ++n) if (o[i] === t) return void (this.values[i] = e);
            return this.keys.push(t), this.values.push(e);
        }, t;
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), 
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t;
    }()), n = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var i;
            return "float" === e && (e = "styleFloat"), s.test(e) && e.replace(s, function(t, e) {
                return e.toUpperCase();
            }), (null != (i = t.currentStyle) ? i[e] : void 0) || null;
        }, this;
    }, s = /(\-([a-z]){1})/g, this.WOW = function() {
        function s(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), 
            this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), 
            this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), 
            this.animationNameCache = new i(), this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        return s.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, s.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), 
            this.finished = [];
        }, s.prototype.start = function() {
            var e, i, n, s;
            if (this.stopped = !1, this.boxes = function() {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], 
                s.push(e);
                return s;
            }.call(this), this.all = function() {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], s.push(e);
                return s;
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (s = this.boxes, 
            i = 0, n = s.length; n > i; i++) e = s[i], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), 
            this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), 
            this.config.live ? new t(function(t) {
                return function(e) {
                    var i, n, s, o, r;
                    for (r = [], i = 0, n = e.length; n > i; i++) o = e[i], r.push(function() {
                        var t, e, i, n;
                        for (n = [], t = 0, e = (i = o.addedNodes || []).length; e > t; t++) s = i[t], n.push(this.doSync(s));
                        return n;
                    }.call(t));
                    return r;
                };
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
        }, s.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), 
            this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
        }, s.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0;
        }, s.prototype.doSync = function(t) {
            var e, i, n, s, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (o = [], i = 0, n = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = s[i], 
                r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), 
                o.push(this.scrolled = !0)) : o.push(void 0);
                return o;
            }
        }, s.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, 
            null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), 
            this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), 
            this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), 
            t;
        }, s.prototype.applyStyle = function(t, e) {
            var i, n, s;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), 
            s = t.getAttribute("data-wow-iteration"), this.animate(function(o) {
                return function() {
                    return o.customStyle(t, e, n, i, s);
                };
            }(this));
        }, s.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t);
            } : function(t) {
                return t();
            };
        }(), s.prototype.resetStyle = function() {
            var t, e, i, n, s;
            for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], s.push(t.style.visibility = "visible");
            return s;
        }, s.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, 
            e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0;
        }, s.prototype.customStyle = function(t, e, i, n, s) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", 
            i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), s && this.vendorSet(t.style, {
                animationIterationCount: s
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t;
        }, s.prototype.vendors = [ "moz", "webkit" ], s.prototype.vendorSet = function(t, e) {
            var i, n, s, o;
            n = [];
            for (i in e) s = e[i], t["" + i] = s, n.push(function() {
                var e, n, r, a;
                for (a = [], e = 0, n = (r = this.vendors).length; n > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = s);
                return a;
            }.call(this));
            return n;
        }, s.prototype.vendorCSS = function(t, e) {
            var i, s, o, r, a, l;
            for (r = (a = n(t)).getPropertyCSSValue(e), i = 0, s = (o = this.vendors).length; s > i; i++) l = o[i], 
            r = r || a.getPropertyCSSValue("-" + l + "-" + e);
            return r;
        }, s.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
                e = n(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
        }, s.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t));
        }, s.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t);
        }, s.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, s.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, i, n, s;
                for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++) (t = n[e]) && (this.isVisible(t) ? this.show(t) : s.push(t));
                return s;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, s.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent; ) e += t.offsetTop;
            return e;
        }, s.prototype.isVisible = function(t) {
            var e, i, n, s, o;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, 
            s = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), 
            e = n + t.clientHeight, s >= n && e >= o;
        }, s.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e();
        }, s.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, s;
    }();
}.call(this), function(t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, !(!e.href || !o || "map" !== s.nodeName.toLowerCase()) && (!!(r = t("img[usemap=#" + o + "]")[0]) && n(r))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    var s = 0, o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
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
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        _focus: t.fn.focus,
        focus: function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var n = this;
                setTimeout(function() {
                    t(n).focus(), i && i.call(n);
                }, e);
            }) : this._focus.apply(this, arguments);
        },
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e;
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) for (var n, s, o = t(this[0]); o.length && o[0] !== document; ) {
                if (("absolute" === (n = o.css("position")) || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), 
                !isNaN(s) && 0 !== s)) return s;
                o = o.parent();
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, n) {
            return !!t.data(e, n[3]);
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")));
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"), s = isNaN(n);
            return (s || n >= 0) && i(e, !s);
        }
    }), t(function() {
        var e = document.body, i = e.appendChild(i = document.createElement("div"));
        i.offsetHeight, t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, 
        e.removeChild(i).style.display = "none";
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(i, n) {
        function s(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                s && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var o = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], r = n.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(i) {
            return i === e ? a["inner" + n].call(this) : this.each(function() {
                t(this).css(r, s(this, i) + "px");
            });
        }, t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                t(this).css(r, s(this, e, !0, i) + "px");
            });
        };
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
        };
    }(t.fn.removeData)), function() {
        var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        t.ui.ie = !!e.length, t.ui.ie6 = 6 === parseFloat(e[1], 10);
    }(), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([ i, n[s] ]);
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; s.length > n; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i);
            }
        },
        contains: t.contains,
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s);
        },
        isOverAxis: function(t, e, i) {
            return t > e && e + i > t;
        },
        isOver: function(e, i, n, s, o, r) {
            return t.ui.isOverAxis(e, n, o) && t.ui.isOverAxis(i, s, r);
        }
    }));
}(jQuery), function(t, e) {
    var i = 0, n = Array.prototype.slice, s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove");
        } catch (t) {}
        s(e);
    }, t.widget = function(i, n, s) {
        var o, r, a, l, h = i.split(".")[0];
        i = i.split(".")[1], o = h + "-" + i, s || (s = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o);
        }, t[h] = t[h] || {}, r = t[h][i], a = t[h][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i);
        }, t.extend(a, r, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (l = new n()).options = t.widget.extend({}, l.options), t.each(s, function(e, i) {
            t.isFunction(i) && (s[e] = function() {
                var t = function() {
                    return n.prototype[e].apply(this, arguments);
                }, s = function(t) {
                    return n.prototype[e].apply(this, t);
                };
                return function() {
                    var e, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = s, e = i.apply(this, arguments), this._super = n, 
                    this._superApply = o, e;
                };
            }());
        }), a.prototype = t.widget.extend(l, {
            widgetEventPrefix: r ? l.widgetEventPrefix : i
        }, s, {
            constructor: a,
            namespace: h,
            widgetName: i,
            widgetBaseClass: o,
            widgetFullName: o
        }), r ? (t.each(r._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto);
        }), delete r._childConstructors) : n._childConstructors.push(a), t.widget.bridge(i, a);
    }, t.widget.extend = function(i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (s in r[a]) o = r[a][s], 
        r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
        return i;
    }, t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r, l = n.call(arguments, 1), h = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [ r ].concat(l)) : r, a ? this.each(function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (h = n && n.jquery ? h.pushStack(n.get()) : n, 
                !1) : e) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'");
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this));
            }), h;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), 
            this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetName, this), 
            t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i) if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; s.length - 1 > r; r++) o[s[r]] = o[s[r]] || {}, 
                o = o[s[r]];
                if (i = s.pop(), n === e) return o[i] === e ? null : o[i];
                o[i] = n;
            } else {
                if (n === e) return this.options[i] === e ? null : this.options[i];
                a[i] = n;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
            this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(i, n, s) {
            var o, r = this;
            "boolean" != typeof i && (s = n, n = i, i = !1), s ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (s = n, 
            n = this.element, o = this.widget()), t.each(s, function(s, a) {
                function l() {
                    return i || !0 !== r.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : e;
                }
                "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                var h = s.match(/^(\w+)\s*(.*)$/), c = h[1] + r.eventNamespace, u = h[2];
                u ? o.delegate(u, c, l) : n.bind(c, l);
            });
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            t.unbind(e).undelegate(e);
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }
            var n = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [ i ].concat(n)) || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
            "number" == typeof (s = s || {}) && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && (t.effects.effect[a] || !1 !== t.uiBackCompat && t.effects[a]) ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i();
            });
        };
    }), !1 !== t.uiBackCompat && (t.Widget.prototype._getCreateOptions = function() {
        return t.metadata && t.metadata.get(this.element[0])[this.widgetName];
    });
}(jQuery), function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1;
    }), t.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this, s = 1 === i.which, o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                return !(s && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), 
                !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t);
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                i.preventDefault(), e = !0, !0));
            }
        },
        _mouseMove: function(e) {
            return !t.ui.ie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e);
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), !1;
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery), function(t, e) {
    function i(t, e, i) {
        return [ parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1) ];
    }
    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
    }
    t.ui = t.ui || {};
    var s, o = Math.max, r = Math.abs, a = Math.round, l = /left|center|right/, h = /top|center|bottom/, c = /[\+\-]\d+%?/, u = /^\w+/, d = /%$/, p = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (s !== e) return s;
            var i, n, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = o.children()[0];
            return t("body").append(o), i = r.offsetWidth, o.css("overflow", "scroll"), n = r.offsetWidth, 
            i === n && (n = o[0].clientWidth), o.remove(), s = i - n;
        },
        getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), n = e.isWindow ? "" : e.element.css("overflow-y"), s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return {
                width: s ? t.position.scrollbarWidth() : 0,
                height: o ? t.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(e) {
            var i = t(e || window), n = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: n,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
            };
        }
    }, t.fn.position = function(e) {
        if (!e || !e.of) return p.apply(this, arguments);
        e = t.extend({}, e);
        var s, d, f, g, m, v = t(e.of), y = t.position.getWithinInfo(e.within), b = t.position.getScrollInfo(y), _ = v[0], w = (e.collision || "flip").split(" "), x = {};
        return 9 === _.nodeType ? (d = v.width(), f = v.height(), g = {
            top: 0,
            left: 0
        }) : t.isWindow(_) ? (d = v.width(), f = v.height(), g = {
            top: v.scrollTop(),
            left: v.scrollLeft()
        }) : _.preventDefault ? (e.at = "left top", d = f = 0, g = {
            top: _.pageY,
            left: _.pageX
        }) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()), m = t.extend({}, g), 
        t.each([ "my", "at" ], function() {
            var t, i, n = (e[this] || "").split(" ");
            1 === n.length && (n = l.test(n[0]) ? n.concat([ "center" ]) : h.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
            n[0] = l.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), 
            i = c.exec(n[1]), x[this] = [ t ? t[0] : 0, i ? i[0] : 0 ], e[this] = [ u.exec(n[0])[0], u.exec(n[1])[0] ];
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2), 
        "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2), s = i(x.at, d, f), 
        m.left += s[0], m.top += s[1], this.each(function() {
            var l, h, c = t(this), u = c.outerWidth(), p = c.outerHeight(), _ = n(this, "marginLeft"), C = n(this, "marginTop"), k = u + _ + n(this, "marginRight") + b.width, D = p + C + n(this, "marginBottom") + b.height, T = t.extend({}, m), S = i(x.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? T.left -= u : "center" === e.my[0] && (T.left -= u / 2), "bottom" === e.my[1] ? T.top -= p : "center" === e.my[1] && (T.top -= p / 2), 
            T.left += S[0], T.top += S[1], t.support.offsetFractions || (T.left = a(T.left), 
            T.top = a(T.top)), l = {
                marginLeft: _,
                marginTop: C
            }, t.each([ "left", "top" ], function(i, n) {
                t.ui.position[w[i]] && t.ui.position[w[i]][n](T, {
                    targetWidth: d,
                    targetHeight: f,
                    elemWidth: u,
                    elemHeight: p,
                    collisionPosition: l,
                    collisionWidth: k,
                    collisionHeight: D,
                    offset: [ s[0] + S[0], s[1] + S[1] ],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c
                });
            }), t.fn.bgiframe && c.bgiframe(), e.using && (h = function(t) {
                var i = g.left - T.left, n = i + d - u, s = g.top - T.top, a = s + f - p, l = {
                    target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: f
                    },
                    element: {
                        element: c,
                        left: T.left,
                        top: T.top,
                        width: u,
                        height: p
                    },
                    horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                };
                u > d && d > r(i + n) && (l.horizontal = "center"), p > f && f > r(s + a) && (l.vertical = "middle"), 
                l.important = o(r(i), r(n)) > o(r(s), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l);
            }), c.offset(t.extend(T, {
                using: h
            }));
        });
    }, t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width, a = t.left - e.collisionPosition.marginLeft, l = s - a, h = a + e.collisionWidth - r - s;
                e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, 
                t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left);
            },
            top: function(t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, r = e.within.height, a = t.top - e.collisionPosition.marginTop, l = s - a, h = a + e.collisionHeight - r - s;
                e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, 
                t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top);
            }
        },
        flip: {
            left: function(t, e) {
                var i, n, s = e.within, o = s.offset.left + s.scrollLeft, a = s.width, l = s.isWindow ? s.scrollLeft : s.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - a - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(c) > i) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > r(n)) && (t.left += d + p + f);
            },
            top: function(t, e) {
                var i, n, s = e.within, o = s.offset.top + s.scrollTop, a = s.height, l = s.isWindow ? s.scrollTop : s.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - a - l, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                0 > c ? (n = t.top + d + p + f + e.collisionHeight - a - o, t.top + d + p + f > c && (0 > n || r(c) > n) && (t.top += d + p + f)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + d + p + f - l, 
                t.top + d + p + f > u && (i > 0 || u > r(i)) && (t.top += d + p + f));
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var e, i, n, s, o, r = document.getElementsByTagName("body")[0], a = document.createElement("div");
        e = document.createElement(r ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && t.extend(n, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in n) e.style[o] = n[o];
        e.appendChild(a), (i = r || document.documentElement).insertBefore(e, i.firstChild), 
        a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, 
        t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e);
    }(), !1 !== t.uiBackCompat && function(t) {
        var i = t.fn.position;
        t.fn.position = function(n) {
            if (!n || !n.offset) return i.call(this, n);
            var s = n.offset.split(" "), o = n.at.split(" ");
            return 1 === s.length && (s[1] = s[0]), /^\d/.test(s[0]) && (s[0] = "+" + s[0]), 
            /^\d/.test(s[1]) && (s[1] = "+" + s[1]), 1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], 
            o[0] = "center")), i.call(this, t.extend(n, {
                at: o[0] + s[0] + " " + o[1] + s[1],
                offset: e
            }));
        };
    }(jQuery);
}(jQuery), function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
            this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
            this._mouseInit();
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(e), 
            !!this.handle && (t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body");
            }), !0));
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), 
            this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
            i.containment && this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), 
            !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
        },
        _mouseDrag: function(e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp({}), !1;
                this.position = n.position;
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
        },
        _mouseStop: function(e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), 
            this.dropped && (i = this.dropped, this.dropped = !1);
            for (var n = this.element[0], s = !1; n && (n = n.parentNode); ) n == document && (s = !0);
            if (!s && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var o = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== o._trigger("stop", e) && o._clear();
                });
            } else !1 !== this._trigger("stop", e) && this._clear();
            return !1;
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
            this;
        },
        _getHandle: function(e) {
            var i = !this.options.handle || !t(this.options.handle, this.element).length;
            return t(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == e.target && (i = !0);
            }), i;
        },
        _createHelper: function(e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e ])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), 
            n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), 
            n;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [ "document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment); else {
                var i = t(e.containment), n = i[0];
                if (!n) return;
                i.offset();
                var s = "hidden" != t(n).css("overflow");
                this.containment = [ (parseInt(t(n).css("borderLeftWidth"), 10) || 0) + (parseInt(t(n).css("paddingLeft"), 10) || 0), (parseInt(t(n).css("borderTopWidth"), 10) || 0) + (parseInt(t(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(t(n).css("borderLeftWidth"), 10) || 0) - (parseInt(t(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(t(n).css("borderTopWidth"), 10) || 0) - (parseInt(t(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
                this.relative_container = i;
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" == e ? 1 : -1, s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            };
        },
        _generatePosition: function(e) {
            var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(n[0].tagName), o = e.pageX, r = e.pageY;
            if (this.originalPosition) {
                var a;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        a = [ this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top ];
                    } else a = this.containment;
                    e.pageX - this.offset.click.left < a[0] && (o = a[0] + this.offset.click.left), 
                    e.pageY - this.offset.click.top < a[1] && (r = a[1] + this.offset.click.top), e.pageX - this.offset.click.left > a[2] && (o = a[2] + this.offset.click.left), 
                    e.pageY - this.offset.click.top > a[3] && (r = a[3] + this.offset.click.top);
                }
                if (i.grid) {
                    var h = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                    r = a && (h - this.offset.click.top < a[1] || h - this.offset.click.top > a[3]) ? h - this.offset.click.top < a[1] ? h + i.grid[1] : h - i.grid[1] : h;
                    var c = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                    o = a && (c - this.offset.click.left < a[0] || c - this.offset.click.left > a[2]) ? c - this.offset.click.left < a[0] ? c + i.grid[0] : c - i.grid[0] : c;
                }
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1;
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [ i, n ]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), 
            t.Widget.prototype._trigger.call(this, e, i, n);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var n = t(this).data("draggable"), s = n.options, o = t.extend({}, i, {
                item: n.element
            });
            n.sortables = [], t(s.connectToSortable).each(function() {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o));
            });
        },
        stop: function(e, i) {
            var n = t(this).data("draggable"), s = t.extend({}, i, {
                item: n.element
            });
            t.each(n.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
                this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), 
                this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s));
            });
        },
        drag: function(e, i) {
            var n = t(this).data("draggable"), s = this;
            t.each(n.sortables, function() {
                var o = !1, r = this;
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
                this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, 
                t.each(n.sortables, function() {
                    return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
                    this.instance.offset.click = n.offset.click, this != r && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(r.instance.element[0], this.instance.element[0]) && (o = !1), 
                    o;
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), 
                this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0];
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), 
                this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, 
                this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, 
                this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, 
                n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, 
                this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, 
                this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), 
                this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, 
                this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
                n._trigger("fromSortable", e), n.dropped = !1);
            });
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"), i = t(this).data("draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor);
        },
        stop: function() {
            var e = t(this).data("draggable").options;
            e._cursor && t("body").css("cursor", e._cursor);
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var n = t(i.helper), s = t(this).data("draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity);
        },
        stop: function(e, i) {
            var n = t(this).data("draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity);
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("draggable");
            e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset());
        },
        drag: function(e) {
            var i = t(this).data("draggable"), n = i.options, s = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), 
            n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), 
            n.axis && "y" == n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), 
            !1 !== s && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e);
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("draggable"), i = e.options;
            e.snapElements = [], t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var i = t(this), n = i.offset();
                this != e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                });
            });
        },
        drag: function(e, i) {
            for (var n = t(this).data("draggable"), s = n.options, o = s.snapTolerance, r = i.offset.left, a = r + n.helperProportions.width, l = i.offset.top, h = l + n.helperProportions.height, c = n.snapElements.length - 1; c >= 0; c--) {
                var u = n.snapElements[c].left, d = u + n.snapElements[c].width, p = n.snapElements[c].top, f = p + n.snapElements[c].height;
                if (r > u - o && d + o > r && l > p - o && f + o > l || r > u - o && d + o > r && h > p - o && f + o > h || a > u - o && d + o > a && l > p - o && f + o > l || a > u - o && d + o > a && h > p - o && f + o > h) {
                    if ("inner" != s.snapMode) {
                        var g = o >= Math.abs(p - h), m = o >= Math.abs(f - l), v = o >= Math.abs(u - a), y = o >= Math.abs(d - r);
                        g && (i.position.top = n._convertPositionTo("relative", {
                            top: p - n.helperProportions.height,
                            left: 0
                        }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: u - n.helperProportions.width
                        }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - n.margins.left);
                    }
                    var b = g || m || v || y;
                    if ("outer" != s.snapMode) {
                        var g = o >= Math.abs(p - l), m = o >= Math.abs(f - h), v = o >= Math.abs(u - r), y = o >= Math.abs(d - a);
                        g && (i.position.top = n._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                            top: f - n.helperProportions.height,
                            left: 0
                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: u
                        }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: d - n.helperProportions.width
                        }).left - n.margins.left);
                    }
                    !n.snapElements[c].snapping && (g || m || v || y || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[c].item
                    })), n.snapElements[c].snapping = g || m || v || y || b;
                } else n.snapElements[c].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[c].item
                })), n.snapElements[c].snapping = !1;
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e = t(this).data("draggable").options, i = t.makeArray(t(e.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
            });
            if (i.length) {
                var n = parseInt(i[0].style.zIndex) || 0;
                t(i).each(function(t) {
                    this.style.zIndex = n + t;
                }), this[0].style.zIndex = n + i.length;
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var n = t(i.helper), s = t(this).data("draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex);
        },
        stop: function(e, i) {
            var n = t(this).data("draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex);
        }
    });
}(jQuery), function(t) {
    t.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var e = this.options, i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i);
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], 
            t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable");
        },
        _destroy: function() {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; e.length > i; i++) e[i] == this && e.splice(i, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i);
            }), t.Widget.prototype._setOption.apply(this, arguments);
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), 
            this._trigger("over", e, this.ui(i)));
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), 
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
            var s = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope == n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (s = !0, !1) : void 0;
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), 
            this.element));
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            };
        }
    }), t.ui.intersect = function(e, i, n) {
        if (!i.offset) return !1;
        var s = (e.positionAbs || e.position.absolute).left, o = s + e.helperProportions.width, r = (e.positionAbs || e.position.absolute).top, a = r + e.helperProportions.height, l = i.offset.left, h = l + i.proportions.width, c = i.offset.top, u = c + i.proportions.height;
        switch (n) {
          case "fit":
            return s >= l && h >= o && r >= c && u >= a;

          case "intersect":
            return s + e.helperProportions.width / 2 > l && h > o - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > c && u > a - e.helperProportions.height / 2;

          case "pointer":
            var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
            return t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);

          case "touch":
            return (r >= c && u >= r || a >= c && u >= a || c > r && a > u) && (s >= l && h >= s || o >= l && h >= o || l > s && o > h);

          default:
            return !1;
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var n = t.ui.ddmanager.droppables[e.options.scope] || [], s = i ? i.type : null, o = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            t: for (var r = 0; n.length > r; r++) if (!(n[r].options.disabled || e && !n[r].accept.call(n[r].element[0], e.currentItem || e.element))) {
                for (var a = 0; o.length > a; a++) if (o[a] == n[r].element[0]) {
                    n[r].proportions.height = 0;
                    continue t;
                }
                n[r].visible = "none" != n[r].element.css("display"), n[r].visible && ("mousedown" == s && n[r]._activate.call(n[r], i), 
                n[r].offset = n[r].element.offset(), n[r].proportions = {
                    width: n[r].element[0].offsetWidth,
                    height: n[r].element[0].offsetHeight
                });
            }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, 
                this.isover = 0, this._deactivate.call(this, i)));
            }), n;
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n = t.ui.intersect(e, this, this.options.tolerance), s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                    if (s) {
                        var o;
                        if (this.options.greedy) {
                            var r = this.options.scope, a = this.element.parents(":data(droppable)").filter(function() {
                                return t.data(this, "droppable").options.scope === r;
                            });
                            a.length && (o = t.data(a[0], "droppable"), o.greedyChild = "isover" == s ? 1 : 0);
                        }
                        o && "isover" == s && (o.isover = 0, o.isout = 1, o._out.call(o, i)), this[s] = 1, 
                        this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), 
                        o && "isout" == s && (o.isout = 0, o.isover = 1, o._over.call(o, i));
                    }
                }
            });
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        }
    };
}(jQuery), function(t) {
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var e = this, i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), 
            this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), 
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var n = this.handles.split(",");
                this.handles = {};
                for (var s = 0; n.length > s; s++) {
                    var o = t.trim(n[s]), r = t('<div class="ui-resizable-handle ' + ("ui-resizable-" + o) + '"></div>');
                    r.css({
                        zIndex: i.zIndex
                    }), "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, 
                    this.element.append(r);
                }
            }
            this._renderAxis = function(e) {
                e = e || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), 
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var n = t(this.handles[i], this.element), s = 0;
                        s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                        var o = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join("");
                        e.css(o, s), this._proportionallyResize();
                    }
                    t(this.handles[i]).length;
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), 
            this._handles.mouseover(function() {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se";
                }
            }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show());
            }).mouseleave(function() {
                i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide());
            })), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var e = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                }).insertAfter(i), i.remove();
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), 
            this;
        },
        _mouseCapture: function(e) {
            var i = !1;
            for (var n in this.handles) t(this.handles[n])[0] == e.target && (i = !0);
            return !this.options.disabled && i;
        },
        _mouseStart: function(i) {
            var n = this.options, s = this.element.position(), o = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }), this._renderProxy();
            var r = e(this.helper.css("left")), a = e(this.helper.css("top"));
            n.containment && (r += t(n.containment).scrollLeft() || 0, a += t(n.containment).scrollTop() || 0), 
            this.offset = this.helper.offset(), this.position = {
                left: r,
                top: a
            }, this.size = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalPosition = {
                left: r,
                top: a
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), 
            this._propagate("start", i), !0;
        },
        _mouseDrag: function(t) {
            var e = this.helper, i = (this.options, this.originalMousePosition), n = this.axis, s = t.pageX - i.left || 0, o = t.pageY - i.top || 0, r = this._change[n];
            if (!r) return !1;
            var a = r.apply(this, [ t, s, o ]);
            return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (a = this._updateRatio(a, t)), 
            a = this._respectSize(a, t), this._propagate("resize", t), e.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            this._updateCache(a), this._trigger("resize", t, this.ui()), !1;
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i = this.options, n = this;
            if (this._helper) {
                var s = this._proportionallyResizeElements, o = s.length && /textarea/i.test(s[0].nodeName), r = o && t.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height, a = o ? 0 : n.sizeDiff.width, l = {
                    width: n.helper.width() - a,
                    height: n.helper.height() - r
                }, h = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null, c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(l, {
                    top: c,
                    left: h
                })), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize();
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), 
            this._propagate("stop", e), this._helper && this.helper.remove(), !1;
        },
        _updateVirtualBoundaries: function(t) {
            var e, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth : 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight : 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, 
            n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), 
            s > r.minHeight && (r.minHeight = s), r.maxWidth > n && (r.maxWidth = n), r.maxHeight > o && (r.maxHeight = o)), 
            this._vBoundaries = r;
        },
        _updateCache: function(t) {
            this.options, this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), 
            i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), 
            i(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function(t) {
            var e = (this.options, this.position), n = this.size, s = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), 
            "sw" == s && (t.left = e.left + (n.width - t.width), t.top = null), "nw" == s && (t.top = e.top + (n.height - t.height), 
            t.left = e.left + (n.width - t.width)), t;
        },
        _respectSize: function(t, e) {
            var n = (this.helper, this._vBoundaries), s = (this._aspectRatio || e.shiftKey, 
            this.axis), o = i(t.width) && n.maxWidth && n.maxWidth < t.width, r = i(t.height) && n.maxHeight && n.maxHeight < t.height, a = i(t.width) && n.minWidth && n.minWidth > t.width, l = i(t.height) && n.minHeight && n.minHeight > t.height;
            a && (t.width = n.minWidth), l && (t.height = n.minHeight), o && (t.width = n.maxWidth), 
            r && (t.height = n.maxHeight);
            var h = this.originalPosition.left + this.originalSize.width, c = this.position.top + this.size.height, u = /sw|nw|w/.test(s), d = /nw|ne|n/.test(s);
            a && u && (t.left = h - n.minWidth), o && u && (t.left = h - n.maxWidth), l && d && (t.top = c - n.minHeight), 
            r && d && (t.top = c - n.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), 
            t;
        },
        _proportionallyResize: function() {
            if (this.options, this._proportionallyResizeElements.length) for (var e = this.helper || this.element, i = 0; this._proportionallyResizeElements.length > i; i++) {
                var n = this._proportionallyResizeElements[i];
                if (!this.borderDif) {
                    var s = [ n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth") ], o = [ n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft") ];
                    this.borderDif = t.map(s, function(t, e) {
                        return (parseInt(t, 10) || 0) + (parseInt(o[e], 10) || 0);
                    });
                }
                n.css({
                    height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                });
            }
        },
        _renderProxy: function() {
            var e = this.element, i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var n = t.ui.ie6 ? 1 : 0, s = t.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + s,
                    height: this.element.outerHeight() + s,
                    position: "absolute",
                    left: this.elementOffset.left - n + "px",
                    top: this.elementOffset.top - n + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection();
            } else this.helper = this.element;
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                };
            },
            w: function(t, e) {
                var i = (this.options, this.originalSize);
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                };
            },
            n: function(t, e, i) {
                var n = (this.options, this.originalSize);
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                };
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                };
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ e, i, n ]));
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ e, i, n ]));
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ e, i, n ]));
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ e, i, n ]));
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [ i, this.ui() ]), "resize" != e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("resizable").options, i = function(e) {
                t(e).each(function() {
                    var e = t(this);
                    e.data("resizable-alsoresize", {
                        width: parseInt(e.width(), 10),
                        height: parseInt(e.height(), 10),
                        left: parseInt(e.css("left"), 10),
                        top: parseInt(e.css("top"), 10)
                    });
                });
            };
            "object" != typeof e.alsoResize || e.alsoResize.parentNode ? i(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], 
            i(e.alsoResize)) : t.each(e.alsoResize, function(t) {
                i(t);
            });
        },
        resize: function(e, i) {
            var n = t(this).data("resizable"), s = n.options, o = n.originalSize, r = n.originalPosition, a = {
                height: n.size.height - o.height || 0,
                width: n.size.width - o.width || 0,
                top: n.position.top - r.top || 0,
                left: n.position.left - r.left || 0
            }, l = function(e, n) {
                t(e).each(function() {
                    var e = t(this), s = t(this).data("resizable-alsoresize"), o = {}, r = n && n.length ? n : e.parents(i.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                    t.each(r, function(t, e) {
                        var i = (s[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (o[e] = i || null);
                    }), e.css(o);
                });
            };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                l(t, e);
            });
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize");
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("resizable"), n = i.options, s = i._proportionallyResizeElements, o = s.length && /textarea/i.test(s[0].nodeName), r = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, a = o ? 0 : i.sizeDiff.width, l = {
                width: i.size.width - a,
                height: i.size.height - r
            }, h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e);
                }
            });
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i = t(this).data("resizable"), n = i.options, s = i.element, o = n.containment, r = o instanceof t ? o.get(0) : /parent/.test(o) ? s.parent().get(0) : o;
            if (r) if (i.containerElement = t(r), /document/.test(o) || o == document) i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }; else {
                var a = t(r), l = [];
                t([ "Top", "Right", "Left", "Bottom" ]).each(function(t, i) {
                    l[t] = e(a.css("padding" + i));
                }), i.containerOffset = a.offset(), i.containerPosition = a.position(), i.containerSize = {
                    height: a.innerHeight() - l[3],
                    width: a.innerWidth() - l[1]
                };
                var h = i.containerOffset, c = i.containerSize.height, u = i.containerSize.width, d = t.ui.hasScroll(r, "left") ? r.scrollWidth : u, p = t.ui.hasScroll(r) ? r.scrollHeight : c;
                i.parentData = {
                    element: r,
                    left: h.left,
                    top: h.top,
                    width: d,
                    height: p
                };
            }
        },
        resize: function(e) {
            var i = t(this).data("resizable"), n = i.options, s = (i.containerSize, i.containerOffset), o = (i.size, 
            i.position), r = i._aspectRatio || e.shiftKey, a = {
                top: 0,
                left: 0
            }, l = i.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (a = s), o.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - a.left), 
            r && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0), 
            o.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), 
            r && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0), 
            i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
            var h = Math.abs((i._helper, i.offset.left - a.left + i.sizeDiff.width)), c = Math.abs((i._helper ? i.offset.top - a.top : i.offset.top - s.top) + i.sizeDiff.height), u = i.containerElement.get(0) == i.element.parent().get(0), d = /relative|absolute/.test(i.containerElement.css("position"));
            u && d && (h -= i.parentData.left), h + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - h, 
            r && (i.size.height = i.size.width / i.aspectRatio)), c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, 
            r && (i.size.width = i.size.height * i.aspectRatio));
        },
        stop: function() {
            var e = t(this).data("resizable"), i = e.options, n = (e.position, e.containerOffset), s = e.containerPosition, o = e.containerElement, r = t(e.helper), a = r.offset(), l = r.outerWidth() - e.sizeDiff.width, h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            });
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("resizable"), i = e.options, n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), 
            e.ghost.appendTo(e.helper);
        },
        resize: function() {
            var e = t(this).data("resizable");
            e.options, e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            });
        },
        stop: function() {
            var e = t(this).data("resizable");
            e.options, e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function(e) {
            var i = t(this).data("resizable"), n = i.options, s = i.size, o = i.originalSize, r = i.originalPosition, a = i.axis;
            n._aspectRatio || e.shiftKey, n.grid = "number" == typeof n.grid ? [ n.grid, n.grid ] : n.grid;
            var l = Math.round((s.width - o.width) / (n.grid[0] || 1)) * (n.grid[0] || 1), h = Math.round((s.height - o.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + h) : /^(ne)$/.test(a) ? (i.size.width = o.width + l, 
            i.size.height = o.height + h, i.position.top = r.top - h) : /^(sw)$/.test(a) ? (i.size.width = o.width + l, 
            i.size.height = o.height + h, i.position.left = r.left - l) : (i.size.width = o.width + l, 
            i.size.height = o.height + h, i.position.top = r.top - h, i.position.left = r.left - l);
        }
    });
    var e = function(t) {
        return parseInt(t, 10) || 0;
    }, i = function(t) {
        return !isNaN(parseInt(t, 10));
    };
}(jQuery), function(t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.9.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var e = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var i;
            this.refresh = function() {
                (i = t(e.options.filter, e.element[0])).addClass("ui-selectee"), i.each(function() {
                    var e = t(this), i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), 
            this.helper = t("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), 
            this._mouseDestroy();
        },
        _mouseStart: function(e) {
            var i = this;
            if (this.opos = [ e.pageX, e.pageY ], !this.options.disabled) {
                var n = this.options;
                this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), 
                this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), 
                    n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }));
                }), t(e.target).parents().andSelf().each(function() {
                    var n = t.data(this, "selectable-item");
                    if (n) {
                        var s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected");
                        return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), 
                        n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                            selecting: n.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: n.element
                        }), !1;
                    }
                });
            }
        },
        _mouseDrag: function(e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var n = this.options, s = this.opos[0], o = this.opos[1], r = e.pageX, a = e.pageY;
                if (s > r) {
                    l = r;
                    r = s, s = l;
                }
                if (o > a) {
                    var l = a;
                    a = o, o = l;
                }
                return this.helper.css({
                    left: s,
                    top: o,
                    width: r - s,
                    height: a - o
                }), this.selectees.each(function() {
                    var l = t.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var h = !1;
                        "touch" == n.tolerance ? h = !(l.left > r || s > l.right || l.top > a || o > l.bottom) : "fit" == n.tolerance && (h = l.left > s && r > l.right && l.top > o && a > l.bottom), 
                        h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), 
                        l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, 
                        i._trigger("selecting", e, {
                            selecting: l.element
                        }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), 
                        l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), 
                        l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), 
                        i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))), l.selected && (e.metaKey || e.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), 
                        l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))));
                    }
                }), !1;
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, this.options, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, 
                i._trigger("unselected", e, {
                    unselected: n.element
                });
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, 
                n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                    selected: n.element
                });
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    });
}(jQuery), function(t) {
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
            this.floating = !!this.items.length && ("x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), 
            this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments);
        },
        _mouseCapture: function(e, i) {
            var n = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var s = null;
            if (t(e.target).parents().each(function() {
                return t.data(this, n.widgetName + "-item") == n ? (s = t(this), !1) : void 0;
            }), t.data(e.target, n.widgetName + "-item") == n && (s = t(e.target)), !s) return !1;
            if (this.options.handle && !i) {
                var o = !1;
                if (t(this.options.handle, s).find("*").andSelf().each(function() {
                    this == e.target && (o = !0);
                }), !o) return !1;
            }
            return this.currentItem = s, this._removeCurrentsFromItems(), !0;
        },
        _mouseStart: function(e, i, n) {
            var s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            s.containment && this._setContainment(), s.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), 
            t("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !n) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options, n = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), 
                this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), 
                e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), 
                !1 !== n && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e);
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var s = this.items.length - 1; s >= 0; s--) {
                var o = this.items[s], r = o.item[0], a = this._intersectsWithPointer(o);
                if (a && o.instance === this.currentContainer && r != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" != this.options.type || !t.contains(this.element[0], r))) {
                    if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(e, o), this._trigger("change", e, this._uiHash());
                    break;
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var n = this, s = this.placeholder.offset();
                    this.reverting = !0, t(this.helper).animate({
                        left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !n.length && e.key && n.push(e.key + "="), n.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), n;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height, h = this.offset.click.top, c = this.offset.click.left, u = n + h > a && l > n + h && e + c > o && r > e + c;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), n = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = i && n, o = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return !!s && (this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1));
        },
        _intersectsWithSides: function(e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && n || "left" == o && !n : s && ("down" == s && i || "up" == s && !i);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor == String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            var i = [], n = [], s = this._connectWith();
            if (s && e) for (l = s.length - 1; l >= 0; l--) for (var o = t(s[l]), r = o.length - 1; r >= 0; r--) {
                var a = t.data(o[r], this.widgetName);
                a && a != this && !a.options.disabled && n.push([ t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a ]);
            }
            n.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]);
            for (var l = n.length - 1; l >= 0; l--) n[l][0].each(function() {
                i.push(this);
            });
            return t(i);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] == t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i = this.items, n = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], s = this._connectWith();
            if (s && this.ready) for (l = s.length - 1; l >= 0; l--) for (var o = t(s[l]), r = o.length - 1; r >= 0; r--) {
                var a = t.data(o[r], this.widgetName);
                a && a != this && !a.options.disabled && (n.push([ t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
                    item: this.currentItem
                }) : t(a.options.items, a.element), a ]), this.containers.push(a));
            }
            for (var l = n.length - 1; l >= 0; l--) for (var h = n[l][1], c = n[l][0], r = 0, u = c.length; u > r; r++) {
                var d = t(c[r]);
                d.data(this.widgetName + "-item", h), i.push({
                    item: d,
                    instance: h,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                });
            }
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (s = this.items.length - 1; s >= 0; s--) {
                var i = this.items[s];
                if (i.instance == this.currentContainer || !this.currentContainer || i.item[0] == this.currentItem[0]) {
                    var n = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item;
                    e || (i.width = n.outerWidth(), i.height = n.outerHeight());
                    o = n.offset();
                    i.left = o.left, i.top = o.top;
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (var s = this.containers.length - 1; s >= 0; s--) {
                var o = this.containers[s].element.offset();
                this.containers[s].containerCache.left = o.left, this.containers[s].containerCache.top = o.top, 
                this.containers[s].containerCache.width = this.containers[s].element.outerWidth(), 
                this.containers[s].containerCache.height = this.containers[s].element.outerHeight();
            }
            return this;
        },
        _createPlaceholder: function(e) {
            var i = (e = e || this).options;
            if (!i.placeholder || i.placeholder.constructor == String) {
                var n = i.placeholder;
                i.placeholder = {
                    element: function() {
                        var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (i.style.visibility = "hidden"), i;
                    },
                    update: function(t, s) {
                        (!n || i.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                        s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                    }
                };
            }
            e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            i.placeholder.update(e, e.placeholder);
        },
        _contactContainers: function(e) {
            for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--) if (!t.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (i && t.contains(this.containers[s].element[0], i.element[0])) continue;
                i = this.containers[s], n = s;
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), 
            this.containers[s].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[n]._trigger("over", e, this._uiHash(this)), 
            this.containers[n].containerCache.over = 1; else {
                for (var o = 1e4, r = null, a = this.containers[n].floating ? "left" : "top", l = this.containers[n].floating ? "width" : "height", h = this.positionAbs[a] + this.offset.click[a], c = this.items.length - 1; c >= 0; c--) if (t.contains(this.containers[n].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                    var u = this.items[c].item.offset()[a], d = !1;
                    Math.abs(u - h) > Math.abs(u + this.items[c][l] - h) && (d = !0, u += this.items[c][l]), 
                    o > Math.abs(u - h) && (o = Math.abs(u - h), r = this.items[c], this.direction = d ? "up" : "down");
                }
                if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[n], r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[n].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[n]._trigger("change", e, this._uiHash(this)), 
                this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", e, this._uiHash(this)), 
                this.containers[n].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), 
            n[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), 
            ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), 
            n;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0], n = t(e.containment).offset(), s = "hidden" != t(i).css("overflow");
                this.containment = [ n.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ];
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" == e ? 1 : -1, s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            };
        },
        _generatePosition: function(e) {
            var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(n[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX, r = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), 
            i.grid)) {
                var a = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                r = this.containment && (a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3]) ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a;
                var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l;
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s == this.counter && this.refreshPositions(!n);
            });
        },
        _clear: function(e, i) {
            this.reverting = !1;
            var n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS) ("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            this.fromOutside && !i && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (i || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer))));
            for (s = this.containers.length - 1; s >= 0; s--) i || n.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this));
                };
            }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this));
                };
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (s = 0; n.length > s; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash());
                }
                return this.fromOutside = !1, !1;
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, 
            !i) {
                for (s = 0; n.length > s; s++) n[s].call(this, e);
                this._trigger("stop", e, this._uiHash());
            }
            return this.fromOutside = !1, !0;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    });
}(jQuery), function(t) {
    var e = 0, i = {}, n = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", 
    n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", 
    t.widget("ui.accordion", {
        version: "1.9.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e), n = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), 
            this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), 
            this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), 
            n.collapsible || !1 !== n.active && null != n.active || (n.active = 0), 0 > n.active && (n.active += this.headers.length), 
            this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), 
            this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), 
            this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(e) {
                var n = t(this), s = n.attr("id"), o = n.next(), r = o.attr("id");
                s || (s = i + "-header-" + e, n.attr("id", s)), r || (r = i + "-panel-" + e, o.attr("id", r)), 
                n.attr("aria-controls", r), o.attr("aria-labelledby", s);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                keydown: "_keydown"
            }), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._setupEvents(n.event);
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : t()
            };
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), 
            this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), 
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), 
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), 
            "icons" === t && (this._destroyIcons(), e && this._createIcons()), void ("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)));
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, n = this.headers.length, s = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                    o = this.headers[(s + 1) % n];
                    break;

                  case i.LEFT:
                  case i.UP:
                    o = this.headers[(s - 1 + n) % n];
                    break;

                  case i.SPACE:
                  case i.ENTER:
                    this._eventHandler(e);
                    break;

                  case i.HOME:
                    o = this.headers[0];
                    break;

                  case i.END:
                    o = this.headers[n - 1];
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault());
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus();
        },
        refresh: function() {
            var e, i, n = this.options.heightStyle, s = this.element.parent();
            "fill" === n ? (t.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), 
            e = s.height(), this.element.siblings(":visible").each(function() {
                var i = t(this), n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
            }), i && s.css("overflow", i), this.headers.each(function() {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                e = Math.max(e, t(this).css("height", "").height());
            }).height(e));
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function(e) {
            var i = {};
            e && (t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._on(this.headers, i));
        },
        _eventHandler: function(e) {
            var i = this.options, n = this.active, s = t(e.currentTarget), o = s[0] === n[0], r = o && i.collapsible, a = r ? t() : s.next(), l = {
                oldHeader: n,
                oldPanel: n.next(),
                newHeader: r ? t() : s,
                newPanel: a
            };
            e.preventDefault(), o && !i.collapsible || !1 === this._trigger("beforeActivate", e, l) || (i.active = !r && this.headers.index(s), 
            this.active = o ? t() : s, this._toggle(l), n.removeClass("ui-accordion-header-active ui-state-active"), 
            i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), 
            o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), 
            i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), 
            s.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function(e) {
            var i = e.newPanel, n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, 
            this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), 
            n.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _animate: function(t, e, s) {
            var o, r, a, l = this, h = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function() {
                l._toggleComplete(s);
            };
            return "number" == typeof d && (a = d), "string" == typeof d && (r = d), r = r || d.easing || u.easing, 
            a = a || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), 
            e.animate(i, {
                duration: a,
                easing: r,
                step: function(t, e) {
                    e.now = Math.round(t);
                }
            }), void t.hide().animate(n, {
                duration: a,
                easing: r,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? h += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - h), 
                    h = 0);
                }
            })) : e.animate(i, a, r, p) : t.animate(n, a, r, p);
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), 
            e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), !1 !== t.uiBackCompat && (function(t, e) {
        t.extend(e.options, {
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase();
            }
        });
        var i = e._create;
        e._create = function() {
            if (this.options.navigation) {
                var e = this, n = this.element.find(this.options.header), s = n.next(), o = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                o && n.add(s).each(function(i) {
                    return t.contains(this, o) ? (e.options.active = Math.floor(i / 2), !1) : void 0;
                });
            }
            i.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
        t.extend(e.options, {
            heightStyle: null,
            autoHeight: !0,
            clearStyle: !1,
            fillSpace: !1
        });
        var i = e._create, n = e._setOption;
        t.extend(e, {
            _create: function() {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), 
                i.call(this);
            },
            _setOption: function(t) {
                ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()), 
                n.apply(this, arguments);
            },
            _mergeHeightStyle: function() {
                var t = this.options;
                return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : void 0;
            }
        });
    }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
        t.extend(e.options.icons, {
            activeHeader: null,
            headerSelected: "ui-icon-triangle-1-s"
        });
        var i = e._createIcons;
        e._createIcons = function() {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), 
            i.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
        e.activate = e._activate;
        var i = e._findActive;
        e._findActive = function(t) {
            return -1 === t && (t = !1), t && "number" != typeof t && -1 === (t = this.headers.index(this.headers.filter(t))) && (t = !1), 
            i.call(this, t);
        };
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, 
    function(t, e) {
        t.extend(e.options, {
            change: null,
            changestart: null
        });
        var i = e._trigger;
        e._trigger = function(t, e, n) {
            var s = i.apply(this, arguments);
            return !!s && ("beforeActivate" === t ? s = i.call(this, "changestart", e, {
                oldHeader: n.oldHeader,
                oldContent: n.oldPanel,
                newHeader: n.newHeader,
                newContent: n.newPanel
            }) : "activate" === t && (s = i.call(this, "change", e, {
                oldHeader: n.oldHeader,
                oldContent: n.oldPanel,
                newHeader: n.newHeader,
                newContent: n.newPanel
            })), s);
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
        t.extend(e.options, {
            animate: null,
            animated: "slide"
        });
        var i = e._create;
        e._create = function() {
            var t = this.options;
            null === t.animate && (t.animate = !!t.animated && ("slide" === t.animated ? 300 : "bounceslide" === t.animated ? {
                duration: 200,
                down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                }
            } : t.animated)), i.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype));
}(jQuery), function(t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e, i, n;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void (i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                      case o.PAGE_UP:
                        e = !0, this._move("previousPage", s);
                        break;

                      case o.PAGE_DOWN:
                        e = !0, this._move("nextPage", s);
                        break;

                      case o.UP:
                        e = !0, this._keyEvent("previous", s);
                        break;

                      case o.DOWN:
                        e = !0, this._keyEvent("next", s);
                        break;

                      case o.ENTER:
                      case o.NUMPAD_ENTER:
                        this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                        break;

                      case o.TAB:
                        this.menu.active && this.menu.select(s);
                        break;

                      case o.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                        break;

                      default:
                        i = !0, this._searchTimeout(s);
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void n.preventDefault();
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                          case s.PAGE_UP:
                            this._move("previousPage", n);
                            break;

                          case s.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;

                          case s.UP:
                            this._keyEvent("previous", n);
                            break;

                          case s.DOWN:
                            this._keyEvent("next", n);
                        }
                    }
                },
                input: function(t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(t), void this._change(t));
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: t(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close();
                        });
                    });
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent);
                    });
                    var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value);
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"), n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, 
                    this._delay(function() {
                        this.previous = n, this.selectedItem = i;
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i;
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), t.fn.bgiframe && this.menu.element.bgiframe(), 
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]), 
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isMultiLine: function() {
            return !!this.element.is("textarea") || !this.element.is("input") && this.element.prop("isContentEditable");
        },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        s(t);
                    },
                    error: function() {
                        s([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: t
            }, this._response());
        },
        _response: function() {
            var t = this, i = ++e;
            return function(n) {
                i === e && t.__response(n), --t.pending || t.element.removeClass("ui-autocomplete-loading");
            };
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), 
            this._trigger("open")) : this._close();
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t);
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", t));
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            });
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e);
            });
        },
        _suggest: function(e) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, e), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) {
                n._renderItemData(e, i);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e);
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), 
            void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(e, i) {
            var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return n.test(t.label || t.value || t);
            });
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, 
            this.liveRegion.text(e));
        }
    });
}(jQuery), function(t) {
    var e, i, n, s, o = "ui-button ui-widget ui-state-default ui-corner-all", r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", a = function() {
        var e = t(this).find(":ui-button");
        setTimeout(function() {
            e.button("refresh");
        }, 1);
    }, l = function(e) {
        var i = e.name, n = e.form, s = t([]);
        return i && (s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
            return !this.form;
        })), s;
    };
    t.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, a), 
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), 
            this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var r = this, h = this.options, c = "checkbox" === this.type || "radio" === this.type, u = c ? "" : "ui-state-active", d = "ui-state-focus";
            null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), 
            this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                h.disabled || this === e && t(this).addClass("ui-state-active");
            }).bind("mouseleave" + this.eventNamespace, function() {
                h.disabled || t(this).removeClass(u);
            }).bind("click" + this.eventNamespace, function(t) {
                h.disabled && (t.preventDefault(), t.stopImmediatePropagation());
            }), this.element.bind("focus" + this.eventNamespace, function() {
                r.buttonElement.addClass(d);
            }).bind("blur" + this.eventNamespace, function() {
                r.buttonElement.removeClass(d);
            }), c && (this.element.bind("change" + this.eventNamespace, function() {
                s || r.refresh();
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                h.disabled || (s = !1, i = t.pageX, n = t.pageY);
            }).bind("mouseup" + this.eventNamespace, function(t) {
                h.disabled || (i !== t.pageX || n !== t.pageY) && (s = !0);
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return !h.disabled && !s && (t(this).toggleClass("ui-state-active"), void r.buttonElement.attr("aria-pressed", r.element[0].checked));
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (h.disabled || s) return !1;
                t(this).addClass("ui-state-active"), r.buttonElement.attr("aria-pressed", "true");
                var e = r.element[0];
                l(e).not(e).map(function() {
                    return t(this).button("widget")[0];
                }).removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return !h.disabled && (t(this).addClass("ui-state-active"), e = this, void r.document.one("mouseup", function() {
                    e = null;
                }));
            }).bind("mouseup" + this.eventNamespace, function() {
                return !h.disabled && void t(this).removeClass("ui-state-active");
            }).bind("keydown" + this.eventNamespace, function(e) {
                return !h.disabled && void ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"));
            }).bind("keyup" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active");
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click();
            })), this._setOption("disabled", h.disabled), this._resetButton();
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", 
            "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), 
            e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), 
            this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), 
            this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), 
            this.element.addClass("ui-helper-hidden-accessible"), (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), 
            this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element;
        },
        widget: function() {
            return this.buttonElement;
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " ui-state-hover ui-state-active  " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), 
            this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? void (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton();
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
        },
        _resetButton: function() {
            if ("input" !== this.type) {
                var e = this.buttonElement.removeClass(r), i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(), n = this.options.icons, s = n.primary && n.secondary, o = [];
                n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), 
                n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), 
                n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), 
                this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), 
                this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "));
            } else this.options.label && this.element.val(this.options.label);
        }
    }), t.widget("ui.buttonset", {
        version: "1.9.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset");
        },
        _init: function() {
            this.refresh();
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e);
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0];
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end();
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0];
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        }
    });
}(jQuery), function($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], 
        this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", 
        this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", 
        this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", 
        this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", 
        this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", 
        this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
    }
    function bindHover(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(e, "mouseout", function() {
            $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), 
            -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover");
        }).delegate(e, "mouseover", function() {
            $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
            $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), 
            -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function extendRemove(t, e) {
        $.extend(t, e);
        for (var i in e) (null == e[i] || e[i] == undefined) && (t[i] = e[i]);
        return t;
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.9.2"
        }
    });
    var PROP_NAME = "datepicker", dpuuid = new Date().getTime(), instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments);
        },
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(t) {
            return extendRemove(this._defaults, t || {}), this;
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (t) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst);
        },
        _newInst: function(t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            };
        },
        _connectDatepicker: function(t, e) {
            var i = $(t);
            e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), 
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(t, i, n) {
                e.settings[i] = n;
            }).bind("getData.datepicker", function(t, i) {
                return this._get(e, i);
            }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t));
        },
        _attachments: function(t, e) {
            var i = this._get(e, "appendText"), n = this._get(e, "isRTL");
            e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), 
            t[n ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
            var s = this._get(e, "showOn");
            if (("focus" == s || "both" == s) && t.focus(this._showDatepicker), "button" == s || "both" == s) {
                var o = this._get(e, "buttonText"), r = this._get(e, "buttonImage");
                e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: r,
                    alt: o,
                    title: o
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? o : $("<img/>").attr({
                    src: r,
                    alt: o,
                    title: o
                }))), t[n ? "before" : "after"](e.trigger), e.trigger.click(function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), 
                    $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1;
                });
            }
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e = new Date(2009, 11, 20), i = this._get(t, "dateFormat");
                if (i.match(/[DM]/)) {
                    var n = function(t) {
                        for (var e = 0, i = 0, n = 0; t.length > n; n++) t[n].length > e && (e = t[n].length, 
                        i = n);
                        return i;
                    };
                    e.setMonth(n(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(n(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay());
                }
                t.input.attr("size", this._formatDate(t, e).length);
            }
        },
        _inlineDatepicker: function(t, e) {
            var i = $(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function(t, i, n) {
                e.settings[i] = n;
            }).bind("getData.datepicker", function(t, i) {
                return this._get(e, i);
            }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), 
            this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(t, e, i, n, s) {
            var o = this._dialogInst;
            if (!o) {
                this.uuid += 1;
                var r = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px;"/>'), 
                this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), 
                (o = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, o);
            }
            if (extendRemove(o.settings, n || {}), e = e && e.constructor == Date ? this._formatDate(o, e) : e, 
            this._dialogInput.val(e), this._pos = s ? s.length ? s : [ s.pageX, s.pageY ] : null, 
            !this._pos) {
                var a = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [ a / 2 - 100 + h, l / 2 - 150 + c ];
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), 
            $.data(this._dialogInput[0], PROP_NAME, o), this;
        },
        _destroyDatepicker: function(t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                $.removeData(t, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), 
                e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && e.removeClass(this.markerClassName).empty();
            }
        },
        _enableDatepicker: function(t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                if ("input" == n) t.disabled = !1, i.trigger.filter("button").each(function() {
                    this.disabled = !1;
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                }); else if ("div" == n || "span" == n) {
                    var s = e.children("." + this._inlineClass);
                    s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                }
                this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e == t ? null : e;
                });
            }
        },
        _disableDatepicker: function(t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                if ("input" == n) t.disabled = !0, i.trigger.filter("button").each(function() {
                    this.disabled = !0;
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                }); else if ("div" == n || "span" == n) {
                    var s = e.children("." + this._inlineClass);
                    s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                }
                this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e == t ? null : e;
                }), this._disabledInputs[this._disabledInputs.length] = t;
            }
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] == t) return !0;
            return !1;
        },
        _getInst: function(t) {
            try {
                return $.data(t, PROP_NAME);
            } catch (t) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(t, e, i) {
            var n = this._getInst(t);
            if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : n ? "all" == e ? $.extend({}, n.settings) : this._get(n, e) : null;
            var s = e || {};
            if ("string" == typeof e && (s = {}, s[e] = i), n) {
                this._curInst == n && this._hideDatepicker();
                var o = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(n, "min"), a = this._getMinMaxDate(n, "max");
                extendRemove(n.settings, s), null !== r && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, r)), 
                null !== a && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, a)), 
                this._attachments($(t), n), this._autoSize(n), this._setDate(n, o), this._updateAlternate(n), 
                this._updateDatepicker(n);
            }
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        },
        _doKeyDown: function(t) {
            var e = $.datepicker._getInst(t.target), i = !0, n = e.dpDiv.is(".ui-datepicker-rtl");
            if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
              case 9:
                $.datepicker._hideDatepicker(), i = !1;
                break;

              case 13:
                var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                s[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, s[0]);
                var o = $.datepicker._get(e, "onSelect");
                if (o) {
                    var r = $.datepicker._formatDate(e);
                    o.apply(e.input ? e.input[0] : null, [ r, e ]);
                } else $.datepicker._hideDatepicker();
                return !1;

              case 27:
                $.datepicker._hideDatepicker();
                break;

              case 33:
                $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                break;

              case 34:
                $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                break;

              case 35:
                (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                break;

              case 36:
                (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                break;

              case 37:
                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? 1 : -1, "D"), 
                i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                break;

              case 38:
                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                break;

              case 39:
                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? -1 : 1, "D"), 
                i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                break;

              case 40:
                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                break;

              default:
                i = !1;
            } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
            i && (t.preventDefault(), t.stopPropagation());
        },
        _doKeyPress: function(t) {
            var e = $.datepicker._getInst(t.target);
            if ($.datepicker._get(e, "constrainInput")) {
                var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")), n = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                return t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1;
            }
        },
        _doKeyUp: function(t) {
            var e = $.datepicker._getInst(t.target);
            if (e.input.val() != e.lastVal) try {
                $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e), 
                $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e));
            } catch (t) {
                $.datepicker.log(t);
            }
            return !0;
        },
        _showDatepicker: function(t) {
            if ("input" != (t = t.target || t).nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), 
            !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                var e = $.datepicker._getInst(t);
                $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), 
                e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var i = $.datepicker._get(e, "beforeShow"), n = i ? i.apply(t, [ t, e ]) : {};
                if (!1 !== n) {
                    extendRemove(e.settings, n), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), 
                    $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), 
                    $.datepicker._pos[1] += t.offsetHeight);
                    var s = !1;
                    $(t).parents().each(function() {
                        return !(s |= "fixed" == $(this).css("position"));
                    });
                    var o = {
                        left: $.datepicker._pos[0],
                        top: $.datepicker._pos[1]
                    };
                    if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), $.datepicker._updateDatepicker(e), o = $.datepicker._checkOffset(e, o, s), e.dpDiv.css({
                        position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                        display: "none",
                        left: o.left + "px",
                        top: o.top + "px"
                    }), !e.inline) {
                        var r = $.datepicker._get(e, "showAnim"), a = $.datepicker._get(e, "duration"), l = function() {
                            var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                            if (t.length) {
                                var i = $.datepicker._getBorders(e.dpDiv);
                                t.css({
                                    left: -i[0],
                                    top: -i[1],
                                    width: e.dpDiv.outerWidth(),
                                    height: e.dpDiv.outerHeight()
                                });
                            }
                        };
                        e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[r] || $.effects[r]) ? e.dpDiv.show(r, $.datepicker._get(e, "showOptions"), a, l) : e.dpDiv[r || "show"](r ? a : null, l), 
                        r && a || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), 
                        $.datepicker._curInst = e;
                    }
                }
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4;
            var e = $.datepicker._getBorders(t.dpDiv);
            instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i = t.dpDiv.find("iframe.ui-datepicker-cover");
            i.length && i.css({
                left: -e[0],
                top: -e[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var n = this._getNumberOfMonths(t), s = n[1];
            if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), 
            t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), 
            t.yearshtml) {
                var o = t.yearshtml;
                setTimeout(function() {
                    o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), 
                    o = t.yearshtml = null;
                }, 0);
            }
        },
        _getBorders: function(t) {
            var e = function(t) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[t] || t;
            };
            return [ parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width"))) ];
        },
        _checkOffset: function(t, e, i) {
            var n = t.dpDiv.outerWidth(), s = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, r = t.input ? t.input.outerHeight() : 0, a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()), l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? n - o : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, 
            e.top -= i && e.top == t.input.offset().top + r ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0), 
            e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + r) : 0), e;
        },
        _findPos: function(t) {
            for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t)); ) t = t[i ? "previousSibling" : "nextSibling"];
            var n = $(t).offset();
            return [ n.left, n.top ];
        },
        _hideDatepicker: function(t) {
            var e = this._curInst;
            if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                var i = this._get(e, "showAnim"), n = this._get(e, "duration"), s = function() {
                    $.datepicker._tidyDialog(e);
                };
                $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), n, s) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s), 
                i || s(), this._datepickerShowing = !1;
                var o = this._get(e, "onClose");
                o && o.apply(e.input ? e.input[0] : null, [ e.input ? e.input.val() : "", e ]), 
                this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1;
            }
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(t) {
            if ($.datepicker._curInst) {
                var e = $(t.target), i = $.datepicker._getInst(e[0]);
                (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(t, e, i) {
            var n = $(t), s = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), 
            this._updateDatepicker(s));
        },
        _gotoToday: function(t) {
            var e = $(t), i = this._getInst(e[0]);
            if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, 
            i.drawYear = i.selectedYear = i.currentYear; else {
                var n = new Date();
                i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear();
            }
            this._notifyChange(i), this._adjustDate(e);
        },
        _selectMonthYear: function(t, e, i) {
            var n = $(t), s = this._getInst(n[0]);
            s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), 
            this._notifyChange(s), this._adjustDate(n);
        },
        _selectDay: function(t, e, i, n) {
            var s = $(t);
            if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                var o = this._getInst(s[0]);
                o.selectedDay = o.currentDay = $("a", n).html(), o.selectedMonth = o.currentMonth = e, 
                o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear));
            }
        },
        _clearDate: function(t) {
            var e = $(t);
            this._getInst(e[0]), this._selectDate(e, "");
        },
        _selectDate: function(t, e) {
            var i = $(t), n = this._getInst(i[0]);
            e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n);
            var s = this._get(n, "onSelect");
            s ? s.apply(n.input ? n.input[0] : null, [ e, n ]) : n.input && n.input.trigger("change"), 
            n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], 
            "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(t) {
            var e = this._get(t, "altField");
            if (e) {
                var i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), s = this.formatDate(i, n, this._getFormatConfig(t));
                $(e).each(function() {
                    $(this).val(s);
                });
            }
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [ e > 0 && 6 > e, "" ];
        },
        iso8601Week: function(t) {
            var e = new Date(t.getTime());
            e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var i = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1;
        },
        parseDate: function(t, e, i) {
            if (null == t || null == e) throw "Invalid arguments";
            if ("" == (e = "object" == typeof e ? "" + e : e + "")) return null;
            var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            n = "string" != typeof n ? n : new Date().getFullYear() % 100 + parseInt(n, 10);
            for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, h = -1, c = -1, u = -1, d = !1, p = function(e) {
                var i = t.length > y + 1 && t.charAt(y + 1) == e;
                return i && y++, i;
            }, f = function(t) {
                var i = p(t), n = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2, s = RegExp("^\\d{1," + n + "}"), o = e.substring(v).match(s);
                if (!o) throw "Missing number at position " + v;
                return v += o[0].length, parseInt(o[0], 10);
            }, g = function(t, i, n) {
                var s = $.map(p(t) ? n : i, function(t, e) {
                    return [ [ e, t ] ];
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length);
                }), o = -1;
                if ($.each(s, function(t, i) {
                    var n = i[1];
                    return e.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (o = i[0], v += n.length, 
                    !1) : undefined;
                }), -1 != o) return o + 1;
                throw "Unknown name at position " + v;
            }, m = function() {
                if (e.charAt(v) != t.charAt(y)) throw "Unexpected literal at position " + v;
                v++;
            }, v = 0, y = 0; t.length > y; y++) if (d) "'" != t.charAt(y) || p("'") ? m() : d = !1; else switch (t.charAt(y)) {
              case "d":
                c = f("d");
                break;

              case "D":
                g("D", s, o);
                break;

              case "o":
                u = f("o");
                break;

              case "m":
                h = f("m");
                break;

              case "M":
                h = g("M", r, a);
                break;

              case "y":
                l = f("y");
                break;

              case "@":
                l = (w = new Date(f("@"))).getFullYear(), h = w.getMonth() + 1, c = w.getDate();
                break;

              case "!":
                l = (w = new Date((f("!") - this._ticksTo1970) / 1e4)).getFullYear(), h = w.getMonth() + 1, 
                c = w.getDate();
                break;

              case "'":
                p("'") ? m() : d = !0;
                break;

              default:
                m();
            }
            if (e.length > v) {
                var b = e.substr(v);
                if (!/^\s+/.test(b)) throw "Extra/unparsed characters found in date: " + b;
            }
            if (-1 == l ? l = new Date().getFullYear() : 100 > l && (l += new Date().getFullYear() - new Date().getFullYear() % 100 + (n >= l ? 0 : -100)), 
            u > -1) for (h = 1, c = u; ;) {
                var _ = this._getDaysInMonth(l, h - 1);
                if (_ >= c) break;
                h++, c -= _;
            }
            var w = this._daylightSavingAdjust(new Date(l, h - 1, c));
            if (w.getFullYear() != l || w.getMonth() + 1 != h || w.getDate() != c) throw "Invalid date";
            return w;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, s = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, a = function(e) {
                var i = t.length > d + 1 && t.charAt(d + 1) == e;
                return i && d++, i;
            }, l = function(t, e, i) {
                var n = "" + e;
                if (a(t)) for (;i > n.length; ) n = "0" + n;
                return n;
            }, h = function(t, e, i, n) {
                return a(t) ? n[e] : i[e];
            }, c = "", u = !1;
            if (e) for (var d = 0; t.length > d; d++) if (u) "'" != t.charAt(d) || a("'") ? c += t.charAt(d) : u = !1; else switch (t.charAt(d)) {
              case "d":
                c += l("d", e.getDate(), 2);
                break;

              case "D":
                c += h("D", e.getDay(), n, s);
                break;

              case "o":
                c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                c += l("m", e.getMonth() + 1, 2);
                break;

              case "M":
                c += h("M", e.getMonth(), o, r);
                break;

              case "y":
                c += a("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                break;

              case "@":
                c += e.getTime();
                break;

              case "!":
                c += 1e4 * e.getTime() + this._ticksTo1970;
                break;

              case "'":
                a("'") ? c += "'" : u = !0;
                break;

              default:
                c += t.charAt(d);
            }
            return c;
        },
        _possibleChars: function(t) {
            for (var e = "", i = !1, n = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) == e;
                return i && s++, i;
            }, s = 0; t.length > s; s++) if (i) "'" != t.charAt(s) || n("'") ? e += t.charAt(s) : i = !1; else switch (t.charAt(s)) {
              case "d":
              case "m":
              case "y":
              case "@":
                e += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                n("'") ? e += "'" : i = !0;
                break;

              default:
                e += t.charAt(s);
            }
            return e;
        },
        _get: function(t, e) {
            return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() != t.lastVal) {
                var i, n, s = this._get(t, "dateFormat"), o = t.lastVal = t.input ? t.input.val() : null;
                i = n = this._getDefaultDate(t);
                var r = this._getFormatConfig(t);
                try {
                    i = this.parseDate(s, o, r) || n;
                } catch (t) {
                    this.log(t), o = e ? "" : o;
                }
                t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), 
                t.currentDay = o ? i.getDate() : 0, t.currentMonth = o ? i.getMonth() : 0, t.currentYear = o ? i.getFullYear() : 0, 
                this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        },
        _determineDate: function(t, e, i) {
            var n = null == e || "" === e ? i : "string" == typeof e ? function(e) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t));
                } catch (t) {}
                for (var i = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date(), n = i.getFullYear(), s = i.getMonth(), o = i.getDate(), r = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = r.exec(e); a; ) {
                    switch (a[2] || "d") {
                      case "d":
                      case "D":
                        o += parseInt(a[1], 10);
                        break;

                      case "w":
                      case "W":
                        o += 7 * parseInt(a[1], 10);
                        break;

                      case "m":
                      case "M":
                        s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(n, s));
                        break;

                      case "y":
                      case "Y":
                        n += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(n, s));
                    }
                    a = r.exec(e);
                }
                return new Date(n, s, o);
            }(e) : "number" == typeof e ? isNaN(e) ? i : function(t) {
                var e = new Date();
                return e.setDate(e.getDate() + t), e;
            }(e) : new Date(e.getTime());
            return (n = n && "Invalid Date" == "" + n ? i : n) && (n.setHours(0), n.setMinutes(0), 
            n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n);
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
        },
        _setDate: function(t, e, i) {
            var n = !e, s = t.selectedMonth, o = t.selectedYear, r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), 
            t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s == t.selectedMonth && o == t.selectedYear || i || this._notifyChange(t), 
            this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
        },
        _attachHandlers: function(t) {
            var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M");
                    },
                    next: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M");
                    },
                    hide: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
                    },
                    today: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i);
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), 
                        !1;
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), 
                        !1;
                    }
                };
                $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(t) {
            var e = new Date();
            e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
            var i = this._get(t, "isRTL"), n = this._get(t, "showButtonPanel"), s = this._get(t, "hideIfNoPrevNext"), o = this._get(t, "navigationAsDateFormat"), r = this._getNumberOfMonths(t), a = this._get(t, "showCurrentAtPos"), l = this._get(t, "stepMonths"), h = 1 != r[0] || 1 != r[1], c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), u = this._getMinMaxDate(t, "min"), d = this._getMinMaxDate(t, "max"), p = t.drawMonth - a, f = t.drawYear;
            if (0 > p && (p += 12, f--), d) {
                var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - r[0] * r[1] + 1, d.getDate()));
                for (g = u && u > g ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g; ) 0 > --p && (p = 11, 
                f--);
            }
            t.drawMonth = p, t.drawYear = f;
            var m = this._get(t, "prevText");
            m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
            var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>", y = this._get(t, "nextText");
            y = o ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : y;
            var b = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>", _ = this._get(t, "currentText"), w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
            _ = o ? this.formatDate(_, w, this._getFormatConfig(t)) : _;
            var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>", C = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + _ + "</button>" : "") + (i ? "" : x) + "</div>" : "", k = parseInt(this._get(t, "firstDay"), 10);
            k = isNaN(k) ? 0 : k;
            var D = this._get(t, "showWeek"), T = this._get(t, "dayNames");
            this._get(t, "dayNamesShort");
            var S = this._get(t, "dayNamesMin"), E = this._get(t, "monthNames"), A = this._get(t, "monthNamesShort"), I = this._get(t, "beforeShowDay"), N = this._get(t, "showOtherMonths"), P = this._get(t, "selectOtherMonths");
            this._get(t, "calculateWeek") || this.iso8601Week;
            for (var M = this._getDefaultDate(t), H = "", O = 0; r[0] > O; O++) {
                var z = "";
                this.maxRows = 4;
                for (var W = 0; r[1] > W; W++) {
                    var j = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)), L = " ui-corner-all", F = "";
                    if (h) {
                        if (F += '<div class="ui-datepicker-group', r[1] > 1) switch (W) {
                          case 0:
                            F += " ui-datepicker-group-first", L = " ui-corner-" + (i ? "right" : "left");
                            break;

                          case r[1] - 1:
                            F += " ui-datepicker-group-last", L = " ui-corner-" + (i ? "left" : "right");
                            break;

                          default:
                            F += " ui-datepicker-group-middle", L = "";
                        }
                        F += '">';
                    }
                    F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + L + '">' + (/all|left/.test(L) && 0 == O ? i ? b : v : "") + (/all|right/.test(L) && 0 == O ? i ? v : b : "") + this._generateMonthYearHeader(t, p, f, u, d, O > 0 || W > 0, E, A) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    for (var R = D ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", q = 0; 7 > q; q++) {
                        var B = (q + k) % 7;
                        R += "<th" + ((q + k + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + T[B] + '">' + S[B] + "</span></th>";
                    }
                    F += R + "</tr></thead><tbody>";
                    var Y = this._getDaysInMonth(f, p);
                    f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, Y));
                    var U = (this._getFirstDayOfMonth(f, p) - k + 7) % 7, X = Math.ceil((U + Y) / 7), Q = h && this.maxRows > X ? this.maxRows : X;
                    this.maxRows = Q;
                    for (var V = this._daylightSavingAdjust(new Date(f, p, 1 - U)), K = 0; Q > K; K++) {
                        F += "<tr>";
                        for (var G = D ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(V) + "</td>" : "", q = 0; 7 > q; q++) {
                            var Z = I ? I.apply(t.input ? t.input[0] : null, [ V ]) : [ !0, "" ], J = V.getMonth() != p, tt = J && !P || !Z[0] || u && u > V || d && V > d;
                            G += '<td class="' + ((q + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (J ? " ui-datepicker-other-month" : "") + (V.getTime() == j.getTime() && p == t.selectedMonth && t._keyEvent || M.getTime() == V.getTime() && M.getTime() == j.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (J && !N ? "" : " " + Z[1] + (V.getTime() == c.getTime() ? " " + this._currentClass : "") + (V.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (J && !N || !Z[2] ? "" : ' title="' + Z[2] + '"') + (tt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + V.getMonth() + '" data-year="' + V.getFullYear() + '"') + ">" + (J && !N ? "&#xa0;" : tt ? '<span class="ui-state-default">' + V.getDate() + "</span>" : '<a class="ui-state-default' + (V.getTime() == e.getTime() ? " ui-state-highlight" : "") + (V.getTime() == c.getTime() ? " ui-state-active" : "") + (J ? " ui-priority-secondary" : "") + '" href="#">' + V.getDate() + "</a>") + "</td>", 
                            V.setDate(V.getDate() + 1), V = this._daylightSavingAdjust(V);
                        }
                        F += G + "</tr>";
                    }
                    ++p > 11 && (p = 0, f++), z += F += "</tbody></table>" + (h ? "</div>" + (r[0] > 0 && W == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                }
                H += z;
            }
            return H += C + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), 
            t._keyEvent = !1, H;
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
            var l = this._get(t, "changeMonth"), h = this._get(t, "changeYear"), c = this._get(t, "showMonthAfterYear"), u = '<div class="ui-datepicker-title">', d = "";
            if (o || !l) d += '<span class="ui-datepicker-month">' + r[e] + "</span>"; else {
                var p = n && n.getFullYear() == i, f = s && s.getFullYear() == i;
                d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var g = 0; 12 > g; g++) (!p || g >= n.getMonth()) && (!f || s.getMonth() >= g) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                d += "</select>";
            }
            if (c || (u += d + (!o && l && h ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", 
            o || !h) u += '<span class="ui-datepicker-year">' + i + "</span>"; else {
                var m = this._get(t, "yearRange").split(":"), v = new Date().getFullYear(), y = function(t) {
                    var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? v : e;
                }, b = y(m[0]), _ = Math.max(b, y(m[1] || ""));
                for (b = n ? Math.max(b, n.getFullYear()) : b, _ = s ? Math.min(_, s.getFullYear()) : _, 
                t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; _ >= b; b++) t.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
                t.yearshtml += "</select>", u += t.yearshtml, t.yearshtml = null;
            }
            return u += this._get(t, "yearSuffix"), c && (u += (!o && l && h ? "" : "&#xa0;") + d), 
            u += "</div>";
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.drawYear + ("Y" == i ? e : 0), s = t.drawMonth + ("M" == i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? e : 0), r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), 
            ("M" == i || "Y" == i) && this._notifyChange(t);
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), s = i && i > e ? i : e;
            return s = n && s > n ? n : s;
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [ t.selectedYear, t.selectedMonth + 1, t ]);
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [ 1, 1 ] : "number" == typeof e ? [ 1, e ] : e;
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), 
            this._isInRange(t, o);
        },
        _isInRange: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max");
            return (!i || e.getTime() >= i.getTime()) && (!n || e.getTime() <= n.getTime());
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), 
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            };
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t));
        }
    }), $.fn.datepicker = function(t) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), 
        $.datepicker.initialized = !0);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [ this[0] ].concat(e)) : this.each(function() {
            "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [ this ].concat(e)) : $.datepicker._attachDatepicker(this, t);
        }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [ this[0] ].concat(e));
    }, $.datepicker = new Datepicker(), $.datepicker.initialized = !1, $.datepicker.uuid = new Date().getTime(), 
    $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $;
}(jQuery), function(t, e) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ", n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, s = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    t.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i);
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), 
            this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var n, s, o, r, a, l = this, h = this.options, c = h.title || "&#160;";
            n = (this.uiDialog = t("<div>")).addClass(i + h.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: h.zIndex
            }).attr("tabIndex", -1).keydown(function(e) {
                h.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (l.close(e), 
                e.preventDefault());
            }).mousedown(function(t) {
                l.moveToTop(!1, t);
            }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(n), 
            s = (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                n.focus();
            }).prependTo(n), o = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(t) {
                t.preventDefault(), l.close(t);
            }).appendTo(s), (this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(h.closeText).appendTo(o), 
            r = t("<span>").uniqueId().addClass("ui-dialog-title").html(c).prependTo(s), a = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), 
            (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(a), n.attr({
                role: "dialog",
                "aria-labelledby": r.attr("id")
            }), s.find("*").add(s).disableSelection(), this._hoverable(o), this._focusable(o), 
            h.draggable && t.fn.draggable && this._makeDraggable(), h.resizable && t.fn.resizable && this._makeResizable(), 
            this._createButtons(h.buttons), this._isOpen = !1, t.fn.bgiframe && n.bgiframe(), 
            this._on(n, {
                keydown: function(i) {
                    if (h.modal && i.keyCode === t.ui.keyCode.TAB) {
                        var s = t(":tabbable", n), o = s.filter(":first"), r = s.filter(":last");
                        return i.target !== r[0] || i.shiftKey ? i.target === o[0] && i.shiftKey ? (r.focus(1), 
                        !1) : e : (o.focus(1), !1);
                    }
                }
            });
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _destroy: function() {
            var t, e = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        close: function(e) {
            var i, n, s = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", e)) return this._isOpen = !1, 
            this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                s._trigger("close", e);
            }) : (this.uiDialog.hide(), this._trigger("close", e)), t.ui.dialog.overlay.resize(), 
            this.options.modal && (i = 0, t(".ui-dialog").each(function() {
                this !== s.uiDialog[0] && (n = t(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)));
            }), t.ui.dialog.maxZ = i), this;
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function(e, i) {
            var n, s = this.options;
            return s.modal && !e || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = s.zIndex), 
            this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, 
            this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), n = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(n), 
            this._trigger("focus", i), this);
        },
        open: function() {
            if (!this._isOpen) {
                var e, i = this.options, n = this.uiDialog;
                return this._size(), this._position(i.position), n.show(i.show), this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null, 
                this.moveToTop(!0), (e = this.element.find(":tabbable")).length || (e = this.uiDialogButtonPane.find(":tabbable")).length || (e = n), 
                e.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this;
            }
        },
        _createButtons: function(e) {
            var i = this, n = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof e && null !== e && t.each(e, function() {
                return !(n = !0);
            }), n ? (t.each(e, function(e, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: e
                } : n, n = t.extend({
                    type: "button"
                }, n), o = n.click, n.click = function() {
                    o.apply(i.element[0], arguments);
                }, s = t("<button></button>", n).appendTo(i.uiButtonSet), t.fn.button && s.button();
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons");
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                };
            }
            var i = this, n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    t(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", n, e(s));
                },
                drag: function(t, n) {
                    i._trigger("drag", t, e(n));
                },
                stop: function(s, o) {
                    n.position = [ o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop() ], 
                    t(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", s, e(o)), t.ui.dialog.overlay.resize();
                }
            });
        },
        _makeResizable: function(i) {
            function n(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                };
            }
            i = i === e ? this.options.resizable : i;
            var s = this, o = this.options, r = this.uiDialog.css("position"), a = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: o.maxWidth,
                maxHeight: o.maxHeight,
                minWidth: o.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(e, i) {
                    t(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", e, n(i));
                },
                resize: function(t, e) {
                    s._trigger("resize", t, n(e));
                },
                stop: function(e, i) {
                    t(this).removeClass("ui-dialog-resizing"), o.height = t(this).height(), o.width = t(this).width(), 
                    s._trigger("resizeStop", e, n(i)), t.ui.dialog.overlay.resize();
                }
            }).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
        },
        _position: function(e) {
            var i, n = [], s = [ 0, 0 ];
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (1 === (n = e.split ? e.split(" ") : [ e[0], e[1] ]).length && (n[1] = n[0]), 
            t.each([ "left", "top" ], function(t, e) {
                +n[t] === n[t] && (s[t] = n[t], n[t] = e);
            }), e = {
                my: n[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + n[1] + (0 > s[1] ? s[1] : "+" + s[1]),
                at: n.join(" ")
            }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, 
            (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.position(e), 
            i || this.uiDialog.hide();
        },
        _setOptions: function(e) {
            var i = this, o = {}, r = !1;
            t.each(e, function(t, e) {
                i._setOption(t, e), t in n && (r = !0), t in s && (o[t] = e);
            }), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o);
        },
        _setOption: function(e, n) {
            var s, o, r = this.uiDialog;
            switch (e) {
              case "buttons":
                this._createButtons(n);
                break;

              case "closeText":
                this.uiDialogTitlebarCloseText.text("" + n);
                break;

              case "dialogClass":
                r.removeClass(this.options.dialogClass).addClass(i + n);
                break;

              case "disabled":
                n ? r.addClass("ui-dialog-disabled") : r.removeClass("ui-dialog-disabled");
                break;

              case "draggable":
                (s = r.is(":data(draggable)")) && !n && r.draggable("destroy"), !s && n && this._makeDraggable();
                break;

              case "position":
                this._position(n);
                break;

              case "resizable":
                (o = r.is(":data(resizable)")) && !n && r.resizable("destroy"), o && "string" == typeof n && r.resizable("option", "handles", n), 
                o || !1 === n || this._makeResizable(n);
                break;

              case "title":
                t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"));
            }
            this._super(e, n);
        },
        _size: function() {
            var e, i, n, s = this.options, o = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), i = Math.max(0, s.minHeight - e), "auto" === s.height ? t.support.minHeight ? this.element.css({
                minHeight: i,
                height: "auto"
            }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), o || this.uiDialog.hide(), 
            this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - e, 0)), 
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        }
    }), t.extend(t.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(t) {
            var e = t.attr("id");
            return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e;
        },
        overlay: function(e) {
            this.$el = t.ui.dialog.overlay.create(e);
        }
    }), t.extend(t.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(t) {
            return t + ".dialog-overlay";
        }).join(" "),
        create: function(i) {
            0 === this.instances.length && (setTimeout(function() {
                t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function(i) {
                    return !(t(i.target).zIndex() < t.ui.dialog.overlay.maxZ) && e;
                });
            }, 1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
            var n = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
            return t(document).bind("keydown.dialog-overlay", function(e) {
                var s = t.ui.dialog.overlay.instances;
                0 !== s.length && s[s.length - 1] === n && i.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (i.close(e), 
                e.preventDefault());
            }), n.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), t.fn.bgiframe && n.bgiframe(), this.instances.push(n), n;
        },
        destroy: function(e) {
            var i = t.inArray(e, this.instances), n = 0;
            -1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([ document, window ]).unbind(".dialog-overlay"), 
            e.height(0).width(0).remove(), t.each(this.instances, function() {
                n = Math.max(n, this.css("z-index"));
            }), this.maxZ = n;
        },
        height: function() {
            var e, i;
            return t.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), 
            i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), 
            i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px";
        },
        width: function() {
            var e, i;
            return t.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), 
            i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px";
        },
        resize: function() {
            var e = t([]);
            t.each(t.ui.dialog.overlay.instances, function() {
                e = e.add(this);
            }), e.css({
                width: 0,
                height: 0
            }).css({
                width: t.ui.dialog.overlay.width(),
                height: t.ui.dialog.overlay.height()
            });
        }
    }), t.extend(t.ui.dialog.overlay.prototype, {
        destroy: function() {
            t.ui.dialog.overlay.destroy(this.$el);
        }
    });
}(jQuery), function(t) {
    var e = !1;
    t.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault();
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault();
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault();
                },
                "click .ui-menu-item:has(a)": function(i) {
                    var n = t(i.target).closest(".ui-menu-item");
                    !e && n.not(".ui-state-disabled").length && (e = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i);
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(i) {
                    t(i.target).closest(".ui-menu").length || this.collapseAll(i), e = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
            var n, s, o, r, a, l = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;

              case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;

              case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;

              case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;

              case t.ui.keyCode.UP:
                this.previous(e);
                break;

              case t.ui.keyCode.DOWN:
                this.next(e);
                break;

              case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;

              case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;

              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                this._activate(e);
                break;

              case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;

              default:
                l = !1, s = this.previousFilter || "", o = String.fromCharCode(e.keyCode), r = !1, 
                clearTimeout(this.filterTimer), o === s ? r = !0 : o = s + o, a = RegExp("^" + i(o), "i"), 
                n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return a.test(t(this).children("a").text());
                }), (n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n).length || (o = String.fromCharCode(e.keyCode), 
                a = RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return a.test(t(this).children("a").text());
                })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
            }
            l && e.preventDefault();
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function() {
            var e, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
            n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this), n = e.prev("a"), s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"));
            }), (e = n.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-—–\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider");
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        focus: function(t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
            n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), 
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), 
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), (i = e.children(".ui-menu")).length && /^mouse/.test(t.type) && this._startOpening(i), 
            this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            });
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, 
            o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", t, {
                item: this.active
            }));
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n;
            }, this.delay);
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },
        next: function(t) {
            this._move("next", "first", t);
        },
        previous: function(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), 
            n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), 
            this.focus(i, n);
        },
        nextPage: function(e) {
            var i, n, s;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, 
            s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return 0 > (i = t(this)).offset().top - n - s;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e);
        },
        previousPage: function(e) {
            var i, n, s;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, 
            s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - n + s > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        }
    });
}(jQuery), function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.9.2",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), 
            this.oldValue = this._value(), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.valueDiv.remove();
        },
        value: function(t) {
            return void 0 === t ? this._value() : (this._setOption("value", t), this);
        },
        _setOption: function(t, e) {
            "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), 
            this._super(t, e);
        },
        _value: function() {
            var t = this.options.value;
            return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t));
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max;
        },
        _refreshValue: function() {
            var t = this.value(), e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), 
            this.element.attr("aria-valuenow", t);
        }
    });
}(jQuery), function(t) {
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.9.2",
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
        _create: function() {
            var e, i, n = this.options, s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = [];
            for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), 
            this.range = t([]), n.range && (!0 === n.range && (n.values || (n.values = [ this._valueMin(), this._valueMin() ]), 
            n.values.length && 2 !== n.values.length && (n.values = [ n.values[0], n.values[0] ])), 
            this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : ""))), 
            i = n.values && n.values.length || 1, e = s.length; i > e; e++) o.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), 
            this.handles.add(this.range).filter("a").click(function(t) {
                t.preventDefault();
            }).mouseenter(function() {
                n.disabled || t(this).addClass("ui-state-hover");
            }).mouseleave(function() {
                t(this).removeClass("ui-state-hover");
            }).focus(function() {
                n.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), 
                t(this).addClass("ui-state-focus"));
            }).blur(function() {
                t(this).removeClass("ui-state-focus");
            }), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e);
            }), this._on(this.handles, {
                keydown: function(e) {
                    var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                      case t.ui.keyCode.HOME:
                      case t.ui.keyCode.END:
                      case t.ui.keyCode.PAGE_UP:
                      case t.ui.keyCode.PAGE_DOWN:
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), 
                        !1 === this._start(e, o))) return;
                    }
                    switch (s = this.options.step, i = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), 
                    e.keyCode) {
                      case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;

                      case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;

                      case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / 5);
                        break;

                      case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / 5);
                        break;

                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + s);
                        break;

                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - s);
                    }
                    this._slide(e, o, n);
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), 
                    t(e.target).removeClass("ui-state-active"));
                }
            }), this._refreshValue(), this._animateOff = !1;
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l, h = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(e) {
                var i = Math.abs(n - h.values(e));
                s > i && (s = i, o = t(this), r = e);
            }), !0 === c.range && this.values(1) === c.min && (r += 1, o = t(this.handles[r])), 
            !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), 
            a = o.offset(), l = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - o.width() / 2,
                top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), 
            this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, 
            this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), 
            s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o);
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), 
            i.values = this.values()), this._trigger("start", t, i);
        },
        _slide: function(t, e, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 
            2 === this.options.values.length && !0 === this.options.range && (0 === e && i > n || 1 === e && n > i) && (i = n), 
            i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), !1 !== o && this.values(e, i, !0))) : i !== this.value() && !1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            })) && this.value(i);
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), 
            i.values = this.values()), this._trigger("stop", t, i);
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), 
                i.values = this.values()), this._trigger("change", t, i);
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), 
            this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch (t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), 
            e) {
              case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), 
                this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), 
                this.element.removeClass("ui-disabled"));
                break;

              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue();
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                this._animateOff = !1;
                break;

              case "min":
              case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
            return i;
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range, a = this.options, l = this, h = !this._animateOff && a.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", 
                t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = i;
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, 
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), 
            "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }));
        }
    });
}(jQuery), function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
        };
    }
    t.widget("ui.spinner", {
        version: "1.9.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var e = {}, i = this.element;
            return t.each([ "min", "max", "step" ], function(t, n) {
                var s = i.attr(n);
                void 0 !== s && s.length && (e[n] = s);
            }), e;
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)));
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t);
                    }, 100), t.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = n, 
                    this._delay(function() {
                        this.previous = n;
                    }));
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), 
                e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this);
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), 
            this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), 
            this.options.disabled && this.disable();
        },
        _keydown: function(e) {
            var i = this.options, n = t.ui.keyCode;
            switch (e.keyCode) {
              case n.UP:
                return this._repeat(null, 1, e), !0;

              case n.DOWN:
                return this._repeat(null, -1, e), !0;

              case n.PAGE_UP:
                return this._repeat(null, i.page, e), !0;

              case n.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0;
            }
            return !1;
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>";
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), 
            this.spinning = !0, !0);
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i);
            }, t), this._spin(e * this.options.step, i);
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i), this.counter++);
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function(t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, 
            t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t;
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", t));
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, void this.element.val(this._format(i));
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), 
            this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), 
            this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")));
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val());
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), 
            "" === t || isNaN(t) ? null : t;
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        _value: function(t, e) {
            var i;
            "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), 
            this.element.val(t), this._refresh();
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: e(function(t) {
            this._stepUp(t);
        }),
        _stepUp: function(t) {
            this._spin((t || 1) * this.options.step);
        },
        stepDown: e(function(t) {
            this._stepDown(t);
        }),
        _stepDown: function(t) {
            this._spin((t || 1) * -this.options.step);
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page);
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    });
}(jQuery), function(t, e) {
    function i() {
        return ++s;
    }
    function n(t) {
        return t.hash.length > 1 && t.href.replace(o, "") === location.href.replace(o, "").replace(/\s/g, "%20");
    }
    var s = 0, o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.9.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var i = this, n = this.options, s = n.active, o = location.hash.substring(1);
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this._processTabs(), null === s && (o && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === o ? (s = i, !1) : e;
            }), null === s && (s = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === s || -1 === s) && (s = !!this.tabs.length && 0)), 
            !1 !== s && -1 === (s = this.tabs.index(this.tabs.eq(s))) && (s = !n.collapsible && 0), 
            n.active = s, !n.collapsible && !1 === n.active && this.anchors.length && (n.active = 0), 
            t.isArray(n.disabled) && (n.disabled = t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return i.tabs.index(t);
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(this.options.active) : t(), 
            this._refresh(), this.active.length && this.load(n.active);
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            };
        },
        _tabKeydown: function(i) {
            var n = t(this.document[0].activeElement).closest("li"), s = this.tabs.index(n), o = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                    s++;
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                    o = !1, s--;
                    break;

                  case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;

                  case t.ui.keyCode.HOME:
                    s = 0;
                    break;

                  case t.ui.keyCode.SPACE:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(s), e;

                  case t.ui.keyCode.ENTER:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(s !== this.options.active && s), 
                    e;

                  default:
                    return;
                }
                i.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, o), 
                i.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", s);
                }, this.delay));
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), 
            this.active.focus());
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : e;
        },
        _findNextTab: function(e, i) {
            for (var n = this.tabs.length - 1; -1 !== t.inArray(function() {
                return e > n && (e = 0), 0 > e && (e = n), e;
            }(), this.options.disabled); ) e = i ? e + 1 : e - 1;
            return e;
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t;
        },
        _setOption: function(t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), 
            e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), 
            i || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(i), 
            "heightStyle" === t && this._setupHeightStyle(i), e);
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i();
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t);
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, 
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, 
            this.active = t()), this._refresh();
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), 
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0];
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, s) {
                var o, r, a, l = t(s).uniqueId().attr("id"), h = t(s).closest("li"), c = h.attr("aria-controls");
                n(s) ? (o = s.hash, r = e.element.find(e._sanitizeSelector(o))) : (a = e._tabId(h), 
                o = "#" + a, (r = e.element.find(o)).length || (r = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), 
                r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), c && h.data("ui-tabs-aria-controls", c), 
                h.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": l
                }), r.attr("aria-labelledby", l);
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0);
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++) !0 === e || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e;
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault();
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), 
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(e) {
            var i, n, s = this.element.parent();
            "fill" === e ? (t.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), 
            i = s.height(), this.element.siblings(":visible").each(function() {
                var e = t(this), n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
            }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function(e) {
            var i = this.options, n = this.active, s = t(e.currentTarget).closest("li"), o = s[0] === n[0], r = o && i.collapsible, a = r ? t() : this._getPanelForTab(s), l = n.length ? this._getPanelForTab(n) : t(), h = {
                oldTab: n,
                oldPanel: l,
                newTab: r ? t() : s,
                newPanel: a
            };
            e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(s), 
            this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            a.length && this.load(this.tabs.index(s), e), this._toggle(e, h));
        },
        _toggle: function(e, i) {
            function n() {
                o.running = !1, o._trigger("activate", e, i);
            }
            function s() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), 
                n());
            }
            var o = this, r = i.newPanel, a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s();
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), 
            s()), a.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), 
            t;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), 
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), 
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), 
            this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(i) {
            var n = this.options.disabled;
            !1 !== n && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function(t) {
                return t !== i ? t : null;
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null;
            })), this._setupDisabled(n));
        },
        disable: function(i) {
            var n = this.options.disabled;
            if (!0 !== n) {
                if (i === e) n = !0; else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, n)) return;
                    n = t.isArray(n) ? t.merge([ i ], n).sort() : [ i ];
                }
                this._setupDisabled(n);
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this, o = this.tabs.eq(e), r = o.find(".ui-tabs-anchor"), a = this._getPanelForTab(o), l = {
                tab: o,
                panel: a
            };
            n(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), 
            a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, l);
                }, 1);
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && s.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), 
                    t === s.xhr && delete s.xhr;
                }, 1);
            })));
        },
        _ajaxSettings: function(e, i, n) {
            var s = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return s._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, n));
                }
            };
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), !1 !== t.uiBackCompat && (t.ui.tabs.prototype._ui = function(t, e) {
        return {
            tab: t,
            panel: e,
            index: this.anchors.index(t)
        };
    }, t.widget("ui.tabs", t.ui.tabs, {
        url: function(t, e) {
            this.anchors.eq(t).attr("href", e);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            ajaxOptions: null,
            cache: !1
        },
        _create: function() {
            this._super();
            var i = this;
            this._on({
                tabsbeforeload: function(n, s) {
                    return t.data(s.tab[0], "cache.tabs") ? (n.preventDefault(), e) : (s.jqXHR.success(function() {
                        i.options.cache && t.data(s.tab[0], "cache.tabs", !0);
                    }), e);
                }
            });
        },
        _ajaxSettings: function(e, i, n) {
            var s = this.options.ajaxOptions;
            return t.extend({}, s, {
                error: function(t, e) {
                    try {
                        s.error(t, e, n.tab.closest("li").index(), n.tab[0]);
                    } catch (t) {}
                }
            }, this._superApply(arguments));
        },
        _setOption: function(t, e) {
            "cache" === t && !1 === e && this.anchors.removeData("cache.tabs"), this._super(t, e);
        },
        _destroy: function() {
            this.anchors.removeData("cache.tabs"), this._super();
        },
        url: function(t) {
            this.anchors.eq(t).removeData("cache.tabs"), this._superApply(arguments);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        abort: function() {
            this.xhr && this.xhr.abort();
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            spinner: "<em>Loading&#8230;</em>"
        },
        _create: function() {
            this._super(), this._on({
                tabsbeforeload: function(t, e) {
                    if (t.target === this.element[0] && this.options.spinner) {
                        var i = e.tab.find("span"), n = i.html();
                        i.html(this.options.spinner), e.jqXHR.complete(function() {
                            i.html(n);
                        });
                    }
                }
            });
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            enable: null,
            disable: null
        },
        enable: function(e) {
            var i, n = this.options;
            (e && !0 === n.disabled || t.isArray(n.disabled) && -1 !== t.inArray(e, n.disabled)) && (i = !0), 
            this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]));
        },
        disable: function(e) {
            var i, n = this.options;
            (e && !1 === n.disabled || t.isArray(n.disabled) && -1 === t.inArray(e, n.disabled)) && (i = !0), 
            this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]));
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        add: function(i, n, s) {
            s === e && (s = this.anchors.length);
            var o, r, a = this.options, l = t(a.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)), h = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
            return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), 
            l.attr("aria-controls", h), o = s >= this.tabs.length, (r = this.element.find("#" + h)).length || (r = this._createPanel(h), 
            o ? s > 0 ? r.insertAfter(this.panels.eq(-1)) : r.appendTo(this.element) : r.insertBefore(this.panels[s])), 
            r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), o ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]), 
            a.disabled = t.map(a.disabled, function(t) {
                return t >= s ? ++t : t;
            }), this.refresh(), 1 === this.tabs.length && !1 === a.active && this.option("active", 0), 
            this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this;
        },
        remove: function(e) {
            e = this._getIndex(e);
            var i = this.options, n = this.tabs.eq(e).remove(), s = this._getPanelForTab(n).remove();
            return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (this.anchors.length > e + 1 ? 1 : -1)), 
            i.disabled = t.map(t.grep(i.disabled, function(t) {
                return t !== e;
            }), function(t) {
                return t >= e ? --t : t;
            }), this.refresh(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), 
            this;
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        length: function() {
            return this.anchors.length;
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            idPrefix: "ui-tabs-"
        },
        _tabId: function(e) {
            var n = e.is("li") ? e.find("a[href]") : e;
            return n = n[0], t(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i();
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            panelTemplate: "<div></div>"
        },
        _createPanel: function(e) {
            return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        _create: function() {
            var t = this.options;
            null === t.active && t.selected !== e && (t.active = -1 !== t.selected && t.selected), 
            this._super(), t.selected = t.active, !1 === t.selected && (t.selected = -1);
        },
        _setOption: function(t, e) {
            if ("selected" !== t) return this._super(t, e);
            var i = this.options;
            this._super("active", -1 !== e && e), i.selected = i.active, !1 === i.selected && (i.selected = -1);
        },
        _eventHandler: function() {
            this._superApply(arguments), this.options.selected = this.options.active, !1 === this.options.selected && (this.options.selected = -1);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            show: null,
            select: null
        },
        _create: function() {
            this._super(), !1 !== this.options.active && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]));
        },
        _trigger: function(t, e, i) {
            var n, s, o = this._superApply(arguments);
            return !!o && ("beforeActivate" === t ? (n = i.newTab.length ? i.newTab : i.oldTab, 
            s = i.newPanel.length ? i.newPanel : i.oldPanel, o = this._super("select", e, {
                tab: n.find(".ui-tabs-anchor")[0],
                panel: s[0],
                index: n.closest("li").index()
            })) : "activate" === t && i.newTab.length && (o = this._super("show", e, {
                tab: i.newTab.find(".ui-tabs-anchor")[0],
                panel: i.newPanel[0],
                index: i.newTab.closest("li").index()
            })), o);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        select: function(t) {
            if (-1 === (t = this._getIndex(t))) {
                if (!this.options.collapsible || -1 === this.options.selected) return;
                t = this.options.selected;
            }
            this.anchors.eq(t).trigger(this.options.event + this.eventNamespace);
        }
    }), function() {
        var e = 0;
        t.widget("ui.tabs", t.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function() {
                var t, e = this.options;
                null == e.active && e.cookie && (-1 === (t = parseInt(this._cookie(), 10)) && (t = !1), 
                e.active = t), this._super();
            },
            _cookie: function(i) {
                var n = [ this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e) ];
                return arguments.length && (n.push(!1 === i ? -1 : i), n.push(this.options.cookie)), 
                t.cookie.apply(null, n);
            },
            _refresh: function() {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie);
            },
            _eventHandler: function() {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie);
            },
            _destroy: function() {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie);
            }
        });
    }(), t.widget("ui.tabs", t.ui.tabs, {
        _trigger: function(e, i, n) {
            var s = t.extend({}, n);
            return "load" === e && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]), 
            this._super(e, i, s);
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            fx: null
        },
        _getFx: function() {
            var e, i, n = this.options.fx;
            return n && (t.isArray(n) ? (e = n[0], i = n[1]) : e = i = n), n ? {
                show: i,
                hide: e
            } : null;
        },
        _toggle: function(t, i) {
            function n() {
                o.running = !1, o._trigger("activate", t, i);
            }
            function s() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && l.show ? r.animate(l.show, l.show.duration, function() {
                    n();
                }) : (r.show(), n());
            }
            var o = this, r = i.newPanel, a = i.oldPanel, l = this._getFx();
            return l ? (o.running = !0, a.length && l.hide ? a.animate(l.hide, l.hide.duration, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s();
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), 
            s()), e) : this._super(t, i);
        }
    }));
}(jQuery), function(t) {
    function e(e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")));
    }
    function i(e) {
        var i = e.data("ui-tooltip-id"), n = (e.attr("aria-describedby") || "").split(/\s+/), s = t.inArray(i, n);
        -1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby");
    }
    var n = 0;
    t.widget("ui.tooltip", {
        version: "1.9.2",
        options: {
            content: function() {
                return t(this).attr("title");
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable();
        },
        _setOption: function(e, i) {
            var n = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void (this.options[e] = i)) : (this._super(e, i), 
            void ("content" === e && t.each(this.tooltips, function(t, e) {
                n._updateContent(e);
            })));
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0);
            }), this.element.find(this.options.items).andSelf().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "");
            });
        },
        _enable: function() {
            this.element.find(this.options.items).andSelf().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
            });
        },
        open: function(e) {
            var i = this, n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), 
            n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, 
                i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""));
            }), this._updateContent(n, e));
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content, s = this, o = e ? e.type : null;
            return "string" == typeof n ? this._open(e, t, n) : void ((i = n.call(t[0], function(i) {
                t.data("ui-tooltip-open") && s._delay(function() {
                    e && (e.type = o), this._open(e, t, i);
                });
            })) && this._open(e, t, i));
        },
        _open: function(i, n, s) {
            function o(t) {
                h.of = t, r.is(":hidden") || r.position(h);
            }
            var r, a, l, h = t.extend({}, this.options.position);
            if (s) {
                if ((r = this._find(n)).length) return void r.find(".ui-tooltip-content").html(s);
                n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), 
                r = this._tooltip(n), e(n, r.attr("id")), r.find(".ui-tooltip-content").html(s), 
                this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : r.position(t.extend({
                    of: n
                }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (l = setInterval(function() {
                    r.is(":visible") && (o(h.of), clearInterval(l));
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: r
                }), a = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = n[0], this.close(i, !0);
                        }
                    },
                    remove: function() {
                        this._removeTooltip(r);
                    }
                }, i && "mouseover" !== i.type || (a.mouseleave = "close"), i && "focusin" !== i.type || (a.focusout = "close"), 
                this._on(!0, n, a);
            }
        },
        close: function(e) {
            var n = this, s = t(e ? e.currentTarget : this.element), o = this._find(s);
            this.closing || (s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), 
            i(s), o.stop(!0), this._hide(o, this.options.hide, function() {
                n._removeTooltip(t(this));
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), 
            s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), 
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e];
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1);
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + n++, s = t("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), 
            t.fn.bgiframe && s.bgiframe(), this.tooltips[i] = e, s;
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t();
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")];
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0], e.close(s, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), 
                n.removeData("ui-tooltip-title"));
            });
        }
    });
}(jQuery), jQuery.effects || function(t, e) {
    var i = !1 !== t.uiBackCompat, n = "ui-effects-";
    t.effects = {
        effect: {}
    }, function(e, i) {
        function n(t, e, i) {
            var n = d[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t);
        }
        function s(t) {
            var n = c(), s = n._rgba = [];
            return t = t.toLowerCase(), g(h, function(e, o) {
                var r, a = o.re.exec(t), l = a && o.parse(a), h = o.space || "rgba";
                return l ? (r = n[h](l), n[u[h].cache] = r[u[h].cache], s = n._rgba = r._rgba, !1) : i;
            }), s.length ? ("0,0,0,0" === s.join() && e.extend(s, r.transparent), n) : r[t];
        }
        function o(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        var r, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), l = /^([\-+])=\s*(\d+\.?\d*)/, h = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], c = e.Color = function(t, i, n, s) {
            return new e.Color.fn.parse(t, i, n, s);
        }, u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, d = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, p = c.support = {}, f = e("<p>")[0], g = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, 
        g(u, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), c.fn = e.extend(c.prototype, {
            parse: function(o, a, l, h) {
                if (o === i) return this._rgba = [ null, null, null, null ], this;
                (o.jquery || o.nodeType) && (o = e(o).css(a), a = i);
                var d = this, p = e.type(o), f = this._rgba = [];
                return a !== i && (o = [ o, a, l, h ], p = "array"), "string" === p ? this.parse(s(o) || r._default) : "array" === p ? (g(u.rgba.props, function(t, e) {
                    f[e.idx] = n(o[e.idx], e);
                }), this) : "object" === p ? (o instanceof c ? g(u, function(t, e) {
                    o[e.cache] && (d[e.cache] = o[e.cache].slice());
                }) : g(u, function(e, i) {
                    var s = i.cache;
                    g(i.props, function(t, e) {
                        if (!d[s] && i.to) {
                            if ("alpha" === t || null == o[t]) return;
                            d[s] = i.to(d._rgba);
                        }
                        d[s][e.idx] = n(o[t], e, !0);
                    }), d[s] && 0 > t.inArray(null, d[s].slice(0, 3)) && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])));
                }), this) : i;
            },
            is: function(t) {
                var e = c(t), n = !0, s = this;
                return g(u, function(t, o) {
                    var r, a = e[o.cache];
                    return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], g(o.props, function(t, e) {
                        return null != a[e.idx] ? n = a[e.idx] === r[e.idx] : i;
                    })), n;
                }), n;
            },
            _space: function() {
                var t = [], e = this;
                return g(u, function(i, n) {
                    e[n.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var i = c(t), s = i._space(), o = u[s], r = 0 === this.alpha() ? c("transparent") : this, a = r[o.cache] || o.to(r._rgba), l = a.slice();
                return i = i[o.cache], g(o.props, function(t, s) {
                    var o = s.idx, r = a[o], h = i[o], c = d[s.type] || {};
                    null !== h && (null === r ? l[o] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), 
                    l[o] = n((h - r) * e + r, s)));
                }), this[s](l);
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), n = i.pop(), s = c(t)._rgba;
                return c(e.map(i, function(t, e) {
                    return (1 - n) * s[e] + n * t;
                }));
            },
            toRgbaString: function() {
                var t = "rgba(", i = e.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")";
            },
            toHslaString: function() {
                var t = "hsla(", i = e.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), 
                    t;
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")";
            },
            toHexString: function(t) {
                var i = this._rgba.slice(), n = i.pop();
                return t && i.push(~~(255 * n)), "#" + e.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), c.fn.parse.prototype = c.fn, u.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o), l = Math.min(n, s, o), h = a - l, c = a + l, u = .5 * c;
            return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, 
            i = 0 === u || 1 === u ? u : .5 >= u ? h / c : h / (2 - c), [ Math.round(e) % 360, i, u, null == r ? 1 : r ];
        }, u.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], n = t[2], s = t[3], r = .5 >= n ? n * (1 + i) : n + i - n * i, a = 2 * n - r;
            return [ Math.round(255 * o(a, r, e + 1 / 3)), Math.round(255 * o(a, r, e)), Math.round(255 * o(a, r, e - 1 / 3)), s ];
        }, g(u, function(t, s) {
            var o = s.props, r = s.cache, a = s.to, h = s.from;
            c.fn[t] = function(t) {
                if (a && !this[r] && (this[r] = a(this._rgba)), t === i) return this[r].slice();
                var s, l = e.type(t), u = "array" === l || "object" === l ? t : arguments, d = this[r].slice();
                return g(o, function(t, e) {
                    var i = u["object" === l ? t : e.idx];
                    null == i && (i = d[e.idx]), d[e.idx] = n(i, e);
                }), h ? (s = c(h(d)), s[r] = d, s) : c(d);
            }, g(o, function(i, n) {
                c.fn[i] || (c.fn[i] = function(s) {
                    var o, r = e.type(s), a = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t, h = this[a](), c = h[n.idx];
                    return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = e.type(s)), 
                    null == s && n.empty ? this : ("string" === r && (o = l.exec(s)) && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), 
                    h[n.idx] = s, this[a](h)));
                });
            });
        }), g(a, function(t, i) {
            e.cssHooks[i] = {
                set: function(t, n) {
                    var o, r, a = "";
                    if ("string" !== e.type(n) || (o = s(n))) {
                        if (n = c(o || n), !p.rgba && 1 !== n._rgba[3]) {
                            for (r = "backgroundColor" === i ? t.parentNode : t; ("" === a || "transparent" === a) && r && r.style; ) try {
                                a = e.css(r, "backgroundColor"), r = r.parentNode;
                            } catch (t) {}
                            n = n.blend(a && "transparent" !== a ? a : "_default");
                        }
                        n = n.toRgbaString();
                    }
                    try {
                        t.style[i] = n;
                    } catch (t) {}
                }
            }, e.fx.step[i] = function(t) {
                t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos));
            };
        }), e.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return g([ "Top", "Right", "Bottom", "Left" ], function(i, n) {
                    e["border" + n + "Color"] = t;
                }), e;
            }
        }, r = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(jQuery), function() {
        function i() {
            var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, s = {};
            if (n && n.length && n[0] && n[n[0]]) for (i = n.length; i--; ) e = n[i], "string" == typeof n[e] && (s[t.camelCase(e)] = n[e]); else for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
            return s;
        }
        function n(e, i) {
            var n, s, r = {};
            for (n in i) s = i[n], e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
            return r;
        }
        var s = [ "add", "remove", "toggle" ], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), 
                t.setAttr = !0);
            };
        }), t.effects.animateClass = function(e, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function() {
                var o, r = t(this), a = r.attr("class") || "", h = l.children ? r.find("*").andSelf() : r;
                h = h.map(function() {
                    return {
                        el: t(this),
                        start: i.call(this)
                    };
                }), (o = function() {
                    t.each(s, function(t, i) {
                        e[i] && r[i + "Class"](e[i]);
                    });
                })(), h = h.map(function() {
                    return this.end = i.call(this.el[0]), this.diff = n(this.start, this.end), this;
                }), r.attr("class", a), h = h.map(function() {
                    var e = this, i = t.Deferred(), n = jQuery.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, n), i.promise();
                }), t.when.apply(t, h.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), l.complete.call(r[0]);
                });
            });
        }, t.fn.extend({
            _addClass: t.fn.addClass,
            addClass: function(e, i, n, s) {
                return i ? t.effects.animateClass.call(this, {
                    add: e
                }, i, n, s) : this._addClass(e);
            },
            _removeClass: t.fn.removeClass,
            removeClass: function(e, i, n, s) {
                return i ? t.effects.animateClass.call(this, {
                    remove: e
                }, i, n, s) : this._removeClass(e);
            },
            _toggleClass: t.fn.toggleClass,
            toggleClass: function(i, n, s, o, r) {
                return "boolean" == typeof n || n === e ? s ? t.effects.animateClass.call(this, n ? {
                    add: i
                } : {
                    remove: i
                }, s, o, r) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                    toggle: i
                }, n, s, o);
            },
            switchClass: function(e, i, n, s, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, n, s, o);
            }
        });
    }(), function() {
        function s(e, i, n, s) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, 
            n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, 
            e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, 
            e.complete = s || i.complete, e;
        }
        function o(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] && (!i || !t.effects[e]);
        }
        t.extend(t.effects, {
            version: "1.9.2",
            save: function(t, e) {
                for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]]);
            },
            restore: function(t, i) {
                var s, o;
                for (o = 0; i.length > o; o++) null !== i[o] && ((s = t.data(n + i[o])) === e && (s = ""), 
                t.css(i[o], s));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            getBaseline: function(t, e) {
                var i, n;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    n = 0;
                    break;

                  case "center":
                    n = .5;
                    break;

                  case "right":
                    n = 1;
                    break;

                  default:
                    n = t[1] / e.width;
                }
                return {
                    x: n,
                    y: i
                };
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, n = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), s = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (t) {
                    o = document.body;
                }
                return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), 
                "static" === e.css("position") ? (n.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, n) {
                    i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(s), n.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), 
                e;
            },
            setTransition: function(e, i, n, s) {
                return s = s || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (s[i] = o[0] * n + o[1]);
                }), s;
            }
        }), t.fn.extend({
            effect: function() {
                function e(e) {
                    function i() {
                        t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e();
                    }
                    var s = t(this), o = n.complete, r = n.mode;
                    (s.is(":hidden") ? "hide" === r : "show" === r) ? i() : a.call(s[0], n, i);
                }
                var n = s.apply(this, arguments), o = n.mode, r = n.queue, a = t.effects.effect[n.effect], l = !a && i && t.effects[n.effect];
                return t.fx.off || !a && !l ? o ? this[o](n.duration, n.complete) : this.each(function() {
                    n.complete && n.complete.call(this);
                }) : a ? !1 === r ? this.each(e) : this.queue(r || "fx", e) : l.call(this, {
                    options: n,
                    duration: n.duration,
                    callback: n.complete,
                    mode: n.mode
                });
            },
            _show: t.fn.show,
            show: function(t) {
                if (o(t)) return this._show.apply(this, arguments);
                var e = s.apply(this, arguments);
                return e.mode = "show", this.effect.call(this, e);
            },
            _hide: t.fn.hide,
            hide: function(t) {
                if (o(t)) return this._hide.apply(this, arguments);
                var e = s.apply(this, arguments);
                return e.mode = "hide", this.effect.call(this, e);
            },
            __toggle: t.fn.toggle,
            toggle: function(e) {
                if (o(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "toggle", this.effect.call(this, i);
            },
            cssUnit: function(e) {
                var i = this.css(e), n = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    i.indexOf(e) > 0 && (n = [ parseFloat(i), e ]);
                }), n;
            }
        });
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
}(jQuery), function(t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(n, s) {
        var o, r, a, l = t(this), h = [ "position", "top", "bottom", "left", "right", "height", "width" ], c = t.effects.setMode(l, n.mode || "hide"), u = n.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), 
        l.show(), r = (o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }))[p](), a = parseFloat(o.css(f)) || 0, m[p] = v ? r : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? a : r + a), v && (o.css(p, 0), g || o.css(f, a + r)), o.animate(m, {
            duration: n.duration,
            easing: n.easing,
            queue: !1,
            complete: function() {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), s();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.bounce = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = t.effects.setMode(r, e.mode || "effect"), h = "hide" === l, c = "show" === l, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", y = "up" === u || "left" === u, b = r.queue(), _ = b.length;
        for ((c || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), 
        d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
            opacity: 1
        }, o[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), 
        (o = {})[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (y ? "-=" : "+=") + d, r.animate(s, g, m).animate(o, g, m), 
        d = h ? 2 * d : d / 2;
        h && (s = {
            opacity: 0
        }, s[v] = (y ? "-=" : "+=") + d, r.animate(s, g, m)), r.queue(function() {
            h && r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i();
        }), _ > 1 && b.splice.apply(b, [ 1, 0 ].concat(b.splice(_, f + 1))), r.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.clip = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = "show" === t.effects.setMode(r, e.mode || "hide"), h = "vertical" === (e.direction || "vertical"), c = h ? "height" : "width", u = h ? "top" : "left", d = {};
        t.effects.save(r, a), r.show(), n = t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), o = (s = "IMG" === r[0].tagName ? n : r)[c](), l && (s.css(c, 0), s.css(u, o / 2)), 
        d[c] = l ? o : 0, d[u] = l ? 0 : o / 2, s.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                l || r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.drop = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], r = t.effects.setMode(s, e.mode || "hide"), a = "show" === r, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg", u = {
            opacity: a ? 1 : 0
        };
        t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, 
        a && s.css("opacity", 0).css(h, "pos" === c ? -n : n), u[h] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n, 
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.explode = function(e, i) {
        function n() {
            y.push(this), y.length === u * d && s();
        }
        function s() {
            p.css({
                visibility: "visible"
            }), t(y).remove(), f || p.hide(), i();
        }
        var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = "show" === t.effects.setMode(p, e.mode || "hide"), g = p.show().css("visibility", "hidden").offset(), m = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / u), y = [];
        for (o = 0; u > o; o++) for (l = g.top + o * v, c = o - (u - 1) / 2, r = 0; d > r; r++) a = g.left + r * m, 
        h = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -r * m,
            top: -o * v
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: m,
            height: v,
            left: a + (f ? h * m : 0),
            top: l + (f ? c * v : 0),
            opacity: f ? 0 : 1
        }).animate({
            left: a + (f ? 0 : h * m),
            top: l + (f ? 0 : c * v),
            opacity: f ? 1 : 0
        }, e.duration || 500, e.easing, n);
    };
}(jQuery), function(t) {
    t.effects.effect.fade = function(e, i) {
        var n = t(this), s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    };
}(jQuery), function(t) {
    t.effects.effect.fold = function(e, i) {
        var n, s, o = t(this), r = [ "position", "top", "bottom", "left", "right", "height", "width" ], a = t.effects.setMode(o, e.mode || "hide"), l = "show" === a, h = "hide" === a, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? [ "width", "height" ] : [ "height", "width" ], g = e.duration / 2, m = {}, v = {};
        t.effects.save(o, r), o.show(), n = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), s = p ? [ n.width(), n.height() ] : [ n.height(), n.width() ], u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]), 
        l && n.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[f[0]] = l ? s[0] : c, v[f[1]] = l ? s[1] : 0, n.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i();
        });
    };
}(jQuery), function(t) {
    t.effects.effect.highlight = function(e, i) {
        var n = t(this), s = [ "backgroundImage", "backgroundColor", "opacity" ], o = t.effects.setMode(n, e.mode || "show"), r = {
            backgroundColor: n.css("backgroundColor")
        };
        "hide" === o && (r.opacity = 0), t.effects.save(n, s), n.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var n, s = t(this), o = t.effects.setMode(s, e.mode || "show"), r = "show" === o, a = "hide" === o, l = r || "hide" === o, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = s.queue(), p = d.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; h > n; n++) s.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        s.animate({
            opacity: u
        }, c, e.easing), s.queue(function() {
            a && s.hide(), i();
        }), p > 1 && d.splice.apply(d, [ 1, 0 ].concat(d.splice(p, h + 1))), s.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.puff = function(e, i) {
        var n = t(this), s = t.effects.setMode(n, e.mode || "hide"), o = "hide" === s, r = parseInt(e.percent, 10) || 150, a = r / 100, l = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: i,
            percent: o ? r : 100,
            from: o ? l : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }), n.effect(e);
    }, t.effects.effect.scale = function(e, i) {
        var n = t(this), s = t.extend(!0, {}, e), o = t.effects.setMode(n, e.mode || "effect"), r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100), a = e.direction || "both", l = e.origin, h = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        }, c = {
            y: "horizontal" !== a ? r / 100 : 1,
            x: "vertical" !== a ? r / 100 : 1
        };
        s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || [ "middle", "center" ], 
        s.restore = !0), s.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), s.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, 
        s.to.opacity = 0)), n.effect(s);
    }, t.effects.effect.size = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], l = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], h = [ "width", "height", "overflow" ], c = [ "fontSize" ], u = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], d = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], p = t.effects.setMode(r, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both", m = e.origin || [ "middle", "center" ], v = r.css("position"), y = f ? a : l, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && r.show(), n = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (r.from = e.to || b, r.to = e.from || n) : (r.from = e.from || ("show" === p ? b : n), 
        r.to = e.to || ("hide" === p ? b : n)), o = {
            from: {
                y: r.from.height / n.height,
                x: r.from.width / n.width
            },
            to: {
                y: r.to.height / n.height,
                x: r.to.width / n.width
            }
        }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (y = y.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), 
        r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (y = y.concat(d), 
        r.from = t.effects.setTransition(r, d, o.from.x, r.from), r.to = t.effects.setTransition(r, d, o.to.x, r.to))), 
        ("content" === g || "both" === g) && o.from.y !== o.to.y && (y = y.concat(c).concat(h), 
        r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)), 
        t.effects.save(r, y), r.show(), t.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), 
        m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, 
        r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, 
        r.to.left = (n.outerWidth - r.to.outerWidth) * s.x), r.css(r.from), ("content" === g || "both" === g) && (u = u.concat([ "marginTop", "marginBottom" ]).concat(c), 
        d = d.concat([ "marginLeft", "marginRight" ]), h = a.concat(u).concat(d), r.find("*[width]").each(function() {
            var i = t(this), n = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && t.effects.save(i, h), i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x
            }, i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), 
            i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), 
            i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, h);
            });
        })), r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === p && r.hide(), 
                t.effects.restore(r, y), f || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : t.each([ "top", "left" ], function(t, e) {
                    r.css(e, function(e, i) {
                        var n = parseInt(i, 10), s = t ? r.to.left : r.to.top;
                        return "auto" === i ? s + "px" : n + s + "px";
                    });
                })), t.effects.removeWrapper(r), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.shake = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "height", "width" ], r = t.effects.setMode(s, e.mode || "effect"), a = e.direction || "left", l = e.distance || 20, h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c), d = "up" === a || "down" === a ? "top" : "left", p = "up" === a || "left" === a, f = {}, g = {}, m = {}, v = s.queue(), y = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, 
        g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, e.easing), 
        n = 1; h > n; n++) s.animate(g, u, e.easing).animate(m, u, e.easing);
        s.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
        }), y > 1 && v.splice.apply(v, [ 1, 0 ].concat(v.splice(y, c + 1))), s.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.slide = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "width", "height" ], r = t.effects.setMode(s, e.mode || "show"), a = "show" === r, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, u = {};
        t.effects.save(s, o), s.show(), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0), 
        t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), a && s.css(h, c ? isNaN(n) ? "-" + n : -n : n), u[h] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + n, 
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.transfer = function(e, i) {
        var n = t(this), s = t(e.to), o = "fixed" === s.css("position"), r = t("body"), a = o ? r.scrollTop() : 0, l = o ? r.scrollLeft() : 0, h = s.offset(), c = {
            top: h.top - a,
            left: h.left - l,
            height: s.innerHeight(),
            width: s.innerWidth()
        }, u = n.offset(), d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
            top: u.top - a,
            left: u.left - l,
            height: n.innerHeight(),
            width: n.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function() {
            d.remove(), i();
        });
    };
}(jQuery);