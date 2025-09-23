// js1_oefening8.js

// Vraag gebruiker om naam, woonplaats en banksaldo
let naam = window.prompt("Wat is uw naam?", "Truus");
let woonplaats = window.prompt("Waar woont u?", "Rotterdam");
let banksaldo = window.prompt("Hoeveel heeft u momenteel op uw rekening?", "25,50")

// Laat de gegevens zien in een window alert
window.alert("Hallo " + naam + ", u woont in " + woonplaats + " en u heeft " + banksaldo + " euro op uw rekening.");