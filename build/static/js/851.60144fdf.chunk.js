/*! For license information please see 851.60144fdf.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunktea_taster = self.webpackChunktea_taster || []).push([
  [851],
  {
    6851: function (e, t, a) {
      a.r(t),
        a.d(t, {
          Swiper: function () {
            return V;
          },
        });
      var i = a(2963),
        n = a(7326),
        r = a(136),
        s = a(1404),
        o = a(4942),
        l = a(3144),
        d = a(5671);
      function c(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function u(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (a) {
            "undefined" === typeof e[a]
              ? (e[a] = t[a])
              : c(t[a]) &&
                c(e[a]) &&
                Object.keys(t[a]).length > 0 &&
                u(e[a], t[a]);
          });
      }
      var p = "undefined" !== typeof document ? document : {},
        h = {
          body: {},
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: "" },
          querySelector: function () {
            return null;
          },
          querySelectorAll: function () {
            return [];
          },
          getElementById: function () {
            return null;
          },
          createEvent: function () {
            return { initEvent: function () {} };
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return [];
              },
            };
          },
          createElementNS: function () {
            return {};
          },
          importNode: function () {
            return null;
          },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
        };
      u(p, h);
      var v = "undefined" !== typeof window ? window : {};
      u(v, {
        document: h,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
      });
      var f = (0, l.Z)(function e(t) {
        (0, d.Z)(this, e);
        for (var a = 0; a < t.length; a += 1) this[a] = t[a];
        return (this.length = t.length), this;
      });
      function m(e, t) {
        var a = [],
          i = 0;
        if (e && !t && e instanceof f) return e;
        if (e)
          if ("string" === typeof e) {
            var n,
              r,
              s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
              var o = "div";
              for (
                0 === s.indexOf("<li") && (o = "ul"),
                  0 === s.indexOf("<tr") && (o = "tbody"),
                  (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) ||
                    (o = "tr"),
                  0 === s.indexOf("<tbody") && (o = "table"),
                  0 === s.indexOf("<option") && (o = "select"),
                  (r = p.createElement(o)).innerHTML = s,
                  i = 0;
                i < r.childNodes.length;
                i += 1
              )
                a.push(r.childNodes[i]);
            } else
              for (
                n =
                  t || "#" !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || p).querySelectorAll(e.trim())
                    : [p.getElementById(e.trim().split("#")[1])],
                  i = 0;
                i < n.length;
                i += 1
              )
                n[i] && a.push(n[i]);
          } else if (e.nodeType || e === v || e === p) a.push(e);
          else if (e.length > 0 && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new f(a);
      }
      function g(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      }
      (m.fn = f.prototype), (m.Class = f), (m.Dom7 = f);
      var b = {
        addClass: function (e) {
          if ("undefined" === typeof e) return this;
          for (var t = e.split(" "), a = 0; a < t.length; a += 1)
            for (var i = 0; i < this.length; i += 1)
              "undefined" !== typeof this[i] &&
                "undefined" !== typeof this[i].classList &&
                this[i].classList.add(t[a]);
          return this;
        },
        removeClass: function (e) {
          for (var t = e.split(" "), a = 0; a < t.length; a += 1)
            for (var i = 0; i < this.length; i += 1)
              "undefined" !== typeof this[i] &&
                "undefined" !== typeof this[i].classList &&
                this[i].classList.remove(t[a]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          for (var t = e.split(" "), a = 0; a < t.length; a += 1)
            for (var i = 0; i < this.length; i += 1)
              "undefined" !== typeof this[i] &&
                "undefined" !== typeof this[i].classList &&
                this[i].classList.toggle(t[a]);
          return this;
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var a = 0; a < this.length; a += 1)
            if (2 === arguments.length) this[a].setAttribute(e, t);
            else
              for (var i in e)
                (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          var a;
          if ("undefined" !== typeof t) {
            for (var i = 0; i < this.length; i += 1)
              (a = this[i]).dom7ElementDataStorage ||
                (a.dom7ElementDataStorage = {}),
                (a.dom7ElementDataStorage[e] = t);
            return this;
          }
          if ((a = this[0])) {
            if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
              return a.dom7ElementDataStorage[e];
            var n = a.getAttribute("data-".concat(e));
            return n || void 0;
          }
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) {
            var a = this[t].style;
            (a.webkitTransform = e), (a.transform = e);
          }
          return this;
        },
        transition: function (e) {
          "string" !== typeof e && (e = "".concat(e, "ms"));
          for (var t = 0; t < this.length; t += 1) {
            var a = this[t].style;
            (a.webkitTransitionDuration = e), (a.transitionDuration = e);
          }
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var a = e.target.dom7EventData || [];
              if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(n))) r.apply(t, a);
              else
                for (var i = m(t).parents(), s = 0; s < i.length; s += 1)
                  m(i[s]).is(n) && r.apply(i[s], a);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((i = t[0]), (r = t[1]), (s = t[2]), (n = void 0)),
            s || (s = !1);
          for (var d, c = i.split(" "), u = 0; u < this.length; u += 1) {
            var p = this[u];
            if (n)
              for (d = 0; d < c.length; d += 1) {
                var h = c[d];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                  p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []),
                  p.dom7LiveListeners[h].push({
                    listener: r,
                    proxyListener: o,
                  }),
                  p.addEventListener(h, o, s);
              }
            else
              for (d = 0; d < c.length; d += 1) {
                var v = c[d];
                p.dom7Listeners || (p.dom7Listeners = {}),
                  p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                  p.dom7Listeners[v].push({ listener: r, proxyListener: l }),
                  p.addEventListener(v, l, s);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3];
          "function" === typeof t[1] &&
            ((i = t[0]), (r = t[1]), (s = t[2]), (n = void 0)),
            s || (s = !1);
          for (var o = i.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], c = 0; c < this.length; c += 1) {
              var u = this[c],
                p = void 0;
              if (
                (!n && u.dom7Listeners
                  ? (p = u.dom7Listeners[d])
                  : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
                p && p.length)
              )
                for (var h = p.length - 1; h >= 0; h -= 1) {
                  var v = p[h];
                  (r && v.listener === r) ||
                  (r &&
                    v.listener &&
                    v.listener.dom7proxy &&
                    v.listener.dom7proxy === r)
                    ? (u.removeEventListener(d, v.proxyListener, s),
                      p.splice(h, 1))
                    : r ||
                      (u.removeEventListener(d, v.proxyListener, s),
                      p.splice(h, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          for (var i = t[0].split(" "), n = t[1], r = 0; r < i.length; r += 1)
            for (var s = i[r], o = 0; o < this.length; o += 1) {
              var l = this[o],
                d = void 0;
              try {
                d = new v.CustomEvent(s, {
                  detail: n,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (c) {
                (d = p.createEvent("Event")).initEvent(s, !0, !0),
                  (d.detail = n);
              }
              (l.dom7EventData = t.filter(function (e, t) {
                return t > 0;
              })),
                l.dispatchEvent(d),
                (l.dom7EventData = []),
                delete l.dom7EventData;
            }
          return this;
        },
        transitionEnd: function (e) {
          var t,
            a = ["webkitTransitionEnd", "transitionend"],
            i = this;
          function n(r) {
            if (r.target === this)
              for (e.call(this, r), t = 0; t < a.length; t += 1) i.off(a[t], n);
          }
          if (e) for (t = 0; t < a.length; t += 1) i.on(a[t], n);
          return this;
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (this.length > 0) {
            var e = this[0],
              t = e.getBoundingClientRect(),
              a = p.body,
              i = e.clientTop || a.clientTop || 0,
              n = e.clientLeft || a.clientLeft || 0,
              r = e === v ? v.scrollY : e.scrollTop,
              s = e === v ? v.scrollX : e.scrollLeft;
            return { top: t.top + r - i, left: t.left + s - n };
          }
          return null;
        },
        css: function (e, t) {
          var a;
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (a = 0; a < this.length; a += 1)
                for (var i in e) this[a].style[i] = e[i];
              return this;
            }
            if (this[0])
              return v.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          if (!e) return this;
          for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            a,
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = m(e), a = 0; a < t.length; a += 1)
              if (t[a] === i) return !0;
            return !1;
          }
          if (e === p) return i === p;
          if (e === v) return i === v;
          if (e.nodeType || e instanceof f) {
            for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
              if (t[a] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t,
            a = this.length;
          return new f(
            e > a - 1
              ? []
              : e < 0
              ? (t = a + e) < 0
                ? []
                : [this[t]]
              : [this[e]]
          );
        },
        append: function () {
          for (var e, t = 0; t < arguments.length; t += 1) {
            e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            for (var a = 0; a < this.length; a += 1)
              if ("string" === typeof e) {
                var i = p.createElement("div");
                for (i.innerHTML = e; i.firstChild; )
                  this[a].appendChild(i.firstChild);
              } else if (e instanceof f)
                for (var n = 0; n < e.length; n += 1) this[a].appendChild(e[n]);
              else this[a].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t, a;
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var i = p.createElement("div");
              for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1)
                this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
            } else if (e instanceof f)
              for (a = 0; a < e.length; a += 1)
                this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                m(this[0].nextElementSibling).is(e)
                ? new f([this[0].nextElementSibling])
                : new f([])
              : this[0].nextElementSibling
              ? new f([this[0].nextElementSibling])
              : new f([])
            : new f([]);
        },
        nextAll: function (e) {
          var t = [],
            a = this[0];
          if (!a) return new f([]);
          for (; a.nextElementSibling; ) {
            var i = a.nextElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
          }
          return new f(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && m(t.previousElementSibling).is(e)
                ? new f([t.previousElementSibling])
                : new f([])
              : t.previousElementSibling
              ? new f([t.previousElementSibling])
              : new f([]);
          }
          return new f([]);
        },
        prevAll: function (e) {
          var t = [],
            a = this[0];
          if (!a) return new f([]);
          for (; a.previousElementSibling; ) {
            var i = a.previousElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
          }
          return new f(t);
        },
        parent: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            null !== this[a].parentNode &&
              (e
                ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
                : t.push(this[a].parentNode));
          return m(g(t));
        },
        parents: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].parentNode; i; )
              e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          return m(g(t));
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? new f([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (
              var i = this[a].querySelectorAll(e), n = 0;
              n < i.length;
              n += 1
            )
              t.push(i[n]);
          return new f(t);
        },
        children: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].childNodes, n = 0; n < i.length; n += 1)
              e
                ? 1 === i[n].nodeType && m(i[n]).is(e) && t.push(i[n])
                : 1 === i[n].nodeType && t.push(i[n]);
          return new f(g(t));
        },
        filter: function (e) {
          for (var t = [], a = this, i = 0; i < a.length; i += 1)
            e.call(a[i], i, a[i]) && t.push(a[i]);
          return new f(t);
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function () {
          for (
            var e, t, a = this, i = arguments.length, n = new Array(i), r = 0;
            r < i;
            r++
          )
            n[r] = arguments[r];
          for (e = 0; e < n.length; e += 1) {
            var s = m(n[e]);
            for (t = 0; t < s.length; t += 1)
              (a[a.length] = s[t]), (a.length += 1);
          }
          return a;
        },
        styles: function () {
          return this[0] ? v.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(b).forEach(function (e) {
        m.fn[e] = m.fn[e] || b[e];
      });
      var w = {
          deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
              try {
                t[e] = null;
              } catch (a) {}
              try {
                delete t[e];
              } catch (a) {}
            });
          },
          nextTick: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return setTimeout(e, t);
          },
          now: function () {
            return Date.now();
          },
          getTranslate: function (e) {
            var t,
              a,
              i,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "x",
              r = v.getComputedStyle(e, null);
            return (
              v.WebKitCSSMatrix
                ? ((a = r.transform || r.webkitTransform).split(",").length >
                    6 &&
                    (a = a
                      .split(", ")
                      .map(function (e) {
                        return e.replace(",", ".");
                      })
                      .join(", ")),
                  (i = new v.WebKitCSSMatrix("none" === a ? "" : a)))
                : (t = (i =
                    r.MozTransform ||
                    r.OTransform ||
                    r.MsTransform ||
                    r.msTransform ||
                    r.transform ||
                    r
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === n &&
                (a = v.WebKitCSSMatrix
                  ? i.m41
                  : 16 === t.length
                  ? parseFloat(t[12])
                  : parseFloat(t[4])),
              "y" === n &&
                (a = v.WebKitCSSMatrix
                  ? i.m42
                  : 16 === t.length
                  ? parseFloat(t[13])
                  : parseFloat(t[5])),
              a || 0
            );
          },
          parseUrlQuery: function (e) {
            var t,
              a,
              i,
              n,
              r = {},
              s = e || v.location.href;
            if ("string" === typeof s && s.length)
              for (
                n = (a = (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "")
                  .split("&")
                  .filter(function (e) {
                    return "" !== e;
                  })).length,
                  t = 0;
                t < n;
                t += 1
              )
                (i = a[t].replace(/#\S+/g, "").split("=")),
                  (r[decodeURIComponent(i[0])] =
                    "undefined" === typeof i[1]
                      ? void 0
                      : decodeURIComponent(i[1]) || "");
            return r;
          },
          isObject: function (e) {
            return (
              "object" === typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object
            );
          },
          extend: function () {
            for (
              var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"],
                a = 1;
              a < arguments.length;
              a += 1
            ) {
              var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
              if (void 0 !== i && null !== i)
                for (
                  var n = Object.keys(Object(i)).filter(function (e) {
                      return t.indexOf(e) < 0;
                    }),
                    r = 0,
                    s = n.length;
                  r < s;
                  r += 1
                ) {
                  var o = n[r],
                    l = Object.getOwnPropertyDescriptor(i, o);
                  void 0 !== l &&
                    l.enumerable &&
                    (w.isObject(e[o]) && w.isObject(i[o])
                      ? w.extend(e[o], i[o])
                      : !w.isObject(e[o]) && w.isObject(i[o])
                      ? ((e[o] = {}), w.extend(e[o], i[o]))
                      : (e[o] = i[o]));
                }
            }
            return e;
          },
        },
        y = {
          touch: !!(
            "ontouchstart" in v ||
            (v.DocumentTouch && p instanceof v.DocumentTouch)
          ),
          pointerEvents:
            !!v.PointerEvent &&
            "maxTouchPoints" in v.navigator &&
            v.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in v || "WebkitMutationObserver" in v,
          passiveListener: (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              v.addEventListener("testPassiveListener", null, t);
            } catch (a) {}
            return e;
          })(),
          gestures: "ongesturestart" in v,
        },
        T = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (0, d.Z)(this, e);
            var a = this;
            (a.params = t),
              (a.eventsListeners = {}),
              a.params &&
                a.params.on &&
                Object.keys(a.params.on).forEach(function (e) {
                  a.on(e, a.params.on[e]);
                });
          }
          return (
            (0, l.Z)(
              e,
              [
                {
                  key: "on",
                  value: function (e, t, a) {
                    var i = this;
                    if ("function" !== typeof t) return i;
                    var n = a ? "unshift" : "push";
                    return (
                      e.split(" ").forEach(function (e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []),
                          i.eventsListeners[e][n](t);
                      }),
                      i
                    );
                  },
                },
                {
                  key: "once",
                  value: function (e, t, a) {
                    var i = this;
                    if ("function" !== typeof t) return i;
                    function n() {
                      i.off(e, n), n.f7proxy && delete n.f7proxy;
                      for (
                        var a = arguments.length, r = new Array(a), s = 0;
                        s < a;
                        s++
                      )
                        r[s] = arguments[s];
                      t.apply(i, r);
                    }
                    return (n.f7proxy = t), i.on(e, n, a);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    var a = this;
                    return a.eventsListeners
                      ? (e.split(" ").forEach(function (e) {
                          "undefined" === typeof t
                            ? (a.eventsListeners[e] = [])
                            : a.eventsListeners[e] &&
                              a.eventsListeners[e].length &&
                              a.eventsListeners[e].forEach(function (i, n) {
                                (i === t || (i.f7proxy && i.f7proxy === t)) &&
                                  a.eventsListeners[e].splice(n, 1);
                              });
                        }),
                        a)
                      : a;
                  },
                },
                {
                  key: "emit",
                  value: function () {
                    var e,
                      t,
                      a,
                      i = this;
                    if (!i.eventsListeners) return i;
                    for (
                      var n = arguments.length, r = new Array(n), s = 0;
                      s < n;
                      s++
                    )
                      r[s] = arguments[s];
                    "string" === typeof r[0] || Array.isArray(r[0])
                      ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
                      : ((e = r[0].events),
                        (t = r[0].data),
                        (a = r[0].context || i));
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return (
                      o.forEach(function (e) {
                        if (i.eventsListeners && i.eventsListeners[e]) {
                          var n = [];
                          i.eventsListeners[e].forEach(function (e) {
                            n.push(e);
                          }),
                            n.forEach(function (e) {
                              e.apply(a, t);
                            });
                        }
                      }),
                      i
                    );
                  },
                },
                {
                  key: "useModulesParams",
                  value: function (e) {
                    var t = this;
                    t.modules &&
                      Object.keys(t.modules).forEach(function (a) {
                        var i = t.modules[a];
                        i.params && w.extend(e, i.params);
                      });
                  },
                },
                {
                  key: "useModules",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = this;
                    t.modules &&
                      Object.keys(t.modules).forEach(function (a) {
                        var i = t.modules[a],
                          n = e[a] || {};
                        i.instance &&
                          Object.keys(i.instance).forEach(function (e) {
                            var a = i.instance[e];
                            t[e] = "function" === typeof a ? a.bind(t) : a;
                          }),
                          i.on &&
                            t.on &&
                            Object.keys(i.on).forEach(function (e) {
                              t.on(e, i.on[e]);
                            }),
                          i.create && i.create.bind(t)(n);
                      });
                  },
                },
              ],
              [
                {
                  key: "components",
                  set: function (e) {
                    this.use && this.use(e);
                  },
                },
                {
                  key: "installModule",
                  value: function (e) {
                    var t = this;
                    t.prototype.modules || (t.prototype.modules = {});
                    var a =
                      e.name ||
                      ""
                        .concat(Object.keys(t.prototype.modules).length, "_")
                        .concat(w.now());
                    if (
                      ((t.prototype.modules[a] = e),
                      e.proto &&
                        Object.keys(e.proto).forEach(function (a) {
                          t.prototype[a] = e.proto[a];
                        }),
                      e.static &&
                        Object.keys(e.static).forEach(function (a) {
                          t[a] = e.static[a];
                        }),
                      e.install)
                    ) {
                      for (
                        var i = arguments.length,
                          n = new Array(i > 1 ? i - 1 : 0),
                          r = 1;
                        r < i;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      e.install.apply(t, n);
                    }
                    return t;
                  },
                },
                {
                  key: "use",
                  value: function (e) {
                    var t = this;
                    if (Array.isArray(e))
                      return (
                        e.forEach(function (e) {
                          return t.installModule(e);
                        }),
                        t
                      );
                    for (
                      var a = arguments.length,
                        i = new Array(a > 1 ? a - 1 : 0),
                        n = 1;
                      n < a;
                      n++
                    )
                      i[n - 1] = arguments[n];
                    return t.installModule.apply(t, [e].concat(i));
                  },
                },
              ]
            ),
            e
          );
        })();
      var E = {
        updateSize: function () {
          var e,
            t,
            a = this,
            i = a.$el;
          (e =
            "undefined" !== typeof a.params.width
              ? a.params.width
              : i[0].clientWidth),
            (t =
              "undefined" !== typeof a.params.height
                ? a.params.height
                : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
              (0 === t && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left"), 10) -
                parseInt(i.css("padding-right"), 10)),
              (t =
                t -
                parseInt(i.css("padding-top"), 10) -
                parseInt(i.css("padding-bottom"), 10)),
              w.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this,
            t = e.params,
            a = e.$wrapperEl,
            i = e.size,
            n = e.rtlTranslate,
            r = e.wrongRTL,
            s = e.virtual && t.virtual.enabled,
            o = s ? e.virtual.slides.length : e.slides.length,
            l = a.children(".".concat(e.params.slideClass)),
            d = s ? e.virtual.slides.length : l.length,
            c = [],
            u = [],
            p = [];
          function h(e) {
            return !t.cssMode || e !== l.length - 1;
          }
          var f = t.slidesOffsetBefore;
          "function" === typeof f && (f = t.slidesOffsetBefore.call(e));
          var m = t.slidesOffsetAfter;
          "function" === typeof m && (m = t.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.snapGrid.length,
            y = t.spaceBetween,
            T = -f,
            E = 0,
            S = 0;
          if ("undefined" !== typeof i) {
            var x, C;
            "string" === typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * i),
              (e.virtualSize = -y),
              n
                ? l.css({ marginLeft: "", marginTop: "" })
                : l.css({ marginRight: "", marginBottom: "" }),
              t.slidesPerColumn > 1 &&
                ((x =
                  Math.floor(d / t.slidesPerColumn) ===
                  d / e.params.slidesPerColumn
                    ? d
                    : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
            for (
              var M,
                k = t.slidesPerColumn,
                P = x / k,
                z = Math.floor(d / t.slidesPerColumn),
                L = 0;
              L < d;
              L += 1
            ) {
              C = 0;
              var $ = l.eq(L);
              if (t.slidesPerColumn > 1) {
                var D = void 0,
                  O = void 0,
                  I = void 0;
                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  var A = Math.floor(
                      L / (t.slidesPerGroup * t.slidesPerColumn)
                    ),
                    G = L - t.slidesPerColumn * t.slidesPerGroup * A,
                    B =
                      0 === A
                        ? t.slidesPerGroup
                        : Math.min(
                            Math.ceil((d - A * k * t.slidesPerGroup) / k),
                            t.slidesPerGroup
                          );
                  (D =
                    (O =
                      G - (I = Math.floor(G / B)) * B + A * t.slidesPerGroup) +
                    (I * x) / k),
                    $.css({
                      "-webkit-box-ordinal-group": D,
                      "-moz-box-ordinal-group": D,
                      "-ms-flex-order": D,
                      "-webkit-order": D,
                      order: D,
                    });
                } else
                  "column" === t.slidesPerColumnFill
                    ? ((I = L - (O = Math.floor(L / k)) * k),
                      (O > z || (O === z && I === k - 1)) &&
                        (I += 1) >= k &&
                        ((I = 0), (O += 1)))
                    : (O = L - (I = Math.floor(L / P)) * P);
                $.css(
                  "margin-".concat(e.isHorizontal() ? "top" : "left"),
                  0 !== I && t.spaceBetween && "".concat(t.spaceBetween, "px")
                );
              }
              if ("none" !== $.css("display")) {
                if ("auto" === t.slidesPerView) {
                  var X = v.getComputedStyle($[0], null),
                    Y = $[0].style.transform,
                    H = $[0].style.webkitTransform;
                  if (
                    (Y && ($[0].style.transform = "none"),
                    H && ($[0].style.webkitTransform = "none"),
                    t.roundLengths)
                  )
                    C = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    var V = parseFloat(X.getPropertyValue("width")),
                      W = parseFloat(X.getPropertyValue("padding-left")),
                      N = parseFloat(X.getPropertyValue("padding-right")),
                      F = parseFloat(X.getPropertyValue("margin-left")),
                      R = parseFloat(X.getPropertyValue("margin-right")),
                      j = X.getPropertyValue("box-sizing");
                    C = j && "border-box" === j ? V + F + R : V + W + N + F + R;
                  } else {
                    var q = parseFloat(X.getPropertyValue("height")),
                      Z = parseFloat(X.getPropertyValue("padding-top")),
                      _ = parseFloat(X.getPropertyValue("padding-bottom")),
                      U = parseFloat(X.getPropertyValue("margin-top")),
                      K = parseFloat(X.getPropertyValue("margin-bottom")),
                      Q = X.getPropertyValue("box-sizing");
                    C = Q && "border-box" === Q ? q + U + K : q + Z + _ + U + K;
                  }
                  Y && ($[0].style.transform = Y),
                    H && ($[0].style.webkitTransform = H),
                    t.roundLengths && (C = Math.floor(C));
                } else
                  (C = (i - (t.slidesPerView - 1) * y) / t.slidesPerView),
                    t.roundLengths && (C = Math.floor(C)),
                    l[L] &&
                      (e.isHorizontal()
                        ? (l[L].style.width = "".concat(C, "px"))
                        : (l[L].style.height = "".concat(C, "px")));
                l[L] && (l[L].swiperSlideSize = C),
                  p.push(C),
                  t.centeredSlides
                    ? ((T = T + C / 2 + E / 2 + y),
                      0 === E && 0 !== L && (T = T - i / 2 - y),
                      0 === L && (T = T - i / 2 - y),
                      Math.abs(T) < 0.001 && (T = 0),
                      t.roundLengths && (T = Math.floor(T)),
                      S % t.slidesPerGroup === 0 && c.push(T),
                      u.push(T))
                    : (t.roundLengths && (T = Math.floor(T)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ===
                        0 && c.push(T),
                      u.push(T),
                      (T = T + C + y)),
                  (e.virtualSize += C + y),
                  (E = C),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + m),
              n &&
                r &&
                ("slide" === t.effect || "coverflow" === t.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + t.spaceBetween, "px"),
                }),
              t.setWrapperSize &&
                (e.isHorizontal()
                  ? a.css({
                      width: "".concat(e.virtualSize + t.spaceBetween, "px"),
                    })
                  : a.css({
                      height: "".concat(e.virtualSize + t.spaceBetween, "px"),
                    })),
              t.slidesPerColumn > 1 &&
                ((e.virtualSize = (C + t.spaceBetween) * x),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                e.isHorizontal()
                  ? a.css({
                      width: "".concat(e.virtualSize + t.spaceBetween, "px"),
                    })
                  : a.css({
                      height: "".concat(e.virtualSize + t.spaceBetween, "px"),
                    }),
                t.centeredSlides))
            ) {
              M = [];
              for (var J = 0; J < c.length; J += 1) {
                var ee = c[J];
                t.roundLengths && (ee = Math.floor(ee)),
                  c[J] < e.virtualSize + c[0] && M.push(ee);
              }
              c = M;
            }
            if (!t.centeredSlides) {
              M = [];
              for (var te = 0; te < c.length; te += 1) {
                var ae = c[te];
                t.roundLengths && (ae = Math.floor(ae)),
                  c[te] <= e.virtualSize - i && M.push(ae);
              }
              (c = M),
                Math.floor(e.virtualSize - i) - Math.floor(c[c.length - 1]) >
                  1 && c.push(e.virtualSize - i);
            }
            if (
              (0 === c.length && (c = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? n
                    ? l.filter(h).css({ marginLeft: "".concat(y, "px") })
                    : l.filter(h).css({ marginRight: "".concat(y, "px") })
                  : l.filter(h).css({ marginBottom: "".concat(y, "px") })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              var ie = 0;
              p.forEach(function (e) {
                ie += e + (t.spaceBetween ? t.spaceBetween : 0);
              });
              var ne = (ie -= t.spaceBetween) - i;
              c = c.map(function (e) {
                return e < 0 ? -f : e > ne ? ne + m : e;
              });
            }
            if (t.centerInsufficientSlides) {
              var re = 0;
              if (
                (p.forEach(function (e) {
                  re += e + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (re -= t.spaceBetween) < i)
              ) {
                var se = (i - re) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - se;
                }),
                  u.forEach(function (e, t) {
                    u[t] = e + se;
                  });
              }
            }
            w.extend(e, {
              slides: l,
              snapGrid: c,
              slidesGrid: u,
              slidesSizesGrid: p,
            }),
              d !== o && e.emit("slidesLengthChange"),
              c.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              u.length !== b && e.emit("slidesGridLengthChange"),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            a = this,
            i = [],
            n = 0;
          if (
            ("number" === typeof e
              ? a.setTransition(e)
              : !0 === e && a.setTransition(a.params.speed),
            "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
          )
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e, t) {
                i.push(t);
              });
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var r = a.activeIndex + t;
                if (r > a.slides.length) break;
                i.push(a.slides.eq(r)[0]);
              }
          else i.push(a.slides.eq(a.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if ("undefined" !== typeof i[t]) {
              var s = i[t].offsetHeight;
              n = s > n ? s : n;
            }
          n && a.$wrapperEl.css("height", "".concat(n, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (this && this.translate) || 0,
            t = this,
            a = t.params,
            i = t.slides,
            n = t.rtlTranslate;
          if (0 !== i.length) {
            "undefined" === typeof i[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var r = -e;
            n && (r = e),
              i.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var s = 0; s < i.length; s += 1) {
              var o = i[s],
                l =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    o.swiperSlideOffset) /
                  (o.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var d = -(r - o.swiperSlideOffset),
                  c = d + t.slidesSizesGrid[s],
                  u =
                    (d >= 0 && d < t.size - 1) ||
                    (c > 1 && c <= t.size) ||
                    (d <= 0 && c >= t.size);
                u &&
                  (t.visibleSlides.push(o),
                  t.visibleSlidesIndexes.push(s),
                  i.eq(s).addClass(a.slideVisibleClass));
              }
              o.progress = n ? -l : l;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * a) || 0;
          }
          var i = t.params,
            n = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            s = t.isBeginning,
            o = t.isEnd,
            l = s,
            d = o;
          0 === n
            ? ((r = 0), (s = !0), (o = !0))
            : ((s = (r = (e - t.minTranslate()) / n) <= 0), (o = r >= 1)),
            w.extend(t, { progress: r, isBeginning: s, isEnd: o }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !l && t.emit("reachBeginning toEdge"),
            o && !d && t.emit("reachEnd toEdge"),
            ((l && !s) || (d && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            n = t.$wrapperEl,
            r = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && i.virtual.enabled;
          a.removeClass(
            ""
              .concat(i.slideActiveClass, " ")
              .concat(i.slideNextClass, " ")
              .concat(i.slidePrevClass, " ")
              .concat(i.slideDuplicateActiveClass, " ")
              .concat(i.slideDuplicateNextClass, " ")
              .concat(i.slideDuplicatePrevClass)
          ),
            (e = o
              ? t.$wrapperEl.find(
                  "."
                    .concat(i.slideClass, '[data-swiper-slide-index="')
                    .concat(r, '"]')
                )
              : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : n
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var l = e
            .nextAll(".".concat(i.slideClass))
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
          var d = e
            .prevAll(".".concat(i.slideClass))
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicateNextClass)
                : n
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : n
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            n = a.slidesGrid,
            r = a.snapGrid,
            s = a.params,
            o = a.activeIndex,
            l = a.realIndex,
            d = a.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var u = 0; u < n.length; u += 1)
              "undefined" !== typeof n[u + 1]
                ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2
                  ? (c = u)
                  : i >= n[u] && i < n[u + 1] && (c = u + 1)
                : i >= n[u] && (c = u);
            s.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);
          else {
            var p = Math.min(s.slidesPerGroupSkip, c);
            t = p + Math.floor((c - p) / s.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), c !== o)) {
            var h = parseInt(
              a.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            w.extend(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: o,
              activeIndex: c,
            }),
              a.emit("activeIndexChange"),
              a.emit("snapIndexChange"),
              l !== h && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit("slideChange");
          } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this,
            a = t.params,
            i = m(e.target).closest(".".concat(a.slideClass))[0],
            n = !1;
          if (i)
            for (var r = 0; r < t.slides.length; r += 1)
              t.slides[r] === i && (n = !0);
          if (!i || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  m(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = m(i).index()),
            a.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var S = {
        getTranslate: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.isHorizontal()
                ? "x"
                : "y",
            t = this,
            a = t.params,
            i = t.rtlTranslate,
            n = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -n : n;
          if (a.cssMode) return n;
          var s = w.getTranslate(r[0], e);
          return i && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          var a = this,
            i = a.rtlTranslate,
            n = a.params,
            r = a.$wrapperEl,
            s = a.wrapperEl,
            o = a.progress,
            l = 0,
            d = 0;
          a.isHorizontal() ? (l = i ? -e : e) : (d = e),
            n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
            n.cssMode
              ? (s[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  a.isHorizontal() ? -l : -d)
              : n.virtualTranslate ||
                r.transform(
                  "translate3d("
                    .concat(l, "px, ")
                    .concat(d, "px, ")
                    .concat(0, "px)")
                ),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? l : d);
          var c = a.maxTranslate() - a.minTranslate();
          (0 === c ? 0 : (e - a.minTranslate()) / c) !== o &&
            a.updateProgress(e),
            a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            n = arguments.length > 4 ? arguments[4] : void 0,
            r = this,
            s = r.params,
            l = r.wrapperEl;
          if (r.animating && s.preventInteractionOnTransition) return !1;
          var d,
            c = r.minTranslate(),
            u = r.maxTranslate();
          if (
            ((d = i && e > c ? c : i && e < u ? u : e),
            r.updateProgress(d),
            s.cssMode)
          ) {
            var p,
              h = r.isHorizontal();
            if (0 === t) l[h ? "scrollLeft" : "scrollTop"] = -d;
            else if (l.scrollTo)
              l.scrollTo(
                ((p = {}),
                (0, o.Z)(p, h ? "left" : "top", -d),
                (0, o.Z)(p, "behavior", "smooth"),
                p)
              );
            else l[h ? "scrollLeft" : "scrollTop"] = -d;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                a &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                a &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        a && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      var x = {
        setTransition: function (e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t);
        },
        transitionStart: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = this,
            i = a.activeIndex,
            n = a.params,
            r = a.previousIndex;
          if (!n.cssMode) {
            n.autoHeight && a.updateAutoHeight();
            var s = t;
            if (
              (s || (s = i > r ? "next" : i < r ? "prev" : "reset"),
              a.emit("transitionStart"),
              e && i !== r)
            ) {
              if ("reset" === s)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"),
                "next" === s
                  ? a.emit("slideNextTransitionStart")
                  : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = this,
            i = a.activeIndex,
            n = a.previousIndex,
            r = a.params;
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0);
            var s = t;
            if (
              (s || (s = i > n ? "next" : i < n ? "prev" : "reset"),
              a.emit("transitionEnd"),
              e && i !== n)
            ) {
              if ("reset" === s) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"),
                "next" === s
                  ? a.emit("slideNextTransitionEnd")
                  : a.emit("slidePrevTransitionEnd");
            }
          }
        },
      };
      var C = {
        slideTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            n = this,
            r = e;
          r < 0 && (r = 0);
          var s = n.params,
            l = n.snapGrid,
            d = n.slidesGrid,
            c = n.previousIndex,
            u = n.activeIndex,
            p = n.rtlTranslate,
            h = n.wrapperEl;
          if (n.animating && s.preventInteractionOnTransition) return !1;
          var v = Math.min(n.params.slidesPerGroupSkip, r),
            f = v + Math.floor((r - v) / n.params.slidesPerGroup);
          f >= l.length && (f = l.length - 1),
            (u || s.initialSlide || 0) === (c || 0) &&
              a &&
              n.emit("beforeSlideChangeStart");
          var m,
            g = -l[f];
          if ((n.updateProgress(g), s.normalizeSlideIndex))
            for (var b = 0; b < d.length; b += 1)
              -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (r = b);
          if (n.initialized && r !== u) {
            if (!n.allowSlideNext && g < n.translate && g < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              g > n.translate &&
              g > n.maxTranslate() &&
              (u || 0) !== r
            )
              return !1;
          }
          if (
            ((m = r > u ? "next" : r < u ? "prev" : "reset"),
            (p && -g === n.translate) || (!p && g === n.translate))
          )
            return (
              n.updateActiveIndex(r),
              s.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== s.effect && n.setTranslate(g),
              "reset" !== m && (n.transitionStart(a, m), n.transitionEnd(a, m)),
              !1
            );
          if (s.cssMode) {
            var w,
              y = n.isHorizontal(),
              T = -g;
            if ((p && (T = h.scrollWidth - h.offsetWidth - T), 0 === t))
              h[y ? "scrollLeft" : "scrollTop"] = T;
            else if (h.scrollTo)
              h.scrollTo(
                ((w = {}),
                (0, o.Z)(w, y ? "left" : "top", T),
                (0, o.Z)(w, "behavior", "smooth"),
                w)
              );
            else h[y ? "scrollLeft" : "scrollTop"] = T;
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(g),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, m),
                n.transitionEnd(a, m))
              : (n.setTransition(t),
                n.setTranslate(g),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, m),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(a, m));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            n = this,
            r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, a, i);
        },
        slideNext: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = this,
            n = i.params,
            r = i.animating,
            s = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
          if (n.loop) {
            if (r) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + s, e, t, a);
        },
        slidePrev: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = this,
            n = i.params,
            r = i.animating,
            s = i.snapGrid,
            o = i.slidesGrid,
            l = i.rtlTranslate;
          if (n.loop) {
            if (r) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          var d = l ? i.translate : -i.translate;
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var u = c(d),
            p = s.map(function (e) {
              return c(e);
            });
          o.map(function (e) {
            return c(e);
          }),
            s[p.indexOf(u)];
          var h,
            v = s[p.indexOf(u) - 1];
          return (
            "undefined" === typeof v &&
              n.cssMode &&
              s.forEach(function (e) {
                !v && u >= e && (v = e);
              }),
            "undefined" !== typeof v &&
              (h = o.indexOf(v)) < 0 &&
              (h = i.activeIndex - 1),
            i.slideTo(h, e, t, a)
          );
        },
        slideReset: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = this;
          return i.slideTo(i.activeIndex, e, t, a);
        },
        slideToClosest: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            n = this,
            r = n.activeIndex,
            s = Math.min(n.params.slidesPerGroupSkip, r),
            o = s + Math.floor((r - s) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[o]) {
            var d = n.snapGrid[o],
              c = n.snapGrid[o + 1];
            l - d > (c - d) * i && (r += n.params.slidesPerGroup);
          } else {
            var u = n.snapGrid[o - 1],
              p = n.snapGrid[o];
            l - u <= (p - u) * i && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, a)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            n =
              "auto" === a.slidesPerView
                ? t.slidesPerViewDynamic()
                : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              a.centeredSlides
                ? r < t.loopedSlides - n / 2 ||
                  r > t.slides.length - t.loopedSlides + n / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        "."
                          .concat(a.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(a.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    w.nextTick(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - n
                ? (t.loopFix(),
                  (r = i
                    .children(
                      "."
                        .concat(a.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(a.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  w.nextTick(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      };
      var M = {
        loopCreate: function () {
          var e = this,
            t = e.params,
            a = e.$wrapperEl;
          a.children(
            ".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(t.slideClass));
          if (t.loopFillGroupWithBlank) {
            var n = t.slidesPerGroup - (i.length % t.slidesPerGroup);
            if (n !== t.slidesPerGroup) {
              for (var r = 0; r < n; r += 1) {
                var s = m(p.createElement("div")).addClass(
                  "".concat(t.slideClass, " ").concat(t.slideBlankClass)
                );
                a.append(s);
              }
              i = a.children(".".concat(t.slideClass));
            }
          }
          "auto" !== t.slidesPerView ||
            t.loopedSlides ||
            (t.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(t.loopedSlides || t.slidesPerView, 10)
            )),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > i.length && (e.loopedSlides = i.length);
          var o = [],
            l = [];
          i.each(function (t, a) {
            var n = m(a);
            t < e.loopedSlides && l.push(a),
              t < i.length && t >= i.length - e.loopedSlides && o.push(a),
              n.attr("data-swiper-slide-index", t);
          });
          for (var d = 0; d < l.length; d += 1)
            a.append(m(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass));
          for (var c = o.length - 1; c >= 0; c -= 1)
            a.prepend(m(o[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            n = e.loopedSlides,
            r = e.allowSlidePrev,
            s = e.allowSlideNext,
            o = e.snapGrid,
            l = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -o[a] - e.getTranslate();
          if (a < n)
            (t = i.length - 3 * n + a),
              (t += n),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          else if (a >= i.length - n) {
            (t = -i.length + a + n),
              (t += n),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t
            .children(
              "."
                .concat(a.slideClass, ".")
                .concat(a.slideDuplicateClass, ",.")
                .concat(a.slideClass, ".")
                .concat(a.slideBlankClass)
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      var k = {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              y.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a = t.el;
            (a.style.cursor = "move"),
              (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          y.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
        },
      };
      var P = {
          appendSlide: function (e) {
            var t = this,
              a = t.$wrapperEl,
              i = t.params;
            if (
              (i.loop && t.loopDestroy(),
              "object" === typeof e && "length" in e)
            )
              for (var n = 0; n < e.length; n += 1) e[n] && a.append(e[n]);
            else a.append(e);
            i.loop && t.loopCreate(), (i.observer && y.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
              a = t.params,
              i = t.$wrapperEl,
              n = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = n + 1;
            if ("object" === typeof e && "length" in e) {
              for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
              r = n + e.length;
            } else i.prepend(e);
            a.loop && t.loopCreate(),
              (a.observer && y.observer) || t.update(),
              t.slideTo(r, 0, !1);
          },
          addSlide: function (e, t) {
            var a = this,
              i = a.$wrapperEl,
              n = a.params,
              r = a.activeIndex;
            n.loop &&
              ((r -= a.loopedSlides),
              a.loopDestroy(),
              (a.slides = i.children(".".concat(n.slideClass))));
            var s = a.slides.length;
            if (e <= 0) a.prependSlide(t);
            else if (e >= s) a.appendSlide(t);
            else {
              for (
                var o = r > e ? r + 1 : r, l = [], d = s - 1;
                d >= e;
                d -= 1
              ) {
                var c = a.slides.eq(d);
                c.remove(), l.unshift(c);
              }
              if ("object" === typeof t && "length" in t) {
                for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                o = r > e ? r + t.length : r;
              } else i.append(t);
              for (var p = 0; p < l.length; p += 1) i.append(l[p]);
              n.loop && a.loopCreate(),
                (n.observer && y.observer) || a.update(),
                n.loop
                  ? a.slideTo(o + a.loopedSlides, 0, !1)
                  : a.slideTo(o, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
              a = t.params,
              i = t.$wrapperEl,
              n = t.activeIndex;
            a.loop &&
              ((n -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = i.children(".".concat(a.slideClass))));
            var r,
              s = n;
            if ("object" === typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1)
                (r = e[o]),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < s && (s -= 1);
              s = Math.max(s, 0);
            } else
              (r = e),
                t.slides[r] && t.slides.eq(r).remove(),
                r < s && (s -= 1),
                (s = Math.max(s, 0));
            a.loop && t.loopCreate(),
              (a.observer && y.observer) || t.update(),
              a.loop
                ? t.slideTo(s + t.loopedSlides, 0, !1)
                : t.slideTo(s, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        z = (function () {
          var e = v.navigator.platform,
            t = v.navigator.userAgent,
            a = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!v.cordova && !v.phonegap),
              phonegap: !(!v.cordova && !v.phonegap),
              electron: !1,
            },
            i = v.screen.width,
            n = v.screen.height,
            r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = t.match(/(iPad).*OS\s([\d_]+)/),
            o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !s && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            d = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
            c = t.indexOf("Edge/") >= 0,
            u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
            p = "Win32" === e,
            h = t.toLowerCase().indexOf("electron") >= 0,
            f = "MacIntel" === e;
          return (
            !s &&
              f &&
              y.touch &&
              ((1024 === i && 1366 === n) ||
                (834 === i && 1194 === n) ||
                (834 === i && 1112 === n) ||
                (768 === i && 1024 === n)) &&
              ((s = t.match(/(Version)\/([\d.]+)/)), (f = !1)),
            (a.ie = d),
            (a.edge = c),
            (a.firefox = u),
            r &&
              !p &&
              ((a.os = "android"),
              (a.osVersion = r[2]),
              (a.android = !0),
              (a.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
            (s || l || o) && ((a.os = "ios"), (a.ios = !0)),
            l &&
              !o &&
              ((a.osVersion = l[2].replace(/_/g, ".")), (a.iphone = !0)),
            s && ((a.osVersion = s[2].replace(/_/g, ".")), (a.ipad = !0)),
            o &&
              ((a.osVersion = o[3] ? o[3].replace(/_/g, ".") : null),
              (a.ipod = !0)),
            a.ios &&
              a.osVersion &&
              t.indexOf("Version/") >= 0 &&
              "10" === a.osVersion.split(".")[0] &&
              (a.osVersion = t
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (a.webView =
              !(
                !(l || s || o) ||
                (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !v.navigator.standalone)
              ) ||
              (v.matchMedia &&
                v.matchMedia("(display-mode: standalone)").matches)),
            (a.webview = a.webView),
            (a.standalone = a.webView),
            (a.desktop = !(a.ios || a.android) || h),
            a.desktop &&
              ((a.electron = h),
              (a.macos = f),
              (a.windows = p),
              a.macos && (a.os = "macos"),
              a.windows && (a.os = "windows")),
            (a.pixelRatio = v.devicePixelRatio || 1),
            a
          );
        })();
      function L(e) {
        var t = this,
          a = t.touchEventsData,
          i = t.params,
          n = t.touches;
        if (!t.animating || !i.preventInteractionOnTransition) {
          var r = e;
          r.originalEvent && (r = r.originalEvent);
          var s = m(r.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              s.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === r.type),
            (a.isTouchEvent || !("which" in r) || 3 !== r.which) &&
              !(!a.isTouchEvent && "button" in r && r.button > 0) &&
              (!a.isTouched || !a.isMoved))
          )
            if (
              i.noSwiping &&
              s.closest(
                i.noSwipingSelector
                  ? i.noSwipingSelector
                  : ".".concat(i.noSwipingClass)
              )[0]
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || s.closest(i.swipeHandler)[0]) {
              (n.currentX =
                "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX),
                (n.currentY =
                  "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
              var o = n.currentX,
                l = n.currentY,
                d = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                c = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (!d || !(o <= c || o >= v.screen.width - c)) {
                if (
                  (w.extend(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (n.startX = o),
                  (n.startY = l),
                  (a.touchStartTime = w.now()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  i.threshold > 0 && (a.allowThresholdMove = !1),
                  "touchstart" !== r.type)
                ) {
                  var u = !0;
                  s.is(a.formElements) && (u = !1),
                    p.activeElement &&
                      m(p.activeElement).is(a.formElements) &&
                      p.activeElement !== s[0] &&
                      p.activeElement.blur();
                  var h = u && t.allowTouchMove && i.touchStartPreventDefault;
                  (i.touchStartForcePreventDefault || h) && r.preventDefault();
                }
                t.emit("touchStart", r);
              }
            }
        }
      }
      function $(e) {
        var t = this,
          a = t.touchEventsData,
          i = t.params,
          n = t.touches,
          r = t.rtlTranslate,
          s = e;
        if ((s.originalEvent && (s = s.originalEvent), a.isTouched)) {
          if (!a.isTouchEvent || "touchmove" === s.type) {
            var o =
                "touchmove" === s.type &&
                s.targetTouches &&
                (s.targetTouches[0] || s.changedTouches[0]),
              l = "touchmove" === s.type ? o.pageX : s.pageX,
              d = "touchmove" === s.type ? o.pageY : s.pageY;
            if (s.preventedByNestedSwiper)
              return (n.startX = l), void (n.startY = d);
            if (!t.allowTouchMove)
              return (
                (t.allowClick = !1),
                void (
                  a.isTouched &&
                  (w.extend(n, {
                    startX: l,
                    startY: d,
                    currentX: l,
                    currentY: d,
                  }),
                  (a.touchStartTime = w.now()))
                )
              );
            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
              if (t.isVertical()) {
                if (
                  (d < n.startY && t.translate <= t.maxTranslate()) ||
                  (d > n.startY && t.translate >= t.minTranslate())
                )
                  return (a.isTouched = !1), void (a.isMoved = !1);
              } else if (
                (l < n.startX && t.translate <= t.maxTranslate()) ||
                (l > n.startX && t.translate >= t.minTranslate())
              )
                return;
            if (
              a.isTouchEvent &&
              p.activeElement &&
              s.target === p.activeElement &&
              m(s.target).is(a.formElements)
            )
              return (a.isMoved = !0), void (t.allowClick = !1);
            if (
              (a.allowTouchCallbacks && t.emit("touchMove", s),
              !(s.targetTouches && s.targetTouches.length > 1))
            ) {
              (n.currentX = l), (n.currentY = d);
              var c = n.currentX - n.startX,
                u = n.currentY - n.startY;
              if (
                !(
                  t.params.threshold &&
                  Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) <
                    t.params.threshold
                )
              ) {
                var h;
                if ("undefined" === typeof a.isScrolling)
                  (t.isHorizontal() && n.currentY === n.startY) ||
                  (t.isVertical() && n.currentX === n.startX)
                    ? (a.isScrolling = !1)
                    : c * c + u * u >= 25 &&
                      ((h =
                        (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                      (a.isScrolling = t.isHorizontal()
                        ? h > i.touchAngle
                        : 90 - h > i.touchAngle));
                if (
                  (a.isScrolling && t.emit("touchMoveOpposite", s),
                  "undefined" === typeof a.startMoving &&
                    ((n.currentX === n.startX && n.currentY === n.startY) ||
                      (a.startMoving = !0)),
                  a.isScrolling)
                )
                  a.isTouched = !1;
                else if (a.startMoving) {
                  (t.allowClick = !1),
                    !i.cssMode && s.cancelable && s.preventDefault(),
                    i.touchMoveStopPropagation &&
                      !i.nested &&
                      s.stopPropagation(),
                    a.isMoved ||
                      (i.loop && t.loopFix(),
                      (a.startTranslate = t.getTranslate()),
                      t.setTransition(0),
                      t.animating &&
                        t.$wrapperEl.trigger(
                          "webkitTransitionEnd transitionend"
                        ),
                      (a.allowMomentumBounce = !1),
                      !i.grabCursor ||
                        (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                        t.setGrabCursor(!0),
                      t.emit("sliderFirstMove", s)),
                    t.emit("sliderMove", s),
                    (a.isMoved = !0);
                  var v = t.isHorizontal() ? c : u;
                  (n.diff = v),
                    (v *= i.touchRatio),
                    r && (v = -v),
                    (t.swipeDirection = v > 0 ? "prev" : "next"),
                    (a.currentTranslate = v + a.startTranslate);
                  var f = !0,
                    g = i.resistanceRatio;
                  if (
                    (i.touchReleaseOnEdges && (g = 0),
                    v > 0 && a.currentTranslate > t.minTranslate()
                      ? ((f = !1),
                        i.resistance &&
                          (a.currentTranslate =
                            t.minTranslate() -
                            1 +
                            Math.pow(
                              -t.minTranslate() + a.startTranslate + v,
                              g
                            )))
                      : v < 0 &&
                        a.currentTranslate < t.maxTranslate() &&
                        ((f = !1),
                        i.resistance &&
                          (a.currentTranslate =
                            t.maxTranslate() +
                            1 -
                            Math.pow(
                              t.maxTranslate() - a.startTranslate - v,
                              g
                            ))),
                    f && (s.preventedByNestedSwiper = !0),
                    !t.allowSlideNext &&
                      "next" === t.swipeDirection &&
                      a.currentTranslate < a.startTranslate &&
                      (a.currentTranslate = a.startTranslate),
                    !t.allowSlidePrev &&
                      "prev" === t.swipeDirection &&
                      a.currentTranslate > a.startTranslate &&
                      (a.currentTranslate = a.startTranslate),
                    i.threshold > 0)
                  ) {
                    if (!(Math.abs(v) > i.threshold || a.allowThresholdMove))
                      return void (a.currentTranslate = a.startTranslate);
                    if (!a.allowThresholdMove)
                      return (
                        (a.allowThresholdMove = !0),
                        (n.startX = n.currentX),
                        (n.startY = n.currentY),
                        (a.currentTranslate = a.startTranslate),
                        void (n.diff = t.isHorizontal()
                          ? n.currentX - n.startX
                          : n.currentY - n.startY)
                      );
                  }
                  i.followFinger &&
                    !i.cssMode &&
                    ((i.freeMode ||
                      i.watchSlidesProgress ||
                      i.watchSlidesVisibility) &&
                      (t.updateActiveIndex(), t.updateSlidesClasses()),
                    i.freeMode &&
                      (0 === a.velocities.length &&
                        a.velocities.push({
                          position: n[t.isHorizontal() ? "startX" : "startY"],
                          time: a.touchStartTime,
                        }),
                      a.velocities.push({
                        position: n[t.isHorizontal() ? "currentX" : "currentY"],
                        time: w.now(),
                      })),
                    t.updateProgress(a.currentTranslate),
                    t.setTranslate(a.currentTranslate));
                }
              }
            }
          }
        } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", s);
      }
      function D(e) {
        var t = this,
          a = t.touchEventsData,
          i = t.params,
          n = t.touches,
          r = t.rtlTranslate,
          s = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          a.allowTouchCallbacks && t.emit("touchEnd", d),
          (a.allowTouchCallbacks = !1),
          !a.isTouched)
        )
          return (
            a.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (a.isMoved = !1),
            void (a.startMoving = !1)
          );
        i.grabCursor &&
          a.isMoved &&
          a.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var c,
          u = w.now(),
          p = u - a.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit("tap click", d),
            p < 300 &&
              u - a.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", d)),
          (a.lastClickTime = w.now()),
          w.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !a.isTouched ||
            !a.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            a.currentTranslate === a.startTranslate)
        )
          return (
            (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
          );
        if (
          ((a.isTouched = !1),
          (a.isMoved = !1),
          (a.startMoving = !1),
          (c = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -a.currentTranslate),
          !i.cssMode)
        )
          if (i.freeMode) {
            if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (c > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (a.velocities.length > 1) {
                var h = a.velocities.pop(),
                  v = a.velocities.pop(),
                  f = h.position - v.position,
                  m = h.time - v.time;
                (t.velocity = f / m),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (m > 150 || w.now() - h.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio),
                (a.velocities.length = 0);
              var g = 1e3 * i.freeModeMomentumRatio,
                b = t.velocity * g,
                y = t.translate + b;
              r && (y = -y);
              var T,
                E,
                S = !1,
                x = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (y + t.maxTranslate() < -x && (y = t.maxTranslate() - x),
                    (T = t.maxTranslate()),
                    (S = !0),
                    (a.allowMomentumBounce = !0))
                  : (y = t.maxTranslate()),
                  i.loop && i.centeredSlides && (E = !0);
              else if (y > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (y - t.minTranslate() > x && (y = t.minTranslate() + x),
                    (T = t.minTranslate()),
                    (S = !0),
                    (a.allowMomentumBounce = !0))
                  : (y = t.minTranslate()),
                  i.loop && i.centeredSlides && (E = !0);
              else if (i.freeModeSticky) {
                for (var C, M = 0; M < l.length; M += 1)
                  if (l[M] > -y) {
                    C = M;
                    break;
                  }
                y = -(y =
                  Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
                  "next" === t.swipeDirection
                    ? l[C]
                    : l[C - 1]);
              }
              if (
                (E &&
                  t.once("transitionEnd", function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((g = r
                    ? Math.abs((-y - t.translate) / t.velocity)
                    : Math.abs((y - t.translate) / t.velocity)),
                  i.freeModeSticky)
                ) {
                  var k = Math.abs((r ? -y : y) - t.translate),
                    P = t.slidesSizesGrid[t.activeIndex];
                  g =
                    k < P ? i.speed : k < 2 * P ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && S
                ? (t.updateProgress(T),
                  t.setTransition(g),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  s.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      a.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(i.speed),
                      setTimeout(function () {
                        t.setTranslate(T),
                          s.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(y),
                  t.setTransition(g),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    s.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : t.updateProgress(y),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();
            (!i.freeModeMomentum || p >= i.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses());
          } else {
            for (
              var z = 0, L = t.slidesSizesGrid[0], $ = 0;
              $ < o.length;
              $ += $ < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
              var D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              "undefined" !== typeof o[$ + D]
                ? c >= o[$] && c < o[$ + D] && ((z = $), (L = o[$ + D] - o[$]))
                : c >= o[$] &&
                  ((z = $), (L = o[o.length - 1] - o[o.length - 2]));
            }
            var O = (c - o[z]) / L,
              I = z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (p > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection &&
                (O >= i.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z)),
                "prev" === t.swipeDirection &&
                  (O > 1 - i.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              t.navigation &&
              (d.target === t.navigation.nextEl ||
                d.target === t.navigation.prevEl)
                ? d.target === t.navigation.nextEl
                  ? t.slideTo(z + I)
                  : t.slideTo(z)
                : ("next" === t.swipeDirection && t.slideTo(z + I),
                  "prev" === t.swipeDirection && t.slideTo(z));
            }
          }
      }
      function O() {
        var e = this,
          t = e.params,
          a = e.el;
        if (!a || 0 !== a.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            n = e.allowSlidePrev,
            r = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = i),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
      }
      function I(e) {
        var t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function A() {
        var e = this,
          t = e.wrapperEl,
          a = e.rtlTranslate;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = a
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
          e.updateProgress(a ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      var G = !1;
      function B() {}
      var X = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
        },
        Y = {
          update: E,
          translate: S,
          transition: x,
          slide: C,
          loop: M,
          grabCursor: k,
          manipulation: P,
          events: {
            attachEvents: function () {
              var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                n = e.wrapperEl;
              (e.onTouchStart = L.bind(e)),
                (e.onTouchMove = $.bind(e)),
                (e.onTouchEnd = D.bind(e)),
                t.cssMode && (e.onScroll = A.bind(e)),
                (e.onClick = I.bind(e));
              var r = !!t.nested;
              if (!y.touch && y.pointerEvents)
                i.addEventListener(a.start, e.onTouchStart, !1),
                  p.addEventListener(a.move, e.onTouchMove, r),
                  p.addEventListener(a.end, e.onTouchEnd, !1);
              else {
                if (y.touch) {
                  var s = !(
                    "touchstart" !== a.start ||
                    !y.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  i.addEventListener(a.start, e.onTouchStart, s),
                    i.addEventListener(
                      a.move,
                      e.onTouchMove,
                      y.passiveListener ? { passive: !1, capture: r } : r
                    ),
                    i.addEventListener(a.end, e.onTouchEnd, s),
                    a.cancel && i.addEventListener(a.cancel, e.onTouchEnd, s),
                    G || (p.addEventListener("touchstart", B), (G = !0));
                }
                ((t.simulateTouch && !z.ios && !z.android) ||
                  (t.simulateTouch && !y.touch && z.ios)) &&
                  (i.addEventListener("mousedown", e.onTouchStart, !1),
                  p.addEventListener("mousemove", e.onTouchMove, r),
                  p.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                i.addEventListener("click", e.onClick, !0),
                t.cssMode && n.addEventListener("scroll", e.onScroll),
                t.updateOnWindowResize
                  ? e.on(
                      z.ios || z.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      O,
                      !0
                    )
                  : e.on("observerUpdate", O, !0);
            },
            detachEvents: function () {
              var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                n = e.wrapperEl,
                r = !!t.nested;
              if (!y.touch && y.pointerEvents)
                i.removeEventListener(a.start, e.onTouchStart, !1),
                  p.removeEventListener(a.move, e.onTouchMove, r),
                  p.removeEventListener(a.end, e.onTouchEnd, !1);
              else {
                if (y.touch) {
                  var s = !(
                    "onTouchStart" !== a.start ||
                    !y.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  i.removeEventListener(a.start, e.onTouchStart, s),
                    i.removeEventListener(a.move, e.onTouchMove, r),
                    i.removeEventListener(a.end, e.onTouchEnd, s),
                    a.cancel &&
                      i.removeEventListener(a.cancel, e.onTouchEnd, s);
                }
                ((t.simulateTouch && !z.ios && !z.android) ||
                  (t.simulateTouch && !y.touch && z.ios)) &&
                  (i.removeEventListener("mousedown", e.onTouchStart, !1),
                  p.removeEventListener("mousemove", e.onTouchMove, r),
                  p.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                i.removeEventListener("click", e.onClick, !0),
                t.cssMode && n.removeEventListener("scroll", e.onScroll),
                e.off(
                  z.ios || z.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  O
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                t = e.activeIndex,
                a = e.initialized,
                i = e.loopedSlides,
                n = void 0 === i ? 0 : i,
                r = e.params,
                s = e.$el,
                o = r.breakpoints;
              if (o && (!o || 0 !== Object.keys(o).length)) {
                var l = e.getBreakpoint(o);
                if (l && e.currentBreakpoint !== l) {
                  var d = l in o ? o[l] : void 0;
                  d &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach(function (e) {
                      var t = d[e];
                      "undefined" !== typeof t &&
                        (d[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    });
                  var c = d || e.originalParams,
                    u = r.slidesPerColumn > 1,
                    p = c.slidesPerColumn > 1;
                  u && !p
                    ? s.removeClass(
                        ""
                          .concat(r.containerModifierClass, "multirow ")
                          .concat(r.containerModifierClass, "multirow-column")
                      )
                    : !u &&
                      p &&
                      (s.addClass(
                        "".concat(r.containerModifierClass, "multirow")
                      ),
                      "column" === c.slidesPerColumnFill &&
                        s.addClass(
                          "".concat(r.containerModifierClass, "multirow-column")
                        ));
                  var h = c.direction && c.direction !== r.direction,
                    v = r.loop && (c.slidesPerView !== r.slidesPerView || h);
                  h && a && e.changeDirection(),
                    w.extend(e.params, c),
                    w.extend(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = l),
                    v &&
                      a &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", c);
                }
              }
            },
            getBreakpoint: function (e) {
              if (e) {
                var t = !1,
                  a = Object.keys(e).map(function (e) {
                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                      var t = parseFloat(e.substr(1));
                      return { value: v.innerHeight * t, point: e };
                    }
                    return { value: e, point: e };
                  });
                a.sort(function (e, t) {
                  return parseInt(e.value, 10) - parseInt(t.value, 10);
                });
                for (var i = 0; i < a.length; i += 1) {
                  var n = a[i],
                    r = n.point;
                  n.value <= v.innerWidth && (t = r);
                }
                return t || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.params,
                a = e.isLocked,
                i =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              t.slidesOffsetBefore && t.slidesOffsetAfter && i
                ? (e.isLocked = i <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                a &&
                  a !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e = this,
                t = e.classNames,
                a = e.params,
                i = e.rtl,
                n = e.$el,
                r = [];
              r.push("initialized"),
                r.push(a.direction),
                a.freeMode && r.push("free-mode"),
                a.autoHeight && r.push("autoheight"),
                i && r.push("rtl"),
                a.slidesPerColumn > 1 &&
                  (r.push("multirow"),
                  "column" === a.slidesPerColumnFill &&
                    r.push("multirow-column")),
                z.android && r.push("android"),
                z.ios && r.push("ios"),
                a.cssMode && r.push("css-mode"),
                r.forEach(function (e) {
                  t.push(a.containerModifierClass + e);
                }),
                n.addClass(t.join(" "));
            },
            removeClasses: function () {
              var e = this.$el,
                t = this.classNames;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, t, a, i, n, r) {
              var s;
              function o() {
                r && r();
              }
              m(e).parent("picture")[0] || (e.complete && n)
                ? o()
                : t
                ? (((s = new v.Image()).onload = o),
                  (s.onerror = o),
                  i && (s.sizes = i),
                  a && (s.srcset = a),
                  t && (s.src = t))
                : o();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                var i = e.imagesToLoad[a];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        H = {},
        V = (function (e) {
          (0, r.Z)(a, e);
          var t = (0, s.Z)(a);
          function a() {
            var e, r, s;
            (0, d.Z)(this, a);
            for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
              l[c] = arguments[c];
            1 === l.length && l[0].constructor && l[0].constructor === Object
              ? (s = l[0])
              : ((r = l[0]), (s = l[1])),
              s || (s = {}),
              (s = w.extend({}, s)),
              r && !s.el && (s.el = r),
              (e = t.call(this, s)),
              Object.keys(Y).forEach(function (e) {
                Object.keys(Y[e]).forEach(function (t) {
                  a.prototype[t] || (a.prototype[t] = Y[e][t]);
                });
              });
            var u = (0, n.Z)(e);
            "undefined" === typeof u.modules && (u.modules = {}),
              Object.keys(u.modules).forEach(function (e) {
                var t = u.modules[e];
                if (t.params) {
                  var a = Object.keys(t.params)[0],
                    i = t.params[a];
                  if ("object" !== typeof i || null === i) return;
                  if (!(a in s) || !("enabled" in i)) return;
                  !0 === s[a] && (s[a] = { enabled: !0 }),
                    "object" !== typeof s[a] ||
                      "enabled" in s[a] ||
                      (s[a].enabled = !0),
                    s[a] || (s[a] = { enabled: !1 });
                }
              });
            var p = w.extend({}, X);
            u.useModulesParams(p),
              (u.params = w.extend({}, p, H, s)),
              (u.originalParams = w.extend({}, u.params)),
              (u.passedParams = w.extend({}, s)),
              (u.$ = m);
            var h,
              v = m(u.params.el);
            if (!(r = v[0])) return (0, i.Z)(e, void 0);
            if (v.length > 1) {
              var f = [];
              return (
                v.each(function (e, t) {
                  var i = w.extend({}, s, { el: t });
                  f.push(new a(i));
                }),
                (0, i.Z)(e, f)
              );
            }
            return (
              (r.swiper = u),
              v.data("swiper", u),
              r && r.shadowRoot && r.shadowRoot.querySelector
                ? ((h = m(
                    r.shadowRoot.querySelector(
                      ".".concat(u.params.wrapperClass)
                    )
                  )).children = function (e) {
                    return v.children(e);
                  })
                : (h = v.children(".".concat(u.params.wrapperClass))),
              w.extend(u, {
                $el: v,
                el: r,
                $wrapperEl: h,
                wrapperEl: h[0],
                classNames: [],
                slides: m(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === u.params.direction;
                },
                isVertical: function () {
                  return "vertical" === u.params.direction;
                },
                rtl:
                  "rtl" === r.dir.toLowerCase() || "rtl" === v.css("direction"),
                rtlTranslate:
                  "horizontal" === u.params.direction &&
                  ("rtl" === r.dir.toLowerCase() ||
                    "rtl" === v.css("direction")),
                wrongRTL: "-webkit-box" === h.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: u.params.allowSlideNext,
                allowSlidePrev: u.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["mousedown", "mousemove", "mouseup"];
                  return (
                    y.pointerEvents &&
                      (t = ["pointerdown", "pointermove", "pointerup"]),
                    (u.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (u.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    y.touch || !u.params.simulateTouch
                      ? u.touchEventsTouch
                      : u.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: w.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: u.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              u.useModules(),
              u.params.init && u.init(),
              (0, i.Z)(e, u)
            );
          }
          return (
            (0, l.Z)(
              a,
              [
                {
                  key: "slidesPerViewDynamic",
                  value: function () {
                    var e = this,
                      t = e.params,
                      a = e.slides,
                      i = e.slidesGrid,
                      n = e.size,
                      r = e.activeIndex,
                      s = 1;
                    if (t.centeredSlides) {
                      for (
                        var o, l = a[r].swiperSlideSize, d = r + 1;
                        d < a.length;
                        d += 1
                      )
                        a[d] &&
                          !o &&
                          ((s += 1),
                          (l += a[d].swiperSlideSize) > n && (o = !0));
                      for (var c = r - 1; c >= 0; c -= 1)
                        a[c] &&
                          !o &&
                          ((s += 1),
                          (l += a[c].swiperSlideSize) > n && (o = !0));
                    } else
                      for (var u = r + 1; u < a.length; u += 1)
                        i[u] - i[r] < n && (s += 1);
                    return s;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        a = e.params;
                      a.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                          ? (i(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                        a.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function i() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        a = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(a),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e) {
                    var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      a = this,
                      i = a.params.direction;
                    return (
                      e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                      e === i ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (a.$el
                          .removeClass(
                            "".concat(a.params.containerModifierClass).concat(i)
                          )
                          .addClass(
                            "".concat(a.params.containerModifierClass).concat(e)
                          ),
                        (a.params.direction = e),
                        a.slides.each(function (t, a) {
                          "vertical" === e
                            ? (a.style.width = "")
                            : (a.style.height = "");
                        }),
                        a.emit("changeDirection"),
                        t && a.update()),
                      a
                    );
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    e.initialized ||
                      (e.emit("beforeInit"),
                      e.params.breakpoints && e.setBreakpoint(),
                      e.addClasses(),
                      e.params.loop && e.loopCreate(),
                      e.updateSize(),
                      e.updateSlides(),
                      e.params.watchOverflow && e.checkOverflow(),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.params.preloadImages && e.preloadImages(),
                      e.params.loop
                        ? e.slideTo(
                            e.params.initialSlide + e.loopedSlides,
                            0,
                            e.params.runCallbacksOnInit
                          )
                        : e.slideTo(
                            e.params.initialSlide,
                            0,
                            e.params.runCallbacksOnInit
                          ),
                      e.attachEvents(),
                      (e.initialized = !0),
                      e.emit("init"));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      a = this,
                      i = a.params,
                      n = a.$el,
                      r = a.$wrapperEl,
                      s = a.slides;
                    return (
                      "undefined" === typeof a.params ||
                        a.destroyed ||
                        (a.emit("beforeDestroy"),
                        (a.initialized = !1),
                        a.detachEvents(),
                        i.loop && a.loopDestroy(),
                        t &&
                          (a.removeClasses(),
                          n.removeAttr("style"),
                          r.removeAttr("style"),
                          s &&
                            s.length &&
                            s
                              .removeClass(
                                [
                                  i.slideVisibleClass,
                                  i.slideActiveClass,
                                  i.slideNextClass,
                                  i.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        a.emit("destroy"),
                        Object.keys(a.eventsListeners).forEach(function (e) {
                          a.off(e);
                        }),
                        !1 !== e &&
                          ((a.$el[0].swiper = null),
                          a.$el.data("swiper", null),
                          w.deleteProps(a)),
                        (a.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    w.extend(H, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return H;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return X;
                  },
                },
                {
                  key: "Class",
                  get: function () {
                    return T;
                  },
                },
                {
                  key: "$",
                  get: function () {
                    return m;
                  },
                },
              ]
            ),
            a
          );
        })(T),
        W = { name: "device", proto: { device: z }, static: { device: z } },
        N = { name: "support", proto: { support: y }, static: { support: y } },
        F = {
          isEdge: !!v.navigator.userAgent.match(/Edge/g),
          isSafari: (function () {
            var e = v.navigator.userAgent.toLowerCase();
            return (
              e.indexOf("safari") >= 0 &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
            );
          })(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            v.navigator.userAgent
          ),
        },
        R = { name: "browser", proto: { browser: F }, static: { browser: F } },
        j = {
          name: "resize",
          create: function () {
            var e = this;
            w.extend(e, {
              resize: {
                resizeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                },
              },
            });
          },
          on: {
            init: function () {
              v.addEventListener("resize", this.resize.resizeHandler),
                v.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy: function () {
              v.removeEventListener("resize", this.resize.resizeHandler),
                v.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
          },
        },
        q = {
          func: v.MutationObserver || v.WebkitMutationObserver,
          attach: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = this,
              i = q.func,
              n = new i(function (e) {
                if (1 !== e.length) {
                  var t = function () {
                    a.emit("observerUpdate", e[0]);
                  };
                  v.requestAnimationFrame
                    ? v.requestAnimationFrame(t)
                    : v.setTimeout(t, 0);
                } else a.emit("observerUpdate", e[0]);
              });
            n.observe(e, {
              attributes: "undefined" === typeof t.attributes || t.attributes,
              childList: "undefined" === typeof t.childList || t.childList,
              characterData:
                "undefined" === typeof t.characterData || t.characterData,
            }),
              a.observer.observers.push(n);
          },
          init: function () {
            var e = this;
            if (y.observer && e.params.observer) {
              if (e.params.observeParents)
                for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                  e.observer.attach(t[a]);
              e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren,
              }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function () {
            this.observer.observers.forEach(function (e) {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        },
        Z = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create: function () {
            var e = this;
            w.extend(e, {
              observer: {
                init: q.init.bind(e),
                attach: q.attach.bind(e),
                destroy: q.destroy.bind(e),
                observers: [],
              },
            });
          },
          on: {
            init: function () {
              this.observer.init();
            },
            destroy: function () {
              this.observer.destroy();
            },
          },
        },
        _ = {
          handle: function (e) {
            var t = this,
              a = t.rtlTranslate,
              i = e;
            i.originalEvent && (i = i.originalEvent);
            var n = i.keyCode || i.charCode;
            if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && 39 === n) ||
                (t.isVertical() && 40 === n) ||
                34 === n)
            )
              return !1;
            if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && 37 === n) ||
                (t.isVertical() && 38 === n) ||
                33 === n)
            )
              return !1;
            if (
              !(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) &&
              (!p.activeElement ||
                !p.activeElement.nodeName ||
                ("input" !== p.activeElement.nodeName.toLowerCase() &&
                  "textarea" !== p.activeElement.nodeName.toLowerCase()))
            ) {
              if (
                t.params.keyboard.onlyInViewport &&
                (33 === n ||
                  34 === n ||
                  37 === n ||
                  39 === n ||
                  38 === n ||
                  40 === n)
              ) {
                var r = !1;
                if (
                  t.$el.parents(".".concat(t.params.slideClass)).length > 0 &&
                  0 ===
                    t.$el.parents(".".concat(t.params.slideActiveClass)).length
                )
                  return;
                var s = v.innerWidth,
                  o = v.innerHeight,
                  l = t.$el.offset();
                a && (l.left -= t.$el[0].scrollLeft);
                for (
                  var d = [
                      [l.left, l.top],
                      [l.left + t.width, l.top],
                      [l.left, l.top + t.height],
                      [l.left + t.width, l.top + t.height],
                    ],
                    c = 0;
                  c < d.length;
                  c += 1
                ) {
                  var u = d[c];
                  u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= o && (r = !0);
                }
                if (!r) return;
              }
              t.isHorizontal()
                ? ((33 !== n && 34 !== n && 37 !== n && 39 !== n) ||
                    (i.preventDefault
                      ? i.preventDefault()
                      : (i.returnValue = !1)),
                  (((34 !== n && 39 !== n) || a) &&
                    ((33 !== n && 37 !== n) || !a)) ||
                    t.slideNext(),
                  (((33 !== n && 37 !== n) || a) &&
                    ((34 !== n && 39 !== n) || !a)) ||
                    t.slidePrev())
                : ((33 !== n && 34 !== n && 38 !== n && 40 !== n) ||
                    (i.preventDefault
                      ? i.preventDefault()
                      : (i.returnValue = !1)),
                  (34 !== n && 40 !== n) || t.slideNext(),
                  (33 !== n && 38 !== n) || t.slidePrev()),
                t.emit("keyPress", n);
            }
          },
          enable: function () {
            var e = this;
            e.keyboard.enabled ||
              (m(p).on("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !0));
          },
          disable: function () {
            var e = this;
            e.keyboard.enabled &&
              (m(p).off("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !1));
          },
        },
        U = {
          name: "keyboard",
          params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
          create: function () {
            var e = this;
            w.extend(e, {
              keyboard: {
                enabled: !1,
                enable: _.enable.bind(e),
                disable: _.disable.bind(e),
                handle: _.handle.bind(e),
              },
            });
          },
          on: {
            init: function () {
              this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function () {
              this.keyboard.enabled && this.keyboard.disable();
            },
          },
        };
      var K = {
          lastScrollTime: w.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: function () {
            return v.navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : (function () {
                  var e = "onwheel",
                    t = e in p;
                  if (!t) {
                    var a = p.createElement("div");
                    a.setAttribute(e, "return;"),
                      (t = "function" === typeof a.onwheel);
                  }
                  return (
                    !t &&
                      p.implementation &&
                      p.implementation.hasFeature &&
                      !0 !== p.implementation.hasFeature("", "") &&
                      (t = p.implementation.hasFeature("Events.wheel", "3.0")),
                    t
                  );
                })()
              ? "wheel"
              : "mousewheel";
          },
          normalize: function (e) {
            var t = 0,
              a = 0,
              i = 0,
              n = 0;
            return (
              "detail" in e && (a = e.detail),
              "wheelDelta" in e && (a = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
              (i = 10 * t),
              (n = 10 * a),
              "deltaY" in e && (n = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = n), (n = 0)),
              (i || n) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((i *= 40), (n *= 40))
                  : ((i *= 800), (n *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              n && !a && (a = n < 1 ? -1 : 1),
              { spinX: t, spinY: a, pixelX: i, pixelY: n }
            );
          },
          handleMouseEnter: function () {
            this.mouseEntered = !0;
          },
          handleMouseLeave: function () {
            this.mouseEntered = !1;
          },
          handle: function (e) {
            var t = e,
              a = this,
              i = a.params.mousewheel;
            a.params.cssMode && t.preventDefault();
            var n = a.$el;
            if (
              ("container" !== a.params.mousewheel.eventsTarged &&
                (n = m(a.params.mousewheel.eventsTarged)),
              !a.mouseEntered && !n[0].contains(t.target) && !i.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0,
              s = a.rtlTranslate ? -1 : 1,
              o = K.normalize(t);
            if (i.forceToAxis)
              if (a.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                r = o.pixelX * s;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                r = o.pixelY;
              }
            else
              r =
                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                  ? -o.pixelX * s
                  : -o.pixelY;
            if (0 === r) return !0;
            if ((i.invert && (r = -r), a.params.freeMode)) {
              var l = {
                  time: w.now(),
                  delta: Math.abs(r),
                  direction: Math.sign(r),
                },
                d = a.mousewheel.lastEventBeforeSnap,
                c =
                  d &&
                  l.time < d.time + 500 &&
                  l.delta <= d.delta &&
                  l.direction === d.direction;
              if (!c) {
                (a.mousewheel.lastEventBeforeSnap = void 0),
                  a.params.loop && a.loopFix();
                var u = a.getTranslate() + r * i.sensitivity,
                  p = a.isBeginning,
                  h = a.isEnd;
                if (
                  (u >= a.minTranslate() && (u = a.minTranslate()),
                  u <= a.maxTranslate() && (u = a.maxTranslate()),
                  a.setTransition(0),
                  a.setTranslate(u),
                  a.updateProgress(),
                  a.updateActiveIndex(),
                  a.updateSlidesClasses(),
                  ((!p && a.isBeginning) || (!h && a.isEnd)) &&
                    a.updateSlidesClasses(),
                  a.params.freeModeSticky)
                ) {
                  clearTimeout(a.mousewheel.timeout),
                    (a.mousewheel.timeout = void 0);
                  var v = a.mousewheel.recentWheelEvents;
                  v.length >= 15 && v.shift();
                  var f = v.length ? v[v.length - 1] : void 0,
                    g = v[0];
                  if (
                    (v.push(l),
                    f && (l.delta > f.delta || l.direction !== f.direction))
                  )
                    v.splice(0);
                  else if (
                    v.length >= 15 &&
                    l.time - g.time < 500 &&
                    g.delta - l.delta >= 1 &&
                    l.delta <= 6
                  ) {
                    var b = r > 0 ? 0.8 : 0.2;
                    (a.mousewheel.lastEventBeforeSnap = l),
                      v.splice(0),
                      (a.mousewheel.timeout = w.nextTick(function () {
                        a.slideToClosest(a.params.speed, !0, void 0, b);
                      }, 0));
                  }
                  a.mousewheel.timeout ||
                    (a.mousewheel.timeout = w.nextTick(function () {
                      (a.mousewheel.lastEventBeforeSnap = l),
                        v.splice(0),
                        a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (c || a.emit("scroll", t),
                  a.params.autoplay &&
                    a.params.autoplayDisableOnInteraction &&
                    a.autoplay.stop(),
                  u === a.minTranslate() || u === a.maxTranslate())
                )
                  return !0;
              }
            } else {
              var y = {
                  time: w.now(),
                  delta: Math.abs(r),
                  direction: Math.sign(r),
                  raw: e,
                },
                T = a.mousewheel.recentWheelEvents;
              T.length >= 2 && T.shift();
              var E = T.length ? T[T.length - 1] : void 0;
              if (
                (T.push(y),
                E
                  ? (y.direction !== E.direction ||
                      y.delta > E.delta ||
                      y.time > E.time + 150) &&
                    a.mousewheel.animateSlider(y)
                  : a.mousewheel.animateSlider(y),
                a.mousewheel.releaseScroll(y))
              )
                return !0;
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          animateSlider: function (e) {
            var t = this;
            return (
              (e.delta >= 6 && w.now() - t.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), t.emit("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), t.emit("scroll", e.raw)),
              (t.mousewheel.lastScrollTime = new v.Date().getTime()),
              !1)
            );
          },
          releaseScroll: function (e) {
            var t = this,
              a = t.params.mousewheel;
            if (e.direction < 0) {
              if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
              return !0;
            return !1;
          },
          enable: function () {
            var e = this,
              t = K.event();
            if (e.params.cssMode)
              return (
                e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
              );
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            var a = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (a = m(e.params.mousewheel.eventsTarged)),
              a.on("mouseenter", e.mousewheel.handleMouseEnter),
              a.on("mouseleave", e.mousewheel.handleMouseLeave),
              a.on(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !0),
              !0
            );
          },
          disable: function () {
            var e = this,
              t = K.event();
            if (e.params.cssMode)
              return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            var a = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (a = m(e.params.mousewheel.eventsTarged)),
              a.off(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !1),
              !0
            );
          },
        },
        Q = {
          update: function () {
            var e = this,
              t = e.rtl,
              a = e.params.pagination;
            if (
              a.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var i,
                n =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                r = e.pagination.$el,
                s = e.params.loop
                  ? Math.ceil(
                      (n - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((i = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )) >
                      n - 1 - 2 * e.loopedSlides &&
                      (i -= n - 2 * e.loopedSlides),
                    i > s - 1 && (i -= s),
                    i < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (i = s + i))
                  : (i =
                      "undefined" !== typeof e.snapIndex
                        ? e.snapIndex
                        : e.activeIndex || 0),
                "bullets" === a.type &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length > 0)
              ) {
                var o,
                  l,
                  d,
                  c = e.pagination.bullets;
                if (
                  (a.dynamicBullets &&
                    ((e.pagination.bulletSize = c
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    r.css(
                      e.isHorizontal() ? "width" : "height",
                      "".concat(
                        e.pagination.bulletSize * (a.dynamicMainBullets + 4),
                        "px"
                      )
                    ),
                    a.dynamicMainBullets > 1 &&
                      void 0 !== e.previousIndex &&
                      ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                      e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                        ? (e.pagination.dynamicBulletIndex =
                            a.dynamicMainBullets - 1)
                        : e.pagination.dynamicBulletIndex < 0 &&
                          (e.pagination.dynamicBulletIndex = 0)),
                    (o = i - e.pagination.dynamicBulletIndex),
                    (d =
                      ((l =
                        o + (Math.min(c.length, a.dynamicMainBullets) - 1)) +
                        o) /
                      2)),
                  c.removeClass(
                    ""
                      .concat(a.bulletActiveClass, " ")
                      .concat(a.bulletActiveClass, "-next ")
                      .concat(a.bulletActiveClass, "-next-next ")
                      .concat(a.bulletActiveClass, "-prev ")
                      .concat(a.bulletActiveClass, "-prev-prev ")
                      .concat(a.bulletActiveClass, "-main")
                  ),
                  r.length > 1)
                )
                  c.each(function (e, t) {
                    var n = m(t),
                      r = n.index();
                    r === i && n.addClass(a.bulletActiveClass),
                      a.dynamicBullets &&
                        (r >= o &&
                          r <= l &&
                          n.addClass("".concat(a.bulletActiveClass, "-main")),
                        r === o &&
                          n
                            .prev()
                            .addClass("".concat(a.bulletActiveClass, "-prev"))
                            .prev()
                            .addClass(
                              "".concat(a.bulletActiveClass, "-prev-prev")
                            ),
                        r === l &&
                          n
                            .next()
                            .addClass("".concat(a.bulletActiveClass, "-next"))
                            .next()
                            .addClass(
                              "".concat(a.bulletActiveClass, "-next-next")
                            ));
                  });
                else {
                  var u = c.eq(i),
                    p = u.index();
                  if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                    for (var h = c.eq(o), v = c.eq(l), f = o; f <= l; f += 1)
                      c.eq(f).addClass("".concat(a.bulletActiveClass, "-main"));
                    if (e.params.loop)
                      if (p >= c.length - a.dynamicMainBullets) {
                        for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                          c.eq(c.length - g).addClass(
                            "".concat(a.bulletActiveClass, "-main")
                          );
                        c.eq(c.length - a.dynamicMainBullets - 1).addClass(
                          "".concat(a.bulletActiveClass, "-prev")
                        );
                      } else
                        h
                          .prev()
                          .addClass("".concat(a.bulletActiveClass, "-prev"))
                          .prev()
                          .addClass(
                            "".concat(a.bulletActiveClass, "-prev-prev")
                          ),
                          v
                            .next()
                            .addClass("".concat(a.bulletActiveClass, "-next"))
                            .next()
                            .addClass(
                              "".concat(a.bulletActiveClass, "-next-next")
                            );
                    else
                      h
                        .prev()
                        .addClass("".concat(a.bulletActiveClass, "-prev"))
                        .prev()
                        .addClass("".concat(a.bulletActiveClass, "-prev-prev")),
                        v
                          .next()
                          .addClass("".concat(a.bulletActiveClass, "-next"))
                          .next()
                          .addClass(
                            "".concat(a.bulletActiveClass, "-next-next")
                          );
                  }
                }
                if (a.dynamicBullets) {
                  var b = Math.min(c.length, a.dynamicMainBullets + 4),
                    w =
                      (e.pagination.bulletSize * b - e.pagination.bulletSize) /
                        2 -
                      d * e.pagination.bulletSize,
                    y = t ? "right" : "left";
                  c.css(e.isHorizontal() ? y : "top", "".concat(w, "px"));
                }
              }
              if (
                ("fraction" === a.type &&
                  (r
                    .find(".".concat(a.currentClass))
                    .text(a.formatFractionCurrent(i + 1)),
                  r
                    .find(".".concat(a.totalClass))
                    .text(a.formatFractionTotal(s))),
                "progressbar" === a.type)
              ) {
                var T;
                T = a.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                var E = (i + 1) / s,
                  S = 1,
                  x = 1;
                "horizontal" === T ? (S = E) : (x = E),
                  r
                    .find(".".concat(a.progressbarFillClass))
                    .transform(
                      "translate3d(0,0,0) scaleX("
                        .concat(S, ") scaleY(")
                        .concat(x, ")")
                    )
                    .transition(e.params.speed);
              }
              "custom" === a.type && a.renderCustom
                ? (r.html(a.renderCustom(e, i + 1, s)),
                  e.emit("paginationRender", e, r[0]))
                : e.emit("paginationUpdate", e, r[0]),
                r[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](a.lockClass);
            }
          },
          render: function () {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var a =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                i = e.pagination.$el,
                n = "";
              if ("bullets" === t.type) {
                for (
                  var r = e.params.loop
                      ? Math.ceil(
                          (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                        )
                      : e.snapGrid.length,
                    s = 0;
                  s < r;
                  s += 1
                )
                  t.renderBullet
                    ? (n += t.renderBullet.call(e, s, t.bulletClass))
                    : (n += "<"
                        .concat(t.bulletElement, ' class="')
                        .concat(t.bulletClass, '"></')
                        .concat(t.bulletElement, ">"));
                i.html(n),
                  (e.pagination.bullets = i.find(".".concat(t.bulletClass)));
              }
              "fraction" === t.type &&
                ((n = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : '<span class="'.concat(t.currentClass, '"></span>') +
                    " / " +
                    '<span class="'.concat(t.totalClass, '"></span>')),
                i.html(n)),
                "progressbar" === t.type &&
                  ((n = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : '<span class="'.concat(
                        t.progressbarFillClass,
                        '"></span>'
                      )),
                  i.html(n)),
                "custom" !== t.type &&
                  e.emit("paginationRender", e.pagination.$el[0]);
            }
          },
          init: function () {
            var e = this,
              t = e.params.pagination;
            if (t.el) {
              var a = m(t.el);
              0 !== a.length &&
                (e.params.uniqueNavElements &&
                  "string" === typeof t.el &&
                  a.length > 1 &&
                  1 === e.$el.find(t.el).length &&
                  (a = e.$el.find(t.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  a.addClass(t.clickableClass),
                a.addClass(t.modifierClass + t.type),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (a.addClass(
                    "".concat(t.modifierClass).concat(t.type, "-dynamic")
                  ),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  a.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  a.on("click", ".".concat(t.bulletClass), function (t) {
                    t.preventDefault();
                    var a = m(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                  }),
                w.extend(e.pagination, { $el: a, el: a[0] }));
            }
          },
          destroy: function () {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var a = e.pagination.$el;
              a.removeClass(t.hiddenClass),
                a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", ".".concat(t.bulletClass));
            }
          },
        },
        J = {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            var e = this;
            w.extend(e, {
              pagination: {
                init: Q.init.bind(e),
                render: Q.render.bind(e),
                update: Q.update.bind(e),
                destroy: Q.destroy.bind(e),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              var e = this;
              e.pagination.init(), e.pagination.render(), e.pagination.update();
            },
            activeIndexChange: function () {
              var e = this;
              (e.params.loop || "undefined" === typeof e.snapIndex) &&
                e.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              var e = this;
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function () {
              var e = this;
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              var t = this;
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                t.pagination.$el.length > 0 &&
                !m(e.target).hasClass(t.params.pagination.bulletClass) &&
                (!0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow", t)
                  : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
            },
          },
        },
        ee = {
          setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                a = e.rtlTranslate,
                i = e.progress,
                n = t.dragSize,
                r = t.trackSize,
                s = t.$dragEl,
                o = t.$el,
                l = e.params.scrollbar,
                d = n,
                c = (r - n) * i;
              a
                ? (c = -c) > 0
                  ? ((d = n - c), (c = 0))
                  : -c + n > r && (d = r + c)
                : c < 0
                ? ((d = n + c), (c = 0))
                : c + n > r && (d = r - c),
                e.isHorizontal()
                  ? (s.transform("translate3d(".concat(c, "px, 0, 0)")),
                    (s[0].style.width = "".concat(d, "px")))
                  : (s.transform("translate3d(0px, ".concat(c, "px, 0)")),
                    (s[0].style.height = "".concat(d, "px"))),
                l.hide &&
                  (clearTimeout(e.scrollbar.timeout),
                  (o[0].style.opacity = 1),
                  (e.scrollbar.timeout = setTimeout(function () {
                    (o[0].style.opacity = 0), o.transition(400);
                  }, 1e3)));
            }
          },
          setTransition: function (e) {
            var t = this;
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              t.scrollbar.$dragEl.transition(e);
          },
          updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                a = t.$dragEl,
                i = t.$el;
              (a[0].style.width = ""), (a[0].style.height = "");
              var n,
                r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                s = e.size / e.virtualSize,
                o = s * (r / e.size);
              (n =
                "auto" === e.params.scrollbar.dragSize
                  ? r * s
                  : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                  ? (a[0].style.width = "".concat(n, "px"))
                  : (a[0].style.height = "".concat(n, "px")),
                (i[0].style.display = s >= 1 ? "none" : ""),
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                w.extend(t, {
                  trackSize: r,
                  divider: s,
                  moveDivider: o,
                  dragSize: n,
                }),
                t.$el[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.params.scrollbar.lockClass);
            }
          },
          getPointerPosition: function (e) {
            return this.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientY
              : e.clientY;
          },
          setDragPosition: function (e) {
            var t,
              a = this,
              i = a.scrollbar,
              n = a.rtlTranslate,
              r = i.$el,
              s = i.dragSize,
              o = i.trackSize,
              l = i.dragStartPos;
            (t =
              (i.getPointerPosition(e) -
                r.offset()[a.isHorizontal() ? "left" : "top"] -
                (null !== l ? l : s / 2)) /
              (o - s)),
              (t = Math.max(Math.min(t, 1), 0)),
              n && (t = 1 - t);
            var d =
              a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(d),
              a.setTranslate(d),
              a.updateActiveIndex(),
              a.updateSlidesClasses();
          },
          onDragStart: function (e) {
            var t = this,
              a = t.params.scrollbar,
              i = t.scrollbar,
              n = t.$wrapperEl,
              r = i.$el,
              s = i.$dragEl;
            (t.scrollbar.isTouched = !0),
              (t.scrollbar.dragStartPos =
                e.target === s[0] || e.target === s
                  ? i.getPointerPosition(e) -
                    e.target.getBoundingClientRect()[
                      t.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              n.transition(100),
              s.transition(100),
              i.setDragPosition(e),
              clearTimeout(t.scrollbar.dragTimeout),
              r.transition(0),
              a.hide && r.css("opacity", 1),
              t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
              t.emit("scrollbarDragStart", e);
          },
          onDragMove: function (e) {
            var t = this,
              a = t.scrollbar,
              i = t.$wrapperEl,
              n = a.$el,
              r = a.$dragEl;
            t.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              a.setDragPosition(e),
              i.transition(0),
              n.transition(0),
              r.transition(0),
              t.emit("scrollbarDragMove", e));
          },
          onDragEnd: function (e) {
            var t = this,
              a = t.params.scrollbar,
              i = t.scrollbar,
              n = t.$wrapperEl,
              r = i.$el;
            t.scrollbar.isTouched &&
              ((t.scrollbar.isTouched = !1),
              t.params.cssMode &&
                (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
              a.hide &&
                (clearTimeout(t.scrollbar.dragTimeout),
                (t.scrollbar.dragTimeout = w.nextTick(function () {
                  r.css("opacity", 0), r.transition(400);
                }, 1e3))),
              t.emit("scrollbarDragEnd", e),
              a.snapOnRelease && t.slideToClosest());
          },
          enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                a = e.touchEventsTouch,
                i = e.touchEventsDesktop,
                n = e.params,
                r = t.$el[0],
                s = !(!y.passiveListener || !n.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                o = !(!y.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              y.touch
                ? (r.addEventListener(a.start, e.scrollbar.onDragStart, s),
                  r.addEventListener(a.move, e.scrollbar.onDragMove, s),
                  r.addEventListener(a.end, e.scrollbar.onDragEnd, o))
                : (r.addEventListener(i.start, e.scrollbar.onDragStart, s),
                  p.addEventListener(i.move, e.scrollbar.onDragMove, s),
                  p.addEventListener(i.end, e.scrollbar.onDragEnd, o));
            }
          },
          disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                a = e.touchEventsTouch,
                i = e.touchEventsDesktop,
                n = e.params,
                r = t.$el[0],
                s = !(!y.passiveListener || !n.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                o = !(!y.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              y.touch
                ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, s),
                  r.removeEventListener(a.move, e.scrollbar.onDragMove, s),
                  r.removeEventListener(a.end, e.scrollbar.onDragEnd, o))
                : (r.removeEventListener(i.start, e.scrollbar.onDragStart, s),
                  p.removeEventListener(i.move, e.scrollbar.onDragMove, s),
                  p.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
            }
          },
          init: function () {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                a = e.$el,
                i = e.params.scrollbar,
                n = m(i.el);
              e.params.uniqueNavElements &&
                "string" === typeof i.el &&
                n.length > 1 &&
                1 === a.find(i.el).length &&
                (n = a.find(i.el));
              var r = n.find(".".concat(e.params.scrollbar.dragClass));
              0 === r.length &&
                ((r = m(
                  '<div class="'.concat(
                    e.params.scrollbar.dragClass,
                    '"></div>'
                  )
                )),
                n.append(r)),
                w.extend(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
                i.draggable && t.enableDraggable();
            }
          },
          destroy: function () {
            this.scrollbar.disableDraggable();
          },
        },
        te = {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            var e = this;
            w.extend(e, {
              scrollbar: {
                init: ee.init.bind(e),
                destroy: ee.destroy.bind(e),
                updateSize: ee.updateSize.bind(e),
                setTranslate: ee.setTranslate.bind(e),
                setTransition: ee.setTransition.bind(e),
                enableDraggable: ee.enableDraggable.bind(e),
                disableDraggable: ee.disableDraggable.bind(e),
                setDragPosition: ee.setDragPosition.bind(e),
                getPointerPosition: ee.getPointerPosition.bind(e),
                onDragStart: ee.onDragStart.bind(e),
                onDragMove: ee.onDragMove.bind(e),
                onDragEnd: ee.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              var e = this;
              e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        ae = {
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
              a = e.targetTouches[0].pageY,
              i = e.targetTouches[1].pageX,
              n = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - a, 2));
          },
          onGestureStart: function (e) {
            var t = this,
              a = t.params.zoom,
              i = t.zoom,
              n = i.gesture;
            if (
              ((i.fakeGestureTouched = !1),
              (i.fakeGestureMoved = !1),
              !y.gestures)
            ) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureTouched = !0),
                (n.scaleStart = ae.getDistanceBetweenTouches(e));
            }
            (n.$slideEl && n.$slideEl.length) ||
            ((n.$slideEl = m(e.target).closest(
              ".".concat(t.params.slideClass)
            )),
            0 === n.$slideEl.length &&
              (n.$slideEl = t.slides.eq(t.activeIndex)),
            (n.$imageEl = n.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (n.$imageWrapEl = n.$imageEl.parent(".".concat(a.containerClass))),
            (n.maxRatio =
              n.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            0 !== n.$imageWrapEl.length)
              ? (n.$imageEl && n.$imageEl.transition(0),
                (t.zoom.isScaling = !0))
              : (n.$imageEl = void 0);
          },
          onGestureChange: function (e) {
            var t = this.params.zoom,
              a = this.zoom,
              i = a.gesture;
            if (!y.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (a.fakeGestureMoved = !0),
                (i.scaleMove = ae.getDistanceBetweenTouches(e));
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((a.scale = y.gestures
                ? e.scale * a.currentScale
                : (i.scaleMove / i.scaleStart) * a.currentScale),
              a.scale > i.maxRatio &&
                (a.scale =
                  i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
              a.scale < t.minRatio &&
                (a.scale =
                  t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
              i.$imageEl.transform(
                "translate3d(0,0,0) scale(".concat(a.scale, ")")
              ));
          },
          onGestureEnd: function (e) {
            var t = this,
              a = t.params.zoom,
              i = t.zoom,
              n = i.gesture;
            if (!y.gestures) {
              if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !z.android)
              )
                return;
              (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
            }
            n.$imageEl &&
              0 !== n.$imageEl.length &&
              ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), a.minRatio)),
              n.$imageEl
                .transition(t.params.speed)
                .transform("translate3d(0,0,0) scale(".concat(i.scale, ")")),
              (i.currentScale = i.scale),
              (i.isScaling = !1),
              1 === i.scale && (n.$slideEl = void 0));
          },
          onTouchStart: function (e) {
            var t = this.zoom,
              a = t.gesture,
              i = t.image;
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              (i.isTouched ||
                (z.android && e.cancelable && e.preventDefault(),
                (i.isTouched = !0),
                (i.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (i.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove: function (e) {
            var t = this,
              a = t.zoom,
              i = a.gesture,
              n = a.image,
              r = a.velocity;
            if (
              i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.allowClick = !1), n.isTouched && i.$slideEl)
            ) {
              n.isMoved ||
                ((n.width = i.$imageEl[0].offsetWidth),
                (n.height = i.$imageEl[0].offsetHeight),
                (n.startX = w.getTranslate(i.$imageWrapEl[0], "x") || 0),
                (n.startY = w.getTranslate(i.$imageWrapEl[0], "y") || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
                t.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
              var s = n.width * a.scale,
                o = n.height * a.scale;
              if (!(s < i.slideWidth && o < i.slideHeight)) {
                if (
                  ((n.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                  (n.maxX = -n.minX),
                  (n.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                  (n.maxY = -n.minY),
                  (n.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (n.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !n.isMoved && !a.isScaling)
                ) {
                  if (
                    t.isHorizontal() &&
                    ((Math.floor(n.minX) === Math.floor(n.startX) &&
                      n.touchesCurrent.x < n.touchesStart.x) ||
                      (Math.floor(n.maxX) === Math.floor(n.startX) &&
                        n.touchesCurrent.x > n.touchesStart.x))
                  )
                    return void (n.isTouched = !1);
                  if (
                    !t.isHorizontal() &&
                    ((Math.floor(n.minY) === Math.floor(n.startY) &&
                      n.touchesCurrent.y < n.touchesStart.y) ||
                      (Math.floor(n.maxY) === Math.floor(n.startY) &&
                        n.touchesCurrent.y > n.touchesStart.y))
                  )
                    return void (n.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (n.isMoved = !0),
                  (n.currentX =
                    n.touchesCurrent.x - n.touchesStart.x + n.startX),
                  (n.currentY =
                    n.touchesCurrent.y - n.touchesStart.y + n.startY),
                  n.currentX < n.minX &&
                    (n.currentX =
                      n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                  n.currentX > n.maxX &&
                    (n.currentX =
                      n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                  n.currentY < n.minY &&
                    (n.currentY =
                      n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                  n.currentY > n.maxY &&
                    (n.currentY =
                      n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                  r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
                  r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
                  r.prevTime || (r.prevTime = Date.now()),
                  (r.x =
                    (n.touchesCurrent.x - r.prevPositionX) /
                    (Date.now() - r.prevTime) /
                    2),
                  (r.y =
                    (n.touchesCurrent.y - r.prevPositionY) /
                    (Date.now() - r.prevTime) /
                    2),
                  Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 &&
                    (r.x = 0),
                  Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 &&
                    (r.y = 0),
                  (r.prevPositionX = n.touchesCurrent.x),
                  (r.prevPositionY = n.touchesCurrent.y),
                  (r.prevTime = Date.now()),
                  i.$imageWrapEl.transform(
                    "translate3d("
                      .concat(n.currentX, "px, ")
                      .concat(n.currentY, "px,0)")
                  );
              }
            }
          },
          onTouchEnd: function () {
            var e = this.zoom,
              t = e.gesture,
              a = e.image,
              i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!a.isTouched || !a.isMoved)
                return (a.isTouched = !1), void (a.isMoved = !1);
              (a.isTouched = !1), (a.isMoved = !1);
              var n = 300,
                r = 300,
                s = i.x * n,
                o = a.currentX + s,
                l = i.y * r,
                d = a.currentY + l;
              0 !== i.x && (n = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
              var c = Math.max(n, r);
              (a.currentX = o), (a.currentY = d);
              var u = a.width * e.scale,
                p = a.height * e.scale;
              (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
                (a.maxX = -a.minX),
                (a.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
                (a.maxY = -a.minY),
                (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                t.$imageWrapEl
                  .transition(c)
                  .transform(
                    "translate3d("
                      .concat(a.currentX, "px, ")
                      .concat(a.currentY, "px,0)")
                  );
            }
          },
          onTransitionEnd: function () {
            var e = this,
              t = e.zoom,
              a = t.gesture;
            a.$slideEl &&
              e.previousIndex !== e.activeIndex &&
              (a.$imageEl &&
                a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
              (t.scale = 1),
              (t.currentScale = 1),
              (a.$slideEl = void 0),
              (a.$imageEl = void 0),
              (a.$imageWrapEl = void 0));
          },
          toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in: function (e) {
            var t,
              a,
              i,
              n,
              r,
              s,
              o,
              l,
              d,
              c,
              u,
              p,
              h,
              v,
              f,
              m,
              g = this,
              b = g.zoom,
              w = g.params.zoom,
              y = b.gesture,
              T = b.image;
            (y.$slideEl ||
              (g.params.virtual && g.params.virtual.enabled && g.virtual
                ? (y.$slideEl = g.$wrapperEl.children(
                    ".".concat(g.params.slideActiveClass)
                  ))
                : (y.$slideEl = g.slides.eq(g.activeIndex)),
              (y.$imageEl = y.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (y.$imageWrapEl = y.$imageEl.parent(
                ".".concat(w.containerClass)
              ))),
            y.$imageEl && 0 !== y.$imageEl.length) &&
              (y.$slideEl.addClass("".concat(w.zoomedSlideClass)),
              "undefined" === typeof T.touchesStart.x && e
                ? ((t =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (a =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
              (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
              (b.currentScale =
                y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
              e
                ? ((f = y.$slideEl[0].offsetWidth),
                  (m = y.$slideEl[0].offsetHeight),
                  (i = y.$slideEl.offset().left + f / 2 - t),
                  (n = y.$slideEl.offset().top + m / 2 - a),
                  (o = y.$imageEl[0].offsetWidth),
                  (l = y.$imageEl[0].offsetHeight),
                  (d = o * b.scale),
                  (c = l * b.scale),
                  (h = -(u = Math.min(f / 2 - d / 2, 0))),
                  (v = -(p = Math.min(m / 2 - c / 2, 0))),
                  (r = i * b.scale) < u && (r = u),
                  r > h && (r = h),
                  (s = n * b.scale) < p && (s = p),
                  s > v && (s = v))
                : ((r = 0), (s = 0)),
              y.$imageWrapEl
                .transition(300)
                .transform("translate3d(".concat(r, "px, ").concat(s, "px,0)")),
              y.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(".concat(b.scale, ")")));
          },
          out: function () {
            var e = this,
              t = e.zoom,
              a = e.params.zoom,
              i = t.gesture;
            i.$slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (i.$slideEl = e.$wrapperEl.children(
                    ".".concat(e.params.slideActiveClass)
                  ))
                : (i.$slideEl = e.slides.eq(e.activeIndex)),
              (i.$imageEl = i.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (i.$imageWrapEl = i.$imageEl.parent(
                ".".concat(a.containerClass)
              ))),
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((t.scale = 1),
                (t.currentScale = 1),
                i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                i.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                i.$slideEl.removeClass("".concat(a.zoomedSlideClass)),
                (i.$slideEl = void 0));
          },
          enable: function () {
            var e = this,
              t = e.zoom;
            if (!t.enabled) {
              t.enabled = !0;
              var a = !(
                  "touchstart" !== e.touchEvents.start ||
                  !y.passiveListener ||
                  !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !y.passiveListener || { passive: !1, capture: !0 },
                n = ".".concat(e.params.slideClass);
              y.gestures
                ? (e.$wrapperEl.on("gesturestart", n, t.onGestureStart, a),
                  e.$wrapperEl.on("gesturechange", n, t.onGestureChange, a),
                  e.$wrapperEl.on("gestureend", n, t.onGestureEnd, a))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(e.touchEvents.start, n, t.onGestureStart, a),
                  e.$wrapperEl.on(e.touchEvents.move, n, t.onGestureChange, i),
                  e.$wrapperEl.on(e.touchEvents.end, n, t.onGestureEnd, a),
                  e.touchEvents.cancel &&
                    e.$wrapperEl.on(
                      e.touchEvents.cancel,
                      n,
                      t.onGestureEnd,
                      a
                    )),
                e.$wrapperEl.on(
                  e.touchEvents.move,
                  ".".concat(e.params.zoom.containerClass),
                  t.onTouchMove,
                  i
                );
            }
          },
          disable: function () {
            var e = this,
              t = e.zoom;
            if (t.enabled) {
              e.zoom.enabled = !1;
              var a = !(
                  "touchstart" !== e.touchEvents.start ||
                  !y.passiveListener ||
                  !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !y.passiveListener || { passive: !1, capture: !0 },
                n = ".".concat(e.params.slideClass);
              y.gestures
                ? (e.$wrapperEl.off("gesturestart", n, t.onGestureStart, a),
                  e.$wrapperEl.off("gesturechange", n, t.onGestureChange, a),
                  e.$wrapperEl.off("gestureend", n, t.onGestureEnd, a))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.off(
                    e.touchEvents.start,
                    n,
                    t.onGestureStart,
                    a
                  ),
                  e.$wrapperEl.off(e.touchEvents.move, n, t.onGestureChange, i),
                  e.$wrapperEl.off(e.touchEvents.end, n, t.onGestureEnd, a),
                  e.touchEvents.cancel &&
                    e.$wrapperEl.off(
                      e.touchEvents.cancel,
                      n,
                      t.onGestureEnd,
                      a
                    )),
                e.$wrapperEl.off(
                  e.touchEvents.move,
                  ".".concat(e.params.zoom.containerClass),
                  t.onTouchMove,
                  i
                );
            }
          },
        },
        ie = {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (a) {
                t[a] = ae[a].bind(e);
              }),
              w.extend(e, { zoom: t });
            var a = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return a;
              },
              set: function (t) {
                if (a !== t) {
                  var i = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    n = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, i, n);
                }
                a = t;
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              var t = this;
              t.params.zoom.enabled &&
                t.zoom.enabled &&
                t.params.zoom.toggle &&
                t.zoom.toggle(e);
            },
            transitionEnd: function () {
              var e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.zoom.onTransitionEnd();
            },
            slideChange: function () {
              var e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.params.cssMode &&
                e.zoom.onTransitionEnd();
            },
          },
        },
        ne = {
          run: function () {
            var e = this,
              t = e.slides.eq(e.activeIndex),
              a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = w.nextTick(function () {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                  e.params.cssMode && e.autoplay.running && e.autoplay.run();
              }, a));
          },
          start: function () {
            var e = this;
            return (
              "undefined" === typeof e.autoplay.timeout &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0),
              e.emit("autoplayStart"),
              e.autoplay.run(),
              !0)
            );
          },
          stop: function () {
            var e = this;
            return (
              !!e.autoplay.running &&
              "undefined" !== typeof e.autoplay.timeout &&
              (e.autoplay.timeout &&
                (clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = void 0)),
              (e.autoplay.running = !1),
              e.emit("autoplayStop"),
              !0)
            );
          },
          pause: function (e) {
            var t = this;
            t.autoplay.running &&
              (t.autoplay.paused ||
                (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                (t.autoplay.paused = !0),
                0 !== e && t.params.autoplay.waitForTransition
                  ? (t.$wrapperEl[0].addEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd
                    ))
                  : ((t.autoplay.paused = !1), t.autoplay.run())));
          },
        },
        re = {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var e = this;
            w.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: ne.run.bind(e),
                start: ne.start.bind(e),
                stop: ne.stop.bind(e),
                pause: ne.pause.bind(e),
                onVisibilityChange: function () {
                  "hidden" === document.visibilityState &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      e.autoplay.paused &&
                      (e.autoplay.run(), (e.autoplay.paused = !1));
                },
                onTransitionEnd: function (t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              var e = this;
              e.params.autoplay.enabled &&
                (e.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart: function (e, t) {
              var a = this;
              a.autoplay.running &&
                (t || !a.params.autoplay.disableOnInteraction
                  ? a.autoplay.pause(e)
                  : a.autoplay.stop());
            },
            sliderFirstMove: function () {
              var e = this;
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause());
            },
            touchEnd: function () {
              var e = this;
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                e.autoplay.run();
            },
            destroy: function () {
              var e = this;
              e.autoplay.running && e.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                );
            },
          },
        },
        se = [W, N, R, j, Z];
      "undefined" === typeof V.use &&
        ((V.use = V.Class.use), (V.installModule = V.Class.installModule)),
        V.use(se),
        V.use([J, te, re, U, ie]);
    },
  },
]);
//# sourceMappingURL=851.60144fdf.chunk.js.map
