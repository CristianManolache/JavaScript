//1 inch = 2.54cm
//1 foot === 12 inches

function toCm(feet,inches){
    if((feet < 0) || (inches < 0)){
        alert("Invalid parameters");
        return;
    }
    let centimeters = (feet*12)*2.54;
    centimeters += inches *2.54;

    console.log(`${feet} feet and ${inches} inches is = ${centimeters.toFixed(2)} cm`);
    return centimeters.toFixed(2);
}

toCm(12,2);