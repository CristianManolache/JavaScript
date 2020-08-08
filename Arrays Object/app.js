//Array are list of values
//Objects are collection of values

let names = ["cristian","alika","ramutzi","gianina"];

//length
let result = names.length;
console.log("The length of the arrays is: " + result);
console.log(names[3]);
console.log(names[names.length-1]);
//reverse
console.log("******************");
//console.log(names.reverse());
console.log("******************");
let lastNames = ["pepper","salt","olives"];
console.log(names.concat(lastNames));

//unshift
console.log(names.unshift("cristiano"));
console.log(names);
console.log("******************");

//shift -remove first
console.log(names.shift());
console.log(names);
console.log("******************");

//push adding at the end of
console.log(names.push("Hello JavaScript"));
console.log(names);
console.log("******************");

//pop -remove last item
console.log(names.pop());
console.log(names);
console.log("******************");

//splice
console.log(names.splice(0,1));
console.log(names); //removed cristian
console.log("******************");
//sort
console.log(names.sort());
console.log(names);
