//Functions

//Declaration
function hello (){
    console.log("Hello there!!");
    console.log("Hello World!!");
    console.log("Hello Juventus!!");
    console.log("Hello Cr7!!");
}
//Invoke the function
hello();
console.log("*****************");
//Return something
function add (){
    let xSum = 2+2;
    return xSum;
}
console.log(add());//The output is 4 because xSum = 2 + 2;
console.log("*****************");
//Parameters
function par (x,y){
    let sum = x * y;
    return sum;
}
console.log(par(5,5));//output is 25 because we put parameters 5,5 = 5 * 5
console.log("*****************");
//Expression
let result = par(10,10);//the result is 100 , we declare a new variable and we call the function par
console.log(result);
console.log("*****************");
let division = function divide(x,y) { //we declare a new variable which take a new function and the result is 10...
    let div = x/y;
    return div;
}
console.log(division(50,5));