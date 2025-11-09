(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], Array(38).concat([function(t, e, r) {
        "use strict";
        r.r(e);
        r(42), r(25);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    to: {
                        type: String,
                        default: ""
                    },
                    href: {
                        type: String,
                        default: ""
                    },
                    blank: {
                        type: Boolean,
                        default: !0
                    },
                    rel: {
                        type: String,
                        default: "noopener nofollow noreferrer"
                    }
                },
                setup: function(t) {
                    var e = Object(o.useContext)(),
                        r = e.i18n,
                        n = e.$clipboard;
                    return {
                        copyEmailToClipboard: function(e) {
                            var o, l, c;
                            null !== (o = t.href) && void 0 !== o && o.startsWith("mailto:") ? c = t.href.replace("mailto:", "") : null !== (l = t.to) && void 0 !== l && l.startsWith("mailto:") && (c = t.to.replace("mailto:", "")), c && n.copy(c, r.t("common.email_address_copied")) && e.preventDefault()
                        },
                        attrs: Object(o.computed)((function() {
                            return t.href.length ? {
                                to: t.href,
                                blank: t.blank,
                                static: !0,
                                rel: t.rel
                            } : {
                                to: t.to,
                                blank: t.blank
                            }
                        }))
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("Link", t._b({
                    nativeOn: {
                        click: function(e) {
                            return t.copyEmailToClipboard.apply(null, arguments)
                        }
                    }
                }, "Link", t.attrs, !1), [t._t("default")], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Link: r(86).default
        })
    }, , , function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "useNav", (function() {
            return n
        }));
        r(57), r(23);
        var o = r(1);

        function n() {
            var t = Object(o.useContext)().app,
                e = Object(o.useRoute)();
            return {
                isHome: Object(o.computed)((function() {
                    var path = e.value.path;
                    return path.endsWith("/") || (path += "/"), path === t.localePath("/")
                })),
                currentSlug: Object(o.computed)((function() {
                    var t, r;
                    return "/" !== e.value.path && null != e && null !== (t = e.value) && void 0 !== t && null !== (r = t.params) && void 0 !== r && r.pathMatch ? e.value.params.pathMatch.split("/")[0] : null
                }))
            }
        }
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(336),
            n = r(179);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        r(734);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, "911f294c", null);
        e.default = component.exports, installComponents(component, {
            Markdown: r(32).default,
            IconExternalLink: r(87).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)(t.tag, {
                    tag: "Component",
                    staticClass: "relative w-full d-container-content"
                }, [t._t("default")], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    descriptionFullWidth: {
                        type: Boolean,
                        default: !1
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pt-10 lg:pt-24 pb-16 lg:pb-32 bg-gray-100 dark:bg-secondary-darkest"
                }, [r("div", {
                    staticClass: "relative d-container-content z-10"
                }, [r("h1", {
                    staticClass: "\n        text-display-5\n        sm:text-display-4\n        md:text-display-3\n        pb-1\n        sm:pb-2\n        md:pb-6\n        font-serif\n        overflow-ellipsis overflow-hidden\n      "
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "text-body-md sm:text-body-lg md:text-body-xl",
                    class: {
                        "max-w-3xl": !t.descriptionFullWidth
                    }
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), t.$slots.bottom || t.$scopedSlots.bottom ? r("div", {
                    staticClass: "mt-8"
                }, [r("Markdown", {
                    attrs: {
                        use: "bottom"
                    }
                })], 1) : t._e(), t._v(" "), t.$slots.bottomDesktop || t.$scopedSlots.bottomDesktop ? r("div", {
                    staticClass: "hidden lg:block mt-8"
                }, [r("Markdown", {
                    attrs: {
                        use: "bottomDesktop"
                    }
                })], 1) : t._e()]), t._v(" "), r("img", {
                    staticClass: "absolute -bottom-1px left-0 w-full h-12 md:h-24 object-fill light:hidden pointer-events-none z-0",
                    attrs: {
                        loading: "lazy",
                        src: "/img/page-hero/dark/mountains.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("img", {
                    staticClass: "absolute -bottom-1px left-0 w-full h-12 md:h-24 object-fill dark:hidden pointer-events-none z-0",
                    attrs: {
                        loading: "lazy",
                        src: "/img/page-hero/light/mountains.svg",
                        alt: "A landscape image"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    attrs: {
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }
                }, [r("title", [t._v("Check")]), t._v(" "), r("path", {
                    attrs: {
                        d: "M20 6L9 18l-5-5.454",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(341),
            n = r(190);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        r(849);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            AppLink: r(38).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(24);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    value: {
                        type: String,
                        default: null
                    },
                    required: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    appearance: {
                        type: String,
                        default: "default",
                        validator: function(t) {
                            return ["default", "transparent"].includes(t)
                        }
                    },
                    baseClass: {
                        type: String,
                        default: "p-2 w-full rounded-md appearance-none"
                    }
                },
                setup: function(t) {
                    var e = Object(o.ref)(!1),
                        r = Object(o.ref)(!1),
                        n = Object(o.ref)(!1),
                        l = Object(o.computed)((function() {
                            return {
                                default: "light:text-gray-500 dark:text-white dark:bg-transparent light:bg-white border light:border-gray-200 dark:border-secondary-dark focus:outline-none light:focus:border-gray-400 dark:focus:border-secondary-light",
                                transparent: "bg-transparent border-none outline-none"
                            }[t.appearance]
                        }));
                    return {
                        focusedByMouse: e,
                        focus: r,
                        focusVisible: n,
                        mousedownHandler: function() {
                            e.value = !0
                        },
                        handleFocus: function(t) {
                            t ? e.value ? (r.value = !0, n.value = !1) : (r.value = !0, n.value = !0) : (r.value = !1, n.value = !1, e.value = !1)
                        },
                        appearanceClass: l
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("input", {
                    class: [t.baseClass, t.appearanceClass, {
                        "pointer-events-none opacity-50": t.disabled,
                        "ring-2 ring-primary": t.focusVisible
                    }],
                    attrs: {
                        required: t.required
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("input", e.target.value)
                        },
                        focus: function(e) {
                            return t.handleFocus(!0)
                        },
                        blur: function(e) {
                            return t.handleFocus(!1)
                        },
                        mousedown: t.mousedownHandler
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(42);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    image: {
                        type: String,
                        default: ""
                    },
                    href: {
                        type: String,
                        default: ""
                    },
                    tags: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    category: {
                        type: String,
                        default: ""
                    }
                },
                setup: function(t) {
                    return {
                        navigateToUrl: function(t) {
                            t.startsWith("/") && !1 === t.startsWith("//") ? this.$router.push(this.localePath(t)) : window.open(t, "_blank")
                        },
                        imgUrl: Object(o.computed)((function() {
                            return t.image || "https://source.unsplash.com/random"
                        }))
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("article", {
                    staticClass: "\n    flex flex-col\n    shadow\n    rounded-lg\n    overflow-hidden\n    hover:bg-gray-50\n    dark:hover:bg-secondary-darker\n    cursor-pointer\n    dark:bg-secondary-darkest\n  ",
                    on: {
                        click: function(e) {
                            return t.navigateToUrl(t.href)
                        }
                    }
                }, [r("div", {
                    staticClass: "aspect-h-9 bg-gray-100 dark:bg-secondary-darker mb-4"
                }, [r("NuxtImg", {
                    attrs: {
                        src: t.imgUrl,
                        width: "864",
                        height: "378",
                        alt: t.title,
                        loading: "lazy"
                    }
                })], 1), t._v(" "), t.tags.length ? r("div", {
                    staticClass: "px-4 mb-1"
                }, t._l(t.tags, (function(e, i) {
                    return r("span", {
                        key: e,
                        staticClass: "text-gray-500 dark:text-cloud-light font-medium text-sm"
                    }, [r("span", [t._v(t._s(e))]), t._v(" "), 0 === i && t.tags.length > 1 || i !== t.tags.length - 1 ? r("span", [t._v(" – ")]) : t._e()])
                })), 0) : t.category ? r("div", {
                    staticClass: "px-4 mb-1"
                }, [r("span", {
                    staticClass: "text-gray-500 dark:text-cloud-light font-medium text-sm"
                }, [t._v("\n      " + t._s(t.category) + "\n    ")])]) : t._e(), t._v(" "), r("h1", {
                    staticClass: "font-bold text-body-xl mb-2 px-4"
                }, [r("AppLink", {
                    attrs: {
                        to: t.href
                    }
                }, [t._v("\n      " + t._s(t.title) + "\n    ")])], 1), t._v(" "), r("p", {
                    staticClass: "pb-8 px-4 text-gray-500 dark:text-cloud-lighter truncate sm:whitespace-normal"
                }, [t._v("\n    " + t._s(t.description) + "\n  ")]), t._v(" "), r("div", {
                    staticClass: "px-4 mt-auto mb-4"
                }, [r("Markdown", {
                    attrs: {
                        use: "footer",
                        unwrap: "p"
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("g", {
                    attrs: {
                        transform: "rotate(90 12 12)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M9 5l7 7-7 7"
                    }
                })])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                setup: function() {
                    var style = Object(o.ref)({}),
                        t = Object(o.ref)(null),
                        e = Object(o.ref)(null),
                        r = Object(o.computed)((function() {
                            return Math.round(Math.random() * Math.round(4))
                        })),
                        n = Object(o.computed)((function() {
                            return Math.round(Math.random() * Math.round(10))
                        }));
                    return Object(o.onMounted)((function() {
                        e.value = Math.random() * Math.floor(document.documentElement.clientWidth), t.value = Math.random() * Math.floor(document.documentElement.clientHeight), style.value = {
                            top: t.value + "px",
                            left: e.value + "px",
                            height: r.value + "px",
                            width: r.value + "px",
                            animationDuration: n.value + "s"
                        }
                    })), {
                        style: style,
                        randomRadius: r,
                        randomDuration: n,
                        randomY: t,
                        randomX: e
                    }
                }
            }),
            l = (r(861), r(0)),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    ref: "star",
                    staticClass: "absolute bg-white rounded-full opacity-100 star",
                    style: t.style
                })
            }), [], !1, null, "c479c21e", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "useNotifications", (function() {
            return h
        }));
        r(13), r(12), r(18), r(19);
        var o = r(7),
            n = (r(9), r(1)),
            l = r(952);

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }
        var d = Object(n.ssrRef)([], "BsVz8rd50OUqS1y0aB/4hA=="),
            m = function() {
                return d.value[d.length - 1]
            },
            f = function(t) {
                return d.value = d.value.filter((function(e) {
                    return e.id !== t
                }))
            },
            v = function(t) {
                var body = function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    id: Object(l.a)()
                }, t);
                return d.value.push(body), body
            };

        function h() {
            return {
                notifications: d,
                getLast: m,
                remove: f,
                add: v
            }
        }
    }, , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(339),
            n = r(185);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            AsideNavigation: r(244).default,
            IconArrowLeft: r(172).default,
            IconClose: r(171).default,
            LangSwitcher: r(157).default,
            ColorSwitcher: r(158).default,
            AsideHeaderNavigation: r(267).default
        })
    }, , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
                methods: {
                    home: function() {
                        "/" === this.$docus.currentPath.value && window.scrollTo(0, 0)
                    },
                    designKit: function() {
                        window.location.href = "https://nuxt.com/design-kit"
                    }
                }
            },
            n = r(0),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 187 40"
                    },
                    on: {
                        contextmenu: function(e) {
                            return e.preventDefault(), t.designKit.apply(null, arguments)
                        },
                        click: t.home
                    }
                }, [r("path", {
                    attrs: {
                        fill: "#00DC82",
                        d: "M33.6605 40h22.3046c.7084.0001 1.4044-.1847 2.0179-.5358.6135-.3511 1.1229-.8561 1.477-1.4643.3541-.6081.5403-1.298.54-2.0001-.0003-.7021-.1872-1.3918-.5418-1.9996L44.4791 8.2859c-.354-.608-.8633-1.1129-1.4767-1.46395-.6134-.35105-1.3092-.53586-2.0175-.53586-.7083 0-1.4041.18481-2.0175.53586-.6134.35105-1.1227.85595-1.4768 1.46395l-3.8301 6.5794-7.4884-12.86577c-.3544-.60796-.8639-1.1128-1.4775-1.46377C24.0811.18477 23.3852 0 22.6767 0c-.7084 0-1.4043.18477-2.0179.53576-.6135.35098-1.1231.85581-1.4774 1.46377L.54177 34.0002C.18717 34.608.0003 35.2977 0 35.9998c-.0003.7021.18594 1.392.54001 2.0001.35407.6082.86348 1.1132 1.47699 1.4643.61351.3511 1.30949.5359 2.01793.5358H18.0359c5.5473 0 9.6382-2.415 12.4532-7.1266l6.8342-11.7304 3.6605-6.2777 10.986 18.8569H37.3233L33.6605 40Zm-15.8529-6.2842-9.77085-.0022L22.6833 8.57243l7.308 12.57057-4.893 8.402c-1.8694 3.057-3.9932 4.1708-7.2907 4.1708Z"
                    }
                }), t._v(" "), r("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M76.0972 39.661V26.1864L76.1 20s1.1354 1.9915 3.0865 5.2966l7.7548 13.368c.3578.6168 1.0169.9964 1.73.9964h5.3924V10h-6.1379v20s-1.1381-2.3305-3.0486-5.6356l-7.7948-13.3716C76.7241 10.378 76.0661 10 75.3546 10H70v29.661h6.0972ZM113.401 18.3051V30c0 2.7119-1.748 4.7458-4.227 4.7458-2.317 0-3.943-1.8644-3.943-4.4492V18.3051h-5.6503v13.3051c0 4.8729 3.0083 8.3898 7.6013 8.3898 2.805 0 5.081-1.2712 6.219-3.3051v2.9661h5.691V18.3051h-5.691ZM135.641 28.5593l6.869-10.2542h-5.146c-.67 0-1.296.3357-1.666.8942l-3.147 4.7414-3.146-4.7414c-.37-.5585-.996-.8942-1.666-.8942h-5.106l6.87 10.2118-7.398 11.1441h4.993c.665 0 1.286-.3303 1.658-.8815l3.836-5.6863 3.796 5.6792c.371.5553.995.8886 1.663.8886h4.947l-7.357-11.1017ZM148.862 18.3051h-3.942v4.9152h3.942v8.6865c0 4.9576 3.049 7.7542 7.764 7.7542H160v-4.9576h-2.601c-1.83 0-2.886-.9746-2.886-3.0509v-8.4322H160v-4.9152h-5.487v-6.3136h-5.651v6.3136Z"
                    }
                }), t._v(" "), r("path", {
                    attrs: {
                        fill: "#00DC82",
                        d: "M167.041 19.9901c-.027-2.2476.365-4.1888 1.176-5.8234.811-1.6639 1.974-2.9337 3.489-3.8094C173.247 9.45245 175.046 9 177.101 9c1.921 0 3.624.39407 5.112 1.1822 1.515.7881 2.691 1.8974 3.529 3.3277.839 1.4303 1.258 3.0941 1.258 4.9915 0 4.145-2.245 7.4143-6.734 9.8079l-4.382 2.3644c-2.38 1.3428-3.57 2.7731-3.57 4.291H187V40h-19.959L167 35.7528c0-2.2184.663-4.145 1.988-5.7796 1.325-1.6639 2.853-2.9482 4.584-3.8531l4.544-2.452c2.326-1.226 3.488-2.9628 3.488-5.2105 0-1.4303-.405-2.5687-1.217-3.4152-.811-.8465-1.906-1.2698-3.286-1.2698-1.514 0-2.691.5692-3.529 1.7076-.811 1.1093-1.19 2.6125-1.136 4.5099h-5.395Z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(381);
        var o = r(1),
            nav = r(41),
            n = Object(o.defineComponent)({
                props: {
                    link: {
                        type: Object,
                        required: !0
                    },
                    forceActive: {
                        type: Boolean,
                        default: !1
                    },
                    activeClass: {
                        type: String,
                        default: "text-primary"
                    },
                    inactiveClass: {
                        type: String,
                        default: "hover:d-primary-text-hover"
                    }
                },
                setup: function(t) {
                    return {
                        currentSlug: Object(nav.useNav)().currentSlug,
                        linkProps: Object(o.computed)((function() {
                            var e = t.link,
                                r = e.to,
                                o = e.href;
                            return null != r && r.length ? {
                                is: "AppLink",
                                to: r
                            } : null != o && o.length ? {
                                is: "AppLink",
                                href: o
                            } : {
                                is: "span"
                            }
                        }))
                    }
                }
            }),
            l = (r(732), r(0)),
            component = Object(l.a)(n, (function() {
                var t, e = this,
                    r = e.$createElement;
                return (e._self._c || r)("Component", e._b({
                    key: e.link.slug,
                    staticClass: "flex font-medium group whitespace-nowrap",
                    class: (t = {}, t[e.activeClass] = e.forceActive || e.currentSlug === e.link.slug, t[e.inactiveClass] = !e.forceActive && e.currentSlug !== e.link.slug, t),
                    attrs: {
                        "aria-label": e.link.title
                    }
                }, "Component", e.linkProps, !1), [e._t("default")], 2)
            }), [], !1, null, "b674f0e6", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(24), r(60);
        var o = r(964),
            n = r(661),
            l = r(1),
            nav = r(41),
            c = Object(l.defineComponent)({
                directives: {
                    onClickaway: n.directive
                },
                props: {
                    label: {
                        type: String,
                        default: ""
                    },
                    icon: {
                        type: Boolean,
                        default: !0
                    },
                    items: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    variant: {
                        type: String,
                        default: "white"
                    },
                    size: {
                        type: String,
                        default: "md",
                        validator: function(t) {
                            return ["", "xxs", "xs", "sm", "md", "lg", "xl"].includes(t)
                        }
                    },
                    mode: {
                        type: String,
                        default: "click",
                        validator: function(t) {
                            return ["click", "hover"].includes(t)
                        }
                    },
                    placement: {
                        type: String,
                        default: "bottom-end"
                    },
                    strategy: {
                        type: String,
                        default: "absolute"
                    },
                    wrapperClass: {
                        type: String,
                        default: null
                    },
                    customClass: {
                        type: String,
                        default: null
                    },
                    customLinkClass: {
                        type: String,
                        default: null
                    },
                    mainLinkClass: {
                        type: String,
                        default: ""
                    },
                    rounded: {
                        type: Boolean,
                        default: !1
                    },
                    square: {
                        type: Boolean,
                        default: !1
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    dropdownClass: {
                        type: String,
                        default: "w-auto"
                    },
                    dropdownMenuClass: {
                        type: String,
                        default: "max-h-56"
                    },
                    openDelay: {
                        type: Number,
                        default: 100
                    },
                    closeDelay: {
                        type: Number,
                        default: 0
                    },
                    preventOverflow: {
                        type: Number,
                        default: 8
                    },
                    itemsClass: {
                        type: String,
                        default: "py-1"
                    }
                },
                setup: function() {
                    return {
                        isHome: Object(nav.useNav)().isHome
                    }
                },
                data: function() {
                    return {
                        open: !1,
                        instance: null,
                        openTimeout: null,
                        closeTimeout: null
                    }
                },
                watch: {
                    disabled: function(t) {
                        t && open && this.close()
                    },
                    open: function(t) {
                        t && (this.instance && (this.instance.destroy(), this.instance = null), this.instance = Object(o.a)(this.$refs.container, this.$refs.tooltip, {
                            strategy: this.strategy,
                            placement: this.placement,
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: "click" === this.mode ? [0, 8] : 0
                                }
                            }, {
                                name: "computeStyles",
                                options: {
                                    gpuAcceleration: !1,
                                    adaptive: !1
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    padding: this.preventOverflow
                                }
                            }]
                        }))
                    }
                },
                beforeDestroy: function() {
                    this.instance && (this.instance.destroy(), this.instance = null)
                },
                methods: {
                    click: function(link) {
                        link.click && link.click(), (link.click || link.to) && this.toggle()
                    },
                    mouseover: function() {
                        var t = this;
                        clearTimeout(this.closeTimeout), this.closeTimeout = null, this.openTimeout = this.openTimeout || setTimeout((function() {
                            t.open = !0, t.openTimeout = null
                        }), this.openDelay)
                    },
                    mouseleave: function() {
                        var t = this;
                        clearTimeout(this.openTimeout), this.openTimeout = null, this.closeTimeout = this.closeTimeout || setTimeout((function() {
                            t.close(), t.closeTimeout = null
                        }), this.closeDelay)
                    },
                    toggle: function() {
                        this.open = !this.open
                    },
                    close: function() {
                        this.open = !1
                    }
                }
            }),
            d = r(0),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    directives: [{
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: t.close,
                        expression: "close"
                    }],
                    ref: "container",
                    class: "string" == typeof t.wrapperClass ? t.wrapperClass : "relative inline-block text-left cursor-default",
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        keydown: function(e) {
                            if (!e.type.indexOf("key") && t._k(e.keyCode, "escape", void 0, e.key, void 0)) return null;
                            t.open = !1
                        },
                        mouseover: function(e) {
                            "hover" === t.mode && t.mouseover()
                        },
                        mouseleave: function(e) {
                            "hover" === t.mode && t.mouseleave()
                        }
                    }
                }, [r("div", {
                    staticClass: "flex items-center w-full",
                    class: t.mainLinkClass
                }, [t._t("trigger", null, {
                    toggle: t.toggle,
                    open: t.open
                }), t._v(" "), t.icon ? r("IconChevronBottom", {
                    staticClass: "h-4 w-4",
                    class: t.isHome ? "text-white" : "dark:text-secondary light:text-gray-300"
                }) : t._e()], 2), t._v(" "), r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.open && (t.items.length || t.$slots.header || t.$scopedSlots.header),
                        expression: "open && (items.length || $slots.header || $scopedSlots.header)"
                    }],
                    ref: "tooltip",
                    staticClass: "z-30 rounded-md shadow-lg",
                    class: [t.dropdownClass, "hover" === t.mode && "pt-2"]
                }, [r("div", {
                    staticClass: "overflow-y-auto rounded-md divide-y py-1",
                    class: [t.dropdownMenuClass, t.isHome ? "divide-gray-700 bg-secondary-darkest" : "divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest "],
                    attrs: {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "aria-labelledby": "options-menu"
                    }
                }, [t._t("header"), t._v(" "), t.items.length ? r("div", {
                    staticClass: "divide-y",
                    class: t.isHome ? "divide-gray-700" : "divide-gray-100 dark:divide-gray-700"
                }, t._l(t.items, (function(e, o) {
                    return r("div", {
                        key: o,
                        class: t.itemsClass
                    }, t._l(e, (function(e, i) {
                        return r("div", {
                            key: i,
                            attrs: {
                                role: "menuitem"
                            },
                            on: {
                                click: function(r) {
                                    e.disabled || t.click(e)
                                }
                            }
                        }, [t._t("item", null, {
                            item: e
                        })], 2)
                    })), 0)
                })), 0) : t._e()], 2)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            IconChevronBottom: r(122).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    iconClass: {
                        type: String,
                        default: "w-6 h-6 m-auto"
                    },
                    strategy: {
                        type: String,
                        default: "absolute"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.$i18n.locales.length > 1 ? r("Dropdown", {
                    staticClass: "inline-flex items-center w-12 h-12",
                    attrs: {
                        items: [t.$i18n.locales],
                        strategy: t.strategy,
                        placement: "bottom",
                        mode: "hover"
                    },
                    scopedSlots: t._u([{
                        key: "trigger",
                        fn: function() {
                            return [r("IconTranslate", {
                                staticClass: "d-icon",
                                class: t.iconClass
                            })]
                        },
                        proxy: !0
                    }, {
                        key: "item",
                        fn: function(e) {
                            var o = e.item;
                            return [r("NuxtLink", {
                                staticClass: "px-4 py-1 flex items-center whitespace-no-wrap",
                                class: [t.$i18n.locale === o.code ? "/" === t.$docus.currentPath.value ? "font-semibold cursor-default text-gray-200" : "font-semibold cursor-default text-gray-800 dark:text-gray-200" : "hover:d-text-primary"],
                                attrs: {
                                    to: t.switchLocalePath(o.code)
                                }
                            }, [t._v(t._s(o.name))])]
                        }
                    }], null, !1, 4209581055)
                }) : t._e()
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            IconTranslate: r(170).default,
            Dropdown: r(156).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    iconClass: {
                        type: String,
                        default: "w-6 h-6 m-auto"
                    }
                },
                setup: function() {
                    var t = Object(o.useContext)().$colorMode,
                        e = ["system", "light", "dark"];
                    return {
                        switchColor: function() {
                            var r = e.indexOf(t.preference);
                            if (-1 === r) t.preference = e[0];
                            else {
                                var o = (r + 1) % e.length;
                                t.preference = e[o]
                            }
                        }
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("AppButton", {
                    class: "/" === t.$docus.currentPath.value ? "focus:outline-none text-gray-300 hover:text-sky-surface" : "d-icon",
                    attrs: {
                        slot: "placeholder",
                        "button-class": "w-12 h-12 rounded",
                        "aria-label": "Color Mode"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.switchColor.apply(null, arguments)
                        }
                    },
                    slot: "placeholder"
                }, [r("ClientOnly", {
                    scopedSlots: t._u([{
                        key: "placeholder",
                        fn: function() {
                            return [t._v("...")]
                        },
                        proxy: !0
                    }])
                }, ["light" === t.$colorMode.preference ? r("IconSun", {
                    class: t.iconClass
                }) : "dark" === t.$colorMode.preference ? r("IconMoon", {
                    class: t.iconClass
                }) : r("IconSystem", {
                    class: t.iconClass
                })], 1)], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            IconSun: r(287).default,
            IconMoon: r(288).default,
            IconSystem: r(289).default,
            AppButton: r(43).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(3),
            n = (r(14), r(23), r(28), r(9), r(25), r(1)),
            l = r(56),
            c = r(34),
            d = Object(n.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(n.ref)([]),
                        r = Object(n.useContext)(),
                        d = r.$docus,
                        m = r.$config.apiURL || "https://api.nuxtjs.org",
                        f = Object(n.computed)((function() {
                            return d.settings
                        })).value,
                        v = Object(n.computed)((function() {
                            return Object(c.c)(f.value.github.url, f.value.github.repo)
                        })),
                        link = Object(n.computed)((function() {
                            if (f.value.github) {
                                var e = t.page.key.split(":"),
                                    r = e.slice(1, e.length - 1).join("/"),
                                    source = e[e.length - 1];
                                return [v.value, "edit", f.value.github.branch, f.value.github.dir || "", f.value.contentDir, r, "".concat(source).replace(/^\//g, "")].filter(Boolean).join("/")
                            }
                        })),
                        path = [f.value.github.repo, f.value.github.branch, f.value.contentDir, t.page.source].join("/");
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(l.a)("".concat(m, "/api/github/contributors/").concat(path));
                                case 2:
                                    e.value = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        link: link,
                        contributors: e
                    }
                }
            }),
            m = r(0),
            component = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [t.link ? r("div", {
                    staticClass: "flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row"
                }, [r("AppLink", {
                    staticClass: "flex items-center mb-2 text-sm sm:mb-0 hover:underline",
                    attrs: {
                        href: t.link
                    }
                }, [r("IconEdit", {
                    staticClass: "w-3 h-3 mr-1"
                }), t._v(" "), r("span", [t._v("\n        " + t._s(t.$t("article.github")) + "\n      ")])], 1), t._v(" "), r("span", {
                    staticClass: "flex items-center text-sm"
                }, [t._v("\n      " + t._s(t.$t("article.updatedAt")) + " " + t._s(t.$d(Date.parse(t.page.mtime), "long")) + "\n    ")])], 1) : t._e(), t._v(" "), t.contributors.length ? r("div", {
                    staticClass: "px-4 sm:px-6"
                }, t._l(t.contributors, (function(e) {
                    return r("AppLink", {
                        key: e.login,
                        staticClass: "\n        inline-flex\n        mb-2\n        mr-2\n        overflow-hidden\n        transition-colors\n        duration-300\n        ease-linear\n        border\n        rounded\n        text-light-onSurfacePrimary\n        dark:text-dark-onSurfacePrimary\n        bg-light-surfaceElevated\n        light:hover:bg-gray-300\n        dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface\n        border-light-border\n        dark:border-dark-border\n      ",
                        attrs: {
                            href: "https://github.com/" + e.login
                        }
                    }, [r("NuxtImg", {
                        staticClass: "h-8",
                        attrs: {
                            alt: e.name,
                            srcset: "https://github.com/" + e.login + ".png?size=32 1x, https://github.com/" + e.login + ".png?size=64 2x",
                            src: "https://github.com/" + e.login + ".png?size=32",
                            loading: "lazy"
                        }
                    }), t._v(" "), r("span", {
                        staticClass: "inline-block px-2 leading-loose"
                    }, [t._v("\n        " + t._s(e.name) + "\n      ")])], 1)
                })), 1) : t._e()])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            IconEdit: r(293).default,
            AppLink: r(38).default
        })
    }, , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    toc: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    title: {
                        type: String,
                        default: null
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  "
                }, [r("div", {
                    staticClass: "\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      d-scrollbar\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    "
                }, [r("PageTocTop"), t._v(" "), t.toc.length ? r("div", {
                    staticClass: "mb-4"
                }, [r("h5", {
                    staticClass: "items-center hidden mb-2 xl:flex"
                }, [r("span", {
                    staticClass: "text-base font-semibold text-gray-900 dark:text-gray-100"
                }, [t._v(t._s(t.title || t.$t("toc.title")))])]), t._v(" "), r("PageTocList", {
                    attrs: {
                        toc: t.toc
                    }
                })], 1) : t._e(), t._v(" "), r("PageTocBottom")], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            PageTocTop: r(175).default,
            PageTocList: r(162).default,
            PageTocBottom: r(301).default
        })
    }, , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function() {
                    var t = Object(o.useContext)().app.i18n;
                    return {
                        translated: Object(o.computed)((function() {
                            return t.locale !== t.defaultLocale
                        }))
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [t._t("mobile-toc"), t._v(" "), r("div", {
                    staticClass: "px-4 sm:px-6 mt-4 xl:mt-0"
                }, [t.translated ? r("TranslatedContentBanner", {
                    staticClass: "mb-8",
                    attrs: {
                        page: t.page
                    }
                }) : t._e(), t._v(" "), r("DocusContent", {
                    staticClass: "docus-content",
                    attrs: {
                        document: t.page
                    }
                })], 1)], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            TranslatedContentBanner: r(275).default,
            DocusContent: r(62).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(17),
            n = (r(24), r(9), r(16), r(22), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    value: {
                        type: String,
                        default: ""
                    },
                    options: {
                        type: Array,
                        default: null
                    },
                    id: {
                        type: String,
                        default: null
                    },
                    name: {
                        type: String,
                        default: null
                    },
                    placeholder: {
                        type: String,
                        default: null
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    paddingClass: {
                        type: String,
                        default: "py-2 pl-3 pr-10"
                    },
                    textClass: {
                        type: String,
                        default: "text-base sm:text-md font-medium"
                    },
                    bgClass: {
                        type: String,
                        default: "bg-transparent"
                    },
                    borderClass: {
                        type: String,
                        default: "border-1 border-sky-dark-light dark:border-sky-dark"
                    },
                    extraClass: {
                        type: String,
                        default: null
                    }
                },
                setup: function() {
                    var t = Object(n.ref)(!1),
                        e = Object(n.ref)(!1),
                        r = Object(n.ref)(!1);
                    return {
                        focusedByMouse: t,
                        focus: e,
                        focusVisible: r,
                        normalizeOption: function(option) {
                            return ["string", "number", "boolean"].includes(Object(o.a)(option)) ? {
                                value: option,
                                text: option,
                                disabled: !1
                            } : {
                                value: option.value,
                                text: option.text,
                                disabled: option.disabled
                            }
                        },
                        normalizeOptionGroup: function(optgroup) {
                            var t = this;
                            return {
                                label: optgroup.label,
                                disabled: optgroup.disabled,
                                options: optgroup.options.map((function(option) {
                                    return t.normalizeOption(option)
                                })).filter(Boolean)
                            }
                        },
                        mousedownHandler: function() {
                            t.value = !0
                        },
                        handleFocus: function(o) {
                            o ? t.value ? (e.value = !0, r.value = !1) : (e.value = !0, r.value = !0) : (e.value = !1, r.value = !1, t.value = !1)
                        }
                    }
                },
                computed: {
                    props: function() {
                        return {
                            value: this.value,
                            id: this.id,
                            name: this.name,
                            disabled: this.disabled,
                            required: this.required
                        }
                    },
                    normalizedOptions: function() {
                        var t = this;
                        return Array.isArray(this.options) ? this.options.map((function(option) {
                            return option.options ? t.normalizeOptionGroup(option) : t.normalizeOption(option)
                        })).filter(Boolean) : []
                    }
                }
            }),
            c = (r(847), r(0)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative"
                }, [r("select", t._b({
                    staticClass: "block w-full select-none appearance-none rounded-md focus:outline-none",
                    class: [{
                        "pointer-events-none opacity-50": t.disabled,
                        "ring-2 ring-primary": t.focusVisible
                    }, t.paddingClass, t.textClass, t.bgClass, t.borderClass, t.extraClass],
                    on: {
                        input: function(e) {
                            return t.$emit("input", e.target.value)
                        },
                        focus: function(e) {
                            return t.handleFocus(!0)
                        },
                        blur: function(e) {
                            return t.handleFocus(!1)
                        },
                        mousedown: t.mousedownHandler
                    }
                }, "select", t.props, !1), [t.placeholder ? r("option", {
                    attrs: {
                        value: "",
                        disabled: ""
                    }
                }, [t._v("\n      " + t._s(t.placeholder) + "\n    ")]) : t._e(), t._v(" "), t._l(t.normalizedOptions, (function(option, i) {
                    return [option.options ? r("optgroup", {
                        key: option.value + "-" + i,
                        attrs: {
                            label: option.label,
                            disabled: option.disabled
                        }
                    }, t._l(option.options, (function(e, o) {
                        return r("option", {
                            key: e.value + "-" + i + "-" + o,
                            domProps: {
                                value: e.value
                            }
                        }, [t._v("\n          " + t._s(e.text) + "\n        ")])
                    })), 0) : r("option", {
                        key: option.value + "-" + i,
                        attrs: {
                            disabled: option.disabled
                        },
                        domProps: {
                            value: option.value
                        }
                    }, [t._v("\n        " + t._s(option.text) + "\n      ")])]
                }))], 2), t._v(" "), r("div", {
                    staticClass: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
                }, [r("IconChevronBottom", {
                    staticClass: "h-4 w-4 dark:text-secondary light:text-gray-300"
                })], 1)])
            }), [], !1, null, "7052e5e4", null);
        e.default = component.exports;
        installComponents(component, {
            IconChevronBottom: r(122).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(24);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    position: {
                        type: String,
                        default: "center",
                        validator: function(t) {
                            return ["left", "center", "right"].includes(t)
                        }
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "flex flex-col w-full col-span-12",
                    class: {
                        "items-start": "left" === t.position, "items-center jtext-center": "center" === t.position, "items-end": "right" === t.position
                    }
                }, [t._t("icon"), t._v(" "), t.$scopedSlots.category ? r("div", {
                    staticClass: "mb-2"
                }, [t._t("category")], 2) : t._e(), t._v(" "), t.$scopedSlots.title ? r("div", {
                    staticClass: "mb-2"
                }, [t._t("title")], 2) : t._e(), t._v(" "), t.$scopedSlots.paragraph ? r("div", {
                    staticClass: "mb-8"
                }, [t._t("paragraph")], 2) : t._e(), t._v(" "), t.$scopedSlots.content ? r("div", {
                    staticClass: "w-full my-8"
                }, [t._t("content")], 2) : t._e(), t._v(" "), t._t("link"), t._v(" "), t._t("banner"), t._v(" "), t._t("button")], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    height: {
                        type: String,
                        default: "70vh"
                    },
                    minHeight: {
                        type: String,
                        default: "560px"
                    },
                    secondary: {
                        type: Boolean,
                        default: !1
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", {
                    staticClass: "relative",
                    class: {
                        "light:bg-gray-50 dark:bg-secondary-darkest": t.secondary
                    }
                }, [t._t("background-illustration"), t._v(" "), t._t("header-illustration"), t._v(" "), r("NuxtContainer", {
                    staticClass: "flex flex-col items-center"
                }, [t._t("main-title"), t._v(" "), t._t("main-description"), t._v(" "), r("div", {
                    staticClass: "flex flex-col w-full md:grid md:grid-cols-12"
                }, [t._t("left-illustration"), t._v(" "), t._t("section-content"), t._v(" "), t._t("right-illustration")], 2), t._v(" "), t._t("link")], 2), t._v(" "), t._t("footer-illustration")], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            NuxtContainer: r(76).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "currentColor",
                        viewBox: "0 0 512 512"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "16",
                        height: "15",
                        viewBox: "0 0 16 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M7.29936 1.15381L5.48547 4.77413L1.42714 5.35655C0.699362 5.46045 0.407695 6.34366 0.935473 6.84952L3.87158 9.66592L3.17714 13.6444C3.05214 14.3636 3.82158 14.9023 4.46603 14.5659L8.09658 12.6874L11.7271 14.5659C12.3716 14.8995 13.141 14.3636 13.016 13.6444L12.3216 9.66592L15.2577 6.84952C15.7855 6.34366 15.4938 5.46045 14.766 5.35655L10.7077 4.77413L8.89381 1.15381C8.56881 0.508501 7.62714 0.500298 7.29936 1.15381Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(178),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1),
            n = r(41);
        e.default = o.defineComponent({
            props: {
                title: {
                    type: String,
                    required: !0
                },
                subtitle: {
                    type: String,
                    required: !0
                },
                icon: {
                    type: String,
                    required: !0
                },
                colorClass: {
                    type: String,
                    required: !0
                },
                isExternal: {
                    type: [String, Boolean],
                    default: !1
                }
            },
            setup: function() {
                return {
                    isHome: n.useNav().isHome
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(180),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            props: {
                to: {
                    type: String,
                    default: ""
                },
                href: {
                    type: String,
                    default: ""
                },
                externalIcon: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: String,
                    default: "medium"
                },
                icon: {
                    type: String,
                    default: ""
                },
                extraClass: {
                    type: String,
                    default: "app-button-primary-color"
                },
                buttonClass: {
                    type: String,
                    default: ""
                }
            },
            setup: function(t) {
                return {
                    buttonProps: o.computed((function() {
                        var e = t.to,
                            r = t.href;
                        return null != e && e.length ? {
                            is: "AppLink",
                            to: e
                        } : null != r && r.length ? {
                            is: "AppLink",
                            href: r
                        } : {
                            is: "button"
                        }
                    }))
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(182),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1),
            n = r(126);
        e.default = o.defineComponent({
            setup: function() {
                var t = n.useNotifications(),
                    e = t.notifications;
                return {
                    remove: t.remove,
                    notifications: e
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(184),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        r(24), r(60), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1),
            n = r(41);
        e.default = o.defineComponent({
            props: {
                id: {
                    type: String,
                    required: !0
                },
                type: {
                    type: String,
                    required: !0,
                    default: "info",
                    validator: function(t) {
                        return ["info", "success", "error", "warning"].includes(t)
                    }
                },
                title: {
                    type: String,
                    required: !0
                },
                description: {
                    type: String,
                    default: null
                },
                icon: {
                    type: String,
                    default: null
                },
                timeout: {
                    type: Number,
                    default: 5e3
                },
                callback: {
                    type: Function,
                    default: null
                }
            },
            setup: function(t, e) {
                var r = e.emit,
                    l = o.ref(null),
                    c = o.ref(null),
                    d = o.ref(t.timeout),
                    m = o.useContext(),
                    f = m.$timer,
                    v = m.$ticker,
                    h = n.useNav().isHome,
                    w = o.computed((function() {
                        return t.icon || {
                            warning: "IconAlertWarning",
                            info: "IconAlertInfo",
                            success: "IconAlertSuccess",
                            error: "IconAlertDanger"
                        }[t.type]
                    })),
                    y = o.computed((function() {
                        return {
                            warning: "text-orange-400",
                            info: "text-blue-400",
                            success: "text-green-400",
                            error: "text-red-400"
                        }[t.type] || "text-gray-400"
                    })),
                    x = o.computed((function() {
                        return {
                            warning: "bg-orange-400",
                            info: "bg-blue-400",
                            success: "bg-green-400",
                            error: "bg-red-400"
                        }[t.type] || "bg-gray-400"
                    })),
                    _ = o.computed((function() {
                        var e = d.value / t.timeout * 100;
                        return {
                            width: "".concat(e, "%")
                        }
                    }));

                function k() {
                    t.callback && this.callback(), r("close")
                }
                return o.onMounted((function() {
                    f && t.timeout && (l.value = new f((function() {
                        k(), null == c || c.value.stop()
                    }), t.timeout), c.value = new v((function() {
                        d.value -= 10
                    }), 10))
                })), o.onBeforeUnmount((function() {
                    l.value && (l.value.stop(), c.value.stop())
                })), {
                    timer: l,
                    ticker: c,
                    iconName: w,
                    iconColorClass: y,
                    progressBarColorClass: x,
                    progressBarStyle: _,
                    onMouseover: function() {
                        l.value && (l.value.pause(), c.value.stop())
                    },
                    onMouseout: function() {
                        l.value && (l.value.resume(), c.value.start())
                    },
                    close: k,
                    isHome: h
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(186),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1),
            n = r(41);
        e.default = o.defineComponent({
            props: {
                links: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            setup: function() {
                var t = o.useContext(),
                    e = t.$docus,
                    r = t.$menu,
                    l = n.useNav().isHome,
                    c = o.ref(!e.layout.value.aside);
                return o.watch(r.visible, (function(t, r) {
                    t && !r && e.layout.value.aside && (c.value = !1)
                })), {
                    mobileMainNav: c,
                    mobileBack: function() {
                        c.value ? r.close() : c.value = !0
                    },
                    layout: e.layout,
                    isHome: l
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(188),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        r(9), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            setup: function() {
                var t = o.useContext().$docus,
                    e = o.ref(t.currentNav.value.links),
                    title = o.ref(t.currentNav.value.title),
                    r = o.ref(t.currentNav.value.slug),
                    n = o.computed((function() {
                        return 0 === e.value.filter((function(link) {
                            return link.children && link.children.length > 0
                        })).length
                    }));
                o.watch(t.currentNav, (function(t) {
                    e.value = t.links, title.value = t.title, r.value = t.slug
                }), {
                    deep: !0
                }), o.watch(e, (function(e) {
                    e.forEach((function(link) {
                        link.children && link.children.length > 0 && (link.children.some((function(e) {
                            return t.isLinkActive(e.to)
                        })) && (link.collapse = !1))
                    }))
                }), {
                    immediate: !0
                });
                var l = o.computed((function() {
                        return t.currentNav.value.parent
                    })),
                    c = o.computed((function() {
                        var e;
                        return null === (e = t.lastRelease) || void 0 === e ? void 0 : e.value
                    }));
                return {
                    isDirectory: n,
                    links: e,
                    title: title,
                    slug: r,
                    parent: l,
                    lastRelease: c
                }
            }
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(191),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            props: {
                item: {
                    type: Object,
                    required: !0
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(193),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        r(42);
        var o = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            l = o(r(851));
        e.default = n.defineComponent({
            props: {
                module: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                iconUrl: function() {
                    var t = this.module,
                        e = t.icon,
                        r = t.category;
                    return e && e.startsWith("https://") ? e : e ? "https://nuxt.com/modules/icons/".concat(e) : "/img/modules/categories/".concat((r || "").toLowerCase(), ".svg")
                },
                npmUrl: function() {
                    return "https://npmjs.com/package/".concat(this.module.npm)
                },
                githubUrl: function() {
                    return "https://github.com/".concat(this.module.github)
                }
            },
            methods: {
                numberFormat: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        precision: 1
                    };
                    return l.default(t || 0, e)
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(195),
            n = r.n(o);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            props: {
                image: {
                    type: String,
                    default: ""
                },
                button: {
                    type: Object,
                    default: function() {
                        return {
                            text: "",
                            url: ""
                        }
                    }
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(197),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            props: {
                sponsor: {
                    type: Object,
                    required: !0
                }
            },
            setup: function() {}
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(199),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1),
            n = r(437);
        e.default = o.defineComponent({
            props: {
                categories: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                modules: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            setup: function(t) {
                var e = n.useFuse(t.modules);
                return {
                    selectedCategory: e.selectedCategory,
                    selectCategory: e.selectCategory
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(201),
            n = r.n(o);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        var o = r(151);
        r(14), r(16), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            l = r(865),
            c = r(437);
        e.default = n.defineComponent({
            directives: {
                focus: {
                    inserted: function(t) {
                        t.focus()
                    }
                }
            },
            setup: function(t) {
                var e = n.useContext().i18n,
                    r = l.useModules(),
                    d = r.fetch,
                    m = r.categories,
                    f = r.modules,
                    v = c.useFuse(f),
                    h = v.query,
                    w = v.orderedBy,
                    y = v.sortedBy,
                    x = v.filteredModules,
                    _ = v.sortFields,
                    k = v.toggleOrderBy,
                    C = v.loadModules,
                    j = v.updateList,
                    O = n.computed((function() {
                        return _.map((function(t) {
                            return {
                                text: e.t("common.".concat(t)),
                                value: t
                            }
                        }))
                    }));
                return n.useFetch(o(regeneratorRuntime.mark((function t() {
                    var e;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, d();
                            case 2:
                                e = t.sent, j(e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))), {
                    categories: m,
                    modules: f,
                    filteredModules: x,
                    sortedBy: y,
                    sorts: O,
                    toggleOrderBy: k,
                    orderedBy: w,
                    query: h,
                    loadModules: C
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(203),
            n = r.n(o);
        for (var l in o)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return o[t]
            }))
        }(l);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        var o = r(97);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1);
        e.default = n.defineComponent({
            props: {
                options: {
                    type: Object,
                    default: function() {}
                }
            },
            setup: function(t, e) {
                var r = e.emit,
                    l = n.ref(null),
                    c = n.ref(null);
                return n.onMounted((function() {
                    (l = new IntersectionObserver((function(t) {
                        var e = o(t, 1)[0];
                        e && e.isIntersecting && r("intersect")
                    }), t.options)).observe(c.value)
                })), {
                    observer: l,
                    root: c
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(205),
            n = r.n(o);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        r(13), r(12), r(18), r(19);
        var o = r(59),
            n = r(151);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    o(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        r(14), r(9), r(16), r(27), r(25), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = r(1),
            m = r(656);
        e.default = d.defineComponent({
            props: {
                category: {
                    type: String,
                    required: !0
                },
                icon: {
                    type: String,
                    required: !0
                }
            },
            setup: function(t) {
                var e = d.useContext(),
                    r = e.$docus,
                    o = (e.i18n, d.ref(null));
                return d.useFetch(n(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r.search("/collections/partners/".concat(t.category), {
                                    deep: !0
                                }).fetch();
                            case 2:
                                o.value = e.sent.map((function(t) {
                                    return c(c({}, t), {}, {
                                        link: null,
                                        to: "/partners/".concat(t.slug)
                                    })
                                })).filter((function(t) {
                                    return t.logo
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))), d.onMounted((function() {
                    if (window.location.hash) {
                        var t = window.location.hash.replace("#", "");
                        setTimeout((function() {
                            m.scrollToHeading(t, "--docs-scroll-margin-block")
                        }), 300)
                    }
                })), {
                    partners: o
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(207),
            n = r.n(o);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        e.default = o.defineComponent({
            props: {
                icon: {
                    type: String,
                    default: ""
                },
                title: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                partnerContactUrl: {
                    type: String,
                    default: ""
                },
                websiteUrl: {
                    type: String,
                    default: ""
                },
                services: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                location: {
                    type: String,
                    default: ""
                }
            }
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(209),
            n = r.n(o);
        e.default = n.a
    }, function(t, e, r) {
        "use strict";
        var o = r(869);
        r(25), r(23), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            l = r(656);
        e.default = n.defineComponent({
            props: {
                page: {
                    type: Object,
                    required: !0
                }
            },
            setup: function() {
                var t = l.useGitHub().repoUrl;
                return n.onMounted((function() {
                    if (window.location.hash) {
                        var t = window.location.hash.replace("#", "");
                        setTimeout((function() {
                            l.scrollToHeading(t, "--docs-scroll-margin-block")
                        }), 300)
                    }
                    setTimeout((function() {
                        [].concat(o(document.querySelectorAll(".docus-content h1")), o(document.querySelectorAll(".docus-content h2")), o(document.querySelectorAll(".docus-content h3"))).forEach((function(t) {
                            t.addEventListener("click", (function(t) {
                                t.preventDefault();
                                var e = t.target.href.split("#").pop();
                                l.scrollToHeading(e, "--docs-scroll-margin-block")
                            }))
                        }))
                    }), 500)
                })), {
                    repoUrl: t
                }
            }
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(335),
            n = r(177);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            IconExternalLink: r(87).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(337),
            n = r(181);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            Notification: r(243).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(338),
            n = r(183);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        r(739);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, "3c59015a", null);
        e.default = component.exports, installComponents(component, {
            IconClose: r(171).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(340),
            n = r(187);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            IconArrowLeft: r(172).default,
            AsideNavigationItem: r(265).default,
            AsideBottom: r(266).default
        })
    }, , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(342),
            n = r(192);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            AppLink: r(38).default,
            IconStar: r(176).default,
            IconDownload: r(309).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(344),
            n = r(196);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            IconChevronRight: r(101).default
        })
    }, function(t, e, r) {
        t.exports = r.p + "img/logo.d0868f5.svg"
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(345),
            n = r(198);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(347),
            n = r(202);
        for (var l in n)["default"].indexOf(l) < 0 && function(t) {
            r.d(e, t, (function() {
                return n[t]
            }))
        }(l);
        var c = r(0),
            component = Object(c.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports
    }, , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = (r(15), r(56));
        var nav = r(41),
            l = r(126),
            c = Object(o.defineComponent)({
                props: {
                    links: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                setup: function() {
                    var t = Object(o.useContext)().i18n,
                        e = function() {
                            var t = Object(o.useContext)(),
                                e = t.query,
                                r = t.$config,
                                l = Object(o.ref)(""),
                                c = Object(o.ref)(""),
                                d = Object(o.ref)(!1),
                                m = r.apiURL || "https://api.nuxtjs.org";
                            e.value.hash && e.value.email && function(t) {
                                d.value = !0, Object(n.a)("".concat(m, "/api/newsletter/subscribe"), {
                                    method: "POST",
                                    body: {
                                        email: t
                                    }
                                }).then((function() {
                                    c.value = "subscribed"
                                })).catch((function(t) {
                                    f(t)
                                })).finally((function() {
                                    return d.value = !1
                                }))
                            }(e.value.email);
                            var f = function(t) {
                                var e = t.data.statusCode;
                                c.value = "failure", 419 === e && (c.value = "member-exists"), 420 === e && (c.value = "sending-error"), 422 === e && (c.value = "invalid-email")
                            };
                            return {
                                email: l,
                                newsletterResult: c,
                                pending: d,
                                subscribe: function() {
                                    l.value && l.value.trim() && (d.value = !0, Object(n.a)("".concat(m, "/api/newsletter/confirm"), {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json"
                                        },
                                        body: {
                                            email: l.value
                                        }
                                    }).then((function() {
                                        c.value = "confirm"
                                    })).catch((function(t) {
                                        f(t)
                                    })).finally((function() {
                                        return d.value = !1
                                    })))
                                }
                            }
                        }(),
                        r = e.email,
                        c = e.newsletterResult,
                        d = e.subscribe,
                        m = e.pending,
                        f = Object(nav.useNav)().isHome,
                        v = Object(l.useNotifications)().add;
                    return Object(o.watch)(c, (function(e) {
                        "" !== e && function(e) {
                            var r = {
                                text: "",
                                type: "",
                                timer: 0
                            };
                            switch (e) {
                                case "failure":
                                    r = {
                                        text: t.t("common.an_error_occurred"),
                                        type: "error"
                                    };
                                    break;
                                case "invalid-email":
                                    r = {
                                        text: t.t("footer.newsletter.form.invalid_address"),
                                        type: "warning"
                                    };
                                    break;
                                case "sending-error":
                                    r = {
                                        text: t.t("footer.newsletter.form.subscribed_messages.error"),
                                        type: "warning"
                                    };
                                    break;
                                case "member-exists":
                                    r = {
                                        text: t.t("footer.newsletter.form.already_registered"),
                                        type: "warning"
                                    };
                                    break;
                                case "subscribed":
                                    r = {
                                        text: t.t("footer.newsletter.form.subscribed_messages.confirmation"),
                                        type: "success"
                                    };
                                    break;
                                case "confirm":
                                    r = {
                                        text: t.t("footer.newsletter.form.subscribed_messages.pre"),
                                        type: "success",
                                        timer: 5e3
                                    }
                            }
                            v({
                                title: t.t("footer.newsletter.title"),
                                description: r.text,
                                type: r.type,
                                timeout: r.timer || 4e3
                            }), c.value = ""
                        }(e)
                    })), {
                        socials: [{
                            href: "https://twitter.com/nuxt_js",
                            icon: "IconTwitter",
                            title: "Follow us on Twitter!"
                        }, {
                            href: "https://discord.com/invite/ps2h6QT",
                            icon: "IconDiscord",
                            title: "Join our Discord server!"
                        }, {
                            href: "https://github.com/nuxt",
                            icon: "IconGitHub",
                            title: "See our works on GitHub!"
                        }],
                        email: r,
                        isHome: f,
                        subscribe: d,
                        pending: m
                    }
                }
            }),
            d = r(0),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("footer", {
                    staticClass: "relative z-10",
                    class: {
                        "mt-28 sm:mt-36 md:mt-48 lg:mt-64": !t.isHome
                    },
                    attrs: {
                        "aria-label": "footerHeading"
                    }
                }, [r("div", {
                    staticClass: "select-none absolute bottom-full w-full"
                }, [t.isHome ? t._e() : r("img", {
                    staticClass: "w-full h-12 sm:h-20 lg:h-40 object-fill dark-img pointer-events-none",
                    attrs: {
                        loading: "lazy",
                        src: "/img/footer/dark/landscape.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), t.isHome ? t._e() : r("img", {
                    staticClass: "w-full h-12 sm:h-20 lg:h-40 object-fill light-img pointer-events-none",
                    attrs: {
                        loading: "lazy",
                        src: "/img/footer/light/landscape.svg",
                        alt: "A landscape image"
                    }
                })]), t._v(" "), r("div", {
                    class: t.isHome ? "bg-secondary-darker" : "bg-gray-50 dark:bg-secondary-black"
                }, [r("div", {
                    staticClass: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4"
                }, [t._l(t.links, (function(e) {
                    return r("div", {
                        key: e.title
                    }, [r("h3", {
                        staticClass: "font-semibold text-lg",
                        class: t.isHome ? "text-cloud-light" : "light:text-gray-500 dark:text-cloud-light"
                    }, [t._v("\n          " + t._s(e.title) + "\n        ")]), t._v(" "), r("ul", {
                        staticClass: "mt-4 space-y-3"
                    }, t._l(e.items, (function(link) {
                        return r("li", {
                            key: link.title
                        }, [r("AppLink", {
                            class: t.isHome ? "text-white hover:text-cloud-light" : "light:text-gray-500 dark:text-white hover:d-primary-text-hover",
                            attrs: {
                                to: t.localePath(link.to),
                                href: link.href,
                                "aria-label": link.title
                            }
                        }, [t._v(t._s(link.title))])], 1)
                    })), 0)])
                })), t._v(" "), r("div", [r("section", {
                    attrs: {
                        id: "subscribe-to-newsletter"
                    }
                }, [r("div", [r("h3", {
                    staticClass: "font-semibold text-lg",
                    class: t.isHome ? "text-cloud-light" : "light:text-gray-500 dark:text-cloud-light"
                }, [t._v("\n              " + t._s(t.$t("footer.newsletter.title")) + "\n            ")]), t._v(" "), r("p", {
                    staticClass: "mt-2 text-base",
                    class: t.isHome ? "text-secondary-surface" : "text-gray-500 dark:text-secondary-surface"
                }, [t._v("\n              " + t._s(t.$t("footer.newsletter.description")) + "\n            ")])]), t._v(" "), r("form", {
                    staticClass: "mt-4 sm:flex sm:justify-start",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.subscribe.apply(null, arguments)
                        }
                    }
                }, [r("AppInput", {
                    attrs: {
                        placeholder: t.$t("footer.newsletter.form.email")
                    },
                    model: {
                        value: t.email,
                        callback: function(e) {
                            t.email = e
                        },
                        expression: "email"
                    }
                }), t._v(" "), r("AppButton", {
                    attrs: {
                        type: "sumbit",
                        "extra-class": "mt-2 sm:mt-0 sm:ml-2 bg-primary text-gray-800 font-semibold hover:bg-primary-400 focus:bg-primary-300",
                        submit: ""
                    }
                }, [t._v("\n              " + t._s(t.pending ? t.$t("footer.newsletter.form.subscribing") : t.$t("footer.newsletter.form.subscribe")) + "\n            ")])], 1)]), t._v(" "), r("ul", {
                    staticClass: "flex items-center space-x-4 xl:space-x-5 mt-4"
                }, t._l(t.socials, (function(e, o) {
                    return r("li", {
                        key: o
                    }, [r("AppLink", {
                        staticClass: "block",
                        attrs: {
                            href: e.href,
                            "aria-label": e.title,
                            title: e.title
                        }
                    }, [r(e.icon, {
                        tag: "Component",
                        staticClass: "w-6 h-6 hover:text-primary",
                        class: t.isHome ? "text-gray-300" : "text-gray-400 dark:text-cloud-lighter"
                    })], 1)], 1)
                })), 0)])], 2)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            AppInput: r(120).default,
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(3),
            n = (r(14), r(27), r(40), r(24), r(1)),
            l = Object(n.defineComponent)({
                data: function() {
                    return {
                        headerLinks: [],
                        footerLinks: [],
                        showCookieBanner: !1
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.$docus, o = t.$i18n, e.next = 3, r.search("/collections/navigations", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $in: "header"
                                        },
                                        language: o.locale
                                    }).fetch();
                                case 3:
                                    return t.headerLinks = e.sent[0].links, e.next = 6, r.search("/collections/navigations/", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $in: "footer"
                                        },
                                        language: o.locale
                                    }).fetch();
                                case 6:
                                    t.footerLinks = e.sent[0].links;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                computed: {
                    layout: function() {
                        return this.$docus.layout.value
                    }
                },
                watch: {
                    "$i18n.locale": function() {
                        this.$fetch()
                    }
                },
                mounted: function() {
                    var t = "; ".concat(document.cookie);
                    this.showCookieBanner = !t.includes("cookieconsent_status")
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative w-full"
                }, [r("AppBanner"), t._v(" "), r("AppHeader", {
                    attrs: {
                        links: t.headerLinks
                    }
                }), t._v(" "), r("Notifications"), t._v(" "), r("div", {
                    staticClass: "lg:flex",
                    class: {
                        "d-container": t.layout.aside
                    }
                }, [
                    ["xs", "sm", "md"].includes(t.$mq) || t.layout.aside ? t._t("aside", (function() {
                        return [r("AppAside", {
                            class: t.layout.asideClass,
                            attrs: {
                                links: t.headerLinks
                            }
                        })]
                    })) : t._e(), t._v(" "), r("div", {
                        staticClass: "flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
                    }, [t._t("default")], 2)
                ], 2), t._v(" "), r("AppFooter", {
                    class: {
                        "pb-16 md:pb-12": t.showCookieBanner
                    },
                    attrs: {
                        links: t.footerLinks
                    }
                }), t._v(" "), t.showCookieBanner ? r("CookieBanner", {
                    staticClass: "fixed bottom-0 inset-x-0 z-40",
                    on: {
                        "cookie-banner": function(e) {
                            t.showCookieBanner = !1
                        }
                    }
                }) : t._e()], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppBanner: r(284).default,
            AppHeader: r(263).default,
            Notifications: r(242).default,
            AppAside: r(144).default,
            AppFooter: r(261).default,
            CookieBanner: r(268).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            nav = r(41),
            n = Object(o.defineComponent)({
                props: {
                    links: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                setup: function() {
                    var t = Object(o.useContext)().$docus,
                        e = Object(nav.useNav)(),
                        r = e.isHome,
                        n = e.currentSlug;
                    return {
                        settings: Object(o.computed)((function() {
                            return t.settings.value
                        })),
                        isHome: r,
                        isActiveGroup: function(link) {
                            var t;
                            return !!(link.slug === n.value || null !== (t = link.items) && void 0 !== t && t.some((function(t) {
                                return t.slug === n.value
                            })))
                        }
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("header", {
                    class: t.isHome ? "d-header-home" : "d-header"
                }, [r("div", {
                    staticClass: "flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6"
                }, [r("NavigationButton", {
                    staticClass: "w-12 h-12 lg:hidden",
                    class: {
                        "text-gray-300 hover:text-cloud-lighter": t.isHome
                    },
                    attrs: {
                        "aria-label": "mobileMenu"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "flex items-center flex-1 justify-center lg:justify-start"
                }, [r("AppLink", {
                    attrs: {
                        to: t.localePath("/"),
                        "aria-label": "homeLink"
                    }
                }, [r("Logo", {
                    staticClass: "h-6",
                    class: {
                        "text-white": t.isHome
                    },
                    attrs: {
                        settings: t.settings
                    }
                })], 1)], 1), t._v(" "), r("nav", {
                    staticClass: "items-center justify-center hidden h-full lg:flex"
                }, [t._l(t.links, (function(link, e) {
                    return [link.items && link.items.length ? r("Dropdown", {
                        key: e,
                        attrs: {
                            items: [link.items],
                            "main-link-class": "mx-2",
                            placement: "bottom",
                            mode: "hover",
                            "dropdown-menu-class": t.isHome ? "bg-sky-darkest text-white" : "bg-cloud-surface dark:bg-sky-darkest",
                            "dropdown-class": "w-max",
                            "open-delay": 0,
                            "items-class": "py-1 grid grid-cols-" + Math.round(link.items.length / 3)
                        },
                        scopedSlots: t._u([{
                            key: "trigger",
                            fn: function() {
                                return [r("HeaderNavigationLink", {
                                    staticClass: "px-1 py-2",
                                    class: {
                                        "text-white": t.isHome
                                    },
                                    attrs: {
                                        link: link,
                                        "force-active": t.isActiveGroup(link),
                                        "inactive-class": t.isHome ? "hover:text-gray-300" : "hover:d-primary-text-hover "
                                    }
                                }, [t._v("\n              " + t._s(link.title) + "\n            ")])]
                            },
                            proxy: !0
                        }, {
                            key: "item",
                            fn: function(e) {
                                var o = e.item;
                                return [r("HeaderNavigationLink", {
                                    staticClass: "px-2 py-1",
                                    class: {
                                        "text-white": t.isHome
                                    },
                                    attrs: {
                                        link: o,
                                        "inactive-class": t.isHome ? "hover:text-white" : "hover:text-sky-black dark:hover:text-white"
                                    }
                                }, [r("HeaderDropdownItem", {
                                    attrs: {
                                        title: o.title,
                                        subtitle: o.subtitle,
                                        icon: o.icon,
                                        "color-class": o.color,
                                        "is-external": o.href
                                    }
                                })], 1)]
                            }
                        }], null, !0)
                    }) : r("HeaderNavigationLink", {
                        key: e,
                        staticClass: "px-1 py-2",
                        class: {
                            "text-white": t.isHome
                        },
                        attrs: {
                            link: link,
                            "inactive-class": t.isHome ? "hover:text-gray-300" : "hover:d-primary-text-hover "
                        }
                    }, [t._v("\n          " + t._s(link.title) + "\n        ")])]
                }))], 2), t._v(" "), r("div", {
                    staticClass: "flex items-center justify-end gap-1 lg:flex-1"
                }, [r("LangSwitcher", {
                    staticClass: "hidden lg:inline-flex",
                    class: {
                        "text-white": t.isHome
                    },
                    attrs: {
                        "icon-class": "w-6 h-6 m-auto " + (t.isHome ? "text-gray-300 hover:text-primary-400" : "d-secondary-text hover:d-secondary-text-hover")
                    }
                }), t._v(" "), t.isHome ? t._e() : r("ColorSwitcher", {
                    staticClass: "hidden lg:block"
                }), t._v(" "), t.settings && t.settings.algolia ? r("AlgoliaSearchBox", {
                    attrs: {
                        options: t.settings.algolia,
                        settings: t.settings
                    }
                }) : t._e()], 1)], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            NavigationButton: r(285).default,
            Logo: r(154).default,
            AppLink: r(38).default,
            HeaderNavigationLink: r(155).default,
            HeaderDropdownItem: r(241).default,
            Dropdown: r(156).default,
            LangSwitcher: r(157).default,
            ColorSwitcher: r(158).default,
            AlgoliaSearchBox: r(264).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(6);
        r(25), r(58), r(30), r(15), r(29), r(16);
        var n = {
                props: {
                    options: {
                        type: Object,
                        required: !0
                    },
                    settings: {
                        type: Object,
                        required: !0
                    }
                },
                watch: {
                    "$i18n.locale": function(t) {
                        this.update(this.options, t)
                    },
                    options: function(t) {
                        this.update(t, this.$i18n.locale)
                    }
                },
                mounted: function() {
                    this.initialize(this.options, this.$i18n.locale)
                },
                methods: {
                    stripTrailingSlash: function(t) {
                        return t.replace(/\/$|\/(?=\?)|\/(?=#)/g, "")
                    },
                    getRelativePath: function(t) {
                        var e = new URL(t),
                            r = e.pathname,
                            o = e.hash,
                            n = r.replace(this.settings.url, "/") + o;
                        return this.stripTrailingSlash(n)
                    },
                    initialize: function(t, code) {
                        var e = this,
                            n = this.$i18n.locales.find((function(t) {
                                return t.code === code
                            }));
                        Promise.all([r.e(8).then(r.bind(null, 971)), r.e(8).then(r.t.bind(null, 972, 7))]).then((function(r) {
                            var l = Object(o.a)(r, 1)[0];
                            (l = l.default)(Object.assign({}, t, {
                                container: "#docsearch",
                                searchParameters: Object.assign({}, n && {
                                    facetFilters: ["".concat(t.langAttribute || "language", ":").concat(n.iso)].concat(t.facetFilters || [])
                                }),
                                navigator: {
                                    navigate: function(t) {
                                        var r = t.suggestionUrl,
                                            o = new URL(window.location.origin + r).pathname;
                                        e.$router.history.current.path === o ? window.location.assign(window.location.origin + r) : e.$router.push(r)
                                    }
                                },
                                transformItems: function(t) {
                                    return t.map((function(t) {
                                        return Object.assign({}, t, {
                                            url: e.getRelativePath(t.url)
                                        })
                                    }))
                                },
                                hitComponent: function(t) {
                                    var r = t.hit,
                                        o = t.children;
                                    return {
                                        type: "a",
                                        ref: void 0,
                                        constructor: void 0,
                                        key: void 0,
                                        props: {
                                            href: r.url,
                                            onClick: function(t) {
                                                if (! function(t) {
                                                        return 1 === t.button || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                                                    }(t) && e.$router.history.current.fullPath !== r.url) {
                                                    var o = new URL(window.location.origin + r.url).pathname;
                                                    e.$router.history.current.path !== o && t.preventDefault(), e.$router.push(r.url)
                                                }
                                            },
                                            children: o
                                        }
                                    }
                                }
                            }))
                        }))
                    },
                    update: function(t, e) {
                        this.initialize(t, e)
                    }
                }
            },
            l = (r(737), r(0)),
            component = Object(l.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    attrs: {
                        id: "docsearch"
                    }
                }, [e("AppButton", {
                    attrs: {
                        "button-class": "DocSearch DocSearch-Button",
                        "aria-label": "Search"
                    }
                }, [e("svg", {
                    staticClass: "d-icon m-auto",
                    attrs: {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                        stroke: "currentColor",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppButton: r(43).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(3),
            n = (r(14), r(22), r(27), r(662)),
            l = r.n(n),
            c = r(1),
            d = Object(c.defineComponent)({
                setup: function() {
                    var t = Object(c.useContext)(),
                        e = t.$docus,
                        r = t.app.i18n,
                        n = Object(c.ref)(null);
                    Object(c.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        var r, o, body;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.data("github-releases");
                                case 2:
                                    o = t.sent, null != (body = o.body) && null !== (r = body.releases) && void 0 !== r && r.length && (n.value = body.releases[0].name);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))));
                    var d = Object(c.ref)(null);
                    return Object(c.watch)((function() {
                        return r.locale
                    }), Object(o.a)(regeneratorRuntime.mark((function t() {
                        var header;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.search("/collections/navigations", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $in: "header"
                                        },
                                        language: r.locale
                                    }).fetch();
                                case 2:
                                    header = t.sent, d.value = l()(header, [0, "links", 1, "items", 3]);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), {
                        immediate: !0
                    }), {
                        lastRelease: n,
                        masterCoursesLink: d
                    }
                }
            }),
            m = r(0),
            component = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [t.masterCoursesLink && (t.$docus.currentPath.value.startsWith("/docs") || t.$docus.currentPath.value.startsWith("/examples")) ? r("AppLink", {
                    staticClass: "mt-2 flex font-medium rounded-md hover:text-sky-black dark:hover:text-white bg-gray-100 dark:bg-white dark:bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-9",
                    attrs: {
                        href: t.masterCoursesLink.href,
                        rel: "noopener",
                        "aria-label": t.masterCoursesLink.title
                    }
                }, [r("div", {
                    staticClass: "p-2 flex space-x-2"
                }, [r("div", {
                    staticClass: "mt-1 rounded-md w-8 h-8 p-2 bg-green-800 flex-shrink-0"
                }, [r("img", {
                    attrs: {
                        src: "/img/header/" + t.masterCoursesLink.icon,
                        alt: t.masterCoursesLink.title
                    }
                })]), t._v(" "), r("div", [r("h5", {
                    staticClass: "font-bold text-sm"
                }, [t._v(t._s(t.masterCoursesLink.title))]), t._v(" "), r("p", {
                    staticClass: "text-xs"
                }, [t._v(t._s(t.masterCoursesLink.subtitle))])])])]) : t._e(), t._v(" "), t.$docus.currentPath.value.startsWith("/docs") ? r("div", [r("AppLink", {
                    staticClass: "flex items-center group nuxt-text-highlight-hover mt-4",
                    attrs: {
                        href: "https://nuxt.com"
                    }
                }, [r("IconNuxt", {
                    staticClass: "w-5 h-5 mr-2 text-primary"
                }), t._v(" "), r("span", [t._v("Nuxt 3 docs")])], 1)], 1) : t._e()], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            IconNuxt: r(290).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(6),
            n = (r(15), r(29), r(28), r(22), r(12), r(33), r(30), r(1)),
            l = r(41);

        function c(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return d(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                c = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return l = t.done, t
                },
                e: function(t) {
                    c = !0, n = t
                },
                f: function() {
                    try {
                        l || null == r.return || r.return()
                    } finally {
                        if (c) throw n
                    }
                }
            }
        }

        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var m = Object(n.defineComponent)({
                props: {
                    links: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)().$menu,
                        r = Object(l.useNav)(),
                        d = r.isHome,
                        m = r.currentSlug,
                        nav = Object(n.ref)(null),
                        f = Object(n.ref)(null);

                    function v() {
                        if (m.value) {
                            var e, r = c(t.links.entries());
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n, l = Object(o.a)(e.value, 2),
                                        d = l[0],
                                        link = l[1];
                                    if (link.slug === m.value || null !== (n = link.items) && void 0 !== n && n.some((function(t) {
                                            return t.slug === m.value
                                        }))) {
                                        f.value = d;
                                        break
                                    }
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        } else f.value = null
                    }
                    return v(), Object(n.watch)(e.visible, (function(t) {
                        t && v()
                    })), {
                        openedLink: f,
                        toggle: function(t) {
                            f.value === t ? f.value = null : f.value = t
                        },
                        nav: nav,
                        isHome: d
                    }
                }
            }),
            f = r(0),
            component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("nav", {
                    ref: "nav",
                    staticClass: "flex flex-col gap-0 py-4 px-4 sm:px-6"
                }, [t._l(t.links, (function(link, e) {
                    return [link.items && link.items.length ? r("div", {
                        key: e,
                        staticClass: "flex flex-col"
                    }, [r("div", {
                        staticClass: "flex items-center justify-between cursor-pointer py-2",
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(r) {
                                return t.toggle(e)
                            }
                        }
                    }, [r("HeaderNavigationLink", {
                        class: {
                            "text-cloud-lighter hover:text-cloud-lightest": t.isHome
                        },
                        attrs: {
                            link: link
                        }
                    }, [t._v("\n          " + t._s(link.title) + "\n        ")]), t._v(" "), t.openedLink === e ? r("IconChevronBottom", {
                        staticClass: "flex-shrink-0 w-4 h-4",
                        class: {
                            "text-cloud-lighter": t.isHome
                        }
                    }) : r("IconChevronRight", {
                        staticClass: "flex-shrink-0 w-4 h-4",
                        class: {
                            "text-cloud-lighter": t.isHome
                        }
                    })], 1), t._v(" "), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.openedLink === e,
                            expression: "openedLink === index"
                        }],
                        staticClass: "pl-2 pb-2 gap-2"
                    }, t._l(link.items, (function(e, o) {
                        return r("HeaderNavigationLink", {
                            key: o,
                            staticClass: "rounded-md px-2 py-1 text-sm",
                            class: {
                                "text-cloud-lighter hover:text-cloud-lightest": t.isHome
                            },
                            attrs: {
                                link: e,
                                "active-class": "d-active-aside-navigation-item-bg",
                                "inactive-class": "d-secondary-text hover:d-secondary-text-hover"
                            }
                        }, [t._v("\n          " + t._s(e.title) + "\n        ")])
                    })), 1)]) : r("HeaderNavigationLink", {
                        key: e,
                        staticClass: "py-2",
                        class: {
                            "text-cloud-lighter hover:text-cloud-lightest": t.isHome
                        },
                        attrs: {
                            link: link
                        }
                    }, [t._v("\n      " + t._s(link.title) + "\n    ")])]
                }))], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            HeaderNavigationLink: r(155).default,
            IconChevronBottom: r(122).default,
            IconChevronRight: r(101).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(663),
            n = r(683),
            l = {
                components: {
                    VueIfBot: o.a,
                    CookieConsent: n.a
                }
            },
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "\n    bg-white\n    dark:bg-sky-black\n    border-t border-t-sky-light\n    text-center\n    md:text-left\n    text-sky-dark\n    dark:text-white\n    font-medium\n  "
                }, [r("VueIfBot", [r("CookieConsent", {
                    staticClass: "\n        d-container-content\n        py-4\n        px-4\n        sm:px-6\n        lg:px-8\n        flex flex-col\n        md:flex-row\n        items-center\n        md:justify-between\n        space-y-4\n        md:space-y-0\n      "
                }, [r("template", {
                    slot: "message"
                }, [r("p", {
                    staticClass: "md:w-1/2"
                }, [t._v("\n          " + t._s(t.$t("cookies.message")) + "\n          "), r("AppLink", {
                    staticClass: "underline",
                    attrs: {
                        href: "https://www.cookiesandyou.com/"
                    }
                }, [t._v("\n            " + t._s(t.$t("cookies.link")) + "\n          ")])], 1)]), t._v(" "), r("template", {
                    slot: "button"
                }, [r("AppButton", {
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("cookie-banner")
                        }
                    }
                }, [t._v("\n          " + t._s(t.$t("cookies.button")) + "\n        ")])], 1)], 2)], 1)], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            AppButton: r(43).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    slug: {
                        type: String,
                        required: !0
                    },
                    sortBy: {
                        type: Object,
                        default: function() {
                            return {
                                field: "date",
                                direction: "desc"
                            }
                        }
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)(),
                        r = e.$docus,
                        l = e.i18n,
                        c = Object(n.ref)();
                    Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function e() {
                        var o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.search(t.slug, {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $ne: ""
                                        },
                                        language: l.locale
                                    }).sortBy(t.sortBy.field, t.sortBy.direction).fetch();
                                case 2:
                                    o = e.sent, c.value = o;
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))));
                    return {
                        posts: c,
                        formatDateByLocale: function(t, e) {
                            var r = t || "en";
                            return new Date(e).toLocaleDateString(r, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "px-6 mt-12 mb-8"
                }, [r("div", {
                    staticClass: "flex grid flex-wrap grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                }, t._l(t.posts, (function(e) {
                    return r("ContentCardTemplate", {
                        key: e.id,
                        attrs: {
                            title: e.title,
                            description: e.description,
                            image: e.imgUrl,
                            href: e.to,
                            category: e.target || e.category
                        }
                    }, [r("div", {
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("div", {
                        staticClass: "flex items-center"
                    }, [e.authors ? r("div", {
                        staticClass: "flex mr-4"
                    }, t._l(e.authors, (function(t, e) {
                        return r("AppLink", {
                            key: e,
                            staticClass: "flex items-center justify-end border-white rounded-full border-3 dark:border-secondary-darker",
                            class: {
                                "-ml-4": 0 !== e
                            },
                            attrs: {
                                href: t.link,
                                rel: "noopener noindex nofollow"
                            }
                        }, [r("NuxtImg", {
                            staticClass: "inline-block w-10 h-10 rounded-full",
                            attrs: {
                                height: "32",
                                width: "32",
                                loading: "lazy",
                                src: t.avatarUrl,
                                alt: t.name
                            }
                        })], 1)
                    })), 1) : t._e(), t._v(" "), r("div", {
                        staticClass: "flex flex-col text-sm"
                    }, [e.authors ? r("span", {
                        staticClass: "font-bold"
                    }, [t._v(t._s(e.authors.length > 1 ? t.$t("common.multiple_authors") : e.authors[0].name))]) : t._e(), t._v(" "), e.date ? r("time", {
                        staticClass: "mr-2 text-sm font-medium text-gray-500 dark:text-cloud-light",
                        attrs: {
                            datetime: e.date
                        }
                    }, [t._v("\n              " + t._s(t.formatDateByLocale(t.$i18n.locale, e.date)) + "\n            ")]) : t._e()])])])])
                })), 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            ContentCardTemplate: r(121).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                name: "AdsCarbon",
                mounted: function() {
                    if (this.$refs.carbonads) {
                        var script = document.createElement("script");
                        script.setAttribute("type", "text/javascript"), script.setAttribute("src", "https://cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg"), script.setAttribute("id", "_carbonads_js"), this.$refs.carbonads.appendChild(script)
                    }
                }
            }),
            l = (r(821), r(0)),
            component = Object(l.a)(n, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    ref: "carbonads",
                    staticClass: "Carbon dark:bg-secondary-darkest bg-gray-50"
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , function(t, e, r) {
        "use strict";
        r.r(e);
        r(23), r(28), r(9), r(25);
        var o = r(1),
            n = r(34),
            l = Object(o.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(o.useContext)().$docus,
                        r = Object(o.computed)((function() {
                            return e.settings
                        })).value,
                        l = Object(o.computed)((function() {
                            return Object(n.c)(r.value.github.url, r.value.github.repo)
                        }));
                    return {
                        pageGitHubLink: Object(o.computed)((function() {
                            if (r.value.github) {
                                var e = t.page.key.split(":"),
                                    o = e.slice(1, e.length - 1).join("/"),
                                    source = e[e.length - 1];
                                return [l.value, "edit", r.value.github.branch, r.value.github.dir || "", r.value.contentDir, o, "".concat(source).replace(/^\//g, "")].filter(Boolean).join("/")
                            }
                        }))
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "flex items-center rounded-md px-6 py-3 bg-gray-100 dark:bg-sky-darker"
                }, [r("IconTranslate", {
                    staticClass: "d-secondary-text w-8 h-8 mr-6"
                }), t._v(" "), r("div", {
                    staticClass: "flex flex-col"
                }, [r("span", {
                    staticClass: "font-bold"
                }, [t._v(t._s(t.$t("translated_pages.title")))]), t._v(" "), r("span", {
                    staticClass: "text-sm"
                }, [t._v(t._s(t.$t("translated_pages.content_outdated")))]), t._v(" "), r("div", {
                    staticClass: "flex items-center gap-4 mt-1"
                }, [r("NuxtLink", {
                    staticClass: "inline text-sm font-medium hover:underline",
                    attrs: {
                        to: t.switchLocalePath("en")
                    }
                }, [t._v("\n        " + t._s(t.$t("translated_pages.read_original_page")) + "\n      ")]), t._v(" "), r("AppLink", {
                    staticClass: "text-sm font-medium hover:underline",
                    attrs: {
                        href: t.pageGitHubLink
                    }
                }, [t._v("\n        " + t._s(t.$t("translated_pages.contribute")) + "\n      ")])], 1)])], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            IconTranslate: r(170).default,
            AppLink: r(38).default
        })
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    color: {
                        type: String,
                        default: "primary"
                    },
                    to: {
                        type: String,
                        required: !0
                    },
                    icon: {
                        type: String,
                        default: "IconChevronRight"
                    },
                    blank: {
                        type: Boolean,
                        default: !0
                    },
                    size: {
                        type: String,
                        default: "md"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("Link", {
                    staticClass: "relative inline-flex items-center font-bold group flex-nowrap max-w-max",
                    class: "text-" + t.color,
                    attrs: {
                        to: "" + t.to,
                        blank: t.blank
                    }
                }, [r("span", {
                    class: [{
                        "text-md 2xl:text-base ": "sm" === t.size
                    }, {
                        "text-lg": "md" === t.size
                    }, {
                        "text-xl": "lg" === t.size
                    }]
                }, [t._v(t._s(t.name))]), t._v(" "), r(t.icon, {
                    tag: "Component",
                    staticClass: "ml-2",
                    class: "sm" === t.size ? "w-4 h-4" : "w-5 h-5"
                }), t._v(" "), r("span", {
                    staticClass: "absolute -bottom-2 h-0.5 w-8 group-hover:w-full transition-all",
                    class: "bg-" + t.color
                })], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Link: r(86).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(28);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    member: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function() {
                    return {
                        getSocialIcon: function(t) {
                            return "Icon".concat(t.charAt(0).toUpperCase() + t.slice(1))
                        }
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "flex flex-col w-48 items-center pb-12"
                }, [r("NuxtImg", {
                    staticClass: "h-24 w-24 rounded-full",
                    attrs: {
                        src: t.member.avatarUrl,
                        loading: "lazy"
                    }
                }), t._v(" "), r("span", {
                    staticClass: "light:text-sky-darker dark:text-white font-semibold pt-4"
                }, [t._v(t._s(t.member.name))]), t._v(" "), r("span", {
                    staticClass: "text-gray-500 dark:text-gray-400"
                }, [t._v(t._s(t.member.location))]), t._v(" "), r("ul", {
                    staticClass: "flex space-x-2 mt-2"
                }, t._l(t.member.socials, (function(e, o) {
                    return r("li", {
                        key: o,
                        staticClass: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    }, t._l(e, (function(e, o, i) {
                        return r("div", {
                            key: i
                        }, [r("AppLink", {
                            attrs: {
                                href: e,
                                "aria-label": o
                            }
                        }, [r(t.getSocialIcon(o), {
                            tag: "Component",
                            staticClass: "h-5 w-5"
                        })], 1)], 1)
                    })), 0)
                })), 0)], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppLink: r(38).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(12), r(33), r(30), r(15), r(29);
        var o = r(1),
            n = Object(o.defineComponent)({
                setup: function() {
                    var t = Object(o.ref)(null),
                        e = Object(o.ref)(!0);

                    function r(r) {
                        var o = Array.from(t.value.children);
                        e.value && (e.value = !1);
                        for (var n = 0, l = o; n < l.length; n++) {
                            var image = l[n],
                                c = parseInt(image.getAttribute("data-speed")),
                                d = (window.innerWidth - r.pageX * c) / 100,
                                m = (window.innerHeight - r.pageY * c) / 100;
                            image.style.transform = "translateX(".concat(d, "px) translateY(").concat(m, "px)")
                        }
                    }
                    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? Object(o.onMounted)((function() {
                        setTimeout((function() {
                            e.value = !1
                        }), 200)
                    })) : (Object(o.onMounted)((function() {
                        return window.addEventListener("mousemove", r)
                    })), Object(o.onBeforeUnmount)((function() {
                        return window.removeEventListener("mousemove", r)
                    }))), {
                        hidden: e,
                        containerImg: t,
                        parallax: r
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    ref: "containerImg",
                    staticClass: "\n    absolute\n    top-0\n    left-0\n    z-10\n    w-full\n    h-full\n    select-none\n    pointer-events-none\n    transition-opacity\n    ease-out\n    duration-800\n    mt-18\n  ",
                    class: [t.hidden ? "opacity-0" : "opacity-100"]
                }, [r("img", {
                    ref: "gem1",
                    staticClass: "hidden lg:block absolute left-30 top-10 ml-0 md:ml-12 ml-20 mt-0 md:mt-8 mt-8",
                    attrs: {
                        "data-speed": "2",
                        loading: "lazy",
                        src: "/img/home/hero/gem-1.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                }), t._v(" "), r("img", {
                    ref: "gem2",
                    staticClass: "absolute left-1/3 sm:left-auto mt-4 sm:ml-0 sm:right-0 top-0 sm:mr-20 lg:mr-60 lg:mt-20",
                    attrs: {
                        "data-speed": "-5",
                        loading: "lazy",
                        src: "/img/home/hero/gem-2.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                }), t._v(" "), r("img", {
                    ref: "gem3",
                    staticClass: "hidden lg:block absolute right-0 top-1/4",
                    attrs: {
                        "data-speed": "1",
                        loading: "lazy",
                        src: "/img/home/hero/gem-3.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                }), t._v(" "), r("img", {
                    ref: "gem4",
                    staticClass: "absolute right-0 bottom-0 mb-20 sm:mb-0 sm:bottom-1/4 mr-8 sm:mr-16 md:mr-28 lg:mr-40",
                    attrs: {
                        "data-speed": "-3",
                        loading: "lazy",
                        src: "/img/home/hero/gem-4.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                }), t._v(" "), r("img", {
                    ref: "gem5",
                    staticClass: "absolute left-0 bottom-0 sm:bottom-1/4 mb-20 sm:mb-0 ml-0 md:ml-12 lg:ml-40",
                    attrs: {
                        "data-speed": "-5",
                        loading: "lazy",
                        src: "/img/home/hero/gem-5.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                }), t._v(" "), r("img", {
                    ref: "gem6",
                    staticClass: "hidden sm:block absolute left-20 top-0 mt-20 lg:top-1/3 lg:-mt-2 rotate-45",
                    attrs: {
                        "data-speed": "-2",
                        loading: "lazy",
                        src: "/img/home/hero/gem-2.svg",
                        alt: "An image of a green gem from nuxt galaxy"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                setup: function(t, e) {
                    var r = Object(o.ref)(""),
                        n = Object(o.ref)(null),
                        l = Object(o.ref)(null);

                    function c() {
                        new IntersectionObserver((function(t) {
                            t.forEach((function(t) {
                                t._;
                                t.isIntersecting && (r.value = "fromCLI")
                            }))
                        }), {
                            root: n.value
                        }).observe(l)
                    }
                    return Object(o.onMounted)((function() {
                        l = e.refs.codeBlock, n = e.refs.anim, c()
                    })), {
                        activeCodeBlock: r,
                        anim: n,
                        animationObserver: c
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    ref: "anim"
                }, [r("ul", {
                    staticClass: "flex"
                }, [r("li", [r("AppButton", {
                    attrs: {
                        "button-class": "relative mr-8 text-lg font-bold"
                    },
                    nativeOn: {
                        click: function(e) {
                            t.activeCodeBlock = "fromCLI"
                        }
                    }
                }, [t._v("\n        " + t._s(t.$t("home.cli")) + "\n        "), "fromCLI" === t.activeCodeBlock ? r("span", {
                    staticClass: "absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3"
                }) : t._e()])], 1), t._v(" "), r("li", [r("AppButton", {
                    attrs: {
                        "button-class": "relative mr-8 text-lg font-bold"
                    },
                    nativeOn: {
                        click: function(e) {
                            t.activeCodeBlock = "fromScratch"
                        }
                    }
                }, [t._v("\n        " + t._s(t.$t("home.scratch")) + "\n        "), "fromScratch" === t.activeCodeBlock ? r("span", {
                    staticClass: "absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3"
                }) : t._e()])], 1)]), t._v(" "), r("div", {
                    staticClass: "mt-40 mb-40 lg:mt-0 lg:mb-0 w-full",
                    style: {
                        height: "300px"
                    }
                }, [r("div", {
                    ref: "codeBlock",
                    staticClass: "relative"
                }, [r("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, ["fromCLI" === t.activeCodeBlock ? r("AnimFromCliCodeblock") : t._e()], 1), t._v(" "), r("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, ["fromScratch" === t.activeCodeBlock ? r("AnimFromScratchCodeblock") : t._e()], 1)], 1)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppButton: r(43).default,
            AnimFromCliCodeblock: r(315).default,
            AnimFromScratchCodeblock: r(316).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
                props: {
                    services: {
                        type: Array,
                        default: function() {
                            return []
                        },
                        required: !0
                    }
                }
            },
            n = r(0),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ul", {
                    staticClass: "flex flex-wrap"
                }, t._l(t.services, (function(e, o) {
                    return r("li", {
                        key: o,
                        staticClass: "bg-cloud-surface dark:bg-sky-dark rounded-md px-4 py-2 mt-2 mr-2"
                    }, [t._v("\n    " + t._s(e) + "\n  ")])
                })), 0)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    tier: {
                        type: String,
                        required: !0
                    },
                    sponsors: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("h2", {
                    staticClass: "font-semibold text-lg mb-4"
                }, [t._v(t._s(t.tier))]), t._v(" "), r("div", {
                    staticClass: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                }, t._l(t.sponsors, (function(t) {
                    return r("AppLink", {
                        key: t.title,
                        attrs: {
                            href: t.url,
                            "aria-label": t.title
                        }
                    }, [r("SustainabilityCard", {
                        attrs: {
                            sponsor: t
                        }
                    })], 1)
                })), 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            SustainabilityCard: r(252).default,
            AppLink: r(38).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(60), r(24);
        var o = {
                props: {
                    value: {
                        type: [String, Number],
                        default: ""
                    },
                    placeholder: {
                        type: String,
                        default: null
                    },
                    required: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    rows: {
                        type: [String, Number],
                        default: 3
                    },
                    autocomplete: {
                        type: String,
                        default: null
                    },
                    appearance: {
                        type: String,
                        default: "default",
                        validator: function(t) {
                            return ["default", "transparent"].includes(t)
                        }
                    },
                    size: {
                        type: String,
                        default: "md",
                        validator: function(t) {
                            return ["", "xxs", "xs", "sm", "md", "lg", "xl"].includes(t)
                        }
                    },
                    baseClass: {
                        type: String,
                        default: "p-2 w-full rounded-md appearance-none"
                    },
                    customClass: {
                        type: String,
                        default: null
                    },
                    noResize: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    sizeClass: function() {
                        return {
                            xxs: "text-xs",
                            xs: "text-xs",
                            sm: "text-sm leading-4",
                            md: "text-sm",
                            lg: "text-base",
                            xl: "text-base"
                        }[this.size]
                    },
                    paddingClass: function() {
                        return {
                            xxs: "px-1 py-0.5",
                            xs: "px-2.5 py-1.5",
                            sm: "px-3 py-2",
                            md: "px-4 py-2",
                            lg: "px-4 py-2",
                            xl: "px-6 py-3"
                        }[this.size]
                    },
                    appearanceClass: function() {
                        return {
                            default: "light:text-gray-500 dark:text-white dark:bg-transparent light:bg-white border light:border-gray-200 dark:border-secondary-dark focus:outline-none light:focus:border-gray-400 dark:focus:border-secondary-light",
                            transparent: "bg-transparent border-none outline-none"
                        }[this.appearance]
                    },
                    resizeClass: function() {
                        return {
                            true: "resize-none",
                            false: ""
                        }[this.noResize]
                    },
                    textareaClass: function() {
                        return [this.baseClass, this.customClass, this.sizeClass, this.paddingClass, this.resizeClass, this.appearanceClass].join(" ")
                    }
                },
                watch: {
                    value: function() {
                        this.resizeTextarea()
                    }
                },
                mounted: function() {
                    this.resizeTextarea()
                },
                methods: {
                    resizeTextarea: function() {
                        var t = this;
                        this.$nextTick((function() {
                            var textarea = t.$refs.textarea;
                            textarea.style.height = "auto", textarea.style.height = "".concat(textarea.scrollHeight, "px")
                        }))
                    },
                    updateValue: function(t) {
                        this.$emit("input", t)
                    }
                }
            },
            n = r(0),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("textarea", {
                    ref: "textarea",
                    class: t.textareaClass,
                    attrs: {
                        rows: t.rows,
                        required: t.required,
                        disabled: t.disabled,
                        placeholder: t.placeholder,
                        autocomplete: t.autocomplete
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: function(e) {
                            return t.updateValue(e.target.value)
                        }
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "group flex items-center delay-200 h-10 bg-primary text-black"
                }, [r("p", {
                    staticClass: "sm:top-1.5 w-full pl-4 sm:pl-0 sm:text-center text-sm font-medium"
                }, [t._v("\n    You are browsing Nuxt 2 docs. Go to "), r("a", {
                    staticClass: "font-bold hover:underline",
                    attrs: {
                        href: "https://nuxt.com"
                    }
                }, [t._v("Nuxt 3 docs")]), t._v(",\n    or learn more about "), r("nuxt-link", {
                    staticClass: "font-bold hover:underline",
                    attrs: {
                        to: "/lts"
                    }
                }, [t._v("Nuxt 2 Long Term Support")]), t._v(".\n  ")], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }
                }, [e("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 324 324",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M181.767 270H302.211C306.037 270 309.795 269.003 313.108 267.107C316.421 265.211 319.172 262.484 321.084 259.2C322.996 255.915 324.002 252.19 324 248.399C323.998 244.607 322.989 240.883 321.074 237.601L240.187 98.7439C238.275 95.4607 235.525 92.7342 232.213 90.8385C228.901 88.9429 225.143 87.9449 221.318 87.9449C217.494 87.9449 213.736 88.9429 210.424 90.8385C207.112 92.7342 204.361 95.4607 202.449 98.7439L181.767 134.272L141.329 64.7975C139.416 61.5145 136.664 58.7884 133.351 56.8931C130.038 54.9978 126.28 54 122.454 54C118.629 54 114.871 54.9978 111.558 56.8931C108.245 58.7884 105.493 61.5145 103.58 64.7975L2.92554 237.601C1.01067 240.883 0.00166657 244.607 2.06272e-06 248.399C-0.00166244 252.19 1.00407 255.915 2.91605 259.2C4.82803 262.484 7.57884 265.211 10.8918 267.107C14.2047 269.003 17.963 270 21.7886 270H97.3936C127.349 270 149.44 256.959 164.641 231.517L201.546 168.172L221.313 134.272L280.637 236.1H201.546L181.767 270ZM96.1611 236.065L43.3984 236.054L122.49 100.291L161.953 168.172L135.531 213.543C125.436 230.051 113.968 236.065 96.1611 236.065Z",
                        fill: "#00DC82"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    attrs: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z",
                        stroke: "currentColor",
                        "stroke-width": "1.49375",
                        "stroke-linejoin": "round"
                    }
                }), t._v(" "), r("path", {
                    attrs: {
                        d: "M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6",
                        stroke: "currentColor",
                        "stroke-width": "1.49375",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("aside", [e("AdsBlock")], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AdsBlock: r(302).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("article", {
                    staticClass: "mt-4"
                }, [t.$store.state.adBlocked ? r("AdsFallback") : r("AdsCarbon", {
                    key: t.$route.params.slug
                })], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AdsFallback: r(303).default,
            AdsCarbon: r(271).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(819);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "nui-support-nuxt"
                }, [r("div", [r("p", {
                    staticClass: "pt-2 m-0 font-bold sm:text-sm d-text-primary"
                }, [t._v(t._s(t.$t("sidebar.ads.fallback.title")))]), t._v(" "), r("p", {
                    staticClass: "pb-2 m-0 leading-normal text-gray-600 dark:text-white sm:text-xs"
                }, [t._v("\n      " + t._s(t.$t("sidebar.ads.fallback.description")) + "\n    ")])])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("div")
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                        "clip-rule": "evenodd"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 20 20",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M6.75 0H9.25C9.66562 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42188 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M24 12a12 12 0 10-13.876 11.852v-8.384H7.078V12h3.047V9.356c0-3.007 1.791-4.668 4.532-4.668a18.453 18.453 0 012.686.234v2.952h-1.514a1.734 1.734 0 00-1.955 1.874V12H17.2l-.532 3.469h-2.8v8.385A12 12 0 0024 12z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "15",
                        height: "16",
                        viewBox: "0 0 15 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.3202 13.0704H10.1858V9.72805C10.1858 8.93205 10.1722 7.90645 9.0762 7.90645C7.9642 7.90645 7.7954 8.77525 7.7954 9.67205V13.0704H5.661V6.19845H7.7082V7.13765H7.7378C8.0226 6.59765 8.7194 6.02805 9.7586 6.02805C11.921 6.02805 12.321 7.45045 12.321 9.30165V13.0704H12.3202ZM3.2538 5.26005C3.09118 5.26021 2.93011 5.22833 2.7798 5.16624C2.62949 5.10415 2.49288 5.01306 2.37777 4.89818C2.26266 4.78329 2.17131 4.64686 2.10893 4.49667C2.04655 4.34648 2.01436 4.18548 2.0142 4.02285C2.01405 3.86022 2.04592 3.69915 2.10801 3.54884C2.1701 3.39853 2.26119 3.26192 2.37608 3.14682C2.49096 3.03171 2.62739 2.94036 2.77758 2.87798C2.92777 2.81559 3.08878 2.78341 3.2514 2.78325C3.57985 2.78293 3.89497 2.9131 4.12744 3.14512C4.35991 3.37714 4.49069 3.692 4.491 4.02045C4.49132 4.34889 4.36115 4.66401 4.12913 4.89648C3.89711 5.12895 3.58225 5.25973 3.2538 5.26005ZM2.1842 13.0704H4.3218V6.19845H2.1834V13.0704H2.1842ZM13.3842 0.800049H1.1122C0.525805 0.800049 0.0498047 1.26485 0.0498047 1.83845V14.1608C0.0498047 14.7344 0.525805 15.2 1.1122 15.2H13.3842C13.9714 15.2 14.4498 14.7344 14.4498 14.1608V1.83845C14.4498 1.26485 13.9714 0.800049 13.3842 0.800049Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "h-5 w-5",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "h-5 w-5",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "flex"
                }, [r("span", [t._v("$ ")]), r("span", {
                    staticClass: "fromcli__yarn__createnuxtapp"
                }, [t._v("npx\n            "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("create-nuxt-app")]), t._v("\n            project-name")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromcli__progressbars__install"
                }, [r("div", {
                    staticClass: "fromcli__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromcli__progressbar"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question1"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Project name :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("My project")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question2"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Programming language :\n          "), r("span", {
                    staticClass: "fromcli__question2__answer"
                }, [t._v("Javascript")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question3"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Package manager :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Yarn")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question4"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" UI Framework :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Tailwind CSS")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question5"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Nuxt modules :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Axios")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question6"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Testing Framework :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Jest")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question7"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Rendering mode :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Universal (SSR / SSG)")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "fromcli__question8"
                }, [r("span", {
                    staticClass: "text-primary"
                }, [t._v("? ")]), t._v(" Deployment target :\n          "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("Server")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromcli__progressbars__compilation"
                }, [r("div", {
                    staticClass: "fromcli__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromcli__progressbar"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "flex"
                }, [r("span", {
                    staticClass: "fromcli__seconddollar"
                }, [t._v("$ ")]), r("span", {
                    staticClass: "fromcli__yarn__cd"
                }, [t._v("cd "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("My Project")])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "flex"
                }, [r("span", {
                    staticClass: "fromcli__thirddollar"
                }, [t._v("$ ")]), r("span", {
                    staticClass: "fromcli__yarn__run"
                }, [t._v("yarn run "), r("span", {
                    staticClass: "text-primary"
                }, [t._v("dev")])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromcli__code__ide__head"
                }, [r("div", {
                    staticClass: "fromcli__code__ide__head__circles"
                }, [r("span", {
                    staticClass: "fromcli__code__ide__head__circles__circle"
                }), t._v(" "), r("span", {
                    staticClass: "fromcli__code__ide__head__circles__circle"
                }), t._v(" "), r("span", {
                    staticClass: "fromcli__code__ide__head__circles__circle"
                })]), t._v(" "), r("p", {
                    staticClass: "fromcli__code__ide__head__file"
                }, [t._v("index.vue")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromcli__code__ide__side"
                }, [r("span", [t._v("1")]), t._v(" "), r("span", [t._v("2")]), t._v(" "), r("span", [t._v("3")]), t._v(" "), r("span", [t._v("4")]), t._v(" "), r("span", [t._v("5")]), t._v(" "), r("span", [t._v("6")]), t._v(" "), r("span", [t._v("7")]), t._v(" "), r("span", [t._v("8")]), t._v(" "), r("span", [t._v("9")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("div")]), r("span", [t._v(">")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("Logo")]), r("span", [t._v("/>")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("NuxtCard")]), r("span", [t._v("/>")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("NuxtCard")]), r("span", [t._v("/>")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("AlertBanner")]), r("span", [t._v("/>")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", [r("span", [t._v("</")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("div")]), r("span", [t._v(">")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "fromcli__display"
                }, [o("div", {
                    staticClass: "fromcli__display_loading"
                }, [o("img", {
                    staticClass: "fromcli__display__logo",
                    attrs: {
                        loading: "lazy",
                        src: r(253)
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fromcli__display__progressbar"
                }, [o("div", {
                    staticClass: "fromcli__display__progressbar__background"
                }), t._v(" "), o("div", {
                    staticClass: "fromcli__display__progressbar__progress"
                })])]), t._v(" "), o("div", {
                    staticClass: "fromcli__display__content"
                }, [o("img", {
                    staticClass: "fromcli__display__content__logo",
                    attrs: {
                        loading: "lazy",
                        src: r(253)
                    }
                }), t._v(" "), o("img", {
                    staticClass: "fromcli__display__content__content1",
                    attrs: {
                        loading: "lazy",
                        src: r(854)
                    }
                }), t._v(" "), o("img", {
                    staticClass: "fromcli__display__content__content2",
                    attrs: {
                        loading: "lazy",
                        src: r(855)
                    }
                })])])
            }],
            n = (r(856), r(0)),
            component = Object(n.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromcli__container"
                }, [r("div", {
                    staticClass: "fromcli__code"
                }, [r("div", {
                    staticClass: "fromcli__code__wrapper"
                }, [r("div", {
                    staticClass: "fromcli__code__bash"
                }, [t._m(0), t._v(" "), r("p", {
                    staticClass: "fromcli__loading"
                }, [t._v("> Loading...")]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), r("p", {
                    staticClass: "fromcli__question2__answer1"
                }, [t._v("> Javascript")]), t._v(" "), r("p", {
                    staticClass: "fromcli__question2__answer2"
                }, [t._v("  Typescript")]), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7), t._v(" "), t._m(8), t._v(" "), t._m(9), t._v(" "), t._m(10), t._v(" "), r("p", {
                    staticClass: "flex items-center fromcli__installed"
                }, [r("IconCheck", {
                    staticClass: "mr-2 nui-icon-md text-primary w-4 h-4"
                }), t._v("\n          installed\n        ")], 1), t._v(" "), t._m(11), t._v(" "), t._m(12)]), t._v(" "), r("div", {
                    staticClass: "fromcli__code__ide"
                }, [t._m(13), t._v(" "), t._m(14), t._v(" "), r("div", {
                    staticClass: "fromcli__code__ide__content"
                }, [r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v(t._s("template"))]), r("span", [t._v(">")])]), t._v(" "), t._m(15), t._v(" "), t._m(16), t._v(" "), t._m(17), t._v(" "), t._m(18), t._v(" "), t._m(19), t._v(" "), t._m(20), t._v(" "), r("p", [r("span", [t._v("<")]), t._v("/"), r("span", {
                    staticClass: "text-red-400"
                }, [t._v(t._s("template"))]), r("span", [t._v(">")])])])])])]), t._v(" "), t._m(21)])
            }), o, !1, null, "6986e173", null);
        e.default = component.exports;
        installComponents(component, {
            IconCheck: r(102).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "flex"
                }, [r("span", [t._v("$ ")]), r("span", {
                    staticClass: "fromscratch__yarn__addnuxt"
                }, [t._v("yarn add "), r("span", {
                    staticClass: "text-green"
                }, [t._v("nuxt")])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromscratch__progressbars__install"
                }, [r("div", {
                    staticClass: "fromscratch__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromscratch__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromscratch__progressbar"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("p", {
                    staticClass: "flex"
                }, [r("span", {
                    staticClass: "fromscratch__seconddollar"
                }, [t._v("$ ")]), r("span", {
                    staticClass: "fromscratch__yarn__rundev"
                }, [t._v("yarn run dev")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromscratch__progressbars__dev"
                }, [r("div", {
                    staticClass: "fromscratch__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromscratch__progressbar"
                }), t._v(" "), r("div", {
                    staticClass: "fromscratch__progressbar"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromscratch__code__ide"
                }, [r("div", {
                    staticClass: "fromscratch__code__ide__head"
                }, [r("div", {
                    staticClass: "fromscratch__code__ide__head__circles"
                }, [r("span", {
                    staticClass: "fromscratch__code__ide__head__circles__circle"
                }), t._v(" "), r("span", {
                    staticClass: "fromscratch__code__ide__head__circles__circle"
                }), t._v(" "), r("span", {
                    staticClass: "fromscratch__code__ide__head__circles__circle"
                })]), t._v(" "), r("p", {
                    staticClass: "fromscratch__code__ide__head__file"
                }, [t._v("index.vue")])]), t._v(" "), r("div", {
                    staticClass: "fromscratch__code__ide__side"
                }, [r("span", [t._v("1")]), t._v(" "), r("span", [t._v("2")]), t._v(" "), r("span", [t._v("3")]), t._v(" "), r("span", [t._v("4")]), t._v(" "), r("span", [t._v("5")]), t._v(" "), r("span", [t._v("6")])]), t._v(" "), r("div", {
                    staticClass: "fromscratch__code__ide__content"
                }, [r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("template")]), r("span", [t._v(">")])]), t._v(" "), r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("div")]), r("span", [t._v(">")])]), t._v(" "), r("p", [r("span", [t._v("<")]), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("Sidebar")]), r("span", [t._v("/>")])]), t._v(" "), r("p", [r("span", [t._v("<")]), t._v(" "), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("h1")]), t._v(" "), r("span", [t._v(">")]), t._v("Hello world !"), r("span", [t._v("<")]), t._v("/"), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("h1")]), t._v(" "), r("span", [t._v(">")])]), t._v(" "), r("p", [r("span", [t._v("<")]), t._v("/"), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("div")]), r("span", [t._v(">")])]), t._v(" "), r("p", [r("span", [t._v("<")]), t._v("/"), r("span", {
                    staticClass: "text-red-400"
                }, [t._v("template")]), r("span", [t._v(">")])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "fromscratch__display"
                }, [o("div", {
                    staticClass: "fromscratch__display_loading"
                }, [o("img", {
                    staticClass: "fromscratch__display__logo",
                    attrs: {
                        loading: "lazy",
                        src: r(253)
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fromscratch__display__progressbar"
                }, [o("div", {
                    staticClass: "fromscratch__display__progressbar__background"
                }), t._v(" "), o("div", {
                    staticClass: "fromscratch__display__progressbar__progress"
                })])]), t._v(" "), o("div", {
                    staticClass: "fromscratch__display__content"
                }, [o("img", {
                    attrs: {
                        loading: "lazy",
                        src: r(858)
                    }
                }), t._v(" "), o("p", [t._v("Hello world !")])])])
            }],
            n = (r(859), r(0)),
            component = Object(n.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fromscratch__container"
                }, [r("div", {
                    staticClass: "fromscratch__code"
                }, [r("div", {
                    staticClass: "fromscratch__code__wrapper"
                }, [r("div", {
                    staticClass: "fromscratch__code__bash"
                }, [t._m(0), t._v(" "), r("p", {
                    staticClass: "fromscratch__loading"
                }, [t._v("> Loading...")]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), r("p", {
                    staticClass: "flex items-center fromscratch__compiled"
                }, [r("IconCheck", {
                    staticClass: "mr-2 nui-icon-md text-green w-4 h-4"
                }), t._v("\n          compiled\n        ")], 1)]), t._v(" "), t._m(4)])]), t._v(" "), t._m(5)])
            }), o, !1, null, "b7d867b6", null);
        e.default = component.exports;
        installComponents(component, {
            IconCheck: r(102).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("AppButton", {
                    attrs: {
                        to: "mailto:partners@nuxtlabs.com",
                        "extra-class": "gap-2 px-4 app-button-secondary-color",
                        icon: "IconStar",
                        size: "large"
                    }
                }, [t._v("\n  " + t._s(t.$t("partners.become_partner")) + "\n")])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AppButton: r(43).default
        })
    }, , , , , , , , , , function(t, e, r) {
        "use strict";
        var o = r(4),
            n = r(676);
        o.default.use(n.a, {
            breakpoints: {
                xs: 640,
                sm: 768,
                md: 1024,
                lg: 1280,
                xl: 1 / 0
            },
            defaultBreakpoint: "lg"
        })
    }, function(t, e, r) {
        "use strict";
        e.a = function() {
            function t() {
                dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [], t("js", new Date), t("config", "G-R6EZ8X9DGS"),
                function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    "complete" === document.readyState ? setTimeout((function() {
                        return t()
                    }), e) : window.addEventListener("load", (function() {
                        setTimeout((function() {
                            return t()
                        }), e)
                    }))
                }((function() {
                    var script = document.createElement("script");
                    script.src = "https://www.googletagmanager.com/gtag/js?id=G-R6EZ8X9DGS", script.async = !0, document.head.appendChild(script)
                }))
        }
    }, function(t, e, r) {
        "use strict";
        var o = r(3);
        r(14);
        e.a = function(t) {
            var e = t.store;
            window.onNuxtReady(Object(o.a)(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, fetch("https://cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg", {
                                method: "HEAD",
                                mode: "no-cors"
                            }).then((function() {
                                return !1
                            })).catch((function() {
                                return !0
                            }));
                        case 2:
                            if (!t.sent) {
                                t.next = 4;
                                break
                            }
                            e.commit("setAdBlocked", !0);
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))))
        }
    }, function(t, e, r) {
        "use strict";
        var o = r(126);
        e.a = function(t, e) {
            var r = t.$t,
                n = Object(o.useNotifications)().add;
            e("clipboard", {
                copy: function(text, t, e) {
                    return !!navigator.clipboard && (navigator.clipboard.writeText(text).then((function() {
                        n({
                            type: "success",
                            title: t || r("common.copied"),
                            timer: 3e3
                        })
                    }), (function() {
                        n({
                            type: "error",
                            title: e || r("common.an_error_occurred"),
                            timer: 3e3
                        })
                    })), !0)
                }
            })
        }
    }, function(t, e, r) {
        "use strict";
        var o = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(r(4)),
            l = o(r(889));
        n.default.use(l.default)
    }, , function(t, e, r) {
        "use strict";
        r(3), r(14), r(60);
        var o = r(1);
        r(56), Object(o.ssrRef)([], "showcasesRef")
    }, function(t, e, r) {
        "use strict";

        function o(t, e) {
            var r, o, n = e;
            this.pause = function() {
                window.clearTimeout(r), n -= new Date - o
            }, this.resume = function() {
                o = new Date, window.clearTimeout(r), r = window.setTimeout(t, n)
            }, this.reset = function() {
                o = new Date, window.clearTimeout(r), r = window.setTimeout(t, e)
            }, this.stop = function() {
                window.clearTimeout(r)
            }, this.resume()
        }

        function n(t, e) {
            var r;
            this.start = function() {
                r = window.setInterval(t, e)
            }, this.stop = function() {
                window.clearInterval(r)
            }, this.start()
        }
        e.a = function(t, e) {
            e("timer", o), e("ticker", n)
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "py-1 px-2 rounded-md w-full",
                    class: t.isHome ? "hover:bg-sky-black" : "hover:dark:bg-sky-black hover:bg-cloud-lightest"
                }, [r("div", {
                    staticClass: "flex space-x-2 items-center"
                }, [r("div", {
                    staticClass: "rounded-md w-8 h-8 p-2",
                    class: t.colorClass
                }, [r("img", {
                    attrs: {
                        src: "/img/header/" + t.icon,
                        alt: t.title
                    }
                })]), t._v(" "), r("div", [t.isExternal ? r("IconExternalLink", {
                    staticClass: "icon w-2 absolute right-4"
                }) : t._e(), t._v(" "), r("h5", {
                    staticClass: "font-bold text-sm"
                }, [t._v(t._s(t.title))]), t._v(" "), r("p", {
                    staticClass: "text-xs"
                }, [t._v(t._s(t.subtitle))])], 1)])])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("Component", t._b({
                    class: t.buttonClass ? t.buttonClass : ["app-button", t.extraClass, t.size]
                }, "Component", t.buttonProps, !1), [t.icon ? r(t.icon, {
                    tag: "Component",
                    staticClass: "mr-2 icon",
                    class: t.size
                }) : t._e(), t._v(" "), r("Markdown", {
                    attrs: {
                        unwrap: "p"
                    }
                }), t._v(" "), t.externalIcon ? r("IconExternalLink", {
                    staticClass: "ml-2 icon",
                    class: t.size
                }) : t._e()], 1)
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "fixed bottom-0 right-0 flex flex-col justify-end w-full z-50 sm:w-96"
                }, [t.notifications.length ? r("div", {
                    staticClass: "px-4 py-6 space-y-3 overflow-y-auto sm:px-6 lg:px-8"
                }, t._l(t.notifications, (function(e, o) {
                    return r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: o === t.notifications.length - 1,
                            expression: "index === notifications.length - 1"
                        }],
                        key: e.id
                    }, [r("Notification", t._b({
                        class: e.click && "cursor-pointer",
                        on: {
                            close: function(r) {
                                return t.remove(e.id)
                            }
                        },
                        nativeOn: {
                            click: function(t) {
                                e.click && e.click(e)
                            }
                        }
                    }, "Notification", e, !1))], 1)
                })), 0) : t._e()])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "notification-container",
                    class: t.isHome ? "ring-sky-dark bg-sky-darkest" : "ring-gray-200 dark:ring-sky-dark bg-white dark:bg-sky-darkest",
                    on: {
                        mouseover: t.onMouseover,
                        mouseout: t.onMouseout
                    }
                }, [r("div", {
                    staticClass: "p-4 flex"
                }, [r(t.iconName, {
                    tag: "Component",
                    staticClass: "w-6 h-6",
                    class: t.iconColorClass
                }), t._v(" "), r("div", {
                    staticClass: "ml-3 flex-1 pt-0.5"
                }, [r("p", {
                    staticClass: "text-sm font-medium leading-5",
                    class: t.isHome ? "text-white" : "text-sky-black dark:text-white"
                }, [t._v("\n        " + t._s(t.title) + "\n      ")]), t._v(" "), t.description ? r("p", {
                    staticClass: "mt-1 text-sm leading-5",
                    class: t.isHome ? "text-gray-400" : "text-gray-600 dark:text-gray-400"
                }, [t._v("\n        " + t._s(t.description) + "\n      ")]) : t._e()]), t._v(" "), r("button", {
                    staticClass: "ml-4 self-start focus:outline-none hover:text-gray-500 focus:text-gray-500",
                    class: t.isHome ? "text-gray-400" : "text-gray-600 dark:text-gray-400",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.close.apply(null, arguments)
                        }
                    }
                }, [r("IconClose", {
                    staticClass: "w-5 h-5"
                })], 1)], 1), t._v(" "), t.timeout ? r("div", {
                    staticClass: "absolute bottom-0 left-0 right-0"
                }, [r("div", {
                    staticClass: "h-1",
                    class: t.progressBarColorClass,
                    style: t.progressBarStyle
                })]) : t._e()])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("aside", {
                    staticClass: "fixed z-50 lg:z-0 lg:static"
                }, [r("div", {
                    staticClass: "h-full overflow-auto pointer-events-none lg:overflow-visible"
                }, [r("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.$menu.visible.value ? r("div", {
                    staticClass: "fixed top-0 left-0 z-0 w-full h-full pointer-events-auto d-blur-header lg:hidden",
                    class: t.isHome ? "d-bg-header-home" : "d-bg-header",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$menu.toggle.apply(null, arguments)
                        }
                    }
                }) : t._e()]), t._v(" "), r("div", {
                    staticClass: "\n        hidden\n        lg:block\n        fixed\n        top-0\n        left-0\n        overflow-auto\n        pointer-events-auto\n        min-h-fill-available\n        h-screen\n        sticky\n        top-header\n        w-60\n      "
                }, [r("div", {
                    staticClass: "w-auto h-full overflow-auto"
                }, [r("AsideNavigation")], 1)]), t._v(" "), r("Transition", {
                    attrs: {
                        name: "slide-from-left-to-left"
                    }
                }, [r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.$menu.visible.value,
                        expression: "$menu.visible.value"
                    }],
                    staticClass: "\n          lg:hidden\n          fixed\n          top-0\n          left-0\n          w-auto\n          h-full\n          overflow-auto\n          pointer-events-auto\n          min-h-fill-available\n          border-r\n          !w-base\n        ",
                    class: t.isHome ? "border-sky-darker" : "d-border"
                }, [r("div", {
                    staticClass: "w-auto h-full overflow-auto",
                    class: t.isHome ? "d-bg-header-home" : "d-bg-header"
                }, [r("div", {
                    staticClass: "flex items-center justify-between w-full px-0.5 sm:px-2 h-header d-aside-header-bg",
                    class: t.isHome ? "d-aside-header-home-bg" : "d-aside-header-bg"
                }, [r("button", {
                    staticClass: "transition-colors duration-200 focus:outline-none",
                    class: t.isHome ? "text-gray-300 hover:text-white" : "d-secondary-text hover:d-secondary-text-hover",
                    attrs: {
                        "aria-label": "backButton"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.mobileBack.apply(null, arguments)
                        }
                    }
                }, [!t.mobileMainNav && t.layout.aside ? r("IconArrowLeft", {
                    staticClass: "p-3 w-12 h-12"
                }) : r("IconClose", {
                    staticClass: "p-3 w-12 h-12"
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex items-center h-header space-x-2"
                }, [r("LangSwitcher", {
                    class: {
                        "text-white": t.isHome
                    },
                    attrs: {
                        "icon-class": "w-6 h-6 m-auto " + (t.isHome ? "text-gray-300 hover:text-primary-400" : "d-secondary-text hover:d-secondary-text-hover"),
                        strategy: "fixed"
                    }
                }), t._v(" "), t.isHome ? t._e() : r("ColorSwitcher")], 1)]), t._v(" "), !t.mobileMainNav && t.layout.aside ? r("AsideNavigation") : r("AsideHeaderNavigation", {
                    attrs: {
                        links: t.links
                    }
                })], 1)])])], 1)])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("nav", {
                    staticClass: "\n    flex flex-col\n    justify-start\n    max-w-sm\n    overflow-y-auto\n    text-sm\n    font-medium\n    lg:h-[reset]\n    h-(full-header)\n    d-scrollbar\n    py-4\n    px-4\n    sm:px-6\n    lg:pr-0 lg:pt-8\n  "
                }, [r("NuxtLink", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.parent,
                        expression: "parent"
                    }],
                    staticClass: "mb-3 block",
                    attrs: {
                        to: t.parent && t.$contentLocalePath(t.parent.to) || ""
                    }
                }, [r("IconArrowLeft", {
                    staticClass: "inline-block mr-2",
                    attrs: {
                        width: "16",
                        height: "16"
                    }
                }), t._v(" " + t._s(t.parent && t.parent.title) + "\n  ")], 1), t._v(" "), r("ul", [t._l(t.links, (function(link) {
                    return [!1 !== link.nested && link.children.length ? r("AsideNavigationItem", {
                        key: link.to,
                        attrs: {
                            title: link.title,
                            docs: link.children,
                            collapse: link.collapse
                        },
                        on: {
                            "update:collapse": function(e) {
                                return t.$set(link, "collapse", e)
                            }
                        }
                    }) : r("AsideNavigationItem", {
                        key: link.to,
                        attrs: {
                            docs: [link]
                        }
                    })]
                }))], 2), t._v(" "), r("AsideBottom")], 1)
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "ListCard group"
                }, [t.item.to || t.item.link ? [t.item.link ? r("div", {
                    staticClass: "ListCard-external group-hover:opacity-100"
                }, [t._t("external", (function() {
                    return [r("NuxtImg", {
                        attrs: {
                            alt: "external_link",
                            src: "/img/icons/ext.svg"
                        }
                    })]
                }))], 2) : t._e(), t._v(" "), r("AppLink", {
                    staticClass: "absolute inset-0",
                    attrs: {
                        to: t.item.to || t.item.link,
                        "aria-label": t.item.title
                    }
                })] : t._e(), t._v(" "), r("div", {
                    staticClass: "ListCard-body"
                }, [r("div", {
                    staticClass: "w-full flex flex-row justify-between"
                }, [t.item.logo && t.item.logo.dark ? r("NuxtImg", {
                    staticClass: "dark-img w-12 h-12 mr-4 rounded-md",
                    attrs: {
                        alt: t.item.title + " logo",
                        src: t.item.logo.dark
                    }
                }) : t._e(), t._v(" "), t.item.logo && t.item.logo.light ? r("NuxtImg", {
                    staticClass: "light-img w-12 h-12 mr-4 rounded-md",
                    attrs: {
                        alt: t.item.title + " logo",
                        src: t.item.logo.light
                    }
                }) : t._e(), t._v(" "), "string" == typeof t.item.logo ? r("NuxtImg", {
                    staticClass: "w-12 h-12 mr-4 rounded-md",
                    attrs: {
                        alt: t.item.title + " logo",
                        src: t.item.logo || ""
                    }
                }) : t._e(), t._v(" "), t.item.location ? r("span", {
                    staticClass: "text-cloud-lighter"
                }, [t._v(t._s(t.item.location))]) : t._e()], 1), t._v(" "), r("h3", {
                    staticClass: "font-bold text-xl py-2"
                }, [t._v(t._s(t.item.title || "Title"))]), t._v(" "), r("p", {
                    staticClass: "text-sm"
                }, [t._v(t._s(t.item.description || "Description"))])]), t._v(" "), t._t("footer")], 2)
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "group relative hover:bg-gray-50 hover:dark:bg-sky-darkest dark:bg-sky-darker rounded-md shadow-md h-64 lg:h-40 p-4 flex flex-col justify-between"
                }, [r("AppLink", {
                    staticClass: "absolute inset-0",
                    attrs: {
                        href: t.module.website,
                        "aria-label": t.module.website
                    }
                }), t._v(" "), r("div", {
                    staticClass: "transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 absolute top-4 right-4 cursor-pointer"
                }, [r("NuxtImg", {
                    attrs: {
                        alt: "external_link",
                        src: "/img/icons/ext.svg",
                        width: "24",
                        height: "24"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3"
                }, [r("img", {
                    staticClass: "w-10 h-10 mt-2 object-contain",
                    attrs: {
                        loading: "lazy",
                        src: t.iconUrl,
                        alt: t.module.name
                    }
                }), t._v(" "), r("div", {
                    staticClass: "flex flex-col space-y-1"
                }, [r("span", {
                    staticClass: "font-medium"
                }, [t._v(t._s(t.module.name))]), t._v(" "), r("div", {
                    staticClass: "max-h-20 text-sm overflow-y-auto"
                }, [t._v("\n        " + t._s(t.module.description) + "\n      ")])])]), t._v(" "), r("div", {
                    staticClass: "lg:flex lg:flex-row-reverse lg:gap-2 justify-between w-full z-0"
                }, [r("ul", {
                    staticClass: "flex lg:flex-shrink-0 space-x-1 pb-4 lg:pb-0"
                }, t._l(t.module.maintainers, (function(t) {
                    return r("li", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                content: t.name,
                                classes: ["bg-sky-darker dark:bg-white", "text-white dark:text-sky-darker", "px-2", "py-1", "rounded", "text-sm"]
                            },
                            expression: "{\n          content: maintainer.name,\n          classes: [\n            'bg-sky-darker dark:bg-white',\n            'text-white dark:text-sky-darker',\n            'px-2',\n            'py-1',\n            'rounded',\n            'text-sm'\n          ]\n        }"
                        }],
                        key: t.name
                    }, [r("AppLink", {
                        attrs: {
                            href: "https://github.com/" + t.github
                        }
                    }, [r("img", {
                        staticClass: "rounded-full w-6 h-6",
                        attrs: {
                            loading: "lazy",
                            src: t.avatar,
                            alt: t.name
                        }
                    })])], 1)
                })), 0), t._v(" "), r("div", {
                    staticClass: "flex flex-shrink items-center space-x-4 text-xs font-medium truncate"
                }, [r("AppLink", {
                    staticClass: "group flex space-x-2 items-center",
                    attrs: {
                        href: t.module.github
                    }
                }, [r("IconStar", {
                    staticClass: "text-sky-dark group-hover:text-sky-darker dark:text-cloud-surface dark:group-hover:text-white",
                    attrs: {
                        alt: "Star icon"
                    }
                }), t._v(" "), r("span", {
                    staticClass: "truncate pt-0.5"
                }, [t._v("\n          " + t._s(t.numberFormat(t.module.stars)) + "\n          " + t._s(t.$t(1 !== t.module.stars ? "common.stars" : "common.star")) + "\n        ")])], 1), t._v(" "), r("AppLink", {
                    staticClass: "group flex space-x-2 items-center truncate",
                    attrs: {
                        href: t.npmUrl
                    }
                }, [r("IconDownload", {
                    staticClass: "w-4 h-4 text-sky-dark group-hover:text-sky-darker dark:text-cloud-surface dark:group-hover:text-white",
                    attrs: {
                        alt: "Download icon"
                    }
                }), t._v(" "), r("span", {
                    staticClass: "truncate pt-0.5"
                }, [t._v("\n          " + t._s(t.numberFormat(t.module.downloads)) + "\n          " + t._s(t.$t(1 !== t.module.downloads ? "common.downloads" : "common.download")) + "\n        ")])], 1)], 1)])], 1)
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("li", {
                    staticClass: "w-full p-4 rounded-md shadow-lg dark:bg-sky-darker"
                }, [r("div", {
                    staticClass: "flex flex-col space-y-4 sm:flex-row sm:items-center justify-between xl:h-24"
                }, [r("div", {
                    staticClass: "flex flex-col sm:w-2/3 xl:flex-row justify-start items-start xl:items-center space-x-4"
                }, [r("img", {
                    staticClass: "h-20",
                    attrs: {
                        loading: "lazy",
                        src: "/img/support/" + t.image + ".svg"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "flex flex-col"
                }, [r("h2", {
                    staticClass: "text-xl lg:text-2xl font-medium"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "text-sm md:text-base sm:w-full"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1)])]), t._v(" "), r("div", {
                    staticClass: "pr-4 ml-4 sm:ml-0 py-2 sm:py-0"
                }, [r("AppButton", {
                    staticClass: "text-black bg-primary-500 hover:bg-primary-400 focus:ring-primary-600",
                    attrs: {
                        href: t.button.url
                    }
                }, [t._v("\n        " + t._s(t.button.text) + "\n      ")])], 1)])])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "p-4 dark:bg-sky-darker rounded-md shadow-lg flex space-x-4 items-center dark:text-white"
                }, [r("img", {
                    staticClass: "dark-img h-10 object-contain",
                    class: t.sponsor.size,
                    attrs: {
                        src: "/img/companies/square/dark/" + t.sponsor.img_square,
                        alt: t.sponsor.title,
                        loading: "lazy"
                    }
                }), t._v(" "), r("img", {
                    staticClass: "light-img h-10 object-contain",
                    class: t.sponsor.size,
                    attrs: {
                        src: "/img/companies/square/light/" + t.sponsor.img_square,
                        alt: t.sponsor.title,
                        loading: "lazy"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "flex w-3/4",
                    class: {
                        "justify-between items-center": t.sponsor.link
                    }
                }, [r("div", {
                    staticClass: "flex flex-col items-start"
                }, [r("span", {
                    staticClass: "font-medium"
                }, [t._v("\n        " + t._s(t.sponsor.title) + "\n      ")])]), t._v(" "), t.sponsor.link ? r("IconChevronRight", {
                    staticClass: "w-4 h-4"
                }) : t._e()], 1)])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "lg:sticky top-0 lg:left-0 h-full pointer-events-auto lg:h-screen lg:top-header lg:w-1/5"
                }, [r("div", {
                    staticClass: "w-auto h-full d-bg-header dark:lg:bg-transparent lg:bg-transparent"
                }, [r("nav", {
                    staticClass: "\n        flex\n        lg:flex-col\n        justify-between\n        lg:justify-start lg:max-w-sm\n        w-full\n        overflow-y-auto\n        text-sm\n        font-medium\n        lg:h-[reset]\n        h-(full-header)\n        d-scrollbar\n      "
                }, [r("div", {
                    staticClass: "py-4 pr-0"
                }, [r("ul", {
                    staticClass: "flex flex-wrap lg:flex-col"
                }, t._l(t.categories, (function(e) {
                    return r("li", {
                        key: e.name,
                        staticClass: "px-1"
                    }, [r("AppButton", {
                        class: {
                            "rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10": e.name === t.selectedCategory
                        },
                        attrs: {
                            "button-class": "py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"
                        },
                        nativeOn: {
                            click: function(r) {
                                return t.selectCategory(e.name)
                            }
                        }
                    }, [r("span", {
                        staticClass: "truncate max-w-48 font"
                    }, [t._v(t._s(e.name))]), t._v(" "), e.name === t.selectedCategory ? r("span", {
                        staticClass: "rounded-xl bg-white dark:bg-sky-darkest ml-2 px-2 py-0.5 text-xs"
                    }, [t._v("\n                " + t._s(e.count) + "\n              ")]) : t._e()])], 1)
                })), 0)])])])])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "d-container-content"
                }, [r("div", {
                    staticClass: "\n      w-full\n      flex-col flex\n      md:flex-row\n      space-y-8\n      pt-1\n      pl-4\n      md:pl-0 md:space-y-0\n      justify-between\n      md:border-b\n      border-b-sky-dark\n      mb-2\n    "
                }, [r("div", {
                    staticClass: "flex flex-row space-x-4 items-center justify-start"
                }, [r("IconSearch", {
                    staticClass: "text-sky-darker dark:text-white w-4 h-4",
                    attrs: {
                        alt: "Search Icon"
                    }
                }), t._v(" "), r("AppInput", {
                    directives: [{
                        name: "focus",
                        rawName: "v-focus"
                    }],
                    staticClass: "w-full md:w-md xl:w-4xl",
                    attrs: {
                        type: "search",
                        appearance: "transparent",
                        placeholder: t.$t("modules.search")
                    },
                    model: {
                        value: t.query,
                        callback: function(e) {
                            t.query = e
                        },
                        expression: "query"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex space-x-1 items-center"
                }, [r("span", [t._v(t._s(t.$t("modules.sort_by")))]), t._v(" "), r("NuxtSelectNative", {
                    staticClass: "ml-2",
                    attrs: {
                        options: t.sorts,
                        "border-class": ""
                    },
                    model: {
                        value: t.sortedBy,
                        callback: function(e) {
                            t.sortedBy = e
                        },
                        expression: "sortedBy"
                    }
                }), t._v(" "), r("button", {
                    staticClass: "focus:outline-none pl-3 pr-3 md:pr-0 py-3",
                    attrs: {
                        "aria-label": "reverseSortButton"
                    },
                    on: {
                        click: t.toggleOrderBy
                    }
                }, ["desc" === t.orderedBy ? r("IconSortDesc", {
                    staticClass: "text-sky-darker dark:text-white w-4 h-4",
                    attrs: {
                        alt: "Descending sort"
                    }
                }) : r("IconSortAsc", {
                    staticClass: "text-sky-darker dark:text-white w-4 h-4",
                    attrs: {
                        alt: "Ascending sort"
                    }
                })], 1)], 1)]), t._v(" "), r("div", {
                    staticClass: "lg:flex"
                }, [r("AsideModules", {
                    attrs: {
                        categories: t.categories,
                        modules: t.modules
                    }
                }), t._v(" "), r("div", {
                    staticClass: "\n        w-full\n        px-4\n        md:px-0\n        lg:w-4/5\n        min-w-0 min-h-0\n        lg:static lg:overflow-visible\n        mt-8\n        grid\n        md:grid-cols-2\n        gap-8\n        lg:ml-20\n        auto-rows-min\n      "
                }, [t._l(t.filteredModules, (function(t) {
                    return r("div", {
                        key: t.name
                    }, [r("ModulesCard", {
                        attrs: {
                            module: t
                        }
                    })], 1)
                })), t._v(" "), r("ObserverModules", {
                    on: {
                        intersect: t.loadModules
                    }
                })], 2)], 1)])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    ref: "root",
                    staticClass: "observer"
                })
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "py-4 d-container-content light:text-sky-darker dark:text-white mb-4"
                }, [r("div", {
                    staticClass: "flex space-x-4 items-center pb-4"
                }, [r("img", {
                    staticClass: "w-8 h-8",
                    attrs: {
                        src: "/img/partners/categories/" + t.icon,
                        alt: t.category
                    }
                }), t._v(" "), r("h2", {
                    staticClass: "font-semibold text-center text-display-6 relative",
                    attrs: {
                        id: t.category
                    }
                }, [r("Markdown", {
                    attrs: {
                        use: "category-title",
                        unwrap: "p"
                    }
                })], 1)]), t._v(" "), r("div", {
                    staticClass: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                }, t._l(t.partners, (function(e) {
                    return r("LogoCard", {
                        key: e.title,
                        attrs: {
                            item: e
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [r("PartnerServices", {
                                    staticClass: "text-sm mt-4",
                                    attrs: {
                                        services: e.services
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !0)
                    })
                })), 1)])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "d-container-content"
                }, [r("div", {
                    staticClass: "relative pt-24 pb-4 xl:pb-16"
                }, [r("img", {
                    staticClass: "w-32 h-32",
                    attrs: {
                        src: "/img/companies/square/" + t.icon,
                        alt: t.title,
                        loading: "lazy"
                    }
                }), t._v(" "), r("h1", {
                    staticClass: "py-8 text-display-5 font-bold"
                }, [t._v(t._s(t.title))])]), t._v(" "), r("div", {
                    staticClass: "flex flex-col-reverse xl:flex-row xl:justify-between"
                }, [r("p", {
                    staticClass: "text-md sm:text-lg w-full xl:w-3/4 pr-20"
                }, [t._v("\n      " + t._s(t.description) + "\n    ")]), t._v(" "), r("div", {
                    staticClass: "w-full xl:w-1/4 flex flex-col pb-12 xl:pl-12"
                }, [r("div", [r("span", {
                    staticClass: "font-semibold text-md"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.services")))]), t._v(" "), r("ul", {
                    staticClass: "flex flex-col sm:flex-row sm:space-x-4 mt-4 xl:space-x-0 xl:flex-col"
                }, t._l(t.services, (function(e, o) {
                    return r("li", {
                        key: o
                    }, [r("div", {
                        staticClass: "flex space-x-2"
                    }, [r("IconBadgeCheck", {
                        staticClass: "h-5 w-5 mt-0.5"
                    }), t._v(" "), r("span", [t._v(t._s(e))])], 1)])
                })), 0)]), t._v(" "), r("span", {
                    staticClass: "font-semibold text-md py-4"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.location")))]), t._v(" "), r("span", [t._v(t._s(t.location))])])]), t._v(" "), r("div", {
                    staticClass: "flex pt-16 space-x-4 text-sm"
                }, [r("AppButton", {
                    attrs: {
                        href: t.partnerContactUrl
                    }
                }, [t._v("\n      " + t._s(t.$t("sustainability.mvp_detail.contact_partner")) + "\n    ")]), t._v(" "), r("AppButton", {
                    attrs: {
                        href: t.websiteUrl,
                        size: "large",
                        "extra-class": "\n        bg-white\n        dark:bg-secondary-black\n        hover:light:bg-gray-50 hover:dark:bg-secondary-darkest\n        border\n        focus:outline-none\n      "
                    }
                }, [t._v("\n      " + t._s(t.$t("sustainability.mvp_detail.visit_website")) + "\n    ")])], 1)])
            },
            n = []
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return n
        }));
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("AppPage", {
                    staticClass: "d-container",
                    scopedSlots: t._u([{
                        key: "toc",
                        fn: function() {
                            return [t.page.body.hideToc ? t._e() : r("PageToc", {
                                attrs: {
                                    title: t.page.body.toc.title,
                                    toc: t.page.body.toc.links
                                }
                            })]
                        },
                        proxy: !0
                    }])
                }, [r("PageContent", {
                    attrs: {
                        page: t.page
                    },
                    scopedSlots: t._u([{
                        key: "mobile-toc",
                        fn: function() {
                            return [r("PageMobileToc", {
                                attrs: {
                                    title: t.page.body.toc.title,
                                    toc: t.page.body.toc.links
                                }
                            })]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), t.repoUrl ? r("EditOnGithub", {
                    attrs: {
                        page: t.page
                    }
                }) : t._e()], 1)
            },
            n = []
    }, , function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(17),
            n = (r(40), r(24), r(381), r(23), r(16), r(1)),
            l = (r(13), r(12), r(9), r(18), r(19), r(7)),
            c = r(56);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var f = Object(n.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)(),
                        r = e.app.i18n,
                        l = e.$recaptcha,
                        d = function(t) {
                            var e = Object(n.useContext)(),
                                r = e.$recaptcha,
                                o = e.$config.apiURL || "https://api.nuxtjs.org",
                                form = Object(n.reactive)({
                                    first_name: "",
                                    last_name: "",
                                    company_name: "",
                                    email: "",
                                    message: ""
                                }),
                                l = Object(n.ref)(null),
                                d = function(t, e) {
                                    Object(c.a)("".concat(o, "/api/partners/contact"), {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json"
                                        },
                                        body: m({
                                            partner_email: t,
                                            token: e
                                        }, form)
                                    }).then((function() {
                                        l.value = "success", setTimeout((function() {
                                            l.value = null
                                        }), 4e3), form.first_name = "", form.last_name = "", form.company_name = "", form.email = "", form.message = ""
                                    })).catch((function() {
                                        l.value = "failure", setTimeout((function() {
                                            l.value = null
                                        }), 4e3)
                                    }))
                                };
                            return {
                                validateForm: function() {
                                    r.execute("login").then((function(e) {
                                        d(t, e)
                                    })).catch((function() {
                                        l.value = "failure", setTimeout((function() {
                                            l.value = null
                                        }), 4e3)
                                    }))
                                },
                                result: l,
                                form: form
                            }
                        }(t.page.emailAddress),
                        f = d.validateForm,
                        v = d.result,
                        form = d.form,
                        h = Object(n.computed)((function() {
                            switch (v.value) {
                                case "success":
                                    return r.t("partners.contact_success");
                                case "failure":
                                    return r.t("common.an_error_occurred")
                            }
                            return ""
                        })),
                        w = Object(n.computed)((function() {
                            switch (v.value) {
                                case "success":
                                    return "bg-green-500 text-black";
                                case "failure":
                                    return "bg-red-500 text-white"
                            }
                            return ""
                        })),
                        y = Object(n.computed)((function() {
                            return t.page.link.includes("//") ? t.page.link.split("/")[2] : t.page.link.split("/")[0]
                        }));
                    return Object(n.onMounted)((function() {
                        return l.init().catch((function() {
                            return console.error("recaptcha error")
                        }))
                    })), Object(n.onBeforeUnmount)((function() {
                        return l.destroy()
                    })), {
                        websiteDomain: y,
                        customBackground: Object(n.computed)((function() {
                            if ("object" === Object(o.a)(t.page.color)) {
                                var e;
                                if (1 === (null === (e = t.page.color) || void 0 === e ? void 0 : e.length)) return "background-color: ".concat(t.page.color[0]);
                                var r = t.page.color.map((function(e, r) {
                                    return "".concat(e, " ").concat(Math.round(r / (t.page.color.length - 1) * 100), "%")
                                })).join(", ");
                                return "background: radial-gradient(100% 100% at 0% 0%, ".concat(r, ")")
                            }
                            return t.page.color ? "background-color: ".concat(t.page.color) : "background-color: #255461"
                        })),
                        form: form,
                        resultText: h,
                        resultStyle: w,
                        validateForm: f
                    }
                }
            }),
            v = (r(872), r(0)),
            component = Object(v.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", {
                    staticClass: "h-80 p-6 flex justify-center items-center bg-sky-darkest"
                }, [t.page.logoFull ? r("img", {
                    staticClass: "h-20",
                    attrs: {
                        loading: "lazy",
                        src: "" + t.page.logoFull,
                        alt: t.page.title
                    }
                }) : t._e()]), t._v(" "), r("div", {
                    staticClass: "d-container-content"
                }, [r("div", {
                    staticClass: "relative flex gap-8 -mt-6 sm:-mt-8 pb-8 xl:pb-16"
                }, [r("div", {
                    staticClass: "w-24 h-24 sm:w-32 sm:h-32 p-4 bg-cloud-surface dark:bg-sky-darker rounded-md flex"
                }, [r("img", {
                    staticClass: "light-img text-white",
                    attrs: {
                        src: "/img/companies/square/light/" + t.page.icon,
                        alt: t.page.title
                    }
                }), t._v(" "), r("img", {
                    staticClass: "dark-img text-white",
                    attrs: {
                        src: "/img/companies/square/dark/" + t.page.icon,
                        alt: t.page.title
                    }
                })]), t._v(" "), r("div", {
                    staticClass: "flex flex-col justify-end gap-1"
                }, [r("h1", {
                    staticClass: "text-display-5 sm:text-display-4 font-bold"
                }, [t._v(t._s(t.page.title))]), t._v(" "), r("AppLink", {
                    attrs: {
                        href: t.page.link,
                        rel: "noopener"
                    }
                }, [r("IconExternalLink", {
                    staticClass: "inline w-4 h-4 mr-1"
                }), t._v(" " + t._s(t.websiteDomain) + "\n        ")], 1)], 1)]), t._v(" "), r("div", {
                    staticClass: "flex flex-col-reverse gap-8 xl:gap-12 xl:flex-row xl:justify-between"
                }, [r("div", {
                    staticClass: "w-full xl:w-[70%]"
                }, [r("p", {
                    staticClass: "text-md sm:text-lg"
                }, [r("span", {
                    staticStyle: {
                        "white-space": "pre-wrap"
                    }
                }, [t._v(t._s(t.page.fullDescription))])]), t._v(" "), r("div", {
                    staticClass: "flex flex-col sm:flex-row w-full bg-cloud-surface dark:bg-sky-darker rounded-md mt-8 xl:mt-12 overflow-hidden"
                }, [r("div", {
                    staticClass: "text-white p-6",
                    class: t.page.emailAddress ? "sm:w-1/3" : "w-full",
                    style: t.customBackground
                }, [r("div", {
                    staticClass: "flex flex-col h-full"
                }, [t.page.emailAddress ? r("h2", {
                    staticClass: "font-semibold text-lg"
                }, [t._v("\n                " + t._s(t.$t("sustainability.mvp_detail.contact_partner", {
                    partner: t.page.title
                })) + "\n              ")]) : r("h2", {
                    staticClass: "font-semibold text-lg"
                }, [t._v("\n                " + t._s(t.$t("sustainability.mvp_detail.follow_partner", {
                    partner: t.page.title
                })) + "\n              ")]), t._v(" "), t.page.emailAddress ? r("span", {
                    staticClass: "block text-gray-100 mt-2"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.they_will_get_back_to_you")))]) : r("span", {
                    staticClass: "block text-gray-100 mt-2"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.find_them_on_the_web")))]), t._v(" "), r("div", {
                    staticClass: "flex justify-between",
                    class: t.page.emailAddress ? "flex-col h-full" : "flex-row-reverse"
                }, [r("div", [r("AppLink", {
                    staticClass: "flex items-center mt-4",
                    attrs: {
                        href: t.page.link,
                        rel: "noopener"
                    }
                }, [r("IconExternalLink", {
                    staticClass: "inline flex-shrink-0 w-4 h-4 mr-1"
                }), t._v(" "), r("span", {
                    staticClass: "truncate"
                }, [t._v(t._s(t.websiteDomain))])], 1), t._v(" "), t.page.phoneNumber ? r("AppLink", {
                    staticClass: "flex items-center mt-4",
                    attrs: {
                        href: "tel:" + t.page.phoneNumber
                    }
                }, [r("IconPhone", {
                    staticClass: "inline flex-shrink-0 w-4 h-4 mr-1"
                }), t._v(" "), r("span", {
                    staticClass: "truncate"
                }, [t._v(t._s(t.page.phoneNumber))])], 1) : t._e()], 1), t._v(" "), r("div", {
                    staticClass: "flex gap-10",
                    class: (t.page.emailAddress, "items-end")
                }, [t.page.twitter ? r("AppLink", {
                    attrs: {
                        href: "https://twitter.com/" + t.page.twitter,
                        "aria-label": "twitter link"
                    }
                }, [r("IconTwitter", {
                    staticClass: "inline w-6 h-6"
                })], 1) : t._e(), t._v(" "), t.page.github ? r("AppLink", {
                    attrs: {
                        href: "https://github.com/" + t.page.github,
                        "aria-label": "github link"
                    }
                }, [r("IconGitHub", {
                    staticClass: "inline w-6 h-6"
                })], 1) : t._e(), t._v(" "), t.page.linkedin ? r("AppLink", {
                    attrs: {
                        href: "https://www.linkedin.com/company/" + t.page.linkedin,
                        "aria-label": "linkedin link"
                    }
                }, [r("IconLinkedIn", {
                    staticClass: "inline w-6 h-6"
                })], 1) : t._e(), t._v(" "), t.page.facebook ? r("AppLink", {
                    attrs: {
                        href: "https://www.facebook.com/" + t.page.facebook,
                        "aria-label": "facebook link"
                    }
                }, [r("IconFacebook", {
                    staticClass: "inline w-6 h-6"
                })], 1) : t._e()], 1)])])]), t._v(" "), t.page.emailAddress ? r("form", {
                    staticClass: "contact-form sm:w-2/3 h-full grid grid-cols-1 lg:grid-cols-2 p-6 gap-6",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.validateForm.apply(null, arguments)
                        }
                    }
                }, [r("div", [r("label", {
                    staticClass: "block",
                    attrs: {
                        for: "firstName"
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.first_name")))]), t._v(" "), r("AppInput", {
                    attrs: {
                        id: "firstName",
                        type: "text",
                        required: ""
                    },
                    model: {
                        value: t.form.first_name,
                        callback: function(e) {
                            t.$set(t.form, "first_name", e)
                        },
                        expression: "form.first_name"
                    }
                })], 1), t._v(" "), r("div", [r("label", {
                    staticClass: "block",
                    attrs: {
                        for: "lastName"
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.last_name")))]), t._v(" "), r("AppInput", {
                    attrs: {
                        id: "lastName",
                        type: "text",
                        required: ""
                    },
                    model: {
                        value: t.form.last_name,
                        callback: function(e) {
                            t.$set(t.form, "last_name", e)
                        },
                        expression: "form.last_name"
                    }
                })], 1), t._v(" "), r("div", [r("label", {
                    staticClass: "block",
                    attrs: {
                        for: "companyName"
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.company_name")))]), t._v(" "), r("AppInput", {
                    attrs: {
                        id: "companyName",
                        type: "text",
                        required: ""
                    },
                    model: {
                        value: t.form.company_name,
                        callback: function(e) {
                            t.$set(t.form, "company_name", e)
                        },
                        expression: "form.company_name"
                    }
                })], 1), t._v(" "), r("div", [r("label", {
                    staticClass: "block",
                    attrs: {
                        for: "email"
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.email")))]), t._v(" "), r("AppInput", {
                    attrs: {
                        id: "email",
                        type: "text",
                        required: ""
                    },
                    model: {
                        value: t.form.email,
                        callback: function(e) {
                            t.$set(t.form, "email", e)
                        },
                        expression: "form.email"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "lg:col-span-full"
                }, [r("label", {
                    staticClass: "block",
                    attrs: {
                        for: "message"
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.message")))]), t._v(" "), r("AppTextarea", {
                    attrs: {
                        id: "message",
                        rows: "5",
                        required: "",
                        "no-resize": ""
                    },
                    model: {
                        value: t.form.message,
                        callback: function(e) {
                            t.$set(t.form, "message", e)
                        },
                        expression: "form.message"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "lg:col-span-full flex justify-end"
                }, [r("AppButton", {
                    attrs: {
                        submit: ""
                    }
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.submit")))])], 1), t._v(" "), t.resultText ? r("div", {
                    staticClass: "lg:col-span-full rounded-md p-4",
                    class: t.resultStyle
                }, [t._v("\n              " + t._s(t.resultText) + "\n            ")]) : t._e()]) : t._e()])]), t._v(" "), r("div", {
                    staticClass: "relative w-full xl:w-[30%]"
                }, [r("div", {
                    staticClass: "xl:sticky xl:top-header px-6 py-3 bg-cloud-surface dark:bg-sky-darker rounded-md"
                }, [t.page.location ? r("div", {
                    staticClass: "py-3"
                }, [r("h2", {
                    staticClass: "font-semibold text-lg mb-2"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.location")))]), t._v(" "), r("span", {
                    staticClass: "text-sm text-sky-dark dark:text-gray-300"
                }, [t._v(t._s(t.page.location))])]) : t._e(), t._v(" "), t.page.services && t.page.services.length ? r("div", {
                    staticClass: "py-3"
                }, [r("h2", {
                    staticClass: "font-semibold text-lg mb-2"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.services")))]), t._v(" "), r("ul", {
                    staticClass: "flex flex-row flex-wrap gap-3"
                }, t._l(t.page.services, (function(e, o) {
                    return r("li", {
                        key: o,
                        staticClass: "text-sm rounded-md bg-cloud-lightest dark:bg-sky-dark px-2 py-1"
                    }, [t._v("\n                " + t._s(e) + "\n              ")])
                })), 0)]) : t._e(), t._v(" "), t.page.resources && t.page.resources.length ? r("div", {
                    staticClass: "py-3"
                }, [r("h2", {
                    staticClass: "font-semibold text-lg mb-2"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.resources")))]), t._v(" "), r("ul", t._l(t.page.resources, (function(link, e) {
                    return r("li", {
                        key: e
                    }, [r("AppLink", {
                        staticClass: "inline-flex items-center text-sm text-sky-dark dark:text-gray-300",
                        attrs: {
                            href: link.url,
                            rel: "noopener"
                        }
                    }, [r("IconExternalLink", {
                        staticClass: "inline w-4 h-4 mr-1"
                    }), t._v("\n                  " + t._s(link.name) + "\n                ")], 1)], 1)
                })), 0)]) : t._e()])])]), t._v(" "), r("div", {
                    staticClass: "relative flex items-center justify-center mt-16 xl:mt-24"
                }, [r("img", {
                    attrs: {
                        loading: "lazy",
                        src: "/img/partners/banner.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "absolute inset-0 flex lg:flex-col items-center justify-center gap-4 sm:gap-12 lg:gap-8"
                }, [r("span", {
                    staticClass: "block text-2xl sm:text-4xl font-bold"
                }, [t._v(t._s(t.$t("sustainability.mvp_detail.join_us")))]), t._v(" "), r("AppButton", {
                    attrs: {
                        href: "mailto:partners@nuxtlabs.com",
                        size: "xs" === t.$mq ? "small" : "large"
                    }
                }, [t._v(t._s(t.$t("partners.become_partner")))])], 1)])])])
            }), [], !1, null, "2f16dbec", null);
        e.default = component.exports;
        installComponents(component, {
            IconExternalLink: r(87).default,
            AppLink: r(38).default,
            IconPhone: r(312).default,
            IconTwitter: r(174).default,
            IconGitHub: r(173).default,
            IconLinkedIn: r(311).default,
            IconFacebook: r(310).default,
            AppInput: r(120).default,
            AppTextarea: r(283).default,
            AppButton: r(43).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        var content = r(733);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("16122496", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(735);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("862052ee", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(738);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("6b16f958", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(740);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("46a17ad2", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        var content = r(820);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("6ddd796b", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(822);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("590a5e7e", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , function(t, e, r) {
        var content = r(830);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("66239526", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , function(t, e, r) {
        var content = r(848);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("784f5257", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(850);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("78389504", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(343),
            n = r(194),
            l = r(0),
            component = Object(l.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            Markdown: r(32).default,
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        var content = r(857);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("4ad1e892", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(860);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("2f3ab209", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(862);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("a4472200", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(864);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("207ddf4e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "useFuse", (function() {
            return _
        }));
        r(16), r(27), r(9), r(15), r(25);
        var o, n = r(323),
            l = r(1),
            c = "desc",
            d = "asc",
            m = ["downloads", "stars"],
            f = Object(l.ssrRef)([], "RProCMCDCXnUp2mfwULGQw=="),
            v = Object(l.ssrRef)(void 0, "fuseQueryRef"),
            h = Object(l.ssrRef)("desc", "fuseOrderRef"),
            w = Object(l.ssrRef)("downloads", "fuseSortedByRef"),
            y = Object(l.ssrRef)(void 0, "fuseSortByCategoryRef"),
            x = Object(l.ssrRef)(24, "fuseModulesLoadedRef");

        function _(t) {
            var e = Object(l.useContext)().route,
                r = Object(l.useRouter)();

            function _(t) {
                var e = Object.assign([], t.value);
                o && v.value && (e = o.search(v.value).map((function(t) {
                    return t.item
                }))), w.value && (e = e.sort((function(a, b) {
                    return function(a, b, t) {
                        return t ? a - b : b - a
                    }(a[w.value], b[w.value], h.value === d)
                }))), y.value && (e = e.filter((function(t) {
                    return t.category === y.value
                }))), e = e.splice(0, x.value), f.value = e
            }

            function k() {
                var t = e.value.path,
                    q = "";
                v.value && (q += "?q=".concat(v.value)), h.value !== c && (q += "".concat(q ? "&" : "?", "orderBy=").concat(h.value)), w.value !== m[0] && (q += "".concat(q ? "&" : "?", "sortBy=").concat(w.value)), y.value && (q += "#".concat(y.value)), r.replace("".concat(t).concat(q), (function() {}), (function() {}))
            }
            return Object(l.watch)([y, v, h, w], (function() {
                _(t), k()
            })), Object(l.watch)(x, (function() {
                return _(t)
            })), {
                fuse: o,
                query: v,
                orderedBy: h,
                sortedBy: w,
                selectedCategory: y,
                modulesLoaded: x,
                sortFields: m,
                filteredModules: f,
                init: function() {
                    var r = {
                            threshold: .1,
                            keys: ["name", "npm", "category", "maintainers.name", "maintainers.github", "description", "repo"]
                        },
                        l = n.a.createIndex(r.keys, t.value);
                    o = new n.a(t.value, r, l), y.value = (window.location.hash || "").substr(1);
                    var c = e.value.query,
                        q = c.q,
                        d = c.sortBy,
                        m = c.orderBy;
                    q && (v.value = q), d && (w.value = d), m && (h.value = m)
                },
                updateList: _,
                syncURL: k,
                getCategory: function(t) {
                    y.value = t
                },
                clearFilters: function() {
                    y.value = null, v.value = null
                },
                toggleOrderBy: function() {
                    h.value = h.value === d ? c : d
                },
                selectSortBy: function(t) {
                    w.value = t
                },
                selectCategory: function(t) {
                    y.value === t ? y.value = null : y.value = t
                },
                loadModules: function() {
                    x.value += 24
                }
            }
        }
    }, function(t, e, r) {
        "use strict";
        var o = r(346),
            n = r(200),
            l = r(0),
            component = Object(l.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            IconSearch: r(294).default,
            AppInput: r(120).default,
            NuxtSelectNative: r(167).default,
            IconSortDesc: r(314).default,
            IconSortAsc: r(313).default,
            AsideModules: r(254).default,
            ModulesCard: r(251).default,
            ObserverModules: r(255).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(348),
            n = r(204),
            l = r(0),
            component = Object(l.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            Markdown: r(32).default,
            PartnerServices: r(281).default,
            LogoCard: r(119).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(349),
            n = r(206),
            l = r(0),
            component = Object(l.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            IconBadgeCheck: r(291).default,
            AppButton: r(43).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        var content = r(868);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("05f98402", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(350),
            n = r(208),
            l = r(0),
            component = Object(l.a)(n.default, o.a, o.b, !1, null, null, null);
        e.default = component.exports, installComponents(component, {
            PageMobileToc: r(161).default,
            PageContent: r(166).default,
            EditOnGithub: r(160).default,
            PageToc: r(163).default,
            AppPage: r(124).default
        })
    }, function(t, e, r) {
        var content = r(873);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("442c33c8", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pt-10 lg:pt-24 pb-16 lg:pb-32 bg-gray-100 dark:bg-secondary-darkest"
                }, [r("div", {
                    staticClass: "relative d-container-content z-10"
                }, [r("DocusContent", {
                    attrs: {
                        document: t.page
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            DocusContent: r(62).default
        })
    }, function(t, e, r) {
        "use strict";
        r(24), r(28);
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    type: {
                        type: String,
                        default: "info",
                        validator: function(t) {
                            return ["info", "success", "warning", "danger", "next", "star"].includes(t)
                        }
                    }
                },
                setup: function(t) {
                    return {
                        iconComponent: Object(o.computed)((function() {
                            return "IconAlert".concat(t.type.charAt(0).toUpperCase() + t.type.slice(1))
                        }))
                    }
                }
            }),
            l = (r(829), r(0)),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "p-4 mt-4 mb-4 rounded-lg alert text-sm leading-loose",
                    class: [t.type]
                }, [r("div", {
                    staticClass: "flex items-center space-x-4"
                }, [r("div", [r(t.iconComponent, {
                    tag: "Component",
                    staticClass: "w-5 h-5"
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex-grow alert-content"
                }, [r("Markdown", {
                    attrs: {
                        unwrap: "p"
                    }
                })], 1)])])
            }), [], !1, null, "427b9508", null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("PageHero", {
                    attrs: {
                        "description-full-width": t.page.heroDescriptionFullWidth
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroTitle || t.page.title) + "\n    ")]
                        },
                        proxy: !0
                    }, {
                        key: "description",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroDescription || t.page.description) + "\n    ")]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), r("div", {
                    staticClass: "d-container"
                }, [t.page.blogPostList ? r("BlogpostList", {
                    attrs: {
                        slug: t.page.to,
                        "sort-by": t.page.sortBy
                    }
                }) : r("DocusContent", {
                    attrs: {
                        document: t.page
                    }
                })], 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            PageHero: r(100).default,
            DocusContent: r(62).default,
            BlogpostList: r(270).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    error: {
                        type: Object,
                        required: !0
                    }
                },
                head: function() {
                    return {
                        title: this.error.message
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("AppPage", {
                    staticClass: "min-h-screen-sm relative z-0 h-full -mb-48 bg-secondary-black text-white"
                }, [r("div", {
                    staticClass: "relative flex flex-col items-center justify-center px-2 sm:px-4 mt-20 lg:mt-32 md:px-0 z-10"
                }, [r("h1", {
                    staticClass: "font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4"
                }, [t._v(t._s(t.error.message))]), t._v(" "), r("p", {
                    staticClass: "mt-4 mb-4 text-center"
                }, [t._v(t._s(t.$t("common.page_not_found")))]), t._v(" "), r("AppLink", {
                    staticClass: "text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400 font-medium rounded-md px-4 py-2.5",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("\n      " + t._s(t.$t("common.go_home")) + "\n    ")])], 1), t._v(" "), r("NuxtImg", {
                    staticClass: "hidden lg:block absolute w-full bottom-0 left-0 z-0 select-none",
                    attrs: {
                        loading: "lazy",
                        src: "/img/error/bg-error_desktop.svg"
                    }
                }), t._v(" "), r("NuxtImg", {
                    staticClass: "hidden sm:block lg:hidden absolute w-full bottom-0 left-0 z-0 select-none",
                    attrs: {
                        loading: "lazy",
                        src: "/img/error/bg-error_tablet.svg"
                    }
                }), t._v(" "), r("NuxtImg", {
                    staticClass: "block sm:hidden absolute w-full bottom-0 left-0 z-0 select-none",
                    attrs: {
                        loading: "lazy",
                        src: "/img/error/bg-error_mobile.svg"
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            AppPage: r(124).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function() {
                    var t = Object(n.useContext)().$docus,
                        e = Object(n.ref)();
                    Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function r() {
                        var o, n;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, t.data("github-releases");
                                case 2:
                                    n = r.sent, e.value = null === (o = n.body) || void 0 === o ? void 0 : o.releases;
                                case 4:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    }))));
                    return {
                        releases: e,
                        formatDateByLocale: function(t, e) {
                            var r = t || "en-US";
                            return new Date(e).toLocaleDateString(r, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "overflow-x-hidden sm:overflow-x-visible"
                }, [r("PageHero", {
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.title) + "\n    ")]
                        },
                        proxy: !0
                    }, {
                        key: "description",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.description) + "\n    ")]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), r("div", {
                    staticClass: "d-container px-6"
                }, t._l(t.releases, (function(e) {
                    return r("div", {
                        key: e.name,
                        staticClass: "border-b dark:border-sky-darker dark:lg:border-transparent lg:border-transparent"
                    }, [r("div", {
                        staticClass: "relative lg:flex py-8 lg:py-16 lg:border-b lg:dark:border-sky-darker"
                    }, [r("div", {
                        staticClass: "self-start w-full lg:w-1/4 lg:sticky lg:top-0 lg:pt-38 lg:-mt-32 lg:mb-6"
                    }, [r("h2", {
                        staticClass: "mb-3 text-3xl font-light text-tw-gray-900"
                    }, [t._v("\n            " + t._s(t.$t("releases.version")) + " "), r("span", {
                        staticClass: "font-bold"
                    }, [t._v(t._s(e.name))])]), t._v(" "), r("p", {
                        staticClass: "text-xs font-semibold uppercase text-tw-gray-400"
                    }, [t._v("\n            " + t._s(t.$t("releases.released_on", {
                        datetime: t.formatDateByLocale(t.$i18n.locale, e.date)
                    })) + "\n          ")])]), t._v(" "), r("DocusContent", {
                        staticClass: "lg:w-3/4 px-8 lg:px-0 pt-4 lg:pt-0",
                        attrs: {
                            document: e
                        }
                    })], 1)])
                })), 0)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            PageHero: r(100).default,
            DocusContent: r(62).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = {
                props: {
                    icon: {
                        type: String,
                        required: !0
                    },
                    category: {
                        type: String,
                        required: !0
                    }
                }
            },
            n = r(0),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "flex flex-col space-y-4 items-center text-center"
                }, [r("img", {
                    staticClass: "w-12 h-12",
                    attrs: {
                        src: "/img/partners/categories/" + t.icon,
                        alt: t.category
                    }
                }), t._v(" "), r("h2", {
                    staticClass: "font-bold text-md md:text-lg"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "text-sm md:text-base px-8 md:px-12 pb-2"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("AppButton", {
                    attrs: {
                        "aria-label": t.category,
                        "extra-class": "!border-sky-darker hover:text-sky-dark",
                        to: "/partners#" + t.category
                    }
                }, [r("Markdown", {
                    attrs: {
                        use: "button",
                        unwrap: "p"
                    }
                })], 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    showcase: {
                        type: Object,
                        required: !0
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("AppLink", {
                    staticClass: "\n    flex flex-col\n    justify-between\n    group\n    hover:bg-gray-50 hover:dark:bg-sky-darkest\n    dark:bg-sky-darker\n    rounded-md\n    shadow-md\n    hover:shadow-lg\n    overflow-hidden\n    transition-all\n    duration-200\n    ease-in-out\n  ",
                    attrs: {
                        href: t.showcase.url
                    }
                }, [r("div", {
                    staticClass: "relative aspect-w-4 aspect-h-3"
                }, [r("NuxtImg", {
                    staticClass: "object-cover",
                    attrs: {
                        src: "https://res.cloudinary.com/nuxt/image/upload/f_auto,q_auto/" + t.showcase.screenshotUrl,
                        width: "800",
                        height: "600",
                        alt: t.showcase.hostname,
                        loading: "lazy"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "\n        absolute\n        inset-0\n        bg-gray-700\n        dark:bg-black\n        opacity-0\n        group-hover:opacity-10 group-hover:dark:opacity-20\n        transition-opacity\n        duration-200\n        ease-in-out\n      "
                })], 1), t._v(" "), r("h2", {
                    staticClass: "font-bold py-2 px-4 truncate"
                }, [t._v(t._s(t.showcase.hostname))])])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppLink: r(38).default
        })
    }, function(t, e, r) {
        "use strict";
        r(16), r(22);
        var o = {
                props: {
                    options: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    selected: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    mappedOptions: function() {
                        return this.options.map((function(option) {
                            return {
                                text: option.display,
                                value: option.name
                            }
                        }))
                    }
                }
            },
            n = r(0),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "sticky top-0 lg:left-0 pointer-events-auto lg:h-screen top-header lg:w-1/5 z-10 lg:z-0"
                }, [r("nav", {
                    staticClass: "\n      flex\n      lg:flex-col\n      justify-end\n      lg:justify-start lg:max-w-sm\n      w-full\n      overflow-y-auto\n      text-sm\n      font-medium\n      lg:h-[reset]\n      h-(full-header)\n      d-scrollbar d-px-container d-bg-header\n      blur-12\n      lg:blur-0\n    "
                }, [r("div", {
                    staticClass: "hidden lg:block py-4 pr-0"
                }, [r("ul", {
                    staticClass: "flex lg:flex-col"
                }, t._l(t.options, (function(option) {
                    return r("li", {
                        key: option.name
                    }, [r("AppButton", {
                        class: {
                            "rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10": option.name === t.selected
                        },
                        attrs: {
                            "button-class": "py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.$emit("selected", option.name)
                            }
                        }
                    }, [r("div", {
                        staticClass: "truncate max-w-48 font"
                    }, [t._v(t._s(option.display))])])], 1)
                })), 0)]), t._v(" "), r("div", {
                    staticClass: "w-full relative py-2"
                }, [r("NuxtSelectNative", {
                    staticClass: "lg:hidden",
                    attrs: {
                        value: t.selected,
                        options: t.mappedOptions
                    },
                    on: {
                        input: function(option) {
                            return t.$emit("selected", option)
                        }
                    }
                })], 1)])])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppButton: r(43).default,
            NuxtSelectNative: r(167).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    buttonText: {
                        type: String,
                        default: ""
                    }
                },
                setup: function() {
                    var t = Object(n.useContext)(),
                        e = t.$docus,
                        r = t.i18n,
                        l = Object(n.ref)();
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.search("/collections/design", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $in: "colors"
                                        },
                                        language: r.locale
                                    }).fetch();
                                case 2:
                                    l.value = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        colorsMd: l
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [t._l(t.colorsMd, (function(content) {
                    return r("div", {
                        key: content.slug,
                        staticClass: "grid grid-cols-2 py-4 gap-6"
                    }, t._l(content.colors, (function(e) {
                        return r("div", {
                            key: e.slug
                        }, [r("div", {
                            staticClass: "w-full h-32 rounded-lg",
                            class: e.bg_color
                        }), t._v(" "), r("div", {
                            staticClass: "font-semibold pt-4"
                        }, [t._v(t._s(e.name))]), t._v(" "), r("div", [t._v(t._s(e.hexa))]), t._v(" "), r("div", [t._v(t._s("RGB: " + e.rgb))])])
                    })), 0)
                })), t._v(" "), r("div", {
                    staticClass: "mt-4"
                }, [r("a", {
                    staticClass: "font-medium rounded bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400 py-3 px-4",
                    attrs: {
                        href: "/design-kit/DesignKitColors.fig",
                        "aria-label": t.buttonText,
                        download: ""
                    }
                }, [r("span", {
                    staticClass: "font-medium"
                }, [t._v(t._s(t.buttonText))])])])], 2)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    downloadText: {
                        type: String,
                        default: "Download Design Kit"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pt-24 pb-32 bg-gray-100 dark:bg-secondary-darkest"
                }, [r("div", {
                    staticClass: "flex d-container-content"
                }, [r("div", {
                    staticClass: "w-full lg:w-1/2 xl:w-2/3"
                }, [r("h1", {
                    staticClass: "text-display-3 font-serif mb-4"
                }, [t._v(t._s(t.title))]), t._v(" "), r("p", {
                    staticClass: "text-body-xl max-w-3xl"
                }, [t._v(t._s(t.description))]), t._v(" "), r("div", {
                    staticClass: "mt-8"
                }, [r("AppButton", {
                    attrs: {
                        href: "https://www.figma.com/@nuxtjs"
                    }
                }, [t._v(t._s(t.downloadText) + " ")])], 1)]), t._v(" "), r("img", {
                    staticClass: "\n        hidden\n        lg:block\n        absolute\n        bottom-0\n        right-4\n        2xl:right-1/12\n        h-4/5\n        2xl:h-full\n        object-cover\n        pointer-events-none\n      ",
                    attrs: {
                        loading: "lazy",
                        src: "/design-kit/hero-img.svg",
                        alt: "A landscape image"
                    }
                })])])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    type: {
                        type: String,
                        default: "monogram"
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)(),
                        r = e.$docus,
                        l = e.i18n,
                        c = Object(n.ref)();
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.search("/collections/design", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $in: t.type
                                        },
                                        language: l.locale
                                    }).fetch();
                                case 2:
                                    c.value = e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))), {
                        logosMd: c
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.logosMd ? r("div", t._l(t.logosMd, (function(content, i) {
                    return r("div", {
                        key: i,
                        staticClass: "grid grid-cols-1 sm:grid-cols-3 sm:gap-6"
                    }, t._l(content.logos, (function(e, o) {
                        return r("div", {
                            key: o,
                            staticClass: "mt-4"
                        }, [e ? r("div", [r("div", {
                            staticClass: "border px-12 py-10 flex justify-center rounded-md max-h-36",
                            class: "light" === e.color ? "bg-secondary-black border-white" : "bg-white"
                        }, [r("img", {
                            attrs: {
                                loading: "lazy",
                                src: e.logoImg + ".svg"
                            }
                        })]), t._v(" "), r("div", {
                            staticClass: "flex w-full justify-between pt-2 pb-4"
                        }, [r("div", {
                            staticClass: "font-semibold"
                        }, [t._v(t._s(e.type))]), t._v(" "), r("div", {
                            staticClass: "flex space-x-2"
                        }, [r("a", {
                            staticClass: "hover:text-primary light:text-gray-500 dark:white hover:underline",
                            attrs: {
                                href: e.logoImg + ".svg",
                                "aria-label": "Download svg",
                                download: ""
                            }
                        }, [t._v("SVG")]), t._v(" "), r("a", {
                            staticClass: "hover:text-primary light:text-gray-500 dark:white hover:underline",
                            attrs: {
                                href: e.logoImg + ".png",
                                "aria-label": "Download png",
                                download: ""
                            }
                        }, [t._v("PNG")])])])]) : t._e()])
                    })), 0)
                })), 0) : t._e()
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    },
                    announcementsCategory: {
                        type: String,
                        default: ""
                    },
                    eventsCategory: {
                        type: String,
                        default: ""
                    },
                    articleLinkTitle: {
                        type: String,
                        default: ""
                    }
                },
                setup: function() {
                    var t = Object(n.useContext)(),
                        e = t.$docus,
                        r = t.i18n,
                        l = Object(n.ref)([]);
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        var o, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.search("/announcements", {
                                        deep: !0
                                    }).where({
                                        language: r.locale
                                    }).sortBy("position", "asc").limit(1).fetch();
                                case 2:
                                    return o = t.sent, t.next = 5, e.search("/collections/events", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $ne: ""
                                        },
                                        language: r.locale
                                    }).sortBy("position", "desc").limit(1).fetch();
                                case 5:
                                    n = t.sent, l.value.push(o[0]), l.value.push(n[0].events[n[0].events.length - 1]);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        posts: l
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", {
                    staticClass: "pb-20 pt-20 bg-sky-darker text-white"
                }, [r("NuxtContainer", [r("div", {
                    staticClass: "flex flex-col items-center xl:items-start col-span-12"
                }, [r("div", {
                    staticClass: "mb-2"
                }, [r("span", {
                    staticClass: "text-primary font-bold text-lg"
                }, [t._v(t._s(t.category) + " ")])]), t._v(" "), r("h2", {
                    staticClass: "mb-2 font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "mb-12 font-normal text-body-base md:text-body-lg 2xl:text-body-xl w-1/2 text-center xl:text-left"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("ul", {
                    staticClass: "flex flex-col items-start grid grid-cols-1 sm:grid-cols-2 gap-8"
                }, t._l(t.posts, (function(e, o) {
                    return r("li", {
                        key: o
                    }, [e ? r("div", [r("div", {
                        staticClass: "aspect-w-16 aspect-h-8 bg-gray-100 overflow-hidden dark:bg-secondary-darker mb-4 rounded-lg"
                    }, [r("NuxtImg", {
                        staticClass: "object-cover",
                        attrs: {
                            src: e.imgUrl || e.logo,
                            alt: e.title,
                            loading: "lazy"
                        }
                    })], 1), t._v(" "), r("span", {
                        staticClass: "text-primary text-body-base lg:text-body-lg font-bold mb-2"
                    }, [t._v(t._s(o > 0 ? t.eventsCategory : t.announcementsCategory))]), t._v(" "), r("h3", {
                        staticClass: "text-body-xl lg:text-body-2xl font-bold mb-2"
                    }, [t._v(t._s(e.title))]), t._v(" "), r("p", {
                        staticClass: "mb-4 text-body-base lg:text-body-lg truncate"
                    }, [t._v(t._s(e.description))]), t._v(" "), r("MarketingLink", {
                        attrs: {
                            name: t.articleLinkTitle,
                            to: e.to || e.link
                        }
                    })], 1) : t._e()])
                })), 0)])])], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            MarketingLink: r(277).default,
            NuxtContainer: r(76).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                },
                setup: function() {
                    var t = Object(n.useContext)(),
                        e = t.$docus,
                        r = t.i18n,
                        l = Object(n.ref)();
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.search("/partners", {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $ne: ""
                                        },
                                        language: r.locale
                                    }).fetch();
                                case 2:
                                    l.value = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        partners: l
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pb-48 sm:pb-56 md:pb-64 lg:pb-72 xl:pb-92 2xl:pb-128 bg-sky-surface"
                }, [r("section", {
                    staticClass: "relative pt-20 z-10"
                }, [r("NuxtContainer", {
                    staticClass: "flex flex-col items-center xl:pt-10 text-sky-black"
                }, [r("div", {
                    staticClass: "flex flex-col w-full items-center col-span-12"
                }, [r("div", {
                    staticClass: "mb-2"
                }, [r("span", {
                    staticClass: "text-cloud font-bold text-lg"
                }, [t._v(t._s(t.category))])]), t._v(" "), r("h2", {
                    staticClass: "font-normal font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4 mb-2"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-8"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "grid grid-cols-1 sm:grid-cols-2 gap-8 md:px-16 pt-16 pb-24"
                }, [r("Markdown", {
                    attrs: {
                        use: "partners-card",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", [r("Markdown", {
                    attrs: {
                        use: "bottom",
                        unwrap: "p"
                    }
                })], 1)])])], 1), t._v(" "), r("img", {
                    staticClass: "absolute left-0 bottom-0 object-fill w-full -mt-28 sm:-mt-40 lg:-mt-60 xl:-mt-80",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/discover/partners/partners-illustration.svg",
                        alt: "A landscape image"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            NuxtContainer: r(76).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pb-20 sm:pb-28 md:pb-36 lg:pb-48"
                }, [r("section", {
                    staticClass: "relative z-10"
                }, [r("img", {
                    staticClass: "left-0 bottom-0 object-cover w-full h-40 -mt-16",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/explore/landscape-explore.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("NuxtContainer", {
                    staticClass: "flex flex-col items-center py-20 text-secondary-black"
                }, [r("div", {
                    staticClass: "flex flex-col items-center w-full col-span-12"
                }, [r("div", {
                    staticClass: "mb-2"
                }, [r("span", {
                    staticClass: "text-cloud font-bold text-lg"
                }, [t._v(t._s(t.category) + " ")])]), t._v(" "), r("h2", {
                    staticClass: "mb-2 font-serif font-normal text-center text-display-6 md:text-display-5 2xl:text-display-4"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "mb-12 font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "grid grid-cols-1 sm:grid-cols-3 gap-20 pb-8"
                }, [t._t("default")], 2)])])], 1), t._v(" "), r("img", {
                    staticClass: "hidden xl:block absolute bottom-0 left-0 w-full object-fit",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/campfire/campfire-illustration-big.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("img", {
                    staticClass: "absolute left-0 bottom-0 w-full object-fit xl:hidden",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/campfire/campfire-illustration.svg",
                        alt: "A landscape image"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            NuxtContainer: r(76).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            nav = r(41),
            n = Object(o.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                },
                setup: function() {
                    return {
                        isHome: Object(nav.useNav)().isHome
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative",
                    class: {
                        "sm:pb-20 lg:pb-28 xl:pb-40 2xl:pb-60": t.isHome
                    }
                }, [t.isHome ? r("img", {
                    staticClass: "absolute left-0 bottom-0 object-cover w-full",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/discover/dx/discover-mountain.svg",
                        alt: "A landscape image"
                    }
                }) : t._e(), t._v(" "), r("section", {
                    staticClass: "py-40",
                    class: t.isHome ? "bg-white text-secondary-black" : "text-white light:text-secondary-black"
                }, [r("NuxtContainer", {
                    staticClass: "flex flex-col items-center"
                }, [r("div", {
                    staticClass: "flex flex-col w-full items-center col-span-12"
                }, [r("div", {
                    staticClass: "mb-2"
                }, [r("span", {
                    staticClass: "text-cloud font-bold text-lg"
                }, [t._v(t._s(t.category) + " ")])]), t._v(" "), r("h2", {
                    staticClass: "font-normal text-center font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-12"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }, [t._t("default")], 2)])])], 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            NuxtContainer: r(76).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", {
                    staticClass: "relative bg-secondary-black pt-18 sm:pt-20 md:pt-24 xl:pt-40"
                }, [r("NuxtContainer", {
                    staticClass: "flex flex-col items-center text-white"
                }, [r("div", {
                    staticClass: "flex flex-col w-full items-center col-span-12"
                }, [r("div", {
                    staticClass: "mb-2"
                }, [r("span", {
                    staticClass: "text-tertiary font-bold text-lg"
                }, [t._v(t._s(t.category) + " ")])]), t._v(" "), r("h2", {
                    staticClass: "font-normal font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("p", {
                    staticClass: "font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-4 md:mb-12 text-white"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "w-full md:my-8"
                }, [r("div", {
                    staticClass: "grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-20 pb-8"
                }, [t._t("default")], 2)])])])], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            NuxtContainer: r(76).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("img", {
                    staticClass: "absolute left-0 object-fill w-full h-40 -mt-24",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/discover/modules/dark/landscape-discover-modules-t.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("HomeSection", {
                    staticClass: "py-20 bg-sky-darkest text-white",
                    scopedSlots: t._u([{
                        key: "section-content",
                        fn: function() {
                            return [r("SectionContent", {
                                scopedSlots: t._u([{
                                    key: "category",
                                    fn: function() {
                                        return [r("span", {
                                            staticClass: "text-tertiary font-bold text-lg"
                                        }, [t._v(t._s(t.category))])]
                                    },
                                    proxy: !0
                                }, {
                                    key: "title",
                                    fn: function() {
                                        return [r("h2", {
                                            staticClass: "\n              font-normal\n              text-center\n              md:text-left\n              font-serif\n              text-display-6\n              md:text-display-5\n              2xl:text-display-4\n            "
                                        }, [r("Markdown", {
                                            attrs: {
                                                use: "title",
                                                unwrap: "p"
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }, {
                                    key: "paragraph",
                                    fn: function() {
                                        return [r("p", {
                                            staticClass: "text-center font-normal text-body-base md:text-body-lg 2xl:text-body-xl"
                                        }, [r("Markdown", {
                                            attrs: {
                                                use: "description",
                                                unwrap: "p"
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }, {
                                    key: "content",
                                    fn: function() {
                                        return [r("CodeBlockAnimation", {
                                            staticClass: "w-full text-gray-50"
                                        })]
                                    },
                                    proxy: !0
                                }, {
                                    key: "button",
                                    fn: function() {
                                        return [r("div", {
                                            staticClass: "w-full self-start"
                                        }, [r("Markdown", {
                                            attrs: {
                                                use: "bottom",
                                                unwrap: "p"
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }])
                            })]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), r("img", {
                    staticClass: "absolute left-0 z-10 object-fill w-full h-40 -mt-20",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/discover/modules/dark/landscape-discover-modules-b.svg",
                        alt: "A landscape image"
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            CodeBlockAnimation: r(280).default,
            SectionContent: r(168).default,
            HomeSection: r(169).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    category: {
                        type: String,
                        default: "Category"
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "relative pb-60 lg:pb-80 2xl:pb-102"
                }, [r("img", {
                    staticClass: "absolute left-0 bottom-0 object-cover w-full",
                    attrs: {
                        loading: "lazy",
                        src: "/img/home/home_footer.svg",
                        alt: "A landscape image"
                    }
                }), t._v(" "), r("HomeSection", {
                    scopedSlots: t._u([{
                        key: "header-illustration",
                        fn: function() {
                            return [r("img", {
                                staticClass: "w-full h-28 object-cover -mt-12 pointer-events-none",
                                attrs: {
                                    loading: "lazy",
                                    src: "/img/home/testimonials/landscape-community.svg",
                                    alt: "A landscape image"
                                }
                            })]
                        },
                        proxy: !0
                    }, {
                        key: "section-content",
                        fn: function() {
                            return [r("SectionContent", {
                                staticClass: "pt-20 text-secondary-black",
                                scopedSlots: t._u([{
                                    key: "category",
                                    fn: function() {
                                        return [r("span", {
                                            staticClass: "text-cloud font-bold text-lg"
                                        }, [t._v(t._s(t.category))])]
                                    },
                                    proxy: !0
                                }, {
                                    key: "title",
                                    fn: function() {
                                        return [r("h2", {
                                            staticClass: "\n              font-normal\n              text-center\n              md:text-left\n              font-serif\n              text-display-6\n              md:text-display-5\n              2xl:text-display-4\n            "
                                        }, [r("Markdown", {
                                            attrs: {
                                                use: "title",
                                                unwrap: "p"
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }, {
                                    key: "paragraph",
                                    fn: function() {
                                        return [r("p", {
                                            staticClass: "text-center font-normal text-body-base md:text-body-lg 2xl:text-body-xl"
                                        }, [r("Markdown", {
                                            attrs: {
                                                use: "description",
                                                unwrap: "p"
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }, {
                                    key: "content",
                                    fn: function() {
                                        return [r("Markdown", {
                                            attrs: {
                                                use: "testimonials",
                                                unwrap: "p"
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }])
                            })]
                        },
                        proxy: !0
                    }])
                })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            SectionContent: r(168).default,
            HomeSection: r(169).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            nav = r(41),
            l = Object(n.defineComponent)({
                setup: function() {
                    var t = Object(n.useContext)(),
                        e = t.$docus,
                        r = t.i18n,
                        l = Object(n.ref)(),
                        c = Object(n.ref)([]),
                        d = Object(nav.useNav)().isHome;
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.search("/collections/testimonials", {
                                        deep: !0
                                    }).where({
                                        language: r.locale
                                    }).fetch();
                                case 2:
                                    l.value = t.sent, c.value = l.value[0].testimonials;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        testimonials: c,
                        isHome: d
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ul", {
                    staticClass: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 pb-8 px-4",
                    class: {
                        "pt-16": !t.isHome
                    }
                }, t._l(t.testimonials, (function(e) {
                    return r("li", {
                        key: e.author,
                        staticClass: "\n      relative\n      flex flex-col\n      items-center\n      justify-between\n      space-y-4\n      border-2 border-gray-200\n      md:transition-all md:ease-out\n      rounded-lg\n      p-4\n    ",
                        class: {
                            "dark:border-secondary-dark": !t.isHome, "bg-white": t.isHome
                        }
                    }, [r("p", {
                        staticClass: "text-left",
                        domProps: {
                            innerHTML: t._s(e.testimonial)
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "flex w-full justify-between items-center"
                    }, [r("AppLink", {
                        attrs: {
                            href: e.authorUrl,
                            rel: "noopener"
                        }
                    }, [r("img", {
                        staticClass: "h-12 w-12",
                        attrs: {
                            loading: "lazy",
                            src: "/img/home/testimonials/" + e.authorIcon + ".png",
                            alt: e.author,
                            width: "48",
                            height: "48"
                        }
                    })]), t._v(" "), r("AppLink", {
                        staticClass: "flex flex-1 pl-4 text-left flex-col",
                        attrs: {
                            href: e.authorUrl,
                            rel: "noopener"
                        }
                    }, [r("span", {
                        staticClass: "font-bold text-base"
                    }, [t._v(t._s(e.author))]), t._v(" "), r("span", {
                        staticClass: "text-sm",
                        class: t.isHome ? "text-cloud" : "light:text-cloud dark:text-cloud-lighter"
                    }, [t._v("\n          " + t._s(e.job) + "\n        ")])]), t._v(" "), r("AppLink", {
                        staticClass: "hidden xl:block",
                        attrs: {
                            href: e.jobUrl,
                            rel: "noopener sponsored"
                        }
                    }, [r("img", {
                        class: {
                            "light-img": e.jobIconDark
                        },
                        attrs: {
                            loading: "lazy",
                            src: "/img/home/testimonials/" + e.jobIcon + ".svg",
                            alt: e.jobIcon,
                            width: "28",
                            height: "28"
                        }
                    }), t._v(" "), e.jobIconDark && !t.isHome ? r("img", {
                        staticClass: "dark-img",
                        attrs: {
                            loading: "lazy",
                            src: "/img/home/testimonials/" + e.jobIconDark + ".svg",
                            alt: e.jobIconDark,
                            width: "28",
                            height: "28"
                        }
                    }) : t._e()])], 1)])
                })), 0)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppLink: r(38).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    themes: {
                        type: Object,
                        default: function() {}
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "px-6 mb-8 mt-16"
                }, [r("div", {
                    staticClass: "flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                }, t._l(t.themes, (function(e, o) {
                    var title = e.title,
                        n = e.description,
                        image = e.image,
                        l = e.price,
                        c = e.href;
                    return r("ContentCardTemplate", {
                        key: o,
                        attrs: {
                            title: title,
                            description: n,
                            image: image,
                            href: c
                        }
                    }, [r("div", {
                        staticClass: "-mb-2 sm:mb-0",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("AppButton", {
                        attrs: {
                            href: c
                        }
                    }, [t._v("\n          " + t._s(t.$t("resources.themes.get_for_it", {
                        price: l
                    })) + "\n        ")])], 1)])
                })), 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppButton: r(43).default,
            ContentCardTemplate: r(121).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    videoCourses: {
                        type: Object,
                        default: function() {}
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "px-6 mb-8 pt-12"
                }, [r("div", {
                    staticClass: "flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                }, t._l(t.videoCourses, (function(e, o) {
                    var title = e.title,
                        n = e.description,
                        image = e.image,
                        l = e.tier,
                        link = e.link;
                    return r("ContentCardTemplate", {
                        key: o,
                        attrs: {
                            title: title,
                            description: n,
                            image: image,
                            tags: [l],
                            href: link
                        }
                    }, [r("div", {
                        staticClass: "-mb-2 sm:mb-0",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("AppButton", {
                        attrs: {
                            href: link
                        }
                    }, [t._v("\n          " + t._s(t.$t("resources.themes.video_course")) + "\n        ")])], 1)])
                })), 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppButton: r(43).default,
            ContentCardTemplate: r(121).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    image: {
                        type: String,
                        default: ""
                    },
                    imageClass: {
                        type: String,
                        default: ""
                    },
                    hoverClass: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    to: {
                        type: String,
                        default: ""
                    }
                },
                setup: function(t) {
                    return {
                        component: Object(o.computed)((function() {
                            return t.to ? "AppLink" : "div"
                        }))
                    }
                }
            }),
            l = r(0),
            c = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r(t.component, {
                    tag: "Component",
                    staticClass: "flex flex-col items-center transition duration-200 p-6 rounded-md",
                    class: t.hoverClass,
                    attrs: {
                        to: t.to,
                        "aria-label": t.title
                    }
                }, [r("InjectComponent", {
                    staticClass: "mb-4 transition duration-200 text-primary group-hover:text-primary-400",
                    class: t.imageClass,
                    attrs: {
                        component: t.image
                    }
                }, [r("img", {
                    attrs: {
                        loading: "lazy",
                        src: t.image,
                        alt: "A " + t.title + " image"
                    }
                })]), t._v(" "), r("h3", {
                    staticClass: "mb-1 text-center text-body-lg lg:text-body-xl font-bold"
                }, [t._v(t._s(t.title))]), t._v(" "), r("p", {
                    staticClass: "text-center text-sm lg:text-base mb-4"
                }, [t._v(t._s(t.description))])], 1)
            }), [], !1, null, null, null);
        e.a = c.exports;
        installComponents(c, {
            InjectComponent: r(88).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(9), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    buttonText: {
                        type: String,
                        default: "",
                        required: !0
                    }
                },
                setup: function() {
                    var t = Object(n.useContext)().$docus,
                        e = Object(n.ref)(),
                        r = Object(n.ref)();
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function o() {
                        var n;
                        return regeneratorRuntime.wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    return o.next = 2, t.search("/collections/sponsors", {
                                        deep: !0
                                    }).sortBy("position", "asc").fetch();
                                case 2:
                                    n = o.sent, e.value = n.filter((function(t) {
                                        return "MVP" === t.tier
                                    })), r.value = n.filter((function(t) {
                                        return "Sponsors" === t.tier
                                    }));
                                case 5:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })))), {
                        mvp: e,
                        sponsors: r
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "py-4 d-container-content"
                }, [r("div", {
                    staticClass: "flex flex-col pt-8 space-y-4 light:text-sky-darker dark:text-white"
                }, [r("SectionSponsors", {
                    staticClass: "pb-12",
                    attrs: {
                        tier: t.$t("sustainability.tiers.mvp_sponsors"),
                        sponsors: t.mvp
                    }
                }), t._v(" "), r("SectionSponsors", {
                    attrs: {
                        tier: t.$t("sustainability.tiers.sponsors"),
                        sponsors: t.sponsors
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            SectionSponsors: r(282).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    teamName: {
                        type: String,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)(),
                        r = e.$docus,
                        l = e.i18n,
                        c = Object(n.ref)([]);
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function e() {
                        var o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.search("/collections/teams/".concat(t.teamName), {
                                        deep: !0
                                    }).where({
                                        language: l.locale
                                    }).sortBy("position", "asc").fetch();
                                case 2:
                                    o = e.sent, c.value = o[0];
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))), {
                        team: c
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "pt-16 d-container-content"
                }, [r("h2", {
                    staticClass: "text-center pb-4 text-display-4 font-serif"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "text-center text-lg pb-16 d-heading-description px-8 md:px-12 lg:px-18"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex justify-center"
                }, [r("div", {
                    staticClass: "flex flex-wrap justify-center"
                }, t._l(t.team.members, (function(t) {
                    return r("div", {
                        key: t.name
                    }, [r("TeamMember", {
                        attrs: {
                            member: t
                        }
                    })], 1)
                })), 0)])])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            TeamMember: r(278).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = {
                props: {
                    type: {
                        type: String,
                        default: "warning"
                    }
                }
            },
            n = (r(867), r(0)),
            component = Object(n.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "alert border-l-4 p-4 mb-4",
                    class: "alert-" + t.type
                }, [r("div", {
                    staticClass: "flex"
                }, [r("div", {
                    staticClass: "flex-shrink-0 self-start pt-1 w-5 h-5 alert-icon"
                }, ["info" === t.type ? r("IconAlertInfo") : "next" === t.type ? r("IconAlertNext") : "star" === t.type ? r("IconAlertStar") : r("IconAlertDanger")], 1), t._v(" "), r("div", {
                    staticClass: "ml-2 alert-content text-sm"
                }, [t._t("default")], 2)])])
            }), [], !1, null, "4486c722", null);
        e.a = component.exports;
        installComponents(component, {
            IconAlertInfo: r(306).default,
            IconAlertNext: r(307).default,
            IconAlertStar: r(308).default,
            IconAlertDanger: r(305).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = Object(o.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                }
            }),
            l = r(0),
            component = Object(l.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("DocusContent", {
                    class: t.page.bgClass,
                    attrs: {
                        document: t.page
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            DocusContent: r(62).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(7),
            n = r(3),
            l = (r(14), r(27), r(16), r(9), r(13), r(12), r(18), r(19), r(1)),
            c = r(965),
            d = r(963);

        function m(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function f(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? m(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var v = Object(l.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(l.useContext)(),
                        r = e.$docus,
                        o = e.i18n,
                        m = Object(l.ref)([]);
                    return Object(l.useFetch)(Object(n.a)(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, r.search("/collections/events", {
                                        deep: !0
                                    }).where({
                                        language: o.locale
                                    }).sortBy("position", "desc").fetch();
                                case 2:
                                    e = t.sent, m.value = e.filter((function(t) {
                                        return t.events
                                    })).map((function(t) {
                                        return t.events
                                    })).flat().map((function(t) {
                                        var e, r, n, l = Object(c.a)(t.date, "dd/MM/yyyy", new Date);
                                        return f(f({}, t), {}, {
                                            displayDate: (e = o.locale, r = l, n = e || "en", new Date(r).toLocaleDateString(n, {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })),
                                            CTA: Object(d.a)(l) ? "Subscribe" : "Watch"
                                        })
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))), {
                        events: m
                    }
                }
            }),
            h = r(0),
            component = Object(h.a)(v, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("PageHero", {
                    attrs: {
                        "description-full-width": t.page.heroDescriptionFullWidth
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroTitle || t.page.title) + "\n    ")]
                        },
                        proxy: !0
                    }, {
                        key: "description",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroDescription || t.page.description) + "\n    ")]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), r("div", {
                    staticClass: "d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
                }, t._l(t.events, (function(e, o) {
                    return r("LogoCard", {
                        key: o,
                        attrs: {
                            item: e
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [r("div", {
                                    staticClass: "flex items-center",
                                    class: e.eventLogo ? "justify-between" : "justify-end"
                                }, [e.eventLogo && e.eventLink ? r("AppLink", {
                                    staticClass: "z-10",
                                    attrs: {
                                        href: e.eventLink
                                    }
                                }, [r("img", {
                                    staticClass: "h-5 light-img",
                                    attrs: {
                                        src: "/img/events/light/" + e.eventLogo,
                                        alt: e.name,
                                        loading: "lazy"
                                    }
                                }), t._v(" "), r("img", {
                                    staticClass: "h-5 dark-img",
                                    attrs: {
                                        src: "/img/events/dark/" + e.eventLogo,
                                        alt: e.name,
                                        loading: "lazy"
                                    }
                                })]) : t._e(), t._v("\n          " + t._s(e.displayDate) + "\n        ")], 1)]
                            },
                            proxy: !0
                        }, {
                            key: "external",
                            fn: function() {
                                return [r("div", {
                                    staticClass: "flex items-center gap-1"
                                }, [r("span", {
                                    staticClass: "text-sm font-medium text-gray-400"
                                }, [t._v(t._s(t.$t("common.watch_video")))]), t._v(" "), r("img", {
                                    attrs: {
                                        src: "/img/icons/ext.svg",
                                        alt: "external_link",
                                        loading: "lazy"
                                    }
                                })])]
                            },
                            proxy: !0
                        }], null, !0)
                    })
                })), 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            PageHero: r(100).default,
            AppLink: r(38).default,
            LogoCard: r(119).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(3),
            n = (r(14), r(27), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function(t) {
                    var e = Object(n.useContext)(),
                        r = e.$docus,
                        l = e.i18n,
                        c = Object(n.ref)();
                    return Object(n.useFetch)(Object(o.a)(regeneratorRuntime.mark((function e() {
                        var o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.search(t.page.to, {
                                        deep: !0
                                    }).where({
                                        slug: {
                                            $ne: ""
                                        },
                                        language: l.locale
                                    }).fetch();
                                case 2:
                                    o = e.sent, c.value = o;
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))), {
                        list: c
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("PageHero", {
                    attrs: {
                        "description-full-width": t.page.heroDescriptionFullWidth
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroTitle || t.page.title) + "\n    ")]
                        },
                        proxy: !0
                    }, {
                        key: "description",
                        fn: function() {
                            return [t._v("\n      " + t._s(t.page.heroDescription || t.page.description) + "\n    ")]
                        },
                        proxy: !0
                    }, t.page.heroType ? {
                        key: "bottom",
                        fn: function() {
                            return ["partners" === t.page.heroType ? r("PartnersBottomHero") : t._e()]
                        },
                        proxy: !0
                    } : null], null, !0)
                }), t._v(" "), r("div", {
                    staticClass: "d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
                }, t._l(t.list, (function(t) {
                    return r("LogoCard", {
                        key: t.id,
                        attrs: {
                            item: t
                        }
                    })
                })), 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            PartnersBottomHero: r(317).default,
            PageHero: r(100).default,
            LogoCard: r(119).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(21),
            n = (r(25), r(23), r(1)),
            l = Object(n.defineComponent)({
                props: {
                    page: {
                        type: Object,
                        required: !0
                    }
                },
                setup: function() {
                    Object(n.onMounted)((function() {
                        if (window.location.hash) {
                            var e = window.location.hash.replace("#", "");
                            setTimeout((function() {
                                t(e, "--blogpost-scroll-margin-block")
                            }), 300)
                        }
                        setTimeout((function() {
                            [].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")), Object(o.a)(document.querySelectorAll(".docus-content h2")), Object(o.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(e) {
                                e.addEventListener("click", (function(e) {
                                    e.preventDefault(), t(e.target.href.split("#").pop(), "--blogpost-scroll-margin-block")
                                }))
                            }))
                        }), 300)
                    }));

                    function t(t, e) {
                        history.replaceState({}, "", "#" + t), setTimeout((function() {
                            var r = t.replace(/\./g, "\\."),
                                o = document.querySelector("#".concat(r)).offsetTop - function(t) {
                                    var e = document.createElement("div");
                                    e.style.position = "absolute", e.style.opacity = "0", e.style.height = getComputedStyle(document.documentElement).getPropertyValue(t), document.body.appendChild(e);
                                    var r = parseInt(getComputedStyle(e).height);
                                    return document.body.removeChild(e), r
                                }(e);
                            window.scrollTo(0, o)
                        }))
                    }
                    return {
                        today: (new Date).toISOString().split("T")[0],
                        formatDateByLocale: function(t, e) {
                            var r = t || "en";
                            return new Date(e).toLocaleDateString(r, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }
                    }
                },
                computed: {
                    imgUrl: function() {
                        var t;
                        return (null === (t = this.page.headingImg) || void 0 === t || !t.hidden) && (this.page.imgUrl || "https://source.unsplash.com/random")
                    }
                }
            }),
            c = r(0),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", {
                    staticClass: "relative py-16 sm:py-24"
                }, [r("div", {
                    staticClass: "relative max-w-3xl mx-auto"
                }, [r("AppLink", {
                    staticClass: "absolute top-0 left-0 px-4 -mt-12 sm:-mt-16",
                    attrs: {
                        to: 0 !== t.page.to.lastIndexOf("/") ? t.page.to.substr(0, t.page.to.lastIndexOf("/")) : "/"
                    }
                }, [r("span", {
                    staticClass: "\n            text-sm\n            font-medium\n            leading-none\n            text-gray-900\n            sm:text-base\n            dark:text-gray-100\n            hover:d-secondary-text\n          "
                }, [t._v("\n          ← " + t._s(t.$t("common.back")) + "\n        ")])]), t._v(" "), r("div", {
                    staticClass: "px-4 mb-6"
                }, [r("h1", {
                    staticClass: "flex-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100"
                }, [t._v("\n          " + t._s(t.page.title) + "\n        ")]), t._v(" "), r("p", {
                    staticClass: "my-4 text-base font-medium d-secondary-text"
                }, [t._v("\n          " + t._s(t.page.description) + "\n        ")]), t._v(" "), r("div", {
                    staticClass: "flex items-center sm:flex-row"
                }, [t.page.date ? r("time", {
                    staticClass: "mr-2 text-sm font-medium d-tertiary-text dark:text-cloud-lighter",
                    attrs: {
                        datetime: t.page.date
                    }
                }, [t._v("\n            " + t._s(t.formatDateByLocale(t.$i18n.locale, t.page.date)) + "\n          ")]) : t._e(), t._v(" "), t.page.authors && t.page.authors.length ? r("div", {
                    staticClass: "text-sm d-tertiary-text dark:text-cloud-lighter"
                }, [t._v("\n            |\n          ")]) : t._e(), t._v(" "), r("div", {
                    staticClass: "flex ml-4 sm:ml-2"
                }, t._l(t.page.authors, (function(e, o) {
                    return r("AppLink", {
                        key: o,
                        staticClass: "flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:d-secondary-text",
                        attrs: {
                            href: e.link,
                            rel: "noopener noindex nofollow"
                        }
                    }, [r("NuxtImg", {
                        staticClass: "inline-block w-8 h-8 border rounded-full d-border-tertiary dark:d-border-cloud-lighter sm:mr-1",
                        attrs: {
                            height: "32",
                            width: "32",
                            loading: "lazy",
                            src: e.avatarUrl,
                            alt: e.name,
                            title: e.name
                        }
                    }), t._v(" "), r("span", {
                        staticClass: "hidden text-sm font-medium sm:inline-block"
                    }, [t._v("\n                " + t._s(e.name) + "\n              ")])], 1)
                })), 1)])])], 1), t._v(" "), t.imgUrl ? r("div", {
                    staticClass: "max-w-4xl mx-auto"
                }, [r("div", {
                    staticClass: "mx-4 mb-8 bg-gray-100 aspect-w-16 aspect-h-9 dark:bg-gray-800"
                }, [r("NuxtImg", {
                    staticClass: "object-cover",
                    attrs: {
                        src: t.imgUrl,
                        alt: t.page.title,
                        loading: "lazy"
                    }
                })], 1)]) : t._e(), t._v(" "), r("div", {
                    staticClass: "max-w-3xl mx-auto"
                }, [r("BlogpostToc", {
                    staticClass: "mb-8",
                    attrs: {
                        toc: t.page.body.toc.links,
                        title: t.page.body.toc.title
                    }
                }), t._v(" "), r("DocusContent", {
                    staticClass: "px-4 docus-content",
                    attrs: {
                        document: t.page
                    }
                })], 1)])])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            AppLink: r(38).default,
            BlogpostToc: r(159).default,
            DocusContent: r(62).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "48",
                        height: "32",
                        viewBox: "0 0 48 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M26.3684 31.6843H43.8409C44.3958 31.6844 44.941 31.538 45.4216 31.2599C45.9022 30.9818 46.3013 30.5817 46.5787 30.1C46.856 29.6183 47.0019 29.0719 47.0017 28.5157C47.0014 27.9595 46.8551 27.4133 46.5773 26.9318L34.8432 6.56333C34.5659 6.08172 34.1669 5.68178 33.6864 5.40372C33.2059 5.12565 32.6608 4.97926 32.106 4.97926C31.5511 4.97926 31.006 5.12565 30.5255 5.40372C30.045 5.68178 29.6461 6.08172 29.3687 6.56333L26.3684 11.7749L20.5022 1.58384C20.2246 1.10227 19.8255 0.702392 19.3448 0.424376C18.8642 0.14636 18.319 0 17.7641 0C17.2091 0 16.664 0.14636 16.1833 0.424376C15.7027 0.702392 15.3035 1.10227 15.026 1.58384L0.424398 26.9318C0.146615 27.4133 0.000241764 27.9595 2.99232e-07 28.5157C-0.000241165 29.0719 0.145658 29.6183 0.423023 30.1C0.700388 30.5817 1.09944 30.9818 1.58004 31.2599C2.06064 31.538 2.60584 31.6844 3.16081 31.6843H14.1286C18.4742 31.6843 21.6788 29.7713 23.884 26.0393L29.2376 16.7476L32.1051 11.7749L40.7111 26.7116H29.2376L26.3684 31.6843ZM13.9498 26.7065L6.29568 26.7048L17.7692 6.79029L23.494 16.7476L19.661 23.4028C18.1966 25.8243 16.533 26.7065 13.9498 26.7065Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.29 8.384l-.547 9.368a.436.436 0 00.53.455l3.29-.77a.437.437 0 01.522.516l-.977 4.856a.436.436 0 00.55.51l2.032-.627a.436.436 0 01.551.51l-1.553 7.628c-.097.478.529.738.79.329l.173-.274 9.627-19.495c.16-.327-.117-.7-.47-.63l-3.386.663a.438.438 0 01-.499-.554l.799-2.81 9.253-1.712c.721-.133 1.27.646.912 1.296l-15.963 28.97a.861.861 0 01-1.51.006L3.133 7.646c-.365-.648.182-1.434.906-1.303l11.25 2.04z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "26",
                        height: "26",
                        viewBox: "0 0 26 26",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M0 2L13 24L26 2H16L13 7.3L10 2H0ZM3.5 4H7.271L13 14L18.729 4H22.5L13 20.1L3.5 4Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "28",
                        height: "25",
                        viewBox: "0 0 28 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M11.9467 22.3333C10 25.0933 6.20001 25.7867 3.45334 23.8667C0.720008 21.9467 0.0800078 18.12 2.00001 15.3333C2.53695 14.5538 3.24758 13.9096 4.0759 13.4514C4.90423 12.9933 5.82763 12.7338 6.77334 12.6933L6.84001 14.6C5.62667 14.6933 4.45334 15.32 3.69334 16.4133C2.36001 18.3333 2.77334 20.92 4.60001 22.2133C6.44001 23.4933 9.01334 23 10.3467 21.0933C10.76 20.4933 11 19.84 11.0933 19.1733V17.8267L18.5333 17.7733L18.6267 17.6267C19.3333 16.4 20.8667 15.9733 22.0667 16.6667C22.3539 16.8347 22.6052 17.0577 22.8062 17.3229C23.0072 17.5881 23.154 17.8903 23.2381 18.2122C23.3223 18.5341 23.3423 18.8695 23.2969 19.1991C23.2514 19.5287 23.1415 19.8462 22.9733 20.1333C22.2667 21.3467 20.72 21.7733 19.52 21.08C18.9733 20.7733 18.5867 20.28 18.4133 19.72L12.9867 19.7467C12.8277 20.673 12.4732 21.5548 11.9467 22.3333V22.3333ZM21.6533 12.8133C25.0267 13.2267 27.4267 16.2533 27.0133 19.5733C26.6 22.9067 23.5333 25.2667 20.16 24.8533C19.2232 24.7442 18.3239 24.4219 17.5312 23.9111C16.7384 23.4003 16.0732 22.7146 15.5867 21.9067L17.24 20.9467C17.582 21.4763 18.0365 21.9241 18.5711 22.2582C19.1058 22.5923 19.7074 22.8046 20.3333 22.88C22.6667 23.16 24.7333 21.5733 25.0133 19.3467C25.2933 17.12 23.64 15.08 21.3333 14.8C20.6133 14.72 19.92 14.8133 19.2933 15.04L18.16 15.6267L14.72 9.26667H14.4267C13.7554 9.24713 13.1192 8.96269 12.657 8.47552C12.1948 7.98834 11.9442 7.33803 11.96 6.66667C12 5.28001 13.2 4.20001 14.6 4.25334C16 4.33334 17.1067 5.46667 17.0667 6.85334C17.04 7.44001 16.8133 7.97334 16.4533 8.38667L18.9867 13.0667C19.8133 12.8 20.72 12.7067 21.6533 12.8133V12.8133ZM9.00001 9.18667C7.66667 6.05334 9.08001 2.46667 12.16 1.16001C15.2533 -0.14666 18.8267 1.33334 20.16 4.46667C20.9467 6.29334 20.7867 8.29334 19.8933 9.89334L18.24 8.93334C18.8 7.85334 18.8933 6.53334 18.36 5.29334C17.4533 3.16001 15.04 2.13334 12.9733 3.00001C10.8933 3.88001 9.96001 6.33334 10.8667 8.46667C11.24 9.34667 11.8667 10.0267 12.6267 10.48L13.1467 10.76L9.05334 17.4133C9.09334 17.48 9.14668 17.56 9.18668 17.6667C9.84001 18.88 9.38667 20.4133 8.16001 21.0667C6.94667 21.72 5.41334 21.24 4.74667 19.9867C4.09334 18.7467 4.54667 17.2133 5.77334 16.56C6.29334 16.28 6.86667 16.2133 7.41334 16.3333L10.4933 11.3067C9.86667 10.7333 9.33334 10.0133 9.00001 9.18667V9.18667Z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--bx",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 24 24"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.414 15.707L5 14.293L7.293 12L5 9.707l1.414-1.414L10.121 12l-3.707 3.707zM19 16h-7v-2h7v2z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--bx",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 24 24"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z",
                        fill: "currentColor"
                    }
                }), e("path", {
                    attrs: {
                        d: "M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 71 71",
                        width: "71",
                        height: "71"
                    }
                }, [e("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M60.1045 13.8978C55.5792 11.8214 50.7265 10.2916 45.6527 9.41542C45.5603 9.39851 45.468 9.44077 45.4204 9.52529C44.7963 10.6353 44.105 12.0834 43.6209 13.2216C38.1637 12.4046 32.7345 12.4046 27.3892 13.2216C26.905 12.0581 26.1886 10.6353 25.5617 9.52529C25.5141 9.44359 25.4218 9.40133 25.3294 9.41542C20.2584 10.2888 15.4057 11.8186 10.8776 13.8978C10.8384 13.9147 10.8048 13.9429 10.7825 13.9795C1.57795 27.7309 -0.943561 41.1443 0.293408 54.3914C0.299005 54.4562 0.335386 54.5182 0.385761 54.5576C6.45866 59.0174 12.3413 61.7249 18.1147 63.5195C18.2071 63.5477 18.305 63.5139 18.3638 63.4378C19.7295 61.5728 20.9469 59.6063 21.9907 57.5383C22.0523 57.4172 21.9935 57.2735 21.8676 57.2256C19.9366 56.4931 18.0979 55.6 16.3292 54.5858C16.1893 54.5041 16.1781 54.304 16.3068 54.2082C16.679 53.9293 17.0513 53.6391 17.4067 53.3461C17.471 53.2926 17.5606 53.2813 17.6362 53.3151C29.2558 58.6202 41.8354 58.6202 53.3179 53.3151C53.3935 53.2785 53.4831 53.2898 53.5502 53.3433C53.9057 53.6363 54.2779 53.9293 54.6529 54.2082C54.7816 54.304 54.7732 54.5041 54.6333 54.5858C52.8646 55.6197 51.0259 56.4931 49.0921 57.2228C48.9662 57.2707 48.9102 57.4172 48.9718 57.5383C50.038 59.6034 51.2554 61.5699 52.5959 63.435C52.6519 63.5139 52.7526 63.5477 52.845 63.5195C58.6464 61.7249 64.529 59.0174 70.6019 54.5576C70.6551 54.5182 70.6887 54.459 70.6943 54.3942C72.1747 39.0791 68.2147 25.7757 60.1968 13.9823C60.1772 13.9429 60.1437 13.9147 60.1045 13.8978ZM23.7259 46.3253C20.2276 46.3253 17.3451 43.1136 17.3451 39.1693C17.3451 35.225 20.1717 32.0133 23.7259 32.0133C27.308 32.0133 30.1626 35.2532 30.1066 39.1693C30.1066 43.1136 27.28 46.3253 23.7259 46.3253ZM47.3178 46.3253C43.8196 46.3253 40.9371 43.1136 40.9371 39.1693C40.9371 35.225 43.7636 32.0133 47.3178 32.0133C50.9 32.0133 53.7545 35.2532 53.6986 39.1693C53.6986 43.1136 50.9 46.3253 47.3178 46.3253Z"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }
                }, [e("path", {
                    attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--entypo",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 20 20"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M4.254 19.567c.307-.982.77-2.364 1.391-4.362c2.707-.429 3.827.341 5.546-2.729c-1.395.427-3.077-.792-2.987-1.321c.091-.528 3.913.381 6.416-3.173c-3.155.696-4.164-.836-3.757-1.067c.939-.534 3.726-.222 5.212-1.669c.766-.745 1.125-2.556.813-3.202c-.374-.781-2.656-1.946-3.914-1.836c-1.258.109-3.231 4.79-3.817 4.754c-.584-.037-.703-2.098.319-4.013c-1.077.477-3.051 1.959-3.67 3.226c-1.153 2.357.108 7.766-.296 7.958c-.405.193-1.766-2.481-2.172-3.694c-.555 1.859-.568 3.721 1.053 6.194c-.611 1.623-.945 3.491-.996 4.441c-.024.759.724.922.859.493z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--carbon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 32 32"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M17 24.184V20h-2v4.184a3 3 0 1 0 2 0z",
                        fill: "currentColor"
                    }
                }), e("path", {
                    attrs: {
                        d: "M26 12a3.996 3.996 0 0 0-3.858 3H9.858a4 4 0 1 0 0 2h12.284A3.993 3.993 0 1 0 26 12zM6 18a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm20 0a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2z",
                        fill: "currentColor"
                    }
                }), e("path", {
                    attrs: {
                        d: "M19 5a3 3 0 1 0-4 2.816V12h2V7.816A2.992 2.992 0 0 0 19 5z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    attrs: {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [r("g", {
                    attrs: {
                        "clip-path": "url(#clip0)"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M3 1.99999L2 2.99999L4.2 6.08099C4.29262 6.21074 4.41491 6.31646 4.55668 6.38934C4.69845 6.46223 4.85559 6.50017 5.015 6.49999H5.085C5.21648 6.49989 5.34669 6.52571 5.46818 6.57599C5.58966 6.62627 5.70004 6.70001 5.793 6.79299L8.468 9.46799L5.851 12.122C5.40339 11.9902 4.93124 11.9646 4.472 12.0471C4.01275 12.1296 3.57905 12.318 3.2053 12.5973C2.83154 12.8766 2.52802 13.2392 2.3188 13.6563C2.10959 14.0733 2.00043 14.5334 2 15C2.0006 15.4299 2.0936 15.8547 2.27271 16.2456C2.45182 16.6364 2.71285 16.9842 3.03811 17.2654C3.36337 17.5466 3.74526 17.7545 4.15792 17.8752C4.57057 17.9959 5.00434 18.0265 5.42985 17.9649C5.85535 17.9033 6.26264 17.7509 6.62413 17.5182C6.98561 17.2854 7.29284 16.9777 7.52501 16.6158C7.75717 16.2539 7.90884 15.8464 7.96975 15.4208C8.03065 14.9952 7.99936 14.5614 7.878 14.149L10.532 11.532L11.5 12.5L11.195 13.414C11.1364 13.5902 11.128 13.7792 11.1707 13.9599C11.2135 14.1405 11.3057 14.3057 11.437 14.437L14.793 17.793C14.9805 17.9805 15.2348 18.0858 15.5 18.0858C15.7652 18.0858 16.0195 17.9805 16.207 17.793L17.793 16.207C17.9805 16.0195 18.0858 15.7652 18.0858 15.5C18.0858 15.2348 17.9805 14.9805 17.793 14.793L14.437 11.437C14.3058 11.3057 14.1405 11.2135 13.9599 11.1707C13.7792 11.128 13.5902 11.1364 13.414 11.195L12.5 11.5L11.54 10.54L14.22 7.89699C14.6646 8.01567 15.1305 8.03066 15.5818 7.9408C16.0331 7.85095 16.4577 7.65866 16.8229 7.37874C17.1882 7.09883 17.4842 6.73878 17.6883 6.32636C17.8924 5.91393 17.999 5.46015 18 4.99999C18 4.73099 17.965 4.46999 17.898 4.22299L15.758 6.36399L14 5.99999L13.636 4.24299L15.777 2.10199C15.2677 1.96505 14.7313 1.9648 14.2219 2.10125C13.7124 2.2377 13.248 2.50604 12.8753 2.87922C12.5026 3.2524 12.2349 3.71723 12.0991 4.22685C11.9634 4.73647 11.9644 5.27287 12.102 5.78199L9.462 8.45999L6.793 5.79299C6.60545 5.6055 6.50006 5.35119 6.5 5.08599V5.01499C6.50002 4.85575 6.462 4.69881 6.38912 4.55723C6.31624 4.41564 6.21061 4.29351 6.081 4.20099L3 1.99999ZM12.646 12.646C12.6924 12.5994 12.7476 12.5625 12.8084 12.5373C12.8691 12.5121 12.9342 12.4991 13 12.4991C13.0658 12.4991 13.1309 12.5121 13.1916 12.5373C13.2524 12.5625 13.3076 12.5994 13.354 12.646L16.354 15.646C16.4005 15.6925 16.4374 15.7477 16.4625 15.8084C16.4877 15.8691 16.5006 15.9342 16.5006 16C16.5006 16.0657 16.4877 16.1308 16.4625 16.1916C16.4374 16.2523 16.4005 16.3075 16.354 16.354C16.3075 16.4005 16.2523 16.4374 16.1916 16.4625C16.1308 16.4877 16.0657 16.5006 16 16.5006C15.9343 16.5006 15.8692 16.4877 15.8084 16.4625C15.7477 16.4374 15.6925 16.4005 15.646 16.354L12.646 13.354C12.5994 13.3075 12.5625 13.2524 12.5373 13.1916C12.5121 13.1309 12.4991 13.0658 12.4991 13C12.4991 12.9342 12.5121 12.8691 12.5373 12.8084C12.5625 12.7476 12.5994 12.6924 12.646 12.646ZM5 13L5.471 13.242L6 13.268L6.287 13.713L6.732 14L6.758 14.529L7 15L6.758 15.471L6.732 16L6.287 16.287L6 16.732L5.471 16.758L5 17L4.529 16.758L4 16.732L3.713 16.287L3.268 16L3.242 15.471L3 15L3.242 14.529L3.268 14L3.713 13.713L4 13.268L4.529 13.242L5 13Z",
                        fill: "currentColor"
                    }
                })]), t._v(" "), r("defs", [r("clipPath", {
                    attrs: {
                        id: "clip0"
                    }
                }, [r("rect", {
                    attrs: {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(2 2)"
                    }
                })])])])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 568 289",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M105.365 183.284C161.654 157.422 219.244 64.129 227.008 7.046M181.669 1.788C177.258 33.024 83.023 133.863.76 177.934M189.542 2.732c61.84 114.358 214.646 306.74 347.993 141.883M231.098 1.304c23.17 105.268 181.771 292.873 290.458 139.889M541.033 136.009c1.939 27.604 6.824 90.458 25.987 97.575M132.872 72.038v119.676M139.04 65.938v125.776M253.581 59.892V197.26M258.992 69.637l.842 128.066M289.779 114.709v90.618M295.385 121.554l-.003 84.341M319.711 147.263v61.886M325.301 152.285l.723 57.28M352.124 173.609v43.94M358.424 177.317l.003 40.897M382.042 189.402v29.78M387.559 191.789l.784 27.827M414.444 199.134v21.416M420.23 199.346l.001 21.897M439.916 198.501v22.05M445.701 197.202v24.041M463.16 192.107v29.031M468.945 189.609v32.448M486.444 178.489v43.352M492.229 174.023l-.002 48.856M504.637 161.891v63.006M510.445 155.54v71.24M548.386 196.564v35.017M554.195 216.899l-.005 16.564M165.132 33.843v157.876M171.291 24.5l-.002 167.223",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("path", {
                    attrs: {
                        d: "M189.156 1.338l4.584-.395v286.53l-4.584 1.516V1.338z",
                        fill: "#40E5A1"
                    }
                }), e("path", {
                    attrs: {
                        fill: "#00DC82",
                        d: "M184.938 26.536h38.323v8.822h-38.323zM182.97 59.135h38.323v8.822H182.97zM182.97 91.733h38.323v8.822H182.97zM184.938 124.333h38.323v8.822h-38.323z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M227.479 1.336l4.585-.394V287.47l-4.585 1.516V1.337zM522.195 136.145l2.643-.206v127.914l-2.642 1.05-.001-128.758z",
                        fill: "#40E5A1"
                    }
                }), e("path", {
                    attrs: {
                        fill: "#00DC82",
                        d: "M520.303 140.366h17.191v4.186h-17.191zM519.42 155.834h17.191v4.186H519.42zM519.42 171.304h17.191v4.186H519.42zM520.303 186.772h17.191v4.186h-17.191z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M539.386 136.142l2.643-.206V263.85l-2.643 1.056V136.142z",
                        fill: "#40E5A1"
                    }
                }), e("path", {
                    attrs: {
                        d: "M567.372 238.089C444.413 215.892.278 215.177.278 215.177v-38.119c110.66-3.113 458.828 38.476 567.094 55.602v5.429z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M518.911 136.595l.317-.032-.317.099v-.067zM536.102 136.592l.317-.032-.317.099v-.067z",
                        stroke: "#00E889"
                    }
                }), e("path", {
                    attrs: {
                        fill: "#00DC82",
                        d: "M180.719 1.338h8.438v287.651h-8.438zM219.042 1.338h8.438v287.651h-8.438zM518.411 136.146h3.785v128.758h-3.785zM535.602 136.146h3.785v128.758h-3.785z"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 450 325",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M293.063 10.056c56.455 7.127 145.001 79.138 140.169 192.691M293.063 16.666c52.999 6.827 136.412 77.692 131.798 181.466M291.992 23.152c49.096 6.552 126.443 69.359 124.458 172.627",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "248.964",
                        cy: "180.002",
                        r: "143.734",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "248.964",
                        cy: "177.258",
                        r: "37.599",
                        stroke: "#00DC82",
                        "stroke-width": "3"
                    }
                }), e("path", {
                    attrs: {
                        d: "M273.682 117.498l-2.035 5.311c21.301 8.989 36.549 29.953 36.937 54.434h5.684c-.39-26.902-17.152-49.935-40.586-59.745z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M281.544 95.64l-2.825 7.577c29.555 12.213 50.873 40.764 51.412 74.023h7.885c-.541-36.549-23.957-68.272-56.472-81.6z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M291.548 67.793l-3.809 9.736c39.878 16.478 68.023 54.835 68.75 99.712h10.64c-.73-49.317-31.708-91.464-75.581-109.448z",
                        fill: "#00DC82"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "248.964",
                        cy: "177.259",
                        r: "18.392",
                        stroke: "#00DC82",
                        "stroke-width": "3"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "142.228",
                        cy: "199.905",
                        r: "14.94",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "225.106",
                        cy: "281.648",
                        r: "14.94",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "181.709",
                        cy: "194.289",
                        r: "9.324",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "189.858",
                        cy: "235.991",
                        r: "13.631",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                }), e("circle", {
                    attrs: {
                        cx: "248.279",
                        cy: "180.688",
                        r: "130.201",
                        stroke: "#00DC82",
                        "stroke-width": "3"
                    }
                }), e("path", {
                    attrs: {
                        d: "M401.929 282.208c24.245 0 43.9-19.655 43.9-43.901 0-24.245-19.655-43.9-43.9-43.9-3.93 0-6.503.423-10.127 1.391l-.297-4.175c3.734-.931 6.402-1.331 10.424-1.331 26.518 0 48.016 21.497 48.016 48.015 0 26.519-21.498 48.016-48.016 48.016-16.015 0-30.199-7.84-38.922-19.892l2.62-3.43c7.902 11.594 21.213 19.207 36.302 19.207z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M401.929 272.605c19.767 0 35.669-15.73 35.669-34.983 0-19.254-15.902-34.983-35.669-34.983-4.343 0-7.588.52-11.433 1.911v-4.348c3.887-1.245 7.123-1.679 11.433-1.679 21.973 0 39.785 17.505 39.785 39.099 0 21.593-17.812 39.098-39.785 39.098-14.139 0-26.555-7.248-33.611-18.17l2.744-3.391c6.163 10.414 17.651 17.446 30.867 17.446z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M401.929 263.002c13.638 0 24.694-11.056 24.694-24.694s-11.056-24.694-24.694-24.694c-5.881 0-10.474 2.055-14.715 5.487l.674-5.487c4.336-2.613 8.609-4.116 14.041-4.116 15.911 0 28.809 12.899 28.809 28.81s-12.898 28.809-28.809 28.809c-13.051 0-23.827-6.597-27.369-18.497l3.264-4.116c1.959 11.679 11.869 18.498 24.105 18.498z",
                        fill: "#00DC82"
                    }
                }), e("path", {
                    attrs: {
                        d: "M108.631 149.881H75.365V69.547c0-37.555 30.444-68 68-68h138.164v38.65",
                        stroke: "#00DC82",
                        "stroke-width": "3"
                    }
                }), e("path", {
                    attrs: {
                        stroke: "#00DC82",
                        "stroke-width": "2",
                        d: "M283.49 7.708h8.811v17.943h-8.811zM48.44 102.206h25.925v28.717H48.44zM48.838 107.08H2.796M48.838 116.868H2.796M48.838 126.392H2.796M115.194 232.746H58.853l-17.877 18.449v52.009h133.781"
                    }
                }), e("path", {
                    attrs: {
                        d: "M41.282 298.48L9.887 283.065l3.611-8.802 27.784 13.013M40.976 272.848l-30.243-14.67 3.61-8.802 26.633 12.639M8.43 242.485l7.372 3.24-6.935 15.778-7.371-3.24zM8.631 268.316l6.142 2.473L8.648 286l-6.142-2.473zM253.637 297.644v-63.268c34.998-2.159 54.249-25.026 54.249-51.609h58.098c-14.301 95.667-83.405 116.731-112.347 114.877zM137.434 176.212h58.716c2.215-32.526 25.277-50.39 52.061-50.356v-58.35c-80.088 0-110.777 74.058-110.777 108.706zM148.271 176.579c3.346-36.424 34.406-98.159 100.169-98.159M162.333 176.597c2.876-31.305 29.57-84.362 86.09-84.362M178.238 176.617c2.344-25.514 24.101-68.757 70.165-68.757M264.06 233.927v63.561M276.397 230.031v65.127M288.063 222.684v68.544M300.951 208.125v78.11M314.2 182.767v95.294M314.482 196.151h48.525M314.267 210.912h45.076M313.969 226.273h39.435M314.484 241.378l31.981.055M314.481 255.77l21.778-.028M313.804 268.183h11.119M141.187 185.053l40.49-.061M190.008 190.066l46.787 82.304M131.048 209.839l81.679 80.139",
                        stroke: "#00DC82",
                        "stroke-width": "2"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        viewBox: "0 0 39.98 40.05",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "2496",
                        height: "2500"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M32.76 19.97c0 2.53-.73 4.94-2 6.94l5.14 5.16c2.5-3.36 4.08-7.57 4.08-12.1 0-4.5-1.57-8.7-4.08-12.08l-5.13 5.16c1.26 2 2 4.3 2 6.93z",
                        fill: "#b8d3f4"
                    }
                }), e("path", {
                    attrs: {
                        d: "M20 32.8c-7.02 0-12.78-5.78-12.78-12.83 0-7.04 5.76-12.82 12.77-12.82 2.6 0 4.9.73 6.9 2.1l5.13-5.15C28.68 1.58 24.5 0 20 0 9 0 0 8.94 0 20.08s9 19.97 20 19.97c4.6 0 8.8-1.57 12.14-4.1L27 30.8c-1.98 1.26-4.4 2-7 2z",
                        fill: "#3385ff"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "10",
                        height: "12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M9.04997 4.92234c.82226.49766.82226 1.65733 0 2.155L2.34086 11.138c-.87393.5289-2.007532-.0795-2.007532-1.0775V1.93918C.333328.941171 1.46693.332732 2.34086.861675L9.04997 4.92234z",
                        fill: "#003543"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--fluent",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 28 28"
                    }
                }, [e("g", {
                    attrs: {
                        fill: "none"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M18.184 5.55l6.555 6.554a4.305 4.305 0 0 1-4.038 7.234v.246A2.415 2.415 0 0 1 18.286 22H15.5v-.826A3.173 3.173 0 0 0 12.335 18h-1.59a.75.75 0 0 0 0 1.5h1.59c.917 0 1.666.75 1.666 1.674V22H7.399A2.401 2.401 0 0 1 5 19.584v-3.15c0-.233.015-.463.043-.69A2.875 2.875 0 1 1 7.55 11.82c.831-.519 1.814-.82 2.868-.82h4.849c.729 0 1.424.144 2.06.404c.197-.332.438-.615.72-.905l-2.406-2.406a1.798 1.798 0 1 1 2.543-2.543z",
                        fill: "currentColor"
                    }
                })])])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M11.128 9.719l-6.202-1.29-.26 1.227 6.202 1.281.26-1.218zM12.745 7L7.88 2.99l-.809.963 4.866 4.01.808-.963zm-.99 1.24L6.01 5.595l-.53 1.14 5.743 2.641.533-1.134zM10.22 1l-1.015.75 3.782 5.01L14 6.01 10.219 1zm.65 10.25h-6.34v1.24h6.34v-1.24zm1.258 2.5h-8.86V10H2v5h11.395v-5h-1.268v3.75z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--carbon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 32 32"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M8 16l8-8l8 8l-8 8z",
                        fill: "currentColor"
                    }
                }), e("path", {
                    attrs: {
                        d: "M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M4.71 1h30.58C37.338 1 39 2.661 39 4.71v30.58A3.71 3.71 0 0135.29 39H4.71A3.711 3.711 0 011 35.29V4.71C1 2.662 2.662 1 4.71 1zm19.817 30.354v-.147l-.14.033c.046.039.093.077.14.114zm0 0v3.564c.602.312 1.336.542 2.153.698.816.156 1.707.23 2.597.23.891 0 1.707-.082 2.524-.253a6.398 6.398 0 002.078-.816c.601-.393 1.113-.89 1.41-1.559.297-.668.527-1.41.527-2.375 0-.675-.104-1.261-.304-1.78-.2-.52-.49-.966-.89-1.337a5.902 5.902 0 00-1.337-1.039 16.568 16.568 0 00-1.781-.89c-.304-.125-.573-.246-.84-.366a38.461 38.461 0 00-.496-.22c-.386-.194-.72-.387-.965-.58a2.65 2.65 0 01-.63-.623 1.303 1.303 0 01-.223-.742c0-.253.066-.483.2-.69.134-.208.32-.38.557-.528.237-.148.534-.26.89-.341a5.186 5.186 0 011.188-.119c.311 0 .638.023.965.07a8.255 8.255 0 012.078.579c.326.148.63.32.89.512v-3.488a9.16 9.16 0 00-1.855-.483 14.867 14.867 0 00-2.3-.155c-.892 0-1.708.096-2.524.282a5.876 5.876 0 00-2.079.89c-.6.4-1.039.89-1.41 1.559-.348.623-.52 1.336-.52 2.226 0 1.114.32 2.078.966 2.82.638.817 1.633 1.41 2.894 2.005.443.18.841.359 1.229.534l.181.082c.446.2.817.408 1.114.623.319.215.571.453.742.705.185.253.282.55.282.89a1.385 1.385 0 01-.17.668 1.46 1.46 0 01-.528.535 3.012 3.012 0 01-.89.356 5.43 5.43 0 01-1.262.126 6.729 6.729 0 01-2.375-.423 7.036 7.036 0 01-2.086-1.147zm-1.484-9.276h-4.75V35.66h-3.785V22.078h-4.75v-3.043h13.285v3.043z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    staticClass: "iconify iconify--cib",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "32",
                        height: "32",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 32 32"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M28.021 24.161l-11.552 6.505v-5.068l7.198-3.943zm.792-.713V9.839l-4.229 2.432v8.745zm-24.912.713l11.552 6.505v-5.068l-7.198-3.943zm-.792-.713V9.839l4.229 2.432v8.745zm.495-14.49l11.849-6.672v4.901l-7.646 4.188zm24.714 0L16.469 2.286v4.901l7.646 4.188zm-12.865 15.49l-7.099-3.891v-7.703l7.099 4.083zm1.016 0l7.099-3.891v-7.703l-7.099 4.083zM8.833 11.964l7.13-3.901l7.13 3.901l-7.13 4.099z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M9.655 6.345a3.56 3.56 0 01.008 5.03l-.008.008-1.575 1.575a3.566 3.566 0 01-5.038 0 3.566 3.566 0 010-5.038l.87-.87a.375.375 0 01.64.249c.014.415.089.833.226 1.236a.377.377 0 01-.088.389l-.307.307c-.657.657-.678 1.726-.027 2.39a1.69 1.69 0 002.398.011l1.575-1.574a1.687 1.687 0 00-.242-2.588.376.376 0 01-.163-.295.933.933 0 01.274-.699l.494-.493a.377.377 0 01.482-.04c.172.119.333.254.481.402zm3.303-3.303a3.566 3.566 0 00-5.038 0L6.345 4.617a3.56 3.56 0 00.481 5.441c.15.105.353.089.482-.04l.494-.494a.933.933 0 00.274-.699.376.376 0 00-.163-.295 1.687 1.687 0 01-.242-2.587l1.575-1.575a1.69 1.69 0 012.398.012c.65.663.63 1.732-.027 2.39l-.307.306a.377.377 0 00-.088.39c.137.402.212.82.227 1.235.012.326.409.48.64.249l.87-.87a3.566 3.566 0 000-5.038z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("svg", {
                    attrs: {
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M21.834 8S21.667 6.583 21 6c-.75-.833-1.583-.833-2-.833C16.167 5 12 5 12 5s-4.167 0-7 .167C4.583 5.25 3.75 5.25 3 6c-.583.583-.833 2-.833 2S2 9.583 2 11.25v1.5c0 1.584.167 3.25.167 3.25s.166 1.417.833 2c.75.834 1.75.75 2.167.834C6.75 19 12 19 12 19s4.167 0 7-.25c.417-.083 1.25-.083 2-.833.584-.584.834-2 .834-2s.166-1.583.166-3.25v-1.5C22 9.583 21.834 8 21.834 8zM9.917 14.584V9l5.416 2.834-5.416 2.75z",
                        fill: "currentColor"
                    }
                })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(1),
            n = r(125),
            l = Object(o.defineComponent)({
                name: "ShootingStar",
                mixins: [n.default],
                setup: function() {
                    var t = Object(o.ref)(null);
                    return Object(o.onMounted)((function() {
                        var e = Math.floor(Math.random() * (document.documentElement.clientWidth * (2 / 3)));
                        t.value.style.setProperty("--star-start", "".concat(e, "px"))
                    })), {
                        star: t
                    }
                }
            }),
            c = (r(863), r(0)),
            component = Object(c.a)(l, undefined, undefined, !1, null, "5607e6fc", null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("li", {
                    staticClass: "flex flex-col light:text-secondary-dark dark:text-white py-8"
                }, [r("h2", {
                    staticClass: "font-semibold text-xl"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("hr", {
                    staticClass: "mt-2 mb-4"
                }), t._v(" "), r("Markdown", {
                    staticClass: "text-lg",
                    attrs: {
                        use: "description"
                    }
                }), t._v(" "), r("Markdown", {
                    attrs: {
                        use: "sectionComponent"
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("ul", {
                    staticClass: "py-4 d-container-content overflow-visible"
                }, [e("Markdown")], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "text-sky-darker dark:text-white flex flex-col space-y-4 pt-4"
                }, [r("span", {
                    staticClass: "text-display-4 font-semibold"
                }, [t._v("DM Sans")]), t._v(" "), t._m(0), t._v(" "), r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1)
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("span", {
                    staticClass: "text-display-6 font-semibold"
                }, [t._v("The quick brown fox jumps over"), r("br"), t._v("\n    the lazy dog.")])
            }], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("AppButton", {
                    attrs: {
                        href: "https://github.com/nuxt/modules",
                        "extra-class": "gap-2 app-button-secondary-color",
                        icon: "IconGitHub",
                        size: "large"
                    }
                }, [e("Markdown", {
                    attrs: {
                        unwrap: "p"
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default,
            AppButton: r(43).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "overflow-hidden relative bg-sky-black text-white -mt-14 pt-14 md:-mt-18 md:pt-18"
                }, [r("HeroParallax"), t._v(" "), r("div", {
                    staticClass: "absolute left-0 w-full h-full overflow-hidden -top-24 z-0"
                }, t._l(80, (function(t) {
                    return r("Star", {
                        key: t
                    })
                })), 1), t._v(" "), r("div", {
                    staticClass: "flex flex-wrap justify-center py-0 section"
                }, [r("section", {
                    staticClass: "flex flex-col justify-start w-full px-4 pt-36 pb-48 md:pt-44 lg:pb-56 lg:pt-36 text-center z-20"
                }, [r("div", {
                    staticClass: "flex justify-center mb-16"
                }, [r("AppLink", {
                    staticClass: "flex items-center truncate bg-primary/25 hover:bg-primary-800 text-white border border-primary py-3 px-4 rounded",
                    attrs: {
                        to: "/lts"
                    }
                }, [r("IconStar", {
                    staticClass: "h-4 w-4 mr-2"
                }), t._v(" "), r("span", {
                    staticClass: "truncate"
                }, [t._v("Learn about Nuxt 2 Long Term Support")])], 1)], 1), t._v(" "), r("h1", {
                    staticClass: "font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 mb-6"
                }, [r("Markdown", {
                    attrs: {
                        use: "title",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("h2", {
                    staticClass: "font-normal text-body-base xs:text-body-lg md:text-body-xl 2xl:text-body-2xl mb-8 px-8 sm:px-0 text-cloud-lighter"
                }, [r("Markdown", {
                    attrs: {
                        use: "description",
                        unwrap: "p"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "flex flex-col sm:flex-row flex-wrap items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 xl:space-x-4"
                }, [r("Markdown", {
                    attrs: {
                        use: "primary-button",
                        unwrap: "p"
                    }
                }), t._v(" "), r("Markdown", {
                    attrs: {
                        use: "secondary-button",
                        unwrap: "p"
                    }
                })], 1)])])], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            HeroParallax: r(279).default,
            Star: r(125).default,
            IconStar: r(176).default,
            AppLink: r(38).default,
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "pt-16 d-container-content"
                }, [e("ul", {
                    staticClass: "flex flex-col space-y-6"
                }, [e("Markdown", {
                    attrs: {
                        use: "support-cards-list",
                        unwrap: "p"
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            Markdown: r(32).default
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(0),
            component = Object(o.a)({}, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("h1", {
                    staticClass: "font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 my-4"
                }, [t._t("default")], 2)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var o = {
                extends: r(685).a,
                mounted: function() {
                    this.renderChart({
                        labels: ["[vercel] Basic", "[netlify] Basic", "[netlify] strapi.nuxtjs.org", "[netlify] content.nuxtjs.org", "[netlify] v2.nuxt.com"],
                        datasets: [{
                            label: "Build",
                            backgroundColor: "#2d3748",
                            data: [9, 16.4, 34.3, 41, 114]
                        }, {
                            label: "Cache",
                            backgroundColor: "#108775",
                            data: [3, 5.6, 7.2, 13, 25]
                        }]
                    }, {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: "#688282"
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    color: "#688282"
                                }
                            }]
                        }
                    })
                }
            },
            n = r(0),
            component = Object(n.a)(o, undefined, undefined, !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(13), r(12), r(9), r(18), r(19);
        var o = r(7),
            n = r(667);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        e.a = c(c({}, n.a), {}, {
            cookies: {
                message: "We use Cookies for user analysis and on-page improvements!",
                link: "Learn about cookies",
                button: "Got it"
            },
            footer: {
                newsletter: {
                    title: "Newsletter",
                    description: "The latest news, articles, and resources, sent to your inbox monthly.",
                    form: {
                        email: "Email",
                        subscribing: "Subscribing...",
                        subscribe: "Subscribe",
                        already_registered: "You are already registered",
                        invalid_address: "Invalid address",
                        subscribed_messages: {
                            error: "An error occurred while sending confirmation email",
                            pre: "An email to confirm your subscription has been sent",
                            confirmation: "Email confirmed"
                        }
                    }
                },
                license: "Nuxt is an open source framework under MIT license."
            },
            sidebar: {
                ads: {
                    fallback: {
                        title: "Nuxt needs you!",
                        description: "By allowing nuxtjs.org on your Ad-Blocker, you support our work and help us financially."
                    }
                }
            },
            home: {
                discover: {
                    pages: "Pages",
                    ui: "UI",
                    data: "Data",
                    modules: "Modules",
                    deployment: "Deployment"
                },
                cli: "From CLI",
                scratch: "From Scratch"
            },
            modules: {
                search: "Search a module (name, category, username, etc.)",
                sort_by: "Sort by",
                loading: "Loading...",
                error: "An error occured while fetching modules."
            },
            resources: {
                themes: {
                    get_for_it: "Get it for {price}",
                    video_course: "Start course"
                }
            },
            sustainability: {
                tiers: {
                    mvp_sponsors: "MVP Sponsors",
                    partners: "Partners",
                    sponsors: "Sponsors",
                    donations: "Donate"
                },
                mvp_detail: {
                    services: "Services",
                    location: "Location",
                    contact_partner: "Contact {partner}",
                    follow_partner: "Follow {partner}'s activities",
                    resources: "Resources",
                    join_us: "Join us",
                    they_will_get_back_to_you: "They will get back to you asap.",
                    find_them_on_the_web: "Find them on the web.",
                    first_name: "First name",
                    last_name: "Last name",
                    company_name: "Company name",
                    email: "Email",
                    message: "Message",
                    submit: "Submit"
                }
            },
            support: {
                confirm_sending: "Message sent to technical support",
                error_sending: "Error during sending",
                invalid_adress: "Invalid address"
            },
            showcases: {
                loading: "Loading...",
                chrome_extension: "Chrome extension",
                firefox_extension: "Firefox extension",
                categories: {
                    Featured: "Featured",
                    "E-Commerce": "E-Commerce",
                    News: "News",
                    Government: "Government",
                    Sport: "Sport",
                    Education: "Education",
                    Entertainment: "Entertainment",
                    Travel: "Travel",
                    Finance: "Finance",
                    Tech: "Tech",
                    Business: "Business"
                }
            },
            releases: {
                version: "Version",
                released_on: "Released on {datetime}"
            },
            partners: {
                become_partner: "Become a partner",
                contact_success: "Your request has been sent"
            },
            translated_pages: {
                title: "Translated page",
                content_outdated: "Contents of this page might be outdated.",
                read_original_page: "Read the original page",
                contribute: "Improve translation of this page"
            },
            theme_mode: {
                system: "System",
                light: "Light",
                dark: "Dark"
            },
            common: {
                an_error_occurred: "An error occurred",
                page_not_found: "We couldn't find the page you are looking for.",
                please_define_title: "Please define a title in the front matter",
                please_define_description: "Please define a description in the front matter",
                search: 'Search ("/" to focus)',
                settings: "Settings",
                version: "Version",
                currently_version: "Currently in private beta",
                back: "Back",
                go_to: "Go to {title}",
                go_home: "Go home",
                read_article: "Read article",
                days: "days",
                hours: "hours",
                minutes: "minutes",
                seconds: "seconds",
                copied: "Copied",
                email_address_copied: "Email address copied to clipboard",
                watch_video: "Watch video",
                multiple_authors: "Multiple Authors",
                download: "Download",
                downloads: "Downloads",
                star: "Star",
                stars: "Stars"
            },
            iso: "en"
        })
    }, , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        r(689), r(690), t.exports = r(702)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        var content = r(719);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("320a33a6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, "*,:after,:before{box-sizing:border-box;border:0 solid #e4e4e7}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14,165,233,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;scrollbar-color:auto;scrollbar-width:auto}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}[role=button],button{cursor:pointer}html{-webkit-text-size-adjust:100%;font-family:DM Sans;line-height:1.5}hr{height:0;color:inherit;border-top-width:1px}blockquote,h1,h2,h3,h4,h5,hr,p,pre{margin:0}h1,h2,h3,h4,h5{font-size:inherit;font-weight:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}img{border-style:solid}input::-moz-placeholder{opacity:1;color:#a1a1aa}input:-ms-input-placeholder{opacity:1;color:#a1a1aa}input::placeholder{opacity:1;color:#a1a1aa}input::webkit-input-placeholder{opacity:1;color:#a1a1aa}input::-moz-placeholder{opacity:1;color:#a1a1aa}input:-ms-input-placeholder{opacity:1;color:#a1a1aa}input::-ms-input-placeholder{opacity:1;color:#a1a1aa}audio,iframe,img,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}code,pre{font-size:1em;font-family:DM Mono}b,strong{font-weight:bolder}button,select{text-transform:none}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::-moz-placeholder{opacity:1;color:#a1a1aa}textarea:-ms-input-placeholder{opacity:1;color:#a1a1aa}textarea::placeholder{opacity:1;color:#a1a1aa}textarea::webkit-input-placeholder{opacity:1;color:#a1a1aa}textarea::-moz-placeholder{opacity:1;color:#a1a1aa}textarea:-ms-input-placeholder{opacity:1;color:#a1a1aa}textarea::-ms-input-placeholder{opacity:1;color:#a1a1aa}ol,ul{list-style:none;margin:0;padding:0}.scrollbar-thin{--scrollbar-track:initial;--scrollbar-thumb:initial;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track);overflow:overlay;scrollbar-width:thin}.scrollbar-thin::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.scrollbar-thin::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb)}.scrollbar-thin::-webkit-scrollbar{width:8px;height:8px}.scrollbar-thumb-gray-200{--scrollbar-thumb:#e4e4e7}.dark .dark\\:scrollbar-thumb-secondary-dark{--scrollbar-thumb:#255461}.scrollbar-thumb-rounded::-webkit-scrollbar-thumb{border-radius:.25rem}.dark .dark\\:scrollbar-thumb-gray-800{--scrollbar-thumb:#27272a}.scrollbar{--scrollbar-track:initial;--scrollbar-thumb:initial;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track);overflow:overlay;scrollbar-width:auto}.scrollbar::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.scrollbar::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb)}.scrollbar::-webkit-scrollbar{width:16px;height:16px}.scrollbar-thumb-rounded-\\32 xl::-webkit-scrollbar-thumb{border-radius:1rem}.scrollbar-thumb-rounded-\\33 xl::-webkit-scrollbar-thumb{border-radius:1.5rem}.aspect-h-9{--tw-aspect-h:9}.aspect-w-4{--tw-aspect-w:4;position:relative;padding-bottom:calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)}.aspect-w-4>*{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0}.aspect-h-3{--tw-aspect-h:3}.aspect-w-16{--tw-aspect-w:16;position:relative;padding-bottom:calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)}.aspect-w-16>*{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0}.aspect-h-8{--tw-aspect-h:8}.text-display-5{font-size:2.25rem;line-height:2.5rem}.d-container-content{max-width:80rem;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}@media (min-width:640px){.d-container-content{padding-left:1.5rem;padding-right:1.5rem}}.app-button-primary-color{background-color:var(--primary-500);--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.app-button-primary-color:hover{background-color:var(--primary-400)}.app-button-primary-color:focus{--tw-ring-color:var(--primary-600)}.hover\\:d-primary-text-hover:hover{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.dark .hover\\:d-primary-text-hover:hover{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.d-secondary-text{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .d-secondary-text{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-text-primary{color:var(--primary-500)}.dark .d-text-primary{color:var(--primary-400)}.nuxt-text-highlight{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;padding:.5rem 1rem}.dark .nuxt-text-highlight{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.1}.text-body-xl{font-size:1.25rem;line-height:1.75rem}.dark .light-img,.light .dark-img{display:none}.d-icon{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .d-icon{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-icon:hover{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .d-icon:hover{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.d-icon:focus{outline:2px solid transparent;outline-offset:2px}.hover\\:d-text-primary:hover{color:var(--primary-500)}.dark .hover\\:d-text-primary:hover{color:var(--primary-400)}.d-bg-header{background-color:rgba(255,255,255,var(--tw-bg-opacity))}.d-bg-header,.dark .d-bg-header{--tw-bg-opacity:1;--tw-bg-opacity:0.8}.dark .d-bg-header{background-color:rgba(0,30,38,var(--tw-bg-opacity))}.d-scrollbar{--scrollbar-track:initial;--scrollbar-thumb:initial;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track);overflow:overlay;scrollbar-width:thin;--scrollbar-thumb:#e4e4e7}.d-scrollbar::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.d-scrollbar::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:.25rem}.d-scrollbar::-webkit-scrollbar{width:8px;height:8px}.dark .d-scrollbar{--scrollbar-thumb:#255461}.d-px-container{padding-left:1rem;padding-right:1rem}@media (min-width:640px){.d-px-container{padding-left:1.5rem;padding-right:1.5rem}}.text-display-3{font-size:3.75rem;line-height:3.75rem}.text-display-4{font-size:3rem;line-height:3rem}.text-display-6{font-size:1.875rem;line-height:2.25rem}.app-button-secondary-color{--tw-bg-opacity:1;background-color:rgba(113,113,122,var(--tw-bg-opacity));--tw-bg-opacity:0.1}.app-button-secondary-color:hover{--tw-bg-opacity:0.2}.text-body-base{font-size:1rem;line-height:1.5rem}.text-body-lg{font-size:1.125rem;line-height:1.75rem}.d-heading-description{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity));font-weight:500;font-size:1.125rem;line-height:1.5rem;margin-top:.5rem!important;margin-bottom:0!important}.dark .d-heading-description{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-container{max-width:80rem;margin-left:auto;margin-right:auto}.hover\\:d-secondary-text:hover{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .hover\\:d-secondary-text:hover{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-tertiary-text{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.dark .d-tertiary-text{--tw-text-opacity:1;color:rgba(86,107,107,var(--tw-text-opacity))}.d-border-tertiary{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity))}.dark .d-border-tertiary{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.d-blur-header{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.d-bg-header-home{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity));--tw-bg-opacity:0.8}.light .d-border{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity));--tw-border-opacity:0.5}.dark .d-border{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.d-aside-header-bg{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.d-aside-header-home-bg,.dark .d-aside-header-bg{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.hover\\:d-secondary-text-hover:hover{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .hover\\:d-secondary-text-hover:hover{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.d-header-home{background-color:rgba(0,30,38,var(--tw-bg-opacity))}.d-header,.d-header-home{border-style:none;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);--tw-bg-opacity:1;--tw-bg-opacity:0.8;height:var(--header-height);position:sticky;position:-webkit-sticky;top:0;width:100%;z-index:50}.d-header{background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark .d-header{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity));--tw-bg-opacity:0.8}.nuxt-text-highlight-hover{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;padding:.5rem 1rem}.dark .nuxt-text-highlight-hover{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.1}.light .nuxt-text-highlight-hover:hover{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.dark .nuxt-text-highlight-hover:hover{--tw-bg-opacity:0.09}.d-active-aside-navigation-item-bg{background-color:var(--primary-50)}.dark .d-active-aside-navigation-item-bg{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.d-logo{height:1.5rem;width:auto}.dark .d-logo{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}@media (min-width:768px){.d-logo{height:1.75rem}}.d-body-bg{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark .d-body-bg{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.d-body-text-color{--tw-text-opacity:1;color:rgba(0,53,67,var(--tw-text-opacity))}.dark .d-body-text-color{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.d-secondary-bg{--tw-bg-opacity:1;background-color:rgba(113,113,122,var(--tw-bg-opacity))}.dark .d-secondary-bg{--tw-bg-opacity:1;background-color:rgba(146,173,173,var(--tw-bg-opacity))}.d-secondary-text-hover{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .d-secondary-text-hover{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.d-secondary-text-active{--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity))}.dark .d-secondary-text-active{--tw-text-opacity:1;color:rgba(230,240,240,var(--tw-text-opacity))}.d-primary-text-hover{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.dark .d-primary-text-hover{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.d-prose-code-inline-bg{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}.dark .d-prose-code-inline-bg{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.d-prose-code-bg{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}.dark .d-prose-code-bg{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.d-border-header{border-style:none}.d-border-hover{border-color:var(--primary-200)}.dark .d-border-hover{--tw-border-opacity:1;border-color:rgba(37,84,97,var(--tw-border-opacity))}.d-page-mobile-toc-bg{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.8}.dark .d-page-mobile-toc-bg{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity));--tw-bg-opacity:0.8}.d-active-aside-navigation-item-text{color:var(--primary-500)}.dark .d-active-aside-navigation-item-text{color:var(--primary-400)}.d-code-group-header-bg{--tw-bg-opacity:1;background-color:rgba(228,228,231,var(--tw-bg-opacity))}.dark .d-code-group-header-bg{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.d-code-group-tab{--tw-bg-opacity:1;background-color:rgba(212,212,216,var(--tw-bg-opacity))}.dark .d-code-group-tab{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity))}.d-prose-code-filename-bg{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}.dark .d-prose-code-filename-bg{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.d-prose-code-filename-text{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.dark .d-prose-code-filename-text{--tw-text-opacity:1;color:rgba(113,162,176,var(--tw-text-opacity))}.d-prose-thead-border{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity));border-bottom-width:1px}.dark .d-prose-thead-border{--tw-border-opacity:1;border-color:rgba(37,84,97,var(--tw-border-opacity))}.d-prose-tr-border{--tw-border-opacity:1;border-color:rgba(244,244,245,var(--tw-border-opacity));border-bottom-width:1px}.dark .d-prose-tr-border{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.d-prose-blockquote-border{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity));border-left-width:2px}.dark .d-prose-blockquote-border{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.d-prose-hr-border{--tw-border-opacity:1;border-color:rgba(244,244,245,var(--tw-border-opacity));border-top-width:1px}.dark .d-prose-hr-border{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.d-prose-ul-li-bullet{--tw-bg-opacity:1;background-color:rgba(113,113,122,var(--tw-bg-opacity))}.dark .d-prose-ul-li-bullet{--tw-bg-opacity:1;background-color:rgba(146,173,173,var(--tw-bg-opacity))}.d-header-logo{display:flex;align-items:center;flex:none}@media (min-width:1024px){.d-header-logo{width:15rem}}.d-header-title{font-weight:700;font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity));letter-spacing:-.05em}.dark .d-header-title{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.d-header-title-logo{font-weight:700;font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity));letter-spacing:-.05em;margin-left:1rem}.dark .d-header-title-logo{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.d-text-icon{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .d-text-icon{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-text-icon:hover{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .d-text-icon:hover{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.d-prose-a-text{color:var(--primary-500)}.d-prose-a-border{border-color:transparent;border-bottom-width:1px}.d-prose-blockquote-text{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .d-prose-blockquote-text{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.d-aside-title{cursor:pointer;font-weight:600;font-size:1rem;line-height:1.5rem;padding-top:.5rem;padding-bottom:.5rem;--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity))}.dark .d-aside-title{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.hover\\:d-border-hover:hover{border-color:var(--primary-200)}.dark .hover\\:d-border-hover:hover{--tw-border-opacity:1;border-color:rgba(37,84,97,var(--tw-border-opacity))}.d-prose-a-border-hover{border-color:var(--primary-500);border-bottom-width:1px}.d-prose-a-headline-border{--tw-border-opacity:1;border-color:rgba(24,24,27,var(--tw-border-opacity));border-bottom:1px rgba(24,24,27,var(--tw-border-opacity));border-style:dashed}.dark .d-prose-a-headline-border{--tw-border-opacity:1;border-color:rgba(244,244,245,var(--tw-border-opacity))}.d-border-primary{border-color:var(--primary-500)}.dark .d-border-primary{border-color:var(--primary-400)}.d-bg-primary{background-color:var(--primary-500)}.dark .d-bg-primary{background-color:var(--primary-400)}.d-prose-code-inline-in-heading-border-hover{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.dark .d-prose-code-inline-in-heading-border-hover{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity))}.d-max-w-container{max-width:80rem}.d-logo-color{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.dark .d-logo-color{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.d-heading-title{flex:1 1 0%;font-weight:600;font-size:2.25rem!important;line-height:2.5rem!important;margin-bottom:0!important;margin-top:0!important;letter-spacing:-.025em}.light .d-heading-hr{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity));--tw-border-opacity:0.5}.dark .d-heading-hr{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.d-heading-hr{margin-top:1rem!important;margin-bottom:0!important}@media (min-width:414px){.xs\\:text-display-4{font-size:3rem;line-height:3rem}.xs\\:text-body-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:text-display-4{font-size:3rem;line-height:3rem}.sm\\:text-body-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:768px){.md\\:text-display-3{font-size:3.75rem;line-height:3.75rem}.md\\:text-body-xl{font-size:1.25rem;line-height:1.75rem}.md\\:text-display-5{font-size:2.25rem;line-height:2.5rem}.md\\:text-body-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:text-body-lg{font-size:1.125rem;line-height:1.75rem}.lg\\:text-body-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-body-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:hover\\:d-primary-text-hover:hover{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.dark .lg\\:hover\\:d-primary-text-hover:hover{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}}@media (min-width:1536px){.\\32 xl\\:text-display-2{font-size:4.5rem;line-height:4.5rem}.\\32 xl\\:text-display-4{font-size:3rem;line-height:3rem}.\\32 xl\\:text-body-xl{font-size:1.25rem;line-height:1.75rem}.\\32 xl\\:text-body-2xl{font-size:1.5rem;line-height:2rem}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}@media (min-width:414px){.container{max-width:414px}}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem*var(--tw-space-y-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.25rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.25rem*var(--tw-space-y-reverse))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem*var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem*var(--tw-space-x-reverse));margin-left:calc(0.5rem*(1 - var(--tw-space-x-reverse)))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem*var(--tw-space-x-reverse));margin-left:calc(0.25rem*(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem*var(--tw-space-x-reverse));margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem*var(--tw-space-x-reverse));margin-left:calc(0.75rem*(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px*var(--tw-divide-y-reverse))}.divide-gray-700>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgba(63,63,70,var(--tw-divide-opacity))}.divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgba(244,244,245,var(--tw-divide-opacity))}.dark .dark\\:divide-gray-700>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgba(63,63,70,var(--tw-divide-opacity))}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-secondary-darker{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark .dark\\:bg-transparent{background-color:transparent}.light .light\\:bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-secondary-darkest,.dark .dark\\:bg-secondary-darkest{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255,237,213,var(--tw-bg-opacity))}.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(254,215,170,var(--tw-bg-opacity))}.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity))}.bg-yellow-800{--tw-bg-opacity:1;background-color:rgba(146,64,14,var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(224,242,254,var(--tw-bg-opacity))}.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(186,230,253,var(--tw-bg-opacity))}.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity))}.bg-blue-800{--tw-bg-opacity:1;background-color:rgba(7,89,133,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(228,228,231,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(39,39,42,var(--tw-bg-opacity))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(243,232,255,var(--tw-bg-opacity))}.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(233,213,255,var(--tw-bg-opacity))}.bg-purple-800{--tw-bg-opacity:1;background-color:rgba(107,33,168,var(--tw-bg-opacity))}.dark .dark\\:bg-sky-black{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.light .light\\:hover\\:bg-gray-300:hover{--tw-bg-opacity:1;background-color:rgba(212,212,216,var(--tw-bg-opacity))}.dark .hover\\:dark\\:bg-sky-black:hover,.hover\\:bg-sky-black:hover{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.hover\\:bg-cloud-lightest:hover{--tw-bg-opacity:1;background-color:rgba(209,226,226,var(--tw-bg-opacity))}.bg-cloud-surface{--tw-bg-opacity:1;background-color:rgba(230,240,240,var(--tw-bg-opacity))}.dark .dark\\:bg-sky-dark{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity))}.dark .dark\\:bg-sky-darker{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.bg-gray-50,.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.dark .dark\\:bg-secondary-darker,.dark .dark\\:hover\\:bg-secondary-darker:hover{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark .hover\\:dark\\:bg-sky-darkest:hover{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.bg-sky-darker{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark .dark\\:bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(63,63,70,var(--tw-bg-opacity))}.dark .dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-primary-500{background-color:var(--primary-500)}.hover\\:bg-primary-400:hover{background-color:var(--primary-400)}.bg-sky-darkest,.dark .dark\\:bg-sky-darkest{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.bg-orange-400{--tw-bg-opacity:1;background-color:rgba(251,146,60,var(--tw-bg-opacity))}.bg-blue-400{--tw-bg-opacity:1;background-color:rgba(56,189,248,var(--tw-bg-opacity))}.bg-green-400{--tw-bg-opacity:1;background-color:rgba(55,233,144,var(--tw-bg-opacity))}.bg-red-400{--tw-bg-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgba(161,161,170,var(--tw-bg-opacity))}.bg-secondary-black{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.focus\\:bg-primary-400:focus{background-color:var(--primary-400)}.bg-sky-surface{--tw-bg-opacity:1;background-color:rgba(229,249,255,var(--tw-bg-opacity))}.bg-sky-black{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.bg-primary\\/25{--tw-bg-opacity:0.25;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.hover\\:bg-primary-800:hover{background-color:var(--primary-800)}.light .light\\:bg-gray-50{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.dark .dark\\:bg-secondary-black{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity))}.light .hover\\:light\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.dark .hover\\:dark\\:bg-secondary-darkest:hover{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}.bg-cloud-lightest{--tw-bg-opacity:1;background-color:rgba(209,226,226,var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(0,215,125,var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239,68,68,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(39,39,42,var(--tw-bg-opacity))}.bg-green-50{--tw-bg-opacity:1;background-color:rgba(208,252,222,var(--tw-bg-opacity))}.dark .dark\\:bg-green-800{--tw-bg-opacity:1;background-color:rgba(4,115,66,var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity:1;background-color:rgba(176,252,203,var(--tw-bg-opacity))}.dark .dark\\:bg-green-900{--tw-bg-opacity:1;background-color:rgba(19,77,46,var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgba(240,249,255,var(--tw-bg-opacity))}.dark .dark\\:bg-blue-800{--tw-bg-opacity:1;background-color:rgba(7,89,133,var(--tw-bg-opacity))}.dark .dark\\:bg-blue-900{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity))}.dark .dark\\:bg-secondary-dark{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity))}.bg-purple-50{--tw-bg-opacity:1;background-color:rgba(250,245,255,var(--tw-bg-opacity))}.dark .dark\\:bg-purple-800{--tw-bg-opacity:1;background-color:rgba(107,33,168,var(--tw-bg-opacity))}.dark .dark\\:bg-purple-900{--tw-bg-opacity:1;background-color:rgba(88,28,135,var(--tw-bg-opacity))}.bg-yellow-50{--tw-bg-opacity:1;background-color:rgba(255,251,235,var(--tw-bg-opacity))}.dark .dark\\:bg-yellow-800{--tw-bg-opacity:1;background-color:rgba(146,64,14,var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(254,243,199,var(--tw-bg-opacity))}.dark .dark\\:bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity:1;background-color:rgba(254,242,242,var(--tw-bg-opacity))}.dark .dark\\:bg-red-800{--tw-bg-opacity:1;background-color:rgba(153,27,27,var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity:1;background-color:rgba(254,226,226,var(--tw-bg-opacity))}.dark .dark\\:bg-red-900{--tw-bg-opacity:1;background-color:rgba(127,29,29,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(24,24,27,var(--tw-bg-opacity))}.focus\\:bg-primary-300:focus{background-color:var(--primary-300)}.bg-green-800{--tw-bg-opacity:1;background-color:rgba(4,115,66,var(--tw-bg-opacity))}.bg-sand{--tw-bg-opacity:1;background-color:rgba(156,156,106,var(--tw-bg-opacity))}.bg-sand-dark{--tw-bg-opacity:1;background-color:rgba(99,99,48,var(--tw-bg-opacity))}.bg-sand-darker{--tw-bg-opacity:1;background-color:rgba(59,59,0,var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity:1;background-color:rgba(0,187,106,var(--tw-bg-opacity))}.bg-green-700{--tw-bg-opacity:1;background-color:rgba(0,153,86,var(--tw-bg-opacity))}.bg-indigo-light{--tw-bg-opacity:1;background-color:rgba(64,139,214,var(--tw-bg-opacity))}.bg-indigo{--tw-bg-opacity:1;background-color:rgba(0,100,200,var(--tw-bg-opacity))}.bg-indigo-dark{--tw-bg-opacity:1;background-color:rgba(0,85,170,var(--tw-bg-opacity))}.bg-indigo-darker{--tw-bg-opacity:1;background-color:rgba(0,70,140,var(--tw-bg-opacity))}.bg-mint-lighter{--tw-bg-opacity:1;background-color:rgba(168,221,219,var(--tw-bg-opacity))}.bg-mint-light{--tw-bg-opacity:1;background-color:rgba(126,177,176,var(--tw-bg-opacity))}.bg-mint{--tw-bg-opacity:1;background-color:rgba(85,136,135,var(--tw-bg-opacity))}.bg-mint-dark{--tw-bg-opacity:1;background-color:rgba(46,97,96,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(14,165,233,var(--tw-bg-opacity))}.hover\\:bg-sky-darker:hover{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.hover\\:bg-sky-surface:hover{--tw-bg-opacity:1;background-color:rgba(229,249,255,var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(113,113,122,var(--tw-bg-opacity))}.dark .dark\\:bg-cloud-light{--tw-bg-opacity:1;background-color:rgba(146,173,173,var(--tw-bg-opacity))}.bg-primary-50{background-color:var(--primary-50)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgba(212,212,216,var(--tw-bg-opacity))}.bg-primary-100{background-color:var(--primary-100)}.dark .dark\\:bg-primary-800{background-color:var(--primary-800)}.hover\\:bg-primary-600:hover{background-color:var(--primary-600)}.dark .dark\\:bg-primary-900{background-color:var(--primary-900)}.bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(24,24,27,var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgba(245,158,11,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:rgba(82,82,91,var(--tw-bg-opacity))}.hover\\:bg-primary-100:hover{background-color:var(--primary-100)}.bg-yellow-400{--tw-bg-opacity:1;background-color:rgba(251,191,36,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-400{--tw-bg-opacity:1;background-color:rgba(161,161,170,var(--tw-bg-opacity))}.dark .dark\\:bg-primary-400{background-color:var(--primary-400)}.dark .dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgba(63,63,70,var(--tw-bg-opacity))}.bg-none{background-image:none}.dark .hover\\:dark\\:bg-opacity-80:hover{--tw-bg-opacity:0.8}.dark .dark\\:bg-opacity-10{--tw-bg-opacity:0.1}.dark .dark\\:bg-opacity-25{--tw-bg-opacity:0.25}.dark .dark\\:bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-80,.dark .dark\\:bg-opacity-80{--tw-bg-opacity:0.8}.hover\\:bg-opacity-9:hover{--tw-bg-opacity:0.09}.bg-opacity-25{--tw-bg-opacity:0.25}.light .light\\:border-gray-200{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity))}.dark .dark\\:border-secondary-dark{--tw-border-opacity:1;border-color:rgba(37,84,97,var(--tw-border-opacity))}.light .light\\:focus\\:border-gray-400:focus{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity))}.dark .dark\\:focus\\:border-secondary-light:focus{--tw-border-opacity:1;border-color:rgba(113,162,176,var(--tw-border-opacity))}.border-transparent{border-color:transparent}.dark .dark\\:border-sky-dark{--tw-border-opacity:1;border-color:rgba(37,84,97,var(--tw-border-opacity))}.\\!border-sky-darker{--tw-border-opacity:1!important;border-color:rgba(0,53,67,var(--tw-border-opacity))!important}.light .light\\:border-gray-500{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.border-primary{--tw-border-opacity:1;border-color:rgba(0,220,130,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity))}.dark .dark\\:border-sky-darker{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.border-green-400{--tw-border-opacity:1;border-color:rgba(55,233,144,var(--tw-border-opacity))}.border-blue-400{--tw-border-opacity:1;border-color:rgba(56,189,248,var(--tw-border-opacity))}.border-purple-400{--tw-border-opacity:1;border-color:rgba(192,132,252,var(--tw-border-opacity))}.border-yellow-400{--tw-border-opacity:1;border-color:rgba(251,191,36,var(--tw-border-opacity))}.border-red-400{--tw-border-opacity:1;border-color:rgba(248,113,113,var(--tw-border-opacity))}.dark .dark\\:border-gray-800{--tw-border-opacity:1;border-color:rgba(39,39,42,var(--tw-border-opacity))}.border-sky-darker,.dark .dark\\:border-secondary-darker{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.border-primary-200{border-color:var(--primary-200)}.border-gray-100{--tw-border-opacity:1;border-color:rgba(244,244,245,var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgba(212,212,216,var(--tw-border-opacity))}.dark .dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgba(82,82,91,var(--tw-border-opacity))}.dark .dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgba(63,63,70,var(--tw-border-opacity))}.hover\\:border-primary-500:hover{border-color:var(--primary-500)}.dark .dark\\:hover\\:border-primary-400:hover{border-color:var(--primary-400)}.border-primary-500{border-color:var(--primary-500)}.border-gray-700{--tw-border-opacity:1;border-color:rgba(63,63,70,var(--tw-border-opacity))}.dark .dark\\:border-gray-500{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.border-gray-900{--tw-border-opacity:1;border-color:rgba(24,24,27,var(--tw-border-opacity))}.dark .dark\\:border-gray-100{--tw-border-opacity:1;border-color:rgba(244,244,245,var(--tw-border-opacity))}.dark .dark\\:border-primary-400{border-color:var(--primary-400)}.border-gray-500{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.dark .dark\\:border-gray-200{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity))}.border-t-sky-light{--tw-border-opacity:1;border-top-color:rgba(113,162,176,var(--tw-border-opacity))}.border-b-sky-dark{--tw-border-opacity:1;border-bottom-color:rgba(37,84,97,var(--tw-border-opacity))}.border-opacity-50,.dark .dark\\:border-opacity-50,.light .light\\:border-opacity-50{--tw-border-opacity:0.5}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-tl-none{border-top-left-radius:0}.rounded-tr-none{border-top-right-radius:0}.border-dashed{border-style:dashed}.border-none{border-style:none}.border,.border-1{border-width:1px}.border-2{border-width:2px}.border-3{border-width:3px}.border-0{border-width:0}.border-l-4{border-left-width:4px}.border-t{border-top-width:1px}.border-b-2{border-bottom-width:2px}.border-r-2{border-right-width:2px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-l-2{border-left-width:2px}.border-t-0{border-top-width:0}.border-b-1{border-bottom-width:1px}.border-l-0{border-left-width:0}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.contents{display:contents}.dark .dark\\:hidden,.hidden,.light .light\\:hidden{display:none}.flex-row{flex-direction:row}.flex-row,.flex-row-reverse{-webkit-box-orient:horizontal}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-none{flex:none}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.flex-shrink{flex-shrink:1}.order-last{order:9999}.order-first{order:-9999}.font-serif{font-family:DM Serif Display}.font-mono{font-family:DM Mono}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-light{font-weight:300}.h-5{height:1.25rem}.h-4{height:1rem}.h-0\\.5{height:.125rem}.h-3{height:.75rem}.h-8{height:2rem}.h-12{height:3rem}.h-64{height:16rem}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-20{height:5rem}.h-24{height:6rem}.h-auto{height:auto}.h-1{height:.25rem}.h-full{height:100%}.h-0{height:0}.h-\\(full-header\\){height:calc(100% - var(--header-height))}.h-32{height:8rem}.h-4\\/5{height:80%}.h-40{height:10rem}.h-28{height:7rem}.h-80{height:20rem}.h-screen{height:100vh}.h-header{height:var(--header-height)}.h-16{height:4rem}.h-2{height:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-6xl{font-size:3.75rem;line-height:1}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-root{font-size:16px}.\\!text-4xl{font-size:2.25rem!important;line-height:2.5rem!important}.text-1\\.2rem{font-size:1.2rem;line-height:1}.leading-4{line-height:1rem}.leading-2{line-height:.5rem}.leading-loose{line-height:2}.leading-normal{line-height:1.5}.leading-5{line-height:1.25rem}.leading-none{line-height:1}.\\.leading-6,.leading-6{line-height:1.5rem}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-7{line-height:1.75rem}.leading-tight{line-height:1.25}.list-none{list-style-type:none}.m-0{margin:0}.m-auto{margin:auto}.m-1{margin:.25rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-4{margin-left:1rem;margin-right:1rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-0{margin-top:0;margin-bottom:0}.my-\\[0\\.25em\\]{margin-top:.25em;margin-bottom:.25em}.mx-0{margin-left:0;margin-right:0}.my-\\[1\\.25em\\]{margin-top:1.25em;margin-bottom:1.25em}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-1\\.5{margin-top:.375rem;margin-bottom:.375rem}.my-12{margin-top:3rem;margin-bottom:3rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mb-4{margin-bottom:1rem}.mt-8{margin-top:2rem}.mb-2{margin-bottom:.5rem}.mr-1{margin-right:.25rem}.mt-2{margin-top:.5rem}.mr-6{margin-right:1.5rem}.mt-1{margin-top:.25rem}.mt-4{margin-top:1rem}.mb-1{margin-bottom:.25rem}.mt-auto{margin-top:auto}.mr-4{margin-right:1rem}.ml-4{margin-left:1rem}.ml-3{margin-left:.75rem}.mt-18{margin-top:4.5rem}.ml-0{margin-left:0}.ml-20{margin-left:5rem}.mt-0{margin-top:0}.mb-20{margin-bottom:5rem}.mr-8{margin-right:2rem}.mt-20{margin-top:5rem}.mt-40{margin-top:10rem}.mb-40{margin-bottom:10rem}.mb-12{margin-bottom:3rem}.mb-8{margin-bottom:2rem}.-mt-28{margin-top:-7rem}.-mt-16{margin-top:-4rem}.-mt-14{margin-top:-3.5rem}.mb-16{margin-bottom:4rem}.mb-6{margin-bottom:1.5rem}.-mt-24{margin-top:-6rem}.-mt-20{margin-top:-5rem}.-mt-12{margin-top:-3rem}.mt-16{margin-top:4rem}.-mb-2{margin-bottom:-.5rem}.mt-0\\.5{margin-top:.125rem}.-mt-6{margin-top:-1.5rem}.-ml-2{margin-left:-.5rem}.mb-3{margin-bottom:.75rem}.-mb-48{margin-bottom:-12rem}.-mt-10{margin-top:-2.5rem}.mt-28{margin-top:7rem}.mt-12{margin-top:3rem}.-ml-4{margin-left:-1rem}.mt-3{margin-top:.75rem}.mt-px{margin-top:1px}.mr-3{margin-right:.75rem}.mt-\\[1\\.5em\\]{margin-top:1.5em}.mb-\\[1\\.5em\\]{margin-bottom:1.5em}.mt-\\[1em\\]{margin-top:1em}.mt-\\[1\\.25em\\]{margin-top:1.25em}.mr-0\\.5{margin-right:.125rem}.mt-10{margin-top:2.5rem}.ml-auto{margin-left:auto}.\\!mb-0{margin-bottom:0!important}.\\!mt-0{margin-top:0!important}.\\!mt-2{margin-top:.5rem!important}.\\!mt-4{margin-top:1rem!important}.max-h-56{max-height:14rem}.max-h-20{max-height:5rem}.max-h-36{max-height:9rem}.max-h-\\(screen-header\\){max-height:calc(100vh - var(--header-height))}.max-h-64{max-height:16rem}.max-h-\\[50vh\\]{max-height:50vh}.max-w-48{max-width:12rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-sm{max-width:24rem}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-2xl{max-width:42rem}.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.min-h-0{min-height:0}.min-h-screen-sm{min-height:640px}.min-h-fill-available{min-height:-webkit-fill-available}.min-h-\\[500px\\]{min-height:500px}.min-w-0{min-width:0}.min-w-base{min-width:320px}.min-w-xs{min-width:20rem}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-fill{-o-object-fit:fill;object-fit:fill}.opacity-50{opacity:.5}.group:hover .group-hover\\:opacity-100,.opacity-100{opacity:1}.opacity-0{opacity:0}.group:hover .group-hover\\:opacity-10{opacity:.1}.group:hover .dark .group-hover\\:dark\\:opacity-20{opacity:.2}.group:hover .group-hover\\:opacity-0{opacity:0}.hover\\:opacity-75:hover,.opacity-75{opacity:.75}.focus\\:outline-none:focus,.outline-none{outline:2px solid transparent;outline-offset:2px}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.p-2{padding:.5rem}.p-4{padding:1rem}.p-1{padding:.25rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-3{padding:.75rem}.p-0{padding:0}.p-1\\.5{padding:.375rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-12{padding-left:3rem;padding-right:3rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-40{padding-top:10rem;padding-bottom:10rem}.py-0{padding-top:0;padding-bottom:0}.py-16{padding-top:4rem;padding-bottom:4rem}.px-0\\.5{padding-left:.125rem;padding-right:.125rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-3px{padding-top:3px;padding-bottom:3px}.px-6px{padding-left:6px;padding-right:6px}.py-px{padding-top:1px;padding-bottom:1px}.pt-2{padding-top:.5rem}.pl-3{padding-left:.75rem}.pr-10{padding-right:2.5rem}.pt-1{padding-top:.25rem}.pb-2{padding-bottom:.5rem}.pb-8{padding-bottom:2rem}.pb-4{padding-bottom:1rem}.pt-0\\.5{padding-top:.125rem}.pr-4{padding-right:1rem}.pb-12{padding-bottom:3rem}.pt-4{padding-top:1rem}.pb-1{padding-bottom:.25rem}.pt-8{padding-top:2rem}.pl-12{padding-left:3rem}.pr-0{padding-right:0}.pt-24{padding-top:6rem}.pb-32{padding-bottom:8rem}.pt-10{padding-top:2.5rem}.pb-16{padding-bottom:4rem}.pb-20{padding-bottom:5rem}.pt-20{padding-top:5rem}.pb-48{padding-bottom:12rem}.pt-16{padding-top:4rem}.pb-24{padding-bottom:6rem}.pt-14{padding-top:3.5rem}.pt-36{padding-top:9rem}.pt-18{padding-top:4.5rem}.pb-60{padding-bottom:15rem}.pl-4{padding-left:1rem}.pr-3{padding-right:.75rem}.pt-12{padding-top:3rem}.pr-20{padding-right:5rem}.pl-2{padding-left:.5rem}.first\\:pl-0:first-child{padding-left:0}.last\\:pr-0:last-child{padding-right:0}.pt-0{padding-top:0}.pr-24{padding-right:6rem}.placeholder-gray-900::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(24,24,27,var(--tw-placeholder-opacity))}.placeholder-gray-900:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(24,24,27,var(--tw-placeholder-opacity))}.placeholder-gray-900::placeholder{--tw-placeholder-opacity:1;color:rgba(24,24,27,var(--tw-placeholder-opacity))}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(161,161,170,var(--tw-placeholder-opacity))}.placeholder-gray-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(161,161,170,var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgba(161,161,170,var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-600::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(82,82,91,var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-600:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(82,82,91,var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-600::placeholder{--tw-placeholder-opacity:1;color:rgba(82,82,91,var(--tw-placeholder-opacity))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static,.target\\:static:target{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky;position:-webkit-sticky}.inset-0{right:0;left:0}.inset-0,.inset-y-0{top:0;bottom:0}.inset-x-0{right:0;left:0}.-bottom-2{bottom:-.5rem}.right-0{right:0}.right-4{right:1rem}.bottom-0{bottom:0}.top-4{top:1rem}.left-0{left:0}.top-0{top:0}.-top-40{top:-10rem}.top-1\\/2{top:50%}.left-1\\/2{left:50%}.top-full{top:100%}.bottom-8{bottom:2rem}.-left-5{left:-1.25rem}.left-6{left:1.5rem}.top-6{top:1.5rem}.top-header{top:var(--header-height)}.left-30{left:7.5rem}.top-10{top:2.5rem}.left-1\\/3{left:33.333333%}.top-1\\/4{top:25%}.left-20{left:5rem}.-bottom-1px{bottom:-1px}.-bottom-1\\.5{bottom:-.375rem}.-top-24{top:-6rem}.bottom-full{bottom:100%}.top-\\[-2px\\]{top:-2px}.left-\\[-2px\\]{left:-2px}.top-\\[0\\.5em\\]{top:.5em}.resize-none{resize:none}.shadow-lg{--tw-shadow-color:0,0,0;--tw-shadow:0 10px 15px -3px rgba(var(--tw-shadow-color),0.1),0 4px 6px -2px rgba(var(--tw-shadow-color),0.05)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow{--tw-shadow-color:0,0,0;--tw-shadow:0 1px 3px 0 rgba(var(--tw-shadow-color),0.1),0 1px 2px 0 rgba(var(--tw-shadow-color),0.06)}.shadow-md{--tw-shadow-color:0,0,0;--tw-shadow:0 4px 6px -1px rgba(var(--tw-shadow-color),0.1),0 2px 4px -1px rgba(var(--tw-shadow-color),0.06)}.hover\\:shadow-lg:hover,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-lg:hover{--tw-shadow-color:0,0,0;--tw-shadow:0 10px 15px -3px rgba(var(--tw-shadow-color),0.1),0 4px 6px -2px rgba(var(--tw-shadow-color),0.05)}.hover\\:shadow-none:hover,.shadow-none{--tw-shadow-color:0,0,0;--tw-shadow:none}.hover\\:shadow-none:hover,.shadow-none,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-sm{--tw-shadow-color:0,0,0;--tw-shadow:0 1px 2px 0 rgba(var(--tw-shadow-color),0.05)}.focus\\:ring-2:focus,.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-2:focus,.ring-1,.ring-2{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-offset-white:focus{--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(255,255,255,var(--tw-ring-offset-opacity))}.dark .dark\\:focus\\:ring-offset-gray-900:focus{--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(24,24,27,var(--tw-ring-offset-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.ring-primary{--tw-ring-opacity:1;--tw-ring-color:rgba(0,220,130,var(--tw-ring-opacity))}.focus\\:ring-primary-600:focus{--tw-ring-color:var(--primary-600)}.ring-sky-dark{--tw-ring-opacity:1;--tw-ring-color:rgba(37,84,97,var(--tw-ring-opacity))}.ring-gray-200{--tw-ring-opacity:1;--tw-ring-color:rgba(228,228,231,var(--tw-ring-opacity))}.dark .dark\\:ring-sky-dark{--tw-ring-opacity:1;--tw-ring-color:rgba(37,84,97,var(--tw-ring-opacity))}.focus\\:ring-transparent:focus{--tw-ring-color:transparent}.dark .dark\\:ring-gray-800{--tw-ring-opacity:1;--tw-ring-color:rgba(39,39,42,var(--tw-ring-opacity))}.table-auto{table-layout:auto}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.light .light\\:text-gray-500{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-primary{--tw-text-opacity:1;color:rgba(0,220,130,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\\:text-secondary{--tw-text-opacity:1;color:rgba(73,122,135,var(--tw-text-opacity))}.light .light\\:text-gray-300{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.text-orange-300{--tw-text-opacity:1;color:rgba(253,186,116,var(--tw-text-opacity))}.text-blue-300{--tw-text-opacity:1;color:rgba(125,211,252,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.text-sky-dark{--tw-text-opacity:1;color:rgba(37,84,97,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.dark .dark\\:text-cloud-light{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.dark .dark\\:text-cloud-lighter{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.hover\\:text-sky-dark:hover{--tw-text-opacity:1;color:rgba(37,84,97,var(--tw-text-opacity))}.text-cloud-lighter{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.dark .dark\\:text-sky-darker,.group:hover .group-hover\\:text-sky-darker{--tw-text-opacity:1;color:rgba(0,53,67,var(--tw-text-opacity))}.dark .dark\\:text-cloud-surface{--tw-text-opacity:1;color:rgba(230,240,240,var(--tw-text-opacity))}.dark .group:hover .dark\\:group-hover\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.light .light\\:text-sky-darker{--tw-text-opacity:1;color:rgba(0,53,67,var(--tw-text-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity))}.dark .dark\\:hover\\:text-gray-100:hover{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.hover\\:text-sky-surface:hover{--tw-text-opacity:1;color:rgba(229,249,255,var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity:1;color:rgba(228,228,231,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(39,39,42,var(--tw-text-opacity))}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(228,228,231,var(--tw-text-opacity))}.text-sky-black{--tw-text-opacity:1;color:rgba(0,30,38,var(--tw-text-opacity))}.focus\\:text-gray-500:focus,.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.text-orange-400{--tw-text-opacity:1;color:rgba(251,146,60,var(--tw-text-opacity))}.text-blue-400{--tw-text-opacity:1;color:rgba(56,189,248,var(--tw-text-opacity))}.text-green-400{--tw-text-opacity:1;color:rgba(55,233,144,var(--tw-text-opacity))}.text-red-400{--tw-text-opacity:1;color:rgba(248,113,113,var(--tw-text-opacity))}.hover\\:text-primary:hover{--tw-text-opacity:1;color:rgba(0,220,130,var(--tw-text-opacity))}.light .light\\:text-secondary-dark{--tw-text-opacity:1;color:rgba(37,84,97,var(--tw-text-opacity))}.text-sky-darker{--tw-text-opacity:1;color:rgba(0,53,67,var(--tw-text-opacity))}.text-cloud{--tw-text-opacity:1;color:rgba(104,130,130,var(--tw-text-opacity))}.light .light\\:text-secondary-black,.text-secondary-black{--tw-text-opacity:1;color:rgba(0,30,38,var(--tw-text-opacity))}.text-tertiary{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.text-gray-50{--tw-text-opacity:1;color:rgba(250,250,250,var(--tw-text-opacity))}.light .light\\:text-cloud{--tw-text-opacity:1;color:rgba(104,130,130,var(--tw-text-opacity))}.group:hover .group-hover\\:text-primary-400{color:var(--primary-400)}.text-gray-100{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(24,24,27,var(--tw-text-opacity))}.dark .dark\\:text-gray-100{--tw-text-opacity:1;color:rgba(244,244,245,var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:rgba(0,187,106,var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgba(2,132,199,var(--tw-text-opacity))}.text-purple-600{--tw-text-opacity:1;color:rgba(147,51,234,var(--tw-text-opacity))}.text-yellow-600{--tw-text-opacity:1;color:rgba(217,119,6,var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:rgba(220,38,38,var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-primary-400:hover{color:var(--primary-400)}.hover\\:text-cloud-light:hover,.text-cloud-light{--tw-text-opacity:1;color:rgba(146,173,173,var(--tw-text-opacity))}.dark .dark\\:text-secondary-surface,.text-secondary-surface{--tw-text-opacity:1;color:rgba(229,249,255,var(--tw-text-opacity))}.hover\\:text-cloud-lighter:hover{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}.hover\\:text-gray-300:hover{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.hover\\:text-sky-black:hover{--tw-text-opacity:1;color:rgba(0,30,38,var(--tw-text-opacity))}.dark .dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-cloud-lightest:hover{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.text-sky-lighter{--tw-text-opacity:1;color:rgba(149,205,222,var(--tw-text-opacity))}.text-secondary-darker{--tw-text-opacity:1;color:rgba(0,53,67,var(--tw-text-opacity))}.text-secondary{--tw-text-opacity:1;color:rgba(73,122,135,var(--tw-text-opacity))}.dark .dark\\:text-cloud-lightest{--tw-text-opacity:1;color:rgba(209,226,226,var(--tw-text-opacity))}.text-primary-500{color:var(--primary-500)}.dark .dark\\:text-primary-400{color:var(--primary-400)}.dark .dark\\:text-secondary-light{--tw-text-opacity:1;color:rgba(113,162,176,var(--tw-text-opacity))}.dark .dark\\:text-cloud-dark{--tw-text-opacity:1;color:rgba(86,107,107,var(--tw-text-opacity))}.dark .dark\\:text-gray-500{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity))}.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark .dark\\:hover\\:text-gray-400:hover{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgba(14,165,233,var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgba(0,215,125,var(--tw-text-opacity))}.text-yellow-500{--tw-text-opacity:1;color:rgba(245,158,11,var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .dark\\:text-gray-600,.hover\\:text-gray-600:hover{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.text-current{color:currentColor}.text-rose-500{--tw-text-opacity:1;color:rgba(244,63,94,var(--tw-text-opacity))}.text-primary-200{color:var(--primary-200)}.text-primary-300{color:var(--primary-300)}.dark .hover\\:dark\\:text-gray-400:hover{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.dark .dark\\:text-yellow-500{--tw-text-opacity:1;color:rgba(245,158,11,var(--tw-text-opacity))}.dark .dark\\:text-gray-50{--tw-text-opacity:1;color:rgba(250,250,250,var(--tw-text-opacity))}.truncate{overflow:hidden;white-space:nowrap}.overflow-ellipsis,.truncate{text-overflow:ellipsis}.italic{font-style:italic}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.hover\\:underline:hover,.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{text-decoration:none}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-tighter{letter-spacing:-.05em}.tracking-semitight{letter-spacing:-.0125em}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.align-top{vertical-align:top}.align-bottom{vertical-align:bottom}.visible{visibility:visible}.whitespace-nowrap{white-space:nowrap}.w-full{width:100%}.w-4{width:1rem}.w-5{width:1.25rem}.w-8{width:2rem}.group:hover .group-hover\\:w-full{width:100%}.w-auto{width:auto}.w-3{width:.75rem}.w-2{width:.5rem}.w-40{width:10rem}.w-12{width:3rem}.w-10{width:2.5rem}.w-6{width:1.5rem}.w-3\\/4{width:75%}.w-48{width:12rem}.w-24{width:6rem}.w-0{width:0}.w-1\\/3{width:33.333333%}.w-1\\/2{width:50%}.w-32{width:8rem}.w-60{width:15rem}.\\!w-base{width:320px!important}.w-16{width:4rem}.w-1\\.5{width:.375rem}.w-14{width:3.5rem}.w-max{width:-webkit-max-content;width:-moz-max-content;width:max-content}.z-30{z-index:30}.z-50{z-index:50}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.-z-1{z-index:-1}.gap-4{grid-gap:1rem;gap:1rem}.gap-6{grid-gap:1.5rem;gap:1.5rem}.gap-2{grid-gap:.5rem;gap:.5rem}.gap-8{grid-gap:2rem;gap:2rem}.gap-20{grid-gap:5rem;gap:5rem}.gap-12{grid-gap:3rem;gap:3rem}.gap-1{grid-gap:.25rem;gap:.25rem}.gap-10{grid-gap:2.5rem;gap:2.5rem}.gap-3{grid-gap:.75rem;gap:.75rem}.gap-0{grid-gap:0;gap:0}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.col-span-full{-ms-grid-column-span:1/-1;grid-column:1/-1}.col-span-12{-ms-grid-column-span:span 12/span 12;grid-column:span 12/span 12}.auto-rows-min{grid-auto-rows:-webkit-min-content;grid-auto-rows:min-content}.transform{--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z))}.origin-top-right{transform-origin:top right}.scale-95{--tw-scale-x:.95;--tw-scale-y:.95;--tw-scale-z:.95}.scale-100{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}.rotate-45{--tw-rotate:45deg}.rotate-90{--tw-rotate:90deg}.rotate-0{--tw-rotate:0deg}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-y-1\\/2{--tw-translate-y:-50%}.transition-colors{transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.\\<transition,.transition,.transition\\._,.transition\\.name{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-linear{transition-timing-function:linear}.ease,.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-800{transition-duration:.8s}.duration{transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-75{transition-duration:75ms}.delay-200{transition-delay:.2s}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.animate-pulse{-webkit-animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite;animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animated{-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;animation-duration:1s;animation-fill-mode:both}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.sepia{--tw-sepia:sepia(100%)}.blur-12{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.blur\\(8px\\),.blur\\(12px\\){-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}@media (min-width:414px){.xs\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem*var(--tw-space-x-reverse));margin-left:calc(0.5rem*(1 - var(--tw-space-x-reverse)))}.xs\\:flex-row{flex-direction:row}.xs\\:order-last{order:9999}.xs\\:text-5xl{font-size:3rem;line-height:1}.xs\\:my-0{margin-top:0}.xs\\:mb-0,.xs\\:my-0{margin-bottom:0}.xs\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.xs\\:py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.xs\\:w-1\\/2{width:50%}.xs\\:w-auto{width:auto}.xs\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:640px){.sm\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px*var(--tw-space-y-reverse))}.sm\\:space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem*var(--tw-space-x-reverse));margin-left:calc(0.75rem*(1 - var(--tw-space-x-reverse)))}.sm\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem*var(--tw-space-x-reverse));margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))}.sm\\:block{display:block}.sm\\:inline-block{display:inline-block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:flex-row{flex-direction:row}.sm\\:items-end{align-items:flex-end}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:h-32{height:8rem}.sm\\:h-20{height:5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-xs{font-size:.75rem;line-height:1rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.5rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-base{font-size:1rem;line-height:1.5rem}.sm\\:text-6xl{font-size:3.75rem;line-height:1}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}.sm\\:leading-none{line-height:1}.sm\\:mb-0{margin-bottom:0}.sm\\:ml-0{margin-left:0}.sm\\:mr-20{margin-right:5rem}.sm\\:mr-16{margin-right:4rem}.sm\\:-mt-40{margin-top:-10rem}.sm\\:-mt-8{margin-top:-2rem}.sm\\:-mt-16{margin-top:-4rem}.sm\\:ml-2{margin-left:.5rem}.sm\\:mr-2{margin-right:.5rem}.sm\\:mr-1{margin-right:.25rem}.sm\\:mt-36{margin-top:9rem}.sm\\:mt-0{margin-top:0}.sm\\:mb-8{margin-bottom:2rem}.sm\\:mb-12{margin-bottom:3rem}.sm\\:mb-4{margin-bottom:1rem}.sm\\:overflow-x-visible{overflow-x:visible}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-0{padding-top:0;padding-bottom:0}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:py-24{padding-top:6rem;padding-bottom:6rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:px-2{padding-left:.5rem;padding-right:.5rem}.sm\\:px-3{padding-left:.75rem;padding-right:.75rem}.sm\\:pb-2{padding-bottom:.5rem}.sm\\:pb-56{padding-bottom:14rem}.sm\\:pb-28{padding-bottom:7rem}.sm\\:pb-20{padding-bottom:5rem}.sm\\:pt-20{padding-top:5rem}.sm\\:pl-6{padding-left:1.5rem}.sm\\:pl-0{padding-left:0}.sm\\:left-auto{left:auto}.sm\\:right-0{right:0}.sm\\:bottom-1\\/4{bottom:25%}.sm\\:top-1\\.5{top:.375rem}.sm\\:text-center{text-align:center}.sm\\:whitespace-normal{white-space:normal}.sm\\:w-96{width:24rem}.sm\\:w-2\\/3{width:66.666667%}.sm\\:w-full{width:100%}.sm\\:w-32{width:8rem}.sm\\:w-1\\/3{width:33.333333%}.sm\\:w-580px{width:580px}.sm\\:gap-6{grid-gap:1.5rem;gap:1.5rem}.sm\\:gap-12{grid-gap:3rem;gap:3rem}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:768px){.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px*var(--tw-space-y-reverse))}.md\\:border-b{border-bottom-width:1px}.md\\:grid{display:-ms-grid;display:grid}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:items-stretch{align-items:stretch}.md\\:justify-between{justify-content:space-between}.md\\:h-24{height:6rem}.md\\:h-7{height:1.75rem}.md\\:h-8{height:2rem}.md\\:text-lg{font-size:1.125rem;line-height:1.5rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:my-8{margin-top:2rem;margin-bottom:2rem}.md\\:my-16{margin-top:4rem;margin-bottom:4rem}.md\\:mx-0{margin-left:0;margin-right:0}.md\\:my-24{margin-top:6rem;margin-bottom:6rem}.md\\:ml-12{margin-left:3rem}.md\\:mt-8{margin-top:2rem}.md\\:mr-28{margin-right:7rem}.md\\:-mt-18{margin-top:-4.5rem}.md\\:mb-12{margin-bottom:3rem}.md\\:mt-48{margin-top:12rem}.md\\:mb-0{margin-bottom:0}.md\\:max-h-96{max-height:24rem}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:px-16{padding-left:4rem;padding-right:4rem}.md\\:px-0{padding-left:0;padding-right:0}.md\\:py-24{padding-top:6rem;padding-bottom:6rem}.md\\:pb-6{padding-bottom:1.5rem}.md\\:pb-64{padding-bottom:16rem}.md\\:pb-36{padding-bottom:9rem}.md\\:pt-18{padding-top:4.5rem}.md\\:pt-44{padding-top:11rem}.md\\:pt-24{padding-top:6rem}.md\\:pl-0{padding-left:0}.md\\:pr-0{padding-right:0}.md\\:pb-12{padding-bottom:3rem}.md\\:pl-2{padding-left:.5rem}.md\\:text-left{text-align:left}.md\\:w-1\\/2{width:50%}.md\\:w-md{width:28rem}.md\\:w-1\\/3{width:33.333333%}.md\\:gap-20{grid-gap:5rem;gap:5rem}.md\\:gap-4{grid-gap:1rem;gap:1rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.md\\:ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:1024px){.lg\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px*var(--tw-space-y-reverse))}.lg\\:space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem*var(--tw-space-x-reverse));margin-left:calc(0.75rem*(1 - var(--tw-space-x-reverse)))}.lg\\:space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem*var(--tw-space-x-reverse));margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)))}.dark .dark\\:lg\\:bg-transparent,.lg\\:bg-transparent{background-color:transparent}.dark .dark\\:lg\\:border-transparent,.lg\\:border-transparent{border-color:transparent}.dark .lg\\:dark\\:border-sky-darker{--tw-border-opacity:1;border-color:rgba(0,53,67,var(--tw-border-opacity))}.lg\\:rounded-xl{border-radius:.75rem}.lg\\:border-b{border-bottom-width:1px}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:inline-flex{display:inline-flex}.lg\\:hidden{display:none}.lg\\:flex-row{flex-direction:row}.lg\\:flex-row-reverse{flex-direction:row-reverse}.lg\\:flex-col{flex-direction:column}.lg\\:items-start{align-items:flex-start}.lg\\:justify-start{justify-content:flex-start}.lg\\:flex-1{flex:1 1 0%}.lg\\:flex-none{flex:none}.lg\\:flex-shrink-0{flex-shrink:0}.lg\\:h-40{height:10rem}.lg\\:h-screen{height:100vh}.lg\\:h-\\[reset\\]{height:reset}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-base{font-size:1rem;line-height:1.5rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:mr-60{margin-right:15rem}.lg\\:mt-20{margin-top:5rem}.lg\\:mr-40{margin-right:10rem}.lg\\:ml-40{margin-left:10rem}.lg\\:-mt-2{margin-top:-.5rem}.lg\\:mt-0{margin-top:0}.lg\\:mb-0{margin-bottom:0}.lg\\:-mt-60{margin-top:-15rem}.lg\\:ml-20{margin-left:5rem}.lg\\:-mt-32{margin-top:-8rem}.lg\\:mb-6{margin-bottom:1.5rem}.lg\\:mt-32{margin-top:8rem}.lg\\:mt-64{margin-top:16rem}.lg\\:mr-0{margin-right:0}.lg\\:max-h-full{max-height:100%}.lg\\:max-w-sm{max-width:24rem}.lg\\:overflow-visible{overflow:visible}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:px-18{padding-left:4.5rem;padding-right:4.5rem}.lg\\:py-16{padding-top:4rem;padding-bottom:4rem}.lg\\:px-0{padding-left:0;padding-right:0}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:py-24{padding-top:6rem;padding-bottom:6rem}.lg\\:px-2{padding-left:.5rem;padding-right:.5rem}.lg\\:pb-0{padding-bottom:0}.lg\\:pt-24{padding-top:6rem}.lg\\:pb-32{padding-bottom:8rem}.lg\\:pb-72{padding-bottom:18rem}.lg\\:pb-48{padding-bottom:12rem}.lg\\:pb-28{padding-bottom:7rem}.lg\\:pb-56{padding-bottom:14rem}.lg\\:pt-36{padding-top:9rem}.lg\\:pb-80{padding-bottom:20rem}.lg\\:pt-38{padding-top:9.5rem}.lg\\:pt-0{padding-top:0}.lg\\:pr-0{padding-right:0}.lg\\:pt-8{padding-top:2rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:pr-8{padding-right:2rem}.lg\\:static{position:static}.lg\\:sticky{position:sticky;position:-webkit-sticky}.lg\\:top-0{top:0}.lg\\:top-1\\/2{top:50%}.lg\\:left-0{left:0}.lg\\:top-header{top:var(--header-height)}.lg\\:top-1\\/3{top:33.333333%}.lg\\:left-60{left:15rem}.lg\\:text-left{text-align:left}.lg\\:w-1\\/2{width:50%}.lg\\:w-full{width:100%}.lg\\:w-1\\/5{width:20%}.lg\\:w-4\\/5{width:80%}.lg\\:w-1\\/4{width:25%}.lg\\:w-3\\/4{width:75%}.lg\\:w-60{width:15rem}.lg\\:w-2\\/3{width:66.666667%}.lg\\:w-1\\/3{width:33.333333%}.lg\\:z-0{z-index:0}.lg\\:gap-2{grid-gap:.5rem;gap:.5rem}.lg\\:gap-8{grid-gap:2rem;gap:2rem}.lg\\:gap-0{grid-gap:0;gap:0}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:col-span-7{-ms-grid-column-span:span 7/span 7;grid-column:span 7/span 7}.lg\\:col-span-full{-ms-grid-column-span:1/-1;grid-column:1/-1}.lg\\:blur-0{-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}}@media (min-width:1280px){.xl\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem*var(--tw-space-x-reverse));margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))}.xl\\:space-x-0>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0px*var(--tw-space-x-reverse));margin-left:calc(0px*(1 - var(--tw-space-x-reverse)))}.xl\\:space-x-5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem*var(--tw-space-x-reverse));margin-left:calc(1.25rem*(1 - var(--tw-space-x-reverse)))}.dark .dark\\:xl\\:bg-transparent,.xl\\:bg-transparent{background-color:transparent}.xl\\:border-0{border-width:0}.xl\\:block{display:block}.xl\\:flex{display:flex}.xl\\:hidden{display:none}.xl\\:flex-row{flex-direction:row}.xl\\:flex-col,.xl\\:flex-row{}.xl\\:flex-col{flex-direction:column}.xl\\:items-start{align-items:flex-start}.xl\\:items-center{align-items:center}.xl\\:justify-between{justify-content:space-between}.xl\\:order-first{order:-9999}.xl\\:h-24{height:6rem}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:-mt-80{margin-top:-20rem}.xl\\:mt-12{margin-top:3rem}.xl\\:mt-24{margin-top:6rem}.xl\\:mt-0{margin-top:0}.xl\\:pb-92{padding-bottom:23rem}.xl\\:pt-10{padding-top:2.5rem}.xl\\:pb-40{padding-bottom:10rem}.xl\\:pt-40{padding-top:10rem}.xl\\:pb-16{padding-bottom:4rem}.xl\\:pl-12{padding-left:3rem}.xl\\:relative{position:relative}.xl\\:sticky{position:sticky;position:-webkit-sticky}.xl\\:top-header{top:var(--header-height)}.xl\\:left-0{left:0}.xl\\:top-0{top:0}.xl\\:text-left{text-align:left}.xl\\:w-2\\/3{width:66.666667%}.xl\\:w-4xl{width:56rem}.xl\\:w-3\\/4{width:75%}.xl\\:w-1\\/4{width:25%}.xl\\:w-60{width:15rem}.xl\\:w-\\[70\\%\\]{width:70%}.xl\\:w-\\[30\\%\\]{width:30%}.xl\\:gap-12{grid-gap:3rem;gap:3rem}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1536px){.\\32 xl\\:h-full{height:100%}.\\32 xl\\:text-base{font-size:1rem;line-height:1.5rem}.\\32 xl\\:pb-128{padding-bottom:32rem}.\\32 xl\\:pb-60{padding-bottom:15rem}.\\32 xl\\:pb-102{padding-bottom:25.5rem}.\\32 xl\\:right-1\\/12{right:8.333333%}.\\32 xl\\:gap-8{grid-gap:2rem;gap:2rem}}", ""]), o.locals = {}, t.exports = o
    }, , , , , function(t, e, r) {
        var content = r(725);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(11).default)("9b04bdbe", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ":root{--header-height:3.5rem;--docs-scroll-margin-block:calc(var(--header-height) + 4rem);--blogpost-scroll-margin-block:calc(var(--header-height))}@media (min-width:768px){:root{--header-height:4.5rem;--blogpost-scroll-margin-block:calc(var(--header-height) - 0.5rem)}}@media (min-width:1280px){:root{--docs-scroll-margin-block:calc(var(--header-height) + 1rem)}}a:focus-visible,button:focus-visible,div:focus-visible{outline:none;border-radius:2px;box-shadow:0 0 0 2px #00dc82}", ""]), o.locals = {}, t.exports = o
    }, , , , , , , function(t, e, r) {
        "use strict";
        r(382)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".nuxt-link-active[data-v-b674f0e6]{color:#34d399}.menu li[data-v-b674f0e6]{display:block;position:relative}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(383)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".app-button[data-v-911f294c]{border-color:transparent;border-radius:.375rem;border-width:1px;display:inline-flex;align-items:center;flex:none;font-weight:500;font-size:.875rem;line-height:1.25rem;line-height:1rem;padding:.625rem 1rem;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s}.app-button[data-v-911f294c]:focus{outline:2px solid transparent;outline-offset:2px}.app-button.small[data-v-911f294c]{font-size:.75rem;line-height:1rem;line-height:.5rem;padding-top:.5rem;padding-bottom:.5rem}.app-button.large[data-v-911f294c]{font-size:1rem;line-height:1.5rem}.icon[data-v-911f294c]{height:1rem;width:1rem}.icon.large[data-v-911f294c]{height:1.25rem;width:1.25rem}", ""]), o.locals = {}, t.exports = o
    }, , function(t, e, r) {
        "use strict";
        r(384)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".DocSearch{--docsearch-primary-color:#00dc82;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-text-color:#71717a;--docsearch-modal-background:#f4f4f5;--docsearch-searchbox-shadow:0 0 0 2px var(--docsearch-primary-color);--docsearch-searchbox-background:var(--color-transparent);--docsearch-searchbox-focus-background:var(--color-transparent);--docsearch-hit-color:var(--color-gray-700);--docsearch-hit-shadow:none;--docsearch-logo-color:var(--docsearch-text-color);--docsearch-muted-color:var(--color-gray-500);--docsearch-container-background:rgb(244 244 245/55%)}.dark .DocSearch{--docsearch-text-color:#92adad;--docsearch-modal-background:#003543;--docsearch-modal-shadow:inset 1px 1px 0 0 #052f14,0 3px 8px 0 #0b160d;--docsearch-hit-color:var(--color-gray-300);--docsearch-hit-background:#012a35;--docsearch-footer-background:#012a35;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-container-background:rgb(0 30 38/64%)}.DocSearch-Container{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}@media (min-width:1024px){.DocSearch-Modal{border-radius:.75rem!important}}.DocSearch-SearchBar{padding-bottom:.25rem!important}.DocSearch-Button{background-color:transparent!important;border-radius:.125rem!important;height:3rem!important;margin:auto!important;width:3rem!important}.DocSearch-Button:focus{outline:2px solid transparent!important;outline-offset:2px!important}.DocSearch-Button:hover{--tw-shadow-color:0,0,0!important;--tw-shadow:none!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.DocSearch-Button>svg{margin-left:auto!important;margin-right:auto!important}.DocSearch-Button-Key,.DocSearch-Button-Placeholder{display:none!important}.DocSearch-NoResults>.DocSearch-Screen-Icon>svg{margin-left:auto!important;margin-right:auto!important}.DocSearch-Commands-Key{background-image:none!important;border-radius:.25rem!important;border-width:1px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;height:auto!important;padding:.25rem!important;--tw-shadow-color:0,0,0!important;--tw-shadow:none!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important;width:auto!important}.light .DocSearch-Commands-Key{--tw-border-opacity:1!important;border-color:rgba(113,113,122,var(--tw-border-opacity))!important}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(385)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".notification-container[data-v-3c59015a]{border-radius:.5rem;overflow:hidden;pointer-events:auto;position:relative;--tw-shadow-color:0,0,0;--tw-shadow:0 10px 15px -3px rgba(var(--tw-shadow-color),0.1),0 4px 6px -2px rgba(var(--tw-shadow-color),0.05);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);width:100%;z-index:50;-webkit-animation:transition-opacity-data-v-3c59015a .5s ease-in-out;animation:transition-opacity-data-v-3c59015a .5s ease-in-out}@-webkit-keyframes transition-opacity-data-v-3c59015a{0%{opacity:0}to{opacity:1}}@keyframes transition-opacity-data-v-3c59015a{0%{opacity:0}to{opacity:1}}", ""]), o.locals = {}, t.exports = o
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "state", (function() {
            return o
        })), r.d(e, "mutations", (function() {
            return n
        }));
        var o = function() {
                return {
                    adBlocked: !1
                }
            },
            n = {
                setAdBlocked: function(t, e) {
                    t.adBlocked = e
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(409)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".nui-support-nuxt{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;padding:.5rem 1rem;display:flex;flex-direction:row;align-items:center;margin-top:1rem;width:100%}.dark .nui-support-nuxt{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.1}@media (min-width:640px){.nui-support-nuxt{flex-direction:column;margin-top:0;width:10rem}}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(410)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".light .Carbon .carbon-text{--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity))}.light .Carbon .carbon-text:hover{--tw-text-opacity:1;color:rgba(39,39,42,var(--tw-text-opacity))}.Carbon{display:flex;flex-direction:column;margin-top:1rem;max-width:100%;padding:1rem}@media (min-width:640px){.Carbon{max-width:20rem}}@media (min-width:1024px){.Carbon{margin-top:0;max-width:160px}}.Carbon #carbonads span{flex-direction:column;justify-content:space-between}.Carbon #carbonads span,.Carbon #carbonads span .carbon-wrap{display:flex;-webkit-box-orient:vertical}.Carbon #carbonads span .carbon-wrap{flex-direction:column;flex:1}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap{flex-direction:row}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap{flex-direction:column}}.Carbon #carbonads span .carbon-wrap .carbon-img{display:flex;align-items:flex-start;justify-content:center;margin-bottom:1rem}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap .carbon-img{margin-bottom:0}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap .carbon-img{margin-bottom:1rem}}.Carbon #carbonads span .carbon-wrap .carbon-text{display:block;flex:1 1 0%;font-size:.875rem;line-height:1.25rem;line-height:1.625;margin:0;text-align:left;width:100%}.Carbon #carbonads span .carbon-wrap .carbon-text:hover{text-decoration:none}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap .carbon-text{margin-left:1rem}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap .carbon-text{margin-left:0}}.Carbon img{width:100%}.Carbon .carbon-poweredby{display:block;font-size:.75rem;line-height:1rem;margin-left:.5rem;padding-top:.5rem;text-align:right;--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.Carbon .carbon-poweredby:hover{--tw-text-opacity:1;color:rgba(113,113,122,var(--tw-text-opacity));text-decoration:none}", ""]), o.locals = {}, t.exports = o
    }, , , , , , , function(t, e, r) {
        "use strict";
        r(421)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".alert.success[data-v-427b9508]{background-color:rgba(208,252,222,var(--tw-bg-opacity));color:rgba(0,187,106,var(--tw-text-opacity))}.alert.success[data-v-427b9508],.dark .alert.success[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.success[data-v-427b9508]{background-color:rgba(4,115,66,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(140,250,183,var(--tw-text-opacity))}.alert.success[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(176,252,203,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.success[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(19,77,46,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.success[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(55,233,144,var(--tw-border-opacity))}.dark .alert.success[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(0,153,86,var(--tw-border-opacity))}.alert.info[data-v-427b9508]{background-color:rgba(240,249,255,var(--tw-bg-opacity));color:rgba(2,132,199,var(--tw-text-opacity))}.alert.info[data-v-427b9508],.dark .alert.info[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.info[data-v-427b9508]{background-color:rgba(7,89,133,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(186,230,253,var(--tw-text-opacity))}.alert.info[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(224,242,254,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.info[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.info[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(56,189,248,var(--tw-border-opacity))}.dark .alert.info[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(3,105,161,var(--tw-border-opacity))}.alert.next[data-v-427b9508]{background-color:rgba(250,250,250,var(--tw-bg-opacity));color:rgba(82,82,91,var(--tw-text-opacity))}.alert.next[data-v-427b9508],.dark .alert.next[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.next[data-v-427b9508]{background-color:rgba(1,42,53,var(--tw-bg-opacity));color:rgba(183,225,237,var(--tw-text-opacity))}.alert.next[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.next[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.next[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity))}.dark .alert.next[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(113,162,176,var(--tw-border-opacity))}.alert.star[data-v-427b9508]{background-color:rgba(250,245,255,var(--tw-bg-opacity));color:rgba(147,51,234,var(--tw-text-opacity))}.alert.star[data-v-427b9508],.dark .alert.star[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.star[data-v-427b9508]{background-color:rgba(107,33,168,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(233,213,255,var(--tw-text-opacity))}.alert.star[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(243,232,255,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.star[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(88,28,135,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.star[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(192,132,252,var(--tw-border-opacity))}.dark .alert.star[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(126,34,206,var(--tw-border-opacity))}.alert.warning[data-v-427b9508]{background-color:rgba(255,251,235,var(--tw-bg-opacity));color:rgba(217,119,6,var(--tw-text-opacity))}.alert.warning[data-v-427b9508],.dark .alert.warning[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.warning[data-v-427b9508]{background-color:rgba(146,64,14,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(254,243,199,var(--tw-text-opacity))}.alert.warning[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(254,243,199,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.warning[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.warning[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(251,191,36,var(--tw-border-opacity))}.dark .alert.warning[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(180,83,9,var(--tw-border-opacity))}.alert.danger[data-v-427b9508]{background-color:rgba(254,242,242,var(--tw-bg-opacity));color:rgba(220,38,38,var(--tw-text-opacity))}.alert.danger[data-v-427b9508],.dark .alert.danger[data-v-427b9508]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.danger[data-v-427b9508]{background-color:rgba(153,27,27,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(254,226,226,var(--tw-text-opacity))}.alert.danger[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(254,226,226,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.danger[data-v-427b9508] code{--tw-bg-opacity:1;background-color:rgba(127,29,29,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.danger[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(248,113,113,var(--tw-border-opacity))}.dark .alert.danger[data-v-427b9508] a:hover code{--tw-border-opacity:1;border-color:rgba(185,28,28,var(--tw-border-opacity))}.alert[data-v-427b9508] a,.alert[data-v-427b9508] strong{font-weight:600;color:currentColor}.alert[data-v-427b9508] a{border-style:none}.alert[data-v-427b9508] a:hover{opacity:.5}.alert[data-v-427b9508] a code{border:1px dashed transparent}.alert[data-v-427b9508] p{margin:0!important}.dark .alert[data-v-427b9508] a{color:currentColor}", ""]), o.locals = {}, t.exports = o
    }, , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(430)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, "option[data-v-7052e5e4]{font:-moz-pull-down-menu}.dark option[data-v-7052e5e4]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(431)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".ListCard:hover{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.dark .ListCard{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark .ListCard:hover{--tw-bg-opacity:0.8}.ListCard{border-radius:.375rem;display:flex;flex-direction:column;justify-content:space-between;padding:1.5rem 1rem;position:relative;--tw-shadow-color:0,0,0;--tw-shadow:0 4px 6px -1px rgba(var(--tw-shadow-color),0.1),0 2px 4px -1px rgba(var(--tw-shadow-color),0.06);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.ListCard-external{cursor:pointer;height:1.5rem;opacity:0;position:absolute;top:1rem;right:1rem;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s}", ""]), o.locals = {}, t.exports = o
    }, , , , function(t, e, r) {
        t.exports = r.p + "img/cliContent1.7f527cb.svg"
    }, function(t, e, r) {
        t.exports = r.p + "img/cliContent2.7191311.svg"
    }, function(t, e, r) {
        "use strict";
        r(433)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".fromcli__container[data-v-6986e173]{display:-ms-grid;display:grid;margin-top:2rem;position:absolute;top:0;left:0;width:100%;grid-template-columns:repeat(12,minmax(0,1fr))}.fromcli__code[data-v-6986e173]{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity));border-radius:.375rem;overflow:hidden;padding:1.25rem;position:relative;top:-10rem;-ms-grid-column-span:1/-1;grid-column:1/-1;height:280px}@media (min-width:1024px){.fromcli__code[data-v-6986e173]{top:0;-ms-grid-column-span:span 7/span 7;grid-column:span 7/span 7}}.fromcli__display__logo[data-v-6986e173]{top:50%;left:50%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-translate-x:-50%;--tw-translate-y:-50%;height:60px}.fromcli__display[data-v-6986e173],.fromcli__display__logo[data-v-6986e173]{position:absolute;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z))}.fromcli__display[data-v-6986e173]{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;opacity:0;overflow:hidden;right:0;top:100%;width:100%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-translate-y:-50%;height:120%;-webkit-animation:appear-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards,slideRight-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards;animation:appear-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards,slideRight-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards}@media (min-width:1024px){.fromcli__display[data-v-6986e173]{top:50%;width:50%}}.fromcli__display_loading[data-v-6986e173]{opacity:0;overflow:hidden;-webkit-animation:appear-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.5s forwards,disappear-data-v-6986e173 .2s 10.4s forwards;animation:appear-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 3.5s forwards,disappear-data-v-6986e173 .2s 10.4s forwards}.fromcli__display__content[data-v-6986e173]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;height:100%;padding-left:4rem;padding-right:4rem;position:absolute;top:0;left:0;width:100%}.fromcli__display__content img[data-v-6986e173]{opacity:0;transform:translateY(40px)}.fromcli__display__content img[data-v-6986e173]:first-child{align-self:flex-start;margin-bottom:1rem;height:36px;-webkit-animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 10.9s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 10.9s forwards;animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 10.9s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 10.9s forwards}.fromcli__display__content img[data-v-6986e173]:nth-child(2){margin-bottom:1rem;width:100%;-webkit-animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 11.1s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 11.1s forwards;animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 11.1s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 11.1s forwards}.fromcli__display__content img[data-v-6986e173]:last-child{width:100%;-webkit-animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 11.3s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 11.3s forwards;animation:slideUpContent-data-v-6986e173 .3s cubic-bezier(.83,0,.17,1) 11.3s forwards,appear-data-v-6986e173 .15s cubic-bezier(.83,0,.17,1) 11.3s forwards}.fromcli__display__progressbar[data-v-6986e173]{position:absolute;left:50%;bottom:2rem;width:50%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));--tw-translate-x:-50%;-webkit-animation:fadeOutSlideDown-data-v-6986e173 .5s cubic-bezier(.83,0,.17,1) 5.3s forwards;animation:fadeOutSlideDown-data-v-6986e173 .5s cubic-bezier(.83,0,.17,1) 5.3s forwards}.fromcli__display__progressbar__background[data-v-6986e173]{--tw-bg-opacity:1;background-color:rgba(161,161,170,var(--tw-bg-opacity));border-radius:9999px;position:absolute;left:0;top:0;width:100%;height:10px}.fromcli__display__progressbar__progress[data-v-6986e173]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));border-radius:9999px;opacity:0;position:absolute;left:0;top:0;width:0;height:10px;-webkit-animation:progress-data-v-6986e173 1.5s cubic-bezier(.83,0,.17,1) 3.8s forwards;animation:progress-data-v-6986e173 1.5s cubic-bezier(.83,0,.17,1) 3.8s forwards}.fromcli__code__bash[data-v-6986e173]{opacity:1;-webkit-animation:disappear-data-v-6986e173 .2s ease 10.4s forwards;animation:disappear-data-v-6986e173 .2s ease 10.4s forwards}.fromcli__code__wrapper[data-v-6986e173]{-webkit-animation:slideUp-data-v-6986e173 1.3s ease 5s forwards;animation:slideUp-data-v-6986e173 1.3s ease 5s forwards}span[class*=fromcli__yarn][data-v-6986e173]{display:inline-block;overflow:hidden;white-space:nowrap;width:0;border-right:.15em solid transparent;letter-spacing:.75px}span[class*=fromcli__yarn].fromcli__yarn__createnuxtapp[data-v-6986e173]{-webkit-animation:typingVeryLong-data-v-6986e173 1.5s steps(12) forwards,blink-caret-data-v-6986e173 .75s step-end 4 backwards;animation:typingVeryLong-data-v-6986e173 1.5s steps(12) forwards,blink-caret-data-v-6986e173 .75s step-end 4 backwards}span[class*=fromcli__yarn].fromcli__yarn__cd[data-v-6986e173]{-webkit-animation:typingSmall-data-v-6986e173 1s steps(12) 7.6s forwards,blink-caret-data-v-6986e173 .75s step-end 7.6s 2 backwards;animation:typingSmall-data-v-6986e173 1s steps(12) 7.6s forwards,blink-caret-data-v-6986e173 .75s step-end 7.6s 2 backwards}span[class*=fromcli__yarn].fromcli__yarn__run[data-v-6986e173]{-webkit-animation:typingRunDev-data-v-6986e173 1s steps(12) 8.6s forwards,blink-caret-data-v-6986e173 .75s step-end 8.6s 3 backwards;animation:typingRunDev-data-v-6986e173 1s steps(12) 8.6s forwards,blink-caret-data-v-6986e173 .75s step-end 8.6s 3 backwards}.fromcli__seconddollar[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s ease 7.6s forwards;animation:appear-data-v-6986e173 .15s ease 7.6s forwards}.fromcli__thirddollar[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s ease 8.6s forwards;animation:appear-data-v-6986e173 .15s ease 8.6s forwards}.fromcli__question1[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s ease 3.2s forwards;animation:appear-data-v-6986e173 .15s ease 3.2s forwards}.fromcli__question2[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s ease 3.35s forwards;animation:appear-data-v-6986e173 .15s ease 3.35s forwards}.fromcli__question2__answer[data-v-6986e173]{opacity:0;--tw-text-opacity:1;color:rgba(0,220,130,var(--tw-text-opacity));-webkit-animation:appear-data-v-6986e173 .15s ease 4.2s forwards;animation:appear-data-v-6986e173 .15s ease 4.2s forwards}.fromcli__question2__answer1[data-v-6986e173]{opacity:0;overflow:hidden;-webkit-animation:appear-data-v-6986e173 .15s ease 3.5s forwards,heightDisappear-data-v-6986e173 .15s ease 4.2s forwards;animation:appear-data-v-6986e173 .15s ease 3.5s forwards,heightDisappear-data-v-6986e173 .15s ease 4.2s forwards}.fromcli__question2__answer2[data-v-6986e173]{opacity:0;overflow:hidden;-webkit-animation:appear-data-v-6986e173 .15s ease 3.65s forwards,heightDisappear-data-v-6986e173 .15s ease 4.2s forwards;animation:appear-data-v-6986e173 .15s ease 3.65s forwards,heightDisappear-data-v-6986e173 .15s ease 4.2s forwards}.fromcli__question3[data-v-6986e173],.fromcli__question4[data-v-6986e173],.fromcli__question5[data-v-6986e173],.fromcli__question6[data-v-6986e173],.fromcli__question7[data-v-6986e173],.fromcli__question8[data-v-6986e173]{height:0;overflow:hidden}.fromcli__question3[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 4.6s forwards;animation:heightAppear-data-v-6986e173 .15s ease 4.6s forwards}.fromcli__question4[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 4.75s forwards;animation:heightAppear-data-v-6986e173 .15s ease 4.75s forwards}.fromcli__question5[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 4.9s forwards;animation:heightAppear-data-v-6986e173 .15s ease 4.9s forwards}.fromcli__question6[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 5.05s forwards;animation:heightAppear-data-v-6986e173 .15s ease 5.05s forwards}.fromcli__question7[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 5.2s forwards;animation:heightAppear-data-v-6986e173 .15s ease 5.2s forwards}.fromcli__question8[data-v-6986e173]{-webkit-animation:heightAppear-data-v-6986e173 .15s ease 5.35s forwards;animation:heightAppear-data-v-6986e173 .15s ease 5.35s forwards}.fromcli__loading[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s 2.15s forwards;animation:appear-data-v-6986e173 .15s 2.15s forwards}.fromcli__progressbars__compilation[data-v-6986e173]{margin-top:.5rem;width:50%}.fromcli__progressbars__compilation .fromcli__progressbar[data-v-6986e173]:first-child{background-color:var(--primary-400);-webkit-animation-delay:5.8s;animation-delay:5.8s}.fromcli__progressbars__compilation .fromcli__progressbar[data-v-6986e173]:nth-child(2){--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));-webkit-animation-delay:6.2s;animation-delay:6.2s}.fromcli__progressbars__install[data-v-6986e173]{margin-top:.5rem;width:50%}.fromcli__progressbars__install .fromcli__progressbar[data-v-6986e173]:first-child{background-color:var(--primary-400);-webkit-animation-delay:2.4s;animation-delay:2.4s}.fromcli__progressbars__install .fromcli__progressbar[data-v-6986e173]:nth-child(2){--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));-webkit-animation-delay:2.6s;animation-delay:2.6s}.fromcli__progressbars__dev[data-v-6986e173]{margin-top:.5rem;width:25%}.fromcli__progressbars__dev .fromcli__progressbar[data-v-6986e173]:first-child{background-color:var(--primary-400);-webkit-animation-delay:4.8s;animation-delay:4.8s}.fromcli__progressbars__dev .fromcli__progressbar[data-v-6986e173]:nth-child(2){--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));-webkit-animation-delay:5s;animation-delay:5s}.fromcli__progressbars__dev .fromcli__progressbar[data-v-6986e173]:nth-child(3){--tw-bg-opacity:1;background-color:rgba(0,215,125,var(--tw-bg-opacity));-webkit-animation-delay:5.2s;animation-delay:5.2s}.fromcli__progressbar[data-v-6986e173]{border-radius:9999px;margin-bottom:.5rem;opacity:0;width:0;height:10px;-webkit-animation:progress-data-v-6986e173 .7s cubic-bezier(.83,0,.17,1) forwards;animation:progress-data-v-6986e173 .7s cubic-bezier(.83,0,.17,1) forwards}.fromcli__installed[data-v-6986e173]{opacity:0;-webkit-animation:appear-data-v-6986e173 .15s 7s forwards;animation:appear-data-v-6986e173 .15s 7s forwards}.fromcli__code__ide[data-v-6986e173]{height:100%;opacity:0;padding-top:2rem;position:absolute;left:0;width:100%;top:162px;-webkit-animation:appear-data-v-6986e173 .15s ease 10.6s forwards;animation:appear-data-v-6986e173 .15s ease 10.6s forwards}.fromcli__code__ide__head[data-v-6986e173]{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity));border-bottom-width:2px;height:2.5rem;position:absolute;top:1rem;left:-1.25rem;width:100%}.fromcli__code__ide__head__circles[data-v-6986e173]{display:flex;align-items:center;height:100%;padding-left:1rem;width:100%}.fromcli__code__ide__head__circles__circle[data-v-6986e173]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));border-radius:9999px;height:.75rem;margin-right:.5rem;width:.75rem}.fromcli__code__ide__head__file[data-v-6986e173]{position:absolute;top:50%;left:50%;--tw-text-opacity:1;color:rgba(250,250,250,var(--tw-text-opacity));--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));--tw-translate-x:-50%;--tw-translate-y:-50%}.fromcli__code__ide__content[data-v-6986e173]{white-space:unset;padding-left:3rem;padding-top:2.5rem}.fromcli__code__ide__content p[data-v-6986e173]{white-space:nowrap;border-right:.15em solid transparent;letter-spacing:.75px}.fromcli__code__ide__content p[data-v-6986e173]:nth-child(2){margin-left:.75rem}.fromcli__code__ide__content p[data-v-6986e173]:nth-child(3),.fromcli__code__ide__content p[data-v-6986e173]:nth-child(4),.fromcli__code__ide__content p[data-v-6986e173]:nth-child(5),.fromcli__code__ide__content p[data-v-6986e173]:nth-child(6){margin-left:1.5rem}.fromcli__code__ide__content p[data-v-6986e173]:nth-child(7){margin-left:.75rem}.fromcli__code__ide__side[data-v-6986e173]{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity));border-right-width:2px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:.75rem;position:absolute;left:-1.25rem;width:3rem;top:65px;height:103%}@-webkit-keyframes typingSmall-data-v-6986e173{0%{width:0}to{width:130px}}@keyframes typingSmall-data-v-6986e173{0%{width:0}to{width:130px}}@-webkit-keyframes typingRunDev-data-v-6986e173{0%{width:0}to{width:120px}}@keyframes typingRunDev-data-v-6986e173{0%{width:0}to{width:120px}}@-webkit-keyframes typingLong-data-v-6986e173{0%{width:0}to{width:280px}}@keyframes typingLong-data-v-6986e173{0%{width:0}to{width:280px}}@-webkit-keyframes typingVeryLong-data-v-6986e173{0%{width:0}to{width:330px}}@keyframes typingVeryLong-data-v-6986e173{0%{width:0}to{width:330px}}@-webkit-keyframes blink-caret-data-v-6986e173{0%,to{border-color:transparent}50%{border-color:#00dc82}}@keyframes blink-caret-data-v-6986e173{0%,to{border-color:transparent}50%{border-color:#00dc82}}@-webkit-keyframes appear-data-v-6986e173{0%{opacity:0}to{opacity:1}}@keyframes appear-data-v-6986e173{0%{opacity:0}to{opacity:1}}@-webkit-keyframes progress-data-v-6986e173{0%{width:0}15%{opacity:1}to{opacity:1;width:100%}}@keyframes progress-data-v-6986e173{0%{width:0}15%{opacity:1}to{opacity:1;width:100%}}@-webkit-keyframes slideUp-data-v-6986e173{0%{transform:translateY(0)}to{transform:translateY(-200px)}}@keyframes slideUp-data-v-6986e173{0%{transform:translateY(0)}to{transform:translateY(-200px)}}@-webkit-keyframes slideRight-data-v-6986e173{0%{transform:translateX(-100px) translateY(-50%)}to{transform:translateX(0) translateY(-50%)}}@keyframes slideRight-data-v-6986e173{0%{transform:translateX(-100px) translateY(-50%)}to{transform:translateX(0) translateY(-50%)}}@-webkit-keyframes slideUpContent-data-v-6986e173{0%{transform:translateY(40px)}to{transform:translateY(0)}}@keyframes slideUpContent-data-v-6986e173{0%{transform:translateY(40px)}to{transform:translateY(0)}}@-webkit-keyframes fadeOutSlideDown-data-v-6986e173{0%{opacity:1;transform:translateX(-50%) translateY(0)}to{opacity:0;transform:translateX(-50%) translateY(40px)}}@keyframes fadeOutSlideDown-data-v-6986e173{0%{opacity:1;transform:translateX(-50%) translateY(0)}to{opacity:0;transform:translateX(-50%) translateY(40px)}}@-webkit-keyframes disappear-data-v-6986e173{0%{opacity:1}to{opacity:0}}@keyframes disappear-data-v-6986e173{0%{opacity:1}to{opacity:0}}@-webkit-keyframes growUp-data-v-6986e173{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes growUp-data-v-6986e173{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes slideSidebarRight-data-v-6986e173{0%{left:-150px}to{left:0}}@keyframes slideSidebarRight-data-v-6986e173{0%{left:-150px}to{left:0}}@-webkit-keyframes heightAppear-data-v-6986e173{0%{height:0}to{height:26px}}@keyframes heightAppear-data-v-6986e173{0%{height:0}to{height:26px}}@-webkit-keyframes heightDisappear-data-v-6986e173{0%{height:26px}to{height:0}}@keyframes heightDisappear-data-v-6986e173{0%{height:26px}to{height:0}}@-webkit-keyframes slideContent-data-v-6986e173{0%{left:2rem}to{left:7.5rem}}@keyframes slideContent-data-v-6986e173{0%{left:2rem}to{left:7.5rem}}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        t.exports = r.p + "img/sidebar.61bef94.svg"
    }, function(t, e, r) {
        "use strict";
        r(434)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".fromscratch__container[data-v-b7d867b6]{display:-ms-grid;display:grid;margin-top:2rem;position:absolute;top:0;left:0;width:100%;grid-template-columns:repeat(12,minmax(0,1fr))}.fromscratch__code[data-v-b7d867b6]{--tw-bg-opacity:1;background-color:rgba(0,30,38,var(--tw-bg-opacity));border-radius:.375rem;overflow:hidden;padding:1.25rem;position:relative;top:-10rem;-ms-grid-column-span:1/-1;grid-column:1/-1}@media (min-width:1024px){.fromscratch__code[data-v-b7d867b6]{top:0;-ms-grid-column-span:span 7/span 7;grid-column:span 7/span 7}}.fromscratch__display__logo[data-v-b7d867b6]{top:50%;left:50%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-translate-x:-50%;--tw-translate-y:-50%;height:80px}.fromscratch__display[data-v-b7d867b6],.fromscratch__display__logo[data-v-b7d867b6]{position:absolute;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z))}.fromscratch__display[data-v-b7d867b6]{top:95%;--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;opacity:0;overflow:hidden;right:0;width:100%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-translate-y:-50%;height:120%;-webkit-animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards,slideRight-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards;animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards,slideRight-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.2s forwards}@media (min-width:1024px){.fromscratch__display[data-v-b7d867b6]{top:50%;width:50%}}.fromscratch__display_loading[data-v-b7d867b6]{opacity:0;overflow:hidden;-webkit-animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.5s forwards,disappear-data-v-b7d867b6 .2s 7.7s forwards;animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 3.5s forwards,disappear-data-v-b7d867b6 .2s 7.7s forwards}.fromscratch__display__content[data-v-b7d867b6]{height:100%;position:absolute;top:0;left:0;width:100%}.fromscratch__display__content img[data-v-b7d867b6]{height:100%;position:absolute;top:0;left:-150px;-webkit-animation:slideSidebarRight-data-v-b7d867b6 .6s cubic-bezier(.83,0,.17,1) 9s forwards;animation:slideSidebarRight-data-v-b7d867b6 .6s cubic-bezier(.83,0,.17,1) 9s forwards}.fromscratch__display__content p[data-v-b7d867b6]{font-size:2.25rem;line-height:2.5rem;font-weight:700;opacity:0;position:absolute;top:1rem;left:1.5rem;--tw-text-opacity:1;color:rgba(82,82,91,var(--tw-text-opacity));-webkit-animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 8.1s forwards,slideContent-data-v-b7d867b6 .6s cubic-bezier(.83,0,.17,1) 9s forwards;animation:appear-data-v-b7d867b6 .3s cubic-bezier(.83,0,.17,1) 8.1s forwards,slideContent-data-v-b7d867b6 .6s cubic-bezier(.83,0,.17,1) 9s forwards}.fromscratch__display__progressbar[data-v-b7d867b6]{position:absolute;left:50%;bottom:2rem;width:50%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));--tw-translate-x:-50%;-webkit-animation:fadeOutSlideDown-data-v-b7d867b6 .5s cubic-bezier(.83,0,.17,1) 5.3s forwards;animation:fadeOutSlideDown-data-v-b7d867b6 .5s cubic-bezier(.83,0,.17,1) 5.3s forwards}.fromscratch__display__progressbar__background[data-v-b7d867b6]{--tw-bg-opacity:1;background-color:rgba(161,161,170,var(--tw-bg-opacity));border-radius:9999px;position:absolute;left:0;top:0;width:100%;height:10px}.fromscratch__display__progressbar__progress[data-v-b7d867b6]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));border-radius:9999px;opacity:0;position:absolute;left:0;top:0;width:0;height:10px;-webkit-animation:progress-data-v-b7d867b6 1.5s cubic-bezier(.83,0,.17,1) 3.8s forwards;animation:progress-data-v-b7d867b6 1.5s cubic-bezier(.83,0,.17,1) 3.8s forwards}.fromscratch__code__bash[data-v-b7d867b6]{opacity:1;-webkit-animation:disappear-data-v-b7d867b6 .2s ease 6.7s forwards;animation:disappear-data-v-b7d867b6 .2s ease 6.7s forwards}.fromscratch__code__wrapper[data-v-b7d867b6]{-webkit-animation:slideUp-data-v-b7d867b6 1s cubic-bezier(.83,0,.17,1) 5.5s forwards;animation:slideUp-data-v-b7d867b6 1s cubic-bezier(.83,0,.17,1) 5.5s forwards}span[class*=fromscratch__yarn][data-v-b7d867b6]{display:inline-block;overflow:hidden;white-space:nowrap;width:0;border-right:.15em solid transparent;letter-spacing:.75px}span[class*=fromscratch__yarn].fromscratch__yarn__addnuxt[data-v-b7d867b6]{-webkit-animation:typingSmall-data-v-b7d867b6 1.5s steps(12) forwards,blink-caret-data-v-b7d867b6 .75s step-end 4 backwards;animation:typingSmall-data-v-b7d867b6 1.5s steps(12) forwards,blink-caret-data-v-b7d867b6 .75s step-end 4 backwards}span[class*=fromscratch__yarn].fromscratch__yarn__rundev[data-v-b7d867b6]{-webkit-animation:typingRunDev-data-v-b7d867b6 1.5s steps(12) 3.2s forwards,blink-caret-data-v-b7d867b6 .75s step-end 3.2s 4 backwards;animation:typingRunDev-data-v-b7d867b6 1.5s steps(12) 3.2s forwards,blink-caret-data-v-b7d867b6 .75s step-end 3.2s 4 backwards}.fromscratch__seconddollar[data-v-b7d867b6]{opacity:0;-webkit-animation:appear-data-v-b7d867b6 .15s ease 3.2s forwards;animation:appear-data-v-b7d867b6 .15s ease 3.2s forwards}.fromscratch__loading[data-v-b7d867b6]{opacity:0;-webkit-animation:appear-data-v-b7d867b6 .15s 2.15s forwards;animation:appear-data-v-b7d867b6 .15s 2.15s forwards}.fromscratch__progressbars__install[data-v-b7d867b6]{margin-top:.5rem;width:50%}.fromscratch__progressbars__install .fromscratch__progressbar[data-v-b7d867b6]:first-child{background-color:var(--primary-400);-webkit-animation-delay:2.4s;animation-delay:2.4s}.fromscratch__progressbars__install .fromscratch__progressbar[data-v-b7d867b6]:nth-child(2){--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));-webkit-animation-delay:2.6s;animation-delay:2.6s}.fromscratch__progressbars__install .fromscratch__progressbar[data-v-b7d867b6]:nth-child(3){--tw-bg-opacity:1;background-color:rgba(0,215,125,var(--tw-bg-opacity));-webkit-animation-delay:2.8s;animation-delay:2.8s}.fromscratch__progressbars__dev[data-v-b7d867b6]{margin-top:.5rem;width:25%}.fromscratch__progressbars__dev .fromscratch__progressbar[data-v-b7d867b6]:first-child{background-color:var(--primary-400);-webkit-animation-delay:4.8s;animation-delay:4.8s}.fromscratch__progressbars__dev .fromscratch__progressbar[data-v-b7d867b6]:nth-child(2){--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));-webkit-animation-delay:5s;animation-delay:5s}.fromscratch__progressbars__dev .fromscratch__progressbar[data-v-b7d867b6]:nth-child(3){--tw-bg-opacity:1;background-color:rgba(0,215,125,var(--tw-bg-opacity));-webkit-animation-delay:5.2s;animation-delay:5.2s}.fromscratch__progressbar[data-v-b7d867b6]{border-radius:9999px;margin-bottom:.5rem;opacity:0;width:0;height:10px;-webkit-animation:progress-data-v-b7d867b6 .7s cubic-bezier(.83,0,.17,1) forwards;animation:progress-data-v-b7d867b6 .7s cubic-bezier(.83,0,.17,1) forwards}.fromscratch__compiled[data-v-b7d867b6]{opacity:0;-webkit-animation:appear-data-v-b7d867b6 .15s 5.7s forwards;animation:appear-data-v-b7d867b6 .15s 5.7s forwards}.fromscratch__code__ide[data-v-b7d867b6]{height:100%;opacity:0;padding-top:2rem;position:absolute;top:0;left:0;width:100%;-webkit-animation:appear-data-v-b7d867b6 .15s ease 7s forwards;animation:appear-data-v-b7d867b6 .15s ease 7s forwards}.fromscratch__code__ide__head[data-v-b7d867b6]{width:112%;border-bottom-width:2px;height:2.5rem;position:absolute;top:1.5rem;left:-1.25rem}@media (min-width:1024px){.fromscratch__code__ide__head[data-v-b7d867b6]{width:100%}}.fromscratch__code__ide__head__circles[data-v-b7d867b6]{display:flex;align-items:center;height:100%;padding-left:1rem;width:100%}.fromscratch__code__ide__head__circles__circle[data-v-b7d867b6]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity));border-radius:9999px;margin-right:.5rem;height:12px;width:12px}.fromscratch__code__ide__head__file[data-v-b7d867b6]{position:absolute;top:50%;left:50%;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-skew-x:0;--tw-skew-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;transform:rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));--tw-translate-x:-50%;--tw-translate-y:-50%}.fromscratch__code__ide__content[data-v-b7d867b6]{white-space:unset;padding-left:3rem;padding-top:3rem}.fromscratch__code__ide__content p[data-v-b7d867b6]{overflow:hidden;white-space:nowrap;width:0;border-right:.15em solid transparent;letter-spacing:.75px}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(2),.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(5){margin-left:.75rem}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(3),.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(4){margin-left:1.5rem}.fromscratch__code__ide__content p[data-v-b7d867b6]:first-child,.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(2){-webkit-animation:typingSmall-data-v-b7d867b6 .4s steps(12) 7.3s forwards;animation:typingSmall-data-v-b7d867b6 .4s steps(12) 7.3s forwards}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(3){height:0;-webkit-animation:typingSmall-data-v-b7d867b6 .4s steps(12) 9s forwards,heightAppear-data-v-b7d867b6 .1s ease 9s forwards;animation:typingSmall-data-v-b7d867b6 .4s steps(12) 9s forwards,heightAppear-data-v-b7d867b6 .1s ease 9s forwards}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(4){-webkit-animation:typingLong-data-v-b7d867b6 .4s steps(12) 7.7s forwards;animation:typingLong-data-v-b7d867b6 .4s steps(12) 7.7s forwards}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(5){-webkit-animation:typingSmall-data-v-b7d867b6 .4s steps(12) 8.1s forwards;animation:typingSmall-data-v-b7d867b6 .4s steps(12) 8.1s forwards}.fromscratch__code__ide__content p[data-v-b7d867b6]:nth-child(6){-webkit-animation:typingSmall-data-v-b7d867b6 .4s steps(12) 8.3s forwards;animation:typingSmall-data-v-b7d867b6 .4s steps(12) 8.3s forwards}.fromscratch__code__ide__side[data-v-b7d867b6]{--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity));border-right-width:2px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:.75rem;position:absolute;left:-1.25rem;width:3rem;top:70px;height:103%}@-webkit-keyframes typingSmall-data-v-b7d867b6{0%{width:0}to{width:130px}}@keyframes typingSmall-data-v-b7d867b6{0%{width:0}to{width:130px}}@-webkit-keyframes typingRunDev-data-v-b7d867b6{0%{width:0}to{width:120px}}@keyframes typingRunDev-data-v-b7d867b6{0%{width:0}to{width:120px}}@-webkit-keyframes typingLong-data-v-b7d867b6{0%{width:0}to{width:280px}}@keyframes typingLong-data-v-b7d867b6{0%{width:0}to{width:280px}}@-webkit-keyframes blink-caret-data-v-b7d867b6{0%,to{border-color:transparent}50%{border-color:#00dc82}}@keyframes blink-caret-data-v-b7d867b6{0%,to{border-color:transparent}50%{border-color:#00dc82}}@-webkit-keyframes appear-data-v-b7d867b6{0%{opacity:0}to{opacity:1}}@keyframes appear-data-v-b7d867b6{0%{opacity:0}to{opacity:1}}@-webkit-keyframes progress-data-v-b7d867b6{0%{width:0}15%{opacity:1}to{opacity:1;width:100%}}@keyframes progress-data-v-b7d867b6{0%{width:0}15%{opacity:1}to{opacity:1;width:100%}}@-webkit-keyframes slideUp-data-v-b7d867b6{0%{transform:translateY(0)}to{transform:translateY(-46px)}}@keyframes slideUp-data-v-b7d867b6{0%{transform:translateY(0)}to{transform:translateY(-46px)}}@-webkit-keyframes slideRight-data-v-b7d867b6{0%{transform:translateX(-100px) translateY(-50%)}to{transform:translateX(0) translateY(-50%)}}@keyframes slideRight-data-v-b7d867b6{0%{transform:translateX(-100px) translateY(-50%)}to{transform:translateX(0) translateY(-50%)}}@-webkit-keyframes fadeOutSlideDown-data-v-b7d867b6{0%{opacity:1;transform:translateX(-50%) translateY(0)}to{opacity:0;transform:translateX(-50%) translateY(40px)}}@keyframes fadeOutSlideDown-data-v-b7d867b6{0%{opacity:1;transform:translateX(-50%) translateY(0)}to{opacity:0;transform:translateX(-50%) translateY(40px)}}@-webkit-keyframes disappear-data-v-b7d867b6{0%{opacity:1}to{opacity:0}}@keyframes disappear-data-v-b7d867b6{0%{opacity:1}to{opacity:0}}@-webkit-keyframes growUp-data-v-b7d867b6{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes growUp-data-v-b7d867b6{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes slideSidebarRight-data-v-b7d867b6{0%{left:-150px}to{left:0}}@keyframes slideSidebarRight-data-v-b7d867b6{0%{left:-150px}to{left:0}}@-webkit-keyframes heightAppear-data-v-b7d867b6{0%{height:0}to{height:26px}}@keyframes heightAppear-data-v-b7d867b6{0%{height:0}to{height:26px}}@-webkit-keyframes slideContent-data-v-b7d867b6{0%{left:2rem}to{left:7rem}}@keyframes slideContent-data-v-b7d867b6{0%{left:2rem}to{left:7rem}}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(435)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".star[data-v-c479c21e]{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r(436)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, "[data-v-5607e6fc]:root{--star-start:0px}div[data-v-5607e6fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:9999px;opacity:1;position:absolute;left:0!important;height:2px!important;width:0;-webkit-animation:move 3s ease!important;animation:move 3s ease!important;-webkit-animation-delay:0s!important;animation-delay:0s!important;box-shadow:0 0 2px 1px #fff}", ""]), o.locals = {}, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "useModules", (function() {
            return m
        }));
        var o = r(3),
            n = (r(14), r(16), r(69), r(22), r(1)),
            l = r(56),
            c = Object(n.ssrRef)([], "modulesRef"),
            d = Object(n.ssrRef)([], "categoriesRef");

        function m() {
            var t = Object(n.useContext)().$config.apiURL || "https://api.nuxtjs.org";
            return {
                fetch: function() {
                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(l.a)("".concat(t, "/api/modules"));
                                case 2:
                                    return c.value = e.sent, d.value = Object.entries(c.value.reduce((function(t, e) {
                                        return t[e.category] = (t[e.category] || 0) + 1, t
                                    }), {})).map((function(t) {
                                        return {
                                            name: t[0],
                                            count: t[1]
                                        }
                                    })).sort((function(a, b) {
                                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                                    })), e.abrupt("return", c);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                modules: c,
                categories: d
            }
        }
    }, function(t, e, r) {
        var map = {
            "./af": 441,
            "./af.js": 441,
            "./ar": 442,
            "./ar-dz": 443,
            "./ar-dz.js": 443,
            "./ar-kw": 444,
            "./ar-kw.js": 444,
            "./ar-ly": 445,
            "./ar-ly.js": 445,
            "./ar-ma": 446,
            "./ar-ma.js": 446,
            "./ar-sa": 447,
            "./ar-sa.js": 447,
            "./ar-tn": 448,
            "./ar-tn.js": 448,
            "./ar.js": 442,
            "./az": 449,
            "./az.js": 449,
            "./be": 450,
            "./be.js": 450,
            "./bg": 451,
            "./bg.js": 451,
            "./bm": 452,
            "./bm.js": 452,
            "./bn": 453,
            "./bn-bd": 454,
            "./bn-bd.js": 454,
            "./bn.js": 453,
            "./bo": 455,
            "./bo.js": 455,
            "./br": 456,
            "./br.js": 456,
            "./bs": 457,
            "./bs.js": 457,
            "./ca": 458,
            "./ca.js": 458,
            "./cs": 459,
            "./cs.js": 459,
            "./cv": 460,
            "./cv.js": 460,
            "./cy": 461,
            "./cy.js": 461,
            "./da": 462,
            "./da.js": 462,
            "./de": 463,
            "./de-at": 464,
            "./de-at.js": 464,
            "./de-ch": 465,
            "./de-ch.js": 465,
            "./de.js": 463,
            "./dv": 466,
            "./dv.js": 466,
            "./el": 467,
            "./el.js": 467,
            "./en-au": 468,
            "./en-au.js": 468,
            "./en-ca": 469,
            "./en-ca.js": 469,
            "./en-gb": 470,
            "./en-gb.js": 470,
            "./en-ie": 471,
            "./en-ie.js": 471,
            "./en-il": 472,
            "./en-il.js": 472,
            "./en-in": 473,
            "./en-in.js": 473,
            "./en-nz": 474,
            "./en-nz.js": 474,
            "./en-sg": 475,
            "./en-sg.js": 475,
            "./eo": 476,
            "./eo.js": 476,
            "./es": 477,
            "./es-do": 478,
            "./es-do.js": 478,
            "./es-mx": 479,
            "./es-mx.js": 479,
            "./es-us": 480,
            "./es-us.js": 480,
            "./es.js": 477,
            "./et": 481,
            "./et.js": 481,
            "./eu": 482,
            "./eu.js": 482,
            "./fa": 483,
            "./fa.js": 483,
            "./fi": 484,
            "./fi.js": 484,
            "./fil": 485,
            "./fil.js": 485,
            "./fo": 486,
            "./fo.js": 486,
            "./fr": 487,
            "./fr-ca": 488,
            "./fr-ca.js": 488,
            "./fr-ch": 489,
            "./fr-ch.js": 489,
            "./fr.js": 487,
            "./fy": 490,
            "./fy.js": 490,
            "./ga": 491,
            "./ga.js": 491,
            "./gd": 492,
            "./gd.js": 492,
            "./gl": 493,
            "./gl.js": 493,
            "./gom-deva": 494,
            "./gom-deva.js": 494,
            "./gom-latn": 495,
            "./gom-latn.js": 495,
            "./gu": 496,
            "./gu.js": 496,
            "./he": 497,
            "./he.js": 497,
            "./hi": 498,
            "./hi.js": 498,
            "./hr": 499,
            "./hr.js": 499,
            "./hu": 500,
            "./hu.js": 500,
            "./hy-am": 501,
            "./hy-am.js": 501,
            "./id": 502,
            "./id.js": 502,
            "./is": 503,
            "./is.js": 503,
            "./it": 504,
            "./it-ch": 505,
            "./it-ch.js": 505,
            "./it.js": 504,
            "./ja": 506,
            "./ja.js": 506,
            "./jv": 507,
            "./jv.js": 507,
            "./ka": 508,
            "./ka.js": 508,
            "./kk": 509,
            "./kk.js": 509,
            "./km": 510,
            "./km.js": 510,
            "./kn": 511,
            "./kn.js": 511,
            "./ko": 512,
            "./ko.js": 512,
            "./ku": 513,
            "./ku.js": 513,
            "./ky": 514,
            "./ky.js": 514,
            "./lb": 515,
            "./lb.js": 515,
            "./lo": 516,
            "./lo.js": 516,
            "./lt": 517,
            "./lt.js": 517,
            "./lv": 518,
            "./lv.js": 518,
            "./me": 519,
            "./me.js": 519,
            "./mi": 520,
            "./mi.js": 520,
            "./mk": 521,
            "./mk.js": 521,
            "./ml": 522,
            "./ml.js": 522,
            "./mn": 523,
            "./mn.js": 523,
            "./mr": 524,
            "./mr.js": 524,
            "./ms": 525,
            "./ms-my": 526,
            "./ms-my.js": 526,
            "./ms.js": 525,
            "./mt": 527,
            "./mt.js": 527,
            "./my": 528,
            "./my.js": 528,
            "./nb": 529,
            "./nb.js": 529,
            "./ne": 530,
            "./ne.js": 530,
            "./nl": 531,
            "./nl-be": 532,
            "./nl-be.js": 532,
            "./nl.js": 531,
            "./nn": 533,
            "./nn.js": 533,
            "./oc-lnc": 534,
            "./oc-lnc.js": 534,
            "./pa-in": 535,
            "./pa-in.js": 535,
            "./pl": 536,
            "./pl.js": 536,
            "./pt": 537,
            "./pt-br": 538,
            "./pt-br.js": 538,
            "./pt.js": 537,
            "./ro": 539,
            "./ro.js": 539,
            "./ru": 540,
            "./ru.js": 540,
            "./sd": 541,
            "./sd.js": 541,
            "./se": 542,
            "./se.js": 542,
            "./si": 543,
            "./si.js": 543,
            "./sk": 544,
            "./sk.js": 544,
            "./sl": 545,
            "./sl.js": 545,
            "./sq": 546,
            "./sq.js": 546,
            "./sr": 547,
            "./sr-cyrl": 548,
            "./sr-cyrl.js": 548,
            "./sr.js": 547,
            "./ss": 549,
            "./ss.js": 549,
            "./sv": 550,
            "./sv.js": 550,
            "./sw": 551,
            "./sw.js": 551,
            "./ta": 552,
            "./ta.js": 552,
            "./te": 553,
            "./te.js": 553,
            "./tet": 554,
            "./tet.js": 554,
            "./tg": 555,
            "./tg.js": 555,
            "./th": 556,
            "./th.js": 556,
            "./tk": 557,
            "./tk.js": 557,
            "./tl-ph": 558,
            "./tl-ph.js": 558,
            "./tlh": 559,
            "./tlh.js": 559,
            "./tr": 560,
            "./tr.js": 560,
            "./tzl": 561,
            "./tzl.js": 561,
            "./tzm": 562,
            "./tzm-latn": 563,
            "./tzm-latn.js": 563,
            "./tzm.js": 562,
            "./ug-cn": 564,
            "./ug-cn.js": 564,
            "./uk": 565,
            "./uk.js": 565,
            "./ur": 566,
            "./ur.js": 566,
            "./uz": 567,
            "./uz-latn": 568,
            "./uz-latn.js": 568,
            "./uz.js": 567,
            "./vi": 569,
            "./vi.js": 569,
            "./x-pseudo": 570,
            "./x-pseudo.js": 570,
            "./yo": 571,
            "./yo.js": 571,
            "./zh-cn": 572,
            "./zh-cn.js": 572,
            "./zh-hk": 573,
            "./zh-hk.js": 573,
            "./zh-mo": 574,
            "./zh-mo.js": 574,
            "./zh-tw": 575,
            "./zh-tw.js": 575
        };

        function o(t) {
            var e = n(t);
            return r(e)
        }

        function n(t) {
            if (!r.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }
        o.keys = function() {
            return Object.keys(map)
        }, o.resolve = n, t.exports = o, o.id = 866
    }, function(t, e, r) {
        "use strict";
        r(576)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".alert p[data-v-4486c722]{margin:0!important}.alert-warning[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(255,237,213,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251,146,60,var(--tw-border-opacity))}.alert-warning code[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(254,215,170,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.alert-warning .alert-icon[data-v-4486c722]{--tw-text-opacity:1;color:rgba(251,146,60,var(--tw-text-opacity))}.alert-warning .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(194,65,12,var(--tw-text-opacity))}.dark-mode .alert-warning[data-v-4486c722],.dark-mode .alert-warning .alert-content[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(180,83,9,var(--tw-border-opacity))}.dark-mode .alert-warning .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(253,186,116,var(--tw-text-opacity))}.dark-mode .alert-warning .alert-content code[data-v-4486c722]{--tw-bg-opacity:1!important;background-color:rgba(146,64,14,var(--tw-bg-opacity))!important}.alert-info[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(224,242,254,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(56,189,248,var(--tw-border-opacity))}.alert-info code[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(186,230,253,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.alert-info .alert-icon[data-v-4486c722]{--tw-text-opacity:1;color:rgba(56,189,248,var(--tw-text-opacity))}.alert-info .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(3,105,161,var(--tw-text-opacity))}.dark-mode .alert-info[data-v-4486c722],.dark-mode .alert-info .alert-content[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(3,105,161,var(--tw-border-opacity))}.dark-mode .alert-info .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(125,211,252,var(--tw-text-opacity))}.dark-mode .alert-info .alert-content code[data-v-4486c722]{--tw-bg-opacity:1!important;background-color:rgba(7,89,133,var(--tw-bg-opacity))!important}.alert-next[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(161,161,170,var(--tw-border-opacity))}.alert-next code[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(228,228,231,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.alert-next .alert-icon[data-v-4486c722]{--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}.alert-next .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}.dark-mode .alert-next[data-v-4486c722],.dark-mode .alert-next .alert-content[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(39,39,42,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(63,63,70,var(--tw-border-opacity))}.dark-mode .alert-next .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.dark-mode .alert-next .alert-content code[data-v-4486c722]{--tw-bg-opacity:1!important;background-color:rgba(39,39,42,var(--tw-bg-opacity))!important}.alert-star[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(243,232,255,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(192,132,252,var(--tw-border-opacity))}.alert-star code[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(233,213,255,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.alert-star .alert-icon[data-v-4486c722]{--tw-text-opacity:1;color:rgba(192,132,252,var(--tw-text-opacity))}.alert-star .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(126,34,206,var(--tw-text-opacity))}.dark-mode .alert-star[data-v-4486c722],.dark-mode .alert-star .alert-content[data-v-4486c722]{--tw-bg-opacity:1;background-color:rgba(107,33,168,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(126,34,206,var(--tw-border-opacity))}.dark-mode .alert-star .alert-content[data-v-4486c722]{--tw-text-opacity:1;color:rgba(212,212,216,var(--tw-text-opacity))}.dark-mode .alert-star .alert-content code[data-v-4486c722]{--tw-bg-opacity:1!important;background-color:rgba(107,33,168,var(--tw-bg-opacity))!important}", ""]), o.locals = {}, t.exports = o
    }, , , , function(t, e, r) {
        "use strict";
        r(578)
    }, function(t, e, r) {
        var o = r(10)((function(i) {
            return i[1]
        }));
        o.push([t.i, ".contact-form label[data-v-2f16dbec]{font-weight:500;font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem}.contact-form input[data-v-2f16dbec]{--tw-bg-opacity:1;background-color:rgba(209,226,226,var(--tw-bg-opacity));padding-left:.75rem;padding-right:.75rem}.dark .contact-form input[data-v-2f16dbec]{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity))}.contact-form textarea[data-v-2f16dbec]{--tw-bg-opacity:1;background-color:rgba(209,226,226,var(--tw-bg-opacity));font-size:1rem;line-height:1.5rem;padding-left:.75rem;padding-right:.75rem}.dark .contact-form textarea[data-v-2f16dbec]{--tw-bg-opacity:1;background-color:rgba(37,84,97,var(--tw-bg-opacity))}.contact-form button[data-v-2f16dbec]{border-color:transparent;border-width:2px}.contact-form button[data-v-2f16dbec]:focus{--tw-border-opacity:1;border-color:rgba(0,0,0,var(--tw-border-opacity))}", ""]), o.locals = {}, t.exports = o
    }]), [
        [688, 6, 1, 7]
    ]
]);