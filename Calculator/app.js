function calculateTip(amount,tip) {
    let percent = (tip/100)
    let tipAmount = amount * percent;
    let totalAmount = amount + tipAmount;

    if(tip <= 5){
        console.log("You have to do better than that." + "\n" + tip + "% percent is verylow");
        console.log("You left a tip of " + tipAmount + " $");
        console.log("Your total amount is " + totalAmount + " $");
    }else if(tip >= 20){
        console.log("You are very generous." + "\n" + tip + " % percent is veryhigh");
        console.log("You left a tip of " + tipAmount + " $");
        console.log("Your total amount is " + totalAmount + " $");
    }else{
        console.log("You left a good tip." + "\n" + tip + " % percent is good");
        console.log("You left a tip of " + tipAmount + " $");
        console.log("Your total amount is " + totalAmount + " $");
    }




}
//Output
calculateTip(50,4);
console.log("*****************")
calculateTip(100,15);
console.log("*****************")
calculateTip(123,25);