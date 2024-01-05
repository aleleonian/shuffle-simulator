import React from "react";
import Grid from '@mui/material/Grid';

export function Header() {
    return (
        <Grid item className="header" sx={{
            innerHeight : "200px"
        }}>
            <h1>Shuffle Simulator, bo.</h1>
        </Grid >
    )
}