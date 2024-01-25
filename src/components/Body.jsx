import React from "react";
import { PokerTable } from "./PokerTable"
import { ConfigurationInfo } from "./ConfigurationInfo"
import Button from '@mui/material/Button';
import { useStateContext } from './StateContext';
import { faroShuffle, milkShuffle } from "../functions/shuffles";
import { antiFaro } from "../functions/shuffles";

function shuffle(deck, shuffleType) {

    const FARO_IN = 0;
    const FARO_OUT = 1;

    switch (shuffleType) {
        case 'faro-in':
            return faroShuffle(deck, FARO_IN);
        case 'faro-out':
            return faroShuffle(deck, FARO_OUT);
        case 'anti-faro-in':
            return antiFaro(deck, FARO_IN);
        case 'anti-faro-out':
            return antiFaro(deck, FARO_OUT);
        case 'milk':
            return milkShuffle(deck);
    }
}

export function Body() {

    const myContext = useStateContext();

    function handleClick() {
        debugger;
        const shuffledDeck = shuffle(myContext.deckOrderState.order, myContext.shuffleConfState);

        console.log("shuffledDeck->", shuffledDeck);

        let currentDeckOrderState = { ...myContext.deckOrderState };
        currentDeckOrderState.order = shuffledDeck;
        myContext.updateDeckOrderState(currentDeckOrderState);
    }

    return (
        <div className="body-element">
            <PokerTable />
            <ConfigurationInfo />
            <Button
                color="success"
                variant="contained"
                onClick={handleClick}
                size="large">
                Shuffle!</Button>
        </div>
    )
}