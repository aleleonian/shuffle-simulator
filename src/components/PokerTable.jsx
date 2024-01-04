import React from "react";
import { getCard } from 'standard-deck-react';
import { generateUUID } from 'standard-deck-react';
import { useState } from "react";

export function PokerTable({deck}) {

    let clubs = [];
    let hearts = [];
    let spades = [];
    let diamonds = [];
    let fullDeck = [];
    for (let i = 1; i <= 13; i++) {
        clubs.push(<div key={generateUUID()} className="card">{getCard(`${i}c`)}</div>);
        hearts.push(<div key={generateUUID()} className="card">{getCard(`${i}h`)}</div>);
        spades.push(<div key={generateUUID()} className="card">{getCard(`${i}s`)}</div>);
        diamonds.push(<div key={generateUUID()} className="card">{getCard(`${i}d`)}</div>);
    }
    fullDeck = fullDeck.concat(clubs, hearts, spades, diamonds);

    const [deckOrder, setDeckOrder] = useState(fullDeck);

    return (
        <div className="poker-table">
            {fullDeck}
        </div>
    )
}