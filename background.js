chrome.runtime.onMessage.addListener(receiver);

chrome.runtime.onInstalled.addListener(installScript);

function receiver(request) {
    word = request.text;
}
