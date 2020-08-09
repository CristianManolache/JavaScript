//quarters 25 cent 
//dime 10 cents
//nickel 5 cents
//penny 1 cent


function returnChange(amount) {
    let quarters = Math.floor(amount / 25);
    console.log(`There are ${quarters} quarters in your change`);
    amount = amount % 25;
    console.log(`And your change is: ${amount} cents`);
    console.log("*************************************************");
    let dime = Math.floor(amount / 10);
    console.log(`There are ${dime} dimes in your change`);
    amount = amount % 10;
    console.log(`And your change is: ${amount} cents`);
    console.log("***************************************************");
    let nickel = Math.floor(amount / 5);
    console.log(`There are ${nickel} nickels in your change`);
    amount = amount % 5;
    console.log(`And your change is: ${amount} cents`);
    console.log("***************************************************");
    let penny = Math.floor(amount / 1);
    console.log(`There are ${penny} pennies in your change`);

}

returnChange(99);