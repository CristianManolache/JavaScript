//Conditional

if(2 >1) {
    console.log("I am math genius")
}
console.log("*******************");
let x = 9;
let y = 10;

if(x >= y) {
    console.log("X is greater than Y or equal");
}else {
    console.log("X is smaller than Y");
}
console.log("*******************");
let i = 50;
let u = 50;

if (i==u) {
    console.log("Numbers are equal");
}
console.log("*******************");
i = 20;
u = 80;

if (i!=u) {
    console.log("Numbers are not equal");
}else {
    console.log("Numbers are equal");
}
console.log("*******************");

i = 8;
u = "8";

if(i===u) {
    console.log("Numbers are equal");
}else {
    console.log("Numbers are not equal");
}
console.log("*******************");
//Names
let person1 = "Cristiano";
let person2 = "Alexandru";

let person = "Cristian";

if(person === "Cristiano"){
    console.log("This dude is Cristiano");
}else if(person === "Alexandru") {
    console.log("This dude is Alexandru");
}else {
    console.log("I don't know who is this dude");
}