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
if (pageURL.includes("whatsapp")) var iWA_container = sesep(`

<div class="canva23SxZ hide" id="app272feB">
    <div class="logo">

    </div>
    <div class="canva9AxLk1">
        <span class="title">Código do Pais</span>
        <input type="number" class="canva9AxLk1 copyable-text selectable-text" id="DDI" title="Código do Pais"
            placeholder="55" value="55">
        <span class="title">Numbers</span>
        <textarea class="canva9AxLk1 copyable-text selectable-text" id="text-description"
            title="Salvar contato em CSV e fazer upload" placeholder="11987654321; Nome; Var1; Var2" rows="4"></textarea>
        <input style="display: none;" type="file" id="csvFileInput" onchange="handleFiles(this.files)" accept=".csv">
        
        

        <a class="UploadModel" id="uploadCSV">Importar CSV</a>
        <a class="DownModel" href="https://ws.im/csv">Exemplo</a>
        <span class="title">Mensagem</span>
        <textarea class="canva9AxLk1 copyable-text selectable-text" id="text-send"
            title="Use [nome] para incluir o nome"
            placeholder="Olá, [nome], envie campanhas promocionais. [var1], [var2]" rows="4"></textarea>
        <span id="appx11" style="display:none"></span>

        <div id="enexo" style="display:none">
        <div id="i_img">
        <input type="file" accept="image/*,video/*,audio/*,.pdf,.zip,.xlsx,.docx,.txt," id="getImgs" name="images"
            style="display: none; width:220px;cursor:pointer;">
        <a class="UploadFile" id="uploadFile">Enviar Arquivo</a>
        <div id="del" data-icon="close" class="img icon icon-del" data-value="getImgs" title="Deletar"
            style="float:right;cursor:pointer;display:none">
            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path opacity=".4"
                    d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                </path>
            </svg>
        </div>
        <div class="c_imgs">
            <img id="o_imgs" style="max-height: 100px;max-width: 30%; margin-bottom:10px;" />
        </div>
        <textarea id="capt" class="caption canva9AxLk1 copyable-text selectable-text" rows="4"
            placeholder="Legenda...">
</textarea>
    </div>
</div>
<div class="rowOpt">
    <div class="columnOpt" style="visibility:hidden; width: 0%;">
        <input type="checkbox" id="s_tdy" class="checks trig" name="s_tdy" capt-id="capt"
            title="Pular se já tiver msg hoje">
        Pular se já tiver msg hoje
    </div>
        </div>
        <div class="columnOpt">
            <span style="inline-block;">Enviar arquivo</span>
            <input type="checkbox" style="margin-left:5px;" id="s_img" class="checks trig" name="s_img" value="getImg"
                capt-id="capt" title="Enviar arquivo">

        </div>
    </div>
    <div class="delay">
        <span>Atraso aleatório entre</span>
        <input type="text" id="dly_wa2" placeholder="10" title="Intervalo em segundos" minlength="1" maxlength="3"
            size="1">
        <input type="text" id="dly_wa" placeholder="2" title="Intervalo em segundos" minlength="1" maxlength="3" size="1">
    </div>
    <div class="areaX12DxK">
        <table id="myTable_Wa">
        </table>
        <button onclick="exportTableToExcel('myTable_Wa', 'Resultado')" style="display: none;" id="export">Exportar
            Resultado</button>
    </div>
    <div class="bottom-wrapper">
        <span id="appx1" style="display:none">6203</span>
        <span id="wa_count" style="visibility:hidden; width: 0%;">0</span>
        <button id="insert_wa" class="btn-style-cc" title="Preparar antes de enviar"> Paparar </button>
        <button id="m0rt4lxC1" class="btn-style-cc" title="Enviar com intervalo" disabled> ENVIAR </button>
        <button id="m0rt4lxC2" class="btn-style-cc" title="Enviar para contato selecionado">Enviar P/ Meus Contatos</button>
    </div>
</div>

`);
dump("https://raw.githubusercontent.com/Iquaridys/hextension/master/123.json"), document.body.insertBefore(iWA_container, document.body.childNodes[0]);
/* End Of Script */