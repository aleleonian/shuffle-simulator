import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export function ShuffleConfRadioButtons({ handleClick }) {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="faro-in" onChange={handleClick} control={<Radio />} label="Faro in" />
                <FormControlLabel value="faro-out" onChange={handleClick} control={<Radio />} label="Faro out" />
            </RadioGroup>
        </FormControl>
    );
}
