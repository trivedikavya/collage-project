(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        978: function(e, t, n) {
            "use strict";
            n.r(t);
            n(13), n(12), n(9), n(18), n(19);
            var r = n(21),
                o = n(6),
                c = n(7),
                l = n(3),
                d = (n(14), n(27), n(22), n(351), n(4)),
                h = (n(33), n(30), n(29), n(63));
            n(17), n(44), n(46), n(23), n(25), n(53), n(16), n(42), n(57), n(28), n(15), n(49), n(50);
            Math.floor, String.fromCharCode;
            var f = /\/$|\/\?/;

            function m() {
                var input = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e ? f.test(input) : input.endsWith("/")
            }

            function v() {
                var input = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e) return (m(input) ? input.slice(0, -1) : input) || "/";
                if (!m(input, !0)) return input || "/";
                var t = input.split("?"),
                    n = Object(h.a)(t),
                    r = n[0],
                    s = n.slice(1);
                return (r.slice(0, -1) || "/") + (s.length ? "?".concat(s.join("?")) : "")
            }
            var O = n(1);

            function w(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function y(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? w(Object(source), !0).forEach((function(t) {
                        Object(c.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var j = Object(O.defineComponent)({
                    name: "PageSlug",
                    middleware: function(e) {
                        var t = e.app,
                            n = e.params,
                            r = e.redirect;
                        "index" === n.pathMatch && r(t.localePath("/"))
                    },
                    asyncData: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, c, l, h, f, m, O, w, j, P, x, $, k, component, M, D;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.$docus, r = e.app, c = r.i18n, l = r.localePath, e.route, h = e.params, f = e.error, m = e.redirect, O = c.locale, w = y({}, n.settings.value.layout), j = v("/".concat(h.pathMatch || "")) || "/", !1, t.next = 7, n.search({
                                            deep: !0
                                        }).where({
                                            language: O,
                                            to: j,
                                            draft: false,
                                            page: {
                                                $ne: !1
                                            }
                                        }).fetch();
                                    case 7:
                                        if (P = t.sent, x = Object(o.a)(P, 1), $ = x[0]) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return", f({
                                            statusCode: 404,
                                            message: "404 - Page not found"
                                        }));
                                    case 12:
                                        return t.next = 14, n.page($.id);
                                    case 14:
                                        if ((k = t.sent).template = n.getPageTemplate(k), !(component = d.default.component(k.template))) {
                                            t.next = 30;
                                            break
                                        }
                                        if (t.prev = 18, "function" != typeof component || component.options) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 22, component();
                                    case 22:
                                        (component = t.sent).options || (component = d.default.extend(component));
                                    case 24:
                                        t.next = 29;
                                        break;
                                    case 26:
                                        t.prev = 26, t.t0 = t.catch(18), component = new component({
                                            props: {
                                                page: k
                                            }
                                        });
                                    case 29:
                                        (component.templateOptions || null !== (M = component.$options) && void 0 !== M && M.templateOptions) && (w = y(y({}, w), component.templateOptions || (null === (D = component.$options) || void 0 === D ? void 0 : D.templateOptions)));
                                    case 30:
                                        return $.layout && (w = y(y({}, w), $.layout)), n.currentPage.value = k, k.navigation && k.navigation.redirect && m(l(k.navigation.redirect)), t.abrupt("return", {
                                            page: k,
                                            templateOptions: w
                                        });
                                    case 35:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [18, 26]
                            ])
                        })))()
                    },
                    head: function() {
                        var head = y({
                            title: this.page.title,
                            meta: []
                        }, this.page.head || {});
                        return this.mergeMeta(head.meta, this.pageMeta), head
                    },
                    computed: {
                        pageMeta: function() {
                            return [{
                                hid: "og:title",
                                property: "og:title",
                                content: this.page.title
                            }, {
                                hid: "twitter:title",
                                name: "twitter:title",
                                content: this.page.title
                            }].concat(Object(r.a)(this.page.description ? [{
                                hid: "description",
                                name: "description",
                                content: this.page.description
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.page.description
                            }, {
                                hid: "twitter:description",
                                name: "twitter:description",
                                content: this.page.description
                            }] : []))
                        }
                    },
                    created: function() {
                        this.$docus.layout.value = this.templateOptions, this.$docus.currentPage.value = this.page, this.$docus.currentPath.value = "/".concat(this.$route.params.pathMatch)
                    },
                    mounted: function() {
                        var e;
                        null !== (e = this.page) && void 0 !== e && e.version && localStorage.setItem("page-".concat(this.page.slug, "-version"), this.page.version)
                    },
                    methods: {
                        mergeMeta: function(e, t) {
                            t.forEach((function(t) {
                                var n = t.hid || t.name || t.property;
                                e.findIndex((function(meta) {
                                    return meta.hid === n || meta.name === n || meta.property === n
                                })) < 0 && e.push(t)
                            }))
                        }
                    },
                    render: function(e) {
                        return e(this.page.template, {
                            props: {
                                page: this.page
                            }
                        })
                    }
                }),
                P = n(0),
                x = Object(P.a)(j, undefined, undefined, !1, null, null, null);
            t.default = x.exports
        }
    }
]);