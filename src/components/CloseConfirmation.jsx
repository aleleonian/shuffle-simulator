import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

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

export function CloseConfirmation({ open, setOpen, killBuilderDialog }) {

    const handleClose = () => {
        setOpen(false);
    };

    const closeAnyway = () => {
        killBuilderDialog();
        handleClose();
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
                    Achtung!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your stack was not saved, do you still want to close?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Don't close
                    </Button>
                    <Button onClick={closeAnyway}>Close anyway</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
