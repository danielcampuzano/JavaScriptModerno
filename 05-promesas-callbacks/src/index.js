//import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
//import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';

//promesaLenta.then( mensaje => console.log(mensaje) );
//promesaMedia.then( mensaje => console.log(mensaje) );
//promesaRapida.then( mensaje => console.log(mensaje) );

//Promise.race([promesaLenta, promesaMedia, promesaRapida])
//    .then( mensaje => console.log(mensaje) );


//buscarHeroe('capi2')
    //.then(heroe => console.log(heroe))
    //.catch(console.warn);

//buscarHeroeAsync('iron')
    //.then(heroe => console.log(heroe))
    //.catch(console.warn);

//const heroes = obtenerHeroesArr().then( (heroesArr) => console.table(heroesArr) );

//console.time('await');

//obtenerHeroeAwait('capi2')
//    .then(heroe => {

//        console.log(heroe);

//        console.timeEnd('await');

//    }).catch(err => console.warn(err));

//heroesCiclo();

heroeIfAwait('iron');






