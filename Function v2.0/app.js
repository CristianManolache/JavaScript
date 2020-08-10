//Javascript functions are higher order functions
//Pass a function as a argument,return function from function


//setInterval(sayHello,2000);

function sayHello(){
    alert("Set interval is running");

}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(isEven);

function isEven(singleNUmber){
    return singleNUmber % 2 === 0;
}

console.log(even);