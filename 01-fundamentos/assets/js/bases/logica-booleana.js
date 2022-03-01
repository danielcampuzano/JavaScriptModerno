//Asignaciones con logica booleana

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150; //toma el ultimo valor mientras los anteriores sean verdaderos
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || true || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });