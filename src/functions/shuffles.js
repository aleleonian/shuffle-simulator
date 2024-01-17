export const FARO_IN = 0;
export const FARO_OUT = 1;

export function faroShuffle(deck, type = FARO_OUT) {
    let shuffledDeck = [];
    const deckLength = deck.length;
    const halfDeck = Math.floor(deckLength / 2);

    for (let i = 0; i < halfDeck; i++) {
        let firstCard, secondCard;

        if (type === FARO_OUT) {
            firstCard = deck[i];
            secondCard = deck[i + halfDeck];
        } else {
            firstCard = deck[i + halfDeck];
            secondCard = deck[i];
        }

        shuffledDeck.push(firstCard);
        shuffledDeck.push(secondCard);
    }

    // Handle the remaining card for odd deck length
    if (deckLength % 2 !== 0) {
        shuffledDeck.push(deck[deckLength - 1]);
    }

    return shuffledDeck;
}


export function antiFaro(deck, type) {


    const firstHalf = [];
    const secondHalf = [];
    const deckLength = deck.length;

    for (let i = 0; i < deckLength - 1; i += 2) {

        let firstCard, secondCard;

        if (type === FARO_OUT) {
            firstCard = deck[i];
            secondCard = deck[i + 1];
        }
        else {
            secondCard = deck[i];
            firstCard = deck[i + 1];
        }

        firstHalf.push(firstCard);
        secondHalf.push(secondCard);
    }
    if (type === FARO_OUT) return firstHalf.concat(secondHalf);
    else return firstHalf.concat(secondHalf);
}