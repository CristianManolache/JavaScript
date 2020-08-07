//

let bool1 = true;
let bool2 = false;

console.log(typeof bool1);
console.log(typeof bool2);

console.log("*******************");

let val = 2 < 5;
console.log(typeof val);

let result = true;
if(result){
    console.log("another boolean");
}
console.log("*******************");

let text = "just a text"; //text is converted in true boolean value
if(text){
    console.log("how this is possible");
}
console.log("*******************");

let falsy = 0;
if(falsy) {
    console.log("Runs only if true");
}else {
    console.log("turn out to be false");
}