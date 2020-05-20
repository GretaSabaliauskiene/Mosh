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

//FOR-OF used with arrays and maps
/*const colors = ['green','yellow','black'];

for(let color of colors)
console.log(color);
*/
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


// STRING

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
