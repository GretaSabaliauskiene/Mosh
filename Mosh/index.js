// Logical and(&&) operator retur TRUE if both operants are TRUE
// Logical OR(||) returns TRUE if one of the operants are true

//Hour
//If it is between 6 morning and 12 morning: Good morning!
//If it is between 12 afternoon and 6 afternoon: Good afternoon!
// Otherwise : Good evening!

let hour = 12;

if(hour >=6 && hour < 12){
    console.log('Good morning!');
}
else if(hour>=12 && hour < 18){
    console.log('Good afternoon!');
}
else{
    console.log('Good evening!');
}