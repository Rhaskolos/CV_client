import "../css/programmations.css";
import React from "react";
import { useGlobalState } from "../globalStates";

function Programmations() 
{

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_petite_section,
        donnees
            } = globalStates.currentCv.div[1].grande_section[1].petite_section[0];


    return(
        <div>
        <h3>{titre_petite_section} :</h3>
        <ul>
            {donnees.map((value, index) => 
            <li key={index}>{value}</li>
            )}
        </ul>
    </div>
    );
}


export default Programmations;