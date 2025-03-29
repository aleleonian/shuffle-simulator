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

export function isValidPlayingCard(card) {
    // Define valid ranks and suits
    const validRanks = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    const validSuits = ['c', 'h', 's', 'd'];

    // Check if the card string has a valid length
    if (card.length !== 2 && card.length !== 3) {
      return false;
    }

    // Extract rank and suit from the card string
    let rank, suit;
    if (card.length === 2) {
      rank = card.charAt(0).toLowerCase();
      suit = card.charAt(1).toLowerCase();
    } else {
      rank = card.substring(0, 2).toLowerCase();
      suit = card.charAt(2).toLowerCase();
    }

    // Validate the rank and suit
    if (!validRanks.includes(rank) || !validSuits.includes(suit)) {
      return false;
    }

    // If the rank is 'a', 'j', 'q', or 'k', it's valid
    if (rank === 'a' || rank === 'j' || rank === 'q' || rank === 'k') {
      return true;
    }

    // Check if the rank is a number and lies between 1 and 10
    if (!isNaN(rank) && parseInt(rank) >= 1 && parseInt(rank) <= 10) {
      return true;
    }

    return false;
  }

export function antiFaro(deck, type) {
    const firstHalf = [];
    const secondHalf = [];
    const deckLength = deck.length;

    for (let i = 0; i < deckLength - 1; i += 2) {
        const firstCard = type === FARO_OUT ? deck[i] : deck[i + 1];
        const secondCard = type === FARO_OUT ? deck[i + 1] : deck[i];
        firstHalf.push(firstCard);
        secondHalf.push(secondCard);
    }
    if (deckLength % 2 !== 0) {
        if (type === FARO_OUT) firstHalf.push(deck[deckLength - 1]);
        else secondHalf.push(deck[deckLength - 1]);
    }

    let shuffledDeck = firstHalf.concat(secondHalf);

    return shuffledDeck;
}

export function milkShuffle(deck) {
    const shuffledDeck = [];
    const deckLength = deck.length;

    for (let i = 0; i < deckLength - 1; i += 2) {
        shuffledDeck.unshift(deck.pop());
        shuffledDeck.unshift(deck.shift());
    }
    if (deckLength % 2 !== 0) shuffledDeck.unshift(deck[0]);

    return shuffledDeck;

}