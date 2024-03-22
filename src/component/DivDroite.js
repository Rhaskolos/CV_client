import "../css/divDroite.css";
import Competences from "./Competences";
import Experiences from "./Experiences";
import Formations from "./Formations";

function DivDroite() {
    return (
        <div className="div_droite">
            <h1 className="titre_principal">Concepteur développeur <br></br> d'application</h1>
           <Competences/>
         <Experiences/>
  <Formations/>
            <div>
                <h2>Stages : </h2>
                <ul>
                    <li>2019 : </li>
                </ul>
                <p>Stage de fin de licence professionnelle du 08/03/19 au 26/07/19 (4 mois) :
                    Chambre d’agriculture de Meurthe et Moselle-Laxou</p>
                <ul>
                    <li>2018 : </li>
                </ul>
                <p>Stage de fin d’étude de DUT du 16/04/2018 au 15/07/2018 (3 mois) :
                    Centre ALPA - Haroué</p>
            </div>
        </div>
    );
}

export default DivDroite;