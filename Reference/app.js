//Primitive

let number = 1;
let number2 = number;
number2 = 4;

console.log("The first values is " + number);
console.log("The second value is " + number2);

//Object are not primitive data types in JavaScript
console.log("*****************************");
let person = {name: "Cristian"};
let person2 = person;

person2.name = "Bob";//Assigning non-primitive value to variable is done by reference
//so any changes will affect all the references

console.log("The name of the first person: " + person.name);
console.log("The name of the second person: " + person2.name);
