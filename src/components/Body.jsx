import React from "react";
import { PokerTable } from "./PokerTable"
import { Grid } from "@mui/material";

export function Body() {
    return (
        <Grid item>
            <PokerTable />
        </Grid>
    )
}