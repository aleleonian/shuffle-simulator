// StateContext.js
import { createContext, useContext, useState } from 'react';
import { ndo } from "../data/newDeckOrder";

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [state, setState] = useState(ndo);

    const updateState = (newState) => {
        setState(newState);
    };

    return (
        <StateContext.Provider value={{ state, updateState }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    return useContext(StateContext);
};

export { StateProvider, useStateContext };
