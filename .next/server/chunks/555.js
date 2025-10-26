(exports.id = 555),
  (exports.ids = [555]),
  (exports.modules = {
    127: () => {},
    1751: () => {},
    1803: (a, b, c) => {
      Promise.resolve().then(c.t.bind(c, 4160, 23)),
        Promise.resolve().then(c.t.bind(c, 1603, 23)),
        Promise.resolve().then(c.t.bind(c, 8495, 23)),
        Promise.resolve().then(c.t.bind(c, 5170, 23)),
        Promise.resolve().then(c.t.bind(c, 7526, 23)),
        Promise.resolve().then(c.t.bind(c, 8922, 23)),
        Promise.resolve().then(c.t.bind(c, 9234, 23)),
        Promise.resolve().then(c.t.bind(c, 2263, 23)),
        Promise.resolve().then(c.bind(c, 2146));
    },
    2704: () => {},
    4851: (a, b, c) => {
      Promise.resolve().then(c.t.bind(c, 1170, 23)),
        Promise.resolve().then(c.t.bind(c, 3597, 23)),
        Promise.resolve().then(c.t.bind(c, 6893, 23)),
        Promise.resolve().then(c.t.bind(c, 9748, 23)),
        Promise.resolve().then(c.t.bind(c, 6060, 23)),
        Promise.resolve().then(c.t.bind(c, 7184, 23)),
        Promise.resolve().then(c.t.bind(c, 9576, 23)),
        Promise.resolve().then(c.t.bind(c, 3041, 23)),
        Promise.resolve().then(c.t.bind(c, 1384, 23));
    },
    5854: () => {},
    6082: (a, b, c) => {
      "use strict";
      c.d(b, { A: () => l });
      var d = c(1124),
        e = c(8301),
        f = c(2611),
        g = c(7089),
        h = c(6130),
        i = c(3991),
        j = c.n(i);
      let k = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
      ];
      function l() {
        let [a, b] = (0, e.useState)(!1);
        return (0, d.jsx)("header", {
          className: "fixed top-4 left-4 right-4 z-50 fade-in",
          children: (0, d.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, d.jsxs)("div", {
                className:
                  "h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between",
                children: [
                  (0, d.jsxs)(j(), {
                    href: "/",
                    className: "flex gap-2 items-center",
                    children: [
                      (0, d.jsx)("div", {
                        className:
                          "w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center",
                        children: (0, d.jsx)("svg", {
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
                          children: (0, d.jsx)("path", {
                            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                          }),
                        }),
                      }),
                      (0, d.jsx)("span", {
                        className: "text-lg font-medium sf-pro-display",
                        children: "Rohim Dev",
                      }),
                    ],
                  }),
                  (0, d.jsx)("nav", {
                    className: "hidden md:flex items-center gap-8 text-sm",
                    children: k.map((a) =>
                      (0, d.jsx)(
                        j(),
                        {
                          href: a.href,
                          className:
                            "text-white/70 hover:text-white transition-colors",
                          children: a.name,
                        },
                        a.name
                      )
                    ),
                  }),
                  (0, d.jsxs)("div", {
                    className: "hidden md:flex items-center gap-3",
                    children: [
                      (0, d.jsx)("button", {
                        className:
                          "px-4 py-2 text-sm text-white/70 hover:text-white transition-colors",
                        children: "Resume",
                      }),
                      (0, d.jsx)("button", {
                        className:
                          "px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105",
                        children: "Get In Touch",
                      }),
                    ],
                  }),
                  (0, d.jsx)("button", {
                    className: "md:hidden p-2",
                    onClick: () => b(!a),
                    children: a
                      ? (0, d.jsx)(g.A, { className: "h-5 w-5" })
                      : (0, d.jsx)(h.A, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              a &&
                (0, d.jsx)(f.P.div, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className:
                    "md:hidden mt-4 glass-effect bg-white/5 border-white/10 border rounded-2xl p-4",
                  children: (0, d.jsxs)("nav", {
                    className: "flex flex-col space-y-4",
                    children: [
                      k.map((a) =>
                        (0, d.jsx)(
                          j(),
                          {
                            href: a.href,
                            className:
                              "text-white/70 hover:text-white transition-colors py-2",
                            onClick: () => b(!1),
                            children: a.name,
                          },
                          a.name
                        )
                      ),
                      (0, d.jsxs)("div", {
                        className:
                          "pt-4 border-t border-white/10 flex flex-col space-y-2",
                        children: [
                          (0, d.jsx)("button", {
                            className:
                              "px-4 py-2 text-sm text-white/70 hover:text-white transition-colors text-left",
                            children: "Resume",
                          }),
                          (0, d.jsx)("button", {
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
    6953: (a, b, c) => {
      "use strict";
      c.r(b), c.d(b, { default: () => h, metadata: () => g });
      var d = c(5338),
        e = c(2003),
        f = c.n(e);
      c(2704), c(5854);
      let g = {
        title: "Rohim Dev - Portfolio",
        description:
          "Professional portfolio showcasing my work and skills in modern web development",
        keywords: [
          "portfolio",
          "web developer",
          "react",
          "nextjs",
          "typescript",
        ],
        authors: [{ name: "Rohim Dev" }],
        openGraph: {
          title: "Rohim Dev - Portfolio",
          description:
            "Professional portfolio showcasing my work and skills in modern web development",
          type: "website",
          locale: "en_US",
        },
        twitter: {
          card: "summary_large_image",
          title: "Rohim Dev - Portfolio",
          description:
            "Professional portfolio showcasing my work and skills in modern web development",
        },
      };
      function h({ children: a }) {
        return (0, d.jsx)("html", {
          lang: "en",
          className: "h-full antialiased",
          children: (0, d.jsx)("body", {
            className: `${
              f().className
            } min-h-full overflow-x-hidden text-white bg-black`,
            children: a,
          }),
        });
      }
    },
    9444: (a, b, c) => {
      "use strict";
      c.d(b, { A: () => o });
      var d = c(1124),
        e = c(2611),
        f = c(210),
        g = c(7950),
        h = c(7331),
        i = c(5982),
        j = c(1213),
        k = c(9957),
        l = c(3991),
        m = c.n(l);
      let n = {
        main: [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Work", href: "/work" },
          { name: "Projects", href: "/projects" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ],
        social: [
          { name: "Twitter", href: "#", icon: f.A },
          { name: "GitHub", href: "#", icon: g.A },
          { name: "LinkedIn", href: "#", icon: h.A },
        ],
      };
      function o() {
        return (0, d.jsx)("footer", {
          className: "border-white/10 border-t pt-16 pb-16",
          children: (0, d.jsxs)("div", {
            className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, d.jsxs)("div", {
                className: "grid md:grid-cols-5 gap-12 mb-12",
                children: [
                  (0, d.jsxs)("div", {
                    className: "md:col-span-2",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          (0, d.jsx)("div", {
                            className:
                              "w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center",
                            children: (0, d.jsx)("svg", {
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
                              children: (0, d.jsx)("path", {
                                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                              }),
                            }),
                          }),
                          (0, d.jsx)("span", {
                            className: "text-xl font-semibold sf-pro-display",
                            children: "Rohim Dev",
                          }),
                        ],
                      }),
                      (0, d.jsx)("p", {
                        className: "text-white/60 mb-6 max-w-md",
                        children:
                          "Full-stack developer crafting digital experiences that matter. Let's build something amazing together.",
                      }),
                      (0, d.jsx)("div", {
                        className: "flex gap-4",
                        children: n.social.map((a) =>
                          (0, d.jsx)(
                            e.P.button,
                            {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              className:
                                "p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                              children: (0, d.jsx)(a.icon, {
                                className: "h-5 w-5",
                              }),
                            },
                            a.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Navigation",
                      }),
                      (0, d.jsx)("ul", {
                        className: "space-y-3 text-white/60",
                        children: n.main.map((a) =>
                          (0, d.jsx)(
                            "li",
                            {
                              children: (0, d.jsx)(m(), {
                                href: a.href,
                                className: "hover:text-white transition-colors",
                                children: a.name,
                              }),
                            },
                            a.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Services",
                      }),
                      (0, d.jsxs)("ul", {
                        className: "space-y-3 text-white/60",
                        children: [
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Web Development",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Mobile Apps",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "UI/UX Design",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)("a", {
                              href: "#",
                              className: "hover:text-white transition-colors",
                              children: "Consulting",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("h5", {
                        className: "font-semibold mb-6",
                        children: "Contact",
                      }),
                      (0, d.jsxs)("ul", {
                        className: "space-y-3 text-white/60",
                        children: [
                          (0, d.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, d.jsx)(i.A, { className: "h-4 w-4" }),
                              (0, d.jsx)("a", {
                                href: "mailto:rohimjoy70@gmail.com",
                                className: "hover:text-white transition-colors",
                                children: "rohimjoy70@gmail.com",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, d.jsx)(j.A, { className: "h-4 w-4" }),
                              (0, d.jsx)("a", {
                                href: "tel:+1234567890",
                                className: "hover:text-white transition-colors",
                                children: "+1 (234) 567-890",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, d.jsx)(k.A, { className: "h-4 w-4" }),
                              (0, d.jsx)("span", {
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
              (0, d.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10",
                children: [
                  (0, d.jsx)("p", {
                    className: "text-white/40 text-sm",
                    children: "\xa9 2024 Rohim Dev. All rights reserved.",
                  }),
                  (0, d.jsxs)("div", {
                    className: "flex gap-6 text-white/40 text-sm mt-4 md:mt-0",
                    children: [
                      (0, d.jsx)("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Privacy Policy",
                      }),
                      (0, d.jsx)("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Terms of Service",
                      }),
                      (0, d.jsx)("a", {
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
  });
