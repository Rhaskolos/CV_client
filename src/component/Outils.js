import "../css/outils.css";
import Programmations from "./Programmations";
import Bureautiques from "./Bureautiques";
import React from "react";

function Outils() 
{
    return(
<div>
    <h2>Outils maîtrisés : </h2>
   <Programmations/>
   <Bureautiques/>
</div>
    );
}

export default Outils;