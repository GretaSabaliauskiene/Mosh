// Logical and(&&) operator retur TRUE if both operants are TRUE
// Logical OR(||) returns TRUE if one of the operants are true

//Hour
//If it is between 6 morning and 12 morning: Good morning!
//If it is between 12 afternoon and 6 afternoon: Good afternoon!
// Otherwise : Good evening!

let hour = 12;

if(hour >=6 && hour < 12)
    console.log('Good morning!');
else if(hour>=12 && hour < 18)
    console.log('Good afternoon!');

else{
    console.log('Good evening!');
}
//LOOP
for(let i = 0; i<5; i++){
    if(i % 2 !==0 ) console.log(i);
}
//WHILE LOOP
let i = 0;
while(i < 5){
    if(i % 2 !==0 ) console.log(i);
    i++
}
//FOR-IN
const person={
    name: 'Greta',
    age: 26,
}
for(let key in person)
    console.log(key,person[key]);
    
const colors = ['green','yellow','black'];
for(let index in colors)
console.log(index,colors[index]);

// FOR-OF used with arrays and maps
const colors1 = ['green','yellow','black'];

for(let color of colors1)
console.log(color);

//BREAK OR CONTINUE
let l = 0;
while (l <= 10) {
    //if (l === 5) break;
    if(l % 2 === 0) {
        l++;
        continue;
    }

    console.log(l);
    l++
}

// OBJECT - ORIENTED PROGRAMMING (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');   
    }
};

circle.draw();// Method

// FACTORY FUNCTIONS. Camel notation : oneTwoThree
            // ABI BEVEIK VIENODOS,GALIU NAUDOTI KURI PATOGESNE

function createCircle(radius,) {
    return {
        radius,
        draw(){
            console.log('draw');  
        }  
    };
}
const circle3 = createCircle(1);
console.log(circle3);

// CONSTRUCTOR FUNCTIONS. Pascal Notation : OneTwoThree

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1); 

// DYNAMIC NATURE OF OBJECTS 

const circle4 = {
    radius:1
};

circle4.color = "yellow";
circle4.draw = function(){}

delete circle4.color;
 
console.log(circle4);

// CONSTRUCTOR PROPERTY

circle4.constructor 

// value types: number,string,boolean,symbol,undefined, null
// referene types: object, function, array
//primitives are copied by their value, objects are copied by their referance


// ENUMERATING PROPERTIES OF AN OBJECT

const circle5 = {
    radius: 1,
    draw(){
        console.log('draw'); 
    }
};

for(let key in circle5)
console.log(key,circle5[key]);

for(let key of Object.keys(circle5))
console.log(key);

for(let entry of Object.entries(circle5))
console.log(entry);

if('radius' in circle5) console.log('yes');

// CLONING AN OBJECT

const circle6 = {
    radius: 1,
    draw(){
        console.log('draw'); 
    }
};

/*const another1 = {};
for(let key in circle6)
another1[key] = circle6[key];
;*/

//const another1 = Object.assign({}, circle6)
//console.log(another1);

const another1 = {... circle6};
console.log(another1);


// ARRAYS

// STRING PRIMATIVE

const message = 
`This is my 
first message`;

console.log(message);


// STRING OBJECT

const another2 = new String('hi');

// DATE

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

console.log(now);

// FINFING ELEMENTS IN ARRAY (PRIMITIVES)

let numbers = [1, 2, 3, 1, 4, 5];

console.log(numbers.indexOf('a'));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1 );
console.log(numbers.includes(1));

// FINFING REFERENCE TYPES IR ARRAYS

let courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

let course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);

let courses1 = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

let course1 = courses1.findIndex(function(course1) {
    return course1.name === 'a';
});

console.log(course1);

// REMOVING ELEMETS

let numers = [1, 2, 3, 4];
// add to the end 
numbers.push();
// remove numbers.pop()


// add to the beginning
numbers.unshift();
// remove 
numbers.shift();


// add to the middle
numbers.slice();
// remove 
numbers.splice(2, 1);

// EMTYING AN ARRAY

let numbers2 = [1, 2, 3, 4];

// solution 1 
numbers2 = [];
//solution 2
numbers2.length = 0;


// OMBINING AND SLICING ARRAYS

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];

first.concat(second);

let slice = second.slice(1, 2);

// SPREAD OPERATOR 

let combined = [...first, ...second];

// if we want to add element in between arrays 

let combined1 = [...first, 'a', ...second];

// ITERATING AN ARRAY 

let numbers5 = [1, 2, 3, 4];

for (let number of numbers5);

numbers.forEach((number, index) =>console.log(index, number)); //shows index and element

// JOINING ARRAYS

let numbers1 = [1, 2, 3, 4];
let joined  = numbers1.join(',');
console.log(joined);


let message1 = 'this is my first message';
let parts = message1.split(' ');
console.log(parts);

let combined2 = parts.join('-');
console.log(combined2);



// SORTING ARRAYS

let numbers9 = [2, 3, 1];

numbers9.sort();
console.log(numbers9);

numbers9.reverse();
console.log(numbers9);


let courses5 = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'Javascript'},
]

courses5.sort(function(a, b) {
    if(a.name < b.name ) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(courses5);


// TESTING THE ELEMENTS OF AN ARRAY

let numbers8 = [2, -1, 3, 1];
// finds if all elements are positive
let allPositive = numbers8.every(function(value){
    return value >= 0;
});
console.log(allPositive);


// finds if at leats one element is posotove
let somePositive = numbers8.some(function(value){
    return value >= 0;
});
console.log(somePositive);


// FILTERING AN ARRAY 

let numbersA = [1, -1, 3, -5];

let filteredArr = numbersA.filter(function(value){  //returns filtered array without negative numbers
    return value >= 0;
});
console.log(filteredArr);


// same with arrow function:

let filteredArray = numbersA.filter(value => value >= 0 );


// MAPPING AN ARRAY

let itemsF = filteredArray.map(value => '<li>' + value + '<li>')
let html = '<ul>' + itemsF.join('') + '<ul>';

console.log(html);

// mapping numbers in array to obj

let itemsO = filteredArr.map( value => {
    return { value : value };
})

console.log(itemsO);

// chaining multiple methods

let itemsNew = numbersA
    .filter(value => value >=0)
    .map(value => ({ value:value }))
    .filter( obj => obj.value > 1)
    .map( obj => obj.value );

    console.log(itemsNew);
    
// REDUCING AN ARRAY 

let numbersQ = [1, -1, 2, 3];

let sumQ = 0;
for( let n of numbersQ )
sumQ += n;

console.log(sumQ);

// reduce method has two arguments. the first argument is a callback function and the second is the initial value of the accumilator
let sumW = numbersQ.reduce(( accumilator, currentValue ) => {
    return accumilator + currentValue;
}, 0);

console.log(sumW);

