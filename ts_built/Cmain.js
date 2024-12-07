function Fordisplay(params) { document.querySelector("#screen").textContent += params; }
function AC() { document.querySelector("#screen").textContent = ""; }
function Result() { document.querySelector("#screen").textContent = eval(document.querySelector("#screen").textContent); }
function DEL() { document.querySelector("#screen").textContent = document.querySelector("#screen").textContent.slice(0, -1); }
// il s'agit de la fonction qui toggle le mode scientifique
document.querySelector('.mode-normal').addEventListener("click", function () {
    document.querySelectorAll('#sc').forEach(function (s) {
        s.classList.toggle('sc');
    });
});
// L'heure 
function Clock() {
    var now = new Date(), hours = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds(), Time = hours + ":" + minutes + ":" + seconds;
    document.querySelector('.sc1').textContent = Time;
    console.log(Time);
    setTimeout(Clock, 1000);
}
Clock();
// ************* LES FONCTIONNALITES ****************
// Fonction racine carrée
function SQRT() { document.querySelector("#screen").textContent = String(Math.sqrt(parseInt(document.querySelector("#screen").textContent))); }
// ------->
// Fonction cosinus
function COS() { document.querySelector("#screen").textContent = String(Math.cos(parseInt(document.querySelector("#screen").textContent) * Math.PI / 180)); }
// ------->
// Fonction exponentielle
function EXP() { document.querySelector("#screen").textContent = String(Math.exp(parseInt(document.querySelector("#screen").textContent))); }
// ------->
// Fonction tangente
function TAN() { document.querySelector("#screen").textContent = String(Math.tan(parseInt(document.querySelector("#screen").textContent) * Math.PI / 180)); }
// ------->
// Fonction Sinus
function SIN() { document.querySelector("#screen").textContent = String(Math.sin(parseInt(document.querySelector("#screen").textContent) * Math.PI / 180)); }
// ------->
// Fonction logarithmique
function LOG() { document.querySelector("#screen").textContent = String(Math.log(parseInt(document.querySelector("#screen").textContent))); }
// ------->
//Fonction factorielle
function fact() {
    document.querySelector("#screen").textContent = factorielle(parseInt(document.querySelector("#screen").textContent));
}
function factorielle(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorielle(n - 1);
    }
}
//Fonction Modulo
function MOD() {
    document.querySelector("#screen").textContent = String(parseInt(document.querySelector("#screen").textContent) % 10);
}
