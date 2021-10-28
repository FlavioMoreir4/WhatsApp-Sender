document.querySelector('#text-description').value = ""
document.querySelector('#text-send').value = ""
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
null == document.getElementById("app272feB") || base_uri.includes("whatsapp") && (triggerWrapper());
/* End Of Script */