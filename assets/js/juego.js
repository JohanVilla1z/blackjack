/**
 * 2C = two of cloves
 * 2D = two of diamonds
 * 2H = two of hearts
 * 2S = two of spades
 */

let deck = []; // Baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Rerferencias HTML
const btnPedir = document.querySelector('#btnPedir');  //boton pedir carta
const divCartasJugador = document.querySelector('#jugador-cartas'); //cartas jugador
const puntos = document.querySelectorAll('small'); //puntos de jugador y computadora


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

    (deck.length === 0) ? console.log('No hay cartas en el deck') : console.log('');

    const carta = deck.pop();
    return (carta);

};

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : valor * 1;

};

const carta = pedirCarta();
console.log({ carta }, valorCarta(carta));



//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    console.log({ carta }, valorCarta(carta));

    puntosJugador += valorCarta(carta);

    puntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    (puntosJugador > 21) ? btnPedir.disabled = true : null;

});


