import "../css/competences.css";
import React from "react";
import Informatiques from "./Informatiques";
import Donnes from "./Donnees";
import Gestion from "./Gestion";

function Competences()
{
    return(
        <div>
        <h2>Compétences : </h2>
       <Informatiques/>
       <Donnes/>
        <Gestion/>
    </div>
    );
}

export default Competences;