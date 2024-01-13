import React from "react";
import { useStateContext } from './StateContext';
import { DeckOrderRadioButtons } from './DeckOrderRadioButtons';
import { ShuffleConfRadioButtons } from './ShuffleConfRadioButtons';

import { stacks } from '../data/deckStacks';

import { Box, TextField } from "@mui/material";

export function ConfigurationInfo() {

    const myContext = useStateContext();

    function deckOrderHandler(event) {
        const chosenOrder = event.target.value;
        if (!chosenOrder || chosenOrder == "other") return;
        const chosenStack = stacks.find(stack => stack.name == chosenOrder);
        console.log("chosenStack->", chosenStack);
        myContext.updateDeckOrderState(chosenStack);
    }

    function shuffleConfHandler(event) {
        const chosenShuffle = event.target.value;
        console.log(chosenShuffle);
        myContext.updateShuffleConfState(chosenShuffle);
    }

    return (
        <div className="configuration-element">

            <Box component="fieldset" sx={{ m: 1, width: '25ch' }}>
                <legend>Deck order configuration</legend>
                <DeckOrderRadioButtons clickHandler={deckOrderHandler} />
            </Box>

            <Box component="fieldset" sx={{ m: 1, width: '25ch' }}>
                <legend>Shuffle configuration</legend>
                <ShuffleConfRadioButtons clickHandler={shuffleConfHandler} />
            </Box>

            {/* <TextField
                label="Deck order"
                id="do-outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={myContext.deckOrderState.title}
            />
            <TextField
                label="Shuffle Conf"
                id="sc-outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={myContext.shuffleConfState}
            /> */}
        </div>
    )
}