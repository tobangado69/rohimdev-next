(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [977],
  {
    4460: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 5759));
    },
    5759: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => g });
      var s = i(5155),
        a = i(5612),
        l = i(2115),
        n = i(3664),
        r = i(9141),
        o = i(1873),
        c = i(5105);
      let d = (0, c.A)("Clock", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
        ]),
        m = (0, c.A)("CheckCircle", [
          ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
          ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
        ]),
        h = (0, c.A)("AlertCircle", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
          [
            "line",
            { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" },
          ],
        ]),
        x = (0, c.A)("Send", [
          ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
          ["path", { d: "M22 2 11 13", key: "nzbqef" }],
        ]);
      var u = i(2960),
        p = i(3370);
      let b = [
          {
            icon: n.A,
            title: "Email",
            value: "rohimjoy70@gmail.com",
            description: "Send me an email anytime",
            href: "mailto:rohimjoy70@gmail.com",
          },
          {
            icon: r.A,
            title: "Phone",
            value: "+1 (234) 567-890",
            description: "Call me for urgent matters",
            href: "tel:+1234567890",
          },
          {
            icon: o.A,
            title: "Location",
            value: "Surabaya, Indonesia",
            description: "Available for local meetings",
            href: "#",
          },
          {
            icon: d,
            title: "Availability",
            value: "Mon - Fri, 9AM - 6PM",
            description: "Pacific Time Zone",
            href: "#",
          },
        ],
        w = [
          {
            name: "GitHub",
            href: "https://github.com/yourname",
            icon: "github",
          },
          {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourname",
            icon: "linkedin",
          },
          {
            name: "Twitter",
            href: "https://twitter.com/yourname",
            icon: "twitter",
          },
          {
            name: "Dribbble",
            href: "https://dribbble.com/yourname",
            icon: "dribbble",
          },
        ];
      function g() {
        let [e, t] = (0, l.useState)({
            name: "",
            email: "",
            subject: "",
            message: "",
          }),
          [i, n] = (0, l.useState)("idle"),
          r = (e) => {
            let { name: i, value: s } = e.target;
            t((e) => ({ ...e, [i]: s }));
          },
          o = async (e) => {
            e.preventDefault(),
              n("sending"),
              setTimeout(() => {
                n("success"),
                  t({ name: "", email: "", subject: "", message: "" });
              }, 2e3);
          };
        return (0, s.jsxs)("main", {
          className: "min-h-screen",
          children: [
            (0, s.jsx)(u.A, {}),
            (0, s.jsx)("section", {
              className: "pt-32 pb-20",
              children: (0, s.jsx)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, s.jsx)(a.P.div, {
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  children: (0, s.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, s.jsx)("h1", {
                        className:
                          "text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent",
                        children: "Get In Touch",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-xl text-white/60 max-w-2xl mx-auto leading-relaxed",
                        children:
                          "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-20",
              children: (0, s.jsxs)("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  (0, s.jsx)(a.P.div, {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: (0, s.jsxs)("div", {
                      className: "text-center mb-16",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-3xl sf-pro-display font-light mb-6",
                          children: "Let's Connect",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl text-white/60 max-w-2xl mx-auto",
                          children:
                            "Choose your preferred way to reach out. I'm always excited to hear about new projects.",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",
                    children: b.map((e, t) =>
                      (0, s.jsxs)(
                        a.P.a,
                        {
                          href: e.href,
                          initial: { opacity: 0, y: 40 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { delay: 0.1 * t, duration: 0.8 },
                          whileHover: { y: -8 },
                          className:
                            "group p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
                              children: (0, s.jsx)(e.icon, {
                                className: "h-8 w-8 text-white",
                              }),
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-lg font-semibold sf-pro-display mb-2",
                              children: e.title,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-blue-400 font-medium mb-2",
                              children: e.value,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm text-white/60",
                              children: e.description,
                            }),
                          ],
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-20",
              children: (0, s.jsx)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, s.jsxs)(a.P.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className:
                    "bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-8 md:p-12",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-center mb-12",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-3xl sf-pro-display font-light mb-6",
                          children: "Send a Message",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl text-white/60 max-w-2xl mx-auto",
                          children:
                            "Fill out the form below and I'll get back to you within 24 hours.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("form", {
                      onSubmit: o,
                      className: "space-y-8",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "grid md:grid-cols-2 gap-6",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  htmlFor: "name",
                                  className:
                                    "block text-sm font-medium text-white/70 mb-2",
                                  children: "Full Name *",
                                }),
                                (0, s.jsx)("input", {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  value: e.name,
                                  onChange: r,
                                  required: !0,
                                  className:
                                    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                                  placeholder: "Your full name",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  htmlFor: "email",
                                  className:
                                    "block text-sm font-medium text-white/70 mb-2",
                                  children: "Email Address *",
                                }),
                                (0, s.jsx)("input", {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  value: e.email,
                                  onChange: r,
                                  required: !0,
                                  className:
                                    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                                  placeholder: "your.email@example.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "subject",
                              className:
                                "block text-sm font-medium text-white/70 mb-2",
                              children: "Subject *",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              id: "subject",
                              name: "subject",
                              value: e.subject,
                              onChange: r,
                              required: !0,
                              className:
                                "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                              placeholder: "What's this about?",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "message",
                              className:
                                "block text-sm font-medium text-white/70 mb-2",
                              children: "Message *",
                            }),
                            (0, s.jsx)("textarea", {
                              id: "message",
                              name: "message",
                              value: e.message,
                              onChange: r,
                              required: !0,
                              rows: 6,
                              className:
                                "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none",
                              placeholder: "Tell me about your project...",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, s.jsx)("div", {
                              className: "text-sm text-white/60",
                              children: "* Required fields",
                            }),
                            (0, s.jsx)(a.P.button, {
                              type: "submit",
                              disabled: "sending" === i,
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              className:
                                "px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 ".concat(
                                  "sending" === i
                                    ? "bg-white/20 text-white/50 cursor-not-allowed"
                                    : "bg-white text-black hover:bg-white/90"
                                ),
                              children:
                                "sending" === i
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-4 h-4 border-2 border-white/30 border-t-white/70 rounded-full animate-spin",
                                        }),
                                        "Sending...",
                                      ],
                                    })
                                  : "success" === i
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)(m, { className: "h-5 w-5" }),
                                        "Message Sent!",
                                      ],
                                    })
                                  : "error" === i
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)(h, { className: "h-5 w-5" }),
                                        "Try Again",
                                      ],
                                    })
                                  : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)(x, { className: "h-5 w-5" }),
                                        "Send Message",
                                      ],
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-20",
              children: (0, s.jsx)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, s.jsxs)(a.P.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className: "text-center",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-3xl sf-pro-display font-light mb-6",
                      children: "Follow Me",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-xl text-white/60 mb-12 max-w-2xl mx-auto",
                      children:
                        "Stay updated with my latest projects and thoughts on development.",
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-center gap-6",
                      children: w.map((e, t) =>
                        (0, s.jsx)(
                          a.P.a,
                          {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: { delay: 0.1 * t, duration: 0.8 },
                            whileHover: { scale: 1.1, y: -5 },
                            whileTap: { scale: 0.95 },
                            className:
                              "w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl flex items-center justify-center hover:border-white/40 transition-all duration-300",
                            children: (0, s.jsxs)("span", {
                              className: "text-2xl",
                              children: [
                                "github" === e.icon && "\uD83D\uDC19",
                                "linkedin" === e.icon && "\uD83D\uDCBC",
                                "twitter" === e.icon && "\uD83D\uDC26",
                                "dribbble" === e.icon && "\uD83C\uDFC0",
                              ],
                            }),
                          },
                          e.name
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-20",
              children: (0, s.jsxs)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  (0, s.jsxs)(a.P.div, {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    className: "text-center mb-16",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "text-3xl sf-pro-display font-light mb-6",
                        children: "Frequently Asked Questions",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-xl text-white/60 max-w-2xl mx-auto",
                        children:
                          "Common questions about my services and process.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "space-y-8",
                    children: [
                      {
                        question: "How long does a typical project take?",
                        answer:
                          "Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-6 months. I'll provide a detailed timeline during our initial consultation.",
                      },
                      {
                        question:
                          "Do you provide ongoing support after project completion?",
                        answer:
                          "Yes! I offer 3-6 months of free support for bug fixes and minor updates. For ongoing maintenance and new features, I provide flexible support packages.",
                      },
                      {
                        question: "What technologies do you work with?",
                        answer:
                          "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I also work with mobile development using React Native and cloud platforms like AWS and Vercel.",
                      },
                      {
                        question: "Do you work with clients outside the US?",
                        answer:
                          "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration and can accommodate different time zones for meetings and communication.",
                      },
                    ].map((e, t) =>
                      (0, s.jsxs)(
                        a.P.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { delay: 0.1 * t, duration: 0.8 },
                          className:
                            "p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl",
                          children: [
                            (0, s.jsx)("h3", {
                              className:
                                "text-lg font-semibold sf-pro-display mb-3",
                              children: e.question,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-white/60 leading-relaxed",
                              children: e.answer,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(p.A, {}),
          ],
        });
      }
    },
  },
  (e) => {
    e.O(0, [248, 843, 441, 255, 358], () => e((e.s = 4460))), (_N_E = e.O());
  },
]);
