// /*! Copyright (C) Snurf Corp (https://github.com/Iquaridys/Snurf-Corp) - All Rights Reserved.

// All information contained herein is, and remains the property of Snurf Corp.
// The intellectual and technical concepts contained herein are proprietary to Snurf Corp.
// Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Snurf Corp.
// Parts of this code/file are provided under separate licenses.*/
function getBaseUrl() {
    return window.location.href.match(/^.*\//)[0]
}

function getById(e) {
    return document.getElementById(e)
}

function getByClass(e) {
    return document.getElementsByClassName(e)
}

function getBySelector(e) {
    return document.querySelector(e)
}

function getByXpath(e) {
    return document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

function getContains(e, t) {
    var n = document.querySelectorAll(e);
    return Array.prototype.filter.call(n, function (e) {
        return RegExp(t).test(e.textContent)
    })
}

function gawe(e) {
    return document.createElement(e)
}

function escapeRegExp(e) {
    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}

function replaceAll(e, t, n) {
    return e.replace(new RegExp(escapeRegExp(t), "g"), n)
}

function sp_txt(e) {
    for (var t, n, l, i = new RegExp(/{([^{}]+?)}/), s = getById("" + e).value; null !== (t = i.exec(s));) n = t[1].split("|"), l = Math.floor(Math.random() * n.length), s = s.replace(t[0], n[l]);
    return s
}

var imgFile, pageURL = getBaseUrl();
const timer = setInterval(general, 1e3);
//var main_timer

function general() {
    //(getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), initListener(), clearInterval(timer))
    (getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), clearInterval(timer))
}

function loadModule() {
    if (!window.Store || !window.Store.Msg) {
        (function () {
            function getStore(modules) {
                let foundCount = 0;
                let neededObjects = [{
                        id: "Store",
                        conditions: (module) => (module.default && module.default.Chat && module.default.Msg) ? module.default : null
                    },
                    {
                        id: "MediaCollection",
                        conditions: (module) => (module.default && module.default.prototype && (module.default.prototype.processFiles !== undefined || module.default.prototype.processAttachments !== undefined)) ? module.default : null
                    },
                    {
                        id: "MediaProcess",
                        conditions: (module) => (module.BLOB) ? module : null
                    },
                    {
                        id: "Archive",
                        conditions: (module) => (module.setArchive) ? module : null
                    },
                    {
                        id: "Block",
                        conditions: (module) => (module.blockContact && module.unblockContact) ? module : null
                    },
                    {
                        id: "ChatUtil",
                        conditions: (module) => (module.sendClear) ? module : null
                    },
                    {
                        id: "GroupInvite",
                        conditions: (module) => (module.queryGroupInviteCode) ? module : null
                    },
                    {
                        id: "Wap",
                        conditions: (module) => (module.createGroup) ? module : null
                    },
                    {
                        id: "ServiceWorker",
                        conditions: (module) => (module.default && module.default.killServiceWorker) ? module : null
                    },
                    {
                        id: "State",
                        conditions: (module) => (module.STATE && module.STREAM) ? module : null
                    },
                    {
                        id: "_Presence",
                        conditions: (module) => (module.setPresenceAvailable && module.setPresenceUnavailable) ? module : null
                    },
                    {
                        id: "WapDelete",
                        conditions: (module) => (module.sendConversationDelete && module.sendConversationDelete.length == 2) ? module : null
                    },
                    {
                        id: "Conn",
                        conditions: (module) => (module.default && module.default.ref && module.default.refTTL) ? module.default : null
                    },
                    {
                        id: "WapQuery",
                        conditions: (module) => (module.queryExist) ? module : ((module.default && module.default.queryExist) ? module.default : null)
                    },
                    {
                        id: "CryptoLib",
                        conditions: (module) => (module.decryptE2EMedia) ? module : null
                    },
                    {
                        id: "OpenChat",
                        conditions: (module) => (module.default && module.default.prototype && module.default.prototype.openChat) ? module.default : null
                    },
                    {
                        id: "UserConstructor",
                        conditions: (module) => (module.default && module.default.prototype && module.default.prototype.isServer && module.default.prototype.isUser) ? module.default : null
                    },
                    {
                        id: "SendTextMsgToChat",
                        conditions: (module) => (module.sendTextMsgToChat) ? module.sendTextMsgToChat : null
                    },
                    {
                        id: "ReadSeen",
                        conditions: (module) => (module.sendSeen) ? module : null
                    },
                    {
                        id: "sendDelete",
                        conditions: (module) => (module.sendDelete) ? module.sendDelete : null
                    },
                    {
                        id: "addAndSendMsgToChat",
                        conditions: (module) => (module.addAndSendMsgToChat) ? module.addAndSendMsgToChat : null
                    },
                    {
                        id: "sendMsgToChat",
                        conditions: (module) => (module.sendMsgToChat) ? module.sendMsgToChat : null
                    },
                    {
                        id: "Catalog",
                        conditions: (module) => (module.Catalog) ? module.Catalog : null
                    },
                    {
                        id: "bp",
                        conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('bp_unknown_version')) ? module.default : null
                    },
                    {
                        id: "MsgKey",
                        conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('MsgKey error: obj is null/undefined')) ? module.default : null
                    },
                    {
                        id: "Parser",
                        conditions: (module) => (module.convertToTextWithoutSpecialEmojis) ? module.default : null
                    },
                    {
                        id: "Builders",
                        conditions: (module) => (module.TemplateMessage && module.HydratedFourRowTemplate) ? module : null
                    },
                    {
                        id: "Me",
                        conditions: (module) => (module.PLATFORMS && module.Conn) ? module.default : null
                    },
                    {
                        id: "CallUtils",
                        conditions: (module) => (module.sendCallEnd && module.parseCall) ? module : null
                    },
                    {
                        id: "Identity",
                        conditions: (module) => (module.queryIdentity && module.updateIdentity) ? module : null
                    },
                    {
                        id: "MyStatus",
                        conditions: (module) => (module.getStatus && module.setMyStatus) ? module : null
                    },
                    {
                        id: "ChatStates",
                        conditions: (module) => (module.sendChatStatePaused && module.sendChatStateRecording && module.sendChatStateComposing) ? module : null
                    },
                    {
                        id: "GroupActions",
                        conditions: (module) => (module.sendExitGroup && module.localExitGroup) ? module : null
                    },
                    {
                        id: "Features",
                        conditions: (module) => (module.FEATURE_CHANGE_EVENT && module.features) ? module : null
                    },
                    {
                        id: "MessageUtils",
                        conditions: (module) => (module.storeMessages && module.appendMessage) ? module : null
                    },
                    {
                        id: "WebMessageInfo",
                        conditions: (module) => (module.WebMessageInfo && module.WebFeatures) ? module.WebMessageInfo : null
                    },
                    {
                        id: "createMessageKey",
                        conditions: (module) => (module.createMessageKey && module.createDeviceSentMessage) ? module.createMessageKey : null
                    },
                    {
                        id: "Participants",
                        conditions: (module) => (module.addParticipants && module.removeParticipants && module.promoteParticipants && module.demoteParticipants) ? module : null
                    },
                    {
                        id: "WidFactory",
                        conditions: (module) => (module.isWidlike && module.createWid && module.createWidFromWidLike) ? module : null
                    },
                    {
                        id: "Base",
                        conditions: (module) => (module.setSubProtocol && module.binSend && module.actionNode) ? module : null
                    },
                    {
                        id: "Versions",
                        conditions: (module) => (module.loadProtoVersions && module.default["15"] && module.default["16"] && module.default["17"]) ? module : null
                    },
                    {
                        id: "Sticker",
                        conditions: (module) => (module.default && module.default.Sticker) ? module.default.Sticker : null
                    },
                    {
                        id: "MediaUpload",
                        conditions: (module) => (module.default && module.default.mediaUpload) ? module.default : null
                    },
                    {
                        id: "UploadUtils",
                        conditions: (module) => (module.default && module.default.encryptAndUpload) ? module.default : null
                    }
                ];
                for (let idx in modules) {
                    if ((typeof modules[idx] === "object") && (modules[idx] !== null)) {
                        neededObjects.forEach((needObj) => {
                            if (!needObj.conditions || needObj.foundedModule)
                                return;
                            let neededModule = needObj.conditions(modules[idx]);
                            if (neededModule !== null) {
                                foundCount++;
                                needObj.foundedModule = neededModule;
                            }
                        });

                        if (foundCount == neededObjects.length) {
                            break;
                        }
                    }
                }
                let neededStore = neededObjects.find((needObj) => needObj.id === "Store");
                window.Store = neededStore.foundedModule ? neededStore.foundedModule : {};
                neededObjects.splice(neededObjects.indexOf(neededStore), 1);
                neededObjects.forEach((needObj) => {
                    if (needObj.foundedModule) {
                        window.Store[needObj.id] = needObj.foundedModule;
                    }
                });
                window.Store.Chat.modelClass.prototype.sendMessage = function (e) {
                    window.Store.SendTextMsgToChat(this, ...arguments);
                }
                return window.Store;
            }
            const parasite = `parasite${Date.now()}`
            // webpackJsonp([], { [parasite]: (x, y, z) => getStore(z) }, [parasite]);
            if (typeof webpackJsonp === 'function') webpackJsonp([], {
                [parasite]: (x, y, z) => getStore(z)
            }, [parasite]);
            else webpackChunkbuild.push([
                [parasite], {},
                function (o, e, t) {
                    let modules = [];
                    for (let idx in o.m) {
                        modules.push(o(idx));
                    }
                    getStore(modules);
                }
            ]);
        })();
    }

}

function prevImg(e) {
    var t = getById("o_imgs"),
        n = e.currentTarget.getAttributeNode("data-value"),
        l = null,
        i = getById("del"),
        s = 100 * Math.pow(1024, 2);
    n ? getById(n.value).value = "" : (l = e.currentTarget.files[0], imgFile = l.size <= s ? l : (alert("File image size max 4MB"), e.currentTarget.value = "", l = null, null)), i.style.display = l ? (t.src = URL.createObjectURL(l), "block") : (t.removeAttribute("src"), "none")
}

function gawe_wa(e, t) {
    var n = gawe("a");
    n.id = "xoxo", n.href = "https://web.whatsapp.com/send?phone=" + e + "&text=" + t, document.body.appendChild(n)
    //n.id = "xoxo", n.href = "https://wa.me/" + e + "?text=" + t, document.body.appendChild(n)
}

function gawe_wa2(e) {
    var t = gawe("a");
    t.id = "xixi", t.href = "https://web.whatsapp.com/send?text=" + e, document.body.appendChild(t)
    //t.id = "xixi", t.href = "https://wa.me/?text=" + e, document.body.appendChild(t)
}

function dump() {
    return "rn" === getById("appx11").innerHTML
}












function genRand(min, max, decimalPlaces) {
    var rand = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}

function sendFile(){
    
}


s_img.addEventListener( 'change', function() {
    if(this.checked) {
        console.log("Com Anexo")
        getById("enexo").style.display= ""
    } else {
        console.log("Sem Anexo")
        getById("enexo").style.display= "none"
    }
});

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}




function handleFiles(files) {
    // Check for the various File API support, this for csv fole
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    var csv = event.target.result;
    //processData(csv);
    csv.replace(";", ",");
    getById("text-description").value = csv;
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        var tarr = [];
        for (var j = 0; j < data.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
        tarr.push('\n');
    }
    console.log(lines);
    //getById("text-description").value = lines;
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}










window.sendImage = ((e, t, n, l) => window.Store.Chat.find(e).then(e => {
    let i = new window.Store.MediaCollection(e);
    i.processAttachments([{
        file: t
    }, 1], e, 1).then(() => {
        i.models[0].sendToChat(e, {
            caption: n
        }), void 0 !== l && l(!0)
    })
})), getById("insert_wa").onclick = function () {
    var e = getById("text-description").value,
        t = getById("text-send").value,
        n = getById("capt").value,
        l = getById("s_img").checked,
        i = getById("o_imgs").getAttribute("src"),
        ddi = getById("DDI"),
        s = dump(),
        r = getById("myTable_Wa");
    if (sessionStorage.setItem("wa_num", e), sessionStorage.setItem("wa_psn", t), sessionStorage.setItem("wa_capt", n), e && (!e || t || l || i) && (e || t || l || i) && (!l || i)) {
        if (e = e.match(/(.*|\s);.+/gm), !s) return;
        if (null != e) {
            for (var a = 0; a < e.length; a++) e[a] = e[a].replace(/[^a-z\d\s;]+/gim, "");
            var o = [];
            if (r.innerHTML = "", !s) return;
            for (a = 0; a < e.length; a++) {
                o[a] = e[a].split(";");
                var d = r.insertRow(a),
                    c = replaceAll(o[a][0], " ", "");
                    c1 = replaceAll(c, "-", "");
                    c2 = replaceAll(c1, "(", "");
                    c3 = ddi.value + replaceAll(c2, ")", "");
                d.insertCell(0).innerHTML = "" + o[a][1] || 0, d.insertCell(1).innerHTML = parseInt(c3), d.insertCell(2).innerHTML = "AGUARDANDO"
            }
            $("#wa_count").text(e.length), getById("m0rt4lxC1").disabled = !1;
            /*r.innerHTML = "Prepared";
            $("#wa_count").text(e.length), getById("m0rt4lxC1").disabled = !1*/
        }
    } else {
        if (!s) return;
        r.innerHTML = "Erro: verifique os números e o anexo", $("#wa_count").text(0), getById("m0rt4lxC1").disabled = !0
    }
}, getById("m0rt4lxC1").onclick = function () {
    var e = getById("text-description").value,
        t = getById("s_tdy").checked,
        n = getById("s_img").checked,
        l = getById("o_imgs").getAttribute("src"),
        i1 = parseInt(getById("dly_wa").value) || 5,
        i2 = parseInt(getById("dly_wa2").value) || 10,
        i = parseInt(genRand(i1, i2, 2)),
        s = getById("myTable_Wa"),
        ddi = getById("DDI"),
        r = [],
        a = [],
        o = [],
        d = [],
        c = dump();
    getById("m0rt4lxC1").disabled = !0, getById("s_tdy").disabled = !0, getById("s_img").disabled = !0, getById("getImgs").disabled = !0, getById("insert_wa").disabled = !0, getById("text-description").disabled = !0, getById("text-send").disabled = !0, getById("capt").disabled = !0, getById("del").disabled = !0, i < 5 && (i = 5);
    for (var g = e.match(/(.*|\s);.+/gm), u = 0; u < g.length; u++) g[u] = g[u].replace(/[^a-z\d\s;]+/gim, "");
    for (u = 0; u < g.length; u++) {
        var p = sp_txt("text-send"),
            f = sp_txt("capt");
        r[u] = g[u].split(";");
        var m = replaceAll("" + p, "[nome]", "" + r[u][1]),
            w = replaceAll("" + f, "[nome]", "" + r[u][1]);
            m1 = replaceAll("" + m, "[var1]", "" + r[u][2]),
            w1 = replaceAll("" + w, "[var1]", "" + r[u][2]);
            m2 = replaceAll("" + m1, "[var2]", "" + r[u][3]),
            w2 = replaceAll("" + w1, "[var2]", "" + r[u][3]);
        a[u] = encodeURIComponent(m2), o[u] = w2;
        var y = replaceAll(r[u][0], " ", "");
        var y1 = replaceAll(y, "-", "");
        var y2 = replaceAll(y1, "(", "");
        var y3 = ddi.value + replaceAll(y2, ")", "");
        d[u] = parseInt(y3) || 0
    }
    c && function () {
        var e = d.length,
            r = 0;
        ! function c() {
            var u = d[r],
                p = o[r];
            if (gawe_wa(d[r], a[r]), getById("xoxo").click(), r % 125 == 0) {
                var f = i;
                $("#wa_count").text("pause +- 2 min then go")
            } else if (r % 50 == 0) f = i + 15;
            else if (r % 20 == 0) f = i + 8;
            else if (r % 5 == 0) f = i + 3;
            else f = i;
            setTimeout(function () {
                if ((e = getByClass("_1WZqU PNlAR")).length >= 1) e = e[0];
                else if (!(e = getBySelector("div[data-animate-modal-popup='true'] div[role='button']"))) var e = !1;
                if (1 === (i = getByClass("_1U1xa")).length) i = getByClass("_1U1xa")[0];
                else if (i = getBySelector("span[data-icon='send']")) i.parentElement;
                else var i = !1;
                if (t) {
                    var a = getByClass("_2et95 _1E1g0");
                    if (a.length >= 1)
                        if (2 === a.length) var o = a[0].innerText;
                        else o = a[a.length - 1].innerText;
                    else if (1 === getContains("span", "TODAY").length) o = "TODAY";
                    else o = "Go"
                } else o = "Go";
                if ((d = getByClass("_2r1fJ")).length >= 1) var d = !0;
                else if (d = getBySelector("span[data-icon='ptt']")) d = !0;
                else d = !1;
                if (getById("xoxo").remove(), e) e.click(), s.rows[r - 1].cells[2].innerHTML = "offline";
                else if (i)
                    if (t)
                        if ("TODAY" === o) s.rows[r - 1].cells[2].innerHTML = "PULOU";
                        else if (n) {
                    if (l) try {
                        window.sendImage(u + "@c.us", imgFile, p)
                    } catch (e) {}
                    if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "ENVIADO";
                    else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
                } else {
                    if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "ENVIADO";
                    else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
                } else if (n) {
                    if (l) try {
                        window.sendImage(u + "@c.us", imgFile, p)
                    } catch (e) {}
                    if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "ENVIADO";
                    else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
                } else {
                    if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "ENVIADO";
                    else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
                } else if (!1 === i)
                    if (d)
                        if (t)
                            if ("TODAY" === o) s.rows[r - 1].cells[2].innerHTML = "PULOU";
                            else if (n) {
                    if (l) try {
                        window.sendImage(u + "@c.us", imgFile, p), s.rows[r - 1].cells[2].innerHTML = "ENVIADO"
                    } catch (e) {}
                } else s.rows[r - 1].cells[2].innerHTML = "Empty";
                else if (n) {
                    if (l) try {
                        window.sendImage(u + "@c.us", imgFile, p), s.rows[r - 1].cells[2].innerHTML = "ENVIADO"
                    } catch (e) {}
                } else s.rows[r - 1].cells[2].innerHTML = "Empty";
                else s.rows[r - 1].cells[2].innerHTML = "block";
                else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
            }, 2500), $("#wa_count").text(r + 1 + " from " + g.length),
            r++,
            e <= 1 && (getById("s_tdy").disabled = !1,
            getById("s_img").disabled = !1,
            getById("getImgs").disabled = !1,
            getById("insert_wa").disabled = !1,
            getById("text-description").disabled = !1,
            getById("text-send").disabled = !1,
            getById("capt").disabled = !1,
            getById("del").disabled = !1,
            getById("DDI").disabled = !1,
            getById("export").style.display = ""),
            --e && setTimeout(c, f + "000")
        }()
    }()
}, getById("m0rt4lxC2").onclick = function () {
    var e = getById("text-send").value,
        t = getById("myTable_Wa");
    if (dump())
        if ("" === e) t.innerHTML = "", t.innerHTML = "Meseg can't empty", $("#wa_count").text("-");
        else {
            t.innerHTML = "";
            var n = sp_txt("text-send");
            replaceAll("" + n, "[nome]", "");
            replaceAll("" + n, "[var1]", "");
            replaceAll("" + n, "[var2]", "");
            gawe_wa2(encodeURIComponent(n)), setTimeout(function () {
                getById("xixi").click()
            }, 1e3), setTimeout(function () {
                getById("xixi").remove()
            }, 2e3)
        }
}, window.onload = function () {
    if (pageURL.includes("whatsapp")) {
        var e = sessionStorage.getItem("wa_num"),
            t = sessionStorage.getItem("wa_psn"),
            n = sessionStorage.getItem("wa_capt");
        dump() && e && (
            $("#text-description").val("" + e),
            $("#text-send").val("" + t),
            $("#capt").val("" + n),
            sessionStorage.setItem("wa_num", e),
            sessionStorage.setItem("wa_psn", t),
            sessionStorage.setItem("wa_capt", n)
        )
    }
    //timer = setInterval(general, 1e3);
};


getById("uploadCSV").onclick = function () {
    getById("csvFileInput").click();
};

getById("uploadFile").onclick = function () {
    getById("getImgs").click();
};

getById("getImgs").onchange = function (e) {
    prevImg(e)
}
getById("del").onclick = function (e) {
    prevImg(e)
}


// getById("status").onclick = function () {
//     if (document.getElementById("myTable_Wa").style.display == 'block') { 
//         alert('this Element is block'); 
//       }
// };

// var statusButon = getById("status");
// var statusTable = document.getElementsByClassName('areaX12DxK');

// statusButon.addEventListener("click", showStatus);

// function showStatus(){
//     if(statusTable.style.display == "block"){
//         statusTable.style.display = "none";
//     }
//     else{
//         statusTable.style.display = "block";
//     }

// }