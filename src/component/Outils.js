import "../css/outils.css";
import Programmations from "./Programmations";
import Bureautiques from "./Bureautiques";
import React from "react";
import { useGlobalState } from "../globalStates";

function Outils() 
{
    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_grande_section
            } = globalStates.currentCv.div[1].grande_section[1];


    return(
<div>
    <h2>{titre_grande_section} : </h2>
   <Programmations/>
   <Bureautiques/>
</div>
    );
}

export default Outils;