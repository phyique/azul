/*!
 ######################################################

 # COMPASS-HOMESCRIPT.JS

 # OCOM GLOBAL ASSET RELEASE: v11.6.0

 # BUILD DATE: FRI SEP 02 21:33:40 UTC 2016

 # COPYRIGHT ORACLE CORP 2015 [UNLESS STATED OTHERWISE]

 # ANY CHANGES MADE TO THIS FILE WILL BE OVERWRITTEN!
 # DO NOT MODIFY THIS FILE ON STAGE OR PRODUCTION. ALL
 # CHANGES OR ADDITIONS TO THIS FILE MUST BE SUBMITTED
 # TO WEBSTANDARDS_WW -AT- ORACLE.COM

 ######################################################
 */
(function () {
    if (typeof checkbetamode == "function") {
        checkbetamode("compass-homescript", "v11.6.0");
    }
    if (window.devicePixelRatio >= 1.2 || document.location.href.indexOf("?retina") > -1) {
        $("html").addClass("retina");
    }
})();

/*! GLOBAL.VARS */
var ocomltxt = [];
ocomltxt.en = {
    more: "More",
    readmore: "Read More",
    close: "Close",
    link2txt: "Paste link in <strong>email</strong> or <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.cs = {
    more: "Více",
    readmore: "Více informací",
    close: "Zavřít",
    link2txt: "Vložte odkaz do <strong>e-mailu</strong> nebo <strong>do aplikace pro zasílání rychlých zpráv</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.nl = {
    more: "Meer",
    readmore: "Meer informatie",
    close: "Sluiten",
    link2txt: "Plak link in <strong>e-mail</strong> of <strong>chat</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.fr = {
    more: "En savoir plus",
    readmore: "Lire la suite",
    close: "Fermer",
    link2txt: "Copier le lien dans <strong>e-mail</strong> ou <strong>messagerie instantan&#233;e</strong>",
    finish: "Fin",
    alreadymember: "Déjà membre ?",
    login: "Connexion",
    logout: "Déconnexion",
    joinnow: "S'inscrire",
    welcome: "Bienvenue",
    visitorname: "nom-du-visiteur"
};
ocomltxt["fr-ca"] = {
    more: "En savoir plus",
    readmore: "En savoir plus",
    close: "Fermer",
    link2txt: "Coller le lien dans <strong>courriel</strong> ou <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.de = {
    more: "Weitere Informationen",
    readmore: "Erfahren Sie mehr",
    close: "Schlie&#223en",
    link2txt: "Link einf&#252;gen in <strong>E-Mail</strong> oder <strong>Textnachricht (IM)</strong>",
    finish: "Finish",
    alreadymember: "Bereits Mitglied?",
    login: "Anmelden",
    logout: "Abmelden",
    joinnow: "Jetzt beitreten",
    welcome: "Willkommen",
    visitorname: "Name des Besuchers"
};
ocomltxt.ita = {
    more: "Altre informazioni",
    readmore: "Ulteriori informazioni",
    close: "Chiudi",
    link2txt: "Incolla il collegamento in <strong>e-mail</strong> o <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Sei già iscritto?",
    login: "Login",
    logout: "Logout",
    joinnow: "Aderisci ora",
    welcome: "Benvenuto/a",
    visitorname: "nome-visitatore"
};
ocomltxt.pl = {
    more: "Więcej",
    readmore: "Czytaj dalej",
    close: "Zamknij",
    link2txt: "Wklej łącze do <strong>wiadomości e-mail</strong> lub <strong>wiadomości błyskawicznej</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.ptb = {
    more: "Mais",
    readmore: "Leia Mais",
    close: "Fechamento",
    link2txt: "Cole o link no <strong>e-mail</strong> ou no <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Já é membro?",
    login: "Login",
    logout: "Logout",
    joinnow: "Participe Agora",
    welcome: "Benvindo",
    visitorname: "nome-do-visitante"
};
ocomltxt.ro = {
    more: "Mai multe",
    readmore: "Aflaţi mai multe",
    close: "Cerrar",
    link2txt: "Paste <strong>e-mail</strong> sau <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.ru = {
    more: "Далее",
    readmore: "Читать",
    close: "Закрыть",
    link2txt: "Вставить ссылку в <strong>электронную почту</strong> или <strong>ВМ</strong>",
    finish: "Finish",
    alreadymember: "Уже зарегистрированы?",
    login: "Вход",
    logout: "Выход",
    joinnow: "Регистрация",
    welcome: "Добро пожаловать,",
    visitorname: "гость-имя"
};
ocomltxt.esa = {
    more: "Mas",
    readmore: "Mas",
    close: "Cerrar",
    link2txt: "Paste <strong>correo electr&#243;nico</strong> o <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.es = {
    more: "M&#225;s",
    readmore: "Lea m&#225;s informaci&#243;n",
    close: "Cerrar",
    link2txt: "Pegar enlace en link in <strong>correo electr&#243;nico</strong> o bien <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "¿Ya está registrado como miembro?",
    login: "Acceder",
    logout: "Salir",
    joinnow: "Unirse ahora",
    welcome: "Bienvenido/a",
    visitorname: "nombre-visitante"
};
ocomltxt.tr = {
    more: "Devam",
    readmore: "Devamı",
    close: "Kapat",
    link2txt: "Yapıştırılacak bağlantının konumu <strong>e-posta</strong> veya <strong>anlık ileti sistemi</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.kr = {
    more: "자세히",
    readmore: "자세히 읽기",
    close: "끝내기",
    link2txt: "이메일 또는 IM 링크 연결하기",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.zhs = {
    more: "更多",
    readmore: "阅读详细内容",
    close: "关闭",
    link2txt: "将链接粘贴到电子邮件或即时聊天工具中",
    finish: "Finish",
    alreadymember: "已经是成员?",
    login: "登入",
    logout: "登出",
    joinnow: "立即加入",
    welcome: "欢迎您，",
    visitorname: "访客姓名"
};
ocomltxt.ja = {
    more: "その他",
    readmore: "詳細",
    close: "閉じる",
    link2txt: "リンクをeメールかIMにてペーストしてください",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};

/*! LANG DETECT */
var ocomlang = "en";
jQuery(document).ready(function (a) {
    a("meta").each(function () {
        if (jQuery(this).attr("name") == "Language") {
            ocomlang = jQuery(this).attr("content");
        }
    });
    ocomlang = (typeof ocomltxt[ocomlang] == "undefined") ? "en" : ocomlang;
});

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-boxshadow-cssgradients-hashchange-history-rgba-touchevents-domprefixes-hasevent-mq-prefixedcss-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function (am, Y, ad) {
    function aa(b, a) {
        return typeof b === a;
    }

    function ac() {
        var h, f, k, j, d, b, g;
        for (var c in ap) {
            if (ap.hasOwnProperty(c)) {
                if (h = [], f = ap[c], f.name && (h.push(f.name.toLowerCase()), f.options && f.options.aliases && f.options.aliases.length)) {
                    for (k = 0; k < f.options.aliases.length; k++) {
                        h.push(f.options.aliases[k].toLowerCase());
                    }
                }
                for (j = aa(f.fn, "function") ? f.fn() : f.fn, d = 0; d < h.length; d++) {
                    b = h[d], g = b.split("."), 1 === g.length ? L[g[0]] = j : (!L[g[0]] || L[g[0]] instanceof Boolean || (L[g[0]] = new Boolean(L[g[0]])), L[g[0]][g[1]] = j), R.push((j ? "" : "no-") + g.join("-"));
                }
            }
        }
    }

    function ai(c) {
        var a = B.className, d = L._config.classPrefix || "";
        if (I && (a = a.baseVal), L._config.enableJSClass) {
            var b = new RegExp("(^|\\s)" + d + "no-js(\\s|$)");
            a = a.replace(b, "$1" + d + "js$2");
        }
        L._config.enableClasses && (a += " " + d + c.join(" " + d), I ? B.className.baseVal = a : B.className = a);
    }

    function aq() {
        return "function" != typeof Y.createElement ? Y.createElement(arguments[0]) : I ? Y.createElementNS.call(Y, "http://www.w3.org/2000/svg", arguments[0]) : Y.createElement.apply(Y, arguments);
    }

    function Z() {
        var a = Y.body;
        return a || (a = aq(I ? "svg" : "body"), a.fake = !0), a;
    }

    function X(s, h, a, g) {
        var k, w, j, m, v = "modernizr", t = aq("div"), b = Z();
        if (parseInt(a, 10)) {
            for (; a--;) {
                j = aq("div"), j.id = g ? g[a] : v + (a + 1), t.appendChild(j);
            }
        }
        return k = aq("style"), k.type = "text/css", k.id = "s" + v, (b.fake ? b : t).appendChild(k), b.appendChild(t), k.styleSheet ? k.styleSheet.cssText = s : k.appendChild(Y.createTextNode(s)), t.id = v, b.fake && (b.style.background = "", b.style.overflow = "hidden", m = B.style.overflow, B.style.overflow = "hidden", B.appendChild(b)), w = h(t, s), b.fake ? (b.parentNode.removeChild(b), B.style.overflow = m, B.offsetHeight) : t.parentNode.removeChild(t), !!w;
    }

    function af(b, a) {
        return !!~("" + b).indexOf(a);
    }

    function al(a) {
        return a.replace(/([a-z])-([a-z])/g, function (c, b, d) {
            return b + d.toUpperCase();
        }).replace(/^-/, "");
    }

    function ao(b, a) {
        return function () {
            return b.apply(a, arguments);
        };
    }

    function an(c, b, f) {
        var d;
        for (var a in c) {
            if (c[a] in b) {
                return f === !1 ? c[a] : (d = b[c[a]], aa(d, "function") ? ao(d, f || b) : d);
            }
        }
        return !1;
    }

    function ab(a) {
        return a.replace(/([A-Z])/g, function (c, b) {
            return "-" + b.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }

    function ae(b, c) {
        var d = b.length;
        if ("CSS" in am && "supports" in am.CSS) {
            for (; d--;) {
                if (am.CSS.supports(ab(b[d]), c)) {
                    return !0;
                }
            }
            return !1;
        }
        if ("CSSSupportsRule" in am) {
            for (var a = []; d--;) {
                a.push("(" + ab(b[d]) + ":" + c + ")");
            }
            return a = a.join(" or "), X("@supports (" + a + ") { #modernizr { position: absolute; } }", function (f) {
                return "absolute" == getComputedStyle(f, null).position;
            });
        }
        return ad;
    }

    function aj(l, z, b, f) {
        function A() {
            n && (delete H.style, delete H.modElem);
        }

        if (f = aa(f, "undefined") ? !1 : f, !aa(b, "undefined")) {
            var x = ae(l, b);
            if (!aa(x, "undefined")) {
                return x;
            }
        }
        for (var n, m, a, j, k, w = ["modernizr", "tspan"]; !H.style;) {
            n = !0, H.modElem = aq(w.shift()), H.style = H.modElem.style;
        }
        for (a = l.length, m = 0; a > m; m++) {
            if (j = l[m], k = H.style[j], af(j, "-") && (j = al(j)), H.style[j] !== ad) {
                if (f || aa(b, "undefined")) {
                    return A(), "pfx" == z ? j : !0;
                }
                try {
                    H.style[j] = b;
                } catch (r) {
                }
                if (H.style[j] != k) {
                    return A(), "pfx" == z ? j : !0;
                }
            }
        }
        return A(), !1;
    }

    function ak(g, d, j, h, c) {
        var b = g.charAt(0).toUpperCase() + g.slice(1), f = (g + " " + Q.join(b + " ") + b).split(" ");
        return aa(d, "string") || aa(d, "undefined") ? aj(f, d, h, c) : (f = (g + " " + ar.join(b + " ") + b).split(" "), an(f, d, j));
    }

    function W(c, a, b) {
        return ak(c, ad, ad, a, b);
    }

    var R = [], ap = [], U = {
        _version: "3.3.1",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (b, a) {
            var c = this;
            setTimeout(function () {
                a(c[b]);
            }, 0);
        },
        addTest: function (b, a, c) {
            ap.push({name: b, fn: a, options: c});
        },
        addAsyncTest: function (a) {
            ap.push({name: null, fn: a});
        }
    }, L = function () {
    };
    L.prototype = U, L = new L, L.addTest("history", function () {
        var a = navigator.userAgent;
        return -1 === a.indexOf("Android 2.") && -1 === a.indexOf("Android 4.0") || -1 === a.indexOf("Mobile Safari") || -1 !== a.indexOf("Chrome") || -1 !== a.indexOf("Windows Phone") ? am.history && "pushState" in am.history : !1;
    });
    var J = U._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    U._prefixes = J;
    var B = Y.documentElement, I = "svg" === B.nodeName.toLowerCase();
    I || !function (au, x) {
        function M(c, a) {
            var d = c.createElement("p"), b = c.getElementsByTagName("head")[0] || c.documentElement;
            return d.innerHTML = "x<style>" + a + "</style>", b.insertBefore(d.lastChild, b.firstChild);
        }

        function A() {
            var a = ax.elements;
            return "string" == typeof a ? a.split(" ") : a;
        }

        function E(b, a) {
            var c = ax.elements;
            "string" != typeof c && (c = c.join(" ")), "string" != typeof b && (b = b.join(" ")), ax.elements = c + " " + b, O(a);
        }

        function P(b) {
            var a = j[b[T]];
            return a || (a = {}, k++, b[T] = k, j[k] = a), a;
        }

        function ay(b, d, a) {
            if (d || (d = x), aw) {
                return d.createElement(b);
            }
            a || (a = P(d));
            var c;
            return c = a.cache[b] ? a.cache[b].cloneNode() : S.test(b) ? (a.cache[b] = a.createElem(b)).cloneNode() : a.createElem(b), !c.canHaveChildren || N.test(b) || c.tagUrn ? c : a.frag.appendChild(c);
        }

        function z(f, h) {
            if (f || (f = x), aw) {
                return f.createDocumentFragment();
            }
            h = h || P(f);
            for (var g = h.frag.cloneNode(), b = 0, d = A(), c = d.length; c > b; b++) {
                g.createElement(d[b]);
            }
            return g;
        }

        function w(b, a) {
            a.cache || (a.cache = {}, a.createElem = b.createElement, a.createFrag = b.createDocumentFragment, a.frag = a.createFrag()), b.createElement = function (c) {
                return ax.shivMethods ? ay(c, b, a) : a.createElem(c);
            }, b.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + A().join().replace(/[\w\-:]+/g, function (c) {
                    return a.createElem(c), a.frag.createElement(c), 'c("' + c + '")';
                }) + ");return n}")(ax, a.frag);
        }

        function O(b) {
            b || (b = x);
            var a = P(b);
            return !ax.shivCSS || at || a.hasCSS || (a.hasCSS = !!M(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), aw || w(b, a), b;
        }

        var at, aw, av = "3.7.3", C = au.html5 || {}, N = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, S = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, T = "_html5shiv", k = 0, j = {};
        !function () {
            try {
                var a = x.createElement("a");
                a.innerHTML = "<xyz></xyz>", at = "hidden" in a, aw = 1 == a.childNodes.length || function () {
                        x.createElement("a");
                        var c = x.createDocumentFragment();
                        return "undefined" == typeof c.cloneNode || "undefined" == typeof c.createDocumentFragment || "undefined" == typeof c.createElement;
                    }();
            } catch (b) {
                at = !0, aw = !0;
            }
        }();
        var ax = {
            elements: C.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: av,
            shivCSS: C.shivCSS !== !1,
            supportsUnknownElements: aw,
            shivMethods: C.shivMethods !== !1,
            type: "default",
            shivDocument: O,
            createElement: ay,
            createDocumentFragment: z,
            addElements: E
        };
        au.html5 = ax, O(x), "object" == typeof module && module.exports && (module.exports = ax);
    }("undefined" != typeof am ? am : this, Y);
    var V = "Moz O ms Webkit", ar = U._config.usePrefixes ? V.toLowerCase().split(" ") : [];
    U._domPrefixes = ar;
    var q = function () {
        function b(d, c) {
            var f;
            return d ? (c && "string" != typeof c || (c = aq(c || "div")), d = "on" + d, f = d in c, !f && a && (c.setAttribute || (c = aq("div")), c.setAttribute(d, ""), f = "function" == typeof c[d], c[d] !== ad && (c[d] = ad), c.removeAttribute(d)), f) : !1;
        }

        var a = !("onblur" in Y.documentElement);
        return b;
    }();
    U.hasEvent = q, L.addTest("hashchange", function () {
        return q("hashchange", am) === !1 ? !1 : Y.documentMode === ad || Y.documentMode > 7;
    }), L.addTest("cssgradients", function () {
        for (var g, c = "background-image:", j = "gradient(linear,left top,right bottom,from(#9f9),to(white));", f = "", h = 0, b = J.length - 1; b > h; h++) {
            g = 0 === h ? "to " : "", f += c + J[h] + "linear-gradient(" + g + "left top, #9f9, white);";
        }
        L._config.usePrefixes && (f += c + "-webkit-" + j);
        var d = aq("a"), a = d.style;
        return a.cssText = f, ("" + a.backgroundImage).indexOf("gradient") > -1;
    }), L.addTest("rgba", function () {
        var a = aq("a").style;
        return a.cssText = "background-color:rgba(150,255,150,.5)", ("" + a.backgroundColor).indexOf("rgba") > -1;
    });
    var ag = function () {
        var a = am.matchMedia || am.msMatchMedia;
        return a ? function (b) {
            var c = a(b);
            return c && c.matches || !1;
        } : function (b) {
            var c = !1;
            return X("@media " + b + " { #modernizr { position: absolute; } }", function (d) {
                c = "absolute" == (am.getComputedStyle ? am.getComputedStyle(d, null) : d.currentStyle).position;
            }), c;
        };
    }();
    U.mq = ag;
    var G = U.testStyles = X;
    L.addTest("touchevents", function () {
        var b;
        if ("ontouchstart" in am || am.DocumentTouch && Y instanceof DocumentTouch) {
            b = !0;
        } else {
            var a = ["@media (", J.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            G(a, function (c) {
                b = 9 === c.offsetTop;
            });
        }
        return b;
    });
    var Q = U._config.usePrefixes ? V.split(" ") : [];
    U._cssomPrefixes = Q;
    var ah = {elem: aq("modernizr")};
    L._q.push(function () {
        delete ah.elem;
    });
    var H = {style: ah.elem.style};
    L._q.unshift(function () {
        delete H.style;
    });
    U.testProp = function (c, a, b) {
        return aj([c], ad, a, b);
    };
    U.testAllProps = ak, U.testAllProps = W, L.addTest("boxshadow", W("boxShadow", "1px 1px", !0));
    var D = function (e) {
        var g, h = J.length, d = am.CSSRule;
        if ("undefined" == typeof d) {
            return ad;
        }
        if (!e) {
            return !1;
        }
        if (e = e.replace(/^@/, ""), g = e.replace(/-/g, "_").toUpperCase() + "_RULE", g in d) {
            return "@" + e;
        }
        for (var b = 0; h > b; b++) {
            var f = J[b], c = f.toUpperCase() + "_" + g;
            if (c in d) {
                return "@-" + f.toLowerCase() + "-" + e;
            }
        }
        return !1;
    };
    U.atRule = D;
    var F = U.prefixed = function (b, a, c) {
        return 0 === b.indexOf("@") ? D(b) : (-1 != b.indexOf("-") && (b = al(b)), a ? ak(b, a, c) : ak(b, "pfx"));
    };
    U.prefixedCSS = function (b) {
        var a = F(b);
        return a && ab(a);
    };
    ac(), ai(R), delete U.addTest, delete U.addAsyncTest;
    for (var K = 0; K < L._q.length; K++) {
        L._q[K]();
    }
    am.Modernizr = L;
}(window, document);
jQuery("html").attr("class", jQuery("html").attr("class").replace(/touchevents/gi, "touch"));

/*! ORACLELIB.PROFILE  */
var USER = new getUserInfo();
var language_root = "";
function existsUCMCookie(a) {
    if (a == "ORA_UCM_INFO") {
        if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (ORA_UCM_INFO.username != null)) {
            return true;
        }
    }
    return false;
}
function isUCMRegistered() {
    if (existsUCMCookie("ORA_UCM_INFO") == true) {
        orainfo_exists = true;
        otnnm_exists = true;
        return true;
    }
    return false;
}
function getArg(f, d) {
    var c = "", b = "";
    if (!d) {
        d = location.search.substring(1);
    }
    if (!d) {
        return c;
    } else {
        var e = d.split("&");
        for (i = 0; i < e.length; i++) {
            b = e[i].toUpperCase();
            if (b.indexOf(f.toUpperCase() + "=") != -1) {
                var a = e[i].split("=");
                c = a[1];
            }
        }
    }
    return c;
}
function isUCMAnonymous() {
    if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (isUCMRegistered() == false)) {
        return true;
    } else {
        return false;
    }
}
function getUCMCookies() {
    ORA_UCM_INFO = new private_ORA_UCM_INFO();
}
function signout(a) {
    a = a.replace(/^http:/gi, "https:");
    if (window.location.host.indexOf("-stage") > -1) {
        window.location = "https://login-stage.oracle.com/sso/logout?p_done_url=" + a;
    } else {
        window.location = "https://login.oracle.com/sso/logout?p_done_url=" + a;
    }
}
function getCookieData(c) {
    var g = c.length;
    var e = document.cookie.length;
    var d = 0;
    var f;
    while (d < e) {
        var b = d + g;
        if (document.cookie.substring(d, b) == c) {
            f = document.cookie.indexOf(";", b);
            if (f == -1) {
                f = document.cookie.length;
            }
            b++;
            var a = decodeURIComponent(document.cookie.substring(b, f).replace(/\+/g, "%20"));
            return cleanCookieContent(a);
        }
        d++;
    }
    return "";
}
function cleanCookieContent(b) {
    var d = (typeof(b) == "undefined") ? "NoData" : b;
    var a = "<>";
    if (d != "NoData") {
        var c = d.length;
        for (i = 0; i < c; i++) {
            if (d.substr(i, 1) != "." && d.substr(i, 1) != "?" && a.search(d.substr(i, 1)) > -1) {
                d = "Invalid";
                i = c + 1;
            }
        }
    }
    return d;
}
function getUserInfo() {
    var a = new Object();
    this.value_enc = getCookieData("ORA_UCM_INFO");
    this.array = this.value_enc.split("~");
    a.version = this.array[0];
    a.guid = this.array[1];
    a.firstname = this.array[2];
    a.lastname = this.array[3];
    a.username = this.array[4];
    return a;
}
function invalidateAuthCookie() {
    var b = getCookieData("ORASSO_AUTH_HINT");
    if (b != null) {
        var a = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
        document.cookie = a;
    }
}
function sso_sign_out() {
    var a = escape(window.location.href.replace(/^http:/gi, "https:"));
    if ((a.indexOf("/secure") != -1)) {
        a = "http://www.oracle.com/partners/";
    }
    invalidateAuthCookie();
    if (window.location.host.indexOf("-stage") > -1) {
        window.location = "https://login-stage.oracle.com/sso/logout?p_done_url=" + a;
    } else {
        window.location = "https://login.oracle.com/sso/logout?p_done_url=" + a;
    }
}
function private_UCMCookieDecode(d) {
    var e = " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.";
    var a = unescape(d);
    var c = "";
    var b = "";
    for (i = 0; i < a.length; i++) {
        b = a.charAt(i);
        j = e.indexOf(b);
        if (j != -1) {
            j += 2;
            if (j > (e.length - 1)) {
                j -= e.length;
            }
            c += e.charAt(j);
        } else {
            c += b;
        }
    }
    return c;
}
function private_ORA_UCM_INFO() {
    this.value_enc = getCookieData("ORA_UCM_INFO");
    this.array = this.value_enc.split("~");
    this.version = this.array[0];
    this.guid = this.array[1];
    this.firstname = this.array[2];
    this.lastname = this.array[3];
    this.username = this.array[4];
    var b = ["3", this.guid, this.firstname, this.lastname, this.username];
    var a = b.join("~");
}
var min = (60 * 1000);
var hour = (60 * min);
var day = (24 * hour);
var year = (365 * day);

/*! TRUSTE.LIB */
var oracle = oracle || {};
oracle.truste = {};
oracle.truste.api = {};

(function () {
    var trusteCookieName = "notice_preferences";
    var trusteStorageItemName = "truste.eu.cookie.notice_preferences";

    this.getCookieName = function () {
        return trusteCookieName;
    };
    this.getStorageItemName = function () {
        return trusteStorageItemName;
    }
}).apply(oracle.truste);

// inject new behaviour into the api namespace
// which we defined via the truste module
(function () {
    var trusteCommon = oracle.truste;

    function getCookie(cookieKey) {
        var name = cookieKey + "=";
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var c = cookieArray[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return null;
    };

    function getLocalStorageItem(storageKey) {
        //Check if local storage is supported
        if (typeof(Storage) !== "undefined") {
            // Read the value from the local storage
            return localStorage.getItem(storageKey);
        }
        return null;
    };

    function getTRUSTeLocalStorageValue(storageKey) {
        var value = getLocalStorageItem(storageKey);
        if (value != null) {
            var obj = JSON.parse(value);
            return obj.value;
        }
        return null;
    };

    //Get Cookie value for Truste
    this.getConsentCode = function () {

        var value = getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName()) ||
            getCookie(trusteCommon.getCookieName());

        if (value == null) {
            return -1;
        } else {
            return parseInt(value) + 1;
        }

    };

    //Get Cookie value and Source for Truste
    this.getConsentDecision = function () {

        var value = this.getConsentCode();

        if (value == -1) {
            var text = '{"consentDecision": 0, "source": "implied"}';
            return JSON.parse(text);
        } else {
            var text = '{"consentDecision": ' +
                parseInt(value) +
                ', "source": "asserted"}';
            return JSON.parse(text);
        }

    }

}).apply(oracle.truste.api);


/*! SELECTONFOCUS */
jQuery(document).ready(function (a) {
    a(".selectonfocus").focus(function () {
        if (this.value == this.defaultValue) {
            this.select();
        }
    });
});

/*! AUTOCLEAR */
jQuery(document).ready(function (a) {
    a("input.autoclear").bind("focus", function (c) {
        var b = a(this).get(0);
        if (b.value == b.defaultValue) {
            b.value = "";
        }
    });
    a("input.autoclear").bind("blur", function (c) {
        var b = a(this).get(0);
        if (b.value == "") {
            b.value = b.defaultValue;
        }
    });
});

/*! jQuery UI - v1.11.2 - 2014-12-11
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, autocomplete.js, datepicker.js, menu.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
    }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
            e = e.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }

    function o() {
        e.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, i) {
        e.extend(t, i);
        for (var s in i)null == i[s] && (t[s] = i[s]);
        return t
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () {
                var t = e(this);
                return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (i) {
            var s = e.attr(i, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (t) {
            if (void 0 !== t)return this.css("zIndex", t);
            if (this.length)for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
                n = n.parent()
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        }, call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var h = 0, l = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, n = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {widgetEventPrefix: a ? r.widgetEventPrefix || t : t}, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, n = l.call(arguments, 1), a = 0, o = n.length; o > a; a++)for (i in n[a])s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (n) {
            var a = "string" == typeof n, o = l.call(arguments, 1), r = this;
            return n = !a && o.length ? e.widget.extend.apply(null, [n].concat(o)) : n, a ? this.each(function () {
                var i, a = e.data(this, s);
                return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            }), r
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length)return e.widget.extend({}, this.options);
            if ("string" == typeof t)if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                if (t = s.pop(), 1 === arguments.length)return void 0 === n[t] ? null : n[t];
                n[t] = i
            } else {
                if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
                o[t] = i
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e)this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }

                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var u = !1;
    e(document).mouseup(function () {
        u = !1
    }), e.widget("ui.mouse", {
        version: "1.11.2",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!u) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this, s = 1 === t.which, n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), u = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button)return this._mouseUp(t);
                if (!t.which)return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), u = !1, !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), function () {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
        }

        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }

        function s(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {top: 0, left: 0}
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {top: t.scrollTop(), left: t.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
        }

        e.ui = e.ui || {};
        var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position;
        e.position = {
            scrollbarWidth: function () {
                if (void 0 !== n)return n;
                var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = s.children()[0];
                return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
            }, getScrollInfo: function (t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (t) {
                var i = e(t || window), s = e.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s || n ? i.width() : i.outerWidth(),
                    height: s || n ? i.height() : i.outerHeight()
                }
            }
        }, e.fn.position = function (n) {
            if (!n || !n.of)return f.apply(this, arguments);
            n = e.extend({}, n);
            var p, m, g, v, y, b, _ = e(n.of), x = e.position.getWithinInfo(n.within), w = e.position.getScrollInfo(x), k = (n.collision || "flip").split(" "), T = {};
            return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
                var e, t, i = (n[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width, S = c + b + i(this, "marginBottom") + w.height, N = e.extend({}, y), M = t(T.my, u.outerWidth(), u.outerHeight());
                "right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2), "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], a || (N.left = h(N.left), N.top = h(N.top)), s = {
                    marginLeft: f,
                    marginTop: b
                }, e.each(["left", "top"], function (t, i) {
                    e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: D,
                        collisionHeight: S,
                        offset: [p[0] + M[0], p[1] + M[1]],
                        my: n.my,
                        at: n.at,
                        within: x,
                        elem: u
                    })
                }), n.using && (l = function (e) {
                    var t = v.left - N.left, i = t + m - d, s = v.top - N.top, a = s + g - c, h = {
                        target: {
                            element: _,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g
                        },
                        element: {element: u, left: N.left, top: N.top, width: d, height: c},
                        horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                }), u.offset(e.extend(N, {using: l}))
            })
        }, e.ui.position = {
            fit: {
                left: function (e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n;
                    t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                }, top: function (e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n;
                    t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                }
            }, flip: {
                left: function (e, t) {
                    var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, d = l + t.collisionWidth - o - h, c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                }, top: function (e, t) {
                    var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1], p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1];
                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > d && (i > 0 || d > r(i)) && (e.top += p + f + m))
                }
            }, flipfit: {
                left: function () {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var t, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div");
            t = document.createElement(r ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (o in s)t.style[o] = s[o];
            t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
        }()
    }(), e.ui.position, e.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left-1 top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function (e) {
                    e.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                }, blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            var i, s, n, a, o = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = e(this), i = t.parent(), s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
            }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        focus: function (e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
        },
        _scrollIntoView: function (t) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
        },
        _startOpening: function (e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function (t) {
            var i = e.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function (t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function (e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = e(this), 0 > i.offset().top - s - n
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
        },
        previousPage: function (t) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = e(this), i.offset().top - s + n > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        },
        _filterMenuItems: function (t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return s.test(e.trim(e(this).text()))
            })
        }
    }), e.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly"))return t = !0, s = !0, i = !0, void 0;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                }, keypress: function (s) {
                    if (t)return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (e) {
                    return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                }, menufocus: function (t, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                        e(t.target).trigger(t.originalEvent)
                    }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: n}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
                }, menuselect: function (e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i, data: t, dataType: "json", success: function (e) {
                        n(e)
                    }, error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), i = this.menu.element.is(":visible"), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return e.proxy(function (e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var s = this;
            e.each(i, function (e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return e("<li>").text(i.label).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
        }
    }), e.ui.autocomplete, e.extend(e.ui, {datepicker: {version: "1.11.2"}});
    var d;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function (t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function (t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20), o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function (e) {
                    for (i = 0, s = 0, n = 0; e.length > n; n++)e[n].length > i && (i = e[n].length, s = n);
                    return s
                }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, i, s, n, a) {
            var o, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function (t) {
            var i, s = e(t), n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function (t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e)return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e)return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, i, s) {
            var n, a, o, h, l = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing)switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, s, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function (t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal)try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (n) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                    return o |= "fixed" === e(this).css("position"), !o
                }), h = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, d = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t), n = s[1], a = 17, r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function (t, i, s) {
            var n = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, r = t.input ? t.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function (t) {
            for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[n ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var i, s, n, a, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var i = e(t.target), s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, s) {
            var n = e(t), a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function (t) {
            var i, s = e(t), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function (t, i, s) {
            var n = e(t), a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function (t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function (t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var s, n = e(t), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
                e(this).val(n)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function (t, i, s) {
            if (null == t || null == i)throw"Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i)return null;
            var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, c = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function (e) {
                var i = t.length > n + 1 && t.charAt(n + 1) === e;
                return i && n++, i
            }, x = function (e) {
                var t = _(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, n = "y" === e ? s : 1, a = RegExp("^\\d{" + n + "," + s + "}"), o = i.substring(h).match(a);
                if (!o)throw"Missing number at position " + h;
                return h += o[0].length, parseInt(o[0], 10)
            }, w = function (t, s, n) {
                var a = -1, o = e.map(_(t) ? n : s, function (e, t) {
                    return [[t, e]]
                }).sort(function (e, t) {
                    return -(e[1].length - t[1].length)
                });
                if (e.each(o, function (e, t) {
                        var s = t[1];
                        return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0
                    }), -1 !== a)return a + 1;
                throw"Unknown name at position " + h
            }, k = function () {
                if (i.charAt(h) !== t.charAt(n))throw"Unexpected literal at position " + h;
                h++
            };
            for (n = 0; t.length > n; n++)if (b)"'" !== t.charAt(n) || _("'") ? k() : b = !1; else switch (t.charAt(n)) {
                case"d":
                    v = x("d");
                    break;
                case"D":
                    w("D", d, c);
                    break;
                case"o":
                    y = x("o");
                    break;
                case"m":
                    g = x("m");
                    break;
                case"M":
                    g = w("M", p, f);
                    break;
                case"y":
                    m = x("y");
                    break;
                case"@":
                    r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case"!":
                    r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case"'":
                    _("'") ? k() : b = !0;
                    break;
                default:
                    k()
            }
            if (i.length > h && (o = i.substr(h), !/^\s+/.test(o)))throw"Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)for (g = 1, v = y; ;) {
                if (a = this._getDaysInMonth(m, g - 1), a >= v)break;
                g++, v -= a
            }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v)throw"Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t)return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (t) {
                var i = e.length > s + 1 && e.charAt(s + 1) === t;
                return i && s++, i
            }, l = function (e, t, i) {
                var s = "" + t;
                if (h(e))for (; i > s.length;)s = "0" + s;
                return s
            }, u = function (e, t, i, s) {
                return h(e) ? s[t] : i[t]
            }, d = "", c = !1;
            if (t)for (s = 0; e.length > s; s++)if (c)"'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1; else switch (e.charAt(s)) {
                case"d":
                    d += l("d", t.getDate(), 2);
                    break;
                case"D":
                    d += u("D", t.getDay(), n, a);
                    break;
                case"o":
                    d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    d += l("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    d += u("M", t.getMonth(), o, r);
                    break;
                case"y":
                    d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                    break;
                case"@":
                    d += t.getTime();
                    break;
                case"!":
                    d += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    h("'") ? d += "'" : c = !0;
                    break;
                default:
                    d += e.charAt(s)
            }
            return d
        },
        _possibleChars: function (e) {
            var t, i = "", s = !1, n = function (i) {
                var s = e.length > t + 1 && e.charAt(t + 1) === i;
                return s && t++, s
            };
            for (t = 0; e.length > t; t++)if (s)"'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += e.charAt(t)
            }
            return i
        },
        _get: function (e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null, n = this._getDefaultDate(e), a = n, o = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r) {
                    s = t ? "" : s
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, s) {
            var n = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, a = function (i) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                } catch (s) {
                }
                for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                    switch (l[2] || "d") {
                        case"d":
                        case"D":
                            r += parseInt(l[1], 10);
                            break;
                        case"w":
                        case"W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case"m":
                        case"M":
                            o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                            break;
                        case"y":
                        case"Y":
                            a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                    }
                    l = h.exec(i)
                }
                return new Date(a, o, r)
            }, o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var s = !t, n = e.selectedMonth, a = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        e.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        e.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        e.datepicker._hideDatepicker()
                    }, today: function () {
                        e.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, N, M, C, P, A, I, z, H, F, E, W, L, O, j = new Date, R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())), Y = this._get(e, "isRTL"), J = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"), K = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), U = this._get(e, "showCurrentAtPos"), q = this._get(e, "stepMonths"), G = 1 !== V[0] || 1 !== V[1], X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(e, "min"), $ = this._getMinMaxDate(e, "max"), Z = e.drawMonth - U, et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - V[0] * V[1] + 1, $.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - q, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + q, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? X : R, o = K ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; V[0] > w; w++) {
                for (k = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", N = "", G) {
                        if (N += "<div class='ui-datepicker-group", V[1] > 1)switch (T) {
                            case 0:
                                N += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case V[1] - 1:
                                N += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                N += " ui-datepicker-group-middle", S = ""
                        }
                        N += "'>"
                    }
                    for (N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, Q, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++)C = (x + u) % 7, M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    for (N += M + "</tr></thead><tbody>", P = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)), A = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((A + P) / 7), z = G ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = z, H = this._daylightSavingAdjust(new Date(et, Z, 1 - A)), F = 0; z > F; F++) {
                        for (N += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++)W = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], L = H.getMonth() !== Z, O = L && !y || !W[0] || Q && Q > H || $ && H > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + W[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        N += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), N += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += N
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (a || !g)_ += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", a || !v)b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
                    var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? c : t
                }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
            }
            return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0), n = e.drawMonth + ("M" === i ? t : 0), a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, i, s) {
            var n = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function (e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null, h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function (t) {
        if (!this.length)return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.2", e.datepicker;
    var c = "ui-effects-", p = e;
    e.effects = {effect: {}}, function (e, t) {
        function i(e, t, i) {
            var s = d[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
        }

        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function (e, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
            }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
        }

        function n(e, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }

        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], l = e.Color = function (t, i, s, n) {
            return new e.Color.fn.parse(t, i, s, n)
        }, u = {
            rgba: {
                props: {
                    red: {idx: 0, type: "byte"},
                    green: {idx: 1, type: "byte"},
                    blue: {idx: 2, type: "byte"}
                }
            },
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, d = {
            "byte": {floor: !0, max: 255},
            percent: {max: 1},
            degrees: {mod: 360, floor: !0}
        }, c = l.support = {}, p = e("<p>")[0], f = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), l.fn = e.extend(l.prototype, {
            parse: function (n, o, r, h) {
                if (n === t)return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                var d = this, c = e.type(n), p = this._rgba = [];
                return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
                    p[t.idx] = i(n[t.idx], t)
                }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
                    n[t.cache] && (d[t.cache] = n[t.cache].slice())
                }) : f(u, function (t, s) {
                    var a = s.cache;
                    f(s.props, function (e, t) {
                        if (!d[a] && s.to) {
                            if ("alpha" === e || null == n[e])return;
                            d[a] = s.to(d._rgba)
                        }
                        d[a][t.idx] = i(n[e], t, !0)
                    }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                }), this) : t
            }, is: function (e) {
                var i = l(e), s = !0, n = this;
                return f(u, function (e, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                    })), s
                }), s
            }, _space: function () {
                var e = [], t = this;
                return f(u, function (i, s) {
                    t[s.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var s = l(e), n = s._space(), a = u[n], o = 0 === this.alpha() ? l("transparent") : this, r = o[a.cache] || a.to(o._rgba), h = r.slice();
                return s = s[a.cache], f(a.props, function (e, n) {
                    var a = n.idx, o = r[a], l = s[a], u = d[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                }), this[n](h)
            }, blend: function (t) {
                if (1 === this._rgba[3])return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(t)._rgba;
                return l(e.map(i, function (e, t) {
                    return (1 - s) * n[t] + s * e
                }))
            }, toRgbaString: function () {
                var t = "rgba(", i = e.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", i = e.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), s = i.pop();
                return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2])return [null, null, null, e[3]];
            var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, d = .5 * u;
            return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
        }, u.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2])return [null, null, null, e[3]];
            var t = e[0] / 360, i = e[1], s = e[2], a = e[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
        }, f(u, function (s, n) {
            var a = n.props, o = n.cache, h = n.to, u = n.from;
            l.fn[s] = function (s) {
                if (h && !this[o] && (this[o] = h(this._rgba)), s === t)return this[o].slice();
                var n, r = e.type(s), d = "array" === r || "object" === r ? s : arguments, c = this[o].slice();
                return f(a, function (e, t) {
                    var s = d["object" === r ? e : t.idx];
                    null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
            }, f(a, function (t, i) {
                l.fn[t] || (l.fn[t] = function (n) {
                    var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx];
                    return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                })
            })
        }), l.hook = function (t) {
            var i = t.split(" ");
            f(i, function (t, i) {
                e.cssHooks[i] = {
                    set: function (t, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                            if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style;)try {
                                    r = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (h) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (h) {
                        }
                    }
                }, e.fx.step[i] = function (t) {
                    t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, l.hook(o), e.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    t["border" + s + "Color"] = e
                }), t
            }
        }, a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(p), function () {
        function t(t) {
            var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function i(t, i) {
            var s, a, o = {};
            for (s in i)a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
            return o
        }

        var s = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (p.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function (n, a, o, r) {
            var h = e.speed(a, o, r);
            return this.queue(function () {
                var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function () {
                    var i = e(this);
                    return {el: i, start: t(this)}
                }), a = function () {
                    e.each(s, function (e, t) {
                        n[t] && o[t + "Class"](n[t])
                    })
                }, a(), l = l.map(function () {
                    return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                }), o.attr("class", r), l = l.map(function () {
                    var t = this, i = e.Deferred(), s = e.extend({}, h, {
                        queue: !1, complete: function () {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), e.when.apply(e, l.get()).done(function () {
                    a(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), h.complete.call(o[0])
                })
            })
        }, e.fn.extend({
            addClass: function (t) {
                return function (i, s, n, a) {
                    return s ? e.effects.animateClass.call(this, {add: i}, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.addClass), removeClass: function (t) {
                return function (i, s, n, a) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {remove: i}, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.removeClass), toggleClass: function (t) {
                return function (i, s, n, a, o) {
                    return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {toggle: i}, s, n, a)
                }
            }(e.fn.toggleClass), switchClass: function (t, i, s, n, a) {
                return e.effects.animateClass.call(this, {add: i, remove: t}, s, n, a)
            }
        })
    }(), function () {
        function t(t, i, s, n) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
        }

        function i(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }

        e.extend(e.effects, {
            version: "1.11.2", save: function (e, t) {
                for (var i = 0; t.length > i; i++)null !== t[i] && e.data(c + t[i], e[0].style[t[i]])
            }, restore: function (e, t) {
                var i, s;
                for (s = 0; t.length > s; s++)null !== t[s] && (i = e.data(c + t[s]), void 0 === i && (i = ""), e.css(t[s], i))
            }, setMode: function (e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            }, getBaseline: function (e, t) {
                var i, s;
                switch (e[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = e[1] / t.width
                }
                return {x: s, y: i}
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper"))return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }, s = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), n = {width: t.width(), height: t.height()}, a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                    i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(n), s.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
            }, setTransition: function (t, i, s, n) {
                return n = n || {}, e.each(i, function (e, i) {
                    var a = t.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }), n
            }
        }), e.fn.extend({
            effect: function () {
                function i(t) {
                    function i() {
                        e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                    }

                    var n = e(this), a = s.complete, r = s.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                }

                var s = t.apply(this, arguments), n = s.mode, a = s.queue, o = e.effects.effect[s.effect];
                return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
                    s.complete && s.complete.call(this)
                }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
            }, show: function (e) {
                return function (s) {
                    if (i(s))return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n)
                }
            }(e.fn.show), hide: function (e) {
                return function (s) {
                    if (i(s))return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n)
                }
            }(e.fn.hide), toggle: function (e) {
                return function (s) {
                    if (i(s) || "boolean" == typeof s)return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                }
            }(e.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), s = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                }), s
            }
        })
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, Elastic: function (e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            }, Back: function (e) {
                return e * e * (3 * e - 2)
            }, Bounce: function (e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }(), e.effects, e.effects.effect.blind = function (t, i) {
        var s, n, a, o = e(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/, l = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(o, t.mode || "hide"), d = t.direction || "up", c = r.test(d), p = c ? "height" : "width", f = c ? "top" : "left", m = h.test(d), g = {}, v = "show" === u;
        o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({overflow: "hidden"}), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({position: "absolute"}), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function () {
                "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.bounce = function (t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up", c = t.distance, p = t.times || 5, f = 2 * p + (u || l ? 1 : 0), m = t.duration / f, g = t.easing, v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = o.queue(), _ = b.length;
        for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
        l && (n = {opacity: 0}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
            l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
        }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
    }, e.effects.effect.clip = function (t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical", d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", f = {};
        e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.drop = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = e.effects.setMode(n, t.mode || "hide"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg", d = {opacity: r ? 1 : 0};
        e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }, e.effects.effect.explode = function (t, i) {
        function s() {
            b.push(this), b.length === d * c && n()
        }

        function n() {
            p.css({visibility: "visible"}), e(b).remove(), m || p.hide(), i()
        }

        var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this), f = e.effects.setMode(p, t.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c), y = Math.ceil(p.outerHeight() / d), b = [];
        for (a = 0; d > a; a++)for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++)r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * v,
            top: -a * y
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: r + (m ? l * v : 0),
            top: h + (m ? u * y : 0),
            opacity: m ? 0 : 1
        }).animate({
            left: r + (m ? 0 : l * v),
            top: h + (m ? 0 : u * y),
            opacity: m ? 1 : 0
        }, t.duration || 500, t.easing, s)
    }, e.effects.effect.fade = function (t, i) {
        var s = e(this), n = e.effects.setMode(s, t.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
    }, e.effects.effect.fold = function (t, i) {
        var s, n, a = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = e.effects.setMode(a, t.mode || "hide"), h = "show" === r, l = "hide" === r, u = t.size || 15, d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, f = p ? ["width", "height"] : ["height", "width"], m = t.duration / 2, g = {}, v = {};
        e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
            l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
        })
    }, e.effects.effect.highlight = function (t, i) {
        var s = e(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = e.effects.setMode(s, t.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                "hide" === a && s.hide(), e.effects.restore(s, n), i()
            }
        })
    }, e.effects.effect.size = function (t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(o, t.mode || "effect"), f = t.restore || "effect" !== p, m = t.scale || "both", g = t.origin || ["middle", "center"], v = o.css("position"), y = f ? r : h, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            }, to: {y: o.to.height / s.height, x: o.to.width / s.width}
        }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
            var i = e(this), s = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && e.effects.save(i, l), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                f && e.effects.restore(i, l)
            })
        })), o.animate(o.to, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, i) {
                        var s = parseInt(i, 10), n = e ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.scale = function (t, i) {
        var s = e(this), n = e.extend(!0, {}, t), a = e.effects.setMode(s, t.mode || "effect"), o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = t.direction || "both", h = t.origin, l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }, u = {y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : l), n.to = {
            height: l.height * u.y,
            width: l.width * u.x,
            outerHeight: l.outerHeight * u.y,
            outerWidth: l.outerWidth * u.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, e.effects.effect.puff = function (t, i) {
        var s = e(this), n = e.effects.setMode(s, t.mode || "hide"), a = "hide" === n, o = parseInt(t.percent, 10) || 150, r = o / 100, h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }), s.effect(t)
    }, e.effects.effect.pulsate = function (t, i) {
        var s, n = e(this), a = e.effects.setMode(n, t.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = n.queue(), p = c.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++)n.animate({opacity: d}, u, t.easing), d = 1 - d;
        n.animate({opacity: d}, u, t.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
    }, e.effects.effect.shake = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = e.effects.setMode(n, t.mode || "effect"), r = t.direction || "left", h = t.distance || 20, l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u), c = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), y = v.length;
        for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++)n.animate(m, d, t.easing).animate(g, d, t.easing);
        n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
            "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
        }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
    }, e.effects.effect.slide = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = e.effects.setMode(n, t.mode || "show"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {};
        e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }, e.effects.effect.transfer = function (t, i) {
        var s = e(this), n = e(t.to), a = "fixed" === n.css("position"), o = e("body"), r = a ? o.scrollTop() : 0, h = a ? o.scrollLeft() : 0, l = n.offset(), u = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }, d = s.offset(), c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
            top: d.top - r,
            left: d.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: a ? "fixed" : "absolute"
        }).animate(u, t.duration, t.easing, function () {
            c.remove(), i()
        })
    }
});


/*! JQUERY.TOUCHSWIPE
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function (factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function ($) {
    "use strict";
    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
            var $this = $(this), plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin))
        })
    }

    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
                    var ret, touches = event.touches, evt = touches ? touches[0] : event;
                    return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
                        $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target))
                    }, this), options.longTapThreshold)), setTouchInProgress(!0), null)
                }
            }
        }

        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, touches = event.touches, evt = touches ? touches[0] : event, currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds)
                        }
                        !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase)
                    }
                } else phase = PHASE_CANCEL, triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase))
            }
        }

        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent, touches = event.touches;
            if (touches) {
                if (touches.length && !inMultiFingerRelease())return startMultiFingerRelease(event), !0;
                if (touches.length && inMultiFingerRelease())return !0
            }
            return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null
        }

        function touchCancel() {
            fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1)
        }

        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase))
        }

        function removeListeners() {
            $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1)
        }

        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase, validTime = validateSwipeTime(), validDistance = validateSwipeDistance(), didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase
        }

        function triggerHandler(event, phase) {
            var ret, touches = event.touches;
            return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret
        }

        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1))return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1))return !1;
                    switch (direction) {
                        case LEFT:
                            $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case RIGHT:
                            $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case UP:
                            $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case DOWN:
                            $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection))
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1))return !1;
                if (phase == PHASE_END && validatePinch())switch (pinchDirection) {
                    case IN:
                        $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
                        break;
                    case OUT:
                        $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData))
                }
            }
            return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
                doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target))
            }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret
        }

        function validateSwipeDistance() {
            var valid = !0;
            return null !== options.threshold && (valid = distance >= options.threshold), valid
        }

        function didSwipeBackToCancel() {
            var cancelled = !1;
            return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled
        }

        function validatePinchDistance() {
            return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0
        }

        function validateSwipeTime() {
            var result;
            return result = options.maxTimeThreshold ? !(duration >= options.maxTimeThreshold) : !0
        }

        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)if (options.allowPageScroll === NONE)jqEvent.preventDefault(); else {
                var auto = options.allowPageScroll === AUTO;
                switch (direction) {
                    case LEFT:
                        (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                        break;
                    case RIGHT:
                        (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                        break;
                    case UP:
                        (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                        break;
                    case DOWN:
                        (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                        break;
                    case NONE:
                }
            }
        }

        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance
        }

        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut)
        }

        function didPinch() {
            return !(!validatePinch() || !hasPinches())
        }

        function validateSwipe() {
            var hasValidTime = validateSwipeTime(), hasValidDistance = validateSwipeDistance(), hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), didCancel = didSwipeBackToCancel(), valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid
        }

        function hasSwipes() {
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown)
        }

        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes())
        }

        function validateFingers() {
            return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH
        }

        function validateEndPoint() {
            return 0 !== fingerData[0].end.x
        }

        function hasTap() {
            return !!options.tap
        }

        function hasDoubleTap() {
            return !!options.doubleTap
        }

        function hasLongTap() {
            return !!options.longTap
        }

        function validateDoubleTap() {
            if (null == doubleTapStartTime)return !1;
            var now = getTimeStamp();
            return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold
        }

        function inDoubleTap() {
            return validateDoubleTap()
        }

        function validateTap() {
            return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold)
        }

        function validateLongTap() {
            return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance
        }

        function didTap() {
            return !(!validateTap() || !hasTap())
        }

        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap())
        }

        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap())
        }

        function startMultiFingerRelease(event) {
            previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1
        }

        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0, fingerCountAtRelease = 0
        }

        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0)
            }
            return withinThreshold
        }

        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0)
        }

        function setTouchInProgress(val) {
            $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0))
        }

        function createFingerData(id, evt) {
            var f = {start: {x: 0, y: 0}, last: {x: 0, y: 0}, end: {x: 0, y: 0}};
            return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f
        }

        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0, f = getFingerData(id);
            return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f
        }

        function getFingerData(id) {
            return fingerData[id] || null
        }

        function setMaxDistance(direction, distance) {
            direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance)
        }

        function getMaxDistance(direction) {
            return maximumsMap[direction] ? maximumsMap[direction].distance : void 0
        }

        function createMaximumsData() {
            var maxData = {};
            return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData
        }

        function createMaximumVO(dir) {
            return {direction: dir, distance: 0}
        }

        function calculateDuration() {
            return endTime - startTime
        }

        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x), diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY))
        }

        function calculatePinchZoom(startDistance, endDistance) {
            var percent = endDistance / startDistance * 1;
            return percent.toFixed(2)
        }

        function calculatePinchDirection() {
            return 1 > pinchZoom ? OUT : IN
        }

        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)))
        }

        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x, y = endPoint.y - startPoint.y, r = Math.atan2(y, x), angle = Math.round(180 * r / Math.PI);
            return 0 > angle && (angle = 360 - Math.abs(angle)), angle
        }

        function calculateDirection(startPoint, endPoint) {
            if (comparePoints(startPoint, endPoint))return NONE;
            var angle = calculateAngle(startPoint, endPoint);
            return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP
        }

        function getTimeStamp() {
            var now = new Date;
            return now.getTime()
        }

        function getbounds(el) {
            el = $(el);
            var offset = el.offset(), bounds = {
                left: offset.left,
                right: offset.left + el.outerWidth(),
                top: offset.top,
                bottom: offset.top + el.outerHeight()
            };
            return bounds
        }

        function isInBounds(point, bounds) {
            return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom
        }

        function comparePoints(pointA, pointB) {
            return pointA.x == pointB.x && pointA.y == pointB.y
        }

        var options = $.extend({}, options), useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents, START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave", CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel", distance = 0, direction = null, currentDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, pinchDirection = 0, maximumsMap = null, $element = $(element), phase = "start", fingerCount = 0, fingerData = {}, startTime = 0, endTime = 0, previousTouchEndTime = 0, fingerCountAtRelease = 0, doubleTapStartTime = 0, singleTapTimeout = null, holdTimeout = null;
        try {
            $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel)
        } catch (e) {
            $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe")
        }
        this.enable = function () {
            return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element
        }, this.disable = function () {
            return removeListeners(), $element
        }, this.destroy = function () {
            removeListeners(), $element.data(PLUGIN_NS, null), $element = null
        }, this.option = function (property, value) {
            if ("object" == typeof property)options = $.extend(options, property); else if (void 0 !== options[property]) {
                if (void 0 === value)return options[property];
                options[property] = value
            } else {
                if (!property)return options;
                $.error("Option " + property + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }

    var VERSION = "1.6.18", LEFT = "left", RIGHT = "right", UP = "up", DOWN = "down", IN = "in", OUT = "out", NONE = "none", AUTO = "auto", SWIPE = "swipe", PINCH = "pinch", TAP = "tap", DOUBLE_TAP = "doubletap", LONG_TAP = "longtap", HORIZONTAL = "horizontal", VERTICAL = "vertical", ALL_FINGERS = "all", DOUBLE_TAP_THRESHOLD = 10, PHASE_START = "start", PHASE_MOVE = "move", PHASE_END = "end", PHASE_CANCEL = "cancel", SUPPORTS_TOUCH = "ontouchstart" in window, SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH, SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH, PLUGIN_NS = "TouchSwipe", defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    };
    $.fn.swipe = function (method) {
        var $this = $(this), plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method])return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe")
        } else if (plugin && "object" == typeof method)plugin.option.apply(plugin, arguments); else if (!(plugin || "object" != typeof method && method))return init.apply(this, arguments);
        return $this
    }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    }, $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    }, $.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: ALL_FINGERS}
});

/*! ORACLELIB.CALLME  */
function startCallback(j, e) {
    var g = "http://www.oracle.com/us/assets/";
    var a = 440;
    var f = 260;
    var b = new Array();
    b[0] = ["Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallocomlauncher.html", "netcallocomthankyou.html", "netcallocomerror.html", "5:00am - 5:00pm PST"];
    b[1] = ["Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", "5:00am - 5:00pm PST"];
    b[2] = ["Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html", "error-br.html", "9h00 - 18h00"];
    b[3] = ["Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", " "];
    b[4] = ["Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html", "error.html", " "];
    b[5] = ["Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"];
    b[6] = ["Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html", "error-fr.html", "9h ? 18h CET"];
    b[7] = ["Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"];
    b[8] = ["Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html", "error.html", " "];
    for (var d = 0; d < b.length; d++) {
        if (j == b[d][1]) {
            var c = g + b[d][6] + "?memberid=" + b[d][2] + "&country=" + b[d][5] + "&responseurl=" + g + b[d][7] + "&errorurl=" + g + b[d][8] + "&timezone=" + escape(b[d][9]);
            width = ((b[d][3] == 0) ? a : b[d][3]);
            height = ((b[d][4] == 0) ? f : b[d][4]);
            win = window.open(c, "netcall", "width=" + width + ",height=" + height + ",scrollbars=yes,resizable=yes,menubar=no,location=no");
            win.opener = self;
            break;
        }
    }
}
function startNewCallback(j, e) {
    var g = "http://" + location.hostname + "/ocom/groups/public/@ocompublic/documents/webcontent/";
    var a = 565;
    var f = 515;
    var b = new Array();
    b[0] = ["Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallcrmodlauncher.html", "netcallcrmodthankyou.html", "netcallnhthankyou.html", "netcallcrmoderror.html", "5:00 - 17:00 PST"];
    b[1] = ["Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", "5:00am - 5:00pm PST"];
    b[2] = ["Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html", "nhthankyou.html", "error-br.html", "9h00 - 18h00"];
    b[3] = ["Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", " "];
    b[4] = ["Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", " "];
    b[5] = ["Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", "9:00am - 6:00pm"];
    b[6] = ["Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html", "nhthankyou.html", "error-fr.html", "9h ? 18h CET"];
    b[7] = ["Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", "9:00am - 6:00pm"];
    b[8] = ["Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html", "nhthankyou.html", "error.html", " "];
    for (var d = 0; d < b.length; d++) {
        if (j == b[d][1]) {
            var c = g + b[d][6] + "?memberid=" + b[d][2] + "&country=" + b[d][5] + "&responseurl=" + g + b[d][7] + "&errorurl=" + g + b[d][9] + "&timezone=" + escape(b[d][10]) + "&ichannel=" + escape(b[d][1]) + "&nhresponseurl1=" + g + b[d][8];
            width = ((b[d][3] == 0) ? a : b[d][3]);
            height = ((b[d][4] == 0) ? f : b[d][4]);
            win = window.open(c, "netcall", "width=" + width + ",height=" + height + ",scrollbars=yes,resizable=yes,menubar=no,location=no");
            win.opener = self;
            break;
        }
    }
}

/*!
 Waypoints - 3.1.1
 Copyright (c) 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 */
!function () {
    function b(d) {
        if (!d) {
            throw new Error("No options passed to Waypoint constructor");
        }
        if (!d.element) {
            throw new Error("No element option passed to Waypoint constructor");
        }
        if (!d.handler) {
            throw new Error("No handler option passed to Waypoint constructor");
        }
        this.key = "waypoint-" + c, this.options = b.Adapter.extend({}, b.defaults, d), this.element = this.options.element, this.adapter = new b.Adapter(this.element), this.callback = d.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = b.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = b.Context.findOrCreateByElement(this.options.context), b.offsetAliases[this.options.offset] && (this.options.offset = b.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), a[this.key] = this, c += 1;
    }

    var c = 0, a = {};
    b.prototype.queueTrigger = function (d) {
        this.group.queueTrigger(this, d);
    }, b.prototype.trigger = function (d) {
        this.enabled && this.callback && this.callback.apply(this, d);
    }, b.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete a[this.key];
    }, b.prototype.disable = function () {
        return this.enabled = !1, this;
    }, b.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this;
    }, b.prototype.next = function () {
        return this.group.next(this);
    }, b.prototype.previous = function () {
        return this.group.previous(this);
    }, b.invokeAll = function (d) {
        var g = [];
        for (var h in a) {
            g.push(a[h]);
        }
        for (var i = 0, f = g.length; f > i; i++) {
            g[i][d]();
        }
    }, b.destroyAll = function () {
        b.invokeAll("destroy");
    }, b.disableAll = function () {
        b.invokeAll("disable");
    }, b.enableAll = function () {
        b.invokeAll("enable");
    }, b.refreshAll = function () {
        b.Context.refreshAll();
    }, b.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
    }, b.viewportWidth = function () {
        return document.documentElement.clientWidth;
    }, b.adapters = [], b.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, b.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight();
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    }, window.Waypoint = b;
}(), function () {
    function b(e) {
        window.setTimeout(e, 1000 / 60);
    }

    function d(e) {
        this.element = e, this.Adapter = g.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + a, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, f[e.waypointContextKey] = this, a += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }

    var a = 0, f = {}, g = window.Waypoint, c = window.onload;
    d.prototype.add = function (h) {
        var i = h.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[i][h.key] = h, this.refresh();
    }, d.prototype.checkEmpty = function () {
        var h = this.Adapter.isEmptyObject(this.waypoints.horizontal), i = this.Adapter.isEmptyObject(this.waypoints.vertical);
        h && i && (this.adapter.off(".waypoints"), delete f[this.key]);
    }, d.prototype.createThrottledResizeHandler = function () {
        function h() {
            i.handleResize(), i.didResize = !1;
        }

        var i = this;
        this.adapter.on("resize.waypoints", function () {
            i.didResize || (i.didResize = !0, g.requestAnimationFrame(h));
        });
    }, d.prototype.createThrottledScrollHandler = function () {
        function h() {
            i.handleScroll(), i.didScroll = !1;
        }

        var i = this;
        this.adapter.on("scroll.waypoints", function () {
            (!i.didScroll || g.isTouch) && (i.didScroll = !0, g.requestAnimationFrame(h));
        });
    }, d.prototype.handleResize = function () {
        g.Context.refreshAll();
    }, d.prototype.handleScroll = function () {
        var C = {}, y = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var w in y) {
            var m = y[w], q = m.newScroll > m.oldScroll, j = q ? m.forward : m.backward;
            for (var D in this.waypoints[w]) {
                var A = this.waypoints[w][D], v = m.oldScroll < A.triggerPoint, x = m.newScroll >= A.triggerPoint, k = v && x, B = !v && !x;
                (k || B) && (A.queueTrigger(j), C[A.group.id] = A.group);
            }
        }
        for (var z in C) {
            C[z].flushTriggers();
        }
        this.oldScroll = {x: y.horizontal.newScroll, y: y.vertical.newScroll};
    }, d.prototype.innerHeight = function () {
        return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight();
    }, d.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, d.prototype.innerWidth = function () {
        return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth();
    }, d.prototype.destroy = function () {
        var j = [];
        for (var k in this.waypoints) {
            for (var h in this.waypoints[k]) {
                j.push(this.waypoints[k][h]);
            }
        }
        for (var l = 0, m = j.length; m > l; l++) {
            j[l].destroy();
        }
    }, d.prototype.refresh = function () {
        var q, H = this.element == this.element.window, D = this.adapter.offset(), A = {};
        this.handleScroll(), q = {
            horizontal: {
                contextOffset: H ? 0 : D.left,
                contextScroll: H ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: H ? 0 : D.top,
                contextScroll: H ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var B in q) {
            var x = q[B];
            for (var v in this.waypoints[B]) {
                var K, C, E, z, m, J = this.waypoints[B][v], I = J.options.offset, G = J.triggerPoint, k = 0, j = null == G;
                J.element !== J.element.window && (k = J.adapter.offset()[x.offsetProp]), "function" == typeof I ? I = I.apply(J) : "string" == typeof I && (I = parseFloat(I), J.options.offset.indexOf("%") > -1 && (I = Math.ceil(x.contextDimension * I / 100))), K = x.contextScroll - x.contextOffset, J.triggerPoint = k + K - I, C = G < x.oldScroll, E = J.triggerPoint >= x.oldScroll, z = C && E, m = !C && !E, !j && z ? (J.queueTrigger(x.backward), A[J.group.id] = J.group) : !j && m ? (J.queueTrigger(x.forward), A[J.group.id] = J.group) : j && x.oldScroll >= J.triggerPoint && (J.queueTrigger(x.forward), A[J.group.id] = J.group);
            }
        }
        for (var F in A) {
            A[F].flushTriggers();
        }
        return this;
    }, d.findOrCreateByElement = function (e) {
        return d.findByElement(e) || new d(e);
    }, d.refreshAll = function () {
        for (var e in f) {
            f[e].refresh();
        }
    }, d.findByElement = function (e) {
        return f[e.waypointContextKey];
    }, window.onload = function () {
        c && c(), d.refreshAll();
    }, g.requestAnimationFrame = function (j) {
        var h = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || b;
        h.call(window, j);
    }, g.Context = d;
}(), function () {
    function b(g, h) {
        return g.triggerPoint - h.triggerPoint;
    }

    function c(g, h) {
        return h.triggerPoint - g.triggerPoint;
    }

    function a(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), d[this.axis][this.name] = this;
    }

    var d = {vertical: {}, horizontal: {}}, f = window.Waypoint;
    a.prototype.add = function (e) {
        this.waypoints.push(e);
    }, a.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []};
    }, a.prototype.flushTriggers = function () {
        for (var g in this.triggerQueues) {
            var k = this.triggerQueues[g], l = "up" === g || "left" === g;
            k.sort(l ? c : b);
            for (var j = 0, h = k.length; h > j; j += 1) {
                var e = k[j];
                (e.options.continuous || j === k.length - 1) && e.trigger([g]);
            }
        }
        this.clearTriggerQueues();
    }, a.prototype.next = function (h) {
        this.waypoints.sort(b);
        var g = f.Adapter.inArray(h, this.waypoints), j = g === this.waypoints.length - 1;
        return j ? null : this.waypoints[g + 1];
    }, a.prototype.previous = function (h) {
        this.waypoints.sort(b);
        var g = f.Adapter.inArray(h, this.waypoints);
        return g ? this.waypoints[g - 1] : null;
    }, a.prototype.queueTrigger = function (g, h) {
        this.triggerQueues[h].push(g);
    }, a.prototype.remove = function (g) {
        var h = f.Adapter.inArray(g, this.waypoints);
        h > -1 && this.waypoints.splice(h, 1);
    }, a.prototype.first = function () {
        return this.waypoints[0];
    }, a.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
    }, a.findOrCreate = function (e) {
        return d[e.axis][e.name] || new a(e);
    }, f.Group = a;
}(), function () {
    function b(d) {
        this.$element = c(d);
    }

    var c = window.jQuery, a = window.Waypoint;
    c.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (f, d) {
        b.prototype[d] = function () {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[d].apply(this.$element, e);
        };
    }), c.each(["extend", "inArray", "isEmptyObject"], function (d, e) {
        b[e] = c[e];
    }), a.adapters.push({name: "jquery", Adapter: b}), a.Adapter = b;
}(), function () {
    function a(c) {
        return function () {
            var d = [], e = arguments[0];
            return c.isFunction(arguments[0]) && (e = c.extend({}, arguments[1]), e.handler = arguments[0]), this.each(function () {
                var f = c.extend({}, e, {element: this});
                "string" == typeof f.context && (f.context = c(this).closest(f.context)[0]), d.push(new b(f));
            }), d;
        };
    }

    var b = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto));
}();

/*! U02 */
jQuery(document).ready(function (h) {
    var e;
    h("#u02").each(function () {
        e = h(this);
        var n = h(this).find(".u02mlink");
        e[0].tfwd = true;
        if (USER.guid) {
            var m = h("html").attr("lang");
            if (USER.firstname && USER.firstname != "NOT_FOUND") {
                if (m) {
                    m = m.toLowerCase();
                    if (m == "he-il" || m == "en-ae" || m == "ko") {
                        h(".u02hello").prepend(USER.firstname + " ");
                    } else {
                        h(".u02hello").append(" " + USER.firstname);
                    }
                } else {
                    h(".u02hello").append(" " + USER.firstname);
                }
            } else {
                h(".u02hello").html("");
                h(".u02user").addClass("u02usernoname");
            }
            if ((USER.firstname && USER.firstname != "NOT_FOUND" && USER.lastname && USER.lastname != "NOT_FOUND") || (USER.username && USER.username != "NOT_FOUND")) {
                h("#u02usertools").prepend("<li><hr></li>");
            }
            if (USER.username && USER.username != "NOT_FOUND") {
                h("#u02usertools").prepend('<li class="u02uacct">' + USER.username + "</li>");
            }
            if (USER.firstname && USER.firstname != "NOT_FOUND" && USER.lastname && USER.lastname != "NOT_FOUND") {
                h("#u02usertools").prepend('<li class="u02uname">' + USER.firstname + " " + USER.lastname + "</li>");
            } else {
                if (USER.firstname && USER.firstname != "NOT_FOUND") {
                    h("#u02usertools").prepend('<li class="u02uname">' + USER.firstname + "</li>");
                }
            }
            h(".u02toolsloggedout").removeClass("u02toolsloggedout");
        }
        var q = h("#u02pfile-acct");
        var k = h("#u02pfile-regs");
        var l = h("#u02pfile-sout");
        var o = encodeURI(document.location.href.replace(/^http:/gi, "https:"));
        o = o.replace(/^https:\/\/www-content/gi, "http://www-content");
        q.attr("href", q.attr("href").replace(/nexturl=/gi, "nexturl=" + o));
        k.attr("href", k.attr("href").replace(/nexturl=/gi, "nexturl=" + o));
        l.attr("href", l.attr("href").replace(/p_done_url=/gi, "p_done_url=" + o));
        var j = window.location.host;
        if (j.indexOf("www-sites-stage.oracle.com") > -1 || j.indexOf("www-stage.oracle.com") > -1) {
            k.attr("href", k.attr("href").replace(/www.oracle.com/g, "www-portal-stage.oracle.com"));
            l.attr("href", l.attr("href").replace(/login.oracle.com/g, "login-stage.oracle.com"));
        } else {
            if (j.indexOf("stage.oracle.com") > -1 && j.indexOf("portal-stage.oracle") == -1) {
                k.attr("href", k.attr("href").replace(/www.oracle.com/g, "www-content-stage.oracle.com"));
            } else {
                if (j.indexOf("www-sites-dev") > -1 || j.indexOf("www-dev") > -1) {
                    k.attr("href", k.attr("href").replace(/www.oracle.com\/webapps/g, "adc2170261.us.oracle.com"));
                    l.attr("href", l.attr("href").replace(/login.oracle.com/g, "adc2201490.us.oracle.com"));
                } else {
                    if (j.indexOf("www-content.oracle") > -1) {
                        k.attr("href", k.attr("href").replace(/www.oracle.com/g, "www-content.oracle.com"));
                    } else {
                        if (j.indexOf("portal-stage.oracle") > -1) {
                            k.attr("href", k.attr("href").replace(/.*nexturl=/gi, "http://www-portal-stage.oracle.com/webapps/redirect/signon?nexturl="));
                        }
                    }
                }
            }
        }
        n.addClass("u02haml").find("a").prepend('<div class="u02hamenu"><span class="m1"></span><span class="m2"></span><span class="m3"></span><span class="m4"></span></div>');
        h(".u02toolpop").prepend("<i></i>");
        var i = ((h(".u02hello").outerWidth() / 2) < 154) ? (h(".u02hello").outerWidth() / 2) + 6 : 160;
        h(".u02userloggedin > i").css("margin-right", i + "px");
        var p = h("a#u02menulink").attr("href");
        h.ajax({
            url: p,
            type: "GET",
            contentType: "text/plain; charset=UTF-8",
            crossDomain: false,
            success: function (v) {
                v = v.replace(/<([^h\/>]*)h5/g, '<a class="u02tlink" href="#open" ').replace(/<\/h5>/g, "</a>");
                var t = h("#u02mainmenu", v);
                var u = (h("#u02skip2content[data-skiptxtprepend]")[0]) ? h("#u02skip2content").attr("data-skiptxtprepend") + " " : "Skip";
                var r = (h("#u02skip2content[data-skiptxtappend]")[0]) ? " " + h("#u02skip2content").attr("data-skiptxtappend") : "";
                t.find(".u02menu-l1,.u02menu-l2,.u02menu-l3").addClass("u02menuwrap u02mheight");
                t.find(".u02menu-l2,.u02menu-l3").closest("li").addClass("u02menu-hasm");
                t.find("li.u02menu-hasm").each(function () {
                    var x = h(this).children("a.u02tlink").text();
                    h(this).children("div").children("ul").prepend('<li class="u02menuback"><a class="u02blink" href="#back"><span class="u02skiptxt">' + u + "</span>" + x + '<span class="u02skiptxt">' + r + "</span></a></li>");
                });
                t.find(".u02menu-l1").prepend('<div class="u02menu-l1z1" style="left:' + n.outerWidth() / 2 + 'px"></div>');
                t.find(".u02menu-l1 > ul,.u02menu-l2 > ul,.u02menu-l3 > ul").each(function () {
                    var x = (h(this).closest(".u02menu-l2")[0] || h(this).closest(".u02menu-l3")[0]) ? 260 : 0;
                    h(this).children("li").each(function (z) {
                        var y = (z * 20) + x;
                        h(this).find("a,h6").attr("style", "transition-delay:" + y + "ms;-webkit-transition-delay:" + y + "ms;-moz-transition-delay:" + y + "ms");
                        if (!h(this).find("a").closest("li").hasClass("u02menu-hasm") && !h(this).find("a.u02blink")[0]) {
                            h(this).find("a").addClass("u02xlink");
                        }
                    });
                });
                t.find(".u02menu-l1 > ul > li").each(function () {
                    if (!h(this).hasClass("u02menu-hasm")) {
                        h(this).children("a").addClass("u02xlink");
                    }
                });
                t.find(".u02menu-l1 > ul").prepend('<li class="u02menuback"><a class="u02mmskip" href="#back"><span class="u02skiptxt">' + u + "</span>" + e.find("div.u02mlinkw2").text() + '<span class="u02skiptxt">' + r + "</span></a></li>");
                n.append('<div class="u02mainmenu u02mheight" id="u02mmenu"><div class="u02mheight u02l1bg u02lbg"><b><em></em></b></div><div class="u02mheight u02l2bg u02lbg"><b><em></em></b></div><div class="u02mheight u02l3bg u02lbg"><b><em></em></b></div>' + t.html() + "</div>");
                var s = (h("a.u02ticon.u02regn").attr("href").split("#")[1]) ? h("a.u02ticon.u02regn").attr("href").split("#")[1] : "u02countrymenu";
                var w = h("#" + s, v.replace(/u02tlink/g, "u02clink"));
                w.find(".u02cmenu-l1  > li").each(function () {
                    var x = h(this).children("a.u02clink").text();
                    h(this).children("div").children("ul").first().prepend('<li class="u02cback"><a class="u02cblink" href="#back"><span class="u02skiptxt">' + u + "</span>" + x + '<span class="u02skiptxt">' + r + "</span></a></li>");
                });
                w.find(".u02cmenu-l2").each(function () {
                    if (h(this).find(".u02cmenuc1").length == 3) {
                        h(this).addClass("u02cm3cols");
                        h(this).closest(".u02countrymenu").addClass("u02cm3cols");
                    }
                });
                h("#u02cmenu").append('<div class="u02cmenupop u02toolpop"><i></i>' + w.html() + "</div>");
                h("a#u02menulink").attr("href", "#main-menu");
                h("a.u02ticon.u02regn").attr("href", "#" + s);
                if (!document.addEventListener) {
                    f();
                }
                if (window.frameElement) {
                    h("#u02 a,form.u02searchform").attr("target", "_top");
                }
            },
            error: function (r) {
            }
        });
        a();
    });
    if (h(".f11")[0]) {
        h(window).resize(function () {
            a();
        });
    }
    h("form.u02searchform").bind("submit", function (l) {
        var k = document.getElementById("txtSearch");
        var m = k.value.replace(/ +$/g, "").replace(/^ +/g, "");
        if (m != "" && m != k.defaultValue) {
            return true;
        } else {
            h(k).addClass("serror");
            k.value = k.defaultValue;
            k.disabled = "disabled";
            var j = setTimeout(function () {
                k.disabled = "";
                if (h("html.no-touch")[0]) {
                    k.focus();
                }
                h(k).removeClass("serror");
                k.value = k.value.replace(k.defaultValue, "");
            }, 500);
            return false;
        }
    });
    h(".no-touch .u02 input#txtSearch").autocomplete({
        appendTo: "div.u02search",
        position: {my: "right top", at: "right bottom"},
        source: function (j, i) {
            var k = (h('meta[name="Language-disabled"]')[0]) ? h('meta[name="Language"]').first().attr("content") : "en";
            h.ajax({
                url: "",
                dataType: "jsonp",
                data: {key: j.term, lang: k, sg: "All"},
                success: function (l) {
                    i(h.map(l.suggests, function (m) {
                        return {label: m, value: m};
                    }));
                },
                error: function () {
                    return null;
                }
            });
        },
        minLength: 2,
        autoFocus: false,
        select: function (i, j) {
            h("input#txtSearch").val(j.item.value);
            h("input#txtSearch").closest("form.u02searchform").submit();
        }
    });
    var c = 0;
    var b = 0;
    h(document).on("mouseover mouseout", ".u02dtop .u02menu-l1 > ul > li", function (k) {
        var i = h(this);
        var j = h("#u02mmenu");
        if (i.hasClass("u02menu-hasm") && i.hasClass("u02menu-hasopen")) {
            i.removeClass("u02menu-hasopen");
            c = window.setInterval(function () {
                j.removeClass("u02l2open");
                clearInterval(c);
            }, 30);
        } else {
            if (i.hasClass("u02menu-hasm") && k.type == "mouseover") {
                i.addClass("u02menu-hasopen");
                j.addClass("u02l2open");
                clearInterval(c);
            }
        }
    });
    h(document).on("mouseover mouseout", ".u02dtop .u02menu-l2 > ul > li", function (k) {
        var i = h(this);
        var j = h("#u02mmenu");
        if (i.hasClass("u02menu-hasm") && i.hasClass("u02menu-hasopen")) {
            i.removeClass("u02menu-hasopen");
            b = window.setInterval(function () {
                j.removeClass("u02l3open");
                clearInterval(b);
            }, 30);
        } else {
            if (i.hasClass("u02menu-hasm") && k.type == "mouseover") {
                i.addClass("u02menu-hasopen");
                j.addClass("u02l3open u02l2open");
                clearInterval(b);
            }
        }
    });
    h(document).on("focus", ".u02menu-l1 > ul > li > a,.u02menu-l2 > ul > li > a", function (i) {
        if (h(this).parent().siblings("li.u02menu-hasopen")[0]) {
            d();
        }
    });
    h(document).on("mouseenter", ".u02dtop .u02tools > ul > li", function () {
        g(h(this));
    });
    h(document).on("focus", ".u02tools > ul > li > a", function () {
        if (!h(this).parent().hasClass("u02toolopen")) {
            g();
            d(true);
        }
    });
    h(document).on("focus", ".u02mobi .u02logow1 a", function () {
        if (!h(this).hasClass("u02keepf")) {
            d(true);
            h("#u02skip2content li:last-child a").focus();
        } else {
            h(this).removeClass("u02keepf");
        }
    });
    h(document).on("blur", "input.u02searchbttn", function () {
        if (e[0].tfwd && !h("#txtSearch").hasClass("serror")) {
            g();
        }
    });
    h(document).on("mouseleave", ".no-touch .u02dtop .u02tools > ul > li", function () {
        g();
        if (h("#txtSearch").is(":focus")) {
            h("#txtSearch").blur();
        }
    });
    h(document).on("mouseenter", ".no-touch .u02dtop a#u02menulink", function () {
        h("#u02main").addClass("u02opened");
        g();
    });
    h(document).on("mouseleave", ".no-touch .u02dtop .u02mlink", function () {
        d(true);
    });
    h(document).on("focus", ".no-touch .u02dtop #u02menulink", function () {
        if (!h(this).closest(".u02mlink").hasClass("u02opened")) {
            h(this).closest(".u02mlink").addClass("u02opened u02showskip");
            if (document.addEventListener) {
                f();
            }
        }
    });
    h(document).on("blur", ".no-touch .u02dtop #u02menulink", function () {
        if (!e[0].tfwd) {
            h("#u02skip2content").addClass("u02skipo");
            h("a#u02skip2s").focus();
            d(true);
        }
    });
    h(document).on("click", ".u02dtop a.u02blink", function (i) {
        var j = h(this);
        if (j.closest("li.u02menu-hasm").next("li").find("a")[0]) {
            if (j.closest("li.u02menu-hasm").next("li").hasClass("u02menu-hasm")) {
                j.closest("li.u02menu-hasm").next("li").first().find("a").first().focus();
            } else {
                j.closest("li.u02menu-hasm").next("li").first().find("a").focus();
            }
        } else {
            d();
            j.closest("li.u02menu-hasm").find("a").first().focus();
        }
        return false;
    });
    h(document).on("click", ".u02mobi a.u02blink", function (i) {
        var j = h(this);
        if (j.closest("li.u02menu-hasm").find("a")[0]) {
            d();
            j.closest("li.u02menu-hasm").find("a").first().focus();
        }
        return false;
    });
    h(document).on("click", ".u02menu-hasm > a", function () {
        if (h(this).closest(".u02showskip")[0] || h(this).closest(".u02mobi")[0]) {
            h(this).closest(".u02menu-hasm").addClass("u02menu-hasopen");
            if (h(this).closest(".u02menu-l2")[0]) {
                h("#u02mmenu").addClass("u02l3open");
            } else {
                h("#u02mmenu").addClass("u02l2open");
            }
        }
        return false;
    });
    h(document).on("click", "a.u02clink", function () {
        h(".u02currentcr").removeClass("u02currentcr");
        h(this).closest("li").addClass("u02currentcr");
        h(this).closest("ul").addClass("u02showcntry");
        return false;
    });
    h(document).on("click", "#u02menulink", function () {
        var j = h(this);
        if (j.closest(".u02mobi")[0]) {
            f();
            j.closest(".u02mlink").toggleClass("u02mobio").removeClass("u02opened");
            if (!j.closest(".u02mobio")[0]) {
                var i = setTimeout(function () {
                    h(".u0 2menu-hasopen").removeClass("u02menu-hasopen");
                    h(".u02l2open").removeClass("u02l2open");
                    h(".u02l3open").removeClass("u02l3open");
                }, 300);
                h(".u02logow1 a").first().addClass("u02keepf").focus();
            } else {
                d();
                g();
            }
        } else {
            if (j.closest(".touch")[0] && !j.closest(".u02opened")[0]) {
                h("#u02main").addClass("u02opened");
                g();
            } else {
                if (j.closest(".touch")[0] && j.closest(".u02opened")[0]) {
                    d(true);
                } else {
                    e[0].tfwd = true;
                    h(".u02menu-l1 a").first().focus();
                }
            }
        }
        return false;
    });
    h(document).on("click", ".u02tools > ul > li > a", function () {
        var i = h(this).parent();
        if (!i.hasClass("u02toolopen") && h(this).css("margin-bottom").indexOf("1") > -1) {
            g(i, true);
        } else {
            if (i.hasClass("u02toolopen")) {
                g();
            } else {
                g(i);
            }
        }
        return false;
    });
    h(document).on("click", ".u02mobio .u02menu-l1 > ul > li.u02menu-hasm a.u02tlink", function () {
        h(this).closest("li").addClass("u02menu-hasopen");
        h(this).closest(".u02mainmenu").addClass("u02l2open");
    });
    h(document).on("click", ".u02mobio .u02menu-l2 > ul > li.u02menu-hasm a.u02tlink", function () {
        h(this).closest("li").addClass("u02menu-hasopen");
        h(this).closest(".u02mainmenu").addClass("u02l3open");
    });
    h(document).on("click", "a.u02cblink", function () {
        h(".u02showcntry").removeClass("u02showcntry");
        if (h("html.no-touch")[0]) {
            if (h(this).closest(".u02currentcr").next("li").find("a").first()[0]) {
                h(this).closest(".u02currentcr").next("li").find("a").first().focus();
            } else {
                g();
                h("a.u02srch").focus();
            }
        }
        return false;
    });
    (function (i) {
        i(document).keydown(function (k) {
            var j = k.keyCode || k.which;
            if (k.keyCode == 27) {
                if (i(".u02opened")[0] || i(".u02mobio")[0]) {
                    if (i(".u02glinks a").first().is(":visible")) {
                        i(".u02glinks a").first().focus();
                    } else {
                        i(".u02tools a").first().focus();
                    }
                    d(true);
                }
                g();
            } else {
                if (j == 9 && document.getElementById("u02")) {
                    if (k.shiftKey) {
                        document.getElementById("u02").tfwd = false;
                    } else {
                        document.getElementById("u02").tfwd = true;
                    }
                }
            }
        });
    })(jQuery);
    h(document).on("focus", ".u02glinks a", function () {
        if (h(".u02mlink").hasClass("u02opened")) {
            d(true);
        } else {
            if (h(".u02toolopen")[0]) {
                g();
            }
        }
    });
    h(document).on("focus", ".u02dtop .u02showskip ul > li.u02menu-hasm a.u02tlink", function () {
        if (h(this).closest("li").hasClass("u02menu-hasopen")) {
            d();
        }
    });
    h(document).on("focus", "#u02skip2content a", function () {
        h("#u02skip2content").addClass("u02skipo");
    });
    h(document).on("blur", "#u02skip2content li:last-child a", function () {
        if (e[0].tfwd) {
            h("#u02skip2content").removeClass("u02skipo");
            var i = setTimeout(function () {
                if (!h(".u02toolopen .u02srch")[0]) {
                    h("a#u02menulink").focus();
                }
            }, 0);
        }
    });
    h(document).on("blur", "#u02skip2content li:first-child a", function () {
        if (!e[0].tfwd) {
            h("#u02skip2content").removeClass("u02skipo");
        }
    });
    h(document).on("click", "a.u02mmskip", function (i) {
        h(".u02glinks a").first().focus();
        d(true);
        return false;
    });
    h(document).on("click", "#u02skip2content a#u02skip2s", function (i) {
        h("#u02skip2content").removeClass("u02skipo");
        h("#txtSearch").closest("li").addClass("u02toolopen");
        h("#txtSearch").focus();
        return false;
    });
    h(document).on("click", "#u02skip2content a#u02skip2c", function () {
        h("#u02skip2content").removeClass("u02skipo");
        var i;
        if (h("#maincontent").parent().parent().next()[0]) {
            i = h("#maincontent").parent().parent().next();
            if (i.is("#breadCrumb") || i.is(".u03")) {
                i = i.next();
            }
            i.find("a").first()[0].focus();
        } else {
            if (h("#maincontent").next("a")[0]) {
                i = h("#maincontent").next("a").focus();
            }
        }
        return false;
    });
    function g(i, j) {
        h("li.u02toolopen").removeClass("u02toolopen u02toolskiptxt");
        if (i && j) {
            i.addClass("u02toolopen u02toolskiptxt");
            d(true);
        } else {
            if (i) {
                i.addClass("u02toolopen");
                d(true);
            }
        }
        if (document.addEventListener) {
            f();
        }
    }

    function d(i) {
        if (h(".u02mlink").hasClass("u02opened") || h(".u02mainmenu").hasClass("u02l2open") || h(".u02mainmenu").hasClass("u02l3open") || i) {
            if (i) {
                h(".u02menu-hasopen").removeClass("u02menu-hasopen");
                h(".u02l3open").removeClass("u02l3open");
                h(".u02l2open").removeClass("u02l2open");
                h(".u02mlink").removeClass("u02mobio u02opened");
                var j = setTimeout(function () {
                    h(".u02mlink").removeClass("u02showskip");
                }, 300);
            } else {
                if (h(".u02l2open.u02l3open")[0]) {
                    var j = setTimeout(function () {
                        h(".u02l2open .u02menu-l2 .u02menu-hasopen").removeClass("u02menu-hasopen");
                    }, 300);
                    h(".u02l3open").removeClass("u02l3open");
                } else {
                    if (h(".u02l2open")[0]) {
                        var j = setTimeout(function () {
                            h(".u02menu-hasopen").removeClass("u02menu-hasopen");
                        }, 300);
                        h(".u02l2open").removeClass("u02l2open");
                    } else {
                        if (h(".u02mlink.u02mobio")[0]) {
                            h(".u02mlink").removeClass("u02mobio");
                            h(".u02l3open").removeClass("u02l3open");
                            h(".u02l2open").removeClass("u02l2open");
                            h(".u02menu-hasopen").removeClass("u02menu-hasopen");
                        } else {
                            if (h(".u02mlink.u02opened")[0]) {
                                h(".u02mlink").removeClass("u02opened");
                                var j = setTimeout(function () {
                                    h(".u02mlink").removeClass("u02showskip");
                                }, 300);
                                h(".u02l3open").removeClass("u02l3open");
                                h(".u02l2open").removeClass("u02l2open");
                                h(".u02menu-hasopen").removeClass("u02menu-hasopen");
                            }
                        }
                    }
                }
            }
        }
    }

    function a() {
        if (h("#u02main").css("position") != "absolute" && h("#u02main").css("float") != "right") {
            h("#u02").addClass("u02dtop").removeClass("u02mobi");
            h(".u02mobio").removeClass("u02mobio");
            d(true);
        } else {
            if (h("#u02main").css("float") != "right" && h("#u02").hasClass("u02dtop")) {
                h("#u02").removeClass("u02dtop").addClass("u02mobi");
                d(true);
            } else {
                h("#u02").removeClass("u02dtop").addClass("u02mobi");
                f();
            }
        }
    }

    function f() {
        h("#u02 .u02mheight").css("height", "auto");
        h("#u02 .u02mheight ul").css("height", "auto");
        var o = (h("div.u02dtop")[0]) ? true : false;
        var q = 200;
        var k = h("#u02 div.u02mheight ul");
        for (var n = 0, j = k.length; n < j; n++) {
            var p = h(k[n]).height();
            q = (p > q) ? p : q;
        }
        if (o) {
            h("#u02 .u02mheight").css("height", (q + 40) + "px");
            h("#u02 .u02mheight ul").css("height", q + "px");
            h(".u02cmenu-l1").attr("height", "auto");
        } else {
            h("#u02 .u02mainmenu.u02mheight,#u02 .u02menuwrap.u02mheight").css("height", (q + 40) + "px");
            var m = 0;
            h(".u02cmenu-l2").each(function () {
                var i = h(this).height();
                if (m < i) {
                    m = i;
                }
            });
            h(".u02cmenu-l1").css("height", m + "px");
        }
    }
});

/*! U01 */
jQuery(document).ready(function (b) {
    if (document.getElementById("u01")) {
        b(".f01r1 .f01v0w1").addClass("f01bg4u01");
        b("div.u01search").attr("data-lbl", "search");
        b("ul.u01nav").after('<div class="u01z3"></div>');
        if ((!b(".u01logo a span")[0]) && (!b(".u01logoinline .u01logo")[0])) {
            b(".u01logo a").wrapInner("<span></span>");
        }
        b("#u01").prepend('<div class="u01mmenu"><a href="#menu">MENU</a></div><div class="u01mlogo"><a href="' + b(this).find("div.u01logo a").attr("href") + '">Oracle</a></div><div class="u01msearch"><a href="#search">SEARCH</a></div>');
        if (b(".u01logoinline .u01logo img")[0]) {
            b(".u01mlogo a").empty();
            b(".u01logoinline .u01logo img").clone().appendTo(".u01mlogo a");
        }
        b("div.u01tools").wrapAll('<div class="u01toolsw1"></div>');
        var h = setTimeout(function () {
            b("#u01").addClass("u01set");
        }, 1);

        function c() {
            if ((b(".u01mmenu").css("display") == "block") && (b("body").hasClass("f11"))) {
                b(".u01navtools + .u01pfile #pfile-acct, .u01navtools + .u01pfile #pfile-sout, .u01navtools + .u01pfile #pfile-regs, .u01navtools + .u01pfile #pfile-help").detach().insertBefore(".u01navtools").wrapAll('<ul class="u01pfile" data-lbl="welcome"></ul>');
            } else {
                b(".u01logo + .u01pfile #pfile-acct, .u01logo + .u01pfile #pfile-sout, .u01logo + .u01pfile #pfile-regs, .u01logo + .u01pfile #pfile-help").unwrap('<ul class="u01pfile" data-lbl="welcome"></ul>').detach().insertAfter("#pfile-wlcm");
            }
        }

        b("body.f11v1").addClass("u01loaded");
        c();
        b(window).resize(function () {
            c();
        });
        b("ul.u01nav > li > a.u01btn").each(function () {
            if (b(this).text().replace(/[ \t\n]/g, "") == "OracleTechnologyNetwork") {
                b(this).html("<h3>OTN</h3>");
            }
            b(this).parent().addClass("u01btn").wrapInner('<div class="u01w7"></div>');
        });
        function a() {
            b("div.u01tools").each(function () {
                b(this).find("ul li > a").css("font-size", "");
                var j = (b(this).find("ul.u01navtools li > a").css("font-size").split("px")[0] * 1) - 1;
                while (b(this).height() > 66 && j >= 11) {
                    b(this).find("ul li > a").css("font-size", j + "px");
                    j--;
                }
            });
        }

        a();
        b(window).resize(function () {
            a();
        });
        if (b("#pfile-wlcm").css("color") == "#727272") {
            b("div.u01tools").css("width", ((b(".u01navtools").outerWidth() + b(".u01pfile").outerWidth()) + (b(".u01navtools").css("margin-right").split("px")[0] * 1)));
        }
        function f() {
            b("ul.u01nav").each(function () {
                b(this).find("li h3").css("font-size", "");
                var j = (b(this).find("li h3").css("font-size").split("px")[0] * 1) - 1;
                while (b(this).height() > 66 && j >= 14) {
                    b(this).find("li h3").css("font-size", j + "px");
                    if (j == 14 && b(this).height() > 66) {
                        b("a.u01nav h3").css("padding-left", "8px").css("padding-right", "8px");
                    }
                    j--;
                }
            });
        }

        f();
        b(window).resize(function () {
            f();
        });
        b("ul.u01nav > li").each(function () {
            b(this).find("a.u01nav,div.u01w7").append('<div class="u01z1"><div class="u01z2"></div></div>');
            function j() {
                if (b(".u01mmenu").css("display") == "none") {
                    if (b(this).find("a.u01nav h3").first().height() && (b(this).find("a.u01nav h3").first().height() < 20)) {
                        b(this).find("a.u01nav h3").css("height", "32px").css("padding-top", "14px");
                    } else {
                        if (b(this).find("a.u01nav h3").first().height() && (b(this).find("a.u01nav h3").first().height() < 37)) {
                            b(this).find("a.u01nav h3").css("height", "33px").css("padding-top", "8px");
                        }
                    }
                } else {
                    b(this).find("a.u01nav h3").css("height", "").css("padding-top", "");
                }
            }

            j();
            b(window).resize(function () {
                j();
            });
            b(this).find("a.u01nav").bind("mouseover", function (m) {
                if (b(".u01mmenu").css("display") == "none") {
                    try {
                        var k = window.getComputedStyle(b(this)[0], null).width;
                    } catch (l) {
                        var k = b(this).width() + "px";
                    }
                    b(this).css("width", k);
                    b(this).find("div.u01z1").css("width", k);
                } else {
                    b(this).css("width", "");
                    b(this).find("div.u01z1").css("width", "");
                }
            });
            b(window).resize(function () {
                b("a.u01nav").css("width", "");
                b("div.u01z1").css("width", "");
            });
            b(this).find("div.u01w7").bind("mouseover", function (m) {
                try {
                    var k = window.getComputedStyle(b(this)[0], null).width;
                } catch (l) {
                    var k = b(this).width() + "px";
                }
                k = k.replace(/px/, "");
                k = ((k * 1) + 1) + "px";
                b(this).find("div.u01z1").css("width", k);
            });
            b(this).each(function () {
                if (b(this).parent("ul.u01nav").hasClass("u01disabled")) {
                    b(this).hover(function () {
                        b(this).addClass("u01hover");
                    }, function () {
                        b(this).removeClass("u01hover");
                    });
                }
                b(this).bind("mouseenter", function (l) {
                    b(this).bind("click", function (m) {
                        if (((b(window).width() > 974)) && (!b(this).closest("li").hasClass("u01hover")) && (!b(this).closest("li").hasClass("u01sansmenu"))) {
                            m.preventDefault();
                        }
                    });
                    if (b(".u01mmenu").css("display") == "none") {
                        if (b(this).find(".u01w5bannerimg img[data-imgpath]").first().css("visibility") == "hidden") {
                            b(this).find(".u01w5bannerimg img[data-imgpath]").each(function () {
                                b(this).attr("src", b(this).attr("data-imgpath")).css("visibility", "visible");
                                b(this).on("load", function () {
                                    b(this).removeAttr("data-imgpath");
                                    b(this).closest(".u01").find(".u01w5bannerimg img[data-imgpath]").each(function () {
                                        b(this).attr("src", b(this).attr("data-imgpath")).css("visibility", "visible");
                                        b(this).removeAttr("data-imgpath");
                                    });
                                });
                            });
                        }
                        var k = b(this);
                        b.data(this, "u01timer", setTimeout(function () {
                            if (!k.hasClass("u01sansmenu")) {
                                b("#u01 .u01z3").addClass("u01z3opened");
                            }
                            k.find("div.u01menu, .u01z1").show(0, function () {
                                b(this).parent("li").addClass("u01hover");
                                var m = 0;
                                b(this).find("div.u01w1").children("div").each(function () {
                                    m = (b(this).outerHeight() > m) ? b(this).outerHeight() : m;
                                });
                                b(this).find("div.u01w6").each(function () {
                                    b(this).css("height", m - ((b(this).css("padding-top").split("px")[0] * 1) + (b(this).css("padding-bottom").split("px")[0]) * 1));
                                });
                            });
                        }, 300));
                    }
                });
            });
            b(this).bind("mouseleave", function (k) {
                clearTimeout(b.data(this, "u01timer"));
                b(this).find("div.u01menu, .u01z1").hide();
                b(".u01nav > li").removeClass("u01hover");
                b("#u01 .u01z3").removeClass("u01z3opened");
            });
        });
        b("form.u01searchform").bind("submit", function (l) {
            var k = document.getElementById("txtSearch");
            var m = k.value.replace(/ +$/g, "").replace(/^ +/g, "");
            if (m != "" && m != k.defaultValue) {
                return true;
            } else {
                k.value = "";
                if (!document.getElementById("u01searcherror")) {
                    var j = (b(this).attr("data-errormsg")) ? b(this).attr("data-errormsg") : "Error";
                    b("div.u01search").append('<div id="u01searcherror">' + j + "</div>");
                }
                b("#txtSearch").focus();
                return false;
            }
        });
        b(".u01 #txtSearch").bind("blur", function (j) {
            if (document.getElementById("u01searcherror")) {
                b("#u01searcherror").remove();
            }
        });
        if (b(".cb18")[0]) {
            b(".no-touch input#txtSearch").autocomplete({
                appendTo: "div.u01search", source: function (k, j) {
                    b.ajax({
                        url: "",
                        dataType: "json",
                        data: {
                            Dy: 1,
                            contentPaths: "/content/Web/Shared/Auto-Suggest Panel",
                            templateTypes: "AutoSuggestPanel",
                            Ntt: k.term + "*"
                        },
                        success: function (l) {
                            j(b.map(l.contents[0].autoSuggest[0].dimensionSearchGroups[0].dimensionSearchValues, function (m) {
                                return {label: m.label};
                            }));
                        },
                        error: function () {
                            return null;
                        }
                    });
                }, minLength: 3, autoFocus: false, select: function (j, k) {
                    b("input#txtSearch").val(k.item.value);
                    b("input#txtSearch").closest("form.u01searchform").submit();
                }
            });
        } else {
            b(".u01 input#txtSearch").autocomplete({
                appendTo: "div.u01search",
                position: {my: "right top", at: "right bottom"},
                source: function (k, j) {
                    var l = (b('meta[name="Language-disabled"]')[0]) ? b('meta[name="Language"]').first().attr("content") : "en";
                    b.ajax({
                        url: "",
                        dataType: "jsonp",
                        data: {key: k.term, lang: l, sg: "All"},
                        success: function (m) {
                            j(b.map(m.suggests, function (n) {
                                return {label: n, value: n};
                            }));
                        },
                        error: function () {
                            return null;
                        }
                    });
                },
                minLength: 2,
                autoFocus: false,
                select: function (j, k) {
                    b("input#txtSearch").val(k.item.value);
                    b("input#txtSearch").closest("form.u01searchform").submit();
                }
            });
        }
        var g = encodeURI(document.location.href.replace(/^http:/gi, "https:"));
        g = g.replace(/^https:\/\/www-content/gi, "http://www-content");
        if (USER.guid) {
            if (USER.firstname && USER.firstname != "NOT_FOUND") {
                var e = b("html").attr("lang");
                if (e) {
                    e = e.toLowerCase();
                    if (e == "he-il" || e == "en-ae" || e == "ko") {
                        b("#pfile-wlcm").prepend(USER.firstname + " ");
                    } else {
                        b("#pfile-wlcm").append(" " + USER.firstname);
                    }
                } else {
                    b("#pfile-wlcm").append(" " + USER.firstname);
                }
            }
            b("#pfile-acct,#pfile-sout,#pfile-wlcm").show();
            b("#pfile-regs").hide();
            b("#pfile-regacct").hide();
            b("#pfile-acct a").attr("href", b("#pfile-acct a").attr("href").replace(/nexturl=/gi, "nexturl=" + g));
        } else {
            b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/nexturl=/gi, "nexturl=" + g));
        }
        b("#pfile-sout a").attr("href", b("#pfile-sout a").attr("href").replace(/p_done_url=/gi, "p_done_url=" + g));
        var d = window.location.host;
        if (d.indexOf("www-sites-stage.oracle.com") > -1 || d.indexOf("www-stage.oracle.com") > -1) {
            b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/www.oracle.com/g, "www-portal-stage.oracle.com"));
            b("#pfile-sout a").attr("href", b("#pfile-sout a").attr("href").replace(/login.oracle.com/g, "login-stage.oracle.com"));
        } else {
            if (d.indexOf("stage.oracle.com") > -1 && d.indexOf("portal-stage.oracle") == -1) {
                b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/www.oracle.com/g, "www-content-stage.oracle.com"));
            } else {
                if (d.indexOf("www-sites-dev") > -1 || d.indexOf("www-dev") > -1) {
                    b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/www.oracle.com\/webapps/g, "adc2170261.us.oracle.com"));
                    b("#pfile-sout a").attr("href", b("#pfile-sout a").attr("href").replace(/login.oracle.com/g, "adc2201490.us.oracle.com"));
                } else {
                    if (d.indexOf("www-content.oracle") > -1) {
                        b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/www.oracle.com/g, "www-content.oracle.com"));
                    } else {
                        if (d.indexOf("portal-stage.oracle") > -1) {
                            b("#pfile-regs a").attr("href", b("#pfile-regs a").attr("href").replace(/.*nexturl=/gi, "http://www-portal-stage.oracle.com/webapps/redirect/signon?nexturl="));
                        }
                    }
                }
            }
        }
        var i = (b("div#u01").attr("data-menusrc") != "") ? b("div#u01").attr("data-menusrc") : "/cors/menucontent.html";
        b.ajax({
            url: i,
            type: "GET",
            contentType: "text/plain; charset=UTF-8",
            crossDomain: false,
            success: function (j) {
                j = j.replace(/<img([^>]+)src=/g, "<img$1data-imgpath=");
                b("ul.u01nav").children("li").each(function () {
                    if (b(this).find("a").attr("href").indexOf("#") > -1) {
                        var k = b("#" + b(this).find("a").attr("href").split("#")[1], j);
                        b(this).find("a").attr("href", b(this).find("a").attr("href").split("#")[0]);
                        k.find("h2").remove();
                        k.hide();
                        b(this).append(k);
                    } else {
                        b(this).addClass("u01sansmenu");
                    }
                });
                b("ul.u01navtools").children("li").each(function () {
                    var k = b(j).find("#" + b(this).find("a").attr("href").split("#")[1]);
                    if (b(this).find("a").attr("href").indexOf(i) > -1) {
                        b(this).find("a").attr("href", b(this).find("a").attr("href").replace(i, ""));
                        b(this).find("a").bind("click", function (l) {
                            l.preventDefault();
                        });
                    } else {
                        b(this).find("a").attr("href", b(this).find("a").attr("href").split("#")[0]);
                    }
                    k.find("h2").remove();
                    b(this).append(k);
                });
                if (window.frameElement) {
                    b("#u01 a,form.u01searchform").attr("target", "_top");
                }
            },
            error: function (j) {
                b("ul.u01nav").addClass("u01error");
            }
        });
        b(".u01mmenu a").on("click", function (n) {
            n.preventDefault();
            var j = b("#u01 .u01active");
            var m = b(".u01navtools");
            var o = b(this).parent("div").siblings("ul.u01nav");
            var k = b(this).parent("div");
            var l = b(".u01logo + .u01pfile");
            b(m).toggleClass("u01active");
            b(o).toggleClass("u01active");
            b(k).toggleClass("u01active");
            b(l).toggleClass("u01active");
            b(j).not(m).not(o).not(k).not(l).removeClass("u01active");
        });
        b(window).resize(function () {
            if ((b(".u01mmenu").css("display") == "none") && (b("body").hasClass("f11"))) {
                b(".u01navtools").removeClass("u01active");
                b("ul.u01nav").removeClass("u01active");
                b(".u01mmenu a").parent("div").removeClass("u01active");
                b(".u01logo + .u01pfile").removeClass("u01active");
                b(".u01search").removeClass("u01active");
                b(".u01msearch a").parent("div").removeClass("u01active");
            }
        });
        b(".u01msearch a").on("click", function (m) {
            m.preventDefault();
            var j = b("#u01 .u01active");
            var k = b(".u01search");
            var l = b(this).parent("div");
            b(k).toggleClass("u01active");
            b(l).toggleClass("u01active");
            b(j).not(k).not(l).removeClass("u01active");
        });
    }
});

/*! U10 */
jQuery(document).ready(function (a) {
    a(".u10w3").append('<div class="u10btn"></div>');
    a("ul.u10-links li").last().addClass("u10last");
    a(".u10w3 h5, .u10btn").each(function () {
        a(this).click(function (d) {
            var c = a(this).parents("div.u10w3");
            var b = a("div.u10active");
            a(c).toggleClass("u10active");
            a(b).not(c).removeClass("u10active");
        });
    });
});

/*! HP07 */
jQuery(document).ready(function (a) {
    a("div.hp07v0").each(function (f) {
        var d = a(this);
        var c = (d.hasClass("hp07random")) ? Math.floor(Math.random() * (d.find("div.hp07").length - 1 + 1)) + 1 : 1;
        d[0].current = c;
        d.append('<div class="hp07z1"></div>').append('<div class="hp07z2"></div>');
        if (d.find("div.hp07").length > 1) {
            d.find(".hp07w2").prepend('<a href="#previous" class="hp07dnav hp07prev" data-goto="-1"><i> </i></a>');
            var e = '<div class="hp07nav"><ul style="margin-top:-' + (((d.find("div.hp07").length * 1.05) / 2) + 0.15) + "em;margin-left:-" + (((d.find("div.hp07").length * 1.05) / 2) + 0.15) + 'em">';
            d.find("div.hp07").each(function (h) {
                a(this).attr("id", "feature-" + (h + 1));
                var g = (h == (d[0].current - 1)) ? ' class="hp07selected"' : "";
                e += '<li><a href="#feature-' + (h + 1) + '"' + g + ' id="fnav-' + (h + 1) + '" data-goto="' + (h + 1) + '"> </a></li>';
            });
            e += "</ul></div>";
            d.find(".hp07w2").append(e + '\n<a href="#next" class="hp07dnav hp07next" data-goto="+1"><i> </i></a>');
        } else {
            d.find("div.hp07").first().attr("id", "feature-" + (d[0].current));
            d.addClass("hp07single");
        }
        d.find("div.hp07").each(function (i) {
            if (i == (d[0].current - 1)) {
                a(this).addClass("cfeature");
                var h = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                var g = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                d.append('<div class="hp07w4"><div class="hp07imgslide cslide" id="hp07img-' + (i + 1) + '"><div style="background-color:#' + h + '"><img class="hp07img" src="' + g + '"></div></div></div>');
                var g = a(this).attr("data-bgimg");
                imgpreload([g], function (j, k) {
                    var l = k.find("div.hp07w4");
                    k.find("div.hp07").each(function (p) {
                        if (p != (d[0].current - 1)) {
                            var o = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                            var m = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                            if (p < (d[0].current - 1)) {
                                l.find("#hp07img-" + d[0].current).before('<div class="hp07imgslide" id="hp07img-' + (p + 1) + '"><div style="background-color:#' + o + '"><img class="hp07img" src="' + m + '"></div></div>');
                            } else {
                                l.append('<div class="hp07imgslide" id="hp07img-' + (p + 1) + '"><div style="background-color:#' + o + '"><img class="hp07img" src="' + m + '"></div></div>');
                            }
                        }
                    });
                }, a(this).closest("div.hp07v0"));
            }
            a(this).attr("data-lbl", "hpf" + (i + 1));
            if (!a(this).find(".hp07w3").first().is("[data-lbl]")) {
                a(this).find(".hp07w3").attr("data-lbl", a(this).find(".hp07ttl").text());
            }
        });
        a("#feature-" + (d[0].current)).css("top", 0).css("left", 0);
        a("#hp07img-" + (d[0].current)).css("top", 0).css("left", 0);
        function b(g) {
            if (/-bg(......)-/.test(g)) {
                var h = g.replace(/.*-bg(......).*/ig, "$1");
                return h;
            } else {
                return "ffffff";
            }
        }
    });
    a("body").on("mouseenter", "#hp07v0", function () {
        a(this).addClass("hp07pause");
    }).on("mouseleave", "#hp07v0", function () {
        a(this).removeClass("hp07pause");
    });
});
$(window).load(function () {
    var a = ($("#hp07v0").is("[data-hp07rotate]")) ? $("#hp07v0").attr("data-hp07rotate") : 6;
    $("#hp07v0").attr("data-hp07rotate", a);
    if (a != 0 && !$("#hp07v0").hasClass("hp07single")) {
        setTimeout(function () {
            hp07goto("+1", "auto");
        }, a * 1000);
    }
});
$(document).on("click", ".hp08promo a[target]", function () {
    $(this).blur();
});
$(document).on("click", "a.hp07dnav,.hp07nav a", function () {
    if (!$(".hp07busy")[0] && !$(this).hasClass("hp07selected")) {
        if (/[-+]/.test($(this).attr("data-goto"))) {
            var a = ($(this).attr("data-goto").indexOf("+") > -1) ? "next" : "prev";
            hp07goto($(this).attr("data-goto"), a);
        } else {
            hp07goto(($(this).attr("data-goto") * 1), "nav");
        }
    }
    return false;
});
function hp07adjustCorner() {
    var a = $("#hp07v0"), b = a.find(".hp07w2").css("margin-right");
    a.find(".hp07w5 .hp07w6 > span");
}
function hp07goto(k, l) {
    var i = $("div.hp07v0").first();
    if (l == "auto" && i.hasClass("hp07gonemanual")) {
        return;
    } else {
        if (l == "auto" && i.hasClass("hp07pause")) {
            setTimeout(function () {
                hp07goto("+1", "auto");
            }, i.attr("data-hp07rotate") * 1000);
            return;
        }
    }
    i.addClass("hp07busy");
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
    var o = i[0].current;
    var d = i.find("div.hp07").length;
    var j = ((o - 1) == 0) ? d : (o - 1);
    var c = ((o + 1) > d) ? 1 : (o + 1);
    var e = null;
    if (/[+]/.test(k)) {
        k = c;
        e = "n";
    } else {
        if (/[-]/.test(k)) {
            k = j;
            e = "p";
        }
    }
    $(".hp07dnav").animate({opacity: "0"}, 300, "easeInOutSine");
    $(".hp07selected").removeClass("hp07selected");
    $("#fnav-" + k).addClass("hp07selected");
    var m = "-100%";
    var f = "-80%";
    var g = "100%";
    var h = "-20%";
    var b = "20%";
    if ((k > o && o != d && e != "p") || e == "n") {
        m = "100%";
        f = "80%";
        g = "-100%";
        h = "20%";
        b = "-20%";
    }
    var a = $("#feature-" + k).find(".hp07w3").attr("data-lbl");
    a = a.toLowerCase().replace(/ /g, "-").replace(/\xa0/g, "-").replace(/-+/g, "-").replace(/[.,:;'"]/g, "");
    if (!i[0].autocount) {
        i[0].autocount = 2;
    } else {
        if (!i.hasClass("hp07gonemanual")) {
            i[0].autocount = i[0].autocount + 1;
        } else {
            i[0].autocount = 0;
        }
    }
    if (typeof navTrack == "function" && typeof s_setAccount == "function" && i[0].autocount <= i.find(".hp07v1").length && l != "auto") {
        navTrack(s_setAccount()[1], s_setAccount()[2], "hp07", "show-hpf" + k + ":" + a + ":" + l);
    }
    var n = (i.width() < 620) ? 600 : 1000;
    if (!document.addEventListener) {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m);
        $("#hp07img-" + k).css("top", "0").css("left", "0").css("z-index", "1");
        $("#hp07img-" + k + " div").css("top", h);
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({top: g}, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({top: f}, n, "easeInOutSine");
        $("#hp07img-" + o).animate({top: g}, n, "easeInOutSine", function () {
            $(this).css("top", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function () {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({top: "0"}, n, "easeInOutSine");
        $("#hp07img-" + k).animate({top: "0"}, n, "easeInOutSine");
        $("#feature-" + k).animate({top: "0%"}, n, "easeInOutSine", function () {
            $(".hp07dnav").animate({opacity: "1"}, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    } else {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m).css("left", m);
        $("#hp07img-" + k).css("top", "0%").css("left", "0%").css("z-index", "0");
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + k + " div").css("top", h).css("left", h);
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({top: g, left: g}, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({top: f, left: f}, n, "easeInOutSine");
        $("#hp07img-" + o).animate({top: g, left: g}, n, "easeInOutSine", function () {
            $(this).css("top", g).css("left", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function () {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({top: "0", left: "0"}, n, "easeInOutSine");
        $("#hp07img-" + k).animate({top: "0", left: "0"}, n, "easeInOutSine");
        $("#feature-" + k).animate({top: "0%", left: "0%"}, n, "easeInOutSine", function () {
            $(".hp07dnav").animate({opacity: "1"}, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    }
    i[0].current = k;
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
}

/*! HP08 */
jQuery(document).ready(function (a) {
    a("div.hp08v0").each(function () {
        var d = "";
        var f = (a(this).is("[data-showlist]")) ? a(this).attr("data-showlist") : "Show List View";
        var b = (a(this).is("[data-showimgs]")) ? a(this).attr("data-showimgs") : "Show Panel View";
        a(this).addClass("hp08notloaded").addClass("hp08imgitems").attr("data-lbl", "panelview");
        a(this).find(".hp08v1").each(function (k) {
            var j = a(this)[0].id;
            var i = a(this).find(".hp08label").text();
            var h = (a(this).is("[data-lbl]")) ? a(this).attr("data-lbl") : j;
            d += '<li><a href="#' + j + '" data-lbl="' + h + '">' + i + "<i></i></a></li>";
            a(this).find(".hp08promo").each(function (l) {
                a(this).attr("data-lbl", "location" + (l + 1));
            });
        });
        d = '		<div class="hp08tablist" id="hp08tablist">			<ul data-lbl="tab">' + d + '</ul>			<div class="hp08tglview">				<a href="#showlist" class="hp08showlist" title="' + f + '" data-lbl="show-list-view"> </a>				<a href="#showimages" class="hp08showimgs" title="' + b + '" data-lbl="show-panel-view"> </a>				<div class="hp08tgl-togg"></div>				<div class="hp08tgl-icn list-icn"></div>				<div class="hp08tgl-icn imgs-icn"></div>			</div>			</div>';
        a(this).prepend(d);
        var e = 1;
        if (a(this).hasClass("randomtab")) {
            var g = (a(this).find(".hp08tablist li").length * 2) + 2;
            g = Math.floor(Math.random() * (g - 1 + 1)) + 1;
            if (g > 4) {
                e = Math.round((g - 2) / 2);
            }
        }
        a(this).find(".hp08tablist li:nth-child(" + e + ")").addClass("hp08default");
        a(this).prepend('<div id="hp08selector"><a href="#choosefilter" data-lbl="notrack"></a></div>');
        a(this).find(".hp08teaser").wrapInner("<span><em></em></span>").append('<b class="hp08arrw"></b>').hide();
        a(this).find(".hp08cta").wrapInner("<span></span>").hide();
        var c = '	<div class="hp08v1 hp08bgtiles">	<div class="hp08promo hp08promo-1 hp08c1 hp08bgtile"></div>	<div class="hp08promo hp08promo-2 hp08c1 hp08bgtile"></div>	<div class="hp08promo hp08promo-3 hp08c2 hp08bgtile"></div>	<div class="hp08promo hp08promo-4 hp08c3 hp08bgtile"></div>	<div class="hp08promo hp08promo-5 hp08c3 hp08bgtile"></div>	</div>';
        a(this).find(".hp08w2").append(c);
        hp08resize();
    });
    a(".hp08v0").waypoint(function (b) {
        if (!a(this.element).find(".hp08img")[0]) {
            hp08showpromo(a(".hp08v0 .hp08default a").attr("href").split("#")[1]);
        }
    }, {offset: "100%"});
});
jQuery(window).resize(function (a) {
    hp08resize();
});
function hp08resize() {
    jQuery("div.hp08promo").each(function () {
        if ($(this).hasClass("hp08promo-3")) {
            $(this).css("height", $(this).closest(".hp08v1").outerHeight());
        }
        var a = jQuery(this).find(".hp08teaser").height();
        var b = jQuery(this).height();
        var c = jQuery(this).find(".cmps-bttns span").width();
        jQuery(this).find(".hp08cta").css("height", (b) + "px").css("margin-top", (-1 * a) + "px").css("padding-top", (1 * a) + "px");
        jQuery(this).find(".hp08w3").css("top", (b - a) + "px").css("padding-right", (c + 40) + "px");
        jQuery(this).find(".hp08w4").css("padding-right", (c + 40) + "px");
    });
}
$(document).on("click", ".hp08tablist ul a", function () {
    if ($(this)[0].href.split("#")[1] != $(".hp08v0").attr("data-cfilter")) {
        hp08showpromo($(this)[0].href.split("#")[1]);
    }
    $(".hp08viewmenu").removeClass("hp08viewmenu");
    return false;
});
$(document).on("click", ".hp08tglview a", function () {
    $(this).closest(".hp08").toggleClass("hp08lvw").toggleClass("hp08imgitems");
    if ($(this).closest(".hp08").attr("data-lbl") == "panelview") {
        $(this).closest(".hp08").attr("data-lbl", "listview");
    } else {
        $(this).closest(".hp08").attr("data-lbl", "panelview");
    }
    hp08resize();
    $(this).parent().find(".hp08tgl-icn").css("opacity", 0.2).animate({opacity: 1}, 800, "easeInOutSine");
    return false;
});
$(document).on("click", "#hp08selector a", function () {
    $(this).closest(".hp08").toggleClass("hp08viewmenu");
    return false;
});
$(document).on("click", ".hp08promo a[target]", function () {
    $(this).blur();
});
$(document).on("mouseenter", ".hp08notloaded", function () {
    $(this).find(".hp08promo a[data-bgimg]").each(function (c) {
        var b = hp08imgpos($(this).attr("data-bgimg"));
        var a = ($(this).is("[data-bgimg2x]") && $("html").hasClass("retina")) ? $(this).attr("data-bgimg2x") : $(this).attr("data-bgimg");
        $(this).prepend('<div class="hp08img ' + b + '" style="background-image:url(\'' + a + "')\"></div>");
        $(this).removeAttr("data-bgimg").removeAttr("data-bgimg2x");
    });
    $(this).removeClass("hp08notloaded");
});
function hp08showpromo(a) {
    var c = $("#" + a);
    c.parent().find(".hp08cta").hide();
    var b = $("#" + $(".hp08v0").attr("data-cfilter"));
    if (b[0]) {
        $(".hp08prevf").removeClass("hp08prevf");
        b.removeClass("hp08currentfilter").addClass("hp08prevf");
        b.find(".hp08cta").hide();
    }
    c.addClass("hp08currentfilter");
    c.find(".hp08promo a").css("top", "-150%");
    $(".hp08selected").removeClass("hp08selected").removeClass("hp08default");
    $('.hp08tablist a[href$="#' + a + '"]').parent().addClass("hp08selected");
    $("#hp08selector a").html($('.hp08tablist a[href="#' + a + '"]').parent().text());
    $(".hp08v0").attr("data-cfilter", a);
    c.find(".hp08promo a").each(function (g) {
        if (!$(this).find(".hp08img")[0] && $(this).is("[data-bgimg]")) {
            var d = ($(this).is("[data-bgimg2x]") && $("html").hasClass("retina")) ? $(this).attr("data-bgimg2x") : $(this).attr("data-bgimg");
            $(this).removeAttr("data-bgimg").removeAttr("data-bgimg2x");
            imgpreload([d], function (h, i) {
                i.css("top", "-150%");
                var j = hp08imgpos(d);
                i.prepend('<div class="hp08img ' + j + '" style="background-image:url(\'' + d + "')\"></div>");
                hp08loadp(i);
            }, $(this));
        } else {
            var f = $(this);
            if (f.closest(".hp08imgitems")[0]) {
                var e = setTimeout(function () {
                    hp08loadp(f);
                }, (g * (100 - (g * 4))));
            } else {
                hp08loadp(f);
            }
        }
    });
}
function hp08loadp(b) {
    b.find(".hp08teaser").show();
    hp08resize();
    var a = "hp08promo-" + b.parent()[0].className.split("8promo-")[1].split(" ")[0];
    if (b.closest(".hp08imgitems")[0]) {
        b.animate({top: "0%"}, 700, "easeInOutSine", function () {
            $(this).find(".hp08cta").css("display", "table");
            $("div.hp08prevf ." + a + " a").css("top", "-150%");
        });
    } else {
        b.css("top", 0).show();
        b.find(".hp08cta").css("display", "table");
    }
}
function hp08imgpos(a) {
    if (/hp08c[13]p1/.test(a)) {
        return " hp08bg-tl";
    } else {
        if (/hp08c[13]p2/.test(a)) {
            return " hp08bg-tc";
        } else {
            if (/hp08c[13]p3/.test(a)) {
                return " hp08bg-tr";
            } else {
                if (/hp08c2p1/.test(a)) {
                    return " hp08bg-tc";
                } else {
                    if (/hp08c2p2/.test(a)) {
                        return " hp08bg-mc";
                    } else {
                        if (/hp08c2p3/.test(a)) {
                            return " hp08bg-bc";
                        } else {
                            return "";
                        }
                    }
                }
            }
        }
    }
}
jQuery(document).ready(function (a) {
    a(".hp09roles > li:nth-child(3)").addClass("hp08clft");
    if (!document.addEventListener) {
        a("div.hp09icn").append('<i class="ie-icn"><span><b> </b></span></i>');
    }
    a(".hp09v0").waypoint(function (b) {
        a(this.element).addClass("hp09loadicons");
    }, {offset: "100%"});
});
$(document).ready(function () {
    $(".f11v1 .f11w1 .cw21").each(function () {
        var a = $(this).clone();
        $(this).remove();
        $(".f11v1 .f11w1").after(a);
    });
});

/*! CW21 */
jQuery(document).ready(function (f) {
    var a = ["facebook", "twitter", "linkedin", "googleplus", "weibo", "email"], b = a.length;
    (function (g) {
        g(document).keydown(function (h) {
            if (h.which == 27) {
                g("li.cw21selected").removeClass("cw21selected");
                g("div.cw21opened").css("right", "");
                g("div.cw21opened").removeClass("cw21opened");
                g("div.cw21hidden").remove();
            }
        });
    })(jQuery);
    if (f(".f11v3 div.cw21")[0]) {
        f(".f11v3").addClass("hascw21");
    }
    f("div.cw21").each(function () {
        var p = f(this).attr("data-share-only") ? f(this).attr("data-share-only") : "", r = p.length ? p.split(",") : [];
        if (!f(this).hasClass("cw21nobtt")) {
            f(this).prepend('<div class="cw21w3"><a id="cw21scrollto" class="icn-img" href="#top"></a></div>');
        }
        f(this).find("ul.cw21navigation li").first().addClass("cw21firstli");
        f(this).find("ul.cw21navigation li a").append("<b></b>");
        f(this).find("ul.cw21-iconfont").each(function () {
            f(this).addClass("cw21-sicons");
            f(this).find('i[class*="icnf"]').each(function () {
                var j = f(this).attr("class").replace(/icnf/g, "icn").replace(/gplus2/g, "googleplus").replace(/video2/g, "omn").replace(/cast/g, "pcast").replace(/blog/g, "blogs");
                f(this).parent().find("span.screen-reader").wrapAll('<div class="icn-img icn-sicons ' + j + '"></div>');
                f(this).remove();
            });
        });
        if ((r.indexOf("twitter") > -1 || r.indexOf("facebook") > -1 || f('meta[property="og:image"]')[0] || (f('meta[name="twitter:card"]')[0]) && f("#cw21-socialtab")[0]) || f('meta[name*="weibo"]')[0]) {
            var k = f("#cw21-socialtab");
            var m = k.is("[data-sharetxt]") ? k.attr("data-sharetxt") : "Share This Page";
            var g = "";
            if (Array.isArray(r) && r.length > 0) {
                for (var l = 0; l < b; l++) {
                    if (r.indexOf(a[l]) >= 0) {
                        g = g + a[l];
                        if (l < r.length) {
                            g = g + ",";
                        }
                    }
                }
            } else {
                if (f('meta[name*="weibo"]')[0]) {
                    g = "weibo,linkedin,email";
                } else {
                    if (f('meta[property="og:image"]')[0] && f('meta[name="twitter:card"]')[0]) {
                        g = "facebook,twitter,linkedin,googleplus,email";
                    } else {
                        if (f('meta[property="og:image"]')[0]) {
                            g = "facebook,linkedin,googleplus,email";
                        } else {
                            if (f('meta[name="twitter:card"]')[0]) {
                                g = "twitter,email";
                            }
                        }
                    }
                }
            }
            var h = "";
            g = g.split(",");
            for (i = 0; i < g.length; ++i) {
                var q = (k.is("[data-esubject]") && g[i] == "email") ? ' data-esubject="' + k.attr("data-esubject") + '"' : "";
                var o = (f('meta[property="og:title"]')[0]) ? ' data-ebody="' + encodeURIComponent(f('meta[property="og:title"]').attr("content")) + '"' : "";
                o = (k.is("[data-ebody]") && g[i] == "email") ? ' data-ebody="' + k.attr("data-ebody") + '"' : o;
                var n = (k.is("[data-via]") && g[i] == "twitter") ? ' data-via="' + k.attr("data-via") + '"' : "";
                h += '<li><a class="sharelink" data-sharetype="' + g[i] + '"' + n + q + o + '><div class="icn-img icn-sicons icn-' + g[i] + '"></div><span class="screen-reader">' + g[i] + "</span></a></li>";
            }
            k.prepend("<p>" + m + '</p><ul class="cw21-iconfont cw21-sicons">' + h + "</ul>");
        }
    });
    f("ul.cw21navigation").on("click", "a", function (k) {
        var h = f(this).closest(".cw21");
        var g = h.outerWidth(true);
        var j = f(this).attr("href").split("#")[1];
        if ((typeof j !== "undefined")) {
            h.find("div.cw21w1").css("min-height", ((f("ul.cw21navigation li").length * 55) + 0) + "px");
            if (!h.hasClass("cw21opened")) {
                h.addClass("cw21opened");
                f(this).parent().addClass("cw21selected");
                h.parent().append('<div class="cw21hidden"></div>');
                h.animate({right: "0px"}, 400);
                h.find("div.cw21w2").hide();
                f("#" + j).show();
            } else {
                if (h.hasClass("cw21opened") && !f(this).parent().hasClass("cw21selected")) {
                    h.find("div.cw21w2").hide();
                    f("#" + j).show();
                    f("li.cw21selected").removeClass("cw21selected");
                    f(this).parent().addClass("cw21selected");
                } else {
                    f("div.cw21hidden").remove();
                    h.find("div.cw21w2").hide();
                    h.removeClass("cw21opened");
                    h.animate({right: (g * -1) + "px"}, 400, function () {
                        f("li.cw21selected").removeClass("cw21selected");
                        f(this).css("right", "");
                    });
                }
            }
            k.preventDefault();
        }
    });
    f(document).on("click", "div.cw21hidden", function (k) {
        var h = f("div.cw21");
        var g = h.outerWidth(true);
        var j = f("div.cw21hidden");
        if (!h.is(k.target) && h.has(k.target).length === 0 && h.hasClass("cw21opened")) {
            h.find("div.cw21w2").hide();
            h.removeClass("cw21opened");
            h.animate({right: (g * -1) + "px"}, 400, function () {
                f("li.cw21selected").removeClass("cw21selected");
                f(this).css("right", "");
            });
            j.remove();
        }
    });
    f(window).scroll(function () {
        if ((f(this).scrollTop() > f(window).height()) && (f(window).height() > 200)) {
            f(".cw21w3").fadeIn();
        } else {
            f(".cw21w3").fadeOut();
        }
    });
    f(".cw21w3").click(function () {
        f("html, body").animate({scrollTop: 0}, 800);
        return false;
    });
    var e = f("div.cw21w2").map(function () {
        return f(this).height();
    }).get();
    var d = Math.max.apply(null, e);
    var c = f(window).height();
    if (d > 200) {
        f("div.cw21").css("margin-top", -(d / 2) + "px");
    }
});
$(document).on("click", "a.sharelink", function () {
    var c = window.location.href;
    if ($(this).is("[data-esubject]")) {
        if ($(this).attr("data-esubject").indexOf("%PAGETITLE%") > -1) {
            var f = document.title;
            var g = $(this).attr("data-esubject").replace(/%PAGETITLE%/g, f);
        } else {
            var g = $(this).attr("data-esubject");
        }
    }
    var k = $(this).attr("data-ebody");
    var l = window.location.protocol + "//";
    var e = window.location.host;
    if ($(this).is("[data-url]") && $(this).attr("data-url").indexOf("/") == 0) {
        c = l + e + $(this).attr("data-url");
    } else {
        if ($(this).is("[data-url]") && $(this).attr("data-url").indexOf("http") > -1) {
            c = $(this).attr("data-url");
        } else {
            if ($(this).is("[data-url]") && $(this).attr("data-url").indexOf("//") > -1) {
                c = l + $(this).attr("data-url");
            } else {
                if ($(this).is("[data-url]") && $(this).attr("data-url").indexOf("/") != 0) {
                    c = document.location.href.replace(/\/[^\/]+$/, "") + "/" + $(this).attr("data-url");
                } else {
                    if ($(this).is("[data-url]")) {
                        c = $(this).attr("data-url");
                    }
                }
            }
        }
    }
    var h = 22;
    c = encodeURIComponent(c);
    if ($(this).attr("data-sharetype") == "facebook") {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + c, "fb-share", "height=300,width=400");
    } else {
        if ($(this).attr("data-sharetype") == "twitter") {
            var a = ($(this).is("[data-via]")) ? $(this).attr("data-via").length + 6 : 0;
            var j = ($(this).is("[data-via]")) ? "&via=" + $(this).attr("data-via") : "";
            var b = "";
            if ($(this).is("[data-text]")) {
                var d = ($(this).is("[data-text]")) ? $(this).attr("data-text").length + 2 : 0;
                if ((140 - (h + d + a)) < 0) {
                    b = "&text=" + $(this).attr("data-text").slice(0, (137 - (h + d + a))) + "%E2%80%A6 %E2%80%93";
                } else {
                    b = "&text=" + $(this).attr("data-text") + " %E2%80%93";
                }
            }
            window.open("https://twitter.com/share?url=" + c + j + b, "twitter-share", "height=550,width=420");
        } else {
            if ($(this).attr("data-sharetype") == "linkedin") {
                window.open("http://www.linkedin.com/shareArticle?url=" + c, "linkedin-share", "height=550,width=420");
            } else {
                if ($(this).attr("data-sharetype") == "googleplus") {
                    window.open("https://plus.google.com/share?url=" + c, "googleplus-share", "height=620,width=500");
                } else {
                    if ($(this).attr("data-sharetype") == "weibo") {
                        window.open("http://service.weibo.com/share/share.php?url=" + c, "weibo-share", "height=620,width=900");
                    } else {
                        if (($(this).attr("data-sharetype") == "email") && $(this).is("[data-esubject]") && $(this).is("[data-ebody]")) {
                            location.assign("mailto:?subject=" + g + "&body=" + k + "%0A%0A" + c, "email-share");
                        } else {
                            if (($(this).attr("data-sharetype") == "email") && $(this).is("[data-ebody]")) {
                                location.assign("mailto:?&body=" + k + "%0A%0A" + c, "email-share");
                            } else {
                                if (($(this).attr("data-sharetype") == "email") && $(this).is("[data-esubject]")) {
                                    location.assign("mailto:?subject=" + g + "&body=" + c, "email-share");
                                } else {
                                    if ($(this).attr("data-sharetype") == "email") {
                                        location.assign("mailto:?body=" + c, "email-share");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
});
$(document).on("click", "a.sharewidget", function (c) {
    var h = $(this);
    var a = "facebook,twitter,linkedin,googleplus,email";
    if ($(this).is("[data-share]")) {
        a = $(this).attr("data-share").replace(/ /gi, "");
    }
    var f = "";
    if ($(this).is("[data-url]")) {
        f = ' data-url="' + $(this).attr("data-url") + '"';
    }
    var d = (!document.addEventListener) ? '<i class="ie-icn"><span><b> </b></span></i>' : "";
    var b = "";
    a = a.split(",");
    for (i = 0; i < a.length; ++i) {
        var k = "";
        if ($(this).is("[data-esubject]") && a[i] == "email") {
            k = ' data-esubject="' + $(this).attr("data-esubject") + '"';
        }
        var j = "";
        if ($(this).is("[data-ebody]") && a[i] == "email") {
            j = ' data-ebody="' + $(this).attr("data-ebody") + '"';
        }
        var g = ($(this).is("[data-via]") && a[i] == "twitter") ? ' data-via="' + $(this).attr("data-via") + '"' : "";
        var e = ($(this).is("[data-text]") && a[i] == "twitter") ? ' data-text="' + $(this).attr("data-text") + '"' : "";
        b += '<a class="sharelink" data-sharetype="' + a[i] + '"' + f + g + e + k + j + '><div class="icn-img icn-sicons icn-' + a[i] + '"><em>' + a[i] + "</em>" + d + "</div></a>";
    }
    if (!h.next(".sharewidgetw2")[0]) {
        if (!$(this).closest(".cmps-bttns")[0] && !$(this).closest("div.sharewidget")[0] && !$(this).closest("span.sharewidgetw1")[0]) {
            $(this).wrapAll('<span class="sharewidgetw1"></span>');
        }
        if ($(this).hasClass("rightshare")) {
            $(this).closest(".cmps-share,div.sharewidget,span.sharewidgetw1").addClass("rightshare");
        }
        if ($(this).hasClass("topshare")) {
            $(this).closest(".cmps-share,div.sharewidget,span.sharewidgetw1").addClass("topshare");
        }
        if ($(this).closest(".cmps-bttns")[0] || $(this).closest("div.sharewidget")[0] || $(this).closest("span.sharewidgetw1")[0]) {
            $(this).closest("div").addClass("shareopen");
        }
        h.after('<div class="sharewidgetw2">' + b + "</div>");
    } else {
        h.next(".sharewidgetw2").remove();
        $(this).closest("div").removeClass("shareopen");
    }
    return false;
});
$(document).mousedown(function (a) {
    if (window.event) {
        if (!$(window.event.srcElement).closest(".sharewidgetw2")[0] && !$(window.event.srcElement).closest(".sharewidget")[0]) {
            if ($(".shareopen").length) {
                $(".sharewidgetw2").remove();
                $(".shareopen").removeClass("shareopen");
            }
        }
    } else {
        if (!$(a.target).closest(".sharewidgetw2")[0] && !$(a.target).closest(".sharewidget")[0]) {
            if ($(".shareopen").length) {
                $(".sharewidgetw2").remove();
                $(".shareopen").removeClass("shareopen");
            }
        }
    }
});

/*! BrightcoveExperiences.js */
/* last updated 08/02/16 from https://sadmin.brightcove.com/js/BrightcoveExperiences.js */

if (brightcove == undefined) {
    var brightcove = {};
    brightcove.getExperience = function () {
        alert("Please import APIModules_all.js in order to use the API.");
    };
}
if (brightcove.experiences == undefined) {
    brightcove.servicesURL = 'http://c.brightcove.com/services';
    brightcove.cdnURL = 'http://admin.brightcove.com';
    brightcove.secureCDNURL = 'https://sadmin.brightcove.com';
    brightcove.secureServicesURL = 'https://secure.brightcove.com/services';
    brightcove.USservicesURL = 'http://c.brightcove.com/services';
    brightcove.UScdnURL = 'http://admin.brightcove.com';
    brightcove.USsecureCDNURL = 'https://sadmin.brightcove.com';
    brightcove.USsecureServicesURL = 'https://secure.brightcove.com/services';
    brightcove.pubHost = 'c.$pubcode$.$zoneprefix$$zone$';
    brightcove.pubSecureHost = 'secure.$pubcode$.$zoneprefix$$zone$';
    brightcove.pubSubdomain = 'ariessaucetown.local';
    brightcove.experiences = {};
    brightcove.experienceObjects = {};
    brightcove.renderExperienceInProcess = false;
    brightcove.createExperiencesQueue = [];
    brightcove.renderExperienceQueue = [];
    brightcove.timeouts = {};
    brightcove.flashTimeoutInterval = 10000;
    brightcove.htmlTimeoutInterval = 10000;
    brightcove.experienceNum = 0;
    brightcove.majorVersion = 9;
    brightcove.majorRevision = 0;
    brightcove.minorRevision = 28;
    brightcove.performCdnUrl = {
        'development': '//players.brightcove.net/',
        'qa': '//players.qa.brightcove.net/',
        'staging': '//players.staging.brightcove.net/',
        'production': '//players.brightcove.net/'
    };
    brightcove.metricsBaseUrl = {
        'development': '//data.aws-qa.rnatest.brightcove.com',
        'qa': '//data.aws-qa.rnatest.brightcove.com',
        'staging': '//data.aws-qa.rnatest.brightcove.com',
        'production': '//metrics.brightcove.com/tracker'
    };
    brightcove.analyticsErrors = {
        'BAD_PUBLISHER_ID': -100,
        'UNEXPECTED_MAPPING_RESPONSE': -101,
        'MAPPINGS_CALL_FAILURE': -102
    };
    brightcove.servlet = {AS3: "federated_f9", HTML: "htmlFederated"};
    brightcove.mappingFileData = {};
    brightcove.publisherMappingBlacklist = ['11111', '1625296048001', '1625296047001', '2632443457001', '3165349001', '30427124001', '2155857773001', '2067658940001', '1786718357', '963482469001', '22710213001', '3620503976001'];
    brightcove.playerType = {
        FLASH: "flash",
        HTML: "html",
        FLASH_IFRAME: "flashIFrame",
        INSTALLER: "installer",
        NO_SUPPORT: "nosupport"
    };
    brightcove.errorCodes = {
        UNKNOWN: 0,
        DOMAIN_RESTRICTED: 1,
        GEO_RESTRICTED: 2,
        INVALID_ID: 3,
        NO_CONTENT: 4,
        UNAVAILABLE_CONTENT: 5,
        UPGRADE_REQUIRED_FOR_VIDEO: 6,
        UPGRADE_REQUIRED_FOR_PLAYER: 7,
        SERVICE_UNAVAILABLE: 8
    };
    brightcove.defaultParam = {};
    brightcove.defaultParam.width = '100%';
    brightcove.defaultParam.height = '100%';
    brightcove.defaultFlashParam = {};
    brightcove.defaultFlashParam.allowScriptAccess = 'always';
    brightcove.defaultFlashParam.allowFullScreen = 'true';
    brightcove.defaultFlashParam.seamlessTabbing = false;
    brightcove.defaultFlashParam.swliveconnect = true;
    brightcove.defaultFlashParam.wmode = 'window';
    brightcove.defaultFlashParam.quality = 'high';
    brightcove.defaultFlashParam.bgcolor = '#999999';
    brightcove.hasActiveX = brightcove.isIE = (window.ActiveXObject != undefined);
    brightcove.userAgent = navigator.userAgent;
    brightcove._queuedAPICalls = [];
    var brightcoveJS = brightcove;
    brightcove.createExperiences = function (pEvent, pElementID) {
        var experiences = [];
        var params;
        var experience;
        var flashSupport = brightcove.checkFlashSupport();
        var htmlSupport = brightcove.checkHtmlSupport();
        if (brightcove.renderExperienceInProcess) {
            function createExperiencesWrapper(pEvent, pElementID) {
                return function () {
                    brightcove.createExperiences(pEvent, pElementID);
                }
            }

            brightcove.createExperiencesQueue.push(createExperiencesWrapper(pEvent, pElementID));
            return;
        }
        if (pElementID != null) {
            experiences.push(document.getElementById(pElementID));
        } else {
            experiences = brightcove.collectExperiences();
        }
        if (brightcove.hasActiveX) {
            params = document.getElementsByTagName('param');
        }
        var urlParams = brightcove.cacheUrlParams();
        var numExperiences = experiences.length;
        for (var i = 0; i < numExperiences; i++) {
            experience = experiences[i];
            experience = brightcove.copyDefaultParams(experience);
            experience = brightcove.copySnippetParams(experience, params);
            experience = brightcove.copyUrlParams(experience, urlParams, numExperiences);
            var playerType = brightcove.determinePlayerType(experience, flashSupport, htmlSupport);
            var secureConnections = false;
            if (playerType == brightcove.playerType.HTML) {
                secureConnections = experience.params.secureHTMLConnections == "true";
            } else {
                secureConnections = experience.params.secureConnections == "true";
            }
            if (playerType == brightcove.playerType.HTML) {
                delete experience.params.linkBaseURL;
            } else {
                if (experience.params.includeAPI && experience.params.templateReadyHandler != null) {
                    experience.params.originalTemplateReadyHandler = experience.params.templateReadyHandler;
                    var handlerName = "templateReadyHandler" + experience.id;
                    brightcove[handlerName] = (function (id) {
                        return function (event) {
                            if (brightcove.internal != null && brightcove.internal._instances[id] != null) {
                                brightcove._addModuleToEvent(id, event);
                            }
                            var player = brightcove.experienceObjects[id];
                            brightcove.callHandlerForPlayer(player, "originalTemplateReadyHandler", event);
                        };
                    })(experience.id);
                    experience.params.templateReadyHandler = 'brightcove["' + handlerName + '"]';
                }
            }
            var file = brightcove.generateRequestUrl(experience, playerType, secureConnections);
            if (document.location.protocol == "http:") {
                var event = 'http://goku.brightcove.com/1pix.gif?';
                var gokuParams = ["dcsuri=/viewer/player_load_req", "playerType=" + playerType, "playerURL=" + encodeURIComponent(document.location || "")];
                var image = brightcove.createElement('image');
                for (var j in experience.params) {
                    gokuParams.push([encodeURIComponent(j) + "=" + encodeURIComponent(experience.params[j])]);
                }
                event += gokuParams.join('&');
                image.src = event;
            }
            brightcove.renderExperience(experience, file, playerType, secureConnections);
        }
    };
    brightcove.collectExperiences = function () {
        var experiences = [];
        var allObjects = document.getElementsByTagName('object');
        var numObjects = allObjects.length;
        for (var i = 0; i < numObjects; i++) {
            if (/\bBrightcoveExperience\b/.test(allObjects[i].className)) {
                if (allObjects[i].type != 'application/x-shockwave-flash') {
                    experiences.push(allObjects[i]);
                }
            }
        }
        return experiences;
    };
    brightcove.cacheUrlParams = function () {
        var urlParams = {};
        urlParams.playerKey = decodeURIComponent(brightcove.getParameter("bckey"));
        urlParams.playerID = brightcove.getParameter("bcpid");
        urlParams.titleID = brightcove.getParameter("bctid");
        urlParams.lineupID = brightcove.getParameter("bclid");
        urlParams.autoStart = brightcove.getParameter("autoStart");
        urlParams.debuggerID = brightcove.getParameter("debuggerID");
        urlParams.forceHTML = brightcove.getParameter("forceHTML");
        urlParams.forceFlashIFrame = brightcove.getParameter("forceFlashIFrame");
        urlParams.debug = brightcove.getParameter("debug");
        urlParams.showNoContentMessage = brightcove.getParameter("showNoContentMessage");
        urlParams.htmlDefaultBitrate = brightcove.getParameter("htmlDefaultBitrate");
        urlParams.linkSrc = brightcove.getParameter("linkSrc");
        urlParams.enableMapping = brightcove.getParameter("enableMapping");
        return urlParams;
    };
    brightcove.copyDefaultParams = function (experience) {
        if (!experience.params)experience.params = {};
        if (!experience.flashParams)experience.flashParams = {};
        for (var i in brightcove.defaultParam) {
            experience.params[i] = brightcove.defaultParam[i];
        }
        for (var j in brightcove.defaultFlashParam) {
            experience.flashParams[j] = brightcove.defaultFlashParam[j];
        }
        if (experience.id.length > 0) {
            experience.params.flashID = experience.id;
        } else {
            experience.id = experience.params.flashID = 'bcExperienceObj' + (brightcove.experienceNum++);
        }
        experience.params.identifierClassName = 'BrightcoveExperienceID_' + Math.floor(Math.random() * 10000);
        return experience;
    };
    brightcove.copySnippetParams = function (experience, params) {
        if (!brightcove.hasActiveX) {
            params = experience.getElementsByTagName('param');
        }
        var numParams = params.length;
        var param;
        for (var j = 0; j < numParams; j++) {
            param = params[j];
            if (brightcove.hasActiveX && param.parentNode.id != experience.id) {
                continue;
            }
            experience.params[param.name] = param.value;
        }
        if (experience.params.bgcolor != undefined)experience.flashParams.bgcolor = experience.params.bgcolor;
        if (experience.params.wmode != undefined)experience.flashParams.wmode = experience.params.wmode;
        if (experience.params.seamlessTabbing != undefined)experience.flashParams.seamlessTabbing = experience.params.seamlessTabbing;
        return experience;
    };
    brightcove.copyUrlParams = function (experience, urlParams) {
        if (experience.params.autoStart == undefined && urlParams.autoStart != undefined) {
            experience.params.autoStart = urlParams.autoStart;
        }
        if (urlParams.debuggerID != undefined) {
            experience.params.debuggerID = urlParams.debuggerID;
        }
        if (urlParams.forceHTML != undefined && urlParams.forceHTML !== '') {
            experience.params.forceHTML = urlParams.forceHTML;
        }
        if (urlParams.forceFlashIFrame != undefined && urlParams.forceFlashIFrame !== '') {
            experience.params.forceFlashIFrame = urlParams.forceFlashIFrame;
        }
        if (urlParams.enableMapping != undefined && urlParams.enableMapping !== '') {
            experience.params.enableMapping = urlParams.enableMapping.toLowerCase() === 'true';
        }
        if (urlParams.debug != undefined && urlParams.debug !== '') {
            experience.params.debug = urlParams.debug;
        }
        if (urlParams.showNoContentMessage != undefined && urlParams.showNoContentMessage != '') {
            experience.params.showNoContentMessage = urlParams.showNoContentMessage;
        }
        if (urlParams.htmlDefaultBitrate != undefined && urlParams.htmlDefaultBitrate !== '') {
            experience.params.htmlDefaultBitrate = urlParams.htmlDefaultBitrate;
        }
        if (urlParams.linkSrc != undefined && urlParams.linkSrc != '') {
            experience.params.linkSrc = urlParams.linkSrc;
        }
        var overrideContent = (urlParams.playerID.length < 1 && urlParams.playerKey.length < 1) || (urlParams.playerID == experience.params.playerID) || (urlParams.playerKey == experience.params.playerKey);
        if (overrideContent) {
            if (urlParams.titleID.length > 0) {
                experience.params.videoID = urlParams.titleID;
                experience.params["@videoPlayer"] = urlParams.titleID;
                experience.params.autoStart = (experience.params.autoStart != "false" && urlParams.autoStart != "false");
            }
            if (urlParams.lineupID.length > 0) {
                experience.params.lineupID = urlParams.lineupID;
            }
        }
        return experience;
    };
    brightcove.determinePlayerType = function (experience, flashSupport, htmlSupport) {
        if (flashSupport == null && htmlSupport == false) {
            return brightcove.playerType.NO_SUPPORT;
        }
        if (experience.params.forceHTML) {
            if (window.console) {
                var message = "The forceHTML parameter was used for the Brightcove player. This value should ONLY be used for";
                message += " development and testing purposes and is not supported in production environments.";
                console.log(message);
            }
            return brightcove.playerType.HTML;
        }
        if (experience.params.forceFlashIFrame || (brightcove.isMetroIE() && flashSupport == null)) {
            return brightcove.playerType.FLASH_IFRAME;
        }
        if (flashSupport != null) {
            if (brightcove.isFlashVersionSufficient(experience, flashSupport)) {
                return brightcove.playerType.FLASH;
            } else {
                return brightcove.playerType.INSTALLER;
            }
        }
        if (htmlSupport) {
            if (brightcove.isSupportedHTMLDevice() || experience.params.htmlFallback) {
                return brightcove.playerType.HTML;
            }
        }
        return brightcove.playerType.NO_SUPPORT;
    };
    brightcove.isFlashVersionSufficient = function (experience, flashSupport) {
        if (flashSupport == null)return false;
        var setMajorVersion = false;
        var requestedMajorVersion;
        var requestedMajorRevision;
        var requestedMinorRevision;
        if (experience.params.majorVersion != undefined) {
            requestedMajorVersion = parseInt(experience.params.majorVersion, 10);
            setMajorVersion = true;
        } else {
            requestedMajorVersion = brightcove.majorVersion;
        }
        if (experience.params.majorRevision != undefined) {
            requestedMajorRevision = parseInt(experience.params.majorRevision, 10);
        } else {
            if (setMajorVersion) {
                requestedMajorRevision = 0;
            } else {
                requestedMajorRevision = brightcove.majorRevision;
            }
        }
        if (experience.params.minorRevision != undefined) {
            requestedMinorRevision = parseInt(experience.params.minorRevision, 10);
        } else {
            if (setMajorVersion) {
                requestedMinorRevision = 0;
            } else {
                requestedMinorRevision = brightcove.minorRevision;
            }
        }
        return (flashSupport.majorVersion > requestedMajorVersion || (flashSupport.majorVersion == requestedMajorVersion && flashSupport.majorRevision > requestedMajorRevision) || (flashSupport.majorVersion == requestedMajorVersion && flashSupport.majorRevision == requestedMajorRevision && flashSupport.minorRevision >= requestedMinorRevision));
    };
    brightcove.generateRequestUrl = function (experience, playerType, secureConnections) {
        var file;
        if (playerType == brightcove.playerType.INSTALLER) {
            file = brightcove.cdnURL + "/viewer/playerProductInstall.swf";
            var MMPlayerType = brightcove.hasActiveX ? "ActiveX" : "PlugIn";
            document.title = document.title.slice(0, 47) + " - Flash Player Installation";
            var MMdoctitle = document.title;
            file += "?&MMredirectURL=" + window.location + '&MMplayerType=' + MMPlayerType + '&MMdoctitle=' + MMdoctitle;
            brightcove.reportUpgradeRequired(experience);
        } else {
            if (secureConnections) {
                file = brightcove.getPubURL(brightcove.secureServicesURL, brightcove.pubSecureHost, experience.params.pubCode);
            } else {
                file = brightcove.getPubURL(brightcove.servicesURL, brightcove.pubHost, experience.params.pubCode);
            }
            var servlet = (playerType == brightcove.playerType.HTML) ? brightcove.servlet.HTML : brightcove.servlet.AS3;
            file += '/viewer/' + servlet + '?' + brightcove.getOverrides();
            for (var config in experience.params) {
                file += '&' + encodeURIComponent(config) + '=' + encodeURIComponent(experience.params[config]);
            }
        }
        return file;
    };
    brightcove.renderInstallGif = function (experience, secureConnections) {
        var cdnURL = secureConnections ? brightcove.secureCDNURL : brightcove.cdnURL;
        var upgradeFlashImage = cdnURL.indexOf('.co.jp') > 0 ? "upgrade_flash_player_kk.gif" : "upgrade_flash_player2.gif";
        var linkHTML = "<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='" + cdnURL + "/viewer/" + upgradeFlashImage + "' alt='Get Flash Player' width='314' height='200' border='0'></a>";
        return linkHTML;
    };
    brightcove.renderExperience = function (experience, file, playerType, secureConnections) {
        var experienceElement;
        var experienceID = experience.id;
        var isPubIdInBlacklist;
        var publisherID;
        var dummyElement;
        if (brightcove.renderExperienceInProcess) {
            function wrapRenderExperience(experience, file, playerType, secureConnections) {
                return function () {
                    brightcove.renderExperience(experience, file, playerType, secureConnections);
                }
            }

            brightcove.renderExperienceQueue.push(wrapRenderExperience(experience, file, playerType, secureConnections));
            return;
        }
        brightcove.renderExperienceInProcess = true;
        if (!(experience.params.playerKey || experience.params.playerID || experience.params.playerId || experience.params.playerid)) {
            if (window.console) {
                console.log("No playerID or playerKey was found for the Brightcove player, so it can not be rendered.");
            }
            return;
        }
        brightcove.experienceObjects[experienceID] = experience;
        var unminified = (brightcove.getParameter("unminified") == "true") || (experience.params.unminified === "true");
        if (experience.params.includeAPI === "true" && !(brightcove._apiRequested || brightcove.api)) {
            var source = "/js/api/";
            if (unminified) {
                source += "unminified/";
            }
            source += "SmartPlayerAPI.js";
            var apiInclude = brightcove.createElement('script');
            apiInclude.type = "text/javascript";
            var cdnURL = secureConnections ? brightcove.secureCDNURL : brightcove.cdnURL;
            apiInclude.src = cdnURL + source;
            experience.parentNode.appendChild(apiInclude);
            brightcove._apiRequested = true;
        }
        file += "&startTime=" + new Date().getTime();
        if (experience.params.playerKey) {
            publisherID = brightcove.decodePublisherID(experience.params.playerKey);
        } else {
            publisherID = experience.params.publisherID;
        }
        dummyElement = brightcove.createDummyElement(playerType, experience, secureConnections);
        if (Array.prototype.indexOf) {
            isPubIdInBlacklist = brightcove.publisherMappingBlacklist.indexOf(String(publisherID)) !== -1;
        } else {
            isPubIdInBlacklist = false;
            for (var i = 0; i < brightcove.publisherMappingBlacklist.length; i++) {
                if (brightcove.publisherMappingBlacklist[i] === String(publisherID)) {
                    isPubIdInBlacklist = true;
                }
            }
        }
        if (experience.params.enableMapping === true || (experience.params.enableMapping !== false && !isPubIdInBlacklist)) {
            brightcove.makeMappingFileRequest(publisherID, function (err, data) {
                if (err) {
                    if (window.console) {
                        console.log(err);
                    }
                }
                brightcove.generateExperienceElement(experience, publisherID, dummyElement, unminified, file, playerType, experienceID, secureConnections, data);
            });
        } else {
            brightcove.generateExperienceElement(experience, publisherID, dummyElement, unminified, file, playerType, experienceID, secureConnections, null);
        }
    };
    brightcove.generateExperienceElement = function (experience, publisherID, dummyElement, unminified, file, playerType, experienceID, secureConnections, data) {
        var playerID;
        var bcPublisherID;
        var bcPlayerID;
        var bcEmbedID;
        var bcNewSmartPlayerID;
        var bcForceRefID;
        var parsedDataObject = {};
        var bcIframe;
        var replaceElement;
        var container;
        var timeout = brightcove.flashTimeoutInterval;
        if (experience.params.enableMapping !== false && data && data.statusCode === 200 && data.response && data.response !== "") {
            try {
                if (experience.params.playerKey) {
                    if (window.JSON) {
                        parsedDataObject = JSON.parse(data.response)[experience.params.playerKey];
                    } else {
                        parsedDataObject = brightcove.json_parse(data.response)[experience.params.playerKey];
                    }
                } else {
                    playerID = experience.params.playerId || experience.params.playerID || experience.params.playerid;
                    if (window.JSON) {
                        parsedDataObject = JSON.parse(data.response);
                    } else {
                        parsedDataObject = brightcove.json_parse(data.response);
                    }
                }
            } catch (ex) {
                if (window.console) {
                    console.log('Error: Unable to parse mapping file: ' + ex.message);
                }
            }
            if (!experience.params.playerKey) {
                for (var mappedPlayerKey in parsedDataObject) {
                    var playerMapItem;
                    if (parsedDataObject.hasOwnProperty(mappedPlayerKey)) {
                        playerMapItem = parsedDataObject[mappedPlayerKey];
                        if (playerMapItem.smart_player_id && playerMapItem.smart_player_id === playerID) {
                            parsedDataObject = playerMapItem;
                            break;
                        }
                    }
                }
            }
            if (parsedDataObject && (((!parsedDataObject.hasOwnProperty('enable_mapping') || parsedDataObject.enable_mapping) && experience.params.enableMapping !== false) || ((parsedDataObject.hasOwnProperty('enable_mapping') && parsedDataObject.enable_mapping === false) && experience.params.enableMapping === true))) {
                bcPublisherID = parsedDataObject.account_id ? parsedDataObject.account_id : publisherID;
                bcPlayerID = parsedDataObject.player_id;
                bcEmbedID = parsedDataObject.embed_id || 'default';
                bcNewSmartPlayerID = parsedDataObject.new_smart_player_id;
                bcForceRefID = parsedDataObject.force_ref_id || false;
            }
        }
        if (bcForceRefID) {
            experience = brightcove.forceRefID(experience);
            file = brightcove.generateRequestUrl(experience, playerType, secureConnections);
        }
        if (bcNewSmartPlayerID) {
            delete experience.params.playerKey;
            delete experience.params.playerId;
            delete experience.params.playerid;
            experience.params.playerID = bcNewSmartPlayerID;
            brightcove.servicesURL = brightcove.USservicesURL;
            brightcove.cdnURL = brightcove.UScdnURL;
            brightcove.secureCDNURL = brightcove.USsecureCDNURL;
            brightcove.secureServicesURL = brightcove.USsecureServicesURL;
            file = brightcove.generateRequestUrl(experience, playerType, secureConnections);
        } else if (bcPlayerID && !bcPublisherID) {
            bcPublisherID = publisherID;
        }
        if (bcPublisherID && bcPlayerID) {
            bcIframe = brightcove.getBCPlayerIframe(experience, bcPublisherID, bcPlayerID, bcEmbedID);
            experienceElement = brightcove.createIFrame(experience);
            brightcove.copyNodeProperties(dummyElement, experienceElement);
            replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
            if (replaceElement && replaceElement.parentNode) {
                replaceElement.parentNode.replaceChild(experienceElement, replaceElement);
            }
            brightcove.experiences[experienceID] = experienceElement;
            experienceElement.src = bcIframe;
        } else if (playerType === brightcove.playerType.NO_SUPPORT) {
            replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
            if (replaceElement && replaceElement.parentNode) {
                replaceElement.parentNode.innerHTML = brightcove.renderInstallGif(experience, secureConnections);
            }
            brightcove.reportUpgradeRequired(experience);
        } else if (playerType === brightcove.playerType.HTML) {
            timeout = brightcove.htmlTimeoutInterval;
            file += "&refURL=" + (window.document.referrer ? window.document.referrer : 'not available');
            if (unminified) {
                file += "&unminified=true";
            }
            experienceElement = brightcove.copyNode(dummyElement);
            replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
            if (replaceElement && replaceElement.parentNode) {
                replaceElement.parentNode.replaceChild(experienceElement, replaceElement);
            }
            brightcove.experiences[experienceID] = experienceElement;
            experience.element = experienceElement;
            if (experience.params.videoID || experience.params.videoId) {
                file += "&" + encodeURIComponent("@videoPlayer") + "=" + encodeURIComponent(experience.params.videoID || experience.params.videoId);
            }
            experienceElement.src = file;
        } else if (playerType === brightcove.playerType.FLASH_IFRAME) {
            var currentCDN = secureConnections ? brightcove.secureCDNURL : brightcove.cdnURL;
            var iframeURL = currentCDN + "/js/flash_iframe.html?parentPage=" + window.location.toString().split("?")[0];
            iframeURL += '&currentCDN=' + currentCDN;
            if (unminified) {
                iframeURL += '&unminified=' + unminified;
            }
            experienceElement = brightcove.copyNode(dummyElement);
            replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
            if (replaceElement && replaceElement.parentNode) {
                replaceElement.parentNode.replaceChild(experienceElement, replaceElement);
            }
            brightcove.experiences[experienceID] = experienceElement;
            experience.element = experienceElement;
            experienceElement.src = iframeURL;
            window.addEventListener('message', function (event) {
                if (event.origin.split("/")[2] !== currentCDN.split("/")[2])return;
                var data = JSON.parse(event.data);
                if (data != "bcIframeInitialized") {
                    return;
                }
                var playerConfig;
                if (brightcove.hasActiveX) {
                    experience.flashParams.movie = file;
                    var flashEmbedStr = brightcove.getFlashEmbedString(experience, secureConnections);
                    playerConfig = {
                        activeX: flashEmbedStr,
                        height: experience.params.height,
                        id: '_container' + experience.id,
                        file: file
                    };
                } else {
                    playerConfig = brightcove.getFlashObjectParams(experience, file);
                }
                var playerConfigStr = JSON.stringify(playerConfig);
                experienceElement.contentWindow.postMessage(playerConfigStr, currentCDN);
            }, false);
            window.addEventListener('message', function (event) {
                if (event.origin.split("/")[2] !== currentCDN.split("/")[2])return;
                var data = JSON.parse(event.data);
                if (data.api && brightcove.internal && brightcove.internal._setAPICallback) {
                    if (data.api == "apiCallback") {
                        brightcove.internal._setAPICallback(data.pid, data.callback, iframeURL);
                    } else if (data.api == "loadEvent") {
                        window[data.callback](data.event);
                    } else if (data.api == "onTemplateReadyEvent") {
                        brightcove[data.callback](data.event);
                    }
                }
            }, false);
        } else {
            if (brightcove.hasActiveX) {
                experience.flashParams.movie = file;
                var flashEmbedStr = brightcove.getFlashEmbedString(experience, secureConnections);
                var containerID = '_container' + experience.id;
                container = document.getElementById(containerID);
                replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
                if (replaceElement && replaceElement.parentNode) {
                    replaceElement.parentNode.innerHTML = flashEmbedStr;
                }
                brightcove.experiences[experienceID] = container;
            } else {
                experienceElement = brightcove.copyNode(dummyElement);
                experienceElement.data = file;
                replaceElement = brightcove.getElementByClassNameCrossBrowser(experience.params.identifierClassName);
                if (replaceElement && replaceElement.parentNode) {
                    replaceElement.parentNode.replaceChild(experienceElement, replaceElement);
                }
                brightcove.experiences[experienceID] = experienceElement;
            }
        }
        brightcove.renderExperienceInProcess = false;
        if (brightcove.renderExperienceQueue.length > 0) {
            brightcove.renderExperienceQueue.shift()();
        } else if (brightcove.createExperiencesQueue.length > 0) {
            brightcove.createExperiencesQueue.shift()();
        }
        brightcove.timeouts[experience.id] = setTimeout(function () {
            brightcove.handleExperienceTimeout(experienceID);
        }, timeout);
    };
    brightcove.copyNode = function (elementFrom) {
        var experienceElement = elementFrom.cloneNode(true);
        brightcove.copyNodeProperties(elementFrom, experienceElement);
        return experienceElement;
    };
    brightcove.copyNodeProperties = function (elementFrom, elementTo) {
        var propertyItem;
        var propertyList = ['name', 'title', 'height', 'width', 'border', 'onclick', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onscroll', 'onwheel'];
        for (propertyItem in propertyList) {
            if (elementFrom[propertyList[propertyItem]]) {
                elementTo[propertyList[propertyItem]] = elementFrom[propertyList[propertyItem]];
            }
        }
        if (elementTo.className !== elementFrom.className) {
            elementTo.className += ' ' + elementFrom.className;
        }
    };
    brightcove.getElementsByClassName = function (selector) {
        var retnode = [];
        var elem = document.getElementsByTagName('*');
        for (var i = 0; i < elem.length; i++) {
            if ((' ' + elem[i].className + ' ').indexOf(' ' + selector + ' ') > -1)retnode.push(elem[i]);
        }
        return retnode;
    };
    brightcove.getElementByClassNameCrossBrowser = function (selector) {
        var searchElement;
        if (document.querySelectorAll) {
            searchElement = document.querySelectorAll('.' + selector)[0];
        } else {
            searchElement = brightcove.getElementsByClassName(selector)[0];
        }
        return searchElement;
    };
    brightcove.createDummyElement = function (playerType, experience, secureConnections) {
        var dummyElement;
        var containerID;
        var flashObjectParams;
        var flashEmbedStr;
        experience.className += ' ' + experience.params.identifierClassName;
        if (playerType === brightcove.playerType.NO_SUPPORT) {
            containerID = '_container' + experience.id;
            dummyElement = brightcove.createElement('span');
            if (experience.params.height.charAt(experience.params.height.length - 1) == "%") {
                dummyElement.style.display = 'block';
            } else {
                dummyElement.style.display = 'inline-block';
            }
            dummyElement.className = experience.className;
            dummyElement.id = containerID;
        } else if (playerType === brightcove.playerType.HTML || playerType === brightcove.playerType.FLASH_IFRAME) {
            dummyElement = brightcove.createIFrame(experience);
            if (experience && experience.parentNode) {
                experience.parentNode.replaceChild(dummyElement, experience);
            }
        } else {
            if (brightcove.hasActiveX) {
                flashEmbedStr = brightcove.getDummyFlashEmbedString(experience);
                containerID = '_container' + experience.id;
                dummyElement = brightcove.createFlashEmbed(containerID, experience.params.height);
                if (experience && experience.parentNode) {
                    experience.parentNode.replaceChild(dummyElement, experience);
                    dummyElement.innerHTML = flashEmbedStr;
                }
            } else {
                flashObjectParams = brightcove.getFlashObjectParams(experience);
                dummyElement = brightcove.createFlashObject(flashObjectParams);
                if (experience && experience.parentNode) {
                    experience.parentNode.replaceChild(dummyElement, experience);
                }
            }
        }
        return dummyElement;
    };
    brightcove.getDummyFlashEmbedString = function (experience) {
        return '<object'
            + ' id="' + experience.id + '"'
            + ' width="' + experience.params.width + '"'
            + ' height="' + experience.params.height + '"'
            + ' class="BrightcoveExperience ' + experience.params.identifierClassName + '" >'
            + '</object>';
    };
    brightcove.makeMetricsErrorCall = function (publisherID, errorType) {
        var img = document.createElement('img');
        var metricsUrl = brightcove.metricsBaseUrl['production'];
        img.src = metricsUrl + '?' + 'account=' + publisherID + '&domain=videocloud' + '&platform=as3' + '&event=error' + '&error_code=' + errorType;
    };
    brightcove.createIFrame = function (experience) {
        var iframeElement = brightcove.createElement('iframe');
        iframeElement.id = experience.id;
        iframeElement.width = experience.params.width;
        iframeElement.height = experience.params.height;
        iframeElement.className = experience.className;
        iframeElement.frameborder = 0;
        iframeElement.scrolling = "no";
        iframeElement.style.borderStyle = "none";
        return iframeElement;
    };
    brightcove.getFlashEmbedString = function (experience, secureConnections) {
        var options = '';
        var flashParams = experience.flashParams;
        for (var pOption in flashParams) {
            options += '<param name="' + pOption + '" value="' + experience.flashParams[pOption] + '" />';
        }
        var protocol = secureConnections ? "https" : "http";
        return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
            + ' codebase="' + protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + brightcove.majorVersion + ',' + brightcove.majorRevision + ',' + brightcove.minorRevision + ',0"'
            + ' id="' + experience.id + '"'
            + ' width="' + experience.params.width + '"'
            + ' height="' + experience.params.height + '"'
            + ' type="application/x-shockwave-flash"'
            + ' class="BrightcoveExperience ' + experience.params.identifierClassName + '">'
            + options
            + '</object>';
    };
    brightcove.getFlashObjectParams = function (experience, file) {
        var experienceObject = {};
        experienceObject.type = 'application/x-shockwave-flash';
        experienceObject.data = file;
        experienceObject.id = experience.params.flashID;
        experienceObject.width = experience.params.width;
        experienceObject.height = experience.params.height;
        experienceObject.className = experience.className;
        experienceObject.seamlesstabbing = experience.flashParams.seamlessTabbing;
        for (var config in experience.flashParams) {
            experienceObject["flashParam_" + config] = experience.flashParams[config];
        }
        return experienceObject;
    };
    brightcove.createFlashEmbed = function (experienceId, height) {
        var container = brightcove.createElement('span');
        if (height.charAt(height.length - 1) == "%") {
            container.style.display = 'block';
        } else {
            container.style.display = 'inline-block';
        }
        container.id = experienceId;
        return container;
    };
    brightcove.createFlashObject = function (playerConfig) {
        var experienceElement = brightcove.createElement('object');
        experienceElement.type = playerConfig.type;
        if (playerConfig.data) {
            experienceElement.data = playerConfig.data;
        }
        experienceElement.id = playerConfig.id;
        experienceElement.width = playerConfig.width;
        experienceElement.height = playerConfig.height;
        experienceElement.className = playerConfig.className;
        experienceElement.setAttribute("seamlesstabbing", playerConfig.seamlessTabbing);
        var tempParam;
        var flashParamPrefix = "flashParam_";
        for (var config in playerConfig) {
            var flashParamInd = config.indexOf(flashParamPrefix);
            if (flashParamInd == 0) {
                tempParam = brightcove.createElement('param');
                tempParam.name = config.substring(flashParamPrefix.length);
                tempParam.value = playerConfig[config];
                experienceElement.appendChild(tempParam);
            }
        }
        return experienceElement;
    };
    brightcove.handleExperienceTimeout = function (pID) {
        brightcove.executeErrorHandlerForExperience(brightcove.experienceObjects[pID], {
            type: "templateError",
            errorType: "serviceUnavailable",
            code: brightcove.errorCodes.SERVICE_UNAVAILABLE,
            info: pID
        });
    };
    brightcove.reportPlayerLoad = function (pID) {
        var timeout = brightcove.timeouts[pID];
        if (timeout) {
            clearTimeout(timeout);
        }
    };
    brightcove.reportUpgradeRequired = function (pExperience) {
        brightcove.executeErrorHandlerForExperience(pExperience, {
            type: "templateError",
            errorType: "upgradeRequiredForPlayer",
            code: brightcove.errorCodes.UPGRADE_REQUIRED_FOR_PLAYER,
            info: pExperience.id
        });
    };
    brightcove.checkFlashSupport = function () {
        var hasActiveX = (window.ActiveXObject != undefined);
        return (hasActiveX) ? brightcove.checkFlashSupportIE() : brightcove.checkFlashSupportStandard();
    };
    brightcove.checkFlashSupportIE = function () {
        var versions;
        try {
            var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            var version = flash.GetVariable('$version');
            versions = / ([0-9]+),([0-9]+),([0-9]+),/.exec(version);
        } catch (exception) {
            return null;
        }
        return {majorVersion: versions[1], majorRevision: versions[2], minorRevision: versions[3]};
    };
    brightcove.isMetroIE = function () {
        var version = 0;
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            var appSplit = navigator.appVersion.split("MSIE");
            if (appSplit.length > 1) {
                version = parseFloat(appSplit[1]);
            }
        }
        if (version < 10 || isNaN(version)) {
            return false;
        }
        var activeXSupport = false;
        try {
            activeXSupport = !!new ActiveXObject("htmlfile");
        } catch (e) {
            activeXSupport = false;
        }
        return !activeXSupport;
    };
    brightcove.checkFlashSupportStandard = function () {
        var versions;
        var majorVersion;
        var majorRevision;
        var minorRevision;
        try {
            if (typeof navigator.plugins != 'undefined' && navigator.plugins.length > 0) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                    var swfVersion = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                    var description = navigator.plugins["Shockwave Flash" + swfVersion].description;
                    var filename = navigator.plugins["Shockwave Flash" + swfVersion].filename;
                    if (filename.match) {
                        if (filename.toLowerCase().match(/lite/)) {
                            throw new Error();
                        }
                    }
                    versions = description.split(" ");
                    majorVersion = versions[2].split(".")[0];
                    majorRevision = versions[2].split(".")[1];
                    minorRevision = versions[3];
                    if (minorRevision == "") {
                        minorRevision = versions[4];
                    }
                    if (minorRevision[0] == "d") {
                        minorRevision = minorRevision.substring(1);
                    } else if (minorRevision[0] == "r") {
                        minorRevision = minorRevision.substring(1);
                        if (minorRevision.indexOf("d") > 0) {
                            minorRevision = minorRevision.substring(0, minorRevision.indexOf("d"));
                        }
                    }
                } else {
                    throw new Error();
                }
            } else {
                return null;
            }
        } catch (exception) {
            return null;
        }
        return {majorVersion: majorVersion, majorRevision: majorRevision, minorRevision: minorRevision};
    };
    brightcove.checkHtmlSupport = function () {
        var v = brightcove.createElement('video');
        var videoSupport = true;
        if (!brightcove.userAgent.match(new RegExp("android", "i"))) {
            videoSupport = !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
        }
        if (brightcove.userAgent.match(/BlackBerry.*Version\/6\.0/)) {
            return false;
        }
        var canvasSupport = !!brightcove.createElement('canvas').getContext;
        return videoSupport && canvasSupport;
    };
    brightcove.isSupportedHTMLDevice = function (pUAString) {
        var types = ["iPad", "iPhone", "iPod", "android", "Silk", "IEMobile"];
        var numTypes = types.length;
        var uaString = pUAString || brightcove.userAgent;
        for (var i = 0; i < numTypes; i++) {
            if (uaString.match(new RegExp(types[i], "i"))) {
                return true;
            }
        }
        return false;
    };
    brightcove.getTechnology = function (pExperienceId) {
        for (var id in brightcove.experiences) {
            if (pExperienceId == id) {
                return (brightcove.experiences[id].tagName == "object") ? brightcove.playerType.FLASH : brightcove.playerType.HTML;
            }
        }
        return brightcove.playerType.NO_SUPPORT;
    };
    brightcove.respondToMessages = function (pMessage) {
        if (brightcove.verifyMessage(pMessage)) {
            var messageData = pMessage.data;
            if (messageData.charAt(0) == "\"") {
                if (window.JSON) {
                    messageData = window.JSON.parse(messageData);
                } else {
                    messageData = brightcove.json_parse(messageData);
                }
            }
            var messageParts = messageData.split("::");
            var type = messageParts[1];
            var messageInfo = "";
            for (var index = 2; index < messageParts.length; index++) {
                messageInfo += messageParts[index];
            }
            var messageJson = messageInfo.split("\n").join(" ");
            var messageDataObject;
            if (window.JSON) {
                messageDataObject = window.JSON.parse(messageJson);
            } else {
                messageDataObject = brightcove.json_parse(messageJson);
            }
            switch (type) {
                case"error":
                    brightcove.executeMessageCallback(messageDataObject, brightcove.executeErrorHandlerForExperience);
                    break;
                case"api":
                    brightcove.handleAPICallForHTML(messageDataObject);
                    break;
                case"handler":
                    var event = brightcove.internal._convertDates(messageDataObject.event);
                    try {
                        brightcove.internal._handlers[messageDataObject.handler](event);
                    } catch (e) {
                    }
                    break;
                case"asyncGetter":
                    var data = brightcove.internal._convertDates(messageDataObject.data);
                    brightcove.internal._handlers[messageDataObject.handler](data);
                    break;
            }
        }
    };
    brightcove.verifyMessage = function (pMessage) {
        return (/^brightcove\.player/).test(pMessage.data);
    };
    brightcove.handleAPICallForHTML = function (pMessageObject) {
        var experience = brightcove.experienceObjects[pMessageObject.id];
        if (experience == null) {
            return;
        }
        var id = experience.id;
        var method = pMessageObject.method;
        switch (method) {
            case"initializeBridge":
                brightcove.reportPlayerLoad(id);
                if (pMessageObject.arguments[0]) {
                    if (brightcove.internal != null) {
                        brightcove.internal._setAPICallback(id, null, pMessageObject.arguments[1]);
                        brightcove.callHandlerForPlayer(experience, "templateLoadHandler", id);
                    } else if (brightcove._apiRequested) {
                        brightcove._queuedAPICalls.push(pMessageObject);
                    }
                }
                break;
            case"callTemplateReady":
                if (brightcove._apiRequested && !brightcove.internal) {
                    brightcove._queuedAPICalls.push(pMessageObject);
                } else {
                    var event = pMessageObject.arguments;
                    brightcove._addModuleToEvent(id, event);
                    brightcove.callHandlerForPlayer(experience, "templateReadyHandler", event);
                }
                break;
        }
    };
    brightcove._addModuleToEvent = function (pID, pEvent) {
        if (pEvent.type != null && brightcove.api) {
            var experience = brightcove.api.getExperience(pID);
            if (experience) {
                pEvent.target = experience.getModule("experience");
            }
        }
    };
    brightcove.callHandlerForPlayer = function (pExperience, pHandler, pArgument) {
        if (pExperience && pExperience.params && pExperience.params[pHandler]) {
            var namespaceArray = pExperience.params[pHandler].split(".");
            var namespaces;
            if ((namespaces = namespaceArray.length) > 1) {
                var trace = window;
                for (var i = 0; i < namespaces; i++) {
                    trace = trace[namespaceArray[i]];
                }
                if (typeof trace === "function") {
                    trace(pArgument);
                }
            } else {
                window[pExperience.params[pHandler]](pArgument);
            }
        }
    };
    brightcove.executeErrorHandlerForExperience = function (pExperience, pErrorObject) {
        brightcove.callHandlerForPlayer(pExperience, "templateErrorHandler", pErrorObject);
    };
    brightcove.executeMessageCallback = function (pMessageDataObject, pCallback) {
        var experience;
        for (var experienceKey in brightcove.experienceObjects) {
            experience = brightcove.experienceObjects[experienceKey];
            if (experience.element.src === pMessageDataObject.__srcUrl) {
                delete pMessageDataObject.__srcUrl;
                pCallback(experience, pMessageDataObject);
                break;
            }
        }
    };
    brightcove.createExperience = function (pElement, pParentOrSibling, pAppend) {
        if (!pElement.id || pElement.id.length < 1) {
            pElement.id = 'bcExperienceObj' + (brightcove.experienceNum++);
        }
        if (pAppend) {
            pParentOrSibling.appendChild(pElement);
        } else {
            pParentOrSibling.parentNode.insertBefore(pElement, pParentOrSibling);
        }
        brightcove.createExperiences(null, pElement.id);
    };
    brightcove.removeExperience = function (pID) {
        if (brightcove.experiences[pID] != null) {
            brightcove.experiences[pID].parentNode.removeChild(brightcove.experiences[pID]);
        }
    };
    brightcove.getURL = function () {
        var url;
        if (typeof window.location.search != 'undefined') {
            url = window.location.search;
        } else {
            url = /(\?.*)$/.exec(document.location.href);
        }
        return url;
    };
    brightcove.getOverrides = function () {
        var url = brightcove.getURL();
        var query = new RegExp('@[\\w\\.]+=[^&]+', 'g');
        var value = query.exec(url);
        var overrides = "";
        while (value != null) {
            overrides += "&" + value;
            value = query.exec(url);
        }
        return overrides;
    };
    brightcove.getParameter = function (pName, pDefaultValue) {
        if (pDefaultValue == null)pDefaultValue = "";
        var url = brightcove.getURL();
        var query = new RegExp(pName + '=([^&]*)');
        var value = query.exec(url);
        if (value != null) {
            return value[1];
        } else {
            return pDefaultValue;
        }
    };
    brightcove.createElement = function (el) {
        if (document.createElementNS) {
            return document.createElementNS('http://www.w3.org/1999/xhtml', el);
        } else {
            return document.createElement(el);
        }
    };
    brightcove.i18n = {'BROWSER_TOO_OLD': 'The browser you are using is too old. Please upgrade to the latest version of your browser.'};
    brightcove.removeListeners = function () {
        if (/KHTML/i.test(navigator.userAgent)) {
            clearInterval(checkLoad);
            document.removeEventListener('load', brightcove.createExperiences, false);
        }
        if (typeof document.addEventListener != 'undefined') {
            document.removeEventListener('DOMContentLoaded', brightcove.createExperiences, false);
            document.removeEventListener('load', brightcove.createExperiences, false);
        } else if (typeof window.attachEvent != 'undefined') {
            window.detachEvent('onload', brightcove.createExperiences);
        }
    };
    brightcove.getPubURL = function (source, host, pubCode) {
        if (!pubCode || pubCode == "")return source;
        var re = /^([htps]{4,5}\:\/\/)([^\/\:]+)/i;
        host = host.replace("$pubcode$", pubCode).replace("$zoneprefix$$zone$", brightcove.pubSubdomain);
        return source.replace(re, "$1" + host);
    };
    brightcove.createExperiencesPostLoad = function () {
        brightcove.removeListeners();
        brightcove.createExperiences();
    };
    brightcove.encode = function (string) {
        string = escape(string);
        string = string.replace(/\+/g, "%2B");
        string = string.replace(/\-/g, "%2D");
        string = string.replace(/\*/g, "%2A");
        string = string.replace(/\//g, "%2F");
        string = string.replace(/\./g, "%2E");
        string = string.replace(/_/g, "%5F");
        string = string.replace(/@/g, "%40");
        return string;
    };
    brightcove.decodePublisherID = function (playerKey) {
        var b64;
        var bytes = [];
        var keys = [];
        var byteArrayToLong = function (byteArray, length) {
            var value = 0;
            for (var i = 0; i < length; i++) {
                value = (value * 256) + byteArray[i];
            }
            return value;
        };
        if (!playerKey || playerKey.indexOf(',') < 0) {
            if (window.console) {
                console.log('The player key is in an unexpected format.â€‚â€‚Unable to extract publisher ID for potential use with player migration.');
            }
            return;
        }
        playerKey = playerKey.replace(/\./g, "~");
        keys = playerKey.split(',');
        try {
            b64 = brightcove.base64().toByteArray(keys[1]);
        } catch (ex) {
            if (window.console) {
                console.log('The player key is in an unexpected format.â€‚â€‚Unable to extract publisher ID for potential use with player migration: ' + ex.message);
            }
            return;
        }
        return byteArrayToLong(b64, 8);
    };
    brightcove.makeMappingFileRequest = function (publisherID, callback) {
        if (!publisherID) {
            brightcove.makeMetricsErrorCall('null', brightcove.analyticsErrors.BAD_PUBLISHER_ID);
            return callback();
        } else if (brightcove.mappingFileData.hasOwnProperty(publisherID)) {
            return callback(null, brightcove.mappingFileData[publisherID]);
        } else {
            return brightcove.makeAjaxRequest('GET', brightcove.performCdnUrl['production'] + publisherID + '/migration/mappings.json', function (err, data) {
                if (window.console && data && data.statusCode === 404) {
                    console.log('It is safe to ignore 404 messages for mappings.json file requests.');
                } else if (data && data.statusCode === 0) {
                    brightcove.makeMetricsErrorCall(publisherID, brightcove.analyticsErrors.MAPPINGS_CALL_FAILURE);
                } else if (data && data.statusCode !== 200 && data.statusCode !== 404) {
                    brightcove.makeMetricsErrorCall(publisherID, brightcove.analyticsErrors.UNEXPECTED_MAPPING_RESPONSE);
                }
                brightcove.mappingFileData[publisherID] = data;
                return callback(err, data);
            });
        }
    };
    brightcove.makeAjaxRequest = function (action, url, callback) {
        function createXmlHTTPObject() {
            var XMLHttpFactories = [function () {
                return new XDomainRequest()
            }, function () {
                return new XMLHttpRequest()
            }, function () {
                return new ActiveXObject('Msxml2.XMLHTTP')
            }, function () {
                return new ActiveXObject('Msxml3.XMLHTTP')
            }, function () {
                return new ActiveXObject('Microsoft.XMLHTTP')
            }];
            var xmlhttp = false;
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = XMLHttpFactories[i]();
                }
                catch (e) {
                    continue;
                }
                break;
            }
            return xmlhttp;
        }

        var xhttp = createXmlHTTPObject();
        if (!xhttp) {
            return callback();
        }
        try {
            xhttp.open(action, url, true);
            xhttp.timeout = 3000;
            if (!window.XDomainRequest) {
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4) {
                        return callback(null, {statusCode: xhttp.status, response: xhttp.responseText});
                    }
                };
            } else {
                xhttp.onload = function () {
                    return callback(null, {statusCode: 200, response: xhttp.responseText});
                };
                xhttp.ontimeout = function () {
                    return callback(null, {statusCode: 0});
                }
                xhttp.onprogress = function () {
                };
                xhttp.onerror = function () {
                    return callback(null, {statusCode: 403});
                };
            }
            xhttp.send();
        } catch (e) {
            callback(null, null);
        }
    };
    brightcove.base64 = function () {
        var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array
        var PLUS = '+'.charCodeAt(0)
        var SLASH = '/'.charCodeAt(0)
        var NUMBER = '0'.charCodeAt(0)
        var LOWER = 'a'.charCodeAt(0)
        var UPPER = 'A'.charCodeAt(0)
        var PLUS_URL_SAFE = '-'.charCodeAt(0)
        var SLASH_URL_SAFE = '_'.charCodeAt(0)

        function decode(elt) {
            var code = elt.charCodeAt(0)
            if (code === PLUS || code === PLUS_URL_SAFE)return 62
            if (code === SLASH || code === SLASH_URL_SAFE)return 63
            if (code < NUMBER)return -1
            if (code < NUMBER + 10)return code - NUMBER + 26 + 26
            if (code < UPPER + 26)return code - UPPER
            if (code < LOWER + 26)return code - LOWER + 26
        }

        function b64ToByteArray(b64) {
            var i, j, l, tmp, placeHolders, arr
            if (b64.length % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4')
            }
            var len = b64.length
            placeHolders = b64.charAt(len - 2) === '=' ? 2 : b64.charAt(len - 1) === '=' ? 1 : 0
            arr = new Arr(b64.length * 3 / 4 - placeHolders)
            l = placeHolders > 0 ? b64.length - 4 : b64.length
            var L = 0

            function push(v) {
                arr[L++] = v
            }

            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
                push((tmp & 0xFF0000) >> 16)
                push((tmp & 0xFF00) >> 8)
                push(tmp & 0xFF)
            }
            if (placeHolders === 2) {
                tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
                push(tmp & 0xFF)
            } else if (placeHolders === 1) {
                tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
                push((tmp >> 8) & 0xFF)
                push(tmp & 0xFF)
            }
            return arr
        }

        return {toByteArray: b64ToByteArray}
    };
    brightcove.forceRefID = function (experience) {
        var videoID = experience.params.videoID;
        var videoPlayer = experience.params['@videoPlayer'];
        var playlistID = experience.params['@videoList'];
        var lineupID = experience.params.lineupID;
        var playlistTabs = experience.params['@playlistTabs'];
        var playlistCombo = experience.params['@playlistCombo'];
        var playlistVideoFeatured = experience.params['@videoList.featured'];
        var playlistTabsFeatured = experience.params['@playlistTabs.featured'];
        var playlistComboFeatured = experience.params['@playlistCombo.featured'];
        var playlistArray;
        var playlistJoined;
        if (playlistTabs) {
            playlistArray = playlistTabs.split(',');
        } else if (playlistCombo) {
            playlistArray = playlistCombo.split(',');
        }
        if (playlistArray) {
            for (var i = 0; i < playlistArray.length; i++) {
                if (playlistArray[i].indexOf('ref:') < 0) {
                    playlistArray[i] = 'ref:' + playlistArray[i];
                }
            }
            playlistJoined = playlistArray.join(',');
        }
        if (playlistTabs) {
            experience.params['@playlistTabs'] = playlistJoined;
        } else if (playlistCombo) {
            experience.params['@playlistCombo'] = playlistJoined;
        }
        if (playlistID && playlistID.indexOf('ref:') < 0) {
            experience.params['@videoList'] = 'ref:' + playlistID;
        }
        if (lineupID && lineupID.indexOf('ref:') < 0) {
            experience.params.lineupID = 'ref:' + lineupID;
        }
        if (playlistVideoFeatured && playlistVideoFeatured.indexOf('ref:') < 0) {
            experience.params['@videoList.featured'] = 'ref:' + playlistVideoFeatured;
        }
        if (playlistTabsFeatured && playlistTabsFeatured.indexOf('ref:') < 0) {
            experience.params['@playlistTabs.featured'] = 'ref:' + playlistTabsFeatured;
        }
        if (playlistComboFeatured && playlistComboFeatured.indexOf('ref:') < 0) {
            experience.params['@playlistCombo.featured'] = 'ref:' + playlistComboFeatured;
        }
        if (videoID && videoID.indexOf('ref:') < 0) {
            experience.params.videoID = 'ref:' + videoID;
        } else if (videoPlayer && videoPlayer.indexOf('ref:') < 0) {
            experience.params['@videoPlayer'] = 'ref:' + videoPlayer;
        }
        return experience;
    };
    brightcove.getBCPlayerIframe = function (experience, accountID, playerID, embedID) {
        var iframeSource = brightcove.performCdnUrl['production'] + accountID + '/' + playerID + '_' + embedID + '/index.html?directedMigration=true&';
        var videoID = experience.params['@videoPlayer'] || experience.params.videoID;
        var playlistID = experience.params['@videoList'] || experience.params.lineupID;
        var playlistTabs = experience.params['@playlistTabs'];
        var playlistCombo = experience.params['@playlistCombo'];
        var playlistArray;
        var playlistVideoID = experience.params['@videoList.featured'] || experience.params.videoID;
        if (playlistTabs) {
            playlistArray = playlistTabs.split(',');
        } else if (playlistCombo) {
            playlistArray = playlistCombo.split(',');
        }
        if (experience.params['@playlistTabs.featured']) {
            playlistID = experience.params['@playlistTabs.featured'];
        } else if (experience.params['@playlistCombo.featured']) {
            playlistID = experience.params['@playlistCombo.featured'];
        } else if (playlistArray && playlistArray[0]) {
            playlistID = playlistArray[0];
        }
        if (playlistID && (isNaN(playlistID) && playlistID.indexOf('ref:') < 0)) {
            playlistID = 'ref:' + playlistID;
        }
        if (playlistID) {
            iframeSource += 'playlistId=' + playlistID + '&';
        } else if (videoID && (!isNaN(videoID) || videoID.indexOf('ref:') >= 0)) {
            iframeSource += 'videoId=' + videoID + '&';
        } else if (videoID) {
            iframeSource += 'videoId=ref:' + videoID + '&';
        }
        if (playlistID && playlistVideoID) {
            if (playlistVideoID && (isNaN(playlistVideoID) && playlistVideoID.indexOf('ref:') < 0)) {
                playlistVideoID = 'ref:' + playlistVideoID;
            }
            iframeSource += 'playlistVideoId=' + playlistVideoID + '&';
        }
        if (experience.params.language && experience.params.language === 'jp') {
            iframeSource += 'language=ja&';
        } else if (experience.params.language) {
            iframeSource += 'language=' + experience.params.language + '&';
        }
        if (experience.params.autoStart && experience.params.autoStart != 'false') {
            iframeSource += 'autoplay=' + experience.params.autoStart + '&';
        }
        return iframeSource;
    };
    if (/KHTML/i.test(navigator.userAgent)) {
        var checkLoad = setInterval(function () {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(checkLoad);
                brightcove.createExperiencesPostLoad();
            }
        }, 70);
        document.addEventListener('load', brightcove.createExperiencesPostLoad, false);
    }
    if (typeof document.addEventListener != 'undefined') {
        document.addEventListener('DOMContentLoaded', brightcove.createExperiencesPostLoad, false);
        document.addEventListener('load', brightcove.createExperiencesPostLoad, false);
        window.addEventListener("message", brightcove.respondToMessages, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onload', brightcove.createExperiencesPostLoad);
    } else {
        alert(brightcove.i18n.BROWSER_TOO_OLD);
    }
}
brightcove.json_parse = (function () {
    "use strict";
    var state, stack, container, key, value, escapes = {
        '\\': '\\',
        '"': '"',
        '/': '/',
        't': '\t',
        'n': '\n',
        'r': '\r',
        'f': '\f',
        'b': '\b'
    }, string = {
        go: function () {
            state = 'ok';
        }, firstokey: function () {
            key = value;
            state = 'colon';
        }, okey: function () {
            key = value;
            state = 'colon';
        }, ovalue: function () {
            state = 'ocomma';
        }, firstavalue: function () {
            state = 'acomma';
        }, avalue: function () {
            state = 'acomma';
        }
    }, number = {
        go: function () {
            state = 'ok';
        }, ovalue: function () {
            state = 'ocomma';
        }, firstavalue: function () {
            state = 'acomma';
        }, avalue: function () {
            state = 'acomma';
        }
    }, action = {
        '{': {
            go: function () {
                stack.push({state: 'ok'});
                container = {};
                state = 'firstokey';
            }, ovalue: function () {
                stack.push({container: container, state: 'ocomma', key: key});
                container = {};
                state = 'firstokey';
            }, firstavalue: function () {
                stack.push({container: container, state: 'acomma'});
                container = {};
                state = 'firstokey';
            }, avalue: function () {
                stack.push({container: container, state: 'acomma'});
                container = {};
                state = 'firstokey';
            }
        }, '}': {
            firstokey: function () {
                var pop = stack.pop();
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }, ocomma: function () {
                var pop = stack.pop();
                container[key] = value;
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }
        }, '[': {
            go: function () {
                stack.push({state: 'ok'});
                container = [];
                state = 'firstavalue';
            }, ovalue: function () {
                stack.push({container: container, state: 'ocomma', key: key});
                container = [];
                state = 'firstavalue';
            }, firstavalue: function () {
                stack.push({container: container, state: 'acomma'});
                container = [];
                state = 'firstavalue';
            }, avalue: function () {
                stack.push({container: container, state: 'acomma'});
                container = [];
                state = 'firstavalue';
            }
        }, ']': {
            firstavalue: function () {
                var pop = stack.pop();
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }, acomma: function () {
                var pop = stack.pop();
                container.push(value);
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }
        }, ':': {
            colon: function () {
                if (Object.hasOwnProperty.call(container, key)) {
                    throw new SyntaxError('Duplicate key "' + key + '"');
                }
                state = 'ovalue';
            }
        }, ',': {
            ocomma: function () {
                container[key] = value;
                state = 'okey';
            }, acomma: function () {
                container.push(value);
                state = 'avalue';
            }
        }, 'true': {
            go: function () {
                value = true;
                state = 'ok';
            }, ovalue: function () {
                value = true;
                state = 'ocomma';
            }, firstavalue: function () {
                value = true;
                state = 'acomma';
            }, avalue: function () {
                value = true;
                state = 'acomma';
            }
        }, 'false': {
            go: function () {
                value = false;
                state = 'ok';
            }, ovalue: function () {
                value = false;
                state = 'ocomma';
            }, firstavalue: function () {
                value = false;
                state = 'acomma';
            }, avalue: function () {
                value = false;
                state = 'acomma';
            }
        }, 'null': {
            go: function () {
                value = null;
                state = 'ok';
            }, ovalue: function () {
                value = null;
                state = 'ocomma';
            }, firstavalue: function () {
                value = null;
                state = 'acomma';
            }, avalue: function () {
                value = null;
                state = 'acomma';
            }
        }
    };

    function debackslashify(text) {
        return text.replace(/\\(?:u(.{4})|([^u]))/g, function (a, b, c) {
            return b ? String.fromCharCode(parseInt(b, 16)) : escapes[c];
        });
    }

    return function (source, reviver) {
        var r, tx = /^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
        state = 'go';
        stack = [];
        try {
            for (; ;) {
                r = tx.exec(source);
                if (!r) {
                    break;
                }
                if (r[1]) {
                    action[r[1]][state]();
                } else if (r[2]) {
                    value = +r[2];
                    number[state]();
                } else {
                    value = debackslashify(r[3]);
                    string[state]();
                }
                source = source.slice(r[0].length);
            }
        } catch (e) {
            state = e;
        }
        if (state !== 'ok' || (/[^\x20\t\n\r]/).test(source)) {
            throw state instanceof SyntaxError ? state : new SyntaxError('JSON');
        }
        return typeof reviver === 'function' ? (function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }({'': value}, '')) : value;
    };
}());

/*! RESPONSIVE VIDEO */
jQuery(document).ready(function (a) {
    if (a("div.cm01Swap")[0]) {
        a(window).on("load", function () {
            swapVidContainer();
        });
        a(window).on("resize", function () {
            swapVidContainer();
        });
    }
    if (a('div.responsiveVid,div.responsiveVidWrap,a[rel^="brightcoveLightBox"]')[0]) {
        a(window).on("resize orientationchange", function (b) {
            responsiveVidResize();
        });
    }
});
function responsiveVidResize() {
    var a = $(window).height();
    var b = $(window).width();
    $("div.responsiveVid,div.responsiveVidWrap").each(function () {
        var i = $(this);
        if (i.is("#w01w12") && a < 451 || i.is("#w01w12") && b < 770) {
            var f = a - 100;
            $("w01responsive").css("width", "auto");
            if (((f * 1.77777778) + 84) > b) {
                $("body").removeClass("w01short");
                $("body").addClass("w01narrow");
                i.css("width", "100%");
                var c = i.width();
                i.css("padding-top", 0);
                i.css("height", (c * 0.5625));
                i.find("span").css("height", (c * 0.5625));
                var e = (i.find("iframe")[0]) ? i.find("iframe").attr("id") : "";
                if (experienceModules[e]) {
                    experienceModules[e].setSize(c, (c * 0.5625));
                }
            } else {
                $("body").addClass("w01short");
                $("body").removeClass("w01narrow");
                i.css("padding-top", 0);
                i.css("height", f);
                i.css("width", (f * 1.77777778));
                i.find("span").css("height", f);
                var e = (i.find("iframe")[0]) ? i.find("iframe").attr("id") : "";
                if (experienceModules[e]) {
                    experienceModules[e].setSize((f * 1.77777778), f);
                }
            }
        } else {
            i.css("width", "100%");
            var c = i.width();
            if (i.is("#w01w12")) {
                $("body").removeClass("w01short");
                $("body").removeClass("w01narrow");
                c = 640;
                i.css("width", 640);
            }
            i.css("padding-top", 0);
            i.css("height", (c * 0.5625));
            i.find("span").css("height", (c * 0.5625));
            var e = (i.find("iframe")[0]) ? i.find("iframe").attr("id") : "";
            if (experienceModules[e]) {
                experienceModules[e].setSize(c, (c * 0.5625));
            }
        }
        if (i.closest(".w01responsive").find("div.responsiveVid")[0]) {
            var g = i.closest(".w01responsive");
            g.find(".w01w1").css("width", $("#w01w12").width() + 32);
            g.css({"margin-top": (-1 * (g.height() / 2)), "margin-left": (-1 * (g.width() / 2))});
        }
    });
}
function swapVidContainer() {
    $("div.cm01Swap").each(function () {
        if ($(this).css("background-color") != "#fff") {
            var a = $(this).width();
            if (a <= 540) {
                d = "A";
            } else {
                if (a > 540 && a <= 650) {
                    d = "B";
                } else {
                    if (a > 640) {
                        d = "C";
                    }
                }
            }
            if (cm01vids[d] && d != $(this).attr("data-vidsize")) {
                $(this).html(cm01vids[d]);
                $(this).attr("data-vidsize", d);
            }
        }
    });
}
jQuery(window).load(function () {
    responsiveVidResize();
});
var player;
var experienceModules = [];
function onResponsiveLoad(a) {
    player = brightcove.api.getExperience(a);
}
function onResponsiveReady(a) {
    experienceModules[player.id] = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    responsiveVidResize();
}

/*! BRIGHTCOVE.SETTINGS */
function getVideoDimensions(b) {
    var d = {};
    if (b.indexOf("x") > -1) {
        d.width = b.split("x")[0];
        d.height = b.split("x")[1];
        if (d.width == "100p" && d.height == "100p") {
            d.width = "100%";
            d.height = "100%";
        }
    } else {
        var a;
        var c;
        switch (b) {
            case"medium":
                a = 480;
                c = 320;
                break;
            case"events":
                a = 640;
                c = 360;
                break;
            case"javaone":
                a = 660;
                c = 371;
                break;
            case"large":
                a = 1280;
                c = 960;
                break;
            case"c23javaone":
                a = 660;
                c = 371;
                break;
            case"w01":
                a = 640;
                c = 360;
                break;
            case"cm01":
                a = 364;
                c = 205;
                break;
            case"cm01v1":
                a = 640;
                c = 360;
                break;
            case"c23":
                a = 640;
                c = 360;
                break;
            case"smart":
                a = 640;
                c = 360;
                break;
            case"cw04v3":
                a = 800;
                c = 450;
                break;
            case"responsive":
                a = "100%";
                c = "100%";
                break;
            default:
                a = 320;
                c = 240;
                break;
        }
        d.width = a;
        d.height = c;
    }
    return d;
}
function w01getBrightcoveSettings(d) {
    var c = {};
    var i = d.playerType;
    var f;
    var j = d.bctid.replace(/^([0-9]+).*/ig, "$1");
    var b = d.playerKey;
    var h = (d.shareUrl) ? d.shareUrl : d.shareURL;
    if (i.indexOf("social") > -1 && !h) {
        h = document.location.href;
    }
    if (h) {
        h = h.replace(/[<>]+/ig, "").replace(/script/ig, "");
    }
    var e = "";
    var a = getVideoDimensions(d.size);
    var g = (document.location.protocol == "https:") ? true : false;
    switch (i) {
        case"single":
            f = 3874118279001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yIIPp-09A2fGFfVSKpej6a";
            break;
        case"single-social":
            f = 3866869077001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3xNhCP_0nXP0syzRFdtgHs_";
            break;
        case"single-notitle":
            f = 3910979155001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3xoe44KW4mD_Td1KZnbG1Wm";
            break;
        case"cw4v1":
            f = 3910979152001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wO8wDPmjWcBTnVvj9OEfM2";
            break;
        case"cw4v1-https":
            f = 3910979151001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3zI-fZnm_QZX8M1TkIYe7oB";
            break;
        case"smart":
            f = 3910979154001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3w2D49s7vrsIxY-5lIH0W73";
            break;
        case"single-ssl":
            f = 3874118279001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yIIPp-09A2fGFfVSKpej6a";
            break;
        case"single-https":
            f = 2291776296001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wC6QNgcTxJAPP8u-MrbrWc";
            break;
        case"live-hq":
            f = 105865195001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wFV2hivdZZkE9L9SPGC-Ca";
            break;
        case"live-hq-secondary":
            f = 1150189378001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3ypj15uL4XC7c7vRlnjmoHG";
            break;
        case"live-hq-facebook":
            f = 1799411708001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yFasoyT7nIhLVSJmKeZBPM";
            break;
        case"live-hq-opn":
            f = 407590872001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wilCxZrEMDtIMV5-jxJPCi";
            break;
        case"live-apac":
            f = 407590872001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wilCxZrEMDtIMV5-jxJPCi";
            break;
        case"live-emea":
            f = 407590872001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wilCxZrEMDtIMV5-jxJPCi";
            break;
        default:
            f = 3874118279001;
            b = "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yIIPp-09A2fGFfVSKpej6a";
    }
    c.size = d.size;
    c.bctid = j;
    c.width = a.width;
    c.height = a.height;
    c.playerID = f;
    c.playerKey = b;
    c.videoList = e;
    c.playerType = i;
    c.shareURL = h;
    return c;
}

/*! BRIGHTCOVE.EMBED */

/*! UNCOMMENT THIS VAR TO ENABLE A SITE WIDE VIDEO OUTAGE WARNING
 var videooutage = '<div class="vidwarning">NOTICE: We\'re experiencing technical difficulties with some site videos. Please try again later or <a href="https://www.youtube.com/user/Oracle" target="_blank">watch Oracle videos here</a>. Thank you. <a class="vidwarnclose" href="#close" onclick="this.parentNode.className=\'vidwarnclosed\';return false;">X</a></div>';
 */
function embedBrightcove(g, d, h, c, e, f) {
    bcvideoembedsettings(g, d, h, c, e, f);
}
function bcvideoembedsettings(h, d, e, p, q, j, b, f, g, a, m) {
    var i = (document.location.protocol == "https:") ? '<param name="secureConnections" value="true" /> <param name="secureHTMLConnections" value="true" />' : "";
    f = (f != null) ? '<param name="includeAPI" value="true" />  <param name="templateLoadHandler" value="' + f + '" /> ' : '<param name="includeAPI" value="true" />  <param name="templateLoadHandler" value="onResponsiveLoad" />';
    g = (g != null) ? '<param name="templateReadyHandler" value="' + g + '" /> ' : '<param name="templateReadyHandler" value="onResponsiveReady" /> ';
    if (e == undefined) {
        document.write('"playerType" is not defined.');
        return;
    }
    if ((e == "single" || e == "single-social") && p == undefined) {
        document.write('"bctid" is not defined.');
        return;
    }
    if (q != undefined) {
        if (q.substring(0, 3) == "www" || q.substring(0, 4) == "http") {
            j = q;
            q = undefined;
        }
    }
    var n = {};
    n.bctid = p;
    n.size = h;
    n.playerType = e;
    n.playerKey = q;
    if (e.indexOf("social") > -1 && !j) {
        j = (parent.document.location.href) ? parent.document.location.href : document.location.href;
    }
    n.shareURL = j;
    var l = w01getBrightcoveSettings(n);
    var c = Math.random();
    var r = "";
    if (q == undefined) {
        q = l.playerKey;
    }
    if (p == undefined) {
        p = l.bctid;
    }
    if (j != undefined) {
        r = '<param name="linkBaseURL" value="' + j + '" />';
    }
    if (d == undefined) {
        d = false;
    }
    var k = (document.location.href.indexOf("html5vid=true") > -1) ? '<param name="forceHTML" value="true" />' : "";
    var o = '<object id="myExperience' + c + '" class="BrightcoveExperience">		<param name="@videoPlayer" value="' + p + '">		<param name="@videoList" value="' + l.videoList + '" />		<param name="bgcolor" value="#000000" />		<param name="width" value="' + l.width + '" />		<param name="height" value="' + l.height + '" />		<param name="playerID" value="' + l.playerID + '" />		<param name="playerKey" value="' + q + '" />		<param name="publisherID" value="1460825906"/>		<param name="isVid" value="true" />		<param name="isUI" value="true" />		<param name="dynamicStreaming" value="true">		<param name="autoStart" value="' + d + '">		<param name="wmode" value="transparent" />		' + f + "		" + g + "		" + k + "		" + r + "		" + i + "		</object>";
    if (typeof videooutage !== "undefined") {
        o = o + videooutage;
    }
    if (m) {
        return [o, c, l.width, l.height];
    } else {
        if (b) {
            b.html(o);
            brightcove.createExperiences();
        } else {
            document.write(o);
            if (document.body.className && document.body.className.indexOf("f11") > -1) {
                brightcove.createExperiences();
            }
        }
    }
}
function convertBCscripts2div(b) {
    var c = /embedBrightcove\([\S\s]*?\)/g;
    var a = /"/ig;
    b = b.replace(c, function (e, d) {
        return e.replace(a, "'");
    });
    return b.replace(/embedBrightcove\(([^)]+)\)/gi, '•<div data-embedbc="$1"></div>•').replace(/embedBrightcove\(([^)]+)\)/gi, '•<div data-embedbc="$1"></div>•').replace(/<\/[^>]*script[^>]*>/gi, "°<\/script>").replace(/(<[^\/>]*script[^>]*>)/gi, "$1°").replace(/<[^\/>]*script[^>]*>°[^°•]+•<div data-/gi, "<div data-").replace(/<\/div>•[^°]+°<\/[^>]*script[^>]*>/gi, "</div>").replace(/(<[^\/>]*script[^>]*>)°/gi, "$1").replace(/°(<\/[^>]*script[^>]*>)/gi, "$1");
}

/*! BRIGHTCOVE.EMBEDBCDIV.FUNCTION */
function bcLoadDivEmbedd(a) {
    a.find("div[data-embedbc]").each(function (d) {
        if (!$(this).hasClass("lazyloadvideo") && $(this).css("opacity") != 0) {
            var c = $(this).attr("data-embedbc").split(",");
            var d = 0;
            while (d <= 9) {
                if (c[d]) {
                    c[d] = c[d].replace(/'/gi, "").replace(/^ /gi, "").replace(/ $/gi, "");
                }
                if (!c[d]) {
                    c[d] = null;
                } else {
                    if (c[d] == "false") {
                        c[d] = false;
                    } else {
                        if (c[d] == "true") {
                            c[d] = true;
                        } else {
                            if (c[d] == "null") {
                                c[d] = null;
                            }
                        }
                    }
                }
                d++;
            }
            var b = bcvideoembedsettings(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], true);
            $(this).parent().append(b[0]);
            $(this).remove();
        }
    });
    brightcove.createExperiences();
    responsiveVidResize();
}

/*! APIModules */
/* last updated 04/20/16 from https://sadmin.brightcove.com/js/APIModules_all.js */

var APIModules = {};
APIModules.EXPERIENCE = "experience";
APIModules.CONTENT = "content";
APIModules.VIDEO_PLAYER = "videoPlayer";
APIModules.SOCIAL = "social";
APIModules.SEARCH = "search";
APIModules.CUE_POINTS = "cuePoints";
APIModules.ADVERTISING = "advertising";
APIModules.MENU = "menu";
APIModules.EFFECTS = "effects";
APIModules.CONVIVA = "conviva";
APIModules.CAPTIONS = "captions";
APIModules.AUTH = "auth";
APIModules.HTML5 = "_html5";
if (brightcove == undefined) {
    var brightcove = {playerType: {FLASH: "flash", HTML: "html", INSTALLER: "installer", NO_SUPPORT: "nosupport"}};
}
brightcove.instances = {};
brightcove.modules = {};
brightcove.ID_DELIM = "|||";
var bcPlayer = brightcove;
brightcove.getExperience = function (pExperience) {
    if (this.instances[pExperience] == null) {
        if (window.console) {
            console.log("Experience '" + pExperience + "' not found. Please ensure the name is correct and the API for the player is enabled.");
        }
    }
    return this.instances[pExperience];
};
brightcove.getPlayer = brightcove.getExperience;
brightcove.stringify = function (pObject) {
    var type = typeof pObject;
    if (type == "function" || pObject == undefined) {
        return "\"\"";
    } else if (type == "string") {
        return "\"" + pObject.replace(/"/g, "\\\"") + "\"";
    } else if (pObject instanceof Array) {
        var json = "[";
        for (var i in pObject) {
            if (typeof pObject[i] == "function") {
                json += ("\"\",");
            } else {
                json += (this.stringify(pObject[i]) + ",");
            }
        }
        if (json.substr(-1) == ",") {
            json = json.substr(0, json.length - 1);
        }
        return json + "]";
    } else if (type == "object") {
        var json = "{";
        var i;
        var props = pObject.enumerableProperties;
        if (props) {
            for (i in props) {
                json += ("\"" + props[i] + "\":" + this.stringify(pObject[props[i]]) + ",");
            }
        } else {
            for (i in pObject) {
                if (typeof pObject[i] != "function" && i != "__proto__") {
                    json += ("\"" + i + "\":" + this.stringify(pObject[i]) + ",");
                }
            }
        }
        if (json.substr(-1) == ",") {
            json = json.substr(0, json.length - 1);
        }
        return json + "}";
    } else {
        return pObject;
    }
}
function setAPICallback(pID, pCallback, pURL) {
    brightcove.instances[pID] = new BrightcoveExperience(pCallback, pID, pURL);
}
function BrightcoveExperience(pCallback, pID, pURL) {
    if (pCallback == null) {
        this.type = brightcove.playerType.HTML;
        this.playerURL = pURL;
        this.callback = brightcove.experiences[pID].contentWindow;
    } else {
        this.type = brightcove.playerType.FLASH;
        this.callback = pCallback;
    }
    this.modules = {};
}
BrightcoveExperience.prototype.getModule = function (pModule) {
    if (this.type == brightcove.playerType.HTML) {
        pModule += APIModules.HTML5;
    }
    if (this.modules[pModule] == null && brightcove.modules[pModule]) {
        var module = new brightcove.modules[pModule](this);
        module.playerURL = this.playerURL;
        if (module.isPlayerDefined != null) {
            if (!module.isPlayerDefined()) {
                return null;
            }
        }
        this.modules[pModule] = module;
    }
    return this.modules[pModule];
};
function APIModule() {
    this.handlers = [];
}
APIModule.handlerCount = 0;
APIModule.getHandler = function () {
    return "bc_handler" + (APIModule.handlerCount++);
};
APIModule.callFlash = function (pCallback, pParams) {
    var pCallbackArray = pCallback.split(brightcove.ID_DELIM);
    if (pCallbackArray.length < 2)return;
    if (pCallbackArray[0].length < 1)return;
    var pFlashId = pCallbackArray[0];
    var pCallback = pCallbackArray[1];
    var pExperience = document.getElementById(pFlashId);
    if (pExperience[pCallback] != null) {
        return pExperience[pCallback](BCXML.convertToXML(pParams, "js2flash"));
    }
};
APIModule.prototype.name = "APIModule";
APIModule.prototype.addEventListener = function (pEvent, pHandler, pPriority) {
    var pNewHandler = APIModule.getHandler();
    this.handlers.push({handler: pHandler, bcHandler: pNewHandler, event: pEvent});
    window[pNewHandler] = pHandler;
    return this.callMethod("addEventListener", [pEvent, pNewHandler, pPriority]);
};
APIModule.prototype.removeEventListener = function (pEvent, pHandler) {
    var pNum = this.handlers.length;
    for (var i = 0; i < pNum; i++) {
        if (this.handlers[i].event == pEvent && this.handlers[i].handler == pHandler) {
            var pBCHandler = this.handlers[i].bcHandler;
            this.handlers.splice(i, 1);
            break;
        }
    }
    if (pBCHandler == undefined)return;
    return this.callMethod("removeEventListener", [pEvent, pBCHandler]);
};
APIModule.prototype.callPlayer = function (pCallback, pParams) {
    if (this.playerURL != undefined) {
        return this.callHTML5(pParams);
    } else {
        return APIModule.callFlash(pCallback, pParams);
    }
};
APIModule.prototype.callMethod = function (pMethod, pArguments) {
    var pArgs = [];
    for (var i = 0; i < pArguments.length; i++)pArgs.push(pArguments[i]);
    return this.callPlayer(this.callback, {module: this.name, method: pMethod, params: pArgs});
};
APIModule.prototype.callHTML5 = function (pParams) {
    if (!this.callback.postMessage) {
        return null;
    }
    var json;
    if (window.JSON) {
        json = window.JSON.stringify(pParams);
    } else {
        json = brightcove.stringify(pParams);
    }
    if (json) {
        this.callback.postMessage(json, this.playerURL);
    }
    return null;
};
var BCXML = {};
BCXML.convertToXML = function (pObj, pNodeName) {
    if (pObj instanceof Function)return "";
    var pType = BCXML.getType(pObj);
    var pXML = "<" + pType.name + pNodeName + ">";
    if (pType.name == "obj") {
        for (var i in pObj) {
            pXML += BCXML.convertToXML(pObj[i], i);
        }
    } else if (pType.name == "arr") {
        for (var j = 0; j < pObj.length; j++) {
            pXML += BCXML.convertToXML(pObj[j], j);
        }
    } else if (pType.name == "str") {
        pObj = BCXML.replaceEntities(pObj);
        pXML += pObj;
    } else {
        pXML += pObj;
    }
    pXML += "</" + pType.name + pNodeName + ">";
    return pXML;
};
BCXML.replaceEntities = function (pObj) {
    pObj = pObj.replace(new RegExp("&", "g"), "&amp;");
    pObj = pObj.replace(new RegExp("<", "g"), "&lt;");
    pObj = pObj.replace(new RegExp(">", "g"), "&gt;");
    return pObj;
};
BCXML.getType = function (pObj) {
    switch (typeof(pObj)) {
        case"boolean":
            return {name: "boo", type: Boolean};
        case"string":
            return {name: "str", type: String};
        case"number":
            return {name: "num", type: Number};
        default:
            if (pObj instanceof Array) {
                return {name: "arr", type: Array};
            } else {
                return {name: "obj", type: Object};
            }
    }
};
BCAdvertisingEvent = {}
BCAdvertisingEvent.AD_COMPLETE = "adComplete";
BCAdvertisingEvent.AD_POSTROLLS_COMPLETE = "adPostRollsComplete";
BCAdvertisingEvent.AD_PAUSE = "adPause";
BCAdvertisingEvent.AD_PROGRESS = "adProgress";
BCAdvertisingEvent.AD_RESUME = "adResume";
BCAdvertisingEvent.AD_RECEIVED = "adReceived";
BCAdvertisingEvent.AD_START = "adStart";
BCAdvertisingEvent.AD_CLICK = "adClick";
BCAdvertisingEvent.EXTERNAL_AD = "externalAd";
BCAdvertisingEvent.AD_RULES_READY = "adRulesReady";
brightcove.modules[APIModules.ADVERTISING] = AdvertisingAPI;
function AdvertisingAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.ADVERTISING;
}
var pttp = AdvertisingAPI.prototype = new APIModule();
pttp.showAd = function () {
    return this.callMethod("showAd", arguments);
};
pttp.resumeAfterExternalAd = function () {
    return this.callMethod("resumeAfterExternalAd", arguments);
};
pttp.getEnabledAdFormats = function () {
    return this.callMethod("getEnabledAdFormats", arguments);
};
pttp.enableAdFormats = function () {
    return this.callMethod("enableAdFormats", arguments);
};
pttp.enableExternalAds = function () {
    return this.callMethod("enableExternalAds", arguments);
};
pttp.enableOverrideAds = function () {
    return this.callMethod("enableOverrideAds", arguments);
};
pttp.getExternalAdsEnabled = function () {
    return this.callMethod("getExternalAdsEnabled", arguments);
};
pttp.getOverrideAdsEnabled = function () {
    return this.callMethod("getOverrideAdsEnabled", arguments);
};
pttp.disableForExternalAd = function () {
    return this.callMethod("disableForExternalAd", arguments);
};
pttp.getCurrentAdProperties = function () {
    return this.callMethod("getCurrentAdProperties", arguments);
};
pttp.showSponsorMessage = function () {
    return this.callMethod("showSponsorMessage", arguments);
};
pttp.getShowSponsorMessage = function () {
    return this.callMethod("getShowSponsorMessage", arguments);
};
pttp.allowThirdPartyControl = function () {
    return this.callMethod("allowThirdPartyControl", arguments);
};
pttp.setThirdPartyTime = function () {
    return this.callMethod("setThirdPartyTime", arguments);
};
pttp.getThirdPartyTime = function () {
    return this.callMethod("getThirdPartyTime", arguments);
};
pttp.getAdPolicy = function () {
    return this.callMethod("getAdPolicy", arguments);
};
pttp.setAdPolicy = function () {
    return this.callMethod("setAdPolicy", arguments);
};
pttp.setAdRules = function () {
    return this.callMethod("setAdRules", arguments);
};
pttp.getCurrentAdRules = function () {
    return this.callMethod("getCurrentAdRules", arguments);
};
pttp.setAdTranslator = function () {
    return this.callMethod("setAdTranslator", arguments);
};
pttp.getCurrentAdTranslator = function () {
    return this.callMethod("getCurrentAdTranslator", arguments);
};
pttp.requestAd = function () {
    return this.callMethod("requestAd", arguments);
};
pttp.getStayInFullScreen = function () {
    return this.callMethod("getStayInFullScreen", arguments);
};
pttp.setStayInFullScreen = function () {
    return this.callMethod("setStayInFullScreen", arguments);
};
pttp.stopAd = function () {
    return this.callMethod("stopAd", arguments);
};
pttp.DEFAULT_AD_TRANSLATOR = "defaultAdTranslator";
BCAuthEvent = {}
BCAuthEvent.AUTH_NEEDED = "authNeeded";
brightcove.modules[APIModules.AUTH] = AuthAPI;
BCAuthService = {}
BCAuthService.ADOBE_PASS = "adobepass";
BCAuthService.AIS = "ais";
function AuthAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.AUTH;
}
var pttp = AuthAPI.prototype = new APIModule();
pttp.checkStatus = function () {
    return this.callMethod("checkStatus", arguments);
};
pttp.showMessage = function () {
    return this.callMethod("showMessage", arguments);
};
pttp.removeMessage = function () {
    return this.callMethod("removeMessage", arguments);
};
pttp.playWithToken = function () {
    return this.callMethod("playWithToken", arguments);
};
BCCaptionsEvent = {}
BCCaptionsEvent.DFXP_LOAD_SUCCESS = "dfxpLoadSuccess";
BCCaptionsEvent.DFXP_LOAD_ERROR = "dfxpLoadError";
brightcove.modules[APIModules.CAPTIONS] = CaptionsAPI;
function CaptionsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CAPTIONS;
}
var pttp = CaptionsAPI.prototype = new APIModule();
pttp.loadDFXP = function () {
    return this.callMethod("loadDFXP", arguments);
};
pttp.setLanguage = function () {
    return this.callMethod("setLanguage", arguments);
};
pttp.getLanguages = function () {
    return this.callMethod("getLanguages", arguments);
};
pttp.getStyleOptions = function () {
    return this.callMethod("getStyleOptions", arguments);
};
pttp.setStyleOptions = function () {
    return this.callMethod("setStyleOptions", arguments);
};
pttp.getCaptionsEnabled = function () {
    return this.callMethod("getCaptionsEnabled", arguments);
};
pttp.setCaptionsEnabled = function () {
    return this.callMethod("setCaptionsEnabled", arguments);
};
pttp.showOptions = function () {
    return this.callMethod("showOptions", arguments);
};
BCContentEvent = {}
BCContentEvent.VIDEO_LOAD = "videoLoad";
BCContentEvent.PLAYLIST_LOAD = "playlistLoad";
BCContentEvent.MEDIA_LOAD = "mediaLoad";
BCContentEvent.MEDIA_COLLECTION_LOAD = "mediaCollectionLoad";
brightcove.modules[APIModules.CONTENT] = ContentAPI;
function ContentAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.CONTENT;
}
var pttp = ContentAPI.prototype = new APIModule();
pttp.getAllMediaCollections = function () {
    return this.callMethod("getAllMediaCollections", arguments);
};
pttp.getAllMediaCollectionIDs = function () {
    return this.callMethod("getAllMediaCollectionIDs", arguments);
};
pttp.getAllPlaylists = function () {
    return this.callMethod("getAllPlaylists", arguments);
};
pttp.getAllPlaylistIDs = function () {
    return this.callMethod("getAllPlaylistIDs", arguments);
};
pttp.getMediaCollection = function () {
    return this.callMethod("getMediaCollection", arguments);
};
pttp.getMediaCollectionAsynch = function () {
    return this.callMethod("getMediaCollectionAsynch", arguments);
};
pttp.getPlaylist = function () {
    return this.callMethod("getPlaylist", arguments);
};
pttp.getPlaylistAsynch = function () {
    return this.callMethod("getPlaylistAsynch", arguments);
};
pttp.getMedia = function () {
    return this.callMethod("getMedia", arguments);
};
pttp.getMediaAsynch = function () {
    return this.callMethod("getMediaAsynch", arguments);
};
pttp.getVideo = function () {
    return this.callMethod("getVideo", arguments);
};
pttp.getVideoAsynch = function () {
    return this.callMethod("getVideoAsynch", arguments);
};
pttp.purgeAllContent = function () {
    return this.callMethod("purgeAllContent", arguments);
};
pttp.purgeMediaCollections = function () {
    return this.callMethod("purgeMediaCollections", arguments);
};
pttp.purgeMedia = function () {
    return this.callMethod("purgeMedia", arguments);
};
pttp.purgePlaylist = function () {
    return this.callMethod("purgePlaylist", arguments);
};
pttp.purgePlaylists = function () {
    return this.callMethod("purgePlaylists", arguments);
};
pttp.purgeVideo = function () {
    return this.callMethod("purgeVideo", arguments);
};
pttp.purgeVideos = function () {
    return this.callMethod("purgeVideos", arguments);
};
pttp.getMediaInGroupAsynch = function () {
    return this.callMethod("getMediaInGroupAsynch", arguments);
};
pttp.createRuntimeMediaCollection = function () {
    return this.callMethod("createRuntimeMediaCollection", arguments);
};
pttp.updateMedia = function () {
    return this.callMethod("updateMedia", arguments);
};
pttp.appendArgsToMediaRequest = function () {
    return this.callMethod("appendArgsToMediaRequest", arguments);
};
brightcove.modules[APIModules.CONVIVA] = ConvivaAPI;
function ConvivaAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CONVIVA;
}
var pttp = ConvivaAPI.prototype = new APIModule();
pttp.sendEvent = function () {
    return this.callMethod("sendEvent", arguments);
};
BCCuePointEvent = {}
BCCuePointEvent.CUE = "cuePoint";
brightcove.modules[APIModules.CUE_POINTS] = CuePointsAPI;
function CuePointsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CUE_POINTS;
}
var pttp = CuePointsAPI.prototype = new APIModule();
pttp.addCuePoints = function () {
    return this.callMethod("addCuePoints", arguments);
};
pttp.clearCodeCuePoints = function () {
    return this.callMethod("clearCodeCuePoints", arguments);
};
pttp.removeCodeCuePointsAtTime = function () {
    return this.callMethod("removeCodeCuePointsAtTime", arguments);
};
pttp.getCuePoints = function () {
    return this.callMethod("getCuePoints", arguments);
};
pttp.clearAdCuePoints = function () {
    return this.callMethod("clearAdCuePoints", arguments);
};
pttp.removeAdCuePointsAtTime = function () {
    return this.callMethod("removeAdCuePointsAtTime", arguments);
};
BCEffectsEvent = {};
BCEffectsEvent.BEGIN = "animationBegin";
BCEffectsEvent.COMPLETE = "animationComplete";
BCEffectsEvent.CHANGE = "animationChange";
brightcove.modules[APIModules.EFFECTS] = EffectsAPI;
function EffectsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.EFFECTS;
}
EffectsAPI.animations = {};
var pttp = EffectsAPI.prototype = new APIModule();
pttp.createAnimation = function () {
    var pID = this.callMethod("createAnimationJS", arguments);
    return this.getAnimation(pID);
};
pttp.getAnimation = function () {
    var pID = this.callMethod("getAnimationJS", arguments);
    if (pID) {
        return this.getAnimationWrapper(pID);
    }
    return null;
};
pttp.getAnimationWrapper = function (pID) {
    var pAnimation = EffectsAPI.animations[pID];
    if (pAnimation == undefined) {
        pAnimation = new EffectsAPIAnimation(pID, this.callback);
        EffectsAPI.animations[pID] = pAnimation;
    }
    return pAnimation;
};
function EffectsAPIAnimation(pID, pCallback) {
    this.id = pID;
    this.name = APIModules.EFFECTS;
    this.callback = pCallback;
}
pttp = EffectsAPIAnimation.prototype = new APIModule();
pttp.id = -1;
pttp.callMethod = function (pMethod, pArguments) {
    if (pArguments == undefined)pArguments = [];
    var pArgs = [this.id];
    for (var i = 0; i < pArguments.length; i++)pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {module: this.name, method: pMethod, params: pArgs});
};
pttp.start = function () {
    return this.callMethod("startJS", arguments);
};
pttp.stop = function () {
    return this.callMethod("stopJS", arguments);
};
pttp.apply = function (target) {
    var targetID = target.getID();
    if (targetID) {
        return this.callMethod("applyJS", [targetID]);
    }
};
pttp.addEventListener = function (pEvent, pHandler) {
    var pNewHandler = APIModule.getHandler();
    this.handlers.push({handler: pHandler, bcHandler: pNewHandler, event: pEvent});
    window[pNewHandler] = pHandler;
    return this.callMethod("addEventListenerJS", [pEvent, pNewHandler]);
};
pttp.removeEventListener = function (pEvent, pHandler) {
    var pNum = this.handlers.length;
    for (var i = 0; i < pNum; i++) {
        if (this.handlers[i].event == pEvent && this.handlers[i].handler == pHandler) {
            var pBCHandler = this.handlers[i].bcHandler;
            this.handlers.splice(i, 1);
            break;
        }
    }
    if (pBCHandler == undefined)return;
    return this.callMethod("removeEventListenerJS", [pEvent, pBCHandler]);
};
BCExperienceEvent = {}
BCExperienceEvent.CONTENT_LOAD = "contentLoad";
BCExperienceEvent.USER_MESSAGE = "userMessage";
BCExperienceEvent.TEMPLATE_READY = "templateReady";
BCExperienceEvent.ENTER_FULLSCREEN = "enterFullScreen";
BCExperienceEvent.EXIT_FULLSCREEN = "exitFullScreen";
brightcove.modules[APIModules.EXPERIENCE] = ExperienceAPI;
BCComponentModules = {};
function ExperienceAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.EXPERIENCE;
}
var pttp = ExperienceAPI.prototype = new APIModule();
pttp.setSize = function () {
    return this.callMethod("setSize", arguments);
};
pttp.getPlayerName = function () {
    return this.callMethod("getPlayerName", arguments);
};
pttp.getReady = function () {
    return this.callMethod("getReady", arguments);
};
pttp.getWidth = function () {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function () {
    return this.callMethod("getHeight", arguments);
};
pttp.getAdEnabled = function () {
    return this.callMethod("getAdEnabled", arguments);
};
pttp.getEnabled = function () {
    return this.callMethod("getEnabled", arguments);
};
pttp.setEnabled = function () {
    return this.callMethod("setEnabled", arguments);
};
pttp.loadExperience = function () {
    return this.callMethod("loadExperience", arguments);
};
pttp.getLayout = function () {
    return this.callMethod("getLayout", arguments);
};
pttp.getAffiliateID = function () {
    return this.callMethod("getAffiliateID", arguments);
};
pttp.getExperienceID = function () {
    return this.callMethod("getExperienceID", arguments);
};
pttp.getPublisherID = function () {
    return this.callMethod("getPublisherID", arguments);
};
pttp.getExperienceURL = function () {
    return this.callMethod("getExperienceURL", arguments);
};
pttp.getReferrerURL = function () {
    return this.callMethod("getReferrerURL", arguments);
};
pttp.getConfiguredPropertiesForID = function () {
    return this.callMethod("getConfiguredPropertiesForID", arguments);
};
pttp.getPlayerParameter = function () {
    return this.callMethod("getPlayerParameter", arguments);
};
pttp.getLayoutRoot = function () {
    var pObj = this.callMethod("getLayoutRootJS", arguments);
    if (pObj != null) {
        if (BCComponentModules[pObj.elementName] != null) {
            return new BCComponentModules[pObj.elementName](this.experience, this.callback, pObj.elementID);
        }
    }
    return null;
};
pttp.getElementByID = function () {
    var pNodeName = this.callMethod("getJSElementByID", arguments);
    if (pNodeName != null) {
        if (pNodeName == "VideoPlayer" || pNodeName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            if (pPlayerAPI) {
                pPlayerAPI.initializeComponentAPI();
                return pPlayerAPI;
            }
        } else if (BCComponentModules[pNodeName] != null) {
            return new BCComponentModules[pNodeName](this.experience, this.callback, arguments[0]);
        }
    }
    return null;
};
pttp.getElementsByType = function () {
    var pIDs = this.callMethod("getJSElementsByType", arguments);
    var pElements = [];
    var pElement;
    for (var i in pIDs) {
        if (typeof(pIDs[i]) != "function") {
            pElement = this.getElementByID(pIDs[i]);
            if (pElement)pElements.push(pElement);
        }
    }
    return pElements;
};
pttp.getModules = function () {
    return this.callMethod("getModules", arguments);
};
pttp.unload = function () {
    return this.callMethod("unload", arguments);
};
pttp.debug = function () {
    return this.callMethod("debug", arguments);
};
pttp.getUserCountry = function () {
    return this.callMethod("getUserCountry", arguments);
};
pttp.getTranslation = function () {
    return this.callMethod("getTranslation", arguments);
};
BCMenuEvent = {}
BCMenuPage = {}
BCMenuAdditionalMedia = {}
BCMenuEvent.MENU_PAGE_OPEN = "menuPageOpen";
BCMenuEvent.MENU_PAGE_CLOSE = "menuPageClose";
BCMenuEvent.OVERLAY_MENU_OPEN = "overlayMenuOpen";
BCMenuEvent.OVERLAY_MENU_CLOSE = "overlayMenuClose";
BCMenuEvent.OVERLAY_MENU_PLAY_CLICK = "overlayMenuPlayClick";
BCMenuEvent.ICON_MENU_OPEN = "iconMenuOpen";
BCMenuEvent.ICON_MENU_CLOSE = "iconMenuClose";
BCMenuEvent.SEND_EMAIL_CLICK = "sendEmailClick";
BCMenuEvent.BLOG_POST_CLICK = "blogPostClick";
BCMenuEvent.COPY_LINK = "copyLink";
BCMenuEvent.COPY_CODE = "copyCode";
BCMenuEvent.VIDEO_REQUEST = "videoRequest";
BCMenuPage.EMAIL = "Email";
BCMenuPage.SHARE = "Share";
BCMenuPage.LINK = "Link";
BCMenuPage.CODE = "Embed";
BCMenuPage.INFO = "Info";
BCMenuAdditionalMedia.RELATED_VIDEOS = "related videos";
BCMenuAdditionalMedia.NEWEST_VIDEOS = "newest videos";
BCMenuAdditionalMedia.MOST_VIEWED_VIDEOS = "most viewed videos";
brightcove.modules[APIModules.MENU] = MenuAPI;
function MenuAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.MENU;
}
var pttp = MenuAPI.prototype = new APIModule();
pttp.showIconMenu = function () {
    return this.callMethod("showIconMenu", arguments);
};
pttp.isIconMenuShowing = function () {
    return this.callMethod("isIconMenuShowing", arguments);
};
pttp.showMenuPage = function () {
    return this.callMethod("showMenuPage", arguments);
};
pttp.closeMenuPage = function () {
    return this.callMethod("closeMenuPage", arguments);
};
pttp.isMenuPageShowing = function () {
    return this.callMethod("isMenuPageShowing", arguments);
};
pttp.isOverlayMenuShowing = function () {
    return this.callMethod("isOverlayMenuShowing", arguments);
};
pttp.removeOverlayMenu = function () {
    return this.callMethod("removeOverlayMenu", arguments);
};
pttp.getCurrentMenuPage = function () {
    return this.callMethod("getCurrentMenuPage", arguments);
};
pttp.setOverlayMenuVisible = function () {
    return this.callMethod("setOverlayMenuVisible", arguments);
};
pttp.getOverlayMenuVisible = function () {
    return this.callMethod("getOverlayMenuVisible", arguments);
};
pttp.setAdditionalMediaForType = function () {
    return this.callMethod("setAdditionalMediaForType", arguments);
};
pttp.getAdditionalMediaForType = function () {
    return this.callMethod("getAdditionalMediaForType", arguments);
};
var bcAdditionalMediaCallback;
pttp.setAdditionalMediaCallback = function (pCallback, pTypes) {
    bcAdditionalMediaCallback = pCallback;
    return this.callMethod("setAdditionalMediaCallbackJS", ["bcCallAdditionalMediaCallback", pTypes]);
};
function bcCallAdditionalMediaCallback(pType, pMedia) {
    return bcAdditionalMediaCallback(pType, pMedia);
};BCSearchEvent = {};
BCSearchEvent.RESULT = "searchResult";
BCSearchEvent.ERROR = "searchError";
brightcove.modules[APIModules.SEARCH] = SearchAPI;
SortOrderType = {ASC: "ASC", DESC: "DESC"};
SortByType = {
    PUBLISH_DATE: "PUBLISH_DATE",
    CREATION_DATE: "CREATION_DATE",
    MODIFIED_DATE: "MODIFIED_DATE",
    PLAYS_TOTAL: "PLAYS_TOTAL",
    PLAYS_TRAILING_WEEK: "PLAYS_TRAILING_WEEK"
};
function SearchAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.SEARCH;
}
SearchAPI.searches = {};
var pttp = SearchAPI.prototype = new APIModule();
pttp.findRelatedVideos = function () {
    var pID = this.callMethod("findRelatedVideosJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findVideosByText = function () {
    var pID = this.callMethod("findVideosByTextJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findVideosByTags = function () {
    var pID = this.callMethod("findVideosByTagsJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findAllVideos = function () {
    var pID = this.callMethod("findAllVideosJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.getVideoSearch = function (pID) {
    var pSearch = SearchAPI.searches[pID];
    if (pSearch == undefined) {
        pSearch = new VideoSearch(pID, this.callback);
        SearchAPI.searches[pID] = pSearch;
    }
    return pSearch;
};
pttp.getMaxItemsInMemory = function () {
    return this.callMethod("getMaxItemsInMemory", arguments);
};
pttp.setMaxItemsInMemory = function () {
    return this.callMethod("setMaxItemsInMemory", arguments);
};
function VideoSearch(pID, pCallback) {
    this.id = pID;
    this.name = APIModules.SEARCH;
    this.callback = pCallback;
}
pttp = VideoSearch.prototype = new APIModule();
pttp.id = -1;
pttp.callMethod = function (pMethod, pArguments) {
    if (pArguments == undefined)pArguments = [];
    var pArgs = [this.id];
    for (var i = 0; i < pArguments.length; i++)pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {module: this.name, method: pMethod, params: pArgs});
};
pttp.getItems = function () {
    return this.callMethod("getItems", arguments);
};
pttp.getPage = function () {
    return this.callMethod("getPage", arguments);
};
pttp.getPageAsynch = function () {
    this.pageNumber = this.callMethod("getPageNumber");
    return this.callMethod("getPageAsynch", arguments);
};
pttp.getNextPage = function () {
    return this.callMethod("getNextPage", arguments);
};
pttp.getNextPageAsynch = function () {
    return this.callMethod("getNextPageAsynch", arguments);
};
pttp.getPreviousPage = function () {
    return this.callMethod("getPreviousPage", arguments);
};
pttp.getPreviousPageAsynch = function () {
    return this.callMethod("getPreviousPageAsynch", arguments);
};
pttp.getRow = function () {
    return this.callMethod("getRow", arguments);
};
pttp.getRowOnPage = function () {
    return this.callMethod("getRowOnPage", arguments);
};
pttp.purgeAll = function () {
    return this.callMethod("purgeAll", arguments);
};
pttp.purgePage = function () {
    return this.callMethod("purgePage", arguments);
};
pttp.getTotalRows = function () {
    return this.callMethod("getTotalRows", arguments);
};
pttp.getTotalPages = function () {
    return this.callMethod("getTotalPages", arguments);
};
pttp.getPageNumber = function () {
    return this.callMethod("getPageNumber", arguments);
};
pttp.getPageSize = function () {
    return this.callMethod("getPageSize", arguments);
};
pttp.getMaxPagesInMemory = function () {
    return this.callMethod("getMaxPagesInMemory", arguments);
};
pttp.setMaxPagesInMemory = function () {
    return this.callMethod("setMaxPagesInMemory", arguments);
};
BCSocialEvent = {}
BCSocialEvent.EMBED_CODE_RETRIEVED = "embedCodeRetrieved";
BCSocialEvent.LINK_GENERATED = "linkGenerated";
brightcove.modules[APIModules.SOCIAL] = SocialAPI;
function SocialAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.SOCIAL;
}
var pttp = SocialAPI.prototype = new APIModule();
pttp.shareVideoViaEmail = function () {
    return this.callMethod("shareVideoViaEmail", arguments);
};
pttp.getEmbedCode = function () {
    return this.callMethod("getEmbedCode", arguments);
};
pttp.setEmbedCode = function () {
    return this.callMethod("setEmbedCode", arguments);
};
pttp.setLink = function () {
    return this.callMethod("setLink", arguments);
};
pttp.getLink = function () {
    return this.callMethod("getLink", arguments);
};
pttp.isURLShortenedForMedia = function () {
    return this.callMethod("isURLShortenedForMedia", arguments);
};
pttp.getRSS = function () {
    return this.callMethod("getRSS", arguments);
};
pttp.enableBlogging = function () {
    return this.callMethod("enableBlogging", arguments);
};
if (BCMediaEvent == undefined) {
    var BCMediaEvent = {}
    BCMediaEvent.BEGIN = "mediaBegin";
    BCMediaEvent.BUFFER_BEGIN = "mediaBufferBegin";
    BCMediaEvent.BUFFER_COMPLETE = "mediaBufferComplete";
    BCMediaEvent.CHANGE = "mediaChange";
    BCMediaEvent.COMPLETE = "mediaComplete";
    BCMediaEvent.ERROR = "mediaError";
    BCMediaEvent.MUTE_CHANGE = "mediaMuteChange";
    BCMediaEvent.PLAY = "mediaPlay";
    BCMediaEvent.PROGRESS = "mediaProgress";
    BCMediaEvent.SEEK = "mediaSeek";
    BCMediaEvent.SEEK_NOTIFY = "mediaSeekNotify";
    BCMediaEvent.STOP = "mediaStop";
    BCMediaEvent.VOLUME_CHANGE = "mediaVolumeChange";
}
var BCVideoEvent = {}
BCVideoEvent.END_BUFFER = "endBuffering";
BCVideoEvent.RENDITION_CHANGE = "renditionChange";
BCVideoEvent.VIDEO_CHANGE = "videoChange";
BCVideoEvent.VIDEO_COMPLETE = "videoComplete";
BCVideoEvent.VIDEO_CONNECT = "videoConnect";
BCVideoEvent.VIDEO_LOAD = "videoLoad";
BCVideoEvent.VIDEO_PROGRESS = "videoProgress";
BCVideoEvent.VIDEO_START = "videoStart";
BCVideoEvent.VIDEO_STOP = "videoStop";
BCVideoEvent.VIDEO_MUTE = "ui_mute";
BCVideoEvent.VIDEO_SEEK = "seek";
BCVideoEvent.START_BUFFER = "startBuffering";
BCVideoEvent.STREAM_START = "streamStart";
BCVideoEvent.VOLUME_CHANGE = "volumeChange";
brightcove.modules[APIModules.VIDEO_PLAYER] = VideoPlayerAPI;
function VideoPlayerAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.VIDEO_PLAYER;
}
var pttp = VideoPlayerAPI.prototype = new APIModule();
pttp.initializeComponentAPI = function () {
    return this.callMethod("initializeComponentAPI", arguments);
};
pttp.getComponentAPI = function (pElementName, pElementID) {
    if (pElementName != null) {
        if (pElementName == "VideoPlayer" || pElementName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            pPlayerAPI.initializeComponentAPI();
            return pPlayerAPI;
        } else if (BCComponentModules[pElementName] != null) {
            return new BCComponentModules[pElementName](this.experience, this.callback, pElementID);
        }
    }
    return null;
};
pttp.isPlayerDefined = function () {
    return this.callMethod("isPlayerDefined", arguments);
};
pttp.setVideoFilter = function () {
    return this.callMethod("setVideoFilter", arguments);
};
pttp.getCurrentVideo = function () {
    return this.callMethod("getCurrentVideo", arguments);
};
pttp.getCurrentRendition = function () {
    return this.callMethod("getCurrentRendition", arguments);
};
pttp.loadVideo = function () {
    return this.callMethod("loadVideo", arguments);
};
pttp.cueVideo = function () {
    return this.callMethod("cueVideo", arguments);
};
pttp.play = function () {
    return this.callMethod("play", arguments);
};
pttp.stop = function () {
    return this.callMethod("stop", arguments);
};
pttp.pause = function () {
    return this.callMethod("pause", arguments);
};
pttp.seek = function () {
    return this.callMethod("seek", arguments);
};
pttp.mute = function () {
    return this.callMethod("mute", arguments);
};
pttp.setVolume = function () {
    return this.callMethod("setVolume", arguments);
};
pttp.getVolume = function () {
    return this.callMethod("getVolume", arguments);
};
pttp.showVolumeControls = function () {
    return this.callMethod("showVolumeControls", arguments);
};
pttp.getVideoPosition = function () {
    return this.callMethod("getVideoPosition", arguments);
};
pttp.getVideoDuration = function () {
    return this.callMethod("getVideoDuration", arguments);
};
pttp.getVideoBytesLoaded = function () {
    return this.callMethod("getVideoBytesLoaded", arguments);
};
pttp.getVideoBytesTotal = function () {
    return this.callMethod("getVideoBytesTotal", arguments);
};
pttp.isPlaying = function () {
    return this.callMethod("isPlaying", arguments);
};
pttp.isMuted = function () {
    return this.callMethod("isMuted", arguments);
};
pttp.getContentTypeDisplayed = function () {
    return this.callMethod("getContentTypeDisplayed", arguments);
};
pttp.setSize = function () {
    return this.callMethod("setSize", arguments);
};
pttp.move = function () {
    return this.callMethod("move", arguments);
};
pttp.getX = function () {
    return this.callMethod("getX", arguments);
};
pttp.getY = function () {
    return this.callMethod("getY", arguments);
};
pttp.getDefinition = function () {
    return this.callMethod("getDefinition", arguments);
};
pttp.getID = function () {
    return this.callMethod("getID", arguments);
};
pttp.getWidth = function () {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function () {
    return this.callMethod("getHeight", arguments);
};
pttp.getDisplayWidth = function () {
    return this.callMethod("getDisplayWidth", arguments);
};
pttp.getDisplayHeight = function () {
    return this.callMethod("getDisplayHeight", arguments);
};
pttp.getCurrentVideoWidth = function () {
    return this.callMethod('getCurrentVideoWidth', arguments);
};
pttp.getCurrentVideoHeight = function () {
    return this.callMethod('getCurrentVideoHeight', arguments);
};
pttp.getCurrentDisplayX = function () {
    return this.callMethod('getCurrentDisplayX', arguments);
}
pttp.getCurrentDisplayY = function () {
    return this.callMethod('getCurrentDisplayY', arguments);
}
pttp.getCurrentDisplayWidth = function () {
    return this.callMethod('getCurrentDisplayWidth', arguments);
};
pttp.getCurrentDisplayHeight = function () {
    return this.callMethod('getCurrentDisplayHeight', arguments);
};
pttp.getEnabled = function () {
    return this.callMethod("getEnabled", arguments);
};
pttp.setStyles = function () {
    return this.callMethod("setStyles", arguments);
};
pttp.setEnabled = function () {
    return this.callMethod("setEnabled", arguments);
};
pttp.getVisible = function () {
    return this.callMethod("getVisible", arguments);
};
pttp.setVisible = function () {
    return this.callMethod("setVisible", arguments);
};
pttp.getAlpha = function () {
    return this.callMethod("getAlpha", arguments);
};
pttp.setAlpha = function () {
    return this.callMethod("setAlpha", arguments);
};
pttp.getBlendMode = function () {
    return this.callMethod("getBlendMode", arguments);
};
pttp.setBlendMode = function () {
    return this.callMethod("setBlendMode", arguments);
};
pttp.getRotation = function () {
    return this.callMethod("getRotation", arguments);
};
pttp.setRotation = function () {
    return this.callMethod("setRotation", arguments);
};
pttp.getIndex = function () {
    return this.callMethod("getIndex", arguments);
};
pttp.toggleVolumeControls = function () {
    return this.callMethod("toggleVolumeControls", arguments);
};
pttp.toggleMenuPage = function () {
    return this.callMethod("toggleMenuPage", arguments);
};
pttp.getContainer = function () {
    var pObj = this.callMethod("getContainerJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getNextSibling = function () {
    var pObj = this.callMethod("getNextSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getPreviousSibling = function () {
    var pObj = this.callMethod("getPreviousSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getCSS = function () {
    return this.callMethod("getCSS", arguments);
};
pttp.mediaIsLive = function () {
    return this.callMethod("mediaIsLive", arguments);
};
pttp.setDynamicDeliveryParameters = function () {
    return this.callMethod("setDynamicDeliveryParameters", arguments);
};
pttp.removeUserMessage = function () {
    return this.callMethod("removeUserMessage", arguments);
};
pttp.enableInitialBandwidthDetection = function () {
    return this.callMethod("enableInitialBandwidthDetection", arguments);
};
pttp.getInitialBandwidthDetectionEnabled = function () {
    return this.callMethod("getInitialBandwidthDetectionEnabled", arguments);
};
pttp.setBufferCapacity = function () {
    return this.callMethod("setBufferCapacity", arguments);
};
pttp.getBufferCapacity = function () {
    return this.callMethod("getBufferCapacity", arguments);
};
pttp.setDefaultBufferTime = function () {
    return this.callMethod("setDefaultBufferTime", arguments);
};
pttp.getDefaultBufferTime = function () {
    return this.callMethod("getDefaultBufferTime", arguments);
};
pttp.getBufferLength = function () {
    return this.callMethod("getBufferLength", arguments);
};
pttp.getBackBufferLength = function () {
    return this.callMethod("getBackBufferLength", arguments);
};
pttp.getBackBufferCapacity = function () {
    return this.callMethod("getBackBufferCapacity", arguments);
};
pttp.setBackBufferCapacity = function () {
    return this.callMethod("setBackBufferCapacity", arguments);
};
pttp.setConnectOnLoad = function () {
    return this.callMethod("setConnectOnLoad", arguments);
};
pttp.setBitRateRange = function () {
    return this.callMethod("setBitRateRange", arguments);
};
pttp.requestRenditionChange = function () {
    return this.callMethod("requestRenditionChange", arguments);
};
pttp.getCurrentBandwidth = function () {
    return this.callMethod("getCurrentBandwidth", arguments);
};
pttp.getCurrentFrameRate = function () {
    return this.callMethod("getCurrentFrameRate", arguments);
};
pttp.setPrivacyMode = function () {
    return this.callMethod("setPrivacyMode", arguments);
};
pttp.getPrivacyMode = function () {
    return this.callMethod("getPrivacyMode", arguments);
};
pttp.getMediaControllerProperty = function () {
    return this.callMethod("getMediaControllerProperty", arguments);
};
var bcRenditionSelectionCallback;
pttp.setRenditionSelectionCallback = function (pSelector) {
    bcRenditionSelectionCallback = pSelector;
    if (bcRenditionSelectionCallback != null) {
        return this.callMethod("setRenditionSelectionCallbackJS", ["bcCallRenditionSelectionCallback"]);
    } else {
        return this.callMethod("setRenditionSelectionCallbackJS", []);
    }
};
function bcCallRenditionSelectionCallback(pContext) {
    return bcRenditionSelectionCallback(pContext);
};function ComponentAPI() {
    this.name = APIModules.EXPERIENCE;
}
var pttp = ComponentAPI.prototype = new APIModule();
pttp.callMethod = function (pMethod, pArguments) {
    var pArgs = [];
    for (var i = 0; i < pArguments.length; i++)pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: this.name,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: pArgs
    });
};
pttp.getComponentAPI = function (pElementName, pElementID) {
    if (pElementName != null) {
        if (pElementName == "VideoPlayer" || pElementName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            pPlayerAPI.initializeComponentAPI();
            return pPlayerAPI;
        } else if (BCComponentModules[pElementName] != null) {
            return new BCComponentModules[pElementName](this.experience, this.callback, pElementID);
        }
    }
    return null;
};
pttp.setSize = function () {
    return this.callMethod("setSize", arguments);
};
pttp.move = function () {
    return this.callMethod("move", arguments);
};
pttp.getX = function () {
    return this.callMethod("getX", arguments);
};
pttp.getY = function () {
    return this.callMethod("getY", arguments);
};
pttp.getVisible = function () {
    return this.callMethod("getVisible", arguments);
};
pttp.setVisible = function () {
    return this.callMethod("setVisible", arguments);
};
pttp.getIncludeInLayout = function () {
    return this.callMethod("getIncludeInLayout", arguments);
};
pttp.setIncludeInLayout = function () {
    return this.callMethod("setIncludeInLayout", arguments);
};
pttp.getAlpha = function () {
    return this.callMethod("getAlpha", arguments);
};
pttp.setAlpha = function () {
    return this.callMethod("setAlpha", arguments);
};
pttp.getDefinition = function () {
    return this.callMethod("getDefinition", arguments);
};
pttp.getID = function () {
    return this.callMethod("getID", arguments);
};
pttp.getWidth = function () {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function () {
    return this.callMethod("getHeight", arguments);
};
pttp.getIndex = function () {
    return this.callMethod("getIndex", arguments);
};
pttp.getContainer = function () {
    var pObj = this.callMethod("getContainerJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getNextSibling = function () {
    var pObj = this.callMethod("getNextSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getPreviousSibling = function () {
    var pObj = this.callMethod("getPreviousSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
function UIObjectAPI(pCallback, pElementID) {
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = UIObjectAPI.prototype = new ComponentAPI();
pttp.getEnabled = function () {
    return this.callMethod("getEnabled", arguments);
};
pttp.setEnabled = function () {
    return this.callMethod("setEnabled", arguments);
};
pttp.getBlendMode = function () {
    return this.callMethod("getBlendMode", arguments);
};
pttp.setBlendMode = function () {
    return this.callMethod("setBlendMode", arguments);
};
pttp.getRotation = function () {
    return this.callMethod("getRotation", arguments);
};
pttp.setRotation = function () {
    return this.callMethod("setRotation", arguments);
};
pttp.setStyles = function () {
    return this.callMethod("setStyles", arguments);
};
pttp.getCSS = function () {
    return this.callMethod("getCSS", arguments);
};
if (BCMediaEvent == undefined) {
    var BCMediaEvent = {}
    BCMediaEvent.BEGIN = "mediaBegin";
    BCMediaEvent.BUFFER_BEGIN = "mediaBufferBegin";
    BCMediaEvent.BUFFER_COMPLETE = "mediaBufferComplete";
    BCMediaEvent.CHANGE = "mediaChange";
    BCMediaEvent.COMPLETE = "mediaComplete";
    BCMediaEvent.ERROR = "mediaError";
    BCMediaEvent.MUTE_CHANGE = "mediaMuteChange";
    BCMediaEvent.PLAY = "mediaPlay";
    BCMediaEvent.PROGRESS = "mediaProgress";
    BCMediaEvent.SEEK = "mediaSeek";
    BCMediaEvent.STOP = "mediaStop";
    BCMediaEvent.VOLUME_CHANGE = "mediaVolumeChange";
}
BCComponentModules["AudioPlayer"] = AudioPlayerAPI;
function AudioPlayerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = AudioPlayerAPI.prototype = new ComponentAPI();
pttp.play = function () {
    return this.callMethod("play", arguments);
};
pttp.pause = function () {
    return this.callMethod("pause", arguments);
};
pttp.stop = function () {
    return this.callMethod("stop", arguments);
};
pttp.seek = function () {
    return this.callMethod("seek", arguments);
};
pttp.mute = function () {
    return this.callMethod("mute", arguments);
};
pttp.setVolume = function () {
    return this.callMethod("setVolume", arguments);
};
pttp.getVolume = function () {
    return this.callMethod("getVolume", arguments);
};
pttp.isPlaying = function () {
    return this.callMethod("isPlaying", arguments);
};
pttp.isMuted = function () {
    return this.callMethod("isMuted", arguments);
};
pttp.getMediaBytesLoaded = function () {
    return this.callMethod("getMediaBytesLoaded", arguments);
};
pttp.getMediaBytesTotal = function () {
    return this.callMethod("getMediaBytesTotal", arguments);
};
pttp.getMediaDuration = function () {
    return this.callMethod("getMediaDuration", arguments);
};
pttp.getMediaPosition = function () {
    return this.callMethod("getMediaPosition", arguments);
};
pttp.getCurrentMedia = function () {
    return this.callMethod("getCurrentMedia", arguments);
};
pttp.cueMedia = function () {
    return this.callMethod("cueMedia", arguments);
};
pttp.loadMedia = function () {
    return this.callMethod("loadMedia", arguments);
};
BCComponentModules["Banner"] = BannerAPI;
function BannerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = BannerAPI.prototype = new UIObjectAPI();
BCComponentModules["Button"] = ButtonAPI;
function ButtonAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ButtonAPI.prototype = new UIObjectAPI();
pttp.getLabel = function () {
    return this.callMethod("getLabel", arguments);
};
pttp.setLabel = function () {
    return this.callMethod("setLabel", arguments);
};
pttp.setFont = function () {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function () {
    return this.callMethod("getFont", arguments);
};
pttp.setLabelSize = function () {
    return this.callMethod("setLabelSize", arguments);
};
pttp.getLabelSize = function () {
    return this.callMethod("getLabelSize", arguments);
};
pttp.getAutoSize = function () {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setAutoSize = function () {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getTruncateLabel = function () {
    return this.callMethod("getTruncateLabel", arguments);
};
pttp.setTruncateLabel = function () {
    return this.callMethod("setTruncateLabel", arguments);
};
pttp.getMultiline = function () {
    return this.callMethod("getMultiline", arguments);
};
pttp.setMultiline = function () {
    return this.callMethod("setMultiline", arguments);
};
pttp.getIsTruncated = function () {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getLabelWidth = function () {
    return this.callMethod("getLabelWidth", arguments);
};
pttp.getShowBack = function () {
    return this.callMethod("getShowBack", arguments);
};
pttp.setShowBack = function () {
    return this.callMethod("setShowBack", arguments);
};
pttp.getTooltip = function () {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function () {
    return this.callMethod("setTooltip", arguments);
};
pttp.getIconScale = function () {
    return this.callMethod("getIconScale", arguments);
};
pttp.setIconScale = function () {
    return this.callMethod("setIconScale", arguments);
};
pttp.getIconOffsetX = function () {
    return this.callMethod("getIconOffsetX", arguments);
};
pttp.setIconOffsetX = function () {
    return this.callMethod("setIconOffsetX", arguments);
};
pttp.getIconOffsetY = function () {
    return this.callMethod("getIconOffsetY", arguments);
};
pttp.setIconOffsetY = function () {
    return this.callMethod("setIconOffsetY", arguments);
};
pttp.getLabelOffsetX = function () {
    return this.callMethod("getLabelOffsetX", arguments);
};
pttp.setLabelOffsetX = function () {
    return this.callMethod("setLabelOffsetX", arguments);
};
pttp.getLabelOffsetY = function () {
    return this.callMethod("getLabelOffsetY", arguments);
};
pttp.setLabelOffsetY = function () {
    return this.callMethod("setLabelOffsetY", arguments);
};
pttp.getLabelBuffer = function () {
    return this.callMethod("getLabelBuffer", arguments);
};
pttp.setLabelBuffer = function () {
    return this.callMethod("setLabelBuffer", arguments);
};
pttp.getIconAlignmentH = function () {
    return this.callMethod("getIconAlignmentH", arguments);
};
pttp.setIconAlignmentH = function () {
    return this.callMethod("setIconAlignmentH", arguments);
};
pttp.getIconAlignmentV = function () {
    return this.callMethod("getIconAlignmentV", arguments);
};
pttp.setIconAlignmentV = function () {
    return this.callMethod("setIconAlignmentV", arguments);
};
pttp.getLabelAlignmentH = function () {
    return this.callMethod("getLabelAlignmentH", arguments);
};
pttp.setLabelAlignmentH = function () {
    return this.callMethod("setLabelAlignmentH", arguments);
};
pttp.getLabelAlignmentV = function () {
    return this.callMethod("getLabelAlignmentV", arguments);
};
pttp.setLabelAlignmentV = function () {
    return this.callMethod("setLabelAlignmentV", arguments);
};
pttp.getIconName = function () {
    return this.callMethod("getIconName", arguments);
};
pttp.setIconName = function () {
    return this.callMethod("setIconName", arguments);
};
BCComponentModules["ChromelessVideoPlayer"] = ChromelessVideoPlayerAPI;
function ChromelessVideoPlayerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
    this.initializeComponentAPI();
}
var pttp = ChromelessVideoPlayerAPI.prototype = new VideoPlayerAPI();
pttp.callChromelessComponentMethod = function (pMethod, pArguments) {
    var args = [];
    for (var i = 0; i < pArguments.length; i++)args.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: APIModules.EXPERIENCE,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: args
    });
};
pttp.getControls = function () {
    var controls = this.callChromelessComponentMethod("getControlsJS", arguments);
    if (controls) {
        return this.getComponentAPI(controls.elementName, controls.elementID);
    }
    return null;
};
pttp.showControls = function () {
    return this.callChromelessComponentMethod("showControls", arguments);
};
pttp.getControlsVisible = function () {
    return this.callChromelessComponentMethod("getControlsVisible", arguments);
};
pttp.getIncludeInLayout = function () {
    return this.callChromelessComponentMethod("getIncludeInLayout", arguments);
};
pttp.setIncludeInLayout = function () {
    return this.callChromelessComponentMethod("setIncludeInLayout", arguments);
};
BCComponentModules["ComboBox"] = ComboBoxAPI;
function ComboBoxAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ComboBoxAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function () {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function () {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function () {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function () {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function () {
    return this.callMethod("getData", arguments);
};
pttp.setData = function () {
    return this.callMethod("setData", arguments);
};
pttp.getNumItems = function () {
    return this.callMethod("getNumItems", arguments);
};
pttp.getScrollerWidth = function () {
    return this.callMethod("getScrollerWidth", arguments);
};
pttp.setScrollerWidth = function () {
    return this.callMethod("setScrollerWidth", arguments);
};
pttp.getScrollerInset = function () {
    return this.callMethod("getScrollerInset", arguments);
};
pttp.setScrollerInset = function () {
    return this.callMethod("setScrollerInset", arguments);
};
pttp.getItemLeading = function () {
    return this.callMethod("getItemLeading", arguments);
};
pttp.setItemLeading = function () {
    return this.callMethod("setItemLeading", arguments);
};
pttp.getItemInsetH = function () {
    return this.callMethod("getItemInsetH", arguments);
};
pttp.setItemInsetH = function () {
    return this.callMethod("setItemInsetH", arguments);
};
pttp.getItemInsetV = function () {
    return this.callMethod("getItemInsetV", arguments);
};
pttp.setItemInsetV = function () {
    return this.callMethod("setItemInsetV", arguments);
};
pttp.getRowHeight = function () {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function () {
    return this.callMethod("setRowHeight", arguments);
};
pttp.getLabelBufferLeft = function () {
    return this.callMethod("getLabelBufferLeft", arguments);
};
pttp.setLabelBufferLeft = function () {
    return this.callMethod("setLabelBufferLeft", arguments);
};
pttp.getLabelBufferRight = function () {
    return this.callMethod("getLabelBufferRight", arguments);
};
pttp.setLabelBufferRight = function () {
    return this.callMethod("setLabelBufferRight", arguments);
};
pttp.getLabelBufferTop = function () {
    return this.callMethod("getLabelBufferTop", arguments);
};
pttp.setLabelBufferTop = function () {
    return this.callMethod("setLabelBufferTop", arguments);
};
pttp.getAnimated = function () {
    return this.callMethod("getAnimated", arguments);
};
pttp.setAnimated = function () {
    return this.callMethod("setAnimated", arguments);
};
pttp.getLabelField = function () {
    return this.callMethod("getLabelField", arguments);
};
pttp.setLabelField = function () {
    return this.callMethod("setLabelField", arguments);
};
pttp.getLabel = function () {
    return this.callMethod("getLabel", arguments);
};
pttp.setLabel = function () {
    return this.callMethod("setLabel", arguments);
};
function ContainerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ContainerAPI.prototype = new UIObjectAPI();
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.getBackgroundColor = function () {
    return this.callMethod("getBackgroundColor", arguments);
};
pttp.setBackgroundColor = function () {
    return this.callMethod("setBackgroundColor", arguments);
};
pttp.getBackgroundImage = function () {
    return this.callMethod("getBackgroundImage", arguments);
};
pttp.setBackgroundImage = function () {
    return this.callMethod("setBackgroundImage", arguments);
};
pttp.getGutter = function () {
    return this.callMethod("getGutter", arguments);
};
pttp.setGutter = function () {
    return this.callMethod("setGutter", arguments);
};
pttp.getPadding = function () {
    return this.callMethod("getPadding", arguments);
};
pttp.setPadding = function () {
    return this.callMethod("setPadding", arguments);
};
pttp.appendChild = function () {
    return this.callMethod("appendChild", arguments);
};
pttp.insertChildAt = function () {
    return this.callMethod("insertChildAt", arguments);
};
pttp.removeChildByID = function () {
    return this.callMethod("removeChildByID", arguments);
};
pttp.getNumChildren = function () {
    return this.callMethod("getNumChildren", arguments);
};
pttp.removeChildAt = function () {
    return this.callMethod("removeChildAt", arguments);
};
pttp.getChildAt = function () {
    var pObj = this.callMethod("getChildAtJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
BCComponentModules["ExpandingBanner"] = ExpandingBannerAPI;
function ExpandingBannerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ExpandingBannerAPI.prototype = new UIObjectAPI();
pttp.expand = function () {
    return this.callMethod("expand", arguments);
};
pttp.contract = function () {
    return this.callMethod("contract", arguments);
};
pttp.getExpanded = function () {
    return this.callMethod("getExpanded", arguments);
};
pttp.synchBannerWithExternal = function () {
    return this.callMethod("synchBannerWithExternal", arguments);
};
BCComponentModules["GraphicBlock"] = GraphicBlockAPI;
function GraphicBlockAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = GraphicBlockAPI.prototype = new UIObjectAPI();
BCComponentModules["Image"] = ImageAPI;
function ImageAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ImageAPI.prototype = new UIObjectAPI();
pttp.setSource = function () {
    return this.callMethod("setSource", arguments);
};
pttp.getSource = function () {
    return this.callMethod("getSource", arguments);
};
pttp.getScaleMode = function () {
    return this.callMethod("getScaleMode", arguments);
};
pttp.setScaleMode = function () {
    return this.callMethod("setScaleMode", arguments);
};
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.getURL = function () {
    return this.callMethod("getURL", arguments);
};
pttp.setURL = function () {
    return this.callMethod("setURL", arguments);
};
pttp.getTooltip = function () {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function () {
    return this.callMethod("setTooltip", arguments);
};
pttp.getInset = function () {
    return this.callMethod("getInset", arguments);
};
pttp.setInset = function () {
    return this.callMethod("setInset", arguments);
};
pttp.getContentWidth = function () {
    return this.callMethod("getContentWidth", arguments);
};
pttp.getContentHeight = function () {
    return this.callMethod("getContentHeight", arguments);
};
BCComponentModules["Label"] = LabelAPI;
function LabelAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LabelAPI.prototype = new UIObjectAPI();
pttp.setText = function () {
    return this.callMethod("setText", arguments);
};
pttp.getText = function () {
    return this.callMethod("getText", arguments);
};
pttp.setType = function () {
    return this.callMethod("setType", arguments);
};
pttp.getType = function () {
    return this.callMethod("getType", arguments);
};
pttp.setFont = function () {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function () {
    return this.callMethod("getFont", arguments);
};
pttp.setColor = function () {
    return this.callMethod("setColor", arguments);
};
pttp.getColor = function () {
    return this.callMethod("getColor", arguments);
};
pttp.setTextSize = function () {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function () {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.setUnderline = function () {
    return this.callMethod("setUnderline", arguments);
};
pttp.getUnderline = function () {
    return this.callMethod("getUnderline", arguments);
};
pttp.setHTMLEnabled = function () {
    return this.callMethod("setHTMLEnabled", arguments);
};
pttp.getHTMLEnabled = function () {
    return this.callMethod("getHTMLEnabled", arguments);
};
pttp.setAutoSize = function () {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function () {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setTruncate = function () {
    return this.callMethod("setTruncate", arguments);
};
pttp.getTruncate = function () {
    return this.callMethod("getTruncate", arguments);
};
pttp.setMultiline = function () {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function () {
    return this.callMethod("getMultiline", arguments);
};
pttp.getIsTruncated = function () {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getTextWidth = function () {
    return this.callMethod("getTextWidth", arguments);
};
pttp.getTextHeight = function () {
    return this.callMethod("getTextHeight", arguments);
};
BCComponentModules["LayoutBox"] = LayoutBoxAPI;
function LayoutBoxAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LayoutBoxAPI.prototype = new ComponentAPI();
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.getBackgroundColor = function () {
    return this.callMethod("getBackgroundColor", arguments);
};
pttp.setBackgroundColor = function () {
    return this.callMethod("setBackgroundColor", arguments);
};
pttp.getBackgroundImage = function () {
    return this.callMethod("getBackgroundImage", arguments);
};
pttp.setBackgroundImage = function () {
    return this.callMethod("setBackgroundImage", arguments);
};
pttp.getGutter = function () {
    return this.callMethod("getGutter", arguments);
};
pttp.setGutter = function () {
    return this.callMethod("setGutter", arguments);
};
pttp.getPadding = function () {
    return this.callMethod("getPadding", arguments);
};
pttp.setPadding = function () {
    return this.callMethod("setPadding", arguments);
};
pttp.appendChild = function () {
    return this.callMethod("appendChild", arguments);
};
pttp.insertChildAt = function () {
    return this.callMethod("insertChildAt", arguments);
};
pttp.removeChildByID = function () {
    return this.callMethod("removeChildByID", arguments);
};
pttp.getNumChildren = function () {
    return this.callMethod("getNumChildren", arguments);
};
pttp.removeChildAt = function () {
    return this.callMethod("removeChildAt", arguments);
};
pttp.getChildAt = function () {
    var pObj = this.callMethod("getChildAtJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
BCComponentModules["Link"] = LinkAPI;
function LinkAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LinkAPI.prototype = new UIObjectAPI();
pttp.setText = function () {
    return this.callMethod("setText", arguments);
};
pttp.getText = function () {
    return this.callMethod("getText", arguments);
};
pttp.setAutoSize = function () {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function () {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setFont = function () {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function () {
    return this.callMethod("getFont", arguments);
};
pttp.setTextSize = function () {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function () {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.setMultiline = function () {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function () {
    return this.callMethod("getMultiline", arguments);
};
pttp.getURL = function () {
    return this.callMethod("getURL", arguments);
};
pttp.setURL = function () {
    return this.callMethod("setURL", arguments);
};
pttp.getTooltip = function () {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function () {
    return this.callMethod("setTooltip", arguments);
};
BCComponentModules["List"] = ListAPI;
function ListAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ListAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function () {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function () {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.previous = function () {
    return this.callMethod("previous", arguments);
};
pttp.next = function () {
    return this.callMethod("next", arguments);
};
pttp.scrollTo = function () {
    return this.callMethod("scrollTo", arguments);
};
pttp.getSelectedData = function () {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function () {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function () {
    return this.callMethod("getData", arguments);
};
pttp.setData = function () {
    return this.callMethod("setData", arguments);
};
pttp.showPlaylist = function () {
    return this.callMethod("showPlaylist", arguments);
};
pttp.getNumItems = function () {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutomaticAdvance = function () {
    return this.callMethod("getAutomaticAdvance", arguments);
};
pttp.setAutomaticAdvance = function () {
    return this.callMethod("setAutomaticAdvance", arguments);
};
pttp.getScrollerWidth = function () {
    return this.callMethod("getScrollerWidth", arguments);
};
pttp.setScrollerWidth = function () {
    return this.callMethod("setScrollerWidth", arguments);
};
pttp.getScrollerInset = function () {
    return this.callMethod("getScrollerInset", arguments);
};
pttp.setScrollerInset = function () {
    return this.callMethod("setScrollerInset", arguments);
};
pttp.getItemLeading = function () {
    return this.callMethod("getItemLeading", arguments);
};
pttp.setItemLeading = function () {
    return this.callMethod("setItemLeading", arguments);
};
pttp.getItemInsetH = function () {
    return this.callMethod("getItemInsetH", arguments);
};
pttp.setItemInsetH = function () {
    return this.callMethod("setItemInsetH", arguments);
};
pttp.getItemInsetV = function () {
    return this.callMethod("getItemInsetV", arguments);
};
pttp.setItemInsetV = function () {
    return this.callMethod("setItemInsetV", arguments);
};
pttp.getRowHeight = function () {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function () {
    return this.callMethod("setRowHeight", arguments);
};
BCComponentModules["LiveButton"] = ButtonAPI;
BCComponentModules["Mask"] = MaskAPI;
function MaskAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = MaskAPI.prototype = new UIObjectAPI();
BCComponentModules["MediaControls"] = MediaControlsAPI;
function MediaControlsAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = MediaControlsAPI.prototype = new ContainerAPI();
BCComponentModules["Module"] = ModuleAPI;
function ModuleAPI(pExperience, pCallback, pElementID) {
    this.name = APIModules.EXPERIENCE;
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
    var methods = this.experience.getModule("experience").callMethod("getCustomModuleMethods", [pElementID]);
    var method;
    for (var i = 0; i < methods.length; i++) {
        method = methods[i];
        this[method] = (function (methodName) {
            return function () {
                return this.callMethod(methodName, arguments);
            }
        })(method);
    }
}
var pttp = ModuleAPI.prototype = new APIModule();
pttp.callMethod = function (pMethod, pArguments) {
    var args = [];
    for (var i = 0; i < pArguments.length; i++) {
        args.push(pArguments[i]);
    }
    return APIModule.callFlash(this.callback, {
        module: this.name,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: args
    });
};
BCComponentModules["Playhead"] = PlayheadAPI;
function PlayheadAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = PlayheadAPI.prototype = new UIObjectAPI();
pttp.getSliderWidth = function () {
    return this.callMethod("getSliderWidth", arguments);
};
pttp.setSliderWidth = function () {
    return this.callMethod("setSliderWidth", arguments);
};
pttp.getAutohideSlider = function () {
    return this.callMethod("getAutohideSlider", arguments);
};
pttp.setAutohideSlider = function () {
    return this.callMethod("setAutohideSlider", arguments);
};
if (BCLoaderEvent == undefined) {
    var BCLoaderEvent = {};
    BCLoaderEvent.PROGRESS = "loaderProgress";
    BCLoaderEvent.INIT = "loaderInit";
    BCLoaderEvent.COMPLETE = "loaderComplete";
    BCLoaderEvent.ERROR = "loaderError";
}
if (BCLoaderState == undefined) {
    var BCLoaderState = {};
    BCLoaderState.DEFAULT = "default";
    BCLoaderState.LOADING = "loading";
    BCLoaderState.LOADED = "loaded";
    BCLoaderState.ERROR = "error";
}
BCComponentModules["SWFLoader"] = SWFLoaderAPI;
function SWFLoaderAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = SWFLoaderAPI.prototype = new UIObjectAPI();
pttp.getState = function () {
    return this.callMethod("getState", arguments);
}
pttp.setSource = function () {
    return this.callMethod("setSource", arguments);
};
pttp.getSource = function () {
    return this.callMethod("getSource", arguments);
};
pttp.callSWFMethod = function () {
    return this.callMethod("callSWFMethod", arguments);
};
BCComponentModules["TabBar"] = TabBarAPI;
function TabBarAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TabBarAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function () {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function () {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function () {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function () {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function () {
    return this.callMethod("getData", arguments);
};
pttp.setData = function () {
    return this.callMethod("setData", arguments);
};
pttp.getNumItems = function () {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutoSizeTabs = function () {
    return this.callMethod("getAutoSizeTabs", arguments);
};
pttp.setAutoSizeTabs = function () {
    return this.callMethod("setAutoSizeTabs", arguments);
};
pttp.getTabWidth = function () {
    return this.callMethod("getTabWidth", arguments);
};
pttp.setTabWidth = function () {
    return this.callMethod("setTabWidth", arguments);
};
pttp.getLabelBuffer = function () {
    return this.callMethod("getLabelBuffer", arguments);
};
pttp.setLabelBuffer = function () {
    return this.callMethod("setLabelBuffer", arguments);
};
pttp.getLabelField = function () {
    return this.callMethod("getLabelField", arguments);
};
pttp.setLabelField = function () {
    return this.callMethod("setLabelField", arguments);
};
pttp.getTabPadding = function () {
    return this.callMethod("getTabPadding", arguments);
};
pttp.setTabPadding = function () {
    return this.callMethod("setTabPadding", arguments);
};
pttp.getTabAlign = function () {
    return this.callMethod("getTabAlign", arguments);
};
pttp.setTabAlign = function () {
    return this.callMethod("setTabAlign", arguments);
};
pttp.getIncludeMenu = function () {
    return this.callMethod("getIncludeMenu", arguments);
};
pttp.setIncludeMenu = function () {
    return this.callMethod("setIncludeMenu", arguments);
};
pttp.getMenuWidth = function () {
    return this.callMethod("getMenuWidth", arguments);
};
pttp.setMenuWidth = function () {
    return this.callMethod("setMenuWidth", arguments);
};
pttp.getMenuRowHeight = function () {
    return this.callMethod("getMenuRowHeight", arguments);
};
pttp.setMenuRowHeight = function () {
    return this.callMethod("setMenuRowHeight", arguments);
};
pttp.getMenuItemInset = function () {
    return this.callMethod("getMenuItemInset", arguments);
};
pttp.setMenuItemInset = function () {
    return this.callMethod("setMenuItemInset", arguments);
};
pttp.getMaxMenuRows = function () {
    return this.callMethod("getMaxMenuRows", arguments);
};
pttp.setMaxMenuRows = function () {
    return this.callMethod("setMaxMenuRows", arguments);
};
pttp.getHideSingleTab = function () {
    return this.callMethod("getHideSingleTab", arguments);
};
pttp.setHideSingleTab = function () {
    return this.callMethod("setHideSingleTab", arguments);
};
pttp.appendTab = function () {
    return this.callMethod("appendTab", arguments);
};
pttp.insertTabAt = function () {
    return this.callMethod("insertTabAt", arguments);
};
pttp.replaceTabAt = function () {
    return this.callMethod("replaceTabAt", arguments);
};
pttp.removeTabAt = function () {
    return this.callMethod("removeTabAt", arguments);
};
BCComponentModules["TextRegion"] = TextRegionAPI;
function TextRegionAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TextRegionAPI.prototype = new ContainerAPI();
BCComponentModules["TileList"] = TileListAPI;
function TileListAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TileListAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function () {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function () {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function () {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function () {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function () {
    return this.callMethod("getData", arguments);
};
pttp.setData = function () {
    return this.callMethod("setData", arguments);
};
pttp.showPlaylist = function () {
    return this.callMethod("showPlaylist", arguments);
};
pttp.previous = function () {
    return this.callMethod("previous", arguments);
};
pttp.next = function () {
    return this.callMethod("next", arguments);
};
pttp.getNumItems = function () {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutomaticAdvance = function () {
    return this.callMethod("getAutomaticAdvance", arguments);
};
pttp.setAutomaticAdvance = function () {
    return this.callMethod("setAutomaticAdvance", arguments);
};
pttp.getButtonOffsetX = function () {
    return this.callMethod("getButtonOffsetX", arguments);
};
pttp.setButtonOffsetX = function () {
    return this.callMethod("setButtonOffsetX", arguments);
};
pttp.getButtonOffsetY = function () {
    return this.callMethod("getButtonOffsetY", arguments);
};
pttp.setButtonOffsetY = function () {
    return this.callMethod("setButtonOffsetY", arguments);
};
pttp.getButtonSize = function () {
    return this.callMethod("getButtonSize", arguments);
};
pttp.setButtonSize = function () {
    return this.callMethod("setButtonSize", arguments);
};
pttp.getNumRows = function () {
    return this.callMethod("getNumRows", arguments);
};
pttp.setNumRows = function () {
    return this.callMethod("setNumRows", arguments);
};
pttp.getNumColumns = function () {
    return this.callMethod("getNumColumns", arguments);
};
pttp.setNumColumns = function () {
    return this.callMethod("setNumColumns", arguments);
};
pttp.getRowHeight = function () {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function () {
    return this.callMethod("setRowHeight", arguments);
};
pttp.getColumnWidth = function () {
    return this.callMethod("getColumnWidth", arguments);
};
pttp.setColumnWidth = function () {
    return this.callMethod("setColumnWidth", arguments);
};
pttp.getColumnGutter = function () {
    return this.callMethod("getColumnGutter", arguments);
};
pttp.setColumnGutter = function () {
    return this.callMethod("setColumnGutter", arguments);
};
pttp.getRowGutter = function () {
    return this.callMethod("getRowGutter", arguments);
};
pttp.setRowGutter = function () {
    return this.callMethod("setRowGutter", arguments);
};
pttp.getContentInsetV = function () {
    return this.callMethod("getContentInsetV", arguments);
};
pttp.setContentInsetV = function () {
    return this.callMethod("setContentInsetV", arguments);
};
pttp.getContentInsetH = function () {
    return this.callMethod("getContentInsetH", arguments);
};
pttp.setContentInsetH = function () {
    return this.callMethod("setContentInsetH", arguments);
};
pttp.setScrollDirection = function () {
    return this.callMethod("setScrollDirection", arguments);
};
pttp.getScrollDirection = function () {
    return this.callMethod("getScrollDirection", arguments);
};
pttp.getAnimationType = function () {
    return this.callMethod("getAnimationType", arguments);
};
pttp.setAnimationType = function () {
    return this.callMethod("setAnimationType", arguments);
};
pttp.getUseBlur = function () {
    return this.callMethod("getUseBlur", arguments);
};
pttp.setUseBlur = function () {
    return this.callMethod("setUseBlur", arguments);
};
pttp.showPage = function () {
    return this.callMethod("showPage", arguments);
};
pttp.showNextPage = function () {
    return this.callMethod("showNextPage", arguments);
};
pttp.showPreviousPage = function () {
    return this.callMethod("showPreviousPage", arguments);
};
pttp.getPageIndex = function () {
    return this.callMethod("getPageIndex", arguments);
};
pttp.getNumPages = function () {
    return this.callMethod("getNumPages", arguments);
};
pttp.getCenterContent = function () {
    return this.callMethod("getCenterContent", arguments);
};
pttp.setCenterContent = function () {
    return this.callMethod("setCenterContent", arguments);
};
pttp.getColumnCount = function () {
    return this.callMethod("getColumnCount", arguments);
};
pttp.getRowCount = function () {
    return this.callMethod("getRowCount", arguments);
};
BCComponentModules["TitleLabel"] = TitleLabelAPI;
function TitleLabelAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TitleLabelAPI.prototype = new UIObjectAPI();
pttp.setText = function () {
    return this.callMethod("setText", arguments);
};
pttp.getText = function () {
    return this.callMethod("getText", arguments);
};
pttp.setFont = function () {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function () {
    return this.callMethod("getFont", arguments);
};
pttp.setTextSize = function () {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function () {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function () {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function () {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function () {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function () {
    return this.callMethod("setVAlign", arguments);
};
pttp.setAutoSize = function () {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function () {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setTruncate = function () {
    return this.callMethod("setTruncate", arguments);
};
pttp.getTruncate = function () {
    return this.callMethod("getTruncate", arguments);
};
pttp.setMultiline = function () {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function () {
    return this.callMethod("getMultiline", arguments);
};
pttp.getIsTruncated = function () {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getTextWidth = function () {
    return this.callMethod("getTextWidth", arguments);
};
pttp.getSelected = function () {
    return this.callMethod("getSelected", arguments);
};
pttp.setSelected = function () {
    return this.callMethod("setSelected", arguments);
};
BCComponentModules["ToggleButton"] = ToggleButtonAPI;
function ToggleButtonAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ToggleButtonAPI.prototype = new ButtonAPI();
pttp.getToggledLabel = function () {
    return this.callMethod("getToggledLabel", arguments);
};
pttp.setToggledLabel = function () {
    return this.callMethod("setToggledLabel", arguments);
};
pttp.getToggledTooltip = function () {
    return this.callMethod("getToggledTooltip", arguments);
};
pttp.setToggledTooltip = function () {
    return this.callMethod("setToggledTooltip", arguments);
};
pttp.getToggledIconName = function () {
    return this.callMethod("getToggledIconName", arguments);
};
pttp.setToggledIconName = function () {
    return this.callMethod("setToggledIconName", arguments);
};
pttp.getIsToggled = function () {
    return this.callMethod("getIsToggled", arguments);
};
pttp.setIsToggled = function () {
    return this.callMethod("setIsToggled", arguments);
};
BCComponentModules["ViewStack"] = ViewStackAPI;
function ViewStackAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ViewStackAPI.prototype = new LayoutBoxAPI();
pttp.getSelectedIndex = function () {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.setSelectedIndex = function () {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedItemID = function () {
    return this.callMethod("getSelectedItemID", arguments);
};
pttp.setSelectedItemID = function () {
    return this.callMethod("setSelectedItemID", arguments);
};
BCComponentModules["VolumeControl"] = VolumeControlAPI;
function VolumeControlAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = VolumeControlAPI.prototype = new UIObjectAPI();
pttp.getShowBack = function () {
    return this.callMethod("getShowBack", arguments);
};
pttp.setShowBack = function () {
    return this.callMethod("setShowBack", arguments);
};
pttp.getTooltip = function () {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function () {
    return this.callMethod("setTooltip", arguments);
};
pttp.getIconScale = function () {
    return this.callMethod("getIconScale", arguments);
};
pttp.setIconScale = function () {
    return this.callMethod("setIconScale", arguments);
};
pttp.getIconOffsetX = function () {
    return this.callMethod("getIconOffsetX", arguments);
};
pttp.setIconOffsetX = function () {
    return this.callMethod("setIconOffsetX", arguments);
};
pttp.getIconOffsetY = function () {
    return this.callMethod("getIconOffsetY", arguments);
};
pttp.setIconOffsetY = function () {
    return this.callMethod("setIconOffsetY", arguments);
};
pttp.getIconAlignmentH = function () {
    return this.callMethod("getIconAlignmentH", arguments);
};
pttp.setIconAlignmentH = function () {
    return this.callMethod("setIconAlignmentH", arguments);
};
pttp.getIconAlignmentV = function () {
    return this.callMethod("getIconAlignmentV", arguments);
};
pttp.setIconAlignmentV = function () {
    return this.callMethod("setIconAlignmentV", arguments);
};
pttp.getIconName = function () {
    return this.callMethod("getIconName", arguments);
};
pttp.setIconName = function () {
    return this.callMethod("setIconName", arguments);
};
pttp.getMutedTooltip = function () {
    return this.callMethod("getMutedTooltip", arguments);
};
pttp.setMutedTooltip = function () {
    return this.callMethod("setMutedTooltip", arguments);
};
pttp.getMutedIconName = function () {
    return this.callMethod("getMutedIconName", arguments);
};
pttp.setMutedIconName = function () {
    return this.callMethod("setMutedIconName", arguments);
};
pttp.getIsToggled = function () {
    return this.callMethod("getIsToggled", arguments);
};
pttp.setIsToggled = function () {
    return this.callMethod("setIsToggled", arguments);
};
pttp.getSliderHeight = function () {
    return this.callMethod("getSliderHeight", arguments);
};
pttp.setSliderHeight = function () {
    return this.callMethod("setSliderHeight", arguments);
};
pttp.getPopupHeight = function () {
    return this.callMethod("getPopupHeight", arguments);
};
pttp.setPopupHeight = function () {
    return this.callMethod("setPopupHeight", arguments);
};
pttp.getHorizontalPadding = function () {
    return this.callMethod("getHorizontalPadding", arguments);
};
pttp.setHorizontalPadding = function () {
    return this.callMethod("setHorizontalPadding", arguments);
};
pttp.getVerticalPadding = function () {
    return this.callMethod("getVerticalPadding", arguments);
};
pttp.setVerticalPadding = function () {
    return this.callMethod("setVerticalPadding", arguments);
};
pttp.getDirection = function () {
    return this.callMethod("getDirection", arguments);
};
pttp.setDirection = function () {
    return this.callMethod("setDirection", arguments);
};
pttp.getAnimated = function () {
    return this.callMethod("getAnimated", arguments);
};
pttp.setAnimated = function () {
    return this.callMethod("setAnimated", arguments);
};

/*! W01v1 */
(function (a) {
    a(document).on("click", 'a[rel^="brightcoveLightBox"]', function (j) {
        j.preventDefault();
        var g = (a(this).attr("href").indexOf("size=") > -1) ? a(this).attr("href").replace(/size=[^?&]+/g, "size=100px100p") : a(this).attr("href") + "&size=100px100p";
        var b = getUrlParams(g);
        var f = w01getBrightcoveSettings(b);
        var k = "myExperience" + Math.random();
        var l = (a(this).attr("title")) ? a(this).attr("title") : "";
        if (!b.bctid) {
            alert('This request does not contain a "bctid" value.');
            return;
        }
        a("video").each(function () {
            a(this).css("visibility", "hidden");
        });
        var m = '		<div class="w01 w01v1 w01responsive">			<div class="w01w1">				<div class="w01w4">					<div class="w01w5">' + l + '</div>					<a class="w01close" data-trackas="lightbox" data-lbl="lightbox-close" href="#" title="' + ocomltxt[ocomlang].close + '">' + ocomltxt[ocomlang].close + '</a>				</div>				<div class="w01w7">					<div class="w01w8">						<div id="w01w12" class="responsiveVid">							<div data-embedbc="\'responsive\', \'true\', \'' + f.playerType + "', '" + f.bctid + "',,'" + f.shareURL + '\'">&nbsp;</div>						</div> 					</div>				</div>			</div>		</div>		<div class="w01z1">&nbsp;</div>';
        a("body").append(m);
        bcLoadDivEmbedd(a("#w01w12"));
        var h = (f.width == "100%") ? 642 : f.width;
        var c = (f.height == "100%") ? 360 : f.height;
        a(".w01w1").css({width: h + 30});
        a("#w01w12").css({width: f.width});
        var d = (a("div.w01").hasClass("w01responsive") && a(window).width() < 701) ? 0 : c;
        a("#w01w12").css({height: d});
        a(".w01").css({"margin-top": (-1 * (c / 2 + 32)), "margin-left": (-1 * (h / 2 + 16))});
        a(".w01z1").bind("click", function (n) {
            n.preventDefault();
            i();
        });
        a(".w01").fadeIn("fast", function () {
            if (typeof responsiveVidResize == "function") {
                responsiveVidResize();
                a(".w01").css({"margin-top": (-1 * (a(".w01").height() / 2))});
            }
        });
        a(".w01z1").fadeIn("fast");
        a("a.w01close").bind("click", function (n) {
            n.preventDefault();
            i();
        });
        function i() {
            a("video").each(function () {
                a(this).css("visibility", "visible");
            });
            a(".w01").fadeOut("fast");
            a(".w01z1").fadeOut("fast");
            a(".w01").remove();
            a(".w01z1").remove();
            return false;
        }

        a(document).keydown(function (n) {
            if (n.which == 27) {
                if (a(".w01")[0]) {
                    i();
                }
            }
        });
    });
})(jQuery);
function getUrlParams(b) {
    var a = {};
    var d;
    if (b && b.indexOf("?") > -1 && b.indexOf("&") > -1) {
        d = b.split("?")[1].split("&");
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                paramParts = d[c].split("=");
                a[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
            }
        }
    }
    return a;
}
function buildBrightcoveObject(d, c) {
    var b = (document.location.protocol == "https:") ? '<param name="secureConnections" value="true" /> <param name="secureHTMLConnections" value="true" />' : "";
    var a = '<object id="' + d + '" class="BrightcoveExperience">		<param name="bgcolor" value="#FFFFFF" />		<param name="width" value="' + c.width + '" />		<param name="height" value="' + c.height + '" />		<param name="playerID" value="' + c.playerID + '" />		<param name="playerKey" value="' + c.playerKey + '" />		<param name="publisherID" value="1460825906" />		<param name="autoStart" value="true" />		<param name="isVid" value="true" />		<param name="forceHTML" value="false" />		<param name="isUI" value="true" />		<param name="dynamicStreaming" value="true" />		<param name="@videoPlayer" value="' + c.bctid + '" />		<param name="@videoList" value="' + c.videoList + '" />		<param name="wmode" value="transparent" />		<param name="linkBaseURL" value="' + c.shareURL + '" />' + b + "</object>";
    if (typeof videooutage !== "undefined") {
        a = a + videooutage;
    }
    return a;
}
function w01displayBrightcoveObject(g) {
    var e = jQuery(location).attr("href").replace(/script/ig, "").replace(/[<>]/ig, "");
    var d = getUrlParams(e);
    var f = w01getBrightcoveSettings(d);
    var c = buildBrightcoveObject(g, f);
    var b = "T7xCfCw-ltEC2LVkO0fqsiQttq-bMrJwaV0dV7_TD_k.";
    var a = "//api.brightcove.com/services/library?";
    jQuery(".w01v2").append(c);
    if ((f.playerType != "live-primary") && (f.playerType != "live-secondary")) {
        switch (f.playerType) {
            case"single":
            case"single-social":
                a += "command=find_video_by_id&video_id=" + f.bctid + "&video_fields=name&token=" + b;
                break;
            case"playlist":
            case"playlist-social":
                a += "command=find_playlist_by_id&playlist_id=" + f.videoList + "&video_fields=name&token=" + b;
                break;
            default:
                a += "command=find_video_by_id&video_id=" + f.bctid + "&video_fields=name&token=" + b;
                break;
        }
        addScriptTag("w01setBrightcoveVideoName", a, "w01setBrightcoveVideoName");
    } else {
        jQuery(".w01v2").find(".w01w2").html("Streaming Live");
    }
}
function w01setBrightcoveVideoName(a) {
    jQuery(".w01v2").find(".w01w2").html(a.name);
}
function imgpreload(g, f, d) {
    var b = 0;
    var a = [];
    g = Object.prototype.toString.apply(g) === "[object Array]" ? g : [g];
    var e = function () {
        b += 1;
        if (b === g.length && f) {
            f(a, d);
        }
    };
    for (var c = 0; c < g.length; c++) {
        a[c] = new Image();
        a[c].onabort = e;
        a[c].onerror = e;
        a[c].onload = e;
        a[c].src = g[c];
    }
}

/*! DEMAND BASE FUNCTIONS */
function getdCookie(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e);
        }
    }
}
var dmbase = {loaded: "notset"};
(function () {
    var a = true;
    try {
        if (oracle && oracle.truste && oracle.truste.api && oracle.truste.api.getConsentCode()) {
            a = (oracle.truste.api.getConsentCode() != 1 && oracle.truste.api.getConsentCode() != 2) ? true : false;
        }
    } catch (g) {
    }
    if (a) {
        var f = getdCookie("ORA_WWW_ABMDATA");
        var h = getdCookie("ORA_WWW_ABMDATA_TEST");
        if (f) {
            var b = f.split("~");
            for (var e = 0; e < b.length; e++) {
                var d = b[e].split("::");
                dmbase["" + d[0]] = d[1] + "";
            }
            dmbase.loaded = "loaded";
        } else {
            var c = "4bbe9aaacfc4178d55ae63d63cee73e6";
            if (h && h.split("~")[0]) {
                c = h.split("~")[0];
                if (h.split("~")[1]) {
                    c += "&query=" + h.split("~")[1];
                }
            }
            jQuery.ajax({
                url: "//api.demandbase.com/api/v2/ip.json?token=" + c,
                dataType: "json",
                success: function (j) {
                    dmbase = j;
                    var k = "ORA_WWW_ABMDATA=";
                    for (var l in dmbase) {
                        if (dmbase.hasOwnProperty(l) && l != "ip" && dmbase[l] != null) {
                            var i;
                            if (typeof(dmbase[l]) == "object") {
                                i = JSON.stringify(dmbase[l]);
                            } else {
                                i = dmbase[l].toString().replace(/[~:=]/g, " ");
                            }
                            k += l + "::" + i + "~";
                        }
                    }
                    document.cookie = k.replace(/~$/, "") + "; expires=0; path=/";
                    dmbase.loaded = "loaded";
                },
                error: function () {
                    dmbase.loaded = "error";
                }
            });
        }
    } else {
        document.cookie = "ORA_WWW_ABMDATA=; Path=/; Expires=Wed, 07 Jul 1976 00:00:01 GMT;";
        dmbase.loaded = "noconsent";
    }
})();
function setWMIDs() {
    var a = jQuery.Deferred();
    if (dmbase.loaded == "loaded") {
        jQuery.when(getMappings()).then(function () {
            var c = "ORA_WWW_ABMDATA=";
            for (var d in dmbase) {
                if (dmbase.hasOwnProperty(d) && d != "ip" && dmbase[d] != null) {
                    var b;
                    if (typeof(dmbase[d]) == "object") {
                        b = JSON.stringify(dmbase[d]);
                    } else {
                        b = dmbase[d].toString().replace(/[~:=]/g, " ");
                    }
                    c += d + "::" + b + "~";
                }
            }
            document.cookie = c.replace(/~$/, "") + "; expires=0; path=/";
            a.resolve();
        }, function () {
            dmbase.loaded = "error";
            a.reject();
        });
    } else {
        a.reject();
    }
    return a.promise();
}
function getMappings(b) {
    var c = "//www.oracle.com/webfolder/s/assets/wordmappings.json";
    var a = jQuery.Deferred();
    jQuery.ajax({
        url: c, dataType: "jsonp", jsonpCallback: "wm_callback", cache: true, success: function (j) {
            dmbase.industry_wmid = mapIndustry(dmbase, j.industry);
            for (var i = 0; i < j.revenue.length; i++) {
                var h = j.revenue[i].label;
                h = h == "$5 Billion to $25 Billion" ? "$5 to $25 Billion" : (h == "$25 Billion to $50 Billion" ? "$25 to $50 Billion" : h);
                if (h && h == dmbase.revenue_range) {
                    dmbase.revenue_wmid = j.revenue[i].wordmapid;
                }
            }
            for (var i = 0; i < j.companysize.length; i++) {
                var k = j.companysize[i].label;
                if (k && k == dmbase.employee_range) {
                    dmbase.employee_wmid = j.companysize[i].wordmapid;
                }
            }
            for (var i = 0; i < j.country.length; i++) {
                var g = j.country[i].demandbasemapping;
                if (g && g == dmbase.country) {
                    dmbase.country_wmid = j.country[i].wordmapid;
                }
            }
            if ("watch_list" in dmbase) {
                dmbase.watch_list = JSON.parse(dmbase.watch_list);
                var f = dmbase.watch_list.aw_attr_2;
                switch (f) {
                    case"white":
                        dmbase.aw_attr_2 = 1;
                        break;
                    case"silver":
                        dmbase.aw_attr_2 = 2;
                        break;
                    case"gray":
                        dmbase.aw_attr_2 = 3;
                        break;
                    case"black":
                        dmbase.aw_attr_2 = 4;
                }
                var d = "region";
                for (var i = 0; i < j.region.length; i++) {
                    var e = j.region[i].demandbasemapping;
                    if (e && e == dmbase.watch_list.aw_attr_3) {
                        dmbase.region_wmid = j.region[i].wordmapid;
                    }
                }
            }
            a.resolve();
        }, error: function () {
            a.reject();
        }
    });
    return a.promise();
}
function mapIndustry(h, i) {
    if (h != null && h.industry != null) {
        for (var e = 0, c = i.length; e < c; e++) {
            if ("demandbasemappingasjson" in i[e]) {
                for (var g = 0; g < (i[e].demandbasemappingasjson.length); g++) {
                    for (var d in i[e].demandbasemappingasjson[g]) {
                        var f = d;
                        if (f && f == h.industry) {
                            if (h.sub_industry != null && !(h.sub_industry == "")) {
                                var b = i[e].demandbasemappingasjson[g][f];
                                if (b && (b.indexOf(h.sub_industry) > -1)) {
                                    return i[e].wordmapid;
                                }
                            }
                        }
                    }
                }
            } else {
                f = i[e].label;
                if (f == h.industry) {
                    return i[e].wordmapid;
                }
            }
        }
    }
}

/*! ADSERVER FUNCTIONS */
var adsiteid = "";
function loadAdByAdGroup(c, a) {
    var b = (document.location.host.indexOf("oracle.com") < 0) ? "//oracle.com" : "//" + document.location.host;
    var d = b + adsiteid + "/adgroupdetailv2.js?adgroupid=" + c;
    jQuery.ajax({url: d, dataType: "jsonp", jsonpCallback: "getAdGroupDetail", crossDomain: true, cache: true});
}
function getAdGroupDetail(e) {
    var i, h, j, k, b, d;
    b = e.adgroupid;
    i = e.type;
    h = e.ids;
    d = e.dataid;
    if (e.weights) {
        j = e.weights;
    }
    if (e.views) {
        k = e.views;
    }
    var f = 0;
    if (h != null) {
        f = h.length;
    }
    var g;
    if (i == "s") {
        var a = getWeightedRandomIndex(j);
        g = h[a];
    } else {
        var c = Math.floor((Math.random() * f) + 1);
        g = h[c - 1];
    }
    if (g != null && g != "") {
        loadAd(d, b, g);
    }
}
function getAdText(c) {
    var a = c.dataid;
    var d = getDivByDataId(a);
    var b = unescapeHtml(c.adtext);
    d.innerHTML = b;
    run_setup(jQuery(d));
}
function loadAd(a, d, b) {
    var c = (document.location.host.indexOf("oracle.com") < 0) ? "//oracle.com" : "//" + document.location.host;
    var e = c + adsiteid + "/addetailv2.js?adid=" + b + "&adgroupid=" + d;
    jQuery.ajax({url: e, dataType: "jsonp", jsonpCallback: "getAdText", crossDomain: true, cache: true});
}
function getDivByDataId(a) {
    var e = document.getElementsByTagName("div");
    var d = null;
    for (var c = 0; c < e.length; c++) {
        var b = e[c].getAttribute("data-id");
        if (b != null && b == a) {
            d = e[c];
            break;
        }
    }
    return d;
}
function unescapeHtml(b) {
    var a = b.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    return a;
}
function getDivByDataAdGroupId(d) {
    var c = document.getElementsByTagName("div");
    var b = null;
    for (var a = 0; a < c.length; a++) {
        var e = c[a].getAttribute("data-adgroupid");
        if (e != null && e == d) {
            b = c[a];
            break;
        }
    }
    return b;
}
function getDivsByClass(e) {
    var c = document.getElementsByTagName("div");
    var d = [];
    for (var b = 0; b < c.length; b++) {
        var a = c[b].getAttribute("class");
        if (a != null && a == e) {
            d.push(c[b]);
        }
    }
    return d;
}
function getRandomNumber(b, a) {
    return Math.random() * (a - b) + b;
}
function getRandomInteger(b, a) {
    return parseInt(getRandomNumber(b, a), 10);
}
function getSumOfWeightsSoFar(d, a) {
    var c = 0;
    for (var b = 0; b <= a; b++) {
        c += parseFloat(d[b]);
    }
    return c;
}
function getWeightedRandomIndex(d) {
    var e = getRandomInteger(0, 99);
    var a = 0;
    for (var c = 0; c < d.length; c++) {
        var b = getSumOfWeightsSoFar(d, c);
        if (e <= b) {
            a = c;
            break;
        }
    }
    return a;
}
jQuery(document).ready(function (b) {
    var a = b(".adwcsengine").waypoint(function (d) {
        var c = b(this.element);
        if (c.is("[data-id]") && c.is("[data-adgroupid]")) {
            adsiteid = (c.is("[data-siteid]") && c.attr("data-siteid") != "") ? "/" + c.attr("data-siteid") : "";
            loadAdByAdGroup(c.attr("data-adgroupid"), c.attr("data-id"));
        }
        this.destroy();
    }, {offset: "200%"});
});

