import "../css/competences.css";
import React from "react";
import { useGlobalState } from "../globalStates";
import Informatiques from "./Informatiques";
import Donnes from "./Donnees";
import Gestion from "./Gestion";

function Competences()
{
    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {titre_grande_section: titreCompetences} = globalStates.currentCv.div[0].grande_section[0]

    return(
        <div>
        <h2>{titreCompetences} : </h2>
       <Informatiques/>
       <Donnes/>
        <Gestion/>
    </div>
    );
}

export default Competences;