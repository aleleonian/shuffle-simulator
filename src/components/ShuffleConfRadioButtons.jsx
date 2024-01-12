import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useStateContext } from './StateContext';

export function ShuffleConfRadioButtons({ clickHandler }) {

    const chosenShuffle = useStateContext().shuffleConfState;

    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="faro-in" onChange={clickHandler} control={<Radio checked={chosenShuffle === "faro-in" ? true : false} />} label="Faro in" />
                <FormControlLabel value="faro-out" onChange={clickHandler} control={<Radio checked={chosenShuffle === "faro-out" ? true : false} />} label="Faro out" />
            </RadioGroup>
        </FormControl>
    );
}
