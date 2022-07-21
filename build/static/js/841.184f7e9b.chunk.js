"use strict";
(self.webpackChunktea_taster = self.webpackChunktea_taster || []).push([
  [841],
  {
    8841: function (e, t, n) {
      n.r(t),
        n.d(t, {
          startStatusTap: function () {
            return i;
          },
        });
      var r = n(4165),
        a = n(5861),
        o = n(3196),
        s = n(3743),
        u = n(1811),
        i = function () {
          var e = window;
          e.addEventListener("statusTap", function () {
            (0, o.wj)(function () {
              var t = e.innerWidth,
                n = e.innerHeight,
                i = document.elementFromPoint(t / 2, n / 2);
              if (i) {
                var c = (0, s.a)(i);
                c &&
                  new Promise(function (e) {
                    return (0, u.c)(c, e);
                  }).then(function () {
                    (0, o.Iu)(
                      (0, a.Z)(
                        (0, r.Z)().mark(function e() {
                          return (0, r.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    c.style.setProperty("--overflow", "hidden"),
                                    (e.next = 3),
                                    (0, s.s)(c, 300)
                                  );
                                case 3:
                                  c.style.removeProperty("--overflow");
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    );
                  });
              }
            });
          });
        };
    },
  },
]);
//# sourceMappingURL=841.184f7e9b.chunk.js.map
