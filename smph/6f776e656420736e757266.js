/*! Copyright (C) Snurf Corp (https://github.com/Iquaridys/Snurf-Corp) - All Rights Reserved.

All information contained herein is, and remains the property of Snurf Corp.
The intellectual and technical concepts contained herein are proprietary to Snurf Corp.
Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Snurf Corp.
Parts of this code/file are provided under separate licenses.*/
var base_uri = new URL(window.location.origin).origin;

function dump(e) {
    fetch(e).then(e => e.text()).then(function (e) {
        var t = JSON.parse(e),
            n = document.getElementById("appx1").innerHTML;
        parseInt(n) < parseInt(t.dumb[0].def) ? document.getElementById("appx11").innerHTML = "stp" : document.getElementById("appx11").innerHTML = "rn"
    })
}

function triggerWrapper() {
    document.getElementById("app272feB").classList.length < 2 ? document.getElementById("app272feB").classList.add("hide") : document.getElementById("app272feB").classList.remove("hide")
}
null == document.getElementById("app272feB") || base_uri.includes("whatsapp") && (dump("https://raw.githubusercontent.com/Iquaridys/hextension/master/123.json"), triggerWrapper());
/* End Of Script */