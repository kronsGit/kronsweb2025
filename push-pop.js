//Methods that modify the origianl array (Mutability)

//push()

const countries = ['USA','Canada','Mexico','UK'];
const newCountries = countries.push('Germany','Brazil');

console.log(countries);
console.log(newCountries);

//pop()
const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry);