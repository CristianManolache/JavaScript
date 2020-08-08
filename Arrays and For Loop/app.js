//

let friends = ["bob","john","cristian","eddy","olga"];

for(let i = 0; i < friends.length; i++) {
    console.log(`Your friend number ${i+1} is ${friends[i]}`);
}
console.log("*******************************************************");
for(let i = friends.length -1; i >= 0; i--) {
    console.log(`Your friend number ${i+1} is ${friends[i]}`);
}