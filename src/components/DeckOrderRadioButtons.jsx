import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export function DeckOrderRadioButtons({ handleClick }) {
    return (
        <FormControl>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">Deck order:</FormLabel> */}
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="newDeckOrder" onChange={handleClick} control={<Radio />} label="New deck order" />
                <FormControlLabel value="tamarizMnemonica" onChange={handleClick} control={<Radio />} label="Tamariz Mnemonica" />
                <FormControlLabel value="other" onChange={handleClick} control={<Radio />} label="Custom" />
            </RadioGroup>
        </FormControl>
    );
}
