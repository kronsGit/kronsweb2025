//map()

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(num => num * num);

console.log(numbers);
console.log(squareNumbers);

//forEach()
const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

//Fahrenheit to Celsius conversion

const temperatureInFahrenheit = [16,32, 68, 95, 104, 212];
const temperatureInCelsius = temperatureInFahrenheit.map(fahrenheit => (5/9)*(fahrenheit-32));

console.log('Temperatures In Fahrenheit: ',temperatureInFahrenheit);
console.log('Temperatures In Celsius:',temperatureInCelsius);

//Summing all numbers in an array

const numbersToSum = [1, 2, 3, 4, 5];
let sum = 0;
numbersToSum.forEach(num => sum += num);

console.log('Array of numbers:', numbersToSum);
console.log('Sum of numbers:', sum);