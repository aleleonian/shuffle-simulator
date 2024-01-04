import React from "react";
import { getCard } from 'standard-deck-react';

export function PokerTable() {
    let clubs = [];
    let hearts = [];
    let spades = [];
    for (let i = 1; i <= 13; i++) {
        clubs.push(<div className="card">{getCard(`${i}c`)}</div>);
        hearts.push(<div className="card">{getCard(`${i}h`)}</div>);
        spades.push(<div className="card">{getCard(`${i}s`)}</div>);
    }
    return (
        <div className="poker-table">
            {clubs}
            {hearts}
            {spades}
        </div>
    )
}