function saludar(nombre) {
    //console.log(arguments);
    //console.log('Hola ' + nombre);
    //return 1;
    return [1, 2, 3, 4, 5];
    //Despues del return no se ejecuta codigo
}

//Funcion anonima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

//Funciones de flecha o lambd functions
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola flecha ' + nombre);
}


const retornoDeSaludar = saludar('Daniel', 49, true, 'Costa Rica');
console.log({ retornoDeSaludar });
//saludar2('Daniel C');

saludarFlecha();

saludarFlecha2('Daniel');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

//Cuando lo unico que se hace es el return entonces se pueden quitar las llaves
const sumar3 = (a, b) => a + b;

console.log(sumar(1, 2));

console.log(sumar2(1, 4));

console.log(sumar3(9, 7));

console.log(getAleatorio());

console.log(getAleatorio2());