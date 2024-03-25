import "../css/bureautiques.css";
import React from "react";
import { useGlobalState } from "../globalStates";

export default function Bureautiques() 
{
    const { globalStates } = useGlobalState();
 

if (!globalStates.currentCv || !globalStates.currentCv.div) {
    return <div>Chargement...</div>;  
}

    const { 
        titre_petite_section: titreBureautiques,
        donnees: competencesBureautiques
    } = globalStates.currentCv.div[1].grande_section[1].petite_section[1];

    return(
        <div>
        <h3>{titreBureautiques} : </h3>
        <ul>
                {competencesBureautiques.map((competence, index) => (
                    <li key={index}>{competence}</li>
                ))}
        </ul>
    </div>
    );
}