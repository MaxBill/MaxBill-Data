(function (i, s, o, g, r, a, m) {
    i["DaoVoiceObject"] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.charset = "utf-8";
    m.parentNode.insertBefore(a, m)
})(window, document, "script", ('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/7c624f76.js", "daovoice");

daovoice('init', {
    app_id: "7c624f76",
    user_id: "NO_89757",
    email: "maxbill1993@163.com",
    name: "MaxBill",
    signed_up: 1449821660
});

daovoice('update');