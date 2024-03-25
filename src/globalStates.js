import React, { createContext, useContext, useState } from 'react';


const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {

    const [globalStates, setGlobalStates] = useState ({
        availableLanguage: ["fr","en","emoji"],
        currentLanguage: "fr",
        currentCv: {}
    });

    const updateGlobalStates = (newStates) => {
        setGlobalStates(prevStates => ({
            ...prevStates,
            ...newStates
        }));
    };

    return (
        <GlobalStateContext.Provider value={{globalStates, updateGlobalStates}}>{children}</GlobalStateContext.Provider>

       
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);