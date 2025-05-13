/*
slide(): Crea una copia superficial (shadow copy) de una porcion del array, especificada por indices de inicio y fin (fin no incluido), no modifica el array original
*/

const animals = ['ant','bison','snake','camel','duck','elephant'];

console.log(animals);
console.log(animals.slice(3));//Crea un array copiando del array de la posicion 4-6
console.log(animals.slice(1,5)); // Crea un arrar copiando desde la posicion 1-5
console.log(animals.slice(-2)); //Crea un array copiando los dos ultimos elementos