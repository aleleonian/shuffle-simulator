import React, { useState } from "react";
import { useStateContext } from './StateContext';
import { DeckOrderRadioButtons } from './DeckOrderRadioButtons';
import { ShuffleConfRadioButtons } from './ShuffleConfRadioButtons';
import { DeckBuilderDialog } from './DeckBuilderDialog';

import { stacks } from '../data/deckStacks';

import { Box, Button } from "@mui/material";

export function ConfigurationInfo() {

    const myContext = useStateContext();

    const [deckBuilderOpen, setDeckBuilderOpen] = React.useState(false);
    const [deckOrderConfigurationButtonText, setDeckOrderConfigurationButtonText] = useState("Reset");
    function resetDeckOrder() {
        const chosenOrder = myContext.deckOrderState.name;
        let chosenStack;
        if (chosenOrder == "other") {
            debugger;
            chosenStack = { ...myContext.deckOrderState };
            // chosenStack.order = [...chosenStack.backup];
            //here we gotta open the dialog
            setDeckBuilderOpen(true);
        }
        else {
            chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };
        }

        myContext.updateDeckOrderState(chosenStack);
    }

    function deckOrderHandler(event) {
        debugger;
        const chosenOrder = event.target.value;
        let chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };
        //chosenStack can be an empty object if 'custom' is chosen for the first time.
        //in that case, we should initialize the object
        const isEmpty = Object.keys(chosenStack).length === 0;
        if (isEmpty) {
            chosenStack.name = "other";
            chosenStack.title = "custom";
            chosenStack.order = [];
        }
        myContext.updateDeckOrderState(chosenStack);

        switch (chosenOrder) {
            case false:
            case undefined:
                return;
            case 'other':
                //change 'reset' to 'edit'
                setDeckOrderConfigurationButtonText('Edit');
                return setDeckBuilderOpen(true);
            default:
                if (deckOrderConfigurationButtonText === 'Edit') setDeckOrderConfigurationButtonText('Reset');
        }


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
                    {deckOrderConfigurationButtonText}</Button>
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
