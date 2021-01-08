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

// document.addEventListener('DOMContentLoaded', function showWordDef() {
//
//     url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`+'?key=19a10fa7-7b46-4de5-b613-d1e62bd64aaa';
//
//     fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         document.getElementById("definitionArea").innerText = data.shortdef;
//     })
// });

document.addEventListener('DOMContentLoaded', function getAffirmation() {

    fetch('https://www.affirmations.dev/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("affirm").innerText = data.affirmation;
    })
});
