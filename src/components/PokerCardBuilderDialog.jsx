import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import { getCard } from "standard-deck-react";
import CardStack from './CardStack';

export const PokerCardBuilderDialog = ({ open, onClose }) => {
    const [selectedValue, setSelectedValue] = useState('A');
    const [selectedSuit, setSelectedSuit] = useState('c');
    const [cardStack, setCardStack] = useState([]);

    const handleAddCard = () => {
        const card = getCard(`${selectedValue}${selectedSuit}`);
        console.log('card->', card);
        setCardStack([...cardStack, card]);
    };

    const handleClearStack = () => {
        setCardStack([]);
    };

    return (
        <Dialog fullWidth={true} maxWidth="md" open={open} onClose={onClose}>
            <DialogTitle>Create Poker Card Stack</DialogTitle>
            <DialogContent>
                <CardStack />
            </DialogContent>
        </Dialog>
    );
};

