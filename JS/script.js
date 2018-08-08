alert("Exercice 1!");
var nom = prompt("Quel est ton nom?", "Entrez ici votre prénom")
alert("Bonjour " + nom + ", comment va tu?");
console.log("Bonjour ",nom,", Comment va tu?");
var result = document.getElementById('result');
result.innerHTML = "Bonjour " + nom + ", comment va tu ?";

var bordure = document.getElementById('bordure');

function color(){
    color.style.border = "blue";
}