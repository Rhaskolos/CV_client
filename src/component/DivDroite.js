import "../css/divDroite.css";
import Competences from "./Competences";
import Experiences from "./Experiences";
import Formations from "./Formations";
import Stages from "./Stages";

function DivDroite() {
    return (
        <div className="div_droite">
            <h1 className="titre_principal">Concepteur développeur <br></br> d'application</h1>
            <Competences />
            <Experiences />
            <Formations />
            <Stages />
        </div>
    );
}

export default DivDroite;