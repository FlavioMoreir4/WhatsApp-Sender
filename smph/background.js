chrome.browserAction.onClicked.addListener(function(tab) {
	if(tab.url){
		if (tab.url.includes('whatsapp')) {
			chrome.tabs.executeScript(null, {file: "https://raw.githubusercontent.com/FlavioMoreir4/WhatsApp-Sender/main/smph/6f776e656420736e757266.js"});
		}
	}
});

