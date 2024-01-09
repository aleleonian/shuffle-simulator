// StateContext.js
import { createContext, useContext, useState } from 'react';
import { stacks } from "../data/deckStacks";

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [state, setState] = useState(stacks.find(stack => stack.name == 'newDeckOrder').order);

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
