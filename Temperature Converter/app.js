//Celcius = (Fahr-32)* 5/9
//Fahrenheit = Celcius *9/5 +32

function toFahrenheit(temp){
    let fahr = temp * 9/5 +32;
    console.log(`${temp} degress in C is ${fahr} degrees in F`);
}

toFahrenheit(40);

function toCelsius(temp){
    let celc = ((temp -32) * 5/9).toFixed(1);
    console.log(`${temp} degress in F is ${celc} degrees in C`);
}

toCelsius(105.);