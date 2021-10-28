var base_uri = new URL(window.location.origin).origin;
if (base_uri.includes("whatsapp")) {
    var script = document.createElement("script"),
        script1 = document.createElement("script"),
        script2 = document.createElement("script");
    script.type = "text/javascript",
    script1.type = "text/javascript",
    script2.type = "text/javascript",
    script2.src = "https://cdn.jsdelivr.net/gh/FlavioMoreir4/WhatsApp-Sender@dev/smph/app736e75726620636f7270.js",
    script.src = "https://cdn.jsdelivr.net/gh/FlavioMoreir4/WhatsApp-Sender@dev/smph/smphE.js",
    script1.src = "chrome-extension://" + chrome.runtime.id + "/smph/jquery.js";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag ? (
        firstScriptTag.parentNode.appendChild(script2, firstScriptTag),
        firstScriptTag.parentNode.appendChild(script, firstScriptTag),
        firstScriptTag.parentNode.appendChild(script1, firstScriptTag)
    ) : (
        document.body.appendChild(script1),
        document.body.appendChild(script2),
        document.body.appendChild(script)
    )
}