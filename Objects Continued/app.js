/*Everything in JavaScript is either
one of six primitive data types or an object.
Objects are key value pairs.
If a property is a function it is called a method.
*/

//Object literals
const person = {};
//Construction function
const secondPerson = new Object();
//Add property
person.name = 'Cristian';
console.log(person);
//Access property
console.log(person.name);
//Modify property
person.name = "Alex";
//Access property
console.log(person["name"]);
//Assign value
let lastName = person.lastName;
console.log(lastName);
//Check if exists
let check = "lastName" in person;
console.log(check);
//Check with undefined
if(person.lastName === undefined){

}
//Delete property
delete person.name;
console.log(person);
//Create object
const human = {
    name: "Cristian",
    nickName: "Ronaldo",
    height: 1.98,
    weight: 100,
    married: true,
    education: false,
    friends: ["Cristian","Roberto"],
    sign(){
        return `I'm singing in shower`
    }
}
let song = human.sign();
console.log(song);
//Iterate

for(const key in human){
    console.log(`${key} : ${human[key]}`);
}
//nested objects

const people = {
    person1: {name:"Alex",age:24},
    person2: {name:"Fergurson",age:100}
}

//Objects as parameters
function hello({greet,name}){
    return `${greet}!!!!!!!${name}`
}

let greetPerson = hello({name:"Cristian",greet:"Hello there......."});

console.log(greetPerson);