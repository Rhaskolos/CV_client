import "../css/competences.css";
import React from "react";

function Competences()
{
    return(
        <div>
        <h2>Compétences : </h2>
        <div>
            <h3>Informatiques :</h3>
            <ul>
                <li>Développer une applicaiton sécurisée</li>
                <li>Concevoir et développer une application sécurisée organisée en couches</li>
                <li>Préparer le déploiement d'une applicaiton sécurisée</li>
            </ul>
        </div>
        <div>
            <h3>Données : </h3>
            <ul>
                <li>Prospection et recueil de données</li>
                <li>Réalisation de tests d'expériementations</li>
                <li>Analyse de données</li>
            </ul>
        </div>
        <div>
            <h3>Gestion de projets : </h3>
            <ul>
                <li>Présentation de résultats d’études aux décideurs</li>
                <li>Travailler au sein d’une équipe</li>
                <li>Réalisation et publication d’articles de presse</li>
                <li>Gestion juridique, comptable et administrative d'équipes d'élus</li>
            </ul>
        </div>
    </div>
    );
}

export default Competences;