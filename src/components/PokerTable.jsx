import React from 'react';
import { getCard } from 'standard-deck-react';
import { useStateContext } from './StateContext';
import { generateUUID } from "standard-deck-react";

export function PokerTable() {

    const myContext = useStateContext();

    let fullDeck = createDeck([...myContext.deckOrderState.order]);

    fullDeck = fullDeck.map((cardElement, index) => {
        return (
            <div className='poker-table-card'>
                <div id="position">{index + 1}</div>
                <div>{cardElement}</div>
            </div>
        )
    });

    return (
        <div className="poker-table">
            {fullDeck}
        </div>
    )
}

function createDeck(cardsArray) {
    return cardsArray.map(card => <div key={generateUUID()} className="card">{getCard(card)}</div>);
}