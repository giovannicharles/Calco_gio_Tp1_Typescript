function Fordisplay(params) { document.querySelector("#screen").textContent += params; }
function Delete() { document.querySelector("#screen").textContent = ""; }
function Result() { document.querySelector("#screen").textContent = eval(document.querySelector("#screen").textContent); }
function darkMode() { document.querySelector('#body').classList.toggle("dark-mode"); }
function Reback() { document.querySelector("#screen").textContent = document.querySelector("#screen").textContent.slice(0, -1); }
