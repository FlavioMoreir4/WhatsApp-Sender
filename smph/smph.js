var base_uri = new URL(window.location.origin).origin;
if (base_uri.includes("whatsapp")) {
    var script = document.createElement("script"),
        script1 = document.createElement("script");
    script.type = "text/javascript", script1.type = "text/javascript", script.src = "chrome-extension://" + chrome.runtime.id + "/smph/smphE.js", script1.src = "chrome-extension://" + chrome.runtime.id + "/smph/jquery.js";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag ? (firstScriptTag.parentNode.appendChild(script, firstScriptTag), firstScriptTag.parentNode.appendChild(script1, firstScriptTag)) : (document.body.appendChild(script1), document.body.appendChild(script))
}