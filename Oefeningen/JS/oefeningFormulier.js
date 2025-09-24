// oefeningFormulier.js

"use strict";

function controleer()
{
    let naam = document.getElementById("invoerNaam").value;
    let woonplaats = document.getElementById("invoerWoonplaats").value;
    if (naam == "" && woonplaats == "")
    {
        document.getElementById("uitvoerNaam").innerHTML = "Niks ingevuld";
    }
    else
    {
        document.getElementById("uitvoerNaam").innerHTML = "Hallo, " + naam + ". Jij woont in " + woonplaats + ".";
    }
}