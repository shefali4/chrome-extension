var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word.trim();

//Call to dictionary API to find definition of words
document.addEventListener('DOMContentLoaded', function showWordDef() {

    let apiKey = 'Token efc20355eeff4240ed48b212bb718c31409cf560';
    let url = `https://owlbot.info/api/v4/dictionary/${word}`.toLowerCase();
    document.getElementById("wordArea").innerText = `${word}`;


    fetch(url, { method: 'GET', headers: { "Authorization": apiKey}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("definitionArea").innerText = data.definitions[0].definition;
    })
    .catch(error => {
        document.getElementById("definitionArea").innerText = "No definition found. Please use search feature!";
      })
});

//Call to affirmation API to provide positive quotes
document.addEventListener('DOMContentLoaded', function getAffirmation() {

    fetch('https://www.affirmations.dev/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("affirm").innerText = data.affirmation;
    })
});
