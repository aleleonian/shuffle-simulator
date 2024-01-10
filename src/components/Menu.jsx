import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeckOrderDialog from './DeckOrderDialog';
import ShuffleConfDialog from './ShuffleConfDialog';
import { Grid } from '@mui/material';

export function Menu() {

    const [dodOpen, setDODOpen] = React.useState(false);
    const [scdOpen, setSCDOpen] = React.useState(false);

    return (
        <Grid className='bottom-menu'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => {
                    setDODOpen(true);
                }}>Deck Order Configuration</Button>
                <Button  onClick={() => {
                    setSCDOpen(true);
                }}>Shuffle Configuration</Button>
                <Button>About</Button>
            </ButtonGroup>

            <DeckOrderDialog open={dodOpen} handleClose={() => {
                setDODOpen(false);
            }} />
            <ShuffleConfDialog open={scdOpen} handleClose={() => {
                setSCDOpen(false);
            }} />
        </Grid>
    );
}