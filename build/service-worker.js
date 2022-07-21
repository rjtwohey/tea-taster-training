/*! For license information please see service-worker.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      923: function () {
        try {
          self["workbox:core:5.1.4"] && _();
        } catch (e) {}
      },
      190: function () {
        try {
          self["workbox:expiration:5.1.4"] && _();
        } catch (e) {}
      },
      437: function () {
        try {
          self["workbox:precaching:5.1.4"] && _();
        } catch (e) {}
      },
      185: function () {
        try {
          self["workbox:routing:5.1.4"] && _();
        } catch (e) {}
      },
      833: function () {
        try {
          self["workbox:strategies:5.1.4"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  !(function () {
    n(923);
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function t(t, n, r) {
      return (
        n && e(t.prototype, n),
        r && e(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      return (
        (a = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        a(e, t)
      );
    }
    function i(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && a(e, t);
    }
    function c(e) {
      return (
        (c = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        c(e)
      );
    }
    function o() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function s(e) {
      return (
        (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        s(e)
      );
    }
    function u(e, t) {
      if (t && ("object" === s(t) || "function" === typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function h(e) {
      var t = o();
      return function () {
        var n,
          r = c(e);
        if (t) {
          var a = c(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function f(e, t, n) {
      return (
        (f = o()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && a(i, n.prototype), i;
            }),
        f.apply(null, arguments)
      );
    }
    function l(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (
        (l = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return f(e, arguments, c(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            a(r, e)
          );
        }),
        l(e)
      );
    }
    var p = function (e) {
        for (
          var t = e,
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        return r.length > 0 && (t += " :: ".concat(JSON.stringify(r))), t;
      },
      v = (function (e) {
        i(a, e);
        var n = h(a);
        function a(e, t) {
          var i;
          r(this, a);
          var c = p(e, t);
          return ((i = n.call(this, c)).name = e), (i.details = t), i;
        }
        return t(a);
      })(l(Error)),
      d = new Set();
    function y(e) {
      d.add(e);
    }
    var m = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" !== typeof registration ? registration.scope : "",
      },
      x = function (e) {
        return [m.prefix, e, m.suffix]
          .filter(function (e) {
            return e && e.length > 0;
          })
          .join("-");
      },
      g = function (e) {
        return e || x(m.precache);
      },
      w = function (e) {
        return e || x(m.runtime);
      };
    function b() {
      b = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        a = r.iterator || "@@iterator",
        i = r.asyncIterator || "@@asyncIterator",
        c = r.toStringTag || "@@toStringTag";
      function o(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        o({}, "");
      } catch (T) {
        o = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function u(e, t, n, r) {
        var a = t && t.prototype instanceof l ? t : l,
          i = Object.create(a.prototype),
          c = new E(r || []);
        return (
          (i._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (a, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === a) throw i;
                return q();
              }
              for (n.method = a, n.arg = i; ; ) {
                var c = n.delegate;
                if (c) {
                  var o = k(c, n);
                  if (o) {
                    if (o === f) continue;
                    return o;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var s = h(e, t, n);
                if ("normal" === s.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), s.arg === f)
                  )
                    continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          })(e, n, c)),
          i
        );
      }
      function h(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (T) {
          return { type: "throw", arg: T };
        }
      }
      e.wrap = u;
      var f = {};
      function l() {}
      function p() {}
      function v() {}
      var d = {};
      o(d, a, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        m = y && y(y(L([])));
      m && m !== t && n.call(m, a) && (d = m);
      var x = (v.prototype = l.prototype = Object.create(d));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          o(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(e, t) {
        function r(a, i, c, o) {
          var u = h(e[a], e, i);
          if ("throw" !== u.type) {
            var f = u.arg,
              l = f.value;
            return l && "object" == s(l) && n.call(l, "__await")
              ? t.resolve(l.__await).then(
                  function (e) {
                    r("next", e, c, o);
                  },
                  function (e) {
                    r("throw", e, c, o);
                  }
                )
              : t.resolve(l).then(
                  function (e) {
                    (f.value = e), c(f);
                  },
                  function (e) {
                    return r("throw", e, c, o);
                  }
                );
          }
          o(u.arg);
        }
        var a;
        this._invoke = function (e, n) {
          function i() {
            return new t(function (t, a) {
              r(e, n, t, a);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function k(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              k(e, t),
              "throw" === t.method)
            )
              return f;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return f;
        }
        var r = h(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), f;
        var a = r.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            f);
      }
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function R(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function L(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              i = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (i.next = i);
          }
        }
        return { next: q };
      }
      function q() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = v),
        o(x, "constructor", v),
        o(v, "constructor", p),
        (p.displayName = o(v, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === p || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, v)
              : ((e.__proto__ = v), o(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(x)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        g(w.prototype),
        o(w.prototype, i, function () {
          return this;
        }),
        (e.AsyncIterator = w),
        (e.async = function (t, n, r, a, i) {
          void 0 === i && (i = Promise);
          var c = new w(u(t, n, r, a), i);
          return e.isGeneratorFunction(n)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        g(x),
        o(x, c, "Generator"),
        o(x, a, function () {
          return this;
        }),
        o(x, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = L),
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(R),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var i = this.tryEntries[a],
                c = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var o = n.call(i, "catchLoc"),
                  s = n.call(i, "finallyLoc");
                if (o && s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (o) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r];
              if (
                a.tryLoc <= this.prev &&
                n.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var i = a;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var c = i ? i.completion : {};
            return (
              (c.type = e),
              (c.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), R(n), f;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  R(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: L(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        e
      );
    }
    function k(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function _(e, t) {
      if (e) {
        if ("string" === typeof e) return k(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? k(e, t)
            : void 0
        );
      }
    }
    function R(e, t) {
      var n =
        ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
        e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = _(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        c = !0,
        o = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (c = e.done), e;
        },
        e: function (e) {
          (o = !0), (i = e);
        },
        f: function () {
          try {
            c || null == n.return || n.return();
          } finally {
            if (o) throw i;
          }
        },
      };
    }
    function E(e, t, n, r, a, i, c) {
      try {
        var o = e[i](c),
          s = o.value;
      } catch (u) {
        return void n(u);
      }
      o.done ? t(s) : Promise.resolve(s).then(r, a);
    }
    function L(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, a) {
          var i = e.apply(t, n);
          function c(e) {
            E(i, r, a, c, o, "next", e);
          }
          function o(e) {
            E(i, r, a, c, o, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function q() {
      return T.apply(this, arguments);
    }
    function T() {
      return (T = L(
        b().mark(function e() {
          var t, n, r;
          return b().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    0, (t = R(d)), (e.prev = 2), t.s();
                  case 4:
                    if ((n = t.n()).done) {
                      e.next = 11;
                      break;
                    }
                    return (r = n.value), (e.next = 8), r();
                  case 8:
                    0;
                  case 9:
                    e.next = 4;
                    break;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(2)), t.e(e.t0);
                  case 16:
                    return (e.prev = 16), t.f(), e.finish(16);
                  case 19:
                    0;
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 13, 16, 19]]
          );
        })
      )).apply(this, arguments);
    }
    var U,
      O = function (e) {
        return new URL(String(e), location.href).href.replace(
          new RegExp("^".concat(location.origin)),
          ""
        );
      },
      N = function (e, t) {
        return e.filter(function (e) {
          return t in e;
        });
      },
      S = (function () {
        var e = L(
          b().mark(function e(t) {
            var n, r, a, i, c, o, s, u;
            return b().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.request),
                        (r = t.mode),
                        (a = t.plugins),
                        (i = N(void 0 === a ? [] : a, "cacheKeyWillBeUsed")),
                        (c = n),
                        (o = R(i)),
                        (e.prev = 4),
                        o.s();
                    case 6:
                      if ((s = o.n()).done) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (u = s.value),
                        (e.next = 10),
                        u.cacheKeyWillBeUsed.call(u, { mode: r, request: c })
                      );
                    case 10:
                      "string" === typeof (c = e.sent) && (c = new Request(c));
                    case 13:
                      e.next = 6;
                      break;
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(4)), o.e(e.t0);
                    case 20:
                      return (e.prev = 20), o.f(), e.finish(20);
                    case 23:
                      return e.abrupt("return", c);
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 17, 20, 23]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      A = (function () {
        var e = L(
          b().mark(function e(t) {
            var n, r, a, i, c, o, s, u, h, f;
            return b().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.request),
                        (r = t.response),
                        (a = t.event),
                        (i = t.plugins),
                        (c = r),
                        (o = !1),
                        (s = R(void 0 === i ? [] : i)),
                        (e.prev = 4),
                        s.s();
                    case 6:
                      if ((u = s.n()).done) {
                        e.next = 19;
                        break;
                      }
                      if (!("cacheWillUpdate" in (h = u.value))) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (o = !0),
                        (f = h.cacheWillUpdate),
                        (e.next = 13),
                        f.call(h, { request: n, response: c, event: a })
                      );
                    case 13:
                      if ((c = e.sent)) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt("break", 19);
                    case 17:
                      e.next = 6;
                      break;
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      (e.prev = 21), (e.t0 = e.catch(4)), s.e(e.t0);
                    case 24:
                      return (e.prev = 24), s.f(), e.finish(24);
                    case 27:
                      return (
                        o || (c = c && 200 === c.status ? c : void 0),
                        e.abrupt("return", c || null)
                      );
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 21, 24, 27]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      j = (function () {
        var e = L(
          b().mark(function e(t) {
            var n, r, a, i, c, o, s, u, h, f, l, p, v;
            return b().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.cacheName),
                        (r = t.request),
                        (a = t.event),
                        (i = t.matchOptions),
                        (c = t.plugins),
                        (o = void 0 === c ? [] : c),
                        (e.next = 3),
                        self.caches.open(n)
                      );
                    case 3:
                      return (
                        (s = e.sent),
                        (e.next = 6),
                        S({ plugins: o, request: r, mode: "read" })
                      );
                    case 6:
                      return (u = e.sent), (e.next = 9), s.match(u, i);
                    case 9:
                      (h = e.sent), (f = R(o)), (e.prev = 12), f.s();
                    case 14:
                      if ((l = f.n()).done) {
                        e.next = 24;
                        break;
                      }
                      if (!("cachedResponseWillBeUsed" in (p = l.value))) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (v = p.cachedResponseWillBeUsed),
                        (e.next = 20),
                        v.call(p, {
                          cacheName: n,
                          event: a,
                          matchOptions: i,
                          cachedResponse: h,
                          request: u,
                        })
                      );
                    case 20:
                      h = e.sent;
                    case 22:
                      e.next = 14;
                      break;
                    case 24:
                      e.next = 29;
                      break;
                    case 26:
                      (e.prev = 26), (e.t0 = e.catch(12)), f.e(e.t0);
                    case 29:
                      return (e.prev = 29), f.f(), e.finish(29);
                    case 32:
                      return e.abrupt("return", h);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[12, 26, 29, 32]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      C = (function () {
        var e = L(
          b().mark(function e(t) {
            var n, r, a, i, c, o, s, u, h, f, l, p, d, y, m;
            return b().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.cacheName),
                        (r = t.request),
                        (a = t.response),
                        (i = t.event),
                        (c = t.plugins),
                        (o = void 0 === c ? [] : c),
                        (s = t.matchOptions),
                        (e.next = 4);
                      break;
                    case 4:
                      return (
                        (e.next = 6),
                        S({ plugins: o, request: r, mode: "write" })
                      );
                    case 6:
                      if (((u = e.sent), a)) {
                        e.next = 10;
                        break;
                      }
                      throw new v("cache-put-with-no-response", {
                        url: O(u.url),
                      });
                    case 10:
                      return (
                        (e.next = 12),
                        A({ event: i, plugins: o, response: a, request: u })
                      );
                    case 12:
                      if ((h = e.sent)) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt("return");
                    case 16:
                      return (e.next = 18), self.caches.open(n);
                    case 18:
                      if (
                        ((f = e.sent),
                        !((l = N(o, "cacheDidUpdate")).length > 0))
                      ) {
                        e.next = 26;
                        break;
                      }
                      return (
                        (e.next = 23),
                        j({ cacheName: n, matchOptions: s, request: u })
                      );
                    case 23:
                      (e.t0 = e.sent), (e.next = 27);
                      break;
                    case 26:
                      e.t0 = null;
                    case 27:
                      return (
                        (p = e.t0), (e.prev = 29), (e.next = 32), f.put(u, h)
                      );
                    case 32:
                      e.next = 40;
                      break;
                    case 34:
                      if (
                        ((e.prev = 34),
                        (e.t1 = e.catch(29)),
                        "QuotaExceededError" !== e.t1.name)
                      ) {
                        e.next = 39;
                        break;
                      }
                      return (e.next = 39), q();
                    case 39:
                      throw e.t1;
                    case 40:
                      (d = R(l)), (e.prev = 41), d.s();
                    case 43:
                      if ((y = d.n()).done) {
                        e.next = 49;
                        break;
                      }
                      return (
                        (m = y.value),
                        (e.next = 47),
                        m.cacheDidUpdate.call(m, {
                          cacheName: n,
                          event: i,
                          oldResponse: p,
                          newResponse: h,
                          request: u,
                        })
                      );
                    case 47:
                      e.next = 43;
                      break;
                    case 49:
                      e.next = 54;
                      break;
                    case 51:
                      (e.prev = 51), (e.t2 = e.catch(41)), d.e(e.t2);
                    case 54:
                      return (e.prev = 54), d.f(), e.finish(54);
                    case 57:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [29, 34],
                [41, 51, 54, 57],
              ]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      K = { put: C, match: j };
    function M() {
      if (void 0 === U) {
        var e = new Response("");
        if ("body" in e)
          try {
            new Response(e.body), (U = !0);
          } catch (t) {
            U = !1;
          }
        U = !1;
      }
      return U;
    }
    function P(e) {
      e.then(function () {});
    }
    function I(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              a,
              i = [],
              c = !0,
              o = !1;
            try {
              for (
                n = n.call(e);
                !(c = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                c = !0
              );
            } catch (s) {
              (o = !0), (a = s);
            } finally {
              try {
                c || null == n.return || n.return();
              } finally {
                if (o) throw a;
              }
            }
            return i;
          }
        })(e, t) ||
        _(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var W = (function () {
      function e(t, n) {
        var a = this,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          c = i.onupgradeneeded,
          o = i.onversionchange;
        r(this, e),
          (this._db = null),
          (this._name = t),
          (this._version = n),
          (this._onupgradeneeded = c),
          (this._onversionchange =
            o ||
            function () {
              return a.close();
            });
      }
      return (
        t(e, [
          {
            key: "db",
            get: function () {
              return this._db;
            },
          },
          {
            key: "open",
            value: (function () {
              var e = L(
                b().mark(function e() {
                  var t = this;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this._db) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.next = 4),
                              new Promise(function (e, n) {
                                var r = !1;
                                setTimeout(function () {
                                  (r = !0),
                                    n(
                                      new Error(
                                        "The open request was blocked and timed out"
                                      )
                                    );
                                }, t.OPEN_TIMEOUT);
                                var a = indexedDB.open(t._name, t._version);
                                (a.onerror = function () {
                                  return n(a.error);
                                }),
                                  (a.onupgradeneeded = function (e) {
                                    r
                                      ? (a.transaction.abort(),
                                        a.result.close())
                                      : "function" ===
                                          typeof t._onupgradeneeded &&
                                        t._onupgradeneeded(e);
                                  }),
                                  (a.onsuccess = function () {
                                    var n = a.result;
                                    r
                                      ? n.close()
                                      : ((n.onversionchange =
                                          t._onversionchange.bind(t)),
                                        e(n));
                                  });
                              })
                            );
                          case 4:
                            return (
                              (this._db = e.sent), e.abrupt("return", this)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getKey",
            value: (function () {
              var e = L(
                b().mark(function e(t, n) {
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.getAllKeys(t, n, 1);
                          case 2:
                            return e.abrupt("return", e.sent[0]);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAll",
            value: (function () {
              var e = L(
                b().mark(function e(t, n, r) {
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              this.getAllMatching(t, { query: n, count: r })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAllKeys",
            value: (function () {
              var e = L(
                b().mark(function e(t, n, r) {
                  var a;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              this.getAllMatching(t, {
                                query: n,
                                count: r,
                                includeKeys: !0,
                              })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              e.abrupt(
                                "return",
                                a.map(function (e) {
                                  return e.key;
                                })
                              )
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAllMatching",
            value: (function () {
              var e = L(
                b().mark(function e(t) {
                  var n,
                    r,
                    a,
                    i,
                    c,
                    o,
                    s,
                    u,
                    h,
                    f = arguments;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              (r = n.index),
                              (a = n.query),
                              (i = void 0 === a ? null : a),
                              (c = n.direction),
                              (o = void 0 === c ? "next" : c),
                              (s = n.count),
                              (u = n.includeKeys),
                              (h = void 0 !== u && u),
                              (e.next = 3),
                              this.transaction(
                                [t],
                                "readonly",
                                function (e, n) {
                                  var a = e.objectStore(t),
                                    c = r ? a.index(r) : a,
                                    u = [],
                                    f = c.openCursor(i, o);
                                  f.onsuccess = function () {
                                    var e = f.result;
                                    e
                                      ? (u.push(h ? e : e.value),
                                        s && u.length >= s
                                          ? n(u)
                                          : e.continue())
                                      : n(u);
                                  };
                                }
                              )
                            );
                          case 3:
                            return e.abrupt("return", e.sent);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "transaction",
            value: (function () {
              var e = L(
                b().mark(function e(t, n, r) {
                  var a = this;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.open();
                          case 2:
                            return (
                              (e.next = 4),
                              new Promise(function (e, i) {
                                var c = a._db.transaction(t, n);
                                (c.onabort = function () {
                                  return i(c.error);
                                }),
                                  (c.oncomplete = function () {
                                    return e();
                                  }),
                                  r(c, function (t) {
                                    return e(t);
                                  });
                              })
                            );
                          case 4:
                            return e.abrupt("return", e.sent);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_call",
            value: (function () {
              var e = L(
                b().mark(function e(t, n, r) {
                  var a,
                    i,
                    c,
                    o,
                    s = arguments;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              a = s.length,
                                i = new Array(a > 3 ? a - 3 : 0),
                                c = 3;
                              c < a;
                              c++
                            )
                              i[c - 3] = s[c];
                            return (
                              (o = function (e, r) {
                                var a = e.objectStore(n),
                                  c = a[t].apply(a, i);
                                c.onsuccess = function () {
                                  return r(c.result);
                                };
                              }),
                              (e.next = 4),
                              this.transaction([n], r, o)
                            );
                          case 4:
                            return e.abrupt("return", e.sent);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "close",
            value: function () {
              this._db && (this._db.close(), (this._db = null));
            },
          },
        ]),
        e
      );
    })();
    W.prototype.OPEN_TIMEOUT = 2e3;
    for (
      var D = function () {
          var e,
            t = I(H[F], 2),
            n = t[0],
            r = R(t[1]);
          try {
            var a = function () {
              var t = e.value;
              (t in IDBObjectStore.prototype) &&
                (W.prototype[t] = (function () {
                  var e = L(
                    b().mark(function e(r) {
                      var a,
                        i,
                        c,
                        o = arguments;
                      return b().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  a = o.length,
                                    i = new Array(a > 1 ? a - 1 : 0),
                                    c = 1;
                                  c < a;
                                  c++
                                )
                                  i[c - 1] = o[c];
                                return (
                                  (e.next = 3),
                                  this._call.apply(this, [t, r, n].concat(i))
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })());
            };
            for (r.s(); !(e = r.n()).done; ) a();
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
        },
        F = 0,
        H = Object.entries({
          readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
          readwrite: ["add", "put", "clear", "delete"],
        });
      F < H.length;
      F++
    )
      D();
    var B = (function () {
        var e = L(
          b().mark(function e(t) {
            return b().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e, n) {
                        var r = indexedDB.deleteDatabase(t);
                        (r.onerror = function () {
                          n(r.error);
                        }),
                          (r.onblocked = function () {
                            n(new Error("Delete blocked"));
                          }),
                          (r.onsuccess = function () {
                            e();
                          });
                      })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      G = (function () {
        var e = L(
          b().mark(function e(t) {
            var n, r, a, i, c, o, s, u, h, f, l, p, d, y, m, x, g, w, k, _, E;
            return b().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.request),
                        (r = t.fetchOptions),
                        (a = t.event),
                        (i = t.plugins),
                        (c = void 0 === i ? [] : i),
                        "string" === typeof n && (n = new Request(n)),
                        !(a instanceof FetchEvent && a.preloadResponse))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (e.next = 5), a.preloadResponse;
                    case 5:
                      if (!(o = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", o);
                    case 9:
                      0,
                        (s = N(c, "fetchDidFail")),
                        (u = s.length > 0 ? n.clone() : null),
                        (e.prev = 12),
                        (h = R(c)),
                        (e.prev = 14),
                        h.s();
                    case 16:
                      if ((f = h.n()).done) {
                        e.next = 27;
                        break;
                      }
                      if (!("requestWillFetch" in (l = f.value))) {
                        e.next = 25;
                        break;
                      }
                      return (
                        (p = l.requestWillFetch),
                        (d = n.clone()),
                        (e.next = 23),
                        p.call(l, { request: d, event: a })
                      );
                    case 23:
                      n = e.sent;
                    case 25:
                      e.next = 16;
                      break;
                    case 27:
                      e.next = 32;
                      break;
                    case 29:
                      (e.prev = 29), (e.t0 = e.catch(14)), h.e(e.t0);
                    case 32:
                      return (e.prev = 32), h.f(), e.finish(32);
                    case 35:
                      e.next = 40;
                      break;
                    case 37:
                      throw (
                        ((e.prev = 37),
                        (e.t1 = e.catch(12)),
                        new v("plugin-error-request-will-fetch", {
                          thrownError: e.t1,
                        }))
                      );
                    case 40:
                      if (
                        ((y = n.clone()), (e.prev = 41), "navigate" !== n.mode)
                      ) {
                        e.next = 48;
                        break;
                      }
                      return (e.next = 45), fetch(n);
                    case 45:
                      (m = e.sent), (e.next = 51);
                      break;
                    case 48:
                      return (e.next = 50), fetch(n, r);
                    case 50:
                      m = e.sent;
                    case 51:
                      0, (x = R(c)), (e.prev = 53), x.s();
                    case 55:
                      if ((g = x.n()).done) {
                        e.next = 64;
                        break;
                      }
                      if (!("fetchDidSucceed" in (w = g.value))) {
                        e.next = 62;
                        break;
                      }
                      return (
                        (e.next = 60),
                        w.fetchDidSucceed.call(w, {
                          event: a,
                          request: y,
                          response: m,
                        })
                      );
                    case 60:
                      m = e.sent;
                    case 62:
                      e.next = 55;
                      break;
                    case 64:
                      e.next = 69;
                      break;
                    case 66:
                      (e.prev = 66), (e.t2 = e.catch(53)), x.e(e.t2);
                    case 69:
                      return (e.prev = 69), x.f(), e.finish(69);
                    case 72:
                      return e.abrupt("return", m);
                    case 75:
                      (e.prev = 75),
                        (e.t3 = e.catch(41)),
                        (k = R(s)),
                        (e.prev = 79),
                        k.s();
                    case 81:
                      if ((_ = k.n()).done) {
                        e.next = 87;
                        break;
                      }
                      return (
                        (E = _.value),
                        (e.next = 85),
                        E.fetchDidFail.call(E, {
                          error: e.t3,
                          event: a,
                          originalRequest: u.clone(),
                          request: y.clone(),
                        })
                      );
                    case 85:
                      e.next = 81;
                      break;
                    case 87:
                      e.next = 92;
                      break;
                    case 89:
                      (e.prev = 89), (e.t4 = e.catch(79)), k.e(e.t4);
                    case 92:
                      return (e.prev = 92), k.f(), e.finish(92);
                    case 95:
                      throw e.t3;
                    case 96:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [12, 37],
                [14, 29, 32, 35],
                [41, 75],
                [53, 66, 69, 72],
                [79, 89, 92, 95],
              ]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Q = { fetch: G };
    function Y(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return ($ = L(
        b().mark(function e(t, n) {
          var r, a, i, c;
          return b().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((r = t.clone()),
                    (a = {
                      headers: new Headers(r.headers),
                      status: r.status,
                      statusText: r.statusText,
                    }),
                    (i = n ? n(a) : a),
                    !M())
                  ) {
                    e.next = 7;
                    break;
                  }
                  (e.t0 = r.body), (e.next = 10);
                  break;
                case 7:
                  return (e.next = 9), r.blob();
                case 9:
                  e.t0 = e.sent;
                case 10:
                  return (c = e.t0), e.abrupt("return", new Response(c, i));
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    n(190);
    var J = "cache-entries",
      V = function (e) {
        var t = new URL(e, location.href);
        return (t.hash = ""), t.href;
      },
      z = (function () {
        function e(t) {
          var n = this;
          r(this, e),
            (this._cacheName = t),
            (this._db = new W("workbox-expiration", 1, {
              onupgradeneeded: function (e) {
                return n._handleUpgrade(e);
              },
            }));
        }
        return (
          t(e, [
            {
              key: "_handleUpgrade",
              value: function (e) {
                var t = e.target.result.createObjectStore(J, { keyPath: "id" });
                t.createIndex("cacheName", "cacheName", { unique: !1 }),
                  t.createIndex("timestamp", "timestamp", { unique: !1 }),
                  B(this._cacheName);
              },
            },
            {
              key: "setTimestamp",
              value: (function () {
                var e = L(
                  b().mark(function e(t, n) {
                    var r;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = V(t)),
                                (r = {
                                  url: t,
                                  timestamp: n,
                                  cacheName: this._cacheName,
                                  id: this._getId(t),
                                }),
                                (e.next = 4),
                                this._db.put(J, r)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTimestamp",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this._db.get(J, this._getId(t))
                              );
                            case 2:
                              return (
                                (n = e.sent), e.abrupt("return", n.timestamp)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "expireEntries",
              value: (function () {
                var e = L(
                  b().mark(function e(t, n) {
                    var r,
                      a,
                      i,
                      c,
                      o,
                      s = this;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._db.transaction(
                                  J,
                                  "readwrite",
                                  function (e, r) {
                                    var a = e
                                        .objectStore(J)
                                        .index("timestamp")
                                        .openCursor(null, "prev"),
                                      i = [],
                                      c = 0;
                                    a.onsuccess = function () {
                                      var e = a.result;
                                      if (e) {
                                        var o = e.value;
                                        o.cacheName === s._cacheName &&
                                          ((t && o.timestamp < t) ||
                                          (n && c >= n)
                                            ? i.push(e.value)
                                            : c++),
                                          e.continue();
                                      } else r(i);
                                    };
                                  }
                                )
                              );
                            case 2:
                              (r = e.sent),
                                (a = []),
                                (i = R(r)),
                                (e.prev = 5),
                                i.s();
                            case 7:
                              if ((c = i.n()).done) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (o = c.value),
                                (e.next = 11),
                                this._db.delete(J, o.id)
                              );
                            case 11:
                              a.push(o.url);
                            case 12:
                              e.next = 7;
                              break;
                            case 14:
                              e.next = 19;
                              break;
                            case 16:
                              (e.prev = 16), (e.t0 = e.catch(5)), i.e(e.t0);
                            case 19:
                              return (e.prev = 19), i.f(), e.finish(19);
                            case 22:
                              return e.abrupt("return", a);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[5, 16, 19, 22]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getId",
              value: function (e) {
                return this._cacheName + "|" + V(e);
              },
            },
          ]),
          e
        );
      })(),
      X = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          r(this, e),
            (this._isRunning = !1),
            (this._rerunRequested = !1),
            (this._maxEntries = n.maxEntries),
            (this._maxAgeSeconds = n.maxAgeSeconds),
            (this._cacheName = t),
            (this._timestampModel = new z(t));
        }
        return (
          t(e, [
            {
              key: "expireEntries",
              value: (function () {
                var e = L(
                  b().mark(function e() {
                    var t, n, r, a, i, c;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isRunning) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (this._rerunRequested = !0), e.abrupt("return")
                              );
                            case 3:
                              return (
                                (this._isRunning = !0),
                                (t = this._maxAgeSeconds
                                  ? Date.now() - 1e3 * this._maxAgeSeconds
                                  : 0),
                                (e.next = 7),
                                this._timestampModel.expireEntries(
                                  t,
                                  this._maxEntries
                                )
                              );
                            case 7:
                              return (
                                (n = e.sent),
                                (e.next = 10),
                                self.caches.open(this._cacheName)
                              );
                            case 10:
                              (r = e.sent), (a = R(n)), (e.prev = 12), a.s();
                            case 14:
                              if ((i = a.n()).done) {
                                e.next = 20;
                                break;
                              }
                              return (c = i.value), (e.next = 18), r.delete(c);
                            case 18:
                              e.next = 14;
                              break;
                            case 20:
                              e.next = 25;
                              break;
                            case 22:
                              (e.prev = 22), (e.t0 = e.catch(12)), a.e(e.t0);
                            case 25:
                              return (e.prev = 25), a.f(), e.finish(25);
                            case 28:
                              0,
                                (this._isRunning = !1),
                                this._rerunRequested &&
                                  ((this._rerunRequested = !1),
                                  P(this.expireEntries()));
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 22, 25, 28]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "updateTimestamp",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 3),
                                this._timestampModel.setTimestamp(t, Date.now())
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isURLExpired",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n, r;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._maxAgeSeconds) {
                                e.next = 6;
                                break;
                              }
                              e.next = 3;
                              break;
                            case 3:
                              return e.abrupt("return", !1);
                            case 6:
                              return (
                                (e.next = 8),
                                this._timestampModel.getTimestamp(t)
                              );
                            case 8:
                              return (
                                (n = e.sent),
                                (r = Date.now() - 1e3 * this._maxAgeSeconds),
                                e.abrupt("return", n < r)
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "delete",
              value: (function () {
                var e = L(
                  b().mark(function e() {
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._rerunRequested = !1),
                                (e.next = 3),
                                this._timestampModel.expireEntries(1 / 0)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      Z = (function () {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          r(this, e),
            (this.cachedResponseWillBeUsed = (function () {
              var e = L(
                b().mark(function e(n) {
                  var r, a, i, c, o, s, u;
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = n.event),
                            (a = n.request),
                            (i = n.cacheName),
                            (c = n.cachedResponse))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", null);
                        case 3:
                          if (
                            ((o = t._isResponseDateFresh(c)),
                            P((s = t._getCacheExpiration(i)).expireEntries()),
                            (u = s.updateTimestamp(a.url)),
                            r)
                          )
                            try {
                              r.waitUntil(u);
                            } catch (h) {
                              0;
                            }
                          return e.abrupt("return", o ? c : null);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.cacheDidUpdate = (function () {
              var e = L(
                b().mark(function e(n) {
                  var r, a, i;
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = n.cacheName),
                            (a = n.request),
                            (i = t._getCacheExpiration(r)),
                            (e.next = 5),
                            i.updateTimestamp(a.url)
                          );
                        case 5:
                          return (e.next = 7), i.expireEntries();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this._config = n),
            (this._maxAgeSeconds = n.maxAgeSeconds),
            (this._cacheExpirations = new Map()),
            n.purgeOnQuotaError &&
              y(function () {
                return t.deleteCacheAndMetadata();
              });
        }
        return (
          t(e, [
            {
              key: "_getCacheExpiration",
              value: function (e) {
                if (e === w()) throw new v("expire-custom-caches-only");
                var t = this._cacheExpirations.get(e);
                return (
                  t ||
                    ((t = new X(e, this._config)),
                    this._cacheExpirations.set(e, t)),
                  t
                );
              },
            },
            {
              key: "_isResponseDateFresh",
              value: function (e) {
                if (!this._maxAgeSeconds) return !0;
                var t = this._getDateHeaderTimestamp(e);
                return (
                  null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                );
              },
            },
            {
              key: "_getDateHeaderTimestamp",
              value: function (e) {
                if (!e.headers.has("date")) return null;
                var t = e.headers.get("date"),
                  n = new Date(t).getTime();
                return isNaN(n) ? null : n;
              },
            },
            {
              key: "deleteCacheAndMetadata",
              value: (function () {
                var e = L(
                  b().mark(function e() {
                    var t, n, r, a, i;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = R(this._cacheExpirations)),
                                (e.prev = 1),
                                t.s();
                            case 3:
                              if ((n = t.n()).done) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (r = I(n.value, 2)),
                                (a = r[0]),
                                (i = r[1]),
                                (e.next = 7),
                                self.caches.delete(a)
                              );
                            case 7:
                              return (e.next = 9), i.delete();
                            case 9:
                              e.next = 3;
                              break;
                            case 11:
                              e.next = 16;
                              break;
                            case 13:
                              (e.prev = 13), (e.t0 = e.catch(1)), t.e(e.t0);
                            case 16:
                              return (e.prev = 16), t.f(), e.finish(16);
                            case 19:
                              this._cacheExpirations = new Map();
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 13, 16, 19]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    function ee(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return k(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        _(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    n(437);
    var te = [],
      ne = function () {
        return te;
      };
    function re(e) {
      if (!e) throw new v("add-to-cache-list-unexpected-type", { entry: e });
      if ("string" === typeof e)
        return { cacheKey: (t = new URL(e, location.href)).href, url: t.href };
      var t,
        n = e.revision,
        r = e.url;
      if (!r) throw new v("add-to-cache-list-unexpected-type", { entry: e });
      if (!n)
        return { cacheKey: (t = new URL(r, location.href)).href, url: t.href };
      var a = new URL(r, location.href),
        i = new URL(r, location.href);
      return (
        a.searchParams.set("__WB_REVISION__", n),
        { cacheKey: a.href, url: i.href }
      );
    }
    var ae,
      ie = (function () {
        function e(t) {
          r(this, e),
            (this._cacheName = g(t)),
            (this._urlsToCacheKeys = new Map()),
            (this._urlsToCacheModes = new Map()),
            (this._cacheKeysToIntegrities = new Map());
        }
        return (
          t(e, [
            {
              key: "addToCacheList",
              value: function (e) {
                var t,
                  n = [],
                  r = R(e);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var a = t.value;
                    "string" === typeof a
                      ? n.push(a)
                      : a && void 0 === a.revision && n.push(a.url);
                    var i = re(a),
                      c = i.cacheKey,
                      o = i.url,
                      s =
                        "string" !== typeof a && a.revision
                          ? "reload"
                          : "default";
                    if (
                      this._urlsToCacheKeys.has(o) &&
                      this._urlsToCacheKeys.get(o) !== c
                    )
                      throw new v("add-to-cache-list-conflicting-entries", {
                        firstEntry: this._urlsToCacheKeys.get(o),
                        secondEntry: c,
                      });
                    if ("string" !== typeof a && a.integrity) {
                      if (
                        this._cacheKeysToIntegrities.has(c) &&
                        this._cacheKeysToIntegrities.get(c) !== a.integrity
                      )
                        throw new v(
                          "add-to-cache-list-conflicting-integrities",
                          { url: o }
                        );
                      this._cacheKeysToIntegrities.set(c, a.integrity);
                    }
                    if (
                      (this._urlsToCacheKeys.set(o, c),
                      this._urlsToCacheModes.set(o, s),
                      n.length > 0)
                    ) {
                      var u =
                        "Workbox is precaching URLs without revision " +
                        "info: ".concat(
                          n.join(", "),
                          "\nThis is generally NOT safe. "
                        ) +
                        "Learn more at https://bit.ly/wb-precache";
                      console.warn(u);
                    }
                  }
                } catch (h) {
                  r.e(h);
                } finally {
                  r.f();
                }
              },
            },
            {
              key: "install",
              value: (function () {
                var e = L(
                  b().mark(function e() {
                    var t,
                      n,
                      r,
                      a,
                      i,
                      c,
                      o,
                      s,
                      u,
                      h,
                      f,
                      l,
                      p,
                      v,
                      d,
                      y = this,
                      m = arguments;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t =
                                  m.length > 0 && void 0 !== m[0] ? m[0] : {}),
                                (n = t.event),
                                (r = t.plugins),
                                (a = []),
                                (i = []),
                                (e.next = 6),
                                self.caches.open(this._cacheName)
                              );
                            case 6:
                              return (c = e.sent), (e.next = 9), c.keys();
                            case 9:
                              (o = e.sent),
                                (s = new Set(
                                  o.map(function (e) {
                                    return e.url;
                                  })
                                )),
                                (u = R(this._urlsToCacheKeys));
                              try {
                                for (u.s(); !(h = u.n()).done; )
                                  (f = I(h.value, 2)),
                                    (l = f[0]),
                                    (p = f[1]),
                                    s.has(p)
                                      ? i.push(l)
                                      : a.push({ cacheKey: p, url: l });
                              } catch (x) {
                                u.e(x);
                              } finally {
                                u.f();
                              }
                              return (
                                (v = a.map(function (e) {
                                  var t = e.cacheKey,
                                    a = e.url,
                                    i = y._cacheKeysToIntegrities.get(t),
                                    c = y._urlsToCacheModes.get(a);
                                  return y._addURLToCache({
                                    cacheKey: t,
                                    cacheMode: c,
                                    event: n,
                                    integrity: i,
                                    plugins: r,
                                    url: a,
                                  });
                                })),
                                (e.next = 16),
                                Promise.all(v)
                              );
                            case 16:
                              return (
                                (d = a.map(function (e) {
                                  return e.url;
                                })),
                                e.abrupt("return", {
                                  updatedURLs: d,
                                  notUpdatedURLs: i,
                                })
                              );
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "activate",
              value: (function () {
                var e = L(
                  b().mark(function e() {
                    var t, n, r, a, i, c, o;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), self.caches.open(this._cacheName)
                              );
                            case 2:
                              return (t = e.sent), (e.next = 5), t.keys();
                            case 5:
                              (n = e.sent),
                                (r = new Set(this._urlsToCacheKeys.values())),
                                (a = []),
                                (i = R(n)),
                                (e.prev = 9),
                                i.s();
                            case 11:
                              if ((c = i.n()).done) {
                                e.next = 19;
                                break;
                              }
                              if (((o = c.value), r.has(o.url))) {
                                e.next = 17;
                                break;
                              }
                              return (e.next = 16), t.delete(o);
                            case 16:
                              a.push(o.url);
                            case 17:
                              e.next = 11;
                              break;
                            case 19:
                              e.next = 24;
                              break;
                            case 21:
                              (e.prev = 21), (e.t0 = e.catch(9)), i.e(e.t0);
                            case 24:
                              return (e.prev = 24), i.f(), e.finish(24);
                            case 27:
                              return e.abrupt("return", { deletedURLs: a });
                            case 29:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[9, 21, 24, 27]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_addURLToCache",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n, r, a, i, c, o, s, u, h, f, l, p;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.cacheKey),
                                (r = t.url),
                                (a = t.cacheMode),
                                (i = t.event),
                                (c = t.plugins),
                                (o = t.integrity),
                                (s = new Request(r, {
                                  integrity: o,
                                  cache: a,
                                  credentials: "same-origin",
                                })),
                                (e.next = 4),
                                Q.fetch({ event: i, plugins: c, request: s })
                              );
                            case 4:
                              (u = e.sent), (f = R(c || []));
                              try {
                                for (f.s(); !(l = f.n()).done; )
                                  "cacheWillUpdate" in (p = l.value) && (h = p);
                              } catch (d) {
                                f.e(d);
                              } finally {
                                f.f();
                              }
                              if (!h) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 10),
                                h.cacheWillUpdate({
                                  event: i,
                                  request: s,
                                  response: u,
                                })
                              );
                            case 10:
                              (e.t0 = e.sent), (e.next = 14);
                              break;
                            case 13:
                              e.t0 = u.status < 400;
                            case 14:
                              if (e.t0) {
                                e.next = 17;
                                break;
                              }
                              throw new v("bad-precaching-response", {
                                url: r,
                                status: u.status,
                              });
                            case 17:
                              if (!u.redirected) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 20), Y(u);
                            case 20:
                              u = e.sent;
                            case 21:
                              return (
                                (e.next = 23),
                                K.put({
                                  event: i,
                                  plugins: c,
                                  response: u,
                                  request: n === r ? s : new Request(n),
                                  cacheName: this._cacheName,
                                  matchOptions: { ignoreSearch: !0 },
                                })
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getURLsToCacheKeys",
              value: function () {
                return this._urlsToCacheKeys;
              },
            },
            {
              key: "getCachedURLs",
              value: function () {
                return ee(this._urlsToCacheKeys.keys());
              },
            },
            {
              key: "getCacheKeyForURL",
              value: function (e) {
                var t = new URL(e, location.href);
                return this._urlsToCacheKeys.get(t.href);
              },
            },
            {
              key: "matchPrecache",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n, r, a;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = t instanceof Request ? t.url : t),
                                !(r = this.getCacheKeyForURL(n)))
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 5), self.caches.open(this._cacheName)
                              );
                            case 5:
                              return (
                                (a = e.sent), e.abrupt("return", a.match(r))
                              );
                            case 7:
                              return e.abrupt("return", void 0);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "createHandler",
              value: function () {
                var e = this,
                  t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                return (function () {
                  var n = L(
                    b().mark(function n(r) {
                      var a, i;
                      return b().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (a = r.request),
                                  (n.prev = 1),
                                  (n.next = 4),
                                  e.matchPrecache(a)
                                );
                              case 4:
                                if (!(i = n.sent)) {
                                  n.next = 7;
                                  break;
                                }
                                return n.abrupt("return", i);
                              case 7:
                                throw new v("missing-precache-entry", {
                                  cacheName: e._cacheName,
                                  url: a instanceof Request ? a.url : a,
                                });
                              case 10:
                                if (((n.prev = 10), (n.t0 = n.catch(1)), !t)) {
                                  n.next = 15;
                                  break;
                                }
                                return n.abrupt("return", fetch(a));
                              case 15:
                                throw n.t0;
                              case 16:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[1, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })();
              },
            },
            {
              key: "createHandlerBoundToURL",
              value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  n = this.getCacheKeyForURL(e);
                if (!n) throw new v("non-precached-url", { url: e });
                var r = this.createHandler(t),
                  a = new Request(e);
                return function () {
                  return r({ request: a });
                };
              },
            },
          ]),
          e
        );
      })(),
      ce = function () {
        return ae || (ae = new ie()), ae;
      };
    function oe(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = function () {
            var n = a[r];
            t.some(function (e) {
              return e.test(n);
            }) && e.searchParams.delete(n);
          },
          r = 0,
          a = ee(e.searchParams.keys());
        r < a.length;
        r++
      )
        n();
      return e;
    }
    var se = b().mark(ue);
    function ue(e) {
      var t,
        n,
        r,
        a,
        i,
        c,
        o,
        s,
        u,
        h,
        f,
        l,
        p,
        v = arguments;
      return b().wrap(
        function (d) {
          for (;;)
            switch ((d.prev = d.next)) {
              case 0:
                return (
                  (t = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                  (n = t.ignoreURLParametersMatching),
                  (r = t.directoryIndex),
                  (a = t.cleanURLs),
                  (i = t.urlManipulation),
                  ((c = new URL(e, location.href)).hash = ""),
                  (d.next = 5),
                  c.href
                );
              case 5:
                return (o = oe(c, n)), (d.next = 8), o.href;
              case 8:
                if (!r || !o.pathname.endsWith("/")) {
                  d.next = 13;
                  break;
                }
                return (
                  ((s = new URL(o.href)).pathname += r), (d.next = 13), s.href
                );
              case 13:
                if (!a) {
                  d.next = 18;
                  break;
                }
                return (
                  ((u = new URL(o.href)).pathname += ".html"),
                  (d.next = 18),
                  u.href
                );
              case 18:
                if (!i) {
                  d.next = 37;
                  break;
                }
                (h = i({ url: c })), (f = R(h)), (d.prev = 21), f.s();
              case 23:
                if ((l = f.n()).done) {
                  d.next = 29;
                  break;
                }
                return (p = l.value), (d.next = 27), p.href;
              case 27:
                d.next = 23;
                break;
              case 29:
                d.next = 34;
                break;
              case 31:
                (d.prev = 31), (d.t0 = d.catch(21)), f.e(d.t0);
              case 34:
                return (d.prev = 34), f.f(), d.finish(34);
              case 37:
              case "end":
                return d.stop();
            }
        },
        se,
        null,
        [[21, 31, 34, 37]]
      );
    }
    var he = function (e, t) {
        var n,
          r = ce().getURLsToCacheKeys(),
          a = R(ue(e, t));
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var i = n.value,
              c = r.get(i);
            if (c) return c;
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
      },
      fe = !1;
    function le(e) {
      fe ||
        (!(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ignoreURLParametersMatching,
            n = void 0 === t ? [/^utm_/] : t,
            r = e.directoryIndex,
            a = void 0 === r ? "index.html" : r,
            i = e.cleanURLs,
            c = void 0 === i || i,
            o = e.urlManipulation,
            s = g();
          self.addEventListener("fetch", function (e) {
            var t = he(e.request.url, {
              cleanURLs: c,
              directoryIndex: a,
              ignoreURLParametersMatching: n,
              urlManipulation: o,
            });
            if (t) {
              var r = self.caches
                .open(s)
                .then(function (e) {
                  return e.match(t);
                })
                .then(function (e) {
                  return e || fetch(t);
                });
              e.respondWith(r);
            }
          });
        })(e),
        (fe = !0));
    }
    var pe = function (e) {
        var t = ce(),
          n = ne();
        e.waitUntil(
          t.install({ event: e, plugins: n }).catch(function (e) {
            throw e;
          })
        );
      },
      ve = function (e) {
        var t = ce();
        e.waitUntil(t.activate());
      };
    n(185);
    var de,
      ye = function (e) {
        return e && "object" === typeof e ? e : { handle: e };
      },
      me = t(function e(t, n) {
        var a =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "GET";
        r(this, e), (this.handler = ye(n)), (this.match = t), (this.method = a);
      }),
      xe = (function (e) {
        i(a, e);
        var n = h(a);
        function a(e, t, i) {
          r(this, a);
          return n.call(
            this,
            function (t) {
              var n = t.url,
                r = e.exec(n.href);
              if (r && (n.origin === location.origin || 0 === r.index))
                return r.slice(1);
            },
            t,
            i
          );
        }
        return t(a);
      })(me),
      ge = (function () {
        function e() {
          r(this, e), (this._routes = new Map());
        }
        return (
          t(e, [
            {
              key: "routes",
              get: function () {
                return this._routes;
              },
            },
            {
              key: "addFetchListener",
              value: function () {
                var e = this;
                self.addEventListener("fetch", function (t) {
                  var n = t.request,
                    r = e.handleRequest({ request: n, event: t });
                  r && t.respondWith(r);
                });
              },
            },
            {
              key: "addCacheListener",
              value: function () {
                var e = this;
                self.addEventListener("message", function (t) {
                  if (t.data && "CACHE_URLS" === t.data.type) {
                    var n = t.data.payload;
                    0;
                    var r = Promise.all(
                      n.urlsToCache.map(function (t) {
                        "string" === typeof t && (t = [t]);
                        var n = f(Request, ee(t));
                        return e.handleRequest({ request: n });
                      })
                    );
                    t.waitUntil(r),
                      t.ports &&
                        t.ports[0] &&
                        r.then(function () {
                          return t.ports[0].postMessage(!0);
                        });
                  }
                });
              },
            },
            {
              key: "handleRequest",
              value: function (e) {
                var t = this,
                  n = e.request,
                  r = e.event;
                var a = new URL(n.url, location.href);
                if (a.protocol.startsWith("http")) {
                  var i = this.findMatchingRoute({
                      url: a,
                      request: n,
                      event: r,
                    }),
                    c = i.params,
                    o = i.route,
                    s = o && o.handler;
                  if (
                    (!s && this._defaultHandler && (s = this._defaultHandler),
                    s)
                  ) {
                    var u;
                    0;
                    try {
                      u = s.handle({ url: a, request: n, event: r, params: c });
                    } catch (h) {
                      u = Promise.reject(h);
                    }
                    return (
                      u instanceof Promise &&
                        this._catchHandler &&
                        (u = u.catch(function (e) {
                          return t._catchHandler.handle({
                            url: a,
                            request: n,
                            event: r,
                          });
                        })),
                      u
                    );
                  }
                }
              },
            },
            {
              key: "findMatchingRoute",
              value: function (e) {
                var t = e.url,
                  n = e.request,
                  r = e.event;
                var a,
                  i = R(this._routes.get(n.method) || []);
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var c = a.value,
                      o = void 0,
                      s = c.match({ url: t, request: n, event: r });
                    if (s)
                      return (
                        (o = s),
                        ((Array.isArray(s) && 0 === s.length) ||
                          (s.constructor === Object &&
                            0 === Object.keys(s).length) ||
                          "boolean" === typeof s) &&
                          (o = void 0),
                        { route: c, params: o }
                      );
                  }
                } catch (u) {
                  i.e(u);
                } finally {
                  i.f();
                }
                return {};
              },
            },
            {
              key: "setDefaultHandler",
              value: function (e) {
                this._defaultHandler = ye(e);
              },
            },
            {
              key: "setCatchHandler",
              value: function (e) {
                this._catchHandler = ye(e);
              },
            },
            {
              key: "registerRoute",
              value: function (e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                  this._routes.get(e.method).push(e);
              },
            },
            {
              key: "unregisterRoute",
              value: function (e) {
                if (!this._routes.has(e.method))
                  throw new v("unregister-route-but-not-found-with-method", {
                    method: e.method,
                  });
                var t = this._routes.get(e.method).indexOf(e);
                if (!(t > -1))
                  throw new v("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(t, 1);
              },
            },
          ]),
          e
        );
      })(),
      we = function () {
        return (
          de || ((de = new ge()).addFetchListener(), de.addCacheListener()), de
        );
      };
    function be(e, t, n) {
      var r;
      if ("string" === typeof e) {
        var a = new URL(e, location.href);
        r = new me(
          function (e) {
            return e.url.href === a.href;
          },
          t,
          n
        );
      } else if (e instanceof RegExp) r = new xe(e, t, n);
      else if ("function" === typeof e) r = new me(e, t, n);
      else {
        if (!(e instanceof me))
          throw new v("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture",
          });
        r = e;
      }
      return we().registerRoute(r), r;
    }
    n(833);
    var ke,
      _e = {
        cacheWillUpdate: (function () {
          var e = L(
            b().mark(function e(t) {
              var n;
              return b().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (200 !== (n = t.response).status && 0 !== n.status) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", n);
                    case 3:
                      return e.abrupt("return", null);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      },
      Re = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (
            (r(this, e),
            (this._cacheName = w(t.cacheName)),
            (this._plugins = t.plugins || []),
            t.plugins)
          ) {
            var n = t.plugins.some(function (e) {
              return !!e.cacheWillUpdate;
            });
            this._plugins = n ? t.plugins : [_e].concat(ee(t.plugins));
          } else this._plugins = [_e];
          (this._fetchOptions = t.fetchOptions),
            (this._matchOptions = t.matchOptions);
        }
        return (
          t(e, [
            {
              key: "handle",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n, r, a, i, c;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.event),
                                (r = t.request),
                                [],
                                "string" === typeof r && (r = new Request(r)),
                                (a = this._getFromNetwork({
                                  request: r,
                                  event: n,
                                })),
                                (e.next = 7),
                                K.match({
                                  cacheName: this._cacheName,
                                  request: r,
                                  event: n,
                                  matchOptions: this._matchOptions,
                                  plugins: this._plugins,
                                })
                              );
                            case 7:
                              if (!(i = e.sent)) {
                                e.next = 13;
                                break;
                              }
                              if (n)
                                try {
                                  n.waitUntil(a);
                                } catch (c) {
                                  0;
                                }
                              e.next = 23;
                              break;
                            case 13:
                              return (e.prev = 14), (e.next = 17), a;
                            case 17:
                              (i = e.sent), (e.next = 23);
                              break;
                            case 20:
                              (e.prev = 20), (e.t0 = e.catch(14)), (c = e.t0);
                            case 23:
                              if (i) {
                                e.next = 26;
                                break;
                              }
                              throw new v("no-response", {
                                url: r.url,
                                error: c,
                              });
                            case 26:
                              return e.abrupt("return", i);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[14, 20]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getFromNetwork",
              value: (function () {
                var e = L(
                  b().mark(function e(t) {
                    var n, r, a, i;
                    return b().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.request),
                                (r = t.event),
                                (e.next = 3),
                                Q.fetch({
                                  request: n,
                                  event: r,
                                  fetchOptions: this._fetchOptions,
                                  plugins: this._plugins,
                                })
                              );
                            case 3:
                              if (
                                ((a = e.sent),
                                (i = K.put({
                                  cacheName: this._cacheName,
                                  request: n,
                                  response: a.clone(),
                                  event: r,
                                  plugins: this._plugins,
                                })),
                                r)
                              )
                                try {
                                  r.waitUntil(i);
                                } catch (c) {
                                  0;
                                }
                              return e.abrupt("return", a);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    self.addEventListener("activate", function () {
      return self.clients.claim();
    }),
      (function (e) {
        ce().addToCacheList(e),
          e.length > 0 &&
            (self.addEventListener("install", pe),
            self.addEventListener("activate", ve));
      })([
        { revision: "a8fa8cd230dd0596b7294b5c37aa3e94", url: "/index.html" },
        { revision: null, url: "/static/css/main.4f2b0a0d.css" },
        { revision: null, url: "/static/js/186.cad7d64d.chunk.js" },
        { revision: null, url: "/static/js/22.43d6e6bc.chunk.js" },
        { revision: null, url: "/static/js/344.98cd1f60.chunk.js" },
        { revision: null, url: "/static/js/372.e3a44bf9.chunk.js" },
        { revision: null, url: "/static/js/377.219fd65e.chunk.js" },
        { revision: null, url: "/static/js/630.0261218f.chunk.js" },
        { revision: null, url: "/static/js/841.184f7e9b.chunk.js" },
        { revision: null, url: "/static/js/851.60144fdf.chunk.js" },
        { revision: null, url: "/static/js/856.77d3972e.chunk.js" },
        { revision: null, url: "/static/js/858.4b383ab4.chunk.js" },
        { revision: null, url: "/static/js/main.07d9177d.js" },
      ]),
      le(ke);
    var Ee,
      Le = new RegExp("/[^/?]+\\.[^/]+$");
    be(function (e) {
      var t = e.request,
        n = e.url;
      return (
        "navigate" === t.mode &&
        !n.pathname.startsWith("/_") &&
        !n.pathname.match(Le)
      );
    }, ((Ee = "/index.html"), ce().createHandlerBoundToURL(Ee))),
      be(function (e) {
        var t = e.url;
        return t.origin === self.location.origin && t.pathname.endsWith(".png");
      }, new Re({ cacheName: "images", plugins: [new Z({ maxEntries: 50 })] })),
      self.addEventListener("message", function (e) {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
      });
  })();
})();
//# sourceMappingURL=service-worker.js.map
