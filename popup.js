var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word.trim();

document.addEventListener('DOMContentLoaded', function showWordDef() {

    let apiKey = 'Token efc20355eeff4240ed48b212bb718c31409cf560';
    let url = `https://owlbot.info/api/v4/dictionary/${word}`.toLowerCase();

    fetch(url, { method: 'GET', headers: { "Authorization": apiKey}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("definitionArea").innerText = data.definitions[0].definition;
    })
});

document.addEventListener('DOMContentLoaded', function getAffirmation() {

    fetch('https://www.affirmations.dev/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("affirm").innerText = data.affirmation;
    })
});
