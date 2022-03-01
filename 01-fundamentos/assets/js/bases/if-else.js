let a = 10;

if (a >= 10) { //undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay(); // 0 domingo, 1 lunes, 2 martes .......

console.log({ dia });

if (dia === 0) {
    console.log('Es Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo ...')
}

//Sin usar if o else imprimir los días de la semana
//Solo objetos

dia = 10; //0:domingo, 1: lunes

const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const diasLetras2 = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

console.log(diaLetras[dia] || 'Dia no valido');