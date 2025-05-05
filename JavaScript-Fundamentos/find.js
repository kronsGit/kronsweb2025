//Find()

const multiple0f5 = [5,10,15,20];
const firstNumberGreaterThan10 = multiple0f5.find(number => number >10);

console.log(multiple0f5);
console.log(firstNumberGreaterThan10);// Muestra el valor de lo que estoy filtrando

//FindIndex()

const randomNumber = [6,14,27,59,40];
const indexNumber = randomNumber.findIndex(number => number > 50);


console.log("Find Index");
console.log(randomNumber);
console.log(indexNumber); // Se esta mostrando el indice en donde se cumple la condicion que asignamos, en este caso mostrar el indice en donde se cumpla la condicion de ">50"