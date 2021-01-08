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

        //Getting example, pronounciation, word, definition, image, etc.
        if (!(data.pronunciation == `${word}`)) {
            document.getElementById("pronounce").innerText = data.pronunciation;
        } 
        
        document.getElementById("exampleArea").innerText = data.definitions[0].example;
        document.getElementById("typeArea").innerText = data.definitions[0].type;
        document.getElementById("definitionArea").innerText = data.definitions[0].definition;
        document.getElementById("imageArea").src = data.definitions[0].image_url;
        document.getElementById("imageArea").setAttribute("src", data.definitions[0].image_url);
        
        if (data.definitions[0].image_url == null) {
            document.getElementById("imageArea").setAttribute("src", "Default.png");
        }
    })

    //Error handling
    .catch(error => {
        document.getElementById("definitionArea").innerText = "No definition found. Please use search feature!";
        document.getElementById("exampleArea").innerText = "No example found";
        document.getElementById("imageArea").setAttribute("src", "Default.png");
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
