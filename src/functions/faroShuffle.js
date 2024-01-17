const FARO_IN = 0;
const FARO_OUT = 1;

export function faroShuffle(deck, type = FARO_OUT) {
    let shuffledDeck = [];
    const deckLength = deck.length;
    for (let i = 0; i < deckLength / 2; i++) {

        let firstCard, secondCard;

        if (type === FARO_OUT) {
            firstCard = deck[i];
            secondCard = deck[i + Math.floor(deckLength / 2)];
        }
        else {
            secondCard = deck[i];
            firstCard = deck[i + Math.floor(deckLength / 2)];
        }

        shuffledDeck.push(firstCard);

        shuffledDeck.push(secondCard);
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