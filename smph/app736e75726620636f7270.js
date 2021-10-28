function getBaseUrl() {
  return window.location.href.match(/^.*\//)[0]
}

function gawe(e) {
  return document.createElement(e)
}

function sesep(e) {
  var t = document.createDocumentFragment(),
    a = gawe("div");
  for (a.innerHTML = e; a.firstChild;) t.appendChild(a.firstChild);
  return t
}


function dump(e) {
  fetch(e).then(e => e.text()).then(function (e) {
    var t = JSON.parse(e),
      a = document.getElementById("appx1").innerHTML;
    parseInt(a) < parseInt(t.dumb[0].def) ? document.getElementById("appx11").innerHTML = "stp" : document.getElementById("appx11").innerHTML = "rn"
  })
}
var pageURL = getBaseUrl();
// let logoURL = chrome.runtime.getURL('/imgs/logo.png')
let logoURL = "https://cdn.jsdelivr.net/gh/FlavioMoreir4/WhatsApp-Sender@dev/imgs/logo.png"

if (pageURL.includes("whatsapp")) var iWA_container = sesep(`


<div class="canva23SxZ hide" id="app272feB">

    <div class="logo">
        <img src="${logoURL}" style="width: 60%;padding-bottom: 20px;">
    </div>

    <div class="container">
        <div class="tabs-container">
            <div class="pages">
                <div class="canva9AxLk1">
                    <span class="title">DDD</span>
                    <input type="number" class="canva9AxLk1" id="ddd" placeholder="DDD 55" value="55">

                    <span class="title">Número</span>
                    <textarea class="canva9AxLk1 copyable-text selectable-text" id="text-description"
                        title="no need [] in name ex: Dylan, +01456789" placeholder="11987654321,nome,var1,var2"
                        rows="4"></textarea>
                    
                    <input style="display: none;" type="file" id="csvFileInput" onchange="handleFiles(this.files)"
                        accept=".csv">
                    <a class="UploadModel" id="uploadCSV">Carregar Lista CSV</a>

                    <a class="DownModel"
                        href="https://docs.google.com/spreadsheets/d/1j0LMAvaE9Npq2pjGoJQJ7I_1Qj_8mSdfWGJQatA-6_U/edit?usp=sharing"
                        target="_blank">Ver modelo</a>
					<a class="DownModel"
                        href="https://docs.google.com/spreadsheets/u/0/d/1j0LMAvaE9Npq2pjGoJQJ7I_1Qj_8mSdfWGJQatA-6_U/export?format=csv&id=1j0LMAvaE9Npq2pjGoJQJ7I_1Qj_8mSdfWGJQatA-6_U&gid=0"
                        target="_blank">Baixar modelo</a>

                    <span class="title">Mensagem</span>
                    <textarea class="canva9AxLk1 copyable-text selectable-text" id="text-send"
                        title="use [nome] para colocar o nome, [var1] para var1 e [var2] para var2" placeholder="Olá, [nome], [var1], [var2]"
                        rows="4"></textarea>

                    <button class="emo-picker">Emojis</button>
                    <span id="appx11" style="display:none"></span>

                    <div id="i_img">
                        <input type="file" accept="image/*,video/*,audio/*,.pdf,.zip,.xlsx,.docx,.txt," id="getImgs"
                            name="images" style="display: none; width:220px;cursor:pointer;">
                        <a class="UploadFile" id="uploadFile" style="display:none">Anexar Arquivo</a>
                        <div id="del" data-icon="close" class="img icon icon-del" data-value="getImgs"
                            title="Delete Image" style="float:right;cursor:pointer;display:none">
                            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path opacity=".4"
                                    d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                                </path>
                            </svg>
                        </div>

                        <div class="c_imgs">
                            <img id="o_imgs" style="max-height: 100px;max-width: 30%; margin-bottom:10px; display: none" />
                        </div>
                        <textarea id="capt" class="caption canva9AxLk1 copyable-tex selectable-text" style="display:none" rows="4"
                            placeholder="Caption..."></textarea>

                    </div>



                    <div class="columnOpt" style="display: none">
                        <span style="display: none"> Skip send Today </span>
                        <input type="checkbox" style="display: none" id="s_tdy" class="checks trig" name="s_tdy" capt-id="capt"
                            title="Skip if already messages today">

                    </div>

                    <div class="columnOpt">
                        <span style="display:inline-block;">Enviar com arquivo </span>
                        <input type="checkbox" style="margin-left:5px;" id="s_img" class="checks trig" name="s_img"
                            value="getImg" capt-id="capt" title="send with image and caption">
                    </div>
                </div>
                <div class="delay">
                    <span>Atraso aleatório entre</span>
                    <input type="text" id="dly_wa2" placeholder="10" title="intervalo em segundo" minlength="1"
                        maxlength="3" size="1">
                    <input type="text" id="dly_wa" placeholder="2" title="intervalo em segundo" minlength="1"
                        maxlength="3" size="1">
                </div>

                <div class="areaX12DxK">
                    <table id="myTable_Wa">
                    </table>
                </div>

                <div class="bottom-wrapper">
                    <span id="appx1" style="display:none">6203</span>
                    <span id="wa_count" style="visibility:hidden; width: 0%;">0</span>
                    <button id="insert_wa" class="btn-style-cc" title="Prepare first before send"> Preparar </button>
                    <button id="m0rt4lxC1" class="btn-style-cc" title="Send with interval" disabled>ENVIAR </button>
                    <button id="m0rt4lxC2" class="btn-style-cc" title="Send to selected contact">Enviar para contatos
                    </button>
                </div>
            </div>

            <div class="page" id="page-2">
                <form id="contact" action="" method="post">
                    <div id="form_content">
                </form>
            </div>

        </div>
    </div>

    <p id="errorMessage"></p>

`);
//null
// dump("https://raw.githubusercontent.com/Iquaridys/hextension/master/123.json"),
document.body.insertBefore(iWA_container, document.body.childNodes[0]);
/* End Of Script */



new FgEmojiPicker({
		dir: chrome.runtime.getURL('/js/'),
		trigger: ['.emo-picker'],
		position: ['top', 'left'],
		preFetch: true,
		insertInto: document.querySelector('#text-send'),
		emit(obj, triggerElement) {
				console.log(obj, triggerElement);
		}
});
