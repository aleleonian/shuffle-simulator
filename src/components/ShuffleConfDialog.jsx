import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { ShuffleConfRadioButtons } from './ShuffleConfRadioButtons';
import { useStateContext } from './StateContext';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function ShuffleConfDialog({ open, handleClose }) {
    const myContext = useStateContext();

    function handleClick(event) {
        const chosenShuffle = event.target.value;
        // myContext.updateDeckOrderState(stacks.find(stack => stack.name == chosenOrder));
        myContext.updateShuffleConfState(chosenShuffle);
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Shuffle configuration
                </DialogTitle>
                <DialogContent>
                    <ShuffleConfRadioButtons handleClick={handleClick} />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
