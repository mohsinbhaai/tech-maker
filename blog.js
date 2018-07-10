
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (fe.isFunction(t)) return fe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return fe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ke.test(t)) return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = {};
        return fe.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (s(), fe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Le, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? fe.parseJSON(n) : n)
                } catch (e) {}
                fe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function d(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (je(e)) {
            var o, r, s = fe.expando,
                a = e.nodeType,
                l = a ? fe.cache : e,
                d = a ? e[s] : e[s] && s;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t) return d || (d = a ? e[s] = ne.pop() || fe.guid++ : s), l[d] || (l[d] = a ? {} : {
                toJSON: fe.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[d] = fe.extend(l[d], t) : l[d].data = fe.extend(l[d].data, t)), r = l[d], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[fe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[fe.camelCase(t)])) : o = r, o
        }
    }

    function u(e, t, n) {
        if (je(e)) {
            var i, o, r = e.nodeType,
                s = r ? fe.cache : e,
                a = r ? e[fe.expando] : fe.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !d(i) : !fe.isEmptyObject(i)) return
                }(n || (delete s[a].data, d(s[a]))) && (r ? fe.cleanData([e], !0) : ue.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }

    function p(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = a(),
            d = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            c = (fe.cssNumber[t] || "px" !== d && +l) && Ie.exec(fe.css(e, t));
        if (c && c[3] !== d) {
            d = d || c[3], n = n || [], c = +l || 1;
            do r = r || ".5", c /= r, fe.style(e, t, c + d); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = o)), o
    }

    function f(e) {
        var t = Be.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, i, o = 0,
            r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || fe.nodeName(i, t) ? r.push(i) : fe.merge(r, h(i, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], r) : r
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
    }

    function g(e) {
        qe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, o) {
        for (var r, s, a, l, d, c, u, p = e.length, v = f(t), y = [], b = 0; b < p; b++)
            if (s = e[b], s || 0 === s)
                if ("object" === fe.type(s)) fe.merge(y, s.nodeType ? [s] : s);
                else if (Xe.test(s)) {
                    for (l = l || v.appendChild(t.createElement("div")), d = (Fe.exec(s) || ["", ""])[1].toLowerCase(), u = Ue[d] || Ue._default, l.innerHTML = u[1] + fe.htmlPrefilter(s) + u[2], r = u[0]; r--;) l = l.lastChild;
                    if (!ue.leadingWhitespace && ze.test(s) && y.push(t.createTextNode(ze.exec(s)[0])), !ue.tbody)
                        for (s = "table" !== d || Qe.test(s) ? "<table>" !== u[1] || Qe.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;) fe.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                    l = v.lastChild
                } else y.push(t.createTextNode(s));
        for (l && v.removeChild(l), ue.appendChecked || fe.grep(h(y, "input"), g), b = 0; s = y[b++];)
            if (i && fe.inArray(s, i) > -1) o && o.push(s);
            else if (a = fe.contains(s.ownerDocument, s), l = h(v.appendChild(s), "script"), a && m(l), n)
                for (r = 0; s = l[r++];) Re.test(s.type || "") && n.push(s);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function x(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) x(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = b;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return fe().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, o, i, n)
        })
    }

    function S(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function k(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = ot.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, i, o, r = fe._data(e),
                s = fe._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; i < o; i++) fe.event.add(t, n, a[n][i])
            }
            s.data && (s.data = fe.extend({}, s.data))
        }
    }

    function E(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ue.noCloneEvent && t[fe.expando]) {
                o = fe._data(t);
                for (i in o.events) fe.removeEvent(t, i, o.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (k(t).text = e.text, T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function _(e, t, n, i) {
        t = re.apply([], t);
        var o, r, s, a, l, d, c = 0,
            u = e.length,
            p = u - 1,
            f = t[0],
            m = fe.isFunction(f);
        if (m || u > 1 && "string" == typeof f && !ue.checkClone && it.test(f)) return e.each(function(o) {
            var r = e.eq(o);
            m && (t[0] = f.call(this, o, r.html())), _(r, t, n, i)
        });
        if (u && (d = v(t, e[0].ownerDocument, !1, e, i), o = d.firstChild, 1 === d.childNodes.length && (d = o), o || i)) {
            for (a = fe.map(h(d, "script"), k), s = a.length; c < u; c++) r = d, c !== p && (r = fe.clone(r, !0, !0), s && fe.merge(a, h(r, "script"))), n.call(e[c], r, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, fe.map(a, T), c = 0; c < s; c++) r = a[c], Re.test(r.type || "") && !fe._data(r, "globalEval") && fe.contains(l, r) && (r.src ? fe._evalUrl && fe._evalUrl(r.src) : fe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(rt, "")));
            d = o = null
        }
        return e
    }

    function A(e, t, n) {
        for (var i, o = t ? fe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function D(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body),
            i = fe.css(n[0], "display");
        return n.detach(), i
    }

    function $(e) {
        var t = ie,
            n = dt[e];
        return n || (n = D(e, t), "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = D(e, t), lt.detach()), dt[e] = n), n
    }

    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in Tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--;)
            if (e = kt[n] + t, e in Tt) return e
    }

    function O(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (r[s] = fe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Me(i) && (r[s] = fe._data(i, "olddisplay", $(i.nodeName)))) : (o = Me(i), (n && "none" !== n || !o) && fe._data(i, "olddisplay", o ? n : fe.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function L(e, t, n) {
        var i = wt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function H(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += fe.css(e, n + Pe[r], !0, o)), i ? ("content" === n && (s -= fe.css(e, "padding" + Pe[r], !0, o)), "margin" !== n && (s -= fe.css(e, "border" + Pe[r] + "Width", !0, o))) : (s += fe.css(e, "padding" + Pe[r], !0, o), "padding" !== n && (s += fe.css(e, "border" + Pe[r] + "Width", !0, o)));
        return s
    }

    function I(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ht(e),
            s = ue.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = mt(e, t, r), (o < 0 || null == o) && (o = e.style[t]), ut.test(o)) return o;
            i = s && (ue.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + H(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function P(e, t, n, i, o) {
        return new P.prototype.init(e, t, n, i, o)
    }

    function M() {
        return e.setTimeout(function() {
            Ct = void 0
        }), Ct = fe.now()
    }

    function W(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n = Pe[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function q(e, t, n) {
        for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function F(e, t, n) {
        var i, o, r, s, a, l, d, c, u = this,
            p = {},
            f = e.style,
            h = e.nodeType && Me(e),
            m = fe._data(e, "fxshow");
        n.queue || (a = fe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, fe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], d = fe.css(e, "display"), c = "none" === d ? fe._data(e, "olddisplay") || $(e.nodeName) : d, "inline" === c && "none" === fe.css(e, "float") && (ue.inlineBlockNeedsLayout && "inline" !== $(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ue.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], _t.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || fe.style(e, i)
            } else d = void 0;
        if (fe.isEmptyObject(p)) "inline" === ("none" === d ? $(e.nodeName) : d) && (f.display = d);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = fe._data(e, "fxshow", {}), r && (m.hidden = !h), h ? fe(e).show() : u.done(function() {
                fe(e).hide()
            }), u.done(function() {
                var t;
                fe._removeData(e, "fxshow");
                for (t in p) fe.style(e, t, p[t])
            });
            for (i in p) s = q(h ? m[i] : 0, i, u), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = fe.camelCase(n), o = t[i], r = e[n], fe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = fe.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function z(e, t, n) {
        var i, o, r = 0,
            s = z.prefilters.length,
            a = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ct || M(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; s < l; s++) d.tweens[s].run(r);
                return a.notifyWith(e, [d, r, n]), r < 1 && l ? n : (a.resolveWith(e, [d]), !1)
            },
            d = a.promise({
                elem: e,
                props: fe.extend({}, t),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ct || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = fe.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) d.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (R(c, d.opts.specialEasing); r < s; r++)
            if (i = z.prefilters[r].call(d, e, c, d.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(d.elem, d.opts.queue).stop = fe.proxy(i.stop, i)), i;
        return fe.map(c, q, d), fe.isFunction(d.opts.start) && d.opts.start.call(e, d), fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function B(e) {
        return fe.attr(e, "class") || ""
    }

    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(De) || [];
            if (fe.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function X(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, fe.each(e[a] || [], function(e, a) {
                var d = a(t, n, i);
                return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
            }), l
        }
        var r = {},
            s = e === Jt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function Q(e, t) {
        var n, i, o = fe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && fe.extend(!0, e, n), e
    }

    function G(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
             "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Y(e, t, n, i) {
        var o, r, s, a, l, d = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (s = d[l + " " + r] || d["* " + r], !s)
                        for (o in d)
                            if (a = o.split(" "), a[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                                s === !0 ? s = d[o] : d[o] !== !0 && (r = a[0], c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function K(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function V(e) {
        if (!fe.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function J(e, t, n, i) {
        var o;
        if (fe.isArray(t)) fe.each(t, function(t, o) {
            n || on.test(e) ? i(e, o) : J(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== fe.type(t)) i(e, t);
        else
            for (o in t) J(e + "[" + o + "]", t[o], n, i)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        ie = e.document,
        oe = ne.slice,
        re = ne.concat,
        se = ne.push,
        ae = ne.indexOf,
        le = {},
        de = le.toString,
        ce = le.hasOwnProperty,
        ue = {},
        pe = "1.12.4",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: ne.sort,
        splice: ne.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], n = o[i], s !== n && (d && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, r = e && fe.isArray(e) ? e : []) : r = e && fe.isPlainObject(e) ? e : {}, s[i] = fe.extend(d, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!ue.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[de.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && fe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; o < i && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r, s = 0,
                a = [];
            if (n(e))
                for (o = e.length; s < o; s++) r = t(e[s], s, i), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, i), null != r && a.push(r);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (o = e[t], t = e, e = o), fe.isFunction(e)) return n = oe.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(oe.call(arguments)))
            }, i.guid = e.guid = e.guid || fe.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: ue
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, d, u, f, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== j && N(t), t = t || j, L)) {
                if (11 !== m && (d = ve.exec(e)))
                    if (o = d[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (d[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                    }
                if (x.qsa && !U[e + " "] && (!H || !H.test(e))) {
                    if (1 !== m) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = W), u = C(e), r = u.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + p(u[r]);
                        f = u.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f) try {
                        return J.apply(n, h.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === W && t.removeAttribute("id")
                    }
                }
            }
            return _(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[W] = !0, e
        }

        function o(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) S.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function d(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = R++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, d, c = [F, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (d = t[W] || (t[W] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[W] && (o = v(o)), r && !r[W] && (r = v(r, s)), i(function(i, s, a, l) {
                var d, c, u, p = [],
                    f = [],
                    h = s.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, p, e, a, l),
                    b = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (d = g(b, f), o(d, [], a, l), c = d.length; c--;)(u = d[c]) && (b[f[c]] = !(y[f[c]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (d = [], c = b.length; c--;)(u = b[c]) && d.push(y[c] = u);
                            r(null, b = [], d, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (d = r ? ee(i, u) : p[c]) > -1 && (i[d] = !(s[d] = u))
                    }
                } else b = g(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                return e === t
            }, s, !0), d = f(function(e) {
                return ee(t, e) > -1
            }, s, !0), c = [function(e, n, i) {
                var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                return t = null, o
            }]; a < o; a++)
                if (n = S.relative[e[a].type]) c = [f(h(c), n)];
                else {
                    if (n = S.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (i = ++a; i < o && !S.relative[e[i].type]; i++);
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < o && y(e = e.slice(i)), i < o && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, d) {
                    var c, u, p, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = A,
                        b = i || r && S.find.TAG("*", d),
                        w = F += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (d && (A = s === j || s || d); h !== x && null != (c = b[h]); h++) {
                        if (r && c) {
                            for (u = 0, s || c.ownerDocument === j || (N(c), a = !L); p = e[u++];)
                                if (p(c, s || j, a)) {
                                    l.push(c);
                                    break
                                }
                            d && (F = w)
                        }
                        o && ((c = !p && c) && f--, i && m.push(c))
                    }
                    if (f += h, o && h !== f) {
                        for (u = 0; p = n[u++];) p(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return d && (F = w, A = y), m
                };
            return o ? i(s) : s
        }
        var w, x, S, k, T, C, E, _, A, D, $, N, j, O, L, H, I, P, M, W = "sizzle" + 1 * new Date,
            q = e.document,
            F = 0,
            R = 0,
            z = n(),
            B = n(),
            U = n(),
            X = function(e, t) {
                return e === t && ($ = !0), 0
            },
            Q = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            V = Y.push,
            J = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            ue = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Se = function() {
                N()
            };
        try {
            J.apply(Y = Z.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: Y.length ? function(e, t) {
                    V.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = j.documentElement, L = !T(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ge.test(j.getElementsByClassName), x.getById = o(function(e) {
                return O.appendChild(e).id = W, !j.getElementsByName || !j.getElementsByName(W).length
            }), x.getById ? (S.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), S.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, S.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && L) return t.getElementsByClassName(e)
            }, I = [], H = [], (x.qsa = ge.test(j.querySelectorAll)) && (o(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || H.push(".#.+[+~]")
            }), o(function(e) {
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = ge.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), I.push("!=", re)
            }), H = H.length && new RegExp(H.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(O.compareDocumentPosition), M = t || ge.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return $ = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === q && M(q, e) ? -1 : t === j || t.ownerDocument === q && M(q, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return $ = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === j ? -1 : t === j ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, j) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && N(e), n = n.replace(ce, "='$1']"), x.matchesSelector && L && !U[n + " "] && (!I || !I.test(n)) && (!H || !H.test(n))) try {
                var i = P.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && N(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && N(e);
            var n = S.attrHandle[t.toLowerCase()],
                i = n && G.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if ($ = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(X), $) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += k(t);
            return n
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var d, c, u, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (p = g, u = p[W] || (p[W] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), d = c[e] || [], f = d[0] === F && d[1], b = f && d[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        c[e] = [F, f, b];
                                        break
                                    }
                            } else if (y && (p = t, u = p[W] || (p[W] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), d = c[e] || [], f = d[0] === F && d[1], b = f), b === !1)
                                for (;
                                    (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (u = p[W] || (p[W] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), c[e] = [F, b]), p !== t)););
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[W] ? r(n) : r.length > 1 ? (o = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(ae, "$1"));
                    return o[W] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: d(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: d(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: d(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) S.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) S.pseudos[w] = l(w);
        return u.prototype = S.filters = S.pseudos, S.setFilters = new u, C = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, d, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], d = S.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = de.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in S.filter) !(o = fe[s].exec(a)) || d[s] && !(o = d[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[W] ? i.push(r) : o.push(r);
                r = U(e, b(o, i)), r.selector = e
            }
            return r
        }, _ = t.select = function(e, t, n, i) {
            var o, r, s, a, l, d = "function" == typeof e && e,
                u = !i && C(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && L && S.relative[r[1].type]) {
                    if (t = (S.find.ID(s.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !S.relative[a = s.type]);)
                    if ((l = S.find[a]) && (i = l(s.matches[0].replace(we, xe), ye.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (d || E(e, u))(i, t, !L, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = W.split("").sort(X).join("") === W, x.detectDuplicates = !!$, N(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
    var be = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && fe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        xe = fe.expr.match.needsContext,
        Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ke = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (fe.contains(i[t], this)) return !0
            }));
            for (t = 0; t < o; t++) fe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var Te, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ee = fe.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || Te, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ce.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), Se.test(i[1]) && fe.isPlainObject(t))
                        for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (o = ie.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return Te.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
        };
    Ee.prototype = fe.fn, Te = fe(ie);
    var _e = /^(?:parents|prev(?:Until|All))/,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (fe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? fe.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, i) {
            var o = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = fe.filter(i, o)), this.length > 1 && (Ae[e] || (o = fe.uniqueSort(o)), _e.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var De = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : fe.extend({}, e);
        var t, n, i, o, s = [],
            a = [],
            l = -1,
            d = function() {
                for (o = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                        fe.each(n, function(n, i) {
                            fe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== fe.type(i) && t(i)
                        })
                    }(arguments), n && !t && d()), this
                },
                remove: function() {
                    return fe.each(arguments, function(e, t) {
                        for (var n;
                             (n = fe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? fe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || d()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, fe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return fe.Deferred(function(n) {
                            fe.each(t, function(t, r) {
                                var s = fe.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, fe.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = oe.call(arguments),
                s = r.length,
                a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : fe.Deferred(),
                d = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(d(o, n, t)).done(d(o, i, r)).fail(l.reject) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var $e;
    fe.fn.ready = function(e) {
        return fe.ready.promise().done(e), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || ($e.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
        }
    }), fe.ready.promise = function(t) {
        if (!$e)
            if ($e = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
            else {
                ie.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && ! function t() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        s(), fe.ready()
                    }
                }()
            }
        return $e.promise(t)
    }, fe.ready.promise();
    var Ne;
    for (Ne in fe(ue)) break;
    ue.ownFirst = "0" === Ne, ue.inlineBlockNeedsLayout = !1, fe(function() {
        var e, t, n, i;
        n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }),
        function() {
            var e = ie.createElement("div");
            ue.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                ue.deleteExpando = !1
            }
            e = null
        }();
    var je = function(e) {
            var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Le = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !d(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = fe.data(r), 1 === r.nodeType && !fe._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(r, i, o[i])));
                    fe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                fe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                fe.data(this, e, t)
            }) : r ? l(r, e, fe.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                fe.removeData(this, e)
            })
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = fe._queueHooks(e, t),
                s = function() {
                    fe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    fe._removeData(e, t + "queue"), fe._removeData(e, n)
                })
            })
        }
    }), fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = fe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = fe._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    }),
        function() {
            var e;
            ue.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
        Pe = ["Top", "Right", "Bottom", "Left"],
        Me = function(e, t) {
            return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
        },
        We = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == n;
            if ("object" === fe.type(n)) {
                o = !0;
                for (a in n) We(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, fe.isFunction(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                return d.call(fe(e), n)
            })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
        },
        qe = /^(?:checkbox|radio)$/i,
        Fe = /<([\w:-]+)/,
        Re = /^$|\/(?:java|ecma)script/i,
        ze = /^\s+/,
        Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ue.leadingWhitespace = 3 === e.firstChild.nodeType, ue.tbody = !e.getElementsByTagName("tbody").length, ue.htmlSerialize = !!e.getElementsByTagName("link").length, ue.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ue.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, ue.attributes = !e.getAttribute(fe.expando)
    }();
    var Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var Xe = /<|&#?\w+;/,
        Qe = /<tbody/i;
    ! function() {
        var t, n, i = ie.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (ue[t] = n in e) || (i.setAttribute(n, "t"), ue[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ge = /^(?:input|select|textarea)$/i,
        Ye = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ve = /^(?:focusinfocus|focusoutblur)$/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, f, h, m, g = fe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = fe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                    return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(De) || [""], a = t.length; a--;) r = Je.exec(t[a]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (d = fe.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = fe.event.special[f] || {}, u = fe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && fe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, f, h, m, g = fe.hasData(e) && fe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(De) || [""], d = t.length; d--;)
                    if (a = Je.exec(t[d]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = fe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || fe.removeEvent(e, f, g.handle), delete c[f])
                    } else
                        for (f in c) fe.event.remove(e, f + t[d], n, i, !0);
                fe.isEmptyObject(c) && (delete g.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, d, c, u, p = [i || ie],
                f = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ve.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), d = fe.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !fe.isWindow(i)) {
                    for (l = d.delegateType || f, Ve.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (i.ownerDocument || ie) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (u = 0;
                     (a = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : d.bindType || f, r = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && je(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !o && !t.isDefaultPrevented() && (!d._default || d._default.apply(p.pop(), n) === !1) && je(i) && s && i[f] && !fe.isWindow(i)) {
                    c = i[s], c && (i[s] = null), fe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (e) {}
                    fe.event.triggered = void 0, c && (i[s] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, i, o, r, s = [],
                a = oe.call(arguments),
                l = (fe._data(this, "events") || {})[e.type] || [],
                d = fe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = fe.event.handlers.call(this, e, l), t = 0;
                     (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                         (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? fe(o, this).index(l) > -1 : fe.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[fe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ke.test(o) ? this.mouseHooks : Ye.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new fe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || fe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ue.submit || (fe.event.special.submit = {
        setup: function() {
            return !fe.nodeName(this, "form") && void fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !fe.nodeName(this, "form") && void fe.event.remove(this, "._submit")
        }
    }), ue.change || (fe.event.special.change = {
        setup: function() {
            return Ge.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ge.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return fe.event.remove(this, "._change"), !Ge.test(this.nodeName)
        }
    }), ue.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = fe._data(i, t);
                o || i.addEventListener(e, n, !0), fe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = fe._data(i, t) - 1;
                o ? fe._data(i, t, o) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
            }
        }
    }), fe.fn.extend({
        on: function(e, t, n, i) {
            return x(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return x(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = b), this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0)
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        st = f(ie),
        at = st.appendChild(ie.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l = fe.contains(e.ownerDocument, e);
            if (ue.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(r = at.firstChild)), !(ue.noCloneEvent && ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (i = h(r), a = h(e), s = 0; null != (o = a[s]); ++s) i[s] && E(o, i[s]);
            if (t)
                if (n)
                    for (a = a || h(e), i = i || h(r), s = 0; null != (o = a[s]); s++) C(o, i[s]);
                else C(e, r);
            return i = h(r, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = a = o = null, r
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, s = 0, a = fe.expando, l = fe.cache, d = ue.attributes, c = fe.event.special; null != (n = e[s]); s++)
                if ((t || je(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], d || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), ne.push(o))
                }
        }
    }), fe.fn.extend({
        domManip: _,
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return We(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return _(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return _(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return _(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return _(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return We(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (ue.htmlSerialize || !et.test(e)) && (ue.leadingWhitespace || !ze.test(e)) && !Ue[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return _(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = fe(e), s = r.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), fe(r[i])[t](n), se.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var lt, dt = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        ut = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
        pt = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        ft = ie.documentElement;
    ! function() {
        function t() {
            var t, c, u = ie.documentElement;
            u.appendChild(l), d.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, e.getComputedStyle && (c = e.getComputedStyle(d), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                width: "4px"
            }).width, d.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = d.appendChild(ie.createElement("div")), t.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0",
                d.style.width = "1px", s = !parseFloat((e.getComputedStyle(t) || {}).marginRight), d.removeChild(t)), d.style.display = "none", r = 0 === d.getClientRects().length, r && (d.style.display = "", d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d.childNodes[0].style.borderCollapse = "separate", t = d.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === t[0].offsetHeight, r && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), u.removeChild(l)
        }
        var n, i, o, r, s, a, l = ie.createElement("div"),
            d = ie.createElement("div");
        d.style && (d.style.cssText = "float:left;opacity:.5", ue.opacity = "0.5" === d.style.opacity, ue.cssFloat = !!d.style.cssFloat, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === d.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.innerHTML = "", l.appendChild(d), ue.boxSizing = "" === d.style.boxSizing || "" === d.style.MozBoxSizing || "" === d.style.WebkitBoxSizing, fe.extend(ue, {
            reliableHiddenOffsets: function() {
                return null == n && t(), r
            },
            boxSizingReliable: function() {
                return null == n && t(), o
            },
            pixelMarginRight: function() {
                return null == n && t(), i
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), s
            },
            reliableMarginLeft: function() {
                return null == n && t(), a
            }
        }))
    }();
    var ht, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || ht(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), n && !ue.pixelMarginRight() && ut.test(s) && ct.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : ft.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, mt = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || ht(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), ut.test(s) && !gt.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        wt = new RegExp("^(" + He + ")(.*)$", "i"),
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        St = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        kt = ["Webkit", "O", "Moz", "ms"],
        Tt = ie.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
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
            "float": ue.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = fe.camelCase(t),
                    l = e.style;
                if (t = fe.cssProps[a] || (fe.cssProps[a] = j(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = Ie.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (fe.cssNumber[a] ? "" : "px")), ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = fe.camelCase(t);
            return t = fe.cssProps[a] || (fe.cssProps[a] = j(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = mt(e, t, i)), "normal" === r && t in St && (r = St[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, xt, function() {
                    return I(e, t, i)
                }) : I(e, t, i)
            },
            set: function(e, n, i) {
                var o = i && ht(e);
                return L(e, n, i ? H(e, t, i, ue.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ue.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(r.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(r) ? r.replace(vt, o) : r + " " + o)
        }
    }), fe.cssHooks.marginRight = N(ue.reliableMarginRight, function(e, t) {
        if (t) return pt(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"])
    }), fe.cssHooks.marginLeft = N(ue.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Pe[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ct.test(e) || (fe.cssHooks[e + t].set = L)
    }), fe.fn.extend({
        css: function(e, t) {
            return We(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (fe.isArray(t)) {
                    for (i = ht(e), o = t.length; s < o; s++) r[t[s]] = fe.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Me(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), fe.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = P.prototype.init, fe.fx.step = {};
    var Ct, Et, _t = /^(?:toggle|show|hide)$/,
        At = /queueHooks$/;
    fe.Animation = fe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, Ie.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
        },
        prefilters: [F],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), fe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
        }, i
    }, fe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Me).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = fe.isEmptyObject(e),
                r = fe.speed(t, n, i),
                s = function() {
                    var t = z(this, fe.extend({}, e), r);
                    (o || fe._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = fe.timers,
                    s = fe._data(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && At.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || fe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = fe._data(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = fe.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), fe.each(["toggle", "show", "hide"], function(e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
        }
    }), fe.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        fe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), fe.timers = [], fe.fx.tick = function() {
        var e, t = fe.timers,
            n = 0;
        for (Ct = fe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(), Ct = void 0
    }, fe.fx.timer = function(e) {
        fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
    }, fe.fx.interval = 13, fe.fx.start = function() {
        Et || (Et = e.setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.stop = function() {
        e.clearInterval(Et), Et = null
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fn.delay = function(t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    },
        function() {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                o = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ue.getSetAttribute = "t" !== n.className, ue.style = /top/.test(e.getAttribute("style")), ue.hrefNormalized = "/a" === e.getAttribute("href"), ue.checkOn = !!t.value, ue.optSelected = o.selected, ue.enctype = !!ie.createElement("form").enctype, i.disabled = !0, ue.optDisabled = !o.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), ue.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ue.radioValue = "t" === t.value
        }();
    var Dt = /\r/g,
        $t = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = fe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, fe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e)).replace($t, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === o) && (ue.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = fe.makeArray(t), s = o.length; s--;)
                        if (i = o[s], fe.inArray(fe.valHooks.option.get(i), r) > -1) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
            }
        }, ue.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Nt, jt, Ot = fe.expr.attrHandle,
        Lt = /^(?:checked|selected)$/i,
        Ht = ue.getSetAttribute,
        It = ue.input;
    fe.fn.extend({
        attr: function(e, t) {
            return We(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(), o = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? jt : Nt)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(De);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? It && Ht || !Lt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(Ht ? n : i)
        }
    }), jt = {
        set: function(e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : It && Ht || !Lt.test(n) ? e.setAttribute(!Ht && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ot[t] || fe.find.attr;
        It && Ht || !Lt.test(t) ? Ot[t] = function(e, t, i) {
            var o, r;
            return i || (r = Ot[t], Ot[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Ot[t] = r), o
        } : Ot[t] = function(e, t, n) {
            if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), It && Ht || (fe.attrHooks.value = {
        set: function(e, t, n) {
            return fe.nodeName(e, "input") ? void(e.defaultValue = t) : Nt && Nt.set(e, t, n)
        }
    }), Ht || (Nt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Ot.id = Ot.name = Ot.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Nt.set
    }, fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Nt.set(e, "" !== t && t, n)
        }
    }, fe.each(["width", "height"], function(e, t) {
        fe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), ue.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Pt = /^(?:input|select|textarea|button|object)$/i,
        Mt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return We(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, o = fe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ue.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ue.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), ue.enctype || (fe.propFix.enctype = "encoding");
    var Wt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, B(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++];)
                    if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Wt, " ")) {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = fe.trim(i), o !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++];)
                    if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Wt, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = fe.trim(i), o !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, B(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = fe(this), r = e.match(De) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = B(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(Wt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = e.location,
        Ft = fe.now(),
        Rt = /\?/,
        zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = fe.trim(t + "");
        return o && !fe.trim(o.replace(zt, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : fe.error("Invalid JSON: " + t)
    }, fe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var Bt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gt = /^(?:GET|HEAD)$/,
        Yt = /^\/\//,
        Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Vt = {},
        Jt = {},
        Zt = "*/".concat("*"),
        en = qt.href,
        tn = Kt.exec(en.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Qt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
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
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, fe.ajaxSettings), t) : Q(fe.ajaxSettings, e)
        },
        ajaxPrefilter: U(Vt),
        ajaxTransport: U(Jt),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, u, y, b, x, k = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), c = void 0, a = o || "", S.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, i && (b = G(p, S, i)), b = Y(p, b, S, r), r ? (p.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (fe.lastModified[s] = x), x = S.getResponseHeader("etag"), x && (fe.etag[s] = x)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, u = b.data, y = b.error, r = !y)) : (y = k, !t && k || (k = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || k) + "", r ? m.resolveWith(f, [u, k, S]) : m.rejectWith(f, [S, k, y]), S.statusCode(v), v = void 0, d && h.trigger(r ? "ajaxSuccess" : "ajaxError", [S, p, r ? u : y]), g.fireWith(f, [S, k]), d && (h.trigger("ajaxComplete", [S, p]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, d, c, u, p = fe.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                m = fe.Deferred(),
                g = fe.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!u)
                                for (u = {}; t = Xt.exec(a);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else S.always(e[S.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (m.promise(S).complete = g.add, S.success = S.done, S.error = S.fail, p.url = ((t || p.url || en) + "").replace(Bt, "").replace(Yt, tn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(De) || [""], null == p.crossDomain && (o = Kt.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), X(Vt, p, n, S), 2 === w) return S;
            d = fe.event && p.global, d && 0 === fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Gt.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Rt.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ut.test(s) ? s.replace(Ut, "$1_=" + Ft++) : s + (Rt.test(s) ? "&" : "?") + "_=" + Ft++)), p.ifModified && (fe.lastModified[s] && S.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && S.setRequestHeader("If-None-Match", fe.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers) S.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (p.beforeSend.call(f, S, p) === !1 || 2 === w)) return S.abort();
            x = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) S[r](p[r]);
            if (c = X(Jt, p, n, S)) {
                if (S.readyState = 1, d && h.trigger("ajaxSend", [S, p]), 2 === w) return S;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, c.send(y, i)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, i, o) {
            return fe.isFunction(n) && (o = o || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fe.fn.extend({
        wrapAll: function(e) {
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function(e) {
        return ue.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : V(e)
    }, fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    };
    var nn = /%20/g,
        on = /\[\]$/,
        rn = /\r?\n/g,
        sn = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) J(n, e[n], t, o);
        return i.join("&").replace(nn, "+")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !sn.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var ln = 0,
        dn = {},
        cn = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in dn) dn[e](void 0, !0)
    }), ue.cors = !!cn && "withCredentials" in cn, cn = ue.ajax = !!cn, cn && fe.ajaxTransport(function(t) {
        if (!t.crossDomain || ue.cors) {
            var n;
            return {
                send: function(i, o) {
                    var r, s = t.xhr(),
                        a = ++ln;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                    s.send(t.hasContent && t.data || null), n = function(e, i) {
                        var r, l, d;
                        if (n && (i || 4 === s.readyState))
                            if (delete dn[a], n = void 0, s.onreadystatechange = fe.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                d = {}, r = s.status, "string" == typeof s.responseText && (d.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (e) {
                                    l = ""
                                }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
                            }
                        d && o(r, l, d, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = dn[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || fe("head")[0] || ie.documentElement;
            return {
                send: function(i, o) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var un = [],
        pn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = un.pop() || fe.expando + "_" + Ft++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (pn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(pn, "$1" + o) : t.jsonp !== !1 && (t.url += (Rt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || fe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? fe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, un.push(o)), s && fe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = Se.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && fe(o).remove(), fe.merge([], i.childNodes))
    };
    var fn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = fe.trim(e.slice(a, e.length)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && fe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, d, c = fe.css(e, "position"),
                u = fe(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = fe.css(e, "top"), l = fe.css(e, "left"), d = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [r, l]) > -1, d ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return t = r.documentElement, fe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - fe.css(i, "marginTop", !0),
                    left: t.left - n.left - fe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || ft
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function(i) {
            return We(this, function(e, i, o) {
                var r = te(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? fe(r).scrollLeft() : o, n ? o : fe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = N(ue.pixelPosition, function(e, n) {
            if (n) return n = mt(e, t), ut.test(n) ? fe(e).position()[t] + "px" : n
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            fe.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return We(this, function(t, n, i) {
                    var o;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? fe.css(t, n, s) : fe.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function() {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var hn = e.jQuery,
        mn = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = mn), t && e.jQuery === fe && (e.jQuery = hn), fe
    }, t || (e.jQuery = e.$ = fe), fe
}),
    function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var o = e.Event(n);
                return t.trigger(o, i), o.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && e.data("remote") !== !1
            },
            handleRemote: function(i) {
                var o, r, s, a, l, d;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
                    return d = {
                        type: o || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function(e, o) {
                            return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !!n.fire(i, "ajax:beforeSend", [e, o]) && void i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(r)
                    }, a && (d.xhrFields = {
                        withCredentials: a
                    }), r && (d.url = r), n.ajax(d)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (e) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var o = n.href(i),
                    r = i.data("method"),
                    s = i.attr("target"),
                    a = n.csrfToken(),
                    l = n.csrfParam(),
                    d = e('<form method="post" action="' + o + '"></form>'),
                    c = '<input name="_method" value="' + r + '" type="hidden" />';
                l === t || a === t || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && d.attr("target", s), d.hide().append(c).appendTo("body"), d.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    o = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        o = n.confirm(i)
                    } catch (e) {
                        (console.error || console.log).call(console, e.stack || e)
                    }
                    t = n.fire(e, "confirm:complete", [o])
                }
                return o && t
            },
            blankInputs: function(t, n, i) {
                var o, r, s, a, l = e(),
                    d = n || "input,textarea",
                    c = t.find(d),
                    u = {};
                return c.each(function() {
                    o = e(this), o.is("input[type=radio]") ? (a = o.attr("name"), u[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (s = t.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), u[a] = a)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val(), r === i && (l = l.add(o)))
                }), !!l.length && l
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(e(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(e(this))
        }), i.on("click.rails", n.linkClickSelector, function(t) {
            var i = e(this),
                o = i.data("method"),
                r = i.data("params"),
                s = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (s && (!o || "GET" === o) && !r) return !0;
                var a = n.handleRemote(i);
                return a === !1 ? n.enableElement(i) : a.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return o ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return o === !1 ? n.enableFormElement(i) : o.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.on("submit.rails", n.formSubmitSelector, function(i) {
            var o, r, s = e(this),
                a = n.isRemote(s);
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (s.attr("novalidate") === t)
                if (s.data("ujs:formnovalidate-button") === t) {
                    if (o = n.blankInputs(s, n.requiredInputSelector, !1), o && n.fire(s, "ajax:aborted:required", [o])) return n.stopEverything(i)
                } else s.data("ujs:formnovalidate-button", t);
            if (a) {
                if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [r]);
                    return l || setTimeout(function() {
                        n.enableFormElements(s)
                    }, 13), l
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function() {
                n.disableFormElements(s)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var o = i.attr("name"),
                r = o ? {
                    name: o,
                    value: i.val()
                } : null,
                s = i.closest("form");
            0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", r), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("resize.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= e - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            d = a ? s : t;
        return null != n && o <= n ? "top" : null != i && l + d >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, t, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    d = e.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), ! function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function e(e, t, n) {
        if (n) {
            var i = document.createDocumentFragment(),
                o = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var r = n.cloneNode(!0); r.childNodes.length;) i.appendChild(r.firstChild);
            e.appendChild(i)
        }
    }

    function t(t) {
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function(i) {
                    var o = t._cachedTarget[i.id];
                    o || (o = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, o)
                })
            }
        }, t.onreadystatechange()
    }

    function n(n) {
        function o() {
            for (var n = 0; n < h.length;) {
                var a = h[n],
                    l = a.parentNode,
                    d = i(l);
                if (d) {
                    var c = a.getAttribute("xlink:href") || a.getAttribute("href");
                    if (r)
                        if (!s.validate || s.validate(c, d, a)) {
                            l.removeChild(a);
                            var u = c.split("#"),
                                g = u.shift(),
                                v = u.join("#");
                            if (g.length) {
                                var y = p[g];
                                y || (y = p[g] = new XMLHttpRequest, y.open("GET", g), y.send(), y._embeds = []), y._embeds.push({
                                    parent: l,
                                    svg: d,
                                    id: v
                                }), t(y)
                            } else e(l, d, document.getElementById(v))
                        } else ++n, ++m
                } else ++n
            }(!h.length || h.length - m > 0) && f(o, 67)
        }
        var r, s = Object(n),
            a = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            l = /\bAppleWebKit\/(\d+)\b/,
            d = /\bEdge\/12\.(\d+)\b/,
            c = /\bEdge\/.(\d+)\b/,
            u = window.top !== window.self;
        r = "polyfill" in s ? s.polyfill : a.test(navigator.userAgent) || (navigator.userAgent.match(d) || [])[1] < 10547 || (navigator.userAgent.match(l) || [])[1] < 537 || c.test(navigator.userAgent) && u;
        var p = {},
            f = window.requestAnimationFrame || setTimeout,
            h = document.getElementsByTagName("use"),
            m = 0;
        r && o()
    }

    function i(e) {
        for (var t = e;
             "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return n
}), ! function(e, t, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(t, n) : e[t] = n()
}(this, "bowser", function() {
    function e(e) {
        function t(t) {
            var n = e.match(t);
            return n && n.length > 1 && n[1] || ""
        }

        function n(t) {
            var n = e.match(t);
            return n && n.length > 1 && n[2] || ""
        }
        var i, o = t(/(ipod|iphone|ipad)/i).toLowerCase(),
            r = /like android/i.test(e),
            a = !r && /android/i.test(e),
            l = /nexus\s*[0-6]\s*/i.test(e),
            d = !l && /nexus\s*[0-9]+/i.test(e),
            c = /CrOS/.test(e),
            u = /silk/i.test(e),
            p = /sailfish/i.test(e),
            f = /tizen/i.test(e),
            h = /(web|hpw)os/i.test(e),
            m = /windows phone/i.test(e),
            g = (/SamsungBrowser/i.test(e), !m && /windows/i.test(e)),
            v = !o && !u && /macintosh/i.test(e),
            y = !a && !p && !f && !h && /linux/i.test(e),
            b = t(/edge\/(\d+(\.\d+)?)/i),
            w = t(/version\/(\d+(\.\d+)?)/i),
            x = /tablet/i.test(e),
            S = !x && /[^-]mobi/i.test(e),
            k = /xbox/i.test(e);
        /opera/i.test(e) ? i = {
            name: "Opera",
            opera: s,
            version: w || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        } : /opr|opios/i.test(e) ? i = {
            name: "Opera",
            opera: s,
            version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
        } : /SamsungBrowser/i.test(e) ? i = {
            name: "Samsung Internet for Android",
            samsungBrowser: s,
            version: w || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /coast/i.test(e) ? i = {
            name: "Opera Coast",
            coast: s,
            version: w || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        } : /yabrowser/i.test(e) ? i = {
            name: "Yandex Browser",
            yandexbrowser: s,
            version: w || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /ucbrowser/i.test(e) ? i = {
            name: "UC Browser",
            ucbrowser: s,
            version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        } : /mxios/i.test(e) ? i = {
            name: "Maxthon",
            maxthon: s,
            version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        } : /epiphany/i.test(e) ? i = {
            name: "Epiphany",
            epiphany: s,
            version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        } : /puffin/i.test(e) ? i = {
            name: "Puffin",
            puffin: s,
            version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        } : /sleipnir/i.test(e) ? i = {
            name: "Sleipnir",
            sleipnir: s,
            version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        } : /k-meleon/i.test(e) ? i = {
            name: "K-Meleon",
            kMeleon: s,
            version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        } : m ? (i = {
            name: "Windows Phone",
            windowsphone: s
        }, b ? (i.msedge = s, i.version = b) : (i.msie = s, i.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? i = {
            name: "Internet Explorer",
            msie: s,
            version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : c ? i = {
            name: "Chrome",
            chromeos: s,
            chromeBook: s,
            chrome: s,
            version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /chrome.+? edge/i.test(e) ? i = {
            name: "Microsoft Edge",
            msedge: s,
            version: b
        } : /vivaldi/i.test(e) ? i = {
            name: "Vivaldi",
            vivaldi: s,
            version: t(/vivaldi\/(\d+(\.\d+)?)/i) || w
        } : p ? i = {
            name: "Sailfish",
            sailfish: s,
            version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(e) ? i = {
            name: "SeaMonkey",
            seamonkey: s,
            version: t(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel|fxios/i.test(e) ? (i = {
            name: "Firefox",
            firefox: s,
            version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (i.firefoxos = s)) : u ? i = {
            name: "Amazon Silk",
            silk: s,
            version: t(/silk\/(\d+(\.\d+)?)/i)
        } : /phantom/i.test(e) ? i = {
            name: "PhantomJS",
            phantom: s,
            version: t(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /slimerjs/i.test(e) ? i = {
            name: "SlimerJS",
            slimer: s,
            version: t(/slimerjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? i = {
            name: "BlackBerry",
            blackberry: s,
            version: w || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : h ? (i = {
            name: "WebOS",
            webos: s,
            version: w || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        }, /touchpad\//i.test(e) && (i.touchpad = s)) : /bada/i.test(e) ? i = {
            name: "Bada",
            bada: s,
            version: t(/dolfin\/(\d+(\.\d+)?)/i)
        } : f ? i = {
            name: "Tizen",
            tizen: s,
            version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
        } : /qupzilla/i.test(e) ? i = {
            name: "QupZilla",
            qupzilla: s,
            version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
        } : /chromium/i.test(e) ? i = {
            name: "Chromium",
            chromium: s,
            version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
        } : /chrome|crios|crmo/i.test(e) ? i = {
            name: "Chrome",
            chrome: s,
            version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : a ? i = {
            name: "Android",
            version: w
        } : /safari|applewebkit/i.test(e) ? (i = {
            name: "Safari",
            safari: s
        }, w && (i.version = w)) : o ? (i = {
            name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
        }, w && (i.version = w)) : i = /googlebot/i.test(e) ? {
            name: "Googlebot",
            googlebot: s,
            version: t(/googlebot\/(\d+(\.\d+))/i) || w
        } : {
            name: t(/^(.*)\/(.*) /),
            version: n(/^(.*)\/(.*) /)
        }, !i.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (i.name = i.name || "Blink", i.blink = s) : (i.name = i.name || "Webkit", i.webkit = s), !i.version && w && (i.version = w)) : !i.opera && /gecko\//i.test(e) && (i.name = i.name || "Gecko", i.gecko = s, i.version = i.version || t(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || i.msedge || !a && !i.silk ? i.windowsphone || i.msedge || !o ? v ? i.mac = s : k ? i.xbox = s : g ? i.windows = s : y && (i.linux = s) : (i[o] = s, i.ios = s) : i.android = s;
        var T = "";
        i.windowsphone ? T = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (T = t(/os (\d+([_\s]\d+)*) like mac os x/i), T = T.replace(/[_\s]/g, ".")) : a ? T = t(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? T = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? T = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? T = t(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (T = t(/tizen[\/\s](\d+(\.\d+)*)/i)), T && (i.osversion = T);
        var C = T.split(".")[0];
        return x || d || "ipad" == o || a && (3 == C || C >= 4 && !S) || i.silk ? i.tablet = s : (S || "iphone" == o || "ipod" == o || a || l || i.blackberry || i.webos || i.bada) && (i.mobile = s), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = s : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = s : i.x = s, i
    }

    function t(e) {
        return e.split(".").length
    }

    function n(e, t) {
        var n, i = [];
        if (Array.prototype.map) return Array.prototype.map.call(e, t);
        for (n = 0; n < e.length; n++) i.push(t(e[n]));
        return i
    }

    function i(e) {
        for (var i = Math.max(t(e[0]), t(e[1])), o = n(e, function(e) {
            var o = i - t(e);
            return e += new Array(o + 1).join(".0"), n(e.split("."), function(e) {
                return new Array(20 - e.length).join("0") + e
            }).reverse()
        }); --i >= 0;) {
            if (o[0][i] > o[1][i]) return 1;
            if (o[0][i] !== o[1][i]) return -1;
            if (0 === i) return 0
        }
    }

    function o(t, n, o) {
        var r = a;
        "string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (r = e(o));
        var s = "" + r.version;
        for (var l in t)
            if (t.hasOwnProperty(l) && r[l]) {
                if ("string" != typeof t[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(t));
                return i([s, t[l]]) < 0
            }
        return n
    }

    function r(e, t, n) {
        return !o(e, t, n)
    }
    var s = !0,
        a = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
    return a.test = function(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            if ("string" == typeof n && n in a) return !0
        }
        return !1
    }, a.isUnsupportedBrowser = o, a.compareVersions = i, a.check = r, a._detect = e, a
});
var Util = function(e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n(e) {
            return (e[0] || e).nodeType
        }

        function i() {
            return {
                bindType: a.end,
                delegateType: a.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function o() {
            if (window.QUnit) return !1;
            var e = document.createElement("bootstrap");
            for (var t in d)
                if (void 0 !== e.style[t]) return {
                    end: d[t]
                };
            return !1
        }

        function r(t) {
            var n = this,
                i = !1;
            return e(this).one(c.TRANSITION_END, function() {
                i = !0
            }), setTimeout(function() {
                i || c.triggerTransitionEnd(n)
            }, t), this
        }

        function s() {
            a = o(), e.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (e.event.special[c.TRANSITION_END] = i())
        }
        var a = !1,
            l = 1e6,
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            c = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do e += ~~(Math.random() * l); while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    e(t).trigger(a.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(a)
                },
                typeCheckConfig: function(e, i, o) {
                    for (var r in o)
                        if (o.hasOwnProperty(r)) {
                            var s = o[r],
                                a = i[r],
                                l = a && n(a) ? "element" : t(a);
                            if (!new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                        }
                }
            };
        return s(), c
    }(jQuery),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    Collapse = function(e) {
        var t = "collapse",
            n = "4.0.0-alpha.6",
            i = "bs.collapse",
            o = "." + i,
            r = ".data-api",
            s = e.fn[t],
            a = 600,
            l = {
                toggle: !0,
                parent: ""
            },
            d = {
                toggle: "boolean",
                parent: "string"
            },
            c = {
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                CLICK_DATA_API: "click" + o + r
            },
            u = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            },
            p = {
                WIDTH: "width",
                HEIGHT: "height"
            },
            f = {
                ACTIVES: ".card > .show, .card > .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            h = function() {
                function o(t, n) {
                    _classCallCheck(this, o), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                return o.prototype.toggle = function() {
                    e(this._element).hasClass(u.SHOW) ? this.hide() : this.show()
                }, o.prototype.show = function() {
                    var t = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (!e(this._element).hasClass(u.SHOW)) {
                        var n = void 0,
                            r = void 0;
                        if (this._parent && (n = e.makeArray(e(this._parent).find(f.ACTIVES)), n.length || (n = null)), !(n && (r = e(n).data(i), r && r._isTransitioning))) {
                            var s = e.Event(c.SHOW);
                            if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                n && (o._jQueryInterface.call(e(n), "hide"), r || e(n).data(i, null));
                                var l = this._getDimension();
                                e(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var d = function() {
                                    e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(c.SHOWN)
                                };
                                if (!Util.supportsTransitionEnd()) return void d();
                                var p = l[0].toUpperCase() + l.slice(1),
                                    h = "scroll" + p;
                                e(this._element).one(Util.TRANSITION_END, d).emulateTransitionEnd(a), this._element.style[l] = this._element[h] + "px"
                            }
                        }
                    }
                }, o.prototype.hide = function() {
                    var t = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (e(this._element).hasClass(u.SHOW)) {
                        var n = e.Event(c.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension(),
                                o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[i] = this._element[o] + "px", Util.reflow(this._element), e(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(u.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                            var r = function() {
                                t.setTransitioning(!1), e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)
                            };
                            return this._element.style[i] = "", Util.supportsTransitionEnd() ? void e(this._element).one(Util.TRANSITION_END, r).emulateTransitionEnd(a) : void r()
                        }
                    }
                }, o.prototype.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, o.prototype.dispose = function() {
                    e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, o.prototype._getConfig = function(n) {
                    return n = e.extend({}, l, n), n.toggle = Boolean(n.toggle), Util.typeCheckConfig(t, n, d), n
                }, o.prototype._getDimension = function() {
                    var t = e(this._element).hasClass(p.WIDTH);
                    return t ? p.WIDTH : p.HEIGHT
                }, o.prototype._getParent = function() {
                    var t = this,
                        n = e(this._config.parent)[0],
                        i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(n).find(i).each(function(e, n) {
                        t._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
                    }), n
                }, o.prototype._addAriaAndCollapsedClass = function(t, n) {
                    if (t) {
                        var i = e(t).hasClass(u.SHOW);
                        t.setAttribute("aria-expanded", i), n.length && e(n).toggleClass(u.COLLAPSED, !i).attr("aria-expanded", i)
                    }
                }, o._getTargetFromElement = function(t) {
                    var n = Util.getSelectorFromElement(t);
                    return n ? e(n)[0] : null
                }, o._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this),
                            r = n.data(i),
                            s = e.extend({}, l, n.data(), "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t);
                        if (!r && s.toggle && /show|hide/.test(t) && (s.toggle = !1), r || (r = new o(this, s), n.data(i, r)), "string" == typeof t) {
                            if (void 0 === r[t]) throw new Error('No method named "' + t + '"');
                            r[t]()
                        }
                    })
                }, _createClass(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return l
                    }
                }]), o
            }();
        return e(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function(t) {
            t.preventDefault();
            var n = h._getTargetFromElement(this),
                o = e(n).data(i),
                r = o ? "toggle" : e(this).data();
            h._jQueryInterface.call(e(n), r)
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
            return e.fn[t] = s, h._jQueryInterface
        }, h
    }(jQuery),
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    Alert = function(e) {
        var t = "alert",
            n = "4.0.0-alpha.6",
            i = "bs.alert",
            o = "." + i,
            r = ".data-api",
            s = e.fn[t],
            a = 150,
            l = {
                DISMISS: '[data-dismiss="alert"]'
            },
            d = {
                CLOSE: "close" + o,
                CLOSED: "closed" + o,
                CLICK_DATA_API: "click" + o + r
            },
            c = {
                ALERT: "alert",
                FADE: "fade",
                SHOW: "show"
            },
            u = function() {
                function t(e) {
                    _classCallCheck(this, t), this._element = e
                }
                return t.prototype.close = function(e) {
                    e = e || this._element;
                    var t = this._getRootElement(e),
                        n = this._triggerCloseEvent(t);
                    n.isDefaultPrevented() || this._removeElement(t)
                }, t.prototype.dispose = function() {
                    e.removeData(this._element, i), this._element = null
                }, t.prototype._getRootElement = function(t) {
                    var n = Util.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = e(n)[0]), i || (i = e(t).closest("." + c.ALERT)[0]), i
                }, t.prototype._triggerCloseEvent = function(t) {
                    var n = e.Event(d.CLOSE);
                    return e(t).trigger(n), n
                }, t.prototype._removeElement = function(t) {
                    var n = this;
                    return e(t).removeClass(c.SHOW), Util.supportsTransitionEnd() && e(t).hasClass(c.FADE) ? void e(t).one(Util.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(a) : void this._destroyElement(t)
                }, t.prototype._destroyElement = function(t) {
                    e(t).detach().trigger(d.CLOSED).remove()
                }, t._jQueryInterface = function(n) {
                    return this.each(function() {
                        var o = e(this),
                            r = o.data(i);
                        r || (r = new t(this), o.data(i, r)), "close" === n && r[n](this)
                    })
                }, t._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, _createClass(t, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }]), t
            }();
        return e(document).on(d.CLICK_DATA_API, l.DISMISS, u._handleDismiss(new u)), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
            return e.fn[t] = s, u._jQueryInterface
        }, u
    }(jQuery),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    Modal = function(e) {
        var t = "modal",
            n = "4.0.0-alpha.6",
            i = "bs.modal",
            o = "." + i,
            r = ".data-api",
            s = e.fn[t],
            a = 300,
            l = 150,
            d = 27,
            c = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            u = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            p = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                FOCUSIN: "focusin" + o,
                RESIZE: "resize" + o,
                CLICK_DISMISS: "click.dismiss" + o,
                KEYDOWN_DISMISS: "keydown.dismiss" + o,
                MOUSEUP_DISMISS: "mouseup.dismiss" + o,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + o,
                CLICK_DATA_API: "click" + o + r
            },
            f = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            },
            h = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            },
            m = function() {
                function r(t, n) {
                    _classCallCheck(this, r), this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }
                return r.prototype.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, r.prototype.show = function(t) {
                    var n = this;
                    if (this._isTransitioning) throw new Error("Modal is transitioning");
                    Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
                    var i = e.Event(p.SHOW, {
                        relatedTarget: t
                    });
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(f.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(p.CLICK_DISMISS, h.DATA_DISMISS, function(e) {
                        return n.hide(e)
                    }), e(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                        e(n._element).one(p.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(t)
                    }))
                }, r.prototype.hide = function(t) {
                    var n = this;
                    if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                    var i = Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE);
                    i && (this._isTransitioning = !0);
                    var o = e.Event(p.HIDE);
                    e(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(p.FOCUSIN), e(this._element).removeClass(f.SHOW), e(this._element).off(p.CLICK_DISMISS), e(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? e(this._element).one(Util.TRANSITION_END, function(e) {
                        return n._hideModal(e)
                    }).emulateTransitionEnd(a) : this._hideModal())
                }, r.prototype.dispose = function() {
                    e.removeData(this._element, i), e(window, document, this._element, this._backdrop).off(o), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                }, r.prototype._getConfig = function(n) {
                    return n = e.extend({}, c, n), Util.typeCheckConfig(t, n, u), n
                }, r.prototype._showElement = function(t) {
                    var n = this,
                        i = Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && Util.reflow(this._element), e(this._element).addClass(f.SHOW), this._config.focus && this._enforceFocus();
                    var o = e.Event(p.SHOWN, {
                            relatedTarget: t
                        }),
                        r = function() {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
                        };
                    i ? e(this._dialog).one(Util.TRANSITION_END, r).emulateTransitionEnd(a) : r()
                }, r.prototype._enforceFocus = function() {
                    var t = this;
                    e(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n) {
                        document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                    })
                }, r.prototype._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(p.KEYDOWN_DISMISS, function(e) {
                        e.which === d && t.hide()
                    }) : this._isShown || e(this._element).off(p.KEYDOWN_DISMISS)
                }, r.prototype._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? e(window).on(p.RESIZE, function(e) {
                        return t._handleUpdate(e)
                    }) : e(window).off(p.RESIZE)
                }, r.prototype._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"),
                        this._isTransitioning = !1, this._showBackdrop(function() {
                        e(document.body).removeClass(f.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(p.HIDDEN)
                    })
                }, r.prototype._removeBackdrop = function() {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, r.prototype._showBackdrop = function(t) {
                    var n = this,
                        i = e(this._element).hasClass(f.FADE) ? f.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var o = Util.supportsTransitionEnd() && i;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = f.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(p.CLICK_DISMISS, function(e) {
                            return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                        }), o && Util.reflow(this._backdrop), e(this._backdrop).addClass(f.SHOW), !t) return;
                        if (!o) return void t();
                        e(this._backdrop).one(Util.TRANSITION_END, t).emulateTransitionEnd(l)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(f.SHOW);
                        var r = function() {
                            n._removeBackdrop(), t && t()
                        };
                        Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) ? e(this._backdrop).one(Util.TRANSITION_END, r).emulateTransitionEnd(l) : r()
                    } else t && t()
                }, r.prototype._handleUpdate = function() {
                    this._adjustDialog()
                }, r.prototype._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, r.prototype._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, r.prototype._checkScrollbar = function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, r.prototype._setScrollbar = function() {
                    var t = parseInt(e(h.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                }, r.prototype._resetScrollbar = function() {
                    document.body.style.paddingRight = this._originalBodyPadding
                }, r.prototype._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = f.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.offsetWidth - e.clientWidth;
                    return document.body.removeChild(e), t
                }, r._jQueryInterface = function(t, n) {
                    return this.each(function() {
                        var o = e(this).data(i),
                            s = e.extend({}, r.Default, e(this).data(), "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t);
                        if (o || (o = new r(this, s), e(this).data(i, o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new Error('No method named "' + t + '"');
                            o[t](n)
                        } else s.show && o.show(n)
                    })
                }, _createClass(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }]), r
            }();
        return e(document).on(p.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
            var n = this,
                o = void 0,
                r = Util.getSelectorFromElement(this);
            r && (o = e(r)[0]);
            var s = e(o).data(i) ? "toggle" : e.extend({}, e(o).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var a = e(o).one(p.SHOW, function(t) {
                t.isDefaultPrevented() || a.one(p.HIDDEN, function() {
                    e(n).is(":visible") && n.focus()
                })
            });
            m._jQueryInterface.call(e(o), s, this)
        }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
            return e.fn[t] = s, m._jQueryInterface
        }, m
    }(jQuery);
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function(t) {
        var n = this,
            i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var c = e * s + (t * a.options.slidesPerRow + n);
                        r.get(c) && d.appendChild(r.get(c))
                    }
                    l.appendChild(d)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, r, s = this,
            a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = n;
                    break
                }
                n = t[o]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o = this,
            r = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, o.options.variableWidth === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i, o = this;
        return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, n])
                    })
                }, i.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                }, i.src = n
            })
        }
        var n, i, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, r = this,
            s = e("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, n, i]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            3 > t ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad())
        }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                    for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
        else if ("multiple" === r) e.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a, l = null,
            d = this;
        return t = t || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (t === !1 && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 ? d.animateSlide(s, function() {
            d.postSlide(i)
        }) : d.postSlide(i))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 ? d.animateSlide(s, function() {
            d.postSlide(i)
        }) : d.postSlide(i))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > i ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (n !== !0 ? (d.fadeSlideOut(r), d.fadeSlide(o, function() {
            d.postSlide(o)
        })) : d.postSlide(o), void d.animateHeight()) : void(n !== !0 ? d.animateSlide(l, function() {
            d.postSlide(o)
        }) : d.postSlide(o))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function() {
        var e, t, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (t = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != t && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, t]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, n, i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; s > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
        return i
    }
}), ! function() {
    "use strict";

    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, e.prototype.disable = function() {
        return this.enabled = !1, this
    }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function() {
        return this.group.next(this)
    }, e.prototype.previous = function() {
        return this.group.previous(this)
    }, e.invokeAll = function(e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var o = 0, r = t.length; r > o; o++) t[o][e]()
    }, e.destroyAll = function() {
        e.invokeAll("destroy")
    }, e.disableAll = function() {
        e.invokeAll("disable")
    }, e.enableAll = function() {
        e.Context.refreshAll();
        for (var t in n) n[t].enabled = !0;
        return this
    }, e.refreshAll = function() {
        e.Context.refreshAll()
    }, e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = o.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            i = {},
            o = window.Waypoint,
            r = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                n = this.element == this.element.window;
            e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || o.isTouch) && (t.didScroll = !0, o.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            o.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    o = i.newScroll > i.oldScroll,
                    r = o ? i.forward : i.backward;
                for (var s in this.waypoints[n]) {
                    var a = this.waypoints[n][s];
                    if (null !== a.triggerPoint) {
                        var l = i.oldScroll < a.triggerPoint,
                            d = i.newScroll >= a.triggerPoint,
                            c = l && d,
                            u = !l && !d;
                        (c || u) && (a.queueTrigger(r), e[a.group.id] = a.group)
                    }
                }
            }
            for (var p in e) e[p].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, o = e.length; o > i; i++) e[i].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                i = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in e) {
                var s = e[r];
                for (var a in this.waypoints[r]) {
                    var l, d, c, u, p, f = this.waypoints[r][a],
                        h = f.options.offset,
                        m = f.triggerPoint,
                        g = 0,
                        v = null == m;
                    f.element !== f.element.window && (g = f.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(g + l - h), d = m < s.oldScroll, c = f.triggerPoint >= s.oldScroll, u = d && c, p = !d && !c, !v && u ? (f.queueTrigger(s.backward), i[f.group.id] = f.group) : !v && p ? (f.queueTrigger(s.forward), i[f.group.id] = f.group) : v && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), i[f.group.id] = f.group)
                }
            }
            return o.requestAnimationFrame(function() {
                for (var e in i) i[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, t.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            r && r(), t.refreshAll()
        }, o.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, o.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
                vertical: {},
                horizontal: {}
            },
            o = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    o = "up" === n || "left" === n;
                i.sort(o ? t : e);
                for (var r = 0, s = i.length; s > r; r += 1) {
                    var a = i[r];
                    (a.options.continuous || r === i.length - 1) && a.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = o.Adapter.inArray(t, this.waypoints),
                i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = o.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = o.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return i[e.axis][e.name] || new n(e)
        }, o.Group = n
    }(),
    function() {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            n = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, n) {
            e.prototype[n] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
            e[i] = t[i]
        }), n.adapters.push({
            name: "jquery",
            Adapter: e
        }), n.Adapter = e
    }(),
    function() {
        "use strict";

        function e(e) {
            return function() {
                var n = [],
                    i = arguments[0];
                return e.isFunction(arguments[0]) && (i = e.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                    var o = e.extend({}, i, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), n.push(new t(o))
                }), n
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(), ! function() {
    "use strict";

    function e() {}

    function t(e) {
        this.options = n.Adapter.extend({}, t.defaults, e), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
    }
    var n = window.Waypoint;
    t.prototype.createWaypoints = function() {
        for (var e = {
            vertical: [{
                down: "enter",
                up: "exited",
                offset: "100%"
            }, {
                down: "entered",
                up: "exit",
                offset: "bottom-in-view"
            }, {
                down: "exit",
                up: "entered",
                offset: 0
            }, {
                down: "exited",
                up: "enter",
                offset: function() {
                    return -this.adapter.outerHeight()
                }
            }],
            horizontal: [{
                right: "enter",
                left: "exited",
                offset: "100%"
            }, {
                right: "entered",
                left: "exit",
                offset: "right-in-view"
            }, {
                right: "exit",
                left: "entered",
                offset: 0
            }, {
                right: "exited",
                left: "enter",
                offset: function() {
                    return -this.adapter.outerWidth()
                }
            }]
        }, t = 0, n = e[this.axis].length; n > t; t++) {
            var i = e[this.axis][t];
            this.createWaypoint(i)
        }
    }, t.prototype.createWaypoint = function(e) {
        var t = this;
        this.waypoints.push(new n({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: function(e) {
                return function(n) {
                    t.options[e[n]].call(t, n)
                }
            }(e),
            offset: e.offset,
            horizontal: this.options.horizontal
        }))
    }, t.prototype.destroy = function() {
        for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].destroy();
        this.waypoints = []
    }, t.prototype.disable = function() {
        for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].disable()
    }, t.prototype.enable = function() {
        for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].enable()
    }, t.defaults = {
        context: window,
        enabled: !0,
        enter: e,
        entered: e,
        exit: e,
        exited: e
    }, n.Inview = t
}(),
    function(e, t) {
        function n() {
            var n = t(e).scrollTop(),
                i = t("#header");
            Math.abs(o - n) <= r || (n > 0 ? i.addClass("scrolled") : i.removeClass("scrolled"), n > o && n > s ? i.addClass("moved-up") : (n < s || o - n > 150) && i.removeClass("moved-up"), o = n)
        }
        t("#header").on("show.bs.collapse", function() {
            t("#header").addClass("opened"), t("html").addClass("menu-showed")
        }).on("hide.bs.collapse", function() {
            t("#header").removeClass("opened"), t("html").removeClass("menu-showed")
        });
        var i, o = 0,
            r = 5,
            s = 80;
        t(e).scroll(function() {
            i = !0
        }), setInterval(function() {
            i && (n(), i = !1)
        }, 250)
    }(window, jQuery),
    function(e, t) {
        e.showAlert = function(e, n) {
            n = n || "danger";
            var i = t("#flash-messages"),
                o = '<div class="alert alert-' + n + ' alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + e + "</div>";
            t(o).appendTo(i).delay(5e3).queue(function() {
                t(this).alert("close"), t(this).dequeue()
            })
        }
    }(window, jQuery),
    function(e, t) {
        function n(e, t, n, i) {
            for (n = e.length; n;) t = Math.random() * n-- | 0, i = e[n], e[n] = e[t], e[t] = i
        }
        var i = {};
        t(document).on("ready", function() {
            function e(e) {
                var t = e.find(".front"),
                    n = d.indexOf(t.data("id"));
                n >= 0 && d.splice(n, 1);
                var i = o();
                e.find(".front").addClass("to_remove"), e.find(".flipper").append(i.clone().addClass("back")).addClass("play"), setTimeout(function() {
                    e.find(".to_remove").remove(), e.find(".back").addClass("front").removeClass("back"), e.find(".flipper").removeClass("play")
                }, 600)
            }

            function o() {
                l + 1 == a && n(s), l < a - 1 ? l++ : l = 0;
                var e = s.eq(l),
                    t = d.indexOf(e.data("id"));
                return t < 0 ? (d.push(e.data("id")), e) : o()
            }
            t.each(i, function() {
                clearTimeout(this)
            });
            var r, s, a, l, d;
            if (t("#team").length) {
                r = t(".team .team__item_main"), l = -1, d = [], s = t("#team .team-member").clone(), s.each(function() {
                    var e = t(this).find("picture");
                    e.find("img").each(function() {
                        t(this).prop("src", t(this).data("src"))
                    }), e.find("source").each(function() {
                        t(this).prop("srcset", t(this).data("srcset"))
                    })
                }), a = s.length, t("#team").remove();
                for (var c = a > 8 ? 8 : a, u = 0; u < c; u++) r.eq(u).find(".flipper").append(o().clone().addClass("front"));
                a > 8 && r.each(function(n) {
                    function o() {
                        r = Math.random() * (d - l) + l, s = setTimeout(function() {
                            e(a), o()
                        }, r), i[n] = s
                    }
                    var r, s, a = t(this),
                        l = 8e3,
                        d = 1e4;
                    o(), a.on("mouseenter", function() {
                        clearTimeout(s)
                    }).on("mouseleave", function() {
                        o()
                    })
                })
            }
        })
    }(window, jQuery),
    function(e, t, n) {
        var i = n(t);
        n(e);
        i.on("ready", function() {
            var e = n(".services .service");
            e.length && e.each(function() {
                var e = n(this);
                e.addClass("anm"), new Waypoint.Inview({
                    element: e[0],
                    enter: function() {
                        e.addClass("enter")
                    },
                    entered: function() {
                        e.addClass("entered")
                    },
                    exit: function() {},
                    exited: function(t) {
                        "up" == t && e.removeClass("enter entered")
                    }
                })
            })
        })
    }(window, document, jQuery),
    function(e, t, n) {
        var i, o, r = !1,
            s = 200,
            a = 0,
            l = n(t),
            d = n(e);
        l.on("ready", function() {
            r = d.width() < 576, a = r ? 20 : 95, i = n("#timeline"), o = n("#timeline-point"), i.length && (o.affix({
                offset: {
                    top: function() {
                        return i.offset().top - s
                    },
                    bottom: function() {
                        return l.height() - i.outerHeight() - s - a
                    }
                }
            }), n(".timeline__entry").each(function() {
                var e = n(this);
                e.addClass("anm"), new Waypoint.Inview({
                    element: e[0],
                    enter: function() {
                        e.addClass("enter")
                    },
                    entered: function() {},
                    exit: function() {},
                    exited: function(t) {
                        "up" == t && e.removeClass("enter")
                    }
                })
            }), n(".timeline__rails .timeline__entry").each(function() {
                var e = n(this);
                n(".timeline__header h2", e).affix({
                    offset: {
                        top: function() {
                            return e.offset().top - s
                        },
                        bottom: function() {
                            return l.height() - e.offset().top - e.height() + 16
                        }
                    }
                })
            }))
        })
    }(window, document, jQuery),
    function(e, t, n) {
        var i = n(t);
        n(e);
        i.on("ready", function() {
            var e = n("#sternfit-photos");
            e.length && (e.addClass("anm"), new Waypoint.Inview({
                element: e[0],
                enter: function() {
                    e.addClass("enter")
                },
                entered: function() {
                    e.addClass("entered")
                },
                exit: function() {},
                exited: function(t) {
                    "up" == t && e.removeClass("enter entered")
                }
            }))
        })
    }(window, document, jQuery),
    function(e, t, n) {
        var i = n(t);
        n(e);
        i.on("ready", function() {
            var e = n("#qwaqq-phones, #qwaqq-phone");
            e.length && e.each(function() {
                var e = n(this);
                e.addClass("anm"), new Waypoint.Inview({
                    element: e[0],
                    enter: function() {
                        e.addClass("enter"), e.addClass("first-enter"), setTimeout(function() {
                            e.addClass("first-entered")
                        }, 1e3)
                    },
                    entered: function() {
                        e.addClass("entered")
                    },
                    exit: function() {},
                    exited: function(t) {
                        "up" == t && e.removeClass("enter entered")
                    }
                })
            })
        })
    }(window, document, jQuery),
    function(e, t, n) {
        var i = n(t);
        n(e);
        i.on("ready", function() {
            var e = n(".ms-video video");
            e.length && e.each(function() {
                var e = n(this).closest(".ms-video"),
                    t = n(this)[0];
                bowser.android ? (e.addClass("manual"), t.addEventListener("click", function() {
                    t.paused ? (t.play(), e.addClass("played")) : (t.pause(), e.removeClass("played"))
                }, !1)) : new Waypoint.Inview({
                    element: t,
                    enter: function() {
                        t.play()
                    },
                    entered: function() {},
                    exit: function() {},
                    exited: function() {
                        t.pause()
                    }
                })
            })
        })
    }(window, document, jQuery),
    function(e, t, n) {
        function i(e) {
            var t = Math.round(e.beta) - 60,
                n = Math.round(e.gamma);
            n = -Math.min(Math.max(n, -60), 60), t = Math.min(Math.max(t, -45), 65), o[0].style.webkitTransform = o[0].style.transform = "rotateX(" + t + "deg) rotateY(" + n + "deg)"
        }
        var o, r = n(t);
        n(e);
        r.on("ready", function() {
            function t(e) {
                var t = o[0],
                    n = t.offsetLeft,
                    i = t.offsetTop,
                    r = t.offsetWidth,
                    a = t.offsetHeight,
                    l = e.pageX,
                    d = e.pageY,
                    c = -((r / 2 - (l - n)) / (r / 2) * s),
                    u = (a / 2 - (d - i)) / (a / 2) * s;
                t.style.transform = "rotateX(" + u + "deg) rotateY(" + c + "deg)"
            }
            o = n(".js-perspective-card");
            var r = n(".welcome-section"),
                s = 5;
            o.length ? (r.on("mousemove", function(e) {
                t(e)
            }), r.on("mouseenter", function() {
                o.addClass("entered")
            }), r.on("mouseleave", function() {
                o.removeClass("entered"), o[0].style.transform = "rotateX(0deg) rotateY(0deg)"
            }), (bowser.mobile || bowser.tablet) && e.DeviceOrientationEvent && (o.addClass("entered"), e.addEventListener("deviceorientation", i))) : (bowser.mobile || bowser.tablet) && e.DeviceOrientationEvent && e.removeEventListener("deviceorientation", i)
        })
    }(window, document, jQuery),
    function(e, t, n) {
        var i = n(t);
        n(e);
        i.on("ready", function() {
            var e = n(".js-tabs");
            e.length && (n(".tabs-for").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                asNavFor: ".tabs-nav"
            }), n(".tabs-nav").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: ".tabs-for",
                dots: !1,
                focusOnSelect: !0,
                infinite: !1,
                variableWidth: !0
            }), n(".js-custom_next").click(function() {
                n(".tabs-for").slick("slickNext"), n("html, body").animate({
                    scrollTop: 0
                }, 500)
            }))
        })
    }(window, document, jQuery),
    function(e, t, n) {
        if (n(t).on("ready", function() {
            n("body").hasClass("home-page") || n("body").hasClass("splash_on") ? n("html").hasClass("loaded") || setTimeout(function() {
                n("html").addClass("loaded"), bowser.msie || bowser.msedge ? n("#page-loading").remove() : (setTimeout(function() {
                    n("#page-loading").remove()
                }, 3e3), n("#page-loading .page-loading__bg svg #shape-animation").eq(0)[0].beginElement())
            }, 2500) : (n("html").addClass("loaded"), n("#page-loading").remove()), "undefined" != typeof Storage && n("#contact_history").length >= 1 && null != localStorage.getItem("latest_urls_ext") && n("#contact_history").val(localStorage.getItem("latest_urls_ext"))
        }), bowser.msie ? n("body").addClass("msie") : bowser.msedge && n("body").addClass("msedge"), bowser.android && n("body").addClass("os-android"), bowser.ios && n("body").addClass("os-ios"), "undefined" != typeof Storage) {
            var i = [];
            null != localStorage.getItem("latest_urls_ext") && (i = JSON.parse(localStorage.getItem("latest_urls_ext"))), i.push([e.location.pathname, t.referrer, Date.now()]), i.length > 50 && i.shift(), localStorage.setItem("latest_urls_ext", JSON.stringify(i))
        }
        svg4everybody(), n("#flash-messages .alert").delay(5e3).queue(function() {
            n(this).alert("close"), n(this).dequeue()
        }), n("#flash-popups .modal").modal(), n(".js-st").text("Skype:"), n(".js-sl").html('<a href="skype:dmitry_dobritskiy">dmitry_dobritskiy</a>'), n("html").hasClass("loaded") && n("#page-loading").remove(), n(".mind-row").each(function() {
            var e = n(this);
            e.addClass("anm"), new Waypoint.Inview({
                element: e[0],
                enter: function() {
                    e.addClass("enter")
                },
                entered: function() {},
                exit: function() {},
                exited: function(t) {
                    "up" == t && e.removeClass("enter")
                }
            })
        }), n("#contact-us-form input").on("invalid", function() {
            this.scrollIntoView(!1)
        }), n(".project .project__image").each(function() {
            var e = n(this),
                t = e.find(".project__visual");
            t.addClass("anm"), new Waypoint.Inview({
                element: e[0],
                enter: function() {
                    t.addClass("enter")
                },
                entered: function() {
                    t.addClass("entered")
                },
                exit: function() {},
                exited: function(e) {
                    "up" == e && t.removeClass("enter entered")
                }
            })
        });
        var o = n(".reviews");
        o.length && o.slick({
            arrows: !1,
            dots: !1,
            slidesToShow: 1,
            infinite: !0,
            centerMode: !0,
            centerPadding: "30px",
            focusOnSelect: !0,
            mobileFirst: !0,
            responsive: [{
                breakpoint: 576,
                settings: {
                    centerPadding: "60px"
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerPadding: "150px"
                }
            }, {
                breakpoint: 992,
                settings: {
                    centerPadding: "250px"
                }
            }, {
                breakpoint: 1200,
                settings: {
                    centerPadding: 0,
                    slidesToShow: 3
                }
            }]
        }), n(".floating-placeholder input, .floating-placeholder textarea").on("input change keydown", function() {
            var e = n(this);
            setTimeout(function() {
                var t = e.val();
                "" != t ? e.parent().addClass("floating-placeholder-float") : e.parent().removeClass("floating-placeholder-float")
            }, 1)
        }), n(t).on("ajaxSend", function() {
            Turbolinks.controller.adapter.progressBar.setValue(0), Turbolinks.controller.adapter.progressBar.show()
        }).on("ajaxComplete", function() {
            Turbolinks.controller.adapter.progressBar.setValue(100), Turbolinks.controller.adapter.progressBar.hide()
        })
    }(window, document, jQuery);