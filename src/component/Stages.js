import "../css/stages.css";
import { useGlobalState } from "../globalStates";

function Stages() 
{
    const { globalStates } = useGlobalState();

    if (!globalStates.currentCv || !globalStates.currentCv.div) {
        return <div>Chargement...</div>;  
    }

    const {
        titre_grande_section
    } = globalStates.currentCv.div[0].grande_section[3];

    const {
        titre_petite_section : titre_petite_section_un,
        donnees : donnees_un
    } = globalStates.currentCv.div[0].grande_section[3].petite_section[0];

    const {
        titre_petite_section : titre_petite_section_deux,
        donnees : donnees_deux
    } = globalStates.currentCv.div[0].grande_section[3].petite_section[1];

    return(
        <div>
        <h2>{titre_grande_section} : </h2>
        <ul>
            <li>{titre_petite_section_un} : </li>
        </ul>
        <p>{donnees_un}</p>
        <ul>
            <li>{titre_petite_section_deux} : </li>
        </ul>
        <p>{donnees_deux}</p>
    </div>
    );
}


export default Stages;