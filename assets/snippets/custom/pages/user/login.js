var SnippetLogin = function () {
    var e = $("#m_login"), i = function (e, i, a) {
        var l = $('<div class="m-alert m-alert--outline alert alert-' + i + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
        e.find(".alert").remove(), l.prependTo(e), mUtil.animateClass(l[0], "fadeIn animated"), l.find("span").html(a)
    }, a = function () {
        e.removeClass("m-login--forget-password"), e.removeClass("m-login--signup"), e.addClass("m-login--signin"), mUtil.animateClass(e.find(".m-login__signin")[0], "flipInX animated")
    }, l = function () {
        $("#m_login_forget_password").click(function (i) {
            i.preventDefault(), e.removeClass("m-login--signin"), e.removeClass("m-login--signup"), e.addClass("m-login--forget-password"), mUtil.animateClass(e.find(".m-login__forget-password")[0], "flipInX animated")
        }), $("#m_login_forget_password_cancel").click(function (e) {
            e.preventDefault(), a()
        }), $("#m_login_signup").click(function (i) {
            i.preventDefault(), e.removeClass("m-login--forget-password"), e.removeClass("m-login--signin"), e.addClass("m-login--signup"), mUtil.animateClass(e.find(".m-login__signup")[0], "flipInX animated")
        }), $("#m_login_signup_cancel").click(function (e) {
            e.preventDefault(), a()
        })
    };
    return {
        init: function () {
            l(), $("#m_login_signin_submit").click(function () {
                var a = $(this), l = $(this).closest("form");
                l.validate({
                    rules: {
                        email: {required: !0, email: !0},
                        password: {required: !0}
                    },
                    messages: {
                        email: {
                            required: "هذا الحقل مطلوب",
                            email: "الرجاء ادخال ايميل صحيح",
                        },
                        password: 'هذا الحقل مطلوب'
                    }
                })
            }), $("#m_login_signup_submit").click(function () {
                var t = $(this), r = $(this).closest("form");
                r.validate({
                    rules: {
                        fullname: {required: !0},
                        email: {required: !0, email: !0},
                        password: {required: !0},
                        rpassword: {required: !0},
                        agree: {required: !0}
                    }
                })
            }), $("#m_login_forget_password_submit").click(function () {

                var t = $(this), r = $(this).closest("form");
                r.validate({
                    rules: {
                        email: {
                            required: !0,
                            email: !0
                        }
                    }
                })
            })
        }
    }
}();
jQuery(document).ready(function () {
    SnippetLogin.init()
});