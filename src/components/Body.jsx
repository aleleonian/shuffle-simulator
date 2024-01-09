import React from "react";
import { PokerTable } from "./PokerTable"
import { ConfigurationInfo } from "./ConfigurationInfo"
import { Grid } from "@mui/material";

export function Body() {
    return (
        <Grid item xs={12}>
            <PokerTable />
            <ConfigurationInfo />
        </Grid>
    )
}