"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [843],
  {
    2960: (e, s, t) => {
      t.d(s, { A: () => m });
      var a = t(5155),
        i = t(2115),
        r = t(5612),
        l = t(5229),
        n = t(9540),
        c = t(2619),
        o = t.n(c);
      let h = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
      ];
      function m() {
        let [e, s] = (0, i.useState)(!1);
        return (0, a.jsx)("header", {
          className: "fixed top-4 left-4 right-4 z-50 fade-in",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "/",
                    className: "flex gap-2 items-center",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "h-4 w-4 text-white",
                          children: (0, a.jsx)("path", {
                            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                          }),
                        }),
                      }),
                      (0, a.jsx)("span", {
                        className: "text-lg font-medium sf-pro-display",
                        children: "Rohim Dev",
                      }),
                    ],
                  }),
                  (0, a.jsx)("nav", {
                    className: "hidden md:flex items-center gap-8 text-sm",
                    children: h.map((e) =>
                      (0, a.jsx)(
                        o(),
                        {
                          href: e.href,
                          className:
                            "text-white/70 hover:text-white transition-colors",
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className: "hidden md:flex items-center gap-3",
                    children: [
                      (0, a.jsx)("button", {
                        className:
                          "px-4 py-2 text-sm text-white/70 hover:text-white transition-colors",
                        children: "Resume",
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105",
                        children: "Get In Touch",
                      }),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    className: "md:hidden p-2",
                    onClick: () => s(!e),
                    children: e
                      ? (0, a.jsx)(l.A, { className: "h-5 w-5" })
                      : (0, a.jsx)(n.A, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              e &&
                (0, a.jsx)(r.P.div, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className:
                    "md:hidden mt-4 glass-effect bg-white/5 border-white/10 border rounded-2xl p-4",
                  children: (0, a.jsxs)("nav", {
                    className: "flex flex-col space-y-4",
                    children: [
                      h.map((e) =>
                        (0, a.jsx)(
                          o(),
                          {
                            href: e.href,
                            className:
                              "text-white/70 hover:text-white transition-colors py-2",
                            onClick: () => s(!1),
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                      (0, a.jsxs)("div", {
                        className:
                          "pt-4 border-t border-white/10 flex flex-col space-y-2",
                        children: [
                          (0, a.jsx)("button", {
                            className:
                              "px-4 py-2 text-sm text-white/70 hover:text-white transition-colors text-left",
                            children: "Resume",
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all",
                            children: "Get In Touch",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
    },
    3370: (e, s, t) => {
      t.d(s, { A: () => f });
      var a = t(5155),
        i = t(5612),
        r = t(7378),
        l = t(4684),
        n = t(7333),
        c = t(3664),
        o = t(9141),
        h = t(1873),
        m = t(2619),
        d = t.n(m);
      let x = {
        main: [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Work", href: "/work" },
          { name: "Projects", href: "/projects" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ],
        social: [
          { name: "Twitter", href: "#", icon: r.A },
          { name: "GitHub", href: "#", icon: l.A },
          { name: "LinkedIn", href: "#", icon: n.A },
        ],
      };
      function f() {
        return (0, a.jsx)("footer", {
          className: "border-white/10 border-t pt-16 pb-16",
          children: (0, a.jsxs)("div", {
            className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, a.jsxs)("div", {
                className: "grid md:grid-cols-5 gap-12 mb-12",
                children: [
                  (0, a.jsxs)("div", {
                    className: "md:col-span-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center",
                            children: (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "h-4 w-4 text-white",
                              children: (0, a.jsx)("path", {
                                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                              }),
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-xl font-semibold sf-pro-display",
                            children: "Rohim Dev",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: "text-white/60 mb-6 max-w-md",
                        children:
                          "Full-stack developer crafting digital experiences that matter. Let's build something amazing together.",
                      }),
                      (0, a.jsx)("div", {
                        className: "flex gap-4",
                        children: x.social.map((e) =>
                          (0, a.jsx)(
                            i.P.button,
                            {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              className:
                                "p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                              children: (0, a.jsx)(e.icon, {
                                className: "h-5 w-5",
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Navigation",
                      }),
                      (0, a.jsx)("ul", {
                        className: "space-y-3 text-white/60",
                        children: x.main.map((e) =>
                          (0, a.jsx)(
                            "li",
                            {
                              children: (0, a.jsx)(d(), {
                                href: e.href,
                                className: "hover:text-white transition-colors",
                                children: e.name,
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Services",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "space-y-3 text-white/60",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Web Development",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Mobile Apps",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "UI/UX Design",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Consulting",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Contact",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "space-y-3 text-white/60",
                        children: [
                          (0, a.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(c.A, { className: "h-4 w-4" }),
                              (0, a.jsx)("a", {
                                href: "mailto:rohimjoy70@gmail.com",
                                className: "hover:text-white transition-colors",
                                children: "rohimjoy70@gmail.com",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(o.A, { className: "h-4 w-4" }),
                              (0, a.jsx)("a", {
                                href: "tel:+1234567890",
                                className: "hover:text-white transition-colors",
                                children: "+1 (234) 567-890",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(h.A, { className: "h-4 w-4" }),
                              (0, a.jsx)("span", {
                                children: "Surabaya, Indonesia",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-white/40 text-sm",
                    children: "\xa9 2024 Rohim Dev. All rights reserved.",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-6 text-white/40 text-sm mt-4 md:mt-0",
                    children: [
                      (0, a.jsx)("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Privacy Policy",
                      }),
                      (0, a.jsx)("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Terms of Service",
                      }),
                      (0, a.jsx)("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Security",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
