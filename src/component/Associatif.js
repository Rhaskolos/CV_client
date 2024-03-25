import "../css/associatifs.css";
import React from "react";
import { useGlobalState } from "../globalStates";


export default function Associatif() {

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_petite_section,
        donnees
            } = globalStates.currentCv.div[1].grande_section[2].petite_section[0];

            return(
<div>
    <h3>{titre_petite_section}</h3>
    {donnees.map((value, index) => 
    <li key={index}>{value}</li>
    )}
</div>
            )

}