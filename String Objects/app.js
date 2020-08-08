//String is actually a object!

let human = "Cristiano Ronaldo";
let length = human.length;

console.log(length); //output 17 witch is characters

console.log(human.toLocaleLowerCase());
console.log(human.toLocaleUpperCase());
console.log("************");
console.log(human.charAt(5));
console.log(human.charAt(9));//watch out at position 9 in the index is a space so the output in console is blank
console.log(human.charAt(human.length-1)); //last char of the string index position
console.log("************");
console.log(human.indexOf("l")); //output of the index is 14
console.log("************");
console.log(human.toLowerCase().startsWith("cris")); //output return true of false value
console.log(human.toLowerCase().endsWith("ldo")); //output return true of false value
console.log("************");
console.log(human.slice(0,5)); //slice from starting position of the index which is 0.
console.log("************");
console.log(human.includes("zzz")); //return true of false