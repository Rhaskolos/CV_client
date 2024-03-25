import "../css/donnees.css";
import React from "react";
import { useGlobalState } from "../globalStates";


export default function Donnes() {

    const { globalStates } = useGlobalState();
 

if (!globalStates.currentCv || !globalStates.currentCv.div) {
    return <div>Chargement...</div>;  
}

const {
    titre_petite_section, 
    donnees
} = globalStates.currentCv.div[0].grande_section[0].petite_section[1];

    return(
        <div>
        <h3>{titre_petite_section} : </h3>
        <ul>
            {donnees.map((value, index) =>
            <li key={index}>{value}</li>
            )}
        </ul>
    </div>
    );
}