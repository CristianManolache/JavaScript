//Global Const

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let seconds = date.getSeconds();


console.log(`Month is: ${months[month]} and the day is: ${days[day]}`);


//For more info go on google <3
