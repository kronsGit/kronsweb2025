/* 1. Copying an Array*/

const originalArray = [10,20,30,40,50];
const copyArray = [...originalArray];

console.log(`Copying An Array`);
console.log(originalArray);
console.log(copyArray);

/* 2. Combining an Array*/

const array1 = [1,2,3];
const array2 = [10,20,30];
const combineArray = [...array1,...array2];

console.log(`Combining An Array`);
console.log(array1);
console.log(array2);
console.log(combineArray);


/* 3. Creating Arrays with Additional Elements*/

const baseArray = [12,34,45];
const arrayWAdditionalEle = [...baseArray,20,40,70];

console.log(`Additional Elements An Array`);
console.log(baseArray);
console.log((arrayWAdditionalEle));


/* 4. Pass elements to functions*/

function sum(a,b,c){
    return a+b+c;
}
const numbers = [10,40,50];
const result = sum(...numbers); //Usando spread para pasar los valores de los parametros

console.log(`Using spread to functions`);
console.log(result);

