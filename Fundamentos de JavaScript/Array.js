//How to create an Array?

//1. new Array() or Array()

const fruits = Array('apple','banana','orange');
console.log(fruits);

const number = Array(1,2,3,4,5);
console.log(number);

//2.Array literal syntax

const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer','tennis','rugby'];
console.log(sports);

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient:'Milk', quantity: '1 cup'
    },
    false
];

console.log(recipeIngredients)

// Accessing array elements

const firstFruit = fruits[0];
console.log(firstFruit);

//Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits);

//Mutability

fruits.push('watermelon');
console.log(fruits);

//Immutability
const newFruits = fruits.concat(['grapes','kiwi']);
console.log(fruits);
console.log(newFruits);

//Checking array with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

//Practical example: sum all elements of an array.

const numbersArray = [1,2,3,10,5];

let sum = 0;

for(let i =0;i<numbersArray.length;i++){
    sum += numbersArray[i];
}

console.log(sum);