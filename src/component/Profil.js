import "../css/profil.css";
import React from "react";
import { useGlobalState } from "../globalStates";

function Profil()
{

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_petite_section,
        donnees
            } = globalStates.currentCv.div[1].grande_section[0].petite_section[0];

    return(
<div>
    <h2>{titre_petite_section}</h2>
    <ul>
        {donnees.map((value, index) =>
        <li key={index}>{value}</li>
        )}
    </ul>
</div>
    );
}

export default Profil;