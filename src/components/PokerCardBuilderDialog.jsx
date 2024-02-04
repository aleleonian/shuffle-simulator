import React, { Fragment, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CardStack from './CardStack.jsx';
import { CloseConfirmation } from './CloseConfirmation.jsx';

export const PokerCardBuilderDialog = ({ open, onClose }) => {

    const [stack, setStack] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleClose = () => {
        // if the stack is being built
        debugger;
        if (stack.length > 0) {
            setShowConfirmation(true);
        }
        else onClose();
    };

    return (
        <Fragment>

            {showConfirmation && <CloseConfirmation open={showConfirmation} setOpen={setShowConfirmation} killBuilderDialog={() => {
                setStack([]);
                onClose();
            }} />}

            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
            >
                <DialogTitle>Custom Poker Card Stack Builder</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <CardStack stack={stack} setStack={setStack} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

