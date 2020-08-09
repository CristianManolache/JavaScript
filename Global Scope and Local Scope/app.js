//Any variable outside code block is said to have GLOBAL SCOPE!!!!
//Can be access anywhere in the program
//IT IS NOT A GOOD PRACTISE !!!!!!!

let sayHi = "Hello my friend"; //global variable

function getGreeting(){
    console.log(sayHi);
}
getGreeting();
console.log("********************");
if(5>2){
    console.log(sayHi);
}

console.log("***************LOCAL VARIABLE EXAMPLE***********");
//LocalScope

let sayHI = "Hello my friend";//Global variable

function getGreeting2() {
    //sayHI = "Cristiano Ronaldo is HERE!";
    let sayHI = "Hello local scope"; //It's only available inside this function code block and can only be modified inside the function
    console.log(sayHI);
}
getGreeting2();
console.log("*****************************************");
if(10>2){
    let sayHI = "Hello local scope if statment"; //It's only available inside this function code block and can only modified inside
    //sayHI = "10 is bigger than 2";
    console.log(sayHI);
}
