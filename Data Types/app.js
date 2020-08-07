//Data Types 

//String
let text = "This is a string";
console.log(text);
console.log(typeof text);
console.log("**********************");
//Number
let value = 1996;
console.log(value)
console.log(typeof value);
console.log("**********************");
//Boolean
let isHuman = true;
let isMarried = false;
console.log(isHuman);
console.log(typeof isHuman);
console.log(isMarried);
console.log("**********************");
//Null
let x = null;
console.log(x);
console.log(typeof x);
console.log("In reality NULL is not a object but is a BUG , check on google why");
console.log("**********************");
//undefined
let name;
console.log(typeof name);
console.log("**********************");
//Symbol(ES6)
/* Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.*/
//Factory function
const symbol = Symbol('description');
console.log(symbol);
console.log(typeof symbol);
const directions = {  UP   : Symbol( "UP" ),  DOWN : Symbol( "DOWN" ),  LEFT : Symbol( "LEFT" ),  RIGHT: Symbol( "RIGHT" )};
console.log(directions);
console.log(typeof directions);
console.log("**********************");
//Arrays
let fruits = ["apple","orange","banana"];
console.log(fruits)
console.log(typeof fruits);
console.log("**********************");
//Function
let code = function code() {
    console.log("This is a function!!");
}
console.log(code);
console.log(typeof code);
console.log("**********************");
//Objects
let person = {
    firstName: "Cristian",
    lastName: "Manolache"
}
console.log(person);
console.log(typeof person);
console.log("**********************");
