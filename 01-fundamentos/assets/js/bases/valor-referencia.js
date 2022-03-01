let a = 10;
let b = a;

//Primitivos mandamos por valor
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = {...juan }; //Forma de romper la referencia y pasar el objeto por valor, es como crear una copia

ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ({...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });



//Arreglos
const frutas = ['Manzana', 'Pera', 'Pina'];

const otrasFrutas = [...frutas];
//const otrasFrutas = frutas.slice(); //otra forma

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });