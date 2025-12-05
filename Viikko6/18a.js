const prompt = require('prompt-sync')();

//Tee Javascriptilla ohjelma, joka kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman.
function vertaa(a,b){
    if(a > b){
        return a;
    }
    if (b > a){
        return b;
    }
    return 'Luvut ovat yhtä suuret';
}

    let a = parseFloat(prompt("Anna eka numero:"));
    let b = parseFloat(prompt("Anna toka numero:"));

    console.log("Suurempi luku on: " + vertaa(a,b));