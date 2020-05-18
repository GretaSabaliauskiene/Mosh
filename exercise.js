// Function that takes two numbers and returns the maximum of the two.

let number = max(7, 8);
console.log(number);

function max(a,b){
    return (a > b) ? a : b;
}

// Function isLandscape true if the image is landscape (width>height), if not return false

let landscape = isLandscape(1,90);
console.log(landscape);

function isLandscape(width,height){
    return (width > height);
}

/// FizzBuzz 
// Divisable by 3 => Fizz
// Divisable by 5 => Buzz
// Divisable by both 3 and 5 => FizzBuzz
// Not a number  => 'Not a number'
    
let fizz = FizzBuzz(true)
console.log(fizz);

function FizzBuzz(input){
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 3 === 0)) return 'FizzBuzz'; 
    if (input % 3 === 0)  return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    
    return input;
}

// showNumbers

showNumbers(10);

function showNumbers(limit){
    for(i=0; i<=limit; i++){
        let message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
        
    }
}
// countTruthy takes an array and returs a number or thruthy elements in array

let array =  [0, null, undefined, '', 898, 54, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
        count++;
    return count;
}

// showProperties

const movie = {
    title: 'a',
    releaseYear: 2018,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for(let words in obj)
    if(typeof obj[words] === 'string')
    console.log(words,obj[words] )
}

// sum 

console.log(sum(10));

function sum(limit) {
    let suma = 0;

    for(let i=0; i<=limit; i++)
        if((i % 3 === 0) || (i % 5 === 0))
            suma += i;
    
    return suma;
}

// grade of a student

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
  
        if(average <= 59) return 'F'
        if(average < 70) return 'D'
        if(average < 80 ) return 'C'
        if(average < 90) return 'B'
         return 'A';    
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum += value;
    return  sum / array.length;
}
 
// showStars

showStars(9);

function showStars(rows) {
    let stars = '';
for(let i=1; i<=rows; i++)
    console.log(stars += '*');
}

// showPrimes

showPrimes(20);

function showPrimes(limit) {
for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
   for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;  
        
    return true;
}

// create an adress object with three properties : street, city and zipcode
// after that create a function called showAddress(adress) that displays all the properties of this object
// along with their value

let adress = {
    street: 'Igulos g.',
    city: 'Kaunas',
    zipcode: 123456
}

function showAddress(adress){
for(let key in adress)
console.log(key, adress[key]);
}
  
showAddress(adress);

// FACTORY AND CONSTRUCTOR FUNCTION
// initialize an adress object, first using a factory function and then using constructor function.

function factoryFunction(street, city, zipcode) {
    return{
    street,
    city,
    zipcode
    }
}

let adress1 = factoryFunction('a', 'b', 'c');
console.log(adress1);


function ConstructorFunction(street, city, zipcode) {
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

let adress2= new ConstructorFunction('e', 'f', 4 )
console.log(adress2);

// OBJECT EQUALITY
// create two functions. One is called areEqual(addeess1, address2) and to check if these two objects are equal
// in order to see if if they are equal we need to check their properties, we need to see if properties are equal
// return true if equal, otherwise return false. Second function areSame(address1,address2) it tells if adress 1 and address 2
// are pointed in  the exact same object 

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(adress1,address2));
console.log(areSame(adress1,address2));

function ConstructorFunction(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) { 
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipcode === address2.zipcode;
}

function areSame(address1, address2) { 
    return adress1 === adress2;
}