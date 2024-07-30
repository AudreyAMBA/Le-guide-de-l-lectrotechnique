alert("Coucou toi !");
console.log("après l'appel 1 de la fiontion alert");

let nom = prompt("Quel et ton nom ?");
let prénom = prompt("Quel et ton prénom ?");

console.log("Bonjour " + prénom + " " + nom );

console.log("Comment va-tu " + prénom + " ?");

console.log("Alors, " + prénom + " cette page n'est pas encore terminée, mais c'est en cours...");

let welcomePresentation = document.getElementById("welcomePresentation");

welcomePresentation.innerText = "Hello ^^ " + name + " !";