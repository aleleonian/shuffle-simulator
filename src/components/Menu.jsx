import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeckOrderDialog from './DeckOrderDialog';
import ShuffleConfDialog from './ShuffleConfDialog';

export function Menu() {

    const [dodOpen, setDODOpen] = React.useState(false);
    const [scdOpen, setSCDOpen] = React.useState(false);

    return (
        <div className='bottom-menu'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                    color="success"
                    onClick={() => {
                        setDODOpen(true);
                    }}>Deck Order Configuration</Button>
                <Button
                    color="success"
                    onClick={() => {
                        setSCDOpen(true);
                    }}>Shuffle Configuration</Button>
                <Button
                    color="success"
                >
                    About
                </Button>
            </ButtonGroup>

            <DeckOrderDialog open={dodOpen} handleClose={() => {
                setDODOpen(false);
            }} />
            <ShuffleConfDialog open={scdOpen} handleClose={() => {
                setSCDOpen(false);
            }} />
        </div>
    );
}