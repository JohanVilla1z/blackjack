/**
 * 2C = two of cloves
 * 2D = two of diamonds
 * 2H = two of hearts
 * 2S = two of spades
 */

let deck = []; // Baraja
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['J', 'Q', 'K', 'A'];

const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;

};

crearDeck();

//esta funcion me permite tomar una carta

const pedirCarta = () => {

    (deck.length === 0) ? console.log( 'No hay cartas en el deck' ) : console.log('');

    const carta = deck.pop();
    return (carta);

};

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? ((valor ==='A')? 11 : 10 ): valor * 1;

};

const carta = pedirCarta();
console.log({carta}, valorCarta(carta));

//Eventos
