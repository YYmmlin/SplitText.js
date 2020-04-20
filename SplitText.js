var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(r) {
    "use strict";
    var o = r.GreenSockGlobals || r,
        e = function(e) {
            var t, i = e.split("."),
                n = o;
            for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
            return n
        }("com.greensock.utils"),
        s = "SplitText",
        l = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        i = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        n = function(e) {
            for (var t = -1 !== (r ? r.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), i = [l, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = i.length; - 1 < --n;)
                if (-1 !== e.indexOf(i[n])) return !0;
            return t && r && r.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + s + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
        }(r ? r.location.host : ""),
        T = function(e) {
            var t = e.nodeType,
                i = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) i += T(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return i
        },
        q = document,
        t = void 0 !== r ? r : q.defaultView || {
            getComputedStyle: function() {}
        },
        z = function(e) {
            return t.getComputedStyle(e)
        },
        a = /([A-Z])/g,
        D = function(e, t, i, n) {
            var r;
            return (i = i || z(e)) ? r = (e = i.getPropertyValue(t.replace(a, "-$1").toLowerCase())) || i.length ? e : i[t] : e.currentStyle && (r = (i = e.currentStyle)[t]), n ? r : parseInt(r, 10) || 0
        },
        d = function(e) {
            return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        },
        N = function(e, t) {
            for (var i, n = t.length; - 1 < --n;)
                if (i = t[n], e.substr(0, i.length) === i) return i.length
        },
        w = /(?:\r|\n|\t\t)/g,
        A = /(?:\s\s+)/g,
        L = 127462,
        B = 127487,
        O = function(e) {
            return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
        },
        h = " style='position:relative;display:inline-block;" + (q.all && !q.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
        p = function(e, t) {
            var i = -1 !== (e = e || "").indexOf("++"),
                n = 1;
            return i && (e = e.split("++").join("")),
                function() {
                    return "<" + t + h + (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
                }
        },
        f = e.SplitText = o.SplitText = function(e, t) {
            // if ("string" == typeof e && (e = f.selector(e)), !n) return r.location.href = "http://" + l + i + "?plugin=" + s + "&source=codepen", !1;
            if (!e) throw "cannot split a null element.";
            this.elements = d(e) ? function(e) {
                var t, i, n, r = [],
                    o = e.length;
                for (t = 0; t < o; t++)
                    if (i = e[t], d(i))
                        for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                    else r.push(i);
                return r
            }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        },
        F = function(e, t, i) {
            var n = e.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (e = e.firstChild; e; e = e.nextSibling) F(e, t, i);
            else 3 !== n && 4 !== n || (e.nodeValue = e.nodeValue.split(t).join(i))
        },
        I = function(e, t) {
            for (var i = t.length; - 1 < --i;) e.push(t[i])
        },
        u = function(e) {
            var t, i = [],
                n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i
        },
        P = function(e, t, i) {
            for (var n; e && e !== t;) {
                if (n = e._next || e.nextSibling) return n.textContent.charAt(0) === i;
                e = e.parentNode || e._parent
            }
            return !1
        },
        Q = function(e) {
            var t, i, n = u(e.childNodes),
                r = n.length;
            for (t = 0; t < r; t++)(i = n[t])._isSplit ? Q(i) : (t && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && e.insertBefore(i.firstChild, i), e.removeChild(i))
        },
        g = function(e, t, i, n, r, o, s) {
            var l, a, d, h, p, f, u, g, c, C, S, m, x = z(e),
                y = D(e, "paddingLeft", x),
                b = -999,
                v = D(e, "borderBottomWidth", x) + D(e, "borderTopWidth", x),
                _ = D(e, "borderLeftWidth", x) + D(e, "borderRightWidth", x),
                T = D(e, "paddingTop", x) + D(e, "paddingBottom", x),
                N = D(e, "paddingLeft", x) + D(e, "paddingRight", x),
                w = .2 * D(e, "fontSize"),
                A = D(e, "textAlign", x, !0),
                L = [],
                B = [],
                O = [],
                V = t.wordDelimiter || " ",
                W = t.tag ? t.tag : t.span ? "span" : "div",
                H = t.type || t.split || "chars,words,lines",
                E = r && -1 !== H.indexOf("lines") ? [] : null,
                k = -1 !== H.indexOf("words"),
                R = -1 !== H.indexOf("chars"),
                j = "absolute" === t.position || !0 === t.absolute,
                M = t.linesClass,
                G = -1 !== (M || "").indexOf("++"),
                $ = [];
            for (G && (M = M.split("++").join("")), d = (a = e.getElementsByTagName("*")).length, p = [], l = 0; l < d; l++) p[l] = a[l];
            if (E || j)
                for (l = 0; l < d; l++)((f = (h = p[l]).parentNode === e) || j || R && !k) && (m = h.offsetTop, E && f && Math.abs(m - b) > w && ("BR" !== h.nodeName || 0 === l) && (u = [], E.push(u), b = m), j && (h._x = h.offsetLeft, h._y = m, h._w = h.offsetWidth, h._h = h.offsetHeight), E && ((h._isSplit && f || !R && f || k && f || !k && h.parentNode.parentNode === e && !h.parentNode._isSplit) && (u.push(h), h._x -= y, P(h, e, V) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === l) && E.push([])));
            for (l = 0; l < d; l++) f = (h = p[l]).parentNode === e, "BR" !== h.nodeName ? (j && (c = h.style, k || f || (h._x += h.parentNode._x, h._y += h.parentNode._y), c.left = h._x + "px", c.top = h._y + "px", c.position = "absolute", c.display = "block", c.width = h._w + 1 + "px", c.height = h._h + "px"), !k && R ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && $.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), p.splice(l--, 1), d--) : f || (m = !h.nextSibling && P(h.parentNode, e, V), h.parentNode._parent && h.parentNode._parent.appendChild(h), m && h.parentNode.appendChild(q.createTextNode(" ")), "span" === W && (h.style.display = "inline"), L.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? B.push(h) : R && !h._isSplit && ("span" === W && (h.style.display = "inline"), L.push(h))) : E || j ? (h.parentNode && h.parentNode.removeChild(h), p.splice(l--, 1), d--) : k || e.appendChild(h);
            for (l = $.length; - 1 < --l;) $[l].parentNode.removeChild($[l]);
            if (E) {
                for (j && (C = q.createElement(W), e.appendChild(C), S = C.offsetWidth + "px", m = C.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(C)), c = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (g = " " === V && (!j || !k && !R), l = 0; l < E.length; l++) {
                    for (u = E[l], (C = q.createElement(W)).style.cssText = "display:block;text-align:" + A + ";position:" + (j ? "absolute;" : "relative;"), M && (C.className = M + (G ? l + 1 : "")), O.push(C), d = u.length, a = 0; a < d; a++) "BR" !== u[a].nodeName && (h = u[a], C.appendChild(h), g && h._wordEnd && C.appendChild(q.createTextNode(" ")), j && (0 === a && (C.style.top = h._y + "px", C.style.left = y + m + "px"), h.style.top = "0px", m && (h.style.left = h._x - m + "px")));
                    0 === d ? C.innerHTML = "&nbsp;" : k || R || (Q(C), F(C, String.fromCharCode(160), " ")), j && (C.style.width = S, C.style.height = h._h + "px"), e.appendChild(C)
                }
                e.style.cssText = c
            }
            j && (s > e.clientHeight && (e.style.height = s - T + "px", e.clientHeight < s && (e.style.height = s + v + "px")), o > e.clientWidth && (e.style.width = o - N + "px", e.clientWidth < o && (e.style.width = o + _ + "px"))), I(i, L), k && I(n, B), I(r, O)
        },
        c = function(e, t, i, n) {
            var r, o, s = u(e.childNodes),
                l = s.length,
                a = "absolute" === t.position || !0 === t.absolute;
            if (3 !== e.nodeType || 1 < l) {
                for (t.absolute = !1, r = 0; r < l; r++)(3 !== (o = s[r]).nodeType || /\S+/.test(o.nodeValue)) && (a && 3 !== o.nodeType && "inline" === D(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, c(o, t, i, n));
                return t.absolute = a, void(e._isSplit = !0)
            }! function(e, t, i, n) {
                var r, o, s, l, a, d, h, p, f, u, g = t.tag ? t.tag : t.span ? "span" : "div",
                    c = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                    C = "absolute" === t.position || !0 === t.absolute,
                    S = t.wordDelimiter || " ",
                    m = " " !== S ? "" : C ? "&#173; " : " ",
                    x = "</" + g + ">",
                    y = !0,
                    b = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : N : null,
                    v = q.createElement("div"),
                    _ = e.parentNode;
                for (_.insertBefore(v, e), v.textContent = e.nodeValue, _.removeChild(e), h = -1 !== (r = T(e = v)).indexOf("<"), !1 !== t.reduceWhiteSpace && (r = r.replace(A, " ").replace(w, "")), h && (r = r.split("<").join("{{LT}}")), a = r.length, o = (" " === r.charAt(0) ? m : "") + i(), s = 0; s < a; s++)
                    if (d = r.charAt(s), b && (u = b(r.substr(s), t.specialChars))) d = r.substr(s, u || 1), o += c && " " !== d ? n() + d + "</" + g + ">" : d, s += u - 1;
                    else if (d === S && r.charAt(s - 1) !== S && s) {
                    for (o += y ? x : "", y = !1; r.charAt(s + 1) === S;) o += m, s++;
                    s === a - 1 ? o += m : ")" !== r.charAt(s + 1) && (o += m + i(), y = !0)
                } else "{" === d && "{{LT}}" === r.substr(s, 6) ? (o += c ? n() + "{{LT}}</" + g + ">" : "{{LT}}", s += 5) : 55296 <= d.charCodeAt(0) && d.charCodeAt(0) <= 56319 || 65024 <= r.charCodeAt(s + 1) && r.charCodeAt(s + 1) <= 65039 ? (p = O(r.substr(s, 2)), f = O(r.substr(s + 2, 2)), l = L <= p && p <= B && L <= f && f <= B || 127995 <= f && f <= 127999 ? 4 : 2, o += c && " " !== d ? n() + r.substr(s, l) + "</" + g + ">" : r.substr(s, l), s += l - 1) : o += c && " " !== d ? n() + d + "</" + g + ">" : d;
                e.outerHTML = o + (y ? x : ""), h && F(_, "{{LT}}", "<")
            }(e, t, i, n)
        },
        C = f.prototype;
    C.split = function(e) {
        this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var t, i, n, r = this.elements.length, o = e.tag ? e.tag : e.span ? "span" : "div", s = p(e.wordsClass, o), l = p(e.charsClass, o); - 1 < --r;) n = this.elements[r], this._originals[r] = n.innerHTML, t = n.clientHeight, i = n.clientWidth, c(n, e, s, l), g(n, e, this.chars, this.words, this.lines, i, t);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, C.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var e = this._originals.length; - 1 < --e;) this.elements[e].innerHTML = this._originals[e];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, f.selector = r.$ || r.jQuery || function(e) {
        var t = r.$ || r.jQuery;
        return t ? (f.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, f.version = "0.7.0"
}(_gsScope),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).SplitText
    };
    "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd && define([], t)
}();
