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