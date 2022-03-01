/**
 * 2C - 2 of Clubs (Treboles)
 * 2D - 2 of Diamonds (Diamantes)
 * 2H - 2 of Hearts (Corazones)
 * 2E - 2 of Spades (Treboles)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//Esta funcion crea un nuevo deck
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {

        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }

    for (let tipo of tipos) {

        for (let especial of especiales) {
            deck.push(especial + tipo);
        }

    }

    deck = _.shuffle(deck);

    console.log(deck);

    return deck;

}

crearDeck();


//Esta funcion me permite tomar una carte
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);

    return carta;
}

//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substr(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;

}

const valor = valorCarta(pedirCarta());
console.log(valor);