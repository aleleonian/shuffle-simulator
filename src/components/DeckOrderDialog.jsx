import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { DeckOrderRadioButtons } from './DeckOrderRadioButtons';
import { useStateContext } from './StateContext';
import { tamarizMnemonica } from '../data/deckStacks';
import { newDeckOrder } from '../data/deckStacks';

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

export default function DeckOrderDialog({ open, handleClose }) {
  const myContext = useStateContext();
  const stacks = [];
  stacks['tamarizMnemonica'] = tamarizMnemonica;
  stacks['newDeckOrder'] = newDeckOrder;

  function handleClick(event) {
    const chosenOrder = event.target.value;
    if (!chosenOrder || chosenOrder == "other") return;
    myContext.updateState(stacks[chosenOrder]);
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
          Deck order configuration
        </DialogTitle>
        <DialogContent>
          <DeckOrderRadioButtons handleClick={handleClick} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
