/* sticky */
(function () {
    var z = this.jQuery || window.jQuery,
        I = z(window);
    z.fn.stick_in_parent = function (t) {
        var w, _, s, i, C, e, j, x, Q, T, $;
        for (null == t && (t = {}), $ = t.sticky_class, C = t.inner_scrolling, T = t.recalc_every, Q = t.parent, x = t.offset_top, j = t.spacer, _ = t.bottoming, null == x && (x = 0), null == Q && (Q = void 0), null == C && (C = !0), null == $ && ($ = "is_stuck"), w = z(document), null == _ && (_ = !0), s = function (o, n, r, c, l, a, u, d) {
                var f, t, p, h, g, k, m, y, s, b, v, e;
                if (!o.data("sticky_kit")) {
                    if (o.data("sticky_kit", !0), g = w.height(), m = o.parent(), null != Q && (m = m.closest(Q)), !m.length) throw "failed to find stick parent";
                    if (f = p = !1, (v = null != j ? j && o.closest(j) : z("<div />")) && v.css("position", o.css("position")), (y = function () {
                            var t, s, i;
                            if (!d && (g = w.height(), t = parseInt(m.css("border-top-width"), 10), s = parseInt(m.css("padding-top"), 10), n = parseInt(m.css("padding-bottom"), 10), r = m.offset()
                                    .top + t + s, c = m.height(), p && (f = p = !1, null == j && (o.insertAfter(v), v.detach()), o.css({
                                            position: "",
                                            top: "",
                                            width: "",
                                            bottom: ""
                                        })
                                        .removeClass($), i = !0), l = o.offset()
                                    .top - (parseInt(o.css("margin-top"), 10) || 0) - x, a = o.outerHeight(!0), u = o.css("float"), v && v.css({
                                        width: o.outerWidth(!0),
                                        height: a,
                                        display: o.css("display"),
                                        "vertical-align": o.css("vertical-align"),
                                        float: u
                                    }), i)) return e()
                        })(), a !== c) return h = void 0, k = x, b = T, e = function () {
                            var t, s, i, e;
                            if (!d && (i = !1, null != b && (--b <= 0 && (b = T, y(), i = !0)), i || w.height() === g || y(), i = I.scrollTop(), null != h && (s = i - h), h = i, p ? (_ && (e = c + r < i + a + k, f && !e && (f = !1, o.css({
                                        position: "fixed",
                                        bottom: "",
                                        top: k
                                    })
                                    .trigger("sticky_kit:unbottom"))), i < l && (p = !1, k = x, null == j && ("left" !== u && "right" !== u || o.insertAfter(v), v.detach()), t = {
                                        position: "",
                                        width: "",
                                        top: ""
                                    }, o.css(t)
                                    .removeClass($)
                                    .trigger("sticky_kit:unstick")), C && ((t = I.height()) < a + x && !f && (k -= s, k = Math.max(t - a, k), k = Math.min(x, k), p && o.css({
                                    top: k + "px"
                                })))) : l < i && (p = !0, (t = {
                                        position: "fixed",
                                        top: k
                                    })
                                    .width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(t)
                                    .addClass($), null == j && (o.after(v), "left" !== u && "right" !== u || v.append(o)), o.trigger("sticky_kit:stick")), p && _ && (null == e && (e = c + r < i + a + k), !f && e))) return f = !0, "static" === m.css("position") && m.css({
                                    position: "relative"
                                }), o.css({
                                    position: "absolute",
                                    bottom: n,
                                    top: "auto"
                                })
                                .trigger("sticky_kit:bottom")
                        }, s = function () {
                            return y(), e()
                        }, t = function () {
                            if (d = !0, I.off("touchmove", e), I.off("scroll", e), I.off("resize", s), z(document.body)
                                .off("sticky_kit:recalc", s), o.off("sticky_kit:detach", t), o.removeData("sticky_kit"), o.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), m.position("position", ""), p) return null == j && ("left" !== u && "right" !== u || o.insertAfter(v), v.remove()), o.removeClass($)
                        }, I.on("touchmove", e), I.on("scroll", e), I.on("resize", s), z(document.body)
                        .on("sticky_kit:recalc", s), o.on("sticky_kit:detach", t), setTimeout(e, 0)
                }
            }, i = 0, e = this.length; i < e; i++) t = this[i], s(z(t));
        return this
    }
})
.call(this), $(function () {
        $('a[href="#searchfs"]')
            .on("click", function (t) {
                t.preventDefault(), $("#searchfs")
                    .addClass("open"), $('#searchfs > form > input[type="search"]')
                    .focus()
            }), $("#searchfs, #searchfs button.close")
            .on("click keyup", function (t) {
                t.target != this && "close" != t.target.className && 27 != t.keyCode || $(this)
                    .removeClass("open")
            })
    }),
    function (e) {
        e.fn.menumaker = function (t) {
            var s = e(this),
                i = e.extend({
                    format: "dropdown",
                    sticky: !1
                }, t);
            return this.each(function () {
                e(this)
                    .find(".button")
                    .on("click", function () {
                        e(this)
                            .toggleClass("menu-opened");
                        var t = e(this)
                            .next("ul");
                        t.hasClass("open") ? t.slideToggle(150)
                            .removeClass("open") : (t.slideToggle(150)
                                .addClass("open"), "dropdown" === i.format && t.find("ul")
                                .show())
                    }), s.find("li ul")
                    .parent()
                    .addClass("has-sub"), multiTg = function () {
                        s.find(".has-sub")
                            .prepend('<span class="submenu-button"></span>'), s.find(".submenu-button")
                            .on("click", function () {
                                e(this)
                                    .toggleClass("submenu-opened"), e(this)
                                    .siblings("ul")
                                    .hasClass("open") ? e(this)
                                    .siblings("ul")
                                    .removeClass("open")
                                    .slideToggle(150) : e(this)
                                    .siblings("ul")
                                    .addClass("open")
                                    .slideToggle(150)
                            })
                    }, "multitoggle" === i.format ? multiTg() : s.addClass("dropdown"), !0 === i.sticky && s.css("position", "fixed")
            })
        }
    }(jQuery),
    function (t) {
        t(document)
            .ready(function () {
                t("#cssmenu")
                    .menumaker({
                        format: "multitoggle"
                    })
            })
    }(jQuery), jQuery(document)
    .ready(function () {
        var t = jQuery(window)
            .width();

        function s() {
            jQuery("#sidebar-sticky")
                .stick_in_parent({
                    parent: "#wrapper",
                    offset_top: 70
                })
        }
        t < 768 ? jQuery("#sidebar-sticky")
            .trigger("sticky_kit:detach") : s(), jQuery(window)
            .resize(function () {
                (t = jQuery(window)
                    .width()) < 768 ? jQuery("#sidebar-sticky")
                    .trigger("sticky_kit:detach") : s()
            })
    });