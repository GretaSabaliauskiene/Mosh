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

// string properties should display all the properties of this object that are of type string

const movie = {
    title: 'a',
    realeaseYear: 2020,
    director: 'b'
};

showNumbers(movie);

function showProperties(obj){

}