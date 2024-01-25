import * as React from 'react';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useStateContext } from './StateContext';
import { stacks } from '../data/deckStacks';
import { PokerCardBuilderDialog } from './PokerCardBuilderDialog';

export function DeckBuilderDialog({ open, handleClose }) {
    const myContext = useStateContext();

    function handleClick(event) {
        const chosenOrder = event.target.value;
        if (!chosenOrder || chosenOrder == "other") return;
        const chosenStack = { ...stacks.find(stack => stack.name == chosenOrder) };
        console.log("chosenStack->", chosenStack);
        myContext.updateDeckOrderState(chosenStack);
    }
    return (
        <React.Fragment>

            <PokerCardBuilderDialog
                open={open}
                onClose={handleClose}
            />

        </React.Fragment>
    );
}
