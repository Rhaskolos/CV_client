import "../css/divGauche.css";
import photoRemi from "../assets/remi.png";
import React from "react";
import Profil from "./Profil.js";
import Outils from "./Outils.js";
import Interet from "./Interet.js";

function DivGauche()
{
return(
<div className="div_gauche">
<img src={photoRemi} alt="photo  de profil de Rémi Girard"/>
<Profil/>
<Outils/>
<Interet/>
</div>
)
};

export default DivGauche;