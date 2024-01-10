import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useStateContext } from './StateContext';

export function DeckOrderRadioButtons({ handleClick }) {

    const chosenDeckOrder = useStateContext().deckOrderState.name;

    return (
        <FormControl>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">Deck order:</FormLabel> */}
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="newDeckOrder" onChange={handleClick} control={<Radio checked={chosenDeckOrder === "newDeckOrder" ? true : false} />} label="New deck order" />
                <FormControlLabel value="tamarizMnemonica" onChange={handleClick} control={<Radio checked={chosenDeckOrder === "tamarizMnemonica" ? true : false} />} label="Tamariz Mnemonica" />
                <FormControlLabel value="other" onChange={handleClick} control={<Radio checked={chosenDeckOrder === "other" ? true : false} />} label="Custom" />
            </RadioGroup>
        </FormControl>
    );
}
