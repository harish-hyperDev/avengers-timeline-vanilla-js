// https://d3js.org v5.8.2 Copyright 2019 Mike Bostock
!(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t.d3 = t.d3 || {}));
})(this, function (t) {
    "use strict";
    function n(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function e(t) {
        var e;
        return (
            1 === t.length &&
                ((e = t),
                (t = function (t, r) {
                    return n(e(t), r);
                })),
            {
                left: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                        var o = (r + i) >>> 1;
                        t(n[o], e) < 0 ? (r = o + 1) : (i = o);
                    }
                    return r;
                },
                right: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                        var o = (r + i) >>> 1;
                        t(n[o], e) > 0 ? (i = o) : (r = o + 1);
                    }
                    return r;
                },
            }
        );
    }
    var r = e(n),
        i = r.right,
        o = r.left;
    function a(t, n) {
        return [t, n];
    }
    function u(t) {
        return null === t ? NaN : +t;
    }
    function c(t, n) {
        var e,
            r,
            i = t.length,
            o = 0,
            a = -1,
            c = 0,
            f = 0;
        if (null == n) for (; ++a < i; ) isNaN((e = u(t[a]))) || (f += (r = e - c) * (e - (c += r / ++o)));
        else for (; ++a < i; ) isNaN((e = u(n(t[a], a, t)))) || (f += (r = e - c) * (e - (c += r / ++o)));
        if (o > 1) return f / (o - 1);
    }
    function f(t, n) {
        var e = c(t, n);
        return e ? Math.sqrt(e) : e;
    }
    function s(t, n) {
        var e,
            r,
            i,
            o = t.length,
            a = -1;
        if (null == n) {
            for (; ++a < o; ) if (null != (e = t[a]) && e >= e) for (r = i = e; ++a < o; ) null != (e = t[a]) && (r > e && (r = e), i < e && (i = e));
        } else for (; ++a < o; ) if (null != (e = n(t[a], a, t)) && e >= e) for (r = i = e; ++a < o; ) null != (e = n(t[a], a, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i];
    }
    var l = Array.prototype,
        h = l.slice,
        d = l.map;
    function p(t) {
        return function () {
            return t;
        };
    }
    function v(t) {
        return t;
    }
    function g(t, n, e) {
        (t = +t), (n = +n), (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i; ) o[r] = t + r * e;
        return o;
    }
    var y = Math.sqrt(50),
        _ = Math.sqrt(10),
        b = Math.sqrt(2);
    function m(t, n, e) {
        var r,
            i,
            o,
            a,
            u = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (((r = n < t) && ((i = t), (t = n), (n = i)), 0 === (a = x(t, n, e)) || !isFinite(a))) return [];
        if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array((i = Math.ceil(n - t + 1))); ++u < i; ) o[u] = (t + u) * a;
        else for (t = Math.floor(t * a), n = Math.ceil(n * a), o = new Array((i = Math.ceil(t - n + 1))); ++u < i; ) o[u] = (t - u) / a;
        return r && o.reverse(), o;
    }
    function x(t, n, e) {
        var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            o = r / Math.pow(10, i);
        return i >= 0 ? (o >= y ? 10 : o >= _ ? 5 : o >= b ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= y ? 10 : o >= _ ? 5 : o >= b ? 2 : 1);
    }
    function w(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i;
        return o >= y ? (i *= 10) : o >= _ ? (i *= 5) : o >= b && (i *= 2), n < t ? -i : i;
    }
    function M(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
    }
    function N(t, n, e) {
        if ((null == e && (e = u), (r = t.length))) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r,
                i = (r - 1) * n,
                o = Math.floor(i),
                a = +e(t[o], o, t);
            return a + (+e(t[o + 1], o + 1, t) - a) * (i - o);
        }
    }
    function A(t, n) {
        var e,
            r,
            i = t.length,
            o = -1;
        if (null == n) {
            for (; ++o < i; ) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i; ) null != (e = t[o]) && e > r && (r = e);
        } else for (; ++o < i; ) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i; ) null != (e = n(t[o], o, t)) && e > r && (r = e);
        return r;
    }
    function S(t) {
        for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i; ) a += t[o].length;
        for (e = new Array(a); --i >= 0; ) for (n = (r = t[i]).length; --n >= 0; ) e[--a] = r[n];
        return e;
    }
    function k(t, n) {
        var e,
            r,
            i = t.length,
            o = -1;
        if (null == n) {
            for (; ++o < i; ) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i; ) null != (e = t[o]) && r > e && (r = e);
        } else for (; ++o < i; ) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i; ) null != (e = n(t[o], o, t)) && r > e && (r = e);
        return r;
    }
    function T(t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = k(t, E), r = new Array(e); ++n < e; ) for (var i, o = -1, a = (r[n] = new Array(i)); ++o < i; ) a[o] = t[o][n];
        return r;
    }
    function E(t) {
        return t.length;
    }
    var C = Array.prototype.slice;
    function P(t) {
        return t;
    }
    var z = 1,
        R = 2,
        q = 3,
        D = 4,
        L = 1e-6;
    function U(t) {
        return "translate(" + (t + 0.5) + ",0)";
    }
    function O(t) {
        return "translate(0," + (t + 0.5) + ")";
    }
    function Y() {
        return !this.__axis;
    }
    function B(t, n) {
        var e = [],
            r = null,
            i = null,
            o = 6,
            a = 6,
            u = 3,
            c = t === z || t === D ? -1 : 1,
            f = t === D || t === R ? "x" : "y",
            s = t === z || t === q ? U : O;
        function l(l) {
            var h = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
                d = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : P) : i,
                p = Math.max(o, 0) + u,
                v = n.range(),
                g = +v[0] + 0.5,
                y = +v[v.length - 1] + 0.5,
                _ = (n.bandwidth
                    ? function (t) {
                          var n = Math.max(0, t.bandwidth() - 1) / 2;
                          return (
                              t.round() && (n = Math.round(n)),
                              function (e) {
                                  return +t(e) + n;
                              }
                          );
                      }
                    : function (t) {
                          return function (n) {
                              return +t(n);
                          };
                      })(n.copy()),
                b = l.selection ? l.selection() : l,
                m = b.selectAll(".domain").data([null]),
                x = b.selectAll(".tick").data(h, n).order(),
                w = x.exit(),
                M = x.enter().append("g").attr("class", "tick"),
                N = x.select("line"),
                A = x.select("text");
            (m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"))),
                (x = x.merge(M)),
                (N = N.merge(
                    M.append("line")
                        .attr("stroke", "currentColor")
                        .attr(f + "2", c * o)
                )),
                (A = A.merge(
                    M.append("text")
                        .attr("fill", "currentColor")
                        .attr(f, c * p)
                        .attr("dy", t === z ? "0em" : t === q ? "0.71em" : "0.32em")
                )),
                l !== b &&
                    ((m = m.transition(l)),
                    (x = x.transition(l)),
                    (N = N.transition(l)),
                    (A = A.transition(l)),
                    (w = w
                        .transition(l)
                        .attr("opacity", L)
                        .attr("transform", function (t) {
                            return isFinite((t = _(t))) ? s(t) : this.getAttribute("transform");
                        })),
                    M.attr("opacity", L).attr("transform", function (t) {
                        var n = this.parentNode.__axis;
                        return s(n && isFinite((n = n(t))) ? n : _(t));
                    })),
                w.remove(),
                m.attr("d", t === D || t == R ? (a ? "M" + c * a + "," + g + "H0.5V" + y + "H" + c * a : "M0.5," + g + "V" + y) : a ? "M" + g + "," + c * a + "V0.5H" + y + "V" + c * a : "M" + g + ",0.5H" + y),
                x.attr("opacity", 1).attr("transform", function (t) {
                    return s(_(t));
                }),
                N.attr(f + "2", c * o),
                A.attr(f, c * p).text(d),
                b
                    .filter(Y)
                    .attr("fill", "none")
                    .attr("font-size", 10)
                    .attr("font-family", "sans-serif")
                    .attr("text-anchor", t === R ? "start" : t === D ? "end" : "middle"),
                b.each(function () {
                    this.__axis = _;
                });
        }
        return (
            (l.scale = function (t) {
                return arguments.length ? ((n = t), l) : n;
            }),
            (l.ticks = function () {
                return (e = C.call(arguments)), l;
            }),
            (l.tickArguments = function (t) {
                return arguments.length ? ((e = null == t ? [] : C.call(t)), l) : e.slice();
            }),
            (l.tickValues = function (t) {
                return arguments.length ? ((r = null == t ? null : C.call(t)), l) : r && r.slice();
            }),
            (l.tickFormat = function (t) {
                return arguments.length ? ((i = t), l) : i;
            }),
            (l.tickSize = function (t) {
                return arguments.length ? ((o = a = +t), l) : o;
            }),
            (l.tickSizeInner = function (t) {
                return arguments.length ? ((o = +t), l) : o;
            }),
            (l.tickSizeOuter = function (t) {
                return arguments.length ? ((a = +t), l) : a;
            }),
            (l.tickPadding = function (t) {
                return arguments.length ? ((u = +t), l) : u;
            }),
            l
        );
    }
    var F = { value: function () {} };
    function I() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = [];
        }
        return new H(r);
    }
    function H(t) {
        this._ = t;
    }
    function j(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value;
    }
    function X(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
                (t[r] = F), (t = t.slice(0, r).concat(t.slice(r + 1)));
                break;
            }
        return null != e && t.push({ name: n, value: e }), t;
    }
    H.prototype = I.prototype = {
        constructor: H,
        on: function (t, n) {
            var e,
                r,
                i = this._,
                o =
                    ((r = i),
                    (t + "")
                        .trim()
                        .split(/^|\s+/)
                        .map(function (t) {
                            var n = "",
                                e = t.indexOf(".");
                            if ((e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), t && !r.hasOwnProperty(t))) throw new Error("unknown type: " + t);
                            return { type: t, name: n };
                        })),
                a = -1,
                u = o.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++a < u; )
                    if ((e = (t = o[a]).type)) i[e] = X(i[e], t.name, n);
                    else if (null == n) for (e in i) i[e] = X(i[e], t.name, null);
                return this;
            }
            for (; ++a < u; ) if ((e = (t = o[a]).type) && (e = j(i[e], t.name))) return e;
        },
        copy: function () {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new H(t);
        },
        call: function (t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i);
        },
        apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
        },
    };
    var G = "http://www.w3.org/1999/xhtml",
        V = { svg: "http://www.w3.org/2000/svg", xhtml: G, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
    function $(t) {
        var n = (t += ""),
            e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), V.hasOwnProperty(n) ? { space: V[n], local: t } : t;
    }
    function W(t) {
        var n = $(t);
        return (n.local
            ? function (t) {
                  return function () {
                      return this.ownerDocument.createElementNS(t.space, t.local);
                  };
              }
            : function (t) {
                  return function () {
                      var n = this.ownerDocument,
                          e = this.namespaceURI;
                      return e === G && n.documentElement.namespaceURI === G ? n.createElement(t) : n.createElementNS(e, t);
                  };
              })(n);
    }
    function Z() {}
    function Q(t) {
        return null == t
            ? Z
            : function () {
                  return this.querySelector(t);
              };
    }
    function J() {
        return [];
    }
    function K(t) {
        return null == t
            ? J
            : function () {
                  return this.querySelectorAll(t);
              };
    }
    function tt(t) {
        return function () {
            return this.matches(t);
        };
    }
    function nt(t) {
        return new Array(t.length);
    }
    function et(t, n) {
        (this.ownerDocument = t.ownerDocument), (this.namespaceURI = t.namespaceURI), (this._next = null), (this._parent = t), (this.__data__ = n);
    }
    et.prototype = {
        constructor: et,
        appendChild: function (t) {
            return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
            return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t);
        },
    };
    var rt = "$";
    function it(t, n, e, r, i, o) {
        for (var a, u = 0, c = n.length, f = o.length; u < f; ++u) (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new et(t, o[u]));
        for (; u < c; ++u) (a = n[u]) && (i[u] = a);
    }
    function ot(t, n, e, r, i, o, a) {
        var u,
            c,
            f,
            s = {},
            l = n.length,
            h = o.length,
            d = new Array(l);
        for (u = 0; u < l; ++u) (c = n[u]) && ((d[u] = f = rt + a.call(c, c.__data__, u, n)), f in s ? (i[u] = c) : (s[f] = c));
        for (u = 0; u < h; ++u) (c = s[(f = rt + a.call(t, o[u], u, o))]) ? ((r[u] = c), (c.__data__ = o[u]), (s[f] = null)) : (e[u] = new et(t, o[u]));
        for (u = 0; u < l; ++u) (c = n[u]) && s[d[u]] === c && (i[u] = c);
    }
    function at(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function ut(t) {
        return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
    }
    function ct(t, n) {
        return t.style.getPropertyValue(n) || ut(t).getComputedStyle(t, null).getPropertyValue(n);
    }
    function ft(t) {
        return t.trim().split(/^|\s+/);
    }
    function st(t) {
        return t.classList || new lt(t);
    }
    function lt(t) {
        (this._node = t), (this._names = ft(t.getAttribute("class") || ""));
    }
    function ht(t, n) {
        for (var e = st(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
    }
    function dt(t, n) {
        for (var e = st(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
    }
    function pt() {
        this.textContent = "";
    }
    function vt() {
        this.innerHTML = "";
    }
    function gt() {
        this.nextSibling && this.parentNode.appendChild(this);
    }
    function yt() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function _t() {
        return null;
    }
    function bt() {
        var t = this.parentNode;
        t && t.removeChild(this);
    }
    function mt() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function xt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    lt.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
            return this._names.indexOf(t) >= 0;
        },
    };
    var wt = {};
    ((t.event = null), "undefined" != typeof document) && ("onmouseenter" in document.documentElement || (wt = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function Mt(t, n, e) {
        return (
            (t = Nt(t, n, e)),
            function (n) {
                var e = n.relatedTarget;
                (e && (e === this || 8 & e.compareDocumentPosition(this))) || t.call(this, n);
            }
        );
    }
    function Nt(n, e, r) {
        return function (i) {
            var o = t.event;
            t.event = i;
            try {
                n.call(this, this.__data__, e, r);
            } finally {
                t.event = o;
            }
        };
    }
    function At(t) {
        return function () {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r) (e = n[r]), (t.type && e.type !== t.type) || e.name !== t.name ? (n[++i] = e) : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? (n.length = i) : delete this.__on;
            }
        };
    }
    function St(t, n, e) {
        var r = wt.hasOwnProperty(t.type) ? Mt : Nt;
        return function (i, o, a) {
            var u,
                c = this.__on,
                f = r(n, o, a);
            if (c)
                for (var s = 0, l = c.length; s < l; ++s)
                    if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, (u.listener = f), (u.capture = e)), void (u.value = n);
            this.addEventListener(t.type, f, e), (u = { type: t.type, name: t.name, value: n, listener: f, capture: e }), c ? c.push(u) : (this.__on = [u]);
        };
    }
    function kt(n, e, r, i) {
        var o = t.event;
        (n.sourceEvent = t.event), (t.event = n);
        try {
            return e.apply(r, i);
        } finally {
            t.event = o;
        }
    }
    function Tt(t, n, e) {
        var r = ut(t),
            i = r.CustomEvent;
        "function" == typeof i ? (i = new i(n, e)) : ((i = r.document.createEvent("Event")), e ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail)) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
    }
    var Et = [null];
    function Ct(t, n) {
        (this._groups = t), (this._parents = n);
    }
    function Pt() {
        return new Ct([[document.documentElement]], Et);
    }
    function zt(t) {
        return "string" == typeof t ? new Ct([[document.querySelector(t)]], [document.documentElement]) : new Ct([[t]], Et);
    }
    Ct.prototype = Pt.prototype = {
        constructor: Ct,
        select: function (t) {
            "function" != typeof t && (t = Q(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a, u = n[i], c = u.length, f = (r[i] = new Array(c)), s = 0; s < c; ++s) (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), (f[s] = a));
            return new Ct(r, this._parents);
        },
        selectAll: function (t) {
            "function" != typeof t && (t = K(t));
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) for (var a, u = n[o], c = u.length, f = 0; f < c; ++f) (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
            return new Ct(r, i);
        },
        filter: function (t) {
            "function" != typeof t && (t = tt(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, c = (r[i] = []), f = 0; f < u; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new Ct(r, this._parents);
        },
        data: function (t, n) {
            if (!t)
                return (
                    (p = new Array(this.size())),
                    (s = -1),
                    this.each(function (t) {
                        p[++s] = t;
                    }),
                    p
                );
            var e,
                r = n ? ot : it,
                i = this._parents,
                o = this._groups;
            "function" != typeof t &&
                ((e = t),
                (t = function () {
                    return e;
                }));
            for (var a = o.length, u = new Array(a), c = new Array(a), f = new Array(a), s = 0; s < a; ++s) {
                var l = i[s],
                    h = o[s],
                    d = h.length,
                    p = t.call(l, l && l.__data__, s, i),
                    v = p.length,
                    g = (c[s] = new Array(v)),
                    y = (u[s] = new Array(v));
                r(l, h, g, y, (f[s] = new Array(d)), p, n);
                for (var _, b, m = 0, x = 0; m < v; ++m)
                    if ((_ = g[m])) {
                        for (m >= x && (x = m + 1); !(b = y[x]) && ++x < v; );
                        _._next = b || null;
                    }
            }
            return ((u = new Ct(u, i))._enter = c), (u._exit = f), u;
        },
        enter: function () {
            return new Ct(this._enter || this._groups.map(nt), this._parents);
        },
        exit: function () {
            return new Ct(this._exit || this._groups.map(nt), this._parents);
        },
        join: function (t, n, e) {
            var r = this.enter(),
                i = this,
                o = this.exit();
            return (r = "function" == typeof t ? t(r) : r.append(t + "")), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
        },
        merge: function (t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = (a[u] = new Array(l)), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new Ct(a, this._parents);
        },
        order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; ) for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; ) (r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r));
            return this;
        },
        sort: function (t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e;
            }
            t || (t = at);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var a, u = e[o], c = u.length, f = (i[o] = new Array(c)), s = 0; s < c; ++s) (a = u[s]) && (f[s] = a);
                f.sort(n);
            }
            return new Ct(i, this._parents).order();
        },
        call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
            var t = new Array(this.size()),
                n = -1;
            return (
                this.each(function () {
                    t[++n] = this;
                }),
                t
            );
        },
        node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var a = r[i];
                    if (a) return a;
                }
            return null;
        },
        size: function () {
            var t = 0;
            return (
                this.each(function () {
                    ++t;
                }),
                t
            );
        },
        empty: function () {
            return !this.node();
        },
        each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) (i = o[a]) && t.call(i, i.__data__, a, o);
            return this;
        },
        attr: function (t, n) {
            var e = $(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
            }
            return this.each(
                (null == n
                    ? e.local
                        ? function (t) {
                              return function () {
                                  this.removeAttributeNS(t.space, t.local);
                              };
                          }
                        : function (t) {
                              return function () {
                                  this.removeAttribute(t);
                              };
                          }
                    : "function" == typeof n
                    ? e.local
                        ? function (t, n) {
                              return function () {
                                  var e = n.apply(this, arguments);
                                  null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
                              };
                          }
                        : function (t, n) {
                              return function () {
                                  var e = n.apply(this, arguments);
                                  null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
                              };
                          }
                    : e.local
                    ? function (t, n) {
                          return function () {
                              this.setAttributeNS(t.space, t.local, n);
                          };
                      }
                    : function (t, n) {
                          return function () {
                              this.setAttribute(t, n);
                          };
                      })(e, n)
            );
        },
        style: function (t, n, e) {
            return arguments.length > 1
                ? this.each(
                      (null == n
                          ? function (t) {
                                return function () {
                                    this.style.removeProperty(t);
                                };
                            }
                          : "function" == typeof n
                          ? function (t, n, e) {
                                return function () {
                                    var r = n.apply(this, arguments);
                                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
                                };
                            }
                          : function (t, n, e) {
                                return function () {
                                    this.style.setProperty(t, n, e);
                                };
                            })(t, n, null == e ? "" : e)
                  )
                : ct(this.node(), t);
        },
        property: function (t, n) {
            return arguments.length > 1
                ? this.each(
                      (null == n
                          ? function (t) {
                                return function () {
                                    delete this[t];
                                };
                            }
                          : "function" == typeof n
                          ? function (t, n) {
                                return function () {
                                    var e = n.apply(this, arguments);
                                    null == e ? delete this[t] : (this[t] = e);
                                };
                            }
                          : function (t, n) {
                                return function () {
                                    this[t] = n;
                                };
                            })(t, n)
                  )
                : this.node()[t];
        },
        classed: function (t, n) {
            var e = ft(t + "");
            if (arguments.length < 2) {
                for (var r = st(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
                return !0;
            }
            return this.each(
                ("function" == typeof n
                    ? function (t, n) {
                          return function () {
                              (n.apply(this, arguments) ? ht : dt)(this, t);
                          };
                      }
                    : n
                    ? function (t) {
                          return function () {
                              ht(this, t);
                          };
                      }
                    : function (t) {
                          return function () {
                              dt(this, t);
                          };
                      })(e, n)
            );
        },
        text: function (t) {
            return arguments.length
                ? this.each(
                      null == t
                          ? pt
                          : ("function" == typeof t
                                ? function (t) {
                                      return function () {
                                          var n = t.apply(this, arguments);
                                          this.textContent = null == n ? "" : n;
                                      };
                                  }
                                : function (t) {
                                      return function () {
                                          this.textContent = t;
                                      };
                                  })(t)
                  )
                : this.node().textContent;
        },
        html: function (t) {
            return arguments.length
                ? this.each(
                      null == t
                          ? vt
                          : ("function" == typeof t
                                ? function (t) {
                                      return function () {
                                          var n = t.apply(this, arguments);
                                          this.innerHTML = null == n ? "" : n;
                                      };
                                  }
                                : function (t) {
                                      return function () {
                                          this.innerHTML = t;
                                      };
                                  })(t)
                  )
                : this.node().innerHTML;
        },
        raise: function () {
            return this.each(gt);
        },
        lower: function () {
            return this.each(yt);
        },
        append: function (t) {
            var n = "function" == typeof t ? t : W(t);
            return this.select(function () {
                return this.appendChild(n.apply(this, arguments));
            });
        },
        insert: function (t, n) {
            var e = "function" == typeof t ? t : W(t),
                r = null == n ? _t : "function" == typeof n ? n : Q(n);
            return this.select(function () {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
            });
        },
        remove: function () {
            return this.each(bt);
        },
        clone: function (t) {
            return this.select(t ? xt : mt);
        },
        datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__;
        },
        on: function (t, n, e) {
            var r,
                i,
                o = (function (t) {
                    return t
                        .trim()
                        .split(/^|\s+/)
                        .map(function (t) {
                            var n = "",
                                e = t.indexOf(".");
                            return e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n };
                        });
                })(t + ""),
                a = o.length;
            if (!(arguments.length < 2)) {
                for (u = n ? St : At, null == e && (e = !1), r = 0; r < a; ++r) this.each(u(o[r], n, e));
                return this;
            }
            var u = this.node().__on;
            if (u) for (var c, f = 0, s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < a; ++r) if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
        },
        dispatch: function (t, n) {
            return this.each(
                ("function" == typeof n
                    ? function (t, n) {
                          return function () {
                              return Tt(this, t, n.apply(this, arguments));
                          };
                      }
                    : function (t, n) {
                          return function () {
                              return Tt(this, t, n);
                          };
                      })(t, n)
            );
        },
    };
    var Rt = 0;
    function qt() {
        return new Dt();
    }
    function Dt() {
        this._ = "@" + (++Rt).toString(36);
    }
    function Lt() {
        for (var n, e = t.event; (n = e.sourceEvent); ) e = n;
        return e;
    }
    function Ut(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (r.x = n.clientX), (r.y = n.clientY), [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
    }
    function Ot(t) {
        var n = Lt();
        return n.changedTouches && (n = n.changedTouches[0]), Ut(t, n);
    }
    function Yt(t, n, e) {
        arguments.length < 3 && ((e = n), (n = Lt().changedTouches));
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) if ((r = n[i]).identifier === e) return Ut(t, r);
        return null;
    }
    function Bt() {
        t.event.stopImmediatePropagation();
    }
    function Ft() {
        t.event.preventDefault(), t.event.stopImmediatePropagation();
    }
    function It(t) {
        var n = t.document.documentElement,
            e = zt(t).on("dragstart.drag", Ft, !0);
        "onselectstart" in n ? e.on("selectstart.drag", Ft, !0) : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = "none"));
    }
    function Ht(t, n) {
        var e = t.document.documentElement,
            r = zt(t).on("dragstart.drag", null);
        n &&
            (r.on("click.drag", Ft, !0),
            setTimeout(function () {
                r.on("click.drag", null);
            }, 0)),
            "onselectstart" in e ? r.on("selectstart.drag", null) : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
    }
    function jt(t) {
        return function () {
            return t;
        };
    }
    function Xt(t, n, e, r, i, o, a, u, c, f) {
        (this.target = t), (this.type = n), (this.subject = e), (this.identifier = r), (this.active = i), (this.x = o), (this.y = a), (this.dx = u), (this.dy = c), (this._ = f);
    }
    function Gt() {
        return !t.event.button;
    }
    function Vt() {
        return this.parentNode;
    }
    function $t(n) {
        return null == n ? { x: t.event.x, y: t.event.y } : n;
    }
    function Wt() {
        return "ontouchstart" in this;
    }
    function Zt(t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
    }
    function Qt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
    }
    function Jt() {}
    (Dt.prototype = qt.prototype = {
        constructor: Dt,
        get: function (t) {
            for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
            return t[n];
        },
        set: function (t, n) {
            return (t[this._] = n);
        },
        remove: function (t) {
            return this._ in t && delete t[this._];
        },
        toString: function () {
            return this._;
        },
    }),
        (Xt.prototype.on = function () {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t;
        });
    var Kt = "\\s*([+-]?\\d+)\\s*",
        tn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        nn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        en = /^#([0-9a-f]{3})$/,
        rn = /^#([0-9a-f]{6})$/,
        on = new RegExp("^rgb\\(" + [Kt, Kt, Kt] + "\\)$"),
        an = new RegExp("^rgb\\(" + [nn, nn, nn] + "\\)$"),
        un = new RegExp("^rgba\\(" + [Kt, Kt, Kt, tn] + "\\)$"),
        cn = new RegExp("^rgba\\(" + [nn, nn, nn, tn] + "\\)$"),
        fn = new RegExp("^hsl\\(" + [tn, nn, nn] + "\\)$"),
        sn = new RegExp("^hsla\\(" + [tn, nn, nn, tn] + "\\)$"),
        ln = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
        };
    function hn(t) {
        var n;
        return (
            (t = (t + "").trim().toLowerCase()),
            (n = en.exec(t))
                ? new yn((((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (240 & n), ((15 & n) << 4) | (15 & n), 1)
                : (n = rn.exec(t))
                ? dn(parseInt(n[1], 16))
                : (n = on.exec(t))
                ? new yn(n[1], n[2], n[3], 1)
                : (n = an.exec(t))
                ? new yn((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
                : (n = un.exec(t))
                ? pn(n[1], n[2], n[3], n[4])
                : (n = cn.exec(t))
                ? pn((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
                : (n = fn.exec(t))
                ? bn(n[1], n[2] / 100, n[3] / 100, 1)
                : (n = sn.exec(t))
                ? bn(n[1], n[2] / 100, n[3] / 100, n[4])
                : ln.hasOwnProperty(t)
                ? dn(ln[t])
                : "transparent" === t
                ? new yn(NaN, NaN, NaN, 0)
                : null
        );
    }
    function dn(t) {
        return new yn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function pn(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new yn(t, n, e, r);
    }
    function vn(t) {
        return t instanceof Jt || (t = hn(t)), t ? new yn((t = t.rgb()).r, t.g, t.b, t.opacity) : new yn();
    }
    function gn(t, n, e, r) {
        return 1 === arguments.length ? vn(t) : new yn(t, n, e, null == r ? 1 : r);
    }
    function yn(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
    }
    function _n(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16);
    }
    function bn(t, n, e, r) {
        return r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN), new xn(t, n, e, r);
    }
    function mn(t, n, e, r) {
        return 1 === arguments.length
            ? (function (t) {
                  if (t instanceof xn) return new xn(t.h, t.s, t.l, t.opacity);
                  if ((t instanceof Jt || (t = hn(t)), !t)) return new xn();
                  if (t instanceof xn) return t;
                  var n = (t = t.rgb()).r / 255,
                      e = t.g / 255,
                      r = t.b / 255,
                      i = Math.min(n, e, r),
                      o = Math.max(n, e, r),
                      a = NaN,
                      u = o - i,
                      c = (o + i) / 2;
                  return u ? ((a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4), (u /= c < 0.5 ? o + i : 2 - o - i), (a *= 60)) : (u = c > 0 && c < 1 ? 0 : a), new xn(a, u, c, t.opacity);
              })(t)
            : new xn(t, n, e, null == r ? 1 : r);
    }
    function xn(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function wn(t, n, e) {
        return 255 * (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n);
    }
    Zt(Jt, hn, {
        displayable: function () {
            return this.rgb().displayable();
        },
        hex: function () {
            return this.rgb().hex();
        },
        toString: function () {
            return this.rgb() + "";
        },
    }),
        Zt(
            yn,
            gn,
            Qt(Jt, {
                brighter: function (t) {
                    return (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)), new yn(this.r * t, this.g * t, this.b * t, this.opacity);
                },
                darker: function (t) {
                    return (t = null == t ? 0.7 : Math.pow(0.7, t)), new yn(this.r * t, this.g * t, this.b * t, this.opacity);
                },
                rgb: function () {
                    return this;
                },
                displayable: function () {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
                },
                hex: function () {
                    return "#" + _n(this.r) + _n(this.g) + _n(this.b);
                },
                toString: function () {
                    var t = this.opacity;
                    return (
                        (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") +
                        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                        (1 === t ? ")" : ", " + t + ")")
                    );
                },
            })
        ),
        Zt(
            xn,
            mn,
            Qt(Jt, {
                brighter: function (t) {
                    return (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)), new xn(this.h, this.s, this.l * t, this.opacity);
                },
                darker: function (t) {
                    return (t = null == t ? 0.7 : Math.pow(0.7, t)), new xn(this.h, this.s, this.l * t, this.opacity);
                },
                rgb: function () {
                    var t = (this.h % 360) + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        r = e + (e < 0.5 ? e : 1 - e) * n,
                        i = 2 * e - r;
                    return new yn(wn(t >= 240 ? t - 240 : t + 120, i, r), wn(t, i, r), wn(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
                },
                displayable: function () {
                    return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
                },
            })
        );
    var Mn = Math.PI / 180,
        Nn = 180 / Math.PI,
        An = 0.96422,
        Sn = 1,
        kn = 0.82521,
        Tn = 4 / 29,
        En = 6 / 29,
        Cn = 3 * En * En,
        Pn = En * En * En;
    function zn(t) {
        if (t instanceof qn) return new qn(t.l, t.a, t.b, t.opacity);
        if (t instanceof Fn) {
            if (isNaN(t.h)) return new qn(t.l, 0, 0, t.opacity);
            var n = t.h * Mn;
            return new qn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }
        t instanceof yn || (t = vn(t));
        var e,
            r,
            i = On(t.r),
            o = On(t.g),
            a = On(t.b),
            u = Dn((0.2225045 * i + 0.7168786 * o + 0.0606169 * a) / Sn);
        return (
            i === o && o === a ? (e = r = u) : ((e = Dn((0.4360747 * i + 0.3850649 * o + 0.1430804 * a) / An)), (r = Dn((0.0139322 * i + 0.0971045 * o + 0.7141733 * a) / kn))), new qn(116 * u - 16, 500 * (e - u), 200 * (u - r), t.opacity)
        );
    }
    function Rn(t, n, e, r) {
        return 1 === arguments.length ? zn(t) : new qn(t, n, e, null == r ? 1 : r);
    }
    function qn(t, n, e, r) {
        (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
    }
    function Dn(t) {
        return t > Pn ? Math.pow(t, 1 / 3) : t / Cn + Tn;
    }
    function Ln(t) {
        return t > En ? t * t * t : Cn * (t - Tn);
    }
    function Un(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
    }
    function On(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function Yn(t) {
        if (t instanceof Fn) return new Fn(t.h, t.c, t.l, t.opacity);
        if ((t instanceof qn || (t = zn(t)), 0 === t.a && 0 === t.b)) return new Fn(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * Nn;
        return new Fn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }
    function Bn(t, n, e, r) {
        return 1 === arguments.length ? Yn(t) : new Fn(t, n, e, null == r ? 1 : r);
    }
    function Fn(t, n, e, r) {
        (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
    }
    Zt(
        qn,
        Rn,
        Qt(Jt, {
            brighter: function (t) {
                return new qn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
            },
            darker: function (t) {
                return new qn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
            },
            rgb: function () {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return new yn(
                    Un(3.1338561 * (n = An * Ln(n)) - 1.6168667 * (t = Sn * Ln(t)) - 0.4906146 * (e = kn * Ln(e))),
                    Un(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
                    Un(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
                    this.opacity
                );
            },
        })
    ),
        Zt(
            Fn,
            Bn,
            Qt(Jt, {
                brighter: function (t) {
                    return new Fn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
                },
                darker: function (t) {
                    return new Fn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
                },
                rgb: function () {
                    return zn(this).rgb();
                },
            })
        );
    var In = -0.14861,
        Hn = 1.78277,
        jn = -0.29227,
        Xn = -0.90649,
        Gn = 1.97294,
        Vn = Gn * Xn,
        $n = Gn * Hn,
        Wn = Hn * jn - Xn * In;
    function Zn(t, n, e, r) {
        return 1 === arguments.length
            ? (function (t) {
                  if (t instanceof Qn) return new Qn(t.h, t.s, t.l, t.opacity);
                  t instanceof yn || (t = vn(t));
                  var n = t.r / 255,
                      e = t.g / 255,
                      r = t.b / 255,
                      i = (Wn * r + Vn * n - $n * e) / (Wn + Vn - $n),
                      o = r - i,
                      a = (Gn * (e - i) - jn * o) / Xn,
                      u = Math.sqrt(a * a + o * o) / (Gn * i * (1 - i)),
                      c = u ? Math.atan2(a, o) * Nn - 120 : NaN;
                  return new Qn(c < 0 ? c + 360 : c, u, i, t.opacity);
              })(t)
            : new Qn(t, n, e, null == r ? 1 : r);
    }
    function Qn(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function Jn(t, n, e, r, i) {
        var o = t * t,
            a = o * t;
        return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
    }
    function Kn(t) {
        var n = t.length - 1;
        return function (e) {
            var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
                i = t[r],
                o = t[r + 1],
                a = r > 0 ? t[r - 1] : 2 * i - o,
                u = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Jn((e - r / n) * n, a, i, o, u);
        };
    }
    function te(t) {
        var n = t.length;
        return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                u = t[(r + 2) % n];
            return Jn((e - r / n) * n, i, o, a, u);
        };
    }
    function ne(t) {
        return function () {
            return t;
        };
    }
    function ee(t, n) {
        return function (e) {
            return t + e * n;
        };
    }
    function re(t, n) {
        var e = n - t;
        return e ? ee(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : ne(isNaN(t) ? n : t);
    }
    function ie(t) {
        return 1 == (t = +t)
            ? oe
            : function (n, e) {
                  return e - n
                      ? (function (t, n, e) {
                            return (
                                (t = Math.pow(t, e)),
                                (n = Math.pow(n, e) - t),
                                (e = 1 / e),
                                function (r) {
                                    return Math.pow(t + r * n, e);
                                }
                            );
                        })(n, e, t)
                      : ne(isNaN(n) ? e : n);
              };
    }
    function oe(t, n) {
        var e = n - t;
        return e ? ee(t, e) : ne(isNaN(t) ? n : t);
    }
    Zt(
        Qn,
        Zn,
        Qt(Jt, {
            brighter: function (t) {
                return (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)), new Qn(this.h, this.s, this.l * t, this.opacity);
            },
            darker: function (t) {
                return (t = null == t ? 0.7 : Math.pow(0.7, t)), new Qn(this.h, this.s, this.l * t, this.opacity);
            },
            rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * Mn,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    r = Math.cos(t),
                    i = Math.sin(t);
                return new yn(255 * (n + e * (In * r + Hn * i)), 255 * (n + e * (jn * r + Xn * i)), 255 * (n + e * (Gn * r)), this.opacity);
            },
        })
    );
    var ae = (function t(n) {
        var e = ie(n);
        function r(t, n) {
            var r = e((t = gn(t)).r, (n = gn(n)).r),
                i = e(t.g, n.g),
                o = e(t.b, n.b),
                a = oe(t.opacity, n.opacity);
            return function (n) {
                return (t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + "";
            };
        }
        return (r.gamma = t), r;
    })(1);
    function ue(t) {
        return function (n) {
            var e,
                r,
                i = n.length,
                o = new Array(i),
                a = new Array(i),
                u = new Array(i);
            for (e = 0; e < i; ++e) (r = gn(n[e])), (o[e] = r.r || 0), (a[e] = r.g || 0), (u[e] = r.b || 0);
            return (
                (o = t(o)),
                (a = t(a)),
                (u = t(u)),
                (r.opacity = 1),
                function (t) {
                    return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
                }
            );
        };
    }
    var ce = ue(Kn),
        fe = ue(te);
    function se(t, n) {
        var e,
            r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            a = new Array(r);
        for (e = 0; e < i; ++e) o[e] = ye(t[e], n[e]);
        for (; e < r; ++e) a[e] = n[e];
        return function (t) {
            for (e = 0; e < i; ++e) a[e] = o[e](t);
            return a;
        };
    }
    function le(t, n) {
        var e = new Date();
        return (
            (n -= t = +t),
            function (r) {
                return e.setTime(t + n * r), e;
            }
        );
    }
    function he(t, n) {
        return (
            (n -= t = +t),
            function (e) {
                return t + n * e;
            }
        );
    }
    function de(t, n) {
        var e,
            r = {},
            i = {};
        for (e in ((null !== t && "object" == typeof t) || (t = {}), (null !== n && "object" == typeof n) || (n = {}), n)) e in t ? (r[e] = ye(t[e], n[e])) : (i[e] = n[e]);
        return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
        };
    }
    var pe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        ve = new RegExp(pe.source, "g");
    function ge(t, n) {
        var e,
            r,
            i,
            o = (pe.lastIndex = ve.lastIndex = 0),
            a = -1,
            u = [],
            c = [];
        for (t += "", n += ""; (e = pe.exec(t)) && (r = ve.exec(n)); )
            (i = r.index) > o && ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)), (e = e[0]) === (r = r[0]) ? (u[a] ? (u[a] += r) : (u[++a] = r)) : ((u[++a] = null), c.push({ i: a, x: he(e, r) })), (o = ve.lastIndex);
        return (
            o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
            u.length < 2
                ? c[0]
                    ? (function (t) {
                          return function (n) {
                              return t(n) + "";
                          };
                      })(c[0].x)
                    : (function (t) {
                          return function () {
                              return t;
                          };
                      })(n)
                : ((n = c.length),
                  function (t) {
                      for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
                      return u.join("");
                  })
        );
    }
    function ye(t, n) {
        var e,
            r = typeof n;
        return null == n || "boolean" === r
            ? ne(n)
            : ("number" === r
                  ? he
                  : "string" === r
                  ? (e = hn(n))
                      ? ((n = e), ae)
                      : ge
                  : n instanceof hn
                  ? ae
                  : n instanceof Date
                  ? le
                  : Array.isArray(n)
                  ? se
                  : ("function" != typeof n.valueOf && "function" != typeof n.toString) || isNaN(n)
                  ? de
                  : he)(t, n);
    }
    function _e(t, n) {
        return (
            (n -= t = +t),
            function (e) {
                return Math.round(t + n * e);
            }
        );
    }
    var be,
        me,
        xe,
        we,
        Me = 180 / Math.PI,
        Ne = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
    function Ae(t, n, e, r, i, o) {
        var a, u, c;
        return (
            (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (a = -a)),
            { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Me, skewX: Math.atan(c) * Me, scaleX: a, scaleY: u }
        );
    }
    function Se(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : "";
        }
        return function (o, a) {
            var u = [],
                c = [];
            return (
                (o = t(o)),
                (a = t(a)),
                (function (t, r, i, o, a, u) {
                    if (t !== i || r !== o) {
                        var c = a.push("translate(", null, n, null, e);
                        u.push({ i: c - 4, x: he(t, i) }, { i: c - 2, x: he(r, o) });
                    } else (i || o) && a.push("translate(" + i + n + o + e);
                })(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
                (function (t, n, e, o) {
                    t !== n ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: he(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
                })(o.rotate, a.rotate, u, c),
                (function (t, n, e, o) {
                    t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: he(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
                })(o.skewX, a.skewX, u, c),
                (function (t, n, e, r, o, a) {
                    if (t !== e || n !== r) {
                        var u = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({ i: u - 4, x: he(t, e) }, { i: u - 2, x: he(n, r) });
                    } else (1 === e && 1 === r) || o.push(i(o) + "scale(" + e + "," + r + ")");
                })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c),
                (o = a = null),
                function (t) {
                    for (var n, e = -1, r = c.length; ++e < r; ) u[(n = c[e]).i] = n.x(t);
                    return u.join("");
                }
            );
        };
    }
    var ke = Se(
            function (t) {
                return "none" === t
                    ? Ne
                    : (be || ((be = document.createElement("DIV")), (me = document.documentElement), (xe = document.defaultView)),
                      (be.style.transform = t),
                      (t = xe.getComputedStyle(me.appendChild(be), null).getPropertyValue("transform")),
                      me.removeChild(be),
                      Ae(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
            },
            "px, ",
            "px)",
            "deg)"
        ),
        Te = Se(
            function (t) {
                return null == t
                    ? Ne
                    : (we || (we = document.createElementNS("http://www.w3.org/2000/svg", "g")), we.setAttribute("transform", t), (t = we.transform.baseVal.consolidate()) ? Ae((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Ne);
            },
            ", ",
            ")",
            ")"
        ),
        Ee = Math.SQRT2,
        Ce = 2,
        Pe = 4,
        ze = 1e-12;
    function Re(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    function qe(t, n) {
        var e,
            r,
            i = t[0],
            o = t[1],
            a = t[2],
            u = n[0],
            c = n[1],
            f = n[2],
            s = u - i,
            l = c - o,
            h = s * s + l * l;
        if (h < ze)
            (r = Math.log(f / a) / Ee),
                (e = function (t) {
                    return [i + t * s, o + t * l, a * Math.exp(Ee * t * r)];
                });
        else {
            var d = Math.sqrt(h),
                p = (f * f - a * a + Pe * h) / (2 * a * Ce * d),
                v = (f * f - a * a - Pe * h) / (2 * f * Ce * d),
                g = Math.log(Math.sqrt(p * p + 1) - p),
                y = Math.log(Math.sqrt(v * v + 1) - v);
            (r = (y - g) / Ee),
                (e = function (t) {
                    var n,
                        e = t * r,
                        u = Re(g),
                        c =
                            (a / (Ce * d)) *
                            (u * ((n = Ee * e + g), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                                (function (t) {
                                    return ((t = Math.exp(t)) - 1 / t) / 2;
                                })(g));
                    return [i + c * s, o + c * l, (a * u) / Re(Ee * e + g)];
                });
        }
        return (e.duration = 1e3 * r), e;
    }
    function De(t) {
        return function (n, e) {
            var r = t((n = mn(n)).h, (e = mn(e)).h),
                i = oe(n.s, e.s),
                o = oe(n.l, e.l),
                a = oe(n.opacity, e.opacity);
            return function (t) {
                return (n.h = r(t)), (n.s = i(t)), (n.l = o(t)), (n.opacity = a(t)), n + "";
            };
        };
    }
    var Le = De(re),
        Ue = De(oe);
    function Oe(t) {
        return function (n, e) {
            var r = t((n = Bn(n)).h, (e = Bn(e)).h),
                i = oe(n.c, e.c),
                o = oe(n.l, e.l),
                a = oe(n.opacity, e.opacity);
            return function (t) {
                return (n.h = r(t)), (n.c = i(t)), (n.l = o(t)), (n.opacity = a(t)), n + "";
            };
        };
    }
    var Ye = Oe(re),
        Be = Oe(oe);
    function Fe(t) {
        return (function n(e) {
            function r(n, r) {
                var i = t((n = Zn(n)).h, (r = Zn(r)).h),
                    o = oe(n.s, r.s),
                    a = oe(n.l, r.l),
                    u = oe(n.opacity, r.opacity);
                return function (t) {
                    return (n.h = i(t)), (n.s = o(t)), (n.l = a(Math.pow(t, e))), (n.opacity = u(t)), n + "";
                };
            }
            return (e = +e), (r.gamma = n), r;
        })(1);
    }
    var Ie = Fe(re),
        He = Fe(oe);
    var je,
        Xe,
        Ge = 0,
        Ve = 0,
        $e = 0,
        We = 1e3,
        Ze = 0,
        Qe = 0,
        Je = 0,
        Ke = "object" == typeof performance && performance.now ? performance : Date,
        tr =
            "object" == typeof window && window.requestAnimationFrame
                ? window.requestAnimationFrame.bind(window)
                : function (t) {
                      setTimeout(t, 17);
                  };
    function nr() {
        return Qe || (tr(er), (Qe = Ke.now() + Je));
    }
    function er() {
        Qe = 0;
    }
    function rr() {
        this._call = this._time = this._next = null;
    }
    function ir(t, n, e) {
        var r = new rr();
        return r.restart(t, n, e), r;
    }
    function or() {
        nr(), ++Ge;
        for (var t, n = je; n; ) (t = Qe - n._time) >= 0 && n._call.call(null, t), (n = n._next);
        --Ge;
    }
    function ar() {
        (Qe = (Ze = Ke.now()) + Je), (Ge = Ve = 0);
        try {
            or();
        } finally {
            (Ge = 0),
                (function () {
                    var t,
                        n,
                        e = je,
                        r = 1 / 0;
                    for (; e; ) e._call ? (r > e._time && (r = e._time), (t = e), (e = e._next)) : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (je = n)));
                    (Xe = t), cr(r);
                })(),
                (Qe = 0);
        }
    }
    function ur() {
        var t = Ke.now(),
            n = t - Ze;
        n > We && ((Je -= n), (Ze = t));
    }
    function cr(t) {
        Ge || (Ve && (Ve = clearTimeout(Ve)), t - Qe > 24 ? (t < 1 / 0 && (Ve = setTimeout(ar, t - Ke.now() - Je)), $e && ($e = clearInterval($e))) : ($e || ((Ze = Ke.now()), ($e = setInterval(ur, We))), (Ge = 1), tr(ar)));
    }
    function fr(t, n, e) {
        var r = new rr();
        return (
            (n = null == n ? 0 : +n),
            r.restart(
                function (e) {
                    r.stop(), t(e + n);
                },
                n,
                e
            ),
            r
        );
    }
    rr.prototype = ir.prototype = {
        constructor: rr,
        restart: function (t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            (e = (null == e ? nr() : +e) + (null == n ? 0 : +n)), this._next || Xe === this || (Xe ? (Xe._next = this) : (je = this), (Xe = this)), (this._call = t), (this._time = e), cr();
        },
        stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), cr());
        },
    };
    var sr = I("start", "end", "cancel", "interrupt"),
        lr = [],
        hr = 0,
        dr = 1,
        pr = 2,
        vr = 3,
        gr = 4,
        yr = 5,
        _r = 6;
    function br(t, n, e, r, i, o) {
        var a = t.__transition;
        if (a) {
            if (e in a) return;
        } else t.__transition = {};
        !(function (t, n, e) {
            var r,
                i = t.__transition;
            function o(c) {
                var f, s, l, h;
                if (e.state !== dr) return u();
                for (f in i)
                    if ((h = i[f]).name === e.name) {
                        if (h.state === vr) return fr(o);
                        h.state === gr
                            ? ((h.state = _r), h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f])
                            : +f < n && ((h.state = _r), h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f]);
                    }
                if (
                    (fr(function () {
                        e.state === vr && ((e.state = gr), e.timer.restart(a, e.delay, e.time), a(c));
                    }),
                    (e.state = pr),
                    e.on.call("start", t, t.__data__, e.index, e.group),
                    e.state === pr)
                ) {
                    for (e.state = vr, r = new Array((l = e.tween.length)), f = 0, s = -1; f < l; ++f) (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1;
                }
            }
            function a(n) {
                for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), (e.state = yr), 1), o = -1, a = r.length; ++o < a; ) r[o].call(t, i);
                e.state === yr && (e.on.call("end", t, t.__data__, e.index, e.group), u());
            }
            function u() {
                for (var r in ((e.state = _r), e.timer.stop(), delete i[n], i)) return;
                delete t.__transition;
            }
            (i[n] = e),
                (e.timer = ir(
                    function (t) {
                        (e.state = dr), e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay);
                    },
                    0,
                    e.time
                ));
        })(t, e, { name: n, index: r, group: i, on: sr, tween: lr, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: hr });
    }
    function mr(t, n) {
        var e = wr(t, n);
        if (e.state > hr) throw new Error("too late; already scheduled");
        return e;
    }
    function xr(t, n) {
        var e = wr(t, n);
        if (e.state > vr) throw new Error("too late; already running");
        return e;
    }
    function wr(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e;
    }
    function Mr(t, n) {
        var e,
            r,
            i,
            o = t.__transition,
            a = !0;
        if (o) {
            for (i in ((n = null == n ? null : n + ""), o))
                (e = o[i]).name === n ? ((r = e.state > pr && e.state < yr), (e.state = _r), e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : (a = !1);
            a && delete t.__transition;
        }
    }
    function Nr(t, n, e) {
        var r = t._id;
        return (
            t.each(function () {
                var t = xr(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments);
            }),
            function (t) {
                return wr(t, r).value[n];
            }
        );
    }
    function Ar(t, n) {
        var e;
        return ("number" == typeof n ? he : n instanceof hn ? ae : (e = hn(n)) ? ((n = e), ae) : ge)(t, n);
    }
    var Sr = Pt.prototype.constructor;
    function kr(t) {
        return function () {
            this.style.removeProperty(t);
        };
    }
    var Tr = 0;
    function Er(t, n, e, r) {
        (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
    }
    function Cr(t) {
        return Pt().transition(t);
    }
    function Pr() {
        return ++Tr;
    }
    var zr = Pt.prototype;
    function Rr(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }
    function qr(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    Er.prototype = Cr.prototype = {
        constructor: Er,
        select: function (t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = Q(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, c, f = r[a], s = f.length, l = (o[a] = new Array(s)), h = 0; h < s; ++h)
                    (u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), (l[h] = c), br(l[h], n, e, h, l, wr(u, e)));
            return new Er(o, this._parents, n, e);
        },
        selectAll: function (t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = K(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
                    if ((c = f[l])) {
                        for (var h, d = t.call(c, c.__data__, l, f), p = wr(c, e), v = 0, g = d.length; v < g; ++v) (h = d[v]) && br(h, n, e, v, d, p);
                        o.push(d), a.push(c);
                    }
            return new Er(o, a, n, e);
        },
        filter: function (t) {
            "function" != typeof t && (t = tt(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, c = (r[i] = []), f = 0; f < u; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new Er(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = (a[u] = new Array(l)), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new Er(a, this._parents, this._name, this._id);
        },
        selection: function () {
            return new Sr(this._groups, this._parents);
        },
        transition: function () {
            for (var t = this._name, n = this._id, e = Pr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
                    if ((a = u[f])) {
                        var s = wr(a, n);
                        br(a, t, e, f, u, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease });
                    }
            return new Er(r, this._parents, t, e);
        },
        call: zr.call,
        nodes: zr.nodes,
        node: zr.node,
        size: zr.size,
        empty: zr.empty,
        each: zr.each,
        on: function (t, n) {
            var e = this._id;
            return arguments.length < 2
                ? wr(this.node(), e).on.on(t)
                : this.each(
                      (function (t, n, e) {
                          var r,
                              i,
                              o = (function (t) {
                                  return (t + "")
                                      .trim()
                                      .split(/^|\s+/)
                                      .every(function (t) {
                                          var n = t.indexOf(".");
                                          return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
                                      });
                              })(n)
                                  ? mr
                                  : xr;
                          return function () {
                              var a = o(this, t),
                                  u = a.on;
                              u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
                          };
                      })(e, t, n)
                  );
        },
        attr: function (t, n) {
            var e = $(t),
                r = "transform" === e ? Te : Ar;
            return this.attrTween(
                t,
                "function" == typeof n
                    ? (e.local
                          ? function (t, n, e) {
                                var r, i, o;
                                return function () {
                                    var a,
                                        u,
                                        c = e(this);
                                    if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : ((i = u), (o = n((r = a), c)));
                                    this.removeAttributeNS(t.space, t.local);
                                };
                            }
                          : function (t, n, e) {
                                var r, i, o;
                                return function () {
                                    var a,
                                        u,
                                        c = e(this);
                                    if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : ((i = u), (o = n((r = a), c)));
                                    this.removeAttribute(t);
                                };
                            })(e, r, Nr(this, "attr." + t, n))
                    : null == n
                    ? (e.local
                          ? function (t) {
                                return function () {
                                    this.removeAttributeNS(t.space, t.local);
                                };
                            }
                          : function (t) {
                                return function () {
                                    this.removeAttribute(t);
                                };
                            })(e)
                    : (e.local
                          ? function (t, n, e) {
                                var r,
                                    i,
                                    o = e + "";
                                return function () {
                                    var a = this.getAttributeNS(t.space, t.local);
                                    return a === o ? null : a === r ? i : (i = n((r = a), e));
                                };
                            }
                          : function (t, n, e) {
                                var r,
                                    i,
                                    o = e + "";
                                return function () {
                                    var a = this.getAttribute(t);
                                    return a === o ? null : a === r ? i : (i = n((r = a), e));
                                };
                            })(e, r, n)
            );
        },
        attrTween: function (t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error();
            var r = $(t);
            return this.tween(
                e,
                (r.local
                    ? function (t, n) {
                          var e, r;
                          function i() {
                              var i = n.apply(this, arguments);
                              return (
                                  i !== r &&
                                      (e =
                                          (r = i) &&
                                          (function (t, n) {
                                              return function (e) {
                                                  this.setAttributeNS(t.space, t.local, n(e));
                                              };
                                          })(t, i)),
                                  e
                              );
                          }
                          return (i._value = n), i;
                      }
                    : function (t, n) {
                          var e, r;
                          function i() {
                              var i = n.apply(this, arguments);
                              return (
                                  i !== r &&
                                      (e =
                                          (r = i) &&
                                          (function (t, n) {
                                              return function (e) {
                                                  this.setAttribute(t, n(e));
                                              };
                                          })(t, i)),
                                  e
                              );
                          }
                          return (i._value = n), i;
                      })(r, n)
            );
        },
        style: function (t, n, e) {
            var r = "transform" == (t += "") ? ke : Ar;
            return null == n
                ? this.styleTween(
                      t,
                      (function (t, n) {
                          var e, r, i;
                          return function () {
                              var o = ct(this, t),
                                  a = (this.style.removeProperty(t), ct(this, t));
                              return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
                          };
                      })(t, r)
                  ).on("end.style." + t, kr(t))
                : "function" == typeof n
                ? this.styleTween(
                      t,
                      (function (t, n, e) {
                          var r, i, o;
                          return function () {
                              var a = ct(this, t),
                                  u = e(this),
                                  c = u + "";
                              return null == u && (this.style.removeProperty(t), (c = u = ct(this, t))), a === c ? null : a === r && c === i ? o : ((i = c), (o = n((r = a), u)));
                          };
                      })(t, r, Nr(this, "style." + t, n))
                  ).each(
                      (function (t, n) {
                          var e,
                              r,
                              i,
                              o,
                              a = "style." + n,
                              u = "end." + a;
                          return function () {
                              var c = xr(this, t),
                                  f = c.on,
                                  s = null == c.value[a] ? o || (o = kr(n)) : void 0;
                              (f === e && i === s) || (r = (e = f).copy()).on(u, (i = s)), (c.on = r);
                          };
                      })(this._id, t)
                  )
                : this.styleTween(
                      t,
                      (function (t, n, e) {
                          var r,
                              i,
                              o = e + "";
                          return function () {
                              var a = ct(this, t);
                              return a === o ? null : a === r ? i : (i = n((r = a), e));
                          };
                      })(t, r, n),
                      e
                  ).on("end.style." + t, null);
        },
        styleTween: function (t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error();
            return this.tween(
                r,
                (function (t, n, e) {
                    var r, i;
                    function o() {
                        var o = n.apply(this, arguments);
                        return (
                            o !== i &&
                                (r =
                                    (i = o) &&
                                    (function (t, n, e) {
                                        return function (r) {
                                            this.style.setProperty(t, n(r), e);
                                        };
                                    })(t, o, e)),
                            r
                        );
                    }
                    return (o._value = n), o;
                })(t, n, null == e ? "" : e)
            );
        },
        text: function (t) {
            return this.tween(
                "text",
                "function" == typeof t
                    ? (function (t) {
                          return function () {
                              var n = t(this);
                              this.textContent = null == n ? "" : n;
                          };
                      })(Nr(this, "text", t))
                    : (function (t) {
                          return function () {
                              this.textContent = t;
                          };
                      })(null == t ? "" : t + "")
            );
        },
        remove: function () {
            return this.on(
                "end.remove",
                ((t = this._id),
                function () {
                    var n = this.parentNode;
                    for (var e in this.__transition) if (+e !== t) return;
                    n && n.removeChild(this);
                })
            );
            var t;
        },
        tween: function (t, n) {
            var e = this._id;
            if (((t += ""), arguments.length < 2)) {
                for (var r, i = wr(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) if ((r = i[o]).name === t) return r.value;
                return null;
            }
            return this.each(
                (null == n
                    ? function (t, n) {
                          var e, r;
                          return function () {
                              var i = xr(this, t),
                                  o = i.tween;
                              if (o !== e)
                                  for (var a = 0, u = (r = e = o).length; a < u; ++a)
                                      if (r[a].name === n) {
                                          (r = r.slice()).splice(a, 1);
                                          break;
                                      }
                              i.tween = r;
                          };
                      }
                    : function (t, n, e) {
                          var r, i;
                          if ("function" != typeof e) throw new Error();
                          return function () {
                              var o = xr(this, t),
                                  a = o.tween;
                              if (a !== r) {
                                  i = (r = a).slice();
                                  for (var u = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
                                      if (i[c].name === n) {
                                          i[c] = u;
                                          break;
                                      }
                                  c === f && i.push(u);
                              }
                              o.tween = i;
                          };
                      })(e, t, n)
            );
        },
        delay: function (t) {
            var n = this._id;
            return arguments.length
                ? this.each(
                      ("function" == typeof t
                          ? function (t, n) {
                                return function () {
                                    mr(this, t).delay = +n.apply(this, arguments);
                                };
                            }
                          : function (t, n) {
                                return (
                                    (n = +n),
                                    function () {
                                        mr(this, t).delay = n;
                                    }
                                );
                            })(n, t)
                  )
                : wr(this.node(), n).delay;
        },
        duration: function (t) {
            var n = this._id;
            return arguments.length
                ? this.each(
                      ("function" == typeof t
                          ? function (t, n) {
                                return function () {
                                    xr(this, t).duration = +n.apply(this, arguments);
                                };
                            }
                          : function (t, n) {
                                return (
                                    (n = +n),
                                    function () {
                                        xr(this, t).duration = n;
                                    }
                                );
                            })(n, t)
                  )
                : wr(this.node(), n).duration;
        },
        ease: function (t) {
            var n = this._id;
            return arguments.length
                ? this.each(
                      (function (t, n) {
                          if ("function" != typeof n) throw new Error();
                          return function () {
                              xr(this, t).ease = n;
                          };
                      })(n, t)
                  )
                : wr(this.node(), n).ease;
        },
        end: function () {
            var t,
                n,
                e = this,
                r = e._id,
                i = e.size();
            return new Promise(function (o, a) {
                var u = { value: a },
                    c = {
                        value: function () {
                            0 == --i && o();
                        },
                    };
                e.each(function () {
                    var e = xr(this, r),
                        i = e.on;
                    i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), (e.on = n);
                });
            });
        },
    };
    var Dr = (function t(n) {
            function e(t) {
                return Math.pow(t, n);
            }
            return (n = +n), (e.exponent = t), e;
        })(3),
        Lr = (function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n);
            }
            return (n = +n), (e.exponent = t), e;
        })(3),
        Ur = (function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
            }
            return (n = +n), (e.exponent = t), e;
        })(3),
        Or = Math.PI,
        Yr = Or / 2;
    function Br(t) {
        return (1 - Math.cos(Or * t)) / 2;
    }
    function Fr(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
    }
    function Ir(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
    }
    var Hr = 4 / 11,
        jr = 6 / 11,
        Xr = 8 / 11,
        Gr = 0.75,
        Vr = 9 / 11,
        $r = 10 / 11,
        Wr = 0.9375,
        Zr = 21 / 22,
        Qr = 63 / 64,
        Jr = 1 / Hr / Hr;
    function Kr(t) {
        return (t = +t) < Hr ? Jr * t * t : t < Xr ? Jr * (t -= jr) * t + Gr : t < $r ? Jr * (t -= Vr) * t + Wr : Jr * (t -= Zr) * t + Qr;
    }
    var ti = (function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n);
            }
            return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        ni = (function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1;
            }
            return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        ei = (function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
            }
            return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        ri = 2 * Math.PI,
        ii = (function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ri);
            function i(t) {
                return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
            }
            return (
                (i.amplitude = function (n) {
                    return t(n, e * ri);
                }),
                (i.period = function (e) {
                    return t(n, e);
                }),
                i
            );
        })(1, 0.3),
        oi = (function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ri);
            function i(t) {
                return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
            }
            return (
                (i.amplitude = function (n) {
                    return t(n, e * ri);
                }),
                (i.period = function (e) {
                    return t(n, e);
                }),
                i
            );
        })(1, 0.3),
        ai = (function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ri);
            function i(t) {
                return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2;
            }
            return (
                (i.amplitude = function (n) {
                    return t(n, e * ri);
                }),
                (i.period = function (e) {
                    return t(n, e);
                }),
                i
            );
        })(1, 0.3),
        ui = { time: null, delay: 0, duration: 250, ease: qr };
    function ci(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); ) if (!(t = t.parentNode)) return (ui.time = nr()), ui;
        return e;
    }
    (Pt.prototype.interrupt = function (t) {
        return this.each(function () {
            Mr(this, t);
        });
    }),
        (Pt.prototype.transition = function (t) {
            var n, e;
            t instanceof Er ? ((n = t._id), (t = t._name)) : ((n = Pr()), ((e = ui).time = nr()), (t = null == t ? null : t + ""));
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) (a = u[f]) && br(a, t, n, f, u, e || ci(a, n));
            return new Er(r, this._parents, t, n);
        });
    var fi = [null];
    function si(t) {
        return function () {
            return t;
        };
    }
    function li(t, n, e) {
        (this.target = t), (this.type = n), (this.selection = e);
    }
    function hi() {
        t.event.stopImmediatePropagation();
    }
    function di() {
        t.event.preventDefault(), t.event.stopImmediatePropagation();
    }
    var pi = { name: "drag" },
        vi = { name: "space" },
        gi = { name: "handle" },
        yi = { name: "center" },
        _i = {
            name: "x",
            handles: ["e", "w"].map(Si),
            input: function (t, n) {
                return (
                    t && [
                        [t[0], n[0][1]],
                        [t[1], n[1][1]],
                    ]
                );
            },
            output: function (t) {
                return t && [t[0][0], t[1][0]];
            },
        },
        bi = {
            name: "y",
            handles: ["n", "s"].map(Si),
            input: function (t, n) {
                return (
                    t && [
                        [n[0][0], t[0]],
                        [n[1][0], t[1]],
                    ]
                );
            },
            output: function (t) {
                return t && [t[0][1], t[1][1]];
            },
        },
        mi = {
            name: "xy",
            handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Si),
            input: function (t) {
                return t;
            },
            output: function (t) {
                return t;
            },
        },
        xi = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
        wi = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        Mi = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        Ni = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
        Ai = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };
    function Si(t) {
        return { type: t };
    }
    function ki() {
        return !t.event.button;
    }
    function Ti() {
        var t = this.ownerSVGElement || this;
        return [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value],
        ];
    }
    function Ei(t) {
        for (; !t.__brush; ) if (!(t = t.parentNode)) return;
        return t.__brush;
    }
    function Ci(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
    }
    function Pi(n) {
        var e,
            r = Ti,
            i = ki,
            o = I(u, "start", "brush", "end"),
            a = 6;
        function u(t) {
            var e = t
                .property("__brush", h)
                .selectAll(".overlay")
                .data([Si("overlay")]);
            e
                .enter()
                .append("rect")
                .attr("class", "overlay")
                .attr("pointer-events", "all")
                .attr("cursor", xi.overlay)
                .merge(e)
                .each(function () {
                    var t = Ei(this).extent;
                    zt(this)
                        .attr("x", t[0][0])
                        .attr("y", t[0][1])
                        .attr("width", t[1][0] - t[0][0])
                        .attr("height", t[1][1] - t[0][1]);
                }),
                t
                    .selectAll(".selection")
                    .data([Si("selection")])
                    .enter()
                    .append("rect")
                    .attr("class", "selection")
                    .attr("cursor", xi.selection)
                    .attr("fill", "#777")
                    .attr("fill-opacity", 0.3)
                    .attr("stroke", "#fff")
                    .attr("shape-rendering", "crispEdges");
            var r = t.selectAll(".handle").data(n.handles, function (t) {
                return t.type;
            });
            r.exit().remove(),
                r
                    .enter()
                    .append("rect")
                    .attr("class", function (t) {
                        return "handle handle--" + t.type;
                    })
                    .attr("cursor", function (t) {
                        return xi[t.type];
                    }),
                t.each(c).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", l);
        }
        function c() {
            var t = zt(this),
                n = Ei(this).selection;
            n
                ? (t
                      .selectAll(".selection")
                      .style("display", null)
                      .attr("x", n[0][0])
                      .attr("y", n[0][1])
                      .attr("width", n[1][0] - n[0][0])
                      .attr("height", n[1][1] - n[0][1]),
                  t
                      .selectAll(".handle")
                      .style("display", null)
                      .attr("x", function (t) {
                          return "e" === t.type[t.type.length - 1] ? n[1][0] - a / 2 : n[0][0] - a / 2;
                      })
                      .attr("y", function (t) {
                          return "s" === t.type[0] ? n[1][1] - a / 2 : n[0][1] - a / 2;
                      })
                      .attr("width", function (t) {
                          return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + a : a;
                      })
                      .attr("height", function (t) {
                          return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + a : a;
                      }))
                : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
        }
        function f(t, n) {
            return t.__brush.emitter || new s(t, n);
        }
        function s(t, n) {
            (this.that = t), (this.args = n), (this.state = t.__brush), (this.active = 0);
        }
        function l() {
            if (t.event.touches) {
                if (t.event.changedTouches.length < t.event.touches.length) return di();
            } else if (e) return;
            if (i.apply(this, arguments)) {
                var r,
                    o,
                    a,
                    u,
                    s,
                    l,
                    h,
                    d,
                    p,
                    v,
                    g,
                    y,
                    _,
                    b = this,
                    m = t.event.target.__data__.type,
                    x = "selection" === (t.event.metaKey ? (m = "overlay") : m) ? pi : t.event.altKey ? yi : gi,
                    w = n === bi ? null : Ni[m],
                    M = n === _i ? null : Ai[m],
                    N = Ei(b),
                    A = N.extent,
                    S = N.selection,
                    k = A[0][0],
                    T = A[0][1],
                    E = A[1][0],
                    C = A[1][1],
                    P = w && M && t.event.shiftKey,
                    z = Ot(b),
                    R = z,
                    q = f(b, arguments).beforestart();
                "overlay" === m
                    ? (N.selection = S = [
                          [(r = n === bi ? k : z[0]), (a = n === _i ? T : z[1])],
                          [(s = n === bi ? E : r), (h = n === _i ? C : a)],
                      ])
                    : ((r = S[0][0]), (a = S[0][1]), (s = S[1][0]), (h = S[1][1])),
                    (o = r),
                    (u = a),
                    (l = s),
                    (d = h);
                var D = zt(b).attr("pointer-events", "none"),
                    L = D.selectAll(".overlay").attr("cursor", xi[m]);
                if (t.event.touches) D.on("touchmove.brush", O, !0).on("touchend.brush touchcancel.brush", B, !0);
                else {
                    var U = zt(t.event.view)
                        .on(
                            "keydown.brush",
                            function () {
                                switch (t.event.keyCode) {
                                    case 16:
                                        P = w && M;
                                        break;
                                    case 18:
                                        x === gi && (w && ((s = l - p * w), (r = o + p * w)), M && ((h = d - v * M), (a = u + v * M)), (x = yi), Y());
                                        break;
                                    case 32:
                                        (x !== gi && x !== yi) || (w < 0 ? (s = l - p) : w > 0 && (r = o - p), M < 0 ? (h = d - v) : M > 0 && (a = u - v), (x = vi), L.attr("cursor", xi.selection), Y());
                                        break;
                                    default:
                                        return;
                                }
                                di();
                            },
                            !0
                        )
                        .on(
                            "keyup.brush",
                            function () {
                                switch (t.event.keyCode) {
                                    case 16:
                                        P && ((y = _ = P = !1), Y());
                                        break;
                                    case 18:
                                        x === yi && (w < 0 ? (s = l) : w > 0 && (r = o), M < 0 ? (h = d) : M > 0 && (a = u), (x = gi), Y());
                                        break;
                                    case 32:
                                        x === vi &&
                                            (t.event.altKey ? (w && ((s = l - p * w), (r = o + p * w)), M && ((h = d - v * M), (a = u + v * M)), (x = yi)) : (w < 0 ? (s = l) : w > 0 && (r = o), M < 0 ? (h = d) : M > 0 && (a = u), (x = gi)),
                                            L.attr("cursor", xi[m]),
                                            Y());
                                        break;
                                    default:
                                        return;
                                }
                                di();
                            },
                            !0
                        )
                        .on("mousemove.brush", O, !0)
                        .on("mouseup.brush", B, !0);
                    It(t.event.view);
                }
                hi(), Mr(b), c.call(b), q.start();
            }
            function O() {
                var t = Ot(b);
                !P || y || _ || (Math.abs(t[0] - R[0]) > Math.abs(t[1] - R[1]) ? (_ = !0) : (y = !0)), (R = t), (g = !0), di(), Y();
            }
            function Y() {
                var t;
                switch (((p = R[0] - z[0]), (v = R[1] - z[1]), x)) {
                    case vi:
                    case pi:
                        w && ((p = Math.max(k - r, Math.min(E - s, p))), (o = r + p), (l = s + p)), M && ((v = Math.max(T - a, Math.min(C - h, v))), (u = a + v), (d = h + v));
                        break;
                    case gi:
                        w < 0 ? ((p = Math.max(k - r, Math.min(E - r, p))), (o = r + p), (l = s)) : w > 0 && ((p = Math.max(k - s, Math.min(E - s, p))), (o = r), (l = s + p)),
                            M < 0 ? ((v = Math.max(T - a, Math.min(C - a, v))), (u = a + v), (d = h)) : M > 0 && ((v = Math.max(T - h, Math.min(C - h, v))), (u = a), (d = h + v));
                        break;
                    case yi:
                        w && ((o = Math.max(k, Math.min(E, r - p * w))), (l = Math.max(k, Math.min(E, s + p * w)))), M && ((u = Math.max(T, Math.min(C, a - v * M))), (d = Math.max(T, Math.min(C, h + v * M))));
                }
                l < o && ((w *= -1), (t = r), (r = s), (s = t), (t = o), (o = l), (l = t), m in wi && L.attr("cursor", xi[(m = wi[m])])),
                    d < u && ((M *= -1), (t = a), (a = h), (h = t), (t = u), (u = d), (d = t), m in Mi && L.attr("cursor", xi[(m = Mi[m])])),
                    N.selection && (S = N.selection),
                    y && ((o = S[0][0]), (l = S[1][0])),
                    _ && ((u = S[0][1]), (d = S[1][1])),
                    (S[0][0] === o && S[0][1] === u && S[1][0] === l && S[1][1] === d) ||
                        ((N.selection = [
                            [o, u],
                            [l, d],
                        ]),
                        c.call(b),
                        q.brush());
            }
            function B() {
                if ((hi(), t.event.touches)) {
                    if (t.event.touches.length) return;
                    e && clearTimeout(e),
                        (e = setTimeout(function () {
                            e = null;
                        }, 500)),
                        D.on("touchmove.brush touchend.brush touchcancel.brush", null);
                } else Ht(t.event.view, g), U.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                D.attr("pointer-events", "all"), L.attr("cursor", xi.overlay), N.selection && (S = N.selection), Ci(S) && ((N.selection = null), c.call(b)), q.end();
            }
        }
        function h() {
            var t = this.__brush || { selection: null };
            return (t.extent = r.apply(this, arguments)), (t.dim = n), t;
        }
        return (
            (u.move = function (t, e) {
                t.selection
                    ? t
                          .on("start.brush", function () {
                              f(this, arguments).beforestart().start();
                          })
                          .on("interrupt.brush end.brush", function () {
                              f(this, arguments).end();
                          })
                          .tween("brush", function () {
                              var t = this,
                                  r = t.__brush,
                                  i = f(t, arguments),
                                  o = r.selection,
                                  a = n.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                                  u = ye(o, a);
                              function s(n) {
                                  (r.selection = 1 === n && Ci(a) ? null : u(n)), c.call(t), i.brush();
                              }
                              return o && a ? s : s(1);
                          })
                    : t.each(function () {
                          var t = arguments,
                              r = this.__brush,
                              i = n.input("function" == typeof e ? e.apply(this, t) : e, r.extent),
                              o = f(this, t).beforestart();
                          Mr(this), (r.selection = null == i || Ci(i) ? null : i), c.call(this), o.start().brush().end();
                      });
            }),
            (s.prototype = {
                beforestart: function () {
                    return 1 == ++this.active && ((this.state.emitter = this), (this.starting = !0)), this;
                },
                start: function () {
                    return this.starting && ((this.starting = !1), this.emit("start")), this;
                },
                brush: function () {
                    return this.emit("brush"), this;
                },
                end: function () {
                    return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
                },
                emit: function (t) {
                    kt(new li(u, t, n.output(this.state.selection)), o.apply, o, [t, this.that, this.args]);
                },
            }),
            (u.extent = function (t) {
                return arguments.length
                    ? ((r =
                          "function" == typeof t
                              ? t
                              : si([
                                    [+t[0][0], +t[0][1]],
                                    [+t[1][0], +t[1][1]],
                                ])),
                      u)
                    : r;
            }),
            (u.filter = function (t) {
                return arguments.length ? ((i = "function" == typeof t ? t : si(!!t)), u) : i;
            }),
            (u.handleSize = function (t) {
                return arguments.length ? ((a = +t), u) : a;
            }),
            (u.on = function () {
                var t = o.on.apply(o, arguments);
                return t === o ? u : t;
            }),
            u
        );
    }
    var zi = Math.cos,
        Ri = Math.sin,
        qi = Math.PI,
        Di = qi / 2,
        Li = 2 * qi,
        Ui = Math.max;
    var Oi = Array.prototype.slice;
    function Yi(t) {
        return function () {
            return t;
        };
    }
    var Bi = Math.PI,
        Fi = 2 * Bi,
        Ii = Fi - 1e-6;
    function Hi() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function ji() {
        return new Hi();
    }
    function Xi(t) {
        return t.source;
    }
    function Gi(t) {
        return t.target;
    }
    function Vi(t) {
        return t.radius;
    }
    function $i(t) {
        return t.startAngle;
    }
    function Wi(t) {
        return t.endAngle;
    }
    Hi.prototype = ji.prototype = {
        constructor: Hi,
        moveTo: function (t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
        },
        closePath: function () {
            null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
        },
        quadraticCurveTo: function (t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (t, n, e, r, i, o) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
        },
        arcTo: function (t, n, e, r, i) {
            (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
            var o = this._x1,
                a = this._y1,
                u = e - t,
                c = r - n,
                f = o - t,
                s = a - n,
                l = f * f + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > 1e-6)
                if (Math.abs(s * u - c * f) > 1e-6 && i) {
                    var h = e - o,
                        d = r - a,
                        p = u * u + c * c,
                        v = h * h + d * d,
                        g = Math.sqrt(p),
                        y = Math.sqrt(l),
                        _ = i * Math.tan((Bi - Math.acos((p + l - v) / (2 * g * y))) / 2),
                        b = _ / y,
                        m = _ / g;
                    Math.abs(b - 1) > 1e-6 && (this._ += "L" + (t + b * f) + "," + (n + b * s)), (this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c));
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function (t, n, e, r, i, o) {
            (t = +t), (n = +n);
            var a = (e = +e) * Math.cos(r),
                u = e * Math.sin(r),
                c = t + a,
                f = n + u,
                s = 1 ^ o,
                l = o ? r - i : i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? (this._ += "M" + c + "," + f) : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f),
                e &&
                    (l < 0 && (l = (l % Fi) + Fi),
                    l > Ii
                        ? (this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f))
                        : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Bi) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
        },
        rect: function (t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
        },
        toString: function () {
            return this._;
        },
    };
    function Zi() {}
    function Qi(t, n) {
        var e = new Zi();
        if (t instanceof Zi)
            t.each(function (t, n) {
                e.set(n, t);
            });
        else if (Array.isArray(t)) {
            var r,
                i = -1,
                o = t.length;
            if (null == n) for (; ++i < o; ) e.set(i, t[i]);
            else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r);
        } else if (t) for (var a in t) e.set(a, t[a]);
        return e;
    }
    function Ji() {
        return {};
    }
    function Ki(t, n, e) {
        t[n] = e;
    }
    function to() {
        return Qi();
    }
    function no(t, n, e) {
        t.set(n, e);
    }
    function eo() {}
    Zi.prototype = Qi.prototype = {
        constructor: Zi,
        has: function (t) {
            return "$" + t in this;
        },
        get: function (t) {
            return this["$" + t];
        },
        set: function (t, n) {
            return (this["$" + t] = n), this;
        },
        remove: function (t) {
            var n = "$" + t;
            return n in this && delete this[n];
        },
        clear: function () {
            for (var t in this) "$" === t[0] && delete this[t];
        },
        keys: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(n.slice(1));
            return t;
        },
        values: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(this[n]);
            return t;
        },
        entries: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
            return t;
        },
        size: function () {
            var t = 0;
            for (var n in this) "$" === n[0] && ++t;
            return t;
        },
        empty: function () {
            for (var t in this) if ("$" === t[0]) return !1;
            return !0;
        },
        each: function (t) {
            for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this);
        },
    };
    var ro = Qi.prototype;
    function io(t, n) {
        var e = new eo();
        if (t instanceof eo)
            t.each(function (t) {
                e.add(t);
            });
        else if (t) {
            var r = -1,
                i = t.length;
            if (null == n) for (; ++r < i; ) e.add(t[r]);
            else for (; ++r < i; ) e.add(n(t[r], r, t));
        }
        return e;
    }
    eo.prototype = io.prototype = {
        constructor: eo,
        has: ro.has,
        add: function (t) {
            return (this["$" + (t += "")] = t), this;
        },
        remove: ro.remove,
        clear: ro.clear,
        values: ro.keys,
        size: ro.size,
        empty: ro.empty,
        each: ro.each,
    };
    var oo = Array.prototype.slice;
    function ao(t, n) {
        return t - n;
    }
    function uo(t) {
        return function () {
            return t;
        };
    }
    function co(t, n) {
        for (var e, r = -1, i = n.length; ++r < i; ) if ((e = fo(t, n[r]))) return e;
        return 0;
    }
    function fo(t, n) {
        for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
            var c = t[o],
                f = c[0],
                s = c[1],
                l = t[u],
                h = l[0],
                d = l[1];
            if (so(c, l, n)) return 0;
            s > r != d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i);
        }
        return i;
    }
    function so(t, n, e) {
        var r, i, o, a;
        return (
            (function (t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]);
            })(t, n, e) && ((i = t[(r = +(t[0] === n[0]))]), (o = e[r]), (a = n[r]), (i <= o && o <= a) || (a <= o && o <= i))
        );
    }
    function lo() {}
    var ho = [
        [],
        [
            [
                [1, 1.5],
                [0.5, 1],
            ],
        ],
        [
            [
                [1.5, 1],
                [1, 1.5],
            ],
        ],
        [
            [
                [1.5, 1],
                [0.5, 1],
            ],
        ],
        [
            [
                [1, 0.5],
                [1.5, 1],
            ],
        ],
        [
            [
                [1, 1.5],
                [0.5, 1],
            ],
            [
                [1, 0.5],
                [1.5, 1],
            ],
        ],
        [
            [
                [1, 0.5],
                [1, 1.5],
            ],
        ],
        [
            [
                [1, 0.5],
                [0.5, 1],
            ],
        ],
        [
            [
                [0.5, 1],
                [1, 0.5],
            ],
        ],
        [
            [
                [1, 1.5],
                [1, 0.5],
            ],
        ],
        [
            [
                [0.5, 1],
                [1, 0.5],
            ],
            [
                [1.5, 1],
                [1, 1.5],
            ],
        ],
        [
            [
                [1.5, 1],
                [1, 0.5],
            ],
        ],
        [
            [
                [0.5, 1],
                [1.5, 1],
            ],
        ],
        [
            [
                [1, 1.5],
                [1.5, 1],
            ],
        ],
        [
            [
                [0.5, 1],
                [1, 1.5],
            ],
        ],
        [],
    ];
    function po() {
        var t = 1,
            n = 1,
            e = M,
            r = u;
        function i(t) {
            var n = e(t);
            if (Array.isArray(n)) n = n.slice().sort(ao);
            else {
                var r = s(t),
                    i = r[0],
                    a = r[1];
                (n = w(i, a, n)), (n = g(Math.floor(i / n) * n, Math.floor(a / n) * n, n));
            }
            return n.map(function (n) {
                return o(t, n);
            });
        }
        function o(e, i) {
            var o = [],
                u = [];
            return (
                (function (e, r, i) {
                    var o,
                        u,
                        c,
                        f,
                        s,
                        l,
                        h = new Array(),
                        d = new Array();
                    (o = u = -1), (f = e[0] >= r), ho[f << 1].forEach(p);
                    for (; ++o < t - 1; ) (c = f), (f = e[o + 1] >= r), ho[c | (f << 1)].forEach(p);
                    ho[f << 0].forEach(p);
                    for (; ++u < n - 1; ) {
                        for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, ho[(f << 1) | (s << 2)].forEach(p); ++o < t - 1; )
                            (c = f), (f = e[u * t + t + o + 1] >= r), (l = s), (s = e[u * t + o + 1] >= r), ho[c | (f << 1) | (s << 2) | (l << 3)].forEach(p);
                        ho[f | (s << 3)].forEach(p);
                    }
                    (o = -1), (s = e[u * t] >= r), ho[s << 2].forEach(p);
                    for (; ++o < t - 1; ) (l = s), (s = e[u * t + o + 1] >= r), ho[(s << 2) | (l << 3)].forEach(p);
                    function p(t) {
                        var n,
                            e,
                            r = [t[0][0] + o, t[0][1] + u],
                            c = [t[1][0] + o, t[1][1] + u],
                            f = a(r),
                            s = a(c);
                        (n = d[f])
                            ? (e = h[s])
                                ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : (h[n.start] = d[e.end] = { start: n.start, end: e.end, ring: n.ring.concat(e.ring) }))
                                : (delete d[n.end], n.ring.push(c), (d[(n.end = s)] = n))
                            : (n = h[s])
                            ? (e = d[f])
                                ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : (h[e.start] = d[n.end] = { start: e.start, end: n.end, ring: e.ring.concat(n.ring) }))
                                : (delete h[n.start], n.ring.unshift(r), (h[(n.start = f)] = n))
                            : (h[f] = d[s] = { start: f, end: s, ring: [r, c] });
                    }
                    ho[s << 3].forEach(p);
                })(e, i, function (t) {
                    r(t, e, i),
                        (function (t) {
                            for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e; ) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                            return r;
                        })(t) > 0
                            ? o.push([t])
                            : u.push(t);
                }),
                u.forEach(function (t) {
                    for (var n, e = 0, r = o.length; e < r; ++e) if (-1 !== co((n = o[e])[0], t)) return void n.push(t);
                }),
                { type: "MultiPolygon", value: i, coordinates: o }
            );
        }
        function a(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4;
        }
        function u(e, r, i) {
            e.forEach(function (e) {
                var o,
                    a = e[0],
                    u = e[1],
                    c = 0 | a,
                    f = 0 | u,
                    s = r[f * t + c];
                a > 0 && a < t && c === a && ((o = r[f * t + c - 1]), (e[0] = a + (i - o) / (s - o) - 0.5)), u > 0 && u < n && f === u && ((o = r[(f - 1) * t + c]), (e[1] = u + (i - o) / (s - o) - 0.5));
            });
        }
        return (
            (i.contour = o),
            (i.size = function (e) {
                if (!arguments.length) return [t, n];
                var r = Math.ceil(e[0]),
                    o = Math.ceil(e[1]);
                if (!(r > 0 && o > 0)) throw new Error("invalid size");
                return (t = r), (n = o), i;
            }),
            (i.thresholds = function (t) {
                return arguments.length ? ((e = "function" == typeof t ? t : Array.isArray(t) ? uo(oo.call(t)) : uo(t)), i) : e;
            }),
            (i.smooth = function (t) {
                return arguments.length ? ((r = t ? u : lo), i) : r === u;
            }),
            i
        );
    }
    function vo(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a)
            for (var u = 0, c = 0; u < r + e; ++u) u < r && (c += t.data[u + a * r]), u >= e && (u >= o && (c -= t.data[u - o + a * r]), (n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o)));
    }
    function go(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a)
            for (var u = 0, c = 0; u < i + e; ++u) u < i && (c += t.data[a + u * r]), u >= e && (u >= o && (c -= t.data[a + (u - o) * r]), (n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o)));
    }
    function yo(t) {
        return t[0];
    }
    function _o(t) {
        return t[1];
    }
    function bo() {
        return 1;
    }
    var mo = {},
        xo = {},
        wo = 34,
        Mo = 10,
        No = 13;
    function Ao(t) {
        return new Function(
            "d",
            "return {" +
                t
                    .map(function (t, n) {
                        return JSON.stringify(t) + ": d[" + n + "]";
                    })
                    .join(",") +
                "}"
        );
    }
    function So(t) {
        var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0);
        function r(t, n) {
            var r,
                i = [],
                o = t.length,
                a = 0,
                u = 0,
                c = o <= 0,
                f = !1;
            function s() {
                if (c) return xo;
                if (f) return (f = !1), mo;
                var n,
                    r,
                    i = a;
                if (t.charCodeAt(i) === wo) {
                    for (; (a++ < o && t.charCodeAt(a) !== wo) || t.charCodeAt(++a) === wo; );
                    return (n = a) >= o ? (c = !0) : (r = t.charCodeAt(a++)) === Mo ? (f = !0) : r === No && ((f = !0), t.charCodeAt(a) === Mo && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"');
                }
                for (; a < o; ) {
                    if ((r = t.charCodeAt((n = a++))) === Mo) f = !0;
                    else if (r === No) (f = !0), t.charCodeAt(a) === Mo && ++a;
                    else if (r !== e) continue;
                    return t.slice(i, n);
                }
                return (c = !0), t.slice(i, o);
            }
            for (t.charCodeAt(o - 1) === Mo && --o, t.charCodeAt(o - 1) === No && --o; (r = s()) !== xo; ) {
                for (var l = []; r !== mo && r !== xo; ) l.push(r), (r = s());
                (n && null == (l = n(l, u++))) || i.push(l);
            }
            return i;
        }
        function i(n) {
            return n.map(o).join(t);
        }
        function o(t) {
            return null == t ? "" : n.test((t += "")) ? '"' + t.replace(/"/g, '""') + '"' : t;
        }
        return {
            parse: function (t, n) {
                var e,
                    i,
                    o = r(t, function (t, r) {
                        if (e) return e(t, r - 1);
                        (i = t),
                            (e = n
                                ? (function (t, n) {
                                      var e = Ao(t);
                                      return function (r, i) {
                                          return n(e(r), i, t);
                                      };
                                  })(t, n)
                                : Ao(t));
                    });
                return (o.columns = i || []), o;
            },
            parseRows: r,
            format: function (n, e) {
                return (
                    null == e &&
                        (e = (function (t) {
                            var n = Object.create(null),
                                e = [];
                            return (
                                t.forEach(function (t) {
                                    for (var r in t) r in n || e.push((n[r] = r));
                                }),
                                e
                            );
                        })(n)),
                    [e.map(o).join(t)]
                        .concat(
                            n.map(function (n) {
                                return e
                                    .map(function (t) {
                                        return o(n[t]);
                                    })
                                    .join(t);
                            })
                        )
                        .join("\n")
                );
            },
            formatRows: function (t) {
                return t.map(i).join("\n");
            },
        };
    }
    var ko = So(","),
        To = ko.parse,
        Eo = ko.parseRows,
        Co = ko.format,
        Po = ko.formatRows,
        zo = So("\t"),
        Ro = zo.parse,
        qo = zo.parseRows,
        Do = zo.format,
        Lo = zo.formatRows;
    function Uo(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob();
    }
    function Oo(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer();
    }
    function Yo(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
    }
    function Bo(t, n) {
        return fetch(t, n).then(Yo);
    }
    function Fo(t) {
        return function (n, e, r) {
            return (
                2 === arguments.length && "function" == typeof e && ((r = e), (e = void 0)),
                Bo(n, e).then(function (n) {
                    return t(n, r);
                })
            );
        };
    }
    var Io = Fo(To),
        Ho = Fo(Ro);
    function jo(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.json();
    }
    function Xo(t) {
        return function (n, e) {
            return Bo(n, e).then(function (n) {
                return new DOMParser().parseFromString(n, t);
            });
        };
    }
    var Go = Xo("application/xml"),
        Vo = Xo("text/html"),
        $o = Xo("image/svg+xml");
    function Wo(t) {
        return function () {
            return t;
        };
    }
    function Zo() {
        return 1e-6 * (Math.random() - 0.5);
    }
    function Qo(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h,
            d = t._root,
            p = { data: r },
            v = t._x0,
            g = t._y0,
            y = t._x1,
            _ = t._y1;
        if (!d) return (t._root = p), t;
        for (; d.length; ) if (((f = n >= (o = (v + y) / 2)) ? (v = o) : (y = o), (s = e >= (a = (g + _) / 2)) ? (g = a) : (_ = a), (i = d), !(d = d[(l = (s << 1) | f)]))) return (i[l] = p), t;
        if (((u = +t._x.call(null, d.data)), (c = +t._y.call(null, d.data)), n === u && e === c)) return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
        do {
            (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))), (f = n >= (o = (v + y) / 2)) ? (v = o) : (y = o), (s = e >= (a = (g + _) / 2)) ? (g = a) : (_ = a);
        } while ((l = (s << 1) | f) == (h = ((c >= a) << 1) | (u >= o)));
        return (i[h] = d), (i[l] = p), t;
    }
    function Jo(t, n, e, r, i) {
        (this.node = t), (this.x0 = n), (this.y0 = e), (this.x1 = r), (this.y1 = i);
    }
    function Ko(t) {
        return t[0];
    }
    function ta(t) {
        return t[1];
    }
    function na(t, n, e) {
        var r = new ea(null == n ? Ko : n, null == e ? ta : e, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t);
    }
    function ea(t, n, e, r, i, o) {
        (this._x = t), (this._y = n), (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), (this._root = void 0);
    }
    function ra(t) {
        for (var n = { data: t.data }, e = n; (t = t.next); ) e = e.next = { data: t.data };
        return n;
    }
    var ia = (na.prototype = ea.prototype);
    function oa(t) {
        return t.x + t.vx;
    }
    function aa(t) {
        return t.y + t.vy;
    }
    function ua(t) {
        return t.index;
    }
    function ca(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e;
    }
    function fa(t) {
        return t.x;
    }
    function sa(t) {
        return t.y;
    }
    (ia.copy = function () {
        var t,
            n,
            e = new ea(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;
        if (!r) return e;
        if (!r.length) return (e._root = ra(r)), e;
        for (t = [{ source: r, target: (e._root = new Array(4)) }]; (r = t.pop()); ) for (var i = 0; i < 4; ++i) (n = r.source[i]) && (n.length ? t.push({ source: n, target: (r.target[i] = new Array(4)) }) : (r.target[i] = ra(n)));
        return e;
    }),
        (ia.add = function (t) {
            var n = +this._x.call(null, t),
                e = +this._y.call(null, t);
            return Qo(this.cover(n, e), n, e, t);
        }),
        (ia.addAll = function (t) {
            var n,
                e,
                r,
                i,
                o = t.length,
                a = new Array(o),
                u = new Array(o),
                c = 1 / 0,
                f = 1 / 0,
                s = -1 / 0,
                l = -1 / 0;
            for (e = 0; e < o; ++e) isNaN((r = +this._x.call(null, (n = t[e])))) || isNaN((i = +this._y.call(null, n))) || ((a[e] = r), (u[e] = i), r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
            for (s < c && ((c = this._x0), (s = this._x1)), l < f && ((f = this._y0), (l = this._y1)), this.cover(c, f).cover(s, l), e = 0; e < o; ++e) Qo(this, a[e], u[e], t[e]);
            return this;
        }),
        (ia.cover = function (t, n) {
            if (isNaN((t = +t)) || isNaN((n = +n))) return this;
            var e = this._x0,
                r = this._y0,
                i = this._x1,
                o = this._y1;
            if (isNaN(e)) (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
            else {
                if (!(e > t || t > i || r > n || n > o)) return this;
                var a,
                    u,
                    c = i - e,
                    f = this._root;
                switch ((u = ((n < (r + o) / 2) << 1) | (t < (e + i) / 2))) {
                    case 0:
                        do {
                            ((a = new Array(4))[u] = f), (f = a);
                        } while (((o = r + (c *= 2)), t > (i = e + c) || n > o));
                        break;
                    case 1:
                        do {
                            ((a = new Array(4))[u] = f), (f = a);
                        } while (((o = r + (c *= 2)), (e = i - c) > t || n > o));
                        break;
                    case 2:
                        do {
                            ((a = new Array(4))[u] = f), (f = a);
                        } while (((r = o - (c *= 2)), t > (i = e + c) || r > n));
                        break;
                    case 3:
                        do {
                            ((a = new Array(4))[u] = f), (f = a);
                        } while (((r = o - (c *= 2)), (e = i - c) > t || r > n));
                }
                this._root && this._root.length && (this._root = f);
            }
            return (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
        }),
        (ia.data = function () {
            var t = [];
            return (
                this.visit(function (n) {
                    if (!n.length)
                        do {
                            t.push(n.data);
                        } while ((n = n.next));
                }),
                t
            );
        }),
        (ia.extent = function (t) {
            return arguments.length
                ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
                : isNaN(this._x0)
                ? void 0
                : [
                      [this._x0, this._y0],
                      [this._x1, this._y1],
                  ];
        }),
        (ia.find = function (t, n, e) {
            var r,
                i,
                o,
                a,
                u,
                c,
                f,
                s = this._x0,
                l = this._y0,
                h = this._x1,
                d = this._y1,
                p = [],
                v = this._root;
            for (v && p.push(new Jo(v, s, l, h, d)), null == e ? (e = 1 / 0) : ((s = t - e), (l = n - e), (h = t + e), (d = n + e), (e *= e)); (c = p.pop()); )
                if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
                    if (v.length) {
                        var g = (i + a) / 2,
                            y = (o + u) / 2;
                        p.push(new Jo(v[3], g, y, a, u), new Jo(v[2], i, y, g, u), new Jo(v[1], g, o, a, y), new Jo(v[0], i, o, g, y)),
                            (f = ((n >= y) << 1) | (t >= g)) && ((c = p[p.length - 1]), (p[p.length - 1] = p[p.length - 1 - f]), (p[p.length - 1 - f] = c));
                    } else {
                        var _ = t - +this._x.call(null, v.data),
                            b = n - +this._y.call(null, v.data),
                            m = _ * _ + b * b;
                        if (m < e) {
                            var x = Math.sqrt((e = m));
                            (s = t - x), (l = n - x), (h = t + x), (d = n + x), (r = v.data);
                        }
                    }
            return r;
        }),
        (ia.remove = function (t) {
            if (isNaN((o = +this._x.call(null, t))) || isNaN((a = +this._y.call(null, t)))) return this;
            var n,
                e,
                r,
                i,
                o,
                a,
                u,
                c,
                f,
                s,
                l,
                h,
                d = this._root,
                p = this._x0,
                v = this._y0,
                g = this._x1,
                y = this._y1;
            if (!d) return this;
            if (d.length)
                for (;;) {
                    if (((f = o >= (u = (p + g) / 2)) ? (p = u) : (g = u), (s = a >= (c = (v + y) / 2)) ? (v = c) : (y = c), (n = d), !(d = d[(l = (s << 1) | f)]))) return this;
                    if (!d.length) break;
                    (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) && ((e = n), (h = l));
                }
            for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
            return (
                (i = d.next) && delete d.next,
                r
                    ? (i ? (r.next = i) : delete r.next, this)
                    : n
                    ? (i ? (n[l] = i) : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? (e[h] = d) : (this._root = d)), this)
                    : ((this._root = i), this)
            );
        }),
        (ia.removeAll = function (t) {
            for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
            return this;
        }),
        (ia.root = function () {
            return this._root;
        }),
        (ia.size = function () {
            var t = 0;
            return (
                this.visit(function (n) {
                    if (!n.length)
                        do {
                            ++t;
                        } while ((n = n.next));
                }),
                t
            );
        }),
        (ia.visit = function (t) {
            var n,
                e,
                r,
                i,
                o,
                a,
                u = [],
                c = this._root;
            for (c && u.push(new Jo(c, this._x0, this._y0, this._x1, this._y1)); (n = u.pop()); )
                if (!t((c = n.node), (r = n.x0), (i = n.y0), (o = n.x1), (a = n.y1)) && c.length) {
                    var f = (r + o) / 2,
                        s = (i + a) / 2;
                    (e = c[3]) && u.push(new Jo(e, f, s, o, a)), (e = c[2]) && u.push(new Jo(e, r, s, f, a)), (e = c[1]) && u.push(new Jo(e, f, i, o, s)), (e = c[0]) && u.push(new Jo(e, r, i, f, s));
                }
            return this;
        }),
        (ia.visitAfter = function (t) {
            var n,
                e = [],
                r = [];
            for (this._root && e.push(new Jo(this._root, this._x0, this._y0, this._x1, this._y1)); (n = e.pop()); ) {
                var i = n.node;
                if (i.length) {
                    var o,
                        a = n.x0,
                        u = n.y0,
                        c = n.x1,
                        f = n.y1,
                        s = (a + c) / 2,
                        l = (u + f) / 2;
                    (o = i[0]) && e.push(new Jo(o, a, u, s, l)), (o = i[1]) && e.push(new Jo(o, s, u, c, l)), (o = i[2]) && e.push(new Jo(o, a, l, s, f)), (o = i[3]) && e.push(new Jo(o, s, l, c, f));
                }
                r.push(n);
            }
            for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this;
        }),
        (ia.x = function (t) {
            return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (ia.y = function (t) {
            return arguments.length ? ((this._y = t), this) : this._y;
        });
    var la = 10,
        ha = Math.PI * (3 - Math.sqrt(5));
    function da(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e,
            r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
    }
    function pa(t) {
        return (t = da(Math.abs(t))) ? t[1] : NaN;
    }
    var va,
        ga = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function ya(t) {
        return new _a(t);
    }
    function _a(t) {
        if (!(n = ga.exec(t))) throw new Error("invalid format: " + t);
        var n;
        (this.fill = n[1] || " "),
            (this.align = n[2] || ">"),
            (this.sign = n[3] || "-"),
            (this.symbol = n[4] || ""),
            (this.zero = !!n[5]),
            (this.width = n[6] && +n[6]),
            (this.comma = !!n[7]),
            (this.precision = n[8] && +n[8].slice(1)),
            (this.trim = !!n[9]),
            (this.type = n[10] || "");
    }
    function ba(t, n) {
        var e = da(t, n);
        if (!e) return t + "";
        var r = e[0],
            i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
    }
    (ya.prototype = _a.prototype),
        (_a.prototype.toString = function () {
            return (
                this.fill +
                this.align +
                this.sign +
                this.symbol +
                (this.zero ? "0" : "") +
                (null == this.width ? "" : Math.max(1, 0 | this.width)) +
                (this.comma ? "," : "") +
                (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
                (this.trim ? "~" : "") +
                this.type
            );
        });
    var ma = {
        "%": function (t, n) {
            return (100 * t).toFixed(n);
        },
        b: function (t) {
            return Math.round(t).toString(2);
        },
        c: function (t) {
            return t + "";
        },
        d: function (t) {
            return Math.round(t).toString(10);
        },
        e: function (t, n) {
            return t.toExponential(n);
        },
        f: function (t, n) {
            return t.toFixed(n);
        },
        g: function (t, n) {
            return t.toPrecision(n);
        },
        o: function (t) {
            return Math.round(t).toString(8);
        },
        p: function (t, n) {
            return ba(100 * t, n);
        },
        r: ba,
        s: function (t, n) {
            var e = da(t, n);
            if (!e) return t + "";
            var r = e[0],
                i = e[1],
                o = i - (va = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                a = r.length;
            return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + da(t, Math.max(0, n + o - 1))[0];
        },
        X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
        },
        x: function (t) {
            return Math.round(t).toString(16);
        },
    };
    function xa(t) {
        return t;
    }
    var wa,
        Ma = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function Na(t) {
        var n,
            e,
            r =
                t.grouping && t.thousands
                    ? ((n = t.grouping),
                      (e = t.thousands),
                      function (t, r) {
                          for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring((i -= u), i + u)), !((c += u + 1) > r)); ) u = n[(a = (a + 1) % n.length)];
                          return o.reverse().join(e);
                      })
                    : xa,
            i = t.currency,
            o = t.decimal,
            a = t.numerals
                ? (function (t) {
                      return function (n) {
                          return n.replace(/[0-9]/g, function (n) {
                              return t[+n];
                          });
                      };
                  })(t.numerals)
                : xa,
            u = t.percent || "%";
        function c(t) {
            var n = (t = ya(t)).fill,
                e = t.align,
                c = t.sign,
                f = t.symbol,
                s = t.zero,
                l = t.width,
                h = t.comma,
                d = t.precision,
                p = t.trim,
                v = t.type;
            "n" === v ? ((h = !0), (v = "g")) : ma[v] || (null == d && (d = 12), (p = !0), (v = "g")), (s || ("0" === n && "=" === e)) && ((s = !0), (n = "0"), (e = "="));
            var g = "$" === f ? i[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
                y = "$" === f ? i[1] : /[%p]/.test(v) ? u : "",
                _ = ma[v],
                b = /[defgprs%]/.test(v);
            function m(t) {
                var i,
                    u,
                    f,
                    m = g,
                    x = y;
                if ("c" === v) (x = _(t) + x), (t = "");
                else {
                    var w = (t = +t) < 0;
                    if (
                        ((t = _(Math.abs(t), d)),
                        p &&
                            (t = (function (t) {
                                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                                    switch (t[r]) {
                                        case ".":
                                            i = n = r;
                                            break;
                                        case "0":
                                            0 === i && (i = r), (n = r);
                                            break;
                                        default:
                                            if (i > 0) {
                                                if (!+t[r]) break t;
                                                i = 0;
                                            }
                                    }
                                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                            })(t)),
                        w && 0 == +t && (w = !1),
                        (m = (w ? ("(" === c ? c : "-") : "-" === c || "(" === c ? "" : c) + m),
                        (x = ("s" === v ? Ma[8 + va / 3] : "") + x + (w && "(" === c ? ")" : "")),
                        b)
                    )
                        for (i = -1, u = t.length; ++i < u; )
                            if (48 > (f = t.charCodeAt(i)) || f > 57) {
                                (x = (46 === f ? o + t.slice(i + 1) : t.slice(i)) + x), (t = t.slice(0, i));
                                break;
                            }
                }
                h && !s && (t = r(t, 1 / 0));
                var M = m.length + t.length + x.length,
                    N = M < l ? new Array(l - M + 1).join(n) : "";
                switch ((h && s && ((t = r(N + t, N.length ? l - x.length : 1 / 0)), (N = "")), e)) {
                    case "<":
                        t = m + t + x + N;
                        break;
                    case "=":
                        t = m + N + t + x;
                        break;
                    case "^":
                        t = N.slice(0, (M = N.length >> 1)) + m + t + x + N.slice(M);
                        break;
                    default:
                        t = N + m + t + x;
                }
                return a(t);
            }
            return (
                (d = null == d ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d))),
                (m.toString = function () {
                    return t + "";
                }),
                m
            );
        }
        return {
            format: c,
            formatPrefix: function (t, n) {
                var e = c((((t = ya(t)).type = "f"), t)),
                    r = 3 * Math.max(-8, Math.min(8, Math.floor(pa(n) / 3))),
                    i = Math.pow(10, -r),
                    o = Ma[8 + r / 3];
                return function (t) {
                    return e(i * t) + o;
                };
            },
        };
    }
    function Aa(n) {
        return (wa = Na(n)), (t.format = wa.format), (t.formatPrefix = wa.formatPrefix), wa;
    }
    function Sa(t) {
        return Math.max(0, -pa(Math.abs(t)));
    }
    function ka(t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(pa(n) / 3))) - pa(Math.abs(t)));
    }
    function Ta(t, n) {
        return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, pa(n) - pa(t)) + 1;
    }
    function Ea() {
        return new Ca();
    }
    function Ca() {
        this.reset();
    }
    Aa({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] }),
        (Ca.prototype = {
            constructor: Ca,
            reset: function () {
                this.s = this.t = 0;
            },
            add: function (t) {
                za(Pa, t, this.t), za(this, Pa.s, this.s), this.s ? (this.t += Pa.t) : (this.s = Pa.t);
            },
            valueOf: function () {
                return this.s;
            },
        });
    var Pa = new Ca();
    function za(t, n, e) {
        var r = (t.s = n + e),
            i = r - n,
            o = r - i;
        t.t = n - o + (e - i);
    }
    var Ra = 1e-6,
        qa = 1e-12,
        Da = Math.PI,
        La = Da / 2,
        Ua = Da / 4,
        Oa = 2 * Da,
        Ya = 180 / Da,
        Ba = Da / 180,
        Fa = Math.abs,
        Ia = Math.atan,
        Ha = Math.atan2,
        ja = Math.cos,
        Xa = Math.ceil,
        Ga = Math.exp,
        Va = Math.log,
        $a = Math.pow,
        Wa = Math.sin,
        Za =
            Math.sign ||
            function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0;
            },
        Qa = Math.sqrt,
        Ja = Math.tan;
    function Ka(t) {
        return t > 1 ? 0 : t < -1 ? Da : Math.acos(t);
    }
    function tu(t) {
        return t > 1 ? La : t < -1 ? -La : Math.asin(t);
    }
    function nu(t) {
        return (t = Wa(t / 2)) * t;
    }
    function eu() {}
    function ru(t, n) {
        t && ou.hasOwnProperty(t.type) && ou[t.type](t, n);
    }
    var iu = {
            Feature: function (t, n) {
                ru(t.geometry, n);
            },
            FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i; ) ru(e[r].geometry, n);
            },
        },
        ou = {
            Sphere: function (t, n) {
                n.sphere();
            },
            Point: function (t, n) {
                (t = t.coordinates), n.point(t[0], t[1], t[2]);
            },
            MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) (t = e[r]), n.point(t[0], t[1], t[2]);
            },
            LineString: function (t, n) {
                au(t.coordinates, n, 0);
            },
            MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) au(e[r], n, 0);
            },
            Polygon: function (t, n) {
                uu(t.coordinates, n);
            },
            MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) uu(e[r], n);
            },
            GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) ru(e[r], n);
            },
        };
    function au(t, n, e) {
        var r,
            i = -1,
            o = t.length - e;
        for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
    }
    function uu(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r; ) au(t[e], n, 1);
        n.polygonEnd();
    }
    function cu(t, n) {
        t && iu.hasOwnProperty(t.type) ? iu[t.type](t, n) : ru(t, n);
    }
    var fu,
        su,
        lu,
        hu,
        du,
        pu = Ea(),
        vu = Ea(),
        gu = {
            point: eu,
            lineStart: eu,
            lineEnd: eu,
            polygonStart: function () {
                pu.reset(), (gu.lineStart = yu), (gu.lineEnd = _u);
            },
            polygonEnd: function () {
                var t = +pu;
                vu.add(t < 0 ? Oa + t : t), (this.lineStart = this.lineEnd = this.point = eu);
            },
            sphere: function () {
                vu.add(Oa);
            },
        };
    function yu() {
        gu.point = bu;
    }
    function _u() {
        mu(fu, su);
    }
    function bu(t, n) {
        (gu.point = mu), (fu = t), (su = n), (lu = t *= Ba), (hu = ja((n = (n *= Ba) / 2 + Ua))), (du = Wa(n));
    }
    function mu(t, n) {
        var e = (t *= Ba) - lu,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = ja((n = (n *= Ba) / 2 + Ua)),
            a = Wa(n),
            u = du * a,
            c = hu * o + u * ja(i),
            f = u * r * Wa(i);
        pu.add(Ha(f, c)), (lu = t), (hu = o), (du = a);
    }
    function xu(t) {
        return [Ha(t[1], t[0]), tu(t[2])];
    }
    function wu(t) {
        var n = t[0],
            e = t[1],
            r = ja(e);
        return [r * ja(n), r * Wa(n), Wa(e)];
    }
    function Mu(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
    }
    function Nu(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
    }
    function Au(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
    }
    function Su(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
    }
    function ku(t) {
        var n = Qa(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
    }
    var Tu,
        Eu,
        Cu,
        Pu,
        zu,
        Ru,
        qu,
        Du,
        Lu,
        Uu,
        Ou,
        Yu,
        Bu,
        Fu,
        Iu,
        Hu,
        ju,
        Xu,
        Gu,
        Vu,
        $u,
        Wu,
        Zu,
        Qu,
        Ju,
        Ku,
        tc = Ea(),
        nc = {
            point: ec,
            lineStart: ic,
            lineEnd: oc,
            polygonStart: function () {
                (nc.point = ac), (nc.lineStart = uc), (nc.lineEnd = cc), tc.reset(), gu.polygonStart();
            },
            polygonEnd: function () {
                gu.polygonEnd(), (nc.point = ec), (nc.lineStart = ic), (nc.lineEnd = oc), pu < 0 ? ((Tu = -(Cu = 180)), (Eu = -(Pu = 90))) : tc > Ra ? (Pu = 90) : tc < -Ra && (Eu = -90), (Uu[0] = Tu), (Uu[1] = Cu);
            },
        };
    function ec(t, n) {
        Lu.push((Uu = [(Tu = t), (Cu = t)])), n < Eu && (Eu = n), n > Pu && (Pu = n);
    }
    function rc(t, n) {
        var e = wu([t * Ba, n * Ba]);
        if (Du) {
            var r = Nu(Du, e),
                i = Nu([r[1], -r[0], 0], r);
            ku(i), (i = xu(i));
            var o,
                a = t - zu,
                u = a > 0 ? 1 : -1,
                c = i[0] * Ya * u,
                f = Fa(a) > 180;
            f ^ (u * zu < c && c < u * t) ? (o = i[1] * Ya) > Pu && (Pu = o) : f ^ (u * zu < (c = ((c + 360) % 360) - 180) && c < u * t) ? (o = -i[1] * Ya) < Eu && (Eu = o) : (n < Eu && (Eu = n), n > Pu && (Pu = n)),
                f ? (t < zu ? fc(Tu, t) > fc(Tu, Cu) && (Cu = t) : fc(t, Cu) > fc(Tu, Cu) && (Tu = t)) : Cu >= Tu ? (t < Tu && (Tu = t), t > Cu && (Cu = t)) : t > zu ? fc(Tu, t) > fc(Tu, Cu) && (Cu = t) : fc(t, Cu) > fc(Tu, Cu) && (Tu = t);
        } else Lu.push((Uu = [(Tu = t), (Cu = t)]));
        n < Eu && (Eu = n), n > Pu && (Pu = n), (Du = e), (zu = t);
    }
    function ic() {
        nc.point = rc;
    }
    function oc() {
        (Uu[0] = Tu), (Uu[1] = Cu), (nc.point = ec), (Du = null);
    }
    function ac(t, n) {
        if (Du) {
            var e = t - zu;
            tc.add(Fa(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
        } else (Ru = t), (qu = n);
        gu.point(t, n), rc(t, n);
    }
    function uc() {
        gu.lineStart();
    }
    function cc() {
        ac(Ru, qu), gu.lineEnd(), Fa(tc) > Ra && (Tu = -(Cu = 180)), (Uu[0] = Tu), (Uu[1] = Cu), (Du = null);
    }
    function fc(t, n) {
        return (n -= t) < 0 ? n + 360 : n;
    }
    function sc(t, n) {
        return t[0] - n[0];
    }
    function lc(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }
    var hc = {
        sphere: eu,
        point: dc,
        lineStart: vc,
        lineEnd: _c,
        polygonStart: function () {
            (hc.lineStart = bc), (hc.lineEnd = mc);
        },
        polygonEnd: function () {
            (hc.lineStart = vc), (hc.lineEnd = _c);
        },
    };
    function dc(t, n) {
        t *= Ba;
        var e = ja((n *= Ba));
        pc(e * ja(t), e * Wa(t), Wa(n));
    }
    function pc(t, n, e) {
        (Bu += (t - Bu) / ++Ou), (Fu += (n - Fu) / Ou), (Iu += (e - Iu) / Ou);
    }
    function vc() {
        hc.point = gc;
    }
    function gc(t, n) {
        t *= Ba;
        var e = ja((n *= Ba));
        (Qu = e * ja(t)), (Ju = e * Wa(t)), (Ku = Wa(n)), (hc.point = yc), pc(Qu, Ju, Ku);
    }
    function yc(t, n) {
        t *= Ba;
        var e = ja((n *= Ba)),
            r = e * ja(t),
            i = e * Wa(t),
            o = Wa(n),
            a = Ha(Qa((a = Ju * o - Ku * i) * a + (a = Ku * r - Qu * o) * a + (a = Qu * i - Ju * r) * a), Qu * r + Ju * i + Ku * o);
        (Yu += a), (Hu += a * (Qu + (Qu = r))), (ju += a * (Ju + (Ju = i))), (Xu += a * (Ku + (Ku = o))), pc(Qu, Ju, Ku);
    }
    function _c() {
        hc.point = dc;
    }
    function bc() {
        hc.point = xc;
    }
    function mc() {
        wc(Wu, Zu), (hc.point = dc);
    }
    function xc(t, n) {
        (Wu = t), (Zu = n), (t *= Ba), (n *= Ba), (hc.point = wc);
        var e = ja(n);
        (Qu = e * ja(t)), (Ju = e * Wa(t)), (Ku = Wa(n)), pc(Qu, Ju, Ku);
    }
    function wc(t, n) {
        t *= Ba;
        var e = ja((n *= Ba)),
            r = e * ja(t),
            i = e * Wa(t),
            o = Wa(n),
            a = Ju * o - Ku * i,
            u = Ku * r - Qu * o,
            c = Qu * i - Ju * r,
            f = Qa(a * a + u * u + c * c),
            s = tu(f),
            l = f && -s / f;
        (Gu += l * a), (Vu += l * u), ($u += l * c), (Yu += s), (Hu += s * (Qu + (Qu = r))), (ju += s * (Ju + (Ju = i))), (Xu += s * (Ku + (Ku = o))), pc(Qu, Ju, Ku);
    }
    function Mc(t) {
        return function () {
            return t;
        };
    }
    function Nc(t, n) {
        function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
        }
        return (
            t.invert &&
                n.invert &&
                (e.invert = function (e, r) {
                    return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
                }),
            e
        );
    }
    function Ac(t, n) {
        return [Fa(t) > Da ? t + Math.round(-t / Oa) * Oa : t, n];
    }
    function Sc(t, n, e) {
        return (t %= Oa) ? (n || e ? Nc(Tc(t), Ec(n, e)) : Tc(t)) : n || e ? Ec(n, e) : Ac;
    }
    function kc(t) {
        return function (n, e) {
            return [(n += t) > Da ? n - Oa : n < -Da ? n + Oa : n, e];
        };
    }
    function Tc(t) {
        var n = kc(t);
        return (n.invert = kc(-t)), n;
    }
    function Ec(t, n) {
        var e = ja(t),
            r = Wa(t),
            i = ja(n),
            o = Wa(n);
        function a(t, n) {
            var a = ja(n),
                u = ja(t) * a,
                c = Wa(t) * a,
                f = Wa(n),
                s = f * e + u * r;
            return [Ha(c * i - s * o, u * e - f * r), tu(s * i + c * o)];
        }
        return (
            (a.invert = function (t, n) {
                var a = ja(n),
                    u = ja(t) * a,
                    c = Wa(t) * a,
                    f = Wa(n),
                    s = f * i - c * o;
                return [Ha(c * i + f * o, u * e + s * r), tu(s * e - u * r)];
            }),
            a
        );
    }
    function Cc(t) {
        function n(n) {
            return ((n = t(n[0] * Ba, n[1] * Ba))[0] *= Ya), (n[1] *= Ya), n;
        }
        return (
            (t = Sc(t[0] * Ba, t[1] * Ba, t.length > 2 ? t[2] * Ba : 0)),
            (n.invert = function (n) {
                return ((n = t.invert(n[0] * Ba, n[1] * Ba))[0] *= Ya), (n[1] *= Ya), n;
            }),
            n
        );
    }
    function Pc(t, n, e, r, i, o) {
        if (e) {
            var a = ja(n),
                u = Wa(n),
                c = r * e;
            null == i ? ((i = n + r * Oa), (o = n - c / 2)) : ((i = zc(a, i)), (o = zc(a, o)), (r > 0 ? i < o : i > o) && (i += r * Oa));
            for (var f, s = i; r > 0 ? s > o : s < o; s -= c) (f = xu([a, -u * ja(s), -u * Wa(s)])), t.point(f[0], f[1]);
        }
    }
    function zc(t, n) {
        ((n = wu(n))[0] -= t), ku(n);
        var e = Ka(-n[1]);
        return ((-n[2] < 0 ? -e : e) + Oa - Ra) % Oa;
    }
    function Rc() {
        var t,
            n = [];
        return {
            point: function (n, e) {
                t.push([n, e]);
            },
            lineStart: function () {
                n.push((t = []));
            },
            lineEnd: eu,
            rejoin: function () {
                n.length > 1 && n.push(n.pop().concat(n.shift()));
            },
            result: function () {
                var e = n;
                return (n = []), (t = null), e;
            },
        };
    }
    function qc(t, n) {
        return Fa(t[0] - n[0]) < Ra && Fa(t[1] - n[1]) < Ra;
    }
    function Dc(t, n, e, r) {
        (this.x = t), (this.z = n), (this.o = e), (this.e = r), (this.v = !1), (this.n = this.p = null);
    }
    function Lc(t, n, e, r, i) {
        var o,
            a,
            u = [],
            c = [];
        if (
            (t.forEach(function (t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n,
                        e,
                        r = t[0],
                        a = t[n];
                    if (qc(r, a)) {
                        for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                        i.lineEnd();
                    } else u.push((e = new Dc(r, t, null, !0))), c.push((e.o = new Dc(r, null, e, !1))), u.push((e = new Dc(a, t, null, !1))), c.push((e.o = new Dc(a, null, e, !0)));
                }
            }),
            u.length)
        ) {
            for (c.sort(n), Uc(u), Uc(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e;
            for (var f, s, l = u[0]; ; ) {
                for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return;
                (f = h.z), i.lineStart();
                do {
                    if (((h.v = h.o.v = !0), h.e)) {
                        if (d) for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n;
                    } else {
                        if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p;
                    }
                    (f = (h = h.o).z), (d = !d);
                } while (!h.v);
                i.lineEnd();
            }
        }
    }
    function Uc(t) {
        if ((n = t.length)) {
            for (var n, e, r = 0, i = t[0]; ++r < n; ) (i.n = e = t[r]), (e.p = i), (i = e);
            (i.n = e = t[0]), (e.p = i);
        }
    }
    Ac.invert = Ac;
    var Oc = Ea();
    function Yc(t, n) {
        var e = n[0],
            r = n[1],
            i = Wa(r),
            o = [Wa(e), -ja(e), 0],
            a = 0,
            u = 0;
        Oc.reset(), 1 === i ? (r = La + Ra) : -1 === i && (r = -La - Ra);
        for (var c = 0, f = t.length; c < f; ++c)
            if ((l = (s = t[c]).length))
                for (var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + Ua, v = Wa(p), g = ja(p), y = 0; y < l; ++y, d = b, v = x, g = w, h = _) {
                    var _ = s[y],
                        b = _[0],
                        m = _[1] / 2 + Ua,
                        x = Wa(m),
                        w = ja(m),
                        M = b - d,
                        N = M >= 0 ? 1 : -1,
                        A = N * M,
                        S = A > Da,
                        k = v * x;
                    if ((Oc.add(Ha(k * N * Wa(A), g * w + k * ja(A))), (a += S ? M + N * Oa : M), S ^ (d >= e) ^ (b >= e))) {
                        var T = Nu(wu(h), wu(_));
                        ku(T);
                        var E = Nu(o, T);
                        ku(E);
                        var C = (S ^ (M >= 0) ? -1 : 1) * tu(E[2]);
                        (r > C || (r === C && (T[0] || T[1]))) && (u += S ^ (M >= 0) ? 1 : -1);
                    }
                }
        return (a < -Ra || (a < Ra && Oc < -Ra)) ^ (1 & u);
    }
    function Bc(t, n, e, r) {
        return function (i) {
            var o,
                a,
                u,
                c = n(i),
                f = Rc(),
                s = n(f),
                l = !1,
                h = {
                    point: d,
                    lineStart: v,
                    lineEnd: g,
                    polygonStart: function () {
                        (h.point = y), (h.lineStart = _), (h.lineEnd = b), (a = []), (o = []);
                    },
                    polygonEnd: function () {
                        (h.point = d), (h.lineStart = v), (h.lineEnd = g), (a = S(a));
                        var t = Yc(o, r);
                        a.length ? (l || (i.polygonStart(), (l = !0)), Lc(a, Ic, t, e, i)) : t && (l || (i.polygonStart(), (l = !0)), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), (l = !1)), (a = o = null);
                    },
                    sphere: function () {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
                    },
                };
            function d(n, e) {
                t(n, e) && i.point(n, e);
            }
            function p(t, n) {
                c.point(t, n);
            }
            function v() {
                (h.point = p), c.lineStart();
            }
            function g() {
                (h.point = d), c.lineEnd();
            }
            function y(t, n) {
                u.push([t, n]), s.point(t, n);
            }
            function _() {
                s.lineStart(), (u = []);
            }
            function b() {
                y(u[0][0], u[0][1]), s.lineEnd();
                var t,
                    n,
                    e,
                    r,
                    c = s.clean(),
                    h = f.result(),
                    d = h.length;
                if ((u.pop(), o.push(u), (u = null), d))
                    if (1 & c) {
                        if ((n = (e = h[0]).length - 1) > 0) {
                            for (l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                            i.lineEnd();
                        }
                    } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(Fc));
            }
            return h;
        };
    }
    function Fc(t) {
        return t.length > 1;
    }
    function Ic(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - La - Ra : La - t[1]) - ((n = n.x)[0] < 0 ? n[1] - La - Ra : La - n[1]);
    }
    var Hc = Bc(
        function () {
            return !0;
        },
        function (t) {
            var n,
                e = NaN,
                r = NaN,
                i = NaN;
            return {
                lineStart: function () {
                    t.lineStart(), (n = 1);
                },
                point: function (o, a) {
                    var u = o > 0 ? Da : -Da,
                        c = Fa(o - e);
                    Fa(c - Da) < Ra
                        ? (t.point(e, (r = (r + a) / 2 > 0 ? La : -La)), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), (n = 0))
                        : i !== u &&
                          c >= Da &&
                          (Fa(e - i) < Ra && (e -= i * Ra),
                          Fa(o - u) < Ra && (o -= u * Ra),
                          (r = (function (t, n, e, r) {
                              var i,
                                  o,
                                  a = Wa(t - e);
                              return Fa(a) > Ra ? Ia((Wa(n) * (o = ja(r)) * Wa(e) - Wa(r) * (i = ja(n)) * Wa(t)) / (i * o * a)) : (n + r) / 2;
                          })(e, r, o, a)),
                          t.point(i, r),
                          t.lineEnd(),
                          t.lineStart(),
                          t.point(u, r),
                          (n = 0)),
                        t.point((e = o), (r = a)),
                        (i = u);
                },
                lineEnd: function () {
                    t.lineEnd(), (e = r = NaN);
                },
                clean: function () {
                    return 2 - n;
                },
            };
        },
        function (t, n, e, r) {
            var i;
            if (null == t) (i = e * La), r.point(-Da, i), r.point(0, i), r.point(Da, i), r.point(Da, 0), r.point(Da, -i), r.point(0, -i), r.point(-Da, -i), r.point(-Da, 0), r.point(-Da, i);
            else if (Fa(t[0] - n[0]) > Ra) {
                var o = t[0] < n[0] ? Da : -Da;
                (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
            } else r.point(n[0], n[1]);
        },
        [-Da, -La]
    );
    function jc(t) {
        var n = ja(t),
            e = 6 * Ba,
            r = n > 0,
            i = Fa(n) > Ra;
        function o(t, e) {
            return ja(t) * ja(e) > n;
        }
        function a(t, e, r) {
            var i = [1, 0, 0],
                o = Nu(wu(t), wu(e)),
                a = Mu(o, o),
                u = o[0],
                c = a - u * u;
            if (!c) return !r && t;
            var f = (n * a) / c,
                s = (-n * u) / c,
                l = Nu(i, o),
                h = Su(i, f);
            Au(h, Su(o, s));
            var d = l,
                p = Mu(h, d),
                v = Mu(d, d),
                g = p * p - v * (Mu(h, h) - 1);
            if (!(g < 0)) {
                var y = Qa(g),
                    _ = Su(d, (-p - y) / v);
                if ((Au(_, h), (_ = xu(_)), !r)) return _;
                var b,
                    m = t[0],
                    x = e[0],
                    w = t[1],
                    M = e[1];
                x < m && ((b = m), (m = x), (x = b));
                var N = x - m,
                    A = Fa(N - Da) < Ra;
                if ((!A && M < w && ((b = w), (w = M), (M = b)), A || N < Ra ? (A ? (w + M > 0) ^ (_[1] < (Fa(_[0] - m) < Ra ? w : M)) : w <= _[1] && _[1] <= M) : (N > Da) ^ (m <= _[0] && _[0] <= x))) {
                    var S = Su(d, (-p + y) / v);
                    return Au(S, h), [_, xu(S)];
                }
            }
        }
        function u(n, e) {
            var i = r ? t : Da - t,
                o = 0;
            return n < -i ? (o |= 1) : n > i && (o |= 2), e < -i ? (o |= 4) : e > i && (o |= 8), o;
        }
        return Bc(
            o,
            function (t) {
                var n, e, c, f, s;
                return {
                    lineStart: function () {
                        (f = c = !1), (s = 1);
                    },
                    point: function (l, h) {
                        var d,
                            p = [l, h],
                            v = o(l, h),
                            g = r ? (v ? 0 : u(l, h)) : v ? u(l + (l < 0 ? Da : -Da), h) : 0;
                        if ((!n && (f = c = v) && t.lineStart(), v !== c && (!(d = a(n, p)) || qc(n, d) || qc(p, d)) && ((p[0] += Ra), (p[1] += Ra), (v = o(p[0], p[1]))), v !== c))
                            (s = 0), v ? (t.lineStart(), (d = a(p, n)), t.point(d[0], d[1])) : ((d = a(n, p)), t.point(d[0], d[1]), t.lineEnd()), (n = d);
                        else if (i && n && r ^ v) {
                            var y;
                            g & e ||
                                !(y = a(p, n, !0)) ||
                                ((s = 0), r ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])));
                        }
                        !v || (n && qc(n, p)) || t.point(p[0], p[1]), (n = p), (c = v), (e = g);
                    },
                    lineEnd: function () {
                        c && t.lineEnd(), (n = null);
                    },
                    clean: function () {
                        return s | ((f && c) << 1);
                    },
                };
            },
            function (n, r, i, o) {
                Pc(o, t, e, i, n, r);
            },
            r ? [0, -t] : [-Da, t - Da]
        );
    }
    var Xc = 1e9,
        Gc = -Xc;
    function Vc(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r;
        }
        function o(i, o, u, f) {
            var s = 0,
                l = 0;
            if (null == i || (s = a(i, u)) !== (l = a(o, u)) || (c(i, o) < 0) ^ (u > 0))
                do {
                    f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
                } while ((s = (s + u + 4) % 4) !== l);
            else f.point(o[0], o[1]);
        }
        function a(r, i) {
            return Fa(r[0] - t) < Ra ? (i > 0 ? 0 : 3) : Fa(r[0] - e) < Ra ? (i > 0 ? 2 : 1) : Fa(r[1] - n) < Ra ? (i > 0 ? 1 : 0) : i > 0 ? 3 : 2;
        }
        function u(t, n) {
            return c(t.x, n.x);
        }
        function c(t, n) {
            var e = a(t, 1),
                r = a(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
        }
        return function (a) {
            var c,
                f,
                s,
                l,
                h,
                d,
                p,
                v,
                g,
                y,
                _,
                b = a,
                m = Rc(),
                x = {
                    point: w,
                    lineStart: function () {
                        (x.point = M), f && f.push((s = []));
                        (y = !0), (g = !1), (p = v = NaN);
                    },
                    lineEnd: function () {
                        c && (M(l, h), d && g && m.rejoin(), c.push(m.result()));
                        (x.point = w), g && b.lineEnd();
                    },
                    polygonStart: function () {
                        (b = m), (c = []), (f = []), (_ = !0);
                    },
                    polygonEnd: function () {
                        var n = (function () {
                                for (var n = 0, e = 0, i = f.length; e < i; ++e)
                                    for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c)
                                        (o = h), (a = d), (l = u[c]), (h = l[0]), (d = l[1]), a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
                                return n;
                            })(),
                            e = _ && n,
                            i = (c = S(c)).length;
                        (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && Lc(c, u, n, o, a), a.polygonEnd());
                        (b = a), (c = f = s = null);
                    },
                };
            function w(t, n) {
                i(t, n) && b.point(t, n);
            }
            function M(o, a) {
                var u = i(o, a);
                if ((f && s.push([o, a]), y)) (l = o), (h = a), (d = u), (y = !1), u && (b.lineStart(), b.point(o, a));
                else if (u && g) b.point(o, a);
                else {
                    var c = [(p = Math.max(Gc, Math.min(Xc, p))), (v = Math.max(Gc, Math.min(Xc, v)))],
                        m = [(o = Math.max(Gc, Math.min(Xc, o))), (a = Math.max(Gc, Math.min(Xc, a)))];
                    !(function (t, n, e, r, i, o) {
                        var a,
                            u = t[0],
                            c = t[1],
                            f = 0,
                            s = 1,
                            l = n[0] - u,
                            h = n[1] - c;
                        if (((a = e - u), l || !(a > 0))) {
                            if (((a /= l), l < 0)) {
                                if (a < f) return;
                                a < s && (s = a);
                            } else if (l > 0) {
                                if (a > s) return;
                                a > f && (f = a);
                            }
                            if (((a = i - u), l || !(a < 0))) {
                                if (((a /= l), l < 0)) {
                                    if (a > s) return;
                                    a > f && (f = a);
                                } else if (l > 0) {
                                    if (a < f) return;
                                    a < s && (s = a);
                                }
                                if (((a = r - c), h || !(a > 0))) {
                                    if (((a /= h), h < 0)) {
                                        if (a < f) return;
                                        a < s && (s = a);
                                    } else if (h > 0) {
                                        if (a > s) return;
                                        a > f && (f = a);
                                    }
                                    if (((a = o - c), h || !(a < 0))) {
                                        if (((a /= h), h < 0)) {
                                            if (a > s) return;
                                            a > f && (f = a);
                                        } else if (h > 0) {
                                            if (a < f) return;
                                            a < s && (s = a);
                                        }
                                        return f > 0 && ((t[0] = u + f * l), (t[1] = c + f * h)), s < 1 && ((n[0] = u + s * l), (n[1] = c + s * h)), !0;
                                    }
                                }
                            }
                        }
                    })(c, m, t, n, e, r)
                        ? u && (b.lineStart(), b.point(o, a), (_ = !1))
                        : (g || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), (_ = !1));
                }
                (p = o), (v = a), (g = u);
            }
            return x;
        };
    }
    var $c,
        Wc,
        Zc,
        Qc = Ea(),
        Jc = {
            sphere: eu,
            point: eu,
            lineStart: function () {
                (Jc.point = tf), (Jc.lineEnd = Kc);
            },
            lineEnd: eu,
            polygonStart: eu,
            polygonEnd: eu,
        };
    function Kc() {
        Jc.point = Jc.lineEnd = eu;
    }
    function tf(t, n) {
        ($c = t *= Ba), (Wc = Wa((n *= Ba))), (Zc = ja(n)), (Jc.point = nf);
    }
    function nf(t, n) {
        t *= Ba;
        var e = Wa((n *= Ba)),
            r = ja(n),
            i = Fa(t - $c),
            o = ja(i),
            a = r * Wa(i),
            u = Zc * e - Wc * r * o,
            c = Wc * e + Zc * r * o;
        Qc.add(Ha(Qa(a * a + u * u), c)), ($c = t), (Wc = e), (Zc = r);
    }
    function ef(t) {
        return Qc.reset(), cu(t, Jc), +Qc;
    }
    var rf = [null, null],
        of = { type: "LineString", coordinates: rf };
    function af(t, n) {
        return (rf[0] = t), (rf[1] = n), ef(of);
    }
    var uf = {
            Feature: function (t, n) {
                return ff(t.geometry, n);
            },
            FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i; ) if (ff(e[r].geometry, n)) return !0;
                return !1;
            },
        },
        cf = {
            Sphere: function () {
                return !0;
            },
            Point: function (t, n) {
                return sf(t.coordinates, n);
            },
            MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (sf(e[r], n)) return !0;
                return !1;
            },
            LineString: function (t, n) {
                return lf(t.coordinates, n);
            },
            MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (lf(e[r], n)) return !0;
                return !1;
            },
            Polygon: function (t, n) {
                return hf(t.coordinates, n);
            },
            MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (hf(e[r], n)) return !0;
                return !1;
            },
            GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) if (ff(e[r], n)) return !0;
                return !1;
            },
        };
    function ff(t, n) {
        return !(!t || !cf.hasOwnProperty(t.type)) && cf[t.type](t, n);
    }
    function sf(t, n) {
        return 0 === af(t, n);
    }
    function lf(t, n) {
        var e = af(t[0], t[1]);
        return af(t[0], n) + af(n, t[1]) <= e + Ra;
    }
    function hf(t, n) {
        return !!Yc(t.map(df), pf(n));
    }
    function df(t) {
        return (t = t.map(pf)).pop(), t;
    }
    function pf(t) {
        return [t[0] * Ba, t[1] * Ba];
    }
    function vf(t, n, e) {
        var r = g(t, n - Ra, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [t, n];
            });
        };
    }
    function gf(t, n, e) {
        var r = g(t, n - Ra, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [n, t];
            });
        };
    }
    function yf() {
        var t,
            n,
            e,
            r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h = 10,
            d = h,
            p = 90,
            v = 360,
            y = 2.5;
        function _() {
            return { type: "MultiLineString", coordinates: b() };
        }
        function b() {
            return g(Xa(r / p) * p, e, p)
                .map(s)
                .concat(g(Xa(u / v) * v, a, v).map(l))
                .concat(
                    g(Xa(n / h) * h, t, h)
                        .filter(function (t) {
                            return Fa(t % p) > Ra;
                        })
                        .map(c)
                )
                .concat(
                    g(Xa(o / d) * d, i, d)
                        .filter(function (t) {
                            return Fa(t % v) > Ra;
                        })
                        .map(f)
                );
        }
        return (
            (_.lines = function () {
                return b().map(function (t) {
                    return { type: "LineString", coordinates: t };
                });
            }),
            (_.outline = function () {
                return { type: "Polygon", coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))] };
            }),
            (_.extent = function (t) {
                return arguments.length ? _.extentMajor(t).extentMinor(t) : _.extentMinor();
            }),
            (_.extentMajor = function (t) {
                return arguments.length
                    ? ((r = +t[0][0]), (e = +t[1][0]), (u = +t[0][1]), (a = +t[1][1]), r > e && ((t = r), (r = e), (e = t)), u > a && ((t = u), (u = a), (a = t)), _.precision(y))
                    : [
                          [r, u],
                          [e, a],
                      ];
            }),
            (_.extentMinor = function (e) {
                return arguments.length
                    ? ((n = +e[0][0]), (t = +e[1][0]), (o = +e[0][1]), (i = +e[1][1]), n > t && ((e = n), (n = t), (t = e)), o > i && ((e = o), (o = i), (i = e)), _.precision(y))
                    : [
                          [n, o],
                          [t, i],
                      ];
            }),
            (_.step = function (t) {
                return arguments.length ? _.stepMajor(t).stepMinor(t) : _.stepMinor();
            }),
            (_.stepMajor = function (t) {
                return arguments.length ? ((p = +t[0]), (v = +t[1]), _) : [p, v];
            }),
            (_.stepMinor = function (t) {
                return arguments.length ? ((h = +t[0]), (d = +t[1]), _) : [h, d];
            }),
            (_.precision = function (h) {
                return arguments.length ? ((y = +h), (c = vf(o, i, 90)), (f = gf(n, t, y)), (s = vf(u, a, 90)), (l = gf(r, e, y)), _) : y;
            }),
            _.extentMajor([
                [-180, -90 + Ra],
                [180, 90 - Ra],
            ]).extentMinor([
                [-180, -80 - Ra],
                [180, 80 + Ra],
            ])
        );
    }
    function _f(t) {
        return t;
    }
    var bf,
        mf,
        xf,
        wf,
        Mf = Ea(),
        Nf = Ea(),
        Af = {
            point: eu,
            lineStart: eu,
            lineEnd: eu,
            polygonStart: function () {
                (Af.lineStart = Sf), (Af.lineEnd = Ef);
            },
            polygonEnd: function () {
                (Af.lineStart = Af.lineEnd = Af.point = eu), Mf.add(Fa(Nf)), Nf.reset();
            },
            result: function () {
                var t = Mf / 2;
                return Mf.reset(), t;
            },
        };
    function Sf() {
        Af.point = kf;
    }
    function kf(t, n) {
        (Af.point = Tf), (bf = xf = t), (mf = wf = n);
    }
    function Tf(t, n) {
        Nf.add(wf * t - xf * n), (xf = t), (wf = n);
    }
    function Ef() {
        Tf(bf, mf);
    }
    var Cf = 1 / 0,
        Pf = Cf,
        zf = -Cf,
        Rf = zf,
        qf = {
            point: function (t, n) {
                t < Cf && (Cf = t);
                t > zf && (zf = t);
                n < Pf && (Pf = n);
                n > Rf && (Rf = n);
            },
            lineStart: eu,
            lineEnd: eu,
            polygonStart: eu,
            polygonEnd: eu,
            result: function () {
                var t = [
                    [Cf, Pf],
                    [zf, Rf],
                ];
                return (zf = Rf = -(Pf = Cf = 1 / 0)), t;
            },
        };
    var Df,
        Lf,
        Uf,
        Of,
        Yf = 0,
        Bf = 0,
        Ff = 0,
        If = 0,
        Hf = 0,
        jf = 0,
        Xf = 0,
        Gf = 0,
        Vf = 0,
        $f = {
            point: Wf,
            lineStart: Zf,
            lineEnd: Kf,
            polygonStart: function () {
                ($f.lineStart = ts), ($f.lineEnd = ns);
            },
            polygonEnd: function () {
                ($f.point = Wf), ($f.lineStart = Zf), ($f.lineEnd = Kf);
            },
            result: function () {
                var t = Vf ? [Xf / Vf, Gf / Vf] : jf ? [If / jf, Hf / jf] : Ff ? [Yf / Ff, Bf / Ff] : [NaN, NaN];
                return (Yf = Bf = Ff = If = Hf = jf = Xf = Gf = Vf = 0), t;
            },
        };
    function Wf(t, n) {
        (Yf += t), (Bf += n), ++Ff;
    }
    function Zf() {
        $f.point = Qf;
    }
    function Qf(t, n) {
        ($f.point = Jf), Wf((Uf = t), (Of = n));
    }
    function Jf(t, n) {
        var e = t - Uf,
            r = n - Of,
            i = Qa(e * e + r * r);
        (If += (i * (Uf + t)) / 2), (Hf += (i * (Of + n)) / 2), (jf += i), Wf((Uf = t), (Of = n));
    }
    function Kf() {
        $f.point = Wf;
    }
    function ts() {
        $f.point = es;
    }
    function ns() {
        rs(Df, Lf);
    }
    function es(t, n) {
        ($f.point = rs), Wf((Df = Uf = t), (Lf = Of = n));
    }
    function rs(t, n) {
        var e = t - Uf,
            r = n - Of,
            i = Qa(e * e + r * r);
        (If += (i * (Uf + t)) / 2), (Hf += (i * (Of + n)) / 2), (jf += i), (Xf += (i = Of * t - Uf * n) * (Uf + t)), (Gf += i * (Of + n)), (Vf += 3 * i), Wf((Uf = t), (Of = n));
    }
    function is(t) {
        this._context = t;
    }
    is.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
            return (this._radius = t), this;
        },
        polygonStart: function () {
            this._line = 0;
        },
        polygonEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), (this._point = 1);
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Oa);
            }
        },
        result: eu,
    };
    var os,
        as,
        us,
        cs,
        fs,
        ss = Ea(),
        ls = {
            point: eu,
            lineStart: function () {
                ls.point = hs;
            },
            lineEnd: function () {
                os && ds(as, us), (ls.point = eu);
            },
            polygonStart: function () {
                os = !0;
            },
            polygonEnd: function () {
                os = null;
            },
            result: function () {
                var t = +ss;
                return ss.reset(), t;
            },
        };
    function hs(t, n) {
        (ls.point = ds), (as = cs = t), (us = fs = n);
    }
    function ds(t, n) {
        (cs -= t), (fs -= n), ss.add(Qa(cs * cs + fs * fs)), (cs = t), (fs = n);
    }
    function ps() {
        this._string = [];
    }
    function vs(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
    }
    function gs(t) {
        return function (n) {
            var e = new ys();
            for (var r in t) e[r] = t[r];
            return (e.stream = n), e;
        };
    }
    function ys() {}
    function _s(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), cu(e, t.stream(qf)), n(qf.result()), null != r && t.clipExtent(r), t;
    }
    function bs(t, n, e) {
        return _s(
            t,
            function (e) {
                var r = n[1][0] - n[0][0],
                    i = n[1][1] - n[0][1],
                    o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                    a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                    u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
                t.scale(150 * o).translate([a, u]);
            },
            e
        );
    }
    function ms(t, n, e) {
        return bs(t, [[0, 0], n], e);
    }
    function xs(t, n, e) {
        return _s(
            t,
            function (e) {
                var r = +n,
                    i = r / (e[1][0] - e[0][0]),
                    o = (r - i * (e[1][0] + e[0][0])) / 2,
                    a = -i * e[0][1];
                t.scale(150 * i).translate([o, a]);
            },
            e
        );
    }
    function ws(t, n, e) {
        return _s(
            t,
            function (e) {
                var r = +n,
                    i = r / (e[1][1] - e[0][1]),
                    o = -i * e[0][0],
                    a = (r - i * (e[1][1] + e[0][1])) / 2;
                t.scale(150 * i).translate([o, a]);
            },
            e
        );
    }
    (ps.prototype = {
        _radius: 4.5,
        _circle: vs(4.5),
        pointRadius: function (t) {
            return (t = +t) !== this._radius && ((this._radius = t), (this._circle = null)), this;
        },
        polygonStart: function () {
            this._line = 0;
        },
        polygonEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), (this._point = 1);
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = vs(this._radius)), this._string.push("M", t, ",", n, this._circle);
            }
        },
        result: function () {
            if (this._string.length) {
                var t = this._string.join("");
                return (this._string = []), t;
            }
            return null;
        },
    }),
        (ys.prototype = {
            constructor: ys,
            point: function (t, n) {
                this.stream.point(t, n);
            },
            sphere: function () {
                this.stream.sphere();
            },
            lineStart: function () {
                this.stream.lineStart();
            },
            lineEnd: function () {
                this.stream.lineEnd();
            },
            polygonStart: function () {
                this.stream.polygonStart();
            },
            polygonEnd: function () {
                this.stream.polygonEnd();
            },
        });
    var Ms = 16,
        Ns = ja(30 * Ba);
    function As(t, n) {
        return +n
            ? (function (t, n) {
                  function e(r, i, o, a, u, c, f, s, l, h, d, p, v, g) {
                      var y = f - r,
                          _ = s - i,
                          b = y * y + _ * _;
                      if (b > 4 * n && v--) {
                          var m = a + h,
                              x = u + d,
                              w = c + p,
                              M = Qa(m * m + x * x + w * w),
                              N = tu((w /= M)),
                              A = Fa(Fa(w) - 1) < Ra || Fa(o - l) < Ra ? (o + l) / 2 : Ha(x, m),
                              S = t(A, N),
                              k = S[0],
                              T = S[1],
                              E = k - r,
                              C = T - i,
                              P = _ * E - y * C;
                          ((P * P) / b > n || Fa((y * E + _ * C) / b - 0.5) > 0.3 || a * h + u * d + c * p < Ns) && (e(r, i, o, a, u, c, k, T, A, (m /= M), (x /= M), w, v, g), g.point(k, T), e(k, T, A, m, x, w, f, s, l, h, d, p, v, g));
                      }
                  }
                  return function (n) {
                      var r,
                          i,
                          o,
                          a,
                          u,
                          c,
                          f,
                          s,
                          l,
                          h,
                          d,
                          p,
                          v = {
                              point: g,
                              lineStart: y,
                              lineEnd: b,
                              polygonStart: function () {
                                  n.polygonStart(), (v.lineStart = m);
                              },
                              polygonEnd: function () {
                                  n.polygonEnd(), (v.lineStart = y);
                              },
                          };
                      function g(e, r) {
                          (e = t(e, r)), n.point(e[0], e[1]);
                      }
                      function y() {
                          (s = NaN), (v.point = _), n.lineStart();
                      }
                      function _(r, i) {
                          var o = wu([r, i]),
                              a = t(r, i);
                          e(s, l, f, h, d, p, (s = a[0]), (l = a[1]), (f = r), (h = o[0]), (d = o[1]), (p = o[2]), Ms, n), n.point(s, l);
                      }
                      function b() {
                          (v.point = g), n.lineEnd();
                      }
                      function m() {
                          y(), (v.point = x), (v.lineEnd = w);
                      }
                      function x(t, n) {
                          _((r = t), n), (i = s), (o = l), (a = h), (u = d), (c = p), (v.point = _);
                      }
                      function w() {
                          e(s, l, f, h, d, p, i, o, r, a, u, c, Ms, n), (v.lineEnd = b), b();
                      }
                      return v;
                  };
              })(t, n)
            : (function (t) {
                  return gs({
                      point: function (n, e) {
                          (n = t(n, e)), this.stream.point(n[0], n[1]);
                      },
                  });
              })(t);
    }
    var Ss = gs({
        point: function (t, n) {
            this.stream.point(t * Ba, n * Ba);
        },
    });
    function ks(t, n, e, r) {
        var i = ja(r),
            o = Wa(r),
            a = i * t,
            u = o * t,
            c = i / t,
            f = o / t,
            s = (o * e - i * n) / t,
            l = (o * n + i * e) / t;
        function h(t, r) {
            return [a * t - u * r + n, e - u * t - a * r];
        }
        return (
            (h.invert = function (t, n) {
                return [c * t - f * n + s, l - f * t - c * n];
            }),
            h
        );
    }
    function Ts(t) {
        return Es(function () {
            return t;
        })();
    }
    function Es(t) {
        var n,
            e,
            r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l = 150,
            h = 480,
            d = 250,
            p = 0,
            v = 0,
            g = 0,
            y = 0,
            _ = 0,
            b = 0,
            m = null,
            x = Hc,
            w = null,
            M = _f,
            N = 0.5;
        function A(t) {
            return c(t[0] * Ba, t[1] * Ba);
        }
        function S(t) {
            return (t = c.invert(t[0], t[1])) && [t[0] * Ya, t[1] * Ya];
        }
        function k() {
            var t = ks(l, 0, 0, b).apply(null, n(p, v)),
                r = (b
                    ? ks
                    : function (t, n, e) {
                          function r(r, i) {
                              return [n + t * r, e - t * i];
                          }
                          return (
                              (r.invert = function (r, i) {
                                  return [(r - n) / t, (e - i) / t];
                              }),
                              r
                          );
                      })(l, h - t[0], d - t[1], b);
            return (e = Sc(g, y, _)), (u = Nc(n, r)), (c = Nc(e, u)), (a = As(u, N)), T();
        }
        function T() {
            return (f = s = null), A;
        }
        return (
            (A.stream = function (t) {
                return f && s === t
                    ? f
                    : (f = Ss(
                          (function (t) {
                              return gs({
                                  point: function (n, e) {
                                      var r = t(n, e);
                                      return this.stream.point(r[0], r[1]);
                                  },
                              });
                          })(e)(x(a(M((s = t)))))
                      ));
            }),
            (A.preclip = function (t) {
                return arguments.length ? ((x = t), (m = void 0), T()) : x;
            }),
            (A.postclip = function (t) {
                return arguments.length ? ((M = t), (w = r = i = o = null), T()) : M;
            }),
            (A.clipAngle = function (t) {
                return arguments.length ? ((x = +t ? jc((m = t * Ba)) : ((m = null), Hc)), T()) : m * Ya;
            }),
            (A.clipExtent = function (t) {
                return arguments.length
                    ? ((M = null == t ? ((w = r = i = o = null), _f) : Vc((w = +t[0][0]), (r = +t[0][1]), (i = +t[1][0]), (o = +t[1][1]))), T())
                    : null == w
                    ? null
                    : [
                          [w, r],
                          [i, o],
                      ];
            }),
            (A.scale = function (t) {
                return arguments.length ? ((l = +t), k()) : l;
            }),
            (A.translate = function (t) {
                return arguments.length ? ((h = +t[0]), (d = +t[1]), k()) : [h, d];
            }),
            (A.center = function (t) {
                return arguments.length ? ((p = (t[0] % 360) * Ba), (v = (t[1] % 360) * Ba), k()) : [p * Ya, v * Ya];
            }),
            (A.rotate = function (t) {
                return arguments.length ? ((g = (t[0] % 360) * Ba), (y = (t[1] % 360) * Ba), (_ = t.length > 2 ? (t[2] % 360) * Ba : 0), k()) : [g * Ya, y * Ya, _ * Ya];
            }),
            (A.angle = function (t) {
                return arguments.length ? ((b = (t % 360) * Ba), k()) : b * Ya;
            }),
            (A.precision = function (t) {
                return arguments.length ? ((a = As(u, (N = t * t))), T()) : Qa(N);
            }),
            (A.fitExtent = function (t, n) {
                return bs(A, t, n);
            }),
            (A.fitSize = function (t, n) {
                return ms(A, t, n);
            }),
            (A.fitWidth = function (t, n) {
                return xs(A, t, n);
            }),
            (A.fitHeight = function (t, n) {
                return ws(A, t, n);
            }),
            function () {
                return (n = t.apply(this, arguments)), (A.invert = n.invert && S), k();
            }
        );
    }
    function Cs(t) {
        var n = 0,
            e = Da / 3,
            r = Es(t),
            i = r(n, e);
        return (
            (i.parallels = function (t) {
                return arguments.length ? r((n = t[0] * Ba), (e = t[1] * Ba)) : [n * Ya, e * Ya];
            }),
            i
        );
    }
    function Ps(t, n) {
        var e = Wa(t),
            r = (e + Wa(n)) / 2;
        if (Fa(r) < Ra)
            return (function (t) {
                var n = ja(t);
                function e(t, e) {
                    return [t * n, Wa(e) / n];
                }
                return (
                    (e.invert = function (t, e) {
                        return [t / n, tu(e * n)];
                    }),
                    e
                );
            })(t);
        var i = 1 + e * (2 * r - e),
            o = Qa(i) / r;
        function a(t, n) {
            var e = Qa(i - 2 * r * Wa(n)) / r;
            return [e * Wa((t *= r)), o - e * ja(t)];
        }
        return (
            (a.invert = function (t, n) {
                var e = o - n;
                return [(Ha(t, Fa(e)) / r) * Za(e), tu((i - (t * t + e * e) * r * r) / (2 * r))];
            }),
            a
        );
    }
    function zs() {
        return Cs(Ps).scale(155.424).center([0, 33.6442]);
    }
    function Rs() {
        return zs().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
    }
    function qs(t) {
        return function (n, e) {
            var r = ja(n),
                i = ja(e),
                o = t(r * i);
            return [o * i * Wa(n), o * Wa(e)];
        };
    }
    function Ds(t) {
        return function (n, e) {
            var r = Qa(n * n + e * e),
                i = t(r),
                o = Wa(i),
                a = ja(i);
            return [Ha(n * o, r * a), tu(r && (e * o) / r)];
        };
    }
    var Ls = qs(function (t) {
        return Qa(2 / (1 + t));
    });
    Ls.invert = Ds(function (t) {
        return 2 * tu(t / 2);
    });
    var Us = qs(function (t) {
        return (t = Ka(t)) && t / Wa(t);
    });
    function Os(t, n) {
        return [t, Va(Ja((La + n) / 2))];
    }
    function Ys(t) {
        var n,
            e,
            r,
            i = Ts(t),
            o = i.center,
            a = i.scale,
            u = i.translate,
            c = i.clipExtent,
            f = null;
        function s() {
            var o = Da * a(),
                u = i(Cc(i.rotate()).invert([0, 0]));
            return c(
                null == f
                    ? [
                          [u[0] - o, u[1] - o],
                          [u[0] + o, u[1] + o],
                      ]
                    : t === Os
                    ? [
                          [Math.max(u[0] - o, f), n],
                          [Math.min(u[0] + o, e), r],
                      ]
                    : [
                          [f, Math.max(u[1] - o, n)],
                          [e, Math.min(u[1] + o, r)],
                      ]
            );
        }
        return (
            (i.scale = function (t) {
                return arguments.length ? (a(t), s()) : a();
            }),
            (i.translate = function (t) {
                return arguments.length ? (u(t), s()) : u();
            }),
            (i.center = function (t) {
                return arguments.length ? (o(t), s()) : o();
            }),
            (i.clipExtent = function (t) {
                return arguments.length
                    ? (null == t ? (f = n = e = r = null) : ((f = +t[0][0]), (n = +t[0][1]), (e = +t[1][0]), (r = +t[1][1])), s())
                    : null == f
                    ? null
                    : [
                          [f, n],
                          [e, r],
                      ];
            }),
            s()
        );
    }
    function Bs(t) {
        return Ja((La + t) / 2);
    }
    function Fs(t, n) {
        var e = ja(t),
            r = t === n ? Wa(t) : Va(e / ja(n)) / Va(Bs(n) / Bs(t)),
            i = (e * $a(Bs(t), r)) / r;
        if (!r) return Os;
        function o(t, n) {
            i > 0 ? n < -La + Ra && (n = -La + Ra) : n > La - Ra && (n = La - Ra);
            var e = i / $a(Bs(n), r);
            return [e * Wa(r * t), i - e * ja(r * t)];
        }
        return (
            (o.invert = function (t, n) {
                var e = i - n,
                    o = Za(r) * Qa(t * t + e * e);
                return [(Ha(t, Fa(e)) / r) * Za(e), 2 * Ia($a(i / o, 1 / r)) - La];
            }),
            o
        );
    }
    function Is(t, n) {
        return [t, n];
    }
    function Hs(t, n) {
        var e = ja(t),
            r = t === n ? Wa(t) : (e - ja(n)) / (n - t),
            i = e / r + t;
        if (Fa(r) < Ra) return Is;
        function o(t, n) {
            var e = i - n,
                o = r * t;
            return [e * Wa(o), i - e * ja(o)];
        }
        return (
            (o.invert = function (t, n) {
                var e = i - n;
                return [(Ha(t, Fa(e)) / r) * Za(e), i - Za(r) * Qa(t * t + e * e)];
            }),
            o
        );
    }
    (Us.invert = Ds(function (t) {
        return t;
    })),
        (Os.invert = function (t, n) {
            return [t, 2 * Ia(Ga(n)) - La];
        }),
        (Is.invert = Is);
    var js = 1.340264,
        Xs = -0.081106,
        Gs = 893e-6,
        Vs = 0.003796,
        $s = Qa(3) / 2;
    function Ws(t, n) {
        var e = tu($s * Wa(n)),
            r = e * e,
            i = r * r * r;
        return [(t * ja(e)) / ($s * (js + 3 * Xs * r + i * (7 * Gs + 9 * Vs * r))), e * (js + Xs * r + i * (Gs + Vs * r))];
    }
    function Zs(t, n) {
        var e = ja(n),
            r = ja(t) * e;
        return [(e * Wa(t)) / r, Wa(n) / r];
    }
    function Qs(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r
            ? _f
            : gs({
                  point: function (i, o) {
                      this.stream.point(i * t + e, o * n + r);
                  },
              });
    }
    function Js(t, n) {
        var e = n * n,
            r = e * e;
        return [t * (0.8707 - 0.131979 * e + r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)), n * (1.007226 + e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r)))];
    }
    function Ks(t, n) {
        return [ja(n) * Wa(t), Wa(n)];
    }
    function tl(t, n) {
        var e = ja(n),
            r = 1 + ja(t) * e;
        return [(e * Wa(t)) / r, Wa(n) / r];
    }
    function nl(t, n) {
        return [Va(Ja((La + n) / 2)), -t];
    }
    function el(t, n) {
        return t.parent === n.parent ? 1 : 2;
    }
    function rl(t, n) {
        return t + n.x;
    }
    function il(t, n) {
        return Math.max(t, n.y);
    }
    function ol(t) {
        var n = 0,
            e = t.children,
            r = e && e.length;
        if (r) for (; --r >= 0; ) n += e[r].value;
        else n = 1;
        t.value = n;
    }
    function al(t, n) {
        var e,
            r,
            i,
            o,
            a,
            u = new sl(t),
            c = +t.value && (u.value = t.value),
            f = [u];
        for (null == n && (n = ul); (e = f.pop()); )
            if ((c && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length))) for (e.children = new Array(a), o = a - 1; o >= 0; --o) f.push((r = e.children[o] = new sl(i[o]))), (r.parent = e), (r.depth = e.depth + 1);
        return u.eachBefore(fl);
    }
    function ul(t) {
        return t.children;
    }
    function cl(t) {
        t.data = t.data.data;
    }
    function fl(t) {
        var n = 0;
        do {
            t.height = n;
        } while ((t = t.parent) && t.height < ++n);
    }
    function sl(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    (Ws.invert = function (t, n) {
        for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && ((o = (i = (r -= e = (r * (js + Xs * i + o * (Gs + Vs * i)) - n) / (js + 3 * Xs * i + o * (7 * Gs + 9 * Vs * i))) * r) * i * i), !(Fa(e) < qa)); ++a);
        return [($s * t * (js + 3 * Xs * i + o * (7 * Gs + 9 * Vs * i))) / ja(r), tu(Wa(r) / $s)];
    }),
        (Zs.invert = Ds(Ia)),
        (Js.invert = function (t, n) {
            var e,
                r = n,
                i = 25;
            do {
                var o = r * r,
                    a = o * o;
                r -= e = (r * (1.007226 + o * (0.015085 + a * (0.028874 * o - 0.044475 - 0.005916 * a))) - n) / (1.007226 + o * (0.045255 + a * (0.259866 * o - 0.311325 - 0.005916 * 11 * a)));
            } while (Fa(e) > Ra && --i > 0);
            return [t / (0.8707 + (o = r * r) * (o * (o * o * o * (0.003971 - 0.001529 * o) - 0.013791) - 0.131979)), r];
        }),
        (Ks.invert = Ds(tu)),
        (tl.invert = Ds(function (t) {
            return 2 * Ia(t);
        })),
        (nl.invert = function (t, n) {
            return [-n, 2 * Ia(Ga(t)) - La];
        }),
        (sl.prototype = al.prototype = {
            constructor: sl,
            count: function () {
                return this.eachAfter(ol);
            },
            each: function (t) {
                var n,
                    e,
                    r,
                    i,
                    o = this,
                    a = [o];
                do {
                    for (n = a.reverse(), a = []; (o = n.pop()); ) if ((t(o), (e = o.children))) for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
                } while (a.length);
                return this;
            },
            eachAfter: function (t) {
                for (var n, e, r, i = this, o = [i], a = []; (i = o.pop()); ) if ((a.push(i), (n = i.children))) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                for (; (i = a.pop()); ) t(i);
                return this;
            },
            eachBefore: function (t) {
                for (var n, e, r = this, i = [r]; (r = i.pop()); ) if ((t(r), (n = r.children))) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
                return this;
            },
            sum: function (t) {
                return this.eachAfter(function (n) {
                    for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; ) e += r[i].value;
                    n.value = e;
                });
            },
            sort: function (t) {
                return this.eachBefore(function (n) {
                    n.children && n.children.sort(t);
                });
            },
            path: function (t) {
                for (
                    var n = this,
                        e = (function (t, n) {
                            if (t === n) return t;
                            var e = t.ancestors(),
                                r = n.ancestors(),
                                i = null;
                            for (t = e.pop(), n = r.pop(); t === n; ) (i = t), (t = e.pop()), (n = r.pop());
                            return i;
                        })(n, t),
                        r = [n];
                    n !== e;

                )
                    (n = n.parent), r.push(n);
                for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
                return r;
            },
            ancestors: function () {
                for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
                return n;
            },
            descendants: function () {
                var t = [];
                return (
                    this.each(function (n) {
                        t.push(n);
                    }),
                    t
                );
            },
            leaves: function () {
                var t = [];
                return (
                    this.eachBefore(function (n) {
                        n.children || t.push(n);
                    }),
                    t
                );
            },
            links: function () {
                var t = this,
                    n = [];
                return (
                    t.each(function (e) {
                        e !== t && n.push({ source: e.parent, target: e });
                    }),
                    n
                );
            },
            copy: function () {
                return al(this).eachBefore(cl);
            },
        });
    var ll = Array.prototype.slice;
    function hl(t) {
        for (
            var n,
                e,
                r = 0,
                i = (t = (function (t) {
                    for (var n, e, r = t.length; r; ) (e = (Math.random() * r--) | 0), (n = t[r]), (t[r] = t[e]), (t[e] = n);
                    return t;
                })(ll.call(t))).length,
                o = [];
            r < i;

        )
            (n = t[r]), e && vl(e, n) ? ++r : ((e = yl((o = dl(o, n)))), (r = 0));
        return e;
    }
    function dl(t, n) {
        var e, r;
        if (gl(n, t)) return [n];
        for (e = 0; e < t.length; ++e) if (pl(n, t[e]) && gl(_l(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (pl(_l(t[e], t[r]), n) && pl(_l(t[e], n), t[r]) && pl(_l(t[r], n), t[e]) && gl(bl(t[e], t[r], n), t)) return [t[e], t[r], n];
        throw new Error();
    }
    function pl(t, n) {
        var e = t.r - n.r,
            r = n.x - t.x,
            i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i;
    }
    function vl(t, n) {
        var e = t.r - n.r + 1e-6,
            r = n.x - t.x,
            i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
    }
    function gl(t, n) {
        for (var e = 0; e < n.length; ++e) if (!vl(t, n[e])) return !1;
        return !0;
    }
    function yl(t) {
        switch (t.length) {
            case 1:
                return { x: (n = t[0]).x, y: n.y, r: n.r };
            case 2:
                return _l(t[0], t[1]);
            case 3:
                return bl(t[0], t[1], t[2]);
        }
        var n;
    }
    function _l(t, n) {
        var e = t.x,
            r = t.y,
            i = t.r,
            o = n.x,
            a = n.y,
            u = n.r,
            c = o - e,
            f = a - r,
            s = u - i,
            l = Math.sqrt(c * c + f * f);
        return { x: (e + o + (c / l) * s) / 2, y: (r + a + (f / l) * s) / 2, r: (l + i + u) / 2 };
    }
    function bl(t, n, e) {
        var r = t.x,
            i = t.y,
            o = t.r,
            a = n.x,
            u = n.y,
            c = n.r,
            f = e.x,
            s = e.y,
            l = e.r,
            h = r - a,
            d = r - f,
            p = i - u,
            v = i - s,
            g = c - o,
            y = l - o,
            _ = r * r + i * i - o * o,
            b = _ - a * a - u * u + c * c,
            m = _ - f * f - s * s + l * l,
            x = d * p - h * v,
            w = (p * m - v * b) / (2 * x) - r,
            M = (v * g - p * y) / x,
            N = (d * b - h * m) / (2 * x) - i,
            A = (h * y - d * g) / x,
            S = M * M + A * A - 1,
            k = 2 * (o + w * M + N * A),
            T = w * w + N * N - o * o,
            E = -(S ? (k + Math.sqrt(k * k - 4 * S * T)) / (2 * S) : T / k);
        return { x: r + w + M * E, y: i + N + A * E, r: E };
    }
    function ml(t, n, e) {
        var r,
            i,
            o,
            a,
            u = t.x - n.x,
            c = t.y - n.y,
            f = u * u + c * c;
        f
            ? ((i = n.r + e.r),
              (i *= i),
              (a = t.r + e.r),
              i > (a *= a)
                  ? ((r = (f + a - i) / (2 * f)), (o = Math.sqrt(Math.max(0, a / f - r * r))), (e.x = t.x - r * u - o * c), (e.y = t.y - r * c + o * u))
                  : ((r = (f + i - a) / (2 * f)), (o = Math.sqrt(Math.max(0, i / f - r * r))), (e.x = n.x + r * u - o * c), (e.y = n.y + r * c + o * u)))
            : ((e.x = n.x + e.r), (e.y = n.y));
    }
    function xl(t, n) {
        var e = t.r + n.r - 1e-6,
            r = n.x - t.x,
            i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
    }
    function wl(t) {
        var n = t._,
            e = t.next._,
            r = n.r + e.r,
            i = (n.x * e.r + e.x * n.r) / r,
            o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o;
    }
    function Ml(t) {
        (this._ = t), (this.next = null), (this.previous = null);
    }
    function Nl(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i, o, a, u, c, f, s, l;
        if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r;
        if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2))) return n.r + e.r;
        ml(e, n, (r = t[2])), (n = new Ml(n)), (e = new Ml(e)), (r = new Ml(r)), (n.next = r.previous = e), (e.next = n.previous = r), (r.next = e.previous = n);
        t: for (u = 3; u < i; ++u) {
            ml(n._, e._, (r = t[u])), (r = new Ml(r)), (c = e.next), (f = n.previous), (s = e._.r), (l = n._.r);
            do {
                if (s <= l) {
                    if (xl(c._, r._)) {
                        (e = c), (n.next = e), (e.previous = n), --u;
                        continue t;
                    }
                    (s += c._.r), (c = c.next);
                } else {
                    if (xl(f._, r._)) {
                        ((n = f).next = e), (e.previous = n), --u;
                        continue t;
                    }
                    (l += f._.r), (f = f.previous);
                }
            } while (c !== f.next);
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = wl(n); (r = r.next) !== e; ) (a = wl(r)) < o && ((n = r), (o = a));
            e = n.next;
        }
        for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._);
        for (r = hl(n), u = 0; u < i; ++u) ((n = t[u]).x -= r.x), (n.y -= r.y);
        return r.r;
    }
    function Al(t) {
        if ("function" != typeof t) throw new Error();
        return t;
    }
    function Sl() {
        return 0;
    }
    function kl(t) {
        return function () {
            return t;
        };
    }
    function Tl(t) {
        return Math.sqrt(t.value);
    }
    function El(t) {
        return function (n) {
            n.children || (n.r = Math.max(0, +t(n) || 0));
        };
    }
    function Cl(t, n) {
        return function (e) {
            if ((r = e.children)) {
                var r,
                    i,
                    o,
                    a = r.length,
                    u = t(e) * n || 0;
                if (u) for (i = 0; i < a; ++i) r[i].r += u;
                if (((o = Nl(r)), u)) for (i = 0; i < a; ++i) r[i].r -= u;
                e.r = o + u;
            }
        };
    }
    function Pl(t) {
        return function (n) {
            var e = n.parent;
            (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
        };
    }
    function zl(t) {
        (t.x0 = Math.round(t.x0)), (t.y0 = Math.round(t.y0)), (t.x1 = Math.round(t.x1)), (t.y1 = Math.round(t.y1));
    }
    function Rl(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c; ) ((o = a[u]).y0 = e), (o.y1 = i), (o.x0 = n), (o.x1 = n += o.value * f);
    }
    var ql = "$",
        Dl = { depth: -1 },
        Ll = {};
    function Ul(t) {
        return t.id;
    }
    function Ol(t) {
        return t.parentId;
    }
    function Yl(t, n) {
        return t.parent === n.parent ? 1 : 2;
    }
    function Bl(t) {
        var n = t.children;
        return n ? n[0] : t.t;
    }
    function Fl(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t;
    }
    function Il(t, n, e) {
        var r = e / (n.i - t.i);
        (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
    }
    function Hl(t, n, e) {
        return t.a.parent === n.parent ? t.a : e;
    }
    function jl(t, n) {
        (this._ = t), (this.parent = null), (this.children = null), (this.A = null), (this.a = this), (this.z = 0), (this.m = 0), (this.c = 0), (this.s = 0), (this.t = null), (this.i = n);
    }
    function Xl(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c; ) ((o = a[u]).x0 = n), (o.x1 = r), (o.y0 = e), (o.y1 = e += o.value * f);
    }
    jl.prototype = Object.create(sl.prototype);
    var Gl = (1 + Math.sqrt(5)) / 2;
    function Vl(t, n, e, r, i, o) {
        for (var a, u, c, f, s, l, h, d, p, v, g, y = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x; ) {
            (c = i - e), (f = o - r);
            do {
                s = _[m++].value;
            } while (!s && m < x);
            for (l = h = s, g = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / g, g / l); m < x; ++m) {
                if (((s += u = _[m].value), u < l && (l = u), u > h && (h = u), (g = s * s * v), (d = Math.max(h / g, g / l)) > p)) {
                    s -= u;
                    break;
                }
                p = d;
            }
            y.push((a = { value: s, dice: c < f, children: _.slice(b, m) })), a.dice ? Rl(a, e, r, i, w ? (r += (f * s) / w) : o) : Xl(a, e, r, w ? (e += (c * s) / w) : i, o), (w -= s), (b = m);
        }
        return y;
    }
    var $l = (function t(n) {
        function e(t, e, r, i, o) {
            Vl(n, t, e, r, i, o);
        }
        return (
            (e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1);
            }),
            e
        );
    })(Gl);
    var Wl = (function t(n) {
        function e(t, e, r, i, o) {
            if ((a = t._squarify) && a.ratio === n)
                for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h; ) {
                    for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
                    u.dice ? Rl(u, e, r, i, (r += ((o - r) * u.value) / d)) : Xl(u, e, r, (e += ((i - e) * u.value) / d), o), (d -= u.value);
                }
            else (t._squarify = a = Vl(n, t, e, r, i, o)), (a.ratio = n);
        }
        return (
            (e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1);
            }),
            e
        );
    })(Gl);
    function Zl(t, n) {
        return t[0] - n[0] || t[1] - n[1];
    }
    function Ql(t) {
        for (var n, e, r, i = t.length, o = [0, 1], a = 2, u = 2; u < i; ++u) {
            for (; a > 1 && ((n = t[o[a - 2]]), (e = t[o[a - 1]]), (r = t[u]), (e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0]) <= 0); ) --a;
            o[a++] = u;
        }
        return o.slice(0, a);
    }
    function Jl() {
        return Math.random();
    }
    var Kl = (function t(n) {
            function e(t, e) {
                return (
                    (t = null == t ? 0 : +t),
                    (e = null == e ? 1 : +e),
                    1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
                    function () {
                        return n() * e + t;
                    }
                );
            }
            return (e.source = t), e;
        })(Jl),
        th = (function t(n) {
            function e(t, e) {
                var r, i;
                return (
                    (t = null == t ? 0 : +t),
                    (e = null == e ? 1 : +e),
                    function () {
                        var o;
                        if (null != r) (o = r), (r = null);
                        else
                            do {
                                (r = 2 * n() - 1), (o = 2 * n() - 1), (i = r * r + o * o);
                            } while (!i || i > 1);
                        return t + e * o * Math.sqrt((-2 * Math.log(i)) / i);
                    }
                );
            }
            return (e.source = t), e;
        })(Jl),
        nh = (function t(n) {
            function e() {
                var t = th.source(n).apply(this, arguments);
                return function () {
                    return Math.exp(t());
                };
            }
            return (e.source = t), e;
        })(Jl),
        eh = (function t(n) {
            function e(t) {
                return function () {
                    for (var e = 0, r = 0; r < t; ++r) e += n();
                    return e;
                };
            }
            return (e.source = t), e;
        })(Jl),
        rh = (function t(n) {
            function e(t) {
                var e = eh.source(n)(t);
                return function () {
                    return e() / t;
                };
            }
            return (e.source = t), e;
        })(Jl),
        ih = (function t(n) {
            function e(t) {
                return function () {
                    return -Math.log(1 - n()) / t;
                };
            }
            return (e.source = t), e;
        })(Jl);
    function oh(t, n) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t);
                break;
            default:
                this.range(n).domain(t);
        }
        return this;
    }
    function ah(t, n) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.interpolator(t);
                break;
            default:
                this.interpolator(n).domain(t);
        }
        return this;
    }
    var uh = Array.prototype,
        ch = uh.map,
        fh = uh.slice,
        sh = { name: "implicit" };
    function lh() {
        var t = Qi(),
            n = [],
            e = [],
            r = sh;
        function i(i) {
            var o = i + "",
                a = t.get(o);
            if (!a) {
                if (r !== sh) return r;
                t.set(o, (a = n.push(i)));
            }
            return e[(a - 1) % e.length];
        }
        return (
            (i.domain = function (e) {
                if (!arguments.length) return n.slice();
                (n = []), (t = Qi());
                for (var r, o, a = -1, u = e.length; ++a < u; ) t.has((o = (r = e[a]) + "")) || t.set(o, n.push(r));
                return i;
            }),
            (i.range = function (t) {
                return arguments.length ? ((e = fh.call(t)), i) : e.slice();
            }),
            (i.unknown = function (t) {
                return arguments.length ? ((r = t), i) : r;
            }),
            (i.copy = function () {
                return lh(n, e).unknown(r);
            }),
            oh.apply(i, arguments),
            i
        );
    }
    function hh() {
        var t,
            n,
            e = lh().unknown(void 0),
            r = e.domain,
            i = e.range,
            o = [0, 1],
            a = !1,
            u = 0,
            c = 0,
            f = 0.5;
        function s() {
            var e = r().length,
                s = o[1] < o[0],
                l = o[s - 0],
                h = o[1 - s];
            (t = (h - l) / Math.max(1, e - u + 2 * c)), a && (t = Math.floor(t)), (l += (h - l - t * (e - u)) * f), (n = t * (1 - u)), a && ((l = Math.round(l)), (n = Math.round(n)));
            var d = g(e).map(function (n) {
                return l + t * n;
            });
            return i(s ? d.reverse() : d);
        }
        return (
            delete e.unknown,
            (e.domain = function (t) {
                return arguments.length ? (r(t), s()) : r();
            }),
            (e.range = function (t) {
                return arguments.length ? ((o = [+t[0], +t[1]]), s()) : o.slice();
            }),
            (e.rangeRound = function (t) {
                return (o = [+t[0], +t[1]]), (a = !0), s();
            }),
            (e.bandwidth = function () {
                return n;
            }),
            (e.step = function () {
                return t;
            }),
            (e.round = function (t) {
                return arguments.length ? ((a = !!t), s()) : a;
            }),
            (e.padding = function (t) {
                return arguments.length ? ((u = Math.min(1, (c = +t))), s()) : u;
            }),
            (e.paddingInner = function (t) {
                return arguments.length ? ((u = Math.min(1, t)), s()) : u;
            }),
            (e.paddingOuter = function (t) {
                return arguments.length ? ((c = +t), s()) : c;
            }),
            (e.align = function (t) {
                return arguments.length ? ((f = Math.max(0, Math.min(1, t))), s()) : f;
            }),
            (e.copy = function () {
                return hh(r(), o).round(a).paddingInner(u).paddingOuter(c).align(f);
            }),
            oh.apply(s(), arguments)
        );
    }
    function dh(t) {
        return +t;
    }
    var ph = [0, 1];
    function vh(t) {
        return t;
    }
    function gh(t, n) {
        return (n -= t = +t)
            ? function (e) {
                  return (e - t) / n;
              }
            : ((e = isNaN(n) ? NaN : 0.5),
              function () {
                  return e;
              });
        var e;
    }
    function yh(t) {
        var n,
            e = t[0],
            r = t[t.length - 1];
        return (
            e > r && ((n = e), (e = r), (r = n)),
            function (t) {
                return Math.max(e, Math.min(r, t));
            }
        );
    }
    function _h(t, n, e) {
        var r = t[0],
            i = t[1],
            o = n[0],
            a = n[1];
        return (
            i < r ? ((r = gh(i, r)), (o = e(a, o))) : ((r = gh(r, i)), (o = e(o, a))),
            function (t) {
                return o(r(t));
            }
        );
    }
    function bh(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
            o = new Array(r),
            a = new Array(r),
            u = -1;
        for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++u < r; ) (o[u] = gh(t[u], t[u + 1])), (a[u] = e(n[u], n[u + 1]));
        return function (n) {
            var e = i(t, n, 1, r) - 1;
            return a[e](o[e](n));
        };
    }
    function mh(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
    }
    function xh() {
        var t,
            n,
            e,
            r,
            i,
            o,
            a = ph,
            u = ph,
            c = ye,
            f = vh;
        function s() {
            return (r = Math.min(a.length, u.length) > 2 ? bh : _h), (i = o = null), l;
        }
        function l(n) {
            return isNaN((n = +n)) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n)));
        }
        return (
            (l.invert = function (e) {
                return f(n((o || (o = r(u, a.map(t), he)))(e)));
            }),
            (l.domain = function (t) {
                return arguments.length ? ((a = ch.call(t, dh)), f === vh || (f = yh(a)), s()) : a.slice();
            }),
            (l.range = function (t) {
                return arguments.length ? ((u = fh.call(t)), s()) : u.slice();
            }),
            (l.rangeRound = function (t) {
                return (u = fh.call(t)), (c = _e), s();
            }),
            (l.clamp = function (t) {
                return arguments.length ? ((f = t ? yh(a) : vh), l) : f !== vh;
            }),
            (l.interpolate = function (t) {
                return arguments.length ? ((c = t), s()) : c;
            }),
            (l.unknown = function (t) {
                return arguments.length ? ((e = t), l) : e;
            }),
            function (e, r) {
                return (t = e), (n = r), s();
            }
        );
    }
    function wh(t, n) {
        return xh()(t, n);
    }
    function Mh(n, e, r, i) {
        var o,
            a = w(n, e, r);
        switch ((i = ya(null == i ? ",f" : i)).type) {
            case "s":
                var u = Math.max(Math.abs(n), Math.abs(e));
                return null != i.precision || isNaN((o = ka(a, u))) || (i.precision = o), t.formatPrefix(i, u);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN((o = Ta(a, Math.max(Math.abs(n), Math.abs(e))))) || (i.precision = o - ("e" === i.type));
                break;
            case "f":
            case "%":
                null != i.precision || isNaN((o = Sa(a))) || (i.precision = o - 2 * ("%" === i.type));
        }
        return t.format(i);
    }
    function Nh(t) {
        var n = t.domain;
        return (
            (t.ticks = function (t) {
                var e = n();
                return m(e[0], e[e.length - 1], null == t ? 10 : t);
            }),
            (t.tickFormat = function (t, e) {
                var r = n();
                return Mh(r[0], r[r.length - 1], null == t ? 10 : t, e);
            }),
            (t.nice = function (e) {
                null == e && (e = 10);
                var r,
                    i = n(),
                    o = 0,
                    a = i.length - 1,
                    u = i[o],
                    c = i[a];
                return (
                    c < u && ((r = u), (u = c), (c = r), (r = o), (o = a), (a = r)),
                    (r = x(u, c, e)) > 0 ? (r = x((u = Math.floor(u / r) * r), (c = Math.ceil(c / r) * r), e)) : r < 0 && (r = x((u = Math.ceil(u * r) / r), (c = Math.floor(c * r) / r), e)),
                    r > 0 ? ((i[o] = Math.floor(u / r) * r), (i[a] = Math.ceil(c / r) * r), n(i)) : r < 0 && ((i[o] = Math.ceil(u * r) / r), (i[a] = Math.floor(c * r) / r), n(i)),
                    t
                );
            }),
            t
        );
    }
    function Ah(t, n) {
        var e,
            r = 0,
            i = (t = t.slice()).length - 1,
            o = t[r],
            a = t[i];
        return a < o && ((e = r), (r = i), (i = e), (e = o), (o = a), (a = e)), (t[r] = n.floor(o)), (t[i] = n.ceil(a)), t;
    }
    function Sh(t) {
        return Math.log(t);
    }
    function kh(t) {
        return Math.exp(t);
    }
    function Th(t) {
        return -Math.log(-t);
    }
    function Eh(t) {
        return -Math.exp(-t);
    }
    function Ch(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }
    function Ph(t) {
        return function (n) {
            return -t(-n);
        };
    }
    function zh(n) {
        var e,
            r,
            i = n(Sh, kh),
            o = i.domain,
            a = 10;
        function u() {
            return (
                (e = (function (t) {
                    return t === Math.E
                        ? Math.log
                        : (10 === t && Math.log10) ||
                              (2 === t && Math.log2) ||
                              ((t = Math.log(t)),
                              function (n) {
                                  return Math.log(n) / t;
                              });
                })(a)),
                (r = (function (t) {
                    return 10 === t
                        ? Ch
                        : t === Math.E
                        ? Math.exp
                        : function (n) {
                              return Math.pow(t, n);
                          };
                })(a)),
                o()[0] < 0 ? ((e = Ph(e)), (r = Ph(r)), n(Th, Eh)) : n(Sh, kh),
                i
            );
        }
        return (
            (i.base = function (t) {
                return arguments.length ? ((a = +t), u()) : a;
            }),
            (i.domain = function (t) {
                return arguments.length ? (o(t), u()) : o();
            }),
            (i.ticks = function (t) {
                var n,
                    i = o(),
                    u = i[0],
                    c = i[i.length - 1];
                (n = c < u) && ((h = u), (u = c), (c = h));
                var f,
                    s,
                    l,
                    h = e(u),
                    d = e(c),
                    p = null == t ? 10 : +t,
                    v = [];
                if (!(a % 1) && d - h < p) {
                    if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), u > 0)) {
                        for (; h < d; ++h)
                            for (s = 1, f = r(h); s < a; ++s)
                                if (!((l = f * s) < u)) {
                                    if (l > c) break;
                                    v.push(l);
                                }
                    } else
                        for (; h < d; ++h)
                            for (s = a - 1, f = r(h); s >= 1; --s)
                                if (!((l = f * s) < u)) {
                                    if (l > c) break;
                                    v.push(l);
                                }
                } else v = m(h, d, Math.min(d - h, p)).map(r);
                return n ? v.reverse() : v;
            }),
            (i.tickFormat = function (n, o) {
                if ((null == o && (o = 10 === a ? ".0e" : ","), "function" != typeof o && (o = t.format(o)), n === 1 / 0)) return o;
                null == n && (n = 10);
                var u = Math.max(1, (a * n) / i.ticks().length);
                return function (t) {
                    var n = t / r(Math.round(e(t)));
                    return n * a < a - 0.5 && (n *= a), n <= u ? o(t) : "";
                };
            }),
            (i.nice = function () {
                return o(
                    Ah(o(), {
                        floor: function (t) {
                            return r(Math.floor(e(t)));
                        },
                        ceil: function (t) {
                            return r(Math.ceil(e(t)));
                        },
                    })
                );
            }),
            i
        );
    }
    function Rh(t) {
        return function (n) {
            return Math.sign(n) * Math.log1p(Math.abs(n / t));
        };
    }
    function qh(t) {
        return function (n) {
            return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
        };
    }
    function Dh(t) {
        var n = 1,
            e = t(Rh(n), qh(n));
        return (
            (e.constant = function (e) {
                return arguments.length ? t(Rh((n = +e)), qh(n)) : n;
            }),
            Nh(e)
        );
    }
    function Lh(t) {
        return function (n) {
            return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
        };
    }
    function Uh(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function Oh(t) {
        return t < 0 ? -t * t : t * t;
    }
    function Yh(t) {
        var n = t(vh, vh),
            e = 1;
        return (
            (n.exponent = function (n) {
                return arguments.length ? (1 === (e = +n) ? t(vh, vh) : 0.5 === e ? t(Uh, Oh) : t(Lh(e), Lh(1 / e))) : e;
            }),
            Nh(n)
        );
    }
    function Bh() {
        var t = Yh(xh());
        return (
            (t.copy = function () {
                return mh(t, Bh()).exponent(t.exponent());
            }),
            oh.apply(t, arguments),
            t
        );
    }
    var Fh = new Date(),
        Ih = new Date();
    function Hh(t, n, e, r) {
        function i(n) {
            return t((n = new Date(+n))), n;
        }
        return (
            (i.floor = i),
            (i.ceil = function (e) {
                return t((e = new Date(e - 1))), n(e, 1), t(e), e;
            }),
            (i.round = function (t) {
                var n = i(t),
                    e = i.ceil(t);
                return t - n < e - t ? n : e;
            }),
            (i.offset = function (t, e) {
                return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
            }),
            (i.range = function (e, r, o) {
                var a,
                    u = [];
                if (((e = i.ceil(e)), (o = null == o ? 1 : Math.floor(o)), !(e < r && o > 0))) return u;
                do {
                    u.push((a = new Date(+e))), n(e, o), t(e);
                } while (a < e && e < r);
                return u;
            }),
            (i.filter = function (e) {
                return Hh(
                    function (n) {
                        if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
                    },
                    function (t, r) {
                        if (t >= t)
                            if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                            else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
                    }
                );
            }),
            e &&
                ((i.count = function (n, r) {
                    return Fh.setTime(+n), Ih.setTime(+r), t(Fh), t(Ih), Math.floor(e(Fh, Ih));
                }),
                (i.every = function (t) {
                    return (
                        (t = Math.floor(t)),
                        isFinite(t) && t > 0
                            ? t > 1
                                ? i.filter(
                                      r
                                          ? function (n) {
                                                return r(n) % t == 0;
                                            }
                                          : function (n) {
                                                return i.count(0, n) % t == 0;
                                            }
                                  )
                                : i
                            : null
                    );
                })),
            i
        );
    }
    var jh = Hh(
        function () {},
        function (t, n) {
            t.setTime(+t + n);
        },
        function (t, n) {
            return n - t;
        }
    );
    jh.every = function (t) {
        return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
                ? t > 1
                    ? Hh(
                          function (n) {
                              n.setTime(Math.floor(n / t) * t);
                          },
                          function (n, e) {
                              n.setTime(+n + e * t);
                          },
                          function (n, e) {
                              return (e - n) / t;
                          }
                      )
                    : jh
                : null
        );
    };
    var Xh = jh.range,
        Gh = 6e4,
        Vh = 6048e5,
        $h = Hh(
            function (t) {
                t.setTime(t - t.getMilliseconds());
            },
            function (t, n) {
                t.setTime(+t + 1e3 * n);
            },
            function (t, n) {
                return (n - t) / 1e3;
            },
            function (t) {
                return t.getUTCSeconds();
            }
        ),
        Wh = $h.range,
        Zh = Hh(
            function (t) {
                t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
            },
            function (t, n) {
                t.setTime(+t + n * Gh);
            },
            function (t, n) {
                return (n - t) / Gh;
            },
            function (t) {
                return t.getMinutes();
            }
        ),
        Qh = Zh.range,
        Jh = Hh(
            function (t) {
                t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * Gh);
            },
            function (t, n) {
                t.setTime(+t + 36e5 * n);
            },
            function (t, n) {
                return (n - t) / 36e5;
            },
            function (t) {
                return t.getHours();
            }
        ),
        Kh = Jh.range,
        td = Hh(
            function (t) {
                t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setDate(t.getDate() + n);
            },
            function (t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gh) / 864e5;
            },
            function (t) {
                return t.getDate() - 1;
            }
        ),
        nd = td.range;
    function ed(t) {
        return Hh(
            function (n) {
                n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setDate(t.getDate() + 7 * n);
            },
            function (t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gh) / Vh;
            }
        );
    }
    var rd = ed(0),
        id = ed(1),
        od = ed(2),
        ad = ed(3),
        ud = ed(4),
        cd = ed(5),
        fd = ed(6),
        sd = rd.range,
        ld = id.range,
        hd = od.range,
        dd = ad.range,
        pd = ud.range,
        vd = cd.range,
        gd = fd.range,
        yd = Hh(
            function (t) {
                t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setMonth(t.getMonth() + n);
            },
            function (t, n) {
                return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
            },
            function (t) {
                return t.getMonth();
            }
        ),
        _d = yd.range,
        bd = Hh(
            function (t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setFullYear(t.getFullYear() + n);
            },
            function (t, n) {
                return n.getFullYear() - t.getFullYear();
            },
            function (t) {
                return t.getFullYear();
            }
        );
    bd.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
            ? Hh(
                  function (n) {
                      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
                  },
                  function (n, e) {
                      n.setFullYear(n.getFullYear() + e * t);
                  }
              )
            : null;
    };
    var md = bd.range,
        xd = Hh(
            function (t) {
                t.setUTCSeconds(0, 0);
            },
            function (t, n) {
                t.setTime(+t + n * Gh);
            },
            function (t, n) {
                return (n - t) / Gh;
            },
            function (t) {
                return t.getUTCMinutes();
            }
        ),
        wd = xd.range,
        Md = Hh(
            function (t) {
                t.setUTCMinutes(0, 0, 0);
            },
            function (t, n) {
                t.setTime(+t + 36e5 * n);
            },
            function (t, n) {
                return (n - t) / 36e5;
            },
            function (t) {
                return t.getUTCHours();
            }
        ),
        Nd = Md.range,
        Ad = Hh(
            function (t) {
                t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setUTCDate(t.getUTCDate() + n);
            },
            function (t, n) {
                return (n - t) / 864e5;
            },
            function (t) {
                return t.getUTCDate() - 1;
            }
        ),
        Sd = Ad.range;
    function kd(t) {
        return Hh(
            function (n) {
                n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n);
            },
            function (t, n) {
                return (n - t) / Vh;
            }
        );
    }
    var Td = kd(0),
        Ed = kd(1),
        Cd = kd(2),
        Pd = kd(3),
        zd = kd(4),
        Rd = kd(5),
        qd = kd(6),
        Dd = Td.range,
        Ld = Ed.range,
        Ud = Cd.range,
        Od = Pd.range,
        Yd = zd.range,
        Bd = Rd.range,
        Fd = qd.range,
        Id = Hh(
            function (t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setUTCMonth(t.getUTCMonth() + n);
            },
            function (t, n) {
                return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
            },
            function (t) {
                return t.getUTCMonth();
            }
        ),
        Hd = Id.range,
        jd = Hh(
            function (t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n);
            },
            function (t, n) {
                return n.getUTCFullYear() - t.getUTCFullYear();
            },
            function (t) {
                return t.getUTCFullYear();
            }
        );
    jd.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
            ? Hh(
                  function (n) {
                      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
                  },
                  function (n, e) {
                      n.setUTCFullYear(n.getUTCFullYear() + e * t);
                  }
              )
            : null;
    };
    var Xd = jd.range;
    function Gd(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function Vd(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function $d(t) {
        return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
    }
    function Wd(t) {
        var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            f = rp(i),
            s = ip(i),
            l = rp(o),
            h = ip(o),
            d = rp(a),
            p = ip(a),
            v = rp(u),
            g = ip(u),
            y = rp(c),
            _ = ip(c),
            b = {
                a: function (t) {
                    return a[t.getDay()];
                },
                A: function (t) {
                    return o[t.getDay()];
                },
                b: function (t) {
                    return c[t.getMonth()];
                },
                B: function (t) {
                    return u[t.getMonth()];
                },
                c: null,
                d: Np,
                e: Np,
                f: Ep,
                H: Ap,
                I: Sp,
                j: kp,
                L: Tp,
                m: Cp,
                M: Pp,
                p: function (t) {
                    return i[+(t.getHours() >= 12)];
                },
                Q: ov,
                s: av,
                S: zp,
                u: Rp,
                U: qp,
                V: Dp,
                w: Lp,
                W: Up,
                x: null,
                X: null,
                y: Op,
                Y: Yp,
                Z: Bp,
                "%": iv,
            },
            m = {
                a: function (t) {
                    return a[t.getUTCDay()];
                },
                A: function (t) {
                    return o[t.getUTCDay()];
                },
                b: function (t) {
                    return c[t.getUTCMonth()];
                },
                B: function (t) {
                    return u[t.getUTCMonth()];
                },
                c: null,
                d: Fp,
                e: Fp,
                f: Gp,
                H: Ip,
                I: Hp,
                j: jp,
                L: Xp,
                m: Vp,
                M: $p,
                p: function (t) {
                    return i[+(t.getUTCHours() >= 12)];
                },
                Q: ov,
                s: av,
                S: Wp,
                u: Zp,
                U: Qp,
                V: Jp,
                w: Kp,
                W: tv,
                x: null,
                X: null,
                y: nv,
                Y: ev,
                Z: rv,
                "%": iv,
            },
            x = {
                a: function (t, n, e) {
                    var r = d.exec(n.slice(e));
                    return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
                },
                A: function (t, n, e) {
                    var r = l.exec(n.slice(e));
                    return r ? ((t.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
                },
                b: function (t, n, e) {
                    var r = y.exec(n.slice(e));
                    return r ? ((t.m = _[r[0].toLowerCase()]), e + r[0].length) : -1;
                },
                B: function (t, n, e) {
                    var r = v.exec(n.slice(e));
                    return r ? ((t.m = g[r[0].toLowerCase()]), e + r[0].length) : -1;
                },
                c: function (t, e, r) {
                    return N(t, n, e, r);
                },
                d: pp,
                e: pp,
                f: mp,
                H: gp,
                I: gp,
                j: vp,
                L: bp,
                m: dp,
                M: yp,
                p: function (t, n, e) {
                    var r = f.exec(n.slice(e));
                    return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
                },
                Q: wp,
                s: Mp,
                S: _p,
                u: ap,
                U: up,
                V: cp,
                w: op,
                W: fp,
                x: function (t, n, r) {
                    return N(t, e, n, r);
                },
                X: function (t, n, e) {
                    return N(t, r, n, e);
                },
                y: lp,
                Y: sp,
                Z: hp,
                "%": xp,
            };
        function w(t, n) {
            return function (e) {
                var r,
                    i,
                    o,
                    a = [],
                    u = -1,
                    c = 0,
                    f = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++u < f; )
                    37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = Qd[(r = t.charAt(++u))]) ? (r = t.charAt(++u)) : (i = "e" === r ? " " : "0"), (o = n[r]) && (r = o(e, i)), a.push(r), (c = u + 1));
                return a.push(t.slice(c, u)), a.join("");
            };
        }
        function M(t, n) {
            return function (e) {
                var r,
                    i,
                    o = $d(1900);
                if (N(o, t, (e += ""), 0) != e.length) return null;
                if ("Q" in o) return new Date(o.Q);
                if (("p" in o && (o.H = (o.H % 12) + 12 * o.p), "V" in o)) {
                    if (o.V < 1 || o.V > 53) return null;
                    "w" in o || (o.w = 1),
                        "Z" in o
                            ? ((i = (r = Vd($d(o.y))).getUTCDay()),
                              (r = i > 4 || 0 === i ? Ed.ceil(r) : Ed(r)),
                              (r = Ad.offset(r, 7 * (o.V - 1))),
                              (o.y = r.getUTCFullYear()),
                              (o.m = r.getUTCMonth()),
                              (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                            : ((i = (r = n($d(o.y))).getDay()), (r = i > 4 || 0 === i ? id.ceil(r) : id(r)), (r = td.offset(r, 7 * (o.V - 1))), (o.y = r.getFullYear()), (o.m = r.getMonth()), (o.d = r.getDate() + ((o.w + 6) % 7)));
                } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), (i = "Z" in o ? Vd($d(o.y)).getUTCDay() : n($d(o.y)).getDay()), (o.m = 0), (o.d = "W" in o ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7) : o.w + 7 * o.U - ((i + 6) % 7)));
                return "Z" in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Vd(o)) : n(o);
            };
        }
        function N(t, n, e, r) {
            for (var i, o, a = 0, u = n.length, c = e.length; a < u; ) {
                if (r >= c) return -1;
                if (37 === (i = n.charCodeAt(a++))) {
                    if (((i = n.charAt(a++)), !(o = x[i in Qd ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0)) return -1;
                } else if (i != e.charCodeAt(r++)) return -1;
            }
            return r;
        }
        return (
            (b.x = w(e, b)),
            (b.X = w(r, b)),
            (b.c = w(n, b)),
            (m.x = w(e, m)),
            (m.X = w(r, m)),
            (m.c = w(n, m)),
            {
                format: function (t) {
                    var n = w((t += ""), b);
                    return (
                        (n.toString = function () {
                            return t;
                        }),
                        n
                    );
                },
                parse: function (t) {
                    var n = M((t += ""), Gd);
                    return (
                        (n.toString = function () {
                            return t;
                        }),
                        n
                    );
                },
                utcFormat: function (t) {
                    var n = w((t += ""), m);
                    return (
                        (n.toString = function () {
                            return t;
                        }),
                        n
                    );
                },
                utcParse: function (t) {
                    var n = M(t, Vd);
                    return (
                        (n.toString = function () {
                            return t;
                        }),
                        n
                    );
                },
            }
        );
    }
    var Zd,
        Qd = { "-": "", _: " ", 0: "0" },
        Jd = /^\s*\d+/,
        Kd = /^%/,
        tp = /[\\^$*+?|[\]().{}]/g;
    function np(t, n, e) {
        var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
    }
    function ep(t) {
        return t.replace(tp, "\\$&");
    }
    function rp(t) {
        return new RegExp("^(?:" + t.map(ep).join("|") + ")", "i");
    }
    function ip(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r; ) n[t[e].toLowerCase()] = e;
        return n;
    }
    function op(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 1));
        return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function ap(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 1));
        return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function up(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function cp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function fp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function sp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 4));
        return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function lp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
    }
    function hp(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length) : -1;
    }
    function dp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function pp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function vp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function gp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function yp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function _p(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 2));
        return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function bp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 3));
        return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function mp(t, n, e) {
        var r = Jd.exec(n.slice(e, e + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function xp(t, n, e) {
        var r = Kd.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1;
    }
    function wp(t, n, e) {
        var r = Jd.exec(n.slice(e));
        return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function Mp(t, n, e) {
        var r = Jd.exec(n.slice(e));
        return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function Np(t, n) {
        return np(t.getDate(), n, 2);
    }
    function Ap(t, n) {
        return np(t.getHours(), n, 2);
    }
    function Sp(t, n) {
        return np(t.getHours() % 12 || 12, n, 2);
    }
    function kp(t, n) {
        return np(1 + td.count(bd(t), t), n, 3);
    }
    function Tp(t, n) {
        return np(t.getMilliseconds(), n, 3);
    }
    function Ep(t, n) {
        return Tp(t, n) + "000";
    }
    function Cp(t, n) {
        return np(t.getMonth() + 1, n, 2);
    }
    function Pp(t, n) {
        return np(t.getMinutes(), n, 2);
    }
    function zp(t, n) {
        return np(t.getSeconds(), n, 2);
    }
    function Rp(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n;
    }
    function qp(t, n) {
        return np(rd.count(bd(t), t), n, 2);
    }
    function Dp(t, n) {
        var e = t.getDay();
        return (t = e >= 4 || 0 === e ? ud(t) : ud.ceil(t)), np(ud.count(bd(t), t) + (4 === bd(t).getDay()), n, 2);
    }
    function Lp(t) {
        return t.getDay();
    }
    function Up(t, n) {
        return np(id.count(bd(t), t), n, 2);
    }
    function Op(t, n) {
        return np(t.getFullYear() % 100, n, 2);
    }
    function Yp(t, n) {
        return np(t.getFullYear() % 1e4, n, 4);
    }
    function Bp(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : ((n *= -1), "+")) + np((n / 60) | 0, "0", 2) + np(n % 60, "0", 2);
    }
    function Fp(t, n) {
        return np(t.getUTCDate(), n, 2);
    }
    function Ip(t, n) {
        return np(t.getUTCHours(), n, 2);
    }
    function Hp(t, n) {
        return np(t.getUTCHours() % 12 || 12, n, 2);
    }
    function jp(t, n) {
        return np(1 + Ad.count(jd(t), t), n, 3);
    }
    function Xp(t, n) {
        return np(t.getUTCMilliseconds(), n, 3);
    }
    function Gp(t, n) {
        return Xp(t, n) + "000";
    }
    function Vp(t, n) {
        return np(t.getUTCMonth() + 1, n, 2);
    }
    function $p(t, n) {
        return np(t.getUTCMinutes(), n, 2);
    }
    function Wp(t, n) {
        return np(t.getUTCSeconds(), n, 2);
    }
    function Zp(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n;
    }
    function Qp(t, n) {
        return np(Td.count(jd(t), t), n, 2);
    }
    function Jp(t, n) {
        var e = t.getUTCDay();
        return (t = e >= 4 || 0 === e ? zd(t) : zd.ceil(t)), np(zd.count(jd(t), t) + (4 === jd(t).getUTCDay()), n, 2);
    }
    function Kp(t) {
        return t.getUTCDay();
    }
    function tv(t, n) {
        return np(Ed.count(jd(t), t), n, 2);
    }
    function nv(t, n) {
        return np(t.getUTCFullYear() % 100, n, 2);
    }
    function ev(t, n) {
        return np(t.getUTCFullYear() % 1e4, n, 4);
    }
    function rv() {
        return "+0000";
    }
    function iv() {
        return "%";
    }
    function ov(t) {
        return +t;
    }
    function av(t) {
        return Math.floor(+t / 1e3);
    }
    function uv(n) {
        return (Zd = Wd(n)), (t.timeFormat = Zd.format), (t.timeParse = Zd.parse), (t.utcFormat = Zd.utcFormat), (t.utcParse = Zd.utcParse), Zd;
    }
    uv({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    });
    var cv = Date.prototype.toISOString
        ? function (t) {
              return t.toISOString();
          }
        : t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");
    var fv = +new Date("2000-01-01T00:00:00.000Z")
            ? function (t) {
                  var n = new Date(t);
                  return isNaN(n) ? null : n;
              }
            : t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),
        sv = 1e3,
        lv = 60 * sv,
        hv = 60 * lv,
        dv = 24 * hv,
        pv = 7 * dv,
        vv = 30 * dv,
        gv = 365 * dv;
    function yv(t) {
        return new Date(t);
    }
    function _v(t) {
        return t instanceof Date ? +t : +new Date(+t);
    }
    function bv(t, n, r, i, o, a, u, c, f) {
        var s = wh(vh, vh),
            l = s.invert,
            h = s.domain,
            d = f(".%L"),
            p = f(":%S"),
            v = f("%I:%M"),
            g = f("%I %p"),
            y = f("%a %d"),
            _ = f("%b %d"),
            b = f("%B"),
            m = f("%Y"),
            x = [
                [u, 1, sv],
                [u, 5, 5 * sv],
                [u, 15, 15 * sv],
                [u, 30, 30 * sv],
                [a, 1, lv],
                [a, 5, 5 * lv],
                [a, 15, 15 * lv],
                [a, 30, 30 * lv],
                [o, 1, hv],
                [o, 3, 3 * hv],
                [o, 6, 6 * hv],
                [o, 12, 12 * hv],
                [i, 1, dv],
                [i, 2, 2 * dv],
                [r, 1, pv],
                [n, 1, vv],
                [n, 3, 3 * vv],
                [t, 1, gv],
            ];
        function M(e) {
            return (u(e) < e ? d : a(e) < e ? p : o(e) < e ? v : i(e) < e ? g : n(e) < e ? (r(e) < e ? y : _) : t(e) < e ? b : m)(e);
        }
        function N(n, r, i, o) {
            if ((null == n && (n = 10), "number" == typeof n)) {
                var a = Math.abs(i - r) / n,
                    u = e(function (t) {
                        return t[2];
                    }).right(x, a);
                u === x.length ? ((o = w(r / gv, i / gv, n)), (n = t)) : u ? ((o = (u = x[a / x[u - 1][2] < x[u][2] / a ? u - 1 : u])[1]), (n = u[0])) : ((o = Math.max(w(r, i, n), 1)), (n = c));
            }
            return null == o ? n : n.every(o);
        }
        return (
            (s.invert = function (t) {
                return new Date(l(t));
            }),
            (s.domain = function (t) {
                return arguments.length ? h(ch.call(t, _v)) : h().map(yv);
            }),
            (s.ticks = function (t, n) {
                var e,
                    r = h(),
                    i = r[0],
                    o = r[r.length - 1],
                    a = o < i;
                return a && ((e = i), (i = o), (o = e)), (e = (e = N(t, i, o, n)) ? e.range(i, o + 1) : []), a ? e.reverse() : e;
            }),
            (s.tickFormat = function (t, n) {
                return null == n ? M : f(n);
            }),
            (s.nice = function (t, n) {
                var e = h();
                return (t = N(t, e[0], e[e.length - 1], n)) ? h(Ah(e, t)) : s;
            }),
            (s.copy = function () {
                return mh(s, bv(t, n, r, i, o, a, u, c, f));
            }),
            s
        );
    }
    function mv() {
        var t,
            n,
            e,
            r,
            i,
            o = 0,
            a = 1,
            u = vh,
            c = !1;
        function f(n) {
            return isNaN((n = +n)) ? i : u(0 === e ? 0.5 : ((n = (r(n) - t) * e), c ? Math.max(0, Math.min(1, n)) : n));
        }
        return (
            (f.domain = function (i) {
                return arguments.length ? ((t = r((o = +i[0]))), (n = r((a = +i[1]))), (e = t === n ? 0 : 1 / (n - t)), f) : [o, a];
            }),
            (f.clamp = function (t) {
                return arguments.length ? ((c = !!t), f) : c;
            }),
            (f.interpolator = function (t) {
                return arguments.length ? ((u = t), f) : u;
            }),
            (f.unknown = function (t) {
                return arguments.length ? ((i = t), f) : i;
            }),
            function (i) {
                return (r = i), (t = i(o)), (n = i(a)), (e = t === n ? 0 : 1 / (n - t)), f;
            }
        );
    }
    function xv(t, n) {
        return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
    }
    function wv() {
        var t = Yh(mv());
        return (
            (t.copy = function () {
                return xv(t, wv()).exponent(t.exponent());
            }),
            ah.apply(t, arguments)
        );
    }
    function Mv() {
        var t,
            n,
            e,
            r,
            i,
            o,
            a,
            u = 0,
            c = 0.5,
            f = 1,
            s = vh,
            l = !1;
        function h(t) {
            return isNaN((t = +t)) ? a : ((t = 0.5 + ((t = +o(t)) - n) * (t < n ? r : i)), s(l ? Math.max(0, Math.min(1, t)) : t));
        }
        return (
            (h.domain = function (a) {
                return arguments.length ? ((t = o((u = +a[0]))), (n = o((c = +a[1]))), (e = o((f = +a[2]))), (r = t === n ? 0 : 0.5 / (n - t)), (i = n === e ? 0 : 0.5 / (e - n)), h) : [u, c, f];
            }),
            (h.clamp = function (t) {
                return arguments.length ? ((l = !!t), h) : l;
            }),
            (h.interpolator = function (t) {
                return arguments.length ? ((s = t), h) : s;
            }),
            (h.unknown = function (t) {
                return arguments.length ? ((a = t), h) : a;
            }),
            function (a) {
                return (o = a), (t = a(u)), (n = a(c)), (e = a(f)), (r = t === n ? 0 : 0.5 / (n - t)), (i = n === e ? 0 : 0.5 / (e - n)), h;
            }
        );
    }
    function Nv() {
        var t = Yh(Mv());
        return (
            (t.copy = function () {
                return xv(t, Nv()).exponent(t.exponent());
            }),
            ah.apply(t, arguments)
        );
    }
    function Av(t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; ) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e;
    }
    var Sv = Av("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        kv = Av("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        Tv = Av("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        Ev = Av("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
        Cv = Av("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        Pv = Av("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        zv = Av("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        Rv = Av("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        qv = Av("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    function Dv(t) {
        return ce(t[t.length - 1]);
    }
    var Lv = new Array(3)
            .concat(
                "d8b365f5f5f55ab4ac",
                "a6611adfc27d80cdc1018571",
                "a6611adfc27df5f5f580cdc1018571",
                "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
                "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
                "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
                "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
                "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
                "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
            )
            .map(Av),
        Uv = Dv(Lv),
        Ov = new Array(3)
            .concat(
                "af8dc3f7f7f77fbf7b",
                "7b3294c2a5cfa6dba0008837",
                "7b3294c2a5cff7f7f7a6dba0008837",
                "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
                "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
                "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
                "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
                "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
                "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
            )
            .map(Av),
        Yv = Dv(Ov),
        Bv = new Array(3)
            .concat(
                "e9a3c9f7f7f7a1d76a",
                "d01c8bf1b6dab8e1864dac26",
                "d01c8bf1b6daf7f7f7b8e1864dac26",
                "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
                "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
                "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
                "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
                "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
                "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
            )
            .map(Av),
        Fv = Dv(Bv),
        Iv = new Array(3)
            .concat(
                "998ec3f7f7f7f1a340",
                "5e3c99b2abd2fdb863e66101",
                "5e3c99b2abd2f7f7f7fdb863e66101",
                "542788998ec3d8daebfee0b6f1a340b35806",
                "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
                "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
                "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
                "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
                "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
            )
            .map(Av),
        Hv = Dv(Iv),
        jv = new Array(3)
            .concat(
                "ef8a62f7f7f767a9cf",
                "ca0020f4a58292c5de0571b0",
                "ca0020f4a582f7f7f792c5de0571b0",
                "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
                "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
                "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
                "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
                "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
                "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
            )
            .map(Av),
        Xv = Dv(jv),
        Gv = new Array(3)
            .concat(
                "ef8a62ffffff999999",
                "ca0020f4a582bababa404040",
                "ca0020f4a582ffffffbababa404040",
                "b2182bef8a62fddbc7e0e0e09999994d4d4d",
                "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
                "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
                "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
                "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
                "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
            )
            .map(Av),
        Vv = Dv(Gv),
        $v = new Array(3)
            .concat(
                "fc8d59ffffbf91bfdb",
                "d7191cfdae61abd9e92c7bb6",
                "d7191cfdae61ffffbfabd9e92c7bb6",
                "d73027fc8d59fee090e0f3f891bfdb4575b4",
                "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
                "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
                "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
                "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
                "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
            )
            .map(Av),
        Wv = Dv($v),
        Zv = new Array(3)
            .concat(
                "fc8d59ffffbf91cf60",
                "d7191cfdae61a6d96a1a9641",
                "d7191cfdae61ffffbfa6d96a1a9641",
                "d73027fc8d59fee08bd9ef8b91cf601a9850",
                "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
                "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
                "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
                "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
                "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
            )
            .map(Av),
        Qv = Dv(Zv),
        Jv = new Array(3)
            .concat(
                "fc8d59ffffbf99d594",
                "d7191cfdae61abdda42b83ba",
                "d7191cfdae61ffffbfabdda42b83ba",
                "d53e4ffc8d59fee08be6f59899d5943288bd",
                "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
                "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
                "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
                "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
                "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
            )
            .map(Av),
        Kv = Dv(Jv),
        tg = new Array(3)
            .concat(
                "e5f5f999d8c92ca25f",
                "edf8fbb2e2e266c2a4238b45",
                "edf8fbb2e2e266c2a42ca25f006d2c",
                "edf8fbccece699d8c966c2a42ca25f006d2c",
                "edf8fbccece699d8c966c2a441ae76238b45005824",
                "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
                "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
            )
            .map(Av),
        ng = Dv(tg),
        eg = new Array(3)
            .concat(
                "e0ecf49ebcda8856a7",
                "edf8fbb3cde38c96c688419d",
                "edf8fbb3cde38c96c68856a7810f7c",
                "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
                "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
                "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
                "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
            )
            .map(Av),
        rg = Dv(eg),
        ig = new Array(3)
            .concat(
                "e0f3dba8ddb543a2ca",
                "f0f9e8bae4bc7bccc42b8cbe",
                "f0f9e8bae4bc7bccc443a2ca0868ac",
                "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
                "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
                "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
                "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
            )
            .map(Av),
        og = Dv(ig),
        ag = new Array(3)
            .concat(
                "fee8c8fdbb84e34a33",
                "fef0d9fdcc8afc8d59d7301f",
                "fef0d9fdcc8afc8d59e34a33b30000",
                "fef0d9fdd49efdbb84fc8d59e34a33b30000",
                "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
                "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
                "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
            )
            .map(Av),
        ug = Dv(ag),
        cg = new Array(3)
            .concat(
                "ece2f0a6bddb1c9099",
                "f6eff7bdc9e167a9cf02818a",
                "f6eff7bdc9e167a9cf1c9099016c59",
                "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
                "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
                "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
                "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
            )
            .map(Av),
        fg = Dv(cg),
        sg = new Array(3)
            .concat(
                "ece7f2a6bddb2b8cbe",
                "f1eef6bdc9e174a9cf0570b0",
                "f1eef6bdc9e174a9cf2b8cbe045a8d",
                "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
                "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
                "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
                "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
            )
            .map(Av),
        lg = Dv(sg),
        hg = new Array(3)
            .concat(
                "e7e1efc994c7dd1c77",
                "f1eef6d7b5d8df65b0ce1256",
                "f1eef6d7b5d8df65b0dd1c77980043",
                "f1eef6d4b9dac994c7df65b0dd1c77980043",
                "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
                "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
                "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
            )
            .map(Av),
        dg = Dv(hg),
        pg = new Array(3)
            .concat(
                "fde0ddfa9fb5c51b8a",
                "feebe2fbb4b9f768a1ae017e",
                "feebe2fbb4b9f768a1c51b8a7a0177",
                "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
                "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
                "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
                "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
            )
            .map(Av),
        vg = Dv(pg),
        gg = new Array(3)
            .concat(
                "edf8b17fcdbb2c7fb8",
                "ffffcca1dab441b6c4225ea8",
                "ffffcca1dab441b6c42c7fb8253494",
                "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
                "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
                "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
                "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
            )
            .map(Av),
        yg = Dv(gg),
        _g = new Array(3)
            .concat(
                "f7fcb9addd8e31a354",
                "ffffccc2e69978c679238443",
                "ffffccc2e69978c67931a354006837",
                "ffffccd9f0a3addd8e78c67931a354006837",
                "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
                "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
                "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
            )
            .map(Av),
        bg = Dv(_g),
        mg = new Array(3)
            .concat(
                "fff7bcfec44fd95f0e",
                "ffffd4fed98efe9929cc4c02",
                "ffffd4fed98efe9929d95f0e993404",
                "ffffd4fee391fec44ffe9929d95f0e993404",
                "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
                "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
                "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
            )
            .map(Av),
        xg = Dv(mg),
        wg = new Array(3)
            .concat(
                "ffeda0feb24cf03b20",
                "ffffb2fecc5cfd8d3ce31a1c",
                "ffffb2fecc5cfd8d3cf03b20bd0026",
                "ffffb2fed976feb24cfd8d3cf03b20bd0026",
                "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
                "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
                "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
            )
            .map(Av),
        Mg = Dv(wg),
        Ng = new Array(3)
            .concat(
                "deebf79ecae13182bd",
                "eff3ffbdd7e76baed62171b5",
                "eff3ffbdd7e76baed63182bd08519c",
                "eff3ffc6dbef9ecae16baed63182bd08519c",
                "eff3ffc6dbef9ecae16baed64292c62171b5084594",
                "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
                "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
            )
            .map(Av),
        Ag = Dv(Ng),
        Sg = new Array(3)
            .concat(
                "e5f5e0a1d99b31a354",
                "edf8e9bae4b374c476238b45",
                "edf8e9bae4b374c47631a354006d2c",
                "edf8e9c7e9c0a1d99b74c47631a354006d2c",
                "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
                "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
                "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
            )
            .map(Av),
        kg = Dv(Sg),
        Tg = new Array(3)
            .concat(
                "f0f0f0bdbdbd636363",
                "f7f7f7cccccc969696525252",
                "f7f7f7cccccc969696636363252525",
                "f7f7f7d9d9d9bdbdbd969696636363252525",
                "f7f7f7d9d9d9bdbdbd969696737373525252252525",
                "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
                "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
            )
            .map(Av),
        Eg = Dv(Tg),
        Cg = new Array(3)
            .concat(
                "efedf5bcbddc756bb1",
                "f2f0f7cbc9e29e9ac86a51a3",
                "f2f0f7cbc9e29e9ac8756bb154278f",
                "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
                "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
                "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
                "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
            )
            .map(Av),
        Pg = Dv(Cg),
        zg = new Array(3)
            .concat(
                "fee0d2fc9272de2d26",
                "fee5d9fcae91fb6a4acb181d",
                "fee5d9fcae91fb6a4ade2d26a50f15",
                "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
                "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
                "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
                "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
            )
            .map(Av),
        Rg = Dv(zg),
        qg = new Array(3)
            .concat(
                "fee6cefdae6be6550d",
                "feeddefdbe85fd8d3cd94701",
                "feeddefdbe85fd8d3ce6550da63603",
                "feeddefdd0a2fdae6bfd8d3ce6550da63603",
                "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
                "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
                "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
            )
            .map(Av),
        Dg = Dv(qg),
        Lg = He(Zn(300, 0.5, 0), Zn(-240, 0.5, 1)),
        Ug = He(Zn(-100, 0.75, 0.35), Zn(80, 1.5, 0.8)),
        Og = He(Zn(260, 0.75, 0.35), Zn(80, 1.5, 0.8)),
        Yg = Zn();
    var Bg = gn(),
        Fg = Math.PI / 3,
        Ig = (2 * Math.PI) / 3;
    function Hg(t) {
        var n = t.length;
        return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
    }
    var jg = Hg(
            Av(
                "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
            )
        ),
        Xg = Hg(
            Av(
                "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
            )
        ),
        Gg = Hg(
            Av(
                "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
            )
        ),
        Vg = Hg(
            Av(
                "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
            )
        );
    function $g(t) {
        return function () {
            return t;
        };
    }
    var Wg = Math.abs,
        Zg = Math.atan2,
        Qg = Math.cos,
        Jg = Math.max,
        Kg = Math.min,
        ty = Math.sin,
        ny = Math.sqrt,
        ey = 1e-12,
        ry = Math.PI,
        iy = ry / 2,
        oy = 2 * ry;
    function ay(t) {
        return t >= 1 ? iy : t <= -1 ? -iy : Math.asin(t);
    }
    function uy(t) {
        return t.innerRadius;
    }
    function cy(t) {
        return t.outerRadius;
    }
    function fy(t) {
        return t.startAngle;
    }
    function sy(t) {
        return t.endAngle;
    }
    function ly(t) {
        return t && t.padAngle;
    }
    function hy(t, n, e, r, i, o, a) {
        var u = t - e,
            c = n - r,
            f = (a ? o : -o) / ny(u * u + c * c),
            s = f * c,
            l = -f * u,
            h = t + s,
            d = n + l,
            p = e + s,
            v = r + l,
            g = (h + p) / 2,
            y = (d + v) / 2,
            _ = p - h,
            b = v - d,
            m = _ * _ + b * b,
            x = i - o,
            w = h * v - p * d,
            M = (b < 0 ? -1 : 1) * ny(Jg(0, x * x * m - w * w)),
            N = (w * b - _ * M) / m,
            A = (-w * _ - b * M) / m,
            S = (w * b + _ * M) / m,
            k = (-w * _ + b * M) / m,
            T = N - g,
            E = A - y,
            C = S - g,
            P = k - y;
        return T * T + E * E > C * C + P * P && ((N = S), (A = k)), { cx: N, cy: A, x01: -s, y01: -l, x11: N * (i / x - 1), y11: A * (i / x - 1) };
    }
    function dy(t) {
        this._context = t;
    }
    function py(t) {
        return new dy(t);
    }
    function vy(t) {
        return t[0];
    }
    function gy(t) {
        return t[1];
    }
    function yy() {
        var t = vy,
            n = gy,
            e = $g(!0),
            r = null,
            i = py,
            o = null;
        function a(a) {
            var u,
                c,
                f,
                s = a.length,
                l = !1;
            for (null == r && (o = i((f = ji()))), u = 0; u <= s; ++u) !(u < s && e((c = a[u]), u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a));
            if (f) return (o = null), f + "" || null;
        }
        return (
            (a.x = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : $g(+n)), a) : t;
            }),
            (a.y = function (t) {
                return arguments.length ? ((n = "function" == typeof t ? t : $g(+t)), a) : n;
            }),
            (a.defined = function (t) {
                return arguments.length ? ((e = "function" == typeof t ? t : $g(!!t)), a) : e;
            }),
            (a.curve = function (t) {
                return arguments.length ? ((i = t), null != r && (o = i(r)), a) : i;
            }),
            (a.context = function (t) {
                return arguments.length ? (null == t ? (r = o = null) : (o = i((r = t))), a) : r;
            }),
            a
        );
    }
    function _y() {
        var t = vy,
            n = null,
            e = $g(0),
            r = gy,
            i = $g(!0),
            o = null,
            a = py,
            u = null;
        function c(c) {
            var f,
                s,
                l,
                h,
                d,
                p = c.length,
                v = !1,
                g = new Array(p),
                y = new Array(p);
            for (null == o && (u = a((d = ji()))), f = 0; f <= p; ++f) {
                if (!(f < p && i((h = c[f]), f, c)) === v)
                    if ((v = !v)) (s = f), u.areaStart(), u.lineStart();
                    else {
                        for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(g[l], y[l]);
                        u.lineEnd(), u.areaEnd();
                    }
                v && ((g[f] = +t(h, f, c)), (y[f] = +e(h, f, c)), u.point(n ? +n(h, f, c) : g[f], r ? +r(h, f, c) : y[f]));
            }
            if (d) return (u = null), d + "" || null;
        }
        function f() {
            return yy().defined(i).curve(a).context(o);
        }
        return (
            (c.x = function (e) {
                return arguments.length ? ((t = "function" == typeof e ? e : $g(+e)), (n = null), c) : t;
            }),
            (c.x0 = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : $g(+n)), c) : t;
            }),
            (c.x1 = function (t) {
                return arguments.length ? ((n = null == t ? null : "function" == typeof t ? t : $g(+t)), c) : n;
            }),
            (c.y = function (t) {
                return arguments.length ? ((e = "function" == typeof t ? t : $g(+t)), (r = null), c) : e;
            }),
            (c.y0 = function (t) {
                return arguments.length ? ((e = "function" == typeof t ? t : $g(+t)), c) : e;
            }),
            (c.y1 = function (t) {
                return arguments.length ? ((r = null == t ? null : "function" == typeof t ? t : $g(+t)), c) : r;
            }),
            (c.lineX0 = c.lineY0 = function () {
                return f().x(t).y(e);
            }),
            (c.lineY1 = function () {
                return f().x(t).y(r);
            }),
            (c.lineX1 = function () {
                return f().x(n).y(e);
            }),
            (c.defined = function (t) {
                return arguments.length ? ((i = "function" == typeof t ? t : $g(!!t)), c) : i;
            }),
            (c.curve = function (t) {
                return arguments.length ? ((a = t), null != o && (u = a(o)), c) : a;
            }),
            (c.context = function (t) {
                return arguments.length ? (null == t ? (o = u = null) : (u = a((o = t))), c) : o;
            }),
            c
        );
    }
    function by(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    }
    function my(t) {
        return t;
    }
    dy.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
                case 0:
                    (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n);
            }
        },
    };
    var xy = My(py);
    function wy(t) {
        this._curve = t;
    }
    function My(t) {
        function n(n) {
            return new wy(t(n));
        }
        return (n._curve = t), n;
    }
    function Ny(t) {
        var n = t.curve;
        return (
            (t.angle = t.x),
            delete t.x,
            (t.radius = t.y),
            delete t.y,
            (t.curve = function (t) {
                return arguments.length ? n(My(t)) : n()._curve;
            }),
            t
        );
    }
    function Ay() {
        return Ny(yy().curve(xy));
    }
    function Sy() {
        var t = _y().curve(xy),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
        return (
            (t.angle = t.x),
            delete t.x,
            (t.startAngle = t.x0),
            delete t.x0,
            (t.endAngle = t.x1),
            delete t.x1,
            (t.radius = t.y),
            delete t.y,
            (t.innerRadius = t.y0),
            delete t.y0,
            (t.outerRadius = t.y1),
            delete t.y1,
            (t.lineStartAngle = function () {
                return Ny(e());
            }),
            delete t.lineX0,
            (t.lineEndAngle = function () {
                return Ny(r());
            }),
            delete t.lineX1,
            (t.lineInnerRadius = function () {
                return Ny(i());
            }),
            delete t.lineY0,
            (t.lineOuterRadius = function () {
                return Ny(o());
            }),
            delete t.lineY1,
            (t.curve = function (t) {
                return arguments.length ? n(My(t)) : n()._curve;
            }),
            t
        );
    }
    function ky(t, n) {
        return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
    }
    wy.prototype = {
        areaStart: function () {
            this._curve.areaStart();
        },
        areaEnd: function () {
            this._curve.areaEnd();
        },
        lineStart: function () {
            this._curve.lineStart();
        },
        lineEnd: function () {
            this._curve.lineEnd();
        },
        point: function (t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
    };
    var Ty = Array.prototype.slice;
    function Ey(t) {
        return t.source;
    }
    function Cy(t) {
        return t.target;
    }
    function Py(t) {
        var n = Ey,
            e = Cy,
            r = vy,
            i = gy,
            o = null;
        function a() {
            var a,
                u = Ty.call(arguments),
                c = n.apply(this, u),
                f = e.apply(this, u);
            if ((o || (o = a = ji()), t(o, +r.apply(this, ((u[0] = c), u)), +i.apply(this, u), +r.apply(this, ((u[0] = f), u)), +i.apply(this, u)), a)) return (o = null), a + "" || null;
        }
        return (
            (a.source = function (t) {
                return arguments.length ? ((n = t), a) : n;
            }),
            (a.target = function (t) {
                return arguments.length ? ((e = t), a) : e;
            }),
            (a.x = function (t) {
                return arguments.length ? ((r = "function" == typeof t ? t : $g(+t)), a) : r;
            }),
            (a.y = function (t) {
                return arguments.length ? ((i = "function" == typeof t ? t : $g(+t)), a) : i;
            }),
            (a.context = function (t) {
                return arguments.length ? ((o = null == t ? null : t), a) : o;
            }),
            a
        );
    }
    function zy(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
    }
    function Ry(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
    }
    function qy(t, n, e, r, i) {
        var o = ky(n, e),
            a = ky(n, (e = (e + i) / 2)),
            u = ky(r, e),
            c = ky(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], c[0], c[1]);
    }
    var Dy = {
            draw: function (t, n) {
                var e = Math.sqrt(n / ry);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, oy);
            },
        },
        Ly = {
            draw: function (t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e),
                    t.lineTo(-e, -e),
                    t.lineTo(-e, -3 * e),
                    t.lineTo(e, -3 * e),
                    t.lineTo(e, -e),
                    t.lineTo(3 * e, -e),
                    t.lineTo(3 * e, e),
                    t.lineTo(e, e),
                    t.lineTo(e, 3 * e),
                    t.lineTo(-e, 3 * e),
                    t.lineTo(-e, e),
                    t.lineTo(-3 * e, e),
                    t.closePath();
            },
        },
        Uy = Math.sqrt(1 / 3),
        Oy = 2 * Uy,
        Yy = {
            draw: function (t, n) {
                var e = Math.sqrt(n / Oy),
                    r = e * Uy;
                t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
            },
        },
        By = Math.sin(ry / 10) / Math.sin((7 * ry) / 10),
        Fy = Math.sin(oy / 10) * By,
        Iy = -Math.cos(oy / 10) * By,
        Hy = {
            draw: function (t, n) {
                var e = Math.sqrt(0.8908130915292852 * n),
                    r = Fy * e,
                    i = Iy * e;
                t.moveTo(0, -e), t.lineTo(r, i);
                for (var o = 1; o < 5; ++o) {
                    var a = (oy * o) / 5,
                        u = Math.cos(a),
                        c = Math.sin(a);
                    t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i);
                }
                t.closePath();
            },
        },
        jy = {
            draw: function (t, n) {
                var e = Math.sqrt(n),
                    r = -e / 2;
                t.rect(r, r, e, e);
            },
        },
        Xy = Math.sqrt(3),
        Gy = {
            draw: function (t, n) {
                var e = -Math.sqrt(n / (3 * Xy));
                t.moveTo(0, 2 * e), t.lineTo(-Xy * e, -e), t.lineTo(Xy * e, -e), t.closePath();
            },
        },
        Vy = Math.sqrt(3) / 2,
        $y = 1 / Math.sqrt(12),
        Wy = 3 * ($y / 2 + 1),
        Zy = {
            draw: function (t, n) {
                var e = Math.sqrt(n / Wy),
                    r = e / 2,
                    i = e * $y,
                    o = r,
                    a = e * $y + e,
                    u = -o,
                    c = a;
                t.moveTo(r, i),
                    t.lineTo(o, a),
                    t.lineTo(u, c),
                    t.lineTo(-0.5 * r - Vy * i, Vy * r + -0.5 * i),
                    t.lineTo(-0.5 * o - Vy * a, Vy * o + -0.5 * a),
                    t.lineTo(-0.5 * u - Vy * c, Vy * u + -0.5 * c),
                    t.lineTo(-0.5 * r + Vy * i, -0.5 * i - Vy * r),
                    t.lineTo(-0.5 * o + Vy * a, -0.5 * a - Vy * o),
                    t.lineTo(-0.5 * u + Vy * c, -0.5 * c - Vy * u),
                    t.closePath();
            },
        },
        Qy = [Dy, Ly, Yy, jy, Hy, Gy, Zy];
    function Jy() {}
    function Ky(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
    }
    function t_(t) {
        this._context = t;
    }
    function n_(t) {
        this._context = t;
    }
    function e_(t) {
        this._context = t;
    }
    function r_(t, n) {
        (this._basis = new t_(t)), (this._beta = n);
    }
    (t_.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
            switch (this._point) {
                case 3:
                    Ky(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
                case 0:
                    (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    (this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    Ky(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
        },
    }),
        (n_.prototype = {
            areaStart: Jy,
            areaEnd: Jy,
            lineStart: function () {
                (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN), (this._point = 0);
            },
            lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                }
            },
            point: function (t, n) {
                switch (((t = +t), (n = +n), this._point)) {
                    case 0:
                        (this._point = 1), (this._x2 = t), (this._y2 = n);
                        break;
                    case 1:
                        (this._point = 2), (this._x3 = t), (this._y3 = n);
                        break;
                    case 2:
                        (this._point = 3), (this._x4 = t), (this._y4 = n), this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        Ky(this, t, n);
                }
                (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
            },
        }),
        (e_.prototype = {
            areaStart: function () {
                this._line = 0;
            },
            areaEnd: function () {
                this._line = NaN;
            },
            lineStart: function () {
                (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
            },
            lineEnd: function () {
                (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
            },
            point: function (t, n) {
                switch (((t = +t), (n = +n), this._point)) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                            r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Ky(this, t, n);
                }
                (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
            },
        }),
        (r_.prototype = {
            lineStart: function () {
                (this._x = []), (this._y = []), this._basis.lineStart();
            },
            lineEnd: function () {
                var t = this._x,
                    n = this._y,
                    e = t.length - 1;
                if (e > 0)
                    for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e; ) (r = c / e), this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
                (this._x = this._y = null), this._basis.lineEnd();
            },
            point: function (t, n) {
                this._x.push(+t), this._y.push(+n);
            },
        });
    var i_ = (function t(n) {
        function e(t) {
            return 1 === n ? new t_(t) : new r_(t, n);
        }
        return (
            (e.beta = function (n) {
                return t(+n);
            }),
            e
        );
    })(0.85);
    function o_(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
    }
    function a_(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
    }
    a_.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
        },
        lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    o_(this, this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
                case 0:
                    (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    (this._point = 2), (this._x1 = t), (this._y1 = n);
                    break;
                case 2:
                    this._point = 3;
                default:
                    o_(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t), (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
    };
    var u_ = (function t(n) {
        function e(t) {
            return new a_(t, n);
        }
        return (
            (e.tension = function (n) {
                return t(+n);
            }),
            e
        );
    })(0);
    function c_(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
    }
    c_.prototype = {
        areaStart: Jy,
        areaEnd: Jy,
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN), (this._point = 0);
        },
        lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
            }
        },
        point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
                case 0:
                    (this._point = 1), (this._x3 = t), (this._y3 = n);
                    break;
                case 1:
                    (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
                    break;
                case 2:
                    (this._point = 3), (this._x5 = t), (this._y5 = n);
                    break;
                default:
                    o_(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t), (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
    };
    var f_ = (function t(n) {
        function e(t) {
            return new c_(t, n);
        }
        return (
            (e.tension = function (n) {
                return t(+n);
            }),
            e
        );
    })(0);
    function s_(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
    }
    s_.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
        },
        lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    (this._point = 3), this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    o_(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t), (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
    };
    var l_ = (function t(n) {
        function e(t) {
            return new s_(t, n);
        }
        return (
            (e.tension = function (n) {
                return t(+n);
            }),
            e
        );
    })(0);
    function h_(t, n, e) {
        var r = t._x1,
            i = t._y1,
            o = t._x2,
            a = t._y2;
        if (t._l01_a > ey) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            (r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c), (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
        }
        if (t._l23_a > ey) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            (o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s), (a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
        }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
    }
    function d_(t, n) {
        (this._context = t), (this._alpha = n);
    }
    d_.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
            }
            switch (this._point) {
                case 0:
                    (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    h_(this, t, n);
            }
            (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = n);
        },
    };
    var p_ = (function t(n) {
        function e(t) {
            return n ? new d_(t, n) : new a_(t, 0);
        }
        return (
            (e.alpha = function (n) {
                return t(+n);
            }),
            e
        );
    })(0.5);
    function v_(t, n) {
        (this._context = t), (this._alpha = n);
    }
    v_.prototype = {
        areaStart: Jy,
        areaEnd: Jy,
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
            }
        },
        point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
            }
            switch (this._point) {
                case 0:
                    (this._point = 1), (this._x3 = t), (this._y3 = n);
                    break;
                case 1:
                    (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
                    break;
                case 2:
                    (this._point = 3), (this._x5 = t), (this._y5 = n);
                    break;
                default:
                    h_(this, t, n);
            }
            (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = n);
        },
    };
    var g_ = (function t(n) {
        function e(t) {
            return n ? new v_(t, n) : new c_(t, 0);
        }
        return (
            (e.alpha = function (n) {
                return t(+n);
            }),
            e
        );
    })(0.5);
    function y_(t, n) {
        (this._context = t), (this._alpha = n);
    }
    y_.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
        },
        point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    (this._point = 3), this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    h_(this, t, n);
            }
            (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = n);
        },
    };
    var __ = (function t(n) {
        function e(t) {
            return n ? new y_(t, n) : new s_(t, 0);
        }
        return (
            (e.alpha = function (n) {
                return t(+n);
            }),
            e
        );
    })(0.5);
    function b_(t) {
        this._context = t;
    }
    function m_(t) {
        return t < 0 ? -1 : 1;
    }
    function x_(t, n, e) {
        var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
            a = (e - t._y1) / (i || (r < 0 && -0)),
            u = (o * i + a * r) / (r + i);
        return (m_(o) + m_(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
    }
    function w_(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
    }
    function M_(t, n, e) {
        var r = t._x0,
            i = t._y0,
            o = t._x1,
            a = t._y1,
            u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
    }
    function N_(t) {
        this._context = t;
    }
    function A_(t) {
        this._context = new S_(t);
    }
    function S_(t) {
        this._context = t;
    }
    function k_(t) {
        this._context = t;
    }
    function T_(t) {
        var n,
            e,
            r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            a = new Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) (i[n] = 1), (o[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]);
        for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) (e = i[n] / o[n - 1]), (o[n] -= e), (a[n] -= e * a[n - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o];
    }
    function E_(t, n) {
        (this._context = t), (this._t = n);
    }
    function C_(t, n) {
        if ((i = t.length) > 1) for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o) for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
    }
    function P_(t) {
        for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
    }
    function z_(t, n) {
        return t[n];
    }
    function R_(t) {
        var n = t.map(q_);
        return P_(t).sort(function (t, e) {
            return n[t] - n[e];
        });
    }
    function q_(t) {
        for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; ) (n = +t[e][1]) > o && ((o = n), (r = e));
        return r;
    }
    function D_(t) {
        var n = t.map(L_);
        return P_(t).sort(function (t, e) {
            return n[t] - n[e];
        });
    }
    function L_(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i; ) (n = +t[r][1]) && (e += n);
        return e;
    }
    function U_(t) {
        return function () {
            return t;
        };
    }
    function O_(t) {
        return t[0];
    }
    function Y_(t) {
        return t[1];
    }
    function B_() {
        this._ = null;
    }
    function F_(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function I_(t, n) {
        var e = n,
            r = n.R,
            i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r), (r.U = i), (e.U = r), (e.R = r.L), e.R && (e.R.U = e), (r.L = e);
    }
    function H_(t, n) {
        var e = n,
            r = n.L,
            i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r), (r.U = i), (e.U = r), (e.L = r.R), e.L && (e.L.U = e), (r.R = e);
    }
    function j_(t) {
        for (; t.L; ) t = t.L;
        return t;
    }
    function X_(t, n, e, r) {
        var i = [null, null],
            o = vb.push(i) - 1;
        return (i.left = t), (i.right = n), e && V_(i, t, n, e), r && V_(i, n, t, r), db[t.index].halfedges.push(o), db[n.index].halfedges.push(o), i;
    }
    function G_(t, n, e) {
        var r = [n, e];
        return (r.left = t), r;
    }
    function V_(t, n, e, r) {
        t[0] || t[1] ? (t.left === e ? (t[1] = r) : (t[0] = r)) : ((t[0] = r), (t.left = n), (t.right = e));
    }
    function $_(t, n, e, r, i) {
        var o,
            a = t[0],
            u = t[1],
            c = a[0],
            f = a[1],
            s = 0,
            l = 1,
            h = u[0] - c,
            d = u[1] - f;
        if (((o = n - c), h || !(o > 0))) {
            if (((o /= h), h < 0)) {
                if (o < s) return;
                o < l && (l = o);
            } else if (h > 0) {
                if (o > l) return;
                o > s && (s = o);
            }
            if (((o = r - c), h || !(o < 0))) {
                if (((o /= h), h < 0)) {
                    if (o > l) return;
                    o > s && (s = o);
                } else if (h > 0) {
                    if (o < s) return;
                    o < l && (l = o);
                }
                if (((o = e - f), d || !(o > 0))) {
                    if (((o /= d), d < 0)) {
                        if (o < s) return;
                        o < l && (l = o);
                    } else if (d > 0) {
                        if (o > l) return;
                        o > s && (s = o);
                    }
                    if (((o = i - f), d || !(o < 0))) {
                        if (((o /= d), d < 0)) {
                            if (o > l) return;
                            o > s && (s = o);
                        } else if (d > 0) {
                            if (o < s) return;
                            o < l && (l = o);
                        }
                        return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0);
                    }
                }
            }
        }
    }
    function W_(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var a,
            u,
            c = t[0],
            f = t.left,
            s = t.right,
            l = f[0],
            h = f[1],
            d = s[0],
            p = s[1],
            v = (l + d) / 2,
            g = (h + p) / 2;
        if (p === h) {
            if (v < n || v >= r) return;
            if (l > d) {
                if (c) {
                    if (c[1] >= i) return;
                } else c = [v, e];
                o = [v, i];
            } else {
                if (c) {
                    if (c[1] < e) return;
                } else c = [v, i];
                o = [v, e];
            }
        } else if (((u = g - (a = (l - d) / (p - h)) * v), a < -1 || a > 1))
            if (l > d) {
                if (c) {
                    if (c[1] >= i) return;
                } else c = [(e - u) / a, e];
                o = [(i - u) / a, i];
            } else {
                if (c) {
                    if (c[1] < e) return;
                } else c = [(i - u) / a, i];
                o = [(e - u) / a, e];
            }
        else if (h < p) {
            if (c) {
                if (c[0] >= r) return;
            } else c = [n, a * n + u];
            o = [r, a * r + u];
        } else {
            if (c) {
                if (c[0] < n) return;
            } else c = [r, a * r + u];
            o = [n, a * n + u];
        }
        return (t[0] = c), (t[1] = o), !0;
    }
    function Z_(t, n) {
        var e = t.site,
            r = n.left,
            i = n.right;
        return e === i && ((i = r), (r = e)), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])), Math.atan2(r[0] - i[0], i[1] - r[1]));
    }
    function Q_(t, n) {
        return n[+(n.left !== t.site)];
    }
    function J_(t, n) {
        return n[+(n.left === t.site)];
    }
    (b_.prototype = {
        areaStart: Jy,
        areaEnd: Jy,
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            this._point && this._context.closePath();
        },
        point: function (t, n) {
            (t = +t), (n = +n), this._point ? this._context.lineTo(t, n) : ((this._point = 1), this._context.moveTo(t, n));
        },
    }),
        (N_.prototype = {
            areaStart: function () {
                this._line = 0;
            },
            areaEnd: function () {
                this._line = NaN;
            },
            lineStart: function () {
                (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
            },
            lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        M_(this, this._t0, w_(this, this._t0));
                }
                (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
            },
            point: function (t, n) {
                var e = NaN;
                if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
                    switch (this._point) {
                        case 0:
                            (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            (this._point = 3), M_(this, w_(this, (e = x_(this, t, n))), e);
                            break;
                        default:
                            M_(this, this._t0, (e = x_(this, t, n)));
                    }
                    (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n), (this._t0 = e);
                }
            },
        }),
        ((A_.prototype = Object.create(N_.prototype)).point = function (t, n) {
            N_.prototype.point.call(this, n, t);
        }),
        (S_.prototype = {
            moveTo: function (t, n) {
                this._context.moveTo(n, t);
            },
            closePath: function () {
                this._context.closePath();
            },
            lineTo: function (t, n) {
                this._context.lineTo(n, t);
            },
            bezierCurveTo: function (t, n, e, r, i, o) {
                this._context.bezierCurveTo(n, t, r, e, o, i);
            },
        }),
        (k_.prototype = {
            areaStart: function () {
                this._line = 0;
            },
            areaEnd: function () {
                this._line = NaN;
            },
            lineStart: function () {
                (this._x = []), (this._y = []);
            },
            lineEnd: function () {
                var t = this._x,
                    n = this._y,
                    e = t.length;
                if (e)
                    if ((this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e)) this._context.lineTo(t[1], n[1]);
                    else for (var r = T_(t), i = T_(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
                (this._line || (0 !== this._line && 1 === e)) && this._context.closePath(), (this._line = 1 - this._line), (this._x = this._y = null);
            },
            point: function (t, n) {
                this._x.push(+t), this._y.push(+n);
            },
        }),
        (E_.prototype = {
            areaStart: function () {
                this._line = 0;
            },
            areaEnd: function () {
                this._line = NaN;
            },
            lineStart: function () {
                (this._x = this._y = NaN), (this._point = 0);
            },
            lineEnd: function () {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
                    (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                    this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
            },
            point: function (t, n) {
                switch (((t = +t), (n = +n), this._point)) {
                    case 0:
                        (this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n);
                        }
                }
                (this._x = t), (this._y = n);
            },
        }),
        (B_.prototype = {
            constructor: B_,
            insert: function (t, n) {
                var e, r, i;
                if (t) {
                    if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
                        for (t = t.R; t.L; ) t = t.L;
                        t.L = n;
                    } else t.R = n;
                    e = t;
                } else this._ ? ((t = j_(this._)), (n.P = null), (n.N = t), (t.P = t.L = n), (e = t)) : ((n.P = n.N = null), (this._ = n), (e = null));
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
                    e === (r = e.U).L
                        ? (i = r.R) && i.C
                            ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                            : (t === e.R && (I_(this, e), (e = (t = e).U)), (e.C = !1), (r.C = !0), H_(this, r))
                        : (i = r.L) && i.C
                        ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                        : (t === e.L && (H_(this, e), (e = (t = e).U)), (e.C = !1), (r.C = !0), I_(this, r)),
                        (e = t.U);
                this._.C = !1;
            },
            remove: function (t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
                var n,
                    e,
                    r,
                    i = t.U,
                    o = t.L,
                    a = t.R;
                if (
                    ((e = o ? (a ? j_(a) : o) : a),
                    i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
                    o && a ? ((r = e.C), (e.C = t.C), (e.L = o), (o.U = e), e !== a ? ((i = e.U), (e.U = t.U), (t = e.R), (i.L = t), (e.R = a), (a.U = e)) : ((e.U = i), (i = e), (t = e.R))) : ((r = t.C), (t = e)),
                    t && (t.U = i),
                    !r)
                )
                    if (t && t.C) t.C = !1;
                    else {
                        do {
                            if (t === this._) break;
                            if (t === i.L) {
                                if (((n = i.R).C && ((n.C = !1), (i.C = !0), I_(this, i), (n = i.R)), (n.L && n.L.C) || (n.R && n.R.C))) {
                                    (n.R && n.R.C) || ((n.L.C = !1), (n.C = !0), H_(this, n), (n = i.R)), (n.C = i.C), (i.C = n.R.C = !1), I_(this, i), (t = this._);
                                    break;
                                }
                            } else if (((n = i.L).C && ((n.C = !1), (i.C = !0), H_(this, i), (n = i.L)), (n.L && n.L.C) || (n.R && n.R.C))) {
                                (n.L && n.L.C) || ((n.R.C = !1), (n.C = !0), I_(this, n), (n = i.L)), (n.C = i.C), (i.C = n.L.C = !1), H_(this, i), (t = this._);
                                break;
                            }
                            (n.C = !0), (t = i), (i = i.U);
                        } while (!t.C);
                        t && (t.C = !1);
                    }
            },
        });
    var K_,
        tb = [];
    function nb() {
        F_(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function eb(t) {
        var n = t.P,
            e = t.N;
        if (n && e) {
            var r = n.site,
                i = t.site,
                o = e.site;
            if (r !== o) {
                var a = i[0],
                    u = i[1],
                    c = r[0] - a,
                    f = r[1] - u,
                    s = o[0] - a,
                    l = o[1] - u,
                    h = 2 * (c * l - f * s);
                if (!(h >= -yb)) {
                    var d = c * c + f * f,
                        p = s * s + l * l,
                        v = (l * d - f * p) / h,
                        g = (c * p - s * d) / h,
                        y = tb.pop() || new nb();
                    (y.arc = t), (y.site = i), (y.x = v + a), (y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g)), (t.circle = y);
                    for (var _ = null, b = pb._; b; )
                        if (y.y < b.y || (y.y === b.y && y.x <= b.x)) {
                            if (!b.L) {
                                _ = b.P;
                                break;
                            }
                            b = b.L;
                        } else {
                            if (!b.R) {
                                _ = b;
                                break;
                            }
                            b = b.R;
                        }
                    pb.insert(_, y), _ || (K_ = y);
                }
            }
        }
    }
    function rb(t) {
        var n = t.circle;
        n && (n.P || (K_ = n.N), pb.remove(n), tb.push(n), F_(n), (t.circle = null));
    }
    var ib = [];
    function ob() {
        F_(this), (this.edge = this.site = this.circle = null);
    }
    function ab(t) {
        var n = ib.pop() || new ob();
        return (n.site = t), n;
    }
    function ub(t) {
        rb(t), hb.remove(t), ib.push(t), F_(t);
    }
    function cb(t) {
        var n = t.circle,
            e = n.x,
            r = n.cy,
            i = [e, r],
            o = t.P,
            a = t.N,
            u = [t];
        ub(t);
        for (var c = o; c.circle && Math.abs(e - c.circle.x) < gb && Math.abs(r - c.circle.cy) < gb; ) (o = c.P), u.unshift(c), ub(c), (c = o);
        u.unshift(c), rb(c);
        for (var f = a; f.circle && Math.abs(e - f.circle.x) < gb && Math.abs(r - f.circle.cy) < gb; ) (a = f.N), u.push(f), ub(f), (f = a);
        u.push(f), rb(f);
        var s,
            l = u.length;
        for (s = 1; s < l; ++s) (f = u[s]), (c = u[s - 1]), V_(f.edge, c.site, f.site, i);
        (c = u[0]), ((f = u[l - 1]).edge = X_(c.site, f.site, null, i)), eb(c), eb(f);
    }
    function fb(t) {
        for (var n, e, r, i, o = t[0], a = t[1], u = hb._; u; )
            if ((r = sb(u, a) - o) > gb) u = u.L;
            else {
                if (!((i = o - lb(u, a)) > gb)) {
                    r > -gb ? ((n = u.P), (e = u)) : i > -gb ? ((n = u), (e = u.N)) : (n = e = u);
                    break;
                }
                if (!u.R) {
                    n = u;
                    break;
                }
                u = u.R;
            }
        !(function (t) {
            db[t.index] = { site: t, halfedges: [] };
        })(t);
        var c = ab(t);
        if ((hb.insert(n, c), n || e)) {
            if (n === e) return rb(n), (e = ab(n.site)), hb.insert(c, e), (c.edge = e.edge = X_(n.site, c.site)), eb(n), void eb(e);
            if (e) {
                rb(n), rb(e);
                var f = n.site,
                    s = f[0],
                    l = f[1],
                    h = t[0] - s,
                    d = t[1] - l,
                    p = e.site,
                    v = p[0] - s,
                    g = p[1] - l,
                    y = 2 * (h * g - d * v),
                    _ = h * h + d * d,
                    b = v * v + g * g,
                    m = [(g * _ - d * b) / y + s, (h * b - v * _) / y + l];
                V_(e.edge, f, p, m), (c.edge = X_(f, t, null, m)), (e.edge = X_(t, p, null, m)), eb(n), eb(e);
            } else c.edge = X_(n.site, c.site);
        }
    }
    function sb(t, n) {
        var e = t.site,
            r = e[0],
            i = e[1],
            o = i - n;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        var u = (e = a.site)[0],
            c = e[1],
            f = c - n;
        if (!f) return u;
        var s = u - r,
            l = 1 / o - 1 / f,
            h = s / f;
        return l ? (-h + Math.sqrt(h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + u) / 2;
    }
    function lb(t, n) {
        var e = t.N;
        if (e) return sb(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0;
    }
    var hb,
        db,
        pb,
        vb,
        gb = 1e-6,
        yb = 1e-12;
    function _b(t, n) {
        return n[1] - t[1] || n[0] - t[0];
    }
    function bb(t, n) {
        var e,
            r,
            i,
            o = t.sort(_b).pop();
        for (vb = [], db = new Array(t.length), hb = new B_(), pb = new B_(); ; )
            if (((i = K_), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x)))) (o[0] === e && o[1] === r) || (fb(o), (e = o[0]), (r = o[1])), (o = t.pop());
            else {
                if (!i) break;
                cb(i.arc);
            }
        if (
            ((function () {
                for (var t, n, e, r, i = 0, o = db.length; i < o; ++i)
                    if ((t = db[i]) && (r = (n = t.halfedges).length)) {
                        var a = new Array(r),
                            u = new Array(r);
                        for (e = 0; e < r; ++e) (a[e] = e), (u[e] = Z_(t, vb[n[e]]));
                        for (
                            a.sort(function (t, n) {
                                return u[n] - u[t];
                            }),
                                e = 0;
                            e < r;
                            ++e
                        )
                            u[e] = n[a[e]];
                        for (e = 0; e < r; ++e) n[e] = u[e];
                    }
            })(),
            n)
        ) {
            var a = +n[0][0],
                u = +n[0][1],
                c = +n[1][0],
                f = +n[1][1];
            !(function (t, n, e, r) {
                for (var i, o = vb.length; o--; ) (W_((i = vb[o]), t, n, e, r) && $_(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > gb || Math.abs(i[0][1] - i[1][1]) > gb)) || delete vb[o];
            })(a, u, c, f),
                (function (t, n, e, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        g = db.length,
                        y = !0;
                    for (i = 0; i < g; ++i)
                        if ((o = db[i])) {
                            for (a = o.site, u = (c = o.halfedges).length; u--; ) vb[c[u]] || c.splice(u, 1);
                            for (u = 0, f = c.length; u < f; )
                                (p = (d = J_(o, vb[c[u]]))[0]),
                                    (v = d[1]),
                                    (l = (s = Q_(o, vb[c[++u % f]]))[0]),
                                    (h = s[1]),
                                    (Math.abs(p - l) > gb || Math.abs(v - h) > gb) &&
                                        (c.splice(
                                            u,
                                            0,
                                            vb.push(
                                                G_(
                                                    a,
                                                    d,
                                                    Math.abs(p - t) < gb && r - v > gb
                                                        ? [t, Math.abs(l - t) < gb ? h : r]
                                                        : Math.abs(v - r) < gb && e - p > gb
                                                        ? [Math.abs(h - r) < gb ? l : e, r]
                                                        : Math.abs(p - e) < gb && v - n > gb
                                                        ? [e, Math.abs(l - e) < gb ? h : n]
                                                        : Math.abs(v - n) < gb && p - t > gb
                                                        ? [Math.abs(h - n) < gb ? l : t, n]
                                                        : null
                                                )
                                            ) - 1
                                        ),
                                        ++f);
                            f && (y = !1);
                        }
                    if (y) {
                        var _,
                            b,
                            m,
                            x = 1 / 0;
                        for (i = 0, y = null; i < g; ++i) (o = db[i]) && (m = (_ = (a = o.site)[0] - t) * _ + (b = a[1] - n) * b) < x && ((x = m), (y = o));
                        if (y) {
                            var w = [t, n],
                                M = [t, r],
                                N = [e, r],
                                A = [e, n];
                            y.halfedges.push(vb.push(G_((a = y.site), w, M)) - 1, vb.push(G_(a, M, N)) - 1, vb.push(G_(a, N, A)) - 1, vb.push(G_(a, A, w)) - 1);
                        }
                    }
                    for (i = 0; i < g; ++i) (o = db[i]) && (o.halfedges.length || delete db[i]);
                })(a, u, c, f);
        }
        (this.edges = vb), (this.cells = db), (hb = pb = vb = db = null);
    }
    function mb(t) {
        return function () {
            return t;
        };
    }
    function xb(t, n, e) {
        (this.target = t), (this.type = n), (this.transform = e);
    }
    function wb(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
    }
    (bb.prototype = {
        constructor: bb,
        polygons: function () {
            var t = this.edges;
            return this.cells.map(function (n) {
                var e = n.halfedges.map(function (e) {
                    return Q_(n, t[e]);
                });
                return (e.data = n.site.data), e;
            });
        },
        triangles: function () {
            var t = [],
                n = this.edges;
            return (
                this.cells.forEach(function (e, r) {
                    if ((o = (i = e.halfedges).length))
                        for (var i, o, a, u, c, f, s = e.site, l = -1, h = n[i[o - 1]], d = h.left === s ? h.right : h.left; ++l < o; )
                            (a = d),
                                (d = (h = n[i[l]]).left === s ? h.right : h.left),
                                a && d && r < a.index && r < d.index && ((c = a), (f = d), ((u = s)[0] - f[0]) * (c[1] - u[1]) - (u[0] - c[0]) * (f[1] - u[1]) < 0) && t.push([s.data, a.data, d.data]);
                }),
                t
            );
        },
        links: function () {
            return this.edges
                .filter(function (t) {
                    return t.right;
                })
                .map(function (t) {
                    return { source: t.left.data, target: t.right.data };
                });
        },
        find: function (t, n, e) {
            for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]); ) if (++a >= u) return null;
            var c = t - i.site[0],
                f = n - i.site[1],
                s = c * c + f * f;
            do {
                (i = o.cells[(r = a)]),
                    (a = null),
                    i.halfedges.forEach(function (e) {
                        var r = o.edges[e],
                            u = r.left;
                        if ((u !== i.site && u) || (u = r.right)) {
                            var c = t - u[0],
                                f = n - u[1],
                                l = c * c + f * f;
                            l < s && ((s = l), (a = u.index));
                        }
                    });
            } while (null !== a);
            return (o._found = r), null == e || s <= e * e ? i.site : null;
        },
    }),
        (wb.prototype = {
            constructor: wb,
            scale: function (t) {
                return 1 === t ? this : new wb(this.k * t, this.x, this.y);
            },
            translate: function (t, n) {
                return (0 === t) & (0 === n) ? this : new wb(this.k, this.x + this.k * t, this.y + this.k * n);
            },
            apply: function (t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y];
            },
            applyX: function (t) {
                return t * this.k + this.x;
            },
            applyY: function (t) {
                return t * this.k + this.y;
            },
            invert: function (t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
            },
            invertX: function (t) {
                return (t - this.x) / this.k;
            },
            invertY: function (t) {
                return (t - this.y) / this.k;
            },
            rescaleX: function (t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
            },
            rescaleY: function (t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
            },
            toString: function () {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
            },
        });
    var Mb = new wb(1, 0, 0);
    function Nb(t) {
        return t.__zoom || Mb;
    }
    function Ab() {
        t.event.stopImmediatePropagation();
    }
    function Sb() {
        t.event.preventDefault(), t.event.stopImmediatePropagation();
    }
    function kb() {
        return !t.event.button;
    }
    function Tb() {
        var t,
            n,
            e = this;
        return (
            e instanceof SVGElement ? ((t = (e = e.ownerSVGElement || e).width.baseVal.value), (n = e.height.baseVal.value)) : ((t = e.clientWidth), (n = e.clientHeight)),
            [
                [0, 0],
                [t, n],
            ]
        );
    }
    function Eb() {
        return this.__zoom || Mb;
    }
    function Cb() {
        return (-t.event.deltaY * (t.event.deltaMode ? 120 : 1)) / 500;
    }
    function Pb() {
        return "ontouchstart" in this;
    }
    function zb(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
            i = t.invertX(n[1][0]) - e[1][0],
            o = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a));
    }
    (Nb.prototype = wb.prototype),
        (t.version = "5.8.2"),
        (t.bisect = i),
        (t.bisectRight = i),
        (t.bisectLeft = o),
        (t.ascending = n),
        (t.bisector = e),
        (t.cross = function (t, n, e) {
            var r,
                i,
                o,
                u,
                c = t.length,
                f = n.length,
                s = new Array(c * f);
            for (null == e && (e = a), r = o = 0; r < c; ++r) for (u = t[r], i = 0; i < f; ++i, ++o) s[o] = e(u, n[i]);
            return s;
        }),
        (t.descending = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        }),
        (t.deviation = f),
        (t.extent = s),
        (t.histogram = function () {
            var t = v,
                n = s,
                e = M;
            function r(r) {
                var o,
                    a,
                    u = r.length,
                    c = new Array(u);
                for (o = 0; o < u; ++o) c[o] = t(r[o], o, r);
                var f = n(c),
                    s = f[0],
                    l = f[1],
                    h = e(c, s, l);
                Array.isArray(h) || ((h = w(s, l, h)), (h = g(Math.ceil(s / h) * h, l, h)));
                for (var d = h.length; h[0] <= s; ) h.shift(), --d;
                for (; h[d - 1] > l; ) h.pop(), --d;
                var p,
                    v = new Array(d + 1);
                for (o = 0; o <= d; ++o) ((p = v[o] = []).x0 = o > 0 ? h[o - 1] : s), (p.x1 = o < d ? h[o] : l);
                for (o = 0; o < u; ++o) s <= (a = c[o]) && a <= l && v[i(h, a, 0, d)].push(r[o]);
                return v;
            }
            return (
                (r.value = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : p(n)), r) : t;
                }),
                (r.domain = function (t) {
                    return arguments.length ? ((n = "function" == typeof t ? t : p([t[0], t[1]])), r) : n;
                }),
                (r.thresholds = function (t) {
                    return arguments.length ? ((e = "function" == typeof t ? t : Array.isArray(t) ? p(h.call(t)) : p(t)), r) : e;
                }),
                r
            );
        }),
        (t.thresholdFreedmanDiaconis = function (t, e, r) {
            return (t = d.call(t, u).sort(n)), Math.ceil((r - e) / (2 * (N(t, 0.75) - N(t, 0.25)) * Math.pow(t.length, -1 / 3)));
        }),
        (t.thresholdScott = function (t, n, e) {
            return Math.ceil((e - n) / (3.5 * f(t) * Math.pow(t.length, -1 / 3)));
        }),
        (t.thresholdSturges = M),
        (t.max = A),
        (t.mean = function (t, n) {
            var e,
                r = t.length,
                i = r,
                o = -1,
                a = 0;
            if (null == n) for (; ++o < r; ) isNaN((e = u(t[o]))) ? --i : (a += e);
            else for (; ++o < r; ) isNaN((e = u(n(t[o], o, t)))) ? --i : (a += e);
            if (i) return a / i;
        }),
        (t.median = function (t, e) {
            var r,
                i = t.length,
                o = -1,
                a = [];
            if (null == e) for (; ++o < i; ) isNaN((r = u(t[o]))) || a.push(r);
            else for (; ++o < i; ) isNaN((r = u(e(t[o], o, t)))) || a.push(r);
            return N(a.sort(n), 0.5);
        }),
        (t.merge = S),
        (t.min = k),
        (t.pairs = function (t, n) {
            null == n && (n = a);
            for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r; ) o[e] = n(i, (i = t[++e]));
            return o;
        }),
        (t.permute = function (t, n) {
            for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
            return r;
        }),
        (t.quantile = N),
        (t.range = g),
        (t.scan = function (t, e) {
            if ((r = t.length)) {
                var r,
                    i,
                    o = 0,
                    a = 0,
                    u = t[a];
                for (null == e && (e = n); ++o < r; ) (e((i = t[o]), u) < 0 || 0 !== e(u, u)) && ((u = i), (a = o));
                return 0 === e(u, u) ? a : void 0;
            }
        }),
        (t.shuffle = function (t, n, e) {
            for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o; ) (i = (Math.random() * o--) | 0), (r = t[o + n]), (t[o + n] = t[i + n]), (t[i + n] = r);
            return t;
        }),
        (t.sum = function (t, n) {
            var e,
                r = t.length,
                i = -1,
                o = 0;
            if (null == n) for (; ++i < r; ) (e = +t[i]) && (o += e);
            else for (; ++i < r; ) (e = +n(t[i], i, t)) && (o += e);
            return o;
        }),
        (t.ticks = m),
        (t.tickIncrement = x),
        (t.tickStep = w),
        (t.transpose = T),
        (t.variance = c),
        (t.zip = function () {
            return T(arguments);
        }),
        (t.axisTop = function (t) {
            return B(z, t);
        }),
        (t.axisRight = function (t) {
            return B(R, t);
        }),
        (t.axisBottom = function (t) {
            return B(q, t);
        }),
        (t.axisLeft = function (t) {
            return B(D, t);
        }),
        (t.brush = function () {
            return Pi(mi);
        }),
        (t.brushX = function () {
            return Pi(_i);
        }),
        (t.brushY = function () {
            return Pi(bi);
        }),
        (t.brushSelection = function (t) {
            var n = t.__brush;
            return n ? n.dim.output(n.selection) : null;
        }),
        (t.chord = function () {
            var t = 0,
                n = null,
                e = null,
                r = null;
            function i(i) {
                var o,
                    a,
                    u,
                    c,
                    f,
                    s,
                    l = i.length,
                    h = [],
                    d = g(l),
                    p = [],
                    v = [],
                    y = (v.groups = new Array(l)),
                    _ = new Array(l * l);
                for (o = 0, f = -1; ++f < l; ) {
                    for (a = 0, s = -1; ++s < l; ) a += i[f][s];
                    h.push(a), p.push(g(l)), (o += a);
                }
                for (
                    n &&
                        d.sort(function (t, e) {
                            return n(h[t], h[e]);
                        }),
                        e &&
                            p.forEach(function (t, n) {
                                t.sort(function (t, r) {
                                    return e(i[n][t], i[n][r]);
                                });
                            }),
                        c = (o = Ui(0, Li - t * l) / o) ? t : Li / l,
                        a = 0,
                        f = -1;
                    ++f < l;

                ) {
                    for (u = a, s = -1; ++s < l; ) {
                        var b = d[f],
                            m = p[b][s],
                            x = i[b][m],
                            w = a,
                            M = (a += x * o);
                        _[m * l + b] = { index: b, subindex: m, startAngle: w, endAngle: M, value: x };
                    }
                    (y[b] = { index: b, startAngle: u, endAngle: a, value: h[b] }), (a += c);
                }
                for (f = -1; ++f < l; )
                    for (s = f - 1; ++s < l; ) {
                        var N = _[s * l + f],
                            A = _[f * l + s];
                        (N.value || A.value) && v.push(N.value < A.value ? { source: A, target: N } : { source: N, target: A });
                    }
                return r ? v.sort(r) : v;
            }
            return (
                (i.padAngle = function (n) {
                    return arguments.length ? ((t = Ui(0, n)), i) : t;
                }),
                (i.sortGroups = function (t) {
                    return arguments.length ? ((n = t), i) : n;
                }),
                (i.sortSubgroups = function (t) {
                    return arguments.length ? ((e = t), i) : e;
                }),
                (i.sortChords = function (t) {
                    return arguments.length
                        ? (null == t
                              ? (r = null)
                              : (((n = t),
                                (r = function (t, e) {
                                    return n(t.source.value + t.target.value, e.source.value + e.target.value);
                                }))._ = t),
                          i)
                        : r && r._;
                    var n;
                }),
                i
            );
        }),
        (t.ribbon = function () {
            var t = Xi,
                n = Gi,
                e = Vi,
                r = $i,
                i = Wi,
                o = null;
            function a() {
                var a,
                    u = Oi.call(arguments),
                    c = t.apply(this, u),
                    f = n.apply(this, u),
                    s = +e.apply(this, ((u[0] = c), u)),
                    l = r.apply(this, u) - Di,
                    h = i.apply(this, u) - Di,
                    d = s * zi(l),
                    p = s * Ri(l),
                    v = +e.apply(this, ((u[0] = f), u)),
                    g = r.apply(this, u) - Di,
                    y = i.apply(this, u) - Di;
                if ((o || (o = a = ji()), o.moveTo(d, p), o.arc(0, 0, s, l, h), (l === g && h === y) || (o.quadraticCurveTo(0, 0, v * zi(g), v * Ri(g)), o.arc(0, 0, v, g, y)), o.quadraticCurveTo(0, 0, d, p), o.closePath(), a))
                    return (o = null), a + "" || null;
            }
            return (
                (a.radius = function (t) {
                    return arguments.length ? ((e = "function" == typeof t ? t : Yi(+t)), a) : e;
                }),
                (a.startAngle = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : Yi(+t)), a) : r;
                }),
                (a.endAngle = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : Yi(+t)), a) : i;
                }),
                (a.source = function (n) {
                    return arguments.length ? ((t = n), a) : t;
                }),
                (a.target = function (t) {
                    return arguments.length ? ((n = t), a) : n;
                }),
                (a.context = function (t) {
                    return arguments.length ? ((o = null == t ? null : t), a) : o;
                }),
                a
            );
        }),
        (t.nest = function () {
            var t,
                n,
                e,
                r = [],
                i = [];
            function o(e, i, a, u) {
                if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
                for (var c, f, s, l = -1, h = e.length, d = r[i++], p = Qi(), v = a(); ++l < h; ) (s = p.get((c = d((f = e[l])) + ""))) ? s.push(f) : p.set(c, [f]);
                return (
                    p.each(function (t, n) {
                        u(v, n, o(t, i, a, u));
                    }),
                    v
                );
            }
            return (e = {
                object: function (t) {
                    return o(t, 0, Ji, Ki);
                },
                map: function (t) {
                    return o(t, 0, to, no);
                },
                entries: function (t) {
                    return (function t(e, o) {
                        if (++o > r.length) return e;
                        var a,
                            u = i[o - 1];
                        return (
                            null != n && o >= r.length
                                ? (a = e.entries())
                                : ((a = []),
                                  e.each(function (n, e) {
                                      a.push({ key: e, values: t(n, o) });
                                  })),
                            null != u
                                ? a.sort(function (t, n) {
                                      return u(t.key, n.key);
                                  })
                                : a
                        );
                    })(o(t, 0, to, no), 0);
                },
                key: function (t) {
                    return r.push(t), e;
                },
                sortKeys: function (t) {
                    return (i[r.length - 1] = t), e;
                },
                sortValues: function (n) {
                    return (t = n), e;
                },
                rollup: function (t) {
                    return (n = t), e;
                },
            });
        }),
        (t.set = io),
        (t.map = Qi),
        (t.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return n;
        }),
        (t.values = function (t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n;
        }),
        (t.entries = function (t) {
            var n = [];
            for (var e in t) n.push({ key: e, value: t[e] });
            return n;
        }),
        (t.color = hn),
        (t.rgb = gn),
        (t.hsl = mn),
        (t.lab = Rn),
        (t.hcl = Bn),
        (t.lch = function (t, n, e, r) {
            return 1 === arguments.length ? Yn(t) : new Fn(e, n, t, null == r ? 1 : r);
        }),
        (t.gray = function (t, n) {
            return new qn(t, 0, 0, null == n ? 1 : n);
        }),
        (t.cubehelix = Zn),
        (t.contours = po),
        (t.contourDensity = function () {
            var t = yo,
                n = _o,
                e = bo,
                r = 960,
                i = 500,
                o = 20,
                a = 2,
                u = 3 * o,
                c = (r + 2 * u) >> a,
                f = (i + 2 * u) >> a,
                s = uo(20);
            function l(r) {
                var i = new Float32Array(c * f),
                    l = new Float32Array(c * f);
                r.forEach(function (r, o, s) {
                    var l = (+t(r, o, s) + u) >> a,
                        h = (+n(r, o, s) + u) >> a,
                        d = +e(r, o, s);
                    l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d);
                }),
                    vo({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
                    go({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a),
                    vo({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
                    go({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a),
                    vo({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a),
                    go({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a);
                var d = s(i);
                if (!Array.isArray(d)) {
                    var p = A(i);
                    (d = w(0, p, d)), (d = g(0, Math.floor(p / d) * d, d)).shift();
                }
                return po().thresholds(d).size([c, f])(i).map(h);
            }
            function h(t) {
                return (t.value *= Math.pow(2, -2 * a)), t.coordinates.forEach(d), t;
            }
            function d(t) {
                t.forEach(p);
            }
            function p(t) {
                t.forEach(v);
            }
            function v(t) {
                (t[0] = t[0] * Math.pow(2, a) - u), (t[1] = t[1] * Math.pow(2, a) - u);
            }
            function y() {
                return (c = (r + 2 * (u = 3 * o)) >> a), (f = (i + 2 * u) >> a), l;
            }
            return (
                (l.x = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : uo(+n)), l) : t;
                }),
                (l.y = function (t) {
                    return arguments.length ? ((n = "function" == typeof t ? t : uo(+t)), l) : n;
                }),
                (l.weight = function (t) {
                    return arguments.length ? ((e = "function" == typeof t ? t : uo(+t)), l) : e;
                }),
                (l.size = function (t) {
                    if (!arguments.length) return [r, i];
                    var n = Math.ceil(t[0]),
                        e = Math.ceil(t[1]);
                    if (!(n >= 0 || n >= 0)) throw new Error("invalid size");
                    return (r = n), (i = e), y();
                }),
                (l.cellSize = function (t) {
                    if (!arguments.length) return 1 << a;
                    if (!((t = +t) >= 1)) throw new Error("invalid cell size");
                    return (a = Math.floor(Math.log(t) / Math.LN2)), y();
                }),
                (l.thresholds = function (t) {
                    return arguments.length ? ((s = "function" == typeof t ? t : Array.isArray(t) ? uo(oo.call(t)) : uo(t)), l) : s;
                }),
                (l.bandwidth = function (t) {
                    if (!arguments.length) return Math.sqrt(o * (o + 1));
                    if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
                    return (o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2)), y();
                }),
                l
            );
        }),
        (t.dispatch = I),
        (t.drag = function () {
            var n,
                e,
                r,
                i,
                o = Gt,
                a = Vt,
                u = $t,
                c = Wt,
                f = {},
                s = I("start", "drag", "end"),
                l = 0,
                h = 0;
            function d(t) {
                t.on("mousedown.drag", p).filter(c).on("touchstart.drag", y).on("touchmove.drag", _).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
            }
            function p() {
                if (!i && o.apply(this, arguments)) {
                    var u = m("mouse", a.apply(this, arguments), Ot, this, arguments);
                    u && (zt(t.event.view).on("mousemove.drag", v, !0).on("mouseup.drag", g, !0), It(t.event.view), Bt(), (r = !1), (n = t.event.clientX), (e = t.event.clientY), u("start"));
                }
            }
            function v() {
                if ((Ft(), !r)) {
                    var i = t.event.clientX - n,
                        o = t.event.clientY - e;
                    r = i * i + o * o > h;
                }
                f.mouse("drag");
            }
            function g() {
                zt(t.event.view).on("mousemove.drag mouseup.drag", null), Ht(t.event.view, r), Ft(), f.mouse("end");
            }
            function y() {
                if (o.apply(this, arguments)) {
                    var n,
                        e,
                        r = t.event.changedTouches,
                        i = a.apply(this, arguments),
                        u = r.length;
                    for (n = 0; n < u; ++n) (e = m(r[n].identifier, i, Yt, this, arguments)) && (Bt(), e("start"));
                }
            }
            function _() {
                var n,
                    e,
                    r = t.event.changedTouches,
                    i = r.length;
                for (n = 0; n < i; ++n) (e = f[r[n].identifier]) && (Ft(), e("drag"));
            }
            function b() {
                var n,
                    e,
                    r = t.event.changedTouches,
                    o = r.length;
                for (
                    i && clearTimeout(i),
                        i = setTimeout(function () {
                            i = null;
                        }, 500),
                        n = 0;
                    n < o;
                    ++n
                )
                    (e = f[r[n].identifier]) && (Bt(), e("end"));
            }
            function m(n, e, r, i, o) {
                var a,
                    c,
                    h,
                    p = r(e, n),
                    v = s.copy();
                if (
                    kt(new Xt(d, "beforestart", a, n, l, p[0], p[1], 0, 0, v), function () {
                        return null != (t.event.subject = a = u.apply(i, o)) && ((c = a.x - p[0] || 0), (h = a.y - p[1] || 0), !0);
                    })
                )
                    return function t(u) {
                        var s,
                            g = p;
                        switch (u) {
                            case "start":
                                (f[n] = t), (s = l++);
                                break;
                            case "end":
                                delete f[n], --l;
                            case "drag":
                                (p = r(e, n)), (s = l);
                        }
                        kt(new Xt(d, u, a, n, s, p[0] + c, p[1] + h, p[0] - g[0], p[1] - g[1], v), v.apply, v, [u, i, o]);
                    };
            }
            return (
                (d.filter = function (t) {
                    return arguments.length ? ((o = "function" == typeof t ? t : jt(!!t)), d) : o;
                }),
                (d.container = function (t) {
                    return arguments.length ? ((a = "function" == typeof t ? t : jt(t)), d) : a;
                }),
                (d.subject = function (t) {
                    return arguments.length ? ((u = "function" == typeof t ? t : jt(t)), d) : u;
                }),
                (d.touchable = function (t) {
                    return arguments.length ? ((c = "function" == typeof t ? t : jt(!!t)), d) : c;
                }),
                (d.on = function () {
                    var t = s.on.apply(s, arguments);
                    return t === s ? d : t;
                }),
                (d.clickDistance = function (t) {
                    return arguments.length ? ((h = (t = +t) * t), d) : Math.sqrt(h);
                }),
                d
            );
        }),
        (t.dragDisable = It),
        (t.dragEnable = Ht),
        (t.dsvFormat = So),
        (t.csvParse = To),
        (t.csvParseRows = Eo),
        (t.csvFormat = Co),
        (t.csvFormatRows = Po),
        (t.tsvParse = Ro),
        (t.tsvParseRows = qo),
        (t.tsvFormat = Do),
        (t.tsvFormatRows = Lo),
        (t.easeLinear = function (t) {
            return +t;
        }),
        (t.easeQuad = Rr),
        (t.easeQuadIn = function (t) {
            return t * t;
        }),
        (t.easeQuadOut = function (t) {
            return t * (2 - t);
        }),
        (t.easeQuadInOut = Rr),
        (t.easeCubic = qr),
        (t.easeCubicIn = function (t) {
            return t * t * t;
        }),
        (t.easeCubicOut = function (t) {
            return --t * t * t + 1;
        }),
        (t.easeCubicInOut = qr),
        (t.easePoly = Ur),
        (t.easePolyIn = Dr),
        (t.easePolyOut = Lr),
        (t.easePolyInOut = Ur),
        (t.easeSin = Br),
        (t.easeSinIn = function (t) {
            return 1 - Math.cos(t * Yr);
        }),
        (t.easeSinOut = function (t) {
            return Math.sin(t * Yr);
        }),
        (t.easeSinInOut = Br),
        (t.easeExp = Fr),
        (t.easeExpIn = function (t) {
            return Math.pow(2, 10 * t - 10);
        }),
        (t.easeExpOut = function (t) {
            return 1 - Math.pow(2, -10 * t);
        }),
        (t.easeExpInOut = Fr),
        (t.easeCircle = Ir),
        (t.easeCircleIn = function (t) {
            return 1 - Math.sqrt(1 - t * t);
        }),
        (t.easeCircleOut = function (t) {
            return Math.sqrt(1 - --t * t);
        }),
        (t.easeCircleInOut = Ir),
        (t.easeBounce = Kr),
        (t.easeBounceIn = function (t) {
            return 1 - Kr(1 - t);
        }),
        (t.easeBounceOut = Kr),
        (t.easeBounceInOut = function (t) {
            return ((t *= 2) <= 1 ? 1 - Kr(1 - t) : Kr(t - 1) + 1) / 2;
        }),
        (t.easeBack = ei),
        (t.easeBackIn = ti),
        (t.easeBackOut = ni),
        (t.easeBackInOut = ei),
        (t.easeElastic = oi),
        (t.easeElasticIn = ii),
        (t.easeElasticOut = oi),
        (t.easeElasticInOut = ai),
        (t.blob = function (t, n) {
            return fetch(t, n).then(Uo);
        }),
        (t.buffer = function (t, n) {
            return fetch(t, n).then(Oo);
        }),
        (t.dsv = function (t, n, e, r) {
            3 === arguments.length && "function" == typeof e && ((r = e), (e = void 0));
            var i = So(t);
            return Bo(n, e).then(function (t) {
                return i.parse(t, r);
            });
        }),
        (t.csv = Io),
        (t.tsv = Ho),
        (t.image = function (t, n) {
            return new Promise(function (e, r) {
                var i = new Image();
                for (var o in n) i[o] = n[o];
                (i.onerror = r),
                    (i.onload = function () {
                        e(i);
                    }),
                    (i.src = t);
            });
        }),
        (t.json = function (t, n) {
            return fetch(t, n).then(jo);
        }),
        (t.text = Bo),
        (t.xml = Go),
        (t.html = Vo),
        (t.svg = $o),
        (t.forceCenter = function (t, n) {
            var e;
            function r() {
                var r,
                    i,
                    o = e.length,
                    a = 0,
                    u = 0;
                for (r = 0; r < o; ++r) (a += (i = e[r]).x), (u += i.y);
                for (a = a / o - t, u = u / o - n, r = 0; r < o; ++r) ((i = e[r]).x -= a), (i.y -= u);
            }
            return (
                null == t && (t = 0),
                null == n && (n = 0),
                (r.initialize = function (t) {
                    e = t;
                }),
                (r.x = function (n) {
                    return arguments.length ? ((t = +n), r) : t;
                }),
                (r.y = function (t) {
                    return arguments.length ? ((n = +t), r) : n;
                }),
                r
            );
        }),
        (t.forceCollide = function (t) {
            var n,
                e,
                r = 1,
                i = 1;
            function o() {
                for (var t, o, u, c, f, s, l, h = n.length, d = 0; d < i; ++d) for (o = na(n, oa, aa).visitAfter(a), t = 0; t < h; ++t) (u = n[t]), (s = e[u.index]), (l = s * s), (c = u.x + u.vx), (f = u.y + u.vy), o.visit(p);
                function p(t, n, e, i, o) {
                    var a = t.data,
                        h = t.r,
                        d = s + h;
                    if (!a) return n > c + d || i < c - d || e > f + d || o < f - d;
                    if (a.index > u.index) {
                        var p = c - a.x - a.vx,
                            v = f - a.y - a.vy,
                            g = p * p + v * v;
                        g < d * d &&
                            (0 === p && (g += (p = Zo()) * p),
                            0 === v && (g += (v = Zo()) * v),
                            (g = ((d - (g = Math.sqrt(g))) / g) * r),
                            (u.vx += (p *= g) * (d = (h *= h) / (l + h))),
                            (u.vy += (v *= g) * d),
                            (a.vx -= p * (d = 1 - d)),
                            (a.vy -= v * d));
                    }
                }
            }
            function a(t) {
                if (t.data) return (t.r = e[t.data.index]);
                for (var n = (t.r = 0); n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r);
            }
            function u() {
                if (n) {
                    var r,
                        i,
                        o = n.length;
                    for (e = new Array(o), r = 0; r < o; ++r) (i = n[r]), (e[i.index] = +t(i, r, n));
                }
            }
            return (
                "function" != typeof t && (t = Wo(null == t ? 1 : +t)),
                (o.initialize = function (t) {
                    (n = t), u();
                }),
                (o.iterations = function (t) {
                    return arguments.length ? ((i = +t), o) : i;
                }),
                (o.strength = function (t) {
                    return arguments.length ? ((r = +t), o) : r;
                }),
                (o.radius = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : Wo(+n)), u(), o) : t;
                }),
                o
            );
        }),
        (t.forceLink = function (t) {
            var n,
                e,
                r,
                i,
                o,
                a = ua,
                u = function (t) {
                    return 1 / Math.min(i[t.source.index], i[t.target.index]);
                },
                c = Wo(30),
                f = 1;
            function s(r) {
                for (var i = 0, a = t.length; i < f; ++i)
                    for (var u, c, s, l, h, d, p, v = 0; v < a; ++v)
                        (c = (u = t[v]).source),
                            (l = (s = u.target).x + s.vx - c.x - c.vx || Zo()),
                            (h = s.y + s.vy - c.y - c.vy || Zo()),
                            (l *= d = (((d = Math.sqrt(l * l + h * h)) - e[v]) / d) * r * n[v]),
                            (h *= d),
                            (s.vx -= l * (p = o[v])),
                            (s.vy -= h * p),
                            (c.vx += l * (p = 1 - p)),
                            (c.vy += h * p);
            }
            function l() {
                if (r) {
                    var u,
                        c,
                        f = r.length,
                        s = t.length,
                        l = Qi(r, a);
                    for (u = 0, i = new Array(f); u < s; ++u)
                        ((c = t[u]).index = u),
                            "object" != typeof c.source && (c.source = ca(l, c.source)),
                            "object" != typeof c.target && (c.target = ca(l, c.target)),
                            (i[c.source.index] = (i[c.source.index] || 0) + 1),
                            (i[c.target.index] = (i[c.target.index] || 0) + 1);
                    for (u = 0, o = new Array(s); u < s; ++u) (c = t[u]), (o[u] = i[c.source.index] / (i[c.source.index] + i[c.target.index]));
                    (n = new Array(s)), h(), (e = new Array(s)), d();
                }
            }
            function h() {
                if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +u(t[e], e, t);
            }
            function d() {
                if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t);
            }
            return (
                null == t && (t = []),
                (s.initialize = function (t) {
                    (r = t), l();
                }),
                (s.links = function (n) {
                    return arguments.length ? ((t = n), l(), s) : t;
                }),
                (s.id = function (t) {
                    return arguments.length ? ((a = t), s) : a;
                }),
                (s.iterations = function (t) {
                    return arguments.length ? ((f = +t), s) : f;
                }),
                (s.strength = function (t) {
                    return arguments.length ? ((u = "function" == typeof t ? t : Wo(+t)), h(), s) : u;
                }),
                (s.distance = function (t) {
                    return arguments.length ? ((c = "function" == typeof t ? t : Wo(+t)), d(), s) : c;
                }),
                s
            );
        }),
        (t.forceManyBody = function () {
            var t,
                n,
                e,
                r,
                i = Wo(-30),
                o = 1,
                a = 1 / 0,
                u = 0.81;
            function c(r) {
                var i,
                    o = t.length,
                    a = na(t, fa, sa).visitAfter(s);
                for (e = r, i = 0; i < o; ++i) (n = t[i]), a.visit(l);
            }
            function f() {
                if (t) {
                    var n,
                        e,
                        o = t.length;
                    for (r = new Array(o), n = 0; n < o; ++n) (e = t[n]), (r[e.index] = +i(e, n, t));
                }
            }
            function s(t) {
                var n,
                    e,
                    i,
                    o,
                    a,
                    u = 0,
                    c = 0;
                if (t.length) {
                    for (i = o = a = 0; a < 4; ++a) (n = t[a]) && (e = Math.abs(n.value)) && ((u += n.value), (c += e), (i += e * n.x), (o += e * n.y));
                    (t.x = i / c), (t.y = o / c);
                } else {
                    ((n = t).x = n.data.x), (n.y = n.data.y);
                    do {
                        u += r[n.data.index];
                    } while ((n = n.next));
                }
                t.value = u;
            }
            function l(t, i, c, f) {
                if (!t.value) return !0;
                var s = t.x - n.x,
                    l = t.y - n.y,
                    h = f - i,
                    d = s * s + l * l;
                if ((h * h) / u < d) return d < a && (0 === s && (d += (s = Zo()) * s), 0 === l && (d += (l = Zo()) * l), d < o && (d = Math.sqrt(o * d)), (n.vx += (s * t.value * e) / d), (n.vy += (l * t.value * e) / d)), !0;
                if (!(t.length || d >= a)) {
                    (t.data !== n || t.next) && (0 === s && (d += (s = Zo()) * s), 0 === l && (d += (l = Zo()) * l), d < o && (d = Math.sqrt(o * d)));
                    do {
                        t.data !== n && ((h = (r[t.data.index] * e) / d), (n.vx += s * h), (n.vy += l * h));
                    } while ((t = t.next));
                }
            }
            return (
                (c.initialize = function (n) {
                    (t = n), f();
                }),
                (c.strength = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : Wo(+t)), f(), c) : i;
                }),
                (c.distanceMin = function (t) {
                    return arguments.length ? ((o = t * t), c) : Math.sqrt(o);
                }),
                (c.distanceMax = function (t) {
                    return arguments.length ? ((a = t * t), c) : Math.sqrt(a);
                }),
                (c.theta = function (t) {
                    return arguments.length ? ((u = t * t), c) : Math.sqrt(u);
                }),
                c
            );
        }),
        (t.forceRadial = function (t, n, e) {
            var r,
                i,
                o,
                a = Wo(0.1);
            function u(t) {
                for (var a = 0, u = r.length; a < u; ++a) {
                    var c = r[a],
                        f = c.x - n || 1e-6,
                        s = c.y - e || 1e-6,
                        l = Math.sqrt(f * f + s * s),
                        h = ((o[a] - l) * i[a] * t) / l;
                    (c.vx += f * h), (c.vy += s * h);
                }
            }
            function c() {
                if (r) {
                    var n,
                        e = r.length;
                    for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) (o[n] = +t(r[n], n, r)), (i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r));
                }
            }
            return (
                "function" != typeof t && (t = Wo(+t)),
                null == n && (n = 0),
                null == e && (e = 0),
                (u.initialize = function (t) {
                    (r = t), c();
                }),
                (u.strength = function (t) {
                    return arguments.length ? ((a = "function" == typeof t ? t : Wo(+t)), c(), u) : a;
                }),
                (u.radius = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : Wo(+n)), c(), u) : t;
                }),
                (u.x = function (t) {
                    return arguments.length ? ((n = +t), u) : n;
                }),
                (u.y = function (t) {
                    return arguments.length ? ((e = +t), u) : e;
                }),
                u
            );
        }),
        (t.forceSimulation = function (t) {
            var n,
                e = 1,
                r = 0.001,
                i = 1 - Math.pow(r, 1 / 300),
                o = 0,
                a = 0.6,
                u = Qi(),
                c = ir(s),
                f = I("tick", "end");
            function s() {
                l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n));
            }
            function l(r) {
                var c,
                    f,
                    s = t.length;
                void 0 === r && (r = 1);
                for (var l = 0; l < r; ++l)
                    for (
                        e += (o - e) * i,
                            u.each(function (t) {
                                t(e);
                            }),
                            c = 0;
                        c < s;
                        ++c
                    )
                        null == (f = t[c]).fx ? (f.x += f.vx *= a) : ((f.x = f.fx), (f.vx = 0)), null == f.fy ? (f.y += f.vy *= a) : ((f.y = f.fy), (f.vy = 0));
                return n;
            }
            function h() {
                for (var n, e = 0, r = t.length; e < r; ++e) {
                    if ((((n = t[e]).index = e), isNaN(n.fx) || (n.x = n.fx), isNaN(n.fy) || (n.y = n.fy), isNaN(n.x) || isNaN(n.y))) {
                        var i = la * Math.sqrt(e),
                            o = e * ha;
                        (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
                    }
                    (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
                }
            }
            function d(n) {
                return n.initialize && n.initialize(t), n;
            }
            return (
                null == t && (t = []),
                h(),
                (n = {
                    tick: l,
                    restart: function () {
                        return c.restart(s), n;
                    },
                    stop: function () {
                        return c.stop(), n;
                    },
                    nodes: function (e) {
                        return arguments.length ? ((t = e), h(), u.each(d), n) : t;
                    },
                    alpha: function (t) {
                        return arguments.length ? ((e = +t), n) : e;
                    },
                    alphaMin: function (t) {
                        return arguments.length ? ((r = +t), n) : r;
                    },
                    alphaDecay: function (t) {
                        return arguments.length ? ((i = +t), n) : +i;
                    },
                    alphaTarget: function (t) {
                        return arguments.length ? ((o = +t), n) : o;
                    },
                    velocityDecay: function (t) {
                        return arguments.length ? ((a = 1 - t), n) : 1 - a;
                    },
                    force: function (t, e) {
                        return arguments.length > 1 ? (null == e ? u.remove(t) : u.set(t, d(e)), n) : u.get(t);
                    },
                    find: function (n, e, r) {
                        var i,
                            o,
                            a,
                            u,
                            c,
                            f = 0,
                            s = t.length;
                        for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f) (a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && ((c = u), (r = a));
                        return c;
                    },
                    on: function (t, e) {
                        return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
                    },
                })
            );
        }),
        (t.forceX = function (t) {
            var n,
                e,
                r,
                i = Wo(0.1);
            function o(t) {
                for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]).vx += (r[o] - i.x) * e[o] * t;
            }
            function a() {
                if (n) {
                    var o,
                        a = n.length;
                    for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
                }
            }
            return (
                "function" != typeof t && (t = Wo(null == t ? 0 : +t)),
                (o.initialize = function (t) {
                    (n = t), a();
                }),
                (o.strength = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : Wo(+t)), a(), o) : i;
                }),
                (o.x = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : Wo(+n)), a(), o) : t;
                }),
                o
            );
        }),
        (t.forceY = function (t) {
            var n,
                e,
                r,
                i = Wo(0.1);
            function o(t) {
                for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]).vy += (r[o] - i.y) * e[o] * t;
            }
            function a() {
                if (n) {
                    var o,
                        a = n.length;
                    for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
                }
            }
            return (
                "function" != typeof t && (t = Wo(null == t ? 0 : +t)),
                (o.initialize = function (t) {
                    (n = t), a();
                }),
                (o.strength = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : Wo(+t)), a(), o) : i;
                }),
                (o.y = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : Wo(+n)), a(), o) : t;
                }),
                o
            );
        }),
        (t.formatDefaultLocale = Aa),
        (t.formatLocale = Na),
        (t.formatSpecifier = ya),
        (t.precisionFixed = Sa),
        (t.precisionPrefix = ka),
        (t.precisionRound = Ta),
        (t.geoArea = function (t) {
            return vu.reset(), cu(t, gu), 2 * vu;
        }),
        (t.geoBounds = function (t) {
            var n, e, r, i, o, a, u;
            if (((Pu = Cu = -(Tu = Eu = 1 / 0)), (Lu = []), cu(t, nc), (e = Lu.length))) {
                for (Lu.sort(sc), n = 1, o = [(r = Lu[0])]; n < e; ++n) lc(r, (i = Lu[n])[0]) || lc(r, i[1]) ? (fc(r[0], i[1]) > fc(r[0], r[1]) && (r[1] = i[1]), fc(i[0], r[1]) > fc(r[0], r[1]) && (r[0] = i[0])) : o.push((r = i));
                for (a = -1 / 0, n = 0, r = o[(e = o.length - 1)]; n <= e; r = i, ++n) (i = o[n]), (u = fc(r[1], i[0])) > a && ((a = u), (Tu = i[0]), (Cu = r[1]));
            }
            return (
                (Lu = Uu = null),
                Tu === 1 / 0 || Eu === 1 / 0
                    ? [
                          [NaN, NaN],
                          [NaN, NaN],
                      ]
                    : [
                          [Tu, Eu],
                          [Cu, Pu],
                      ]
            );
        }),
        (t.geoCentroid = function (t) {
            (Ou = Yu = Bu = Fu = Iu = Hu = ju = Xu = Gu = Vu = $u = 0), cu(t, hc);
            var n = Gu,
                e = Vu,
                r = $u,
                i = n * n + e * e + r * r;
            return i < qa && ((n = Hu), (e = ju), (r = Xu), Yu < Ra && ((n = Bu), (e = Fu), (r = Iu)), (i = n * n + e * e + r * r) < qa) ? [NaN, NaN] : [Ha(e, n) * Ya, tu(r / Qa(i)) * Ya];
        }),
        (t.geoCircle = function () {
            var t,
                n,
                e = Mc([0, 0]),
                r = Mc(90),
                i = Mc(6),
                o = {
                    point: function (e, r) {
                        t.push((e = n(e, r))), (e[0] *= Ya), (e[1] *= Ya);
                    },
                };
            function a() {
                var a = e.apply(this, arguments),
                    u = r.apply(this, arguments) * Ba,
                    c = i.apply(this, arguments) * Ba;
                return (t = []), (n = Sc(-a[0] * Ba, -a[1] * Ba, 0).invert), Pc(o, u, c, 1), (a = { type: "Polygon", coordinates: [t] }), (t = n = null), a;
            }
            return (
                (a.center = function (t) {
                    return arguments.length ? ((e = "function" == typeof t ? t : Mc([+t[0], +t[1]])), a) : e;
                }),
                (a.radius = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : Mc(+t)), a) : r;
                }),
                (a.precision = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : Mc(+t)), a) : i;
                }),
                a
            );
        }),
        (t.geoClipAntimeridian = Hc),
        (t.geoClipCircle = jc),
        (t.geoClipExtent = function () {
            var t,
                n,
                e,
                r = 0,
                i = 0,
                o = 960,
                a = 500;
            return (e = {
                stream: function (e) {
                    return t && n === e ? t : (t = Vc(r, i, o, a)((n = e)));
                },
                extent: function (u) {
                    return arguments.length
                        ? ((r = +u[0][0]), (i = +u[0][1]), (o = +u[1][0]), (a = +u[1][1]), (t = n = null), e)
                        : [
                              [r, i],
                              [o, a],
                          ];
                },
            });
        }),
        (t.geoClipRectangle = Vc),
        (t.geoContains = function (t, n) {
            return (t && uf.hasOwnProperty(t.type) ? uf[t.type] : ff)(t, n);
        }),
        (t.geoDistance = af),
        (t.geoGraticule = yf),
        (t.geoGraticule10 = function () {
            return yf()();
        }),
        (t.geoInterpolate = function (t, n) {
            var e = t[0] * Ba,
                r = t[1] * Ba,
                i = n[0] * Ba,
                o = n[1] * Ba,
                a = ja(r),
                u = Wa(r),
                c = ja(o),
                f = Wa(o),
                s = a * ja(e),
                l = a * Wa(e),
                h = c * ja(i),
                d = c * Wa(i),
                p = 2 * tu(Qa(nu(o - r) + a * c * nu(i - e))),
                v = Wa(p),
                g = p
                    ? function (t) {
                          var n = Wa((t *= p)) / v,
                              e = Wa(p - t) / v,
                              r = e * s + n * h,
                              i = e * l + n * d,
                              o = e * u + n * f;
                          return [Ha(i, r) * Ya, Ha(o, Qa(r * r + i * i)) * Ya];
                      }
                    : function () {
                          return [e * Ya, r * Ya];
                      };
            return (g.distance = p), g;
        }),
        (t.geoLength = ef),
        (t.geoPath = function (t, n) {
            var e,
                r,
                i = 4.5;
            function o(t) {
                return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), cu(t, e(r))), r.result();
            }
            return (
                (o.area = function (t) {
                    return cu(t, e(Af)), Af.result();
                }),
                (o.measure = function (t) {
                    return cu(t, e(ls)), ls.result();
                }),
                (o.bounds = function (t) {
                    return cu(t, e(qf)), qf.result();
                }),
                (o.centroid = function (t) {
                    return cu(t, e($f)), $f.result();
                }),
                (o.projection = function (n) {
                    return arguments.length ? ((e = null == n ? ((t = null), _f) : (t = n).stream), o) : t;
                }),
                (o.context = function (t) {
                    return arguments.length ? ((r = null == t ? ((n = null), new ps()) : new is((n = t))), "function" != typeof i && r.pointRadius(i), o) : n;
                }),
                (o.pointRadius = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : (r.pointRadius(+t), +t)), o) : i;
                }),
                o.projection(t).context(n)
            );
        }),
        (t.geoAlbers = Rs),
        (t.geoAlbersUsa = function () {
            var t,
                n,
                e,
                r,
                i,
                o,
                a = Rs(),
                u = zs().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                c = zs().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                f = {
                    point: function (t, n) {
                        o = [t, n];
                    },
                };
            function s(t) {
                var n = t[0],
                    a = t[1];
                return (o = null), e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o);
            }
            function l() {
                return (t = n = null), s;
            }
            return (
                (s.invert = function (t) {
                    var n = a.scale(),
                        e = a.translate(),
                        r = (t[0] - e[0]) / n,
                        i = (t[1] - e[1]) / n;
                    return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214 ? u : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115 ? c : a).invert(t);
                }),
                (s.stream = function (e) {
                    return t && n === e
                        ? t
                        : ((r = [a.stream((n = e)), u.stream(e), c.stream(e)]),
                          (i = r.length),
                          (t = {
                              point: function (t, n) {
                                  for (var e = -1; ++e < i; ) r[e].point(t, n);
                              },
                              sphere: function () {
                                  for (var t = -1; ++t < i; ) r[t].sphere();
                              },
                              lineStart: function () {
                                  for (var t = -1; ++t < i; ) r[t].lineStart();
                              },
                              lineEnd: function () {
                                  for (var t = -1; ++t < i; ) r[t].lineEnd();
                              },
                              polygonStart: function () {
                                  for (var t = -1; ++t < i; ) r[t].polygonStart();
                              },
                              polygonEnd: function () {
                                  for (var t = -1; ++t < i; ) r[t].polygonEnd();
                              },
                          }));
                    var r, i;
                }),
                (s.precision = function (t) {
                    return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision();
                }),
                (s.scale = function (t) {
                    return arguments.length ? (a.scale(t), u.scale(0.35 * t), c.scale(t), s.translate(a.translate())) : a.scale();
                }),
                (s.translate = function (t) {
                    if (!arguments.length) return a.translate();
                    var n = a.scale(),
                        o = +t[0],
                        s = +t[1];
                    return (
                        (e = a
                            .translate(t)
                            .clipExtent([
                                [o - 0.455 * n, s - 0.238 * n],
                                [o + 0.455 * n, s + 0.238 * n],
                            ])
                            .stream(f)),
                        (r = u
                            .translate([o - 0.307 * n, s + 0.201 * n])
                            .clipExtent([
                                [o - 0.425 * n + Ra, s + 0.12 * n + Ra],
                                [o - 0.214 * n - Ra, s + 0.234 * n - Ra],
                            ])
                            .stream(f)),
                        (i = c
                            .translate([o - 0.205 * n, s + 0.212 * n])
                            .clipExtent([
                                [o - 0.214 * n + Ra, s + 0.166 * n + Ra],
                                [o - 0.115 * n - Ra, s + 0.234 * n - Ra],
                            ])
                            .stream(f)),
                        l()
                    );
                }),
                (s.fitExtent = function (t, n) {
                    return bs(s, t, n);
                }),
                (s.fitSize = function (t, n) {
                    return ms(s, t, n);
                }),
                (s.fitWidth = function (t, n) {
                    return xs(s, t, n);
                }),
                (s.fitHeight = function (t, n) {
                    return ws(s, t, n);
                }),
                s.scale(1070)
            );
        }),
        (t.geoAzimuthalEqualArea = function () {
            return Ts(Ls).scale(124.75).clipAngle(179.999);
        }),
        (t.geoAzimuthalEqualAreaRaw = Ls),
        (t.geoAzimuthalEquidistant = function () {
            return Ts(Us).scale(79.4188).clipAngle(179.999);
        }),
        (t.geoAzimuthalEquidistantRaw = Us),
        (t.geoConicConformal = function () {
            return Cs(Fs).scale(109.5).parallels([30, 30]);
        }),
        (t.geoConicConformalRaw = Fs),
        (t.geoConicEqualArea = zs),
        (t.geoConicEqualAreaRaw = Ps),
        (t.geoConicEquidistant = function () {
            return Cs(Hs).scale(131.154).center([0, 13.9389]);
        }),
        (t.geoConicEquidistantRaw = Hs),
        (t.geoEqualEarth = function () {
            return Ts(Ws).scale(177.158);
        }),
        (t.geoEqualEarthRaw = Ws),
        (t.geoEquirectangular = function () {
            return Ts(Is).scale(152.63);
        }),
        (t.geoEquirectangularRaw = Is),
        (t.geoGnomonic = function () {
            return Ts(Zs).scale(144.049).clipAngle(60);
        }),
        (t.geoGnomonicRaw = Zs),
        (t.geoIdentity = function () {
            var t,
                n,
                e,
                r,
                i,
                o,
                a = 1,
                u = 0,
                c = 0,
                f = 1,
                s = 1,
                l = _f,
                h = null,
                d = _f;
            function p() {
                return (r = i = null), o;
            }
            return (o = {
                stream: function (t) {
                    return r && i === t ? r : (r = l(d((i = t))));
                },
                postclip: function (r) {
                    return arguments.length ? ((d = r), (h = t = n = e = null), p()) : d;
                },
                clipExtent: function (r) {
                    return arguments.length
                        ? ((d = null == r ? ((h = t = n = e = null), _f) : Vc((h = +r[0][0]), (t = +r[0][1]), (n = +r[1][0]), (e = +r[1][1]))), p())
                        : null == h
                        ? null
                        : [
                              [h, t],
                              [n, e],
                          ];
                },
                scale: function (t) {
                    return arguments.length ? ((l = Qs((a = +t) * f, a * s, u, c)), p()) : a;
                },
                translate: function (t) {
                    return arguments.length ? ((l = Qs(a * f, a * s, (u = +t[0]), (c = +t[1]))), p()) : [u, c];
                },
                reflectX: function (t) {
                    return arguments.length ? ((l = Qs(a * (f = t ? -1 : 1), a * s, u, c)), p()) : f < 0;
                },
                reflectY: function (t) {
                    return arguments.length ? ((l = Qs(a * f, a * (s = t ? -1 : 1), u, c)), p()) : s < 0;
                },
                fitExtent: function (t, n) {
                    return bs(o, t, n);
                },
                fitSize: function (t, n) {
                    return ms(o, t, n);
                },
                fitWidth: function (t, n) {
                    return xs(o, t, n);
                },
                fitHeight: function (t, n) {
                    return ws(o, t, n);
                },
            });
        }),
        (t.geoProjection = Ts),
        (t.geoProjectionMutator = Es),
        (t.geoMercator = function () {
            return Ys(Os).scale(961 / Oa);
        }),
        (t.geoMercatorRaw = Os),
        (t.geoNaturalEarth1 = function () {
            return Ts(Js).scale(175.295);
        }),
        (t.geoNaturalEarth1Raw = Js),
        (t.geoOrthographic = function () {
            return Ts(Ks)
                .scale(249.5)
                .clipAngle(90 + Ra);
        }),
        (t.geoOrthographicRaw = Ks),
        (t.geoStereographic = function () {
            return Ts(tl).scale(250).clipAngle(142);
        }),
        (t.geoStereographicRaw = tl),
        (t.geoTransverseMercator = function () {
            var t = Ys(nl),
                n = t.center,
                e = t.rotate;
            return (
                (t.center = function (t) {
                    return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
                }),
                (t.rotate = function (t) {
                    return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90];
                }),
                e([0, 0, 90]).scale(159.155)
            );
        }),
        (t.geoTransverseMercatorRaw = nl),
        (t.geoRotation = Cc),
        (t.geoStream = cu),
        (t.geoTransform = function (t) {
            return { stream: gs(t) };
        }),
        (t.cluster = function () {
            var t = el,
                n = 1,
                e = 1,
                r = !1;
            function i(i) {
                var o,
                    a = 0;
                i.eachAfter(function (n) {
                    var e = n.children;
                    e
                        ? ((n.x = (function (t) {
                              return t.reduce(rl, 0) / t.length;
                          })(e)),
                          (n.y = (function (t) {
                              return 1 + t.reduce(il, 0);
                          })(e)))
                        : ((n.x = o ? (a += t(n, o)) : 0), (n.y = 0), (o = n));
                });
                var u = (function (t) {
                        for (var n; (n = t.children); ) t = n[0];
                        return t;
                    })(i),
                    c = (function (t) {
                        for (var n; (n = t.children); ) t = n[n.length - 1];
                        return t;
                    })(i),
                    f = u.x - t(u, c) / 2,
                    s = c.x + t(c, u) / 2;
                return i.eachAfter(
                    r
                        ? function (t) {
                              (t.x = (t.x - i.x) * n), (t.y = (i.y - t.y) * e);
                          }
                        : function (t) {
                              (t.x = ((t.x - f) / (s - f)) * n), (t.y = (1 - (i.y ? t.y / i.y : 1)) * e);
                          }
                );
            }
            return (
                (i.separation = function (n) {
                    return arguments.length ? ((t = n), i) : t;
                }),
                (i.size = function (t) {
                    return arguments.length ? ((r = !1), (n = +t[0]), (e = +t[1]), i) : r ? null : [n, e];
                }),
                (i.nodeSize = function (t) {
                    return arguments.length ? ((r = !0), (n = +t[0]), (e = +t[1]), i) : r ? [n, e] : null;
                }),
                i
            );
        }),
        (t.hierarchy = al),
        (t.pack = function () {
            var t = null,
                n = 1,
                e = 1,
                r = Sl;
            function i(i) {
                return (
                    (i.x = n / 2),
                    (i.y = e / 2),
                    t
                        ? i.eachBefore(El(t)).eachAfter(Cl(r, 0.5)).eachBefore(Pl(1))
                        : i
                              .eachBefore(El(Tl))
                              .eachAfter(Cl(Sl, 1))
                              .eachAfter(Cl(r, i.r / Math.min(n, e)))
                              .eachBefore(Pl(Math.min(n, e) / (2 * i.r))),
                    i
                );
            }
            return (
                (i.radius = function (n) {
                    return arguments.length ? ((t = null == (e = n) ? null : Al(e)), i) : t;
                    var e;
                }),
                (i.size = function (t) {
                    return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
                }),
                (i.padding = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : kl(+t)), i) : r;
                }),
                i
            );
        }),
        (t.packSiblings = function (t) {
            return Nl(t), t;
        }),
        (t.packEnclose = hl),
        (t.partition = function () {
            var t = 1,
                n = 1,
                e = 0,
                r = !1;
            function i(i) {
                var o = i.height + 1;
                return (
                    (i.x0 = i.y0 = e),
                    (i.x1 = t),
                    (i.y1 = n / o),
                    i.eachBefore(
                        (function (t, n) {
                            return function (r) {
                                r.children && Rl(r, r.x0, (t * (r.depth + 1)) / n, r.x1, (t * (r.depth + 2)) / n);
                                var i = r.x0,
                                    o = r.y0,
                                    a = r.x1 - e,
                                    u = r.y1 - e;
                                a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), (r.x0 = i), (r.y0 = o), (r.x1 = a), (r.y1 = u);
                            };
                        })(n, o)
                    ),
                    r && i.eachBefore(zl),
                    i
                );
            }
            return (
                (i.round = function (t) {
                    return arguments.length ? ((r = !!t), i) : r;
                }),
                (i.size = function (e) {
                    return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
                }),
                (i.padding = function (t) {
                    return arguments.length ? ((e = +t), i) : e;
                }),
                i
            );
        }),
        (t.stratify = function () {
            var t = Ul,
                n = Ol;
            function e(e) {
                var r,
                    i,
                    o,
                    a,
                    u,
                    c,
                    f,
                    s = e.length,
                    l = new Array(s),
                    h = {};
                for (i = 0; i < s; ++i) (r = e[i]), (u = l[i] = new sl(r)), null != (c = t(r, i, e)) && (c += "") && (h[(f = ql + (u.id = c))] = f in h ? Ll : u);
                for (i = 0; i < s; ++i)
                    if (((u = l[i]), null != (c = n(e[i], i, e)) && (c += ""))) {
                        if (!(a = h[ql + c])) throw new Error("missing: " + c);
                        if (a === Ll) throw new Error("ambiguous: " + c);
                        a.children ? a.children.push(u) : (a.children = [u]), (u.parent = a);
                    } else {
                        if (o) throw new Error("multiple roots");
                        o = u;
                    }
                if (!o) throw new Error("no root");
                if (
                    ((o.parent = Dl),
                    o
                        .eachBefore(function (t) {
                            (t.depth = t.parent.depth + 1), --s;
                        })
                        .eachBefore(fl),
                    (o.parent = null),
                    s > 0)
                )
                    throw new Error("cycle");
                return o;
            }
            return (
                (e.id = function (n) {
                    return arguments.length ? ((t = Al(n)), e) : t;
                }),
                (e.parentId = function (t) {
                    return arguments.length ? ((n = Al(t)), e) : n;
                }),
                e
            );
        }),
        (t.tree = function () {
            var t = Yl,
                n = 1,
                e = 1,
                r = null;
            function i(i) {
                var c = (function (t) {
                    for (var n, e, r, i, o, a = new jl(t, 0), u = [a]; (n = u.pop()); )
                        if ((r = n._.children)) for (n.children = new Array((o = r.length)), i = o - 1; i >= 0; --i) u.push((e = n.children[i] = new jl(r[i], i))), (e.parent = n);
                    return ((a.parent = new jl(null, 0)).children = [a]), a;
                })(i);
                if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(a), r)) i.eachBefore(u);
                else {
                    var f = i,
                        s = i,
                        l = i;
                    i.eachBefore(function (t) {
                        t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t);
                    });
                    var h = f === s ? 1 : t(f, s) / 2,
                        d = h - f.x,
                        p = n / (s.x + h + d),
                        v = e / (l.depth || 1);
                    i.eachBefore(function (t) {
                        (t.x = (t.x + d) * p), (t.y = t.depth * v);
                    });
                }
                return i;
            }
            function o(n) {
                var e = n.children,
                    r = n.parent.children,
                    i = n.i ? r[n.i - 1] : null;
                if (e) {
                    !(function (t) {
                        for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0; ) ((n = i[o]).z += e), (n.m += e), (e += n.s + (r += n.c));
                    })(n);
                    var o = (e[0].z + e[e.length - 1].z) / 2;
                    i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o)) : (n.z = o);
                } else i && (n.z = i.z + t(n._, i._));
                n.parent.A = (function (n, e, r) {
                    if (e) {
                        for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; (u = Fl(u)), (o = Bl(o)), u && o; )
                            (c = Bl(c)), ((a = Fl(a)).a = n), (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (Il(Hl(u, n, r), n, i), (f += i), (s += i)), (l += u.m), (f += o.m), (h += c.m), (s += a.m);
                        u && !Fl(a) && ((a.t = u), (a.m += l - s)), o && !Bl(c) && ((c.t = o), (c.m += f - h), (r = n));
                    }
                    return r;
                })(n, i, n.parent.A || r[0]);
            }
            function a(t) {
                (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
            }
            function u(t) {
                (t.x *= n), (t.y = t.depth * e);
            }
            return (
                (i.separation = function (n) {
                    return arguments.length ? ((t = n), i) : t;
                }),
                (i.size = function (t) {
                    return arguments.length ? ((r = !1), (n = +t[0]), (e = +t[1]), i) : r ? null : [n, e];
                }),
                (i.nodeSize = function (t) {
                    return arguments.length ? ((r = !0), (n = +t[0]), (e = +t[1]), i) : r ? [n, e] : null;
                }),
                i
            );
        }),
        (t.treemap = function () {
            var t = $l,
                n = !1,
                e = 1,
                r = 1,
                i = [0],
                o = Sl,
                a = Sl,
                u = Sl,
                c = Sl,
                f = Sl;
            function s(t) {
                return (t.x0 = t.y0 = 0), (t.x1 = e), (t.y1 = r), t.eachBefore(l), (i = [0]), n && t.eachBefore(zl), t;
            }
            function l(n) {
                var e = i[n.depth],
                    r = n.x0 + e,
                    s = n.y0 + e,
                    l = n.x1 - e,
                    h = n.y1 - e;
                l < r && (r = l = (r + l) / 2),
                    h < s && (s = h = (s + h) / 2),
                    (n.x0 = r),
                    (n.y0 = s),
                    (n.x1 = l),
                    (n.y1 = h),
                    n.children && ((e = i[n.depth + 1] = o(n) / 2), (r += f(n) - e), (s += a(n) - e), (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h));
            }
            return (
                (s.round = function (t) {
                    return arguments.length ? ((n = !!t), s) : n;
                }),
                (s.size = function (t) {
                    return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
                }),
                (s.tile = function (n) {
                    return arguments.length ? ((t = Al(n)), s) : t;
                }),
                (s.padding = function (t) {
                    return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner();
                }),
                (s.paddingInner = function (t) {
                    return arguments.length ? ((o = "function" == typeof t ? t : kl(+t)), s) : o;
                }),
                (s.paddingOuter = function (t) {
                    return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop();
                }),
                (s.paddingTop = function (t) {
                    return arguments.length ? ((a = "function" == typeof t ? t : kl(+t)), s) : a;
                }),
                (s.paddingRight = function (t) {
                    return arguments.length ? ((u = "function" == typeof t ? t : kl(+t)), s) : u;
                }),
                (s.paddingBottom = function (t) {
                    return arguments.length ? ((c = "function" == typeof t ? t : kl(+t)), s) : c;
                }),
                (s.paddingLeft = function (t) {
                    return arguments.length ? ((f = "function" == typeof t ? t : kl(+t)), s) : f;
                }),
                s
            );
        }),
        (t.treemapBinary = function (t, n, e, r, i) {
            var o,
                a,
                u = t.children,
                c = u.length,
                f = new Array(c + 1);
            for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;
            !(function t(n, e, r, i, o, a, c) {
                if (n >= e - 1) {
                    var s = u[n];
                    return (s.x0 = i), (s.y0 = o), (s.x1 = a), void (s.y1 = c);
                }
                for (var l = f[n], h = r / 2 + l, d = n + 1, p = e - 1; d < p; ) {
                    var v = (d + p) >>> 1;
                    f[v] < h ? (d = v + 1) : (p = v);
                }
                h - f[d - 1] < f[d] - h && n + 1 < d && --d;
                var g = f[d] - l,
                    y = r - g;
                if (a - i > c - o) {
                    var _ = (i * y + a * g) / r;
                    t(n, d, g, i, o, _, c), t(d, e, y, _, o, a, c);
                } else {
                    var b = (o * y + c * g) / r;
                    t(n, d, g, i, o, a, b), t(d, e, y, i, b, a, c);
                }
            })(0, c, t.value, n, e, r, i);
        }),
        (t.treemapDice = Rl),
        (t.treemapSlice = Xl),
        (t.treemapSliceDice = function (t, n, e, r, i) {
            (1 & t.depth ? Xl : Rl)(t, n, e, r, i);
        }),
        (t.treemapSquarify = $l),
        (t.treemapResquarify = Wl),
        (t.interpolate = ye),
        (t.interpolateArray = se),
        (t.interpolateBasis = Kn),
        (t.interpolateBasisClosed = te),
        (t.interpolateDate = le),
        (t.interpolateDiscrete = function (t) {
            var n = t.length;
            return function (e) {
                return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
            };
        }),
        (t.interpolateHue = function (t, n) {
            var e = re(+t, +n);
            return function (t) {
                var n = e(t);
                return n - 360 * Math.floor(n / 360);
            };
        }),
        (t.interpolateNumber = he),
        (t.interpolateObject = de),
        (t.interpolateRound = _e),
        (t.interpolateString = ge),
        (t.interpolateTransformCss = ke),
        (t.interpolateTransformSvg = Te),
        (t.interpolateZoom = qe),
        (t.interpolateRgb = ae),
        (t.interpolateRgbBasis = ce),
        (t.interpolateRgbBasisClosed = fe),
        (t.interpolateHsl = Le),
        (t.interpolateHslLong = Ue),
        (t.interpolateLab = function (t, n) {
            var e = oe((t = Rn(t)).l, (n = Rn(n)).l),
                r = oe(t.a, n.a),
                i = oe(t.b, n.b),
                o = oe(t.opacity, n.opacity);
            return function (n) {
                return (t.l = e(n)), (t.a = r(n)), (t.b = i(n)), (t.opacity = o(n)), t + "";
            };
        }),
        (t.interpolateHcl = Ye),
        (t.interpolateHclLong = Be),
        (t.interpolateCubehelix = Ie),
        (t.interpolateCubehelixLong = He),
        (t.piecewise = function (t, n) {
            for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r; ) o[e] = t(i, (i = n[++e]));
            return function (t) {
                var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                return o[n](t - n);
            };
        }),
        (t.quantize = function (t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
            return e;
        }),
        (t.path = ji),
        (t.polygonArea = function (t) {
            for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; ) (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
            return o / 2;
        }),
        (t.polygonCentroid = function (t) {
            for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i; ) (n = u), (u = t[r]), (c += e = n[0] * u[1] - u[0] * n[1]), (o += (n[0] + u[0]) * e), (a += (n[1] + u[1]) * e);
            return [o / (c *= 3), a / c];
        }),
        (t.polygonHull = function (t) {
            if ((e = t.length) < 3) return null;
            var n,
                e,
                r = new Array(e),
                i = new Array(e);
            for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
            for (r.sort(Zl), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
            var o = Ql(r),
                a = Ql(i),
                u = a[0] === o[0],
                c = a[a.length - 1] === o[o.length - 1],
                f = [];
            for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
            for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]);
            return f;
        }),
        (t.polygonContains = function (t, n) {
            for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) (e = (o = t[l])[0]), (r = o[1]) > u != f > u && a < ((c - e) * (u - r)) / (f - r) + e && (s = !s), (c = e), (f = r);
            return s;
        }),
        (t.polygonLength = function (t) {
            for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i; ) (n = a), (e = u), (n -= a = (o = t[r])[0]), (e -= u = o[1]), (c += Math.sqrt(n * n + e * e));
            return c;
        }),
        (t.quadtree = na),
        (t.randomUniform = Kl),
        (t.randomNormal = th),
        (t.randomLogNormal = nh),
        (t.randomBates = rh),
        (t.randomIrwinHall = eh),
        (t.randomExponential = ih),
        (t.scaleBand = hh),
        (t.scalePoint = function () {
            return (function t(n) {
                var e = n.copy;
                return (
                    (n.padding = n.paddingOuter),
                    delete n.paddingInner,
                    delete n.paddingOuter,
                    (n.copy = function () {
                        return t(e());
                    }),
                    n
                );
            })(hh.apply(null, arguments).paddingInner(1));
        }),
        (t.scaleIdentity = function t(n) {
            var e;
            function r(t) {
                return isNaN((t = +t)) ? e : t;
            }
            return (
                (r.invert = r),
                (r.domain = r.range = function (t) {
                    return arguments.length ? ((n = ch.call(t, dh)), r) : n.slice();
                }),
                (r.unknown = function (t) {
                    return arguments.length ? ((e = t), r) : e;
                }),
                (r.copy = function () {
                    return t(n).unknown(e);
                }),
                (n = arguments.length ? ch.call(n, dh) : [0, 1]),
                Nh(r)
            );
        }),
        (t.scaleLinear = function t() {
            var n = wh(vh, vh);
            return (
                (n.copy = function () {
                    return mh(n, t());
                }),
                oh.apply(n, arguments),
                Nh(n)
            );
        }),
        (t.scaleLog = function t() {
            var n = zh(xh()).domain([1, 10]);
            return (
                (n.copy = function () {
                    return mh(n, t()).base(n.base());
                }),
                oh.apply(n, arguments),
                n
            );
        }),
        (t.scaleSymlog = function t() {
            var n = Dh(xh());
            return (
                (n.copy = function () {
                    return mh(n, t()).constant(n.constant());
                }),
                oh.apply(n, arguments)
            );
        }),
        (t.scaleOrdinal = lh),
        (t.scaleImplicit = sh),
        (t.scalePow = Bh),
        (t.scaleSqrt = function () {
            return Bh.apply(null, arguments).exponent(0.5);
        }),
        (t.scaleQuantile = function t() {
            var e,
                r = [],
                o = [],
                a = [];
            function u() {
                var t = 0,
                    n = Math.max(1, o.length);
                for (a = new Array(n - 1); ++t < n; ) a[t - 1] = N(r, t / n);
                return c;
            }
            function c(t) {
                return isNaN((t = +t)) ? e : o[i(a, t)];
            }
            return (
                (c.invertExtent = function (t) {
                    var n = o.indexOf(t);
                    return n < 0 ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]];
                }),
                (c.domain = function (t) {
                    if (!arguments.length) return r.slice();
                    r = [];
                    for (var e, i = 0, o = t.length; i < o; ++i) null == (e = t[i]) || isNaN((e = +e)) || r.push(e);
                    return r.sort(n), u();
                }),
                (c.range = function (t) {
                    return arguments.length ? ((o = fh.call(t)), u()) : o.slice();
                }),
                (c.unknown = function (t) {
                    return arguments.length ? ((e = t), c) : e;
                }),
                (c.quantiles = function () {
                    return a.slice();
                }),
                (c.copy = function () {
                    return t().domain(r).range(o).unknown(e);
                }),
                oh.apply(c, arguments)
            );
        }),
        (t.scaleQuantize = function t() {
            var n,
                e = 0,
                r = 1,
                o = 1,
                a = [0.5],
                u = [0, 1];
            function c(t) {
                return t <= t ? u[i(a, t, 0, o)] : n;
            }
            function f() {
                var t = -1;
                for (a = new Array(o); ++t < o; ) a[t] = ((t + 1) * r - (t - o) * e) / (o + 1);
                return c;
            }
            return (
                (c.domain = function (t) {
                    return arguments.length ? ((e = +t[0]), (r = +t[1]), f()) : [e, r];
                }),
                (c.range = function (t) {
                    return arguments.length ? ((o = (u = fh.call(t)).length - 1), f()) : u.slice();
                }),
                (c.invertExtent = function (t) {
                    var n = u.indexOf(t);
                    return n < 0 ? [NaN, NaN] : n < 1 ? [e, a[0]] : n >= o ? [a[o - 1], r] : [a[n - 1], a[n]];
                }),
                (c.unknown = function (t) {
                    return arguments.length ? ((n = t), c) : c;
                }),
                (c.thresholds = function () {
                    return a.slice();
                }),
                (c.copy = function () {
                    return t().domain([e, r]).range(u).unknown(n);
                }),
                oh.apply(Nh(c), arguments)
            );
        }),
        (t.scaleThreshold = function t() {
            var n,
                e = [0.5],
                r = [0, 1],
                o = 1;
            function a(t) {
                return t <= t ? r[i(e, t, 0, o)] : n;
            }
            return (
                (a.domain = function (t) {
                    return arguments.length ? ((e = fh.call(t)), (o = Math.min(e.length, r.length - 1)), a) : e.slice();
                }),
                (a.range = function (t) {
                    return arguments.length ? ((r = fh.call(t)), (o = Math.min(e.length, r.length - 1)), a) : r.slice();
                }),
                (a.invertExtent = function (t) {
                    var n = r.indexOf(t);
                    return [e[n - 1], e[n]];
                }),
                (a.unknown = function (t) {
                    return arguments.length ? ((n = t), a) : n;
                }),
                (a.copy = function () {
                    return t().domain(e).range(r).unknown(n);
                }),
                oh.apply(a, arguments)
            );
        }),
        (t.scaleTime = function () {
            return oh.apply(bv(bd, yd, rd, td, Jh, Zh, $h, jh, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
        }),
        (t.scaleUtc = function () {
            return oh.apply(bv(jd, Id, Td, Ad, Md, xd, $h, jh, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
        }),
        (t.scaleSequential = function t() {
            var n = Nh(mv()(vh));
            return (
                (n.copy = function () {
                    return xv(n, t());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.scaleSequentialLog = function t() {
            var n = zh(mv()).domain([1, 10]);
            return (
                (n.copy = function () {
                    return xv(n, t()).base(n.base());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.scaleSequentialPow = wv),
        (t.scaleSequentialSqrt = function () {
            return wv.apply(null, arguments).exponent(0.5);
        }),
        (t.scaleSequentialSymlog = function t() {
            var n = Dh(mv());
            return (
                (n.copy = function () {
                    return xv(n, t()).constant(n.constant());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.scaleSequentialQuantile = function t() {
            var e = [],
                r = vh;
            function o(t) {
                if (!isNaN((t = +t))) return r((i(e, t) - 1) / (e.length - 1));
            }
            return (
                (o.domain = function (t) {
                    if (!arguments.length) return e.slice();
                    e = [];
                    for (var r, i = 0, a = t.length; i < a; ++i) null == (r = t[i]) || isNaN((r = +r)) || e.push(r);
                    return e.sort(n), o;
                }),
                (o.interpolator = function (t) {
                    return arguments.length ? ((r = t), o) : r;
                }),
                (o.copy = function () {
                    return t(r).domain(e);
                }),
                ah.apply(o, arguments)
            );
        }),
        (t.scaleDiverging = function t() {
            var n = Nh(Mv()(vh));
            return (
                (n.copy = function () {
                    return xv(n, t());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.scaleDivergingLog = function t() {
            var n = zh(Mv()).domain([0.1, 1, 10]);
            return (
                (n.copy = function () {
                    return xv(n, t()).base(n.base());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.scaleDivergingPow = Nv),
        (t.scaleDivergingSqrt = function () {
            return Nv.apply(null, arguments).exponent(0.5);
        }),
        (t.scaleDivergingSymlog = function t() {
            var n = Dh(Mv());
            return (
                (n.copy = function () {
                    return xv(n, t()).constant(n.constant());
                }),
                ah.apply(n, arguments)
            );
        }),
        (t.tickFormat = Mh),
        (t.schemeCategory10 = Sv),
        (t.schemeAccent = kv),
        (t.schemeDark2 = Tv),
        (t.schemePaired = Ev),
        (t.schemePastel1 = Cv),
        (t.schemePastel2 = Pv),
        (t.schemeSet1 = zv),
        (t.schemeSet2 = Rv),
        (t.schemeSet3 = qv),
        (t.interpolateBrBG = Uv),
        (t.schemeBrBG = Lv),
        (t.interpolatePRGn = Yv),
        (t.schemePRGn = Ov),
        (t.interpolatePiYG = Fv),
        (t.schemePiYG = Bv),
        (t.interpolatePuOr = Hv),
        (t.schemePuOr = Iv),
        (t.interpolateRdBu = Xv),
        (t.schemeRdBu = jv),
        (t.interpolateRdGy = Vv),
        (t.schemeRdGy = Gv),
        (t.interpolateRdYlBu = Wv),
        (t.schemeRdYlBu = $v),
        (t.interpolateRdYlGn = Qv),
        (t.schemeRdYlGn = Zv),
        (t.interpolateSpectral = Kv),
        (t.schemeSpectral = Jv),
        (t.interpolateBuGn = ng),
        (t.schemeBuGn = tg),
        (t.interpolateBuPu = rg),
        (t.schemeBuPu = eg),
        (t.interpolateGnBu = og),
        (t.schemeGnBu = ig),
        (t.interpolateOrRd = ug),
        (t.schemeOrRd = ag),
        (t.interpolatePuBuGn = fg),
        (t.schemePuBuGn = cg),
        (t.interpolatePuBu = lg),
        (t.schemePuBu = sg),
        (t.interpolatePuRd = dg),
        (t.schemePuRd = hg),
        (t.interpolateRdPu = vg),
        (t.schemeRdPu = pg),
        (t.interpolateYlGnBu = yg),
        (t.schemeYlGnBu = gg),
        (t.interpolateYlGn = bg),
        (t.schemeYlGn = _g),
        (t.interpolateYlOrBr = xg),
        (t.schemeYlOrBr = mg),
        (t.interpolateYlOrRd = Mg),
        (t.schemeYlOrRd = wg),
        (t.interpolateBlues = Ag),
        (t.schemeBlues = Ng),
        (t.interpolateGreens = kg),
        (t.schemeGreens = Sg),
        (t.interpolateGreys = Eg),
        (t.schemeGreys = Tg),
        (t.interpolatePurples = Pg),
        (t.schemePurples = Cg),
        (t.interpolateReds = Rg),
        (t.schemeReds = zg),
        (t.interpolateOranges = Dg),
        (t.schemeOranges = qg),
        (t.interpolateCubehelixDefault = Lg),
        (t.interpolateRainbow = function (t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - 0.5);
            return (Yg.h = 360 * t - 100), (Yg.s = 1.5 - 1.5 * n), (Yg.l = 0.8 - 0.9 * n), Yg + "";
        }),
        (t.interpolateWarm = Ug),
        (t.interpolateCool = Og),
        (t.interpolateSinebow = function (t) {
            var n;
            return (t = (0.5 - t) * Math.PI), (Bg.r = 255 * (n = Math.sin(t)) * n), (Bg.g = 255 * (n = Math.sin(t + Fg)) * n), (Bg.b = 255 * (n = Math.sin(t + Ig)) * n), Bg + "";
        }),
        (t.interpolateViridis = jg),
        (t.interpolateMagma = Xg),
        (t.interpolateInferno = Gg),
        (t.interpolatePlasma = Vg),
        (t.create = function (t) {
            return zt(W(t).call(document.documentElement));
        }),
        (t.creator = W),
        (t.local = qt),
        (t.matcher = tt),
        (t.mouse = Ot),
        (t.namespace = $),
        (t.namespaces = V),
        (t.clientPoint = Ut),
        (t.select = zt),
        (t.selectAll = function (t) {
            return "string" == typeof t ? new Ct([document.querySelectorAll(t)], [document.documentElement]) : new Ct([null == t ? [] : t], Et);
        }),
        (t.selection = Pt),
        (t.selector = Q),
        (t.selectorAll = K),
        (t.style = ct),
        (t.touch = Yt),
        (t.touches = function (t, n) {
            null == n && (n = Lt().touches);
            for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Ut(t, n[e]);
            return i;
        }),
        (t.window = ut),
        (t.customEvent = kt),
        (t.arc = function () {
            var t = uy,
                n = cy,
                e = $g(0),
                r = null,
                i = fy,
                o = sy,
                a = ly,
                u = null;
            function c() {
                var c,
                    f,
                    s,
                    l = +t.apply(this, arguments),
                    h = +n.apply(this, arguments),
                    d = i.apply(this, arguments) - iy,
                    p = o.apply(this, arguments) - iy,
                    v = Wg(p - d),
                    g = p > d;
                if ((u || (u = c = ji()), h < l && ((f = h), (h = l), (l = f)), h > ey))
                    if (v > oy - ey) u.moveTo(h * Qg(d), h * ty(d)), u.arc(0, 0, h, d, p, !g), l > ey && (u.moveTo(l * Qg(p), l * ty(p)), u.arc(0, 0, l, p, d, g));
                    else {
                        var y,
                            _,
                            b = d,
                            m = p,
                            x = d,
                            w = p,
                            M = v,
                            N = v,
                            A = a.apply(this, arguments) / 2,
                            S = A > ey && (r ? +r.apply(this, arguments) : ny(l * l + h * h)),
                            k = Kg(Wg(h - l) / 2, +e.apply(this, arguments)),
                            T = k,
                            E = k;
                        if (S > ey) {
                            var C = ay((S / l) * ty(A)),
                                P = ay((S / h) * ty(A));
                            (M -= 2 * C) > ey ? ((x += C *= g ? 1 : -1), (w -= C)) : ((M = 0), (x = w = (d + p) / 2)), (N -= 2 * P) > ey ? ((b += P *= g ? 1 : -1), (m -= P)) : ((N = 0), (b = m = (d + p) / 2));
                        }
                        var z = h * Qg(b),
                            R = h * ty(b),
                            q = l * Qg(w),
                            D = l * ty(w);
                        if (k > ey) {
                            var L,
                                U = h * Qg(m),
                                O = h * ty(m),
                                Y = l * Qg(x),
                                B = l * ty(x);
                            if (
                                v < ry &&
                                (L = (function (t, n, e, r, i, o, a, u) {
                                    var c = e - t,
                                        f = r - n,
                                        s = a - i,
                                        l = u - o,
                                        h = l * c - s * f;
                                    if (!(h * h < ey)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f];
                                })(z, R, Y, B, U, O, q, D))
                            ) {
                                var F = z - L[0],
                                    I = R - L[1],
                                    H = U - L[0],
                                    j = O - L[1],
                                    X = 1 / ty(((s = (F * H + I * j) / (ny(F * F + I * I) * ny(H * H + j * j))) > 1 ? 0 : s < -1 ? ry : Math.acos(s)) / 2),
                                    G = ny(L[0] * L[0] + L[1] * L[1]);
                                (T = Kg(k, (l - G) / (X - 1))), (E = Kg(k, (h - G) / (X + 1)));
                            }
                        }
                        N > ey
                            ? E > ey
                                ? ((y = hy(Y, B, z, R, h, E, g)),
                                  (_ = hy(U, O, q, D, h, E, g)),
                                  u.moveTo(y.cx + y.x01, y.cy + y.y01),
                                  E < k
                                      ? u.arc(y.cx, y.cy, E, Zg(y.y01, y.x01), Zg(_.y01, _.x01), !g)
                                      : (u.arc(y.cx, y.cy, E, Zg(y.y01, y.x01), Zg(y.y11, y.x11), !g),
                                        u.arc(0, 0, h, Zg(y.cy + y.y11, y.cx + y.x11), Zg(_.cy + _.y11, _.cx + _.x11), !g),
                                        u.arc(_.cx, _.cy, E, Zg(_.y11, _.x11), Zg(_.y01, _.x01), !g)))
                                : (u.moveTo(z, R), u.arc(0, 0, h, b, m, !g))
                            : u.moveTo(z, R),
                            l > ey && M > ey
                                ? T > ey
                                    ? ((y = hy(q, D, U, O, l, -T, g)),
                                      (_ = hy(z, R, Y, B, l, -T, g)),
                                      u.lineTo(y.cx + y.x01, y.cy + y.y01),
                                      T < k
                                          ? u.arc(y.cx, y.cy, T, Zg(y.y01, y.x01), Zg(_.y01, _.x01), !g)
                                          : (u.arc(y.cx, y.cy, T, Zg(y.y01, y.x01), Zg(y.y11, y.x11), !g),
                                            u.arc(0, 0, l, Zg(y.cy + y.y11, y.cx + y.x11), Zg(_.cy + _.y11, _.cx + _.x11), g),
                                            u.arc(_.cx, _.cy, T, Zg(_.y11, _.x11), Zg(_.y01, _.x01), !g)))
                                    : u.arc(0, 0, l, w, x, g)
                                : u.lineTo(q, D);
                    }
                else u.moveTo(0, 0);
                if ((u.closePath(), c)) return (u = null), c + "" || null;
            }
            return (
                (c.centroid = function () {
                    var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ry / 2;
                    return [Qg(r) * e, ty(r) * e];
                }),
                (c.innerRadius = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : $g(+n)), c) : t;
                }),
                (c.outerRadius = function (t) {
                    return arguments.length ? ((n = "function" == typeof t ? t : $g(+t)), c) : n;
                }),
                (c.cornerRadius = function (t) {
                    return arguments.length ? ((e = "function" == typeof t ? t : $g(+t)), c) : e;
                }),
                (c.padRadius = function (t) {
                    return arguments.length ? ((r = null == t ? null : "function" == typeof t ? t : $g(+t)), c) : r;
                }),
                (c.startAngle = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : $g(+t)), c) : i;
                }),
                (c.endAngle = function (t) {
                    return arguments.length ? ((o = "function" == typeof t ? t : $g(+t)), c) : o;
                }),
                (c.padAngle = function (t) {
                    return arguments.length ? ((a = "function" == typeof t ? t : $g(+t)), c) : a;
                }),
                (c.context = function (t) {
                    return arguments.length ? ((u = null == t ? null : t), c) : u;
                }),
                c
            );
        }),
        (t.area = _y),
        (t.line = yy),
        (t.pie = function () {
            var t = my,
                n = by,
                e = null,
                r = $g(0),
                i = $g(oy),
                o = $g(0);
            function a(a) {
                var u,
                    c,
                    f,
                    s,
                    l,
                    h = a.length,
                    d = 0,
                    p = new Array(h),
                    v = new Array(h),
                    g = +r.apply(this, arguments),
                    y = Math.min(oy, Math.max(-oy, i.apply(this, arguments) - g)),
                    _ = Math.min(Math.abs(y) / h, o.apply(this, arguments)),
                    b = _ * (y < 0 ? -1 : 1);
                for (u = 0; u < h; ++u) (l = v[(p[u] = u)] = +t(a[u], u, a)) > 0 && (d += l);
                for (
                    null != n
                        ? p.sort(function (t, e) {
                              return n(v[t], v[e]);
                          })
                        : null != e &&
                          p.sort(function (t, n) {
                              return e(a[t], a[n]);
                          }),
                        u = 0,
                        f = d ? (y - h * b) / d : 0;
                    u < h;
                    ++u, g = s
                )
                    (c = p[u]), (s = g + ((l = v[c]) > 0 ? l * f : 0) + b), (v[c] = { data: a[c], index: u, value: l, startAngle: g, endAngle: s, padAngle: _ });
                return v;
            }
            return (
                (a.value = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : $g(+n)), a) : t;
                }),
                (a.sortValues = function (t) {
                    return arguments.length ? ((n = t), (e = null), a) : n;
                }),
                (a.sort = function (t) {
                    return arguments.length ? ((e = t), (n = null), a) : e;
                }),
                (a.startAngle = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : $g(+t)), a) : r;
                }),
                (a.endAngle = function (t) {
                    return arguments.length ? ((i = "function" == typeof t ? t : $g(+t)), a) : i;
                }),
                (a.padAngle = function (t) {
                    return arguments.length ? ((o = "function" == typeof t ? t : $g(+t)), a) : o;
                }),
                a
            );
        }),
        (t.areaRadial = Sy),
        (t.radialArea = Sy),
        (t.lineRadial = Ay),
        (t.radialLine = Ay),
        (t.pointRadial = ky),
        (t.linkHorizontal = function () {
            return Py(zy);
        }),
        (t.linkVertical = function () {
            return Py(Ry);
        }),
        (t.linkRadial = function () {
            var t = Py(qy);
            return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
        }),
        (t.symbol = function () {
            var t = $g(Dy),
                n = $g(64),
                e = null;
            function r() {
                var r;
                if ((e || (e = r = ji()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r)) return (e = null), r + "" || null;
            }
            return (
                (r.type = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : $g(n)), r) : t;
                }),
                (r.size = function (t) {
                    return arguments.length ? ((n = "function" == typeof t ? t : $g(+t)), r) : n;
                }),
                (r.context = function (t) {
                    return arguments.length ? ((e = null == t ? null : t), r) : e;
                }),
                r
            );
        }),
        (t.symbols = Qy),
        (t.symbolCircle = Dy),
        (t.symbolCross = Ly),
        (t.symbolDiamond = Yy),
        (t.symbolSquare = jy),
        (t.symbolStar = Hy),
        (t.symbolTriangle = Gy),
        (t.symbolWye = Zy),
        (t.curveBasisClosed = function (t) {
            return new n_(t);
        }),
        (t.curveBasisOpen = function (t) {
            return new e_(t);
        }),
        (t.curveBasis = function (t) {
            return new t_(t);
        }),
        (t.curveBundle = i_),
        (t.curveCardinalClosed = f_),
        (t.curveCardinalOpen = l_),
        (t.curveCardinal = u_),
        (t.curveCatmullRomClosed = g_),
        (t.curveCatmullRomOpen = __),
        (t.curveCatmullRom = p_),
        (t.curveLinearClosed = function (t) {
            return new b_(t);
        }),
        (t.curveLinear = py),
        (t.curveMonotoneX = function (t) {
            return new N_(t);
        }),
        (t.curveMonotoneY = function (t) {
            return new A_(t);
        }),
        (t.curveNatural = function (t) {
            return new k_(t);
        }),
        (t.curveStep = function (t) {
            return new E_(t, 0.5);
        }),
        (t.curveStepAfter = function (t) {
            return new E_(t, 1);
        }),
        (t.curveStepBefore = function (t) {
            return new E_(t, 0);
        }),
        (t.stack = function () {
            var t = $g([]),
                n = P_,
                e = C_,
                r = z_;
            function i(i) {
                var o,
                    a,
                    u = t.apply(this, arguments),
                    c = i.length,
                    f = u.length,
                    s = new Array(f);
                for (o = 0; o < f; ++o) {
                    for (var l, h = u[o], d = (s[o] = new Array(c)), p = 0; p < c; ++p) (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
                    d.key = h;
                }
                for (o = 0, a = n(s); o < f; ++o) s[a[o]].index = o;
                return e(s, a), s;
            }
            return (
                (i.keys = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : $g(Ty.call(n))), i) : t;
                }),
                (i.value = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : $g(+t)), i) : r;
                }),
                (i.order = function (t) {
                    return arguments.length ? ((n = null == t ? P_ : "function" == typeof t ? t : $g(Ty.call(t))), i) : n;
                }),
                (i.offset = function (t) {
                    return arguments.length ? ((e = null == t ? C_ : t), i) : e;
                }),
                i
            );
        }),
        (t.stackOffsetExpand = function (t, n) {
            if ((r = t.length) > 0) {
                for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
                    for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                    if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
                }
                C_(t, n);
            }
        }),
        (t.stackOffsetDiverging = function (t, n) {
            if ((u = t.length) > 1)
                for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c) for (o = a = 0, e = 0; e < u; ++e) (i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? ((r[0] = o), (r[1] = o += i)) : i < 0 ? ((r[1] = a), (r[0] = a += i)) : (r[0] = o);
        }),
        (t.stackOffsetNone = C_),
        (t.stackOffsetSilhouette = function (t, n) {
            if ((e = t.length) > 0) {
                for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                    for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
                    i[r][1] += i[r][0] = -u / 2;
                }
                C_(t, n);
            }
        }),
        (t.stackOffsetWiggle = function (t, n) {
            if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                for (var e, r, i, o = 0, a = 1; a < r; ++a) {
                    for (var u = 0, c = 0, f = 0; u < i; ++u) {
                        for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
                            var p = t[n[d]];
                            h += (p[a][1] || 0) - (p[a - 1][1] || 0);
                        }
                        (c += l), (f += h * l);
                    }
                    (e[a - 1][1] += e[a - 1][0] = o), c && (o -= f / c);
                }
                (e[a - 1][1] += e[a - 1][0] = o), C_(t, n);
            }
        }),
        (t.stackOrderAppearance = R_),
        (t.stackOrderAscending = D_),
        (t.stackOrderDescending = function (t) {
            return D_(t).reverse();
        }),
        (t.stackOrderInsideOut = function (t) {
            var n,
                e,
                r = t.length,
                i = t.map(L_),
                o = R_(t),
                a = 0,
                u = 0,
                c = [],
                f = [];
            for (n = 0; n < r; ++n) (e = o[n]), a < u ? ((a += i[e]), c.push(e)) : ((u += i[e]), f.push(e));
            return f.reverse().concat(c);
        }),
        (t.stackOrderNone = P_),
        (t.stackOrderReverse = function (t) {
            return P_(t).reverse();
        }),
        (t.timeInterval = Hh),
        (t.timeMillisecond = jh),
        (t.timeMilliseconds = Xh),
        (t.utcMillisecond = jh),
        (t.utcMilliseconds = Xh),
        (t.timeSecond = $h),
        (t.timeSeconds = Wh),
        (t.utcSecond = $h),
        (t.utcSeconds = Wh),
        (t.timeMinute = Zh),
        (t.timeMinutes = Qh),
        (t.timeHour = Jh),
        (t.timeHours = Kh),
        (t.timeDay = td),
        (t.timeDays = nd),
        (t.timeWeek = rd),
        (t.timeWeeks = sd),
        (t.timeSunday = rd),
        (t.timeSundays = sd),
        (t.timeMonday = id),
        (t.timeMondays = ld),
        (t.timeTuesday = od),
        (t.timeTuesdays = hd),
        (t.timeWednesday = ad),
        (t.timeWednesdays = dd),
        (t.timeThursday = ud),
        (t.timeThursdays = pd),
        (t.timeFriday = cd),
        (t.timeFridays = vd),
        (t.timeSaturday = fd),
        (t.timeSaturdays = gd),
        (t.timeMonth = yd),
        (t.timeMonths = _d),
        (t.timeYear = bd),
        (t.timeYears = md),
        (t.utcMinute = xd),
        (t.utcMinutes = wd),
        (t.utcHour = Md),
        (t.utcHours = Nd),
        (t.utcDay = Ad),
        (t.utcDays = Sd),
        (t.utcWeek = Td),
        (t.utcWeeks = Dd),
        (t.utcSunday = Td),
        (t.utcSundays = Dd),
        (t.utcMonday = Ed),
        (t.utcMondays = Ld),
        (t.utcTuesday = Cd),
        (t.utcTuesdays = Ud),
        (t.utcWednesday = Pd),
        (t.utcWednesdays = Od),
        (t.utcThursday = zd),
        (t.utcThursdays = Yd),
        (t.utcFriday = Rd),
        (t.utcFridays = Bd),
        (t.utcSaturday = qd),
        (t.utcSaturdays = Fd),
        (t.utcMonth = Id),
        (t.utcMonths = Hd),
        (t.utcYear = jd),
        (t.utcYears = Xd),
        (t.timeFormatDefaultLocale = uv),
        (t.timeFormatLocale = Wd),
        (t.isoFormat = cv),
        (t.isoParse = fv),
        (t.now = nr),
        (t.timer = ir),
        (t.timerFlush = or),
        (t.timeout = fr),
        (t.interval = function (t, n, e) {
            var r = new rr(),
                i = n;
            return null == n
                ? (r.restart(t, n, e), r)
                : ((n = +n),
                  (e = null == e ? nr() : +e),
                  r.restart(
                      function o(a) {
                          (a += i), r.restart(o, (i += n), e), t(a);
                      },
                      n,
                      e
                  ),
                  r);
        }),
        (t.transition = Cr),
        (t.active = function (t, n) {
            var e,
                r,
                i = t.__transition;
            if (i) for (r in ((n = null == n ? null : n + ""), i)) if ((e = i[r]).state > dr && e.name === n) return new Er([[t]], fi, n, +r);
            return null;
        }),
        (t.interrupt = Mr),
        (t.voronoi = function () {
            var t = O_,
                n = Y_,
                e = null;
            function r(r) {
                return new bb(
                    r.map(function (e, i) {
                        var o = [Math.round(t(e, i, r) / gb) * gb, Math.round(n(e, i, r) / gb) * gb];
                        return (o.index = i), (o.data = e), o;
                    }),
                    e
                );
            }
            return (
                (r.polygons = function (t) {
                    return r(t).polygons();
                }),
                (r.links = function (t) {
                    return r(t).links();
                }),
                (r.triangles = function (t) {
                    return r(t).triangles();
                }),
                (r.x = function (n) {
                    return arguments.length ? ((t = "function" == typeof n ? n : U_(+n)), r) : t;
                }),
                (r.y = function (t) {
                    return arguments.length ? ((n = "function" == typeof t ? t : U_(+t)), r) : n;
                }),
                (r.extent = function (t) {
                    return arguments.length
                        ? ((e =
                              null == t
                                  ? null
                                  : [
                                        [+t[0][0], +t[0][1]],
                                        [+t[1][0], +t[1][1]],
                                    ]),
                          r)
                        : e && [
                              [e[0][0], e[0][1]],
                              [e[1][0], e[1][1]],
                          ];
                }),
                (r.size = function (t) {
                    return arguments.length
                        ? ((e =
                              null == t
                                  ? null
                                  : [
                                        [0, 0],
                                        [+t[0], +t[1]],
                                    ]),
                          r)
                        : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
                }),
                r
            );
        }),
        (t.zoom = function () {
            var n,
                e,
                r = kb,
                i = Tb,
                o = zb,
                a = Cb,
                u = Pb,
                c = [0, 1 / 0],
                f = [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0],
                ],
                s = 250,
                l = qe,
                h = [],
                d = I("start", "zoom", "end"),
                p = 500,
                v = 150,
                g = 0;
            function y(t) {
                t.property("__zoom", Eb)
                    .on("wheel.zoom", N)
                    .on("mousedown.zoom", A)
                    .on("dblclick.zoom", S)
                    .filter(u)
                    .on("touchstart.zoom", k)
                    .on("touchmove.zoom", T)
                    .on("touchend.zoom touchcancel.zoom", E)
                    .style("touch-action", "none")
                    .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
            }
            function _(t, n) {
                return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new wb(n, t.x, t.y);
            }
            function b(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new wb(t.k, r, i);
            }
            function m(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
            }
            function x(t, n, e) {
                t.on("start.zoom", function () {
                    w(this, arguments).start();
                })
                    .on("interrupt.zoom end.zoom", function () {
                        w(this, arguments).end();
                    })
                    .tween("zoom", function () {
                        var t = arguments,
                            r = w(this, t),
                            o = i.apply(this, t),
                            a = e || m(o),
                            u = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                            c = this.__zoom,
                            f = "function" == typeof n ? n.apply(this, t) : n,
                            s = l(c.invert(a).concat(u / c.k), f.invert(a).concat(u / f.k));
                        return function (t) {
                            if (1 === t) t = f;
                            else {
                                var n = s(t),
                                    e = u / n[2];
                                t = new wb(e, a[0] - n[0] * e, a[1] - n[1] * e);
                            }
                            r.zoom(null, t);
                        };
                    });
            }
            function w(t, n) {
                for (var e, r = 0, i = h.length; r < i; ++r) if ((e = h[r]).that === t) return e;
                return new M(t, n);
            }
            function M(t, n) {
                (this.that = t), (this.args = n), (this.index = -1), (this.active = 0), (this.extent = i.apply(t, n));
            }
            function N() {
                if (r.apply(this, arguments)) {
                    var t = w(this, arguments),
                        n = this.__zoom,
                        e = Math.max(c[0], Math.min(c[1], n.k * Math.pow(2, a.apply(this, arguments)))),
                        i = Ot(this);
                    if (t.wheel) (t.mouse[0][0] === i[0] && t.mouse[0][1] === i[1]) || (t.mouse[1] = n.invert((t.mouse[0] = i))), clearTimeout(t.wheel);
                    else {
                        if (n.k === e) return;
                        (t.mouse = [i, n.invert(i)]), Mr(this), t.start();
                    }
                    Sb(),
                        (t.wheel = setTimeout(function () {
                            (t.wheel = null), t.end();
                        }, v)),
                        t.zoom("mouse", o(b(_(n, e), t.mouse[0], t.mouse[1]), t.extent, f));
                }
            }
            function A() {
                if (!e && r.apply(this, arguments)) {
                    var n = w(this, arguments),
                        i = zt(t.event.view)
                            .on(
                                "mousemove.zoom",
                                function () {
                                    if ((Sb(), !n.moved)) {
                                        var e = t.event.clientX - u,
                                            r = t.event.clientY - c;
                                        n.moved = e * e + r * r > g;
                                    }
                                    n.zoom("mouse", o(b(n.that.__zoom, (n.mouse[0] = Ot(n.that)), n.mouse[1]), n.extent, f));
                                },
                                !0
                            )
                            .on(
                                "mouseup.zoom",
                                function () {
                                    i.on("mousemove.zoom mouseup.zoom", null), Ht(t.event.view, n.moved), Sb(), n.end();
                                },
                                !0
                            ),
                        a = Ot(this),
                        u = t.event.clientX,
                        c = t.event.clientY;
                    It(t.event.view), Ab(), (n.mouse = [a, this.__zoom.invert(a)]), Mr(this), n.start();
                }
            }
            function S() {
                if (r.apply(this, arguments)) {
                    var n = this.__zoom,
                        e = Ot(this),
                        a = n.invert(e),
                        u = n.k * (t.event.shiftKey ? 0.5 : 2),
                        c = o(b(_(n, u), e, a), i.apply(this, arguments), f);
                    Sb(), s > 0 ? zt(this).transition().duration(s).call(x, c, e) : zt(this).call(y.transform, c);
                }
            }
            function k() {
                if (r.apply(this, arguments)) {
                    var e,
                        i,
                        o,
                        a,
                        u = w(this, arguments),
                        c = t.event.changedTouches,
                        f = c.length;
                    for (Ab(), i = 0; i < f; ++i) (a = [(a = Yt(this, c, (o = c[i]).identifier)), this.__zoom.invert(a), o.identifier]), u.touch0 ? u.touch1 || (u.touch1 = a) : ((u.touch0 = a), (e = !0));
                    if (n && ((n = clearTimeout(n)), !u.touch1)) return u.end(), void ((a = zt(this).on("dblclick.zoom")) && a.apply(this, arguments));
                    e &&
                        ((n = setTimeout(function () {
                            n = null;
                        }, p)),
                        Mr(this),
                        u.start());
                }
            }
            function T() {
                var e,
                    r,
                    i,
                    a,
                    u = w(this, arguments),
                    c = t.event.changedTouches,
                    s = c.length;
                for (Sb(), n && (n = clearTimeout(n)), e = 0; e < s; ++e)
                    (i = Yt(this, c, (r = c[e]).identifier)), u.touch0 && u.touch0[2] === r.identifier ? (u.touch0[0] = i) : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);
                if (((r = u.that.__zoom), u.touch1)) {
                    var l = u.touch0[0],
                        h = u.touch0[1],
                        d = u.touch1[0],
                        p = u.touch1[1],
                        v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v,
                        g = (g = p[0] - h[0]) * g + (g = p[1] - h[1]) * g;
                    (r = _(r, Math.sqrt(v / g))), (i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]), (a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]);
                } else {
                    if (!u.touch0) return;
                    (i = u.touch0[0]), (a = u.touch0[1]);
                }
                u.zoom("touch", o(b(r, i, a), u.extent, f));
            }
            function E() {
                var n,
                    r,
                    i = w(this, arguments),
                    o = t.event.changedTouches,
                    a = o.length;
                for (
                    Ab(),
                        e && clearTimeout(e),
                        e = setTimeout(function () {
                            e = null;
                        }, p),
                        n = 0;
                    n < a;
                    ++n
                )
                    (r = o[n]), i.touch0 && i.touch0[2] === r.identifier ? delete i.touch0 : i.touch1 && i.touch1[2] === r.identifier && delete i.touch1;
                i.touch1 && !i.touch0 && ((i.touch0 = i.touch1), delete i.touch1), i.touch0 ? (i.touch0[1] = this.__zoom.invert(i.touch0[0])) : i.end();
            }
            return (
                (y.transform = function (t, n) {
                    var e = t.selection ? t.selection() : t;
                    e.property("__zoom", Eb),
                        t !== e
                            ? x(t, n)
                            : e.interrupt().each(function () {
                                  w(this, arguments)
                                      .start()
                                      .zoom(null, "function" == typeof n ? n.apply(this, arguments) : n)
                                      .end();
                              });
                }),
                (y.scaleBy = function (t, n) {
                    y.scaleTo(t, function () {
                        return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n);
                    });
                }),
                (y.scaleTo = function (t, n) {
                    y.transform(t, function () {
                        var t = i.apply(this, arguments),
                            e = this.__zoom,
                            r = m(t),
                            a = e.invert(r),
                            u = "function" == typeof n ? n.apply(this, arguments) : n;
                        return o(b(_(e, u), r, a), t, f);
                    });
                }),
                (y.translateBy = function (t, n, e) {
                    y.transform(t, function () {
                        return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f);
                    });
                }),
                (y.translateTo = function (t, n, e) {
                    y.transform(t, function () {
                        var t = i.apply(this, arguments),
                            r = this.__zoom,
                            a = m(t);
                        return o(
                            Mb.translate(a[0], a[1])
                                .scale(r.k)
                                .translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e),
                            t,
                            f
                        );
                    });
                }),
                (M.prototype = {
                    start: function () {
                        return 1 == ++this.active && ((this.index = h.push(this) - 1), this.emit("start")), this;
                    },
                    zoom: function (t, n) {
                        return (
                            this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                            this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                            this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                            (this.that.__zoom = n),
                            this.emit("zoom"),
                            this
                        );
                    },
                    end: function () {
                        return 0 == --this.active && (h.splice(this.index, 1), (this.index = -1), this.emit("end")), this;
                    },
                    emit: function (t) {
                        kt(new xb(y, t, this.that.__zoom), d.apply, d, [t, this.that, this.args]);
                    },
                }),
                (y.wheelDelta = function (t) {
                    return arguments.length ? ((a = "function" == typeof t ? t : mb(+t)), y) : a;
                }),
                (y.filter = function (t) {
                    return arguments.length ? ((r = "function" == typeof t ? t : mb(!!t)), y) : r;
                }),
                (y.touchable = function (t) {
                    return arguments.length ? ((u = "function" == typeof t ? t : mb(!!t)), y) : u;
                }),
                (y.extent = function (t) {
                    return arguments.length
                        ? ((i =
                              "function" == typeof t
                                  ? t
                                  : mb([
                                        [+t[0][0], +t[0][1]],
                                        [+t[1][0], +t[1][1]],
                                    ])),
                          y)
                        : i;
                }),
                (y.scaleExtent = function (t) {
                    return arguments.length ? ((c[0] = +t[0]), (c[1] = +t[1]), y) : [c[0], c[1]];
                }),
                (y.translateExtent = function (t) {
                    return arguments.length
                        ? ((f[0][0] = +t[0][0]), (f[1][0] = +t[1][0]), (f[0][1] = +t[0][1]), (f[1][1] = +t[1][1]), y)
                        : [
                              [f[0][0], f[0][1]],
                              [f[1][0], f[1][1]],
                          ];
                }),
                (y.constrain = function (t) {
                    return arguments.length ? ((o = t), y) : o;
                }),
                (y.duration = function (t) {
                    return arguments.length ? ((s = +t), y) : s;
                }),
                (y.interpolate = function (t) {
                    return arguments.length ? ((l = t), y) : l;
                }),
                (y.on = function () {
                    var t = d.on.apply(d, arguments);
                    return t === d ? y : t;
                }),
                (y.clickDistance = function (t) {
                    return arguments.length ? ((g = (t = +t) * t), y) : Math.sqrt(g);
                }),
                y
            );
        }),
        (t.zoomTransform = Nb),
        (t.zoomIdentity = Mb),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
