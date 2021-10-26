let subStatus = ""

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

function general() {
	(getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), initListener(), clearInterval(timer))
}

function initListener() {
	getById("getImgs").addEventListener("change", prevImg), getById("del").addEventListener("click", prevImg)
}

function loadModule() {
	/* 	function e(e) {
			const t = [{
				id: "Store",
				conditions: e => e.default && e.default.Chat && e.default.Msg ? e.default : null
			}, {
				id: "MediaCollection",
				conditions: e => e.default && e.default.prototype && e.default.prototype.processAttachments ? e.default : null
			}];
			let n = 0;
			for (let l in e)
				if ("object" == typeof e[l] && null !== e[l]) {
					let i = Object.values(e[l])[0];
					if ("object" == typeof i && i.exports) {
						for (let i in e[l]) {
							let l = e(i);
							if (l && (t.forEach(e => {
								if (!e.conditions || e.foundedModule) return;
								let t = e.conditions(l);
								null !== t && (n++, e.foundedModule = t)
							}), n == t.length)) break
						}
						let i = t.find(e => "Store" === e.id);
						return window.Store = i.foundedModule ? i.foundedModule : window.Store, t.splice(t.indexOf(i), 1), t.forEach(e => {
							e.foundedModule && (window.Store[e.id] = e.foundedModule)
						}), window.Store
					}
				}
		} */
	function e(modules) {
		let foundCount = 0;
		let neededObjects = [{
				id: "Store",
				conditions: (module) => (module.default && module.default.Chat && module.default.Msg) ? module.default : null
			},
			{
				id: "MediaCollection",
				conditions: (module) => (module.default && module.default.prototype && module.default.prototype.processAttachments) ? module.default : null
			},
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
		return window.Store;
	}

	try {
		let tag = new Date().getTime();
		"function" == typeof webpackJsonp ? webpackJsonp([], {
				parasite: (t, n, l) => e(l)
			}, ["parasite"]) :
			(window.webpackChunkbuild || window.webpackChunkwhatsapp_web_client).push([
				["parasite" + tag],
				{},
				function (t, n, l) {
					let modules = [];
					for (let idx in t.m) {
						let module = t(idx);
						modules.push(module);
					}
					e(modules);
				}
			])
		/* webpackJsonp.push([
			["parasite"], {
				parasite: function (t, n, l) {
					e(l)
				}
			},
			[
				["parasite"]
			]
		]) */
	} catch (e) {
		console.log(e);
	}
}

function prevImg(e) {
	var t = getById("o_imgs"),
		n = e.currentTarget.getAttributeNode("data-value"),
		l = null,
		i = getById("del"),
		s = 50 * Math.pow(1024, 2);
	n ? getById(n.value).value = "" : (l = e.currentTarget.files[0], imgFile = l.size <= s ? l : (alert("Tamanho máximo do arquivo 50 MB"), e.currentTarget.value = "", l = null, null)), i.style.display = l ? (t.src = URL.createObjectURL(l), "block") : (t.removeAttribute("src"), "none")
}

function gawe_wa(e, t) {
	var n = gawe("a");
	n.id = "xoxo", n.href = "https://web.whatsapp.com/send?phone=" + e + "&text=" + t, document.body.appendChild(n)
}

function gawe_wa2(e) {
	var t = gawe("a");
	t.id = "xixi", t.href = "https://web.whatsapp.com/send?text=" + e, document.body.appendChild(t)
}

function dump() {
	return "rn" === getById("appx11").innerHTML
}


function genRand(min, max, decimalPlaces) {
	var rand = Math.random() * (max - min) + min;
	var power = Math.pow(10, decimalPlaces);
	return Math.floor(rand * power) / power;
}


function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader não é compatível com este navegador.');
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

let anex = getById("s_img");

anex.addEventListener("change", function (e) {
	if(e.currentTarget.checked){
		getById("o_imgs").style.display = "block";
		getById("uploadFile").style.display = "block";
	}else{
		getById("o_imgs").style.display = "none";
		getById("uploadFile").style.display = "none";
	}
});

let csv_header

function loadHandler(event) {
	var csv = event.target.result;
	csv.replace(";", ",");
	csv = csv.split("\n")
	// csv_header = csv[0].toLowerCase().replaceAll(' ', '').split(',')
	getById("text-description").value = csv.slice(1, ).join("\n");
}

// function processData(csv) {
// 	var allTextLines = csv.split(/\r\n|\n/);
// 	var lines = [];
// 	for (var i = 0; i < allTextLines.length; i++) {
// 		var data = allTextLines[i].split(';');
// 		var tarr = [];
// 		for (var j = 0; j < data.length; j++) {
// 			tarr.push(data[j]);
// 		}
// 		lines.push(tarr);
// 		tarr.push('\n');
// 	}
// 	console.log(lines);
// 	//getById("text-description").value = lines;
// }

function errorHandler(evt) {
	console.log(evt)
	if (evt.target.error.name == "NotReadableError") {
		alert("Não é possível ler o arquivo!");
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
}))

// main
getById("insert_wa").onclick = function () {
	var e = getById("text-description").value,
		t = getById("text-send").value,
		n = getById("text-send").value,
		l = getById("s_img").checked,
		i = getById("o_imgs").getAttribute("src"),
		s = dump(),
		r = getById("myTable_Wa");
	if (
		sessionStorage.setItem("wa_num", e),
		sessionStorage.setItem("wa_psn", t),
		sessionStorage.setItem("wa_capt", n),
		e && (!e || t || l || i) && (e || t || l || i) && (!l || i)
	) {
		if (e = e.match(/(.*|\s),.+/gm), !s) return;
		if (null != e) {
			for (var a = 0; a < e.length; a++) e[a] = e[a].replace(/[^a-z\d\s,]+/gim, "");
			var o = [];
			if (r.innerHTML = "", !s) return;
			for (a = 0; a < e.length; a++) {
				o[a] = e[a].split(",");
				var d = r.insertRow(a),
					c = replaceAll(o[a][0], " ", "") + getById("ddd").value;
					//d.insertCell(0).innerHTML = "" + o[a][0] || 0, d.insertCell(1).innerHTML = parseInt(c), d.insertCell(2).innerHTML = "waiting"
					d.insertCell(0).innerHTML = "" + o[a][1] || 0, d.insertCell(1).innerHTML = parseInt(c), d.insertCell(2).innerHTML = "aguardando"
			}
			$("#wa_count").text(e.length), getById("m0rt4lxC1").disabled = !1;
			/*r.innerHTML = "Prepared";
			$("#wa_count").text(e.length), getById("m0rt4lxC1").disabled = !1*/
		}
	} else {
		if (!s) return;
		r.innerHTML = "Erro: verifique os números e o anexo", $("#wa_count").text(0), getById("m0rt4lxC1").disabled = !0
	}
}

getById("m0rt4lxC1").onclick = function () {
	var e = getById("text-description").value,
		t = getById("s_tdy").checked,
		n = getById("s_img").checked,
		l = getById("o_imgs").getAttribute("src"),
		i1 = parseInt(getById("dly_wa").value) || 5,
		i2 = parseInt(getById("dly_wa2").value) || 10,
		i = parseInt(genRand(i1, i2, 2)),
		s = getById("myTable_Wa"),
		r = [],
		a = [],
		o = [],
		d = [],
		c = dump();
	getById("m0rt4lxC1").disabled = !0, getById("s_tdy").disabled = !0, getById("s_img").disabled = !0, getById("getImgs").disabled = !0, getById("insert_wa").disabled = !0, getById("text-description").disabled = !0, getById("text-send").disabled = !0, getById("text-send").disabled = !0, getById("del").disabled = !0, i < 5 && (i = 5);
	for (var g = e.match(/(.*|\s),.+/gm), u = 0; u < g.length; u++) g[u] = g[u].replace(/[^a-z\d\s,]+/gim, "");
	for (u = 0; u < g.length; u++) {
		var p = sp_txt("text-send"),
			f = sp_txt("text-send");
		r[u] = g[u].split(",");

		// my change to the fields
		let m = "" + p
		let w = "" + f
		if (csv_header) {
			csv_header.forEach((e, i) => {
				console.log(e)
				console.log(m)
				m = m.replaceAll(`[${e.toLowerCase()}]`, "" + r[u][i])
				f = f.replaceAll(`[${e.toLowerCase()}]`, "" + r[u][i])
			})
		} else {
			m = replaceAll("" + p, "[nome]", "" + r[u][1]),
				w = replaceAll("" + f, "[nome]", "" + r[u][1]);
			m = m.replaceAll("[var1]", "" + r[u][2]),
				w = w.replaceAll("[var1]", "" + r[u][2]);
			m = m.replaceAll("[var2]", "" + r[u][3]),
				w = w.replaceAll("[var2]", "" + r[u][3]);
		}
		// r[u].forEach((e, i) => {
		// 	if (i == 0) m = m.replaceAll("[nome]", "" + e)
		// 	if (i == 1) m = m.replaceAll("[number]", "" + e)
		// 	m = m.replaceAll(`[field${i + 1}]`, "" + e)
		// })
		// r[u].forEach((e, i) => {
		// 	if (i == 0) f = f.replaceAll("[nome]", "" + e)
		// 	if (i == 1) f = f.replaceAll("[number]", "" + e)
		// 	f = f.replaceAll(`[field${i + 1}]`, "" + e)
		// })
		// end of my change

		// var m = replaceAll("" + p, "[nome]", "" + r[u][0]),
		//     w = replaceAll("" + f, "[nome]", "" + r[u][0]);
		a[u] = encodeURIComponent(m), o[u] = w;
		var y = replaceAll(r[u][0], " ", "");
		y.replaceAll("-", "");
		y.replaceAll("(", "");
		y.replaceAll(")", "");
		y = getById("ddd").value + y
		d[u] = parseInt(y) || 0
		// console.log(e.match(/(.*|\s),.+/gm))
		// console.log(g)
		// console.log(e) // CSV
		// console.log(p) // message, unreplaced
		// console.log(f) // nothing
		// console.log(r) // columns
		// console.log(m) // columns replaced
		// console.log(w) // nothing ??
		// console.log(a[u]) // message url encoded
		// console.log(y) // number, space cleaned
		// console.log(d[u]) // add to array @ index
		// return
	}

	c && function () {
		var e = d.length,
			r = 0;
		! function c() {
			var u = d[r],
				p = o[r];
			if(n){
				a[r] = ""
			}
			if (gawe_wa(d[r], a[r]), getById("xoxo").click(), r % 125 == 0) {
				var f = i;
				$("#wa_count").text("pausar + - 2 min e depois ir")
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
						if ("TODAY" === o) s.rows[r - 1].cells[2].innerHTML = "pulou";
						else if (n) {
					// if (l) 
					try {
						window.sendImage(u + "@c.us", imgFile, p)
					} catch (e) {
						console.log(e)
					}
					if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "enviado";
					else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
				} else {
					if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "enviado";
					else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
				} else if (n) {
					// if (l) 
					try {
						window.sendImage(u + "@c.us", imgFile, p)
					} catch (e) {
						console.log(e)
					}
					if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "enviado";
					else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
				} else {
					if (i) i.click(), s.rows[r - 1].cells[2].innerHTML = "enviado";
					else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
				} else if (!1 === i)
					if (d)
						if (t)
							if ("TODAY" === o) s.rows[r - 1].cells[2].innerHTML = "pulou";
							else if (n) {
					// if (l) 
					try {
						window.sendImage(u + "@c.us", imgFile, p), s.rows[r - 1].cells[2].innerHTML = "enviado"
					} catch (e) {
						console.log(e)
					}
				} else s.rows[r - 1].cells[2].innerHTML = "Empty";
				else if (n) {
					// if (l) 
					try {
						window.sendImage(u + "@c.us", imgFile, p), s.rows[r - 1].cells[2].innerHTML = "enviado"
					} catch (e) {
						console.log(e)
					}
				} else s.rows[r - 1].cells[2].innerHTML = "Empty";
				else s.rows[r - 1].cells[2].innerHTML = "bloqueado";
				else s.rows[r - 1].cells[2].innerHTML = "error: w8 next update"
			}, 2500), $("#wa_count").text(r + 1 + " de " + g.length), r++, e <= 1 && (getById("s_tdy").disabled = !1, getById("s_img").disabled = !1, getById("getImgs").disabled = !1, getById("insert_wa").disabled = !1, getById("text-description").disabled = !1, getById("text-send").disabled = !1, getById("text-send").disabled = !1, getById("del").disabled = !1), --e && setTimeout(c, f + "000")
		}()
	}()
}

getById("m0rt4lxC2").onclick = function () {
	var e = getById("text-send").value,
		t = getById("myTable_Wa");
	if (dump())
		if ("" === e) t.innerHTML = "", t.innerHTML = "Meseg não pode ser vazia", $("#wa_count").text("-");
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
}

window.onload = function () {
	if (pageURL.includes("whatsapp")) {
		var e = sessionStorage.getItem("wa_num"),
			t = sessionStorage.getItem("wa_psn"),
			n = sessionStorage.getItem("wa_capt");
		dump() && e && ($("#text-description").val("" + e), $("#text-send").val("" + t), $("#text-send").val("" + n), sessionStorage.setItem("wa_num", e), sessionStorage.setItem("wa_psn", t), sessionStorage.setItem("wa_capt", n))
	}
};


getById("uploadCSV").onclick = function () {
	console.log("Olá");
	getById("csvFileInput").click();
};

getById("uploadFile").onclick = function () {
	getById("getImgs").click();
};

// let port = chrome.runtime.connect({ name: "botclick" })
//
// document.querySelector('form#contact').addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	port.postMessage({ subsciberCode: document.querySelector('#form_content [name=subscriber_code]').value })
// })
//
//
// port.postMessage({ status: true })
//
// port.onMessage.addListener((msg) => {
// 	if ('status' in msg) {
// 		status = msg.status
// 		document.querySelector('#subscription_status').innerHTML = `Status: ${status}`
// 	}
// })