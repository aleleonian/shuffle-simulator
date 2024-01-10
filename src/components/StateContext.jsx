// StateContext.js
import { createContext, useContext, useState } from 'react';
import { stacks } from "../data/deckStacks";

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [deckOrderState, setDeckOrderState] = useState(stacks.find(stack => stack.name == 'newDeckOrder'));
    const [shuffleConfState, setShuffleConfState] = useState("faro-out");

    const updateDeckOrderState = (newDeckOrderState) => {
        console.log("About to set new deck order state->", newDeckOrderState);
        setDeckOrderState(newDeckOrderState);
    };
    const updateShuffleConfState = (newShuffleConfState) => {
        setShuffleConfState(newShuffleConfState);
    };

    return (
        <StateContext.Provider value={{ deckOrderState, updateDeckOrderState, shuffleConfState, updateShuffleConfState }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    return useContext(StateContext);
};

export { StateProvider, useStateContext };
