import "../css/switchLanguage.css";
import React, { useState } from 'react';
import { useGlobalState } from "../globalStates";


export default function SwitchLanguage() {

    const { globalStates, updateGlobalStates } = useGlobalState();
    const [selectedLanguage, setSelectedLanguage] = useState(globalStates.currentLanguage || '');

const handleSubmitLanguage = (event) => {
    event.preventDefault();

    updateGlobalStates({ currentLanguage:selectedLanguage });

}

const handleInputChangeLanguage = (e) => {
    const {name, value} = e.target;
    if(name === 'selectedLanguage') setSelectedLanguage(value);
}



    return(
        <form onSubmit={handleSubmitLanguage}>
            <select
            name="selectedLanguage"
            value={selectedLanguage}
            onChange={handleInputChangeLanguage}
            >
                {globalStates.availableLanguage.map((value,index)=>
          <option key={index} value={value}>{value}</option>      
                )}
            </select >
            <button type="submit">✅</button>
        </form>
    )
    
}