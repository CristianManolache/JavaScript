//Logical operators && and ||
let day = "monday";
let money = 549;

if(day === "friday" || money > 50){
    console.log("You are going out");
}
else{
    console.log("Stay at home!");
}
console.log("**********************");

let money2 = 59;
let day2 = "monday";
if(day2 === "friday" && money2 > 50) {
    console.log("You are going out");
}else{
    console.log("You dont go out!");
}

//unary operator

let text = "string";
console.log(typeof text);

//binary operator

let number = 3;

//ternary operator
//condition (runs if true) : (runs if false)

let result = 9;

result % 2 === 0 ? console.log("even number") : console.log("odd number");

console.log("**********************");
let result2 = 10;
let expression = result2%2;

function response (text) {
    console.log(text + " number");
}

expression === 0 ? response("even") : response("odd");