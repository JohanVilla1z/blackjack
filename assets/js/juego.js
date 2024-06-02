
(() => {
    
    'use strict'
    // Tipos de cartas para definir la baraja
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['J', 'Q', 'K', 'A'];
          
    let deck = [], // Baraja
        puntosJugador = 0,
        puntosComputadora = 0;
        
    //Rerferencias HTML
    const puntos = document.querySelectorAll('small'),                              //puntos de jugador y computadora
          btnPedir = document.querySelector('#btnPedir'),                           //boton pedir carta
          btnNombre = document.querySelector('#btnNombre'),                           //boton pedir carta
          btnDetener = document.querySelector('#btnDetener'),                       //boton detener
          btnNuevoJuego = document.querySelector('#btnNuevo'),                      //Nuevo juego
          divNombreJugador = document.querySelector('#nombre'),       //TODO              //Nombre Jugador
          divCartasJugador = document.querySelector('#jugador-cartas'),             //cartas jugador
          divCartasComputadora = document.querySelector('#computadora-cartas');     //cartas computadora

    const CartaInicial = document.createElement('img'),
            CartaInicial2 = document.createElement('img');
            CartaInicial.src = `assets/cartas/red_back.png`;
            CartaInicial2.src = `assets/cartas/grey_back.png`;
            CartaInicial.classList.add('carta-inicial');
            CartaInicial2.classList.add('carta-inicial');
            divCartasJugador.append(CartaInicial);
            divCartasComputadora.append(CartaInicial2);
            divNombreJugador.innerText = 'Jugador';

    const crearDeck = () => {
        deck
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
        return _.shuffle(deck);
    };

    deck = crearDeck();

    //esta funcion me permite tomar una carta

    const pedirCarta = () => {
        console.log({deck});
        return (deck.pop());
    };

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : valor * 1;

    };

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        divCartasComputadora.innerHTML = '';
        do {
            const carta = pedirCarta();

            puntosComputadora += valorCarta(carta);
            puntos[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        //evaluacion del ganador
        setTimeout(() => {

            if (puntosComputadora === puntosJugador) {
                alert('Nadie gana');
            } else if (puntosJugador > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else { alert('Computadora gana'); }

        }, 200);

    };
    //Eventos
    btnNombre.addEventListener('click', () => {
        let nombre = prompt('Ingrese su nombre');
        nombre= (nombre)?nombre:'Jugador';
        divNombreJugador.innerText = nombre;
        btnNombre.disabled = true;

    });

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        console.log({ carta }, valorCarta(carta));                      //TODO Borrar
        puntosJugador += valorCarta(carta);
        puntos[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);
        
        setTimeout(() => {
            CartaInicial.remove();
        }, 80);

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21, genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevoJuego.addEventListener('click', () => {
        deck = [];
        deck = crearDeck();
        puntosJugador = 0;
        puntosComputadora = 0;
        puntos[0].innerText = 0;
        puntos[1].innerText = 0;
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        btnPedir.disabled = false;
        btnNombre.disabled = false;
        btnDetener.disabled = false;
        divCartasJugador.append(CartaInicial);
        divCartasComputadora.append(CartaInicial2);

    });
})();
