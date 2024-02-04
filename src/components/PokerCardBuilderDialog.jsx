import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CardStack from './CardStack.jsx';

export const PokerCardBuilderDialog = ({ open, onClose }) => {

    const handleClose = () => {
        onClose()
    };

    return (
        <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={onClose}>
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
                <CardStack />
            </DialogContent>
        </Dialog>
    );
};

