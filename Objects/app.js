//Object

let person = {
    name: "Cristian Laurentiu",
    lastName: "Manolache",
    city: "Ploiesti",
    age: 24,
    isAlive: true,
    education: false,
    siblings:["sister","brother"],
    fiance: true,
    fullName: function (){
        console.log("And the full name of the person is: " + person.name + " " + person.lastName);
    }
}

let personName = person.name;
console.log(personName);
let personLastName = person.lastName;
console.log(personLastName);
person.fullName();