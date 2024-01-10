import React from "react";
import { PokerTable } from "./PokerTable"
import { ConfigurationInfo } from "./ConfigurationInfo"
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { useStateContext } from './StateContext';
import { faroShuffle } from "../functions/faroShuffle";
import { stacks } from '../data/deckStacks';

function shuffle(deck, shuffleType) {

    const FARO_IN = 0;
    const FARO_OUT = 1;

    switch (shuffleType) {
        case 'faro-in':
            return faroShuffle(deck, FARO_IN);
        case 'faro-out':
            return faroShuffle(deck, FARO_OUT);
    }
}

export function Body() {

    const myContext = useStateContext();

    function handleClick() {
        const shuffledDeck = shuffle(myContext.deckOrderState.order, myContext.shuffleConfState);
        let currentDeckOrderState = {...myContext.deckOrderState};
        currentDeckOrderState.order = shuffledDeck;
        myContext.updateDeckOrderState(currentDeckOrderState);
    }

    return (
        <Grid item xs={12} className="body-element">
            <ConfigurationInfo />
            <PokerTable />
            <Button variant="contained" onClick={handleClick} size="large" color="primary">Shuffle!</Button>
            {/* <Button variant="contained" onClick={() => {
                shuffle(myContext.deckOrderState.order, myContext.shuffleConfState, myContext.updateDeckOrderState);
            }} size="large" color="primary">Shuffle!</Button> */}
        </Grid>
    )
}