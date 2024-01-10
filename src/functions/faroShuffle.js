const FARO_IN = 0;
const FARO_OUT = 1;

export function faroShuffle(deck, type = FARO_OUT) {
    let shuffledDeck = [];
    const deckLength = deck.length;
    for (let i = 0; i < deckLength / 2; i++) {

        let firstCard, secondCard;

        if (type === FARO_OUT) {
            firstCard = deck[i];
            secondCard = deck[i + (deckLength / 2)];
        }
        else {
            secondCard = deck[i];
            firstCard = deck[i + (deckLength / 2)];
        }

        shuffledDeck.push(firstCard);

        shuffledDeck.push(secondCard);
    }
    
    return shuffledDeck;
}