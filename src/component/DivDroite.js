import "../css/divDroite.css";
import React from "react";
import { useGlobalState } from "../globalStates";
import Competences from "./Competences";
import Experiences from "./Experiences";
import Formations from "./Formations";
import Stages from "./Stages";

function DivDroite() {

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    return (
        <div className="div_droite">
            <h1 className="titre_principal">{globalStates.currentCv.titre_principal}</h1>
            <Competences />
            <Experiences />
            <Formations />
            <Stages />
        </div>
    );
}

export default DivDroite;