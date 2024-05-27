import _ from 'underscore';

/**
 * 2C = two of cloves
 * 2D = two of diamonds
 * 2H = two of hearts
 * 2S = two of spades
 */

let deck = []; // Baraja
let tipos = ['C', 'D', 'H', 'S'];

const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        deck.push('J' + tipo);
        deck.push('Q' + tipo);
        deck.push('K' + tipo);
        deck.push('A' + tipo);
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

};

crearDeck();