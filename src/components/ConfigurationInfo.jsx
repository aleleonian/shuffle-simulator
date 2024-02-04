import React from "react";
import { useStateContext } from './StateContext';
import { DeckOrderRadioButtons } from './DeckOrderRadioButtons';
import { ShuffleConfRadioButtons } from './ShuffleConfRadioButtons';
import { DeckBuilderDialog } from './DeckBuilderDialog';

import { stacks } from '../data/deckStacks';

import { Box, Button } from "@mui/material";

export function ConfigurationInfo() {

    const myContext = useStateContext();

    const [deckBuilderOpen, setDeckBuilderOpen] = React.useState(false);

    function resetDeckOrder() {
        const chosenOrder = myContext.deckOrderState.name;
        let chosenStack;
        if (chosenOrder == "other") {
            chosenStack = { ...myContext.deckOrderState };
            chosenStack.order = [...chosenStack.backup];
        }
        else {
            chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };
        }

        myContext.updateDeckOrderState(chosenStack);
    }

    function deckOrderHandler(event) {
        const chosenOrder = event.target.value;

        switch (chosenOrder) {
            case false:
            case undefined:
                return;
            case 'other':
                return setDeckBuilderOpen(true)
        }

        const chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };

        myContext.updateDeckOrderState(chosenStack);
    }

    function shuffleConfHandler(event) {
        const chosenShuffle = event.target.value;
        myContext.updateShuffleConfState(chosenShuffle);
    }

    return (
        <div className="configuration-element">

            <Box component="fieldset" sx={{ m: 1, width: '25ch' }}>
                <legend>Deck order configuration</legend>
                <DeckOrderRadioButtons clickHandler={deckOrderHandler} />
                <Button
                    color="success"
                    variant="contained"
                    onClick={resetDeckOrder}
                    size="small">
                    Reset</Button>
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
