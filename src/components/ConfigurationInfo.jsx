import React from "react";
import { useStateContext } from './StateContext';
import { DeckOrderRadioButtons } from './DeckOrderRadioButtons';
import { ShuffleConfRadioButtons } from './ShuffleConfRadioButtons';
import { DeckBuilderDialog } from './DeckBuilderDialog';

import { stacks } from '../data/deckStacks';

import { Box } from "@mui/material";

export function ConfigurationInfo() {

    const myContext = useStateContext();

    const [deckBuilderOpen, setDeckBuilderOpen] = React.useState(false);

    function deckOrderHandler(event) {
        const chosenOrder = event.target.value;
        console.log("chosenOrder->", chosenOrder);
        ;
        
        switch (chosenOrder) {
            case false:
            case undefined:
                return;
            case 'other':
                return setDeckBuilderOpen(true)
        }

        const chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };
        console.log("chosenStack->", chosenStack);
        
        myContext.updateDeckOrderState(chosenStack);
    }

    function shuffleConfHandler(event) {
        const chosenShuffle = event.target.value;
        console.log("chosenShuffle->", chosenShuffle);
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

            <DeckBuilderDialog open={deckBuilderOpen} handleClose={() => {
                setDeckBuilderOpen(false);
            }} />
        </div>

    )
}
