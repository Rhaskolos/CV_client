import "../css/experiences.css";
import React from "react";
import { useGlobalState } from "../globalStates";

function Experiences()
{

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_grande_section   
    } = globalStates.currentCv.div[0].grande_section[1];

    const {
titre_petite_section,
donnees
    } = globalStates.currentCv.div[0].grande_section[1].petite_section[0];


    return(
        <div>
        <h2>{titre_grande_section} :</h2>
            <ul>
                <li>{titre_petite_section} :</li>
            </ul>
            <p>{donnees[0]}</p>
        </div>
    )
}

export default Experiences;