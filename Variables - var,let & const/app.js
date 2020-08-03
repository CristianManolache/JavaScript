//var, let, const


var name = 'Cristian Manolache';
console.log(name);
name = 'Alexandru Job'; //reasign variable
console.log(name);

// Init var

var greeting;
console.log(greeting); // output undefined
greeting = 'Hello World';
console.log(greeting);

// can include letters, numbers, _, $
// can not start with number: var 1name = 'alex'; --syntax error

var $name = 'Alex'; //Jquery
var _name = 'Cristian' //Global for private variables\

// Multi word vars

var firstName = 'Cristian'; // Camel case (we use this in JS)
var first_name = 'Sara'; // Underscore (php most)
var FirstName = 'Alex'; // Pascal case (function objected oriented program)
var firstname;

// LET => is the same like var

let nameLet = 'Alexandu Manolache';
console.log(nameLet);

// CONST

const nameConst = 'John';
console.log(nameConst);
//Can not reassign => nameConst = 'Alex';
// Have to assign a value !!! const greetings; => SyntaxError!!!

const person = { // object
    name: 'John',
    age: 24
}
person.name = 'Cristian'; // we can mutating the const Object


console.log(person);

const number = [1,2,3,4,5,6]; //Array or Object can mutate!
number.push(7);
console.log(number);

//Important ! choose accurately the variables! 