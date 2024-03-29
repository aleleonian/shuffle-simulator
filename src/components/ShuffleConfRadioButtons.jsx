import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';
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

            <Divider variant="middle" flexItem />

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="anti-faro-radio-buttons-group"
            >
                <FormControlLabel value="anti-faro-in" onChange={clickHandler} control={<Radio checked={chosenShuffle === "anti-faro-in" ? true : false} />} label="Anti-faro IN" />
                <FormControlLabel value="anti-faro-out" onChange={clickHandler} control={<Radio checked={chosenShuffle === "anti-faro-out" ? true : false} />} label="Anti-faro OUT" />

            </RadioGroup>

            <Divider variant="middle" flexItem />

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="milk" onChange={clickHandler} control={<Radio checked={chosenShuffle === "milk" ? true : false} />} label="Milk" />
            </RadioGroup>

        </FormControl>
    );
}
