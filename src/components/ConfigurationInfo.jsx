import React from "react";
import { useStateContext } from './StateContext';
import { Grid, TextField } from "@mui/material";

export function ConfigurationInfo() {

    const myContext = useStateContext();
    return (
        <Grid item xs={12}>
            <div className="configuration-info">
                <TextField
                    label="Deck order"
                    id="do-outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    value={myContext.deckOrderState.title}
                />
                <TextField
                    label="Shuffle Conf"
                    id="sc-outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    value={myContext.shuffleConfState}
                />
            </div>
        </Grid>
    )
}