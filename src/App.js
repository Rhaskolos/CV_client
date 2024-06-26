import React, { useEffect } from 'react';
import "./css/app.css";
import { useGlobalState } from "./globalStates";
import Page from "./component/Page";
import SwitchLanguage from './component/SwitchLanguage';


function App() {

    const { globalStates, updateGlobalStates } = useGlobalState();

    useEffect(() => {

        loadData();

    }, [globalStates.currentLanguage]);


    const loadData = async () => {
        try {
            const cvResponse = await fetch(`http://localhost:3001/cv/${globalStates.currentLanguage}`);

            updateGlobalStates({
                currentCv: await cvResponse.json()
            });
           

        }
        catch (error) {
            console.error("Error", error);
        }
    };



    return (
        
            <div className="div_principal">
                <SwitchLanguage/>
                <Page />
            </div>
        

    )

}
export default App;
