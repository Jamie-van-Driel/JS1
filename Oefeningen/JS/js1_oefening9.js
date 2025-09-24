// js1_oefening9.js

let datum = new Date();
let minuut = datum.getMinutes();

if (minuut >=0 && minuut <=15) {
    document.querySelector("welkKwartier").textContent = "Eerste Kwartier";
}

else if (minuut >= 16 && minuut <=30) {
    document.querySelector("welkKwartier").textContent = "Tweede Kwartier";
}