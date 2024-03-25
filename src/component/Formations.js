import "../css/formations.css";
import React from "react";
import { useGlobalState } from "../globalStates";


function Formations(){

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_grande_section
    } = globalStates.currentCv.div[0].grande_section[2];

    const {
        titre_petite_section : titre_petite_section_un,
        donnees : donnees_un
    } = globalStates.currentCv.div[0].grande_section[2].petite_section[0];

    const {
        titre_petite_section : titre_petite_section_deux,
        donnees : donnees_deux
    } = globalStates.currentCv.div[0].grande_section[2].petite_section[1];

    const {
        titre_petite_section : titre_petite_section_trois,
        donnees : donnees_trois
    } = globalStates.currentCv.div[0].grande_section[2].petite_section[2];

    const {
        titre_petite_section : titre_petite_section_quatre,
        donnees : donnees_quatre
    } = globalStates.currentCv.div[0].grande_section[2].petite_section[3];



return(
<div>
<h2>{titre_grande_section} :</h2>
<ul>
    <li>{titre_petite_section_un} : </li>
</ul>
<p>{donnees_un}</p>
<ul>
    <li>{titre_petite_section_deux} : </li>
</ul>
<p>{donnees_deux}</p>
<ul>
    <li>{titre_petite_section_trois} : </li>
</ul>
<p>{donnees_trois}</p>
<ul>
    <li>{titre_petite_section_quatre} : </li>
</ul>
<p>{donnees_quatre}</p>
</div>
);
}

export default Formations;