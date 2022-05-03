//Pequeña base de datos
//Muy comun a la estructura cuando se trabaja con mongo, firebase, etc
const heroes = {
    capi: {
        nombre: 'Capitan América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    },

}

// callback retorna...
export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if( heroe ) {
        callback(null, heroe);
    }else{
        //Un error
        callback(`No existe un héroe con el id ${ id }`);
    }

    //callback(heroe);

}