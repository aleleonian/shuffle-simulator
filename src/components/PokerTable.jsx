import React from "react";
import { getCard } from 'standard-deck-react';
import { useStateContext } from './StateContext';
import { generateUUID } from "standard-deck-react";

export function PokerTable() {

    const myContext = useStateContext();

    const fullDeck = createDeck(myContext.deckOrderState.order);

    return (
        <div className="poker-table">
            {fullDeck}
        </div>
    )
}

function createDeck(cardsArray) {
    return cardsArray.map(card => <div key={generateUUID()} className="card">{getCard(card)}</div>);
}