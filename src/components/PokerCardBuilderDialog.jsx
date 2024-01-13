import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import { getCard } from "standard-deck-react";

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
                <Grid container spacing={2}>
                    {/* Card Selection */}
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Card Selection</Typography>
                        <Select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                            {['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].map((value) => (
                                <MenuItem key={value} value={value}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select value={selectedSuit} onChange={(e) => setSelectedSuit(e.target.value)}>
                            {['c', 'h', 's', 'd'].map((suit) => (
                                <MenuItem key={suit} value={suit}>
                                    {suit}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button variant="outlined" onClick={handleAddCard}>
                            Add
                        </Button>
                    </Grid>

                    {/* Visual Confirmation of the Stack */}
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Card Stack</Typography>
                        {cardStack.map((card, index) => (
                            <img key={index} src={card.image} alt={`Card ${index}`} style={{ width: '50px', height: '80px', marginRight: '8px' }} />
                        ))}
                        {cardStack.length > 0 && (
                            <Button variant="outlined" onClick={handleClearStack} style={{ marginTop: '8px' }}>
                                Clear Stack
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

