//filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('Filter');
console.log(numbers);
console.log(evenNumbers);

//reduce-1

const numbersRedu = [10,20,30,40,50];
const sum = numbersRedu.reduce((accumulator,currentValue) => accumulator + currentValue,0);
console.log('Reduce - 1');
console.log('Numneros: ',numbersRedu);
console.log('Suma: ',sum);

//reduce-2

const words = ['hello', 'world', 'this', 'is','is', 'a', 'test','test','test'];

const wordsFrecuency = words.reduce((accumulator,currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++;
    } else{
        accumulator[currentValue] = 1;
    } 
    return accumulator;
},{});

console.log('Reduce - 2');
console.log(wordsFrecuency)