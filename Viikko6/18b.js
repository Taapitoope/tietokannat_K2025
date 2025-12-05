const prompt = require('prompt-sync')();

 // Tee Javascriptilla ohjelma, joka tutkii, onko annettu sana palindromi. 
 // Palindromi on sana, joka on sama etu- ja takaperin. Esimerkiksi saippuakauppias. 
 // Välilyöntejä ei tarvitse käsitellä, eli syötteenä vain yksi sana.

function onPalindromi(sana) {
    for (let i = 0; i < sana.length; i++) { 
        if (sana[i] !== sana[sana.length - 1 - i]) {
            return console.log("Sana ei ole palindromi");
        }
    }
    return console.log("Sana on palindromi");
    
}
let sana = prompt("Anna sana:");
onPalindromi(sana);