import React from "react";
import { PokerTable } from "./PokerTable"

export function Body() {
    return (
        <div className="app-body">
            <main>
                <PokerTable />
            </main>
        </div>
    )
}