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

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        
            if(heroe) {
                setTimeout(() => {
                    resolve(heroe);
                }, 1000);               
            }else{
                reject(`No existe un héroe con el id ${ id }`);
            }

    } );

}

//Es lo mismo que lo que hay arriba
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];
       
    if(heroe) {
        return heroe;
    }else{
        throw Error(`No existe un héroe con el id ${ id }`)
    }

}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
})

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
})

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
})

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}