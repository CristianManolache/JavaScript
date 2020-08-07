//

let dice = 3;

if(dice === 1) {
    console.log("You got one");
}else if(dice === 2) {
    console.log("You got two");
}else {
    console.log("You didn't roll the dice");
}

//Switch
let cube = 1;
switch(cube) {
    case 1:
        console.log("You got one");
    break;
    case 2:
        console.log("You got two");
    break;
    default:
        console.log("You didn't roll the dice");
}
console.log("**********************************");
//Example

function displayDayOfTheWeek(day){

    switch(day){
        case 1:
            console.log("Today is Monday");
        break;
        case 2:
            console.log("Today is Tuesday");
        break;
        case 3:
            console.log("Today is Wednesday");
        break;
        case 4:
            console.log("Today is Thursday");
        break;
        case 5:
            console.log("Today is Friday");
        break;
        case 6:
            console.log("Today is Saturday");
        break;
        case 7:
            console.log("Today is Sunday");
        break;
        default:
            console.log("It's not a day! INVALID DAY!");
    }
}

displayDayOfTheWeek(1);
displayDayOfTheWeek(2);
displayDayOfTheWeek(3);
displayDayOfTheWeek(4);
displayDayOfTheWeek(5);
displayDayOfTheWeek(6);
displayDayOfTheWeek(7);
/////////////////////////////
displayDayOfTheWeek(0);
displayDayOfTheWeek("1");

