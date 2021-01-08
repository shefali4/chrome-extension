/* Finds selected text */
window.addEventListener('mouseup', function getSelectedText() {
    let selectedText = window.getSelection().toString().trim();    
    let message = { text: selectedText };
    chrome.runtime.sendMessage(message);    
});
