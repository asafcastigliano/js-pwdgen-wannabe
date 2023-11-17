let nome = prompt("Inserisci un nome:");
console.log("Nome:", nome);

let cognome = prompt("Inserisci un cognome:");
console.log("Cognome:", cognome);

let colore = prompt("Inserisci un colore preferito:");
console.log("Colore:", colore);

let password = nome + cognome + colore + "23";
console.log("Passowrd:", password);

document.getElementById("password").innerHTML = "Password: " + password;