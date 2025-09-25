// oefeningFormulier.js

"use strict";

function controleer()
{
    let naam = document.getElementById("invoer-naam").value;
    let woonplaats = document.getElementById("invoer-woonplaats").value;
    if (naam == "" && woonplaats == "")
    {
        document.getElementById("uitvoer-naam").innerHTML = "Niks ingevuld";
    }
    else
    {
        document.getElementById("uitvoer-naam").innerHTML = "Hallo, " + naam + ". Jij woont in " + woonplaats + ".";
    }
}