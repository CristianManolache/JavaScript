//Repeatedly run a block of code while certain condition is true!
//While Loop

let amount = 10;
console.log(amount);

while(amount > 0) { //infinite loop
    console.log("I have " + amount + " dollars and i'm going to the mall");
    amount--;
}
console.log("**************************");
//Do while loop
let money = 0;
//money = 12 - uncheck to see the diference between the while and do while.

do{ //run at least one more time
    console.log("You have " + money + " and you are going to the mall");
    money++;
}while(money < 10)
console.log("**************************");
//For loop

let i;

for(i = 0; i <= 10; i++) {
    console.log("And the number is: " + i);
}
console.log("**************************");

let fruitsA = ["Milk","Sausages","Honey","Salt","Bread","Olive EVO","Cream","Nuts","Parma"];
let totalItems = fruitsA.length + 1;

for(i = 0; i < fruitsA.length; i++) {
    console.log("The item's are: " + fruitsA[i]);
}
console.log("Total item's in basket are: " + totalItems);