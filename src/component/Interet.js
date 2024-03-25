import "../css/interet.css";
import React from "react";
import { useGlobalState } from "../globalStates";
import Associatif from "./Associatif";
import Loisirs from "./Loisirs";

function Interet()
{

    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_grande_section
            } = globalStates.currentCv.div[1].grande_section[2];

    return(
        <div>
        <h2>{titre_grande_section} : </h2>
        <Associatif/>
        <Loisirs/>
    </div>
    )
} 

export default Interet;