import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeckOrderDialog from './DeckOrderDialog';
import { Grid } from '@mui/material';

export function BottomMenu() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid item sx={{
            top : "2000px",
            backgroundColor: 'red'
        }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={handleClickOpen}>Deck Order Configuration</Button>
                <Button>Shuffle Configuration</Button>
                <Button>About</Button>
            </ButtonGroup>

            <DeckOrderDialog open={open} handleClose={handleClose} />
        </Grid>
    );
}